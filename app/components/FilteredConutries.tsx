"use client";

import React from 'react';
import Link from 'next/link';
import type { CountryDetailedInfo } from '@/app/data/countryData';

interface FilteredCountriesSectionProps {
  countries: CountryDetailedInfo[];
  selectedCourse: string;
}

export default function FilteredCountriesSection({ 
  countries, 
  selectedCourse 
}: FilteredCountriesSectionProps) {
  
  if (countries.length === 0) {
    return (
      <section style={{
        background: '#1E3A5F',
        padding: '80px 20px',
        textAlign: 'center',
        fontFamily: '"Plus Jakarta Sans", sans-serif'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          color: 'white'
        }}>
          <div style={{
            fontSize: '48px',
            marginBottom: '16px'
          }}>🔍</div>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '800',
            marginBottom: '16px',
            color: 'white'
          }}>
            No countries found
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '24px'
          }}>
            We couldn't find any countries offering {selectedCourse} programs. 
            Try selecting a different course.
          </p>
        </div>
      </section>
    );
  }

  // Helper function to get unique card style for each index
  const getCardStyle = (index: number) => {
    const styles = [
      {
        borderRadius: '32px 8px 8px 32px',
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2C4F7C 100%)',
      },
      {
        borderRadius: '8px 8px 40px 40px',
        background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C61 100%)',
      },
      {
        borderRadius: '40px 8px 40px 8px',
        background: 'linear-gradient(135deg, #2EC4B6 0%, #4DD4C6 100%)',
      },
      {
        borderRadius: '8px 32px 32px 8px',
        background: 'linear-gradient(135deg, #1E3A5F 0%, #FF6B35 50%, #2EC4B6 100%)',
      },
      {
        borderRadius: '50px 50px 8px 50px',
        background: 'linear-gradient(135deg, #3B4B66 0%, #1E3A5F 100%)',
      },
      {
        borderRadius: '32px 8px 32px 32px',
        background: 'linear-gradient(135deg, #FF6B35 0%, #2EC4B6 100%)',
      }
    ];
    return styles[index % styles.length];
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        /* ============================================ */
        /* SECTION CONTAINER */
        /* ============================================ */
        .filtered-section {
          background: #1E3A5F;
          padding: 80px 20px;
          font-family: "Plus Jakarta Sans", sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* ============================================ */
        /* DECORATIVE ELEMENTS */
        /* ============================================ */
        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
        }

        .orb-orange {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.15) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .orb-teal {
          position: absolute;
          bottom: -150px;
          left: -150px;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(46, 196, 182, 0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .orb-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* ============================================ */
        /* CONTENT CONTAINER */
        /* ============================================ */
        .content-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ============================================ */
        /* SECTION HEADER */
        /* ============================================ */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .course-badge {
          display: inline-block;
          background: #FF6B35;
          padding: 8px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          color: white;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 20px rgba(255, 107, 53, 0.4);
        }

        .section-title {
          font-size: 56px;
          font-weight: 800;
          color: white;
          letter-spacing: -1.5px;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .section-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
          font-weight: 500;
          line-height: 1.6;
        }

        /* ============================================ */
        /* COUNTRIES GRID - DESKTOP (3 COLUMNS) */
        /* ============================================ */
        .countries-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 48px;
        }

        /* ============================================ */
        /* COUNTRY CARD */
        /* ============================================ */
        .country-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          height: 100%;
          min-height: 380px;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          background-color: #1E3A5F;
          padding: 32px;
          text-decoration: none;
          display: block;
        }

        .country-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        }

        .country-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%);
          z-index: 1;
          transition: opacity 0.3s ease;
        }

        .country-card:hover::before {
          background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%);
        }

        .card-content {
          position: relative;
          z-index: 2;
          color: white;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* ============================================ */
        /* CARD ELEMENTS */
        /* ============================================ */
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .flag-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
          border: 2px solid rgba(255, 255, 255, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .country-card:hover .flag-icon {
          transform: rotate(12deg) scale(1.1);
          border-color: rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.3);
        }

        .stat-badge {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          display: inline-block;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .country-card:hover .stat-badge {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .country-name {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
        }

        .country-description {
          font-size: 15px;
          line-height: 1.6;
          opacity: 0.95;
          margin-bottom: 20px;
          font-weight: 500;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
        }

        .explore-section {
          margin-top: 20px;
        }

        .explore-text {
          font-size: 15px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          letter-spacing: 0.3px;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
        }

        .country-card:hover .explore-text {
          gap: 12px;
        }

        .explore-arrow {
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .country-card:hover .explore-arrow {
          transform: translateX(4px);
        }

        /* ============================================ */
        /* VIEW ALL BUTTON */
        /* ============================================ */
        .view-all-container {
          text-align: center;
          margin-top: 60px;
        }

        .view-all-button {
          background: #FF6B35;
          color: white;
          border: none;
          padding: 18px 48px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.3);
        }

        .view-all-button:hover {
          background: #FF8C61;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(255, 107, 53, 0.4);
        }

        .view-all-button:active {
          transform: translateY(0);
        }

        /* ============================================ */
        /* TABLET RESPONSIVE - 2 COLUMNS */
        /* ============================================ */
        @media (max-width: 1024px) {
          .countries-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .section-title {
            font-size: 42px;
          }
        }

        /* ============================================ */
        /* MOBILE RESPONSIVE - HORIZONTAL SCROLL */
        /* ============================================ */
        @media (max-width: 768px) {
          .filtered-section {
            padding: 60px 16px;
          }

          .section-header {
            margin-bottom: 40px;
          }

          .course-badge {
            font-size: 12px;
            padding: 6px 18px;
            margin-bottom: 16px;
          }

          .section-title {
            font-size: 32px;
            letter-spacing: -1px;
          }

          .section-description {
            font-size: 15px;
          }

          /* HORIZONTAL CARD LAYOUT */
          .countries-grid {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .country-card {
            min-height: 120px;
            max-height: 120px;
            padding: 0;
            border-radius: 20px !important;
            display: flex;
          }

          .card-content {
            padding: 16px;
            flex-direction: row;
            gap: 16px;
          }

          /* Left section - Flag + Badge */
          .card-content > div:first-child {
            flex-shrink: 0;
            width: 80px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 6px;
          }

          /* Right section - Content */
          .card-content > div:last-child {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-width: 0;
            gap: 6px;
          }

          .card-header {
            flex-direction: column;
            gap: 6px;
            margin-bottom: 0;
            align-items: center;
          }

          .flag-icon {
            width: 44px;
            height: 44px;
            font-size: 22px;
            margin-bottom: 0;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(8px);
            border: 1.5px solid rgba(255, 255, 255, 0.3);
          }

          .stat-badge {
            font-size: 8px;
            padding: 3px 7px;
            white-space: nowrap;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            font-weight: 700;
          }

          .country-name {
            font-size: 17px;
            margin-bottom: 0;
            line-height: 1.2;
            font-weight: 800;
            letter-spacing: -0.3px;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          }

          .country-description {
            display: none;
          }

          .explore-section {
            margin-top: 0;
            display: flex;
            align-items: center;
          }

          .explore-text {
            font-size: 11px;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            font-weight: 600;
            opacity: 0.95;
            letter-spacing: 0.2px;
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
          }

          .explore-arrow {
            display: none;
          }

          /* Button adjustments */
          .view-all-container {
            margin-top: 40px;
          }

          .view-all-button {
            padding: 14px 36px;
            font-size: 14px;
            width: 100%;
            max-width: 300px;
          }
        }

        /* ============================================ */
        /* SMALL MOBILE - COMPACT TILE */
        /* ============================================ */
        @media (max-width: 480px) {
          .filtered-section {
            padding: 32px 12px;
          }

          .section-title {
            font-size: 28px;
          }

          .countries-grid {
            gap: 12px;
          }

          .country-card {
            min-height: 100px;
            max-height: 100px;
            border-radius: 12px !important;
          }

          .card-content {
            padding: 12px;
            gap: 12px;
          }

          .card-content > div:first-child {
            width: 70px;
          }

          .flag-icon {
            width: 38px;
            height: 38px;
            font-size: 18px;
            border-radius: 8px;
          }

          .stat-badge {
            font-size: 7px;
            padding: 2px 6px;
          }

          .country-name {
            font-size: 15px;
          }

          .explore-text {
            font-size: 10px;
          }
        }

        /* ============================================ */
        /* TOUCH OPTIMIZATION */
        /* ============================================ */
        @media (hover: none) and (pointer: coarse) {
          .country-card:active {
            transform: scale(0.98);
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          }

          .view-all-button:active {
            transform: scale(0.96);
          }
        }
      `}</style>

      <section className="filtered-section">
        {/* Decorative Elements */}
        <div className="grid-pattern" />
        <div className="orb-orange" />
        <div className="orb-teal" />
        <div className="orb-center" />

        <div className="content-container">
          
          {/* Section Header */}
          <div className="section-header">
            <div className="course-badge">
              {selectedCourse}
            </div>
            
            <h2 className="section-title">
              Study Destinations
            </h2>
            
            <p className="section-description">
              Discover {countries.length} {countries.length === 1 ? 'country' : 'countries'} offering world-class {selectedCourse} programs
            </p>
          </div>

          {/* Countries Grid/List */}
          <div className="countries-grid">
            {countries.map((country, index) => {
              const cardStyle = getCardStyle(index);
              
              return (
                <Link 
                  key={country.slug} 
                  href={`/destinations/${country.slug}`}
                  className="country-card"
                  style={{
                    ...cardStyle,
                    backgroundImage: `url(${country.heroImage})`
                  }}
                >
                  <div className="card-content">
                    
                    {/* Top Section */}
                    <div>
                      <div className="card-header">
                        <div className="flag-icon">
                          {country.flag}
                        </div>
                        
                        {country.stats?.totalUniversities && (
                          <div className="stat-badge">
                            {country.stats.totalUniversities}+ Universities
                          </div>
                        )}
                      </div>

                      <h3 className="country-name">
                        {country.name}
                      </h3>

                      {country.overview?.description && (
                        <p className="country-description">
                          {country.overview.description}
                        </p>
                      )}
                    </div>

                    {/* Bottom Section */}
                    <div>
                      {/* Explore Button */}
                      <div className="explore-section">
                        <div className="explore-text">
                          Explore Programs →
                        </div>
                        <div className="explore-arrow">
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* View All Button */}
          <div className="view-all-container">
            <Link href="/destinations">
              <button className="view-all-button">
                View All Destinations
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}