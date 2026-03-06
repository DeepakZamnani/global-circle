
import { notFound } from 'next/navigation';
import CountryPage from './CountryPage'; // adjust path as needed
import { getCountryBySlug, getAllCountrySlugs } from '@/services/dbServices';

// ============================================
// DYNAMIC COUNTRY PAGE ROUTE
// /destinations/[country]
// ============================================

// Generate static params for all available countries
export async function generateStaticParams() {
  const slugs = await getAllCountrySlugs();
  return slugs.map((slug) => ({
    country: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { country: string } }) {
  const country = await getCountryBySlug(params.country);
  if (!country) {
    return {
      title: 'Country Not Found',
      description: 'The requested study destination could not be found.',
    };
  }
  return {
    title: `MBBS in ${country.name} 2025-26 | Affordable & NMC Approved`,
    description: country.overview.description,
    openGraph: {
      title: `Study MBBS in ${country.name}`,
      description: country.overview.description,
      images: [country.heroImage],
    },
  };
}

// Page Component
export default async function DestinationPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  // Fetch from Firestore
  const countryData = await getCountryBySlug(country);
  if (!countryData) {
    notFound();
  }
  return <CountryPage countryData={countryData} countrySlug={country}/>;
}