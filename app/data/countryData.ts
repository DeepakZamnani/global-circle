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
  canada: {
  id: "canada",
  name: "Canada",
  slug: "canada",
  flag: "https://flagcdn.com/w320/ca.png",
  heroImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2000",
  galleryImages: [
    "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2000", // Toronto cityscape
    "https://images.unsplash.com/photo-1519832979-6fa011b87667?q=80&w=2000", // University campus
    "https://images.unsplash.com/photo-1517408366226-c5e7a49f9c32?q=80&w=2000", // Students studying
    "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2000", // Canadian landscape
    "https://images.unsplash.com/photo-1519832979-6fa011b87667?q=80&w=2000", // Campus life
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000"  // Vancouver cityscape
  ],
  
  // Overview Section
  overview: {
    title: "Study in Canada - A World-Class Education Destination",
    description: "Canada is the world's second-largest nation, located in North America, covering over 9.98 million km² of total area. The capital is Ottawa. Canada is a highly developed and one of the most diverse ethnical and multicultural nations worldwide, positioned eighth-largest in the world due to its advanced economy.",
    detailedDescription: [
      "Canada is the world's second-largest nation, located in North America. It covers over 9.98 million km² of total area. The capital of Canada is Ottawa. Canada is a highly developed and one of the most diverse ethnical and multicultural nations worldwide. In addition, the country is positioned eighth-largest in the world due to its advanced economy.",
      "The country ranks high in terms of transparent governance, quality of life, education, gender equality, economic freedom, and so on. An Indian student willing to work and settle abroad must consider studying in Canada as one of the best options. After completing your studies, you can opt for several work opportunities and get your hands on PR.",
      "To begin with, Canada ranks as a top study destination for higher studies due to its world-class colleges and universities that offer supreme quality education at low expenditure, low cost of living, and high safety & security. As of now, there are more than 220 public and private universities and over 213 public colleges and institutes.",
      "In Canada, most educational institutions run on funding made by the public or the local government. Additionally, the nation ensures mandatory education for up to the age of 16-18 or until a student obtains a high school diploma. The academic year generally begins in September and ends in the mid/end of June, however, there may be variations within the country.",
      "Moreover, Canada offers full-fledged scholarships and employment opportunities to national and international students. Besides this, many programs also offer work placement or internship opportunities, which enable the students to gain hands-on experience while studying.",
      "Nonetheless, students with education and degree from Canadian Universities tend to have better & high chances of settling down in Canada."
    ]
  },
  
  // Quick Stats
  stats: {
    totalUniversities: "220+",
    nmcApproved: "Not Applicable",
    indianStudents: "320,000+",
    programDuration: "3-4 Years (Bachelor's), 1-2 Years (Master's)",
    mediumOfInstruction: "English, French",
    averageFees: "CAD 15,000 - 40,000 per year"
  },
  
  // Why Study Here
  whyStudyHere: {
    title: "Why Study in Canada?",
    points: [
      "Canadian universities and colleges follow industry-oriented, practical, skill-based teaching-learning modules",
      "7 Canadian universities out of 200 in the world are ranked among the top",
      "Several reputed higher educational institutions have tie-ups with high-end industries",
      "Canada is a part of the Organization for Economic Cooperation and Development (OECD), a unique forum where market-based economies work together to strategize and promote sustainable economic growth",
      "The tuition fees in Canadian colleges and universities are lower than in Australia, the U.K., and the U.S.",
      "Students studying in Canada can work while enrolled at the university",
      "Loads of opportunities for part-time basis work, as well as internships, are presented to the students as part of their study courses",
      "World-class colleges and universities that offer supreme quality education at low expenditure",
      "Low cost of living and high safety & security",
      "Full-fledged scholarships and employment opportunities to national and international students",
      "Work placement or internship opportunities enabling students to gain hands-on experience while studying",
      "Students with education and degree from Canadian Universities have better & high chances of settling down in Canada"
    ]
  },
  
  // Top Universities
  topUniversities: [
    {
      rank: 1,
      name: "University of Toronto",
      city: "Toronto",
      established: "1827",
      nmcApproved: false
    },
    {
      rank: 2,
      name: "University of British Columbia",
      city: "Vancouver",
      established: "1908",
      nmcApproved: false
    },
    {
      rank: 3,
      name: "McGill University",
      city: "Montreal",
      established: "1821",
      nmcApproved: false
    },
    {
      rank: 4,
      name: "University of Alberta",
      city: "Edmonton",
      established: "1908",
      nmcApproved: false
    },
    {
      rank: 5,
      name: "University of Waterloo",
      city: "Waterloo",
      established: "1957",
      nmcApproved: false
    },
    {
      rank: 6,
      name: "University of Calgary",
      city: "Calgary",
      established: "1966",
      nmcApproved: false
    },
    {
      rank: 7,
      name: "McMaster University",
      city: "Hamilton",
      established: "1887",
      nmcApproved: false
    },
    {
      rank: 8,
      name: "Simon Fraser University",
      city: "Burnaby",
      established: "1965",
      nmcApproved: false
    },
    {
      rank: 9,
      name: "Western University",
      city: "London",
      established: "1878",
      nmcApproved: false
    },
    {
      rank: 10,
      name: "University of Montreal",
      city: "Montreal",
      established: "1878",
      nmcApproved: false
    }
  ],
  
  // Programs Offered
  programs: [
    {
      name: "Global Business Management",
      duration: "3-4 Years",
      degree: "Bachelor's / Master's",
      medium: "English"
    },
    {
      name: "International Management",
      duration: "1-2 Years",
      degree: "Master's",
      medium: "English"
    },
    {
      name: "Engineering (Mechanical, Electrical & Civil)",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Web Development & Computer Science",
      duration: "3-4 Years",
      degree: "Bachelor's / Diploma",
      medium: "English"
    },
    {
      name: "Bioscience",
      duration: "3-4 Years",
      degree: "Bachelor's / Master's",
      medium: "English"
    },
    {
      name: "Marketing",
      duration: "2-4 Years",
      degree: "Diploma / Bachelor's",
      medium: "English"
    },
    {
      name: "Journalism & Mass Media",
      duration: "3-4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Graphic Designing",
      duration: "2-3 Years",
      degree: "Diploma / Bachelor's",
      medium: "English"
    },
    {
      name: "Agriculture Science",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Arts, Psychology & Human Resources",
      duration: "3-4 Years",
      degree: "Bachelor's / Master's",
      medium: "English"
    },
    {
      name: "Hospitality Management",
      duration: "2-4 Years",
      degree: "Diploma / Bachelor's",
      medium: "English"
    },
    {
      name: "Medical & Healthcare",
      duration: "4-6 Years",
      degree: "Bachelor's / Master's",
      medium: "English"
    }
  ],
  
  // Cost Breakdown
  costs: {
    tuitionFeeRange: "CAD 15,000 - 40,000 per year",
    hostelFees: "CAD 8,000 - 15,000 per year",
    foodExpenses: "CAD 3,600 - 6,000 per year",
    otherExpenses: "CAD 2,000 - 4,000 per year",
    totalFirstYear: "CAD 28,600 - 65,000",
    totalCourse: "CAD 85,800 - 195,000 (3 years)"
  },
  
  // Admission Requirements
  eligibility: {
    neetRequirement: "Not Required for most programs",
    academicRequirement: "Minimum 60% in 10+2 or equivalent. IELTS/TOEFL required for English proficiency",
    ageLimit: "No specific age limit",
    documents: [
      "Valid passport",
      "Academic transcripts (10th, 12th, and Bachelor's if applicable)",
      "English language proficiency test scores (IELTS/TOEFL/PTE)",
      "Statement of Purpose (SOP)",
      "Letters of Recommendation (LOR)",
      "Resume/CV",
      "Proof of financial support",
      "Study permit application",
      "Medical examination certificate",
      "Police clearance certificate"
    ]
  },
  
  // Intakes
  intakes: {
    main: "September (Fall)",
    secondary: "January (Winter), May (Summer)",
    applicationDeadline: "Fall: January-March, Winter: September-October, Summer: January-February"
  },
  
  // Visa Information
  visa: {
    type: "Study Permit",
    processingTime: "3-5 weeks (can extend to 12 weeks)",
    validity: "Duration of study program + 90 days",
    requirements: [
      "Letter of acceptance from a Designated Learning Institution (DLI)",
      "Proof of financial support (CAD 10,000 for one year + tuition fees)",
      "Valid passport",
      "Passport-sized photographs",
      "Statement of Purpose",
      "Medical examination (if required)",
      "Police clearance certificate",
      "Proof of payment of visa application fee",
      "Biometrics",
      "English language proficiency scores"
    ]
  },
  
  // Accommodation
  accommodation: {
    types: [
      "On-campus residence/dormitories",
      "Off-campus apartments",
      "Homestay with Canadian families",
      "Shared apartments",
      "Private rental apartments"
    ],
    facilities: [
      "Furnished rooms",
      "Wi-Fi connectivity",
      "Common study areas",
      "Laundry facilities",
      "Meal plans (in some residences)",
      "24/7 security",
      "Recreational facilities",
      "Kitchen facilities"
    ],
    averageCost: "CAD 8,000 - 15,000 per year"
  },
  
  // Living in Country
  livingInfo: {
    climate: "Varied - ranges from temperate to arctic. Winters are cold (below 0°C), summers are mild to warm (15-30°C)",
    language: "English and French (official languages)",
    currency: "Canadian Dollar (CAD)",
    timeZone: "UTC-3.5 to UTC-8 (6 time zones)",
    indianCommunity: "Large Indian diaspora with over 1.6 million people. Well-established Indian communities in major cities",
    safetyRating: "Very High - Canada ranks among the safest countries in the world",
    foodAvailability: "Indian restaurants and grocery stores widely available in major cities. Easy access to vegetarian and halal food options"
  },
  
  // Work Opportunities
  workOpportunities: {
    partTimeAllowed: true,
    hoursPerWeek: "20 hours during academic sessions, full-time during breaks",
    averageWage: "CAD 14-18 per hour",
    postStudyWork: "Post-Graduation Work Permit (PGWP) - up to 3 years depending on program length. Pathway to Permanent Residency (PR) available"
  },
  
  // Recognition & Accreditation
  recognitions: [
    "Universities regulated by provincial governments",
    "Quality assurance through provincial quality assurance agencies",
    "Member of Association of Universities and Colleges of Canada (AUCC)",
    "Many universities ranked in global top 200",
    "Degrees recognized worldwide",
    "Part of Bologna Process equivalency",
    "OECD member country",
    "Canadian degrees highly valued by employers globally"
  ],
  
  // Job Prospects
  careerProspects: {
    description: "International students in Canada have excellent job opportunities. Students need a valid work permit to join co-op or internship programs. After completion of studies, students must apply for a post-graduation work permit to work in Canada. Canada offers pathways to permanent residency through various immigration programs like Express Entry, Provincial Nominee Programs (PNP), and Canadian Experience Class (CEC).",
    examsToClear: [
      "Provincial licensing exams (for regulated professions)",
      "Professional certification exams (field-specific)",
      "Language proficiency maintenance"
    ],
    averageSalary: "CAD 50,000 - 85,000 per year (varies by field and experience)"
  },
  
  // Key Highlights
  highlights: [
    {
      title: "Types of Institutions",
      description: "Canada houses more than 8,000 colleges and 16,000 university programs. Students are free to decide on any institution from public universities to community colleges. Public universities are mainly autonomous and publicly funded, offering a wide array of courses. University degrees are offered at three consecutive levels: bachelor's, master's, and doctorate degrees."
    },
    {
      title: "Public and Private Colleges",
      description: "Canada has privately and publicly funded colleges. There are two types: community colleges and university colleges. Colleges provide much more career-oriented, practical programs-based training including general courses such as English, Math, Science, Psychology, and many others."
    },
    {
      title: "University Colleges",
      description: "University colleges offer either academic-oriented university degree programs or additional practical/technical-oriented college diplomas and certificates."
    },
    {
      title: "Community Colleges",
      description: "These colleges work closely with employers and professional organizations to render professional development services and specialized programs."
    },
    {
      title: "Career Colleges/Vocational Education",
      description: "The main objective of vocational education is to prepare students for the job market. These programs are followed by a series of courses with specialized skills or trade instructions."
    },
    {
      title: "Academic Year Structure",
      description: "The academic year generally begins in September and ends in the mid/end of June, however, there may be variations within the country. Multiple intake options available throughout the year."
    },
    {
      title: "Work While Studying",
      description: "Students can work part-time (20 hours per week) during academic sessions and full-time during scheduled breaks. Many programs offer work placement or internship opportunities as part of the curriculum."
    },
    {
      title: "Pathway to Permanent Residency",
      description: "Canada offers clear pathways to permanent residency for international students. Post-graduation work permits allow students to gain Canadian work experience, which significantly helps in PR applications through programs like Express Entry and Provincial Nominee Programs."
    }
  ],
  
  // Advantages
  advantages: [
    "Canadian universities and colleges follow industry-oriented, practical, skill-based teaching-learning modules",
    "7 Canadian universities ranked among the top 200 in the world",
    "Reputed higher educational institutions have tie-ups with high-end industries",
    "Member of the Organization for Economic Cooperation and Development (OECD)",
    "Tuition fees in Canadian colleges and universities are lower than in Australia, the U.K., and the U.S.",
    "Students can work while enrolled at the university (20 hours per week)",
    "Abundant opportunities for part-time work and internships as part of study courses",
    "More than 220 public and private universities and over 213 public colleges and institutes",
    "Supreme quality education at low expenditure",
    "Low cost of living compared to other study destinations",
    "High safety and security standards",
    "Full-fledged scholarships available for national and international students",
    "Work placement or internship opportunities enabling hands-on experience",
    "Better chances of settling down in Canada with PR opportunities",
    "Multicultural and diverse society welcoming international students",
    "Excellent quality of life and high standards of living",
    "Strong Indian community support in major cities",
    "Post-graduation work permit (PGWP) up to 3 years",
    "Clear pathway to permanent residency",
    "World-class research facilities and opportunities",
    "Safe and politically stable environment",
    "Beautiful natural landscapes and outdoor recreational activities",
    "High-quality healthcare system",
    "Gender equality and inclusive society",
    "Transparent governance and strong rule of law"
  ],
  
  // Medical Licensing
  medicalLicensing: {
    india: "Canadian medical degrees may require additional screening through MCI/NMC equivalency process. Medical Council of India (MCI) screening test required for practice in India.",
    usa: "Canadian medical graduates can apply for USMLE (United States Medical Licensing Examination) to practice in the USA. Canadian medical degrees are well-recognized.",
    uk: "Canadian medical degrees are generally recognized in the UK. May need to pass PLAB (Professional and Linguistic Assessments Board) test or equivalent.",
    other: "Canadian medical degrees are recognized in many countries worldwide. Specific licensing requirements vary by country. Canadian medical education meets international standards and graduates are eligible to apply for medical licensing in most countries after meeting local requirements."
  }
}
  // ============================================
  // RUSSIA
  // ============================================
  // russia: {
  //   id: 'russia',
  //   name: 'Russia',
  //   slug: 'russia',
  //   flag: '🇷🇺',
  //   heroImage: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=1920&q=80',
  //   galleryImages: [
  //     'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&q=80',
  //     'https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=600&q=80',
  //     'https://images.unsplash.com/photo-1512495039889-7d0c2c2e4b1a?w=600&q=80'
  //   ],
    
  //   overview: {
  //     title: 'Russia – Premier Destination for Affordable Quality MBBS',
  //     description: 'Russia has been a trusted destination for Indian medical students for over 50 years, offering world-class medical education at affordable costs with complete English-medium programs.',
  //     detailedDescription: [
  //       'Russia is one of the oldest and most preferred destinations for MBBS abroad, especially for Indian students. With over 60 NMC-approved medical universities, Russia offers high-quality medical education that is recognized globally.',
  //       'Russian medical universities have trained over 30,000 Indian doctors who are now successfully practicing in India and across the world. The medical degree from Russia is approved by NMC (National Medical Commission), WHO, UNESCO, and many other international bodies.',
  //       'The country offers a perfect blend of quality education, affordable fees, modern infrastructure, and a multicultural environment. Students get extensive clinical exposure from the 3rd year onwards with hands-on training in university hospitals.',
  //       'With no entrance exams, no capitation fees, and direct admission based on NEET scores, Russia continues to be the top choice for Indian students aspiring to become doctors.'
  //     ]
  //   },
    
  //   stats: {
  //     totalUniversities: '60+',
  //     nmcApproved: '60+',
  //     indianStudents: '30,000+',
  //     programDuration: '6 years',
  //     mediumOfInstruction: 'English',
  //     averageFees: '₹4-6 Lakhs/year'
  //   },
    
  //   whyStudyHere: {
  //     title: 'Advantages of Studying MBBS in Russia',
  //     points: [
  //       '50+ years of experience in training international medical students',
  //       '60+ NMC/WHO approved medical universities',
  //       'No donation or capitation fees – transparent admission process',
  //       'Direct admission based on NEET qualification – no entrance exams',
  //       'Complete English-medium MBBS programs',
  //       'Affordable tuition fees starting from ₹3-6 Lakhs per year',
  //       'Low cost of living (₹15,000-25,000 per month)',
  //       'Modern infrastructure with advanced medical equipment',
  //       'Highly qualified faculty with international exposure',
  //       'Extensive clinical training from 3rd year onwards',
  //       'Safe and student-friendly environment',
  //       'Indian food and hostels available',
  //       'Globally recognized medical degree',
  //       'Eligibility to practice in India, USA, UK, Canada, Australia, and 180+ countries',
  //       'High FMGE/NExT pass rate among graduates',
  //       'Rich cultural experience and exposure to diverse nationalities'
  //     ]
  //   },
    
  //   topUniversities: [
  //     {
  //       rank: 1,
  //       name: 'Kazan Federal University',
  //       city: 'Kazan',
  //       established: '1804',
  //       nmcApproved: true
  //     },
  //     {
  //       rank: 2,
  //       name: 'Peoples Friendship University of Russia (RUDN)',
  //       city: 'Moscow',
  //       established: '1960',
  //       nmcApproved: true
  //     },
  //     {
  //       rank: 3,
  //       name: 'First Moscow State Medical University (Sechenov)',
  //       city: 'Moscow',
  //       established: '1758',
  //       nmcApproved: true
  //     },
  //     {
  //       rank: 4,
  //       name: 'Crimean Federal University',
  //       city: 'Simferopol',
  //       established: '1918',
  //       nmcApproved: true
  //     },
  //     {
  //       rank: 5,
  //       name: 'Kursk State Medical University',
  //       city: 'Kursk',
  //       established: '1935',
  //       nmcApproved: true
  //     },
  //     {
  //       rank: 6,
  //       name: 'Northern State Medical University',
  //       city: 'Arkhangelsk',
  //       established: '1932',
  //       nmcApproved: true
  //     },
  //     {
  //       rank: 7,
  //       name: 'Volgograd State Medical University',
  //       city: 'Volgograd',
  //       established: '1935',
  //       nmcApproved: true
  //     },
  //     {
  //       rank: 8,
  //       name: 'Bashkir State Medical University',
  //       city: 'Ufa',
  //       established: '1932',
  //       nmcApproved: true
  //     },
  //     {
  //       rank: 9,
  //       name: 'Kabardino Balkarian State University',
  //       city: 'Nalchik',
  //       established: '1957',
  //       nmcApproved: true
  //     },
  //     {
  //       rank: 10,
  //       name: 'Orel State University',
  //       city: 'Orel',
  //       established: '1931',
  //       nmcApproved: true
  //     }
  //   ],
    
  //   programs: [
  //     {
  //       name: 'General Medicine (MBBS)',
  //       duration: '6 years (5 years + 1 year internship)',
  //       degree: 'Doctor of Medicine (MD)',
  //       medium: 'English'
  //     },
  //     {
  //       name: 'MD/MS Specializations',
  //       duration: '2-3 years',
  //       degree: 'Doctor of Medicine / Master of Surgery',
  //       medium: 'English/Russian'
  //     }
  //   ],
    
  //   costs: {
  //     tuitionFeeRange: '₹3,00,000 - ₹6,00,000 per year',
  //     hostelFees: '₹50,000 - ₹1,00,000 per year',
  //     foodExpenses: '₹10,000 - ₹15,000 per month',
  //     otherExpenses: '₹20,000 - ₹30,000 per year',
  //     totalFirstYear: '₹5,00,000 - ₹8,00,000',
  //     totalCourse: '₹25,00,000 - ₹40,00,000 (6 years)'
  //   },
    
  //   eligibility: {
  //     neetRequirement: 'NEET Qualified (Mandatory from 2021)',
  //     academicRequirement: 'Minimum 50% in Physics, Chemistry, Biology (40% for SC/ST/OBC)',
  //     ageLimit: '17-25 years as of 31st December of admission year',
  //     documents: [
  //       '10th and 12th Mark sheets and Certificates',
  //       'NEET Scorecard',
  //       'Passport (valid for minimum 18 months)',
  //       'Birth Certificate',
  //       'Medical Fitness Certificate',
  //       'HIV Test Report (Negative)',
  //       'COVID-19 Vaccination Certificate',
  //       'Passport size photographs (10-15 copies)',
  //       'Migration Certificate',
  //       'Character Certificate from School/College'
  //     ]
  //   },
    
  //   intakes: {
  //     main: 'September/October',
  //     secondary: 'February/March (Limited seats)',
  //     applicationDeadline: 'July for September intake, December for February intake'
  //   },
    
  //   visa: {
  //     type: 'Student Visa (Education Visa)',
  //     processingTime: '15-30 days',
  //     validity: '1 year (renewable annually)',
  //     requirements: [
  //       'Invitation Letter from University',
  //       'Valid Passport',
  //       'Visa Application Form',
  //       'Passport size photographs',
  //       'HIV Test Report',
  //       'Bank statements showing sufficient funds',
  //       'Visa fees payment receipt'
  //     ]
  //   },
    
  //   accommodation: {
  //     types: [
  //       'University Hostels (Most common)',
  //       'Shared Apartments',
  //       'Private Rooms',
  //       'Homestay'
  //     ],
  //     facilities: [
  //       '24/7 Security',
  //       'Central Heating',
  //       'Hot Water Supply',
  //       'Kitchen/Mess',
  //       'Laundry',
  //       'WiFi',
  //       'Study Rooms',
  //       'Recreation Areas',
  //       'Indian Mess Available'
  //     ],
  //     averageCost: '₹50,000 - ₹1,00,000 per year'
  //   },
    
  //   livingInfo: {
  //     climate: 'Continental (Summer: 15-25°C, Winter: -10 to -30°C)',
  //     language: 'Russian (English widely used in universities)',
  //     currency: 'Russian Ruble (RUB)',
  //     timeZone: 'UTC+3 (Moscow Time)',
  //     indianCommunity: 'Large Indian student community in all major cities',
  //     safetyRating: 'Excellent (9/10) – Very safe for international students',
  //     foodAvailability: 'Indian restaurants, grocery stores, and Indian mess in hostels'
  //   },
    
  //   workOpportunities: {
  //     partTimeAllowed: false,
  //     hoursPerWeek: 'Not allowed during studies',
  //     averageWage: 'N/A',
  //     postStudyWork: 'Must return to India, can apply for work visa separately'
  //   },
    
  //   recognitions: [
  //     'NMC (National Medical Commission), India',
  //     'WHO (World Health Organization)',
  //     'UNESCO',
  //     'FAIMER',
  //     'ECFMG (USA)',
  //     'GMC (UK)',
  //     'MCC (Canada)',
  //     'AMC (Australia)'
  //   ],
    
  //   careerProspects: {
  //     description: 'Graduates with Russian medical degrees can practice medicine in India after clearing FMGE/NExT exam. They are also eligible to appear for USMLE (USA), PLAB (UK), and other international licensing examinations.',
  //     examsToClear: [
  //       'FMGE/NExT (India) – Mandatory',
  //       'USMLE (USA) – Optional',
  //       'PLAB (UK) – Optional',
  //       'AMC (Australia) – Optional',
  //       'LMCC (Canada) – Optional'
  //     ],
  //     averageSalary: '₹6,00,000 - ₹12,00,000 per year (India), Higher in foreign countries'
  //   },
    
  //   highlights: [
  //     {
  //       title: 'Affordable Education',
  //       description: 'Low tuition fees compared to private medical colleges in India, starting from ₹3-6 Lakhs per year with no donation'
  //     },
  //     {
  //       title: 'Global Recognition',
  //       description: 'Medical degree recognized by NMC, WHO, UNESCO, FAIMER, ECFMG, and medical councils of 180+ countries'
  //     },
  //     {
  //       title: 'Quality Education',
  //       description: 'World-class medical education with modern infrastructure, experienced faculty, and practical training'
  //     },
  //     {
  //       title: 'No Entrance Exam',
  //       description: 'Direct admission based on NEET qualification without any university entrance test'
  //     },
  //     {
  //       title: 'English Medium',
  //       description: 'Complete MBBS program taught in English language with Russian language support for patient interaction'
  //     },
  //     {
  //       title: 'Safe Environment',
  //       description: 'Student-friendly and safe environment with strong security measures in universities and cities'
  //     }
  //   ],
    
  //   advantages: [
  //     'Over 50 years of trusted medical education for international students',
  //     '30,000+ Indian students already studying/graduated from Russia',
  //     'No capitation or donation fees – completely transparent admission',
  //     'WHO and NMC approved medical universities',
  //     'Low cost of education and living',
  //     'English-medium programs – no language barrier',
  //     'Advanced medical infrastructure and technology',
  //     'Experienced and qualified faculty members',
  //     'Practical clinical training from 3rd year',
  //     'Indian food and accommodation available',
  //     'Safe and welcoming environment for Indian students',
  //     'Direct admission without entrance exams',
  //     'Globally recognized medical degree',
  //     'High pass rate in FMGE/NExT among Russian graduates',
  //     'Opportunity to experience Russian culture and history'
  //   ],
    
  //   medicalLicensing: {
  //     india: 'Must clear FMGE/NExT exam conducted by NMC to practice in India',
  //     usa: 'Eligible to appear for USMLE Steps 1, 2, and 3 for medical practice in USA',
  //     uk: 'Eligible to appear for PLAB (Professional and Linguistic Assessments Board) test for UK practice',
  //     other: 'Recognized in 180+ countries including Canada, Australia, New Zealand, Middle East, and European countries'
  //   }
  // },

  // ============================================
  // GEORGIA
  // ============================================
  ,
  georgia: {
    id: 'georgia',
    name: 'Georgia',
    slug: 'georgia',
    flag: '🇬🇪',
    heroImage: 'https://images.unsplash.com/photo-1563413613822-2e335ab72e74?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdlb3JnaWF8ZW58MHx8MHx8fDA%3D',
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

  kyrgyzstan: {
  id: "kyrgyzstan",
  name: "Kyrgyzstan",
  slug: "kyrgyzstan",
  flag: "https://flagcdn.com/w320/kg.png",
  heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2000",
  galleryImages: [
    "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?q=80&w=2000", // Mountains of Kyrgyzstan
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000", // University students
    "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=2000", // Medical facilities
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000", // Bishkek city
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000", // Campus life
    "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=2000"  // Lake Issyk-Kul
  ],
  
  // Overview Section
  overview: {
    title: "Study in Kyrgyzstan - Switzerland of Central Asia",
    description: "Kyrgyzstan, officially the Kyrgyz Republic, is a landlocked, mountainous country in Central Asia known for its stunning natural beauty, affordable education, and globally recognized medical programs. With a population of 7.1 million, Kyrgyzstan has become one of the top 3 destinations in the world for MBBS abroad, attracting over 10,000 Indian students.",
    detailedDescription: [
      "Kyrgyzstan, officially the Kyrgyz Republic, is a landlocked, mountainous country in Central Asia bordered by Kazakhstan to the north, Uzbekistan to the west, Tajikistan to the southwest, and China to the southeast. The capital and largest city is Bishkek, covering an area of 49 square miles with a population of over 1.25 million people.",
      "Known as the 'Switzerland of Central Asia' because of its mountainous regions and breathtaking landscapes, Kyrgyzstan offers some of the most beautiful natural scenery in the world. The country features the stunning Tian Shan mountains, pristine Lake Issyk-Kul, and lush valleys perfect for outdoor enthusiasts.",
      "Kyrgyzstan has emerged as one of the top 3 destinations in the world to study MBBS abroad due to its main advantage of offering medical education at very low cost. The country is home to 20+ NMC-approved medical universities that offer medical education to over 5,000 international students every year.",
      "The medical colleges in Kyrgyzstan are recognized by NMC, WHO, ECFMG, FAIMER, and the Ministry of Education of Kyrgyzstan. The quality of education is high standard with focus on both theoretical and practical clinical training. The curriculum is similar to India, making it easier for Indian students to adapt.",
      "Over 10,000 Indian students are currently studying in Kyrgyzstan, making it one of the most preferred destinations for Indian medical aspirants. The country offers affordable education with tuition fees starting from just USD 3,500 per year, making the complete MBBS course achievable in just ₹19-30 lakhs including all expenses.",
      "Kyrgyzstan is known for its warm hospitality, student-friendly environment, and safe living conditions. The multilingual environment (Kyrgyz, Russian, and English) provides cultural immersion while English-medium programs ensure comfortable learning. The country's strategic location provides easy access to neighboring countries in Central Asia."
    ]
  },
  
  // Quick Stats
  stats: {
    totalUniversities: "50+",
    nmcApproved: "20 for MBBS",
    indianStudents: "10,000+ (17,000+ including all programs)",
    programDuration: "5.5-6 Years (MBBS), 4 Years (Engineering), 2 Years (MBA)",
    mediumOfInstruction: "English, Russian, Kyrgyz",
    averageFees: "USD 2,500 - 8,000 per year"
  },
  
  // Why Study Here
  whyStudyHere: {
    title: "Why Study in Kyrgyzstan?",
    points: [
      "Top 3 destinations in the world for MBBS abroad - extremely affordable",
      "20 NMC-approved medical universities with WHO, ECFMG, FAIMER recognition",
      "Lowest MBBS fees - Total cost ₹19-30 lakhs for complete 5.5-6 year course",
      "High FMGE passing rate - 25.05% (2024), 20.42% (2022), 17.94% (2023)",
      "No entrance examination required (only NEET qualification for MBBS)",
      "English-medium instruction for entire medical course",
      "Student to teacher ratio of 15:1 ensuring personalized attention",
      "Called 'Switzerland of Central Asia' - stunning natural beauty",
      "Safe country with very low crime rate, warm hospitality",
      "Indian Embassy in Bishkek protecting interests of Indian students",
      "Direct flights from Delhi to Bishkek (3-3.5 hours, ₹15,000-25,000)",
      "Indian mess facility compulsory in all universities",
      "Curriculum similar to India with focus on practical training",
      "Modern infrastructure with advanced facilities and equipment",
      "Clinical training from 3rd year onwards in affiliated hospitals",
      "No donation or capitation fees required",
      "Hostel facilities within university campus with central heating",
      "Climate similar to northern India - easy to adapt",
      "Two intakes per year - February and September",
      "Graduates eligible for USMLE, PLAB, FMGE/NExT exams"
    ]
  },
  
  // Top Universities
  topUniversities: [
    {
      rank: 1,
      name: "Kyrgyz State Medical Academy (KSMA) - I.K. Akhunbaev",
      city: "Bishkek",
      established: "1939",
      nmcApproved: true
    },
    {
      rank: 2,
      name: "International Higher School of Medicine (IHSM)",
      city: "Bishkek",
      established: "2003",
      nmcApproved: true
    },
    {
      rank: 3,
      name: "Osh State University",
      city: "Osh",
      established: "1951",
      nmcApproved: true
    },
    {
      rank: 4,
      name: "Jalalabad State Medical University",
      city: "Jalalabad",
      established: "1993",
      nmcApproved: true
    },
    {
      rank: 5,
      name: "Asian Medical Institute",
      city: "Kant",
      established: "2004",
      nmcApproved: true
    },
    {
      rank: 6,
      name: "International School of Medicine (ISM)",
      city: "Bishkek",
      established: "2003",
      nmcApproved: true
    },
    {
      rank: 7,
      name: "International University of Kyrgyzstan (IUK)",
      city: "Bishkek",
      established: "1993",
      nmcApproved: true
    },
    {
      rank: 8,
      name: "Kyrgyz-Russian Slavic University (KRSU)",
      city: "Bishkek",
      established: "1993",
      nmcApproved: false
    },
    {
      rank: 9,
      name: "Kyrgyz State Technical University (I. Razzakov)",
      city: "Bishkek",
      established: "1954",
      nmcApproved: false
    },
    {
      rank: 10,
      name: "American University of Central Asia (AUCA)",
      city: "Bishkek",
      established: "1997",
      nmcApproved: false
    }
  ],
  
  // Programs Offered
  programs: [
    {
      name: "Medicine (MBBS/MD - General Medicine)",
      duration: "5.5-6 Years (5 years academics + 1 year internship)",
      degree: "Doctor of Medicine (MD) / General Medicine",
      medium: "English"
    },
    {
      name: "Dentistry",
      duration: "5 Years",
      degree: "Bachelor's in Dentistry",
      medium: "English"
    },
    {
      name: "Pharmacy",
      duration: "5 Years",
      degree: "Bachelor's in Pharmacy",
      medium: "English"
    },
    {
      name: "Nursing",
      duration: "4 Years",
      degree: "Bachelor's in Nursing",
      medium: "English"
    },
    {
      name: "Engineering - Civil Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English/Russian"
    },
    {
      name: "Engineering - Mechanical Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English/Russian"
    },
    {
      name: "Engineering - Electrical Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English/Russian"
    },
    {
      name: "Engineering - Computer Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English/Russian"
    },
    {
      name: "Business Administration (MBA)",
      duration: "2 Years",
      degree: "Master's (MBA)",
      medium: "English/Russian"
    },
    {
      name: "Business Administration (Undergraduate)",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Economics",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English/Russian"
    },
    {
      name: "International Relations",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Computer Science & IT",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Social Sciences",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Humanities",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English/Russian"
    }
  ],
  
  // Cost Breakdown
  costs: {
    tuitionFeeRange: "USD 2,500 - 8,000 per year (₹2-6.5 lakhs). MBBS: USD 3,500-7,000/year, MBA: USD 5,000-8,000/year, Engineering: USD 1,000-3,000/year",
    hostelFees: "USD 300-600 per year (₹25,000-50,000) - Included in first year package",
    foodExpenses: "USD 900-1,500 per year (Indian mess compulsory in most universities)",
    otherExpenses: "USD 100-150 per month (₹8,000-12,000) for living expenses",
    totalFirstYear: "₹4-7 lakhs including tuition, hostel, food, visa, insurance",
    totalCourse: "₹19-30 lakhs for complete MBBS (5.5-6 years) - Most affordable globally"
  },
  
  // Admission Requirements
  eligibility: {
    neetRequirement: "NEET qualification mandatory for MBBS admission (valid for 3 years)",
    academicRequirement: "Minimum 50% in 12th standard PCB for general category, 40% for reserved category. For MBA: Bachelor's degree with good grades, 2+ years work experience (some universities). For Engineering: PCM in 12th grade.",
    ageLimit: "17 years minimum (by 31st December of admission year), 25 years maximum",
    documents: [
      "Valid passport with minimum 6 months validity",
      "10th and 12th certificates and mark sheets (notarized)",
      "NEET scorecard (mandatory for MBBS, valid 2024/2025/2026)",
      "Birth certificate (notarized)",
      "Passport-sized photographs (as per university requirements)",
      "Medical fitness certificate / Health examination",
      "HIV negative certificate",
      "COVID-19 vaccination certificate",
      "Migration certificate (if applicable)",
      "Transfer certificate from previous institution",
      "Character certificate from school/college",
      "No objection certificate (NOC) from parents",
      "Bank statements showing financial capability",
      "Admission form (filled online)",
      "Invitation letter from university (for visa)",
      "For MBA: Bachelor's degree, work experience certificate (if required), GMAT/GRE scores (some universities)",
      "For Engineering: PCM certificates, academic transcripts"
    ]
  },
  
  // Intakes
  intakes: {
    main: "September (Fall Intake) - Primary and most popular",
    secondary: "February (Winter/Spring Intake)",
    applicationDeadline: "September intake: June-August, February intake: November-January"
  },
  
  // Visa Information
  visa: {
    type: "Student Visa (Type D)",
    processingTime: "15-20 days",
    validity: "1 year (renewable annually)",
    requirements: [
      "Valid passport (minimum 18 months validity)",
      "Admission letter from NMC-approved university",
      "Invitation letter from university",
      "Visa application form (completed)",
      "Passport-sized photographs (3x4 cm)",
      "NEET scorecard (for medical students)",
      "12th mark sheet and certificate (notarized)",
      "Medical fitness certificate",
      "HIV negative certificate",
      "COVID-19 vaccination certificate",
      "Bank statement (proof of financial capability)",
      "Police clearance certificate",
      "Fee receipt (first year tuition paid)",
      "Migration certificate",
      "Visa fee payment receipt",
      "Travel insurance"
    ]
  },
  
  // Accommodation
  accommodation: {
    types: [
      "University hostels (on-campus) - Most common",
      "University dormitories with shared rooms",
      "Private apartments/flats (outside campus)",
      "Shared accommodation with other students",
      "Paying guest accommodations"
    ],
    facilities: [
      "Hostels located within university campus",
      "Furnished rooms with beds, study tables, wardrobes",
      "Central heating in all hostel rooms (important for winter)",
      "Well-ventilated rooms",
      "24/7 electricity and water supply",
      "Wi-Fi internet connectivity",
      "Indian mess facility (compulsory in most universities)",
      "Common areas and recreation rooms",
      "Laundry facilities",
      "24/7 security",
      "Sports facilities, gyms, pools, cafes",
      "Study rooms and libraries",
      "Medical facilities on campus"
    ],
    averageCost: "USD 300-600 per year (₹25,000-50,000) - Usually included in first year package"
  },
  
  // Living in Country
  livingInfo: {
    climate: "Continental climate with warm summers and cold winters. Temperature ranges from -5°C to 30°C. Climate similar to northern India (Jammu & Kashmir, Himachal Pradesh) making it easy for Indian students to adapt. Winter requires warm clothing.",
    language: "Kyrgyz and Russian (official languages). English widely used in universities. Local language taught to medical students as part of curriculum for patient communication.",
    currency: "Kyrgyzstani Som (KGS) - 1 INR ≈ 1 KGS (approximately)",
    timeZone: "Kyrgyzstan Time (KGT) - UTC+6",
    indianCommunity: "Large Indian community with 10,000+ medical students and 17,000+ total students. Indian Embassy in Bishkek. Indian restaurants and grocery stores available. Strong support network for Indian students.",
    safetyRating: "Very High - One of the most secured countries in terms of crime rate. Safe for international students, especially safe for women. 24/7 security at campuses. Indian Embassy actively protects student interests.",
    foodAvailability: "Indian mess facility compulsory in most universities (USD 900-1,500/year). Indian food easily available. Students can also cook their own food. Local food similar to Indian cuisine. Vegetarian options widely available."
  },
  
  // Work Opportunities
  workOpportunities: {
    partTimeAllowed: false,
    hoursPerWeek: "Part-time work generally not allowed for international students during studies",
    averageWage: "Limited work opportunities during studies. Focus is on academics and clinical training.",
    postStudyWork: "Graduates can pursue careers globally after clearing respective licensing exams. Many graduates work in healthcare sectors of India, Russia, Kazakhstan, Nepal, Nigeria, Gulf countries. Internship can be completed in India after graduation."
  },
  
  // Recognition & Accreditation
  recognitions: [
    "NMC (National Medical Commission, India) - 20 universities approved",
    "WHO (World Health Organization) recognition",
    "ECFMG (Educational Commission for Foreign Medical Graduates) recognition",
    "FAIMER (Foundation for Advancement of International Medical Education and Research)",
    "WDOMS (World Directory of Medical Schools) listing",
    "Ministry of Health, Kyrgyzstan approval",
    "Ministry of Science & Education, Kyrgyzstan approval",
    "UNESCO recognition",
    "International Medical Education Directory (IMED) listing",
    "Degrees valid globally for further education and practice"
  ],
  
  // Job Prospects
  careerProspects: {
    description: "Graduates from Kyrgyzstan medical universities are eligible to appear in major medical licensing examinations worldwide including FMGE/NExT (India), USMLE (USA), PLAB (UK), and other international exams. MBBS graduates from NMC-approved universities work in government medical colleges in India and leading hospitals worldwide. The FMGE passing rate from Kyrgyzstan has been consistently good: 25.05% (2024), 20.42% (2022), 17.94% (2023), which is on par with Russia. Many graduates pursue postgraduate studies (MD/MS) in USA, UK, Canada, Germany, Australia. Strong alumni network working globally in healthcare.",
    examsToClear: [
      "FMGE / NExT (National Exit Test) - mandatory for Indian students to practice in India",
      "USMLE (United States Medical Licensing Examination) - for USA practice",
      "PLAB (Professional and Linguistic Assessments Board) - for UK practice",
      "MCC (Medical Council of Canada) exams - for Canada practice",
      "AMC (Australian Medical Council) exams - for Australia practice",
      "Registration with NMC after clearing FMGE/NExT",
      "License from respective medical council to practice"
    ],
    averageSalary: "₹6-15 lakhs per year for entry-level doctors in India. Higher in Gulf countries (₹15-30 lakhs). USA/UK/Canada offer significantly higher salaries after licensing."
  },
  
  // Key Highlights
  highlights: [
    {
      title: "Most Affordable MBBS Destination",
      description: "Kyrgyzstan is recognized as one of the top 3 destinations worldwide for MBBS abroad, primarily due to extremely low cost. Total MBBS cost is just ₹19-30 lakhs for complete 5.5-6 years including tuition, hostel, food, visa, insurance. This is significantly cheaper than private medical colleges in India (₹70+ lakhs) and other countries."
    },
    {
      title: "NMC & WHO Approved Medical Education",
      description: "20 medical universities in Kyrgyzstan are approved by NMC (National Medical Commission, India). All universities recognized by WHO, ECFMG, FAIMER, and Ministry of Education Kyrgyzstan. Degrees are globally valid and accepted for licensing exams worldwide. Over 5,000 international students enroll annually."
    },
    {
      title: "High FMGE Success Rate",
      description: "Kyrgyzstan medical universities show consistently good FMGE results. Recent data: 25.05% passing (2024), 20.42% (2022), 17.94% (2023). Results are on par with Russia (only 2-5% difference). Many students clear FMGE in their first attempt. Universities provide on-campus MCI/NMC screening exam coaching."
    },
    {
      title: "English Medium Education",
      description: "Complete MBBS course taught in English medium for international students. No language barrier throughout the 5.5-6 year program. Local language (Kyrgyz/Russian) taught as additional subject for patient communication during clinical practice. English-speaking faculty with good accent for easy understanding."
    },
    {
      title: "Practical Clinical Training Focus",
      description: "Curriculum similar to India with heavy focus on practical and clinical training. Clinical rotations start from 3rd year onwards. Students practice in affiliated hospitals even in their free time. Modern infrastructure with highly developed equipment including anatomical tables. Technically equipped labs for hands-on learning."
    },
    {
      title: "Indian Student Friendly Environment",
      description: "Over 10,000 Indian students studying MBBS in Kyrgyzstan. Indian Embassy in Bishkek actively protects student interests. Indian mess facility compulsory in all universities providing authentic Indian food. Many Indian professors guide students. Strong Indian student community and support network. Climate similar to northern India."
    },
    {
      title: "No Entrance Exam & Easy Admission",
      description: "No entrance examination required for admission (only NEET qualification mandatory for MBBS). Simple, straightforward admission process. Direct admission based on 12th marks and NEET score. No donation or capitation fees. Student to teacher ratio of 15:1 ensuring personalized attention and quality education."
    },
    {
      title: "Strategic Location & Natural Beauty",
      description: "Called 'Switzerland of Central Asia' due to stunning mountain landscapes. Features Tian Shan mountains, beautiful Lake Issyk-Kul, and pristine valleys. Direct flights from Delhi to Bishkek (3-3.5 hours). Strategic location provides easy access to Kazakhstan, Uzbekistan, Tajikistan, China. Safe country with warm, hospitable people. Perfect for adventure and outdoor activities."
    }
  ],
  
  // Advantages
  advantages: [
    "Top 3 destination in the world for MBBS abroad - globally recognized",
    "Most affordable medical education - ₹19-30 lakhs total cost",
    "20 NMC-approved medical universities",
    "High FMGE passing rate (25.05% in 2024)",
    "No entrance examination required (only NEET qualification)",
    "English-medium instruction throughout the course",
    "Student to teacher ratio 15:1 - personalized attention",
    "Called 'Switzerland of Central Asia' - stunning natural beauty",
    "Safe country with very low crime rate",
    "Indian Embassy in Bishkek for student protection",
    "Over 10,000 Indian students studying",
    "Indian mess facility compulsory - authentic Indian food",
    "Curriculum similar to India - easy to adapt",
    "Focus on practical and clinical training",
    "Clinical rotations from 3rd year onwards",
    "Modern infrastructure and advanced equipment",
    "Hostel within campus with central heating",
    "Direct flights from Delhi (3-3.5 hours)",
    "Climate similar to northern India",
    "Two intakes per year (September and February)",
    "No donation or capitation fees",
    "WHO, ECFMG, FAIMER recognized degrees",
    "Graduates eligible for USMLE, PLAB, FMGE",
    "On-campus MCI/NMC screening test coaching",
    "Many Indian professors for guidance",
    "Affordable living cost (USD 100-150/month)",
    "Warm, hospitable local people",
    "Multilingual environment (English, Russian, Kyrgyz)",
    "Easy visa process (15-20 days)",
    "Internship can be done in India"
  ],
  
  // Medical Licensing
  medicalLicensing: {
    india: "Graduates from NMC-approved Kyrgyzstan medical universities must pass NMC Screening Test (formerly FMGE) or NEXT (National Exit Test) to practice in India. Kyrgyzstan has excellent FMGE results: 25.05% (2024), 20.42% (2022), 17.94% (2023). Many graduates working in government medical colleges and leading hospitals in India. Universities provide on-campus coaching for NMC screening test.",
    usa: "Graduates eligible to appear for USMLE (United States Medical Licensing Examination). Degrees recognized by ECFMG. Many Kyrgyzstan medical graduates successfully practice in USA after clearing USMLE. Universities prepare students for international licensing exams throughout the course.",
    uk: "Graduates must pass PLAB (Professional and Linguistic Assessments Board) test to practice in UK. Kyrgyzstan medical degrees recognized internationally. Graduates eligible for UK medical licensing after passing required examinations.",
    other: "Degrees recognized globally in Canada, Australia, Gulf countries, Europe, and other nations. Graduates can apply for medical licensing in any country after meeting respective requirements. Alumni successfully practicing worldwide. Postgraduate studies (MD/MS) possible in USA, UK, Canada, Germany, Australia. Medical degree valid globally with WHO and ECFMG recognition."
  }
},  
china:{
  id: "china",
  name: "China",
  slug: "china",
  flag: "https://flagcdn.com/w320/cn.png",
  heroImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2000",
  galleryImages: [
    "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=2000", // Beijing cityscape
    "https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?q=80&w=2000", // University campus
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000", // Students studying
    "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?q=80&w=2000", // Shanghai skyline
    "https://images.unsplash.com/photo-1516490981167-dc990a242afe?q=80&w=2000", // Chinese architecture
    "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=2000"  // Modern facilities
  ],
  
  // Overview Section
  overview: {
    title: "Study in China - World-Class Education for Global Students",
    description: "China is a country in East Asia, the world's most populous country with a population of around 1.428 billion. Covering approximately 9,600,000 square kilometers, it is the world's third or fourth largest country by area. China has been the world's second-largest economy by nominal GDP, and since 2014, the largest economy in the world by PPP. China is also the world's largest exporter and second-largest importer of goods.",
    detailedDescription: [
      "China is a country in East Asia. It is the world's most populous country, with a population of around 1.428 billion. Covering approximately 9,600,000 square kilometers, it is the world's third or fourth largest country by area. China has been the world's second-largest economy by nominal GDP, and since 2014, the largest economy in the world by PPP. China is also the world's largest exporter and second-largest importer of goods.",
      "China offers world-class education, affordable tuition fees, modern campuses, advanced research facilities, and globally recognized degrees. It is especially popular for Medical & Health Sciences, Engineering & Technology, Business, Economics & Management, Computer Science & AI, International Relations, and Social Sciences & Humanities programs.",
      "China has emerged as one of the top study destinations for international students, with nearly 500,000 foreign students currently studying in the country. Chinese universities are internationally recognized and ranked among the world's best institutions, particularly excelling in science, technology, engineering, medicine, and information technology.",
      "The Chinese government has made significant investments in higher education infrastructure and research, making Chinese universities highly competitive globally. Many universities offer English-taught programs across various disciplines, eliminating language barriers for international students.",
      "China is a full member of the Washington Accord since 2016, meaning engineering degrees accredited by China Engineering Education Accreditation Association (CEEAA) are recognized internationally. This ensures that degrees from Chinese universities meet global standards and are accepted worldwide.",
      "Living in China provides international students with unparalleled cultural experiences, networking opportunities with professionals from around the world, and exposure to one of the world's fastest-growing economies. The country combines rich historical heritage with cutting-edge modern development."
    ]
  },
  
  // Quick Stats
  stats: {
    totalUniversities: "3,500+",
    nmcApproved: "45 for MBBS",
    indianStudents: "23,000+",
    programDuration: "4 Years (Bachelor's), 2-3 Years (Master's), 6 Years (MBBS)",
    mediumOfInstruction: "English & Chinese",
    averageFees: "USD 4,200 - 9,000 per year"
  },
  
  // Why Study Here
  whyStudyHere: {
    title: "Why Study in China?",
    points: [
      "World's second-largest economy with rapidly growing industries and career opportunities",
      "Affordable education with tuition fees ranging from USD 4,200 to 9,000 per year for most programs",
      "Over 3,500 universities offering diverse programs in English and Chinese",
      "Modern campuses with state-of-the-art facilities and advanced research infrastructure",
      "Globally recognized degrees approved by WHO, NMC, Washington Accord, and other international bodies",
      "No entrance examination required for most programs - admission based on academic performance",
      "Chinese Government Scholarship (CSC), Provincial scholarships, and University scholarships available",
      "Large international student community with 500,000 students from around the world",
      "Opportunity to learn Mandarin Chinese - spoken by over 1 billion people globally",
      "Safe and welcoming environment for international students with low crime rates",
      "Excellent public transportation and modern infrastructure in major cities",
      "Rich cultural heritage combined with cutting-edge modern development",
      "Growing global influence in business, technology, and international relations",
      "Networking opportunities with students and professionals from 50+ countries",
      "Affordable cost of living compared to Western countries",
      "Strategic location in Asia with easy travel to neighboring countries",
      "Industry-oriented practical training and internship opportunities",
      "Strong focus on research and innovation with significant government funding",
      "Graduates can work in China or return home with internationally recognized qualifications",
      "English-taught programs available at Bachelor's, Master's, and PhD levels"
    ]
  },
  
  // Top Universities
  topUniversities: [
    {
      rank: 1,
      name: "Tsinghua University",
      city: "Beijing",
      established: "1911",
      nmcApproved: false
    },
    {
      rank: 2,
      name: "Peking University",
      city: "Beijing",
      established: "1898",
      nmcApproved: false
    },
    {
      rank: 3,
      name: "Fudan University",
      city: "Shanghai",
      established: "1905",
      nmcApproved: true
    },
    {
      rank: 4,
      name: "Shanghai Jiao Tong University",
      city: "Shanghai",
      established: "1896",
      nmcApproved: false
    },
    {
      rank: 5,
      name: "Zhejiang University",
      city: "Hangzhou",
      established: "1897",
      nmcApproved: true
    },
    {
      rank: 6,
      name: "University of Science and Technology of China",
      city: "Hefei",
      established: "1958",
      nmcApproved: false
    },
    {
      rank: 7,
      name: "Nanjing University",
      city: "Nanjing",
      established: "1902",
      nmcApproved: false
    },
    {
      rank: 8,
      name: "Wuhan University",
      city: "Wuhan",
      established: "1893",
      nmcApproved: false
    },
    {
      rank: 9,
      name: "Tongji University",
      city: "Shanghai",
      established: "1907",
      nmcApproved: true
    },
    {
      rank: 10,
      name: "Xi'an Jiaotong University",
      city: "Xi'an",
      established: "1896",
      nmcApproved: false
    }
  ],
  
  // Programs Offered
  programs: [
    {
      name: "Medical & Health Sciences (MBBS)",
      duration: "6 Years (5+1 Internship)",
      degree: "Bachelor of Medicine, Bachelor of Surgery",
      medium: "English"
    },
    {
      name: "Clinical Medicine",
      duration: "6 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Engineering & Technology - Mechanical Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Chinese"
    },
    {
      name: "Engineering & Technology - Electrical Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Chinese"
    },
    {
      name: "Engineering & Technology - Civil Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Chinese"
    },
    {
      name: "Engineering & Technology - Chemical Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Chinese"
    },
    {
      name: "Computer Science & AI",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Chinese"
    },
    {
      name: "Computer Science & Technology",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Chinese"
    },
    {
      name: "Data Science & Big Data Technology",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Chinese"
    },
    {
      name: "Business, Economics & Management - International Business",
      duration: "4 Years (Bachelor's), 2-3 Years (Master's)",
      degree: "Bachelor's / Master's",
      medium: "English"
    },
    {
      name: "Business Administration (MBA)",
      duration: "2 Years",
      degree: "Master's",
      medium: "English"
    },
    {
      name: "International Economics and Trade",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Chinese"
    },
    {
      name: "Finance & Banking",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Chinese"
    },
    {
      name: "Marketing",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Chinese"
    },
    {
      name: "Human Resources Management",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Chinese"
    },
    {
      name: "International Relations",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "International Politics",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Social Sciences & Humanities - Psychology",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Chinese"
    },
    {
      name: "Social Sciences & Humanities - Sociology",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Chinese"
    },
    {
      name: "Chinese Language Programs",
      duration: "1-4 Years",
      degree: "Certificate / Bachelor's",
      medium: "Chinese"
    },
    {
      name: "Architecture",
      duration: "5 Years",
      degree: "Bachelor's",
      medium: "English / Chinese"
    },
    {
      name: "Biotechnology",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Chinese"
    },
    {
      name: "Environmental Science",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Chinese"
    },
    {
      name: "Law (LLM)",
      duration: "2-3 Years",
      degree: "Master's",
      medium: "English"
    }
  ],
  
  // Cost Breakdown
  costs: {
    tuitionFeeRange: "USD 4,200 - 9,000 per year (Bachelor's), USD 5,000 - 10,000 (Master's)",
    hostelFees: "USD 800 - 1,500 per year",
    foodExpenses: "USD 1,200 - 2,400 per year",
    otherExpenses: "USD 800 - 1,500 per year",
    totalFirstYear: "USD 7,000 - 14,400",
    totalCourse: "USD 28,000 - 57,600 (4 years)"
  },
  
  // Admission Requirements
  eligibility: {
    neetRequirement: "NEET qualification required for MBBS only",
    academicRequirement: "Completed 12th with minimum 50% marks (PCMB for MBBS, PCM for Engineering). Some top universities require 60-70% marks.",
    ageLimit: "17-25 years for MBBS, 16-30 years for other programs",
    documents: [
      "Valid passport with minimum 18 months validity",
      "Academic transcripts (10th and 12th grade certificates)",
      "NEET scorecard (for MBBS applicants)",
      "English proficiency proof (IELTS/TOEFL for some universities) or pass university entrance test",
      "Passport-sized photographs",
      "Physical examination certificate / Health report",
      "HIV test report (for MBBS)",
      "No criminal record certificate",
      "Birth certificate (notarized)",
      "Application form (filled online)",
      "Motivation letter / Statement of Purpose",
      "Recommendation letters (for postgraduate programs)",
      "Financial proof showing ability to cover expenses"
    ]
  },
  
  // Intakes
  intakes: {
    main: "September (Fall Intake)",
    secondary: "March (Spring Intake - Limited universities)",
    applicationDeadline: "September Intake: January - June, March Intake: September - December"
  },
  
  // Visa Information
  visa: {
    type: "X1 Visa (long-term study) or X2 Visa (short-term study)",
    processingTime: "4-8 weeks",
    validity: "Duration of study program",
    requirements: [
      "Valid passport with at least 6 months validity",
      "Admission letter (JW201 or JW202 form) from Chinese university",
      "Visa application form (Form V.2013)",
      "Passport-sized photograph",
      "Physical examination record issued by Chinese embassy-designated hospital",
      "No criminal record certificate",
      "Proof of financial support",
      "Accommodation proof in China",
      "Study plan",
      "Highest degree certificate and transcript",
      "NEET scorecard (for MBBS students)",
      "Travel insurance (recommended)"
    ]
  },
  
  // Accommodation
  accommodation: {
    types: [
      "On-campus dormitories (most common for international students)",
      "University-managed apartments",
      "Off-campus private apartments",
      "Shared accommodation with other students",
      "Homestay (limited availability)"
    ],
    facilities: [
      "Furnished rooms with beds, desks, and wardrobes",
      "Air conditioning and heating systems",
      "Wi-Fi internet connectivity",
      "Common kitchens or canteens",
      "Laundry facilities",
      "24/7 security with access control",
      "Study rooms and common areas",
      "Recreational facilities",
      "Housekeeping services (in some dormitories)",
      "Bicycle parking"
    ],
    averageCost: "USD 800 - 1,500 per year (on-campus), USD 2,000 - 4,000 (off-campus)"
  },
  
  // Living in Country
  livingInfo: {
    climate: "Varied - North (cold winters, hot summers), South (subtropical/tropical). Beijing: -10°C to 35°C, Shanghai: 0°C to 35°C",
    language: "Mandarin Chinese (official), English widely spoken in universities and major cities",
    currency: "Chinese Yuan Renminbi (CNY/RMB)",
    timeZone: "China Standard Time (CST) - UTC+8",
    indianCommunity: "Large and growing Indian student community with 23,000+ students. Indian restaurants and grocery stores available in major cities.",
    safetyRating: "Very High - China has low crime rates and is considered very safe for international students",
    foodAvailability: "Indian, vegetarian, and halal food widely available in university canteens and nearby restaurants. Major cities have numerous Indian restaurants."
  },
  
  // Work Opportunities
  workOpportunities: {
    partTimeAllowed: true,
    hoursPerWeek: "Students can work part-time on campus during study (limited hours). Off-campus work requires special permission.",
    averageWage: "CNY 50-100 per hour for part-time work",
    postStudyWork: "Graduates can apply for work permits and residence permits to work in China. Growing demand for skilled professionals in technology, engineering, business, and education sectors."
  },
  
  // Recognition & Accreditation
  recognitions: [
    "Universities regulated by China's Ministry of Education (MOE)",
    "Member of Washington Accord (engineering degrees recognized internationally since 2016)",
    "45 medical universities approved by NMC for MBBS programs",
    "Degrees recognized by WHO, FAIMER, ECFMG, and other international bodies",
    "Many universities ranked in QS World University Rankings and Times Higher Education",
    "Engineering degrees accredited by China Engineering Education Accreditation Association (CEEAA)",
    "Business schools with AACSB and EQUIS international accreditations",
    "Member of Association of Southeast Asian Nations (ASEAN) University Network",
    "Graduates eligible to take licensing exams in USA (USMLE), UK (PLAB), India (NMC), Australia (AMC), etc.",
    "Part of Belt and Road Initiative promoting educational cooperation globally"
  ],
  
  // Job Prospects
  careerProspects: {
    description: "China offers excellent career opportunities for graduates in various fields including technology, engineering, business, healthcare, and education. The country's rapidly growing economy creates demand for skilled professionals. International students can work in China after graduation with proper work permits. Many multinational companies operate in China, providing opportunities for global careers. Graduates also return to their home countries with internationally recognized degrees and valuable experience.",
    examsToClear: [
      "NMC Screening Test / NEXT (for MBBS graduates to practice in India)",
      "USMLE (for medical practice in USA)",
      "PLAB / UKMLA (for medical practice in UK)",
      "HSK Level 4 (Chinese language proficiency - required for MBBS degree certificate)",
      "Professional certification exams (field-specific)",
      "Engineering licensing exams (varies by country and specialization)"
    ],
    averageSalary: "CNY 80,000 - 200,000 per year (USD 11,000 - 28,000) for entry-level positions. Varies significantly by field, location, and experience."
  },
  
  // Key Highlights
  highlights: [
    {
      title: "Admission Process",
      description: "The admission process is straightforward: 1) Submit application with required documents online, 2) Receive invitation letter from university, 3) Apply for student visa (X1/X2), 4) Complete medical examination, 5) Arrange accommodation, 6) Travel to China and begin studies. Most programs do not require entrance examinations."
    },
    {
      title: "Academic Structure",
      description: "Bachelor's programs typically last 4 years (6 years for MBBS). Master's programs are 2-3 years, and doctoral programs are 3-4 years. The academic year begins in September with some universities offering March intake. MBBS includes 5 years of classroom learning plus 1 year of clinical internship."
    },
    {
      title: "English-Taught Programs",
      description: "Over 200 universities offer English-taught programs at Bachelor's, Master's, and PhD levels in fields including Medicine, Engineering, Business, Computer Science, and International Relations. This eliminates language barriers for international students while providing opportunity to learn Chinese."
    },
    {
      title: "Scholarship Opportunities",
      description: "Chinese Government Scholarship (CSC) covers full tuition, accommodation, and monthly stipend. Provincial and university scholarships also available. Scholarships can cover 30-100% of costs. Merit-based scholarships awarded to students with strong academic records and NEET scores."
    },
    {
      title: "Cultural Experience",
      description: "Studying in China offers immersion in one of the world's oldest civilizations. Students experience rich cultural heritage, learn Kung Fu, practice table tennis, visit UNESCO World Heritage sites, and enjoy diverse Chinese cuisine from hotpot to dumplings and Peking duck."
    },
    {
      title: "Modern Infrastructure",
      description: "Chinese universities feature world-class infrastructure including state-of-the-art laboratories, extensive libraries, well-equipped hospitals for medical training, modern dormitories, expansive campuses, and advanced research facilities surpassing many Western institutions."
    },
    {
      title: "International Recognition",
      description: "Degrees from Chinese universities are recognized globally. Medical graduates can practice worldwide after clearing licensing exams. Engineering degrees are recognized through Washington Accord. Business schools have international accreditations. Universities consistently rank in global top 500."
    },
    {
      title: "Cost-Effective Education",
      description: "Total cost of studying in China (₹20-30 lakhs for complete degree) is significantly lower than India's private medical colleges (₹70+ lakhs) and much more affordable than USA, UK, Australia, or Canada while offering comparable or superior quality education and infrastructure."
    }
  ],
  
  // Advantages
  advantages: [
    "World's second-largest economy offering vast career opportunities",
    "Affordable tuition fees (USD 4,200 - 9,000 per year) compared to Western countries",
    "Over 3,500 universities with diverse programs in all fields",
    "45 NMC-approved medical universities for MBBS in English medium",
    "Modern infrastructure and facilities surpassing many developed countries",
    "Globally recognized degrees approved by WHO, NMC, Washington Accord, and international bodies",
    "No entrance examination for most programs - admission based on academic merit",
    "High visa approval rate for genuine students with proper documentation",
    "Large international student community (500,000 students from 50+ countries)",
    "Safe environment with very low crime rates",
    "Affordable cost of living with excellent public transportation",
    "Chinese Government Scholarships covering full tuition and living expenses",
    "Opportunity to learn Mandarin Chinese - world's most spoken language",
    "Strategic location in Asia for travel and networking",
    "Industry-oriented practical training with modern laboratories and equipment",
    "Strong focus on research and innovation with government funding",
    "English-taught programs eliminating language barriers",
    "Growing Indian student community providing cultural support",
    "Rich cultural heritage and diverse experiences",
    "Rapidly developing technology and business sectors",
    "Part-time work opportunities on campus",
    "Internship opportunities in affiliated hospitals and companies",
    "Post-study work opportunities in China's growing economy",
    "Friendly visa policies for technical talents",
    "Member of Washington Accord ensuring international recognition",
    "Problem-Based Learning (PBL) methodology in medical programs",
    "Extensive hospital networks for clinical training",
    "Modern teaching methods with experienced international faculty",
    "Cultural exchange programs and international networking",
    "Beautiful cities combining tradition with modernity"
  ],
  
  // Medical Licensing
  medicalLicensing: {
    india: "Medical graduates from NMC-approved Chinese universities must pass the NMC Screening Test (formerly FMGE) or NEXT (National Exit Test) to practice medicine in India. HSK-4 Chinese language proficiency certificate is mandatory to receive the MBBS degree from China.",
    usa: "Graduates can apply for USMLE (United States Medical Licensing Examination). Chinese medical degrees are recognized by ECFMG. Many Chinese universities use Problem-Based Learning (PBL) methodology which helps students prepare for USMLE.",
    uk: "Graduates must pass PLAB (Professional and Linguistic Assessments Board) test or UKMLA (UK Medical Licensing Assessment) to practice in the UK. Chinese medical degrees are recognized by GMC with appropriate licensing examinations.",
    other: "Chinese medical degrees are recognized by medical councils in Pakistan (PMDC), Bangladesh (BMDC), Sri Lanka (SLMC), Indonesia (INAMC), and many other countries. Graduates can also apply for licensing in Australia (AMC), Canada (MCC), and other countries after meeting respective requirements. Chinese medical education meets WHO standards and graduates are eligible for international licensing examinations."
  }
},
philippines:{
  id: "philippines",
  name: "Philippines",
  slug: "philippines",
  flag: "https://flagcdn.com/w320/ph.png",
  heroImage: "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=2000",
  galleryImages: [
    "https://images.unsplash.com/photo-1551224528-c1fd29c79fdb?q=80&w=2000", // Manila cityscape
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000", // University campus
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000", // Students studying
    "https://images.unsplash.com/photo-1566127992631-137a642a90f4?q=80&w=2000", // Philippines beaches
    "https://images.unsplash.com/photo-1469123904512-3bd75e67ebf5?q=80&w=2000", // Modern buildings
    "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=2000"  // Medical facilities
  ],
  
  // Overview Section
  overview: {
    title: "Study in Philippines - Your Gateway to Quality Education in Southeast Asia",
    description: "The Philippines, officially known as the Republic of Philippines, is a beautiful country in Southeast Asia with around 109 million population covering an area of 300,000 km². With over 7,000 islands, the Philippines is a nature-filled country with beautiful beaches and historical landmarks, offering a unique blend of culture, quality education, and affordability.",
    detailedDescription: [
      "The Philippines, officially known as the Republic of Philippines, is a beautiful country in Southeast Asia with around 109 million population covering an area of 300,000 km². With over 7,000 islands, the Philippines is a nature-filled country with beautiful beaches and historical landmarks.",
      "The Philippines is the third-largest English-speaking country in the world, making it an ideal destination for international students. English is one of the official languages, and most programs are conducted in English, easing communication for international students.",
      "The Philippines' strategic location in Southeast Asia, close to global economic hubs like Japan, China, and Singapore, enhances its appeal as a study destination. In 2024, the Philippines attracted 22,247 international students, a 52.7% increase from the previous year, indicating its rising popularity.",
      "The education system in the Philippines is among the top 50 in the world and follows the US education style quite closely. Universities follow the American system of education with world-class standards in instruction, particularly excelling in Medicine, Engineering, Business Administration, and Technology.",
      "The Philippines has a literacy rate of more than 95%, indicating that education is of utmost importance for the government. The country offers top-notch quality medical education to all learners with the latest modern techniques and world-class amenities.",
      "With over 22,000 international students studying in the Philippines, the country has become a growing educational hub offering excellent career opportunities with top recruiters such as Accenture, IBM, Jollibee, and Globe Telecom."
    ]
  },
  
  // Quick Stats
  stats: {
    totalUniversities: "240+",
    nmcApproved: "44 for MBBS",
    indianStudents: "8,000+",
    programDuration: "6 Years (MBBS), 4 Years (Engineering), 2 Years (MBA)",
    mediumOfInstruction: "English",
    averageFees: "USD 1,000 - 12,000 per year"
  },
  
  // Why Study Here
  whyStudyHere: {
    title: "Why Study in Philippines?",
    points: [
      "Third-largest English-speaking country in the world - no language barrier",
      "US-based education system preparing students for USMLE and international exams",
      "44 NMC-approved medical universities for MBBS programs",
      "Affordable tuition fees ranging from USD 1,000 to 12,000 per year",
      "High FMGE passing rate among Indian graduates - one of the highest in recent years",
      "No entrance examination required (only NEET qualification needed for MBBS)",
      "Cultural compatibility - Philippines shares cultural similarities with India",
      "Strategic location in Southeast Asia near Japan, China, and Singapore",
      "Beautiful tropical climate and friendly, hospitable people",
      "Cost of living is very affordable (₹10,000-15,000 per month)",
      "Globally recognized degrees approved by WHO, NMC, ECFMG, FAIMER, WFME",
      "English-medium instruction - no IELTS/TOEFL required for most universities",
      "Hands-on clinical training with wide-ranging clinical exposure",
      "Modern infrastructure with state-of-the-art laboratories and equipment",
      "Scholarships available for meritorious international students",
      "Safe country with low crime rate, especially safe for women",
      "Easy travel and visa process for international students",
      "Two intakes per year - August/September and February",
      "Internship opportunities in India allowed for MBBS students",
      "Work permit eligibility after graduation - Alien Employment Permit (AEP)"
    ]
  },
  
  // Top Universities
  topUniversities: [
    {
      rank: 1,
      name: "University of the Philippines (UP Diliman)",
      city: "Quezon City",
      established: "1908",
      nmcApproved: false
    },
    {
      rank: 2,
      name: "Ateneo de Manila University",
      city: "Quezon City",
      established: "1859",
      nmcApproved: false
    },
    {
      rank: 3,
      name: "De La Salle University (DLSU)",
      city: "Manila",
      established: "1911",
      nmcApproved: false
    },
    {
      rank: 4,
      name: "University of Santo Tomas (UST)",
      city: "Manila",
      established: "1611",
      nmcApproved: true
    },
    {
      rank: 5,
      name: "UV Gullas College of Medicine",
      city: "Cebu City",
      established: "1919",
      nmcApproved: true
    },
    {
      rank: 6,
      name: "AMA School of Medicine (AMASOM)",
      city: "Makati",
      established: "2008",
      nmcApproved: true
    },
    {
      rank: 7,
      name: "Davao Medical School Foundation (DMSF)",
      city: "Davao City",
      established: "1976",
      nmcApproved: true
    },
    {
      rank: 8,
      name: "Mapúa University",
      city: "Manila",
      established: "1925",
      nmcApproved: false
    },
    {
      rank: 9,
      name: "Asian Institute of Management (AIM)",
      city: "Makati",
      established: "1968",
      nmcApproved: false
    },
    {
      rank: 10,
      name: "Polytechnic University of the Philippines (PUP)",
      city: "Manila",
      established: "1904",
      nmcApproved: false
    }
  ],
  
  // Programs Offered
  programs: [
    {
      name: "Medicine (MBBS/MD - Doctor of Medicine)",
      duration: "6 Years (BS 1 year + MD 4.5 years + 1 year internship)",
      degree: "Doctor of Medicine (MD)",
      medium: "English"
    },
    {
      name: "Bachelor of Science (BS) - Pre-Med",
      duration: "1-2 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Engineering - Civil Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Engineering - Mechanical Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Engineering - Electrical Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Engineering - Electronics & Communications Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Engineering - Chemical Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Engineering - Computer Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Engineering - Industrial Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Business Administration (MBA)",
      duration: "2 Years (Full-time), 2-3.5 Years (Part-time)",
      degree: "Master's (MBA)",
      medium: "English"
    },
    {
      name: "Executive MBA (EMBA)",
      duration: "1.5-2 Years",
      degree: "Executive Master's",
      medium: "English"
    },
    {
      name: "International MBA",
      duration: "2 Years",
      degree: "Master's",
      medium: "English"
    },
    {
      name: "Online MBA",
      duration: "1-2 Years + 1 year UK Top-Up",
      degree: "Master's (UK MBA)",
      medium: "English"
    },
    {
      name: "Computer Science & IT",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Information Technology",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Nursing",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Business Administration",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Hospitality Management",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Pharmacy",
      duration: "4-5 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Dentistry",
      duration: "6 Years",
      degree: "Doctor of Dental Medicine",
      medium: "English"
    }
  ],
  
  // Cost Breakdown
  costs: {
    tuitionFeeRange: "USD 1,000 - 12,000 per year (₹80,000 - 10 lakhs). MBBS: ₹2.5L - 6.5L/year, MBA: USD 4,000-12,000/year, Engineering: USD 2,000-5,000/year",
    hostelFees: "₱20,000 - 50,000 per semester (USD 350-900)",
    foodExpenses: "₱10,000 - 15,000 per month (USD 175-265)",
    otherExpenses: "₱5,000 - 10,000 per month",
    totalFirstYear: "₹3.5 - 8 lakhs (USD 4,200 - 9,600)",
    totalCourse: "₹15 - 25 lakhs for complete MBBS (6.5 years)"
  },
  
  // Admission Requirements
  eligibility: {
    neetRequirement: "NEET qualification mandatory for MBBS admission",
    academicRequirement: "Minimum 50% in 12th standard (Physics, Chemistry, Biology) from CBSE/ICSE or equivalent. For MBA: Bachelor's degree in any field. For Engineering: PCM in 12th grade.",
    ageLimit: "17 years or more (no upper age limit for most programs)",
    documents: [
      "Valid passport with minimum 6 months validity",
      "Academic transcripts (10th and 12th certificates and mark sheets)",
      "NEET scorecard (mandatory for MBBS)",
      "Birth certificate (notarized)",
      "Passport-sized photographs (as per university requirements)",
      "Medical fitness certificate / Health examination report",
      "HIV negative certificate",
      "COVID-19 vaccination certificate",
      "No criminal record / Police clearance certificate",
      "Application form (filled online)",
      "Transfer certificate from previous institution",
      "Migration certificate (if applicable)",
      "Bank receipt of university 1st year tuition fee (for some universities)",
      "For MBA: Bachelor's degree certificate, resume/CV, recommendation letters, GMAT (for some top programs)",
      "English proficiency (generally not required as Philippines is English-speaking)"
    ]
  },
  
  // Intakes
  intakes: {
    main: "August/September (Fall Intake)",
    secondary: "February/March (Spring Intake)",
    applicationDeadline: "Fall: July-November, Spring: December-February"
  },
  
  // Visa Information
  visa: {
    type: "Student Visa (9(f) Visa)",
    processingTime: "2-4 weeks",
    validity: "Duration of study program",
    requirements: [
      "Valid passport with at least 6 months validity",
      "Admission/Enrollment letter from Philippine university",
      "Visa application form (completed and signed)",
      "Passport-sized photographs (2x2 inches)",
      "Medical fitness certificate",
      "HIV negative certificate",
      "Police clearance certificate / NBI clearance",
      "Proof of financial capacity (bank statements showing sufficient funds)",
      "Academic credentials (certified true copies)",
      "NEET scorecard (for MBBS students)",
      "Birth certificate (authenticated)",
      "Proof of accommodation in Philippines",
      "Visa application fee",
      "Certificate of eligibility from Commission on Higher Education (CHED)"
    ]
  },
  
  // Accommodation
  accommodation: {
    types: [
      "University dormitories (on-campus hostels)",
      "Off-campus apartments",
      "Shared accommodation with other students",
      "Condominiums near university",
      "Boarding houses",
      "Homestay with Filipino families (limited)"
    ],
    facilities: [
      "Furnished rooms with beds, study tables, and wardrobes",
      "Air conditioning (in most accommodations)",
      "Wi-Fi internet connectivity",
      "Common dining areas or cafeterias",
      "Laundry facilities",
      "24/7 security",
      "Study rooms and common areas",
      "Recreational facilities",
      "Proximity to campus",
      "Indian food options in some university canteens"
    ],
    averageCost: "₱20,000 - 50,000 per semester (USD 350-900) for university hostels"
  },
  
  // Living in Country
  livingInfo: {
    climate: "Tropical climate - warm and humid year-round. Temperature ranges from 25°C to 32°C. Rainy season from June to November, dry season from December to May.",
    language: "Filipino and English (official languages). English widely spoken across the country.",
    currency: "Philippine Peso (PHP/₱)",
    timeZone: "Philippine Standard Time (PST) - UTC+8",
    indianCommunity: "Growing Indian student community with 8,000+ students. Indian restaurants and grocery stores available in major cities like Manila, Cebu, and Davao.",
    safetyRating: "Very High - Philippines is one of the safest countries for women and international students. Low crime rate in university areas.",
    foodAvailability: "Indian food available in many restaurants. University canteens serve vegetarian and halal options. Students feel homely atmosphere with diverse food choices."
  },
  
  // Work Opportunities
  workOpportunities: {
    partTimeAllowed: true,
    hoursPerWeek: "Part-time work allowed with Alien Employment Permit (AEP). Students can work during studies with proper authorization.",
    averageWage: "PHP 15,000 - 100,000 per month (₹22,500 - ₹1,50,000) depending on field and experience",
    postStudyWork: "Graduates can apply for Alien Employment Permit (AEP) to work in Philippines. AEP costs approximately USD 160 for first year, USD 60 for subsequent years. Top recruiters include Accenture, Microsoft, Unilever, Nestle, IBM, Tech Mahindra, Citi, BPO companies."
  },
  
  // Recognition & Accreditation
  recognitions: [
    "WHO (World Health Organization) recognition for medical universities",
    "44 medical universities approved by NMC (National Medical Commission, India)",
    "ECFMG (Educational Commission for Foreign Medical Graduates) recognition",
    "FAIMER (Foundation for Advancement of International Medical Education and Research)",
    "WFME (World Federation for Medical Education) recognition",
    "PAASCU (Philippine Accreditation Association of Schools, Colleges and Universities)",
    "CHED (Commission on Higher Education) accreditation",
    "AACSB accreditation for business schools (Asian Institute of Management)",
    "EQUIS accreditation (European Quality Improvement System)",
    "PTC (Philippine Technological Council) recognition for engineering programs",
    "ACBET accreditation for engineering",
    "Engineering degrees valid in USA, UK, Canada, and globally after respective licensing"
  ],
  
  // Job Prospects
  careerProspects: {
    description: "Upon graduation, students can expect excellent career opportunities in Philippines and globally. Top recruiters include Accenture, IBM, Jollibee, Globe Telecom, Microsoft, Unilever, Nestle, Tech Mahindra, and Citi. Philippine degrees are globally recognized enabling graduates to practice worldwide. MBBS graduates from NMC-approved universities can practice in India after clearing NMC screening test/NEXT. Many graduates are working in government medical colleges in India and leading hospitals worldwide. MBA graduates get excellent placement opportunities with competitive salaries.",
    examsToClear: [
      "FMGE / NEXT (National Exit Test) - mandatory for MBBS graduates to practice in India",
      "USMLE (United States Medical Licensing Examination) - for USA practice",
      "PLAB (Professional and Linguistic Assessments Board) - for UK practice",
      "NMAT (National Medical Admission Test) - entrance exam for Philippines medical admission",
      "Professional Engineering Board Exams (for engineering graduates in Philippines)",
      "CPA (Certified Public Accountant) for business graduates"
    ],
    averageSalary: "PHP 300,000 - 1,200,000 per year (₹4.5L - 18L) for entry-level positions. MBA graduates: PHP 600,000 - 2,000,000/year. Engineering: PHP 400,000 - 1,500,000/year."
  },
  
  // Key Highlights
  highlights: [
    {
      title: "American Education System",
      description: "Philippines follows the US pattern of medical education. MBBS is known as MD (Doctor of Medicine) and follows American curriculum. This prepares students excellently for USMLE exam and international medical practice. Problem-based learning methodology is emphasized."
    },
    {
      title: "MBBS Course Structure",
      description: "MBBS program consists of BS (Bachelor of Science - 1 year) + MD (Doctor of Medicine - 4.5 years) + Internship (1 year) = Total 6.5 years. As per NMC notification dated November 18, 2023, the MD duration has been increased to 4.5 years to meet NMC requirements. Two intakes available: August and February/November."
    },
    {
      title: "High FMGE Success Rate",
      description: "Since 2018, Philippines medical universities have shown the highest FMGE passing rates compared to other countries. Many top-ranking FMGE students are from Philippines medical universities. This proves the excellence of medical education in Philippines."
    },
    {
      title: "English Medium Education",
      description: "Philippines is the third-largest English-speaking country globally. All education is in English medium with no language barrier. No IELTS/TOEFL required for admission. Communication with patients and locals is easy in English."
    },
    {
      title: "Clinical Training Excellence",
      description: "Wide-ranging clinical practices with numerous affiliated hospitals under universities. Large patient base providing excellent hands-on experience. Students get early clinical exposure and practical training. Medical universities have tie-ups with hospitals in USA for clinical rotations during internship."
    },
    {
      title: "Affordable Education",
      description: "Total MBBS cost ranges from ₹15-25 lakhs for complete 6.5 years including living expenses. This is significantly cheaper than private medical colleges in India (₹70+ lakhs) and much more affordable than USA, UK, or Australia. No donation or capitation fees required."
    },
    {
      title: "Cultural Compatibility",
      description: "Philippines shares cultural similarities with India making students feel at home. Warm, tropical climate similar to India. Friendly and hospitable people. Students feel homely atmosphere in hostels. Indian food available in university mess facilities and restaurants."
    },
    {
      title: "Global Career Opportunities",
      description: "Degrees recognized worldwide enabling practice in USA, UK, Canada, Australia, India, and other countries after clearing respective licensing exams. Graduates successfully placed in Accenture, Microsoft, IBM, leading hospitals worldwide. Alumni working in government medical colleges in India."
    }
  ],
  
  // Advantages
  advantages: [
    "Third-largest English-speaking country in the world",
    "US-based medical education system preparing for USMLE",
    "44 NMC-approved medical universities",
    "Highest FMGE passing rate among foreign medical graduates",
    "Affordable tuition fees - ₹15-25 lakhs for complete MBBS",
    "No entrance examination (only NEET qualification required)",
    "No IELTS/TOEFL requirement for admission",
    "English-medium instruction throughout",
    "Cultural compatibility with India",
    "Warm tropical climate and friendly people",
    "Strategic location in Southeast Asia",
    "Modern infrastructure with state-of-the-art facilities",
    "Extensive clinical training with large patient base",
    "Hands-on practical experience from early years",
    "Clinical rotations in USA hospitals for some programs",
    "Two intakes per year (August and February)",
    "Internship can be completed in India",
    "Safe country with low crime rate",
    "Affordable cost of living (₹10,000-15,000/month)",
    "No donation or hidden charges",
    "Homely atmosphere in hostels",
    "Indian food available",
    "Teacher-student ratio of 10:1",
    "95%+ literacy rate showing education importance",
    "WHO, NMC, ECFMG, FAIMER, WFME recognition",
    "Work opportunities available after graduation",
    "Alumni working in top hospitals worldwide",
    "Beautiful islands with 7,000+ islands for weekend travel",
    "Rich culture and historical landmarks",
    "Excellent job prospects with top MNCs"
  ],
  
  // Medical Licensing
  medicalLicensing: {
    india: "Graduates from NMC-approved Philippine medical universities must pass the NMC Screening Test (formerly FMGE) or NEXT (National Exit Test) to practice medicine in India. Philippines has the highest FMGE success rate. Many graduates working in government medical colleges and leading hospitals in India.",
    usa: "Philippine medical education follows US curriculum making graduates well-prepared for USMLE. Degrees recognized by ECFMG. Graduates can apply for USMLE and practice in USA. Many universities offer clinical rotations in USA hospitals. Philippines medical graduates have 100% USMLE qualification success rate in many universities.",
    uk: "Graduates must pass PLAB (Professional and Linguistic Assessments Board) test to practice in UK. Philippine medical degrees recognized by GMC (General Medical Council, UK). Graduates eligible for UK medical licensing after passing required exams.",
    other: "Degrees recognized globally in Canada, Australia, Middle East, and other countries. Graduates can apply for medical licensing in any country after meeting respective requirements. Philippine medical education meets international standards. Alumni successfully practicing in USA, UK, Canada, Australia, Middle East, and worldwide."
  }
},
'kazakhstan': {
  id: "kazakhstan",
  name: "Kazakhstan",
  slug: "kazakhstan",
  flag: "https://flagcdn.com/w320/kz.png",
  heroImage: "https://images.unsplash.com/photo-1708610542831-eb8762e56ad2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGthemFraHN0YW4lMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww",
  galleryImages: [
    "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=2000", // Almaty cityscape
    "https://images.unsplash.com/photo-1583470790878-4a17f200a8b3?q=80&w=2000", // University campus
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000", // Students studying
    "https://images.unsplash.com/photo-1565022728-6765b9f939d3?q=80&w=2000", // Astana architecture
    "https://images.unsplash.com/photo-1583470790878-4a17f200a8b3?q=80&w=2000", // Modern buildings
    "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=2000"  // Medical facilities
  ],
  
  // Overview Section
  overview: {
    title: "Study in Kazakhstan - Bridge Between East and West",
    description: "Kazakhstan—a vast nation in the heart of Central Asia—is quickly emerging as a preferred destination for international students. With its blend of modern educational infrastructure, cultural richness, and affordability, Kazakhstan offers more than just a degree—it offers a holistic, global learning experience.",
    detailedDescription: [
      "Kazakhstan—a vast nation in the heart of Central Asia—is quickly emerging as a preferred destination for international students. With its blend of modern educational infrastructure, cultural richness, and affordability, Kazakhstan offers more than just a degree—it offers a holistic, global learning experience.",
      "Kazakhstan is the world's largest landlocked country and the ninth largest overall, located in Central Asia. It has a rich history as part of the Silk Road and houses vast natural resources, including significant oil and gas reserves. The country is known for its diverse culture, influenced by a mix of ethnic groups.",
      "Kazakhstan is the leading economy in Central Asia and offers a unique bridge between European and Asian educational standards. The country has made significant investments in higher education, with modern infrastructure and internationally recognized degrees.",
      "Currently, more than 50,000 international students enroll in Kazakhstan's world-ranked universities each year. The country is welcoming to international citizens, both students and civilians. Only around 66% of residents are native Kazakhs, making the country ethnically diverse and multicultural.",
      "Cities like Almaty and Astana are safe, modern, and provide a multicultural environment where Kazakh, Russian, and English are widely spoken. Kazakhstan's strategic location makes it a key part of the 'New Silk Road,' offering unique opportunities in logistics, energy, and international relations.",
      "Universities in Kazakhstan increasingly appear in international rankings, reflecting their commitment to quality education and links with the workforce. The country offers education in 3 languages: Kazakh, Russian, and English, with more than 150 programs available."
    ]
  },
  
  // Quick Stats
  stats: {
    totalUniversities: "100+",
    nmcApproved: "12-13 for MBBS",
    indianStudents: "5,000+",
    programDuration: "4 Years (Bachelor's), 2 Years (Master's), 5-6 Years (MBBS)",
    mediumOfInstruction: "English, Russian, Kazakh",
    averageFees: "USD 1,000 - 7,000 per year"
  },
  
  // Why Study Here
  whyStudyHere: {
    title: "Why Study in Kazakhstan?",
    points: [
      "Academic Excellence: Home to top universities like Al-Farabi Kazakh National University and Asfendiyarov Kazakh National Medical University",
      "Affordable tuition and living costs - significantly lower than Western countries with programs ranging from USD 1,000 to 7,000 per year",
      "Degrees are increasingly recognized globally with universities highly ranked in Asia",
      "Modern hub cities - Almaty and Astana are safe, modern, and multicultural",
      "Strategic location as part of the 'New Silk Road' offering opportunities in logistics, energy, and international relations",
      "12-13 NMC-approved medical universities for MBBS programs",
      "Bilingual advantage - programs primarily in English, with exposure to Kazakh and Russian",
      "Cultural diversity - unique position between East and West makes it a cultural melting pot",
      "Kazakhstan Government Scholarship offering approximately 550 scholarships annually",
      "No entrance examination required for most programs - simple admission procedure",
      "High acceptance rate and straightforward visa process",
      "Safe environment with low crime rate for international students",
      "Cost of living is very affordable with rental housing accessible",
      "English-medium courses available in top universities",
      "World-class infrastructure with modern laboratories and research facilities",
      "Strong focus on STEM education and healthcare",
      "Growing technology hub with Astana Hub for tech startups",
      "Opportunity to learn new languages (Kazakh, Russian) improving global communication skills",
      "Student exchange programs and international conferences",
      "Indian food availability in mess facilities at universities",
      "Work opportunities allowed - students can combine work and study"
    ]
  },
  
  // Top Universities
  topUniversities: [
    {
      rank: 1,
      name: "Al-Farabi Kazakh National University (KazNU)",
      city: "Almaty",
      established: "1934",
      nmcApproved: true
    },
    {
      rank: 2,
      name: "Nazarbayev University",
      city: "Astana (Nur-Sultan)",
      established: "2010",
      nmcApproved: false
    },
    {
      rank: 3,
      name: "Kazakh National Medical University (Asfendiyarov)",
      city: "Almaty",
      established: "1930",
      nmcApproved: true
    },
    {
      rank: 4,
      name: "Astana Medical University",
      city: "Astana",
      established: "1997",
      nmcApproved: true
    },
    {
      rank: 5,
      name: "Satbayev University (Kazakh National Technical University)",
      city: "Almaty",
      established: "1934",
      nmcApproved: false
    },
    {
      rank: 6,
      name: "L.N. Gumilyov Eurasian National University (ENU)",
      city: "Astana",
      established: "1996",
      nmcApproved: false
    },
    {
      rank: 7,
      name: "Semey State Medical University",
      city: "Semey",
      established: "1952",
      nmcApproved: true
    },
    {
      rank: 8,
      name: "Karaganda State Medical University",
      city: "Karaganda",
      established: "1950",
      nmcApproved: true
    },
    {
      rank: 9,
      name: "West Kazakhstan Marat Ospanov State Medical University",
      city: "Aktobe",
      established: "1957",
      nmcApproved: true
    },
    {
      rank: 10,
      name: "Kazakh-British Technical University (KBTU)",
      city: "Almaty",
      established: "2000",
      nmcApproved: false
    }
  ],
  
  // Programs Offered
  programs: [
    {
      name: "Natural Sciences & Medicine - MBBS (General Medicine)",
      duration: "5-6 Years (5 years + 1 year internship)",
      degree: "Bachelor of Medicine, Bachelor of Surgery",
      medium: "English / Russian"
    },
    {
      name: "Natural Sciences & Medicine - Dentistry (Stomatology)",
      duration: "5 Years",
      degree: "Bachelor's",
      medium: "English / Russian"
    },
    {
      name: "Natural Sciences & Medicine - Pharmacy",
      duration: "5 Years",
      degree: "Bachelor's",
      medium: "English / Russian"
    },
    {
      name: "Natural Sciences & Medicine - Public Health Management",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Russian"
    },
    {
      name: "Information Technology & Engineering - Petroleum Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Information Technology & Engineering - Mining Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Information Technology & Engineering - Chemical Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Information Technology & Engineering - IT & Computer Science",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Information Technology & Engineering - Telecommunications",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Information Technology & Engineering - Space Engineering",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Information Technology & Engineering - Robotics & AI",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Business, Economics & Law - Business Administration",
      duration: "4 Years (Bachelor's), 2 Years (Master's/MBA)",
      degree: "Bachelor's / Master's",
      medium: "English"
    },
    {
      name: "Business, Economics & Law - International Economics and Trade",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Business, Economics & Law - Finance & Banking",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Business, Economics & Law - Management",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Business, Economics & Law - Law (LLM)",
      duration: "4 Years (Bachelor's), 2 Years (Master's)",
      degree: "Bachelor's / Master's",
      medium: "English / Russian"
    },
    {
      name: "Humanities & Social Sciences - International Relations",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Humanities & Social Sciences - Psychology",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Russian"
    },
    {
      name: "Humanities & Social Sciences - Sociology",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English / Russian"
    },
    {
      name: "Humanities & Social Sciences - Education & Pedagogy",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "Russian / Kazakh"
    },
    {
      name: "Specialized & Cultural Courses - Kazakh Language Programs",
      duration: "1-4 Years",
      degree: "Certificate / Bachelor's",
      medium: "Kazakh"
    },
    {
      name: "Specialized & Cultural Courses - Russian Language Programs",
      duration: "1-4 Years",
      degree: "Certificate / Bachelor's",
      medium: "Russian"
    },
    {
      name: "Natural Sciences - Environmental Science",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    },
    {
      name: "Natural Sciences - Earth Sciences & Geology",
      duration: "4 Years",
      degree: "Bachelor's",
      medium: "English"
    }
  ],
  
  // Cost Breakdown
  costs: {
    tuitionFeeRange: "USD 1,000 - 7,000 per year (₹80,000 - 5,60,000)",
    hostelFees: "USD 300 - 800 per year",
    foodExpenses: "USD 1,200 - 2,400 per year (USD 100-200 per month)",
    otherExpenses: "USD 600 - 1,200 per year",
    totalFirstYear: "USD 3,100 - 11,400 (₹2.5L - 9L)",
    totalCourse: "USD 15,500 - 45,600 for 5-6 years MBBS (₹15L - 36L)"
  },
  
  // Admission Requirements
  eligibility: {
    neetRequirement: "NEET qualification required for MBBS programs",
    academicRequirement: "Completed 12th with minimum 50% marks in Physics, Chemistry, and Biology (40% for SC/ST/OBC). Some top universities require 60-70% marks.",
    ageLimit: "17-25 years",
    documents: [
      "Valid passport with minimum 6 months validity",
      "Academic transcripts (10th and 12th grade certificates and mark sheets)",
      "NEET scorecard (mandatory for MBBS students)",
      "Birth certificate (notarized)",
      "Passport-sized photographs (as per university requirements)",
      "Medical fitness certificate / Health examination report",
      "HIV negative certificate",
      "No criminal record / Police clearance certificate",
      "Application form (filled online)",
      "Migration certificate (if applicable)",
      "Transfer certificate from previous institution",
      "English language proficiency (IELTS/TOEFL) - not required for most universities",
      "Proof of financial support / Bank statements",
      "Invitation letter from university (for visa application)"
    ]
  },
  
  // Intakes
  intakes: {
    main: "September (Fall Intake)",
    secondary: "February/March (Spring Intake - Limited universities)",
    applicationDeadline: "Fall Intake: June 1 - August 25, Spring Intake: December - February (varies by university)"
  },
  
  // Visa Information
  visa: {
    type: "Student Visa (Type C9)",
    processingTime: "5-15 business days",
    validity: "Duration of study program",
    requirements: [
      "Valid passport with at least 6 months validity",
      "Official invitation letter from Kazakh university",
      "Visa application form (completed)",
      "Passport-sized photographs",
      "Admission/Enrollment letter from university",
      "Proof of financial support (bank statements)",
      "Medical fitness certificate",
      "HIV negative certificate",
      "No criminal record certificate",
      "Academic certificates (10th, 12th)",
      "NEET scorecard (for MBBS students)",
      "Visa application fee (approximately USD 200, varies by country)",
      "Travel insurance (recommended)",
      "Accommodation confirmation from university"
    ]
  },
  
  // Accommodation
  accommodation: {
    types: [
      "University dormitories (on-campus hostels)",
      "University-managed apartments",
      "Off-campus private apartments",
      "Shared accommodation with other students",
      "Rental apartments (1-room apartments available)"
    ],
    facilities: [
      "Furnished rooms with beds, desks, and wardrobes",
      "24-hour food supply in some hostels",
      "Indian mess facilities (3 times a day in select universities)",
      "Wi-Fi internet connectivity",
      "Common kitchens",
      "Laundry facilities",
      "24/7 security",
      "Study rooms and common areas",
      "Recreational facilities",
      "Heating systems for winter",
      "Hot water supply"
    ],
    averageCost: "USD 300 - 800 per year (₹24,000 - 64,000) for university hostels"
  },
  
  // Living in Country
  livingInfo: {
    climate: "Continental climate - Cold winters (-15°C to -30°C), warm summers (20°C to 35°C). Almaty and southern regions have milder winters.",
    language: "Kazakh (official), Russian (widely spoken), English (in universities and major cities)",
    currency: "Kazakhstani Tenge (KZT)",
    timeZone: "UTC+5 (Western Kazakhstan) to UTC+6 (Eastern Kazakhstan)",
    indianCommunity: "Growing Indian student community with 5,000+ students. Indian food available in university mess facilities and Indian restaurants in major cities.",
    safetyRating: "Very High - Kazakhstan is one of the safest countries with low crime rate. The country has unique laws protecting international students' safety and rights.",
    foodAvailability: "Indian food widely available in university hostels and mess facilities. Vegetarian and halal options accessible. Indian restaurants present in Almaty and Astana."
  },
  
  // Work Opportunities
  workOpportunities: {
    partTimeAllowed: true,
    hoursPerWeek: "Students are allowed to combine work and study. National Kazakh legislation is loyal to expats working part-time (typically 10-20 hours per week).",
    averageWage: "KZT 500-1000 per hour (approximately USD 1-2 per hour)",
    postStudyWork: "Graduates can obtain permanent residency and settle in Kazakhstan as permanent doctors or professionals. Work opportunities in hospitals, clinics, and industries."
  },
  
  // Recognition & Accreditation
  recognitions: [
    "Degrees recognized by WHO (World Health Organization)",
    "12-13 medical universities approved by NMC (National Medical Commission, India)",
    "Recognition by USMLE (for USA), GMC (for UK), AMC (for Australia)",
    "Recognition by IMED (International Medical Education Directory)",
    "Recognition by WDOMS (World Directory of Medical Schools)",
    "Universities increasingly ranked in international rankings",
    "Member of Bologna Process (European Higher Education Area)",
    "Cooperation with international scientific and educational institutions",
    "Partnerships with universities in UK, USA, Europe, and Asia",
    "ASIIN institutional international accreditation (for technical universities)",
    "Quality assurance by Ministry of Science and Higher Education of Kazakhstan"
  ],
  
  // Job Prospects
  careerProspects: {
    description: "After completing MBBS in Kazakhstan, graduates get offered many amazing career opportunities. Students can pursue postgraduate courses in medicine in Kazakhstan, India, or other countries. After clearing the Foreign Medical Graduate Examination (FMGE) or NEXT, graduates can practice medicine in India. Graduates can work in hospitals, clinics, or pursue research opportunities in any country of choice. Many graduates from Kazakhstan are working in government medical colleges in India and worldwide.",
    examsToClear: [
      "FMGE / NEXT (National Exit Test) - mandatory for Indian students to practice in India",
      "USMLE (United States Medical Licensing Examination) - for USA practice",
      "PLAB (Professional and Linguistic Assessments Board) - for UK practice",
      "AMC (Australian Medical Council) examinations - for Australia practice",
      "Professional licensing exams (varies by field and country)"
    ],
    averageSalary: "KZT 1,500,000 - 4,000,000 per year (USD 3,000 - 8,500) for entry-level positions in Kazakhstan. Varies by field and experience."
  },
  
  // Key Highlights
  highlights: [
    {
      title: "Admission Process",
      description: "The admission process is straightforward and simple: 1) Submit application with required documents, 2) Receive invitation letter from university, 3) Apply for student visa (C9), 4) Complete medical examination, 5) Arrange accommodation, 6) Travel to Kazakhstan and begin studies. No entrance examinations required for most programs."
    },
    {
      title: "Academic Structure",
      description: "Bachelor's degree typically takes 4 years to complete. Master's degree generally spans 2 years of study. Doctoral degree (Ph.D.) involves approximately 3-4 years. MBBS course is 5-6 years including theoretical, practical training, and 1-year internship. Study modes include full-time, part-time, and distance learning."
    },
    {
      title: "English-Medium Education",
      description: "Many universities offer MBBS and other programs in English medium, eliminating language barriers for international students. No requirement to qualify for English language exams like TOEFL, IELTS, or PTE for most universities. While programs are in English, students gain exposure to Kazakh and Russian languages."
    },
    {
      title: "Scholarship Opportunities",
      description: "Kazakhstan Government Scholarship provides approximately 550 scholarships annually for international students (Bachelor's, Master's, and PhD), covering full tuition and providing monthly stipend. University-specific grants and merit-based scholarships available. OIC Scholarships for students from Organization of Islamic Cooperation member countries."
    },
    {
      title: "Cost-Effective Education",
      description: "One of the most affordable MBBS destinations globally with total course fees starting from INR 15 lakhs for complete degree. Tuition fees range from USD 1,000 to 7,000 per year. Living costs are very economical with monthly expenses between USD 100-300. Much cheaper than studying in India's private medical colleges or Western countries."
    },
    {
      title: "Cultural Diversity",
      description: "Kazakhstan's unique position between East and West makes it a cultural melting pot. Only 66% of residents are native Kazakhs, creating an ethnically diverse society. Students engage with diverse communities from across the world. Rich history as part of the ancient Silk Road."
    },
    {
      title: "Modern Infrastructure",
      description: "Universities in Kazakhstan have excellent modern infrastructure with well-equipped laboratories, research centers, extensive libraries, simulation centers, modern dormitories, and affiliated hospitals for clinical training. Facilities comparable to Western standards at affordable costs."
    },
    {
      title: "Strategic Location",
      description: "Kazakhstan is a key part of the 'New Silk Road' offering unique opportunities in logistics, energy, and international relations. Easy travel to Central Asian countries without additional visa requirements. Strategic location between Europe and Asia provides global networking opportunities."
    }
  ],
  
  // Advantages
  advantages: [
    "Leading economy in Central Asia with growing opportunities",
    "World's largest landlocked country with rich natural resources",
    "Affordable education with tuition fees from USD 1,000 to 7,000 per year",
    "Total MBBS cost starting from INR 15 lakhs for complete 5-6 year program",
    "12-13 NMC-approved medical universities",
    "Degrees recognized globally by WHO, NMC, USMLE, GMC, and other bodies",
    "Simple admission procedure with no entrance examinations",
    "High acceptance rate for international students",
    "Straightforward visa process with quick processing (5-15 days)",
    "English-medium courses available in top universities",
    "No IELTS/TOEFL requirement for most universities",
    "Modern infrastructure with state-of-the-art facilities",
    "Safe environment with very low crime rate",
    "Unique laws protecting international students' safety and rights",
    "Cost of living is very affordable (USD 200-300 per month)",
    "Rental housing accessible (USD 150-250 for 1-room apartment)",
    "Indian food availability in university mess facilities",
    "Growing Indian student community (5,000+ students)",
    "Multicultural environment welcoming international students",
    "Opportunity to learn Kazakh and Russian languages",
    "Student exchange programs and international conferences",
    "Part-time work opportunities allowed for students",
    "Permanent residency options available after graduation",
    "No donation or hidden charges",
    "Homely atmosphere in hostels and dormitories",
    "Experienced faculty including Indian professors",
    "Large libraries and research facilities",
    "Both private and government universities available",
    "Scholarship opportunities from government and universities",
    "Strategic location for travel to Central Asia and beyond"
  ],
  
  // Medical Licensing
  medicalLicensing: {
    india: "Graduates from NMC-approved Kazakh medical universities must clear the Foreign Medical Graduate Examination (FMGE) or NEXT (National Exit Test) to practice medicine in India. Many students who completed MBBS in Kazakhstan have successfully cleared FMGE and are now practicing in India, working in government medical colleges.",
    usa: "Graduates can apply for USMLE (United States Medical Licensing Examination). Kazakh medical degrees are recognized by ECFMG. Degrees from recognized universities allow graduates to pursue medical licensing in the USA.",
    uk: "Graduates must pass PLAB (Professional and Linguistic Assessments Board) test to practice in the UK. Kazakh medical degrees from recognized universities are accepted for UK medical licensing examinations.",
    other: "Graduates can practice medicine globally after clearing respective licensing examinations. Degrees are recognized by medical councils worldwide. Graduates have built successful careers in India, the Middle East, USA, and other countries. Eligible to appear for AMC (Australia), and other international medical licensing exams."
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
    heroImage: 'https://images.unsplash.com/photo-1626553052767-9c26cf12cfef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXpiZWtpc3RhbiUyMHVuaXZlcnNpdGVzfGVufDB8fDB8fHww',
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