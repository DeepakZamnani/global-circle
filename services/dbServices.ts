// import { 
//   collection, 
//   addDoc, 
//   doc, 
//   setDoc, 
//   getDoc, 
//   getDocs,
//   query,
//   where,
//   deleteDoc,
//   updateDoc 
// } from 'firebase/firestore';
// import { db } from '@/lib/firebase';
// import type { ContactFormData, ApplicationFormData, PartnerFormData } from '../types';
// import type { CountryDetailedInfo } from '../app/data/countryData';;

// /**
//  * Submit a contact form to Firestore
//  * @param formData - Contact form data
//  * @returns Promise<void>
//  */
// export const submitContactForm = async (formData: ContactFormData): Promise<void> => {
//   try {
//     await addDoc(collection(db, 'applications'), {
//       ...formData,
//       submittedAt: new Date().toISOString()
//     });
//   } catch (error) {
//     console.error('Error submitting contact form:', error);
//     throw new Error('Failed to submit contact form');
//   }
// };

// /**
//  * Submit an application form to Firestore
//  * @param formData - Application form data
//  * @returns Promise<void>
//  */
// export const submitApplicationForm = async (formData: ApplicationFormData): Promise<void> => {
//   try {
//     await addDoc(collection(db, 'applications'), {
//       ...formData,
//       submittedAt: new Date().toISOString()
//     });
//   } catch (error) {
//     console.error('Error submitting application form:', error);
//     throw new Error('Failed to submit application form');
//   }
// };

// /**
//  * Generic function to submit any form data to a specified collection
//  * @param collectionName - Firestore collection name
//  * @param formData - Form data object
//  * @returns Promise<string> - Document ID
//  */
// export const submitFormData = async (
//   collectionName: string, 
//   formData: Record<string, any>
// ): Promise<string> => {
//   try {
//     const docRef = await addDoc(collection(db, collectionName), {
//       ...formData,
//       submittedAt: new Date().toISOString()
//     });
//     return docRef.id;
//   } catch (error) {
//     console.error(`Error submitting to ${collectionName}:`, error);
//     throw new Error(`Failed to submit to ${collectionName}`);
//   }
// };

// /**
//  * Submit application with custom document ID (applicationId as document ID)
//  * This allows using the applicationId as the primary key in Firestore
//  * 
//  * Firestore structure:
//  * applications/
//  *   └── {applicationId}/
//  *       ├── applicationId: string
//  *       ├── countryCode: string
//  *       ├── countryName: string
//  *       ├── fullName: string
//  *       ├── email: string
//  *       ├── phoneNumber: string
//  *       ├── age: string
//  *       ├── country: string
//  *       ├── city: string
//  *       ├── submittedAt: string
//  *       ├── status: string
//  *       └── source: string
//  * 
//  * @param formData - Application form data with applicationId
//  * @returns Promise<string> - Document ID (applicationId)
//  */
// export const submitApplicationWithCustomId = async (
//   formData: Record<string, any>
// ): Promise<string> => {
//   try {
//     const applicationId = formData.applicationId;
    
//     if (!applicationId) {
//       throw new Error('Application ID is required');
//     }

//     // Use setDoc with the applicationId as the document ID
//     const docRef = doc(db, 'applications', applicationId);
//     await setDoc(docRef, {
//       ...formData,
//       submittedAt: formData.submittedAt || new Date().toISOString()
//     });
    
//     return applicationId;
//   } catch (error) {
//     console.error('Error submitting application:', error);
//     throw new Error('Failed to submit application');
//   }
// };


// export const submitPartnerForm = async (formData: PartnerFormData): Promise<string> => {
//   try {
//     const docRef = await addDoc(collection(db, 'partners'), {
//       ...formData,
//       submittedAt: new Date().toISOString(),
//       status: 'pending' // For admin tracking
//     });
//     return docRef.id;
//   } catch (error) {
//     console.error('Error submitting partner form:', error);
//     throw new Error('Failed to submit partnership request');
//   }
// };


// // ============================================
// // COUNTRY MANAGEMENT FUNCTIONS
// // ============================================

// /**
//  * Firestore structure for countries:
//  * countries/
//  *   └── {slug}/
//  *       ├── id: string
//  *       ├── name: string
//  *       ├── slug: string (used as document ID)
//  *       ├── flag: string
//  *       ├── heroImage: string
//  *       ├── galleryImages: string[]
//  *       ├── availableCourses: string[]
//  *       ├── overview: object
//  *       ├── stats: object
//  *       ├── whyStudyHere: object
//  *       ├── topUniversities: array
//  *       ├── programs: array
//  *       ├── costs: object
//  *       ├── eligibility: object
//  *       ├── intakes: object
//  *       ├── visa: object
//  *       ├── accommodation: object
//  *       ├── livingInfo: object
//  *       ├── workOpportunities: object
//  *       ├── recognitions: string[]
//  *       ├── careerProspects: object
//  *       ├── highlights: array
//  *       ├── advantages: string[]
//  *       └── medicalLicensing: object
//  */

// /**
//  * Get a single country by slug
//  * @param slug - Country slug (e.g., 'georgia', 'philippines')
//  * @returns Promise<CountryDetailedInfo | null>
//  */
// export const getCountryBySlug = async (slug: string): Promise<CountryDetailedInfo | null> => {
//   try {
//     const docRef = doc(db, 'countries', slug);
//     const docSnap = await getDoc(docRef);
    
//     if (docSnap.exists()) {
//       return docSnap.data() as CountryDetailedInfo;
//     }
    
//     return null;
//   } catch (error) {
//     console.error('Error fetching country:', error);
//     throw new Error('Failed to fetch country data');
//   }
// };

// /**
//  * Get all countries
//  * @returns Promise<CountryDetailedInfo[]>
//  */
// export const getAllCountries = async (): Promise<CountryDetailedInfo[]> => {
//   try {
//     const querySnapshot = await getDocs(collection(db, 'screens'));
//     const countries: CountryDetailedInfo[] = [];
    
//     querySnapshot.forEach((doc) => {
//       countries.push(doc.data() as CountryDetailedInfo);
//     });
    
//     return countries;
//   } catch (error) {
//     console.error('Error fetching countries:', error);
//     throw new Error('Failed to fetch countries');
//   }
// };

// /**
//  * Add or update a country (uses slug as document ID)
//  * @param countryData - Complete country information
//  * @returns Promise<string> - Document ID (slug)
//  */
// export const addOrUpdateCountry = async (countryData: CountryDetailedInfo): Promise<string> => {
//   try {
//     const slug = countryData.slug;
    
//     if (!slug) {
//       throw new Error('Country slug is required');
//     }

//     // Use setDoc with slug as document ID
//     const docRef = doc(db, 'countries', slug);
//     await setDoc(docRef, countryData);
    
//     return slug;
//   } catch (error) {
//     console.error('Error adding/updating country:', error);
//     throw new Error('Failed to add/update country');
//   }
// };

// /**
//  * Update specific fields of a country
//  * @param slug - Country slug
//  * @param updates - Partial country data to update
//  * @returns Promise<void>
//  */
// export const updateCountry = async (
//   slug: string, 
//   updates: Partial<CountryDetailedInfo>
// ): Promise<void> => {
//   try {
//     const docRef = doc(db, 'countries', slug);
//     await updateDoc(docRef, updates as any);
//   } catch (error) {
//     console.error('Error updating country:', error);
//     throw new Error('Failed to update country');
//   }
// };

// /**
//  * Delete a country
//  * @param slug - Country slug
//  * @returns Promise<void>
//  */
// export const deleteCountry = async (slug: string): Promise<void> => {
//   try {
//     const docRef = doc(db, 'countries', slug);
//     await deleteDoc(docRef);
//   } catch (error) {
//     console.error('Error deleting country:', error);
//     throw new Error('Failed to delete country');
//   }
// };

// /**
//  * Check if a country exists
//  * @param slug - Country slug
//  * @returns Promise<boolean>
//  */
// export const countryExists = async (slug: string): Promise<boolean> => {
//   try {
//     const docRef = doc(db, 'countries', slug);
//     const docSnap = await getDoc(docRef);
//     return docSnap.exists();
//   } catch (error) {
//     console.error('Error checking country existence:', error);
//     return false;
//   }
// };

// /**
//  * Get featured countries (for homepage)
//  * You can add a 'featured' field to country data to filter
//  * @returns Promise<CountryDetailedInfo[]>
//  */
// export const getFeaturedCountries = async (): Promise<CountryDetailedInfo[]> => {
//   try {
//     // For now, returns all countries
//     // In future, you can add a 'featured: boolean' field and query by it
//     return await getAllCountries();
//   } catch (error) {
//     console.error('Error fetching featured countries:', error);
//     throw new Error('Failed to fetch featured countries');
//   }
// };
import { 
  collection, 
  addDoc, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs,
  query,
  where,
  deleteDoc,
  updateDoc 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { ContactFormData, ApplicationFormData, PartnerFormData } from '../types';
import type { CountryDetailedInfo } from '../app/data/countryData';
import { cleanCountryImages ,cleanUniversityImages,cleanImageUrl,cleanImageUrls} from '@/imageUtils';
import type { University } from '@/app/data/universityData';
/**
 * Submit a contact form to Firestore
 * @param formData - Contact form data
 * @returns Promise<void>
 */
export const submitContactForm = async (formData: ContactFormData): Promise<void> => {
  try {
    await addDoc(collection(db, 'applications'), {
      ...formData,
      submittedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to submit contact form');
  }
};

/**
 * Submit an application form to Firestore
 * @param formData - Application form data
 * @returns Promise<void>
 */
export const submitApplicationForm = async (formData: ApplicationFormData): Promise<void> => {
  try {
    await addDoc(collection(db, 'applications'), {
      ...formData,
      submittedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error submitting application form:', error);
    throw new Error('Failed to submit application form');
  }
};

/**
 * Generic function to submit any form data to a specified collection
 * @param collectionName - Firestore collection name
 * @param formData - Form data object
 * @returns Promise<string> - Document ID
 */
export const submitFormData = async (
  collectionName: string, 
  formData: Record<string, any>
): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...formData,
      submittedAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.error(`Error submitting to ${collectionName}:`, error);
    throw new Error(`Failed to submit to ${collectionName}`);
  }
};

/**
 * Submit application with custom document ID (applicationId as document ID)
 * This allows using the applicationId as the primary key in Firestore
 * 
 * Firestore structure:
 * applications/
 *   └── {applicationId}/
 *       ├── applicationId: string
 *       ├── countryCode: string
 *       ├── countryName: string
 *       ├── fullName: string
 *       ├── email: string
 *       ├── phoneNumber: string
 *       ├── age: string
 *       ├── country: string
 *       ├── city: string
 *       ├── submittedAt: string
 *       ├── status: string
 *       └── source: string
 * 
 * @param formData - Application form data with applicationId
 * @returns Promise<string> - Document ID (applicationId)
 */
export const submitApplicationWithCustomId = async (
  formData: Record<string, any>
): Promise<string> => {
  try {
    const applicationId = formData.applicationId;
    
    if (!applicationId) {
      throw new Error('Application ID is required');
    }

    // Use setDoc with the applicationId as the document ID
    const docRef = doc(db, 'applications', applicationId);
    await setDoc(docRef, {
      ...formData,
      submittedAt: formData.submittedAt || new Date().toISOString()
    });
    
    return applicationId;
  } catch (error) {
    console.error('Error submitting application:', error);
    throw new Error('Failed to submit application');
  }
};


export const submitPartnerForm = async (formData: PartnerFormData): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'partners'), {
      ...formData,
      submittedAt: new Date().toISOString(),
      status: 'pending' // For admin tracking
    });
    return docRef.id;
  } catch (error) {
    console.error('Error submitting partner form:', error);
    throw new Error('Failed to submit partnership request');
  }
};


// ============================================
// SCREEN/COUNTRY MANAGEMENT FUNCTIONS
// COLLECTION: screens (not countries!)
// ============================================

/**
 * Firestore structure for screens:
 * screens/
 *   └── {slug}/               ← Document ID is the slug
 *       ├── id: string         (same as slug)
 *       ├── name: string
 *       ├── slug: string
 *       ├── flag: string
 *       ├── heroImage: string
 *       ├── galleryImages: string[]
 *       ├── availableCourses: string[]
 *       ├── overview: object
 *       ├── stats: object
 *       ├── whyStudyHere: object
 *       ├── topUniversities: array
 *       ├── programs: array
 *       ├── costs: object
 *       ├── eligibility: object
 *       ├── intakes: object
 *       ├── visa: object
 *       ├── accommodation: object
 *       ├── livingInfo: object
 *       ├── workOpportunities: object
 *       ├── recognitions: string[]
 *       ├── careerProspects: object
 *       ├── highlights: array
 *       ├── advantages: string[]
 *       └── medicalLicensing: object
 */

/**
 * Get a single country/screen by slug
 * @param slug - Country slug (e.g., 'georgia', 'philippines')
 * @returns Promise<CountryDetailedInfo | null>
 */
export const getCountryBySlug = async (slug: string): Promise<CountryDetailedInfo | null> => {
  try {
    // FIXED: Fetch from 'screens' collection, not 'countries'
    const docRef = doc(db, 'screens', slug);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data() as CountryDetailedInfo;
      // Ensure id and slug are set
      return {
        ...data,
        id: docSnap.id,
        slug: docSnap.id
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching country:', error);
    throw new Error('Failed to fetch country data');
  }
};

/**
 * Get all countries/screens
 * @returns Promise<CountryDetailedInfo[]>
 */
export const getAllCountries = async (): Promise<CountryDetailedInfo[]> => {
  try {
    // FIXED: Removed typo 'screenss' -> 'screens'
    const querySnapshot = await getDocs(collection(db, 'screens'));
    const countries: CountryDetailedInfo[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data() as CountryDetailedInfo;
      countries.push({
        ...data,
        id: doc.id,
        slug: doc.id
      });
    });
    
    return countries;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw new Error('Failed to fetch countries');
  }
};

/**
 * Get all country slugs (for static generation)
 * @returns Promise<string[]>
 */
export const getAllCountrySlugs = async (): Promise<string[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'screens'));
    return querySnapshot.docs.map(doc => doc.id);
  } catch (error) {
    console.error('Error fetching country slugs:', error);
    return [];
  }
};

/**
 * Add or update a country/screen (uses slug as document ID)
 * @param countryData - Complete country information
 * @returns Promise<string> - Document ID (slug)
 */
export const addOrUpdateCountry = async (countryData: CountryDetailedInfo): Promise<string> => {
  try {
    const slug = countryData.slug;
    
    if (!slug) {
      throw new Error('Country slug is required');
    }

    // FIXED: Save to 'screens' collection, not 'countries'
    // Use setDoc with slug as document ID
    const docRef = doc(db, 'screens', slug);
    
    // Remove 'id' from data since document ID is the slug
    const { id, ...dataToSave } = countryData;
    
    await setDoc(docRef, dataToSave);
    
    return slug;
  } catch (error) {
    console.error('Error adding/updating country:', error);
    throw new Error('Failed to add/update country');
  }
};

/**
 * Update specific fields of a country/screen
 * @param slug - Country slug
 * @param updates - Partial country data to update
 * @returns Promise<void>
 */
export const updateCountry = async (
  slug: string, 
  updates: Partial<CountryDetailedInfo>
): Promise<void> => {
  try {
    // FIXED: Update in 'screens' collection
    const docRef = doc(db, 'screens', slug);
    await updateDoc(docRef, updates as any);
  } catch (error) {
    console.error('Error updating country:', error);
    throw new Error('Failed to update country');
  }
};

/**
 * Delete a country/screen
 * @param slug - Country slug
 * @returns Promise<void>
 */
export const deleteCountry = async (slug: string): Promise<void> => {
  try {
    // FIXED: Delete from 'screens' collection
    const docRef = doc(db, 'screens', slug);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting country:', error);
    throw new Error('Failed to delete country');
  }
};

/**
 * Check if a country/screen exists
 * @param slug - Country slug
 * @returns Promise<boolean>
 */
export const countryExists = async (slug: string): Promise<boolean> => {
  try {
    // FIXED: Check in 'screens' collection
    const docRef = doc(db, 'screens', slug);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  } catch (error) {
    console.error('Error checking country existence:', error);
    return false;
  }
};

/**
 * Get featured countries (for homepage)
 * You can add a 'featured' field to country data to filter
 * @returns Promise<CountryDetailedInfo[]>
 */
export const getFeaturedCountries = async (): Promise<CountryDetailedInfo[]> => {
  try {
    // For now, returns all countries
    // In future, you can add a 'featured: boolean' field and query by it
    return await getAllCountries();
  } catch (error) {
    console.error('Error fetching featured countries:', error);
    throw new Error('Failed to fetch featured countries');
  }
};
// ============================================
// DATABASE SERVICES
// File: services/dbServices.ts
// Firestore operations for Countries & Universities
// ============================================



// ============================================
// COUNTRY SERVICES
// ============================================

/**
 * Get country data by slug from Firestore
 * Collection: screens -> Document: country-{slug}
 */


// ============================================
// UNIVERSITY SERVICES
// ============================================

/**
 * Get university data by slug from Firestore
 * Collection: universities -> Document: {slug}
 * Example: universities/kazan-federal-university
 */
export async function getUniversityBySlug(slug: string): Promise<University | null> {
  try {
    const docRef = doc(db, 'universities', slug);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = { ...docSnap.data(), id: docSnap.id } as University;
      // Clean image URLs to remove trailing spaces and control characters
      return cleanUniversityImages(data);
    }
    return null;
  } catch (error) {
    console.error(`Error fetching university ${slug}:`, error);
    return null;
  }
}

/**
 * Get all university slugs for static generation
 */
export async function getAllUniversitySlugs(): Promise<string[]> {
  try {
    const universitiesRef = collection(db, 'universities');
    const querySnapshot = await getDocs(universitiesRef);
    
    const slugs: string[] = [];
    querySnapshot.forEach((doc) => {
      slugs.push(doc.id); // Document ID is the slug
    });
    
    return slugs;
  } catch (error) {
    console.error('Error fetching university slugs:', error);
    return [];
  }
}

/**
 * Get all universities data
 */
export async function getAllUniversities(): Promise<University[]> {
  try {
    const universitiesRef = collection(db, 'universities');
    const querySnapshot = await getDocs(universitiesRef);
    
    const universities: University[] = [];
    querySnapshot.forEach((doc) => {
      const data = { ...doc.data(), id: doc.id } as University;
      // Clean image URLs
      universities.push(cleanUniversityImages(data));
    });
    
    return universities;
  } catch (error) {
    console.error('Error fetching all universities:', error);
    return [];
  }
}

/**
 * Get universities by country slug
 */
export async function getUniversitiesByCountry(countrySlug: string): Promise<University[]> {
  try {
    const universitiesRef = collection(db, 'universities');
    const q = query(universitiesRef, where('countrySlug', '==', countrySlug));
    const querySnapshot = await getDocs(q);
    
    const universities: University[] = [];
    querySnapshot.forEach((doc) => {
      const data = { ...doc.data(), id: doc.id } as University;
      // Clean image URLs
      universities.push(cleanUniversityImages(data));
    });
    
    return universities;
  } catch (error) {
    console.error(`Error fetching universities for ${countrySlug}:`, error);
    return [];
  }
}

/**
 * Get universities by program category
 */
export async function getUniversitiesByCategory(category: string): Promise<University[]> {
  try {
    const universitiesRef = collection(db, 'universities');
    const querySnapshot = await getDocs(universitiesRef);
    
    const universities: University[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data() as University;
      // Check if any program matches the category
      const hasCategory = data.programs?.some(p => p.category === category);
      if (hasCategory) {
        universities.push({ ...data, id: doc.id });
      }
    });
    
    return universities;
  } catch (error) {
    console.error(`Error fetching universities for category ${category}:`, error);
    return [];
  }
}
// Additions to dbServices.ts (add these functions at the end)

// Get unique available courses across all countries
export async function getUniqueCourses(): Promise<string[]> {
  try {
    const countries = await getAllCountries();
    const courseSet = new Set<string>();
    countries.forEach((country) => {
      country.availableCourses?.forEach((course) => {
        courseSet.add(course.trim());
      });
    });
    return Array.from(courseSet).sort();
  } catch (error) {
    console.error('Error fetching unique courses:', error);
    return [];
  }
}

// Get countries that offer a specific course
export async function getCountriesByCourse(course: string): Promise<CountryDetailedInfo[]> {
  try {
    const countries = await getAllCountries();
    return countries.filter((country) => 
      country.availableCourses?.some((c) => c.trim() === course.trim())
    );
  } catch (error) {
    console.error('Error fetching countries by course:', error);
    return [];
  }
}



// Add these functions to your existing dbServices.ts file

// ============================================
// REGION-BASED COUNTRY FUNCTIONS
// ============================================

import {  RegionConfig } from '@/app/data/countryData';

/**
 * Get countries organized by their regions
 * Returns a Map with region name as key and array of countries as value
 * @returns Promise<Map<string, CountryDetailedInfo[]>>
 */
export async function getCountriesByRegions(): Promise<Map<string, CountryDetailedInfo[]>> {
  try {
    const allCountries = await getAllCountries();
    const regionMap = new Map<string, CountryDetailedInfo[]>();
    
    // Group countries by region
    allCountries.forEach((country) => {
      const regionName = country.region || 'Other Destinations';
      
      if (!regionMap.has(regionName)) {
        regionMap.set(regionName, []);
      }
      
      regionMap.get(regionName)!.push(country);
    });
    
    // Sort countries within each region by displayOrder (if available)
    regionMap.forEach((countries, region) => {
      countries.sort((a, b) => {
        const orderA = a.regionDisplayOrder ?? 999;
        const orderB = b.regionDisplayOrder ?? 999;
        return orderA - orderB;
      });
    });
    
    return regionMap;
  } catch (error) {
    console.error('Error fetching countries by regions:', error);
    throw new Error('Failed to fetch countries by regions');
  }
}

/**
 * Get countries for a specific region
 * @param regionName - Name of the region
 * @returns Promise<CountryDetailedInfo[]>
 */
export async function getCountriesByRegion(regionName: string): Promise<CountryDetailedInfo[]> {
  try {
    const allCountries = await getAllCountries();
    
    // Filter countries by region
    const regionCountries = allCountries.filter(
      (country) => country.region === regionName
    );
    
    // Sort by display order
    regionCountries.sort((a, b) => {
      const orderA = a.regionDisplayOrder ?? 999;
      const orderB = b.regionDisplayOrder ?? 999;
      return orderA - orderB;
    });
    
    return regionCountries;
  } catch (error) {
    console.error(`Error fetching countries for region ${regionName}:`, error);
    throw new Error('Failed to fetch countries for region');
  }
}

/**
 * Get organized region data for destinations page
 * Returns data in format ready for the destinations page
 * @returns Promise<Record<string, RegionData>>
 */
export interface RegionData {
  description: string;
  color: string;
  countries: CountryCard[];
}

export interface CountryCard {
  name: string;
  slug: string;
  flag: string;
  universities: string;
  image: string;
}

export async function getOrganizedDestinations(): Promise<Record<string, RegionData>> {
  try {
    // Get all countries grouped by region
    const regionMap = await getCountriesByRegions();
    
    // Get region configurations (you can optionally fetch from Firebase)
    const regionConfigs = getDefaultRegionConfigs();
    
    const organizedData: Record<string, RegionData> = {};
    
    // Organize data for each region
    regionMap.forEach((countries, regionName) => {
      const config = regionConfigs[regionName] || {
        description: 'Explore education opportunities in this region',
        color: '#64748B'
      };
      
      organizedData[regionName] = {
        description: config.description,
        color: config.color,
        countries: countries.map((country) => ({
          name: country.name,
          slug: country.slug,
          flag: country.flag,
          universities: country.stats.totalUniversities,
          image: country.heroImage
        }))
      };
    });
    
    return organizedData;
  } catch (error) {
    console.error('Error organizing destinations:', error);
    throw new Error('Failed to organize destinations');
  }
}

/**
 * Default region configurations
 * Can be moved to Firebase collection 'regions' for dynamic management
 */
function getDefaultRegionConfigs(): Record<string, { description: string; color: string }> {
  return {
    'Popular Destinations': {
      description: 'Most preferred affordable & NMC-approved destinations for Indian students in 2025-2026',
      color: '#FF6B35'
    },
    'South Asia & Nearby': {
      description: 'Proximate options with cultural similarity, direct NMC recognition & affordable fees',
      color: '#2EC4B6'
    },
    'Eastern & Central Europe': {
      description: 'European-standard MBBS with good clinical exposure & growing popularity',
      color: '#8B5CF6'
    },
    'Western Europe': {
      description: 'Premium education with world-class infrastructure and research opportunities',
      color: '#3B82F6'
    },
    'North America': {
      description: 'Top-tier universities with global recognition and diverse opportunities',
      color: '#10B981'
    },
    'Other Destinations': {
      description: 'Emerging & specialized options with NMC recognition & varied benefits',
      color: '#64748B'
    }
  };
}

// ============================================
// OPTIONAL: FIREBASE REGION CONFIG MANAGEMENT
// If you want to store region configs in Firebase
// ============================================

/**
 * Get region configurations from Firebase
 * Collection: regions
 * @returns Promise<Record<string, RegionConfig>>
 */
export async function getRegionConfigs(): Promise<Record<string, { description: string; color: string; displayOrder: number }>> {
  try {
    const regionsRef = collection(db, 'regions');
    const querySnapshot = await getDocs(regionsRef);
    
    const configs: Record<string, { description: string; color: string; displayOrder: number }> = {};
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      configs[doc.id] = {
        description: data.description || '',
        color: data.color || '#64748B',
        displayOrder: data.displayOrder || 999
      };
    });
    
    // If no configs in Firebase, return defaults
    if (Object.keys(configs).length === 0) {
      const defaults = getDefaultRegionConfigs();
      return Object.keys(defaults).reduce((acc, key, index) => {
        acc[key] = { ...defaults[key], displayOrder: index };
        return acc;
      }, {} as Record<string, { description: string; color: string; displayOrder: number }>);
    }
    
    return configs;
  } catch (error) {
    console.error('Error fetching region configs:', error);
    return getDefaultRegionConfigs() as Record<string, { description: string; color: string; displayOrder: number }>;
  }
}

/**
 * Add or update region configuration
 * @param regionName - Name of the region
 * @param config - Region configuration
 * @returns Promise<string>
 */
export async function addOrUpdateRegionConfig(
  regionName: string,
  config: { description: string; color: string; displayOrder: number }
): Promise<string> {
  try {
    const docRef = doc(db, 'regions', regionName);
    await setDoc(docRef, config);
    return regionName;
  } catch (error) {
    console.error('Error adding/updating region config:', error);
    throw new Error('Failed to add/update region config');
  }
}

/**
 * Get available regions from all countries
 * @returns Promise<string[]>
 */
export async function getAvailableRegions(): Promise<string[]> {
  try {
    const allCountries = await getAllCountries();
    const regionsSet = new Set<string>();
    
    allCountries.forEach((country) => {
      if (country.region) {
        regionsSet.add(country.region);
      }
    });
    
    return Array.from(regionsSet).sort();
  } catch (error) {
    console.error('Error fetching available regions:', error);
    return [];
  }
}