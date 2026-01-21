// import CountryPage  from './CountryPage';
// import { comprehensiveCountryData } from '../data/countryData'
// import { notFound } from 'next/navigation';

// // ============================================
// // DYNAMIC COUNTRY PAGE ROUTE
// // /destinations/[country]
// // ============================================

// // Generate static params for all countries
// export async function generateStaticParams() {
//   return Object.keys(comprehensiveCountryData).map((slug) => ({
//     country: slug,
//   }));
// }

// // Generate metadata for SEO
// export async function generateMetadata({ params }: { params: { country: string } }) {
//   const country =  countryData[params.country];
  
//   if (!country) {
//     return {
//       title: 'Country Not Found',
//     };
//   }

//   return {
//     title: `Study in ${country.name} | Global Circle Edu`,
//     description: country.description,
//   };
// }

// // Page Component
// export default function DestinationPage({ params }: { params: { country: string } }) {
//   const country = countryData[params.country];

//   if (!country) {
//     notFound();
//   }

//   return <CountryPage countrySlug={params.country} />;
// }
// app/destinations/[country]/page.tsx
import { notFound } from 'next/navigation';
import CountryPage from './CountryPage';           // adjust path as needed
import * as countryData from '../data/countryData'; // adjust path as needed

// ============================================
// DYNAMIC COUNTRY PAGE ROUTE
// /destinations/[country]
// ============================================

// Generate static params for all available countries
export async function generateStaticParams() {
  return Object.keys(countryData.comprehensiveCountryData).map((slug) => ({
    country: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { country: string } }) {
  const country = countryData.comprehensiveCountryData[params.country];

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
export default function DestinationPage({ params }: { params: { country: string } }) {
  const countrySlug = params.country.toLowerCase();
  const country = countryData.comprehensiveCountryData[countrySlug];

  if (!country) {
    notFound();
  }

  // Pass the country slug to the CountryPage component
  return <CountryPage countrySlug={countrySlug} />;
}