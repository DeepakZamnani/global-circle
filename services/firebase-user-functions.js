// User-side Firebase/Firestore Functions for Fetching Ads
// Add these to your dbservices.jsx or create a new file

import { 
  collection, 
  query, 
  where, 
  orderBy, 
  limit,
  getDocs,
  doc,
  updateDoc,
  increment 
} from 'firebase/firestore';

/**
 * Get the active ad for a specific page and position
 * This is the main function you'll use on your pages
 * 
 * @param {Object} db - Firebase database instance
 * @param {string} pageLocation - The page where the ad should appear
 * @param {string} position - The position on the page
 * @returns {Object|null} Ad data or null if no active ad exists
 */
export async function getAdForPagePosition(db, pageLocation, position) {
  try {
    const adsRef = collection(db, 'promo_ads');
    const q = query(
      adsRef,
      where('pageLocation', '==', pageLocation),
      where('position', '==', position),
      where('isActive', '==', true),
      orderBy('priority', 'desc'),
      limit(1)
    );

    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      return null;
    }

    const adDoc = snapshot.docs[0];
    return {
      id: adDoc.id,
      title: adDoc.data().title,
      description: adDoc.data().description,
      buttonText: adDoc.data().buttonText,
      buttonHref: adDoc.data().buttonHref,
      iconName: adDoc.data().iconName,
      variant: adDoc.data().variant,
    };
  } catch (error) {
    console.error('Error fetching ad:', error);
    return null; // Fail gracefully - don't break the page
  }
}

/**
 * Get all active ads for a specific page (all positions)
 * Use this if you want to fetch all ads for a page at once
 * 
 * @param {Object} db - Firebase database instance
 * @param {string} pageLocation - The page where the ads should appear
 * @returns {Object} Ads grouped by position
 */
export async function getAdsForPage(db, pageLocation) {
  try {
    const adsRef = collection(db, 'promo_ads');
    const q = query(
      adsRef,
      where('pageLocation', '==', pageLocation),
      where('isActive', '==', true),
      orderBy('priority', 'desc')
    );

    const snapshot = await getDocs(q);
    
    // Initialize result object with all positions
    const adsByPosition = {
      top: null,
      middle: null,
      bottom: null,
      sidebar: null,
    };

    // Fill in ads (only taking highest priority for each position)
    snapshot.forEach((doc) => {
      const ad = doc.data();
      const pos = ad.position;
      
      // Only set if this position hasn't been filled yet (first one has highest priority)
      if (!adsByPosition[pos]) {
        adsByPosition[pos] = {
          id: doc.id,
          title: ad.title,
          description: ad.description,
          buttonText: ad.buttonText,
          buttonHref: ad.buttonHref,
          iconName: ad.iconName,
          variant: ad.variant,
        };
      }
    });

    return adsByPosition;
  } catch (error) {
    console.error('Error fetching ads for page:', error);
    return {
      top: null,
      middle: null,
      bottom: null,
      sidebar: null,
    };
  }
}

/**
 * Track ad view (increment view counter)
 * Call this when an ad is displayed to the user
 * 
 * @param {Object} db - Firebase database instance
 * @param {string} adId - The ID of the ad being viewed
 */
export async function trackAdView(db, adId) {
  try {
    const adRef = doc(db, 'promo_ads', adId);
    await updateDoc(adRef, {
      viewCount: increment(1),
    });
  } catch (error) {
    // Fail silently - tracking errors shouldn't break the page
    console.error('Error tracking ad view:', error);
  }
}

/**
 * Track ad click (increment click counter)
 * Call this when a user clicks on an ad button
 * 
 * @param {Object} db - Firebase database instance
 * @param {string} adId - The ID of the ad being clicked
 */
export async function trackAdClick(db, adId) {
  try {
    const adRef = doc(db, 'promo_ads', adId);
    await updateDoc(adRef, {
      clickCount: increment(1),
    });
  } catch (error) {
    // Fail silently - tracking errors shouldn't break the page
    console.error('Error tracking ad click:', error);
  }
}

/**
 * Batch fetch multiple ads at once (for performance optimization)
 * Useful if you need ads for multiple positions on the same page
 * 
 * @param {Object} db - Firebase database instance
 * @param {Array} requests - Array of {pageLocation, position} objects
 * @returns {Array} Array of ads in same order as requests
 */
export async function batchGetAds(db, requests) {
  try {
    const promises = requests.map(({ pageLocation, position }) =>
      getAdForPagePosition(db, pageLocation, position)
    );
    
    return await Promise.all(promises);
  } catch (error) {
    console.error('Error batch fetching ads:', error);
    return requests.map(() => null);
  }
}

// Export all functions
export default {
  getAdForPagePosition,
  getAdsForPage,
  trackAdView,
  trackAdClick,
  batchGetAds,
};