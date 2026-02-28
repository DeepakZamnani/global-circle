import CountryPage from '../../components/CountryPage';
import { getCountryBySlug, getAllCountrySlugs } from '@/services/dbServices';
import { notFound } from 'next/navigation';


export const revalidate = 60; // Re-fetch from Firebase every 60 seconds

// Generate static params for initial build (optional - helps with first load)
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
  
  // Fetch from Firestore - will re-fetch every 60 seconds
  const countryData = await getCountryBySlug(country);
  
  if (!countryData) {
    notFound();
  }

  return <CountryPage countrySlug={country} countryData={countryData} />;
}