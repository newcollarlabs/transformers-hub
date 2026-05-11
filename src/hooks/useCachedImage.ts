import { useState, useEffect } from 'react';
import { getCachedImageUrl, cacheImageUrl } from '../services/imageService';

export function useCachedImage(botId: string, initialUrl: string, prompt: string) {
  const [imageUrl, setImageUrl] = useState(initialUrl);
  const [isLoadedFromCache, setIsLoadedFromCache] = useState(false);

  useEffect(() => {
    setImageUrl(initialUrl);
    setIsLoadedFromCache(false);
  }, [botId, initialUrl]);

  useEffect(() => {
    let isMounted = true;

    async function loadCache() {
      const cached = await getCachedImageUrl(botId, prompt);
      if (!isMounted) return;

      if (cached) {
        setImageUrl(cached);
        setIsLoadedFromCache(true);
      } else {
        // If no cache, we should save the initial one to cache
        // provided we have a valid initial URL
        if (initialUrl) {
          await cacheImageUrl(botId, initialUrl, prompt);
        }
      }
    }

    loadCache();

    return () => {
      isMounted = false;
    };
  }, [botId, initialUrl, prompt]);

  return { imageUrl, isLoadedFromCache };
}
