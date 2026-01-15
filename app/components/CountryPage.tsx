"use client";

import React from 'react';
import Link from 'next/link';
import { countryData } from '../data/countryData';
import Navbar from './Navbar';

// ============================================
// COUNTRY PAGE - Mobile Friendly Version
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
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      overflowX: 'hidden'
    }}>
    <Navbar/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        .stat-card {
          background: white;
          border-radius: 16px;
          padding: 24px 16px;
          text-align: center;
          border: 1px solid #E2E8F0;
          transition: all 0.4s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.08);
          border-color: #FF6B35;
        }

        .highlight-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 24px;
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
          padding: 12px 20px;
          background: #F8FAFC;
          border: 2px solid #E2E8F0;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          color: #1E3A5F;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .program-chip:hover {
          border-color: #FF6B35;
          background: #FFF7ED;
          color: #FF6B35;
        }

        .university-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #F8FAFC;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .university-item:hover {
          background: #FFF7ED;
        }

        .city-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: white;
          border: 2px solid #E2E8F0;
          border-radius: 50px;
          font-size: 13px;
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
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid #F1F5F9;
        }

        .req-item:last-child {
          border-bottom: none;
        }

        .gallery-img {
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .gallery-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-img:hover img {
          transform: scale(1.05);
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 28px;
          background: #FF6B35;
          color: white;
          border-radius: 50px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(255,107,53,0.4);
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 28px;
          background: transparent;
          color: #1E3A5F;
          border: 2px solid #E2E8F0;
          border-radius: 50px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .cta-secondary:hover {
          border-color: #1E3A5F;
          background: #F8FAFC;
        }

        /* Section base styles */
        .section-base {
          padding: 60px 20px;
        }

        .section-title {
          font-size: 28px;
          font-weight: 800;
          color: #1E3A5F;
          letter-spacing: -0.5px;
          margin-bottom: 24px;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .section-label-line {
          width: 28px;
          height: 3px;
          background: #FF6B35;
          border-radius: 2px;
        }

        .section-label-text {
          font-size: 12px;
          font-weight: 700;
          color: #64748B;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        /* ==================== TABLET ==================== */
        @media (min-width: 768px) {
          .section-base {
            padding: 80px 40px;
          }

          .section-title {
            font-size: 36px;
          }

          .stat-card {
            padding: 28px 20px;
          }

          .highlight-card {
            padding: 28px;
          }

          .cta-primary, .cta-secondary {
            width: auto;
            padding: 18px 32px;
            font-size: 16px;
          }
        }

        /* ==================== DESKTOP ==================== */
        @media (min-width: 1024px) {
          .section-base {
            padding: 100px 48px;
          }

          .section-title {
            font-size: 42px;
          }

          .stat-card {
            padding: 32px 24px;
            border-radius: 20px;
          }

          .highlight-card {
            padding: 32px;
            border-radius: 24px;
          }

          .program-chip {
            padding: 14px 24px;
            font-size: 15px;
          }

          .cta-primary, .cta-secondary {
            padding: 20px 40px;
            font-size: 17px;
          }
        }
      `}</style>

      {/* Hero Section */}
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
        
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)'
        }} />

        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '100px 20px 40px',
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
              gap: '6px',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '13px',
              opacity: 0.8
            }}
          >
            <span>←</span>
            Back
          </Link>

          {/* Country Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 18px',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50px',
            marginBottom: '16px',
            width: 'fit-content'
          }}>
            <span style={{ fontSize: '24px' }}>{country.flag}</span>
            <span style={{ 
              color: 'white', 
              fontWeight: '700', 
              fontSize: '13px',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Study in {country.name}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(32px, 8vw, 64px)',
            fontWeight: '800',
            color: 'white',
            letterSpacing: '-1px',
            lineHeight: '1.1',
            marginBottom: '16px',
            maxWidth: '800px'
          }}>
            {country.tagline}
          </h1>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(15px, 4vw, 18px)',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '1.7',
            maxWidth: '600px',
            marginBottom: '24px'
          }}>
            {country.description}
          </p>

          {/* CTA Buttons */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '12px',
            maxWidth: '400px'
          }}>
            <Link href="/contact" className="cta-primary">
              Start Your Application
              <span>→</span>
            </Link>
            <button 
              className="cta-secondary"
              style={{ 
                background: 'rgba(255,255,255,0.1)', 
                borderColor: 'rgba(255,255,255,0.3)', 
                color: 'white' 
              }}
            >
              Download Guide
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '20px',
        marginTop: '-30px',
        position: 'relative',
        zIndex: 3
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px'
          }}>
            <div className="stat-card">
              <div style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: '800', color: '#1E3A5F', marginBottom: '4px' }}>
                {country.stats.universities}
              </div>
              <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600' }}>Universities</div>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: '800', color: '#1E3A5F', marginBottom: '4px' }}>
                {country.stats.programs}
              </div>
              <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600' }}>Programs</div>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: '800', color: '#1E3A5F', marginBottom: '4px' }}>
                {country.stats.intlStudents}
              </div>
              <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600' }}>Int'l Students</div>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: '800', color: '#FF6B35', marginBottom: '4px' }}>
                {country.stats.globalRank}
              </div>
              <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600' }}>Global Rank</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study Section */}
      <section className="section-base" style={{ background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ marginBottom: '32px' }}>
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">Why {country.name}</span>
            </div>
            <h2 className="section-title">
              Reasons to Choose<br />
              <span style={{ color: '#FF6B35' }}>{country.name}</span>
            </h2>
          </div>

          {/* Highlights Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {country.highlights.map((highlight, idx) => (
              <div key={idx} className="highlight-card">
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: '#FFF7ED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FF6B35',
                    fontWeight: '800',
                    fontSize: '18px',
                    flexShrink: 0
                  }}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '17px',
                      fontWeight: '700',
                      color: '#1E3A5F',
                      marginBottom: '6px'
                    }}>
                      {highlight.title}
                    </h3>
                    <p style={{
                      fontSize: '14px',
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
      <section style={{ padding: '40px 20px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '12px'
          }}>
            <div className="gallery-img" style={{ height: '200px' }}>
              <img src={country.galleryImages[0]} alt={country.name} />
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px'
            }}>
              <div className="gallery-img" style={{ height: '150px' }}>
                <img src={country.galleryImages[1]} alt={country.name} />
              </div>
              <div className="gallery-img" style={{ height: '150px' }}>
                <img src={country.galleryImages[2]} alt={country.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Programs Section */}
      <section className="section-base">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '24px' }}>
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">Programs</span>
            </div>
            <h2 className="section-title">Popular Fields of Study</h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {country.popularPrograms.map((program, idx) => (
              <span key={idx} className="program-chip">{program}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="section-base" style={{ background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '24px' }}>
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">Universities</span>
            </div>
            <h2 className="section-title">Top Universities</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '12px'
          }}>
            {country.topUniversities.map((uni, idx) => (
              <div key={idx} className="university-item">
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: '#1E3A5F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '14px',
                  flexShrink: 0
                }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <span style={{
                  fontSize: '15px',
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
      <section className="section-base">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title">Top Student Cities</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {country.topCities.map((city, idx) => (
              <span key={idx} className="city-badge">
                <span style={{
                  width: '8px',
                  height: '8px',
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
      <section className="section-base" style={{ background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {/* Requirements */}
            <div>
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">Requirements</span>
              </div>
              <h2 className="section-title" style={{ marginBottom: '20px' }}>What You Need</h2>

              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '20px',
                border: '1px solid #E2E8F0'
              }}>
                {country.requirements.map((req, idx) => (
                  <div key={idx} className="req-item">
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: '#ECFDF5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10B981',
                      fontWeight: '700',
                      fontSize: '12px',
                      flexShrink: 0
                    }}>
                      ✓
                    </div>
                    <span style={{ fontSize: '14px', color: '#1E3A5F', fontWeight: '500' }}>
                      {req}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost & Intakes */}
            <div>
              <div className="section-label">
                <div className="section-label-line" style={{ background: '#2EC4B6' }} />
                <span className="section-label-text">Cost & Intakes</span>
              </div>
              <h2 className="section-title" style={{ marginBottom: '20px' }}>Plan Your Budget</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Tuition */}
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid #E2E8F0'
                }}>
                  <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600', marginBottom: '6px' }}>
                    TUITION FEES
                  </div>
                  <div style={{ fontSize: 'clamp(18px, 5vw, 24px)', fontWeight: '800', color: '#1E3A5F' }}>
                    {country.tuitionRange}
                  </div>
                </div>

                {/* Living Cost */}
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid #E2E8F0'
                }}>
                  <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600', marginBottom: '6px' }}>
                    LIVING EXPENSES
                  </div>
                  <div style={{ fontSize: 'clamp(18px, 5vw, 24px)', fontWeight: '800', color: '#1E3A5F' }}>
                    {country.livingCost}
                  </div>
                </div>

                {/* Intakes */}
                <div style={{
                  background: '#1E3A5F',
                  borderRadius: '16px',
                  padding: '20px'
                }}>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', fontWeight: '600', marginBottom: '10px' }}>
                    AVAILABLE INTAKES
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {country.intakes.map((intake, idx) => (
                      <span 
                        key={idx}
                        style={{
                          padding: '8px 14px',
                          background: 'rgba(255,255,255,0.1)',
                          borderRadius: '50px',
                          fontSize: '13px',
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

      {/* CTA Section */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #1E3A5F 0%, #0F2744 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <span style={{ fontSize: '48px', marginBottom: '20px', display: 'block' }}>{country.flag}</span>
          <h2 style={{
            fontSize: 'clamp(28px, 6vw, 44px)',
            fontWeight: '800',
            color: 'white',
            marginBottom: '12px',
            letterSpacing: '-1px'
          }}>
            Ready to Study in {country.name}?
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '32px',
            lineHeight: '1.7'
          }}>
            Book a free consultation with our expert counselors
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '12px',
            maxWidth: '350px',
            margin: '0 auto'
          }}>
            <Link href="/contact" className="cta-primary">
              Book Free Consultation
              <span>→</span>
            </Link>
            <Link 
              href="/destinations" 
              className="cta-secondary"
              style={{ 
                background: 'transparent', 
                borderColor: 'rgba(255,255,255,0.3)', 
                color: 'white'
              }}
            >
              Explore Other Countries
            </Link>
          </div>
        </div>
      </section>
      <Navbar/>
    </div>
  );
}