// "use client";

// import React from 'react';
// import Link from 'next/link';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// // ============================================
// // DESTINATIONS PAGE - Mixed Design Elements
// // Hero same, mid content with mixed curves/sharp
// // ============================================

// const regions = {
//   'Popular Destinations': {
//     description: 'Most preferred affordable & NMC-approved destinations for Indian students in 2025-2026',
//     color: '#FF6B35',
//     countries: [
//       { 
//         name: 'Russia', 
//         slug: 'russia', 
//         flag: '🇷🇺', 
//         universities: '60+', 
//         image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=400&q=80'
//       },
//       { 
//         name: 'China', 
//         slug: 'china', 
//         flag: '🇨🇳', 
//         universities: '45+', 
//         image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&q=80'
//       },
//       { 
//         name: 'Kazakhstan', 
//         slug: 'kazakhstan', 
//         flag: '🇰🇿', 
//         universities: '15+', 
//         image: 'https://images.unsplash.com/photo-1677842296338-eeb8c866d22c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2F6YWtoc3RhbnxlbnwwfHwwfHx8MA%3D%3D'
//       },
//       { 
//         name: 'Kyrgyzstan', 
//         slug: 'kyrgyzstan', 
//         flag: '🇰🇬', 
//         universities: '10+', 
//         image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&q=80'
//       },
//       { 
//         name: 'Georgia', 
//         slug: 'georgia', 
//         flag: '🇬🇪', 
//         universities: '12+', 
//         image: 'https://images.unsplash.com/photo-1563413613822-2e335ab72e74?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdlb3JnaWF8ZW58MHx8MHx8fDA%3D'
//       },
//       { 
//         name: 'Philippines', 
//         slug: 'philippines', 
//         flag: '🇵🇭', 
//         universities: '40+', 
//         image: 'https://images.unsplash.com/photo-1607282729548-e1d13feae36f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBoaWxpcHBpbmVzfGVufDB8fDB8fHww'
//       },
//       { 
//         name: 'Canada', 
//         slug: 'canada', 
//         flag: '🇨🇦', 
//         universities: '40+', 
//         image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80'
//       },
//       { 
//         name: 'Uzbekistan', 
//         slug: 'uzbekistan', 
//         flag: '🇺🇿', 
//         universities: '8+', 
//         image: 'https://images.unsplash.com/photo-1622030797403-fa221ce5d208?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHV6YmVraXN0YW4lMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww'
//       },
//     ]
//   },
//   // 'South Asia & Nearby': {
//   //   description: 'Proximate options with cultural similarity, direct NMC recognition & affordable fees',
//   //   color: '#2EC4B6',
//   //   countries: [
//   //     { 
//   //       name: 'Nepal', 
//   //       slug: 'nepal', 
//   //       flag: '🇳🇵', 
//   //       universities: '20+',
//   //       image: 'https://images.unsplash.com/photo-1504197832061-98356e3dcdcf?w=400&q=80'
//   //     },
//   //     { 
//   //       name: 'Bangladesh', 
//   //       slug: 'bangladesh', 
//   //       flag: '🇧🇩', 
//   //       universities: '25+',
//   //       image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=400&q=80'
//   //     },
//   //   ]
//   // },
//   // 'Eastern & Central Europe': {
//   //   description: 'European-standard MBBS with good clinical exposure & growing popularity',
//   //   color: '#8B5CF6',
//   //   countries: [
//   //     { 
//   //       name: 'Poland', 
//   //       slug: 'poland', 
//   //       flag: '🇵🇱', 
//   //       universities: '20+',
//   //       image: 'https://images.unsplash.com/photo-1564507592333-c5f3f5e4d8e3?w=400&q=80'
//   //     },
//   //     { 
//   //       name: 'Romania', 
//   //       slug: 'romania', 
//   //       flag: '🇷🇴', 
//   //       universities: '12+',
//   //       image: 'https://images.unsplash.com/photo-1564507592333-c5f3f5e4d8e3?w=400&q=80'
//   //     },
//   //     { 
//   //       name: 'Latvia', 
//   //       slug: 'latvia', 
//   //       flag: '🇱🇻', 
//   //       universities: '8+',
//   //       image: 'https://images.unsplash.com/photo-1564507592333-c5f3f5e4d8e3?w=400&q=80'
//   //     },
//   //     { 
//   //       name: 'Lithuania', 
//   //       slug: 'lithuania', 
//   //       flag: '🇱🇹', 
//   //       universities: '8+',
//   //       image: 'https://images.unsplash.com/photo-1564507592333-c5f3f5e4d8e3?w=400&q=80'
//   //     },
//   //     { 
//   //       name: 'Ukraine', 
//   //       slug: 'ukraine', 
//   //       flag: '🇺🇦', 
//   //       universities: '30+',
//   //       image: 'https://images.unsplash.com/photo-1568619655021-15bbbf17f40c?w=400&q=80'
//   //     },
//   //     { 
//   //       name: 'Belarus', 
//   //       slug: 'belarus', 
//   //       flag: '🇧🇾', 
//   //       universities: '15+',
//   //       image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80'
//   //     },
//   //   ]
//   // },
//   // 'Other  Destinations': {
//   //   description: 'Emerging & specialized options with NMC recognition & varied benefits',
//   //   color: '#64748B',
//   //   countries: [
//   //     { 
//   //       name: 'Armenia', 
//   //       slug: 'armenia', 
//   //       flag: '🇦🇲', 
//   //       universities: '10+',
//   //       image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80'
//   //     },
//   //     { 
//   //       name: 'Egypt', 
//   //       slug: 'egypt', 
//   //       flag: '🇪🇬', 
//   //       universities: '25+',
//   //       image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400&q=80'
//   //     },
//   //     { 
//   //       name: 'Malaysia', 
//   //       slug: 'malaysia', 
//   //       flag: '🇲🇾', 
//   //       universities: '15+',
//   //       image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80'
//   //     },
//   //     { 
//   //       name: 'Mauritius', 
//   //       slug: 'mauritius', 
//   //       flag: '🇲🇺', 
//   //       universities: '5+',
//   //       image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=400&q=80'
//   //     },
//   //     { 
//   //       name: 'Azerbaijan', 
//   //       slug: 'azerbaijan', 
//   //       flag: '🇦🇿', 
//   //       universities: '10+',
//   //       image: 'https://images.unsplash.com/photo-1585128903994-03e4d2a1acc4?w=400&q=80'
//   //     },
//   //   ]
//   // }
// };

// export default function DestinationsListPage() {
//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: '#FFFFFF',
//       fontFamily: '"Plus Jakarta Sans", sans-serif'
//     }}>
//       <Navbar />
      
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

//         /* Pills */
//         .region-btn {
//           padding: 12px 24px;
//           border-radius: 50px;
//           font-size: 14px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           text-decoration: none;
//           display: inline-block;
//         }

//         .region-btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 16px rgba(0,0,0,0.15);
//         }

//         .stat-badge-pill {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 10px 20px;
//           background: rgba(255,255,255,0.1);
//           border-radius: 50px;
//           backdrop-filter: blur(10px);
//         }

//         /* Featured Cards - Rounded */
//         .country-card-featured {
//           position: relative;
//           height: 280px;
//           border-radius: 24px;
//           overflow: hidden;
//           text-decoration: none;
//           transition: all 0.4s ease;
//           border: none;
//           display: block;
//         }

//         .country-card-featured:hover {
//           transform: translateY(-8px) scale(1.02);
//           box-shadow: 0 24px 48px rgba(0,0,0,0.15);
//         }

//         .country-card-featured .card-bg {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background-size: cover;
//           background-position: center;
//           transition: transform 0.6s ease;
//         }

//         .country-card-featured:hover .card-bg {
//           transform: scale(1.15);
//         }

//         .country-card-featured .card-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(180deg, rgba(30,58,95,0.1) 0%, rgba(30,58,95,0.85) 100%);
//         }

//         /* Regular Cards - Mix of sharp and curved */
//         .country-card-compact {
//           background: white;
//           padding: 20px;
//           text-decoration: none;
//           transition: all 0.3s ease;
//           border: 2px solid #E2E8F0;
//           display: block;
//           position: relative;
//         }

//         .country-card-compact::before {
//           content: '';
//           position: absolute;
//           left: 0;
//           top: 0;
//           bottom: 0;
//           width: 4px;
//           background: transparent;
//           transition: all 0.3s ease;
//         }

//         .country-card-compact:hover {
//           transform: translateX(4px);
//           border-color: #CBD5E1;
//           box-shadow: 0 12px 24px rgba(0,0,0,0.08);
//         }

//         .country-card-compact:hover::before {
//           background: var(--region-color);
//         }

//         .country-card-compact:hover .card-arrow {
//           transform: translateX(4px);
//         }

//         /* Flag Circle - Curved */
//         .flag-circle {
//           width: 56px;
//           height: 56px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 28px;
//           flex-shrink: 0;
//           transition: all 0.3s ease;
//         }

//         .country-card-compact:hover .flag-circle {
//           transform: rotate(10deg) scale(1.1);
//         }

//         /* Region Header Badge - Sharp */
//         .region-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           padding: 8px 0;
//           margin-bottom: 12px;
//         }

//         .region-dot {
//           width: 12px;
//           height: 12px;
//           flex-shrink: 0;
//         }

//         /* Section Styling */
//         .region-section {
//           padding: 80px 48px;
//           border-bottom: 1px solid #E2E8F0;
//         }

//         .region-section:last-child {
//           border-bottom: none;
//         }

//         .region-section:nth-child(even) {
//           background: #FAFBFC;
//         }

//         /* Responsive */
//         @media (max-width: 1024px) {
//           .featured-grid {
//             grid-template-columns: repeat(2, 1fr) !important;
//           }

//           .countries-grid-compact {
//             grid-template-columns: repeat(2, 1fr) !important;
//           }
//         }

//         @media (max-width: 768px) {
//           .hero-section-wrapper {
//             padding: 140px 20px 80px !important;
//           }

//           .hero-title {
//             font-size: 36px !important;
//           }

//           .region-section {
//             padding: 60px 20px !important;
//           }

//           .featured-grid {
//             grid-template-columns: 1fr !important;
//           }

//           .countries-grid-compact {
//             grid-template-columns: 1fr !important;
//           }

//           .region-buttons {
//             flex-wrap: wrap !important;
//             justify-content: center !important;
//           }

//           .stats-row {
//             flex-direction: column !important;
//             gap: 16px !important;
//           }
//         }
//       `}</style>

//       {/* Hero Section - KEEP SAME */}
//       <section style={{
//         position: 'relative',
//         padding: '180px 48px 120px',
//         overflow: 'hidden',
//         minHeight: '500px'
//       }}>
//         {/* Background Image */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }} />
        
//         {/* Overlay */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)'
//         }} />
        
//         <div style={{
//           position: 'relative',
//           zIndex: 2,
//           maxWidth: '1200px',
//           margin: '0 auto',
//           textAlign: 'center'
//         }}>
//           {/* Badge - CURVED PILLS */}
//           <div style={{
//             display: 'inline-flex',
//             alignItems: 'center',
//             gap: '12px',
//             marginBottom: '24px'
//           }}>
//             <div style={{
//               width: '40px',
//               height: '3px',
//               background: '#FF6B35',
//               borderRadius: '2px'
//             }} />
//             <span style={{
//               fontSize: '14px',
//               fontWeight: '700',
//               color: 'rgba(255,255,255,0.8)',
//               letterSpacing: '2px',
//               textTransform: 'uppercase'
//             }}>
//               Study Destinations
//             </span>
//             <div style={{
//               width: '40px',
//               height: '3px',
//               background: '#FF6B35',
//               borderRadius: '2px'
//             }} />
//           </div>

//           {/* Title */}
//           <h1 
//             className="hero-title"
//             style={{
//               fontSize: '56px',
//               fontWeight: '800',
//               color: 'white',
//               letterSpacing: '-2px',
//               marginBottom: '20px',
//               lineHeight: '1.1'
//             }}
//           >
//             Your Gateway to<br />
//             <span style={{ color: '#FF6B35' }}>Global Education</span>
//           </h1>

//           {/* Subtitle */}
//           <p style={{
//             fontSize: '18px',
//             color: 'rgba(255,255,255,0.8)',
//             maxWidth: '600px',
//             margin: '0 auto 40px',
//             lineHeight: '1.7'
//           }}>
//             Explore world-class education opportunities across 26 countries with 500+ partner universities
//           </p>

//           {/* Stats - CURVED PILLS */}
//           <div 
//             className="stats-row"
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: '24px'
//             }}
//           >
//             <div className="stat-badge-pill">
//               <span style={{ fontSize: '28px', fontWeight: '800', color: 'white' }}>26</span>
//               <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Countries</span>
//             </div>
//             <div className="stat-badge-pill">
//               <span style={{ fontSize: '28px', fontWeight: '800', color: 'white' }}>500+</span>
//               <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Universities</span>
//             </div>
//             <div className="stat-badge-pill">
//               <span style={{ fontSize: '28px', fontWeight: '800', color: 'white' }}>50+</span>
//               <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Programs</span>
//             </div>
//           </div>

//           {/* Quick Region Buttons - CURVED PILLS */}
//           <div 
//             className="region-buttons"
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: '12px',
//               marginTop: '48px',
//               flexWrap: 'wrap'
//             }}
//           >
//             {Object.entries(regions).slice(0, 4).map(([regionName, regionData]) => (
//               <a
//                 key={regionName}
//                 href={`#${regionName.toLowerCase().replace(/\s+/g, '-')}`}
//                 className="region-btn"
//                 style={{
//                   background: regionData.color,
//                   color: 'white'
//                 }}
//               >
//                 {regionName}
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Region Sections - MIXED DESIGN */}
//       {Object.entries(regions).map(([regionName, regionData], regionIdx) => (
//         <section 
//           key={regionName}
//           id={regionName.toLowerCase().replace(/\s+/g, '-')}
//           className="region-section"
//         >
//           <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
//             {/* Region Header - SHARP badge with CURVED button */}
//             <div style={{
//               display: 'flex',
//               alignItems: 'flex-end',
//               justifyContent: 'space-between',
//               marginBottom: '48px',
//               flexWrap: 'wrap',
//               gap: '24px'
//             }}>
//               <div>
//                 {/* Sharp Badge */}
//                 <div className="region-badge">
//                   <div 
//                     className="region-dot"
//                     style={{ background: regionData.color }}
//                   />
//                   <span style={{
//                     fontSize: '13px',
//                     fontWeight: '700',
//                     color: '#64748B',
//                     letterSpacing: '1.5px',
//                     textTransform: 'uppercase'
//                   }}>
//                     {regionData.countries.length} Countries
//                   </span>
//                 </div>
                
//                 <h2 style={{
//                   fontSize: '40px',
//                   fontWeight: '800',
//                   color: '#1E3A5F',
//                   letterSpacing: '-1px',
//                   marginBottom: '12px',
//                   lineHeight: '1.2'
//                 }}>
//                   {regionName}
//                 </h2>
                
//                 <p style={{
//                   fontSize: '17px',
//                   color: '#64748B',
//                   maxWidth: '600px',
//                   lineHeight: '1.6'
//                 }}>
//                   {regionData.description}
//                 </p>
//               </div>

//               {/* Curved CTA Button */}
//               <Link
//                 href="/contact"
//                 style={{
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   gap: '10px',
//                   padding: '16px 32px',
//                   background: regionData.color,
//                   color: 'white',
//                   borderRadius: '50px',
//                   fontWeight: '700',
//                   fontSize: '15px',
//                   textDecoration: 'none',
//                   transition: 'all 0.3s ease',
//                   boxShadow: `0 8px 16px ${regionData.color}33`
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-2px)';
//                   e.currentTarget.style.boxShadow = `0 12px 24px ${regionData.color}55`;
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.boxShadow = `0 8px 16px ${regionData.color}33`;
//                 }}
//               >
//                 Get Guidance →
//               </Link>
//             </div>

//             {/* Countries Grid */}
//             {regionIdx === 0 ? (
//               // Featured destinations - CURVED CARDS with images
//               <div 
//                 className="featured-grid"
//                 style={{
//                   display: 'grid',
//                   gridTemplateColumns: 'repeat(4, 1fr)',
//                   gap: '24px'
//                 }}
//               >
//                 {regionData.countries.map((country: any) => (
//                   <Link
//                     key={country.slug}
//                       href={country.slug === 'russia' ? 'https://globalrusiec.com/' : `/destinations/${country.slug}`}
//                     className="country-card-featured"
//                   >
//                     <div 
//                       className="card-bg"
//                       style={{ backgroundImage: `url(${country.image})` }}
//                     />
//                     <div className="card-overlay" />
//                     <div style={{
//                       position: 'relative',
//                       zIndex: 2,
//                       height: '100%',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       justifyContent: 'flex-end',
//                       padding: '28px'
//                     }}>
//                       <span style={{ fontSize: '40px', marginBottom: '12px' }}>{country.flag}</span>
//                       <h3 style={{
//                         fontSize: '24px',
//                         fontWeight: '800',
//                         color: 'white',
//                         marginBottom: '6px',
//                         letterSpacing: '-0.5px'
//                       }}>
//                         {country.name}
//                       </h3>
//                       <div style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'space-between'
//                       }}>
//                         <span style={{
//                           fontSize: '14px',
//                           color: 'rgba(255,255,255,0.9)',
//                           fontWeight: '600'
//                         }}>
//                           {country.universities} Universities
//                         </span>
//                         <span 
//                           className="card-arrow"
//                           style={{
//                             color: '#FF6B35',
//                             fontSize: '24px',
//                             fontWeight: '700',
//                             transition: 'transform 0.3s ease'
//                           }}
//                         >→</span>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             ) : (
//               // Regular cards - SHARP with curved flag circles
//               <div 
//                 className="countries-grid-compact"
//                 style={{
//                   display: 'grid',
//                   gridTemplateColumns: 'repeat(3, 1fr)',
//                   gap: '20px'
//                 }}
//               >
//                 {regionData.countries.map((country: any) => (
//                   <Link
//                     key={country.slug}
//                     href={`/destinations/${country.slug}`}
//                     className="country-card-compact"
//                     style={{ '--region-color': regionData.color } as React.CSSProperties}
//                   >
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '16px'
//                     }}>
//                       {/* Circular flag badge */}
//                       <div 
//                         className="flag-circle"
//                         style={{
//                           background: `${regionData.color}15`,
//                           border: `2px solid ${regionData.color}30`
//                         }}
//                       >
//                         {country.flag}
//                       </div>
                      
//                       <div style={{ flex: 1 }}>
//                         <h3 style={{
//                           fontSize: '18px',
//                           fontWeight: '700',
//                           color: '#1E3A5F',
//                           marginBottom: '4px',
//                           letterSpacing: '-0.3px'
//                         }}>
//                           {country.name}
//                         </h3>
//                         <span style={{
//                           fontSize: '13px',
//                           color: '#64748B',
//                           fontWeight: '600'
//                         }}>
//                           {country.universities} Universities
//                         </span>
//                       </div>
                      
//                       <span 
//                         className="card-arrow"
//                         style={{
//                           color: regionData.color,
//                           fontSize: '20px',
//                           fontWeight: '700',
//                           transition: 'transform 0.3s ease'
//                         }}
//                       >→</span>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>
//       ))}

//       <Footer />
//     </div>
//   );
// }
// // "use client";

// // import React, { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import Footer from '../components/Footer';
// // import Navbar from '../components/Navbar';
// // import { getAllCountries, CountryInfo } from '../../services/dbServices';

// // // ============================================
// // // DESTINATIONS PAGE - Firestore-Powered
// // // Fetches countries from Firestore and organizes by regions
// // // ============================================

// // interface RegionData {
// //   description: string;
// //   color: string;
// //   countries: CountryCard[];
// // }

// // interface CountryCard {
// //   name: string;
// //   slug: string;
// //   flag: string;
// //   universities: string;
// //   image: string;
// // }

// // interface Regions {
// //   [key: string]: RegionData;
// // }

// // export default function DestinationsListPage() {
// //   const [regions, setRegions] = useState<Regions>({});
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     const fetchCountries = async () => {
// //       try {
// //         setLoading(true);
// //         setError(null);

// //         // Fetch all countries from Firestore
// //         const countriesData = await getAllCountries();

// //         // Organize countries into regions
// //         const organizedRegions = organizeCountriesByRegion(countriesData);
// //         setRegions(organizedRegions);

// //         setLoading(false);
// //       } catch (err) {
// //         console.error('Error fetching countries:', err);
// //         setError('Failed to load destinations');
// //         setLoading(false);
// //       }
// //     };

// //     fetchCountries();
// //   }, []);

// //   // Function to organize countries by region
// //   const organizeCountriesByRegion = (countriesData: Record<string, CountryInfo>): Regions => {
// //     // Define region categories and their properties
// //     const regionConfig: Regions = {
// //       'Popular MBBS Destinations': {
// //         description: 'Most preferred affordable & NMC-approved destinations for Indian students in 2025-2026',
// //         color: '#FF6B35',
// //         countries: []
// //       },
// //       'South Asia & Nearby': {
// //         description: 'Proximate options with cultural similarity, direct NMC recognition & affordable fees',
// //         color: '#2EC4B6',
// //         countries: []
// //       },
// //       'Eastern & Central Europe': {
// //         description: 'European-standard MBBS with good clinical exposure & growing popularity',
// //         color: '#8B5CF6',
// //         countries: []
// //       },
// //       'Other MBBS Destinations': {
// //         description: 'Emerging & specialized options with NMC recognition & varied benefits',
// //         color: '#64748B',
// //         countries: []
// //       }
// //     };

// //     // Define country categorization (you can move this to Firestore too)
// //     const countryCategories: Record<string, string> = {
// //       'russia': 'Popular MBBS Destinations',
// //       'china': 'Popular MBBS Destinations',
// //       'kazakhstan': 'Popular MBBS Destinations',
// //       'kyrgyzstan': 'Popular MBBS Destinations',
// //       'georgia': 'Popular MBBS Destinations',
// //       'philippines': 'Popular MBBS Destinations',
// //       'uzbekistan': 'Popular MBBS Destinations',
// //       'nepal': 'South Asia & Nearby',
// //       'bangladesh': 'South Asia & Nearby',
// //       'poland': 'Eastern & Central Europe',
// //       'romania': 'Eastern & Central Europe',
// //       'latvia': 'Eastern & Central Europe',
// //       'lithuania': 'Eastern & Central Europe',
// //       'ukraine': 'Eastern & Central Europe',
// //       'belarus': 'Eastern & Central Europe',
// //       'armenia': 'Other MBBS Destinations',
// //       'egypt': 'Other MBBS Destinations',
// //       'malaysia': 'Other MBBS Destinations',
// //       'mauritius': 'Other MBBS Destinations',
// //       'azerbaijan': 'Other MBBS Destinations',
// //     };

// //     // Organize countries into their respective regions
// //     Object.values(countriesData).forEach((country) => {
// //       const regionName = countryCategories[country.slug] || 'Other MBBS Destinations';
      
// //       if (regionConfig[regionName]) {
// //         regionConfig[regionName].countries.push({
// //           name: country.name,
// //           slug: country.slug,
// //           flag: country.flag,
// //           universities: country.stats.universities,
// //           image: country.heroImage
// //         });
// //       }
// //     });

// //     // Filter out empty regions
// //     const filteredRegions: Regions = {};
// //     Object.entries(regionConfig).forEach(([name, data]) => {
// //       if (data.countries.length > 0) {
// //         filteredRegions[name] = data;
// //       }
// //     });

// //     return filteredRegions;
// //   };

// //   // Loading state
// //   if (loading) {
// //     return (
// //       <div style={{
// //         minHeight: '100vh',
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         background: '#FFFFFF',
// //         fontFamily: '"Plus Jakarta Sans", sans-serif'
// //       }}>
// //         <div style={{ textAlign: 'center' }}>
// //           <div style={{
// //             width: '60px',
// //             height: '60px',
// //             border: '4px solid #E2E8F0',
// //             borderTop: '4px solid #FF6B35',
// //             borderRadius: '50%',
// //             animation: 'spin 1s linear infinite',
// //             margin: '0 auto 20px'
// //           }} />
// //           <p style={{
// //             fontSize: '16px',
// //             color: '#64748B',
// //             fontWeight: '600'
// //           }}>
// //             Loading destinations...
// //           </p>
// //         </div>
// //         <style>{`
// //           @keyframes spin {
// //             0% { transform: rotate(0deg); }
// //             100% { transform: rotate(360deg); }
// //           }
// //         `}</style>
// //       </div>
// //     );
// //   }

// //   // Error state
// //   if (error) {
// //     return (
// //       <div style={{
// //         minHeight: '100vh',
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         background: '#FFFFFF',
// //         fontFamily: '"Plus Jakarta Sans", sans-serif'
// //       }}>
// //         <div style={{
// //           textAlign: 'center',
// //           maxWidth: '500px',
// //           padding: '40px'
// //         }}>
// //           <h1 style={{
// //             fontSize: '48px',
// //             fontWeight: '800',
// //             color: '#1E3A5F',
// //             marginBottom: '16px'
// //           }}>
// //             Oops!
// //           </h1>
// //           <p style={{
// //             fontSize: '16px',
// //             color: '#64748B',
// //             marginBottom: '32px',
// //             lineHeight: '1.6'
// //           }}>
// //             {error}
// //           </p>
// //           <button
// //             onClick={() => window.location.reload()}
// //             style={{
// //               padding: '16px 32px',
// //               background: '#FF6B35',
// //               color: 'white',
// //               border: 'none',
// //               borderRadius: '50px',
// //               fontWeight: '700',
// //               fontSize: '16px',
// //               cursor: 'pointer'
// //             }}
// //           >
// //             Try Again
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={{
// //       minHeight: '100vh',
// //       background: '#FFFFFF',
// //       fontFamily: '"Plus Jakarta Sans", sans-serif'
// //     }}>
// //       <Navbar />
      
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

// //         /* Pills */
// //         .region-btn {
// //           padding: 12px 24px;
// //           border-radius: 50px;
// //           font-size: 14px;
// //           font-weight: 600;
// //           cursor: pointer;
// //           transition: all 0.3s ease;
// //           text-decoration: none;
// //           display: inline-block;
// //         }

// //         .region-btn:hover {
// //           transform: translateY(-2px);
// //           box-shadow: 0 8px 16px rgba(0,0,0,0.15);
// //         }

// //         .stat-badge-pill {
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 8px;
// //           padding: 10px 20px;
// //           background: rgba(255,255,255,0.1);
// //           border-radius: 50px;
// //           backdrop-filter: blur(10px);
// //         }

// //         /* Featured Cards - Rounded */
// //         .country-card-featured {
// //           position: relative;
// //           height: 280px;
// //           border-radius: 24px;
// //           overflow: hidden;
// //           text-decoration: none;
// //           transition: all 0.4s ease;
// //           border: none;
// //           display: block;
// //         }

// //         .country-card-featured:hover {
// //           transform: translateY(-8px) scale(1.02);
// //           box-shadow: 0 24px 48px rgba(0,0,0,0.15);
// //         }

// //         .country-card-featured .card-bg {
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           bottom: 0;
// //           background-size: cover;
// //           background-position: center;
// //           transition: transform 0.6s ease;
// //         }

// //         .country-card-featured:hover .card-bg {
// //           transform: scale(1.1);
// //         }

// //         .country-card-featured .card-overlay {
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           bottom: 0;
// //           background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 100%);
// //           z-index: 1;
// //         }

// //         .country-card-featured:hover .card-arrow {
// //           transform: translateX(6px);
// //         }

// //         /* Compact Cards - SHARP */
// //         .country-card-compact {
// //           display: block;
// //           padding: 20px;
// //           background: white;
// //           border: 1px solid #E2E8F0;
// //           text-decoration: none;
// //           transition: all 0.3s ease;
// //         }

// //         .country-card-compact:hover {
// //           border-color: var(--region-color);
// //           box-shadow: 0 8px 20px rgba(0,0,0,0.08);
// //           transform: translateY(-4px);
// //         }

// //         .country-card-compact:hover .card-arrow {
// //           transform: translateX(6px);
// //         }

// //         /* Region styling */
// //         .region-section {
// //           padding: 80px 20px;
// //           background: white;
// //         }

// //         .region-section:nth-child(odd) {
// //           background: #FAFBFC;
// //         }

// //         .region-badge {
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 10px;
// //           padding: 10px 20px;
// //           background: #F8FAFC;
// //           border: 1px solid #E2E8F0;
// //           margin-bottom: 20px;
// //         }

// //         .region-dot {
// //           width: 8px;
// //           height: 8px;
// //           border-radius: 50%;
// //         }

// //         .flag-circle {
// //           width: 56px;
// //           height: 56px;
// //           border-radius: 50%;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           font-size: 28px;
// //           flex-shrink: 0;
// //         }

// //         /* Responsive */
// //         @media (max-width: 1024px) {
// //           .featured-grid {
// //             grid-template-columns: repeat(2, 1fr) !important;
// //           }
          
// //           .countries-grid-compact {
// //             grid-template-columns: repeat(2, 1fr) !important;
// //           }
// //         }

// //         @media (max-width: 640px) {
// //           .featured-grid {
// //             grid-template-columns: 1fr !important;
// //           }
          
// //           .countries-grid-compact {
// //             grid-template-columns: 1fr !important;
// //           }

// //           .region-section {
// //             padding: 60px 20px;
// //           }
// //         }
// //       `}</style>

// //       {/* Hero Section - CURVED */}
// //       <section style={{
// //         position: 'relative',
// //         minHeight: '80vh',
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         background: 'linear-gradient(135deg, #1E3A5F 0%, #0F2744 100%)',
// //         borderRadius: '0 0 80px 80px',
// //         padding: '120px 20px 80px',
// //         overflow: 'hidden'
// //       }}>
// //         {/* Decorative elements */}
// //         <div style={{
// //           position: 'absolute',
// //           top: '-10%',
// //           right: '-5%',
// //           width: '500px',
// //           height: '500px',
// //           background: 'rgba(255,107,53,0.1)',
// //           borderRadius: '50%',
// //           filter: 'blur(60px)'
// //         }} />
        
// //         <div style={{
// //           position: 'absolute',
// //           bottom: '-10%',
// //           left: '-5%',
// //           width: '400px',
// //           height: '400px',
// //           background: 'rgba(46,196,182,0.1)',
// //           borderRadius: '50%',
// //           filter: 'blur(60px)'
// //         }} />

// //         <div style={{
// //           position: 'relative',
// //           zIndex: 2,
// //           maxWidth: '1200px',
// //           textAlign: 'center'
// //         }}>
// //           {/* Pill badge */}
// //           <div className="stat-badge-pill" style={{ margin: '0 auto 24px' }}>
// //             <span style={{
// //               fontSize: '13px',
// //               fontWeight: '700',
// //               color: 'rgba(255,255,255,0.9)',
// //               letterSpacing: '1px',
// //               textTransform: 'uppercase'
// //             }}>
// //               {Object.values(regions).reduce((sum, region) => sum + region.countries.length, 0)}+ Destinations
// //             </span>
// //           </div>

// //           <h1 style={{
// //             fontSize: 'clamp(40px, 8vw, 80px)',
// //             fontWeight: '800',
// //             color: 'white',
// //             marginBottom: '24px',
// //             letterSpacing: '-2px',
// //             lineHeight: '1.1'
// //           }}>
// //             Study MBBS Abroad
// //           </h1>
          
// //           <p style={{
// //             fontSize: 'clamp(18px, 3vw, 24px)',
// //             color: 'rgba(255,255,255,0.9)',
// //             marginBottom: '48px',
// //             maxWidth: '800px',
// //             margin: '0 auto 48px',
// //             lineHeight: '1.6',
// //             fontWeight: '500'
// //           }}>
// //             Explore affordable, NMC-approved medical universities across the globe. Your journey to becoming a doctor starts here.
// //           </p>

// //           {/* Region pills navigation */}
// //           <div style={{
// //             display: 'flex',
// //             flexWrap: 'wrap',
// //             gap: '12px',
// //             justifyContent: 'center',
// //             maxWidth: '900px',
// //             margin: '0 auto'
// //           }}>
// //             {Object.entries(regions).slice(0, 4).map(([regionName, regionData]) => (
// //               <a
// //                 key={regionName}
// //                 href={`#${regionName.toLowerCase().replace(/\s+/g, '-')}`}
// //                 className="region-btn"
// //                 style={{
// //                   background: regionData.color,
// //                   color: 'white'
// //                 }}
// //               >
// //                 {regionName}
// //               </a>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Region Sections - MIXED DESIGN */}
// //       {Object.entries(regions).map(([regionName, regionData], regionIdx) => (
// //         <section 
// //           key={regionName}
// //           id={regionName.toLowerCase().replace(/\s+/g, '-')}
// //           className="region-section"
// //         >
// //           <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
// //             {/* Region Header - SHARP badge with CURVED button */}
// //             <div style={{
// //               display: 'flex',
// //               alignItems: 'flex-end',
// //               justifyContent: 'space-between',
// //               marginBottom: '48px',
// //               flexWrap: 'wrap',
// //               gap: '24px'
// //             }}>
// //               <div>
// //                 {/* Sharp Badge */}
// //                 <div className="region-badge">
// //                   <div 
// //                     className="region-dot"
// //                     style={{ background: regionData.color }}
// //                   />
// //                   <span style={{
// //                     fontSize: '13px',
// //                     fontWeight: '700',
// //                     color: '#64748B',
// //                     letterSpacing: '1.5px',
// //                     textTransform: 'uppercase'
// //                   }}>
// //                     {regionData.countries.length} Countries
// //                   </span>
// //                 </div>
                
// //                 <h2 style={{
// //                   fontSize: '40px',
// //                   fontWeight: '800',
// //                   color: '#1E3A5F',
// //                   letterSpacing: '-1px',
// //                   marginBottom: '12px',
// //                   lineHeight: '1.2'
// //                 }}>
// //                   {regionName}
// //                 </h2>
                
// //                 <p style={{
// //                   fontSize: '17px',
// //                   color: '#64748B',
// //                   maxWidth: '600px',
// //                   lineHeight: '1.6'
// //                 }}>
// //                   {regionData.description}
// //                 </p>
// //               </div>

// //               {/* Curved CTA Button */}
// //               <Link
// //                 href="/contact"
// //                 style={{
// //                   display: 'inline-flex',
// //                   alignItems: 'center',
// //                   gap: '10px',
// //                   padding: '16px 32px',
// //                   background: regionData.color,
// //                   color: 'white',
// //                   borderRadius: '50px',
// //                   fontWeight: '700',
// //                   fontSize: '15px',
// //                   textDecoration: 'none',
// //                   transition: 'all 0.3s ease',
// //                   boxShadow: `0 8px 16px ${regionData.color}33`
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.transform = 'translateY(-2px)';
// //                   e.currentTarget.style.boxShadow = `0 12px 24px ${regionData.color}55`;
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.transform = 'translateY(0)';
// //                   e.currentTarget.style.boxShadow = `0 8px 16px ${regionData.color}33`;
// //                 }}
// //               >
// //                 Get Guidance →
// //               </Link>
// //             </div>

// //             {/* Countries Grid */}
// //             {regionIdx === 0 ? (
// //               // Featured destinations - CURVED CARDS with images
// //               <div 
// //                 className="featured-grid"
// //                 style={{
// //                   display: 'grid',
// //                   gridTemplateColumns: 'repeat(4, 1fr)',
// //                   gap: '24px'
// //                 }}
// //               >
// //                 {regionData.countries.map((country) => (
// //                   <Link
// //                     key={country.slug}
// //                     href={`/destinations/${country.slug}`}
// //                     className="country-card-featured"
// //                   >
// //                     <div 
// //                       className="card-bg"
// //                       style={{ backgroundImage: `url(${country.image})` }}
// //                     />
// //                     <div className="card-overlay" />
// //                     <div style={{
// //                       position: 'relative',
// //                       zIndex: 2,
// //                       height: '100%',
// //                       display: 'flex',
// //                       flexDirection: 'column',
// //                       justifyContent: 'flex-end',
// //                       padding: '28px'
// //                     }}>
// //                       <span style={{ fontSize: '40px', marginBottom: '12px' }}>{country.flag}</span>
// //                       <h3 style={{
// //                         fontSize: '24px',
// //                         fontWeight: '800',
// //                         color: 'white',
// //                         marginBottom: '6px',
// //                         letterSpacing: '-0.5px'
// //                       }}>
// //                         {country.name}
// //                       </h3>
// //                       <div style={{
// //                         display: 'flex',
// //                         alignItems: 'center',
// //                         justifyContent: 'space-between'
// //                       }}>
// //                         <span style={{
// //                           fontSize: '14px',
// //                           color: 'rgba(255,255,255,0.9)',
// //                           fontWeight: '600'
// //                         }}>
// //                           {country.universities} Universities
// //                         </span>
// //                         <span 
// //                           className="card-arrow"
// //                           style={{
// //                             color: '#FF6B35',
// //                             fontSize: '24px',
// //                             fontWeight: '700',
// //                             transition: 'transform 0.3s ease'
// //                           }}
// //                         >→</span>
// //                       </div>
// //                     </div>
// //                   </Link>
// //                 ))}
// //               </div>
// //             ) : (
// //               // Regular cards - SHARP with curved flag circles
// //               <div 
// //                 className="countries-grid-compact"
// //                 style={{
// //                   display: 'grid',
// //                   gridTemplateColumns: 'repeat(3, 1fr)',
// //                   gap: '20px'
// //                 }}
// //               >
// //                 {regionData.countries.map((country) => (
// //                   <Link
// //                     key={country.slug}
// //                     href={`/destinations/${country.slug}`}
// //                     className="country-card-compact"
// //                     style={{ '--region-color': regionData.color } as React.CSSProperties}
// //                   >
// //                     <div style={{
// //                       display: 'flex',
// //                       alignItems: 'center',
// //                       gap: '16px'
// //                     }}>
// //                       {/* Circular flag badge */}
// //                       <div 
// //                         className="flag-circle"
// //                         style={{
// //                           background: `${regionData.color}15`,
// //                           border: `2px solid ${regionData.color}30`
// //                         }}
// //                       >
// //                         {country.flag}
// //                       </div>
                      
// //                       <div style={{ flex: 1 }}>
// //                         <h3 style={{
// //                           fontSize: '18px',
// //                           fontWeight: '700',
// //                           color: '#1E3A5F',
// //                           marginBottom: '4px',
// //                           letterSpacing: '-0.3px'
// //                         }}>
// //                           {country.name}
// //                         </h3>
// //                         <span style={{
// //                           fontSize: '13px',
// //                           color: '#64748B',
// //                           fontWeight: '600'
// //                         }}>
// //                           {country.universities} Universities
// //                         </span>
// //                       </div>
                      
// //                       <span 
// //                         className="card-arrow"
// //                         style={{
// //                           color: regionData.color,
// //                           fontSize: '20px',
// //                           fontWeight: '700',
// //                           transition: 'transform 0.3s ease'
// //                         }}
// //                       >→</span>
// //                     </div>
// //                   </Link>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         </section>
// //       ))}

// //       <Footer />
// //     </div>
// //   );
// // }
import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getOrganizedDestinations, RegionData } from '../../services/dbServices';

// ============================================
// DESTINATIONS PAGE - Firebase-Powered with Dynamic Regions
// FIXED: Now fetches data on EVERY request (no caching)
// ============================================

// 🔥 CRITICAL: Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Regions {
  [key: string]: RegionData;
}

export default async function DestinationsListPage() {
  // Fetch data on the SERVER on EVERY request
  let regions: Regions = {};
  let error: string | null = null;

  try {
    regions = await getOrganizedDestinations();
  } catch (err) {
    console.error('Error fetching destinations:', err);
    error = 'Failed to load destinations. Please try again.';
  }

  // Error state
  if (error) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FFFFFF',
        fontFamily: '"Plus Jakarta Sans", sans-serif'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '500px',
          padding: '40px'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '800',
            color: '#1E3A5F',
            marginBottom: '16px'
          }}>
            Oops!
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#64748B',
            marginBottom: '32px',
            lineHeight: '1.6'
          }}>
            {error}
          </p>
          <a
            href="/destinations"
            style={{
              display: 'inline-block',
              padding: '16px 32px',
              background: '#FF6B35',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '16px',
              textDecoration: 'none'
            }}
          >
            Try Again
          </a>
        </div>
      </div>
    );
  }

  // Count total countries
  const totalCountries = Object.values(regions).reduce(
    (sum, region) => sum + region.countries.length, 
    0
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FFFFFF',
      fontFamily: '"Plus Jakarta Sans", sans-serif'
    }}>
      <Navbar />
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        /* Pills */
        .region-btn {
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .region-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }

        .stat-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255,255,255,0.1);
          border-radius: 50px;
          backdrop-filter: blur(10px);
        }

        /* Featured Cards - Rounded */
        .country-card-featured {
          position: relative;
          height: 280px;
          border-radius: 24px;
          overflow: hidden;
          text-decoration: none;
          transition: all 0.4s ease;
          border: none;
          display: block;
        }

        .country-card-featured:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 24px 48px rgba(0,0,0,0.15);
        }

        .country-card-featured .card-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s ease;
        }

        .country-card-featured:hover .card-bg {
          transform: scale(1.15);
        }

        .country-card-featured .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(30,58,95,0.1) 0%, rgba(30,58,95,0.85) 100%);
        }

        /* Regular Cards - Mix of sharp and curved */
        .country-card-compact {
          background: white;
          padding: 20px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid #E2E8F0;
          display: block;
          position: relative;
        }

        .country-card-compact::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: transparent;
          transition: all 0.3s ease;
        }

        .country-card-compact:hover {
          transform: translateX(4px);
          border-color: #CBD5E1;
          box-shadow: 0 12px 24px rgba(0,0,0,0.08);
        }

        .country-card-compact:hover::before {
          background: var(--region-color);
        }

        .country-card-compact:hover .card-arrow {
          transform: translateX(4px);
        }

        /* Flag Circle - Curved */
        .flag-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          flex-shrink: 0;
        }

        /* Grid Responsive */
        @media (max-width: 1024px) {
          .featured-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .countries-grid-compact { grid-template-columns: repeat(2, 1fr) !important; }
        }

        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .countries-grid-compact { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 480px) {
          .featured-grid { grid-template-columns: 1fr !important; }
        }

        .region-section {
          padding: 100px 40px;
          border-bottom: 1px solid #E2E8F0;
        }

        .region-section:last-of-type {
          border-bottom: none;
        }

        .region-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #F1F5F9;
          padding: 10px 20px;
          border-radius: 50px;
          margin-bottom: 20px;
        }

        .region-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
      `}</style>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2A4A6F 100%)',
        padding: '300px 40px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Background */}
       <div style={{
          position: 'absolute',
          paddingTop:100,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />

        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 56px)',
            fontWeight: '800',
            color: 'white',
            lineHeight: '1.2',
            letterSpacing: '-2px',
            marginBottom: '24px'
          }}>
            Explore Your Study Abroad Destination
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '1.6',
            marginBottom: '48px',
            maxWidth: '700px',
            margin: '0 auto 48px'
          }}>
            From affordable MBBS programs to world-class engineering degrees,
            discover the perfect country for your international education journey.
          </p>

          {/* Stats Pills */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <div className="stat-badge-pill">
              <span style={{ fontSize: '24px', fontWeight: '800', color: 'white' }}>{totalCountries}+</span>
              <span style={{ fontSize: '14px', fontWeight: '600', color: 'rgba(255,255,255,0.9)' }}>Countries</span>
            </div>
            <div className="stat-badge-pill">
              <span style={{ fontSize: '24px', fontWeight: '800', color: 'white' }}>500+</span>
              <span style={{ fontSize: '14px', fontWeight: '600', color: 'rgba(255,255,255,0.9)' }}>Universities</span>
            </div>
            <div className="stat-badge-pill">
              <span style={{ fontSize: '24px', fontWeight: '800', color: 'white' }}>50+</span>
              <span style={{ fontSize: '14px', fontWeight: '600', color: 'rgba(255,255,255,0.9)' }}>Programs</span>
            </div>
          </div>

          {/* Quick Region Buttons */}
          <div 
            className="region-buttons"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '48px',
              flexWrap: 'wrap'
            }}
          >
            {Object.entries(regions).slice(0, 4).map(([regionName, regionData]) => (
              <a
                key={regionName}
                href={`#${regionName.toLowerCase().replace(/\s+/g, '-')}`}
                className="region-btn"
                style={{
                  background: regionData.color,
                  color: 'white'
                }}
              >
                {regionName}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Region Sections */}
      {Object.entries(regions).map(([regionName, regionData], regionIdx) => (
        <section 
          key={regionName}
          id={regionName.toLowerCase().replace(/\s+/g, '-')}
          className="region-section"
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Region Header */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '48px',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <div>
                {/* Badge */}
                <div className="region-badge">
                  <div 
                    className="region-dot"
                    style={{ background: regionData.color }}
                  />
                  <span style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#64748B',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase'
                  }}>
                    {regionData.countries.length} Countries
                  </span>
                </div>
                
                <h2 style={{
                  fontSize: '40px',
                  fontWeight: '800',
                  color: '#1E3A5F',
                  letterSpacing: '-1px',
                  marginBottom: '12px',
                  lineHeight: '1.2'
                }}>
                  {regionName}
                </h2>
                
                <p style={{
                  fontSize: '17px',
                  color: '#64748B',
                  maxWidth: '600px',
                  lineHeight: '1.6'
                }}>
                  {regionData.description}
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 32px',
                  background: regionData.color,
                  color: 'white',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '15px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: `0 8px 16px ${regionData.color}33`
                }}
              >
                Get Guidance →
              </Link>
            </div>

            {/* Countries Grid */}
            {regionIdx === 0 ? (
              // Featured destinations - CURVED CARDS with images
              <div 
                className="featured-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '24px'
                }}
              >
                {regionData.countries.map((country) => (
                  <Link
                    key={country.slug}
                    href={country.slug === 'russia' ? 'https://globalrusiec.com/' : `/destinations/${country.slug}`}
                    className="country-card-featured"
                  >
                    <div 
                      className="card-bg"
                      style={{ backgroundImage: `url(${country.image})` }}
                    />
                    <div className="card-overlay" />
                    <div style={{
                      position: 'relative',
                      zIndex: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '28px'
                    }}>
                      <span style={{ fontSize: '40px', marginBottom: '12px' }}>{country.flag}</span>
                      <h3 style={{
                        fontSize: '24px',
                        fontWeight: '800',
                        color: 'white',
                        marginBottom: '6px',
                        letterSpacing: '-0.5px'
                      }}>
                        {country.name}
                      </h3>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        <span style={{
                          fontSize: '14px',
                          color: 'rgba(255,255,255,0.9)',
                          fontWeight: '600'
                        }}>
                          {country.universities} Universities
                        </span>
                        <span 
                          className="card-arrow"
                          style={{
                            color: '#FF6B35',
                            fontSize: '24px',
                            fontWeight: '700',
                            transition: 'transform 0.3s ease'
                          }}
                        >→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              // Regular cards - SHARP with curved flag circles
              <div 
                className="countries-grid-compact"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '20px'
                }}
              >
                {regionData.countries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/destinations/${country.slug}`}
                    className="country-card-compact"
                    style={{ '--region-color': regionData.color } as React.CSSProperties}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px'
                    }}>
                      {/* Circular flag badge */}
                      <div 
                        className="flag-circle"
                        style={{
                          background: `${regionData.color}15`,
                          border: `2px solid ${regionData.color}30`
                        }}
                      >
                        {country.flag}
                      </div>
                      
                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          fontSize: '18px',
                          fontWeight: '700',
                          color: '#1E3A5F',
                          marginBottom: '4px',
                          letterSpacing: '-0.3px'
                        }}>
                          {country.name}
                        </h3>
                        <span style={{
                          fontSize: '13px',
                          color: '#64748B',
                          fontWeight: '600'
                        }}>
                          {country.universities} Universities
                        </span>
                      </div>
                      
                      <span 
                        className="card-arrow"
                        style={{
                          color: regionData.color,
                          fontSize: '20px',
                          fontWeight: '700',
                          transition: 'transform 0.3s ease'
                        }}
                      >→</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}