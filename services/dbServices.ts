
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
  updateDoc, 
  limit
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { ContactFormData, ApplicationFormData, PartnerFormData } from '../types';
import type { CountryDetailedInfo } from '../app/data/countryData';
import { cleanCountryImages ,cleanUniversityImages,cleanImageUrl,cleanImageUrls} from '@/imageUtils';
import type { University } from '@/app/data/universityData';
import type { Scholarship } from '@/app/data/scholarshipData';
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






import {  RegionConfig } from '@/app/data/countryData';

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
// ============================================
// COPY-PASTE THESE FUNCTIONS TO YOUR dbServices.ts
// Add them at the end of your file
// ============================================

/**
 * Get all unique course names from all universities
 * Returns: ['MBBS', 'Engineering', 'MBA', 'BDS', ...]
 */
export async function getUniqueCourses(): Promise<string[]> {
  try {
    const universities = await getAllUniversities();
    const coursesSet = new Set<string>();
    
    universities.forEach((university) => {
      university.programs.forEach((program) => {
        if (program.name) {
          coursesSet.add(program.name);
        }
      });
    });
    
    return Array.from(coursesSet).sort();
  } catch (error) {
    console.error('Error fetching unique courses:', error);
    return [];
  }
}

/**
 * Get available courses for a specific country
 * @param countrySlug - Country slug (e.g., 'georgia')
 * @returns Promise<string[]> - Array of course names
 */
export async function getCoursesForCountry(countrySlug: string): Promise<string[]> {
  try {
    const universities = await getUniversitiesByCountry(countrySlug);
    const coursesSet = new Set<string>();
    
    universities.forEach((university) => {
      university.programs.forEach((program) => {
        if (program.name) {
          coursesSet.add(program.name);
        }
      });
    });
    
    return Array.from(coursesSet).sort();
  } catch (error) {
    console.error('Error fetching courses for country:', error);
    return [];
  }
}

/**
 * Get countries that offer a specific course
 * @param course - Course name (e.g., 'MBBS', 'Engineering')
 * @returns Promise<CountryDetailedInfo[]>
 */
export async function getCountriesByCourse(course: string): Promise<CountryDetailedInfo[]> {
  try {
    // Get all universities that offer this course
    const allUniversities = await getAllUniversities();
    const universitiesWithCourse = allUniversities.filter((university) =>
      university.programs.some((program) => program.name === course)
    );
    
    // Get unique country slugs
    const countrySlugs = [...new Set(universitiesWithCourse.map((u) => u.countrySlug))];
    
    // Fetch all countries
    const allCountries = await getAllCountries();
    
    // Filter countries that are in our list
    const filteredCountries = allCountries.filter((country) =>
      countrySlugs.includes(country.slug)
    );
    
    return filteredCountries;
  } catch (error) {
    console.error('Error fetching countries by course:', error);
    return [];
  }
}

/**
 * Get country with its available courses (enriched data)
 * @param countrySlug - Country slug
 * @returns Promise<CountryWithCourses | null>
 */
export async function getCountryWithCourses(countrySlug: string): Promise<any | null> {
  try {
    const country = await getCountryBySlug(countrySlug);
    if (!country) return null;
    
    const courses = await getCoursesForCountry(countrySlug);
    
    return {
      ...country,
      availableCourses: courses
    };
  } catch (error) {
    console.error('Error fetching country with courses:', error);
    return null;
  }
}

/**
 * Get all countries with their available courses
 * @returns Promise<any[]>
 */
export async function getAllCountriesWithCourses(): Promise<any[]> {
  try {
    const countries = await getAllCountries();
    const universities = await getAllUniversities();
    
    // Create a map of country slug to courses
    const countryCoursesMap = new Map<string, Set<string>>();
    
    universities.forEach((university) => {
      if (!countryCoursesMap.has(university.countrySlug)) {
        countryCoursesMap.set(university.countrySlug, new Set());
      }
      
      university.programs.forEach((program) => {
        if (program.name) {
          countryCoursesMap.get(university.countrySlug)!.add(program.name);
        }
      });
    });
    
    // Enrich countries with courses
    return countries.map((country) => ({
      ...country,
      availableCourses: Array.from(countryCoursesMap.get(country.slug) || []).sort()
    }));
  } catch (error) {
    console.error('Error fetching countries with courses:', error);
    return [];
  }
}

/**
 * Get universities offering a specific course
 * @param courseName - Course name (e.g., 'MBBS')
 * @returns Promise<University[]>
 */
export async function getUniversitiesByCourse(courseName: string): Promise<University[]> {
  try {
    const allUniversities = await getAllUniversities();
    
    return allUniversities.filter((university) =>
      university.programs.some((program) => program.name === courseName)
    );
  } catch (error) {
    console.error('Error fetching universities by course:', error);
    return [];
  }
}

/**
 * Get universities by country and course
 * @param countrySlug - Country slug
 * @param courseName - Course name
 * @returns Promise<University[]>
 */
export async function getUniversitiesByCountryAndCourse(
  countrySlug: string,
  courseName: string
): Promise<University[]> {
  try {
    const universities = await getUniversitiesByCountry(countrySlug);
    
    return universities.filter((university) =>
      university.programs.some((program) => program.name === courseName)
    );
  } catch (error) {
    console.error('Error fetching universities by country and course:', error);
    return [];
  }
}

// Append these to src/services/dbServices.ts




// Existing functions (getAllScholarships, getFeaturedScholarships) remain unchanged

/**
 * Get a single scholarship by slug
 */
export const getAllScholarships = async (): Promise<Scholarship[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'scholarships'));
    const scholarships: Scholarship[] = [];
    querySnapshot.forEach((doc) => {
      scholarships.push({
        id: doc.id,
        ...doc.data(),
      } as Scholarship);
    });

    // Sort: featured first, then alphabetically by title
    return scholarships.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.title.localeCompare(b.title);
    });
  } catch (error) {
    console.error('Error fetching all scholarships:', error);
    return [];
  }
};

/**
 * Get only featured scholarships
 */
export const getFeaturedScholarships = async (): Promise<Scholarship[]> => {
  try {
    const q = query(collection(db, 'scholarships'), where('featured', '==', true));
    const querySnapshot = await getDocs(q);
    const featured: Scholarship[] = [];
    querySnapshot.forEach((doc) => {
      featured.push({
        id: doc.id,
        ...doc.data(),
      } as Scholarship);
    });
    return featured;
  } catch (error) {
    console.error('Error fetching featured scholarships:', error);
    return [];
  }
};

/**
 * Get a single scholarship by slug
 */
export const getScholarshipBySlug = async (slug: string): Promise<Scholarship | null> => {
  try {
    const q = query(
      collection(db, 'scholarships'),
      where('slug', '==', slug),
      limit(1)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const docSnap = querySnapshot.docs[0];
    return {
      id: docSnap.id,
      ...docSnap.data(),
    } as Scholarship;
  } catch (error) {
    console.error('Error fetching scholarship by slug:', error);
    return null;
  }
};