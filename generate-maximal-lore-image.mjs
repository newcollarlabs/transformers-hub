// generate-maximal-lore-image.mjs
// Generates a single image for the Maximals lore squad card and caches it in Firestore.
// Run once, done — the app will pick it up automatically from Firestore on next load.
//
// SETUP:
// 1. Go to https://api.together.ai and sign up (free)
// 2. Copy your API key
// 3. Paste it below where it says YOUR_TOGETHER_API_KEY
// 4. From your project root: node generate-maximal-lore-image.mjs

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';

// ═══════════════════════════════════════════════════════════════
// PASTE YOUR TOGETHER AI API KEY HERE
const TOGETHER_API_KEY = 'YOUR_TOGETHER_API_KEY';
// ═══════════════════════════════════════════════════════════════

const firebaseConfig = {
  projectId: 'gen-lang-client-0140503481',
  appId: '1:663126610875:web:355f49f425e9cd2f376a9e',
  apiKey: 'AIzaSyA8SPPLN7ZcEwbsFblh_sjC-yh6mhPvLKA',
  authDomain: 'gen-lang-client-0140503481.firebaseapp.com',
  storageBucket: 'gen-lang-client-0140503481.firebasestorage.app',
  messagingSenderId: '663126610875',
};
const FIRESTORE_DB_ID = 'ai-studio-d9924e01-1860-4500-aed9-96515c458b1f';
const CACHE_COLLECTION = 'cached_images';

// Matches the STYLE constant in the main script
const STYLE = 'extremely detailed vibrant Saturday morning cartoon illustration, bold outlines, vivid primary colors, bright cel-shading, energetic dynamic pose, kid-friendly age 6-8, G1 Transformers accurate design, white background, full character visible head to toe';

// The Firestore document ID MUST match the lore entry's `id` field in constants.ts
const TARGET = {
  id: 'Maximals',
  prompt: `Beast Wars Maximals squad group shot, Optimus Primal mighty silver-back gorilla robot leader, Cheetor sleek yellow cheetah robot, Rhinox massive armoured rhinoceros robot, Rattrap sneaky brown rat robot, Airazor soaring hawk robot, prehistoric jungle background, ${STYLE}`,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, FIRESTORE_DB_ID);
const auth = getAuth(app);

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function waitForAuth() {
  return new Promise((resolve, reject) => {
    const unsub = onAuthStateChanged(auth, user => {
      if (user) { unsub(); resolve(user); }
    });
    signInAnonymously(auth).catch(reject);
  });
}

async function generateImage(prompt, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const resp = await fetch('https://api.together.xyz/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOGETHER_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'black-forest-labs/FLUX.1-schnell-Free',
          prompt,
          width: 1024,
          height: 576,
          n: 1,
          response_format: 'b64_json',
        }),
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`HTTP ${resp.status}: ${text.slice(0, 200)}`);
      }

      const data = await resp.json();
      const b64 = data.data[0].b64_json;
      return `data:image/png;base64,${b64}`;
    } catch (err) {
      if (attempt < retries) {
        console.log(`  [retry ${attempt}/${retries}] waiting ${5 * attempt}s...`);
        await sleep(5000 * attempt);
      } else {
        throw err;
      }
    }
  }
}

async function main() {
  if (TOGETHER_API_KEY === 'YOUR_TOGETHER_API_KEY') {
    console.error('\n❌ Paste your Together AI API key into the script first!');
    console.error('   1. Go to https://api.together.ai (free signup)');
    console.error('   2. Copy your API key');
    console.error('   3. Replace YOUR_TOGETHER_API_KEY in this file');
    console.error('   4. Run again: node generate-maximal-lore-image.mjs\n');
    process.exit(1);
  }

  console.log('\n🔥 Signing in to Firebase...');
  const user = await waitForAuth();
  console.log(`✓ Signed in as ${user.uid}`);

  const docRef = doc(db, CACHE_COLLECTION, TARGET.id);
  const existing = await getDoc(docRef);

  if (existing.exists()) {
    const url = existing.data()?.url || '';
    if (url.startsWith('data:image/')) {
      console.log('\n✓ Maximals image already cached in Firestore — nothing to do!');
      console.log('  If you want to regenerate it, delete the "Maximals" document in the');
      console.log('  Firebase Console → Firestore → cached_images, then run this again.\n');
      process.exit(0);
    }
    // Stale URL (non-base64 e.g. old Pollinations URL) — clear it
    console.log('  Found stale Pollinations URL — clearing it...');
    await deleteDoc(docRef);
  }

  console.log('\n🎨 Generating Maximals squad image via Together AI FLUX.1-schnell...');
  console.log(`   Prompt: ${TARGET.prompt.slice(0, 80)}...`);

  try {
    const dataUrl = await generateImage(TARGET.prompt);
    await setDoc(docRef, {
      botId: TARGET.id,
      url: dataUrl,
      prompt: TARGET.id,
      createdAt: serverTimestamp(),
    });
    console.log('\n✅ SUCCESS! Maximals image generated and cached in Firestore.');
    console.log('   Reload the app — the Maximals squad card will now show the image.\n');
  } catch (err) {
    console.error(`\n❌ FAILED: ${err.message}`);
    console.error('   Check your Together AI API key and internet connection, then try again.\n');
    process.exit(1);
  }

  process.exit(0);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
