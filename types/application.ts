// ============================================
// APPLICATION MODEL
// Type definitions for country-specific applications
// ============================================

export interface ApplicationFormData {
  // Auto-generated fields
  applicationId: string;        // Primary key - will be used as document ID later
  countryCode: string;          // Country slug (e.g., 'russia', 'uzbekistan')
  countryName: string;          // Full country name
  
  // User input fields
  fullName: string;
  email: string;
  phoneNumber: string;
  age: string;
  country: string;              // User's home country
  city: string;                 // User's city
  
  // Metadata
  submittedAt: string;          // ISO timestamp
  status: 'pending' | 'reviewed' | 'contacted' | 'converted';
  source: 'country_page';       // Where the application came from
}

/**
 * Generate a unique application ID
 * Format: APP-{countryCode}-{timestamp}-{random}
 * Example: APP-RUS-1706012345678-A3B2
 */
export const generateApplicationId = (countryCode: string): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  const code = countryCode.toUpperCase().substring(0, 3);
  return `APP-${code}-${timestamp}-${random}`;
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (basic validation)
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-+()]{10,}$/;
  return phoneRegex.test(phone);
};

/**
 * Validate age (must be between 16-35 for MBBS applications)
 */
export const isValidAge = (age: string): boolean => {
  const ageNum = parseInt(age, 10);
  return !isNaN(ageNum) && ageNum >= 16 && ageNum <= 35;
};
