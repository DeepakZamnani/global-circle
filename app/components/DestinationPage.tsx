import CountryPage  from './CountryPage';
import { comprehensiveCountryData } from '../data/countryData'
import { notFound } from 'next/navigation';

// ============================================
// DYNAMIC COUNTRY PAGE ROUTE
// /destinations/[country]
// ============================================

// Generate static params for all countries
export async function generateStaticParams() {
  return Object.keys(countryData).map((slug) => ({
    country: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { country: string } }) {
  const country = countryData[params.country];
  
  if (!country) {
    return {
      title: 'Country Not Found',
    };
  }

  return {
    title: `Study in ${country.name} | Global Circle Edu`,
    description: country.description,
  };
}

// Page Component
export default function DestinationPage({ params }: { params: { country: string } }) {
  const country = countryData[params.country];

  if (!country) {
    notFound();
  }

  return <CountryPage countrySlug={params.country} />;
}