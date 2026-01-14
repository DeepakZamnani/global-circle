"use client";

import React from 'react';
import Link from 'next/link';

// ============================================
// COUNTRY PAGE TEMPLATE
// Reusable for all destinations
// ============================================

// Country Data - All destinations with unique info
export const countryData: Record<string, CountryInfo> = {
  canada: {
    name: 'Canada',
    slug: 'canada',
    flag: '🇨🇦',
    heroImage: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1600&q=80',
    tagline: 'Your Gateway to Global Success',
    description: 'Experience world-class education in one of the most welcoming and multicultural countries, offering high-quality programs, post-graduation work opportunities, and an excellent quality of life.',
    color: '#DC2626',
    stats: {
      universities: '96+',
      programs: '15,000+',
      students: '800K+',
      ranking: '#3 Globally'
    },
    highlights: [
      { title: 'Post-Graduation Work Permit', desc: 'Stay and work for up to 3 years after graduation' },
      { title: 'Multicultural Environment', desc: 'One of the most diverse and welcoming countries' },
      { title: 'High Living Standards', desc: 'Excellent healthcare, safety, and quality of life' },
      { title: 'Pathway to PR', desc: 'Clear immigration pathways for international students' }
    ],
    popularPrograms: ['Business & MBA', 'Computer Science', 'Engineering', 'Healthcare', 'Data Science'],
    topCities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
    requirements: [
      'Valid passport',
      'Proof of acceptance from DLI',
      'Proof of financial support',
      'IELTS/TOEFL scores',
      'Statement of Purpose'
    ],
    intakes: ['Fall (September)', 'Winter (January)', 'Summer (May)']
  },
  australia: {
    name: 'Australia',
    slug: 'australia',
    flag: '🇦🇺',
    heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600&q=80',
    tagline: 'World-Class Education & Lifestyle',
    description: 'Experience world-class education in a multicultural environment with globally recognized universities, offering excellent research opportunities and an outstanding quality of life.',
    color: '#1E3A5F',
    stats: {
      universities: '43+',
      programs: '22,000+',
      students: '750K+',
      ranking: '#2 Globally'
    },
    highlights: [
      { title: 'World-Class Universities', desc: '7 universities in global top 100' },
      { title: 'Post-Study Work Rights', desc: '2-4 years post-study work visa' },
      { title: 'Multicultural Environment', desc: 'Students from 190+ countries' },
      { title: 'Amazing Lifestyle', desc: 'Beaches, cities, and natural wonders' }
    ],
    popularPrograms: ['Business & Management', 'IT & Computer Science', 'Engineering', 'Nursing', 'Hospitality'],
    topCities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
    requirements: [
      'Valid passport',
      'Confirmation of Enrolment (CoE)',
      'Genuine Temporary Entrant (GTE)',
      'IELTS 6.0+ / PTE 50+',
      'Financial capacity proof'
    ],
    intakes: ['February (Main)', 'July (Mid-year)']
  },
  france: {
    name: 'France',
    slug: 'france',
    flag: '🇫🇷',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80',
    tagline: 'Where Culture Meets Excellence',
    description: 'Experience world-class education in one of Europe\'s most culturally rich countries, offering prestigious programs across diverse fields including fashion, culinary arts, and business.',
    color: '#1E3A5F',
    stats: {
      universities: '72+',
      programs: '3,500+',
      students: '370K+',
      ranking: '#6 Globally'
    },
    highlights: [
      { title: 'Rich Cultural Heritage', desc: 'Art, history, and cuisine at your doorstep' },
      { title: 'Affordable Education', desc: 'Low tuition fees even for international students' },
      { title: 'Post-Study Work Options', desc: 'Work permit for graduates' },
      { title: 'Central EU Location', desc: 'Easy access to all of Europe' }
    ],
    popularPrograms: ['Fashion & Design', 'Culinary Arts', 'Business & MBA', 'Engineering', 'Arts & Humanities'],
    topCities: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice'],
    requirements: [
      'Valid passport',
      'Acceptance letter from institution',
      'Proof of accommodation',
      'Financial guarantee',
      'French/English proficiency'
    ],
    intakes: ['September (Main)', 'January']
  },
  spain: {
    name: 'Spain',
    slug: 'spain',
    flag: '🇪🇸',
    heroImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1600&q=80',
    tagline: 'Vibrant Life, Quality Education',
    description: 'Experience world-class education in Spain while immersing yourself in a rich cultural heritage and vibrant student life with affordable living costs.',
    color: '#FF6B35',
    stats: {
      universities: '84+',
      programs: '2,800+',
      students: '200K+',
      ranking: '#10 Globally'
    },
    highlights: [
      { title: 'Vibrant Student Life', desc: 'Amazing social scene and festivals' },
      { title: 'Affordable Education', desc: 'Low tuition and living costs' },
      { title: 'Historic Universities', desc: 'Some of the oldest in the world' },
      { title: 'Learn Spanish', desc: '2nd most spoken language globally' }
    ],
    popularPrograms: ['Business & Tourism', 'Architecture', 'Medicine', 'Arts & Design', 'Spanish Language'],
    topCities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Bilbao'],
    requirements: [
      'Valid passport',
      'University acceptance',
      'Proof of funds',
      'Health insurance',
      'Spanish/English proficiency'
    ],
    intakes: ['September (Main)', 'February']
  }
};

// Type definitions
interface CountryInfo {
  name: string;
  slug: string;
  flag: string;
  heroImage: string;
  tagline: string;
  description: string;
  color: string;
  stats: {
    universities: string;
    programs: string;
    students: string;
    ranking: string;
  };
  highlights: { title: string; desc: string }[];
  popularPrograms: string[];
  topCities: string[];
  requirements: string[];
  intakes: string[];
}

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
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .country-hero {
          position: relative;
          height: 70vh;
          min-height: 500px;
          overflow: hidden;
        }

        .country-hero-img {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
        }

        .country-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(30,58,95,0.4) 0%, rgba(30,58,95,0.85) 100%);
        }

        .stat-card {
          background: white;
          border-radius: 20px;
          padding: 24px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          border: 1px solid #E2E8F0;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
        }

        .highlight-card {
          background: #F8FAFC;
          border-radius: 20px;
          padding: 28px;
          border: 1px solid #E2E8F0;
          transition: all 0.3s ease;
        }

        .highlight-card:hover {
          border-color: #FF6B35;
          background: #FFF7ED;
        }

        .program-tag {
          display: inline-block;
          padding: 12px 24px;
          background: white;
          border: 2px solid #E2E8F0;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 600;
          color: #1E3A5F;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .program-tag:hover {
          border-color: #FF6B35;
          background: #FFF7ED;
          color: #FF6B35;
        }

        .city-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #F1F5F9;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          color: #1E3A5F;
        }

        .req-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px 0;
          border-bottom: 1px solid #E2E8F0;
        }

        .req-item:last-child {
          border-bottom: none;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          background: #FF6B35;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 700;
          color: white;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(255,107,53,0.4);
        }

        .cta-btn-secondary {
          background: #1E3A5F;
        }

        .cta-btn-secondary:hover {
          box-shadow: 0 12px 32px rgba(30,58,95,0.4);
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          opacity: 0.8;
          transition: opacity 0.3s;
        }

        .back-link:hover {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .highlights-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .country-hero {
            height: 60vh;
          }

          .hero-title {
            font-size: 42px !important;
          }

          .stats-grid {
            grid-template-columns: 1fr !important;
          }

          .highlights-grid {
            grid-template-columns: 1fr !important;
          }

          .section-padding {
            padding: 60px 20px !important;
          }

          .cta-section {
            flex-direction: column !important;
            text-align: center;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="country-hero">
        <div 
          className="country-hero-img"
          style={{ backgroundImage: `url(${country.heroImage})` }}
        />
        <div className="country-hero-overlay" />
        
        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '32px 48px 60px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {/* Back Link */}
          <Link href="/destinations" className="back-link">
            <span>←</span>
            All Destinations
          </Link>

          {/* Hero Text */}
          <div>
            {/* Flag & Country Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 24px',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50px',
              marginBottom: '24px'
            }}>
              <span style={{ fontSize: '32px' }}>{country.flag}</span>
              <span style={{ 
                color: 'white', 
                fontWeight: '700', 
                fontSize: '16px',
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
                lineHeight: '1.1',
                marginBottom: '16px',
                maxWidth: '700px'
              }}
            >
              {country.tagline}
            </h1>

            {/* Description */}
            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: '1.7',
              maxWidth: '600px'
            }}>
              {country.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Overlapping Cards */}
      <section style={{
        marginTop: '-60px',
        padding: '0 48px',
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
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#1E3A5F', marginBottom: '4px' }}>
                {country.stats.universities}
              </div>
              <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '500' }}>Universities</div>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#1E3A5F', marginBottom: '4px' }}>
                {country.stats.programs}
              </div>
              <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '500' }}>Programs</div>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#1E3A5F', marginBottom: '4px' }}>
                {country.stats.students}
              </div>
              <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '500' }}>Int'l Students</div>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#FF6B35', marginBottom: '4px' }}>
                {country.stats.ranking}
              </div>
              <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '500' }}>For Education</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study Here Section */}
      <section 
        className="section-padding"
        style={{ padding: '100px 48px' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ marginBottom: '48px' }}>
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
                Why {country.name}?
              </span>
            </div>
            <h2 style={{
              fontSize: '40px',
              fontWeight: '800',
              color: '#1E3A5F',
              letterSpacing: '-1px'
            }}>
              Your Reasons to Study in {country.name}
            </h2>
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
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: '#FF6B35',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '800',
                  fontSize: '18px',
                  marginBottom: '20px'
                }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
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
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs Section */}
      <section style={{
        padding: '80px 48px',
        background: '#F8FAFC'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '800',
              color: '#1E3A5F',
              letterSpacing: '-0.5px',
              marginBottom: '8px'
            }}>
              Popular Programs
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B' }}>
              Most sought-after fields of study in {country.name}
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {country.popularPrograms.map((program, idx) => (
              <span key={idx} className="program-tag">{program}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Top Cities Section */}
      <section 
        className="section-padding"
        style={{ padding: '80px 48px' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '800',
              color: '#1E3A5F',
              letterSpacing: '-0.5px',
              marginBottom: '8px'
            }}>
              Top Student Cities
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B' }}>
              Best places to study and live in {country.name}
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {country.topCities.map((city, idx) => (
              <span key={idx} className="city-chip">
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#FF6B35'
                }} />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section style={{
        padding: '80px 48px',
        background: '#F8FAFC'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '800',
              color: '#1E3A5F',
              letterSpacing: '-0.5px',
              marginBottom: '8px'
            }}>
              Requirements
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B' }}>
              What you need to study in {country.name}
            </p>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
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
                <span style={{
                  fontSize: '16px',
                  color: '#1E3A5F',
                  fontWeight: '500'
                }}>
                  {req}
                </span>
              </div>
            ))}
          </div>

          {/* Intakes */}
          <div style={{
            marginTop: '32px',
            padding: '24px',
            background: '#1E3A5F',
            borderRadius: '16px',
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>
                Available Intakes
              </div>
              <div style={{ fontSize: '16px', color: 'white', fontWeight: '600' }}>
                {country.intakes.join(' • ')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 48px',
        background: 'linear-gradient(135deg, #1E3A5F 0%, #0F2744 100%)'
      }}>
        <div 
          className="cta-section"
          style={{ 
            maxWidth: '1000px', 
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '40px'
          }}
        >
          <div>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '800',
              color: 'white',
              marginBottom: '12px',
              letterSpacing: '-1px'
            }}>
              Ready to Study in {country.name}?
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.7)'
            }}>
              Book a free consultation with our expert counselors today
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button className="cta-btn">
              Apply Now
              <span>→</span>
            </button>
            <button className="cta-btn" style={{ background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.3)' }}>
              Talk to Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}