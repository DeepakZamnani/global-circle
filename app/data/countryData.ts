// ============================================
// COUNTRY DATA - Separate file (No "use client")
// ============================================

export interface CountryInfo {
  name: string;
  slug: string;
  flag: string;
  heroImage: string;
  galleryImages: string[];
  tagline: string;
  description: string;
  color: string;
  stats: {
    universities: string;
    programs: string;
    intlStudents: string;
    globalRank: string;
  };
  highlights: { title: string; desc: string }[];
  popularPrograms: string[];
  topUniversities: string[];
  topCities: string[];
  requirements: string[];
  intakes: string[];
  tuitionRange: string;
  livingCost: string;
}

export const countryData: Record<string, CountryInfo> = {
  canada: {
    name: 'Canada',
    slug: 'canada',
    flag: '🇨🇦',
    heroImage: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&q=80',
      'https://images.unsplash.com/photo-1542704792-e30dac463c90?w=600&q=80',
      'https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=600&q=80'
    ],
    tagline: 'Your Gateway to Global Success',
    description: 'Experience world-class education in one of the most welcoming and multicultural countries, offering high-quality programs, post-graduation work opportunities, and an excellent quality of life.',
    color: '#DC2626',
    stats: {
      universities: '96+',
      programs: '15,000+',
      intlStudents: '800K+',
      globalRank: '#3'
    },
    highlights: [
      { title: 'Post-Graduation Work Permit', desc: 'Stay and work for up to 3 years after graduation' },
      { title: 'Multicultural Environment', desc: 'One of the most diverse and welcoming countries' },
      { title: 'High Living Standards', desc: 'Excellent healthcare, safety, and quality of life' },
      { title: 'Pathway to PR', desc: 'Clear immigration pathways for international students' }
    ],
    popularPrograms: ['Business & MBA', 'Computer Science', 'Engineering', 'Healthcare', 'Data Science', 'Hospitality'],
    topUniversities: ['University of Toronto', 'McGill University', 'UBC', 'University of Alberta', 'McMaster University'],
    topCities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
    requirements: ['Valid passport', 'Acceptance from DLI', 'Proof of funds', 'IELTS/TOEFL scores', 'Statement of Purpose', 'Medical exam'],
    intakes: ['September (Fall)', 'January (Winter)', 'May (Summer)'],
    tuitionRange: '$15,000 - $35,000 CAD/year',
    livingCost: '$10,000 - $15,000 CAD/year'
  },
  australia: {
    name: 'Australia',
    slug: 'australia',
    flag: '🇦🇺',
    heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80',
      'https://images.unsplash.com/photo-1545044846-351ba102b6d5?w=600&q=80',
      'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=600&q=80'
    ],
    tagline: 'World-Class Education & Lifestyle',
    description: 'Experience world-class education in a multicultural environment with globally recognized universities, offering excellent research opportunities and an outstanding quality of life.',
    color: '#1E3A5F',
    stats: {
      universities: '43+',
      programs: '22,000+',
      intlStudents: '750K+',
      globalRank: '#2'
    },
    highlights: [
      { title: 'World-Class Universities', desc: '7 universities in global top 100 rankings' },
      { title: 'Post-Study Work Rights', desc: '2-4 years post-study work visa available' },
      { title: 'Multicultural Environment', desc: 'Students from 190+ countries study here' },
      { title: 'Amazing Lifestyle', desc: 'Beaches, cities, and natural wonders await' }
    ],
    popularPrograms: ['Business & Management', 'IT & Computer Science', 'Engineering', 'Nursing', 'Hospitality', 'Medicine'],
    topUniversities: ['University of Melbourne', 'University of Sydney', 'UNSW', 'ANU', 'Monash University'],
    topCities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
    requirements: ['Valid passport', 'Confirmation of Enrolment', 'Genuine Temporary Entrant', 'IELTS 6.0+ / PTE 50+', 'Financial capacity proof', 'Health insurance'],
    intakes: ['February (Main)', 'July (Mid-year)'],
    tuitionRange: '$20,000 - $45,000 AUD/year',
    livingCost: '$21,000 AUD/year'
  },
  france: {
    name: 'France',
    slug: 'france',
    flag: '🇫🇷',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&q=80',
      'https://images.unsplash.com/photo-1551865299-6464fcea5c25?w=600&q=80',
      'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=600&q=80'
    ],
    tagline: 'Where Culture Meets Excellence',
    description: 'Experience world-class education in one of Europe\'s most culturally rich countries, offering prestigious programs across diverse fields including fashion, culinary arts, and business.',
    color: '#1E3A5F',
    stats: {
      universities: '72+',
      programs: '3,500+',
      intlStudents: '370K+',
      globalRank: '#6'
    },
    highlights: [
      { title: 'Rich Cultural Heritage', desc: 'Art, history, and cuisine at your doorstep' },
      { title: 'Affordable Education', desc: 'Low tuition fees even for international students' },
      { title: 'Post-Study Work Options', desc: 'Work permit available for graduates' },
      { title: 'Central EU Location', desc: 'Easy access to all of Europe' }
    ],
    popularPrograms: ['Fashion & Design', 'Culinary Arts', 'Business & MBA', 'Engineering', 'Arts & Humanities', 'Wine Studies'],
    topUniversities: ['Sorbonne University', 'Sciences Po', 'HEC Paris', 'École Polytechnique', 'ESSEC Business School'],
    topCities: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice'],
    requirements: ['Valid passport', 'Acceptance letter', 'Proof of accommodation', 'Financial guarantee', 'French/English proficiency', 'Campus France interview'],
    intakes: ['September (Main)', 'January'],
    tuitionRange: '€2,770 - €20,000/year',
    livingCost: '€800 - €1,200/month'
  },
  spain: {
    name: 'Spain',
    slug: 'spain',
    flag: '🇪🇸',
    heroImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80',
      'https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=600&q=80',
      'https://images.unsplash.com/photo-1583779457094-4e815aa34743?w=600&q=80'
    ],
    tagline: 'Vibrant Life, Quality Education',
    description: 'Experience world-class education in Spain while immersing yourself in a rich cultural heritage and vibrant student life with affordable living costs.',
    color: '#FF6B35',
    stats: {
      universities: '84+',
      programs: '2,800+',
      intlStudents: '200K+',
      globalRank: '#10'
    },
    highlights: [
      { title: 'Vibrant Student Life', desc: 'Amazing social scene and festivals year-round' },
      { title: 'Affordable Education', desc: 'Low tuition and living costs compared to others' },
      { title: 'Historic Universities', desc: 'Some of the oldest universities in the world' },
      { title: 'Learn Spanish', desc: '2nd most spoken language globally' }
    ],
    popularPrograms: ['Business & Tourism', 'Architecture', 'Medicine', 'Arts & Design', 'Spanish Language', 'Renewable Energy'],
    topUniversities: ['University of Barcelona', 'Complutense Madrid', 'IE Business School', 'ESADE', 'University of Valencia'],
    topCities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Bilbao'],
    requirements: ['Valid passport', 'University acceptance', 'Proof of funds', 'Health insurance', 'Spanish/English proficiency', 'Background check'],
    intakes: ['September (Main)', 'February'],
    tuitionRange: '€750 - €15,000/year',
    livingCost: '€700 - €1,000/month'
  }
};