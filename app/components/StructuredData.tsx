import { University } from "../data/universityData";
import { CountryDetailedInfo } from "../data/countryData";
// components/StructuredData.tsx
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Global Circle Edu',
    description: 'International education consultancy for students seeking MBBS and professional degrees abroad',
    url: 'https://globalcircleedu.com',
    logo: 'https://globalcircleedu.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Hindi','Your preferred languages']
    },
    sameAs: [
      'https://facebook.com/globalcircleedu',
      'https://instagram.com/globalcircleedu',
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function UniversitySchema({ university, country }: { university: University; country: CountryDetailedInfo }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name: university.name,
    description: university.highlights,
    address: {
      '@type': 'PostalAddress',
      addressCountry: country.name
    },
    aggregateRating: university.ranking ? {
      '@type': 'AggregateRating',
      ratingValue: university.ranking,
      bestRating: '100'
    } : undefined
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

