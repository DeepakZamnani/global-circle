"use client";

import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// ============================================
// DESTINATIONS PAGE - Mixed Design Elements
// Hero same, mid content with mixed curves/sharp
// ============================================

const regions = {
  'Popular MBBS Destinations': {
    description: 'Most preferred affordable & NMC-approved destinations for Indian students in 2025-2026',
    color: '#FF6B35',
    countries: [
      { 
        name: 'Russia', 
        slug: 'russia', 
        flag: '🇷🇺', 
        universities: '60+', 
        image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=400&q=80'
      },
      { 
        name: 'China', 
        slug: 'china', 
        flag: '🇨🇳', 
        universities: '45+', 
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&q=80'
      },
      { 
        name: 'Kazakhstan', 
        slug: 'kazakhstan', 
        flag: '🇰🇿', 
        universities: '15+', 
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80'
      },
      { 
        name: 'Kyrgyzstan', 
        slug: 'kyrgyzstan', 
        flag: '🇰🇬', 
        universities: '10+', 
        image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&q=80'
      },
      { 
        name: 'Georgia', 
        slug: 'georgia', 
        flag: '🇬🇪', 
        universities: '12+', 
        image: 'https://images.unsplash.com/photo-1591265670940-5643c0c3cb17?w=400&q=80'
      },
      { 
        name: 'Philippines', 
        slug: 'philippines', 
        flag: '🇵🇭', 
        universities: '40+', 
        image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=400&q=80'
      },
      { 
        name: 'Uzbekistan', 
        slug: 'uzbekistan', 
        flag: '🇺🇿', 
        universities: '8+', 
        image: 'https://images.unsplash.com/photo-1597075933405-2c6c7e9df88c?w=400&q=80'
      },
    ]
  },
  'South Asia & Nearby': {
    description: 'Proximate options with cultural similarity, direct NMC recognition & affordable fees',
    color: '#2EC4B6',
    countries: [
      { 
        name: 'Nepal', 
        slug: 'nepal', 
        flag: '🇳🇵', 
        universities: '20+',
        image: 'https://images.unsplash.com/photo-1504197832061-98356e3dcdcf?w=400&q=80'
      },
      { 
        name: 'Bangladesh', 
        slug: 'bangladesh', 
        flag: '🇧🇩', 
        universities: '25+',
        image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=400&q=80'
      },
    ]
  },
  'Eastern & Central Europe': {
    description: 'European-standard MBBS with good clinical exposure & growing popularity',
    color: '#8B5CF6',
    countries: [
      { 
        name: 'Poland', 
        slug: 'poland', 
        flag: '🇵🇱', 
        universities: '20+',
        image: 'https://images.unsplash.com/photo-1564507592333-c5f3f5e4d8e3?w=400&q=80'
      },
      { 
        name: 'Romania', 
        slug: 'romania', 
        flag: '🇷🇴', 
        universities: '12+',
        image: 'https://images.unsplash.com/photo-1564507592333-c5f3f5e4d8e3?w=400&q=80'
      },
      { 
        name: 'Latvia', 
        slug: 'latvia', 
        flag: '🇱🇻', 
        universities: '8+',
        image: 'https://images.unsplash.com/photo-1564507592333-c5f3f5e4d8e3?w=400&q=80'
      },
      { 
        name: 'Lithuania', 
        slug: 'lithuania', 
        flag: '🇱🇹', 
        universities: '8+',
        image: 'https://images.unsplash.com/photo-1564507592333-c5f3f5e4d8e3?w=400&q=80'
      },
      { 
        name: 'Ukraine', 
        slug: 'ukraine', 
        flag: '🇺🇦', 
        universities: '30+',
        image: 'https://images.unsplash.com/photo-1568619655021-15bbbf17f40c?w=400&q=80'
      },
      { 
        name: 'Belarus', 
        slug: 'belarus', 
        flag: '🇧🇾', 
        universities: '15+',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80'
      },
    ]
  },
  'Other MBBS Destinations': {
    description: 'Emerging & specialized options with NMC recognition & varied benefits',
    color: '#64748B',
    countries: [
      { 
        name: 'Armenia', 
        slug: 'armenia', 
        flag: '🇦🇲', 
        universities: '10+',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80'
      },
      { 
        name: 'Egypt', 
        slug: 'egypt', 
        flag: '🇪🇬', 
        universities: '25+',
        image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400&q=80'
      },
      { 
        name: 'Malaysia', 
        slug: 'malaysia', 
        flag: '🇲🇾', 
        universities: '15+',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80'
      },
      { 
        name: 'Mauritius', 
        slug: 'mauritius', 
        flag: '🇲🇺', 
        universities: '5+',
        image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=400&q=80'
      },
      { 
        name: 'Azerbaijan', 
        slug: 'azerbaijan', 
        flag: '🇦🇿', 
        universities: '10+',
        image: 'https://images.unsplash.com/photo-1585128903994-03e4d2a1acc4?w=400&q=80'
      },
    ]
  }
};

export default function DestinationsListPage() {
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
          transition: all 0.3s ease;
        }

        .country-card-compact:hover .flag-circle {
          transform: rotate(10deg) scale(1.1);
        }

        /* Region Header Badge - Sharp */
        .region-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
          margin-bottom: 12px;
        }

        .region-dot {
          width: 12px;
          height: 12px;
          flex-shrink: 0;
        }

        /* Section Styling */
        .region-section {
          padding: 80px 48px;
          border-bottom: 1px solid #E2E8F0;
        }

        .region-section:last-child {
          border-bottom: none;
        }

        .region-section:nth-child(even) {
          background: #FAFBFC;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .countries-grid-compact {
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

          .countries-grid-compact {
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

      {/* Hero Section - KEEP SAME */}
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
        
        {/* Overlay */}
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
          {/* Badge - CURVED PILLS */}
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

          {/* Stats - CURVED PILLS */}
          <div 
            className="stats-row"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px'
            }}
          >
            <div className="stat-badge-pill">
              <span style={{ fontSize: '28px', fontWeight: '800', color: 'white' }}>26</span>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Countries</span>
            </div>
            <div className="stat-badge-pill">
              <span style={{ fontSize: '28px', fontWeight: '800', color: 'white' }}>500+</span>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Universities</span>
            </div>
            <div className="stat-badge-pill">
              <span style={{ fontSize: '28px', fontWeight: '800', color: 'white' }}>50+</span>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Programs</span>
            </div>
          </div>

          {/* Quick Region Buttons - CURVED PILLS */}
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

      {/* Region Sections - MIXED DESIGN */}
      {Object.entries(regions).map(([regionName, regionData], regionIdx) => (
        <section 
          key={regionName}
          id={regionName.toLowerCase().replace(/\s+/g, '-')}
          className="region-section"
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Region Header - SHARP badge with CURVED button */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '48px',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <div>
                {/* Sharp Badge */}
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

              {/* Curved CTA Button */}
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 12px 24px ${regionData.color}55`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 8px 16px ${regionData.color}33`;
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
                {regionData.countries.map((country: any) => (
                  <Link
                    key={country.slug}
                    href={`/destinations/${country.slug}`}
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
                {regionData.countries.map((country: any) => (
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