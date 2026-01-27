// ============================================
// ENHANCED TYPE DEFINITIONS
// Course Categories and Filtering Options
// ============================================

// Course Categories for Indexing
export enum CourseCategory {
  MEDICAL = "medical",
  ENGINEERING = "engineering",
  MANAGEMENT = "management",
  LAW = "law",
  ARTS = "arts",
  SCIENCE = "science",
  PHARMACY = "pharmacy",
  NURSING = "nursing",
  DENTAL = "dental",
  ARCHITECTURE = "architecture",
  DESIGN = "design",
  HOSPITALITY = "hospitality",
  AGRICULTURE = "agriculture",
  VETERINARY = "veterinary",
  AVIATION = "aviation",
  MASS_COMMUNICATION = "mass-communication",
  EDUCATION = "education",
  COMPUTER_SCIENCE = "computer-science",
  FINANCE = "finance",
  FASHION = "fashion",
  CULINARY = "culinary",
  PARAMEDICAL = "paramedical",
}

// Course Levels
export enum CourseLevel {
  UNDERGRADUATE = "undergraduate",
  POSTGRADUATE = "postgraduate",
  DOCTORAL = "doctoral",
  DIPLOMA = "diploma",
  CERTIFICATE = "certificate",
  FOUNDATION = "foundation",
}

// Medium of Instruction
export enum MediumOfInstruction {
  ENGLISH = "english",
  BILINGUAL = "bilingual",
  LOCAL_LANGUAGE = "local-language",
}

// Duration Types
export enum DurationType {
  YEARS = "years",
  MONTHS = "months",
  SEMESTERS = "semesters",
}

// Accreditation Types
export enum AccreditationType {
  NMC = "nmc", // National Medical Commission (India)
  MCI = "mci", // Medical Council of India (legacy)
  WHO = "who", // World Health Organization
  ABET = "abet", // Engineering accreditation
  AACSB = "aacsb", // Business school accreditation
  NAAC = "naac",
  NBA = "nba",
  UGC = "ugc",
  AICTE = "aicte",
  BCI = "bci",
  PCI = "pci",
  DCI = "dci",
  INC = "inc",
  COA = "coa",
  FAIMER = "faimer",
  ECFMG = "ecfmg",
  WDOMS = "wdoms",
  GMC = "gmc",
  IMED = "imed",
  UNESCO = "unesco",
}

// Intake Seasons
export enum IntakeSeason {
  SPRING = "spring",
  SUMMER = "summer",
  FALL = "fall",
  WINTER = "winter",
  JANUARY = "january",
  FEBRUARY = "february",
  MARCH = "march",
  APRIL = "april",
  MAY = "may",
  JUNE = "june",
  JULY = "july",
  AUGUST = "august",
  SEPTEMBER = "september",
  OCTOBER = "october",
  NOVEMBER = "november",
  DECEMBER = "december",
  ROLLING = "rolling",
}

// Country Region
export enum Region {
  EUROPE = "europe",
  ASIA = "asia",
  NORTH_AMERICA = "north-america",
  SOUTH_AMERICA = "south-america",
  OCEANIA = "oceania",
  MIDDLE_EAST = "middle-east",
  AFRICA = "africa",
  CENTRAL_ASIA = "central-asia",
  EASTERN_EUROPE = "eastern-europe",
  WESTERN_EUROPE = "western-europe",
}

// Cost Range
export enum CostRange {
  BUDGET = "budget", // < ₹5 Lakhs/year
  MODERATE = "moderate", // ₹5-10 Lakhs/year
  PREMIUM = "premium", // ₹10-20 Lakhs/year
  LUXURY = "luxury", // > ₹20 Lakhs/year
}

// Enhanced Course Information
export interface CourseDetail {
  id: string;
  name: string;
  category: CourseCategory;
  level: CourseLevel;
  duration: {
    value: number;
    type: DurationType;
  };
  mediumOfInstruction: MediumOfInstruction[];
  accreditations: AccreditationType[];
  description?: string;
  specializations?: string[];
  entryRequirements?: {
    examRequired?: string;
    minimumScore?: string;
    academicRequirement?: string;
  };
  costRange: CostRange;
  averageAnnualFee?: string;
}

export interface CountryDetailedInfo {
  id: string;
  name: string;
  slug: string;
  flag: string;
  heroImage: string;
  galleryImages: string[];
  region: Region;
  
  // INDEXING: Course Categories Available
  availableCourseCategories: CourseCategory[];
  availableCourseLevels: CourseLevel[];
  
  // Detailed Courses List
  courses: CourseDetail[];
  
  // Overview Section
  overview: {
    title: string;
    description: string;
    detailedDescription: string[];
  };
  
  // Quick Stats
  stats: {
    totalUniversities: string;
    recognizedUniversities?: string;
    indianStudents: string;
    popularPrograms: string[];
    mediumOfInstruction: string;
    averageFees: string;
    costRange: CostRange;
  };
  
  // Why Study Here
  whyStudyHere: {
    title: string;
    points: string[];
  };
  
  // Top Universities (Enhanced)
  topUniversities: {
    rank: number;
    name: string;
    city: string;
    established: string;
    accreditations: AccreditationType[];
    coursesOffered: CourseCategory[];
    website?: string;
    ranking?: {
      world?: string;
      national?: string;
    };
  }[];
  
  // Programs Offered
  programs: {
    name: string;
    duration: string;
    degree: string;
    medium: string;
    category?: CourseCategory;
  }[];
  
  // Cost Breakdown
  costs: {
    tuitionFeeRange: string;
    hostelFees: string;
    foodExpenses: string;
    otherExpenses: string;
    totalFirstYear: string;
    totalCourse: string;
    scholarshipAvailability?: boolean;
    scholarshipDetails?: string[];
  };
  
  // Admission Requirements
  eligibility: {
    entranceExam?: string;
    academicRequirement: string;
    ageLimit?: string;
    languageProficiency?: string;
    documents: string[];
  };
  
  // Intakes (Enhanced)
  intakes: {
    seasons: IntakeSeason[];
    main: string;
    secondary?: string;
    applicationDeadline: string;
    intakeDetails?: {
      season: IntakeSeason;
      startMonth: string;
      deadline: string;
    }[];
  };
  
  // Visa Information
  visa: {
    type: string;
    processingTime: string;
    validity: string;
    requirements: string[];
    studentVisaFee?: string;
  };
  
  // Accommodation
  accommodation: {
    types: string[];
    facilities: string[];
    averageCost: string;
    availability: string;
  };
  
  // Living in Country
  livingInfo: {
    climate: string;
    language: string;
    currency: string;
    timeZone: string;
    indianCommunity: string;
    safetyRating: string;
    foodAvailability: string;
    transportationCost?: string;
    internetSpeed?: string;
  };
  
  // Work Opportunities
  workOpportunities: {
    duringStudy: {
      allowed: boolean;
      hoursPerWeek?: string;
      averageWage?: string;
      restrictions?: string[];
    };
    afterStudy: {
      allowed: boolean;
      duration?: string;
      requirements?: string[];
    };
  };
  
  // Recognition & Accreditation
  recognitions: string[];
  accreditationBodies: AccreditationType[];
  
  // Job Prospects
  careerProspects: {
    description: string;
    examsToClear?: string[];
    practiceInIndia?: {
      allowed: boolean;
      requirements: string[];
    };
    averageSalary: string;
    topRecruiters?: string[];
  };
  
  // Key Highlights
  highlights: {
    title: string;
    description: string;
    icon?: string;
  }[];
  
  // Advantages
  advantages: string[];
  
  // International Recognition
  internationalRecognition: {
    india: string;
    usa: string;
    uk: string;
    europe: string;
    canada: string;
    australia: string;
    other?: string;
  };
  
  // SEO & Metadata
  metadata?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    popularSearchTerms?: string[];
  };
  
  // Featured Status
  isFeatured?: boolean;
  featuredOrder?: number;
  
  // Last Updated
  lastUpdated?: string;
  updatedBy?: string;
}

// Helper type for indexing by course category
export interface CourseIndexEntry {
  courseCategory: CourseCategory;
  countries: {
    id: string;
    name: string;
    slug: string;
    flag: string;
    availableCourses: string[];
    averageFee: string;
    topUniversityCount: number;
    region: Region;
  }[];
}

// Helper type for filtering
export interface CountryFilterOptions {
  regions?: Region[];
  courseCategories?: CourseCategory[];
  courseLevels?: CourseLevel[];
  costRanges?: CostRange[];
  accreditations?: AccreditationType[];
  intakeSeasons?: IntakeSeason[];
  workAllowed?: boolean;
  scholarshipAvailable?: boolean;
}