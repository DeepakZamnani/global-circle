import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getOrganizedDestinations, RegionData } from '../../services/dbServices';


export const revalidate = 60; 

interface Regions {
  [key: string]: RegionData;
}

export default async function DestinationsListPage() {
  // Server-side fetch on every revalidation
  const regions = await getOrganizedDestinations();

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

      <section style={{
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2A4A6F 100%)',
        padding: '300px 40px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
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

      {Object.entries(regions).map(([regionName, regionData], regionIdx) => (
        <section 
          key={regionName}
          id={regionName.toLowerCase().replace(/\s+/g, '-')}
          className="region-section"
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            <div style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '48px',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <div>
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

            {regionIdx === 0 ? (
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