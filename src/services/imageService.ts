import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, authReady } from '../lib/firebase';

const CACHE_COLLECTION = 'cached_images';

export async function getCachedImageUrl(botId: string, prompt: string): Promise<string> {
  const docRef = doc(db, CACHE_COLLECTION, botId);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().url;
    }

    // If not in cache, the caller should handle generation and then call cacheImageUrl
    // This function just returns null if not found
    return '';
  } catch (error) {
    // We don't want to block the whole app if cache check fails, 
    // but we should log it.
    console.error('Error checking image cache:', error);
    return '';
  }
}

export async function cacheImageUrl(botId: string, url: string, prompt: string): Promise<void> {
  await authReady;
  const docRef = doc(db, CACHE_COLLECTION, botId);

  try {
    await setDoc(docRef, {
      botId,
      url,
      prompt,
      createdAt: serverTimestamp()
    });
  } catch (error) {
    // If it fails (e.g. permission denied because user isn't logged in), we just skip caching
    console.warn('Failed to cache image in Firestore:', error);
  }
}
