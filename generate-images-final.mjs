// generate-images-final.mjs — FINAL VERSION
// Uses gemini-3.1-flash-image-preview (Nano Banana 2) which avoids the
// known false-429 bug on gemini-2.5-flash-image
// Also falls back to imagen-4.0-fast-generate-001 if Nano Banana fails

import dotenv from 'dotenv';
import fs from 'fs';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { GoogleGenAI } from '@google/genai';

// Load environment variables from .env.local or .env
if (fs.existsSync('.env.local')) {
  dotenv.config({ path: '.env.local' });
} else {
  dotenv.config();
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyC_KOuBl61q8npvzW8LZXEOgTWHim1T98M';
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
const DELAY_MS = 6000; // 6 seconds — generous spacing

const STYLE = 'extremely detailed vibrant Saturday morning cartoon illustration, bold outlines, vivid primary colors, bright cel-shading, energetic dynamic pose, kid-friendly age 6-8, G1 Transformers accurate design, white background, full character visible head to toe';

const ITEMS = [
  { id: 'optimus-prime', prompt: `Optimus Prime Autobot leader, red and blue semi-truck robot, glowing Matrix in chest, heroic stance, ${STYLE}` },
  { id: 'bumblebee', prompt: `Bumblebee small yellow Autobot scout robot, black racing stripes, friendly thumbs up, ${STYLE}` },
  { id: 'ironhide', prompt: `Ironhide tough black pickup truck Autobot robot, twin arm cannons raised, battle-worn armor, ${STYLE}` },
  { id: 'ratchet', prompt: `Ratchet Autobot medic robot, white and red, glowing medical tools in hands, caring expression, ${STYLE}` },
  { id: 'jazz', prompt: `Jazz cool white sports car Autobot robot, stylish pose, visor eyes, confident grin, ${STYLE}` },
  { id: 'arcee', prompt: `Arcee female Autobot pink sleek robot warrior, twin blasters raised, agile athletic pose, ${STYLE}` },
  { id: 'prowl', prompt: `Prowl black and white police car Autobot robot, shoulder missiles, holographic battle map, ${STYLE}` },
  { id: 'wheeljack', prompt: `Wheeljack white green racing car Autobot inventor robot, ear fins glowing, sparking gadget, ${STYLE}` },
  { id: 'cliffjumper', prompt: `Cliffjumper small red Autobot robot, oversized blaster cannon, fierce determined expression, ${STYLE}` },
  { id: 'hot-rod', prompt: `Hot Rod young red Autobot racing robot, flame decals glowing, dual photon pistols, ${STYLE}` },
  { id: 'kup', prompt: `Kup old weathered green Autobot veteran robot, laser musket, gruff wise expression, ${STYLE}` },
  { id: 'drift', prompt: `Drift white samurai Autobot robot, glowing energon katana drawn, meditative calm pose, ${STYLE}` },
  { id: 'hound', prompt: `Hound green jeep Autobot robot, projecting colorful nature hologram, curious smile, ${STYLE}` },
  { id: 'mirage', prompt: `Mirage blue Formula One race car Autobot robot, flickering partially invisible, ${STYLE}` },
  { id: 'sideswipe', prompt: `Sideswipe red Lamborghini Autobot robot, rocket boosters on feet, pile-driver fists, ${STYLE}` },
  { id: 'sunstreaker', prompt: `Sunstreaker yellow Lamborghini Autobot robot, admiring own gleaming finish, vain smirk, ${STYLE}` },
  { id: 'perceptor', prompt: `Perceptor blue Autobot scientist robot, giant microscope cannon on shoulder, ${STYLE}` },
  { id: 'ultra-magnus', prompt: `Ultra Magnus massive white blue Autobot city commander robot, giant hammer, ${STYLE}` },
  { id: 'chromia', prompt: `Chromia blue female Autobot intelligence robot, glowing energon blade, fierce pose, ${STYLE}` },
  { id: 'elita-one', prompt: `Elita One pink Autobot femme commander robot, time-freeze energy aura, ${STYLE}` },
  { id: 'smokescreen', prompt: `Smokescreen blue red race car Autobot robot, number 38, smoke launcher firing, ${STYLE}` },
  { id: 'red-alert', prompt: `Red Alert red white Autobot security robot, scanning radar, alert wide eyes, ${STYLE}` },
  { id: 'inferno', prompt: `Inferno red fire truck Autobot robot, fire cannon raised, rushing into danger, ${STYLE}` },
  { id: 'grapple', prompt: `Grapple orange crane truck Autobot robot, extending crane arm, blueprint hologram, ${STYLE}` },
  { id: 'tracks', prompt: `Tracks black Corvette Autobot robot, wings extended, rocket launchers, ${STYLE}` },
  { id: 'trailbreaker', prompt: `Trailbreaker black camper Autobot robot, glowing blue force field dome, cheerful, ${STYLE}` },
  { id: 'brawn', prompt: `Brawn small green stocky Autobot mini-bot robot, lifting boulder overhead, flexing, ${STYLE}` },
  { id: 'hoist', prompt: `Hoist green tow truck Autobot mechanic robot, welding torch, toolbox open, ${STYLE}` },
  { id: 'blurr', prompt: `Blurr light blue aerodynamic Autobot robot, motion blur speed lines, sprinting, ${STYLE}` },
  { id: 'jetfire', prompt: `Jetfire massive white red Autobot jet robot, giant wings spread, cannons, ${STYLE}` },
  { id: 'sentinel-prime', prompt: `Sentinel Prime imposing orange red Autobot former leader robot, ancient Matrix, ${STYLE}` },
  { id: 'grimlock', prompt: `Grimlock mighty Dinobot king robot, T-Rex form, golden crown, energo sword, fire breath, ${STYLE}` },
  { id: 'windblade', prompt: `Windblade red black VTOL jet female Autobot robot, energon fan blade sword, ${STYLE}` },
  { id: 'quickshadow', prompt: `Quickshadow black stealth female Autobot sports car robot, vanishing shadows, ${STYLE}` },
  { id: 'tailgate', prompt: `Tailgate tiny white Autobot robot, enormous cheerful grin, enthusiastic jumping, ${STYLE}` },
  { id: 'beachcomber', prompt: `Beachcomber blue dune buggy Autobot robot, holding colorful Earth rock crystals, ${STYLE}` },
  { id: 'warpath', prompt: `Warpath red mini-tank Autobot robot, cannon barrel smoking, flexing triumphantly, ${STYLE}` },
  { id: 'seaspray', prompt: `Seaspray white hovercraft Autobot robot, ocean waves, torpedo launchers, ${STYLE}` },
  { id: 'skids', prompt: `Skids blue van Autobot robot, reading Earth books, thoughtful expression, ${STYLE}` },
  { id: 'bluestreak', prompt: `Bluestreak blue silver Datsun Autobot robot, shoulder missiles, talking mid-battle, ${STYLE}` },
  { id: 'crosshairs', prompt: `Crosshairs green Autobot paratrooper robot, dual pistols firing, stylish pose, ${STYLE}` },
  { id: 'hot-shot', prompt: `Hot Shot yellow race car Armada Autobot robot, competitive racing pose, ${STYLE}` },
  { id: 'bulkhead', prompt: `Bulkhead massive green Wrecker Autobot robot, wrecking ball arms, gentle giant, ${STYLE}` },
  { id: 'override', prompt: `Override white female speed champion Autobot robot, blazing speed lines, ${STYLE}` },
  { id: 'optimus-primal', prompt: `Optimus Primal Beast Wars Maximal gorilla robot, silver fur, jet pack, swords, ${STYLE}` },
  { id: 'cheetor', prompt: `Cheetor yellow cheetah Beast Wars Maximal robot, black spots, energon blades, sprinting, ${STYLE}` },
  { id: 'rhinox', prompt: `Rhinox massive rhinoceros Beast Wars Maximal robot, spinning chain guns, calm stance, ${STYLE}` },
  { id: 'rattrap', prompt: `Rattrap small brown rat Beast Wars Maximal robot, sneaky grin, bomb, spy pose, ${STYLE}` },
  { id: 'tigatron', prompt: `Tigatron white Siberian tiger Beast Wars Maximal robot, forest, peaceful guardian, ${STYLE}` },
  { id: 'airazor', prompt: `Airazor brown falcon Beast Wars Maximal robot, wings spread, shoulder blasters, soaring, ${STYLE}` },
  { id: 'dinobot', prompt: `Dinobot velociraptor Beast Wars Maximal robot, spinning disc weapon, honour stance, ${STYLE}` },
  { id: 'silverbolt-maximal', prompt: `Silverbolt wolf-eagle Fuzor Beast Wars Maximal robot, noble knight pose, ${STYLE}` },
  { id: 'depth-charge', prompt: `Depth Charge dark manta ray Beast Wars Maximal robot, torpedo launchers, grim, ${STYLE}` },
  { id: 'nightscream', prompt: `Nightscream organic bat-winged Beast Machines Maximal robot, moonlight, young, ${STYLE}` },
  { id: 'superion', prompt: `Superion giant Autobot Aerialbot combiner robot, five jets merged, flying, ${STYLE}` },
  { id: 'defensor', prompt: `Defensor gentle giant Autobot Protectobot combiner robot, protecting humans, ${STYLE}` },
  { id: 'computron', prompt: `Computron giant Autobot Technobot scientist combiner robot, data screens, ${STYLE}` },
  { id: 'victorion', prompt: `Victorion female Autobot Torchbearer combiner robot, blazing torch, magnetic powers, ${STYLE}` },
  { id: 'volcanicus', prompt: `Volcanicus five Dinobot combiner robot, fire breathing, earth shaking stomp, ${STYLE}` },
  { id: 'rail-racer', prompt: `Rail Racer three Autobot train combiner robot, super-train, heroic guardian, ${STYLE}` },
  { id: 'magnaboss', prompt: `Magnaboss three Maximal beast combiner robot, lion eagle wolf merged, jungle, ${STYLE}` },
  { id: 'optimus-maximus', prompt: `Optimus Maximus supreme Autobot Prime combiner robot, Matrix blazing, ${STYLE}` },
  { id: 'springer', prompt: `Springer green Autobot triple-changer helicopter car robot, sword, Wrecker, ${STYLE}` },
  { id: 'sandstorm', prompt: `Sandstorm orange Autobot triple-changer dune buggy helicopter robot, explorer, ${STYLE}` },
  { id: 'broadside', prompt: `Broadside massive Autobot triple-changer aircraft carrier jet robot, dutiful, ${STYLE}` },
  { id: 'quickswitch', prompt: `Quickswitch Autobot six-changer robot, six different forms visible, ${STYLE}` },
  { id: 'punch-counterpunch', prompt: `Punch Counterpunch Autobot double agent robot, split Autobot Decepticon, ${STYLE}` },
  { id: 'sky-lynx', prompt: `Sky Lynx majestic white Autobot space shuttle bird-beast robot, wings spread, ${STYLE}` },
  { id: 'doublecross', prompt: `Doublecross wild Autobot Monsterbot two-headed dragon robot, fire breathing, ${STYLE}` },
  { id: 'blaster', prompt: `Blaster red boombox Autobot robot, sound wave blast, cassette chest open, ${STYLE}` },
  { id: 'fortress-maximus', prompt: `Fortress Maximus colossal Autobot Headmaster city robot, battle fortress, ${STYLE}` },
  { id: 'brainstorm', prompt: `Brainstorm teal Autobot Headmaster jet scientist robot, wild inventor gadgets, ${STYLE}` },
  { id: 'pointblank', prompt: `Pointblank white Autobot Targetmaster robot, sentient glowing gun, ${STYLE}` },
  { id: 'chromedome', prompt: `Chromedome white Autobot Headmaster robot, compassionate caring expression, ${STYLE}` },
  { id: 'nightbeat', prompt: `Nightbeat blue yellow Autobot Headmaster detective robot, magnifying glass, ${STYLE}` },
  { id: 'hardhead', prompt: `Hardhead green Autobot Headmaster tank robot, charging forward stubbornly, ${STYLE}` },
  { id: 'sureshot', prompt: `Sureshot orange Autobot Targetmaster robot, perfect aim precision stance, ${STYLE}` },
  { id: 'metroplex', prompt: `Metroplex enormous Autobot city robot, Autobots inside, gentle giant smile, ${STYLE}` },
  { id: 'omega-supreme', prompt: `Omega Supreme massive Autobot rocket defense base guardian robot, ${STYLE}` },
  { id: 'primus', prompt: `Primus divine Autobot creator god robot, planet Cybertron body, cosmic light, ${STYLE}` },
  { id: 'megatron', prompt: `Megatron silver Decepticon tyrant leader robot, purple fusion cannon arm, evil grin, ${STYLE}` },
  { id: 'soundwave', prompt: `Soundwave blue Decepticon cassette spy robot, chest open Laserbeak emerging, ${STYLE}` },
  { id: 'shockwave', prompt: `Shockwave purple one-eyed Decepticon scientist robot, cannon hand, cold stare, ${STYLE}` },
  { id: 'galvatron', prompt: `Galvatron purple Decepticon warlord robot, particle cannon, unstable power aura, ${STYLE}` },
  { id: 'scourge', prompt: `Scourge blue Decepticon Sweep tracker robot, cold calculating hunter, ${STYLE}` },
  { id: 'barricade', prompt: `Barricade black Decepticon police car robot, spiked menacing fists, ${STYLE}` },
  { id: 'knock-out', prompt: `Knock Out red Decepticon medic sports car robot, electro-staff, glossy finish, ${STYLE}` },
  { id: 'nightbird', prompt: `Nightbird black Decepticon ninja robot, throwing stars, energon daggers, stealth, ${STYLE}` },
  { id: 'lockdown', prompt: `Lockdown bounty hunter robot, hook hand, collection of stolen weapon trophies, ${STYLE}` },
  { id: 'airachnid', prompt: `Airachnid black spider Decepticon hunter robot, spider silk, predatory eyes, ${STYLE}` },
  { id: 'dreadwing', prompt: `Dreadwing blue white Decepticon Seeker robot, energon sword, honourable stance, ${STYLE}` },
  { id: 'breakdown', prompt: `Breakdown blue Decepticon heavy warrior robot, wrecking ball fists, nervous look, ${STYLE}` },
  { id: 'lugnut', prompt: `Lugnut massive olive green Decepticon bomber robot, explosive punch fist, fanatical, ${STYLE}` },
  { id: 'bludgeon', prompt: `Bludgeon skull-faced Decepticon samurai robot, katana drawn, martial arts pose, ${STYLE}` },
  { id: 'tarn', prompt: `Tarn masked Decepticon DJD assassin robot, tank cannon, philosophical pose, ${STYLE}` },
  { id: 'jhiaxus', prompt: `Jhiaxus imposing Decepticon general robot, star map hologram, cold conqueror, ${STYLE}` },
  { id: 'black-shadow', prompt: `Black Shadow dark Phase Sixer Decepticon bounty hunter robot, power aura, ${STYLE}` },
  { id: 'starscream', prompt: `Starscream grey red Decepticon Seeker jet robot, sneaking plotting, null rays, ${STYLE}` },
  { id: 'thundercracker', prompt: `Thundercracker blue Decepticon Seeker jet robot, sonic boom shockwave, ${STYLE}` },
  { id: 'skywarp', prompt: `Skywarp black purple Decepticon Seeker jet robot, teleporting flash effect, ${STYLE}` },
  { id: 'thrust', prompt: `Thrust maroon Conehead Decepticon Seeker jet robot, wind turbines, arrogant, ${STYLE}` },
  { id: 'dirge', prompt: `Dirge dark blue Conehead Decepticon Seeker jet robot, fear wave aura, gloomy, ${STYLE}` },
  { id: 'ramjet', prompt: `Ramjet white red Conehead Decepticon Seeker jet robot, charging headfirst, ${STYLE}` },
  { id: 'acid-storm', prompt: `Acid Storm green Decepticon Seeker jet robot, acid rain cloud forming, ${STYLE}` },
  { id: 'beast-megatron', prompt: `Beast Megatron purple T-Rex dragon Predacon warlord robot, fire breathing, ${STYLE}` },
  { id: 'waspinator', prompt: `Waspinator green wasp Predacon robot, pieces flying off explosion, confused, ${STYLE}` },
  { id: 'terrorsaur', prompt: `Terrorsaur red pterodactyl Predacon robot, scheming, energy weapons, ${STYLE}` },
  { id: 'tarantulas', prompt: `Tarantulas spider Predacon mad scientist robot, dark laboratory, web spinning, ${STYLE}` },
  { id: 'scorponok-bw', prompt: `Beast Wars Scorponok giant scorpion Predacon robot, crushing claws, missile tail, ${STYLE}` },
  { id: 'inferno-predacon', prompt: `Inferno fire ant Predacon robot, flames surrounding, fanatical saluting, ${STYLE}` },
  { id: 'sky-byte', prompt: `Sky-Byte blue shark Predacon robot, reciting poetry dramatically, ocean, ${STYLE}` },
  { id: 'reflector', prompt: `Reflector three Decepticon spy camera robots merged, surveillance, watching, ${STYLE}` },
  { id: 'devastator', prompt: `Devastator massive green Constructicon combiner robot, molecular beam, ${STYLE}` },
  { id: 'menasor', prompt: `Menasor violent unstable Stunticon combiner robot, enormous sword, rage, ${STYLE}` },
  { id: 'bruticus', prompt: `Bruticus military Combaticon combiner robot, disciplined soldier, shoulder cannon, ${STYLE}` },
  { id: 'predaking', prompt: `Predaking lion Predacon beast combiner robot, massive energon sword, ${STYLE}` },
  { id: 'abominus', prompt: `Abominus savage Terrorcon beast combiner monster robot, mindless rage, ${STYLE}` },
  { id: 'piranacon', prompt: `Piranacon six Seacon aquatic combiner robot, emerging from ocean, claws, ${STYLE}` },
  { id: 'liokaiser', prompt: `Liokaiser Breastforce Victory combiner robot, powerful Japanese G1 era, ${STYLE}` },
  { id: 'blitzwing', prompt: `Blitzwing purple tan Decepticon triple-changer robot, three personality faces, ${STYLE}` },
  { id: 'astrotrain', prompt: `Astrotrain white Decepticon triple-changer space shuttle steam train robot, ${STYLE}` },
  { id: 'sixshot', prompt: `Sixshot dark Decepticon six-changer robot, all six forms visible around him, ${STYLE}` },
  { id: 'overlord', prompt: `Overlord massive Phase Sixer Decepticon tank jet robot, planetary conquest, ${STYLE}` },
  { id: 'octane', prompt: `Octane purple Decepticon triple-changer tanker jet robot, opportunist grin, ${STYLE}` },
  { id: 'apeface', prompt: `Apeface Decepticon Headmaster gorilla jet robot, obnoxious grin, chaotic, ${STYLE}` },
  { id: 'snapdragon', prompt: `Snapdragon Decepticon Headmaster triple-changer dragon jet robot, fire, ${STYLE}` },
  { id: 'rumble-frenzy', prompt: `Rumble and Frenzy small Decepticon twin cassette robots, pile-driver arms, ${STYLE}` },
  { id: 'laserbeak', prompt: `Laserbeak red Decepticon condor cassette robot, perched watching, laser cannons, ${STYLE}` },
  { id: 'ravage', prompt: `Ravage black Decepticon panther cassette robot, stalking in shadows, ${STYLE}` },
  { id: 'ratbat', prompt: `Ratbat Decepticon fuel-auditor bat robot, energy charts, calculating, ${STYLE}` },
  { id: 'buzzsaw', prompt: `Buzzsaw golden Decepticon condor cassette robot, precision laser, cold hunter, ${STYLE}` },
  { id: 'scorponok', prompt: `Scorponok massive Decepticon Headmaster scorpion fortress city robot, ${STYLE}` },
  { id: 'cyclonus', prompt: `Cyclonus purple Decepticon loyal commander jet robot, devoted stance, ${STYLE}` },
  { id: 'mindwipe', prompt: `Mindwipe Decepticon vampire bat Headmaster robot, hypnotic eyes, mystical, ${STYLE}` },
  { id: 'weirdwolf', prompt: `Weirdwolf yellow Decepticon wolf Headmaster robot, hunting predator stance, ${STYLE}` },
  { id: 'misfire', prompt: `Misfire pink Decepticon Targetmaster jet robot, shooting wrong direction, grin, ${STYLE}` },
  { id: 'triggerhappy', prompt: `Triggerhappy blue Decepticon Targetmaster jet robot, firing everything gleefully, ${STYLE}` },
  { id: 'trypticon', prompt: `Trypticon massive dark Decepticon T-Rex dinosaur city titan robot, roaring, ${STYLE}` },
  { id: 'the-nemesis', prompt: `The Nemesis dark Decepticon warship transforming into giant titan robot, ${STYLE}` },
  { id: 'tidal-wave', prompt: `Tidal Wave massive Decepticon naval battleship titan robot, three ships, ocean, ${STYLE}` },
  { id: 'unicron', prompt: `Unicron planet-eating chaos god robot, dark cosmic energy devouring worlds, ${STYLE}` },
  // Lore / squad cards
  { id: 'Autobot', prompt: `Heroic Autobot faction team group shot, Optimus Prime leading brave robot heroes, ${STYLE}` },
  { id: 'Decepticon', prompt: `Menacing Decepticon faction army, Megatron commanding evil robot warriors, ${STYLE}` },
  { id: 'Elite Core', prompt: `Transformers Elite Core squad group shot, fastest robots racing into action, ${STYLE}` },
  { id: 'Combiners', prompt: `Transformers Combiners squad, giant combined robot forming from five robots, ${STYLE}` },
  { id: 'Bonded Units', prompt: `Transformers Bonded Units squad, large robot with tiny Mini-Con partner, ${STYLE}` },
  { id: 'Titans', prompt: `Transformers Titans squad, enormous city-sized Metroplex robot over skyscrapers, ${STYLE}` },
  { id: 'Seekers', prompt: `Decepticon Seekers jet squad, Starscream Thundercracker Skywarp flying formation, ${STYLE}` },
  { id: 'Maximals', prompt: `Beast Wars Maximals squad, Optimus Primal gorilla and Cheetor cheetah robots, ${STYLE}` },
  { id: 'Predacons', prompt: `Beast Wars Predacons squad, Beast Megatron dragon and Waspinator wasp robots, ${STYLE}` },
];

const MODELS = [
  'imagen-4.0-fast-generate-001',
];

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, FIRESTORE_DB_ID);
const auth = getAuth(app);
const genai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function waitForAuth() {
  return new Promise((resolve, reject) => {
    const unsub = onAuthStateChanged(auth, user => {
      if (user) { unsub(); resolve(user); }
    });
    signInAnonymously(auth).catch(reject);
  });
}

async function generateImage(prompt, retryCount = 0) {
  const model = MODELS[0];
  try {
    const response = await genai.models.generateImages({
      model,
      prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/jpeg',
      },
    });
    const generatedImage = response.generatedImages?.[0];
    if (generatedImage?.image?.imageBytes) {
      return `data:image/jpeg;base64,${generatedImage.image.imageBytes}`;
    }
    throw new Error('No image in response');
  } catch (err) {
    const errorMsg = err.message || String(err);
    if (errorMsg.includes('429') || errorMsg.includes('quota') || errorMsg.includes('Quota') || errorMsg.includes('RESOURCE_EXHAUSTED')) {
      const waitTime = Math.min(10000 * Math.pow(2, retryCount), 60000);
      console.log(`\n⚠️ Rate limited / quota hit. Retrying in ${waitTime / 1000}s (retry #${retryCount + 1})...`);
      await sleep(waitTime);
      return generateImage(prompt, retryCount + 1);
    }
    throw err;
  }
}

const FALLBACK_FILE = 'cached_images_fallback.json';
let localCache = {};
if (fs.existsSync(FALLBACK_FILE)) {
  try {
    localCache = JSON.parse(fs.readFileSync(FALLBACK_FILE, 'utf8'));
  } catch (e) {
    console.warn(`Warning: Failed to parse ${FALLBACK_FILE}, starting fresh`);
  }
}

function saveLocalCache() {
  fs.writeFileSync(FALLBACK_FILE, JSON.stringify(localCache, null, 2), 'utf8');
}

async function main() {
  let firestoreEnabled = true;
  let user = null;
  try {
    console.log('Signing in to Firebase...');
    user = await waitForAuth();
    console.log(`Signed in as ${user.uid}`);
  } catch (e) {
    console.log(`⚠️ Firestore authentication unavailable: ${e.message || e}. Using local cache fallback only.`);
    firestoreEnabled = false;
  }

  console.log(`Processing ${ITEMS.length} items using models: ${MODELS.join(', ')}\n`);

  let generated = 0, skipped = 0, failed = 0;
  const failures = [];

  for (let i = 0; i < ITEMS.length; i++) {
    const { id, prompt } = ITEMS[i];
    process.stdout.write(`[${i + 1}/${ITEMS.length}] ${id} ... `);

    let exists = false;
    let localData = localCache[id];
    if (localData?.url?.startsWith('data:image/')) {
      exists = true;
    }

    if (firestoreEnabled) {
      try {
        const docRef = doc(db, CACHE_COLLECTION, id);
        const existing = await getDoc(docRef);
        if (existing.exists()) {
          const url = existing.data()?.url || '';
          if (url.startsWith('data:image/')) {
            exists = true;
            if (!localData || localData.url.includes('PRE_EXISTING_FIRESTORE_IMAGE')) {
              localCache[id] = { botId: id, url, prompt: id, createdAt: new Date().toISOString() };
              saveLocalCache();
            }
          } else {
            await deleteDoc(docRef);
            process.stdout.write('clearing stale ... ');
          }
        }
      } catch (e) {
        console.log(`\n⚠️ Firestore read error: ${e.message || e}. Switching to local cache only.`);
        firestoreEnabled = false;
        // Re-check local cache state
        exists = !!localCache[id]?.url?.startsWith('data:image/');
      }
    }

    if (exists) {
      console.log('already done, skipping');
      skipped++;
      continue;
    }

    try {
      const dataUrl = await generateImage(prompt);
      
      // Save locally first so we never lose it
      localCache[id] = { botId: id, url: dataUrl, prompt: id, createdAt: new Date().toISOString() };
      saveLocalCache();

      if (firestoreEnabled) {
        try {
          const docRef = doc(db, CACHE_COLLECTION, id);
          await setDoc(docRef, { botId: id, url: dataUrl, prompt: id, createdAt: serverTimestamp() });
        } catch (e) {
          console.log(`\n⚠️ Firestore write failed: ${e.message || e}. Saved locally only.`);
          if (e.message?.includes('Quota') || e.code === 'resource-exhausted') {
            firestoreEnabled = false;
          }
        }
      }

      console.log('✓ generated');
      generated++;
    } catch (err) {
      const msg = err.message?.slice(0, 100) || String(err);
      console.log(`✗ FAILED: ${msg}`);
      failed++;
      failures.push(id);
    }

    await sleep(DELAY_MS);
  }

  console.log('\n─────────────────────────────────');
  console.log(`✓ Generated: ${generated}`);
  console.log(`⏭  Skipped:   ${skipped}`);
  console.log(`✗ Failed:    ${failed}`);
  if (failures.length) console.log(`\nFailed: ${failures.join(', ')}\nRun again to retry.`);
  console.log('─────────────────────────────────');
  process.exit(0);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
