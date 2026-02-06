// migration-assign-regions.ts
// Run this script once to assign regions to all existing countries in Firebase

import { updateCountry } from '@/services/dbServices';

/**
 * Country to Region mapping
 * Update this based on your requirements
 */
const COUNTRY_REGION_MAPPING = {
  // Popular Destinations
  'russia': { 
    region: 'Popular Destinations', 
    displayOrder: 1 
  },
  'china': { 
    region: 'Popular Destinations', 
    displayOrder: 2 
  },
  'kazakhstan': { 
    region: 'Popular Destinations', 
    displayOrder: 3 
  },
  'kyrgyzstan': { 
    region: 'Popular Destinations', 
    displayOrder: 4 
  },
  'georgia': { 
    region: 'Popular Destinations', 
    displayOrder: 5 
  },
  'philippines': { 
    region: 'Popular Destinations', 
    displayOrder: 6 
  },
  'canada': { 
    region: 'Popular Destinations', 
    displayOrder: 7 
  },
  'uzbekistan': { 
    region: 'Popular Destinations', 
    displayOrder: 8 
  },

  // South Asia & Nearby
  'nepal': { 
    region: 'South Asia & Nearby', 
    displayOrder: 1 
  },
  'bangladesh': { 
    region: 'South Asia & Nearby', 
    displayOrder: 2 
  },

  // Eastern & Central Europe
  'poland': { 
    region: 'Eastern & Central Europe', 
    displayOrder: 1 
  },
  'romania': { 
    region: 'Eastern & Central Europe', 
    displayOrder: 2 
  },
  'latvia': { 
    region: 'Eastern & Central Europe', 
    displayOrder: 3 
  },
  'lithuania': { 
    region: 'Eastern & Central Europe', 
    displayOrder: 4 
  },
  'ukraine': { 
    region: 'Eastern & Central Europe', 
    displayOrder: 5 
  },
  'belarus': { 
    region: 'Eastern & Central Europe', 
    displayOrder: 6 
  },

  // Other Destinations
  'armenia': { 
    region: 'Other Destinations', 
    displayOrder: 1 
  },
  'egypt': { 
    region: 'Other Destinations', 
    displayOrder: 2 
  },
  'malaysia': { 
    region: 'Other Destinations', 
    displayOrder: 3 
  },
  'mauritius': { 
    region: 'Other Destinations', 
    displayOrder: 4 
  },
  'azerbaijan': { 
    region: 'Other Destinations', 
    displayOrder: 5 
  },
};

/**
 * Run the migration
 */
export async function assignRegionsToCountries() {
  console.log('🚀 Starting region assignment migration...\n');
  
  const results = {
    success: [] as string[],
    failed: [] as { slug: string; error: string }[],
  };

  for (const [slug, data] of Object.entries(COUNTRY_REGION_MAPPING)) {
    try {
      console.log(`⏳ Updating ${slug}...`);
      
      await updateCountry(slug, {
        region: data.region,
        regionDisplayOrder: data.displayOrder
      });
      
      results.success.push(slug);
      console.log(`✅ Updated ${slug} → ${data.region} (order: ${data.displayOrder})`);
      
    } catch (error: any) {
      const errorMessage = error?.message || 'Unknown error';
      results.failed.push({ slug, error: errorMessage });
      console.error(`❌ Failed to update ${slug}: ${errorMessage}`);
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 MIGRATION SUMMARY');
  console.log('='.repeat(50));
  console.log(`✅ Successful: ${results.success.length}`);
  console.log(`❌ Failed: ${results.failed.length}`);
  console.log('='.repeat(50) + '\n');

  if (results.failed.length > 0) {
    console.log('❌ Failed countries:');
    results.failed.forEach(({ slug, error }) => {
      console.log(`   - ${slug}: ${error}`);
    });
  }

  return results;
}

// If running this file directly (not imported)
if (require.main === module) {
  assignRegionsToCountries()
    .then(() => {
      console.log('\n✨ Migration completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Migration failed:', error);
      process.exit(1);
    });
}

// Export for use in other scripts or admin panel
export default assignRegionsToCountries;