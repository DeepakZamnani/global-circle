import CountryPage from '../../components/CountryPage';
import { getCountryBySlug, getAllCountrySlugs } from '@/services/dbServices';
import { notFound } from 'next/navigation';

// ============================================
// DYNAMIC COUNTRY PAGE ROUTE
// File: app/destinations/[country]/page.tsx
// Now fetches from Firestore 'screens' collection
// ============================================

// Generate static params for all countries at build time
export async function generateStaticParams() {
  try {
    const slugs = await getAllCountrySlugs();
    return slugs.map((slug) => ({
      country: slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function DestinationPage({ 
  params 
}: { 
  params: Promise<{ country: string }> 
}) {
  const { country } = await params;
  
  // FIXED: Fetch from Firestore instead of static data
  const countryData = await getCountryBySlug(country);
  
  if (!countryData) {
    notFound();
  }

  return <CountryPage countrySlug={country} countryData={countryData} />;
}