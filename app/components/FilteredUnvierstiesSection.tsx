"use client";

import React from 'react';
import Link from 'next/link';
import type { University } from '@/app/data/universityData';
import type { MatcherFilters } from './Hero';

// ============================================
// FILTERED UNIVERSITIES SECTION
// Replaces FilteredCountriesSection
// Uses exact University interface field names
// Design: navy bg + mixed clip-path cards
// ============================================

interface Props {
  universities: University[];
  filters: MatcherFilters;
  onClear: () => void;
}

// Budget label → short display
const BUDGET_SHORT: Record<string, string> = {
  'Under $5,000 / year':       '< $5k / yr',
  '$5,000 – $10,000 / year':   '$5k–$10k / yr',
  '$10,000 – $20,000 / year':  '$10k–$20k / yr',
  '$20,000+ / year':           '$20k+ / yr',
};

// Mixed clip-path shapes cycling across cards — same language as original site
const CARD_SHAPES = [
  'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)',             // cut top-right
  'polygon(24px 0, 100% 0, 100% 100%, 0 100%, 0 24px)',                            // cut top-left
  'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)',  // cut bottom-right
  'polygon(0 0, 100% 0, 100% 100%, 24px 100%, 0 calc(100% - 24px))',               // cut bottom-left
  'polygon(24px 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, calc(100% - 24px) 100%, 0 calc(100% - 24px), 0 24px)',  // both top cuts
];

// ─── Empty State ───────────────────────────────────────────────────────────────
function EmptyState({ filters, onClear }: { filters: MatcherFilters; onClear: () => void }) {
  return (
    <section style={{
      background: '#1E3A5F', padding: '100px 48px',
      fontFamily: '"Plus Jakarta Sans", sans-serif', textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position:'absolute', top:'-80px', right:'-80px', width:'300px', height:'300px',
        borderRadius:'50%', background:'radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)',
        pointerEvents:'none',
      }} />
      <div style={{ maxWidth: '560px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: '52px', marginBottom: '24px' }}>🔍</div>
        <h2 style={{ fontSize: '32px', fontWeight: '800', color: 'white', marginBottom: '16px', letterSpacing: '-0.5px' }}>
          No universities found
        </h2>
        <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', marginBottom: '32px', lineHeight: 1.65 }}>
          No universities matched <strong style={{ color: '#FF6B35' }}>{filters.course}</strong> within your budget and filters.
          Try relaxing your budget or region selection.
        </p>
        <button
          onClick={onClear}
          style={{
            background: '#FF6B35', color: 'white', border: 'none',
            padding: '16px 40px', fontWeight: '800', fontSize: '15px',
            cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", sans-serif',
            clipPath: 'polygon(14px 0, 100% 0, calc(100% - 14px) 100%, 0 100%)',
          }}
        >
          Clear Filters &amp; Search Again
        </button>
      </div>
    </section>
  );
}

// ─── University Card ───────────────────────────────────────────────────────────
function UniCard({ uni, index, matchedCourse }: { uni: University; index: number; matchedCourse: string }) {
  const shape = CARD_SHAPES[index % CARD_SHAPES.length];

  // Find the matched program to surface duration
  const matchedProgram = uni.programs.find(p => p.name === matchedCourse);
  const otherPrograms  = uni.programs.filter(p => p.name !== matchedCourse).slice(0, 2);

  // Top 2 accreditations
  const topAccred = uni.accreditations.slice(0, 2);

  // Format fee
  const feeDisplay = uni.fees?.tuitionPerYear
    ? `$${uni.fees.tuitionPerYear.toLocaleString()}/yr`
    : uni.fees?.currency
      ? `See details`
      : '—';

  // Ranking display: country rank preferred, fall back to global
  const rankDisplay = uni.ranking?.countryRank
    ? `#${uni.ranking.countryRank} ${uni.country}`
    : uni.ranking?.globalRank
      ? `#${uni.ranking.globalRank} Global`
      : uni.ranking?.category || '—';

  return (
    <Link
      href={`/university/${uni.id}`}
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'white', textDecoration: 'none',
        clipPath: shape,
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
      }}
      className="uni-card"
    >
      {/* ── Image ── */}
      <div style={{ position: 'relative', overflow: 'hidden', flexShrink: 0, height: '200px' }}>
        {uni.heroImage ? (
          <img
            src={uni.heroImage}
            alt={uni.name}
            className="uni-card-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.5s ease' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1E3A5F, #2C4F7C)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '52px' }}>
            🏛️
          </div>
        )}

        {/* Dark gradient overlay */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 100%)' }} />

        {/* Accreditation ribbons */}
        <div style={{ position:'absolute', top:'12px', left:'12px', display:'flex', gap:'6px', flexWrap:'wrap' }}>
          {topAccred.map((a, i) => (
            <span key={a} style={{
              background: i === 0 ? 'rgba(255,107,53,0.92)' : 'rgba(30,58,95,0.88)',
              backdropFilter: 'blur(6px)',
              color: 'white', fontSize: '10px', fontWeight: '800',
              padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.5px',
            }}>{a}</span>
          ))}
        </div>

        {/* University type pill */}
        <div style={{ position:'absolute', bottom:'12px', right:'12px' }}>
          <span style={{
            background: uni.universityType === 'Public' ? 'rgba(46,196,182,0.9)' : 'rgba(99,102,241,0.9)',
            backdropFilter:'blur(6px)', color:'white',
            fontSize:'10px', fontWeight:'800', padding:'4px 10px', borderRadius:'20px',
          }}>{uni.universityType}</span>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Country + Flag */}
        <div style={{ fontSize: '12px', fontWeight: '700', color: '#94A3B8', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>{uni.flag}</span>
          <span>{uni.city}{uni.state ? `, ${uni.state}` : ''} · {uni.country}</span>
        </div>

        {/* University name */}
        <h3 style={{
          fontSize: '17px', fontWeight: '800', color: '#1E3A5F',
          lineHeight: 1.25, marginBottom: '6px', letterSpacing: '-0.3px',
        }}>
          {uni.name}
        </h3>

        {/* Tagline */}
        {uni.tagline && (
          <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5, marginBottom: '14px',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {uni.tagline}
          </p>
        )}

        {/* Stats strip */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          border: '1px solid #E2E8F0', overflow: 'hidden', marginBottom: '14px',
        }}>
          {[
            { val: feeDisplay,                          lbl: 'Tuition' },
            { val: rankDisplay,                         lbl: 'Rank' },
            { val: uni.stats?.passRate || `${uni.stats?.placementRate || '—'}`, lbl: uni.stats?.passRate ? 'Pass Rate' : 'Placement' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '9px 8px', textAlign: 'center',
              borderRight: i < 2 ? '1px solid #E2E8F0' : 'none',
            }}>
              <div style={{ fontSize: '13px', fontWeight: '800', color: '#1E3A5F' }}>{s.val}</div>
              <div style={{ fontSize: '10px', color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* Matched program chip + others */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
          {matchedProgram && (
            <span style={{
              background: '#FFF7ED', color: '#FF6B35',
              border: '1px solid rgba(255,107,53,0.3)',
              fontSize: '12px', fontWeight: '700',
              padding: '4px 10px', borderRadius: '20px',
            }}>
              ✓ {matchedProgram.name} · {matchedProgram.duration}
            </span>
          )}
          {otherPrograms.map(p => (
            <span key={p.name} style={{
              background: '#F1F5F9', color: '#64748B',
              fontSize: '12px', fontWeight: '700',
              padding: '4px 10px', borderRadius: '20px',
            }}>{p.name}</span>
          ))}
        </div>

        {/* CTA row */}
        <div style={{
          marginTop: 'auto', paddingTop: '14px',
          borderTop: '1px solid #F1F5F9',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '600' }}>
            {uni.mediumOfInstruction || 'English'} medium
            {uni.establishedYear ? ` · Est. ${uni.establishedYear}` : ''}
          </span>
          <span className="uni-cta-btn" style={{
            background: '#1E3A5F', color: 'white',
            fontSize: '12px', fontWeight: '800',
            padding: '8px 16px',
            clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
            transition: 'background 0.2s ease',
            display: 'inline-flex', alignItems: 'center', gap: '4px',
          }}>
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────
export default function FilteredUniversitiesSection({ universities, filters, onClear }: Props) {

  if (universities.length === 0) {
    return <EmptyState filters={filters} onClear={onClear} />;
  }

  const uniqueCountries = new Set(universities.map(u => u.country)).size;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        /* Grid background pattern */
        .fu-grid-pat {
          position:absolute; top:0; left:0; right:0; bottom:0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events:none; z-index:0;
        }

        /* Card hover lift */
        .uni-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 24px 56px rgba(0,0,0,0.2) !important;
        }
        .uni-card:hover .uni-card-img { transform: scale(1.05) !important; }
        .uni-card:hover .uni-cta-btn  { background: #FF6B35 !important; }

        /* Filter chip */
        .f-chip {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(255,107,53,0.18);
          border: 1px solid rgba(255,107,53,0.32);
          color: #FF6B35; font-size: 12px; font-weight: 700;
          padding: 5px 12px; border-radius: 20px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* Clear button */
        .clear-btn {
          background: transparent;
          color: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 8px 22px; border-radius: 20px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px; font-weight: 700; cursor: pointer;
          transition: all 0.2s ease;
        }
        .clear-btn:hover { border-color: rgba(255,255,255,0.5); color: white; }

        /* Bottom browse btn */
        .browse-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: transparent; color: white;
          border: 2px solid rgba(255,255,255,0.22);
          padding: 16px 40px; font-weight: 800; font-size: 15px;
          text-decoration: none;
          clip-path: polygon(16px 0, 100% 0, calc(100% - 16px) 100%, 0 100%);
          transition: all 0.3s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .browse-btn:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.5); }

        /* Responsive */
        @media (max-width: 1024px) {
          .fu-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .fu-section  { padding: 60px 20px !important; }
          .fu-grid     { grid-template-columns: 1fr !important; }
          .filter-bar  { flex-direction: column !important; gap: 12px !important; align-items: flex-start !important; }
          .f-chips-row { flex-wrap: wrap !important; }
        }
      `}</style>

      <section className="fu-section" style={{
        background: '#1E3A5F',
        padding: '80px 48px',
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        position: 'relative', overflow: 'hidden',
      }}>

        {/* Background decorations */}
        <div className="fu-grid-pat" />
        <div style={{ position:'absolute', top:'-100px', right:'-100px', width:'400px', height:'400px', borderRadius:'50%', background:'radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)', pointerEvents:'none', zIndex:0 }} />
        <div style={{ position:'absolute', bottom:'-150px', left:'-150px', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(46,196,182,0.1) 0%, transparent 70%)', pointerEvents:'none', zIndex:0 }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* ── Section header ── */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              display: 'inline-block',
              background: '#FF6B35', color: 'white',
              padding: '7px 24px', borderRadius: '50px',
              fontSize: '13px', fontWeight: '800', letterSpacing: '0.5px',
              marginBottom: '20px',
              boxShadow: '0 4px 20px rgba(255,107,53,0.4)',
            }}>
              {filters.course}
            </div>

            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '800',
              color: 'white', letterSpacing: '-1.5px',
              marginBottom: '12px', lineHeight: 1.15,
            }}>
              {universities.length} {universities.length === 1 ? 'University' : 'Universities'} Found
            </h2>

            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '0 auto', fontWeight: '500', lineHeight: 1.6 }}>
              Matched across {uniqueCountries} {uniqueCountries === 1 ? 'country' : 'countries'} for your selected preferences
            </p>
          </div>

          {/* ── Active filters bar ── */}
          <div className="filter-bar" style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '12px', padding: '14px 22px',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '12px', marginBottom: '44px',
          }}>
            <div className="f-chips-row" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', marginRight: '4px' }}>Filters:</span>
              <span className="f-chip">📚 {filters.course}</span>
              <span className="f-chip">💰 {BUDGET_SHORT[filters.budget] || filters.budget}</span>
              {filters.region   && <span className="f-chip">🌍 {filters.region}</span>}
              {filters.language && <span className="f-chip">🗣️ {filters.language}</span>}
            </div>
            <button className="clear-btn" onClick={onClear}>
              Clear Filters ✕
            </button>
          </div>

          {/* ── Cards grid ── */}
          <div className="fu-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '52px',
          }}>
            {universities.map((uni, index) => (
              <UniCard
                key={uni.id}
                uni={uni}
                index={index}
                matchedCourse={filters.course}
              />
            ))}
          </div>

          {/* ── Browse all CTA ── */}
          <div style={{ textAlign: 'center' }}>
            <Link href="/university" className="browse-btn">
              Browse All Universities →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}