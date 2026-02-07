import CountryPage from '../../components/CountryPage';
import { getCountryBySlug } from '@/services/dbServices';
import { notFound } from 'next/navigation';

// ============================================
// DYNAMIC COUNTRY PAGE ROUTE
// File: app/destinations/[country]/page.tsx
// FIXED: Now fetches fresh data on EVERY request (no caching)
// ============================================

// 🔥 CRITICAL: Force dynamic rendering - fetches from Firebase on every request
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function DestinationPage({ 
  params 
}: { 
  params: Promise<{ country: string }> 
}) {
  const { country } = await params;
  
  // Fetch from Firestore on EVERY request (no cache)
  const countryData = await getCountryBySlug(country);
  
  if (!countryData) {
    notFound();
  }

  return <CountryPage countrySlug={country} countryData={countryData} />;
}