// app/scholarships/[slug]/page.tsx (professional & modern design)

'use client';

import { useState, useEffect } from 'react';
import { getScholarshipBySlug } from '@/services/dbServices';
import type { Scholarship } from '@/app/data/scholarshipData';
import { useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import LeadFormModal from '../../components/LeadForm';

export default function ScholarshipDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [scholarship, setScholarship] = useState<Scholarship | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchScholarship = async () => {
      setLoading(true);
      const data = await getScholarshipBySlug(slug);
      setScholarship(data);
      setLoading(false);
    };
    if (slug) fetchScholarship();
  }, [slug]);

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontFamily: '"Plus Jakarta Sans", sans-serif'
      }}>
        <p style={{ fontSize: '16px', color: '#64748B' }}>Loading scholarship details...</p>
      </div>
    );
  }

  if (!scholarship) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontFamily: '"Plus Jakarta Sans", sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '18px', color: '#1E3A5F', fontWeight: 600, marginBottom: '16px' }}>
            Scholarship not found
          </p>
          <Link 
            href="/scholarships"
            style={{ 
              color: '#FF6B35', 
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            ← Back to scholarships
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#FAFBFC', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      <Navbar />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .apply-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 32px;
          background: #FF6B35;
          color: white;
          border-radius: 8px;
          fontWeight: 700;
          fontSize: 15px;
          width: 100%;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .apply-btn:hover {
          background: #E55A2B;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(255, 107, 53, 0.2);
        }

        .info-card {
          background: white;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          border-color: #CBD5E0;
        }

        @media (min-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr 400px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1E3A5F 0%, #0F2744 100%)',
        padding: '130px 20px 60px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {scholarship.imageUrl && (
          <>
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              backgroundImage: `url(${scholarship.imageUrl})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              opacity: 0.15
            }} />
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(135deg, rgba(30,58,95,0.95) 0%, rgba(15,39,68,0.95) 100%)'
            }} />
          </>
        )}

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb */}
          <Link 
            href="/scholarships"
            style={{ 
              color: 'rgba(255,255,255,0.7)', 
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '24px',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Scholarships
          </Link>
          <div style={{
            width:'20px'
          }
          }></div>
          {/* Featured Badge */}
          {scholarship.featured && (
            <div style={{ 
              display: 'inline-block', 
              background: 'linear-gradient(135deg, #FF6B35 0%, #FF8555 100%)',
              color: 'white', 
              padding: '8px 10px', 
              borderRadius: '6px', 
              fontWeight: 700,
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '20px'
            }}>
              Featured
            </div>
          )}

          {/* Title */}
          <h1 style={{ 
            fontSize: 'clamp(32px, 5vw, 48px)', 
            fontWeight: 800, 
            color: 'white', 
            letterSpacing: '-1px', 
            lineHeight: '1.2', 
            marginBottom: '16px',
            maxWidth: '800px'
          }}>
            {scholarship.title}
          </h1>

          {/* Provider */}
          {scholarship.provider && (
            <p style={{ 
              fontSize: '16px', 
              color: 'rgba(255,255,255,0.8)', 
              marginBottom: '28px',
              fontWeight: 500
            }}>
              {scholarship.provider}
            </p>
          )}

          {/* Quick Info Badges */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {scholarship.amount && (
              <div style={{ 
                padding: '10px 20px', 
                background: 'rgba(255,255,255,0.1)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px', 
                fontWeight: 600,
                fontSize: '14px',
                color: 'white'
              }}>
                {scholarship.amount}
              </div>
            )}
            {scholarship.level && (
              <div style={{ 
                padding: '10px 20px', 
                background: 'rgba(16, 185, 129, 0.2)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '8px', 
                fontWeight: 600,
                fontSize: '14px',
                color: '#A7F3D0'
              }}>
                {scholarship.level}
              </div>
            )}
            {scholarship.deadline && (
              <div style={{ 
                padding: '10px 20px', 
                background: 'rgba(239, 68, 68, 0.2)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '8px', 
                fontWeight: 600,
                fontSize: '14px',
                color: '#FCA5A5'
              }}>
                Deadline: {scholarship.deadline}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '60px 20px', background: '#FAFBFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div 
            className="content-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '32px',
              alignItems: 'start'
            }}
          >
            {/* Left Column - Main Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Description */}
              <div className="info-card">
                <h2 style={{ 
                  fontSize: '20px', 
                  fontWeight: 700, 
                  color: '#1E3A5F', 
                  marginBottom: '16px',
                  letterSpacing: '-0.3px'
                }}>
                  About This Scholarship
                </h2>
                <p style={{ 
                  fontSize: '15px', 
                  lineHeight: '1.7', 
                  color: '#475569',
                  whiteSpace: 'pre-wrap'
                }}>
                  {scholarship.description}
                </p>
              </div>

              {/* Eligibility Details Grid */}
              {(scholarship.hostCountries?.length || scholarship.eligibleNationalities?.length || scholarship.courses?.length) && (
                <div>
                  <h2 style={{ 
                    fontSize: '20px', 
                    fontWeight: 700, 
                    color: '#1E3A5F', 
                    marginBottom: '20px',
                    letterSpacing: '-0.3px'
                  }}>
                    Eligibility & Requirements
                  </h2>

                  <div style={{ display: 'grid', gap: '20px' }}>
                    {/* Host Countries */}
                    {scholarship.hostCountries && scholarship.hostCountries.length > 0 && (
                      <div className="info-card">
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '10px',
                          marginBottom: '14px'
                        }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          <h3 style={{ 
                            fontSize: '15px', 
                            fontWeight: 600, 
                            color: '#1E3A5F',
                            margin: 0
                          }}>
                            Host Countries
                          </h3>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {scholarship.hostCountries.map((country) => (
                            <span 
                              key={country} 
                              style={{ 
                                padding: '6px 14px', 
                                background: '#F0F9FF', 
                                color: '#0369A1',
                                border: '1px solid #E0F2FE',
                                borderRadius: '6px', 
                                fontSize: '13px',
                                fontWeight: 500
                              }}
                            >
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Eligible Nationalities */}
                    {scholarship.eligibleNationalities && scholarship.eligibleNationalities.length > 0 && (
                      <div className="info-card">
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '10px',
                          marginBottom: '14px'
                        }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                          </svg>
                          <h3 style={{ 
                            fontSize: '15px', 
                            fontWeight: 600, 
                            color: '#1E3A5F',
                            margin: 0
                          }}>
                            Eligible Nationalities
                          </h3>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {scholarship.eligibleNationalities.map((nat) => (
                            <span 
                              key={nat} 
                              style={{ 
                                padding: '6px 14px', 
                                background: '#F5F3FF', 
                                color: '#6D28D9',
                                border: '1px solid #EDE9FE',
                                borderRadius: '6px', 
                                fontSize: '13px',
                                fontWeight: 500
                              }}
                            >
                              {nat}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Eligible Courses */}
                    {scholarship.courses && scholarship.courses.length > 0 && (
                      <div className="info-card">
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '10px',
                          marginBottom: '14px'
                        }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                          </svg>
                          <h3 style={{ 
                            fontSize: '15px', 
                            fontWeight: 600, 
                            color: '#1E3A5F',
                            margin: 0
                          }}>
                            Eligible Courses
                          </h3>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {scholarship.courses.map((course) => (
                            <span 
                              key={course} 
                              style={{ 
                                padding: '6px 14px', 
                                background: '#FFFBEB', 
                                color: '#92400E',
                                border: '1px solid #FEF3C7',
                                borderRadius: '6px', 
                                fontSize: '13px',
                                fontWeight: 500
                              }}
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div style={{ 
                background: 'white', 
                border: '1px solid #E2E8F0', 
                borderRadius: '12px', 
                padding: '28px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
              }}>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: 700, 
                  color: '#1E3A5F', 
                  marginBottom: '12px',
                  textAlign: 'center'
                }}>
                  Ready to Apply?
                </h3>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#64748B', 
                  marginBottom: '24px',
                  textAlign: 'center',
                  lineHeight: 1.5
                }}>
                  Get personalized guidance from our expert counselors
                </p>

                {scholarship.deadline && (
                  <div style={{
                    background: '#FEF2F2',
                    border: '1px solid #FEE2E2',
                    borderRadius: '8px',
                    padding: '12px',
                    marginBottom: '20px',
                    textAlign: 'center'
                  }}>
                    <p style={{ 
                      fontSize: '12px', 
                      color: '#991B1B',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '4px'
                    }}>
                      Application Deadline
                    </p>
                    <p style={{ 
                      fontSize: '16px', 
                      color: '#DC2626',
                      fontWeight: 700
                    }}>
                      {scholarship.deadline}
                    </p>
                  </div>
                )}

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="apply-btn"
                >
                  Apply Now
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>

                {scholarship.applyLink && (
                  <a
                    href={scholarship.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      color: '#64748B',
                      textAlign: 'center',
                      marginTop: '16px',
                      textDecoration: 'none',
                      fontWeight: 500
                    }}
                  >
                    Or visit official website →
                  </a>
                )}

                <div style={{
                  marginTop: '24px',
                  paddingTop: '20px',
                  borderTop: '1px solid #F1F5F9'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
                      Documentation assistance
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
                      Application process support
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
                      Expert counselor guidance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Modal */}
      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        scholarshipSlug={scholarship.slug}
        scholarshipTitle={scholarship.title}
      />

      <Footer />
    </div>
  );
}