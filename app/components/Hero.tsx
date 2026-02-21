// "use client";

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { getAllCountries } from '@/services/dbServices';
// import type { CountryDetailedInfo } from '@/app/data/countryData';
// import Navbar from './Navbar';
// import CourseDropdown from './CourseDropdown';

// interface HeroProps {
//   onCourseSelect: (course: string) => void;
//   selectedCourse: string;
// }

// export default function Hero({ onCourseSelect, selectedCourse }: HeroProps) {
//   const router = useRouter();
//   const [floatingCountries, setFloatingCountries] = useState<CountryDetailedInfo[]>([]);

//   // Fetch countries for floating badges
//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const countries = await getAllCountries();
//         const topCountries = countries.slice(0, 4);
//         setFloatingCountries(topCountries);
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     };
//     fetchCountries();
//   }, []);

//   const navigateToCountry = (countrySlug: string) => {
//     router.push(`/destinations/${countrySlug}`);
//   };

//   return (
//     <div style={{
//       // REMOVED: minHeight: '100vh' - This was causing scroll issues!
//       background: '#FFFFFF',
//       fontFamily: '"Plus Jakarta Sans", sans-serif',
//       position: 'relative',
//       paddingBottom: '80px' // Space for angled divider
//     }}>
      
//       {/* Google Fonts Import */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
//         * {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//         }

//         /* Stats Card */
//         .stat-card {
//           background: white;
//           border: 1px solid #E2E8F0;
//           border-radius: 16px;
//           padding: 16px;
//           transition: all 0.3s ease;
//         }

//         .stat-card:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 8px 24px rgba(0,0,0,0.08);
//           border-color: #CBD5E1;
//         }

//         /* Floating Badge */
//         .badge {
//           background: white;
//           border: 1px solid #E2E8F0;
//           border-radius: 50px;
//           padding: 12px 20px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           font-weight: 600;
//           font-size: 13px;
//           color: #1E3A5F;
//           box-shadow: 0 4px 16px rgba(0,0,0,0.08);
//         }

//         /* Country Button Styles */
//         .country-badge-btn {
//           cursor: pointer;
//           transition: all 0.3s ease;
//           outline: none;
//           border: none;
//         }

//         .country-badge-btn:hover {
//           transform: scale(1.05);
//           box-shadow: 0 12px 40px rgba(0,0,0,0.18);
//         }

//         .country-badge-btn:active {
//           transform: scale(0.98);
//         }

//         /* Floating Animation */
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-12px); }
//         }
        
//         @keyframes floatSlow {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-8px) rotate(3deg); }
//         }

//         .floating {
//           animation: float 4s ease-in-out infinite;
//         }
        
//         .floating-slow {
//           animation: floatSlow 6s ease-in-out infinite;
//         }

//         .floating-delay-1 {
//           animation-delay: 0.5s;
//         }
        
//         .floating-delay-2 {
//           animation-delay: 1s;
//         }

//         .floating-delay-3 {
//           animation-delay: 1.5s;
//         }

//         .floating-delay-4 {
//           animation-delay: 2s;
//         }

//         /* Tablet Responsive */
//         @media (max-width: 1024px) {
//           .hero-grid {
//             grid-template-columns: 1fr !important;
//             gap: 40px !important;
//             text-align: center;
//           }
          
//           .hero-headline {
//             font-size: 48px !important;
//           }
          
//           .hero-subtext {
//             margin-left: auto;
//             margin-right: auto;
//           }
          
//           .hero-stats-row {
//             justify-content: center !important;
//           }
          
//           .hero-image-container {
//             height: 500px !important;
//             margin: 0 auto;
//             max-width: 450px;
//           }
          
//           .main-circle {
//             width: 380px !important;
//             height: 380px !important;
//           }
          
//           .student-image {
//             width: 340px !important;
//             height: 440px !important;
//           }

//           .teal-circle {
//             width: 100px !important;
//             height: 100px !important;
//           }

//           .navy-circle {
//             width: 50px !important;
//             height: 50px !important;
//           }

//           .floating-badge {
//             display: none !important;
//           }
//         }

//         /* Mobile Responsive */
//         @media (max-width: 768px) {
//           .hero-section {
//             padding: 100px 20px 60px !important;
//           }
          
//           .hero-headline {
//             font-size: 38px !important;
//             letter-spacing: -1px !important;
//           }
          
//           .hero-subtext {
//             font-size: 16px !important;
//           }
          
//           .hero-stats-row {
//             flex-direction: column !important;
//             gap: 12px !important;
//           }
          
//           .stat-card {
//             width: 100%;
//           }
          
//           .hero-image-container {
//             height: 400px !important;
//           }
          
//           .main-circle {
//             width: 280px !important;
//             height: 280px !important;
//           }
          
//           .student-image {
//             width: 250px !important;
//             height: 340px !important;
//           }

//           .teal-circle {
//             width: 80px !important;
//             height: 80px !important;
//           }

//           .navy-circle {
//             width: 40px !important;
//             height: 40px !important;
//           }

//           .badge {
//             padding: 8px 14px !important;
//             font-size: 11px !important;
//           }

//           .floating-badge {
//             display: none !important;
//           }
//         }
//       `}</style>

//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="hero-section" style={{ 
//         padding: '140px 40px 80px', 
//         position: 'relative'
//       }}>
//         <div className="hero-grid" style={{
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr',
//           gap: '60px',
//           maxWidth: '1400px',
//           margin: '0 auto',
//           alignItems: 'center'
//         }}>
          
//           {/* Left Content */}
//           <div>
//             <h1 className="hero-headline" style={{
//               fontSize: '64px',
//               fontWeight: '800',
//               color: '#1E3A5F',
//               lineHeight: '1.1',
//               letterSpacing: '-2px',
//               marginBottom: '24px'
//             }}>
//               Your Gateway to<br />
//               <span style={{ color: '#FF6B35' }}>Global Education</span>
//             </h1>

//             <p className="hero-subtext" style={{
//               fontSize: '18px',
//               color: '#64748B',
//               lineHeight: '1.6',
//               marginBottom: '40px',
//               maxWidth: '500px',
//               fontWeight: '500'
//             }}>
//               Discover world-class universities offering MBBS, Engineering, MBA and more across 20+ programs in multiple countries
//             </p>

//             {/* Course Dropdown */}
//             <CourseDropdown 
//               selectedCourse={selectedCourse}
//               onCourseSelect={onCourseSelect}
//             />

//             {/* Stats Row */}
//             <div className="hero-stats-row" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '40px' }}>
//               <div className="stat-card">
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                   <div style={{
//                     width: '48px',
//                     height: '48px',
//                     borderRadius: '12px',
//                     background: '#ECFDF5',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '24px'
//                   }}>✓</div>
//                   <div>
//                     <div style={{ fontSize: '28px', fontWeight: '800', color: '#1E3A5F' }}>98%</div>
//                     <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500' }}>Visa Success</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="stat-card">
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                   <div style={{
//                     width: '48px',
//                     height: '48px',
//                     borderRadius: '12px',
//                     background: '#FFF7ED',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '24px',
//                     color: '#FF6B35'
//                   }}>→</div>
//                   <div>
//                     <div style={{ fontSize: '28px', fontWeight: '800', color: '#1E3A5F' }}>500+</div>
//                     <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500' }}>Students Placed</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="stat-card">
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                   <div style={{
//                     width: '48px',
//                     height: '48px',
//                     borderRadius: '12px',
//                     background: '#F0FDFA',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '24px',
//                     color: '#2EC4B6'
//                   }}>★</div>
//                   <div>
//                     <div style={{ fontSize: '28px', fontWeight: '800', color: '#1E3A5F' }}>50+</div>
//                     <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500' }}>Universities</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Hero Image */}
//           <div className="hero-image-container" style={{ position: 'relative', height: '600px' }}>
            
//             {/* Main Orange Circle Background */}
//             <div 
//               className="main-circle"
//               style={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 width: '450px',
//                 height: '550px',
//                 borderRadius: '50%',
//                 background: '#FF6B35',
//                 zIndex: 1
//               }} 
//             />

//             {/* Secondary Teal Circle */}
//             <div 
//               className="teal-circle floating-slow floating-delay-1"
//               style={{
//                 position: 'absolute',
//                 bottom: '5%',
//                 left: '5%',
//                 width: '120px',
//                 height: '120px',
//                 borderRadius: '50%',
//                 background: '#2EC4B6',
//                 zIndex: 0
//               }} 
//             />

//             {/* Small Navy Circle */}
//             <div 
//               className="navy-circle floating floating-delay-2"
//               style={{
//                 position: 'absolute',
//                 top: '10%',
//                 right: '10%',
//                 width: '60px',
//                 height: '60px',
//                 borderRadius: '50%',
//                 background: '#1E3A5F',
//                 zIndex: 0
//               }} 
//             />

//             {/* Student Image */}
//             <div 
//               className="student-image"
//               style={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 zIndex: 2,
//                 width: '500px',
//                 height: '500px'
//               }}
//             >
//               <img 
//                 src="/edited.gif"
//                 alt="Student"
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   objectPosition: 'top',
//                   borderRadius: '0 0 200px 200px'
//                 }}
//               />
//             </div>

//             {/* DYNAMIC FLOATING BADGES FROM FIREBASE */}
//             {floatingCountries.length >= 1 && (
//               <button 
//                 onClick={() => navigateToCountry(floatingCountries[0].slug)}
//                 className="badge floating-badge country-badge-btn floating floating-delay-1"
//                 style={{
//                   position: 'absolute',
//                   top: '15%',
//                   left: '0%',
//                   zIndex: 3,
//                   background: '#1E3A5F',
//                   color: 'white'
//                 }}
//                 aria-label={`Study in ${floatingCountries[0].name}`}
//               >
//                 <div style={{
//                   width: '32px',
//                   height: '32px',
//                   borderRadius: '8px',
//                   background: 'rgba(255, 255, 255, 0.2)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: '20px',
//                   fontWeight: '700'
//                 }}>{floatingCountries[0].flag}</div>
//                 <div>
//                   <div style={{ fontWeight: '700', fontSize: '13px' }}>{floatingCountries[0].name}</div>
//                   <div style={{ fontSize: '11px', opacity: '0.8' }}>
//                     {floatingCountries[0].stats?.totalUniversities || '10'}+ Unis
//                   </div>
//                 </div>
//               </button>
//             )}

//             {floatingCountries.length >= 2 && (
//               <button 
//                 onClick={() => navigateToCountry(floatingCountries[1].slug)}
//                 className="badge floating-badge country-badge-btn floating floating-delay-2"
//                 style={{
//                   position: 'absolute',
//                   top: '35%',
//                   right: '-5%',
//                   zIndex: 3,
//                   background: '#1E3A5F',
//                   color: 'white'
//                 }}
//                 aria-label={`Study in ${floatingCountries[1].name}`}
//               >
//                 <div style={{
//                   width: '32px',
//                   height: '32px',
//                   borderRadius: '8px',
//                   background: 'rgba(255, 255, 255, 0.2)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: '20px',
//                   fontWeight: '700'
//                 }}>{floatingCountries[1].flag}</div>
//                 <div>
//                   <div style={{ fontWeight: '700', fontSize: '13px' }}>{floatingCountries[1].name}</div>
//                   <div style={{ fontSize: '11px', opacity: '0.8' }}>
//                     {floatingCountries[1].stats?.totalUniversities || '10'}+ Unis
//                   </div>
//                 </div>
//               </button>
//             )}

//             {/* Floating Badge - Success Rate (Non-clickable) */}
//             <div 
//               className="badge floating-badge floating floating-delay-3"
//               style={{
//                 position: 'absolute',
//                 bottom: '20%',
//                 right: '0%',
//                 zIndex: 3
//               }}
//             >
//               <div style={{
//                 width: '36px',
//                 height: '36px',
//                 borderRadius: '50%',
//                 background: '#ECFDF5',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 color: '#10B981',
//                 fontWeight: '700'
//               }}>✓</div>
//               <div>
//                 <div style={{ fontWeight: '700', color: '#1E3A5F' }}>98% Success</div>
//                 <div style={{ fontSize: '12px', color: '#64748B' }}>Visa Approval</div>
//               </div>
//             </div>

//             {floatingCountries.length >= 3 && (
//               <button 
//                 onClick={() => navigateToCountry(floatingCountries[2].slug)}
//                 className="badge floating-badge country-badge-btn floating-slow floating-delay-4"
//                 style={{
//                   position: 'absolute',
//                   bottom: '8%',
//                   left: '10%',
//                   zIndex: 3,
//                   background: '#1E3A5F',
//                   color: 'white'
//                 }}
//                 aria-label={`Study in ${floatingCountries[2].name}`}
//               >
//                 <div style={{
//                   width: '32px',
//                   height: '32px',
//                   borderRadius: '50%',
//                   background: 'rgba(255,255,255,0.2)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: '20px'
//                 }}>{floatingCountries[2].flag}</div>
//                 <div>
//                   <div style={{ fontWeight: '700', fontSize: '13px' }}>{floatingCountries[2].name}</div>
//                   <div style={{ fontSize: '11px', opacity: '0.8' }}>
//                     {floatingCountries[2].stats?.totalUniversities || '10'}+ Unis
//                   </div>
//                 </div>
//               </button>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Angled Divider */}
//       <div style={{
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         height: '80px',
//         background: '#1E3A5F',
//         clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'
//       }} />
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  getAllCountries,
  getUniqueCourses,
  getAvailableRegions,
} from '@/services/dbServices';
import type { CountryDetailedInfo } from '@/app/data/countryData';
import Navbar from './Navbar';

// ─── Types ─────────────────────────────────────────────────────────────────────

export interface MatcherFilters {
  course: string;
  budget: string;
  region: string;
  language: string;
}

interface HeroProps {
  onSearch: (filters: MatcherFilters) => void;
}

// ─── Budget options (static — no DB field maps directly to these) ──────────────
const BUDGETS = [
  'Under $5,000 / year',
  '$5,000 – $10,000 / year',
  '$10,000 – $20,000 / year',
  '$20,000+ / year',
];

// ─── Language options (static) ─────────────────────────────────────────────────
const LANGUAGES = [
  'English Only',
  'English + Local',
  'Local Language OK',
];

// ─── Component ─────────────────────────────────────────────────────────────────
export default function Hero({ onSearch }: HeroProps) {
  const router = useRouter();

  // ── Right side: floating country badges from DB (identical to original) ──
  const [floatingCountries, setFloatingCountries] = useState<CountryDetailedInfo[]>([]);

  // ── Left side: DB-driven dropdown options ────────────────────────────────
  const [courses, setCourses]   = useState<string[]>([]);
  const [regions, setRegions]   = useState<string[]>([]);
  const [loadingOptions, setLoadingOptions] = useState(true);

  // ── Left side: selected values ────────────────────────────────────────────
  const [course,   setCourse]   = useState('');
  const [budget,   setBudget]   = useState('');
  const [region,   setRegion]   = useState('');
  const [language, setLanguage] = useState('');

  // ── Load all DB-driven options on mount ───────────────────────────────────
  useEffect(() => {
    Promise.all([
      getAllCountries(),
      getUniqueCourses(),
      getAvailableRegions(),
    ])
      .then(([countries, courseList, regionList]) => {
        setFloatingCountries(countries.slice(0, 4));
        setCourses(courseList);
        setRegions(regionList);
      })
      .catch(err => console.error('Hero DB load error:', err))
      .finally(() => setLoadingOptions(false));
  }, []);

  const navigateToCountry = (slug: string) => router.push(`/destinations/${slug}`);

  const filledCount = [course, budget, region, language].filter(Boolean).length;
  const canSearch   = !!(course && budget);

  const handleSearch = () => {
    if (!canSearch) return;
    onSearch({ course, budget, region, language });
  };

  return (
    <div style={{
      background: '#FFFFFF',
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      position: 'relative',
      paddingBottom: '80px',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Stat cards (identical to original) ── */
        .stat-card {
          background: white; border: 1px solid #E2E8F0;
          border-radius: 16px; padding: 14px 18px;
          transition: all 0.3s ease; flex: 1;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          border-color: #CBD5E1;
        }

        /* ── Floating badge (identical to original) ── */
        .badge {
          background: white; border: 1px solid #E2E8F0;
          border-radius: 50px; padding: 12px 20px;
          display: flex; align-items: center; gap: 8px;
          font-weight: 600; font-size: 13px; color: #1E3A5F;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
        .country-badge-btn {
          cursor: pointer; transition: all 0.3s ease; outline: none; border: none;
        }
        .country-badge-btn:hover  { transform: scale(1.05); box-shadow: 0 12px 40px rgba(0,0,0,0.18); }
        .country-badge-btn:active { transform: scale(0.98); }

        /* ── Float animations (identical to original) ── */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-8px) rotate(3deg); }
        }
        .floating          { animation: float 4s ease-in-out infinite; }
        .floating-slow     { animation: floatSlow 6s ease-in-out infinite; }
        .floating-delay-1  { animation-delay: 0.5s; }
        .floating-delay-2  { animation-delay: 1s; }
        .floating-delay-3  { animation-delay: 1.5s; }
        .floating-delay-4  { animation-delay: 2s; }

        /* ── Matcher select ── */
        .hero-select {
          width: 100%; height: 52px;
          padding: 0 40px 0 16px;
          border: 2px solid #E2E8F0; background: white;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px; font-weight: 600; color: #1E3A5F;
          outline: none; appearance: none; -webkit-appearance: none;
          cursor: pointer; transition: border-color 0.2s, box-shadow 0.2s;
          background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%2364748B' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 14px center;
        }
        .hero-select:hover  { border-color: #CBD5E1; }
        .hero-select:focus  { border-color: #1E3A5F; box-shadow: 0 0 0 3px rgba(30,58,95,0.08); }
        .hero-select.filled { border-color: #FF6B35; }
        .hero-select.filled {
          background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%23FF6B35' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
        }
        .hero-select:disabled { opacity: 0.5; cursor: not-allowed; }

        /* Select corner-cut shapes */
        .shape-tl { clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px); }
        .shape-br { clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%); }
        .shape-tr { clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%); }
        .shape-bl { clip-path: polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px)); }

        /* Field label */
        .mlabel {
          font-size: 10px; font-weight: 800; letter-spacing: 1.8px;
          text-transform: uppercase; color: #94A3B8; margin-bottom: 8px;
          display: flex; align-items: center; gap: 6px;
        }
        .req-dot { width: 5px; height: 5px; border-radius: 50%; background: #FF6B35; flex-shrink: 0; }

        /* Matcher card */
        .matcher-card {
          background: #F8FAFC; border: 1px solid #E2E8F0;
          padding: 24px;
          clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));
          margin-bottom: 28px;
        }

        /* Progress dots */
        .prog-dot { height: 3px; border-radius: 2px; transition: all 0.3s ease; }

        /* Search button */
        .hero-search-btn {
          height: 52px; width: 100%; border: none; color: white;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px; font-weight: 800;
          cursor: pointer; transition: all 0.3s ease;
          clip-path: polygon(14px 0, 100% 0, calc(100% - 14px) 100%, 0 100%);
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .hero-search-btn.ready   { background: #FF6B35; }
        .hero-search-btn.ready:hover {
          background: #E55A2B; transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(255,107,53,0.4);
        }
        .hero-search-btn.not-ready { background: #CBD5E1; cursor: not-allowed; }

        /* Tablet responsive */
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
          .hero-headline { font-size: 48px !important; }
          .hero-subtext  { margin-left: auto; margin-right: auto; }
          .hero-stats-row { justify-content: center !important; }
          .hero-image-container { height: 500px !important; margin: 0 auto; max-width: 450px; }
          .main-circle   { width: 380px !important; height: 380px !important; }
          .student-image { width: 340px !important; height: 440px !important; }
          .teal-circle   { width: 100px !important; height: 100px !important; }
          .navy-circle   { width: 50px !important; height: 50px !important; }
          .floating-badge { display: none !important; }
          .matcher-card  { clip-path: none !important; border-radius: 16px !important; }
          .shape-tl, .shape-br, .shape-tr, .shape-bl { clip-path: none !important; border-radius: 8px !important; }
          .hero-search-btn { clip-path: none !important; border-radius: 8px !important; }
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .hero-section   { padding: 100px 20px 60px !important; }
          .hero-headline  { font-size: 38px !important; letter-spacing: -1px !important; }
          .hero-subtext   { font-size: 16px !important; }
          .hero-stats-row { flex-direction: column !important; gap: 10px !important; }
          .hero-image-container { height: 400px !important; }
          .main-circle   { width: 280px !important; height: 280px !important; }
          .student-image { width: 250px !important; height: 340px !important; }
          .teal-circle   { width: 80px !important; height: 80px !important; }
          .navy-circle   { width: 40px !important; height: 40px !important; }
          .badge         { padding: 8px 14px !important; font-size: 11px !important; }
          .floating-badge { display: none !important; }
          .two-col-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Navbar />

      <section className="hero-section" style={{ padding: '140px 40px 80px', position: 'relative' }}>
        <div className="hero-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '60px', maxWidth: '1400px', margin: '0 auto', alignItems: 'center',
        }}>

          {/* ══════════════════════════════
              LEFT — Headline + Matcher + Stats
          ══════════════════════════════ */}
          <div>
            <h1 className="hero-headline" style={{
              fontSize: '64px', fontWeight: '800', color: '#1E3A5F',
              lineHeight: '1.1', letterSpacing: '-2px', marginBottom: '18px',
            }}>
              Your Gateway to<br />
              <span style={{ color: '#FF6B35' }}>Global Education</span>
            </h1>

            <p className="hero-subtext" style={{
              fontSize: '17px', color: '#64748B', lineHeight: '1.65',
              marginBottom: '28px', maxWidth: '480px', fontWeight: '500',
            }}>
              Find your perfect university match across 26+ countries — filtered by course, budget, region and language.
            </p>

            {/* ── MATCHER CARD ── */}
            <div className="matcher-card">

              {/* Header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#1E3A5F' }}>
                  🎯 Find your university match
                </span>
                {/* Progress dots */}
                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                  {[course, budget, region, language].map((v, i) => (
                    <div key={i} className="prog-dot" style={{
                      width: v ? '20px' : '6px',
                      background: v ? '#FF6B35' : '#E2E8F0',
                    }} />
                  ))}
                  <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '700', marginLeft: '4px' }}>
                    {filledCount}/4
                  </span>
                </div>
              </div>

              {/* Row 1 — Course (full width, from DB) */}
              <div style={{ marginBottom: '12px' }}>
                <div className="mlabel">
                  <span className="req-dot" /> Field of Study
                </div>
                <select
                  className={`hero-select shape-tl ${course ? 'filled' : ''}`}
                  value={course}
                  onChange={e => setCourse(e.target.value)}
                  disabled={loadingOptions}
                >
                  <option value="">
                    {loadingOptions ? 'Loading courses…' : 'Select your course or field…'}
                  </option>
                  {courses.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {/* Row 2 — Budget + Region */}
              <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div>
                  <div className="mlabel"><span className="req-dot" /> Budget / Year</div>
                  <select
                    className={`hero-select shape-br ${budget ? 'filled' : ''}`}
                    value={budget}
                    onChange={e => setBudget(e.target.value)}
                  >
                    <option value="">Select budget…</option>
                    {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  {/* Region — from DB via getAvailableRegions() */}
                  <div className="mlabel" style={{ color: '#CBD5E1' }}>Region</div>
                  <select
                    className={`hero-select shape-tr ${region ? 'filled' : ''}`}
                    value={region}
                    onChange={e => setRegion(e.target.value)}
                    disabled={loadingOptions}
                  >
                    <option value="">Any region</option>
                    {regions.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              </div>

              {/* Row 3 — Language + Button */}
              <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <div className="mlabel" style={{ color: '#CBD5E1' }}>Language</div>
                  <select
                    className={`hero-select shape-bl ${language ? 'filled' : ''}`}
                    value={language}
                    onChange={e => setLanguage(e.target.value)}
                  >
                    <option value="">No preference</option>
                    {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <button
                    className={`hero-search-btn ${canSearch ? 'ready' : 'not-ready'}`}
                    disabled={!canSearch}
                    onClick={handleSearch}
                  >
                    {canSearch
                      ? <><span>Find Matches</span><span style={{ fontSize: '16px' }}>→</span></>
                      : 'Select course & budget'
                    }
                  </button>
                </div>
              </div>

              {/* Required note */}
              <p style={{ marginTop: '10px', fontSize: '11px', color: '#94A3B8', fontWeight: '500' }}>
                <span style={{ color: '#FF6B35', fontWeight: '800' }}>●</span> Course + Budget required &nbsp;·&nbsp; Region &amp; Language optional
              </p>
            </div>

            {/* ── STAT CARDS (identical to original) ── */}
            <div className="hero-stats-row" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <div className="stat-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width:'44px',height:'44px',borderRadius:'12px',background:'#ECFDF5',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'22px' }}>✓</div>
                  <div>
                    <div style={{ fontSize:'24px',fontWeight:'800',color:'#1E3A5F' }}>98%</div>
                    <div style={{ fontSize:'12px',color:'#64748B',fontWeight:'500' }}>Visa Success</div>
                  </div>
                </div>
              </div>
              <div className="stat-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width:'44px',height:'44px',borderRadius:'12px',background:'#FFF7ED',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'22px',color:'#FF6B35' }}>→</div>
                  <div>
                    <div style={{ fontSize:'24px',fontWeight:'800',color:'#1E3A5F' }}>500+</div>
                    <div style={{ fontSize:'12px',color:'#64748B',fontWeight:'500' }}>Students Placed</div>
                  </div>
                </div>
              </div>
              <div className="stat-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width:'44px',height:'44px',borderRadius:'12px',background:'#F0FDFA',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'22px',color:'#2EC4B6' }}>★</div>
                  <div>
                    <div style={{ fontSize:'24px',fontWeight:'800',color:'#1E3A5F' }}>50+</div>
                    <div style={{ fontSize:'12px',color:'#64748B',fontWeight:'500' }}>Universities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════
              RIGHT — 100% identical to original
          ══════════════════════════════ */}
          <div className="hero-image-container" style={{ position: 'relative', height: '600px' }}>

            {/* Main Orange Circle */}
            <div className="main-circle" style={{
              position:'absolute', top:'50%', left:'50%',
              transform:'translate(-50%, -50%)',
              width:'450px', height:'550px',
              borderRadius:'50%', background:'#FF6B35', zIndex:1,
            }} />

            {/* Teal Circle */}
            <div className="teal-circle floating-slow floating-delay-1" style={{
              position:'absolute', bottom:'5%', left:'5%',
              width:'120px', height:'120px',
              borderRadius:'50%', background:'#2EC4B6', zIndex:0,
            }} />

            {/* Navy Circle */}
            <div className="navy-circle floating floating-delay-2" style={{
              position:'absolute', top:'10%', right:'10%',
              width:'60px', height:'60px',
              borderRadius:'50%', background:'#1E3A5F', zIndex:0,
            }} />

            {/* Student Image */}
            <div className="student-image" style={{
              position:'absolute', top:'50%', left:'50%',
              transform:'translate(-50%, -50%)',
              zIndex:2, width:'500px', height:'500px',
            }}>
              <img
                src="/student3.png"
                alt="Student"
                style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', borderRadius:'0 0 200px 200px' }}
              />
            </div>

            {/* Floating Badge 1 — from DB */}
            {floatingCountries.length >= 1 && (
              <button
                onClick={() => navigateToCountry(floatingCountries[0].slug)}
                className="badge floating-badge country-badge-btn floating floating-delay-1"
                style={{ position:'absolute', top:'15%', left:'0%', zIndex:3, background:'#1E3A5F', color:'white' }}
                aria-label={`Study in ${floatingCountries[0].name}`}
              >
                <div style={{ width:'32px',height:'32px',borderRadius:'8px',background:'rgba(255,255,255,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px',fontWeight:'700' }}>
                  {floatingCountries[0].flag}
                </div>
                <div>
                  <div style={{ fontWeight:'700', fontSize:'13px' }}>{floatingCountries[0].name}</div>
                  <div style={{ fontSize:'11px', opacity:0.8 }}>{floatingCountries[0].stats?.totalUniversities || '10'}+ Unis</div>
                </div>
              </button>
            )}

            {/* Floating Badge 2 — from DB */}
            {floatingCountries.length >= 2 && (
              <button
                onClick={() => navigateToCountry(floatingCountries[1].slug)}
                className="badge floating-badge country-badge-btn floating floating-delay-2"
                style={{ position:'absolute', top:'35%', right:'-5%', zIndex:3, background:'#1E3A5F', color:'white' }}
                aria-label={`Study in ${floatingCountries[1].name}`}
              >
                <div style={{ width:'32px',height:'32px',borderRadius:'8px',background:'rgba(255,255,255,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px',fontWeight:'700' }}>
                  {floatingCountries[1].flag}
                </div>
                <div>
                  <div style={{ fontWeight:'700', fontSize:'13px' }}>{floatingCountries[1].name}</div>
                  <div style={{ fontSize:'11px', opacity:0.8 }}>{floatingCountries[1].stats?.totalUniversities || '10'}+ Unis</div>
                </div>
              </button>
            )}

            {/* Static 98% badge */}
            <div
              className="badge floating-badge floating floating-delay-3"
              style={{ position:'absolute', bottom:'20%', right:'0%', zIndex:3 }}
            >
              <div style={{ width:'36px',height:'36px',borderRadius:'50%',background:'#ECFDF5',display:'flex',alignItems:'center',justifyContent:'center',color:'#10B981',fontWeight:'700' }}>✓</div>
              <div>
                <div style={{ fontWeight:'700', color:'#1E3A5F' }}>98% Success</div>
                <div style={{ fontSize:'12px', color:'#64748B' }}>Visa Approval</div>
              </div>
            </div>

            {/* Floating Badge 3 — from DB */}
            {floatingCountries.length >= 3 && (
              <button
                onClick={() => navigateToCountry(floatingCountries[2].slug)}
                className="badge floating-badge country-badge-btn floating-slow floating-delay-4"
                style={{ position:'absolute', bottom:'8%', left:'10%', zIndex:3, background:'#1E3A5F', color:'white' }}
                aria-label={`Study in ${floatingCountries[2].name}`}
              >
                <div style={{ width:'32px',height:'32px',borderRadius:'50%',background:'rgba(255,255,255,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px' }}>
                  {floatingCountries[2].flag}
                </div>
                <div>
                  <div style={{ fontWeight:'700', fontSize:'13px' }}>{floatingCountries[2].name}</div>
                  <div style={{ fontSize:'11px', opacity:0.8 }}>{floatingCountries[2].stats?.totalUniversities || '10'}+ Unis</div>
                </div>
              </button>
            )}
          </div>

        </div>
      </section>

      {/* Angled Divider — identical to original */}
      <div style={{
        position:'absolute', bottom:0, left:0, right:0, height:'80px',
        background:'#1E3A5F',
        clipPath:'polygon(0 100%, 100% 100%, 100% 0, 0 100%)',
      }} />
    </div>
  );
}