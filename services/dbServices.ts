// ============================================
// DATABASE SERVICE
// All Firebase Firestore operations
// ============================================

import { collection, addDoc } from 'firebase/firestore';
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