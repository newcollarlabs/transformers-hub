export async function getCachedImageUrl(botId: string, prompt: string): Promise<string> {
  try {
    const response = await fetch(`/api/get-image?botId=${botId}&prompt=${encodeURIComponent(prompt)}`);
    if (response.ok) {
      const data = await response.json();
      return data.url || '';
    }
    return '';
  } catch (error) {
    console.error('Error getting image from backend service:', error);
    return '';
  }
}

export async function cacheImageUrl(botId: string, url: string, prompt: string): Promise<void> {
  // Caching is now automatically handled server-side during the retrieval phase
}
