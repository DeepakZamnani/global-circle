// ============================================
// TYPES & MODELS
// Data structures for the application
// ============================================

export interface ContactFormData {
  name: string;
  country: string;
  city: string;
  phone: string;
  email: string;
}

export interface ApplicationFormData {
  name: string;
  country: string;
  city: string;
  phone: string;
  email: string;
}

export interface Message {
  type: 'success' | 'error' | '';
  text: string;
}

// Firestore document structure (with timestamp)
export interface ContactDocument extends ContactFormData {
  submittedAt: string;
}

export interface ApplicationDocument extends ApplicationFormData {
  submittedAt: string;
}

export interface PartnerFormData {
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  partnershipType: string; // University, Agency, Corporate, School
  message: string;
}

export interface PartnerDocument extends PartnerFormData {
  submittedAt: string;
}
