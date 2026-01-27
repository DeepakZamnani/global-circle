// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { comprehensiveCountryData } from '../data/countryData';
// import { getUniversitiesByCountry } from '../data/universityData';
// import Navbar from './Navbar';
// import Footer from './Footer';

// // ============================================
// // COUNTRY PAGE - Professional Luxury Design
// // No emojis, clean boxes, backdrop images, tabs
// // ============================================

// interface CountryPageProps {
//   countrySlug: string;
// }

// export default function CountryPage({ countrySlug }: CountryPageProps) {
//   const country = comprehensiveCountryData[countrySlug];
//   const universities = getUniversitiesByCountry(countrySlug);
//   const [activeTab, setActiveTab] = useState<'about' | 'universities'>('about');

//   if (!country) {
//     return <div>Country not found</div>;
//   }

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: '#FFFFFF',
//       fontFamily: '"Plus Jakarta Sans", sans-serif',
//     }}>
//       <Navbar />
      
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

//         * {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//         }

//         /* Professional Card Styles */
//         .pro-card {
//           background: white;
//           border: 1px solid #E2E8F0;
//           padding: 28px;
//           transition: all 0.3s ease;
//         }

//         .pro-card:hover {
//           border-color: #CBD5E1;
//           box-shadow: 0 20px 40px rgba(0,0,0,0.06);
//         }

//         .pro-card-elevated {
//           background: white;
//           border: 1px solid #E2E8F0;
//           padding: 32px;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.04);
//           transition: all 0.3s ease;
//         }

//         .pro-card-elevated:hover {
//           box-shadow: 0 12px 24px rgba(0,0,0,0.08);
//         }

//         /* Tab System */
//         .tab-bar {
//           position: sticky;
//           top: 80px;
//           background: rgba(255, 255, 255, 0.98);
//           backdrop-filter: blur(20px);
//           border-bottom: 1px solid #E2E8F0;
//           z-index: 40;
//         }

//         .tab-container {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 20px;
//           display: flex;
//           gap: 0;
//         }

//         .tab-button {
//           flex: 1;
//           max-width: 280px;
//           padding: 20px 32px;
//           background: transparent;
//           border: none;
//           border-bottom: 3px solid transparent;
//           font-size: 15px;
//           font-weight: 700;
//           color: #64748B;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           letter-spacing: 0.3px;
//         }

//         .tab-button.active {
//           color: #1E3A5F;
//           border-bottom-color: #FF6B35;
//         }

//         .tab-button:hover:not(.active) {
//           color: #1E3A5F;
//           background: #F8FAFC;
//         }

//         /* Number Badge */
//         .number-badge {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           min-width: 40px;
//           height: 40px;
//           background: #1E3A5F;
//           color: white;
//           font-weight: 800;
//           font-size: 14px;
//         }

//         /* Stats Box */
//         .stat-box {
//           background: white;
//           border: 1px solid #E2E8F0;
//           padding: 28px 24px;
//           text-align: center;
//           transition: all 0.3s ease;
//         }

//         .stat-box:hover {
//           border-color: #FF6B35;
//           transform: translateY(-4px);
//           box-shadow: 0 12px 24px rgba(0,0,0,0.08);
//         }

//         /* Info Grid Item */
//         .info-grid-item {
//           background: white;
//           border: 1px solid #E2E8F0;
//           padding: 24px;
//           transition: all 0.3s ease;
//         }

//         .info-grid-item:hover {
//           border-color: #CBD5E1;
//           background: #FAFBFC;
//         }

//         /* University Card */
//         .university-card {
//           background: white;
//           border: 1px solid #E2E8F0;
//           padding: 28px;
//           transition: all 0.3s ease;
//           position: relative;
//         }

//         .university-card:hover {
//           border-color: #FF6B35;
//           box-shadow: 0 16px 32px rgba(0,0,0,0.08);
//         }

//         /* Label */
//         .section-label {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           margin-bottom: 16px;
//         }

//         .section-label-line {
//           width: 32px;
//           height: 2px;
//           background: #FF6B35;
//         }

//         .section-label-text {
//           font-size: 11px;
//           font-weight: 700;
//           color: #64748B;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//         }

//         /* Responsive */
//         @media (min-width: 768px) {
//           .tab-button {
//             padding: 24px 40px;
//             font-size: 16px;
//           }

//           .pro-card {
//             padding: 36px;
//           }

//           .stat-box {
//             padding: 36px 28px;
//           }
//         }

//         @media (min-width: 1024px) {
//           .pro-card {
//             padding: 40px;
//           }

//           .stat-box {
//             padding: 40px 32px;
//           }
//         }
//       `}</style>

//       {/* Hero Section with Backdrop */}
//       <section style={{
//         position: 'relative',
//         minHeight: '100vh',
//         overflow: 'hidden'
//       }}>
//         {/* Background Image */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url(${country.heroImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }} />
        
//         {/* Dark Overlay */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.75) 100%)'
//         }} />

//         {/* Hero Content */}
//         <div style={{
//           position: 'relative',
//           zIndex: 2,
//           minHeight: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'flex-end',
//           padding: '100px 20px 60px',
//           maxWidth: '1400px',
//           margin: '0 auto'
//         }}>
//           {/* Back Link */}
//           <Link 
//             href="/destinations"
//             style={{
//               position: 'absolute',
//               top: '100px',
//               left: '20px',
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: '8px',
//               color: 'white',
//               textDecoration: 'none',
//               fontWeight: '600',
//               fontSize: '14px',
//               opacity: 0.9,
//               letterSpacing: '0.3px'
//             }}
//           >
//             ← Back to Destinations
//           </Link>

//           {/* Country Badge */}
//           <div style={{
//             display: 'inline-flex',
//             alignItems: 'center',
//             gap: '12px',
//             padding: '12px 24px',
//             background: 'rgba(255,255,255,0.12)',
//             backdropFilter: 'blur(12px)',
//             border: '1px solid rgba(255,255,255,0.2)',
//             marginBottom: '24px',
//             width: 'fit-content'
//           }}>
//             <span style={{ 
//               color: 'white', 
//               fontWeight: '700', 
//               fontSize: '13px',
//               letterSpacing: '1.5px',
//               textTransform: 'uppercase'
//             }}>
//               Study MBBS in {country.name}
//             </span>
//           </div>

//           {/* Title */}
//           <h1 style={{
//             fontSize: 'clamp(36px, 8vw, 72px)',
//             fontWeight: '800',
//             color: 'white',
//             letterSpacing: '-2px',
//             lineHeight: '1.1',
//             marginBottom: '20px',
//             maxWidth: '900px'
//           }}>
//             {country.overview.title}
//           </h1>

//           {/* Description */}
//           <p style={{
//             fontSize: 'clamp(16px, 2.5vw, 20px)',
//             color: 'rgba(255,255,255,0.95)',
//             lineHeight: '1.7',
//             maxWidth: '700px',
//             marginBottom: '40px',
//             fontWeight: '500'
//           }}>
//             {country.overview.description}
//           </p>

//           {/* CTAs */}
//           <div style={{ 
//             display: 'flex', 
//             flexWrap: 'wrap',
//             gap: '16px',
//             maxWidth: '600px'
//           }}>
//             <Link href="/contact" style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: '10px',
//               padding: '18px 36px',
//               background: '#FF6B35',
//               color: 'white',
//               textDecoration: 'none',
//               fontWeight: '700',
//               fontSize: '15px',
//               letterSpacing: '0.3px',
//               transition: 'all 0.3s ease',
//               border: 'none'
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = '#F7931E';
//               e.currentTarget.style.transform = 'translateY(-2px)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = '#FF6B35';
//               e.currentTarget.style.transform = 'translateY(0)';
//             }}>
//               Start Application →
//             </Link>
            
//             <button style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: '10px',
//               padding: '18px 36px',
//               background: 'rgba(255,255,255,0.12)',
//               backdropFilter: 'blur(12px)',
//               color: 'white',
//               border: '1px solid rgba(255,255,255,0.3)',
//               fontWeight: '700',
//               fontSize: '15px',
//               letterSpacing: '0.3px',
//               cursor: 'pointer',
//               transition: 'all 0.3s ease'
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
//               e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
//               e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
//             }}>
//               Download Guide
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Quick Stats */}
//       <section style={{
//         padding: '20px',
//         marginTop: '-50px',
//         position: 'relative',
//         zIndex: 3
//       }}>
//         <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
//             gap: '16px'
//           }}>
//             <div className="stat-box">
//               <div style={{ 
//                 fontSize: 'clamp(32px, 5vw, 48px)', 
//                 fontWeight: '800', 
//                 color: '#1E3A5F', 
//                 marginBottom: '8px',
//                 letterSpacing: '-1px'
//               }}>
//                 {country.stats.totalUniversities}
//               </div>
//               <div style={{ 
//                 fontSize: '12px', 
//                 color: '#64748B', 
//                 fontWeight: '700',
//                 letterSpacing: '1px',
//                 textTransform: 'uppercase'
//               }}>
//                 Universities
//               </div>
//             </div>

//             <div className="stat-box">
//               <div style={{ 
//                 fontSize: 'clamp(32px, 5vw, 48px)', 
//                 fontWeight: '800', 
//                 color: '#1E3A5F', 
//                 marginBottom: '8px',
//                 letterSpacing: '-1px'
//               }}>
//                 {country.stats.indianStudents}
//               </div>
//               <div style={{ 
//                 fontSize: '12px', 
//                 color: '#64748B', 
//                 fontWeight: '700',
//                 letterSpacing: '1px',
//                 textTransform: 'uppercase'
//               }}>
//                 Indian Students
//               </div>
//             </div>

//             <div className="stat-box">
//               <div style={{ 
//                 fontSize: 'clamp(32px, 5vw, 48px)', 
//                 fontWeight: '800', 
//                 color: '#1E3A5F', 
//                 marginBottom: '8px',
//                 letterSpacing: '-1px'
//               }}>
//                 {country.stats.programDuration}
//               </div>
//               <div style={{ 
//                 fontSize: '12px', 
//                 color: '#64748B', 
//                 fontWeight: '700',
//                 letterSpacing: '1px',
//                 textTransform: 'uppercase'
//               }}>
//                 Duration
//               </div>
//             </div>

//             <div className="stat-box">
//               <div style={{ 
//                 fontSize: 'clamp(20px, 3vw, 28px)', 
//                 fontWeight: '800', 
//                 color: '#FF6B35', 
//                 marginBottom: '8px',
//                 letterSpacing: '-0.5px'
//               }}>
//                 {country.stats.averageFees}
//               </div>
//               <div style={{ 
//                 fontSize: '12px', 
//                 color: '#64748B', 
//                 fontWeight: '700',
//                 letterSpacing: '1px',
//                 textTransform: 'uppercase'
//               }}>
//                 Average Fees
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tab Navigation */}
//       <div className="tab-bar">
//         <div className="tab-container">
//           <button
//             className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
//             onClick={() => setActiveTab('about')}
//           >
//             ABOUT {country.name.toUpperCase()}
//           </button>
//           <button
//             className={`tab-button ${activeTab === 'universities' ? 'active' : ''}`}
//             onClick={() => setActiveTab('universities')}
//           >
//             UNIVERSITIES
//           </button>
//         </div>
//       </div>

//       {/* ABOUT TAB CONTENT */}
//       {activeTab === 'about' && (
//         <div>
//           {/* Detailed Overview */}
//           <section style={{ padding: '80px 20px', background: '#FFFFFF' }}>
//             <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Overview</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(28px, 5vw, 48px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '32px',
//                 letterSpacing: '-1px',
//                 lineHeight: '1.2',
//                 maxWidth: '900px'
//               }}>
//                 Why Choose {country.name} for MBBS
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gap: '24px',
//                 maxWidth: '1000px'
//               }}>
//                 {country.overview.detailedDescription.map((para, idx) => (
//                   <p key={idx} style={{
//                     fontSize: '17px',
//                     color: '#475569',
//                     lineHeight: '1.8',
//                     fontWeight: '500'
//                   }}>
//                     {para}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Key Advantages */}
//           <section style={{ padding: '80px 20px', background: '#F8FAFC' }}>
//             <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Advantages</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(28px, 5vw, 42px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px'
//               }}>
//                 {country.whyStudyHere.title}
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//                 gap: '20px'
//               }}>
//                 {country.whyStudyHere.points.slice(0, 12).map((point, idx) => (
//                   <div key={idx} className="info-grid-item">
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'flex-start',
//                       gap: '16px'
//                     }}>
//                       <div className="number-badge">
//                         {String(idx + 1).padStart(2, '0')}
//                       </div>
//                       <p style={{
//                         fontSize: '15px',
//                         color: '#1E3A5F',
//                         fontWeight: '600',
//                         lineHeight: '1.6',
//                         flex: 1
//                       }}>
//                         {point}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Top Universities Preview */}
//           <section style={{ padding: '80px 20px', background: '#FFFFFF' }}>
//             <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Top Universities</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(28px, 5vw, 42px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '16px',
//                 letterSpacing: '-1px'
//               }}>
//                 NMC Approved Medical Universities
//               </h2>

//               <p style={{
//                 fontSize: '17px',
//                 color: '#64748B',
//                 marginBottom: '48px',
//                 fontWeight: '500',
//                 maxWidth: '700px'
//               }}>
//                 Explore {country.topUniversities.length} internationally recognized medical universities
//               </p>

//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//                 gap: '16px'
//               }}>
//                 {country.topUniversities.slice(0, 8).map((uni, idx) => (
//                   <div key={idx} style={{
//                     background: '#F8FAFC',
//                     border: '1px solid #E2E8F0',
//                     padding: '20px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '16px',
//                     transition: 'all 0.3s ease'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = 'white';
//                     e.currentTarget.style.borderColor = '#FF6B35';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = '#F8FAFC';
//                     e.currentTarget.style.borderColor = '#E2E8F0';
//                   }}>
//                     <div className="number-badge">
//                       {String(uni.rank).padStart(2, '0')}
//                     </div>
//                     <div style={{ flex: 1 }}>
//                       <div style={{
//                         fontSize: '15px',
//                         fontWeight: '700',
//                         color: '#1E3A5F',
//                         marginBottom: '4px',
//                         lineHeight: '1.4'
//                       }}>
//                         {uni.name}
//                       </div>
//                       <div style={{
//                         fontSize: '13px',
//                         color: '#64748B',
//                         fontWeight: '600'
//                       }}>
//                         {uni.city} • Est. {uni.established}
//                       </div>
//                     </div>
//                     {uni.nmcApproved && (
//                       <div style={{
//                         padding: '4px 12px',
//                         background: '#10B981',
//                         color: 'white',
//                         fontSize: '11px',
//                         fontWeight: '700',
//                         letterSpacing: '0.5px'
//                       }}>
//                         NMC
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               <div style={{ marginTop: '48px', textAlign: 'center' }}>
//                 <button
//                   onClick={() => setActiveTab('universities')}
//                   style={{
//                     padding: '18px 40px',
//                     background: '#1E3A5F',
//                     color: 'white',
//                     border: 'none',
//                     fontSize: '15px',
//                     fontWeight: '700',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s ease',
//                     letterSpacing: '0.3px'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = '#0F2744';
//                     e.currentTarget.style.transform = 'translateY(-2px)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = '#1E3A5F';
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   }}
//                 >
//                   View All {country.topUniversities.length} Universities →
//                 </button>
//               </div>
//             </div>
//           </section>

//           {/* Cost Breakdown */}
//           <section style={{ padding: '80px 20px', background: '#F8FAFC' }}>
//             <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Cost Breakdown</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(28px, 5vw, 42px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px'
//               }}>
//                 Investment Required
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//                 gap: '20px',
//                 marginBottom: '32px'
//               }}>
//                 <div className="pro-card">
//                   <div style={{
//                     fontSize: '12px',
//                     color: '#64748B',
//                     fontWeight: '700',
//                     marginBottom: '12px',
//                     letterSpacing: '1px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Tuition Fees
//                   </div>
//                   <div style={{
//                     fontSize: 'clamp(20px, 3vw, 28px)',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     marginBottom: '4px',
//                     letterSpacing: '-0.5px'
//                   }}>
//                     {country.costs.tuitionFeeRange}
//                   </div>
//                   <div style={{
//                     fontSize: '13px',
//                     color: '#64748B',
//                     fontWeight: '600'
//                   }}>
//                     Per year
//                   </div>
//                 </div>

//                 <div className="pro-card">
//                   <div style={{
//                     fontSize: '12px',
//                     color: '#64748B',
//                     fontWeight: '700',
//                     marginBottom: '12px',
//                     letterSpacing: '1px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Accommodation
//                   </div>
//                   <div style={{
//                     fontSize: 'clamp(20px, 3vw, 28px)',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     marginBottom: '4px',
//                     letterSpacing: '-0.5px'
//                   }}>
//                     {country.costs.hostelFees}
//                   </div>
//                   <div style={{
//                     fontSize: '13px',
//                     color: '#64748B',
//                     fontWeight: '600'
//                   }}>
//                     Per year
//                   </div>
//                 </div>

//                 <div className="pro-card">
//                   <div style={{
//                     fontSize: '12px',
//                     color: '#64748B',
//                     fontWeight: '700',
//                     marginBottom: '12px',
//                     letterSpacing: '1px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Food & Living
//                   </div>
//                   <div style={{
//                     fontSize: 'clamp(20px, 3vw, 28px)',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     marginBottom: '4px',
//                     letterSpacing: '-0.5px'
//                   }}>
//                     {country.costs.foodExpenses}
//                   </div>
//                   <div style={{
//                     fontSize: '13px',
//                     color: '#64748B',
//                     fontWeight: '600'
//                   }}>
//                     Per month
//                   </div>
//                 </div>

//                 <div style={{
//                   background: '#1E3A5F',
//                   padding: '28px',
//                   border: '1px solid #1E3A5F'
//                 }}>
//                   <div style={{
//                     fontSize: '12px',
//                     color: 'rgba(255,255,255,0.8)',
//                     fontWeight: '700',
//                     marginBottom: '12px',
//                     letterSpacing: '1px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Total First Year
//                   </div>
//                   <div style={{
//                     fontSize: 'clamp(22px, 3vw, 32px)',
//                     fontWeight: '800',
//                     color: 'white',
//                     marginBottom: '4px',
//                     letterSpacing: '-0.5px'
//                   }}>
//                     {country.costs.totalFirstYear}
//                   </div>
//                   <div style={{
//                     fontSize: '13px',
//                     color: 'rgba(255,255,255,0.8)',
//                     fontWeight: '600'
//                   }}>
//                     All inclusive
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Eligibility */}
//           <section style={{ padding: '80px 20px', background: '#FFFFFF' }}>
//             <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Requirements</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(28px, 5vw, 42px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px'
//               }}>
//                 Eligibility Criteria
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//                 gap: '20px',
//                 marginBottom: '48px'
//               }}>
//                 <div className="pro-card-elevated">
//                   <div style={{
//                     fontSize: '13px',
//                     color: '#64748B',
//                     fontWeight: '600',
//                     marginBottom: '12px',
//                     textTransform: 'uppercase',
//                     letterSpacing: '1px'
//                   }}>
//                     NEET Requirement
//                   </div>
//                   <div style={{
//                     fontSize: '18px',
//                     fontWeight: '700',
//                     color: '#1E3A5F',
//                     lineHeight: '1.5'
//                   }}>
//                     {country.eligibility.neetRequirement}
//                   </div>
//                 </div>

//                 <div className="pro-card-elevated">
//                   <div style={{
//                     fontSize: '13px',
//                     color: '#64748B',
//                     fontWeight: '600',
//                     marginBottom: '12px',
//                     textTransform: 'uppercase',
//                     letterSpacing: '1px'
//                   }}>
//                     Academic Percentage
//                   </div>
//                   <div style={{
//                     fontSize: '18px',
//                     fontWeight: '700',
//                     color: '#1E3A5F',
//                     lineHeight: '1.5'
//                   }}>
//                     {country.eligibility.academicRequirement}
//                   </div>
//                 </div>

//                 <div className="pro-card-elevated">
//                   <div style={{
//                     fontSize: '13px',
//                     color: '#64748B',
//                     fontWeight: '600',
//                     marginBottom: '12px',
//                     textTransform: 'uppercase',
//                     letterSpacing: '1px'
//                   }}>
//                     Age Limit
//                   </div>
//                   <div style={{
//                     fontSize: '18px',
//                     fontWeight: '700',
//                     color: '#1E3A5F',
//                     lineHeight: '1.5'
//                   }}>
//                     {country.eligibility.ageLimit}
//                   </div>
//                 </div>
//               </div>

//               <div className="pro-card" style={{ marginTop: '32px' }}>
//                 <h3 style={{
//                   fontSize: '20px',
//                   fontWeight: '700',
//                   color: '#1E3A5F',
//                   marginBottom: '24px',
//                   letterSpacing: '-0.3px'
//                 }}>
//                   Required Documents
//                 </h3>
//                 <div style={{
//                   display: 'grid',
//                   gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//                   gap: '16px'
//                 }}>
//                   {country.eligibility.documents.map((doc, idx) => (
//                     <div key={idx} style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '12px',
//                       padding: '12px 16px',
//                       background: '#F8FAFC',
//                       border: '1px solid #E2E8F0'
//                     }}>
//                       <div style={{
//                         width: '6px',
//                         height: '6px',
//                         background: '#FF6B35',
//                         flexShrink: 0
//                       }} />
//                       <span style={{
//                         fontSize: '14px',
//                         color: '#1E3A5F',
//                         fontWeight: '600',
//                         lineHeight: '1.5'
//                       }}>
//                         {doc}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Living Information */}
//           <section style={{ padding: '80px 20px', background: '#F8FAFC' }}>
//             <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Living in {country.name}</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(28px, 5vw, 42px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px'
//               }}>
//                 Student Life & Environment
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
//                 gap: '16px'
//               }}>
//                 {[
//                   { label: 'Climate', value: country.livingInfo.climate },
//                   { label: 'Language', value: country.livingInfo.language },
//                   { label: 'Currency', value: country.livingInfo.currency },
//                   { label: 'Time Zone', value: country.livingInfo.timeZone },
//                   { label: 'Indian Community', value: country.livingInfo.indianCommunity },
//                   { label: 'Safety Rating', value: country.livingInfo.safetyRating },
//                   { label: 'Indian Food', value: country.livingInfo.foodAvailability }
//                 ].map((info, idx) => (
//                   <div key={idx} className="info-grid-item">
//                     <div style={{
//                       fontSize: '11px',
//                       color: '#64748B',
//                       fontWeight: '700',
//                       marginBottom: '10px',
//                       letterSpacing: '1px',
//                       textTransform: 'uppercase'
//                     }}>
//                       {info.label}
//                     </div>
//                     <div style={{
//                       fontSize: '15px',
//                       fontWeight: '700',
//                       color: '#1E3A5F',
//                       lineHeight: '1.5'
//                     }}>
//                       {info.value}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Recognition */}
//           <section style={{ padding: '80px 20px', background: '#FFFFFF' }}>
//             <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Accreditation</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(28px, 5vw, 42px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '24px',
//                 letterSpacing: '-1px'
//               }}>
//                 Global Recognition
//               </h2>

//               <p style={{
//                 fontSize: '17px',
//                 color: '#64748B',
//                 marginBottom: '48px',
//                 fontWeight: '500',
//                 maxWidth: '800px'
//               }}>
//                 Medical degrees from {country.name} are recognized by major international medical councils and organizations
//               </p>

//               <div style={{
//                 display: 'flex',
//                 flexWrap: 'wrap',
//                 gap: '16px'
//               }}>
//                 {country.recognitions.map((recognition, idx) => (
//                   <div key={idx} style={{
//                     padding: '16px 28px',
//                     background: 'white',
//                     border: '2px solid #E2E8F0',
//                     fontSize: '15px',
//                     fontWeight: '700',
//                     color: '#1E3A5F',
//                     letterSpacing: '0.3px'
//                   }}>
//                     {recognition}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </div>
//       )}

//       {/* UNIVERSITIES TAB CONTENT */}
//       {activeTab === 'universities' && (
//         <section style={{ padding: '80px 20px', background: '#FAFBFC', minHeight: '60vh' }}>
//           <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//             <div style={{ marginBottom: '64px' }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Medical Universities</span>
//               </div>
              
//               <h2 style={{
//                 fontSize: 'clamp(32px, 6vw, 56px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '16px',
//                 letterSpacing: '-1.5px'
//               }}>
//                 NMC Approved Universities
//               </h2>
              
//               <p style={{
//                 fontSize: '18px',
//                 color: '#64748B',
//                 fontWeight: '500',
//                 maxWidth: '700px'
//               }}>
//                 Explore {universities.length > 0 ? universities.length : country.topUniversities.length} internationally recognized medical institutions in {country.name}
//               </p>
//             </div>

//             {universities.length > 0 ? (
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
//                 gap: '24px'
//               }}>
//                 {universities.map((uni, idx) => (
//                   <div key={uni.id} className="university-card">
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'flex-start',
//                       gap: '16px',
//                       marginBottom: '20px'
//                     }}>
//                       <div className="number-badge" style={{ minWidth: '48px', height: '48px', fontSize: '16px' }}>
//                         {String(idx + 1).padStart(2, '0')}
//                       </div>
//                       <div style={{ flex: 1 }}>
//                         <h3 style={{
//                           fontSize: '19px',
//                           fontWeight: '800',
//                           color: '#1E3A5F',
//                           marginBottom: '8px',
//                           lineHeight: '1.3',
//                           letterSpacing: '-0.3px'
//                         }}>
//                           {uni.name}
//                         </h3>
//                         <div style={{
//                           fontSize: '13px',
//                           color: '#64748B',
//                           fontWeight: '600',
//                           marginBottom: '12px'
//                         }}>
//                           {uni.city} • Established {uni.establishedYear}
//                         </div>
//                       </div>
//                       {uni.nmcApproved && (
//                         <div style={{
//                           padding: '6px 14px',
//                           background: '#10B981',
//                           color: 'white',
//                           fontSize: '11px',
//                           fontWeight: '700',
//                           letterSpacing: '0.5px'
//                         }}>
//                           NMC
//                         </div>
//                       )}
//                     </div>

//                     <p style={{
//                       fontSize: '14px',
//                       color: '#475569',
//                       lineHeight: '1.6',
//                       marginBottom: '20px',
//                       fontWeight: '500'
//                     }}>
//                       {uni.overview.substring(0, 180)}...
//                     </p>

//                     <div style={{
//                       display: 'grid',
//                       gridTemplateColumns: '1fr 1fr',
//                       gap: '12px',
//                       marginBottom: '20px'
//                     }}>
//                       <div style={{
//                         padding: '16px',
//                         background: '#F8FAFC',
//                         border: '1px solid #E2E8F0'
//                       }}>
//                         <div style={{
//                           fontSize: '11px',
//                           color: '#64748B',
//                           fontWeight: '700',
//                           marginBottom: '6px',
//                           letterSpacing: '0.5px',
//                           textTransform: 'uppercase'
//                         }}>
//                           Tuition/Year
//                         </div>
//                         <div style={{
//                           fontSize: '15px',
//                           fontWeight: '800',
//                           color: '#1E3A5F',
//                           letterSpacing: '-0.3px'
//                         }}>
//                           {uni.fees.tuitionPerYear.split('(')[0].trim()}
//                         </div>
//                       </div>
//                       <div style={{
//                         padding: '16px',
//                         background: '#F8FAFC',
//                         border: '1px solid #E2E8F0'
//                       }}>
//                         <div style={{
//                           fontSize: '11px',
//                           color: '#64748B',
//                           fontWeight: '700',
//                           marginBottom: '6px',
//                           letterSpacing: '0.5px',
//                           textTransform: 'uppercase'
//                         }}>
//                           Duration
//                         </div>
//                         <div style={{
//                           fontSize: '15px',
//                           fontWeight: '800',
//                           color: '#1E3A5F',
//                           letterSpacing: '-0.3px'
//                         }}>
//                           {uni.programs[0].duration}
//                         </div>
//                       </div>
//                     </div>

//                     <button style={{
//                       width: '100%',
//                       padding: '16px',
//                       background: '#1E3A5F',
//                       color: 'white',
//                       border: 'none',
//                       fontSize: '14px',
//                       fontWeight: '700',
//                       cursor: 'pointer',
//                       transition: 'all 0.3s ease',
//                       letterSpacing: '0.3px'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.background = '#FF6B35';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.background = '#1E3A5F';
//                     }}>
//                       View University Details →
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="pro-card-elevated" style={{
//                 textAlign: 'center',
//                 padding: '80px 40px',
//                 maxWidth: '600px',
//                 margin: '0 auto'
//               }}>
//                 <h3 style={{
//                   fontSize: '24px',
//                   fontWeight: '800',
//                   color: '#1E3A5F',
//                   marginBottom: '12px',
//                   letterSpacing: '-0.5px'
//                 }}>
//                   Detailed University Information Coming Soon
//                 </h3>
//                 <p style={{
//                   fontSize: '16px',
//                   color: '#64748B',
//                   fontWeight: '500',
//                   lineHeight: '1.6'
//                 }}>
//                   We are currently compiling comprehensive details for all {country.topUniversities.length} universities in {country.name}. Please check the About section for university names.
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>
//       )}

//       {/* CTA Section */}
//       <section style={{
//         position: 'relative',
//         padding: '120px 20px',
//         overflow: 'hidden'
//       }}>
//         {/* Background Image */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url(${country.galleryImages[0]})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }} />
        
//         {/* Dark Overlay */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'linear-gradient(135deg, rgba(30,58,95,0.95) 0%, rgba(15,39,68,0.95) 100%)'
//         }} />

//         <div style={{
//           position: 'relative',
//           zIndex: 2,
//           maxWidth: '800px',
//           margin: '0 auto',
//           textAlign: 'center'
//         }}>
//           <h2 style={{
//             fontSize: 'clamp(32px, 6vw, 56px)',
//             fontWeight: '800',
//             color: 'white',
//             marginBottom: '20px',
//             letterSpacing: '-1.5px',
//             lineHeight: '1.2'
//           }}>
//             Begin Your Medical Journey
//           </h2>
          
//           <p style={{
//             fontSize: '18px',
//             color: 'rgba(255,255,255,0.9)',
//             marginBottom: '48px',
//             lineHeight: '1.7',
//             fontWeight: '500',
//             maxWidth: '600px',
//             margin: '0 auto 48px'
//           }}>
//             Schedule a consultation with our expert counselors for personalized guidance on studying MBBS in {country.name}
//           </p>

//           <div style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '16px',
//             maxWidth: '500px',
//             margin: '0 auto'
//           }}>
//             <Link href="/contact" style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               gap: '12px',
//               padding: '20px 40px',
//               background: '#FF6B35',
//               color: 'white',
//               textDecoration: 'none',
//               fontWeight: '700',
//               fontSize: '16px',
//               letterSpacing: '0.3px',
//               transition: 'all 0.3s ease'
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = '#F7931E';
//               e.currentTarget.style.transform = 'translateY(-2px)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = '#FF6B35';
//               e.currentTarget.style.transform = 'translateY(0)';
//             }}>
//               Schedule Free Consultation →
//             </Link>

//             <Link href="/destinations" style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               gap: '12px',
//               padding: '20px 40px',
//               background: 'transparent',
//               color: 'white',
//               border: '1px solid rgba(255,255,255,0.3)',
//               textDecoration: 'none',
//               fontWeight: '700',
//               fontSize: '16px',
//               letterSpacing: '0.3px',
//               transition: 'all 0.3s ease'
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.borderColor = 'white';
//               e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
//               e.currentTarget.style.background = 'transparent';
//             }}>
//               Explore Other Destinations
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { comprehensiveCountryData } from '../data/countryData';
import { getUniversitiesByCountry } from '../data/universityData';
import Navbar from './Navbar';
import Footer from './Footer';
import ApplicationModal from './AppliactionModal';
import PromoAd from './PromoAd';
import { Shield } from 'lucide-react';

// ============================================
// COUNTRY PAGE - Professional with Curves + Boxes Balance
// 1:1 ratio of curves to sharp boxes - Sexy modern design
// With Application Modal Integration
// ============================================

interface CountryPageProps {
  countrySlug: string;
}

export default function CountryPage({ countrySlug }: CountryPageProps) {
  const country = comprehensiveCountryData[countrySlug];
  const universities = getUniversitiesByCountry(countrySlug);
  const [activeTab, setActiveTab] = useState<'about' | 'universities'>('about');
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FFFFFF',
      fontFamily: '"Plus Jakarta Sans", sans-serif',
    }}>
      <Navbar />
      
      {/* Application Modal */}
      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
        countryCode={countrySlug}
        countryName={country.name}
      />
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* CURVED ELEMENTS */
        .curved-card {
          background: white;
          border: 2px solid #E2E8F0;
          border-radius: 20px;
          padding: 28px;
          transition: all 0.3s ease;
        }

        .curved-card:hover {
          border-color: #FF6B35;
          box-shadow: 0 16px 32px rgba(0,0,0,0.08);
        }

        .pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: white;
          border: 2px solid #E2E8F0;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          color: #1E3A5F;
          transition: all 0.3s ease;
        }

        .pill-badge:hover {
          border-color: #FF6B35;
          background: #FFF7ED;
        }

        /* SHARP BOX ELEMENTS */
        .sharp-card {
          background: white;
          border: 1px solid #E2E8F0;
          padding: 28px;
          transition: all 0.3s ease;
        }

        .sharp-card:hover {
          border-color: #CBD5E1;
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
        }

        .sharp-badge {
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          background: #10B981;
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        /* Tab System - SHARP */
        .tab-bar {
          position: sticky;
          top: 80px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid #E2E8F0;
          z-index: 40;
        }

        .tab-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          gap: 0;
        }

        .tab-button {
          flex: 1;
          max-width: 280px;
          padding: 20px 32px;
          background: transparent;
          border: none;
          border-bottom: 3px solid transparent;
          font-size: 15px;
          font-weight: 700;
          color: #64748B;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.3px;
        }

        .tab-button.active {
          color: #1E3A5F;
          border-bottom-color: #FF6B35;
        }

        .tab-button:hover:not(.active) {
          color: #1E3A5F;
          background: #F8FAFC;
        }

        /* Number Badge - SHARP */
        .number-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 40px;
          height: 40px;
          background: #1E3A5F;
          color: white;
          font-weight: 800;
          font-size: 14px;
        }

        /* Stats Box - CURVED */
        .stat-box-curved {
          background: white;
          border: 2px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-box-curved:hover {
          border-color: #FF6B35;
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.08);
        }

        /* Info Grid Item - mix of curves and sharp */
        .info-grid-curved {
          background: white;
          border: 2px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .info-grid-curved:hover {
          border-color: #FF6B35;
          background: #FAFBFC;
        }

        .info-grid-sharp {
          background: white;
          border: 1px solid #E2E8F0;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .info-grid-sharp:hover {
          border-color: #CBD5E1;
          background: #FAFBFC;
        }

        /* University Card - CURVED */
        .university-card-curved {
          background: white;
          border: 2px solid #E2E8F0;
          border-radius: 20px;
          padding: 28px;
          transition: all 0.3s ease;
          position: relative;
        }

        .university-card-curved:hover {
          border-color: #FF6B35;
          box-shadow: 0 16px 32px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }

        /* Section Label */
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .section-label-line {
          width: 32px;
          height: 2px;
          background: #FF6B35;
        }

        .section-label-text {
          font-size: 11px;
          font-weight: 700;
          color: #64748B;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* Button - CURVED */
        .btn-curved {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          background: #FF6B35;
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.3px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-curved:hover {
          background: #F7931E;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(255,107,53,0.3);
        }

        /* Button - SHARP */
        .btn-sharp {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          background: #1E3A5F;
          color: white;
          border: none;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.3px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-sharp:hover {
          background: #0F2744;
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (min-width: 768px) {
          .tab-button {
            padding: 24px 40px;
            font-size: 16px;
          }

          .curved-card {
            padding: 36px;
          }

          .sharp-card {
            padding: 36px;
          }

          .stat-box-curved {
            padding: 36px 28px;
          }
        }

        @media (min-width: 1024px) {
          .curved-card {
            padding: 40px;
          }

          .sharp-card {
            padding: 40px;
          }

          .stat-box-curved {
            padding: 40px 32px;
          }
        }

        @media (max-width: 768px) {
          .tab-container {
            overflow-x: auto;
          }

          .tab-button {
            min-width: 150px;
          }
        }
      `}</style>

      {/* Hero Section with Backdrop */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${country.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.75) 100%)'
        }} />

        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '100px 20px 60px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {/* Back Link */}
          <Link 
            href="/destinations"
            style={{
              position: 'absolute',
              top: '100px',
              left: '20px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '14px',
              opacity: 0.9,
              letterSpacing: '0.3px'
            }}
          >
            ← Back to Destinations
          </Link>

          {/* Country Badge - CURVED PILL */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 24px',
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50px',
            marginBottom: '24px',
            width: 'fit-content'
          }}>
            <span style={{ 
              color: 'white', 
              fontWeight: '700', 
              fontSize: '13px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>
              Study  in {country.name}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(36px, 8vw, 72px)',
            fontWeight: '800',
            color: 'white',
            letterSpacing: '-2px',
            lineHeight: '1.1',
            marginBottom: '20px',
            maxWidth: '900px'
          }}>
            {country.overview.title}
          </h1>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            color: 'rgba(255,255,255,0.95)',
            lineHeight: '1.7',
            maxWidth: '700px',
            marginBottom: '40px',
            fontWeight: '500'
          }}>
            {country.overview.description}
          </p>

          {/* CTAs - Mix of curved and not */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            gap: '16px',
            maxWidth: '600px'
          }}>
            {/* APPLY NOW BUTTON - Opens Modal */}
            <button 
              onClick={() => setIsApplicationModalOpen(true)}
              className="btn-curved"
            >
              Apply Now →
            </button>
            
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 36px',
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.3)',
              fontWeight: '700',
              fontSize: '15px',
              letterSpacing: '0.3px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
            }}>
              Download Guide
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats - CURVED */}
      <section style={{
        padding: '20px',
        marginTop: '-50px',
        position: 'relative',
        zIndex: 3
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '16px'
          }}>
            <div className="stat-box-curved">
              <div style={{ 
                fontSize: 'clamp(24px, 3vw, 36px)', 
                fontWeight: '800', 
                color: '#1E3A5F', 
                marginBottom: '8px',
                letterSpacing: '-1px'
              }}>
                {country.stats.totalUniversities}
              </div>
              <div style={{ 
                fontSize: '12px', 
                color: '#64748B', 
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                Universities
              </div>
            </div>

            <div className="stat-box-curved">
              <div style={{ 
                fontSize: 'clamp(24px, 3vw, 36px)', 
                fontWeight: '800', 
                color: '#1E3A5F', 
                marginBottom: '8px',
                letterSpacing: '-1px'
              }}>
                {country.stats.indianStudents}
              </div>
              <div style={{ 
                fontSize: '12px', 
                color: '#64748B', 
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                Indian Students
              </div>
            </div>

            <div className="stat-box-curved">
              <div style={{ 
                fontSize: 'clamp(18px, 2vw, 28px)', 
                fontWeight: '800', 
                color: '#1E3A5F', 
                marginBottom: '8px',
                letterSpacing: '-1px'
              }}>
                {country.stats.programDuration}
              </div>
              <div style={{ 
                fontSize: '12px', 
                color: '#64748B', 
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                Duration
              </div>
            </div>

            <div className="stat-box-curved">
              <div style={{ 
                fontSize: 'clamp(18px, 1vw, 24px)', 
                fontWeight: '800', 
                color: '#FF6B35', 
                marginBottom: '8px',
                letterSpacing: '-0.5px'
              }}>
                {country.stats.averageFees}
              </div>
              <div style={{ 
                fontSize: '12px', 
                color: '#64748B', 
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                Average Fees
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation - SHARP */}
      <div className="tab-bar">
        <div className="tab-container">
          <button
            className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            ABOUT {country.name.toUpperCase()}
          </button>
          <button
            className={`tab-button ${activeTab === 'universities' ? 'active' : ''}`}
            onClick={() => setActiveTab('universities')}
          >
            UNIVERSITIES
          </button>
        </div>
      </div>

      {/* ABOUT TAB CONTENT */}
      {activeTab === 'about' && (
        <div>
          {/* Detailed Overview - SHARP CARD */}
          <section style={{ padding: '80px 20px', background: '#FFFFFF' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">Overview</span>
              </div>

              <h2 style={{
                fontSize: 'clamp(28px, 5vw, 48px)',
                fontWeight: '800',
                color: '#1E3A5F',
                marginBottom: '32px',
                letterSpacing: '-1px',
                lineHeight: '1.2',
                maxWidth: '900px'
              }}>
                Why Choose {country.name} 
              </h2>

              <div style={{
                display: 'grid',
                gap: '24px',
                maxWidth: '1000px'
              }}>
                {country.overview.detailedDescription.map((para, idx) => (
                  <p key={idx} style={{
                    fontSize: '17px',
                    color: '#475569',
                    lineHeight: '1.8',
                    fontWeight: '500'
                  }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Key Advantages - Mix of CURVED and SHARP */}
          <section style={{ padding: '80px 20px', background: '#F8FAFC' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">Advantages</span>
              </div>

              <h2 style={{
                fontSize: 'clamp(28px, 5vw, 42px)',
                fontWeight: '800',
                color: '#1E3A5F',
                marginBottom: '48px',
                letterSpacing: '-1px'
              }}>
                {country.whyStudyHere.title}
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {country.whyStudyHere.points.slice(0, 12).map((point, idx) => (
                  <div key={idx} className={idx % 2 === 0 ? 'info-grid-curved' : 'info-grid-sharp'}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px'
                    }}>
                      <div className="number-badge">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <p style={{
                        fontSize: '15px',
                        color: '#1E3A5F',
                        fontWeight: '600',
                        lineHeight: '1.6',
                        flex: 1
                      }}>
                        {point}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Top Universities Preview - CURVED */}
          <section style={{ padding: '80px 20px', background: '#FFFFFF' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">Top Universities</span>
              </div>

              <h2 style={{
                fontSize: 'clamp(28px, 5vw, 42px)',
                fontWeight: '800',
                color: '#1E3A5F',
                marginBottom: '16px',
                letterSpacing: '-1px'
              }}>
                 Approved Medical Universities
              </h2>

              <p style={{
                fontSize: '17px',
                color: '#64748B',
                marginBottom: '48px',
                fontWeight: '500',
                maxWidth: '700px'
              }}>
                Explore {country.topUniversities.length} internationally recognized medical universities
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '16px'
              }}>
                {country.topUniversities.slice(0, 8).map((uni, idx) => (
                  <div key={idx} className="curved-card" style={{ padding: '20px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px'
                    }}>
                      <div className="number-badge">
                        {String(uni.rank).padStart(2, '0')}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: '15px',
                          fontWeight: '700',
                          color: '#1E3A5F',
                          marginBottom: '4px',
                          lineHeight: '1.4'
                        }}>
                          {uni.name}
                        </div>
                        <div style={{
                          fontSize: '13px',
                          color: '#64748B',
                          fontWeight: '600'
                        }}>
                          {uni.city} • Est. {uni.established}
                        </div>
                      </div>
                      {uni.nmcApproved && (
                        <div className="sharp-badge">
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '48px', textAlign: 'center' }}>
                <button
                  onClick={() => setActiveTab('universities')}
                  className="btn-sharp"
                >
                  View All {country.topUniversities.length} Universities →
                </button>
              </div>
            </div>
          </section>

          {/* Cost Breakdown - Mix CURVED and SHARP */}
          <section style={{ padding: '80px 20px', background: '#F8FAFC' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">Cost Breakdown</span>
              </div>

              <h2 style={{
                fontSize: 'clamp(28px, 5vw, 42px)',
                fontWeight: '800',
                color: '#1E3A5F',
                marginBottom: '48px',
                letterSpacing: '-1px'
              }}>
                Investment Required
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                marginBottom: '32px'
              }}>
                <div className="curved-card">
                  <div style={{
                    fontSize: '12px',
                    color: '#64748B',
                    fontWeight: '700',
                    marginBottom: '12px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    Tuition Fees
                  </div>
                  <div style={{
                    fontSize: 'clamp(20px, 3vw, 28px)',
                    fontWeight: '800',
                    color: '#1E3A5F',
                    marginBottom: '4px',
                    letterSpacing: '-0.5px'
                  }}>
                    {country.costs.tuitionFeeRange}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#64748B',
                    fontWeight: '600'
                  }}>
                    Per year
                  </div>
                </div>

                <div className="sharp-card">
                  <div style={{
                    fontSize: '12px',
                    color: '#64748B',
                    fontWeight: '700',
                    marginBottom: '12px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    Accommodation
                  </div>
                  <div style={{
                    fontSize: 'clamp(20px, 3vw, 28px)',
                    fontWeight: '800',
                    color: '#1E3A5F',
                    marginBottom: '4px',
                    letterSpacing: '-0.5px'
                  }}>
                    {country.costs.hostelFees}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#64748B',
                    fontWeight: '600'
                  }}>
                    Per year
                  </div>
                </div>

                <div className="curved-card">
                  <div style={{
                    fontSize: '12px',
                    color: '#64748B',
                    fontWeight: '700',
                    marginBottom: '12px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    Food & Living
                  </div>
                  <div style={{
                    fontSize: 'clamp(20px, 3vw, 28px)',
                    fontWeight: '800',
                    color: '#1E3A5F',
                    marginBottom: '4px',
                    letterSpacing: '-0.5px'
                  }}>
                    {country.costs.foodExpenses}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#64748B',
                    fontWeight: '600'
                  }}>
                    Per month
                  </div>
                </div>

                <div className="sharp-card">
                  <div style={{
                    fontSize: '12px',
                    color: '#64748B',
                    fontWeight: '700',
                    marginBottom: '12px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    Other Expenses
                  </div>
                  <div style={{
                    fontSize: 'clamp(20px, 3vw, 28px)',
                    fontWeight: '800',
                    color: '#1E3A5F',
                    marginBottom: '4px',
                    letterSpacing: '-0.5px'
                  }}>
                    {country.costs.otherExpenses}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#64748B',
                    fontWeight: '600'
                  }}>
                    Per year
                  </div>
                </div>
              </div>

              {/* Total Cost Highlight - CURVED */}
              <div className="curved-card" style={{
                background: 'linear-gradient(135deg, #1E3A5F 0%, #0F2744 100%)',
                border: 'none',
                maxWidth: '600px'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '32px'
                }}>
                  <div>
                    <div style={{
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.7)',
                      fontWeight: '700',
                      marginBottom: '12px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      First Year Total
                    </div>
                    <div style={{
                      fontSize: 'clamp(22px, 4vw, 32px)',
                      fontWeight: '800',
                      color: 'white',
                      letterSpacing: '-0.5px'
                    }}>
                      {country.costs.totalFirstYear}
                    </div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.7)',
                      fontWeight: '700',
                      marginBottom: '12px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      Complete Course
                    </div>
                    <div style={{
                      fontSize: 'clamp(22px, 4vw, 32px)',
                      fontWeight: '800',
                      color: '#FF6B35',
                      letterSpacing: '-0.5px'
                    }}>
                      {country.costs.totalCourse}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Eligibility & Documents - SHARP cards */}
          <section style={{ padding: '80px 20px', background: '#FFFFFF' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">Requirements</span>
              </div>

              <h2 style={{
                fontSize: 'clamp(28px, 5vw, 42px)',
                fontWeight: '800',
                color: '#1E3A5F',
                marginBottom: '48px',
                letterSpacing: '-1px'
              }}>
                Eligibility & Documents
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '24px'
              }}>
                {/* Eligibility Card - SHARP */}
                <div className="sharp-card">
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '800',
                    color: '#1E3A5F',
                    marginBottom: '24px',
                    letterSpacing: '-0.3px'
                  }}>
                    Eligibility Criteria
                  </h3>
                  
                  <div style={{ display: 'grid', gap: '16px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '16px',
                      background: '#F8FAFC',
                      borderRadius: '8px'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#FF6B35',
                        borderRadius: '50%'
                      }} />
                      <span style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#1E3A5F'
                      }}>
                        {country.eligibility.neetRequirement}
                      </span>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '16px',
                      background: '#F8FAFC',
                      borderRadius: '8px'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#FF6B35',
                        borderRadius: '50%'
                      }} />
                      <span style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#1E3A5F'
                      }}>
                        {country.eligibility.academicRequirement}
                      </span>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '16px',
                      background: '#F8FAFC',
                      borderRadius: '8px'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#FF6B35',
                        borderRadius: '50%'
                      }} />
                      <span style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#1E3A5F'
                      }}>
                        Age: {country.eligibility.ageLimit}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Documents Card - CURVED */}
                <div className="curved-card">
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '800',
                    color: '#1E3A5F',
                    marginBottom: '24px',
                    letterSpacing: '-0.3px'
                  }}>
                    Required Documents
                  </h3>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px'
                  }}>
                    {country.eligibility.documents.map((doc, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px',
                        background: '#FFF7ED',
                        borderRadius: '8px'
                      }}>
                        <div style={{
                          width: '6px',
                          height: '6px',
                          background: '#FF6B35',
                          borderRadius: '50%'
                        }} />
                        <span style={{
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#1E3A5F'
                        }}>
                          {doc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visa & Intake Info */}
          <section style={{ padding: '80px 20px', background: '#F8FAFC' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">Important Information</span>
              </div>

              <h2 style={{
                fontSize: 'clamp(28px, 5vw, 42px)',
                fontWeight: '800',
                color: '#1E3A5F',
                marginBottom: '48px',
                letterSpacing: '-1px'
              }}>
                Visa & Intake Details
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                {/* Intake Info - CURVED */}
                <div className="curved-card">
                  <h4 style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#64748B',
                    marginBottom: '16px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    Main Intake
                  </h4>
                  <div style={{
                    fontSize: '28px',
                    fontWeight: '800',
                    color: '#1E3A5F',
                    marginBottom: '8px',
                    letterSpacing: '-0.5px'
                  }}>
                    {country.intakes.main}
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: '#64748B',
                    fontWeight: '600'
                  }}>
                    Application Deadline: {country.intakes.applicationDeadline}
                  </p>
                </div>

                {/* Visa Type - SHARP */}
                <div className="sharp-card">
                  <h4 style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#64748B',
                    marginBottom: '16px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    Visa Type
                  </h4>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '800',
                    color: '#1E3A5F',
                    marginBottom: '8px',
                    letterSpacing: '-0.5px'
                  }}>
                    {country.visa.type}
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: '#64748B',
                    fontWeight: '600'
                  }}>
                    Processing: {country.visa.processingTime}
                  </p>
                </div>

                {/* Visa Validity - CURVED */}
                <div className="curved-card">
                  <h4 style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#64748B',
                    marginBottom: '16px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    Visa Validity
                  </h4>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '800',
                    color: '#FF6B35',
                    marginBottom: '8px',
                    letterSpacing: '-0.5px'
                  }}>
                    {country.visa.validity}
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: '#64748B',
                    fontWeight: '600'
                  }}>
                    Renewable annually
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <PromoAd
    icon={Shield}
    title="Student Insurance Plans"
    description="Protect yourself with comprehensive health and travel insurance tailored for international students."
    buttonText="View Plans"
    buttonHref="/insurance"
    variant="default"
  /> */}
          {/* Living Info & Recognition */}
          <section style={{ padding: '80px 20px', background: '#FFFFFF' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">Student Life</span>
              </div>

              <h2 style={{
                fontSize: 'clamp(28px, 5vw, 42px)',
                fontWeight: '800',
                color: '#1E3A5F',
                marginBottom: '48px',
                letterSpacing: '-1px'
              }}>
                Living in {country.name}
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '48px'
              }}>
                {[
                  { label: 'Climate', value: country.livingInfo.climate },
                  { label: 'Language', value: country.livingInfo.language },
                  { label: 'Currency', value: country.livingInfo.currency },
                  { label: 'Time Zone', value: country.livingInfo.timeZone },
                  { label: 'Indian Community', value: country.livingInfo.indianCommunity },
                  { label: 'Safety', value: country.livingInfo.safetyRating }
                ].map((item, idx) => (
                  <div key={idx} className={idx % 2 === 0 ? 'curved-card' : 'sharp-card'} style={{ padding: '20px' }}>
                    <div style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      color: '#64748B',
                      marginBottom: '8px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#1E3A5F',
                      lineHeight: '1.4'
                    }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Recognitions */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#64748B',
                  marginRight: '8px'
                }}>
                  Recognized by:
                </span>
                {country.recognitions.map((rec, idx) => (
                  <div key={idx} className="pill-badge">
                    {rec}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* UNIVERSITIES TAB CONTENT */}
      {activeTab === 'universities' && (
        <section style={{ padding: '80px 20px', background: '#F8FAFC' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">All Universities</span>
            </div>
            
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: '800',
              color: '#1E3A5F',
              marginBottom: '16px',
              letterSpacing: '-1.5px'
            }}>
              Approved Universities
            </h2>
            
            <p style={{
              fontSize: '18px',
              color: '#64748B',
              fontWeight: '500',
              maxWidth: '700px'
            }}>
              Explore {universities.length > 0 ? universities.length : country.topUniversities.length} internationally recognized medical institutions
            </p>

            {universities.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
                gap: '24px',
                marginTop: '48px'
              }}>
                {universities.map((uni, idx) => (
                  <div key={uni.id} className="university-card-curved">
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      marginBottom: '20px'
                    }}>
                      <div className="number-badge" style={{ minWidth: '48px', height: '48px', fontSize: '16px' }}>
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          fontSize: '19px',
                          fontWeight: '800',
                          color: '#1E3A5F',
                          marginBottom: '8px',
                          lineHeight: '1.3',
                          letterSpacing: '-0.3px'
                        }}>
                          {uni.name}
                        </h3>
                        <div style={{
                          fontSize: '13px',
                          color: '#64748B',
                          fontWeight: '600',
                          marginBottom: '12px'
                        }}>
                          {uni.city} • Established {uni.establishedYear}
                        </div>
                      </div>
                      {uni.nmcApproved && (
                        <div className="sharp-badge">
                        </div>
                      )}
                    </div>

                    <p style={{
                      fontSize: '14px',
                      color: '#475569',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      fontWeight: '500'
                    }}>
                      {uni.overview.substring(0, 180)}...
                    </p>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '12px',
                      marginBottom: '20px'
                    }}>
                      <div className="curved-card" style={{ padding: '16px' }}>
                        <div style={{
                          fontSize: '11px',
                          color: '#64748B',
                          fontWeight: '700',
                          marginBottom: '6px',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase'
                        }}>
                          Tuition/Year
                        </div>
                        <div style={{
                          fontSize: '15px',
                          fontWeight: '800',
                          color: '#1E3A5F',
                          letterSpacing: '-0.3px'
                        }}>
                          {uni.fees.tuitionPerYear.split('(')[0].trim()}
                        </div>
                      </div>
                      <div className="sharp-card" style={{ padding: '16px' }}>
                        <div style={{
                          fontSize: '11px',
                          color: '#64748B',
                          fontWeight: '700',
                          marginBottom: '6px',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase'
                        }}>
                          Duration
                        </div>
                        <div style={{
                          fontSize: '15px',
                          fontWeight: '800',
                          color: '#1E3A5F',
                          letterSpacing: '-0.3px'
                        }}>
                          {uni.programs[0].duration}
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => setIsApplicationModalOpen(true)}
                      className="btn-curved" 
                      style={{ width: '100%', padding: '16px', fontSize: '14px' }}
                    >
                      Apply to This University →
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="curved-card" style={{
                textAlign: 'center',
                padding: '80px 40px',
                maxWidth: '600px',
                margin: '48px auto 0'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '800',
                  color: '#1E3A5F',
                  marginBottom: '12px',
                  letterSpacing: '-0.5px'
                }}>
                  Detailed University Information Coming Soon
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#64748B',
                  fontWeight: '500',
                  lineHeight: '1.6'
                }}>
                  We are compiling comprehensive details for all {country.topUniversities.length} universities in {country.name}.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section - Backdrop with CURVED buttons */}
      <section style={{
        position: 'relative',
        padding: '120px 20px',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${country.galleryImages[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(30,58,95,0.95) 0%, rgba(15,39,68,0.95) 100%)'
        }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(32px, 6vw, 56px)',
            fontWeight: '800',
            color: 'white',
            marginBottom: '20px',
            letterSpacing: '-1.5px',
            lineHeight: '1.2'
          }}>
            Begin Your Medical Journey
          </h2>
          
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '48px',
            lineHeight: '1.7',
            fontWeight: '500',
            maxWidth: '600px',
            margin: '0 auto 48px'
          }}>
            Schedule a consultation with our expert counselors for personalized guidance on studying  in {country.name}
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            {/* APPLY NOW - Opens Modal */}
            <button 
              onClick={() => setIsApplicationModalOpen(true)}
              className="btn-curved"
              style={{ justifyContent: 'center' }}
            >
              Apply Now →
            </button>

            <Link href="/destinations" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '20px 40px',
              background: 'transparent',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '16px',
              letterSpacing: '0.3px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'white';
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.background = 'transparent';
            }}>
              Explore Other Destinations
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { getCountryBySlug, getUniversitiesByCountry } from '../../services/dbServices';
// import type { CountryInfo, UniversityInfo } from '../../services/dbServices';
// import Navbar from './Navbar';
// import Footer from './Footer';

// // ============================================
// // COUNTRY PAGE - Firestore-Powered Version
// // Fetches country and university data from Firestore
// // ============================================

// interface CountryPageProps {
//   countrySlug: string;
// }

// export default function CountryPage({ countrySlug }: CountryPageProps) {
//   const [country, setCountry] = useState<CountryInfo | null>(null);
//   const [universities, setUniversities] = useState<UniversityInfo[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [activeTab, setActiveTab] = useState<'about' | 'universities'>('about');
//   const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

//   // Fetch country and university data from Firestore
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Fetch country data
//         const countryData = await getCountryBySlug(countrySlug);
        
//         if (!countryData) {
//           setError('Country not found');
//           setLoading(false);
//           return;
//         }

//         setCountry(countryData);

//         // Fetch universities for this country
//         const universitiesData = await getUniversitiesByCountry(countrySlug);
//         setUniversities(universitiesData);

//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         setError('Failed to load country data');
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [countrySlug]);

//   // Loading state
//   if (loading) {
//     return (
//       <div style={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         background: '#FFFFFF',
//         fontFamily: '"Plus Jakarta Sans", sans-serif'
//       }}>
//         <div style={{ textAlign: 'center' }}>
//           <div style={{
//             width: '60px',
//             height: '60px',
//             border: '4px solid #E2E8F0',
//             borderTop: '4px solid #FF6B35',
//             borderRadius: '50%',
//             animation: 'spin 1s linear infinite',
//             margin: '0 auto 20px'
//           }} />
//           <p style={{
//             fontSize: '16px',
//             color: '#64748B',
//             fontWeight: '600'
//           }}>
//             Loading country data...
//           </p>
//         </div>
//         <style>{`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}</style>
//       </div>
//     );
//   }

//   // Error state
//   if (error || !country) {
//     return (
//       <div style={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         background: '#FFFFFF',
//         fontFamily: '"Plus Jakarta Sans", sans-serif'
//       }}>
//         <div style={{
//           textAlign: 'center',
//           maxWidth: '500px',
//           padding: '40px'
//         }}>
//           <h1 style={{
//             fontSize: '48px',
//             fontWeight: '800',
//             color: '#1E3A5F',
//             marginBottom: '16px'
//           }}>
//             Country Not Found
//           </h1>
//           <p style={{
//             fontSize: '16px',
//             color: '#64748B',
//             marginBottom: '32px',
//             lineHeight: '1.6'
//           }}>
//             {error || 'The country you are looking for does not exist.'}
//           </p>
//           <Link href="/destinations" style={{
//             display: 'inline-block',
//             padding: '16px 32px',
//             background: '#FF6B35',
//             color: 'white',
//             textDecoration: 'none',
//             fontWeight: '700',
//             borderRadius: '50px'
//           }}>
//             Browse All Destinations
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: '#FFFFFF',
//       fontFamily: '"Plus Jakarta Sans", sans-serif',
//     }}>
//       <Navbar />
      
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

//         * {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//         }

//         /* Professional Card Styles */
//         .pro-card {
//           background: white;
//           border: 1px solid #E2E8F0;
//           padding: 28px;
//           transition: all 0.3s ease;
//         }

//         .pro-card:hover {
//           border-color: #CBD5E1;
//           box-shadow: 0 20px 40px rgba(0,0,0,0.06);
//         }

//         .pro-card-elevated {
//           background: white;
//           border: 1px solid #E2E8F0;
//           padding: 32px;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.04);
//           transition: all 0.3s ease;
//         }

//         .pro-card-elevated:hover {
//           box-shadow: 0 12px 24px rgba(0,0,0,0.08);
//         }

//         /* Tab System */
//         .tab-bar {
//           position: sticky;
//           top: 80px;
//           background: rgba(255, 255, 255, 0.98);
//           backdrop-filter: blur(20px);
//           border-bottom: 1px solid #E2E8F0;
//           z-index: 40;
//         }

//         .tab-container {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 20px;
//           display: flex;
//           gap: 0;
//         }

//         .tab-button {
//           flex: 1;
//           max-width: 280px;
//           padding: 20px 32px;
//           background: transparent;
//           border: none;
//           border-bottom: 3px solid transparent;
//           font-size: 15px;
//           font-weight: 700;
//           color: #64748B;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           letter-spacing: 0.3px;
//         }

//         .tab-button.active {
//           color: #1E3A5F;
//           border-bottom-color: #FF6B35;
//         }

//         .tab-button:hover:not(.active) {
//           color: #1E3A5F;
//           background: #F8FAFC;
//         }

//         /* Number Badge */
//         .number-badge {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           min-width: 40px;
//           height: 40px;
//           background: #1E3A5F;
//           color: white;
//           font-weight: 800;
//           font-size: 14px;
//         }

//         /* Stats Box */
//         .stat-box {
//           background: white;
//           border: 1px solid #E2E8F0;
//           padding: 28px 24px;
//           text-align: center;
//           transition: all 0.3s ease;
//         }

//         .stat-box:hover {
//           border-color: #FF6B35;
//           transform: translateY(-4px);
//           box-shadow: 0 12px 24px rgba(0,0,0,0.08);
//         }

//         /* Info Grid Item */
//         .info-grid-item {
//           background: white;
//           border: 1px solid #E2E8F0;
//           padding: 24px;
//           transition: all 0.3s ease;
//         }

//         .info-grid-item:hover {
//           border-color: #CBD5E1;
//           background: #FAFBFC;
//         }

//         /* University Card */
//         .university-card {
//           background: white;
//           border: 1px solid #E2E8F0;
//           padding: 28px;
//           transition: all 0.3s ease;
//           position: relative;
//         }

//         .university-card:hover {
//           border-color: #FF6B35;
//           box-shadow: 0 16px 32px rgba(0,0,0,0.08);
//         }

//         /* Curved Button */
//         .btn-curved {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           padding: 20px 40px;
//           background: #FF6B35;
//           color: white;
//           border: none;
//           border-radius: 50px;
//           font-weight: 700;
//           font-size: 16px;
//           letter-spacing: 0.3px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .btn-curved:hover {
//           background: #E55A2B;
//           transform: translateY(-2px);
//           box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
//         }

//         /* Curved Card */
//         .curved-card {
//           background: white;
//           border: 1px solid #E2E8F0;
//           border-radius: 16px;
//           padding: 32px;
//           transition: all 0.3s ease;
//         }

//         .curved-card:hover {
//           border-color: #CBD5E1;
//           box-shadow: 0 12px 24px rgba(0,0,0,0.08);
//         }

//         /* Sharp Badge */
//         .sharp-badge {
//           padding: 6px 12px;
//           background: #10B981;
//           color: white;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.5px;
//         }

//         /* Responsive */
//         @media (min-width: 768px) {
//           .tab-button {
//             padding: 24px 40px;
//             font-size: 16px;
//           }

//           .pro-card {
//             padding: 36px;
//           }

//           .stat-box {
//             padding: 36px 28px;
//           }
//         }

//         @media (min-width: 1024px) {
//           .pro-card {
//             padding: 40px;
//           }

//           .stat-box {
//             padding: 40px 32px;
//           }
//         }
//       `}</style>

//       {/* Hero Section with Backdrop */}
//       <section style={{
//         position: 'relative',
//         minHeight: '100vh',
//         overflow: 'hidden'
//       }}>
//         {/* Background Image */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url(${country.heroImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }} />
        
//         {/* Dark Overlay */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.75) 100%)'
//         }} />

//         {/* Hero Content */}
//         <div style={{
//           position: 'relative',
//           zIndex: 2,
//           minHeight: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'flex-end',
//           padding: '100px 20px 60px',
//           maxWidth: '1400px',
//           margin: '0 auto'
//         }}>
//           <div style={{
//             display: 'inline-flex',
//             alignItems: 'center',
//             gap: '12px',
//             marginBottom: '24px'
//           }}>
//             <span style={{
//               fontSize: '48px',
//               lineHeight: '1'
//             }}>
//               {country.flag}
//             </span>
//             <div style={{
//               width: '3px',
//               height: '40px',
//               background: 'rgba(255,255,255,0.4)'
//             }} />
//             <span style={{
//               fontSize: '14px',
//               fontWeight: '700',
//               color: 'rgba(255,255,255,0.9)',
//               letterSpacing: '2px',
//               textTransform: 'uppercase'
//             }}>
//               Study Destination
//             </span>
//           </div>

//           <h1 style={{
//             fontSize: 'clamp(40px, 8vw, 96px)',
//             fontWeight: '800',
//             color: 'white',
//             marginBottom: '24px',
//             letterSpacing: '-2px',
//             lineHeight: '1.1'
//           }}>
//             {country.name}
//           </h1>

//           <p style={{
//             fontSize: 'clamp(18px, 3vw, 24px)',
//             color: 'rgba(255,255,255,0.95)',
//             marginBottom: '40px',
//             maxWidth: '700px',
//             lineHeight: '1.6',
//             fontWeight: '500'
//           }}>
//             {country.tagline}
//           </p>

//           <div style={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             gap: '16px'
//           }}>
//             <button 
//               onClick={() => setIsApplicationModalOpen(true)}
//               className="btn-curved"
//             >
//               Apply Now →
//             </button>
            
//             <button
//               onClick={() => {
//                 document.getElementById('country-info')?.scrollIntoView({ 
//                   behavior: 'smooth' 
//                 });
//               }}
//               style={{
//                 padding: '20px 40px',
//                 background: 'transparent',
//                 color: 'white',
//                 border: '1px solid rgba(255,255,255,0.3)',
//                 borderRadius: '50px',
//                 fontWeight: '700',
//                 fontSize: '16px',
//                 letterSpacing: '0.3px',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.borderColor = 'white';
//                 e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
//                 e.currentTarget.style.background = 'transparent';
//               }}
//             >
//               Explore More
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Tab Navigation */}
//       <div className="tab-bar">
//         <div className="tab-container">
//           <button
//             className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
//             onClick={() => setActiveTab('about')}
//           >
//             About {country.name}
//           </button>
//           <button
//             className={`tab-button ${activeTab === 'universities' ? 'active' : ''}`}
//             onClick={() => setActiveTab('universities')}
//           >
//             Universities ({universities.length || country.topUniversities.length})
//           </button>
//         </div>
//       </div>

//       {/* About Tab Content */}
//       {activeTab === 'about' && (
//         <>
//           {/* Stats Section */}
//           <section id="country-info" style={{
//             padding: '80px 20px',
//             background: '#FAFBFC'
//           }}>
//             <div style={{
//               maxWidth: '1400px',
//               margin: '0 auto'
//             }}>
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
//                 gap: '24px'
//               }}>
//                 <div className="stat-box">
//                   <div style={{
//                     fontSize: '40px',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     marginBottom: '8px',
//                     letterSpacing: '-1px'
//                   }}>
//                     {country.stats.universities}
//                   </div>
//                   <div style={{
//                     fontSize: '13px',
//                     color: '#64748B',
//                     fontWeight: '700',
//                     letterSpacing: '1px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Universities
//                   </div>
//                 </div>

//                 <div className="stat-box">
//                   <div style={{
//                     fontSize: '40px',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     marginBottom: '8px',
//                     letterSpacing: '-1px'
//                   }}>
//                     {country.stats.programs}
//                   </div>
//                   <div style={{
//                     fontSize: '13px',
//                     color: '#64748B',
//                     fontWeight: '700',
//                     letterSpacing: '1px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Programs
//                   </div>
//                 </div>

//                 <div className="stat-box">
//                   <div style={{
//                     fontSize: '40px',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     marginBottom: '8px',
//                     letterSpacing: '-1px'
//                   }}>
//                     {country.stats.intlStudents}
//                   </div>
//                   <div style={{
//                     fontSize: '13px',
//                     color: '#64748B',
//                     fontWeight: '700',
//                     letterSpacing: '1px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Intl Students
//                   </div>
//                 </div>

//                 <div className="stat-box">
//                   <div style={{
//                     fontSize: '40px',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     marginBottom: '8px',
//                     letterSpacing: '-1px'
//                   }}>
//                     {country.stats.globalRank}
//                   </div>
//                   <div style={{
//                     fontSize: '13px',
//                     color: '#64748B',
//                     fontWeight: '700',
//                     letterSpacing: '1px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Global Rank
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Description Section */}
//           <section style={{
//             padding: '80px 20px',
//             background: 'white'
//           }}>
//             <div style={{
//               maxWidth: '1000px',
//               margin: '0 auto',
//               textAlign: 'center'
//             }}>
//               <h2 style={{
//                 fontSize: 'clamp(32px, 6vw, 48px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '24px',
//                 letterSpacing: '-1px'
//               }}>
//                 Why Study in {country.name}?
//               </h2>
//               <p style={{
//                 fontSize: '18px',
//                 color: '#475569',
//                 lineHeight: '1.8',
//                 fontWeight: '500'
//               }}>
//                 {country.description}
//               </p>
//             </div>
//           </section>

//           {/* Highlights Section */}
//           <section style={{
//             padding: '80px 20px',
//             background: '#FAFBFC'
//           }}>
//             <div style={{
//               maxWidth: '1400px',
//               margin: '0 auto'
//             }}>
//               <h2 style={{
//                 fontSize: 'clamp(28px, 5vw, 40px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 textAlign: 'center',
//                 letterSpacing: '-1px'
//               }}>
//                 Key Highlights
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//                 gap: '24px'
//               }}>
//                 {country.highlights.map((highlight, idx) => (
//                   <div key={idx} className="pro-card">
//                     <div className="number-badge" style={{
//                       marginBottom: '20px'
//                     }}>
//                       {String(idx + 1).padStart(2, '0')}
//                     </div>
//                     <h3 style={{
//                       fontSize: '20px',
//                       fontWeight: '800',
//                       color: '#1E3A5F',
//                       marginBottom: '12px',
//                       letterSpacing: '-0.3px'
//                     }}>
//                       {highlight.title}
//                     </h3>
//                     <p style={{
//                       fontSize: '15px',
//                       color: '#64748B',
//                       lineHeight: '1.6',
//                       fontWeight: '500'
//                     }}>
//                       {highlight.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Additional Info Grid */}
//           <section style={{
//             padding: '80px 20px',
//             background: 'white'
//           }}>
//             <div style={{
//               maxWidth: '1400px',
//               margin: '0 auto'
//             }}>
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//                 gap: '32px'
//               }}>
//                 {/* Popular Programs */}
//                 <div className="pro-card-elevated">
//                   <h3 style={{
//                     fontSize: '22px',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     marginBottom: '20px',
//                     letterSpacing: '-0.3px'
//                   }}>
//                     Popular Programs
//                   </h3>
//                   <div style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '12px'
//                   }}>
//                     {country.popularPrograms.map((program, idx) => (
//                       <div key={idx} style={{
//                         padding: '12px',
//                         background: '#F8FAFC',
//                         border: '1px solid #E2E8F0',
//                         fontSize: '14px',
//                         fontWeight: '600',
//                         color: '#475569'
//                       }}>
//                         {program}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Top Cities */}
//                 <div className="pro-card-elevated">
//                   <h3 style={{
//                     fontSize: '22px',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     marginBottom: '20px',
//                     letterSpacing: '-0.3px'
//                   }}>
//                     Top Study Cities
//                   </h3>
//                   <div style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '12px'
//                   }}>
//                     {country.topCities.map((city, idx) => (
//                       <div key={idx} style={{
//                         padding: '12px',
//                         background: '#F8FAFC',
//                         border: '1px solid #E2E8F0',
//                         fontSize: '14px',
//                         fontWeight: '600',
//                         color: '#475569'
//                       }}>
//                         {city}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Cost Information */}
//                 <div className="pro-card-elevated">
//                   <h3 style={{
//                     fontSize: '22px',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     marginBottom: '20px',
//                     letterSpacing: '-0.3px'
//                   }}>
//                     Cost Information
//                   </h3>
//                   <div style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '20px'
//                   }}>
//                     <div>
//                       <div style={{
//                         fontSize: '12px',
//                         color: '#64748B',
//                         fontWeight: '700',
//                         letterSpacing: '1px',
//                         marginBottom: '8px',
//                         textTransform: 'uppercase'
//                       }}>
//                         Tuition Range
//                       </div>
//                       <div style={{
//                         fontSize: '18px',
//                         fontWeight: '800',
//                         color: '#1E3A5F'
//                       }}>
//                         {country.tuitionRange}
//                       </div>
//                     </div>
//                     <div>
//                       <div style={{
//                         fontSize: '12px',
//                         color: '#64748B',
//                         fontWeight: '700',
//                         letterSpacing: '1px',
//                         marginBottom: '8px',
//                         textTransform: 'uppercase'
//                       }}>
//                         Living Cost
//                       </div>
//                       <div style={{
//                         fontSize: '18px',
//                         fontWeight: '800',
//                         color: '#1E3A5F'
//                       }}>
//                         {country.livingCost}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </>
//       )}

//       {/* Universities Tab Content */}
//       {activeTab === 'universities' && (
//         <section style={{
//           padding: '80px 20px',
//           background: 'white'
//         }}>
//           <div style={{
//             maxWidth: '1400px',
//             margin: '0 auto'
//           }}>
//             <h2 style={{
//               fontSize: 'clamp(32px, 6vw, 48px)',
//               fontWeight: '800',
//               color: '#1E3A5F',
//               marginBottom: '16px',
//               letterSpacing: '-1px'
//             }}>
//               Medical Universities in {country.name}
//             </h2>
//             <p style={{
//               fontSize: '16px',
//               color: '#64748B',
//               marginBottom: '48px',
//               fontWeight: '500'
//             }}>
//               Explore {universities.length > 0 ? universities.length : country.topUniversities.length} internationally recognized medical institutions
//             </p>

//             {universities.length > 0 ? (
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
//                 gap: '24px'
//               }}>
//                 {universities.map((uni, idx) => (
//                   <div key={uni.id || idx} className="university-card">
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'flex-start',
//                       gap: '16px',
//                       marginBottom: '20px'
//                     }}>
//                       <div className="number-badge" style={{ 
//                         minWidth: '48px', 
//                         height: '48px', 
//                         fontSize: '16px' 
//                       }}>
//                         {String(idx + 1).padStart(2, '0')}
//                       </div>
//                       <div style={{ flex: 1 }}>
//                         <h3 style={{
//                           fontSize: '19px',
//                           fontWeight: '800',
//                           color: '#1E3A5F',
//                           marginBottom: '8px',
//                           lineHeight: '1.3',
//                           letterSpacing: '-0.3px'
//                         }}>
//                           {uni.name}
//                         </h3>
//                         <div style={{
//                           fontSize: '13px',
//                           color: '#64748B',
//                           fontWeight: '600',
//                           marginBottom: '12px'
//                         }}>
//                           {uni.city} • Established {uni.establishedYear}
//                         </div>
//                       </div>
//                       {uni.nmcApproved && (
//                         <div className="sharp-badge">
//                           NMC
//                         </div>
//                       )}
//                     </div>

//                     <p style={{
//                       fontSize: '14px',
//                       color: '#475569',
//                       lineHeight: '1.6',
//                       marginBottom: '20px',
//                       fontWeight: '500'
//                     }}>
//                       {uni.overview.substring(0, 180)}...
//                     </p>

//                     <div style={{
//                       display: 'grid',
//                       gridTemplateColumns: '1fr 1fr',
//                       gap: '12px',
//                       marginBottom: '20px'
//                     }}>
//                       <div style={{
//                         padding: '16px',
//                         background: '#F8FAFC',
//                         border: '1px solid #E2E8F0'
//                       }}>
//                         <div style={{
//                           fontSize: '11px',
//                           color: '#64748B',
//                           fontWeight: '700',
//                           marginBottom: '6px',
//                           letterSpacing: '0.5px',
//                           textTransform: 'uppercase'
//                         }}>
//                           Tuition/Year
//                         </div>
//                         <div style={{
//                           fontSize: '15px',
//                           fontWeight: '800',
//                           color: '#1E3A5F',
//                           letterSpacing: '-0.3px'
//                         }}>
//                           {uni.fees.tuitionPerYear.split('(')[0].trim()}
//                         </div>
//                       </div>
//                       <div style={{
//                         padding: '16px',
//                         background: '#F8FAFC',
//                         border: '1px solid #E2E8F0'
//                       }}>
//                         <div style={{
//                           fontSize: '11px',
//                           color: '#64748B',
//                           fontWeight: '700',
//                           marginBottom: '6px',
//                           letterSpacing: '0.5px',
//                           textTransform: 'uppercase'
//                         }}>
//                           Duration
//                         </div>
//                         <div style={{
//                           fontSize: '15px',
//                           fontWeight: '800',
//                           color: '#1E3A5F',
//                           letterSpacing: '-0.3px'
//                         }}>
//                           {uni.programs[0]?.duration || 'N/A'}
//                         </div>
//                       </div>
//                     </div>

//                     <button 
//                       onClick={() => setIsApplicationModalOpen(true)}
//                       className="btn-curved" 
//                       style={{ width: '100%', padding: '16px', fontSize: '14px' }}
//                     >
//                       Apply to This University →
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="curved-card" style={{
//                 textAlign: 'center',
//                 padding: '80px 40px',
//                 maxWidth: '600px',
//                 margin: '0 auto'
//               }}>
//                 <h3 style={{
//                   fontSize: '24px',
//                   fontWeight: '800',
//                   color: '#1E3A5F',
//                   marginBottom: '12px',
//                   letterSpacing: '-0.5px'
//                 }}>
//                   Detailed University Information Coming Soon
//                 </h3>
//                 <p style={{
//                   fontSize: '16px',
//                   color: '#64748B',
//                   fontWeight: '500',
//                   lineHeight: '1.6'
//                 }}>
//                   We are compiling comprehensive details for all {country.topUniversities.length} universities in {country.name}.
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>
//       )}

//       {/* CTA Section */}
//       <section style={{
//         position: 'relative',
//         padding: '120px 20px',
//         overflow: 'hidden'
//       }}>
//         {/* Background Image */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url(${country.galleryImages[0]})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }} />
        
//         {/* Dark Overlay */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'linear-gradient(135deg, rgba(30,58,95,0.95) 0%, rgba(15,39,68,0.95) 100%)'
//         }} />

//         <div style={{
//           position: 'relative',
//           zIndex: 2,
//           maxWidth: '800px',
//           margin: '0 auto',
//           textAlign: 'center'
//         }}>
//           <h2 style={{
//             fontSize: 'clamp(32px, 6vw, 56px)',
//             fontWeight: '800',
//             color: 'white',
//             marginBottom: '20px',
//             letterSpacing: '-1.5px',
//             lineHeight: '1.2'
//           }}>
//             Begin Your Medical Journey
//           </h2>
          
//           <p style={{
//             fontSize: '18px',
//             color: 'rgba(255,255,255,0.9)',
//             marginBottom: '48px',
//             lineHeight: '1.7',
//             fontWeight: '500',
//             maxWidth: '600px',
//             margin: '0 auto 48px'
//           }}>
//             Schedule a consultation with our expert counselors for personalized guidance on studying MBBS in {country.name}
//           </p>

//           <div style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '16px',
//             maxWidth: '500px',
//             margin: '0 auto'
//           }}>
//             <button 
//               onClick={() => setIsApplicationModalOpen(true)}
//               className="btn-curved"
//               style={{ justifyContent: 'center' }}
//             >
//               Apply Now →
//             </button>

//             <Link href="/destinations" style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               gap: '12px',
//               padding: '20px 40px',
//               background: 'transparent',
//               color: 'white',
//               border: '1px solid rgba(255,255,255,0.3)',
//               borderRadius: '50px',
//               textDecoration: 'none',
//               fontWeight: '700',
//               fontSize: '16px',
//               letterSpacing: '0.3px',
//               transition: 'all 0.3s ease'
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.borderColor = 'white';
//               e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
//               e.currentTarget.style.background = 'transparent';
//             }}>
//               Explore Other Destinations
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }