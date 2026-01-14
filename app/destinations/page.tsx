"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
// ============================================
// ALL DESTINATIONS PAGE
// /destinations
// ============================================

const allCountries = [
  { name: 'Canada', slug: 'canada', flag: '🇨🇦', universities: '96+', featured: true },
  { name: 'Australia', slug: 'australia', flag: '🇦🇺', universities: '43+', featured: true },
  { name: 'France', slug: 'france', flag: '🇫🇷', universities: '72+', featured: true },
  { name: 'Spain', slug: 'spain', flag: '🇪🇸', universities: '84+', featured: true },
  { name: 'Portugal', slug: 'portugal', flag: '🇵🇹', universities: '40+', featured: false },
  { name: 'Ireland', slug: 'ireland', flag: '🇮🇪', universities: '34+', featured: false },
  { name: 'Poland', slug: 'poland', flag: '🇵🇱', universities: '45+', featured: false },
  { name: 'Italy', slug: 'italy', flag: '🇮🇹', universities: '90+', featured: false },
  { name: 'Germany', slug: 'germany', flag: '🇩🇪', universities: '120+', featured: false },
  { name: 'Sweden', slug: 'sweden', flag: '🇸🇪', universities: '35+', featured: false },
  { name: 'Denmark', slug: 'denmark', flag: '🇩🇰', universities: '28+', featured: false },
  { name: 'Norway', slug: 'norway', flag: '🇳🇴', universities: '30+', featured: false },
  { name: 'Finland', slug: 'finland', flag: '🇫🇮', universities: '38+', featured: false },
  { name: 'Netherlands', slug: 'netherlands', flag: '🇳🇱', universities: '55+', featured: false },
  { name: 'Czech Republic', slug: 'czech-republic', flag: '🇨🇿', universities: '26+', featured: false },
  { name: 'Greece', slug: 'greece', flag: '🇬🇷', universities: '24+', featured: false },
  { name: 'Croatia', slug: 'croatia', flag: '🇭🇷', universities: '18+', featured: false },
  { name: 'Slovenia', slug: 'slovenia', flag: '🇸🇮', universities: '12+', featured: false },
  { name: 'Estonia', slug: 'estonia', flag: '🇪🇪', universities: '15+', featured: false },
  { name: 'Latvia', slug: 'latvia', flag: '🇱🇻', universities: '20+', featured: false },
  { name: 'Lithuania', slug: 'lithuania', flag: '🇱🇹', universities: '22+', featured: false },
  { name: 'Slovakia', slug: 'slovakia', flag: '🇸🇰', universities: '18+', featured: false },
  { name: 'Malta', slug: 'malta', flag: '🇲🇹', universities: '8+', featured: false },
  { name: 'Cyprus', slug: 'cyprus', flag: '🇨🇾', universities: '12+', featured: false },
  { name: 'Georgia', slug: 'georgia', flag: '🇬🇪', universities: '20+', featured: false },
  { name: 'UAE', slug: 'uae', flag: '🇦🇪', universities: '35+', featured: false },
];

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

        .country-card {
          background: white;
          border: 2px solid #E2E8F0;
          border-radius: 20px;
          padding: 24px;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .country-card:hover {
          border-color: #FF6B35;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
        }

        .country-card.featured {
          background: linear-gradient(135deg, #1E3A5F 0%, #0F2744 100%);
          border-color: #1E3A5F;
        }

        .country-card.featured:hover {
          border-color: #FF6B35;
        }

        @media (max-width: 768px) {
          .countries-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Hero */}
      <section style={{
        padding: '140px 48px 80px',
        background: '#F8FAFC',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px'
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
              26 Countries
            </span>
            <div style={{
              width: '36px',
              height: '3px',
              background: '#FF6B35',
              borderRadius: '2px'
            }} />
          </div>

          <h1 style={{
            fontSize: '52px',
            fontWeight: '800',
            color: '#1E3A5F',
            letterSpacing: '-2px',
            marginBottom: '16px'
          }}>
            All Study Destinations
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#64748B',
            lineHeight: '1.7'
          }}>
            Explore world-class education opportunities across 26 countries with 500+ partner universities
          </p>
        </div>
      </section>

      {/* Countries Grid */}
      <section style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Featured */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#1E3A5F',
              marginBottom: '24px'
            }}>
              Featured Destinations
            </h2>
            
            <div 
              className="countries-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px'
              }}
            >
              {allCountries.filter(c => c.featured).map((country) => (
                <Link 
                  key={country.slug}
                  href={`/destinations/${country.slug}`}
                  className="country-card featured"
                >
                  <span style={{ fontSize: '40px' }}>{country.flag}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '22px',
                      fontWeight: '700',
                      color: 'white',
                      marginBottom: '4px'
                    }}>
                      {country.name}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)'
                    }}>
                      {country.universities} Universities
                    </div>
                  </div>
                  <span style={{
                    color: '#FF6B35',
                    fontSize: '20px',
                    fontWeight: '600'
                  }}>→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* All Countries */}
          <div>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#1E3A5F',
              marginBottom: '24px'
            }}>
              All Countries
            </h2>
            
            <div 
              className="countries-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px'
              }}
            >
              {allCountries.filter(c => !c.featured).map((country) => (
                <Link 
                  key={country.slug}
                  href={`/destinations/${country.slug}`}
                  className="country-card"
                >
                  <span style={{ fontSize: '32px' }}>{country.flag}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#1E3A5F',
                      marginBottom: '2px'
                    }}>
                      {country.name}
                    </div>
                    <div style={{
                      fontSize: '13px',
                      color: '#64748B'
                    }}>
                      {country.universities} Unis
                    </div>
                  </div>
                  <span style={{
                    color: '#FF6B35',
                    fontSize: '18px'
                  }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}