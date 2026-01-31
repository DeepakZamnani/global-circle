// ============================================
// IMAGE URL UTILITIES
// File: lib/imageUtils.ts
// Clean and validate image URLs
// ============================================

/**
 * Clean image URL by removing trailing spaces and control characters
 * @param url - The image URL to clean
 * @returns Cleaned URL string
 */
export function cleanImageUrl(url: string | undefined): string {
  if (!url) return '';
  
  // Trim whitespace and control characters from both ends
  return url.trim();
}

/**
 * Clean all image URLs in an array
 * @param urls - Array of image URLs
 * @returns Array of cleaned URLs
 */
export function cleanImageUrls(urls: string[]): string[] {
  return urls.map(url => cleanImageUrl(url)).filter(url => url !== '');
}

/**
 * Validate and clean an image URL
 * @param url - The image URL to validate
 * @returns Cleaned URL or fallback placeholder
 */
export function validateImageUrl(url: string | undefined, fallback: string = '/images/placeholder.jpg'): string {
  if (!url) return fallback;
  
  const cleaned = cleanImageUrl(url);
  
  // Check if it's a valid URL
  try {
    new URL(cleaned);
    return cleaned;
  } catch {
    console.warn(`Invalid image URL: ${url}`);
    return fallback;
  }
}

/**
 * Clean university data image URLs
 * Use this when fetching from Firebase to ensure clean URLs
 */
export function cleanUniversityImages<T extends {
  heroImage?: string;
  galleryImages?: string[];
  logo?: string;
}>(data: T): T {
  return {
    ...data,
    heroImage: data.heroImage ? cleanImageUrl(data.heroImage) : data.heroImage,
    galleryImages: data.galleryImages ? cleanImageUrls(data.galleryImages) : data.galleryImages,
    logo: data.logo ? cleanImageUrl(data.logo) : data.logo,
  };
}

/**
 * Clean country data image URLs
 */
export function cleanCountryImages<T extends {
  heroImage?: string;
  galleryImages?: string[];
  flag?: string;
}>(data: T): T {
  return {
    ...data,
    heroImage: data.heroImage ? cleanImageUrl(data.heroImage) : data.heroImage,
    galleryImages: data.galleryImages ? cleanImageUrls(data.galleryImages) : data.galleryImages,
    flag: data.flag ? cleanImageUrl(data.flag) : data.flag,
  };
}