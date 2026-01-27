import { 
  collection, 
  addDoc, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs,
  query,
  where 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { ContactFormData, ApplicationFormData ,PartnerFormData} from '../types';


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

// ============================================
// COUNTRY DATA SERVICES
// ============================================

export interface CountryInfo {
  id?: string;
  name: string;
  slug: string;
  flag: string;
  heroImage: string;
  galleryImages: string[];
  tagline: string;
  description: string;
  color: string;
  stats: {
    universities: string;
    programs: string;
    intlStudents: string;
    globalRank: string;
  };
  highlights: { title: string; desc: string }[];
  popularPrograms: string[];
  topUniversities: string[];
  topCities: string[];
  requirements: string[];
  intakes: string[];
  tuitionRange: string;
  livingCost: string;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Fetch all countries from Firestore
 * 
 * Firestore structure:
 * countries/
 *   └── {countrySlug}/
 *       ├── name: string
 *       ├── slug: string
 *       ├── flag: string
 *       ├── heroImage: string
 *       ├── galleryImages: string[]
 *       ├── tagline: string
 *       ├── description: string
 *       ├── color: string
 *       ├── stats: object
 *       ├── highlights: array
 *       ├── popularPrograms: string[]
 *       ├── topUniversities: string[]
 *       ├── topCities: string[]
 *       ├── requirements: string[]
 *       ├── intakes: string[]
 *       ├── tuitionRange: string
 *       ├── livingCost: string
 *       ├── createdAt: string
 *       └── updatedAt: string
 * 
 * @returns Promise<Record<string, CountryInfo>> - Object with country slugs as keys
 */
export const getAllCountries = async (): Promise<Record<string, CountryInfo>> => {
  try {
    const countriesRef = collection(db, 'countries');
    const querySnapshot = await getDocs(countriesRef);
    
    const countries: Record<string, CountryInfo> = {};
    
    querySnapshot.forEach((doc) => {
      const data = doc.data() as CountryInfo;
      countries[doc.id] = {
        ...data,
        id: doc.id
      };
    });
    
    return countries;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw new Error('Failed to fetch countries');
  }
};

/**
 * Fetch a single country by slug from Firestore
 * @param slug - Country slug (e.g., 'canada', 'australia')
 * @returns Promise<CountryInfo | null> - Country data or null if not found
 */
export const getCountryBySlug = async (slug: string): Promise<CountryInfo | null> => {
  try {
    const countryRef = doc(db, 'countries', slug);
    const countryDoc = await getDoc(countryRef);
    
    if (countryDoc.exists()) {
      return {
        ...countryDoc.data() as CountryInfo,
        id: countryDoc.id
      };
    }
    
    return null;
  } catch (error) {
    console.error(`Error fetching country ${slug}:`, error);
    throw new Error(`Failed to fetch country ${slug}`);
  }
};

/**
 * Add or update a country in Firestore
 * @param slug - Country slug (used as document ID)
 * @param countryData - Country information
 * @returns Promise<void>
 */
export const saveCountry = async (
  slug: string, 
  countryData: Omit<CountryInfo, 'id' | 'createdAt' | 'updatedAt'>
): Promise<void> => {
  try {
    const countryRef = doc(db, 'countries', slug);
    const existingDoc = await getDoc(countryRef);
    
    const timestamp = new Date().toISOString();
    
    await setDoc(countryRef, {
      ...countryData,
      updatedAt: timestamp,
      ...(existingDoc.exists() ? {} : { createdAt: timestamp })
    });
  } catch (error) {
    console.error(`Error saving country ${slug}:`, error);
    throw new Error(`Failed to save country ${slug}`);
  }
};

// ============================================
// UNIVERSITY DATA SERVICES
// ============================================

export interface UniversityInfo {
  id?: string;
  name: string;
  slug: string;
  countrySlug: string;
  city: string;
  establishedYear: number;
  nmcApproved: boolean;
  overview: string;
  fees: {
    tuitionPerYear: string;
    hostelPerYear?: string;
    totalFirstYear?: string;
  };
  programs: {
    name: string;
    duration: string;
    degree: string;
  }[];
  admissionRequirements?: string[];
  highlights?: string[];
  campusLife?: string;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Fetch all universities from Firestore
 * @returns Promise<UniversityInfo[]> - Array of all universities
 */
export const getAllUniversities = async (): Promise<UniversityInfo[]> => {
  try {
    const universitiesRef = collection(db, 'universities');
    const querySnapshot = await getDocs(universitiesRef);
    
    const universities: UniversityInfo[] = [];
    
    querySnapshot.forEach((doc) => {
      universities.push({
        ...doc.data() as UniversityInfo,
        id: doc.id
      });
    });
    
    return universities;
  } catch (error) {
    console.error('Error fetching universities:', error);
    throw new Error('Failed to fetch universities');
  }
};

/**
 * Fetch universities by country slug
 * @param countrySlug - Country slug (e.g., 'russia', 'georgia')
 * @returns Promise<UniversityInfo[]> - Array of universities in that country
 */
export const getUniversitiesByCountry = async (countrySlug: string): Promise<UniversityInfo[]> => {
  try {
    const universitiesRef = collection(db, 'universities');
    const q = query(universitiesRef, where('countrySlug', '==', countrySlug));
    const querySnapshot = await getDocs(q);
    
    const universities: UniversityInfo[] = [];
    
    querySnapshot.forEach((doc) => {
      universities.push({
        ...doc.data() as UniversityInfo,
        id: doc.id
      });
    });
    
    return universities;
  } catch (error) {
    console.error(`Error fetching universities for ${countrySlug}:`, error);
    throw new Error(`Failed to fetch universities for ${countrySlug}`);
  }
};

/**
 * Fetch a single university by slug
 * @param slug - University slug
 * @returns Promise<UniversityInfo | null> - University data or null if not found
 */
export const getUniversityBySlug = async (slug: string): Promise<UniversityInfo | null> => {
  try {
    const universityRef = doc(db, 'universities', slug);
    const universityDoc = await getDoc(universityRef);
    
    if (universityDoc.exists()) {
      return {
        ...universityDoc.data() as UniversityInfo,
        id: universityDoc.id
      };
    }
    
    return null;
  } catch (error) {
    console.error(`Error fetching university ${slug}:`, error);
    throw new Error(`Failed to fetch university ${slug}`);
  }
};

/**
 * Add or update a university in Firestore
 * @param slug - University slug (used as document ID)
 * @param universityData - University information
 * @returns Promise<void>
 */
export const saveUniversity = async (
  slug: string,
  universityData: Omit<UniversityInfo, 'id' | 'createdAt' | 'updatedAt'>
): Promise<void> => {
  try {
    const universityRef = doc(db, 'universities', slug);
    const existingDoc = await getDoc(universityRef);
    
    const timestamp = new Date().toISOString();
    
    await setDoc(universityRef, {
      ...universityData,
      updatedAt: timestamp,
      ...(existingDoc.exists() ? {} : { createdAt: timestamp })
    });
  } catch (error) {
    console.error(`Error saving university ${slug}:`, error);
    throw new Error(`Failed to save university ${slug}`);
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
