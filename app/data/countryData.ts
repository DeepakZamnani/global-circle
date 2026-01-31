

export interface CountryDetailedInfo {
  id: string;
  name: string;
  slug: string;
  flag: string;

  heroImage: string;
  galleryImages: string[];
  
  // Overview Section
  availableCourses: string[];

  overview: {
    title: string;
    description: string;
    detailedDescription: string[];
  };
  
  // Quick Stats
  stats: {
    totalUniversities: string;
    nmcApproved: string;
    indianStudents: string;
    programDuration: string;
    mediumOfInstruction: string;
    averageFees: string;
    gdp: string;              // ADD THIS
    dialingCode: string;      // ADD THIS
    currency: string;         // ADD THIS
  };
  
  // Why Study Here
  whyStudyHere: {
    title: string;
    points: string[];
  };
  
  // Top Universities
  topUniversities: {
    rank: number;
    name: string;
    city: string;
    established: string;
    nmcApproved: boolean;
  }[];
  
  // Programs Offered
  programs: {
    name: string;
    duration: string;
    degree: string;
    medium: string;
  }[];
  
  // Cost Breakdown
  costs: {
    tuitionFeeRange: string;
    hostelFees: string;
    foodExpenses: string;
    otherExpenses: string;
    totalFirstYear: string;
    totalCourse: string;
  };
  
  // Admission Requirements
  eligibility: {
    neetRequirement: string;
    academicRequirement: string;
    ageLimit: string;
    documents: string[];
  };
  
  // Intakes
  intakes: {
    main: string;
    secondary?: string;
    applicationDeadline: string;
  };
  
  // Visa Information
  visa: {
    type: string;
    processingTime: string;
    validity: string;
    requirements: string[];
  };
  
  // Accommodation
  accommodation: {
    types: string[];
    facilities: string[];
    averageCost: string;
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
  };
  
  // Work Opportunities
  workOpportunities: {
    partTimeAllowed: boolean;
    hoursPerWeek: string;
    averageWage: string;
    postStudyWork: string;
  };
  
  // Recognition & Accreditation
  recognitions: string[];
  
  // Job Prospects
  careerProspects: {
    description: string;
    examsToClear: string[];
    averageSalary: string;
  };
  
  // Key Highlights
  highlights: {
    title: string;
    description: string;
  }[];
  
  // Advantages
  advantages: string[];
  
  // Medical Licensing
  medicalLicensing: {
    india: string;
    usa: string;
    uk: string;
    other: string;
  };
}

