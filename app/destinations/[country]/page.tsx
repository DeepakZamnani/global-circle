import CountryPage from '../../components/CountryPage';
import { comprehensiveCountryData } from '../../data/countryData'
import { notFound } from 'next/navigation';

// ============================================
// DYNAMIC COUNTRY PAGE ROUTE
// File: app/destinations/[country]/page.tsx
// ============================================

export default async function DestinationPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  
  if (!comprehensiveCountryData[country]) {
    notFound();
  }

  return <CountryPage countrySlug={country} />;
}