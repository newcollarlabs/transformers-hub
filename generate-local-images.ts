import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { SEED_BOTS, LORE_DETAILS } from "./src/constants";

// Load environment variables (.env)
dotenv.config();

// Initialize Gemini Client
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
}

function normalizeId(id: string): string {
  if (!id) return "";
  let result = id.toLowerCase().trim();
  if (result.startsWith("lore-")) {
    result = result.substring(5);
  }
  return result;
}

// Download image and convert to elegant base64 Data URI
async function convertUrlToBase64(imageUrl: string): Promise<string> {
  const headers: Record<string, string> = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8"
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15-second timeout

  try {
    const response = await fetch(imageUrl, { headers, signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.statusText} (${response.status})`);
    }

    const buffer = await response.arrayBuffer();
    const mimeType = response.headers.get("content-type") || "image/jpeg";
    const base64 = Buffer.from(buffer).toString("base64");
    return `data:${mimeType};base64,${base64}`;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

// Generate image using Gemini Models (Imagen or Flash-Image)
async function generateWithGemini(botId: string, promptText: string, faction: string): Promise<string> {
  if (!ai || !process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not defined");
  }

  const factionStr = faction || "Autobot";
  const enhancedPrompt = `A G1 Transformers character named ${promptText || botId}, ${factionStr} faction, detailed kid-friendly animated action pose, vibrant Saturday morning cartoon digital illustration, vivid cel-shading, bold comic outline art style, bright colors, solid pure white background. Full framing, centered, completely visible, no text or margins.`;

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
  console.log("🚀 STARTING STATIC LOCAL IMAGE CACHE SCANNERS & GENERATION");
  console.log("====================================================");

  const localCachePath = path.join(process.cwd(), "local_cached_images.json");
  let localCache: Record<string, string> = {};

  // 1. Read existing local cache file
  if (fs.existsSync(localCachePath)) {
    try {
      const data = JSON.parse(fs.readFileSync(localCachePath, "utf8"));
      for (const [key, val] of Object.entries(data)) {
        if (typeof val === "string" && val.startsWith("data:image/") && !val.includes("image/svg+xml")) {
          localCache[normalizeId(key)] = val;
        }
      }
      console.log(`[Script] Loaded ${Object.keys(localCache).length} EXISTING high-quality JPEGs from local_cached_images.json.`);
    } catch (e) {
      console.warn("[Script] Failed to load local_cached_images.json, starting fresh.");
    }
  }

  // 2. Define full target dataset
  const dataset = [
    ...SEED_BOTS.map(bot => ({ id: bot.id, initialUrl: bot.imageUrl, prompt: bot.identifier || bot.name, faction: bot.faction })),
    ...LORE_DETAILS.map(lore => ({ id: lore.id, initialUrl: lore.imageUrl, prompt: lore.title, faction: lore.id }))
  ];

  // Sort alphabetically by ID so it is easier to track progress
  dataset.sort((a, b) => a.id.localeCompare(b.id));

  console.log(`[Script] Loaded ${dataset.length} items to inspect.`);

  let counts = { success: 0, skipped: 0, broken: 0 };
  let processedThisRun = 0;
  const BATCH_LIMIT = 25; // Process in small fast batches of 25 to stay within platform timeout limits

  for (let idx = 0; idx < dataset.length; idx++) {
    const item = dataset[idx];
    const normalizedId = normalizeId(item.id);

    // If already exists as JPEG/PNG, skip!
    if (localCache[normalizedId]) {
      console.log(`[${idx + 1}/${dataset.length}] "${item.id}" already has cache. Skipping.`);
      counts.skipped++;
      continue;
    }

    if (processedThisRun >= BATCH_LIMIT) {
      console.log(`\n[Script] ⏳ Batch limit of ${BATCH_LIMIT} reached!`);
      break;
    }
    processedThisRun++;

    console.log(`\n[${idx + 1}/${dataset.length}] Generating for "${item.id}" (Normalized: "${normalizedId}")...`);
    let finalDataUrl = "";

    // Strategy 1: Load pre-curated pollinations image url from constants.ts
    if (item.initialUrl && item.initialUrl.startsWith("http")) {
      try {
        console.log(`[Script] Downloading pre-curated image URL: ${item.initialUrl}`);
        finalDataUrl = await convertUrlToBase64(item.initialUrl);
        console.log(`[Script] Successful download.`);
      } catch (err: any) {
        console.warn(`[Script] Pre-curated download failed: ${err.message || err}.`);
      }
    }

    // Strategy 2: Use Gemini models
    if (!finalDataUrl && process.env.GEMINI_API_KEY) {
      try {
        finalDataUrl = await generateWithGemini(normalizedId, item.prompt, item.faction);
      } catch (err: any) {
        console.warn(`[Script] Gemini generation failed: ${err.message || err}.`);
      }
    }

    // Strategy 3: Dynamic Pollinations outline image URL
    if (!finalDataUrl) {
      try {
        const style = "vibrant animated Saturday morning cartoon illustration, bold ink outlines, bright comic colors, cel-shaded vector, G1 Transformers style, full frame centered character, high-resolution comic, pure white background";
        const targetUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(item.prompt + ", " + style)}?width=512&height=512&nologo=true`;
        console.log(`[Script] Downloading backup Pollinations image: ${targetUrl}`);
        finalDataUrl = await convertUrlToBase64(targetUrl);
        console.log(`[Script] Successful backup download.`);
      } catch (err: any) {
        console.warn(`[Script] Backup Pollinations failed: ${err.message || err}.`);
      }
    }

    // Save finalized base64 to JSON cache
    if (finalDataUrl && !finalDataUrl.includes("image/svg+xml")) {
      localCache[normalizedId] = finalDataUrl;
      fs.writeFileSync(localCachePath, JSON.stringify(localCache, null, 2), "utf8");
      console.log(`[Script] ✅ Successfully stored "${item.id}" locally!`);
      counts.success++;
    } else {
      console.error(`[Script] ❌ Could not acquire any image for "${item.id}".`);
      counts.broken++;
    }

    // Small throttle
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log("\n====================================================");
  console.log("🏁 GENERATION COMPLETE!");
  console.log(`- Loaded/Skipped: ${counts.skipped}`);
  console.log(`- Newly successfully generated: ${counts.success}`);
  console.log(`- Failed: ${counts.broken}`);
  console.log("====================================================");
  process.exit(0);
}

startGeneration();
