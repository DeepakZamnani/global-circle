/**
 * FIRESTORE MIGRATION SCRIPT
 * 
 * This script helps you migrate your existing local country and university data
 * from countryData.ts and universityData.ts to Firestore.
 * 
 * Usage:
 * 1. Make sure Firebase is properly initialized in your project
 * 2. Import your existing data
 * 3. Run this script to populate Firestore
 * 
 * Note: This is a one-time migration script
 */

import { saveCountry, saveUniversity } from '../../services/dbServices';
import { comprehensiveCountryData } from './countryData';
import { universityDatabase } from './universityData';

/**
 * Migrate all countries to Firestore
 */
export async function migrateCountriesToFirestore(countryData: Record<string, any>) {
  console.log('🚀 Starting country migration...');
  
  const results = {
    success: [] as string[],
    failed: [] as string[]
  };

  for (const [slug, country] of Object.entries(countryData)) {
    try {
      console.log(`📍 Migrating ${country.name}...`);
      
      await saveCountry(slug, {
        name: country.name,
        slug: country.slug,
        flag: country.flag,
        heroImage: country.heroImage,
        galleryImages: country.galleryImages,
        tagline: country.tagline,
        description: country.description,
        color: country.color,
        stats: country.stats,
        highlights: country.highlights,
        popularPrograms: country.popularPrograms,
        topUniversities: country.topUniversities,
        topCities: country.topCities,
        requirements: country.requirements,
        intakes: country.intakes,
        tuitionRange: country.tuitionRange,
        livingCost: country.livingCost
      });
      
      results.success.push(country.name);
      console.log(`✅ ${country.name} migrated successfully`);
    } catch (error) {
      console.error(`❌ Failed to migrate ${country.name}:`, error);
      results.failed.push(country.name);
    }
  }

  console.log('\n📊 Migration Summary:');
  console.log(`✅ Successful: ${results.success.length}`);
  console.log(`❌ Failed: ${results.failed.length}`);
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed migrations:', results.failed);
  }

  return results;
}

/**
 * Migrate all universities to Firestore
 */
export async function migrateUniversitiesToFirestore(universityData: any[]) {
  console.log('🚀 Starting university migration...');
  
  const results = {
    success: [] as string[],
    failed: [] as string[]
  };

  for (const university of universityData) {
    try {
      console.log(`🏛️ Migrating ${university.name}...`);
      
      // Create a slug from the university name if it doesn't exist
      const slug = university.slug || university.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      
      await saveUniversity(slug, {
        name: university.name,
        slug: slug,
        countrySlug: university.countrySlug || university.country?.toLowerCase(),
        city: university.city,
        establishedYear: university.establishedYear,
        nmcApproved: university.nmcApproved,
        overview: university.overview,
        fees: university.fees,
        programs: university.programs,
        admissionRequirements: university.admissionRequirements,
        highlights: university.highlights,
        campusLife: university.campusLife
      });
      
      results.success.push(university.name);
      console.log(`✅ ${university.name} migrated successfully`);
    } catch (error) {
      console.error(`❌ Failed to migrate ${university.name}:`, error);
      results.failed.push(university.name);
    }
  }

  console.log('\n📊 Migration Summary:');
  console.log(`✅ Successful: ${results.success.length}`);
  console.log(`❌ Failed: ${results.failed.length}`);
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed migrations:', results.failed);
  }

  return results;
}

/**
 * Main migration function
 * Run this to migrate all data
 */
export async function runFullMigration(
  countryData: Record<string, any>,
  universityData: any[]
) {
  console.log('🎯 Starting full migration to Firestore...\n');
  
  // Migrate countries first
  const countryResults = await migrateCountriesToFirestore(countryData);
  
  console.log('\n---\n');
  
  // Then migrate universities
  const universityResults = await migrateUniversitiesToFirestore(universityData);
  
  console.log('\n🎉 Full migration complete!');
  
  return {
    countries: countryResults,
    universities: universityResults
  };
}

/**
 * Example usage:
 * 
 * import { comprehensiveCountryData } from './data/countryData';
 * import { universityDatabase } from './data/universityData';
 * import { runFullMigration } from './scripts/migrateToFirestore';
 * 
 * // Run migration
 * runFullMigration(comprehensiveCountryData, universityDatabase)
 *   .then(results => {
 *     console.log('Migration completed:', results);
 *   })
 *   .catch(error => {
 *     console.error('Migration failed:', error);
 *   });
 */