import CountryPage from '../../components/CountryPage';
import { countryData } from '../../data/countryData'
import { notFound } from 'next/navigation';

// ============================================
// DYNAMIC COUNTRY PAGE ROUTE
// File: app/destinations/[country]/page.tsx
// ============================================

export default async function DestinationPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  
  if (!countryData[country]) {
    notFound();
  }

  return <CountryPage countrySlug={country} />;
}