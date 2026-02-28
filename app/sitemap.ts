// Create app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllCountries, getAllUniversities } from '@/services/dbServices'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://globalcircleedu.com'
  
  const countries = await getAllCountries()
  const universities = await getAllUniversities()
  
  const countryUrls = countries.map((country) => ({
    url: `${baseUrl}/countries/${country.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  const universityUrls = universities.map((uni) => ({
    url: `${baseUrl}/universities/${uni.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...countryUrls,
    ...universityUrls,
  ]
}