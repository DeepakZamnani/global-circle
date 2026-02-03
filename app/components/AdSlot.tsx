'use client';

import { useEffect, useState } from 'react';
import PromoAd from './PromoAd';
import { getAdForPagePosition, trackAdView, trackAdClick } from '@/services/firebase-user-functions';
import * as LucideIcons from 'lucide-react';

// Import your Firebase db instance
// import { db } from '@/firebase/config'; // Adjust path to your Firebase config

interface AdSlotProps {
  db: any; // Firebase database instance
  pageLocation: 'home' | 'country' | 'university' | 'course' | 'blog' | 'contact' | 'about';
  position: 'top' | 'middle' | 'bottom' | 'sidebar';
  className?: string;
  showSkeleton?: boolean;
}

interface AdData {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  iconName?: string;
  variant: 'default' | 'gradient';
}

/**
 * AdSlot Component for Firebase
 * 
 * Drop this component anywhere in your pages to display ads.
 * It automatically fetches the appropriate ad based on page location and position.
 * 
 * @example
 * import { db } from '@/firebase/config';
 * <AdSlot db={db} pageLocation="home" position="top" className="my-10" />
 */
export default function AdSlot({ 
  db,
  pageLocation, 
  position, 
  className = '',
  showSkeleton = false 
}: AdSlotProps) {
  const [adData, setAdData] = useState<AdData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasTrackedView, setHasTrackedView] = useState(false);

  useEffect(() => {
    loadAd();
  }, [pageLocation, position]);

  const loadAd = async () => {
    setIsLoading(true);
    try {
      const ad = await getAdForPagePosition(db, pageLocation, position);
      
      if (ad) {
        setAdData(ad as AdData);
      }
    } catch (error) {
      console.error(`Error loading ad for ${pageLocation}/${position}:`, error);
      // Fail gracefully - don't break the page
    } finally {
      setIsLoading(false);
    }
  };

  // Track view when ad becomes visible
  useEffect(() => {
    if (adData && !hasTrackedView) {
      trackView();
      setHasTrackedView(true);
    }
  }, [adData]);

  const trackView = async () => {
    if (!adData) return;
    
    try {
      await trackAdView(db, adData.id);
    } catch (error) {
      // Fail silently - tracking errors shouldn't break the page
      console.error('Error tracking ad view:', error);
    }
  };

  const handleAdClick = async () => {
    if (!adData) return;
    
    try {
      await trackAdClick(db, adData.id);
      
      // Navigate to URL if provided
      if (adData.buttonHref) {
        window.location.href = adData.buttonHref;
      }
    } catch (error) {
      console.error('Error tracking ad click:', error);
      // Still navigate even if tracking fails
      if (adData.buttonHref) {
        window.location.href = adData.buttonHref;
      }
    }
  };

  // Get the Lucide icon component by name
  const getIconComponent = (iconName?: string) => {
    if (!iconName) return undefined;
    
    // Map icon name to Lucide component
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent;
  };

  // Loading skeleton
  if (isLoading && showSkeleton) {
    return (
      <div className={className}>
        <div style={{
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
          borderRadius: '16px',
          height: '180px',
          width: '100%'
        }} />
        <style>{`
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </div>
    );
  }

  // Don't render anything if no ad or still loading
  if (isLoading || !adData) {
    return null;
  }

  return (
    <div className={className}>
      <PromoAd
        icon={getIconComponent(adData.iconName)}
        title={adData.title}
        description={adData.description}
        buttonText={adData.buttonText}
        buttonHref={adData.buttonHref}
        onButtonClick={handleAdClick}
        variant={adData.variant}
      />
    </div>
  );
}

// ===== USAGE EXAMPLES =====

// Example 1: Simple usage on home page
// import { db } from '@/firebase/config';
// <AdSlot db={db} pageLocation="home" position="top" />

// Example 2: With custom styling
// <AdSlot 
//   db={db}
//   pageLocation="country" 
//   position="middle" 
//   className="my-10 px-4" 
// />

// Example 3: With loading skeleton
// <AdSlot 
//   db={db}
//   pageLocation="university" 
//   position="top" 
//   showSkeleton={true}
// />

// Example 4: Multiple ads on same page
// <div>
//   <AdSlot db={db} pageLocation="blog" position="top" className="mb-8" />
//   
//   {/* Your content */}
//   <article>...</article>
//   
//   <AdSlot db={db} pageLocation="blog" position="middle" className="my-8" />
//   
//   {/* More content */}
//   <article>...</article>
//   
//   <AdSlot db={db} pageLocation="blog" position="bottom" className="mt-8" />
// </div>