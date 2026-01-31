// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { getCountryBySlug } from '../../services/dbServices';
// import { getUniversitiesByCountry } from '../data/universityData';
// import type { CountryDetailedInfo } from '../data/countryData';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import ApplicationModal from './AppliactionModal';

// // ============================================
// // COUNTRY PAGE - Firebase Powered
// // Professional Luxury Design
// // No emojis, clean boxes, backdrop images, tabs
// // ============================================

// interface CountryPageProps {
//   countrySlug: string;
// }

// export default function CountryPage({ countrySlug }: CountryPageProps) {
//   const [country, setCountry] = useState<CountryDetailedInfo | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [activeTab, setActiveTab] = useState<'about' | 'universities'>('about');
//   const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  
//   const universities = country ? getUniversitiesByCountry(countrySlug) : [];

//   // Fetch country data from Firebase
//   useEffect(() => {
//     const fetchCountryData = async () => {
//       try {
//         setLoading(true);
//         const countryData = await getCountryBySlug(countrySlug);
        
//         if (countryData) {
//           setCountry(countryData);
//         } else {
//           setError('Country not found');
//         }
//       } catch (err) {
//         console.error('Error fetching country:', err);
//         setError('Failed to load country data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCountryData();
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
//         fontFamily: '"Plus Jakarta Sans", sans-serif',
//       }}>
//         <Navbar />
//         <div style={{
//           textAlign: 'center',
//           padding: '40px'
//         }}>
//           <div style={{
//             width: '60px',
//             height: '60px',
//             border: '4px solid #E2E8F0',
//             borderTop: '4px solid #FF6B35',
//             borderRadius: '50%',
//             margin: '0 auto 24px',
//             animation: 'spin 1s linear infinite'
//           }} />
//           <style>{`
//             @keyframes spin {
//               0% { transform: rotate(0deg); }
//               100% { transform: rotate(360deg); }
//             }
//           `}</style>
//           <p style={{
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#1E3A5F'
//           }}>
//             Loading country information...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Error state
//   if (error || !country) {
//     return (
//       <div style={{
//         minHeight: '100vh',
//         background: '#FFFFFF',
//         fontFamily: '"Plus Jakarta Sans", sans-serif',
//       }}>
//         <Navbar />
//         <div style={{
//           maxWidth: '600px',
//           margin: '120px auto',
//           padding: '40px',
//           textAlign: 'center'
//         }}>
//           <h1 style={{
//             fontSize: '32px',
//             fontWeight: '800',
//             color: '#1E3A5F',
//             marginBottom: '16px'
//           }}>
//             Country Not Found
//           </h1>
//           <p style={{
//             fontSize: '16px',
//             color: '#64748B',
//             marginBottom: '32px'
//           }}>
//             {error || 'The country you\'re looking for doesn\'t exist.'}
//           </p>
//           <Link href="/destinations" style={{
//             display: 'inline-block',
//             padding: '16px 32px',
//             background: '#FF6B35',
//             color: 'white',
//             borderRadius: '50px',
//             textDecoration: 'none',
//             fontWeight: '700',
//             fontSize: '16px'
//           }}>
//             View All Destinations
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

//         /* Curved Card */
//         .curved-card {
//           background: white;
//           border: 1px solid #E2E8F0;
//           border-radius: 24px;
//           padding: 32px;
//           transition: all 0.3s ease;
//         }

//         .curved-card:hover {
//           border-color: #CBD5E1;
//           box-shadow: 0 20px 40px rgba(0,0,0,0.06);
//         }

//         /* Sharp Badge */
//         .sharp-badge {
//           padding: 8px 16px;
//           background: #1E3A5F;
//           color: white;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.5px;
//           text-transform: uppercase;
//         }

//         /* Button Curved */
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
//           background: #E55A2A;
//           transform: translateY(-2px);
//           box-shadow: 0 12px 24px rgba(255,107,53,0.3);
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

//           .curved-card {
//             padding: 40px;
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
//           maxWidth: '1400px',
//           margin: '0 auto',
//           padding: '200px 20px 120px',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           textAlign: 'center'
//         }}>
//           {/* Flag */}
//           <div style={{
//             fontSize: '80px',
//             marginBottom: '32px',
//             filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))'
//           }}>
//             {country.flag}
//           </div>

//           {/* Title */}
//           <h1 style={{
//             fontSize: 'clamp(40px, 8vw, 80px)',
//             fontWeight: '800',
//             color: 'white',
//             marginBottom: '24px',
//             letterSpacing: '-2px',
//             lineHeight: '1.1',
//             textShadow: '0 4px 20px rgba(0,0,0,0.4)'
//           }}>
//             Study MBBS in {country.name}
//           </h1>

//           {/* Subtitle */}
//           <p style={{
//             fontSize: 'clamp(18px, 3vw, 24px)',
//             color: 'rgba(255,255,255,0.95)',
//             marginBottom: '48px',
//             lineHeight: '1.6',
//             fontWeight: '500',
//             maxWidth: '800px',
//             textShadow: '0 2px 10px rgba(0,0,0,0.3)'
//           }}>
//             {country.overview.description}
//           </p>

//           {/* CTA Buttons */}
//           <div style={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             gap: '16px',
//             justifyContent: 'center'
//           }}>
//             <button 
//               onClick={() => setIsApplicationModalOpen(true)}
//               className="btn-curved"
//             >
//               Apply Now →
//             </button>

//             <button 
//               onClick={() => {
//                 const element = document.getElementById('overview-section');
//                 element?.scrollIntoView({ behavior: 'smooth' });
//               }}
//               style={{
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: '12px',
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
//               Learn More ↓
//             </button>
//           </div>

//           {/* Quick Stats */}
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//             gap: '20px',
//             marginTop: '80px',
//             width: '100%',
//             maxWidth: '1200px'
//           }}>
//             {[
//               { label: 'Universities', value: country.stats.totalUniversities },
//               { label: 'NMC Approved', value: country.stats.nmcApproved },
//               { label: 'Indian Students', value: country.stats.indianStudents },
//               { label: 'Avg. Fees/Year', value: country.stats.averageFees }
//             ].map((stat, idx) => (
//               <div key={idx} style={{
//                 background: 'rgba(255,255,255,0.15)',
//                 backdropFilter: 'blur(20px)',
//                 border: '1px solid rgba(255,255,255,0.2)',
//                 borderRadius: '16px',
//                 padding: '28px 24px',
//                 textAlign: 'center'
//               }}>
//                 <div style={{
//                   fontSize: '32px',
//                   fontWeight: '800',
//                   color: 'white',
//                   marginBottom: '8px',
//                   letterSpacing: '-0.5px'
//                 }}>
//                   {stat.value}
//                 </div>
//                 <div style={{
//                   fontSize: '13px',
//                   color: 'rgba(255,255,255,0.85)',
//                   fontWeight: '600',
//                   letterSpacing: '0.5px',
//                   textTransform: 'uppercase'
//                 }}>
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
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

//       {/* Content Based on Active Tab */}
//       {activeTab === 'about' ? (
//         <>
//           {/* Overview Section */}
//           <section id="overview-section" style={{
//             padding: '120px 20px',
//             background: '#FAFBFC'
//           }}>
//             <div style={{
//               maxWidth: '1200px',
//               margin: '0 auto'
//             }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Overview</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(32px, 5vw, 48px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '32px',
//                 letterSpacing: '-1px',
//                 lineHeight: '1.2'
//               }}>
//                 {country.overview.title}
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gap: '24px'
//               }}>
//                 {country.overview.detailedDescription.map((para, idx) => (
//                   <p key={idx} style={{
//                     fontSize: '17px',
//                     lineHeight: '1.8',
//                     color: '#475569',
//                     fontWeight: '500'
//                   }}>
//                     {para}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Why Study Here */}
//           <section style={{
//             padding: '120px 20px',
//             background: 'white'
//           }}>
//             <div style={{
//               maxWidth: '1200px',
//               margin: '0 auto'
//             }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Advantages</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(32px, 5vw, 48px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px',
//                 lineHeight: '1.2'
//               }}>
//                 {country.whyStudyHere.title}
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//                 gap: '24px'
//               }}>
//                 {country.whyStudyHere.points.map((point, idx) => (
//                   <div key={idx} className="pro-card" style={{
//                     display: 'flex',
//                     gap: '20px'
//                   }}>
//                     <div className="number-badge">
//                       {String(idx + 1).padStart(2, '0')}
//                     </div>
//                     <p style={{
//                       fontSize: '16px',
//                       lineHeight: '1.7',
//                       color: '#475569',
//                       fontWeight: '500',
//                       flex: 1
//                     }}>
//                       {point}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Top Universities */}
//           <section style={{
//             padding: '120px 20px',
//             background: '#FAFBFC'
//           }}>
//             <div style={{
//               maxWidth: '1200px',
//               margin: '0 auto'
//             }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Top Institutions</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(32px, 5vw, 48px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px',
//                 lineHeight: '1.2'
//               }}>
//                 Top Universities in {country.name}
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gap: '20px'
//               }}>
//                 {country.topUniversities.map((uni, idx) => (
//                   <div key={idx} className="university-card">
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'flex-start',
//                       gap: '24px',
//                       marginBottom: '16px'
//                     }}>
//                       <div style={{
//                         fontSize: '48px',
//                         fontWeight: '800',
//                         color: '#E2E8F0',
//                         lineHeight: '1',
//                         minWidth: '60px'
//                       }}>
//                         #{uni.rank}
//                       </div>
//                       <div style={{ flex: 1 }}>
//                         <h3 style={{
//                           fontSize: '22px',
//                           fontWeight: '800',
//                           color: '#1E3A5F',
//                           marginBottom: '12px',
//                           letterSpacing: '-0.3px'
//                         }}>
//                           {uni.name}
//                         </h3>
//                         <div style={{
//                           display: 'flex',
//                           flexWrap: 'wrap',
//                           gap: '20px',
//                           fontSize: '14px',
//                           color: '#64748B',
//                           fontWeight: '600'
//                         }}>
//                           <span>📍 {uni.city}</span>
//                           <span>📅 Est. {uni.established}</span>
//                           {uni.nmcApproved && (
//                             <span style={{ color: '#10B981' }}>✓ NMC Approved</span>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Programs Offered */}
//           <section style={{
//             padding: '120px 20px',
//             background: 'white'
//           }}>
//             <div style={{
//               maxWidth: '1200px',
//               margin: '0 auto'
//             }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Academic Programs</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(32px, 5vw, 48px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px',
//                 lineHeight: '1.2'
//               }}>
//                 Programs Offered
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//                 gap: '24px'
//               }}>
//                 {country.programs.map((program, idx) => (
//                   <div key={idx} className="pro-card">
//                     <h3 style={{
//                       fontSize: '19px',
//                       fontWeight: '800',
//                       color: '#1E3A5F',
//                       marginBottom: '16px',
//                       letterSpacing: '-0.3px'
//                     }}>
//                       {program.name}
//                     </h3>
//                     <div style={{
//                       display: 'grid',
//                       gap: '12px'
//                     }}>
//                       <div style={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         fontSize: '14px'
//                       }}>
//                         <span style={{ color: '#64748B', fontWeight: '600' }}>Duration:</span>
//                         <span style={{ color: '#1E3A5F', fontWeight: '700' }}>{program.duration}</span>
//                       </div>
//                       <div style={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         fontSize: '14px'
//                       }}>
//                         <span style={{ color: '#64748B', fontWeight: '600' }}>Degree:</span>
//                         <span style={{ color: '#1E3A5F', fontWeight: '700' }}>{program.degree}</span>
//                       </div>
//                       <div style={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         fontSize: '14px'
//                       }}>
//                         <span style={{ color: '#64748B', fontWeight: '600' }}>Medium:</span>
//                         <span style={{ color: '#1E3A5F', fontWeight: '700' }}>{program.medium}</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Cost Breakdown */}
//           <section style={{
//             padding: '120px 20px',
//             background: '#FAFBFC'
//           }}>
//             <div style={{
//               maxWidth: '1200px',
//               margin: '0 auto'
//             }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Investment</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(32px, 5vw, 48px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px',
//                 lineHeight: '1.2'
//               }}>
//                 Cost Breakdown
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//                 gap: '24px'
//               }}>
//                 {[
//                   { label: 'Tuition Fee Range', value: country.costs.tuitionFeeRange },
//                   { label: 'Hostel Fees', value: country.costs.hostelFees },
//                   { label: 'Food Expenses', value: country.costs.foodExpenses },
//                   { label: 'Other Expenses', value: country.costs.otherExpenses },
//                   { label: 'Total First Year', value: country.costs.totalFirstYear },
//                   { label: 'Total Course', value: country.costs.totalCourse }
//                 ].map((cost, idx) => (
//                   <div key={idx} className="stat-box">
//                     <div style={{
//                       fontSize: '11px',
//                       color: '#64748B',
//                       fontWeight: '700',
//                       marginBottom: '12px',
//                       letterSpacing: '0.5px',
//                       textTransform: 'uppercase'
//                     }}>
//                       {cost.label}
//                     </div>
//                     <div style={{
//                       fontSize: '24px',
//                       fontWeight: '800',
//                       color: '#FF6B35',
//                       letterSpacing: '-0.5px'
//                     }}>
//                       {cost.value}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Eligibility & Admission */}
//           <section style={{
//             padding: '120px 20px',
//             background: 'white'
//           }}>
//             <div style={{
//               maxWidth: '1200px',
//               margin: '0 auto'
//             }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Requirements</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(32px, 5vw, 48px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px',
//                 lineHeight: '1.2'
//               }}>
//                 Eligibility & Admission
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gap: '32px'
//               }}>
//                 <div className="pro-card-elevated">
//                   <h3 style={{
//                     fontSize: '19px',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     marginBottom: '20px',
//                     letterSpacing: '-0.3px'
//                   }}>
//                     Basic Requirements
//                   </h3>
//                   <div style={{
//                     display: 'grid',
//                     gap: '16px'
//                   }}>
//                     <div className="info-grid-item">
//                       <div style={{
//                         fontSize: '13px',
//                         color: '#64748B',
//                         fontWeight: '700',
//                         marginBottom: '8px',
//                         letterSpacing: '0.5px',
//                         textTransform: 'uppercase'
//                       }}>
//                         NEET Requirement
//                       </div>
//                       <div style={{
//                         fontSize: '16px',
//                         color: '#1E3A5F',
//                         fontWeight: '700'
//                       }}>
//                         {country.eligibility.neetRequirement}
//                       </div>
//                     </div>
//                     <div className="info-grid-item">
//                       <div style={{
//                         fontSize: '13px',
//                         color: '#64748B',
//                         fontWeight: '700',
//                         marginBottom: '8px',
//                         letterSpacing: '0.5px',
//                         textTransform: 'uppercase'
//                       }}>
//                         Academic Requirement
//                       </div>
//                       <div style={{
//                         fontSize: '16px',
//                         color: '#1E3A5F',
//                         fontWeight: '700'
//                       }}>
//                         {country.eligibility.academicRequirement}
//                       </div>
//                     </div>
//                     <div className="info-grid-item">
//                       <div style={{
//                         fontSize: '13px',
//                         color: '#64748B',
//                         fontWeight: '700',
//                         marginBottom: '8px',
//                         letterSpacing: '0.5px',
//                         textTransform: 'uppercase'
//                       }}>
//                         Age Limit
//                       </div>
//                       <div style={{
//                         fontSize: '16px',
//                         color: '#1E3A5F',
//                         fontWeight: '700'
//                       }}>
//                         {country.eligibility.ageLimit}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="pro-card-elevated">
//                   <h3 style={{
//                     fontSize: '19px',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     marginBottom: '20px',
//                     letterSpacing: '-0.3px'
//                   }}>
//                     Required Documents
//                   </h3>
//                   <div style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//                     gap: '16px'
//                   }}>
//                     {country.eligibility.documents.map((doc, idx) => (
//                       <div key={idx} style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '12px',
//                         padding: '16px',
//                         background: '#F8FAFC',
//                         border: '1px solid #E2E8F0',
//                         borderRadius: '12px'
//                       }}>
//                         <div style={{
//                           width: '8px',
//                           height: '8px',
//                           background: '#FF6B35',
//                           borderRadius: '50%',
//                           flexShrink: 0
//                         }} />
//                         <span style={{
//                           fontSize: '14px',
//                           color: '#475569',
//                           fontWeight: '600'
//                         }}>
//                           {doc}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Intakes */}
//           <section style={{
//             padding: '120px 20px',
//             background: '#FAFBFC'
//           }}>
//             <div style={{
//               maxWidth: '1200px',
//               margin: '0 auto'
//             }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Application Timeline</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(32px, 5vw, 48px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px',
//                 lineHeight: '1.2'
//               }}>
//                 Intakes & Deadlines
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//                 gap: '24px'
//               }}>
//                 <div className="stat-box">
//                   <div style={{
//                     fontSize: '11px',
//                     color: '#64748B',
//                     fontWeight: '700',
//                     marginBottom: '12px',
//                     letterSpacing: '0.5px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Main Intake
//                   </div>
//                   <div style={{
//                     fontSize: '28px',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     letterSpacing: '-0.5px'
//                   }}>
//                     {country.intakes.main}
//                   </div>
//                 </div>
//                 {country.intakes.secondary && (
//                   <div className="stat-box">
//                     <div style={{
//                       fontSize: '11px',
//                       color: '#64748B',
//                       fontWeight: '700',
//                       marginBottom: '12px',
//                       letterSpacing: '0.5px',
//                       textTransform: 'uppercase'
//                     }}>
//                       Secondary Intake
//                     </div>
//                     <div style={{
//                       fontSize: '28px',
//                       fontWeight: '800',
//                       color: '#1E3A5F',
//                       letterSpacing: '-0.5px'
//                     }}>
//                       {country.intakes.secondary}
//                     </div>
//                   </div>
//                 )}
//                 <div className="stat-box">
//                   <div style={{
//                     fontSize: '11px',
//                     color: '#64748B',
//                     fontWeight: '700',
//                     marginBottom: '12px',
//                     letterSpacing: '0.5px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Application Deadline
//                   </div>
//                   <div style={{
//                     fontSize: '28px',
//                     fontWeight: '800',
//                     color: '#FF6B35',
//                     letterSpacing: '-0.5px'
//                   }}>
//                     {country.intakes.applicationDeadline}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Visa Information */}
//           <section style={{
//             padding: '120px 20px',
//             background: 'white'
//           }}>
//             <div style={{
//               maxWidth: '1200px',
//               margin: '0 auto'
//             }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Immigration</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(32px, 5vw, 48px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px',
//                 lineHeight: '1.2'
//               }}>
//                 Visa Information
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gap: '24px'
//               }}>
//                 <div style={{
//                   display: 'grid',
//                   gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//                   gap: '24px'
//                 }}>
//                   {[
//                     { label: 'Visa Type', value: country.visa.type },
//                     { label: 'Processing Time', value: country.visa.processingTime },
//                     { label: 'Validity', value: country.visa.validity }
//                   ].map((item, idx) => (
//                     <div key={idx} className="info-grid-item">
//                       <div style={{
//                         fontSize: '13px',
//                         color: '#64748B',
//                         fontWeight: '700',
//                         marginBottom: '8px',
//                         letterSpacing: '0.5px',
//                         textTransform: 'uppercase'
//                       }}>
//                         {item.label}
//                       </div>
//                       <div style={{
//                         fontSize: '17px',
//                         color: '#1E3A5F',
//                         fontWeight: '700'
//                       }}>
//                         {item.value}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="pro-card-elevated">
//                   <h3 style={{
//                     fontSize: '19px',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     marginBottom: '20px',
//                     letterSpacing: '-0.3px'
//                   }}>
//                     Visa Requirements
//                   </h3>
//                   <div style={{
//                     display: 'grid',
//                     gap: '12px'
//                   }}>
//                     {country.visa.requirements.map((req, idx) => (
//                       <div key={idx} style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '12px',
//                         padding: '16px',
//                         background: '#F8FAFC',
//                         border: '1px solid #E2E8F0',
//                         borderRadius: '12px'
//                       }}>
//                         <div style={{
//                           width: '8px',
//                           height: '8px',
//                           background: '#FF6B35',
//                           borderRadius: '50%',
//                           flexShrink: 0
//                         }} />
//                         <span style={{
//                           fontSize: '15px',
//                           color: '#475569',
//                           fontWeight: '600'
//                         }}>
//                           {req}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Accommodation */}
//           <section style={{
//             padding: '120px 20px',
//             background: '#FAFBFC'
//           }}>
//             <div style={{
//               maxWidth: '1200px',
//               margin: '0 auto'
//             }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Housing</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(32px, 5vw, 48px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px',
//                 lineHeight: '1.2'
//               }}>
//                 Accommodation Options
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gap: '24px'
//               }}>
//                 <div className="pro-card-elevated">
//                   <h3 style={{
//                     fontSize: '19px',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     marginBottom: '20px',
//                     letterSpacing: '-0.3px'
//                   }}>
//                     Available Types
//                   </h3>
//                   <div style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//                     gap: '16px'
//                   }}>
//                     {country.accommodation.types.map((type, idx) => (
//                       <div key={idx} style={{
//                         padding: '20px',
//                         background: '#F8FAFC',
//                         border: '1px solid #E2E8F0',
//                         borderRadius: '12px',
//                         textAlign: 'center'
//                       }}>
//                         <span style={{
//                           fontSize: '15px',
//                           color: '#1E3A5F',
//                           fontWeight: '700'
//                         }}>
//                           {type}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="pro-card-elevated">
//                   <h3 style={{
//                     fontSize: '19px',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     marginBottom: '20px',
//                     letterSpacing: '-0.3px'
//                   }}>
//                     Facilities Provided
//                   </h3>
//                   <div style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//                     gap: '12px'
//                   }}>
//                     {country.accommodation.facilities.map((facility, idx) => (
//                       <div key={idx} style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '12px',
//                         padding: '16px',
//                         background: '#F8FAFC',
//                         border: '1px solid #E2E8F0',
//                         borderRadius: '12px'
//                       }}>
//                         <div style={{
//                           width: '8px',
//                           height: '8px',
//                           background: '#10B981',
//                           borderRadius: '50%',
//                           flexShrink: 0
//                         }} />
//                         <span style={{
//                           fontSize: '14px',
//                           color: '#475569',
//                           fontWeight: '600'
//                         }}>
//                           {facility}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="stat-box">
//                   <div style={{
//                     fontSize: '11px',
//                     color: '#64748B',
//                     fontWeight: '700',
//                     marginBottom: '12px',
//                     letterSpacing: '0.5px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Average Cost
//                   </div>
//                   <div style={{
//                     fontSize: '28px',
//                     fontWeight: '800',
//                     color: '#FF6B35',
//                     letterSpacing: '-0.5px'
//                   }}>
//                     {country.accommodation.averageCost}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Living Info */}
//           <section style={{
//             padding: '120px 20px',
//             background: 'white'
//           }}>
//             <div style={{
//               maxWidth: '1200px',
//               margin: '0 auto'
//             }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Lifestyle</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(32px, 5vw, 48px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px',
//                 lineHeight: '1.2'
//               }}>
//                 Living in {country.name}
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//                 gap: '24px'
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
//                       fontSize: '13px',
//                       color: '#64748B',
//                       fontWeight: '700',
//                       marginBottom: '8px',
//                       letterSpacing: '0.5px',
//                       textTransform: 'uppercase'
//                     }}>
//                       {info.label}
//                     </div>
//                     <div style={{
//                       fontSize: '17px',
//                       color: '#1E3A5F',
//                       fontWeight: '700'
//                     }}>
//                       {info.value}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Work Opportunities */}
//           <section style={{
//             padding: '120px 20px',
//             background: '#FAFBFC'
//           }}>
//             <div style={{
//               maxWidth: '1200px',
//               margin: '0 auto'
//             }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Employment</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(32px, 5vw, 48px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px',
//                 lineHeight: '1.2'
//               }}>
//                 Work Opportunities
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//                 gap: '24px'
//               }}>
//                 <div className="stat-box">
//                   <div style={{
//                     fontSize: '11px',
//                     color: '#64748B',
//                     fontWeight: '700',
//                     marginBottom: '12px',
//                     letterSpacing: '0.5px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Part-Time Work
//                   </div>
//                   <div style={{
//                     fontSize: '24px',
//                     fontWeight: '800',
//                     color: country.workOpportunities.partTimeAllowed ? '#10B981' : '#EF4444',
//                     letterSpacing: '-0.5px'
//                   }}>
//                     {country.workOpportunities.partTimeAllowed ? 'Allowed' : 'Not Allowed'}
//                   </div>
//                 </div>
//                 <div className="stat-box">
//                   <div style={{
//                     fontSize: '11px',
//                     color: '#64748B',
//                     fontWeight: '700',
//                     marginBottom: '12px',
//                     letterSpacing: '0.5px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Hours/Week
//                   </div>
//                   <div style={{
//                     fontSize: '24px',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     letterSpacing: '-0.5px'
//                   }}>
//                     {country.workOpportunities.hoursPerWeek}
//                   </div>
//                 </div>
//                 <div className="stat-box">
//                   <div style={{
//                     fontSize: '11px',
//                     color: '#64748B',
//                     fontWeight: '700',
//                     marginBottom: '12px',
//                     letterSpacing: '0.5px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Average Wage
//                   </div>
//                   <div style={{
//                     fontSize: '24px',
//                     fontWeight: '800',
//                     color: '#FF6B35',
//                     letterSpacing: '-0.5px'
//                   }}>
//                     {country.workOpportunities.averageWage}
//                   </div>
//                 </div>
//               </div>

//               <div className="pro-card-elevated" style={{ marginTop: '32px' }}>
//                 <h3 style={{
//                   fontSize: '19px',
//                   fontWeight: '800',
//                   color: '#1E3A5F',
//                   marginBottom: '12px',
//                   letterSpacing: '-0.3px'
//                 }}>
//                   Post-Study Work
//                 </h3>
//                 <p style={{
//                   fontSize: '16px',
//                   lineHeight: '1.7',
//                   color: '#475569',
//                   fontWeight: '500'
//                 }}>
//                   {country.workOpportunities.postStudyWork}
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* Recognition & Accreditation */}
//           <section style={{
//             padding: '120px 20px',
//             background: 'white'
//           }}>
//             <div style={{
//               maxWidth: '1200px',
//               margin: '0 auto'
//             }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Accreditation</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(32px, 5vw, 48px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px',
//                 lineHeight: '1.2'
//               }}>
//                 Recognition & Accreditation
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//                 gap: '24px'
//               }}>
//                 {country.recognitions.map((recognition, idx) => (
//                   <div key={idx} className="pro-card" style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '16px'
//                   }}>
//                     <div style={{
//                       width: '12px',
//                       height: '12px',
//                       background: '#10B981',
//                       borderRadius: '50%',
//                       flexShrink: 0
//                     }} />
//                     <span style={{
//                       fontSize: '15px',
//                       color: '#475569',
//                       fontWeight: '600'
//                     }}>
//                       {recognition}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Career Prospects */}
//           <section style={{
//             padding: '120px 20px',
//             background: '#FAFBFC'
//           }}>
//             <div style={{
//               maxWidth: '1200px',
//               margin: '0 auto'
//             }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Career Path</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(32px, 5vw, 48px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px',
//                 lineHeight: '1.2'
//               }}>
//                 Job Prospects After MBBS
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gap: '24px'
//               }}>
//                 <div className="pro-card-elevated">
//                   <p style={{
//                     fontSize: '17px',
//                     lineHeight: '1.8',
//                     color: '#475569',
//                     fontWeight: '500',
//                     marginBottom: '32px'
//                   }}>
//                     {country.careerProspects.description}
//                   </p>

//                   <h3 style={{
//                     fontSize: '19px',
//                     fontWeight: '800',
//                     color: '#1E3A5F',
//                     marginBottom: '20px',
//                     letterSpacing: '-0.3px'
//                   }}>
//                     Exams to Clear
//                   </h3>
//                   <div style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//                     gap: '16px',
//                     marginBottom: '32px'
//                   }}>
//                     {country.careerProspects.examsToClear.map((exam, idx) => (
//                       <div key={idx} style={{
//                         padding: '20px',
//                         background: '#F8FAFC',
//                         border: '1px solid #E2E8F0',
//                         borderRadius: '12px',
//                         textAlign: 'center'
//                       }}>
//                         <span style={{
//                           fontSize: '15px',
//                           color: '#1E3A5F',
//                           fontWeight: '700'
//                         }}>
//                           {exam}
//                         </span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="stat-box">
//                     <div style={{
//                       fontSize: '11px',
//                       color: '#64748B',
//                       fontWeight: '700',
//                       marginBottom: '12px',
//                       letterSpacing: '0.5px',
//                       textTransform: 'uppercase'
//                     }}>
//                       Average Salary
//                     </div>
//                     <div style={{
//                       fontSize: '32px',
//                       fontWeight: '800',
//                       color: '#10B981',
//                       letterSpacing: '-0.5px'
//                     }}>
//                       {country.careerProspects.averageSalary}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Medical Licensing */}
//           <section style={{
//             padding: '120px 20px',
//             background: 'white'
//           }}>
//             <div style={{
//               maxWidth: '1200px',
//               margin: '0 auto'
//             }}>
//               <div className="section-label">
//                 <div className="section-label-line" />
//                 <span className="section-label-text">Global Practice</span>
//               </div>

//               <h2 style={{
//                 fontSize: 'clamp(32px, 5vw, 48px)',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 marginBottom: '48px',
//                 letterSpacing: '-1px',
//                 lineHeight: '1.2'
//               }}>
//                 Medical Licensing Pathways
//               </h2>

//               <div style={{
//                 display: 'grid',
//                 gap: '24px'
//               }}>
//                 {[
//                   { country: 'India', info: country.medicalLicensing.india },
//                   { country: 'USA', info: country.medicalLicensing.usa },
//                   { country: 'UK', info: country.medicalLicensing.uk },
//                   { country: 'Other Countries', info: country.medicalLicensing.other }
//                 ].map((license, idx) => (
//                   <div key={idx} className="pro-card-elevated">
//                     <h3 style={{
//                       fontSize: '19px',
//                       fontWeight: '800',
//                       color: '#1E3A5F',
//                       marginBottom: '12px',
//                       letterSpacing: '-0.3px'
//                     }}>
//                       Practicing in {license.country}
//                     </h3>
//                     <p style={{
//                       fontSize: '16px',
//                       lineHeight: '1.7',
//                       color: '#475569',
//                       fontWeight: '500'
//                     }}>
//                       {license.info}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Key Highlights */}
//           {country.highlights && country.highlights.length > 0 && (
//             <section style={{
//               padding: '120px 20px',
//               background: '#FAFBFC'
//             }}>
//               <div style={{
//                 maxWidth: '1200px',
//                 margin: '0 auto'
//               }}>
//                 <div className="section-label">
//                   <div className="section-label-line" />
//                   <span className="section-label-text">Quick Facts</span>
//                 </div>

//                 <h2 style={{
//                   fontSize: 'clamp(32px, 5vw, 48px)',
//                   fontWeight: '800',
//                   color: '#1E3A5F',
//                   marginBottom: '48px',
//                   letterSpacing: '-1px',
//                   lineHeight: '1.2'
//                 }}>
//                   Key Highlights
//                 </h2>

//                 <div style={{
//                   display: 'grid',
//                   gap: '24px'
//                 }}>
//                   {country.highlights.map((highlight, idx) => (
//                     <div key={idx} className="pro-card-elevated">
//                       <h3 style={{
//                         fontSize: '19px',
//                         fontWeight: '800',
//                         color: '#1E3A5F',
//                         marginBottom: '12px',
//                         letterSpacing: '-0.3px'
//                       }}>
//                         {highlight.title}
//                       </h3>
//                       <p style={{
//                         fontSize: '16px',
//                         lineHeight: '1.7',
//                         color: '#475569',
//                         fontWeight: '500'
//                       }}>
//                         {highlight.description}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           )}
//         </>
//       ) : (
//         // Universities Tab
//         <section style={{
//           padding: '80px 20px 120px',
//           background: '#FAFBFC',
//           minHeight: '60vh'
//         }}>
//           <div style={{
//             maxWidth: '1400px',
//             margin: '0 auto'
//           }}>
//             <div className="section-label" style={{ marginBottom: '32px' }}>
//               <div className="section-label-line" />
//               <span className="section-label-text">Detailed Profiles</span>
//             </div>

//             {universities && universities.length > 0 ? (
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
//                 gap: '28px'
//               }}>
//                 {universities.map((uni, idx) => (
//                   <div key={idx} className="university-card">
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'flex-start',
//                       gap: '20px',
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

//       {/* Application Modal */}
//       {isApplicationModalOpen && (
//         <ApplicationModal
//           isOpen={isApplicationModalOpen}
//           onClose={() => setIsApplicationModalOpen(false)}
//           countryCode={countrySlug}
//           countryName={country.name}
//         />
//       )}
//     </div>
//   );
// }