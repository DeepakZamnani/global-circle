// "use client";

// import React from 'react';
// import Link from 'next/link';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// // ============================================
// // ALL DESTINATIONS PAGE
// // /destinations
// // ============================================

// const allCountries = [
//   { name: 'Canada', slug: 'canada', flag: '🇨🇦', universities: '96+', featured: true },
//   { name: 'Australia', slug: 'australia', flag: '🇦🇺', universities: '43+', featured: true },
//   { name: 'Farance', slug: 'france', flag: '🇫🇷', universities: '72+', featured: true },
//   { name: 'Spain', slug: 'spain', flag: '🇪🇸', universities: '84+', featured: true },
//   { name: 'Portugal', slug: 'portugal', flag: '🇵🇹', universities: '40+', featured: false },
//   { name: 'Ireland', slug: 'ireland', flag: '🇮🇪', universities: '34+', featured: false },
//   { name: 'Poland', slug: 'poland', flag: '🇵🇱', universities: '45+', featured: false },
//   { name: 'Italy', slug: 'italy', flag: '🇮🇹', universities: '90+', featured: false },
//   { name: 'Germany', slug: 'germany', flag: '🇩🇪', universities: '120+', featured: false },
//   { name: 'Sweden', slug: 'sweden', flag: '🇸🇪', universities: '35+', featured: false },
//   { name: 'Denmark', slug: 'denmark', flag: '🇩🇰', universities: '28+', featured: false },
//   { name: 'Norway', slug: 'norway', flag: '🇳🇴', universities: '30+', featured: false },
//   { name: 'Finland', slug: 'finland', flag: '🇫🇮', universities: '38+', featured: false },
//   { name: 'Netherlands', slug: 'netherlands', flag: '🇳🇱', universities: '55+', featured: false },
//   { name: 'Czech Republic', slug: 'czech-republic', flag: '🇨🇿', universities: '26+', featured: false },
//   { name: 'Greece', slug: 'greece', flag: '🇬🇷', universities: '24+', featured: false },
//   { name: 'Croatia', slug: 'croatia', flag: '🇭🇷', universities: '18+', featured: false },
//   { name: 'Slovenia', slug: 'slovenia', flag: '🇸🇮', universities: '12+', featured: false },
//   { name: 'Estonia', slug: 'estonia', flag: '🇪🇪', universities: '15+', featured: false },
//   { name: 'Latvia', slug: 'latvia', flag: '🇱🇻', universities: '20+', featured: false },
//   { name: 'Lithuania', slug: 'lithuania', flag: '🇱🇹', universities: '22+', featured: false },
//   { name: 'Slovakia', slug: 'slovakia', flag: '🇸🇰', universities: '18+', featured: false },
//   { name: 'Malta', slug: 'malta', flag: '🇲🇹', universities: '8+', featured: false },
//   { name: 'Cyprus', slug: 'cyprus', flag: '🇨🇾', universities: '12+', featured: false },
//   { name: 'Georgia', slug: 'georgia', flag: '🇬🇪', universities: '20+', featured: false },
//   { name: 'UAE', slug: 'uae', flag: '🇦🇪', universities: '35+', featured: false },
// ];

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

//         .country-card {
//           background: white;
//           border: 2px solid #E2E8F0;
//           border-radius: 20px;
//           padding: 24px;
//           text-decoration: none;
//           transition: all 0.3s ease;
//           display: flex;
//           align-items: center;
//           gap: 16px;
//         }

//         .country-card:hover {
//           border-color: #FF6B35;
//           transform: translateY(-4px);
//           box-shadow: 0 12px 32px rgba(0,0,0,0.1);
//         }

//         .country-card.featured {
//           background: linear-gradient(135deg, #1E3A5F 0%, #0F2744 100%);
//           border-color: #1E3A5F;
//         }

//         .country-card.featured:hover {
//           border-color: #FF6B35;
//         }

//         @media (max-width: 768px) {
//           .countries-grid {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>

//       {/* Hero */}
//       <section style={{
//         padding: '140px 48px 80px',
//         background: '#F8FAFC',
//         textAlign: 'center'
//       }}>
//         <div style={{ maxWidth: '800px', margin: '0 auto' }}>
//           <div style={{
//             display: 'inline-flex',
//             alignItems: 'center',
//             gap: '10px',
//             marginBottom: '20px'
//           }}>
//             <div style={{
//               width: '36px',
//               height: '3px',
//               background: '#FF6B35',
//               borderRadius: '2px'
//             }} />
//             <span style={{
//               fontSize: '13px',
//               fontWeight: '700',
//               color: '#64748B',
//               letterSpacing: '1.5px',
//               textTransform: 'uppercase'
//             }}>
//               26 Countries
//             </span>
//             <div style={{
//               width: '36px',
//               height: '3px',
//               background: '#FF6B35',
//               borderRadius: '2px'
//             }} />
//           </div>

//           <h1 style={{
//             fontSize: '52px',
//             fontWeight: '800',
//             color: '#1E3A5F',
//             letterSpacing: '-2px',
//             marginBottom: '16px'
//           }}>
//             All Study Destinations
//           </h1>

//           <p style={{
//             fontSize: '18px',
//             color: '#64748B',
//             lineHeight: '1.7'
//           }}>
//             Explore world-class education opportunities across 26 countries with 500+ partner universities
//           </p>
//         </div>
//       </section>

//       {/* Countries Grid */}
//       <section style={{ padding: '80px 48px' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
//           {/* Featured */}
//           <div style={{ marginBottom: '60px' }}>
//             <h2 style={{
//               fontSize: '24px',
//               fontWeight: '700',
//               color: '#1E3A5F',
//               marginBottom: '24px'
//             }}>
//               Featured Destinations
//             </h2>
            
//             <div 
//               className="countries-grid"
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(2, 1fr)',
//                 gap: '20px'
//               }}
//             >
//               {allCountries.filter(c => c.featured).map((country) => (
//                 <Link 
//                   key={country.slug}
//                   href={`/destinations/${country.slug}`}
//                   className="country-card featured"
//                 >
//                   <span style={{ fontSize: '40px' }}>{country.flag}</span>
//                   <div style={{ flex: 1 }}>
//                     <div style={{
//                       fontSize: '22px',
//                       fontWeight: '700',
//                       color: 'white',
//                       marginBottom: '4px'
//                     }}>
//                       {country.name}
//                     </div>
//                     <div style={{
//                       fontSize: '14px',
//                       color: 'rgba(255,255,255,0.7)'
//                     }}>
//                       {country.universities} Universities
//                     </div>
//                   </div>
//                   <span style={{
//                     color: '#FF6B35',
//                     fontSize: '20px',
//                     fontWeight: '600'
//                   }}>→</span>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* All Countries */}
//           <div>
//             <h2 style={{
//               fontSize: '24px',
//               fontWeight: '700',
//               color: '#1E3A5F',
//               marginBottom: '24px'
//             }}>
//               All Countries
//             </h2>
            
//             <div 
//               className="countries-grid"
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(3, 1fr)',
//                 gap: '16px'
//               }}
//             >
//               {allCountries.filter(c => !c.featured).map((country) => (
//                 <Link 
//                   key={country.slug}
//                   href={`/destinations/${country.slug}`}
//                   className="country-card"
//                 >
//                   <span style={{ fontSize: '32px' }}>{country.flag}</span>
//                   <div style={{ flex: 1 }}>
//                     <div style={{
//                       fontSize: '18px',
//                       fontWeight: '700',
//                       color: '#1E3A5F',
//                       marginBottom: '2px'
//                     }}>
//                       {country.name}
//                     </div>
//                     <div style={{
//                       fontSize: '13px',
//                       color: '#64748B'
//                     }}>
//                       {country.universities} Unis
//                     </div>
//                   </div>
//                   <span style={{
//                     color: '#FF6B35',
//                     fontSize: '18px'
//                   }}>→</span>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//           <Footer/>
    
//     </div>
    
//   );
// }
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// ============================================
// ALL DESTINATIONS PAGE - Redesigned
// Hero with background, sectorized countries
// ============================================

const regions = {
  'Popular Destinations': {
    description: 'Most sought-after study destinations by our students',
    color: '#FF6B35',
    countries: [
      { name: 'Canada', slug: 'canada', flag: '🇨🇦', universities: '96+', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&q=80' },
      { name: 'Australia', slug: 'australia', flag: '🇦🇺', universities: '43+', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&q=80' },
      { name: 'France', slug: 'france', flag: '🇫🇷', universities: '72+', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80' },
      { name: 'Spain', slug: 'spain', flag: '🇪🇸', universities: '84+', image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400&q=80' },
    ]
  },
  'Western Europe': {
    description: 'Rich history, world-class education, and vibrant cultures',
    color: '#1E3A5F',
    countries: [
      { name: 'Germany', slug: 'germany', flag: '🇩🇪', universities: '120+' },
      { name: 'Ireland', slug: 'ireland', flag: '🇮🇪', universities: '34+' },
      { name: 'Netherlands', slug: 'netherlands', flag: '🇳🇱', universities: '55+' },
      { name: 'Portugal', slug: 'portugal', flag: '🇵🇹', universities: '40+' },
      { name: 'Italy', slug: 'italy', flag: '🇮🇹', universities: '90+' },
    ]
  },
  'Northern Europe': {
    description: 'Innovation hubs with high quality of life',
    color: '#2EC4B6',
    countries: [
      { name: 'Sweden', slug: 'sweden', flag: '🇸🇪', universities: '35+' },
      { name: 'Denmark', slug: 'denmark', flag: '🇩🇰', universities: '28+' },
      { name: 'Norway', slug: 'norway', flag: '🇳🇴', universities: '30+' },
      { name: 'Finland', slug: 'finland', flag: '🇫🇮', universities: '38+' },
      { name: 'Estonia', slug: 'estonia', flag: '🇪🇪', universities: '15+' },
      { name: 'Latvia', slug: 'latvia', flag: '🇱🇻', universities: '20+' },
      { name: 'Lithuania', slug: 'lithuania', flag: '🇱🇹', universities: '22+' },
    ]
  },
  'Central Europe': {
    description: 'Affordable education in the heart of Europe',
    color: '#8B5CF6',
    countries: [
      { name: 'Poland', slug: 'poland', flag: '🇵🇱', universities: '45+' },
      { name: 'Czech Republic', slug: 'czech-republic', flag: '🇨🇿', universities: '26+' },
      { name: 'Slovakia', slug: 'slovakia', flag: '🇸🇰', universities: '18+' },
      { name: 'Slovenia', slug: 'slovenia', flag: '🇸🇮', universities: '12+' },
    ]
  },
  'Southern Europe & Mediterranean': {
    description: 'Sunny climates and rich cultural heritage',
    color: '#F59E0B',
    countries: [
      { name: 'Greece', slug: 'greece', flag: '🇬🇷', universities: '24+' },
      { name: 'Croatia', slug: 'croatia', flag: '🇭🇷', universities: '18+' },
      { name: 'Malta', slug: 'malta', flag: '🇲🇹', universities: '8+' },
      { name: 'Cyprus', slug: 'cyprus', flag: '🇨🇾', universities: '12+' },
    ]
  },
  'Other Regions': {
    description: 'Emerging destinations with growing opportunities',
    color: '#64748B',
    countries: [
      { name: 'UAE', slug: 'uae', flag: '🇦🇪', universities: '35+' },
      { name: 'Georgia', slug: 'georgia', flag: '🇬🇪', universities: '20+' },
      { name: 'Belarus', slug: 'belarus', flag: '🇧🇾', universities: '15+' },
      { name: 'Bosnia', slug: 'bosnia', flag: '🇧🇦', universities: '10+' },
    ]
  }
};

export default function DestinationsListPage() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FFFFFF',
      fontFamily: '"Plus Jakarta Sans", sans-serif'
    }}><Navbar/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .region-btn {
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          text-decoration: none;
          display: inline-block;
        }

        .region-btn:hover {
          transform: translateY(-2px);
        }

        .country-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          text-decoration: none;
          transition: all 0.4s ease;
          border: 2px solid #E2E8F0;
          display: block;
        }

        .country-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
          border-color: #FF6B35;
        }

        .country-card:hover .card-arrow {
          transform: translateX(4px);
        }

        .country-card-featured {
          position: relative;
          height: 280px;
        }

        .country-card-featured .card-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }

        .country-card-featured:hover .card-bg {
          transform: scale(1.1);
        }

        .country-card-featured .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(30,58,95,0.2) 0%, rgba(30,58,95,0.9) 100%);
        }

        .region-section {
          padding: 80px 48px;
          border-bottom: 1px solid #E2E8F0;
        }

        .region-section:last-child {
          border-bottom: none;
        }

        .region-section:nth-child(even) {
          background: #F8FAFC;
        }

        .stat-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255,255,255,0.1);
          border-radius: 50px;
          backdrop-filter: blur(10px);
        }

        @media (max-width: 1024px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .countries-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .hero-section-wrapper {
            padding: 140px 20px 80px !important;
          }

          .hero-title {
            font-size: 36px !important;
          }

          .region-section {
            padding: 60px 20px !important;
          }

          .featured-grid {
            grid-template-columns: 1fr !important;
          }

          .countries-grid {
            grid-template-columns: 1fr !important;
          }

          .region-buttons {
            flex-wrap: wrap !important;
            justify-content: center !important;
          }

          .stats-row {
            flex-direction: column !important;
            gap: 16px !important;
          }
        }
      `}</style>

      {/* Hero Section with Background Image */}
      <section style={{
        position: 'relative',
        padding: '180px 48px 120px',
        overflow: 'hidden',
        minHeight: '500px'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        
        {/* Overlay - lighter to show image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)'
        }} />
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '40px',
              height: '3px',
              background: '#FF6B35',
              borderRadius: '2px'
            }} />
            <span style={{
              fontSize: '14px',
              fontWeight: '700',
              color: 'rgba(255,255,255,0.8)',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              Study Destinations
            </span>
            <div style={{
              width: '40px',
              height: '3px',
              background: '#FF6B35',
              borderRadius: '2px'
            }} />
          </div>

          {/* Title */}
          <h1 
            className="hero-title"
            style={{
              fontSize: '56px',
              fontWeight: '800',
              color: 'white',
              letterSpacing: '-2px',
              marginBottom: '20px',
              lineHeight: '1.1'
            }}
          >
            Your Gateway to<br />
            <span style={{ color: '#FF6B35' }}>Global Education</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.7'
          }}>
            Explore world-class education opportunities across 26 countries with 500+ partner universities
          </p>

          {/* Stats */}
          <div 
            className="stats-row"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px'
            }}
          >
            <div className="stat-badge">
              <span style={{ fontSize: '28px', fontWeight: '800', color: 'white' }}>26</span>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Countries</span>
            </div>
            <div className="stat-badge">
              <span style={{ fontSize: '28px', fontWeight: '800', color: 'white' }}>500+</span>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Universities</span>
            </div>
            <div className="stat-badge">
              <span style={{ fontSize: '28px', fontWeight: '800', color: 'white' }}>50+</span>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Programs</span>
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
            {Object.entries(regions).slice(0, 5).map(([regionName, regionData]) => (
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
              marginBottom: '40px',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '4px',
                    background: regionData.color
                  }} />
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
                  fontSize: '36px',
                  fontWeight: '800',
                  color: '#1E3A5F',
                  letterSpacing: '-1px',
                  marginBottom: '8px'
                }}>
                  {regionName}
                </h2>
                <p style={{
                  fontSize: '16px',
                  color: '#64748B',
                  maxWidth: '500px'
                }}>
                  {regionData.description}
                </p>
              </div>

              {/* Region CTA */}
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  background: regionData.color,
                  color: 'white',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                Get Guidance
                <span>→</span>
              </Link>
            </div>

            {/* Countries Grid */}
            {regionIdx === 0 ? (
              // Featured destinations with images
              <div 
                className="featured-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '24px'
                }}
              >
                {regionData.countries.map((country: any) => (
                  <Link
                    key={country.slug}
                    href={`/destinations/${country.slug}`}
                    className="country-card country-card-featured"
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
                      padding: '24px'
                    }}>
                      <span style={{ fontSize: '36px', marginBottom: '8px' }}>{country.flag}</span>
                      <h3 style={{
                        fontSize: '24px',
                        fontWeight: '800',
                        color: 'white',
                        marginBottom: '4px'
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
                          color: 'rgba(255,255,255,0.8)'
                        }}>
                          {country.universities} Universities
                        </span>
                        <span 
                          className="card-arrow"
                          style={{
                            color: '#FF6B35',
                            fontSize: '20px',
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
              // Regular country cards
              <div 
                className="countries-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '16px'
                }}
              >
                {regionData.countries.map((country: any) => (
                  <Link
                    key={country.slug}
                    href={`/destinations/${country.slug}`}
                    className="country-card"
                    style={{ padding: '20px' }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px'
                    }}>
                      <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        background: `${regionData.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '28px',
                        flexShrink: 0
                      }}>
                        {country.flag}
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          fontSize: '18px',
                          fontWeight: '700',
                          color: '#1E3A5F',
                          marginBottom: '2px'
                        }}>
                          {country.name}
                        </h3>
                        <span style={{
                          fontSize: '13px',
                          color: '#64748B'
                        }}>
                          {country.universities} Universities
                        </span>
                      </div>
                      <span 
                        className="card-arrow"
                        style={{
                          color: regionData.color,
                          fontSize: '20px',
                          fontWeight: '600',
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

      {/* Bottom CTA */}
      {/* <section style={{
        padding: '100px 48px',
        background: 'linear-gradient(135deg, #1E3A5F 0%, #0F2744 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: '800',
            color: 'white',
            marginBottom: '16px',
            letterSpacing: '-1px'
          }}>
            Not Sure Where to Study?
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '32px',
            lineHeight: '1.7'
          }}>
            Our expert counselors will help you find the perfect destination based on your goals, budget, and preferences.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '18px 36px',
                background: '#FF6B35',
                color: 'white',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '16px',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              Book Free Consultation
              <span>→</span>
            </Link>
            <Link
              href="/programs"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '18px 36px',
                background: 'transparent',
                color: 'white',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '16px',
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              View Programs
            </Link>
          </div>
        </div>
      </section> */}
      <Footer/>
    </div>
  );
}