import UniversityPage from '../UniversityPage'
import { getUniversityBySlug, getAllUniversitySlugs } from '@/services/dbServices';
import { notFound } from 'next/navigation';

// ============================================
// DYNAMIC UNIVERSITY PAGE ROUTE
// File: app/universities/[slug]/page.tsx
// Fetches from Firestore 'universities' collection
// ============================================

// Generate static params for all universities at build time
export async function generateStaticParams() {
  try {
    const slugs = await getAllUniversitySlugs();
    return slugs.map((slug) => ({
      slug: slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function UniversityDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  // Fetch from Firestore
  const universityData = await getUniversityBySlug(slug);
  
  if (!universityData) {
    notFound();
  }

  return <UniversityPage universitySlug={slug} universityData={universityData} />;
}