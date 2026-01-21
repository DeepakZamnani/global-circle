// // ============================================
// // COUNTRY DATA - Separate file (No "use client")
// // ============================================

// export interface CountryInfo {
//   name: string;
//   slug: string;
//   flag: string;
//   heroImage: string;
//   galleryImages: string[];
//   tagline: string;
//   description: string;
//   color: string;
//   stats: {
//     universities: string;
//     programs: string;
//     intlStudents: string;
//     globalRank: string;
//   };
//   highlights: { title: string; desc: string }[];
//   popularPrograms: string[];
//   topUniversities: string[];
//   topCities: string[];
//   requirements: string[];
//   intakes: string[];
//   tuitionRange: string;
//   livingCost: string;
// }

// export const countryData: Record<string, CountryInfo> = {
//   canada: {
//     name: 'Canada',
//     slug: 'canada',
//     flag: '🇨🇦',
//     heroImage: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&q=80',
//     galleryImages: [
//       'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&q=80',
//       'https://images.unsplash.com/photo-1542704792-e30dac463c90?w=600&q=80',
//       'https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=600&q=80'
//     ],
//     tagline: 'Your Gateway to Global Success',
//     description: 'Experience world-class education in one of the most welcoming and multicultural countries, offering high-quality programs, post-graduation work opportunities, and an excellent quality of life.',
//     color: '#DC2626',
//     stats: {
//       universities: '96+',
//       programs: '15,000+',
//       intlStudents: '800K+',
//       globalRank: '#3'
//     },
//     highlights: [
//       { title: 'Post-Graduation Work Permit', desc: 'Stay and work for up to 3 years after graduation' },
//       { title: 'Multicultural Environment', desc: 'One of the most diverse and welcoming countries' },
//       { title: 'High Living Standards', desc: 'Excellent healthcare, safety, and quality of life' },
//       { title: 'Pathway to PR', desc: 'Clear immigration pathways for international students' }
//     ],
//     popularPrograms: ['Business & MBA', 'Computer Science', 'Engineering', 'Healthcare', 'Data Science', 'Hospitality'],
//     topUniversities: ['University of Toronto', 'McGill University', 'UBC', 'University of Alberta', 'McMaster University'],
//     topCities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
//     requirements: ['Valid passport', 'Acceptance from DLI', 'Proof of funds', 'IELTS/TOEFL scores', 'Statement of Purpose', 'Medical exam'],
//     intakes: ['September (Fall)', 'January (Winter)', 'May (Summer)'],
//     tuitionRange: '$15,000 - $35,000 CAD/year',
//     livingCost: '$10,000 - $15,000 CAD/year'
//   },
//   australia: {
//     name: 'Australia',
//     slug: 'australia',
//     flag: '🇦🇺',
//     heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&q=80',
//     galleryImages: [
//       'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80',
//       'https://images.unsplash.com/photo-1545044846-351ba102b6d5?w=600&q=80',
//       'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=600&q=80'
//     ],
//     tagline: 'World-Class Education & Lifestyle',
//     description: 'Experience world-class education in a multicultural environment with globally recognized universities, offering excellent research opportunities and an outstanding quality of life.',
//     color: '#1E3A5F',
//     stats: {
//       universities: '43+',
//       programs: '22,000+',
//       intlStudents: '750K+',
//       globalRank: '#2'
//     },
//     highlights: [
//       { title: 'World-Class Universities', desc: '7 universities in global top 100 rankings' },
//       { title: 'Post-Study Work Rights', desc: '2-4 years post-study work visa available' },
//       { title: 'Multicultural Environment', desc: 'Students from 190+ countries study here' },
//       { title: 'Amazing Lifestyle', desc: 'Beaches, cities, and natural wonders await' }
//     ],
//     popularPrograms: ['Business & Management', 'IT & Computer Science', 'Engineering', 'Nursing', 'Hospitality', 'Medicine'],
//     topUniversities: ['University of Melbourne', 'University of Sydney', 'UNSW', 'ANU', 'Monash University'],
//     topCities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
//     requirements: ['Valid passport', 'Confirmation of Enrolment', 'Genuine Temporary Entrant', 'IELTS 6.0+ / PTE 50+', 'Financial capacity proof', 'Health insurance'],
//     intakes: ['February (Main)', 'July (Mid-year)'],
//     tuitionRange: '$20,000 - $45,000 AUD/year',
//     livingCost: '$21,000 AUD/year'
//   },
//   france: {
//     name: 'France',
//     slug: 'france',
//     flag: '🇫🇷',
//     heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80',
//     galleryImages: [
//       'https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&q=80',
//       'https://images.unsplash.com/photo-1551865299-6464fcea5c25?w=600&q=80',
//       'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=600&q=80'
//     ],
//     tagline: 'Where Culture Meets Excellence',
//     description: 'Experience world-class education in one of Europe\'s most culturally rich countries, offering prestigious programs across diverse fields including fashion, culinary arts, and business.',
//     color: '#1E3A5F',
//     stats: {
//       universities: '72+',
//       programs: '3,500+',
//       intlStudents: '370K+',
//       globalRank: '#6'
//     },
//     highlights: [
//       { title: 'Rich Cultural Heritage', desc: 'Art, history, and cuisine at your doorstep' },
//       { title: 'Affordable Education', desc: 'Low tuition fees even for international students' },
//       { title: 'Post-Study Work Options', desc: 'Work permit available for graduates' },
//       { title: 'Central EU Location', desc: 'Easy access to all of Europe' }
//     ],
//     popularPrograms: ['Fashion & Design', 'Culinary Arts', 'Business & MBA', 'Engineering', 'Arts & Humanities', 'Wine Studies'],
//     topUniversities: ['Sorbonne University', 'Sciences Po', 'HEC Paris', 'École Polytechnique', 'ESSEC Business School'],
//     topCities: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice'],
//     requirements: ['Valid passport', 'Acceptance letter', 'Proof of accommodation', 'Financial guarantee', 'French/English proficiency', 'Campus France interview'],
//     intakes: ['September (Main)', 'January'],
//     tuitionRange: '€2,770 - €20,000/year',
//     livingCost: '€800 - €1,200/month'
//   },
//   spain: {
//     name: 'Spain',
//     slug: 'spain',
//     flag: '🇪🇸',
//     heroImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80',
//     galleryImages: [
//       'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80',
//       'https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=600&q=80',
//       'https://images.unsplash.com/photo-1583779457094-4e815aa34743?w=600&q=80'
//     ],
//     tagline: 'Vibrant Life, Quality Education',
//     description: 'Experience world-class education in Spain while immersing yourself in a rich cultural heritage and vibrant student life with affordable living costs.',
//     color: '#FF6B35',
//     stats: {
//       universities: '84+',
//       programs: '2,800+',
//       intlStudents: '200K+',
//       globalRank: '#10'
//     },
//     highlights: [
//       { title: 'Vibrant Student Life', desc: 'Amazing social scene and festivals year-round' },
//       { title: 'Affordable Education', desc: 'Low tuition and living costs compared to others' },
//       { title: 'Historic Universities', desc: 'Some of the oldest universities in the world' },
//       { title: 'Learn Spanish', desc: '2nd most spoken language globally' }
//     ],
//     popularPrograms: ['Business & Tourism', 'Architecture', 'Medicine', 'Arts & Design', 'Spanish Language', 'Renewable Energy'],
//     topUniversities: ['University of Barcelona', 'Complutense Madrid', 'IE Business School', 'ESADE', 'University of Valencia'],
//     topCities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Bilbao'],
//     requirements: ['Valid passport', 'University acceptance', 'Proof of funds', 'Health insurance', 'Spanish/English proficiency', 'Background check'],
//     intakes: ['September (Main)', 'February'],
//     tuitionRange: '€750 - €15,000/year',
//     livingCost: '€700 - €1,000/month'
//   }
// };
// ============================================
// COUNTRY DATA - Medical Study Destinations
// Real data for MBBS/Medical programs abroad
// ============================================

// ============================================
// COMPREHENSIVE COUNTRY DATA FOR MBBS ABROAD
// Detailed information for all medical study destinations
// ============================================

export interface CountryDetailedInfo {
  id: string;
  name: string;
  slug: string;
  flag: string;
  heroImage: string;
  galleryImages: string[];
  
  // Overview Section
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

export const comprehensiveCountryData: Record<string, CountryDetailedInfo> = {
  
  // ============================================
  // RUSSIA
  // ============================================
  russia: {
    id: 'russia',
    name: 'Russia',
    slug: 'russia',
    flag: '🇷🇺',
    heroImage: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=1920&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&q=80',
      'https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=600&q=80',
      'https://images.unsplash.com/photo-1512495039889-7d0c2c2e4b1a?w=600&q=80'
    ],
    
    overview: {
      title: 'Russia – Premier Destination for Affordable Quality MBBS',
      description: 'Russia has been a trusted destination for Indian medical students for over 50 years, offering world-class medical education at affordable costs with complete English-medium programs.',
      detailedDescription: [
        'Russia is one of the oldest and most preferred destinations for MBBS abroad, especially for Indian students. With over 60 NMC-approved medical universities, Russia offers high-quality medical education that is recognized globally.',
        'Russian medical universities have trained over 30,000 Indian doctors who are now successfully practicing in India and across the world. The medical degree from Russia is approved by NMC (National Medical Commission), WHO, UNESCO, and many other international bodies.',
        'The country offers a perfect blend of quality education, affordable fees, modern infrastructure, and a multicultural environment. Students get extensive clinical exposure from the 3rd year onwards with hands-on training in university hospitals.',
        'With no entrance exams, no capitation fees, and direct admission based on NEET scores, Russia continues to be the top choice for Indian students aspiring to become doctors.'
      ]
    },
    
    stats: {
      totalUniversities: '60+',
      nmcApproved: '60+',
      indianStudents: '30,000+',
      programDuration: '6 years',
      mediumOfInstruction: 'English',
      averageFees: '₹4-6 Lakhs/year'
    },
    
    whyStudyHere: {
      title: 'Advantages of Studying MBBS in Russia',
      points: [
        '50+ years of experience in training international medical students',
        '60+ NMC/WHO approved medical universities',
        'No donation or capitation fees – transparent admission process',
        'Direct admission based on NEET qualification – no entrance exams',
        'Complete English-medium MBBS programs',
        'Affordable tuition fees starting from ₹3-6 Lakhs per year',
        'Low cost of living (₹15,000-25,000 per month)',
        'Modern infrastructure with advanced medical equipment',
        'Highly qualified faculty with international exposure',
        'Extensive clinical training from 3rd year onwards',
        'Safe and student-friendly environment',
        'Indian food and hostels available',
        'Globally recognized medical degree',
        'Eligibility to practice in India, USA, UK, Canada, Australia, and 180+ countries',
        'High FMGE/NExT pass rate among graduates',
        'Rich cultural experience and exposure to diverse nationalities'
      ]
    },
    
    topUniversities: [
      {
        rank: 1,
        name: 'Kazan Federal University',
        city: 'Kazan',
        established: '1804',
        nmcApproved: true
      },
      {
        rank: 2,
        name: 'Peoples Friendship University of Russia (RUDN)',
        city: 'Moscow',
        established: '1960',
        nmcApproved: true
      },
      {
        rank: 3,
        name: 'First Moscow State Medical University (Sechenov)',
        city: 'Moscow',
        established: '1758',
        nmcApproved: true
      },
      {
        rank: 4,
        name: 'Crimean Federal University',
        city: 'Simferopol',
        established: '1918',
        nmcApproved: true
      },
      {
        rank: 5,
        name: 'Kursk State Medical University',
        city: 'Kursk',
        established: '1935',
        nmcApproved: true
      },
      {
        rank: 6,
        name: 'Northern State Medical University',
        city: 'Arkhangelsk',
        established: '1932',
        nmcApproved: true
      },
      {
        rank: 7,
        name: 'Volgograd State Medical University',
        city: 'Volgograd',
        established: '1935',
        nmcApproved: true
      },
      {
        rank: 8,
        name: 'Bashkir State Medical University',
        city: 'Ufa',
        established: '1932',
        nmcApproved: true
      },
      {
        rank: 9,
        name: 'Kabardino Balkarian State University',
        city: 'Nalchik',
        established: '1957',
        nmcApproved: true
      },
      {
        rank: 10,
        name: 'Orel State University',
        city: 'Orel',
        established: '1931',
        nmcApproved: true
      }
    ],
    
    programs: [
      {
        name: 'General Medicine (MBBS)',
        duration: '6 years (5 years + 1 year internship)',
        degree: 'Doctor of Medicine (MD)',
        medium: 'English'
      },
      {
        name: 'MD/MS Specializations',
        duration: '2-3 years',
        degree: 'Doctor of Medicine / Master of Surgery',
        medium: 'English/Russian'
      }
    ],
    
    costs: {
      tuitionFeeRange: '₹3,00,000 - ₹6,00,000 per year',
      hostelFees: '₹50,000 - ₹1,00,000 per year',
      foodExpenses: '₹10,000 - ₹15,000 per month',
      otherExpenses: '₹20,000 - ₹30,000 per year',
      totalFirstYear: '₹5,00,000 - ₹8,00,000',
      totalCourse: '₹25,00,000 - ₹40,00,000 (6 years)'
    },
    
    eligibility: {
      neetRequirement: 'NEET Qualified (Mandatory from 2021)',
      academicRequirement: 'Minimum 50% in Physics, Chemistry, Biology (40% for SC/ST/OBC)',
      ageLimit: '17-25 years as of 31st December of admission year',
      documents: [
        '10th and 12th Mark sheets and Certificates',
        'NEET Scorecard',
        'Passport (valid for minimum 18 months)',
        'Birth Certificate',
        'Medical Fitness Certificate',
        'HIV Test Report (Negative)',
        'COVID-19 Vaccination Certificate',
        'Passport size photographs (10-15 copies)',
        'Migration Certificate',
        'Character Certificate from School/College'
      ]
    },
    
    intakes: {
      main: 'September/October',
      secondary: 'February/March (Limited seats)',
      applicationDeadline: 'July for September intake, December for February intake'
    },
    
    visa: {
      type: 'Student Visa (Education Visa)',
      processingTime: '15-30 days',
      validity: '1 year (renewable annually)',
      requirements: [
        'Invitation Letter from University',
        'Valid Passport',
        'Visa Application Form',
        'Passport size photographs',
        'HIV Test Report',
        'Bank statements showing sufficient funds',
        'Visa fees payment receipt'
      ]
    },
    
    accommodation: {
      types: [
        'University Hostels (Most common)',
        'Shared Apartments',
        'Private Rooms',
        'Homestay'
      ],
      facilities: [
        '24/7 Security',
        'Central Heating',
        'Hot Water Supply',
        'Kitchen/Mess',
        'Laundry',
        'WiFi',
        'Study Rooms',
        'Recreation Areas',
        'Indian Mess Available'
      ],
      averageCost: '₹50,000 - ₹1,00,000 per year'
    },
    
    livingInfo: {
      climate: 'Continental (Summer: 15-25°C, Winter: -10 to -30°C)',
      language: 'Russian (English widely used in universities)',
      currency: 'Russian Ruble (RUB)',
      timeZone: 'UTC+3 (Moscow Time)',
      indianCommunity: 'Large Indian student community in all major cities',
      safetyRating: 'Excellent (9/10) – Very safe for international students',
      foodAvailability: 'Indian restaurants, grocery stores, and Indian mess in hostels'
    },
    
    workOpportunities: {
      partTimeAllowed: false,
      hoursPerWeek: 'Not allowed during studies',
      averageWage: 'N/A',
      postStudyWork: 'Must return to India, can apply for work visa separately'
    },
    
    recognitions: [
      'NMC (National Medical Commission), India',
      'WHO (World Health Organization)',
      'UNESCO',
      'FAIMER',
      'ECFMG (USA)',
      'GMC (UK)',
      'MCC (Canada)',
      'AMC (Australia)'
    ],
    
    careerProspects: {
      description: 'Graduates with Russian medical degrees can practice medicine in India after clearing FMGE/NExT exam. They are also eligible to appear for USMLE (USA), PLAB (UK), and other international licensing examinations.',
      examsToClear: [
        'FMGE/NExT (India) – Mandatory',
        'USMLE (USA) – Optional',
        'PLAB (UK) – Optional',
        'AMC (Australia) – Optional',
        'LMCC (Canada) – Optional'
      ],
      averageSalary: '₹6,00,000 - ₹12,00,000 per year (India), Higher in foreign countries'
    },
    
    highlights: [
      {
        title: 'Affordable Education',
        description: 'Low tuition fees compared to private medical colleges in India, starting from ₹3-6 Lakhs per year with no donation'
      },
      {
        title: 'Global Recognition',
        description: 'Medical degree recognized by NMC, WHO, UNESCO, FAIMER, ECFMG, and medical councils of 180+ countries'
      },
      {
        title: 'Quality Education',
        description: 'World-class medical education with modern infrastructure, experienced faculty, and practical training'
      },
      {
        title: 'No Entrance Exam',
        description: 'Direct admission based on NEET qualification without any university entrance test'
      },
      {
        title: 'English Medium',
        description: 'Complete MBBS program taught in English language with Russian language support for patient interaction'
      },
      {
        title: 'Safe Environment',
        description: 'Student-friendly and safe environment with strong security measures in universities and cities'
      }
    ],
    
    advantages: [
      'Over 50 years of trusted medical education for international students',
      '30,000+ Indian students already studying/graduated from Russia',
      'No capitation or donation fees – completely transparent admission',
      'WHO and NMC approved medical universities',
      'Low cost of education and living',
      'English-medium programs – no language barrier',
      'Advanced medical infrastructure and technology',
      'Experienced and qualified faculty members',
      'Practical clinical training from 3rd year',
      'Indian food and accommodation available',
      'Safe and welcoming environment for Indian students',
      'Direct admission without entrance exams',
      'Globally recognized medical degree',
      'High pass rate in FMGE/NExT among Russian graduates',
      'Opportunity to experience Russian culture and history'
    ],
    
    medicalLicensing: {
      india: 'Must clear FMGE/NExT exam conducted by NMC to practice in India',
      usa: 'Eligible to appear for USMLE Steps 1, 2, and 3 for medical practice in USA',
      uk: 'Eligible to appear for PLAB (Professional and Linguistic Assessments Board) test for UK practice',
      other: 'Recognized in 180+ countries including Canada, Australia, New Zealand, Middle East, and European countries'
    }
  },

  // ============================================
  // GEORGIA
  // ============================================
  georgia: {
    id: 'georgia',
    name: 'Georgia',
    slug: 'georgia',
    flag: '🇬🇪',
    heroImage: 'https://images.unsplash.com/photo-1591265670940-5643c0c3cb17?w=1920&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1591265670940-5643c0c3cb17?w=600&q=80',
      'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=600&q=80',
      'https://images.unsplash.com/photo-1585128903994-03e4d2a1acc4?w=600&q=80'
    ],
    
    overview: {
      title: 'Georgia – European Standard MBBS at Asian Prices',
      description: 'Georgia offers European-standard medical education with modern infrastructure, experienced faculty, and affordable fees, making it an ideal destination for Indian medical students.',
      detailedDescription: [
        'Georgia has emerged as one of the most popular destinations for MBBS abroad, especially for Indian students seeking quality education at affordable costs. Located at the crossroads of Europe and Asia, Georgia offers a unique blend of European education standards with Asian affordability.',
        'With 12+ NMC and WHO approved medical universities, Georgia provides world-class medical education in English medium. The country follows the Bologna Process, ensuring that degrees are recognized across Europe and globally.',
        'Georgian medical universities are equipped with state-of-the-art facilities, modern laboratories, and affiliated hospitals providing excellent clinical exposure. The faculty comprises experienced professors with international qualifications.',
        'Safety, affordability, and quality education make Georgia an attractive destination for Indian students. The country has a very low crime rate, friendly people, and a growing Indian student community.'
      ]
    },
    
    stats: {
      totalUniversities: '12+',
      nmcApproved: '12+',
      indianStudents: '7,000+',
      programDuration: '6 years',
      mediumOfInstruction: 'English',
      averageFees: '₹4-7 Lakhs/year'
    },
    
    whyStudyHere: {
      title: 'Advantages of Studying MBBS in Georgia',
      points: [
        'European standard education at affordable Asian prices',
        '12+ NMC and WHO approved medical universities',
        'Complete English-medium programs – no language barrier',
        'No entrance exams – direct admission based on NEET',
        'Modern infrastructure with advanced medical facilities',
        'High-quality education following Bologna Process',
        'Safe country with very low crime rate',
        'Affordable tuition fees (₹4-7 Lakhs per year)',
        'Low cost of living compared to European countries',
        'Recognized globally in 180+ countries',
        'Extensive clinical exposure in affiliated hospitals',
        'Experienced international faculty',
        'Beautiful country with rich history and culture',
        'Growing Indian student community',
        'Easy visa process',
        'Pleasant climate throughout the year'
      ]
    },
    
    topUniversities: [
      {
        rank: 1,
        name: 'Tbilisi State Medical University (TSMU)',
        city: 'Tbilisi',
        established: '1918',
        nmcApproved: true
      },
      {
        rank: 2,
        name: 'Batumi Shota Rustaveli State University',
        city: 'Batumi',
        established: '1945',
        nmcApproved: true
      },
      {
        rank: 3,
        name: 'David Tvildiani Medical University (DTMU)',
        city: 'Tbilisi',
        established: '1989',
        nmcApproved: true
      },
      {
        rank: 4,
        name: 'Caucasus International University',
        city: 'Tbilisi',
        established: '1995',
        nmcApproved: true
      },
      {
        rank: 5,
        name: 'University of Georgia (UG)',
        city: 'Tbilisi',
        established: '2004',
        nmcApproved: true
      },
      {
        rank: 6,
        name: 'Tbilisi Medical Academy',
        city: 'Tbilisi',
        established: '1992',
        nmcApproved: true
      },
      {
        rank: 7,
        name: 'Georgian American University',
        city: 'Tbilisi',
        established: '2001',
        nmcApproved: true
      },
      {
        rank: 8,
        name: 'European University',
        city: 'Tbilisi',
        established: '2012',
        nmcApproved: true
      },
      {
        rank: 9,
        name: 'Petre Shotadze Tbilisi Medical Academy',
        city: 'Tbilisi',
        established: '1990',
        nmcApproved: true
      },
      {
        rank: 10,
        name: 'Ivane Javakhishvili Tbilisi State University',
        city: 'Tbilisi',
        established: '1918',
        nmcApproved: true
      }
    ],
    
    programs: [
      {
        name: 'Doctor of Medicine (MD)',
        duration: '6 years',
        degree: 'MD (Doctor of Medicine)',
        medium: 'English'
      }
    ],
    
    costs: {
      tuitionFeeRange: '₹4,00,000 - ₹7,00,000 per year',
      hostelFees: '₹80,000 - ₹1,50,000 per year',
      foodExpenses: '₹8,000 - ₹12,000 per month',
      otherExpenses: '₹30,000 - ₹50,000 per year',
      totalFirstYear: '₹6,00,000 - ₹10,00,000',
      totalCourse: '₹30,00,000 - ₹50,00,000 (6 years)'
    },
    
    eligibility: {
      neetRequirement: 'NEET Qualified (Mandatory)',
      academicRequirement: 'Minimum 50% in PCB (40% for SC/ST/OBC)',
      ageLimit: '17-25 years',
      documents: [
        '10th and 12th Mark sheets',
        'NEET Scorecard',
        'Passport (valid 18+ months)',
        'Birth Certificate',
        'Medical Fitness Certificate',
        'HIV Negative Certificate',
        'Police Clearance Certificate',
        'Passport size photographs',
        'Bank statements',
        'Migration Certificate'
      ]
    },
    
    intakes: {
      main: 'September/October',
      secondary: 'March/April (Limited universities)',
      applicationDeadline: 'August for September intake'
    },
    
    visa: {
      type: 'D-Type Student Visa',
      processingTime: '10-15 days',
      validity: '1 year (renewable)',
      requirements: [
        'Invitation Letter from University',
        'Valid Passport',
        'Visa Application Form',
        'Photographs',
        'Medical Insurance',
        'Bank statements',
        'Accommodation proof',
        'Visa fee payment'
      ]
    },
    
    accommodation: {
      types: [
        'University Hostels',
        'Private Hostels',
        'Shared Apartments',
        'Private Flats'
      ],
      facilities: [
        '24/7 Security',
        'Heating System',
        'Hot Water',
        'WiFi',
        'Kitchen/Mess',
        'Laundry',
        'Study Rooms',
        'Recreation Areas',
        'Indian Food Available'
      ],
      averageCost: '₹80,000 - ₹1,50,000 per year'
    },
    
    livingInfo: {
      climate: 'Temperate (Summer: 20-30°C, Winter: 0-10°C)',
      language: 'Georgian (English in universities)',
      currency: 'Georgian Lari (GEL)',
      timeZone: 'UTC+4 (Georgia Standard Time)',
      indianCommunity: 'Growing Indian student community (7,000+)',
      safetyRating: 'Excellent (9/10) – Very safe country',
      foodAvailability: 'Indian restaurants, grocery stores widely available'
    },
    
    workOpportunities: {
      partTimeAllowed: false,
      hoursPerWeek: 'Not allowed during studies',
      averageWage: 'N/A',
      postStudyWork: 'Not applicable – return to India after completion'
    },
    
    recognitions: [
      'NMC (National Medical Commission), India',
      'WHO (World Health Organization)',
      'FAIMER',
      'ECFMG (USA)',
      'GMC (UK)',
      'European Medical Council',
      'Bologna Process'
    ],
    
    careerProspects: {
      description: 'Graduates can practice in India after clearing FMGE/NExT. Eligible for USMLE, PLAB, and other international licensing exams.',
      examsToClear: [
        'FMGE/NExT (India) – Mandatory',
        'USMLE (USA)',
        'PLAB (UK)',
        'AMC (Australia)'
      ],
      averageSalary: '₹6,00,000 - ₹15,00,000 per year'
    },
    
    highlights: [
      {
        title: 'European Education',
        description: 'Follow Bologna Process with European education standards and global recognition'
      },
      {
        title: 'Affordable Fees',
        description: 'European quality education at significantly lower costs than Western Europe'
      },
      {
        title: 'Safe Environment',
        description: 'One of the safest countries with very low crime rate and friendly people'
      },
      {
        title: 'Modern Infrastructure',
        description: 'State-of-the-art facilities, advanced labs, and well-equipped hospitals'
      },
      {
        title: 'English Medium',
        description: 'Complete MD program in English with no language barrier'
      },
      {
        title: 'Easy Visa',
        description: 'Simple and quick visa process with high approval rate'
      }
    ],
    
    advantages: [
      'European standard medical education',
      'NMC and WHO approved universities',
      'Affordable tuition and living costs',
      'English-medium programs',
      'Modern infrastructure and facilities',
      'Experienced international faculty',
      'Safe and peaceful country',
      'Beautiful scenic locations',
      'Rich cultural heritage',
      'Pleasant climate',
      'Easy visa process',
      'Growing Indian community',
      'Global degree recognition',
      'No entrance exams',
      'Direct admission based on NEET'
    ],
    
    medicalLicensing: {
      india: 'Must clear FMGE/NExT to practice in India',
      usa: 'Eligible for USMLE examination',
      uk: 'Eligible for PLAB test',
      other: 'Recognized in 180+ countries including Europe, Middle East, and Commonwealth nations'
    }
  },

  // ============================================
  // UZBEKISTAN
  // ============================================
  uzbekistan: {
    id: 'uzbekistan',
    name: 'Uzbekistan',
    slug: 'uzbekistan',
    flag: '🇺🇿',
    heroImage: 'https://images.unsplash.com/photo-1597075933405-2c6c7e9df88c?w=1920&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1597075933405-2c6c7e9df88c?w=600&q=80',
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80',
      'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=600&q=80'
    ],
    
    overview: {
      title: 'Uzbekistan – Emerging Affordable Medical Education Hub',
      description: 'Uzbekistan is rapidly becoming a preferred destination for MBBS with its NMC-approved universities, affordable fees, quality education, and safe environment for Indian students.',
      detailedDescription: [
        'Uzbekistan, located in Central Asia, has emerged as one of the most affordable and quality destinations for pursuing MBBS abroad. With 8+ NMC-approved medical universities, Uzbekistan offers excellent medical education at very low costs.',
        'The country is known for its rich history along the ancient Silk Road, with beautiful cities like Tashkent, Samarkand, and Bukhara. Uzbek medical universities follow modern teaching methodologies with English-medium programs.',
        'Medical universities in Uzbekistan are equipped with modern infrastructure, well-maintained laboratories, and affiliated hospitals providing good clinical exposure to students from the third year onwards.',
        'With low tuition fees, affordable living costs, safe environment, and quality education, Uzbekistan has become an attractive option for Indian students seeking to study MBBS abroad without financial burden.'
      ]
    },
    
    stats: {
      totalUniversities: '8+',
      nmcApproved: '8+',
      indianStudents: '5,000+',
      programDuration: '6 years',
      mediumOfInstruction: 'English',
      averageFees: '₹2.5-4 Lakhs/year'
    },
    
    whyStudyHere: {
      title: 'Advantages of Studying MBBS in Uzbekistan',
      points: [
        'Most affordable MBBS destination globally',
        '8+ NMC and WHO approved medical universities',
        'Low tuition fees (₹2.5-4 Lakhs per year)',
        'Very low cost of living',
        'English-medium MBBS programs',
        'No entrance exams – NEET qualification sufficient',
        'Modern infrastructure and facilities',
        'Safe and peaceful country',
        'Rich cultural heritage and history',
        'Growing Indian student community',
        'Indian food and hostels available',
        'Pleasant climate most of the year',
        'Experienced faculty members',
        'Good clinical exposure',
        'Globally recognized medical degree',
        'Easy visa process'
      ]
    },
    
    topUniversities: [
      {
        rank: 1,
        name: 'Tashkent Medical Academy',
        city: 'Tashkent',
        established: '1919',
        nmcApproved: true
      },
      {
        rank: 2,
        name: 'Samarkand State Medical Institute',
        city: 'Samarkand',
        established: '1930',
        nmcApproved: true
      },
      {
        rank: 3,
        name: 'Andijan State Medical Institute',
        city: 'Andijan',
        established: '1955',
        nmcApproved: true
      },
      {
        rank: 4,
        name: 'Bukhara State Medical Institute',
        city: 'Bukhara',
        established: '1990',
        nmcApproved: true
      },
      {
        rank: 5,
        name: 'Fergana State Medical Institute of Public Health',
        city: 'Fergana',
        established: '1992',
        nmcApproved: true
      },
      {
        rank: 6,
        name: 'Urgench Branch of Tashkent Medical Academy',
        city: 'Urgench',
        established: '2010',
        nmcApproved: true
      },
      {
        rank: 7,
        name: 'Nukus Branch of Tashkent Pediatric Medical Institute',
        city: 'Nukus',
        established: '2006',
        nmcApproved: true
      },
      {
        rank: 8,
        name: 'Tashkent Pediatric Medical Institute',
        city: 'Tashkent',
        established: '1972',
        nmcApproved: true
      }
    ],
    
    programs: [
      {
        name: 'General Medicine (MBBS)',
        duration: '6 years',
        degree: 'Doctor of Medicine',
        medium: 'English'
      }
    ],
    
    costs: {
      tuitionFeeRange: '₹2,50,000 - ₹4,00,000 per year',
      hostelFees: '₹40,000 - ₹80,000 per year',
      foodExpenses: '₹6,000 - ₹10,000 per month',
      otherExpenses: '₹20,000 - ₹40,000 per year',
      totalFirstYear: '₹4,00,000 - ₹6,00,000',
      totalCourse: '₹18,00,000 - ₹28,00,000 (6 years)'
    },
    
    eligibility: {
      neetRequirement: 'NEET Qualified (Mandatory)',
      academicRequirement: 'Minimum 50% in PCB (40% for SC/ST/OBC)',
      ageLimit: '17-25 years',
      documents: [
        '10th and 12th Certificates',
        'NEET Scorecard',
        'Passport',
        'Birth Certificate',
        'Medical Fitness Certificate',
        'HIV Test Report',
        'Passport photographs',
        'Bank statements',
        'Character Certificate'
      ]
    },
    
    intakes: {
      main: 'September',
      applicationDeadline: 'August'
    },
    
    visa: {
      type: 'Student Visa',
      processingTime: '15-20 days',
      validity: '1 year (renewable)',
      requirements: [
        'Invitation Letter',
        'Passport',
        'Visa Application',
        'Photographs',
        'Medical reports',
        'Admission letter',
        'Visa fees'
      ]
    },
    
    accommodation: {
      types: [
        'University Hostels',
        'Private Hostels',
        'Shared Rooms'
      ],
      facilities: [
        'Security',
        'Heating',
        'Hot Water',
        'WiFi',
        'Kitchen',
        'Laundry',
        'Indian Mess'
      ],
      averageCost: '₹40,000 - ₹80,000 per year'
    },
    
    livingInfo: {
      climate: 'Continental (Summer: 25-35°C, Winter: 0-10°C)',
      language: 'Uzbek/Russian (English in universities)',
      currency: 'Uzbekistani Som (UZS)',
      timeZone: 'UTC+5',
      indianCommunity: 'Growing community (5,000+ students)',
      safetyRating: 'Good (8/10) – Safe and peaceful',
      foodAvailability: 'Indian restaurants and groceries available'
    },
    
    workOpportunities: {
      partTimeAllowed: false,
      hoursPerWeek: 'Not allowed',
      averageWage: 'N/A',
      postStudyWork: 'Not applicable'
    },
    
    recognitions: [
      'NMC, India',
      'WHO',
      'FAIMER',
      'ECFMG'
    ],
    
    careerProspects: {
      description: 'Graduates must clear FMGE/NExT for India practice',
      examsToClear: ['FMGE/NExT (India)', 'USMLE (USA)', 'PLAB (UK)'],
      averageSalary: '₹5,00,000 - ₹12,00,000 per year'
    },
    
    highlights: [
      {
        title: 'Most Affordable',
        description: 'Lowest fees among all MBBS destinations'
      },
      {
        title: 'Quality Education',
        description: 'NMC approved with good infrastructure'
      },
      {
        title: 'Safe Country',
        description: 'Peaceful and student-friendly environment'
      },
      {
        title: 'Rich Heritage',
        description: 'Ancient Silk Road history and culture'
      }
    ],
    
    advantages: [
      'Extremely affordable fees',
      'Low living costs',
      'NMC/WHO approved',
      'English medium',
      'No entrance exams',
      'Safe environment',
      'Good infrastructure',
      'Indian community',
      'Cultural experience',
      'Easy visa process'
    ],
    
    medicalLicensing: {
      india: 'FMGE/NExT mandatory',
      usa: 'USMLE eligible',
      uk: 'PLAB eligible',
      other: 'Recognized globally'
    }
  },

  // Will continue with Kazakhstan, Kyrgyzstan, Nepal, and China in the same detailed format...
  
};