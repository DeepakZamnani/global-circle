// New component: components/FilteredCountries.jsx
"use client";

import Link from 'next/link';

export default function FilteredCountries({ countries, course }) {
  if (countries.length === 0) return null;

  return (
    <section style={{
      padding: '80px 48px',
      background: '#FAFBFC'
    }}>
      <style>{`
        /* Featured Cards - Rounded */
        .country-card-featured {
          position: relative;
          height: 280px;
          border-radius: 24px;x
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

        @media (max-width: 1024px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '40px',
          fontWeight: '800',
          color: '#1E3A5F',
          letterSpacing: '-1px',
          marginBottom: '48px',
          lineHeight: '1.2'
        }}>
          Countries Offering {course}
        </h2>
        <div 
          className="featured-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '24px'
          }}
        >
          {countries.map((country) => (
            <Link
              key={country.slug}
              href={`/destinations/${country.slug}`}
              className="country-card-featured"
            >
              <div 
                className="card-bg"
                style={{ backgroundImage: `url(${country.heroImage})` }}
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
                    {country.topUniversities?.length || 0}+ Universities
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
      </div>
    </section>
  );
}