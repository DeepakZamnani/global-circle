"use client";

import React from 'react';
import Link from 'next/link';
import { countryData } from '../data/countryData'
import Navbar from './Navbar';
import Footer from './Footer';

// ============================================
// COUNTRY PAGE - Luxury Minimal Design
// Route: /destinations/[country]
// ============================================

interface CountryPageProps {
  countrySlug: string;
}

export default function CountryPage({ countrySlug }: CountryPageProps) {
  const country = countryData[countrySlug];

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FFFFFF',
      fontFamily: '"Plus Jakarta Sans", sans-serif'
    }}>
      <Navbar/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .stat-card {
          background: white;
          border-radius: 20px;
          padding: 28px;
          text-align: center;
          border: 1px solid #E2E8F0;
          transition: all 0.4s ease;
        }

        .stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: #FF6B35;
        }

        .highlight-card {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 32px;
          border: 2px solid #F1F5F9;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .highlight-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: #FF6B35;
          transform: scaleY(0);
          transition: transform 0.4s ease;
        }

        .highlight-card:hover {
          border-color: #FF6B35;
          background: #FFFBF8;
        }

        .highlight-card:hover::before {
          transform: scaleY(1);
        }

        .program-chip {
          display: inline-block;
          padding: 14px 24px;
          background: #F8FAFC;
          border: 2px solid #E2E8F0;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 600;
          color: #1E3A5F;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .program-chip:hover {
          border-color: #FF6B35;
          background: #FFF7ED;
          color: #FF6B35;
          transform: translateY(-2px);
        }

        .university-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: #F8FAFC;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .university-item:hover {
          background: #FFF7ED;
          transform: translateX(8px);
        }

        .city-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: white;
          border: 2px solid #E2E8F0;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          color: #1E3A5F;
          transition: all 0.3s ease;
        }

        .city-badge:hover {
          border-color: #2EC4B6;
          background: #F0FDFA;
        }

        .req-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 0;
          border-bottom: 1px solid #F1F5F9;
        }

        .req-item:last-child {
          border-bottom: none;
        }

        .gallery-img {
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .gallery-img:hover {
          transform: scale(1.03);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .gallery-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-img:hover img {
          transform: scale(1.1);
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          background: #FF6B35;
          color: white;
          border-radius: 50px;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(255,107,53,0.4);
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          background: transparent;
          color: #1E3A5F;
          border: 2px solid #E2E8F0;
          border-radius: 50px;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          border-color: #1E3A5F;
          background: #F8FAFC;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .highlights-grid {
            grid-template-columns: 1fr !important;
          }

          .gallery-grid {
            grid-template-columns: 1fr !important;
          }

          .universities-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 140px 20px 80px !important;
          }

          .hero-title {
            font-size: 36px !important;
          }

          .section-padding {
            padding: 60px 20px !important;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }

          .stat-card {
            padding: 20px !important;
          }

          .cta-row {
            flex-direction: column !important;
            width: 100%;
          }

          .cta-row a, .cta-row button {
            width: 100%;
            justify-content: center;
          }

          .info-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '85vh',
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
        
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)'
        }} />

        {/* Hero Content */}
        <div 
          className="hero-content"
          style={{
            position: 'relative',
            zIndex: 2,
            minHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '60px 48px 80px',
            maxWidth: '1400px',
            margin: '0 auto'
          }}
        >
          {/* Back Link */}
          <Link 
            href="/destinations"
            style={{
              position: 'absolute',
              top: '120px',
              left: '48px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '14px',
              opacity: 0.8,
              transition: 'all 0.3s ease'
            }}
          >
            <span>←</span>
            All Destinations
          </Link>

          {/* Country Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 24px',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50px',
            marginBottom: '24px',
            width: 'fit-content'
          }}>
            <span style={{ fontSize: '32px' }}>{country.flag}</span>
            <span style={{ 
              color: 'white', 
              fontWeight: '700', 
              fontSize: '15px',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Study in {country.name}
            </span>
          </div>

          {/* Title */}
          <h1 
            className="hero-title"
            style={{
              fontSize: '64px',
              fontWeight: '800',
              color: 'white',
              letterSpacing: '-2px',
              lineHeight: '1.05',
              marginBottom: '20px',
              maxWidth: '800px'
            }}
          >
            {country.tagline}
          </h1>

          {/* Description */}
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '1.7',
            maxWidth: '600px',
            marginBottom: '32px'
          }}>
            {country.description}
          </p>

          {/* CTA Buttons */}
          <div className="cta-row" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="cta-primary">
              Start Your Application
              <span>→</span>
            </Link>
            <button 
              className="cta-secondary"
              style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}
            >
              Download Guide
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section - Floating Cards */}
      <section style={{
        marginTop: '-60px',
        padding: '0 48px 80px',
        position: 'relative',
        zIndex: 3
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div 
            className="stats-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px'
            }}
          >
            <div className="stat-card">
              <div style={{ fontSize: '42px', fontWeight: '800', color: '#1E3A5F', marginBottom: '4px' }}>
                {country.stats.universities}
              </div>
              <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '600' }}>Universities</div>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: '42px', fontWeight: '800', color: '#1E3A5F', marginBottom: '4px' }}>
                {country.stats.programs}
              </div>
              <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '600' }}>Programs</div>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: '42px', fontWeight: '800', color: '#1E3A5F', marginBottom: '4px' }}>
                {country.stats.intlStudents}
              </div>
              <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '600' }}>Int'l Students</div>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: '42px', fontWeight: '800', color: '#FF6B35', marginBottom: '4px' }}>
                {country.stats.globalRank}
              </div>
              <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '600' }}>Global Rank</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study Section */}
      <section 
        className="section-padding"
        style={{ padding: '80px 48px', background: '#FFFFFF' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-end',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px'
              }}>
                <div style={{ width: '36px', height: '3px', background: '#FF6B35', borderRadius: '2px' }} />
                <span style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#64748B',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Why {country.name}
                </span>
              </div>
              <h2 style={{
                fontSize: '42px',
                fontWeight: '800',
                color: '#1E3A5F',
                letterSpacing: '-1.5px'
              }}>
                Reasons to Choose<br />
                <span style={{ color: '#FF6B35' }}>{country.name}</span>
              </h2>
            </div>
          </div>

          {/* Highlights Grid */}
          <div 
            className="highlights-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px'
            }}
          >
            {country.highlights.map((highlight, idx) => (
              <div key={idx} className="highlight-card">
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px'
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: '#FFF7ED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FF6B35',
                    fontWeight: '800',
                    fontSize: '20px',
                    flexShrink: 0
                  }}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#1E3A5F',
                      marginBottom: '8px'
                    }}>
                      {highlight.title}
                    </h3>
                    <p style={{
                      fontSize: '15px',
                      color: '#64748B',
                      lineHeight: '1.6'
                    }}>
                      {highlight.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: '80px 48px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div 
            className="gallery-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr',
              gap: '20px',
              height: '400px'
            }}
          >
            <div className="gallery-img" style={{ gridRow: 'span 2' }}>
              <img src={country.galleryImages[0]} alt={country.name} style={{ height: '100%' }} />
            </div>
            <div className="gallery-img">
              <img src={country.galleryImages[1]} alt={country.name} style={{ height: '200px' }} />
            </div>
            <div className="gallery-img">
              <img src={country.galleryImages[2]} alt={country.name} style={{ height: '200px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Programs Section */}
      <section className="section-padding" style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px'
            }}>
              <div style={{ width: '36px', height: '3px', background: '#FF6B35', borderRadius: '2px' }} />
              <span style={{
                fontSize: '13px',
                fontWeight: '700',
                color: '#64748B',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}>
                Programs
              </span>
            </div>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '800',
              color: '#1E3A5F',
              letterSpacing: '-1px'
            }}>
              Popular Fields of Study
            </h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {country.popularPrograms.map((program, idx) => (
              <span key={idx} className="program-chip">{program}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section style={{ padding: '80px 48px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px'
            }}>
              <div style={{ width: '36px', height: '3px', background: '#FF6B35', borderRadius: '2px' }} />
              <span style={{
                fontSize: '13px',
                fontWeight: '700',
                color: '#64748B',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}>
                Universities
              </span>
            </div>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '800',
              color: '#1E3A5F',
              letterSpacing: '-1px'
            }}>
              Top Universities in {country.name}
            </h2>
          </div>

          <div 
            className="universities-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}
          >
            {country.topUniversities.map((uni, idx) => (
              <div key={idx} className="university-item">
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: '#1E3A5F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '16px'
                }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <span style={{
                  fontSize: '17px',
                  fontWeight: '600',
                  color: '#1E3A5F'
                }}>
                  {uni}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Cities Section */}
      <section className="section-padding" style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '800',
              color: '#1E3A5F',
              letterSpacing: '-1px'
            }}>
              Top Student Cities
            </h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {country.topCities.map((city, idx) => (
              <span key={idx} className="city-badge">
                <span style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#2EC4B6'
                }} />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cost & Requirements Section */}
      <section style={{ padding: '80px 48px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div 
            className="info-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px'
            }}
          >
            {/* Requirements */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px'
              }}>
                <div style={{ width: '36px', height: '3px', background: '#FF6B35', borderRadius: '2px' }} />
                <span style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#64748B',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Requirements
                </span>
              </div>
              <h2 style={{
                fontSize: '32px',
                fontWeight: '800',
                color: '#1E3A5F',
                marginBottom: '32px'
              }}>
                What You Need
              </h2>

              <div style={{
                background: 'white',
                borderRadius: '24px',
                padding: '24px 32px',
                border: '1px solid #E2E8F0'
              }}>
                {country.requirements.map((req, idx) => (
                  <div key={idx} className="req-item">
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: '#ECFDF5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10B981',
                      fontWeight: '700',
                      fontSize: '14px',
                      flexShrink: 0
                    }}>
                      ✓
                    </div>
                    <span style={{ fontSize: '15px', color: '#1E3A5F', fontWeight: '500' }}>
                      {req}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost & Intakes */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px'
              }}>
                <div style={{ width: '36px', height: '3px', background: '#2EC4B6', borderRadius: '2px' }} />
                <span style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#64748B',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Cost & Intakes
                </span>
              </div>
              <h2 style={{
                fontSize: '32px',
                fontWeight: '800',
                color: '#1E3A5F',
                marginBottom: '32px'
              }}>
                Plan Your Budget
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Tuition */}
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '24px',
                  border: '1px solid #E2E8F0'
                }}>
                  <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '600', marginBottom: '8px' }}>
                    TUITION FEES
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: '#1E3A5F' }}>
                    {country.tuitionRange}
                  </div>
                </div>

                {/* Living Cost */}
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '24px',
                  border: '1px solid #E2E8F0'
                }}>
                  <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '600', marginBottom: '8px' }}>
                    LIVING EXPENSES
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: '#1E3A5F' }}>
                    {country.livingCost}
                  </div>
                </div>

                {/* Intakes */}
                <div style={{
                  background: '#1E3A5F',
                  borderRadius: '20px',
                  padding: '24px'
                }}>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: '600', marginBottom: '12px' }}>
                    AVAILABLE INTAKES
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {country.intakes.map((intake, idx) => (
                      <span 
                        key={idx}
                        style={{
                          padding: '8px 16px',
                          background: 'rgba(255,255,255,0.1)',
                          borderRadius: '50px',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: 'white'
                        }}
                      >
                        {intake}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section
      <section style={{
        padding: '120px 48px',
        background: 'linear-gradient(135deg, #1E3A5F 0%, #0F2744 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ fontSize: '64px', marginBottom: '24px', display: 'block' }}>{country.flag}</span>
          <h2 style={{
            fontSize: '44px',
            fontWeight: '800',
            color: 'white',
            marginBottom: '16px',
            letterSpacing: '-1.5px'
          }}>
            Ready to Study in {country.name}?
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '40px',
            lineHeight: '1.7'
          }}>
            Book a free consultation with our expert counselors and start your journey today
          </p>
          
          <div className="cta-row" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="cta-primary" style={{ padding: '20px 40px', fontSize: '17px' }}>
              Book Free Consultation
              <span>→</span>
            </Link>
            <Link 
              href="/destinations" 
              className="cta-secondary"
              style={{ 
                background: 'transparent', 
                borderColor: 'rgba(255,255,255,0.3)', 
                color: 'white',
                padding: '20px 40px',
                fontSize: '17px'
              }}
            >
              Explore Other Countries
            </Link>
          </div>
        </div>
      </section> */}
      <Footer/>
    </div>
  );
}