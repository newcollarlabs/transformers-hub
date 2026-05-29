import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";
import { GoogleGenAI } from "@google/genai";
import { SEED_BOTS, LORE_DETAILS } from "./src/constants";

// Load environment variables (.env)
dotenv.config();

// Load firebase config configuration safely
const configPath = path.join(process.cwd(), "firebase-applet-config.json");
if (!fs.existsSync(configPath)) {
  console.error("❌ Crucial firebase-applet-config.json not found! Ensure Firebase setup is provisioned.");
  process.exit(1);
}

const firebaseConfig = JSON.parse(fs.readFileSync(configPath, "utf8"));
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp, firebaseConfig.firestoreDatabaseId);
const auth = getAuth(firebaseApp);

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

function normalizeId(id: string): string {
  if (!id) return "";
  let result = id.toLowerCase().trim();
  if (result.startsWith("lore-")) {
    result = result.substring(5);
  }
  result = result.replace(/\s+/g, "-");
  return result;
}

// Download image and convert to elegant base64 Data URI
async function convertUrlToBase64(imageUrl: string): Promise<string> {
  const headers: Record<string, string> = {
    "User-Agent": "Mozilla/4.0 (Windows; U; Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "image/webp,image/apng,image/*,*/*"
  };

  const response = await fetch(imageUrl, { headers });
  if (!response.ok) {
    throw new Error(`Fetch failed: ${response.statusText} (${response.status})`);
  }

  const buffer = await response.arrayBuffer();
  const mimeType = response.headers.get("content-type") || "image/png";
  const base64 = Buffer.from(buffer).toString("base64");
  return `data:${mimeType};base64,${base64}`;
}

// Generate image using Gemini Models (Imagen or Flash-Image)
async function generateWithGemini(botId: string, promptText: string, faction: string): Promise<string> {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY environment config is empty!");
  }

  const factionStr = faction || "Autobot";
  const enhancedPrompt = promptText || `A G1 Transformers character named ${botId}, ${factionStr} faction, detailed kid-friendly animated action pose, vibrant Saturday morning cartoon digital illustration, vivid cel-shading, bold comic outline art style, bright colors, solid pure white background. Full framing, centered, completely visible, no text or margins.`;

  // Path A: Modern Imagen-3.0-generate-002 model if available on the current key
  try {
    console.log(`[Script] Requesting Imagen 3 model generation for "${botId}"...`);
    const imagenResponse = await ai.models.generateImages({
      model: "imagen-3.0-generate-002",
      prompt: enhancedPrompt,
      config: {
        numberOfImages: 1,
        outputMimeType: "image/jpeg",
        aspectRatio: "1:1",
      },
    });

    const bytes = imagenResponse.generatedImages?.[0]?.image?.imageBytes;
    if (bytes) {
      console.log(`[Script] Successful Imagen 3 image generation for "${botId}".`);
      return `data:image/jpeg;base64,${bytes}`;
    }
  } catch (err: any) {
    console.warn(`[Script] Imagen-3 is unavailable or restricted: ${err.message || err}. Trying flash-image...`);
  }

  // Path B: Dynamic content part fallback via gemini-2.5-flash-image
  console.log(`[Script] Querying gemini-2.5-flash-image fallback for "${botId}"...`);
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image",
    contents: {
      parts: [{ text: enhancedPrompt }],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
        imageSize: "1K",
      },
    },
  });

  if (response && response.candidates?.[0]?.content?.parts) {
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData && part.inlineData.data) {
        const mime = part.inlineData.mimeType || "image/png";
        console.log(`[Script] Successful gemini-2.5-flash-image response for "${botId}".`);
        return `data:${mime};base64,${part.inlineData.data}`;
      }
    }
  }

  throw new Error("No inline image payloads returned from Google GenAI endpoints");
}

async function startGeneration() {
  console.log("====================================================");
  console.log("🚀 STARTING ONE-TIME PERMANENT FIRESTORE IMAGE GENERATION");
  console.log("====================================================");

  try {
    console.log("[Script] Connecting to Firestore...");
    await signInAnonymously(auth);
    console.log("[Script] Authorized successfully as Anonymous Cloud User");
  } catch (authError: any) {
    console.warn("[Script] Authorization check failed, hoping rules permit write accesses:", authError.message || authError);
  }

  // Define full target dataset
  const dataset = [
    ...SEED_BOTS.map(bot => ({ id: bot.id, initialUrl: bot.imageUrl, prompt: bot.identifier || bot.name, faction: bot.faction })),
    ...LORE_DETAILS.map(lore => ({ id: lore.id, initialUrl: lore.imageUrl, prompt: lore.title, faction: lore.id }))
  ];

  console.log(`[Script] Loaded ${dataset.length} items to inspect and generate.`);

  let counts = { success: 0, skipped: 0, broken: 0 };
  let processedThisRun = 0;
  const BATCH_LIMIT = 5;

  for (let idx = 0; idx < dataset.length; idx++) {
    const item = dataset[idx];
    const normalizedId = normalizeId(item.id);
    const docRef = doc(db, "cached_images", normalizedId);

    console.log(`\n[${idx + 1}/${dataset.length}] Inspecting "${item.id}" (Normalized: "${normalizedId}")`);

    // Guard: Load from Firestore and check if non-placeholder exists
    let needRegenerate = true;
    try {
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const currentUrl = snap.data().url;
        if (currentUrl && (currentUrl.startsWith("data:image/") || currentUrl.startsWith("http"))) {
          if (!currentUrl.includes("image/svg+xml")) {
            console.log(`[Script] Valid digital illustration already frozen in Firestore! Skipping.`);
            needRegenerate = false;
            counts.skipped++;
          } else {
            console.log(`[Script] Found obsolete gray SVG fallback template. Forcing illustration overwrite!`);
          }
        }
      }
    } catch (dbError: any) {
      console.log(`[Script] Database check skipped: ${dbError.message || dbError}`);
    }

    if (!needRegenerate) continue;

    if (processedThisRun >= BATCH_LIMIT) {
      console.log(`\n[Script] ⏳ Batch limit of ${BATCH_LIMIT} un-cached items reached! Ending process early.`);
      console.log(`[Script] Run this script again to process the next batch of ${BATCH_LIMIT} items.`);
      break;
    }
    processedThisRun++;

    let finalDataUrl = "";

    // Step A: Attempt to fetch and encode the pre-curated illustration from constants
    if (item.initialUrl && item.initialUrl.startsWith("http")) {
      try {
        console.log(`[Script] Converting pre-curated web image for "${item.id}" to Base64...`);
        finalDataUrl = await convertUrlToBase64(item.initialUrl);
        console.log(`[Script] Successfully encoded curated illustration.`);
      } catch (dlError: any) {
        console.warn(`[Script] Pre-curated download failed: ${dlError.message || dlError}`);
      }
    }

    // Step B: Call Google GenAI models if the preset download failed
    if (!finalDataUrl && process.env.GEMINI_API_KEY) {
      try {
        finalDataUrl = await generateWithGemini(normalizedId, item.prompt, item.faction);
      } catch (genError: any) {
        console.warn(`[Script] Google GenAI request failed: ${genError.message || genError}`);
      }
    }

    // Step C: Fallback to real active Pollinations illustrated comic outline
    if (!finalDataUrl) {
      try {
        const style = "vibrant animated Saturday morning cartoon illustration, bold ink outlines, bright comic colors, cel-shaded vector, G1 Transformers style, full frame centered character, high-resolution comic, pure white background";
        const queryPrompt = item.prompt || normalizedId;
        const targetUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(queryPrompt + ", " + style)}?width=768&height=768&nologo=true`;
        console.log(`[Script] Requesting dynamic illustrated capture from stream: ${targetUrl}`);
        finalDataUrl = await convertUrlToBase64(targetUrl);
        console.log(`[Script] Successfully downloaded public illustration stream.`);
      } catch (pollError: any) {
        console.warn(`[Script] Illustration stream fetch failed: ${pollError.message || pollError}`);
      }
    }

    // Save finalized illustration directly into database
    if (finalDataUrl && !finalDataUrl.includes("image/svg+xml")) {
      try {
        await setDoc(docRef, {
          botId: normalizedId,
          url: finalDataUrl,
          prompt: item.prompt,
          faction: item.faction,
          updatedAt: new Date().toISOString()
        });
        console.log(`[Script] ✅ Successfully cached and stored "${item.id}" to Firestore!`);
        counts.success++;
      } catch (writeErr: any) {
        console.error(`[Script] ❌ Failed to save illustration to Firestore for "${item.id}":`, writeErr.message || writeErr);
        counts.broken++;
      }
    } else {
      console.error(`[Script] ❌ Could not acquire any valid illustration for "${item.id}".`);
      counts.broken++;
    }

    // Throttle queries to be friendly to APIs
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log("\n====================================================");
  console.log("🏁 GENERATION RUN COMPLETED!");
  console.log(`- Success updates: ${counts.success}`);
  console.log(`- Unmodified skips (already valid): ${counts.skipped}`);
  console.log(`- Failure/Invalid: ${counts.broken}`);
  console.log("====================================================");
  process.exit(0);
}

// Execute
startGeneration();
