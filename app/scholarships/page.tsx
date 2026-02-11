// app/scholarships/page.tsx (redesigned - professional & minimal)
'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { getAllScholarships, getFeaturedScholarships } from '../../services/dbServices';
import type { Scholarship } from '@/app/data/scholarshipData';

const ITEMS_PER_PAGE = 12;

export default function ScholarshipsPage() {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [featured, setFeatured] = useState<Scholarship[]>([]);
  const [filtered, setFiltered] = useState<Scholarship[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const all = await getAllScholarships();
        const feats = await getFeaturedScholarships();
        setScholarships(all);
        setFeatured(feats);
        setFiltered(all);
      } catch (error) {
        console.error('Error fetching scholarships:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const lower = searchTerm.toLowerCase();
    const results = scholarships.filter(
      (s) =>
        s.title.toLowerCase().includes(lower) ||
        s.description.toLowerCase().includes(lower) ||
        s.provider?.toLowerCase().includes(lower) ||
        s.courses?.some((c) => c.toLowerCase().includes(lower)) ||
        s.hostCountries?.some((c) => c.toLowerCase().includes(lower))
    );
    setFiltered(results);
    setDisplayCount(ITEMS_PER_PAGE);
  }, [searchTerm, scholarships]);

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + ITEMS_PER_PAGE);
  };

  const displayedScholarships = filtered.slice(0, displayCount);
  const hasMore = displayCount < filtered.length;

  return (
    <div style={{ minHeight: '100vh', background: '#FAFBFC', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      <Navbar />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .scholarship-card {
          background: white;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .scholarship-card:hover {
          border-color: #FF6B35;
          box-shadow: 0 12px 24px rgba(30, 58, 95, 0.08);
          transform: translateY(-4px);
        }

        .badge {
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .badge-primary {
          background: #FFF4F0;
          color: #FF6B35;
          border: 1px solid #FFE5DC;
        }

        .badge-deadline {
          background: #FEF2F2;
          color: #DC2626;
          border: 1px solid #FEE2E2;
        }

        .badge-level {
          background: #F0FDF4;
          color: #16A34A;
          border: 1px solid #DCFCE7;
        }

        .badge-country {
          background: #F8FAFC;
          color: #475569;
          border: 1px solid #E2E8F0;
          font-size: 12px;
          text-transform: none;
          font-weight: 500;
        }

        .load-more-btn {
          background: white;
          border: 2px solid #1E3A5F;
          color: #1E3A5F;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .load-more-btn:hover {
          background: #1E3A5F;
          color: white;
        }

        .featured-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: linear-gradient(135deg, #FF6B35 0%, #FF8555 100%);
          color: white;
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          z-index: 10;
        }

        .search-input {
          width: 100%;
          max-width: 600px;
          padding: 16px 24px 16px 50px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          fontSize: 15px;
          color: #1E3A5F;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .search-input::placeholder {
          color: #64748B;
        }

        .search-input:focus {
          outline: none;
          border-color: #FF6B35;
          box-shadow: 0 4px 20px rgba(255, 107, 53, 0.2);
        }

        .search-wrapper {
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748B;
          pointer-events: none;
        }
      `}</style>

      {/* Hero Section */}
      <section style={{ 

        padding: '120px 20px 60px', 
        background: 'linear-gradient(135deg, #1E3A5F 0%, #0F2744 100%)', 
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', 
              fontWeight: 800, 
              letterSpacing: '-1px', 
              marginBottom: '12px',
              lineHeight: 1.1
            }}>
              Scholarships & Financial Aid
            </h1>
            <p style={{ 
              fontSize: '16px', 
              opacity: 0.8, 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: 1.5,
              fontWeight: 400
            }}>
              Explore fully-funded and partial scholarships for studying abroad
            </p>
          </div>

          <div className="search-wrapper">
            <div className="search-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Search by name, country, course, or provider..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Featured Scholarships */}
      {featured.length > 0 && (
        <section style={{ padding: '60px 20px', background: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ 
                fontSize: '24px', 
                fontWeight: 700, 
                color: '#1E3A5F', 
                marginBottom: '6px',
                letterSpacing: '-0.3px'
              }}>
                Featured Scholarships
              </h2>
              <p style={{ color: '#64748B', fontSize: '14px' }}>
                Hand-picked opportunities with the best benefits
              </p>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', 
              gap: '20px' 
            }}>
              {featured.map((s) => (
                <ScholarshipCard key={s.id} scholarship={s} isFeatured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Scholarships */}
      <section style={{ padding: '60px 20px 80px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: 700, 
              color: '#1E3A5F',
              letterSpacing: '-0.3px',
              marginBottom: '4px'
            }}>
              All Scholarships
            </h2>
            <p style={{ color: '#64748B', fontSize: '14px' }}>
              {filtered.length} {filtered.length === 1 ? 'opportunity' : 'opportunities'} available
            </p>
          </div>

          {loading ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '80px 20px',
              background: 'white',
              borderRadius: '12px'
            }}>
              <p style={{ color: '#64748B', fontSize: '14px' }}>Loading scholarships...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '80px 40px', 
              background: 'white', 
              borderRadius: '12px',
              border: '1px dashed #E2E8F0'
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="1.5" style={{ margin: '0 auto 16px' }}>
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: 600, 
                color: '#1E3A5F',
                marginBottom: '6px'
              }}>
                No scholarships found
              </h3>
              <p style={{ color: '#64748B', fontSize: '14px' }}>
                Try adjusting your search terms
              </p>
            </div>
          ) : (
            <>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', 
                gap: '20px',
                marginBottom: '40px'
              }}>
                {displayedScholarships.map((s) => (
                  <ScholarshipCard key={s.id} scholarship={s} />
                ))}
              </div>

              {hasMore && (
                <div style={{ textAlign: 'center' }}>
                  <button 
                    className="load-more-btn"
                    onClick={handleLoadMore}
                  >
                    Load More Scholarships
                  </button>
                  <p style={{ color: '#94A3B8', fontSize: '13px', marginTop: '12px' }}>
                    Showing {displayedScholarships.length} of {filtered.length}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

interface ScholarshipCardProps {
  scholarship: Scholarship;
  isFeatured?: boolean;
}

function ScholarshipCard({ scholarship, isFeatured = false }: ScholarshipCardProps) {
  return (
    <Link 
      href={`/scholarships/${scholarship.slug}`} 
      style={{ textDecoration: 'none', color: 'inherit', height: '100%' }}
    >
      <div className="scholarship-card">
        {isFeatured && <div className="featured-badge">Featured</div>}
        
        <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Title */}
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: 700, 
            color: '#1E3A5F',
            lineHeight: 1.3,
            marginBottom: '8px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {scholarship.title}
          </h3>
          
          {/* Provider */}
          {scholarship.provider && (
            <p style={{ 
              color: '#64748B', 
              fontSize: '13px',
              marginBottom: '16px'
            }}>
              {scholarship.provider}
            </p>
          )}

          {/* Badges */}
          <div style={{ 
            display: 'flex', 
            gap: '8px', 
            flexWrap: 'wrap',
            marginBottom: '16px'
          }}>
            {scholarship.amount && (
              <span className="badge badge-primary">{scholarship.amount}</span>
            )}
            {scholarship.deadline && (
              <span className="badge badge-deadline">
                {scholarship.deadline}
              </span>
            )}
            {scholarship.level && (
              <span className="badge badge-level">{scholarship.level}</span>
            )}
          </div>

          {/* Description */}
          <p style={{ 
            color: '#475569', 
            fontSize: '14px',
            lineHeight: 1.6,
            marginBottom: '16px',
            flex: 1,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {scholarship.description}
          </p>

          {/* Countries */}
          {scholarship.hostCountries && scholarship.hostCountries.length > 0 && (
            <div style={{ 
              paddingTop: '16px',
              borderTop: '1px solid #F1F5F9'
            }}>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {scholarship.hostCountries.slice(0, 3).map((country) => (
                  <span key={country} className="badge badge-country">
                    {country}
                  </span>
                ))}
                {scholarship.hostCountries.length > 3 && (
                  <span style={{ 
                    fontSize: '12px', 
                    color: '#94A3B8',
                    alignSelf: 'center',
                    fontWeight: 500
                  }}>
                    +{scholarship.hostCountries.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: '16px 24px',
          background: '#F8FAFC',
          borderTop: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <span style={{ 
            color: '#FF6B35', 
            fontSize: '13px', 
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            View Details
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </Link>
  );
}