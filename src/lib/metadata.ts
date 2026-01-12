import { unstable_cache } from 'next/cache';

export async function fetchMetaImage(url: string | undefined): Promise<string | null> {
  if (!url) return null;

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      },
      next: { revalidate: 3600 * 24 }, // Cache for 24 hours
    });

    if (!response.ok) {
        console.warn(`Failed to fetch ${url}: ${response.status}`);
        return null;
    }

    const html = await response.text();
    
    // Look for og:image
    const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
    if (ogImageMatch && ogImageMatch[1]) {
      return ogImageMatch[1];
    }
    
    // Look for twitter:image
    const twitterImageMatch = html.match(/<meta name="twitter:image" content="([^"]+)"/);
    if (twitterImageMatch && twitterImageMatch[1]) {
      return twitterImageMatch[1];
    }

    return null;
  } catch (error) {
    console.error(`Error fetching meta image for ${url}:`, error);
    return null;
  }
}
