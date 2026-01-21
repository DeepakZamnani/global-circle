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
  
  // Rankings
  ranking: {
    globalRank?: string;
    nationalRank?: string;
    medicalRank?: string;
  };
  
  // Accreditations & Recognition
  accreditations: string[];
  nmcApproved: boolean;
  nmcApprovalYear?: number;
  
  // Overview
  overview: string;
  mission?: string;
  vision?: string;
  
  // Why Choose
  whyChoose: string[];
  
  // Statistics
  stats: {
    totalStudents: string;
    internationalStudents: string;
    indianStudents: string;
    facultyCount: string;
    facultyStudentRatio?: string;
    hospitalBeds?: string;
    campusSize?: string;
  };
  
  // Programs Offered
  programs: {
    name: string;
    duration: string;
    degree: string;
    medium: string;
    intakes: string[];
    seats?: string;
  }[];
  
  // Fee Structure
  fees: {
    tuitionPerYear: string;
    tuitionTotal: string;
    hostelPerYear: string;
    registrationFee?: string;
    securityDeposit?: string;
    medicalInsurance?: string;
    totalFirstYear: string;
    totalCourse: string;
  };
  
  // Eligibility
  eligibility: {
    neet: string;
    academicPercentage: string;
    ageLimit: string;
    documents: string[];
  };
  
  // Facilities & Infrastructure
  facilities: string[];
  laboratories: string[];
  libraries?: {
    books: string;
    journals: string;
    digitalResources: string;
  };
  
  // Clinical Training
  clinicalTraining: {
    hospitals: string[];
    bedsAvailable: string;
    startYear: string;
    exposure: string;
  };
  
  // Accommodation
  accommodation: {
    available: boolean;
    types: string[];
    facilities: string[];
    costPerYear: string;
    foodOptions: string;
  };
  
  // Location Info
  location: {
    address: string;
    nearestAirport: string;
    distanceFromAirport: string;
    cityPopulation?: string;
    climate: string;
  };
  
  // Admission Process
  admissionProcess: string[];
  
  // Highlights
  highlights: {
    title: string;
    description: string;
  }[];
  
  // Alumni & Placements
  alumni?: {
    totalAlumni: string;
    notableAlumni?: string[];
    success: string[];
  };
  
  // Student Life
  studentLife: {
    clubs: string[];
    sports: string[];
    culturalActivities: string[];
    indianStudentAssociation: boolean;
  };
  
  // Safety & Support
  safety: {
    rating: string;
    campusSecurity: string;
    studentSupport: string[];
  };
  
  // Medium of Instruction
  mediumOfInstruction: string;
  languageSupport?: string;
  
  // Recognition for Exams
  examEligibility: {
    fmge: boolean;
    usmle: boolean;
    plab: boolean;
    other: string[];
  };
}

export const universityDatabase: University[] = [
  
  // ============================================
  // RUSSIA - TOP UNIVERSITIES
  // ============================================
  
  {
    id: 'kazan-federal-university',
    name: 'Kazan Federal University',
    shortName: 'KFU',
    country: 'Russia',
    countrySlug: 'russia',
    city: 'Kazan',
    state: 'Tatarstan',
    flag: '🇷🇺',
    
    establishedYear: 1804,
    universityType: 'Public',
    website: 'https://kpfu.ru/eng',
    
    heroImage: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=1920&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&q=80',
      'https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=600&q=80',
      'https://images.unsplash.com/photo-1512495039889-7d0c2c2e4b1a?w=600&q=80'
    ],
    
    ranking: {
      globalRank: 'Top 500 (QS World Rankings)',
      nationalRank: 'Top 10 in Russia',
      medicalRank: 'Top 5 Medical Universities in Russia'
    },
    
    accreditations: ['NMC', 'WHO', 'FAIMER', 'ECFMG', 'UNESCO'],
    nmcApproved: true,
    nmcApprovalYear: 2003,
    
    overview: 'Kazan Federal University, established in 1804, is one of the oldest and most prestigious universities in Russia. With over 215 years of excellence in education, KFU offers world-class medical programs in English for international students. The university is renowned for its research contributions, modern infrastructure, and highly qualified faculty.',
    
    mission: 'To provide high-quality medical education, conduct cutting-edge research, and train competent doctors who can serve humanity globally.',
    
    vision: 'To be among the top medical universities globally, recognized for excellence in medical education, research, and healthcare services.',
    
    whyChoose: [
      'Over 215 years of educational legacy and excellence',
      'One of the oldest and most respected universities in Russia',
      'NMC, WHO, FAIMER, and ECFMG approved',
      '9,000+ international students from 100+ countries',
      '1,500+ Indian students currently enrolled',
      'State-of-the-art medical facilities and laboratories',
      'Highly qualified faculty with international experience',
      'English-medium MBBS program with no language barrier',
      'Extensive clinical training in modern university hospitals',
      'Affordable tuition fees with no donation',
      'Safe and beautiful city of Kazan',
      'Rich cultural experience',
      'Strong alumni network worldwide',
      'High FMGE pass rate among graduates',
      'Modern student hostels with Indian mess facilities'
    ],
    
    stats: {
      totalStudents: '50,000+',
      internationalStudents: '9,000+',
      indianStudents: '1,500+',
      facultyCount: '3,500+',
      facultyStudentRatio: '1:15',
      hospitalBeds: '2,000+',
      campusSize: '50+ buildings across Kazan'
    },
    
    programs: [
      {
        name: 'General Medicine (MBBS)',
        duration: '6 years (5 years academic + 1 year internship)',
        degree: 'Doctor of Medicine (MD)',
        medium: 'English',
        intakes: ['September', 'February'],
        seats: '300+ for international students'
      },
      {
        name: 'Dentistry',
        duration: '5 years',
        degree: 'Doctor of Dental Surgery',
        medium: 'English',
        intakes: ['September'],
        seats: '100+'
      },
      {
        name: 'Pharmacy',
        duration: '5 years',
        degree: 'Master of Pharmacy',
        medium: 'English',
        intakes: ['September'],
        seats: '50+'
      }
    ],
    
    fees: {
      tuitionPerYear: '$5,000 - $6,000 USD (₹4,50,000 - ₹5,00,000)',
      tuitionTotal: '$30,000 - $36,000 USD (₹27,00,000 - ₹30,00,000) for 6 years',
      hostelPerYear: '$600 - $1,000 USD (₹50,000 - ₹85,000)',
      registrationFee: '$200 USD (₹17,000)',
      securityDeposit: '$300 USD (₹25,000) - Refundable',
      medicalInsurance: '$200 USD per year (₹17,000)',
      totalFirstYear: '$6,500 - $7,500 USD (₹5,50,000 - ₹6,50,000)',
      totalCourse: '$35,000 - $40,000 USD (₹30,00,000 - ₹35,00,000) for 6 years'
    },
    
    eligibility: {
      neet: 'NEET Qualified (Mandatory from 2021)',
      academicPercentage: 'Minimum 50% aggregate in Physics, Chemistry, Biology (40% for SC/ST/OBC)',
      ageLimit: '17-25 years as of 31st December of admission year',
      documents: [
        '10th and 12th Mark sheets and Passing Certificates',
        'NEET Scorecard and Admit Card',
        'Passport (valid for at least 18 months)',
        'Birth Certificate',
        'Medical Fitness Certificate',
        'HIV Test Report (Negative)',
        'COVID-19 Vaccination Certificate',
        '10-15 Passport size photographs (3.5cm x 4.5cm)',
        'School Leaving Certificate/TC',
        'Migration Certificate',
        'Character Certificate from Principal',
        'Medical Insurance'
      ]
    },
    
    facilities: [
      'Modern Medical Library with 500,000+ books and journals',
      'Advanced Anatomy and Dissection Labs',
      'Biochemistry and Microbiology Laboratories',
      'Pathology and Pharmacology Labs',
      'Simulation Centers with latest medical equipment',
      'Research Laboratories',
      'Multi-specialty University Hospital',
      '24/7 Emergency Medical Services',
      'Digital Classrooms with Smart Boards',
      'Computer Labs with high-speed internet',
      'Sports Complex and Gymnasium',
      'Student Hostels with Indian Mess',
      'Cafeterias and Food Courts',
      'Student Recreation Centers',
      'International Student Support Office'
    ],
    
    laboratories: [
      'Anatomy Lab with cadavers and models',
      'Physiology Lab',
      'Biochemistry Lab',
      'Microbiology Lab',
      'Pathology Lab',
      'Pharmacology Lab',
      'Surgery Simulation Lab',
      'Clinical Skills Lab'
    ],
    
    libraries: {
      books: '500,000+ medical books',
      journals: '2,000+ international journals',
      digitalResources: 'Access to online medical databases'
    },
    
    clinicalTraining: {
      hospitals: [
        'Republican Clinical Hospital',
        'City Clinical Hospital No. 7',
        'Children\'s Republican Clinical Hospital',
        'Oncology Dispensary'
      ],
      bedsAvailable: '2,000+',
      startYear: '3rd year onwards',
      exposure: 'Extensive hands-on clinical training under expert supervision in various departments including Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, etc.'
    },
    
    accommodation: {
      available: true,
      types: [
        'University Hostels (Most common)',
        'Shared Rooms (2-3 students)',
        'Private Rooms (Limited)',
        'Off-campus Apartments'
      ],
      facilities: [
        '24/7 Security with CCTV',
        'Central Heating System',
        'Hot Water Supply',
        'Common Kitchen',
        'Indian Mess (₹3,000-4,000/month)',
        'Laundry Services',
        'WiFi Internet',
        'Study Rooms',
        'TV Rooms',
        'Recreation Areas',
        'Bedding and Furniture provided'
      ],
      costPerYear: '$600 - $1,000 USD (₹50,000 - ₹85,000)',
      foodOptions: 'Indian mess available in hostels, numerous Indian restaurants nearby, self-cooking facilities available'
    },
    
    location: {
      address: 'Kremlyovskaya Street, 18, Kazan, Republic of Tatarstan, Russia, 420008',
      nearestAirport: 'Kazan International Airport',
      distanceFromAirport: '25 km (30-40 minutes by car)',
      cityPopulation: '1.3 million',
      climate: 'Continental climate - Warm summers (20-25°C) and cold winters (-10 to -20°C)'
    },
    
    admissionProcess: [
      'Step 1: Submit online application with scanned documents',
      'Step 2: Application review by university (5-7 days)',
      'Step 3: Receive Invitation Letter from university',
      'Step 4: Apply for student visa at Russian Embassy/Consulate',
      'Step 5: Pay tuition fees after visa approval',
      'Step 6: Collect visa and travel documents',
      'Step 7: Travel to Kazan (University pickup available)',
      'Step 8: Complete arrival procedures and medical checkup',
      'Step 9: Document verification and admission formalities',
      'Step 10: Start classes'
    ],
    
    highlights: [
      {
        title: '215+ Years Legacy',
        description: 'Established in 1804, one of the oldest and most prestigious universities in Russia'
      },
      {
        title: 'Global Recognition',
        description: 'Approved by NMC, WHO, FAIMER, ECFMG - recognized in 180+ countries'
      },
      {
        title: 'Large Indian Community',
        description: '1,500+ Indian students currently studying, strong alumni network'
      },
      {
        title: 'Affordable Education',
        description: 'Quality education at $5,000-6,000/year with no donation fees'
      },
      {
        title: 'English Medium',
        description: 'Complete MBBS program taught in English language'
      },
      {
        title: 'Modern Infrastructure',
        description: 'State-of-the-art facilities, advanced labs, and modern hospitals'
      }
    ],
    
    alumni: {
      totalAlumni: '50,000+ graduates worldwide',
      notableAlumni: [
        'Leo Tolstoy (Famous Russian writer)',
        'Vladimir Lenin (Historical figure)',
        'Numerous doctors practicing in India, USA, UK'
      ],
      success: [
        'High FMGE pass rate among Indian graduates',
        'Alumni working in prestigious hospitals globally',
        'Successful medical practitioners in India and abroad',
        'Research contributions in various medical fields'
      ]
    },
    
    studentLife: {
      clubs: [
        'Indian Student Association',
        'Medical Students Society',
        'Cultural Club',
        'Sports Club',
        'Photography Club',
        'Music and Dance Club'
      ],
      sports: [
        'Football',
        'Basketball',
        'Volleyball',
        'Table Tennis',
        'Badminton',
        'Chess',
        'Fitness Gym'
      ],
      culturalActivities: [
        'Annual Day Celebrations',
        'International Students Day',
        'Cultural Festivals',
        'Medical Conferences',
        'Inter-university Competitions',
        'Indian Festivals (Diwali, Holi, etc.)'
      ],
      indianStudentAssociation: true
    },
    
    safety: {
      rating: 'Excellent (9/10)',
      campusSecurity: '24/7 security, CCTV surveillance, security guards at hostels and campus',
      studentSupport: [
        'International Student Office',
        'Indian Coordinators available',
        '24/7 Emergency Helpline',
        'Medical Support',
        'Academic Counseling',
        'Hostel Wardens',
        'Language Support Staff'
      ]
    },
    
    mediumOfInstruction: 'English',
    languageSupport: 'Russian language classes provided for patient interaction and daily life',
    
    examEligibility: {
      fmge: true,
      usmle: true,
      plab: true,
      other: ['AMC (Australia)', 'LMCC (Canada)', 'SCHS (Singapore)']
    }
  },

  {
    id: 'peoples-friendship-university',
    name: 'Peoples Friendship University of Russia',
    shortName: 'RUDN University',
    country: 'Russia',
    countrySlug: 'russia',
    city: 'Moscow',
    flag: '🇷🇺',
    
    establishedYear: 1960,
    universityType: 'Public',
    website: 'https://eng.rudn.ru',
    
    heroImage: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=1920&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=600&q=80',
      'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&q=80',
      'https://images.unsplash.com/photo-1512495039889-7d0c2c2e4b1a?w=600&q=80'
    ],
    
    ranking: {
      globalRank: 'Top 400 (QS World Rankings)',
      nationalRank: 'Top 5 in Russia',
      medicalRank: 'Top 3 Medical Universities in Russia'
    },
    
    accreditations: ['NMC', 'WHO', 'FAIMER', 'ECFMG', 'UNESCO'],
    nmcApproved: true,
    nmcApprovalYear: 2002,
    
    overview: 'Peoples Friendship University of Russia (RUDN), established in 1960, is one of the leading multidisciplinary universities in Russia. Located in Moscow, RUDN is known for its international character with students from 150+ countries. The medical faculty offers excellent MBBS programs in English with modern facilities and experienced international faculty.',
    
    mission: 'To unite people of different cultures through quality education and promote international cooperation in medical sciences.',
    
    vision: 'To be a global leader in medical education, fostering excellence, diversity, and innovation.',
    
    whyChoose: [
      'Located in Moscow - capital and largest city of Russia',
      'Students from 150+ countries - truly international university',
      '3,000+ Indian students studying here',
      'NMC, WHO, FAIMER approved since 2002',
      'English-medium medical program',
      'Modern infrastructure and advanced technology',
      'Highly experienced international faculty',
      'Multi-specialty university hospital',
      'Excellent clinical exposure',
      'Active Indian Student Association',
      'Indian food and hostels available',
      'Affordable fees with no capitation',
      'Direct admission based on NEET',
      'Rich cultural experience in Moscow',
      'High success rate in licensing exams'
    ],
    
    stats: {
      totalStudents: '37,000+',
      internationalStudents: '8,000+',
      indianStudents: '3,000+',
      facultyCount: '4,000+',
      facultyStudentRatio: '1:12',
      hospitalBeds: '1,500+',
      campusSize: '25 buildings, 60+ auditoriums'
    },
    
    programs: [
      {
        name: 'General Medicine',
        duration: '6 years',
        degree: 'MD (Doctor of Medicine)',
        medium: 'English',
        intakes: ['September', 'February'],
        seats: '400+'
      },
      {
        name: 'Dentistry',
        duration: '5 years',
        degree: 'Doctor of Dental Medicine',
        medium: 'English',
        intakes: ['September'],
        seats: '150+'
      },
      {
        name: 'Pharmacy',
        duration: '5 years',
        degree: 'Master of Pharmacy',
        medium: 'English',
        intakes: ['September'],
        seats: '100+'
      }
    ],
    
    fees: {
      tuitionPerYear: '$6,500 - $7,500 USD (₹5,50,000 - ₹6,50,000)',
      tuitionTotal: '$39,000 - $45,000 USD (₹33,00,000 - ₹38,00,000) for 6 years',
      hostelPerYear: '$1,000 - $1,500 USD (₹85,000 - ₹1,30,000)',
      registrationFee: '$250 USD (₹21,000)',
      securityDeposit: '$400 USD (₹34,000) - Refundable',
      medicalInsurance: '$250 USD per year (₹21,000)',
      totalFirstYear: '$8,500 - $10,000 USD (₹7,20,000 - ₹8,50,000)',
      totalCourse: '$45,000 - $50,000 USD (₹38,00,000 - ₹42,00,000) for 6 years'
    },
    
    eligibility: {
      neet: 'NEET Qualified (Mandatory)',
      academicPercentage: 'Minimum 50% in PCB (40% for SC/ST/OBC)',
      ageLimit: '17-25 years',
      documents: [
        '10th & 12th Certificates',
        'NEET Scorecard',
        'Passport (18+ months validity)',
        'Birth Certificate',
        'Medical Fitness Certificate',
        'HIV Negative Certificate',
        'COVID-19 Vaccination Certificate',
        'Passport Photographs',
        'School Leaving Certificate',
        'Migration Certificate',
        'Character Certificate'
      ]
    },
    
    facilities: [
      'Modern Medical Library',
      'Advanced Anatomy Labs',
      'Simulation Training Center',
      'Research Laboratories',
      'University Hospital',
      'Digital Lecture Halls',
      'Computer Labs',
      'Sports Complex',
      'Olympic Swimming Pool',
      'Student Hostels',
      'Indian Mess',
      'Cafeterias',
      'Student Centers',
      'International Office'
    ],
    
    laboratories: [
      'Anatomy Dissection Hall',
      'Physiology Lab',
      'Biochemistry Lab',
      'Microbiology Lab',
      'Pathology Lab',
      'Pharmacology Lab',
      'Clinical Skills Lab',
      'Surgical Training Lab'
    ],
    
    libraries: {
      books: '2 million+ books',
      journals: '3,000+ journals',
      digitalResources: 'Full digital access'
    },
    
    clinicalTraining: {
      hospitals: [
        'RUDN University Clinic',
        'City Clinical Hospital',
        'Moscow Regional Research Clinical Institute'
      ],
      bedsAvailable: '1,500+',
      startYear: '3rd year',
      exposure: 'Comprehensive clinical training in all major specialties'
    },
    
    accommodation: {
      available: true,
      types: ['University Hostels', 'Shared Rooms', 'Private Rooms'],
      facilities: [
        '24/7 Security',
        'Central Heating',
        'Hot Water',
        'Kitchen',
        'Indian Mess',
        'Laundry',
        'WiFi',
        'Study Rooms',
        'TV Rooms',
        'Recreation Areas'
      ],
      costPerYear: '$1,000 - $1,500 USD (₹85,000 - ₹1,30,000)',
      foodOptions: 'Indian mess, Indian restaurants nearby, self-cooking'
    },
    
    location: {
      address: '6 Miklukho-Maklaya Street, Moscow, Russia, 117198',
      nearestAirport: 'Sheremetyevo/Domodedovo Airport',
      distanceFromAirport: '30-40 km',
      cityPopulation: '12 million+',
      climate: 'Continental - Warm summers, Cold winters'
    },
    
    admissionProcess: [
      'Online Application Submission',
      'Document Verification',
      'Invitation Letter Issuance',
      'Visa Application',
      'Fee Payment',
      'Travel to Moscow',
      'Admission Formalities',
      'Classes Begin'
    ],
    
    highlights: [
      {
        title: 'Moscow Location',
        description: 'Study in Russia\'s capital city with excellent opportunities'
      },
      {
        title: 'International University',
        description: 'Students from 150+ countries, diverse cultural environment'
      },
      {
        title: 'Large Indian Community',
        description: '3,000+ Indian students with active associations'
      },
      {
        title: 'NMC Approved',
        description: 'Recognized by NMC, WHO, FAIMER since 2002'
      },
      {
        title: 'Quality Education',
        description: 'Modern facilities, experienced faculty, excellent training'
      },
      {
        title: 'Affordable',
        description: 'Competitive fees with no donation or hidden costs'
      }
    ],
    
    alumni: {
      totalAlumni: '200,000+ from 170 countries',
      success: [
        'High FMGE success rate',
        'Doctors in India, USA, UK',
        'Successful medical careers globally'
      ]
    },
    
    studentLife: {
      clubs: ['Indian Student Association', 'Medical Club', 'Sports Club', 'Cultural Club'],
      sports: ['Football', 'Basketball', 'Swimming', 'Tennis', 'Volleyball'],
      culturalActivities: ['Cultural Festivals', 'Medical Conferences', 'Indian Celebrations'],
      indianStudentAssociation: true
    },
    
    safety: {
      rating: 'Excellent (9/10)',
      campusSecurity: '24/7 security with modern systems',
      studentSupport: [
        'International Office',
        'Indian Coordinators',
        'Emergency Helpline',
        'Medical Support',
        'Counseling Services'
      ]
    },
    
    mediumOfInstruction: 'English',
    languageSupport: 'Russian language courses available',
    
    examEligibility: {
      fmge: true,
      usmle: true,
      plab: true,
      other: ['AMC', 'LMCC', 'Medical Councils worldwide']
    }
  },

  // Continue with more universities...
  // Would add Tbilisi State Medical University (Georgia), Tashkent Medical Academy (Uzbekistan),
  // and other top universities from each country
];

// Export functions for filtering
export const getUniversitiesByCountry = (countrySlug: string): University[] => {
  return universityDatabase.filter(uni => uni.countrySlug === countrySlug);
};

export const getUniversityById = (id: string): University | undefined => {
  return universityDatabase.find(uni => uni.id === id);
};

export const getNMCApprovedUniversities = (): University[] => {
  return universityDatabase.filter(uni => uni.nmcApproved);
};

export const getUniversitiesByFeeRange = (minFee: number, maxFee: number): University[] => {
  return universityDatabase.filter(uni => {
    // Extract numeric value from fee string for comparison
    const feeMatch = uni.fees.tuitionPerYear.match(/\$(\d+)/);
    if (feeMatch) {
      const fee = parseInt(feeMatch[1]);
      return fee >= minFee && fee <= maxFee;
    }
    return false;
  });
};