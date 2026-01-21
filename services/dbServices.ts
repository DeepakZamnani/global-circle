import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { ContactFormData, ApplicationFormData } from '../types';

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