"use client";

import React, { useState } from 'react';

export default function StudyDestinationsSection() {
  const [activeRegion, setActiveRegion] = useState('featured');
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const featuredDestinations = [
    {
      country: 'France',
      flag: '🇫🇷',
      tagline: 'Culture & Excellence',
      students: '2,500+',
      universities: '85+',
      color: '#0055A4',
      bgImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      highlights: ['Fashion & Culinary', 'Affordable Tuition', 'Post-Study Work'],
      region: 'Western Europe'
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      tagline: 'Opportunity & Quality',
      students: '3,200+',
      universities: '120+',
      color: '#FF0000',
      bgImage: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80',
      highlights: ['PGWP Available', 'Multicultural', 'High Living Standards'],
      region: 'North America'
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      tagline: 'Innovation & Lifestyle',
      students: '1,800+',
      universities: '95+',
      color: '#012169',
      bgImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80',
      highlights: ['World-Class Education', 'Work Rights', 'Quality of Life'],
      region: 'Oceania'
    },
    {
      country: 'Spain',
      flag: '🇪🇸',
      tagline: 'Heritage & Vibrancy',
      students: '2,100+',
      universities: '78+',
      color: '#C60B1E',
      bgImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80',
      highlights: ['Vibrant Student Life', 'Historic Universities', 'Affordable'],
      region: 'Western Europe'
    }
  ];

  const allDestinations = [
    // Western Europe
    { name: 'France', flag: '🇫🇷', region: 'Western Europe', featured: true },
    { name: 'Spain', flag: '🇪🇸', region: 'Western Europe', featured: true },
    { name: 'Portugal', flag: '🇵🇹', region: 'Western Europe' },
    { name: 'Ireland', flag: '🇮🇪', region: 'Western Europe' },
    { name: 'Italy', flag: '🇮🇹', region: 'Western Europe' },
    { name: 'Norway', flag: '🇳🇴', region: 'Western Europe' },
    { name: 'Finland', flag: '🇫🇮', region: 'Western Europe' },
    
    // Central Europe
    { name: 'Poland', flag: '🇵🇱', region: 'Central Europe' },
    { name: 'Czech Republic', flag: '🇨🇿', region: 'Central Europe' },
    { name: 'Slovenia', flag: '🇸🇮', region: 'Central Europe' },
    { name: 'Slovakia', flag: '🇸🇰', region: 'Central Europe' },
    { name: 'Bosnia and Herzegovina', flag: '🇧🇦', region: 'Central Europe' },
    
    // Northern Europe
    { name: 'Sweden', flag: '🇸🇪', region: 'Northern Europe' },
    { name: 'Denmark', flag: '🇩🇰', region: 'Northern Europe' },
    { name: 'Latvia', flag: '🇱🇻', region: 'Northern Europe' },
    { name: 'Lithuania', flag: '🇱🇹', region: 'Northern Europe' },
    { name: 'Estonia', flag: '🇪🇪', region: 'Northern Europe' },
    
    // Southern Europe
    { name: 'Greece', flag: '🇬🇷', region: 'Southern Europe' },
    { name: 'Cyprus', flag: '🇨🇾', region: 'Southern Europe' },
    { name: 'Malta', flag: '🇲🇹', region: 'Southern Europe' },
    { name: 'Croatia', flag: '🇭🇷', region: 'Southern Europe' },
    
    // Eastern Europe
    { name: 'Belarus', flag: '🇧🇾', region: 'Eastern Europe' },
    { name: 'Georgia', flag: '🇬🇪', region: 'Eastern Europe' },
    
    // Other
    { name: 'Canada', flag: '🇨🇦', region: 'North America', featured: true },
    { name: 'Australia', flag: '🇦🇺', region: 'Oceania', featured: true },
    { name: 'United Arab Emirates', flag: '🇦🇪', region: 'Middle East' }
  ];

  const regions = ['Featured', 'Western Europe', 'Central Europe', 'Northern Europe', 'Southern Europe', 'All Destinations'];

  const getFilteredDestinations = () => {
    if (activeRegion === 'featured') return allDestinations.filter(d => d.featured);
    if (activeRegion === 'all') return allDestinations;
    return allDestinations.filter(d => d.region === activeRegion);
  };

  return (
    <section style={{
      padding: '100px 48px',
      background: '#FFFFFF',
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .destination-card {
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid #E2E8F0;
        }

        .destination-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12);
          border-color: transparent;
        }

        .destination-card:hover .card-image {
          transform: scale(1.1);
        }

        .card-image {
          transition: transform 0.6s ease;
        }

        .region-tab {
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid #E2E8F0;
          background: white;
          color: #64748B;
        }

        .region-tab.active {
          background: #1E3A5F;
          color: white;
          border-color: #1E3A5F;
          transform: translateY(-2px);
        }

        .region-tab:hover:not(.active) {
          border-color: #FF6B35;
          color: #FF6B35;
        }

        .country-chip {
          padding: 10px 18px;
          border-radius: 50px;
          background: white;
          border: 2px solid #E2E8F0;
          font-size: 14px;
          font-weight: 600;
          color: #1E3A5F;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .country-chip:hover {
          border-color: #FF6B35;
          background: #FFF7ED;
          transform: translateY(-2px);
        }

        .hexagon {
          width: 80px;
          height: 46px;
          background: #FF6B35;
          position: relative;
          display: inline-block;
        }

        .hexagon:before,
        .hexagon:after {
          content: "";
          position: absolute;
          width: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
        }

        .hexagon:before {
          bottom: 100%;
          border-bottom: 23px solid #FF6B35;
        }

        .hexagon:after {
          top: 100%;
          border-top: 23px solid #FF6B35;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .floating {
          animation: float 3s ease-in-out infinite;
        }

        .floating-delay {
          animation: float 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        @media (max-width: 1024px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .featured-grid,
          .all-countries-grid {
            grid-template-columns: 1fr !important;
          }
          
          .region-tabs {
            overflow-x: auto;
            flex-wrap: nowrap !important;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          
          .region-tabs::-webkit-scrollbar {
            display: none;
          }

          .stats-banner {
            flex-direction: column !important;
            text-align: center;
          }
        }
      `}</style>

      {/* Background Decorations */}
      <div className="floating" style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #FF6B35 0%, #2EC4B6 100%)',
        opacity: 0.05,
        zIndex: 0
      }} />
      <div className="floating-delay" style={{
        position: 'absolute',
        bottom: '15%',
        left: '8%',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: '#1E3A5F',
        opacity: 0.03,
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '16px'
          }}>
            <div style={{
              width: '36px',
              height: '3px',
              background: '#FF6B35',
              borderRadius: '2px'
            }} />
            <span style={{
              fontSize: '13px',
              fontWeight: '700',
              color: '#64748B',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>
              Global Network
            </span>
            <div style={{
              width: '36px',
              height: '3px',
              background: '#FF6B35',
              borderRadius: '2px'
            }} />
          </div>

          <h2 style={{
            fontSize: '52px',
            fontWeight: '800',
            color: '#1E3A5F',
            letterSpacing: '-1.5px',
            lineHeight: '1.1',
            marginBottom: '20px'
          }}>
            Study Destinations
          </h2>

          <p style={{
            fontSize: '18px',
            color: '#64748B',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: '1.7'
          }}>
            Choose from <span style={{ color: '#FF6B35', fontWeight: '700' }}>26 countries</span> across Europe, North America, and beyond. Your perfect study destination awaits.
          </p>

          {/* Stats Banner */}
          <div className="stats-banner" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
            alignItems: 'center',
            padding: '32px',
            background: '#F8FAFC',
            borderRadius: '24px',
            border: '2px solid #E2E8F0'
          }}>
            <div>
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#FF6B35' }}>26</div>
              <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '600' }}>Countries</div>
            </div>
            <div style={{ width: '2px', height: '40px', background: '#E2E8F0' }} />
            <div>
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#1E3A5F' }}>500+</div>
              <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '600' }}>Universities</div>
            </div>
            <div style={{ width: '2px', height: '40px', background: '#E2E8F0' }} />
            <div>
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#2EC4B6' }}>10K+</div>
              <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '600' }}>Students Placed</div>
            </div>
          </div>
        </div>

        {/* Region Tabs */}
        <div className="region-tabs" style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '48px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {regions.map((region) => (
            <button
              key={region}
              className={`region-tab ${activeRegion === region.toLowerCase().replace(' ', '-') ? 'active' : ''}`}
              onClick={() => setActiveRegion(region.toLowerCase().replace(' ', '-'))}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Featured Destinations - Card View */}
        {activeRegion === 'featured' && (
          <div className="featured-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginBottom: '60px'
          }}>
            {featuredDestinations.map((dest, idx) => (
              <div
                key={dest.country}
                className="destination-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Image Background */}
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <div
                    className="card-image"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `url(${dest.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(180deg, ${dest.color}00 0%, ${dest.color}DD 100%)`
                  }} />
                  
                  {/* Flag Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
                  }}>
                    {dest.flag}
                  </div>

                  {/* Country Name */}
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '20px',
                    right: '20px'
                  }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '800',
                      color: 'white',
                      marginBottom: '4px'
                    }}>
                      {dest.country}
                    </h3>
                    <p style={{
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.9)',
                      fontWeight: '600'
                    }}>
                      {dest.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '20px' }}>
                  {/* Stats */}
                  <div style={{
                    display: 'flex',
                    gap: '16px',
                    marginBottom: '16px',
                    paddingBottom: '16px',
                    borderBottom: '1px solid #E2E8F0'
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '18px', fontWeight: '700', color: '#1E3A5F' }}>
                        {dest.students}
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '500' }}>
                        Students
                      </div>
                    </div>
                    <div style={{ width: '1px', background: '#E2E8F0' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '18px', fontWeight: '700', color: '#1E3A5F' }}>
                        {dest.universities}
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '500' }}>
                        Universities
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {dest.highlights.map((highlight, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '12px',
                        color: '#64748B',
                        fontWeight: '500'
                      }}>
                        <div style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#FF6B35'
                        }} />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button style={{
                    width: '100%',
                    marginTop: '16px',
                    padding: '12px',
                    background: 'transparent',
                    border: '2px solid #E2E8F0',
                    borderRadius: '50px',
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#1E3A5F',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}>
                    Explore {dest.country}
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* All Destinations - Chip View */}
        {activeRegion !== 'featured' && (
          <div className="all-countries-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '60px'
          }}>
            {getFilteredDestinations().map((country) => (
              <div
                key={country.name}
                className="country-chip"
                onMouseEnter={() => setHoveredCountry(country.name)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                <span style={{ fontSize: '24px' }}>{country.flag}</span>
                <span>{country.name}</span>
                {country.featured && (
                  <span style={{
                    marginLeft: 'auto',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#FF6B35'
                  }} />
                )}
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: '60px 40px',
          background: 'linear-gradient(135deg, #1E3A5F 0%, #2C5282 100%)',
          borderRadius: '32px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: '#FF6B35',
            opacity: 0.1
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-30px',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: '#2EC4B6',
            opacity: 0.1
          }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{
              fontSize: '32px',
              fontWeight: '800',
              color: 'white',
              marginBottom: '16px'
            }}>
              Can't Find Your Dream Destination?
            </h3>
            <p style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '600px',
              margin: '0 auto 32px',
              lineHeight: '1.6'
            }}>
              Our expert counselors can guide you to the perfect university in any country. Let's discuss your options.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={{
                padding: '16px 32px',
                background: '#FF6B35',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '15px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}>
                Book Free Consultation
                <span>💬</span>
              </button>
              <button style={{
                padding: '16px 32px',
                background: 'transparent',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: '50px',
                fontSize: '15px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                View All Countries
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}