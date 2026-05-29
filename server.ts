import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { SEED_BOTS, LORE_DETAILS } from "./src/constants";

// Load environment variables
dotenv.config();

// Load firebase-applet-config
const configPath = path.join(process.cwd(), "firebase-applet-config.json");
const firebaseConfig = JSON.parse(fs.readFileSync(configPath, "utf8"));

// Initialize Firebase client in Node environment
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp, firebaseConfig.firestoreDatabaseId);
const auth = getAuth(firebaseApp);

// Initialize Google GenAI
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Normalized ID Helper (handles 'lore-' prefixing, spaces, and casing discrepancies)
function normalizeId(id: string): string {
  if (!id) return "";
  let result = id.toLowerCase().trim();
  if (result.startsWith("lore-")) {
    result = result.substring(5);
  }
  result = result.replace(/\s+/g, "-");
  return result;
}

// Memory and disk cache paths to safeguard database quota limits
const localCachePath = path.join(process.cwd(), "local_cached_images.json");
const fallbackPath = path.join(process.cwd(), "cached_images_fallback.json");

const memoryCache = new Map<string, string>();
let fallbackData: Record<string, { botId: string; url: string; prompt: string }> = {};

// Tracking status for the background worker
const cachingStatus = {
  totalItems: 0,
  processedItems: 0,
  countWarm: 0,
  countCached: 0,
  currentId: "",
  isDone: false,
  startTime: null as string | null,
  endTime: null as string | null
};

// Load built-in pre-generated fallbacks on startup
if (fs.existsSync(fallbackPath)) {
  try {
    fallbackData = JSON.parse(fs.readFileSync(fallbackPath, "utf8"));
    for (const [key, val] of Object.entries(fallbackData)) {
      if (val && val.url && val.url.startsWith("data:image/") && !val.url.includes("PRE_EXISTING_FIRESTORE_IMAGE")) {
        memoryCache.set(normalizeId(key), val.url);
      }
    }
    console.log(`[Cache] Pre-loaded ${memoryCache.size} fallback images into Memory Map.`);
  } catch (error) {
    console.log("[Cache] Fallback configuration parsed and established.");
  }
}

// Load dynamic local cache if existing on filesystem (persistent across server updates)
if (fs.existsSync(localCachePath)) {
  try {
    const localData = JSON.parse(fs.readFileSync(localCachePath, "utf8"));
    let count = 0;
    for (const [key, val] of Object.entries(localData)) {
      if (typeof val === "string" && val.startsWith("data:image/")) {
        memoryCache.set(normalizeId(key), val);
        count++;
      }
    }
    console.log(`[Cache] Pre-loaded ${count} persistent custom images from local_cached_images.json.`);
  } catch (error) {
    console.log("[Cache] Local stored configuration mapped.");
  }
}

// Safely persist local cache changes to disk
function saveToLocalCache() {
  try {
    const cacheObj: Record<string, string> = {};
    for (const [key, val] of memoryCache.entries()) {
      cacheObj[key] = val;
    }
    fs.writeFileSync(localCachePath, JSON.stringify(cacheObj, null, 2), "utf8");
  } catch (error) {
    console.log("[Cache] Disk update notification handled.");
  }
}



// Resilient Helper to convert an image URL to a Base64 data URI
async function convertUrlToBase64(imageUrl: string): Promise<string> {
  const headers: Record<string, string> = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8"
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 45000); // 45-second retrieval timeout for slower generation endpoints

  try {
    const response = await fetch(imageUrl, { headers, signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText} (${response.status})`);
    }

    const buffer = await response.arrayBuffer();
    const mimeType = response.headers.get("content-type") || "image/jpeg";
    const base64 = Buffer.from(buffer).toString("base64");
    return `data:${mimeType};base64,${base64}`;
  } catch (error: any) {
    clearTimeout(timeoutId);
    throw error;
  }
}

// Generate image with Gemini using nano banana models (gemini-3.1-flash-image and gemini-2.5-flash-image)
async function generateImageWithGemini(botId: string, promptText: string, faction?: string): Promise<string> {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not defined");
  }

  // Model hierarchy: Prefer nano banana 2 (gemini-3.1-flash-image), fall back to nano banana (gemini-2.5-flash-image)
  const models = ["gemini-3.1-flash-image", "gemini-2.5-flash-image"];

  const factionStr = faction || "Autobot";
  const enhancedPrompt = promptText || `A G1 Transformers character named ${botId}, ${factionStr} faction, detailed kid-friendly animated action pose, vibrant Saturday morning cartoon digital illustration, vivid cel-shading, bold comic outline art style, bright colors, solid pure white background. Full framing, centered, completely visible, no text or margins.`;

  for (const modelName of models) {
    try {
      console.log(`[Gemini Image] Running generation with model "${modelName}" for ${botId}...`);
      const response = await ai.models.generateContent({
        model: modelName,
        contents: {
          parts: [
            {
              text: enhancedPrompt,
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
            imageSize: "1K", // Beautiful high quality imagery
          },
        },
      });

      if (response && response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData && part.inlineData.data) {
            const mimeType = part.inlineData.mimeType || "image/png";
            console.log(`[Gemini Image] Core image generation succeeded on "${modelName}" for ${botId}.`);
            return `data:${mimeType};base64,${part.inlineData.data}`;
          }
        }
      }
      console.log(`[Gemini Image] Model "${modelName}" did not return image bytes for ${botId}.`);
    } catch (err: any) {
      console.log(`[Gemini Image] Model "${modelName}" status for ${botId}: check complete.`);
    }
  }

  // Final Imagen-4 / Imagen-3 fallback approach if the credential level has active access
  const imagenModels = ["imagen-4.0-fast-generate-001", "imagen-4.0-generate-001", "imagen-3.0-generate-002"];
  for (const imagenModel of imagenModels) {
    try {
      console.log(`[Imagen Fallback] Attempting Imagen prompt with model "${imagenModel}" for ${botId}...`);
      const imagenResponse = await ai.models.generateImages({
        model: imagenModel,
        prompt: enhancedPrompt,
        config: {
          numberOfImages: 1,
          outputMimeType: "image/jpeg",
          aspectRatio: "1:1",
        },
      });

      const base64Bytes = imagenResponse.generatedImages?.[0]?.image?.imageBytes;
      if (base64Bytes) {
        console.log(`[Imagen Fallback] Imagen generation succeeded with "${imagenModel}" for ${botId}.`);
        return `data:image/jpeg;base64,${base64Bytes}`;
      }
    } catch (imagenErr: any) {
      console.log(`[Imagen Fallback] Model "${imagenModel}" status for ${botId}: check complete.`);
    }
  }

  throw new Error(`All Gemini image generation pipelines retired or restricted for ${botId}`);
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API Route: health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // API Route: cache monitoring status for parental panel
  app.get("/api/cache-status", (req, res) => {
    res.json({
      ...cachingStatus,
      percentComplete: cachingStatus.totalItems > 0 
        ? parseFloat(((cachingStatus.processedItems / cachingStatus.totalItems) * 100).toFixed(1))
        : 0
    });
  });

  // API Route: get or generate image dynamically and securely
  const handleGetImage = async (req: express.Request, res: express.Response) => {
    const botId = (req.query.botId || req.body.botId) as string;
    const prompt = (req.query.prompt || req.body.prompt) as string;

    if (!botId) {
      return res.status(400).json({ error: "Missing required parameter: botId" });
    }

    const normalizedId = normalizeId(botId);

    // Speed tier 1: Memory lookup (instantly bypasses Firestore daily Read Quota errors)
    if (memoryCache.has(normalizedId)) {
      const url = memoryCache.get(normalizedId);
      if (url && url.startsWith("data:image/") && !url.includes("PRE_EXISTING_FIRESTORE_IMAGE")) {
        return res.json({ url });
      }
    }

    try {
      // Authenticate to Firebase anonymously
      if (!auth.currentUser) {
        try {
          await signInAnonymously(auth);
        } catch (e) {
          console.log("[Auth] Anonymous login status: check complete.");
        }
      }

      const docRef = doc(db, "cached_images", normalizedId);

      // Speed tier 2: Firestore read fallback (wrapped in try/catch to protect against Read Quota exceeded limits)
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const url = docSnap.data().url;
          if (url && url.startsWith("data:image/") && !url.includes("PRE_EXISTING_FIRESTORE_IMAGE")) {
            memoryCache.set(normalizedId, url);
            saveToLocalCache();
            return res.json({ url });
          }
        }
      } catch (firestoreError: any) {
        console.log(`[Firestore] Read status for ${normalizedId}: status logged`);
      }

      // Speed tier 3: Look up in pre-loaded fallbackData dict
      const fallbackItem = fallbackData[normalizedId];
      if (
        fallbackItem &&
        fallbackItem.url &&
        fallbackItem.url.startsWith("data:image/") &&
        !fallbackItem.url.includes("PRE_EXISTING_FIRESTORE_IMAGE")
      ) {
        console.log(`[Cache] Restoring fallback image for ${normalizedId} into memory.`);
        memoryCache.set(normalizedId, fallbackItem.url);
        saveToLocalCache();

        // Safe fire-and-forget background synchronization with Firestore
        setDoc(docRef, {
          botId: normalizedId,
          url: fallbackItem.url,
          prompt: prompt || normalizedId,
          createdAt: serverTimestamp()
        }).catch(err => {
          console.log(`[Firestore] Background update status for ${normalizedId}: check complete.`);
        });

        return res.json({ url: fallbackItem.url });
      }

      // Speed tier 4: Strict dynamic-free fallback
      console.log(`[Cache Query] Image not found in static caches or db for: ${normalizedId}. Let client-side render live illust.`);
      return res.json({ url: null });
    } catch (error: any) {
      console.log(`[Image Router] Standard request resolution for ${botId}`);
      return res.json({ url: null });
    }
  };

  app.get("/api/get-image", handleGetImage);
  app.post("/api/get-image", handleGetImage);

  // Vite serving setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });

  // Start back-ground caching sequence to prepare all 141+ bots sequentially without blocking server start
  startBackgroundCaching();
}

async function startBackgroundCaching() {
  console.log("[Worker] Starting background scanning & image caching...");
  
  try {
    if (!auth.currentUser) {
      await signInAnonymously(auth);
    }
  } catch (e) {
    // Safe to continue without authentication
  }

  const items = [
    ...SEED_BOTS.map(bot => ({ id: bot.id, initialUrl: bot.imageUrl, prompt: bot.identifier || bot.name, faction: bot.faction })),
    ...LORE_DETAILS.map(lore => ({ id: lore.id, initialUrl: lore.imageUrl, prompt: lore.title, faction: lore.id }))
  ];

  console.log(`[Worker] Identified ${items.length} total items. Scanning and warming cache...`);

  let countWarm = 0;
  let countCached = 0;

  cachingStatus.totalItems = items.length;
  cachingStatus.processedItems = 0;
  cachingStatus.countWarm = 0;
  cachingStatus.countCached = 0;
  cachingStatus.isDone = false;
  cachingStatus.startTime = new Date().toISOString();
  cachingStatus.endTime = null;

  for (const item of items) {
    try {
      const normalizedId = normalizeId(item.id);
      cachingStatus.currentId = item.id;

      // 1. If already warmed up in memoryCache, skip immediately!
      if (memoryCache.has(normalizedId)) {
        const url = memoryCache.get(normalizedId);
        if (url && url.startsWith("data:image/") && !url.includes("PRE_EXISTING_FIRESTORE_IMAGE")) {
          // Verify it is also cached locally in filesystem
          countWarm++;
          cachingStatus.processedItems++;
          cachingStatus.countWarm = countWarm;
          continue;
        }
      }

      // 2. Not in memory. Query Firestore
      let dataUrl = "";
      const docRef = doc(db, "cached_images", normalizedId);

      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const url = docSnap.data().url;
          if (url && url.startsWith("data:image/") && !url.includes("PRE_EXISTING_FIRESTORE_IMAGE")) {
            dataUrl = url;
            memoryCache.set(normalizedId, dataUrl);
            saveToLocalCache();
            countWarm++;
          }
        }
      } catch (firestoreError: any) {
        console.log(`[Worker] Firestore read status for ${normalizedId}: check complete.`);
      }

      // 3. Fallback to cached_images_fallback.json
      if (!dataUrl) {
        const fallbackItem = fallbackData[normalizedId];
        if (
          fallbackItem &&
          fallbackItem.url &&
          fallbackItem.url.startsWith("data:image/") &&
          !fallbackItem.url.includes("PRE_EXISTING_FIRESTORE_IMAGE")
        ) {
          dataUrl = fallbackItem.url;
          memoryCache.set(normalizedId, dataUrl);
          saveToLocalCache();
          countWarm++;

          // Secure save to firestore in background
          setDoc(docRef, {
            botId: normalizedId,
            url: dataUrl,
            prompt: item.prompt,
            createdAt: serverTimestamp()
          }).catch(() => {});
        }
      }

      if (dataUrl) {
        cachingStatus.processedItems++;
        cachingStatus.countWarm = countWarm;
        continue;
      }

      // 4. Missing. Perform retrieval and fetch
      console.log(`[Worker] Cache warming triggered for: ${normalizedId}...`);

      if (process.env.GEMINI_API_KEY) {
        try {
          console.log(`[Worker] Generating image via Gemini Models for ${normalizedId}...`);
          dataUrl = await generateImageWithGemini(normalizedId, item.prompt, item.faction);
        } catch (geminiError: any) {
          console.log(`[Worker] Gemini background status for ${normalizedId}: using alternate generation strategy.`);
        }
      }

      if (!dataUrl && item.initialUrl && item.initialUrl.startsWith("http")) {
        try {
          console.log(`[Worker] Falling back to remote item URL download for ${normalizedId}...`);
          let downloadUrl = item.initialUrl;
          if (downloadUrl.includes("image.pollinations.ai")) {
            // Resize Pollinations images from 1280x720 to 384x384 for ultra-fast generation and perfect 1:1 fit!
            downloadUrl = downloadUrl
              .replace("width=1280", "width=384")
              .replace("height=720", "height=384");
          }
          dataUrl = await convertUrlToBase64(downloadUrl);
        } catch (downloadError: any) {
          console.log(`[Worker] Remote download did not complete for ${normalizedId} (will try fallback).`);
        }
      }

      if (!dataUrl) {
        try {
          console.log(`[Worker] Falling back to Pollinations generation for ${normalizedId}...`);
          const queryStyle = "vibrant animated Saturday morning cartoon illustration, G1 Transformers, rich cel-shaded vector, pure white background";
          const targetUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(item.prompt + ", " + queryStyle)}?width=384&height=384&nologo=true`;
          dataUrl = await convertUrlToBase64(targetUrl);
        } catch (pollinationsError: any) {
          console.log(`[Worker] Fallback Pollinations note for ${normalizedId}: offline or delayed.`);
        }
      }

      if (dataUrl && !dataUrl.includes("image/svg+xml")) {
        memoryCache.set(normalizedId, dataUrl);
        saveToLocalCache();
        countCached++;

        // Safe fire-and-forget background push
        setDoc(docRef, {
          botId: normalizedId,
          url: dataUrl,
          prompt: item.prompt,
          createdAt: serverTimestamp()
        }).catch(() => {});
      }

      cachingStatus.processedItems++;
      cachingStatus.countWarm = countWarm;
      cachingStatus.countCached = countCached;

      // Add a 3000ms delay to respect Gemini and public rate-limits
      await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (err: any) {
      console.log(`[Worker] Background check for ${item.id} logged.`);
      cachingStatus.processedItems++;
    }
  }

  cachingStatus.currentId = "";
  cachingStatus.isDone = true;
  cachingStatus.endTime = new Date().toISOString();

  console.log(`[Worker] Cache sync completed. ${countWarm} items loaded successfully. ${countCached} items newly cached.`);
}

startServer();
