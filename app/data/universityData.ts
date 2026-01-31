// ============================================
// UNIVERSITY DATA - Comprehensive Database
// Detailed information for NMC-approved medical universities
// ============================================

export interface University {
  id: string;
  name: string;
  shortName?: string;
  country: string;
  countrySlug: string;
  city: string;
  state?: string;
  flag: string;
  
  // Basic Info
  establishedYear: number;
  universityType: 'Public' | 'Private';
  logo?: string;
  website?: string;
  
  // Images
  heroImage: string;
  galleryImages: string[];
  
  // Quick Overview (2-3 lines max)
  tagline: string; // One compelling line
  
  // Rankings & Recognition
  ranking: {
    globalRank?: number;
    countryRank?: number;
    category?: string; // "Top 50 Medical", "Tier-1 Engineering"
  };
  
  accreditations: string[]; // Just names: ["NMC", "WHO", "ABET"]
  
  // Key Statistics (Numbers speak louder)
  stats: {
    totalStudents: number;
    internationalStudents: number;
    indianStudents: number;
    facultyCount: number;
    facultyRatio: string; // "1:8"
    campusSize: string; // "120 acres"
    passRate?: string; // "95%"
    placementRate?: string; // "89%"
  };
  
  // Programs (Minimal)
  programs: {
    name: string;
    category: string; // "Medical", "Engineering", "Business"
    duration: string; // "6 years", "4 years"
    degree: string; // "MBBS", "B.Tech", "MBA"
    intakes: string[]; // ["September", "February"]
    seats?: number;
  }[];
  
  // Fee Structure (Just numbers)
  fees: {
    tuitionPerYear: number;
    hostelPerYear: number;
    totalFirstYear: number;
    totalCourse: number;
    currency: string; // "USD", "EUR", "INR"
  };
  
  // Eligibility (Quick checklist)
  eligibility: {
    exam?: string; // "NEET", "JEE", "IELTS"
    minScore?: string; // "50th percentile"
    minPercentage: string; // "50%"
    ageLimit?: string; // "17-25 years"
    requiredDocs: string[]; // ["Passport", "Marksheets", "NEET Scorecard"]
  };
  
  // Key Features (Icon + Short text)
  keyFeatures: {
    icon: string; // Icon identifier for frontend
    label: string; // "NMC Approved", "100% Placement", "Modern Labs"
    value?: string; // Optional number/stat
  }[];
  
  // Facilities (Just list)
  facilities: string[]; // ["Central Library", "Sports Complex", "WiFi Campus"]
  
  // Infrastructure Numbers
  infrastructure: {
    libraries?: number;
    labs?: number;
    hospitals?: number; // For medical
    researchCenters?: number;
    hostels?: number;
    bookCollection?: string; // "50,000+"
  };
  
  // Training Partners (Just names)
  trainingPartners: {
    type: string; // "Hospitals", "Companies", "Research Labs"
    count: number;
    notable: string[]; // Top 3-4 names
  }[];
  
  // Accommodation (Quick info)
  accommodation: {
    available: boolean;
    capacity: number;
    costPerYear: number;
    features: string[]; // ["AC Rooms", "Mess", "Laundry"]
  };
  
  // Location (Minimal)
  location: {
    address: string;
    nearestAirport: string;
    distanceKm: number;
    climate: string; // "Moderate", "Tropical"
  };
  
  // Why Choose (3-5 bullet points max)
  whyChoose: string[]; // Short, punchy reasons
  
  // Quick Highlights (Visual cards)
  highlights: {
    icon: string;
    stat: string; // "95%", "500+", "Top 10"
    label: string; // "Pass Rate", "Students", "Ranking"
  }[];
  
  // Placements (Numbers only)
  placements?: {
    rate: string; // "89%"
    averagePackage?: string; // "8 LPA"
    highestPackage?: string; // "45 LPA"
    topRecruiters: string[]; // Top 5-6 company names
  };
  
  // Student Life (Just categories)
  studentLife: {
    clubs: number;
    sportsAvailable: string[]; // ["Football", "Cricket", "Basketball"]
    culturalEvents: number; // Annual events count
    indianAssociation: boolean;
  };
  
  // Safety Rating
  safetyRating: {
    overall: string; // "4.5/5", "Excellent"
    campusSecurity: boolean;
    support247: boolean;
  };
  
  // Medium
  mediumOfInstruction: string; // "English", "English + Russian"
  
  // Exam Eligibility (Checkboxes)
  eligibleFor: string[]; // ["FMGE", "USMLE", "PLAB", "FE Exam"]
  
  // Admission Process (Steps)
  admissionSteps: string[]; // Max 5-6 short steps
}



// Export functions for filtering
