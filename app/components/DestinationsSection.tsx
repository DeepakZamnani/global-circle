"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// ============================================
// STUDY DESTINATIONS SECTION
// Modern Bento Grid with Unique Shapes
// ============================================

export default function DestinationsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const featuredDestinations = [
    {
      id: 0,
      country: 'Russia',
      slug: 'russia',
      tagline: 'Your Gateway to Success',
      highlights: ['Post-Grad Work Permit', 'Multicultural', 'High Quality of Life'],
      image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=400&q=80',
      flag: '🇷🇺',
      universities: '20+'
    },
    {
      id: 1,
      country: 'China',
      slug: 'china',
      tagline: 'World-Class Education',
      highlights: ['Top Universities', 'Work Rights', 'Amazing Lifestyle'],
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&q=80',
      flag: '🇨🇳',
      universities: '25+'
    },
   {
      id: 2,
      country: 'Canada',
      slug: 'canada',
      tagline: 'Your Gateway to Success',
      highlights: ['Post-Grad Work Permit', 'Multicultural', 'High Quality of Life'],
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80',
      flag: '🇨🇦',
      universities: '26+'
    },
    {
      id: 3,
      country: 'Georgia',
      slug: 'georgia',
      tagline: 'Vibrant Student Life',
      highlights: ['Historic Unis', 'Low Cost', 'Great Weather'],
       image: 'https://images.unsplash.com/photo-1563413613822-2e335ab72e74?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdlb3JnaWF8ZW58MHx8MHx8fDA%3D',
       flag: '🇬🇪',
      universities: '14+'
    }
  ];

  const otherCountries = [
    'Portugal', 'Ireland', 'Poland', 'Italy', 'Czech Republic', 'Slovenia',
    'Sweden', 'Denmark', 'Malta', 'Cyprus', 'Croatia', 'Estonia', 'Georgia',
    'Lithuania', 'Greece', 'Latvia', 'Norway', 'UAE', 'Slovakia', 'Finland',
    'Belarus', 'Bosnia'
  ];

  return (
    <section style={{
      padding: '50px 48px',
    //   background: '#FFFFFF',
    background: '#F8FAFC',
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      position: 'relative',
      overflow: 'hidden'
      
    }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .dest-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dest-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 64px rgba(0,0,0,0.15);
        }

        .dest-card:hover .dest-card-img {
          transform: scale(1.08);
        }

        .dest-card:hover .dest-card-overlay {
          opacity: 0.7;
        }

        .dest-card-img {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s ease;
        }

        .dest-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(30,58,95,0.3) 0%, rgba(30,58,95,0.9) 100%);
          transition: opacity 0.4s ease;
        }

        .dest-card-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px;
        }

        .dest-tag {
          display: inline-block;
          padding: 6px 14px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          color: white;
          margin-right: 8px;
          margin-bottom: 8px;
        }

        .dest-explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 24px;
          background: #FF6B35;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .dest-explore-btn:hover {
          background: #E55A2B;
          transform: translateX(4px);
        }

        .more-card {
          background: #F8FAFC;
          border: 2px dashed #E2E8F0;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .more-card:hover {
          border-color: #FF6B35;
          background: #FFF7ED;
        }

        /* Unique diagonal cut shape */
        .diagonal-cut {
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%);
        }

        .diagonal-cut-reverse {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 60px 100%, 0 calc(100% - 60px));
        }

        .diagonal-cut-top {
          clip-path: polygon(60px 0, 100% 0, 100% 100%, 0 100%, 0 60px);
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .dest-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto !important;
          }
          
          .dest-card-large {
            grid-column: span 2 !important;
          }
        }

        @media (max-width: 768px) {
          .dest-section {
            padding: 80px 20px !important;
          }
          
          .dest-grid {
            grid-template-columns: 1fr !important;
          }
          
          .dest-card-large {
            grid-column: span 1 !important;
          }

          .dest-header {
            flex-direction: column !important;
            text-align: center;
            gap: 24px !important;
          }

          .dest-title-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }

          .dest-title {
            font-size: 36px !important;
            text-align: center !important;
          }

          .stats-badges {
            justify-content: center !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div 
          className="dest-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '60px'
          }}
        >
          <div className="dest-title-wrapper">
            {/* Tagline */}
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
                Study Destinations
              </span>
            </div>

            {/* Title */}
            <h2 
              className="dest-title"
              style={{
                fontSize: '48px',
                fontWeight: '800',
                color: '#1E3A5F',
                letterSpacing: '-1.5px',
                lineHeight: '1.1'
              }}
            >
              Discover Your<br />
              <span style={{ color: '#FF6B35' }}>Global Future</span>
            </h2>
          </div>

          {/* Stats Badges */}
          <div 
            className="stats-badges"
            style={{
              display: 'flex',
              gap: '16px'
            }}
          >
            <div style={{
              padding: '16px 24px',
              background: '#F8FAFC',
              borderRadius: '16px',
              textAlign: 'center',
              border: '1px solid #E2E8F0'
            }}>
              <div style={{ fontSize: '28px', fontWeight: '800', color: '#1E3A5F' }}>26</div>
              <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500' }}>Countries</div>
            </div>
            <div style={{
              padding: '16px 24px',
              background: '#F8FAFC',
              borderRadius: '16px',
              textAlign: 'center',
              border: '1px solid #E2E8F0'
            }}>
              <div style={{ fontSize: '28px', fontWeight: '800', color: '#1E3A5F' }}>500+</div>
              <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500' }}>Universities</div>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div 
          className="dest-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: '280px 280px',
            gap: '20px'
          }}
        >
          {/* Canada - Large Card (2x2) */}
          
          <Link 
            href="https://globalrusiec.com/"
            className="dest-card dest-card-large diagonal-cut"
            style={{
              gridColumn: 'span 2',
              gridRow: 'span 2',
              borderRadius: '24px',
              textDecoration: 'none'
            }}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="dest-card-img"
              style={{ backgroundImage: `url(${featuredDestinations[0].image})` }}
            />
            <div className="dest-card-overlay" />
            <div className="dest-card-content" style={{ padding: '40px' }}>
              {/* Country Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                marginBottom: '16px',
                width: 'fit-content'
              }}>
                <span style={{ fontSize: '20px' }}>{featuredDestinations[0].flag}</span>
                <span style={{ color: 'white', fontWeight: '600', fontSize: '14px' }}>
                  {featuredDestinations[0].universities} Universities
                </span>
              </div>

              {/* Country Name */}
              <h3 style={{
                fontSize: '42px',
                fontWeight: '800',
                color: 'white',
                marginBottom: '8px',
                letterSpacing: '-1px'
              }}>
                {featuredDestinations[0].country}
              </h3>

              {/* Tagline */}
              <p style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '20px'
              }}>
                {featuredDestinations[0].tagline}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: '24px' }}>
                {featuredDestinations[0].highlights.map((h: string, i: number) => (
                  <span key={i} className="dest-tag">{h}</span>
                ))}
              </div>

              {/* CTA */}
              <span className="dest-explore-btn">
                Explore {featuredDestinations[0].country}
                <span>→</span>
              </span>
            </div>
          </Link>

          {/* Australia - Medium Card */}
          <Link 
            href={`/destinations/${featuredDestinations[1].slug}`}
            className="dest-card diagonal-cut-reverse"
            style={{
              gridColumn: 'span 1',
              gridRow: 'span 1',
              borderRadius: '24px',
              textDecoration: 'none'
            }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="dest-card-img"
              style={{ backgroundImage: `url(${featuredDestinations[1].image})` }}
            />
            <div className="dest-card-overlay" />
            <div className="dest-card-content">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px'
              }}>
                <span style={{ fontSize: '24px' }}>{featuredDestinations[1].flag}</span>
                <span style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.7)',
                  fontWeight: '600'
                }}>
                  {featuredDestinations[1].universities} Unis
                </span>
              </div>
              <h3 style={{
                fontSize: '28px',
                fontWeight: '800',
                color: 'white',
                marginBottom: '4px'
              }}>
                {featuredDestinations[1].country}
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.7)'
              }}>
                {featuredDestinations[1].tagline}
              </p>
            </div>
          </Link>

          {/* France - Medium Card */}
          <Link 
            href={`/destinations/${featuredDestinations[2].slug}`}
            className="dest-card diagonal-cut-top"
            style={{
              gridColumn: 'span 1',
              gridRow: 'span 1',
              borderRadius: '24px',
              textDecoration: 'none'
            }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="dest-card-img"
              style={{ backgroundImage: `url(${featuredDestinations[2].image})` }}
            />
            <div className="dest-card-overlay" />
            <div className="dest-card-content">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px'
              }}>
                <span style={{ fontSize: '24px' }}>{featuredDestinations[2].flag}</span>
                <span style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.7)',
                  fontWeight: '600'
                }}>
                  {featuredDestinations[2].universities} Unis
                </span>
              </div>
              <h3 style={{
                fontSize: '28px',
                fontWeight: '800',
                color: 'white',
                marginBottom: '4px'
              }}>
                {featuredDestinations[2].country}
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.7)'
              }}>
                {featuredDestinations[2].tagline}
              </p>
            </div>
          </Link>

          {/* Spain - Small Card */}
          <Link 
            href={`/destinations/${featuredDestinations[3].slug}`}
            className="dest-card"
            style={{
              gridColumn: 'span 1',
              gridRow: 'span 1',
              borderRadius: '24px',
              textDecoration: 'none'
            }}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="dest-card-img"
              style={{ backgroundImage: `url(${featuredDestinations[3].image})` }}
            />
            <div className="dest-card-overlay" />
            <div className="dest-card-content">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px'
              }}>
                <span style={{ fontSize: '24px' }}>{featuredDestinations[3].flag}</span>
                <span style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.7)',
                  fontWeight: '600'
                }}>
                  {featuredDestinations[3].universities} Unis
                </span>
              </div>
              <h3 style={{
                fontSize: '28px',
                fontWeight: '800',
                color: 'white',
                marginBottom: '4px'
              }}>
                {featuredDestinations[3].country}
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.7)'
              }}>
                {featuredDestinations[3].tagline}
              </p>
            </div>
          </Link>

          {/* More Countries Card */}
          <Link 
            href="/destinations"
            className="more-card"
            style={{
              gridColumn: 'span 1',
              gridRow: 'span 1',
              textDecoration: 'none'
            }}
          >
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#FF6B35',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <span style={{ color: 'white', fontSize: '28px', fontWeight: '700' }}>+</span>
            </div>
            <div style={{
              fontSize: '32px',
              fontWeight: '800',
              color: '#1E3A5F',
              marginBottom: '4px'
            }}>
              22 More
            </div>
            <div style={{
              fontSize: '15px',
              color: '#64748B',
              marginBottom: '20px'
            }}>
              Countries to Explore
            </div>
            <span style={{
              fontSize: '14px',
              fontWeight: '700',
              color: '#FF6B35',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              View All Destinations
              <span>→</span>
            </span>
          </Link>
        </div>

        {/* Countries Ticker */}
        <div style={{
          marginTop: '48px',
          padding: '24px 0',
          borderTop: '1px solid #E2E8F0',
          borderBottom: '1px solid #E2E8F0',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            gap: '32px',
            animation: 'scroll 30s linear infinite'
          }}>
            <style>{`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
            {[...otherCountries, ...otherCountries].map((country: string, idx: number) => (
              <span 
                key={idx}
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#94A3B8',
                  whiteSpace: 'nowrap'
                }}
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}