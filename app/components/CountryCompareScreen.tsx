"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { getAllCountries } from '@/services/dbServices';
import type { CountryDetailedInfo } from '@/app/data/countryData';

// ─────────────────────────────────────────────────────────────────────────────
// COUNTRY COMPARE SECTION
//
// Data:   getAllCountries() → Firestore 'screens' collection
//         Each doc keyed by slug, typed as CountryDetailedInfo
//
// Colors: Exact ProgramsSection palette
//         bg #1E3A5F · accent #FF6B35 · teal #2EC4B6
//         Cards: rgba(255,255,255,0.05) glass on navy
// ─────────────────────────────────────────────────────────────────────────────

// ── Rows shown in compare panel ──────────────────────────────────────────────
const ROWS = [
  { key: 'tuition',      label: 'Tuition / Year',      icon: '🎓' },
  { key: 'totalFirst',   label: 'Total First Year',     icon: '💰' },
  { key: 'hostel',       label: 'Accommodation',        icon: '🏠' },
  { key: 'duration',     label: 'Duration',             icon: '⏱️' },
  { key: 'intake',       label: 'Intake',               icon: '📅' },
  { key: 'language',     label: 'Language',             icon: '🗣️' },
  { key: 'neet',         label: 'NEET',                 icon: '📝' },
  { key: 'visa',         label: 'Visa Processing',      icon: '✈️' },
  { key: 'postStudy',    label: 'Post-Study Work',      icon: '💼' },
  { key: 'universities', label: 'Universities',         icon: '🏛️' },
] as const;

// ── Map CountryDetailedInfo → display value ───────────────────────────────────
function getVal(c: CountryDetailedInfo, key: string): React.ReactNode {
  switch (key) {

    case 'tuition':
      return c.costs?.tuitionFeeRange || c.stats?.averageFees || '—';

    case 'totalFirst':
      return (
        <span style={{ color: '#FF6B35', fontWeight: 800, fontSize: 15 }}>
          {c.costs?.totalFirstYear || '—'}
        </span>
      );

    case 'hostel':
      return c.costs?.hostelFees || c.accommodation?.averageCost || '—';

    case 'duration':
      return c.stats?.programDuration || (c.programs?.[0]?.duration) || '—';

    case 'intake': {
      const main = c.intakes?.main || '—';
      const sec  = c.intakes?.secondary;
      return sec ? `${main} & ${sec}` : main;
    }

    case 'language':
      return c.livingInfo?.language || c.stats?.mediumOfInstruction || '—';

    case 'neet': {
      const raw = (c.eligibility?.neetRequirement || '').toLowerCase();
      const req = raw.length > 0 && !raw.includes('not') && !raw.includes('no');
      return (
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          padding: '3px 11px', borderRadius: 20, fontSize: 11, fontWeight: 800,
          background: !req ? 'rgba(52,211,153,0.15)' : 'rgba(248,113,113,0.15)',
          color: !req ? '#34D399' : '#F87171',
          border: `1px solid ${!req ? 'rgba(52,211,153,0.3)' : 'rgba(248,113,113,0.3)'}`,
        }}>
          {!req ? '✓ Not Required' : '✗ Required'}
        </span>
      );
    }

    case 'visa':
      return c.visa?.processingTime || '—';

    case 'postStudy': {
      const pt = c.workOpportunities?.postStudyWork || '';
      const ok = pt.length > 0
        && !pt.toLowerCase().includes('not available')
        && !pt.toLowerCase().includes('n/a');
      return (
        <span style={{ color: ok ? '#34D399' : 'rgba(255,255,255,0.35)', fontWeight: ok ? 700 : 500 }}>
          {ok ? `✓ ${pt}` : (pt || '—')}
        </span>
      );
    }

    case 'universities':
      return (
        <div>
          <div style={{ fontWeight: 800, fontSize: 15, color: '#F1F5F9' }}>
            {c.stats?.totalUniversities || '—'}
          </div>
          {c.stats?.nmcApproved && (
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>
              {c.stats.nmcApproved} NMC Approved
            </div>
          )}
        </div>
      );

    default:
      return '—';
  }
}

// ── Chip polygon shapes matching site design language ─────────────────────────
const CHIP_SHAPES = [
  'polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px)',
  'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
  'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
  'polygon(0 0, 100% 0, calc(100% - 10px) 100%, 10px 100%)',
];

// ── Skeleton block ────────────────────────────────────────────────────────────
const Skel = ({ w, h, r = 6 }: { w: string | number; h: number; r?: number }) => (
  <div style={{ width: w, height: h, borderRadius: r, background: 'rgba(255,255,255,0.07)', animation: 'ccPulse 1.5s ease-in-out infinite' }} />
);

// ─────────────────────────────────────────────────────────────────────────────
export default function CountryCompareSection() {
  const [countries, setCountries]     = useState<CountryDetailedInfo[]>([]);
  const [selected, setSelected]       = useState<string[]>([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState<string | null>(null);
  const [modal, setModal]             = useState<CountryDetailedInfo | null>(null);

  // ── Fetch all from Firestore 'screens' collection ─────────────────────────
  useEffect(() => {
    getAllCountries()
      .then(data => {
        const sorted = [...data].sort(
          (a, b) => (a.regionDisplayOrder ?? 99) - (b.regionDisplayOrder ?? 99)
        );
        setCountries(sorted);
        // Pre-select first 3
        setSelected(sorted.slice(0, 3).map(c => c.slug));
      })
      .catch(() => setError('Failed to load countries. Please refresh.'))
      .finally(() => setLoading(false));
  }, []);

  const toggleSelect = useCallback((slug: string) => {
    setSelected(prev => {
      if (prev.includes(slug)) {
        return prev.length > 2 ? prev.filter(s => s !== slug) : prev;
      }
      return prev.length < 3 ? [...prev, slug] : prev;
    });
  }, []);

  const compareList = countries.filter(c => selected.includes(c.slug));

  // ── Close modal on Escape ─────────────────────────────────────────────────
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setModal(null); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  return (
    <section className="cc-section" style={{
      padding: '120px 48px',
      background: '#1E3A5F',
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .cc-section { box-sizing: border-box; }
        .cc-section *, .cc-section *::before, .cc-section *::after { box-sizing: border-box; }

        @keyframes ccPulse {
          0%, 100% { opacity: .45; }
          50%       { opacity: .85; }
        }
        @keyframes ccFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ccSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Selector chips ── */
        .cc-chip {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 15px;
          border: 1.5px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          font-family: inherit; font-size: 13px; font-weight: 700;
          color: rgba(255,255,255,0.45);
          cursor: pointer; transition: all 0.2s ease;
        }
        .cc-chip:hover:not(:disabled) {
          border-color: rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.8);
          transform: translateY(-1px);
        }
        .cc-chip.active {
          background: rgba(255,107,53,0.18);
          border-color: rgba(255,107,53,0.55);
          color: #FF6B35;
        }
        .cc-chip:disabled { opacity: .28; cursor: not-allowed; transform: none !important; }

        /* ── Compare cards wrapper ── */
        .cc-cards {
          display: grid;
          gap: 20px;
          animation: ccFade 0.35s ease;
        }

        /* ── Individual compare card ── */
        .cc-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .cc-card:hover {
          border-color: rgba(255,255,255,0.16);
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.28);
        }
        .cc-card.first { border-color: rgba(255,107,53,0.4); }
        .cc-card.first:hover { border-color: rgba(255,107,53,0.65); }

        /* ── Card hero image ── */
        .cc-img-wrap { position: relative; height: 160px; overflow: hidden; flex-shrink: 0; }
        .cc-img-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: center; transition: transform 0.5s ease; display: block; }
        .cc-card:hover .cc-img-wrap img { transform: scale(1.06); }
        .cc-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(30,58,95,0.15) 0%, rgba(30,58,95,0.75) 100%);
        }

        /* ── Row cells in compare panel ── */
        .cc-row {
          display: flex; align-items: center;
          padding: 13px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          gap: 10px;
          transition: background 0.15s ease;
        }
        .cc-row:last-child { border-bottom: none; }
        .cc-row:hover { background: rgba(255,255,255,0.03); }

        /* ── View details link ── */
        .cc-detail-link {
          display: inline-flex; align-items: center; gap: 6px;
          background: none; border: none; cursor: pointer;
          font-family: inherit; font-size: 13px; font-weight: 700;
          color: #FF6B35; transition: gap 0.25s ease;
          padding: 0;
        }
        .cc-detail-link:hover { gap: 10px; }

        /* ── Explore button ── */
        .cc-explore {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.65);
          padding: 10px 18px; font-family: inherit;
          font-size: 12px; font-weight: 800; cursor: pointer;
          text-decoration: none;
          clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
          transition: all 0.22s ease;
        }
        .cc-explore:hover { background: rgba(255,255,255,0.12); color: white; }
        .cc-explore.primary { background: #FF6B35; color: white; border-color: transparent; }
        .cc-explore.primary:hover { background: #E55A2B; box-shadow: 0 6px 20px rgba(255,107,53,0.38); }

        /* ── Modal ── */
        .cc-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.82); backdrop-filter: blur(10px);
          z-index: 9999; display: flex; align-items: center; justify-content: center;
          padding: 20px; animation: ccFade 0.22s ease;
        }
        .cc-modal {
          background: #0D1A2E;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          max-width: 820px; width: 100%;
          max-height: 88vh; overflow-y: auto;
          position: relative; animation: ccSlideUp 0.32s ease;
        }
        .cc-modal-close {
          position: absolute; top: 16px; right: 16px;
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(255,255,255,0.08); border: none;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          font-size: 17px; color: rgba(255,255,255,0.6);
          font-family: inherit; transition: all 0.2s ease; z-index: 10;
        }
        .cc-modal-close:hover { background: rgba(255,255,255,0.15); color: white; }

        .cc-info-box {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px; padding: 18px;
        }
        .cc-info-label {
          font-size: 10px; font-weight: 800; letter-spacing: 1.2px;
          text-transform: uppercase; color: rgba(255,255,255,0.35);
          margin-bottom: 7px;
        }
        .cc-info-value {
          font-size: 14px; color: rgba(255,255,255,0.78); line-height: 1.6;
        }

        .cc-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 16px; border-radius: 50px;
          font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.85);
          background: rgba(255,107,53,0.15);
          border: 1px solid rgba(255,107,53,0.25);
          transition: all 0.2s ease;
        }
        .cc-tag {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 6px 13px; border-radius: 50px;
          font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.75);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.2s ease;
        }
        .cc-tag:hover { border-color: #FF6B35; color: #FF6B35; }

        .cc-recog {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 5px 12px; border-radius: 50px;
          font-size: 11px; font-weight: 800; letter-spacing: 0.3px;
          color: #34D399; background: rgba(52,211,153,0.1);
          border: 1px solid rgba(52,211,153,0.25);
        }

        /* ── Empty state ── */
        .cc-empty {
          border: 1px dashed rgba(255,255,255,0.1);
          padding: 64px 40px; text-align: center;
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
        }

        /* ── Compare table scroll wrapper on mobile ── */
        .cc-compare-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .cc-compare-inner  { min-width: 640px; }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .cc-section  { padding: 80px 24px !important; }
          .cc-header   { flex-direction: column !important; align-items: flex-start !important; gap: 24px !important; }
          .cc-title    { font-size: 38px !important; }
        }
        @media (max-width: 768px) {
          .cc-section  { padding: 60px 16px !important; }
          .cc-title    { font-size: 32px !important; letter-spacing: -1px !important; }
          .cc-cards    { grid-template-columns: 1fr !important; }
          .cc-modal    { border-radius: 16px !important; }
          .cc-modal-grid { grid-template-columns: 1fr !important; }
          .cc-empty    { padding: 40px 20px !important; clip-path: none !important; border-radius: 12px !important; }
        }
      `}</style>

      {/* ── Decorative orbs ── */}
      <div style={{ position:'absolute', top:'10%', right:'-5%', width:300, height:300, borderRadius:'50%', background:'#FF6B35', opacity:.08, pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'10%', left:'-5%', width:250, height:250, borderRadius:'50%', background:'#2EC4B6', opacity:.08, pointerEvents:'none' }} />

      <div style={{ maxWidth:1400, margin:'0 auto', position:'relative', zIndex:1 }}>

        {/* ═══════════════════════════════════════
            SECTION HEADER
        ═══════════════════════════════════════ */}
        <div className="cc-header" style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:56, flexWrap:'wrap', gap:20 }}>
          <div>
            <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:16 }}>
              <div style={{ width:36, height:3, background:'#FF6B35', borderRadius:2 }} />
              <span style={{ fontSize:13, fontWeight:700, color:'rgba(255,255,255,0.6)', letterSpacing:'1.5px', textTransform:'uppercase' }}>
                Side-by-Side Comparison
              </span>
            </div>
            <h2 className="cc-title" style={{ fontSize:48, fontWeight:800, color:'white', letterSpacing:'-1.5px', lineHeight:1.1 }}>
              Compare Study<br />
              <span style={{ color:'#FF6B35' }}>Destinations</span>
            </h2>
          </div>

          {/* Stats block */}
          <div style={{ display:'flex', gap:32, alignItems:'center' }}>
            <div style={{ textAlign:'right' }}>
              <div style={{ fontSize:32, fontWeight:800, color:'white' }}>
                {loading ? '—' : `${countries.length}+`}
              </div>
              <div style={{ fontSize:14, color:'rgba(255,255,255,0.5)', fontWeight:500 }}>Countries</div>
            </div>
            <div style={{ width:1, height:40, background:'rgba(255,255,255,0.15)' }} />
            <div style={{ textAlign:'right' }}>
              <div style={{ fontSize:32, fontWeight:800, color:'white' }}>500+</div>
              <div style={{ fontSize:14, color:'rgba(255,255,255,0.5)', fontWeight:500 }}>Partner Universities</div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            COUNTRY SELECTOR CHIPS
        ═══════════════════════════════════════ */}
        <div style={{ marginBottom:44 }}>
          <div style={{ fontSize:10, fontWeight:800, letterSpacing:'2px', textTransform:'uppercase', color:'rgba(255,255,255,0.28)', marginBottom:14 }}>
            Select up to 3 countries
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
            {loading
              ? Array.from({length:7}).map((_,i) => <Skel key={i} w={110} h={40} />)
              : error
                ? <p style={{ color:'rgba(255,255,255,0.5)', fontSize:14 }}>{error}</p>
                : countries.map((c, i) => {
                    const isActive = selected.includes(c.slug);
                    const isFirst  = selected[0] === c.slug;
                    const maxed    = !isActive && selected.length >= 3;
                    return (
                      <button
                        key={c.slug}
                        className={`cc-chip${isActive ? ' active' : ''}`}
                        style={{ clipPath: CHIP_SHAPES[i % CHIP_SHAPES.length] }}
                        onClick={() => toggleSelect(c.slug)}
                        disabled={maxed}
                        title={maxed ? 'Deselect a country first' : c.name}
                      >
                        <span style={{ fontSize:17, lineHeight:1 }}>{c.flag}</span>
                        <span>{c.name}</span>
                        {isActive && (
                          <span style={{
                            width:16, height:16, borderRadius:'50%', fontSize:9, fontWeight:900,
                            display:'flex', alignItems:'center', justifyContent:'center',
                            background: isFirst ? 'rgba(255,107,53,0.35)' : 'rgba(255,255,255,0.15)',
                            color: isFirst ? '#FF6B35' : 'rgba(255,255,255,0.7)',
                          }}>✓</span>
                        )}
                      </button>
                    );
                  })
            }
          </div>
        </div>

        {/* ═══════════════════════════════════════
            COMPARE TABLE
        ═══════════════════════════════════════ */}
        {!loading && compareList.length >= 2 ? (
          <>
            {/* Top-pick badge row */}
            <div style={{ display:'grid', gridTemplateColumns:`180px repeat(${compareList.length}, 1fr)`, gap:20, marginBottom:4 }}>
              <div />
              {compareList.map((c, idx) => (
                <div key={c.slug} style={{ paddingLeft:2 }}>
                  {idx === 0 && (
                    <span style={{
                      display:'inline-flex', alignItems:'center', gap:4,
                      fontSize:10, fontWeight:900, letterSpacing:'1.5px',
                      textTransform:'uppercase', color:'#FF6B35',
                      background:'rgba(255,107,53,0.15)',
                      border:'1px solid rgba(255,107,53,0.3)',
                      padding:'3px 10px', borderRadius:20, marginBottom:6,
                    }}>★ Top Pick</span>
                  )}
                </div>
              ))}
            </div>

            {/* Scrollable wrapper for narrow viewports */}
            <div className="cc-compare-scroll">
              <div className="cc-compare-inner">
                {/* Grid: label col + N country cols */}
                <div style={{ display:'grid', gridTemplateColumns:`180px repeat(${compareList.length}, 1fr)`, gap:20, alignItems:'start' }}>

                  {/* ── Left label column ── */}
                  <div style={{ display:'flex', flexDirection:'column' }}>
                    {/* Spacer matching card hero height */}
                    <div style={{ height:160 }} />

                    {/* Country header spacer */}
                    <div style={{ padding:'20px 0', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ fontSize:10, fontWeight:800, letterSpacing:'1.8px', textTransform:'uppercase', color:'rgba(255,255,255,0.2)' }}>
                        Compare Factor
                      </span>
                    </div>

                    {/* Row labels */}
                    {ROWS.map(row => (
                      <div key={row.key} className="cc-row" style={{ paddingLeft:0 }}>
                        <span style={{ fontSize:14 }}>{row.icon}</span>
                        <span style={{ fontSize:10, fontWeight:800, letterSpacing:'1.1px', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', whiteSpace:'nowrap' }}>
                          {row.label}
                        </span>
                      </div>
                    ))}

                    {/* CTA label */}
                    <div style={{ padding:'18px 0 0', borderTop:'1px solid rgba(255,255,255,0.07)', marginTop:4 }}>
                      <span style={{ fontSize:10, fontWeight:800, letterSpacing:'1.5px', textTransform:'uppercase', color:'rgba(255,255,255,0.2)' }}>
                        Apply / Explore
                      </span>
                    </div>
                  </div>

                  {/* ── Country columns ── */}
                  {compareList.map((c, idx) => (
                    <div
                      key={c.slug}
                      className={`cc-card${idx === 0 ? ' first' : ''}`}
                      style={{
                        clipPath: idx === 0
                          ? 'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)'
                          : idx === compareList.length - 1
                            ? 'polygon(18px 0, 100% 0, 100% 100%, 0 100%, 0 18px)'
                            : 'none',
                      }}
                    >
                      {/* Hero image */}
                      <div className="cc-img-wrap">
                        {c.heroImage
                          ? <img src={c.heroImage} alt={c.name} loading="lazy" />
                          : <div style={{ width:'100%', height:'100%', background:'linear-gradient(135deg, #0F1F35, #1E3A5F)' }} />
                        }
                        <div className="cc-img-overlay" />

                        {/* Accreditation ribbons */}
                        {c.recognitions?.slice(0,2).map((r, i) => (
                          <span key={i} style={{
                            position:'absolute', top:10, left: i === 0 ? 10 : 'auto',
                            right: i === 1 ? 10 : 'auto',
                            background: i === 0 ? 'rgba(255,107,53,0.9)' : 'rgba(30,58,95,0.9)',
                            backdropFilter:'blur(6px)',
                            color:'white', fontSize:9, fontWeight:800,
                            padding:'3px 9px', borderRadius:20, letterSpacing:'0.5px',
                          }}>{r}</span>
                        ))}
                      </div>

                      {/* Country name + flag header */}
                      <div style={{ padding:'20px 20px', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                          <span style={{ fontSize:28, lineHeight:1 }}>{c.flag}</span>
                          <div>
                            <div style={{ fontSize:18, fontWeight:800, color:'#F8FAFC', letterSpacing:'-0.3px' }}>{c.name}</div>
                            {c.region && (
                              <div style={{ fontSize:11, color:'rgba(255,255,255,0.35)', fontWeight:600, marginTop:2 }}>{c.region}</div>
                            )}
                          </div>
                        </div>

                        {/* Uni + NMC pill */}
                        {c.stats?.totalUniversities && (
                          <div style={{
                            display:'inline-flex', alignItems:'center', gap:6,
                            background:'rgba(255,255,255,0.06)',
                            border:'1px solid rgba(255,255,255,0.08)',
                            borderRadius:8, padding:'6px 10px',
                            fontSize:11, color:'rgba(255,255,255,0.45)', fontWeight:700,
                          }}>
                            🏛️ {c.stats.totalUniversities} Universities
                            {c.stats.nmcApproved ? ` · ${c.stats.nmcApproved} NMC` : ''}
                          </div>
                        )}
                      </div>

                      {/* Data rows */}
                      {ROWS.map(row => (
                        <div key={row.key} className="cc-row">
                          <span style={{ fontSize:13, color:'rgba(255,255,255,0.8)', fontWeight:600, lineHeight:1.4 }}>
                            {getVal(c, row.key)}
                          </span>
                        </div>
                      ))}

                      {/* CTA */}
                      <div style={{
                        padding:'18px 20px',
                        borderTop:'1px solid rgba(255,255,255,0.07)',
                        display:'flex', flexDirection:'column', gap:10,
                        marginTop:4,
                      }}>
                        <Link
                          href={`/destinations/${c.slug}`}
                          className={`cc-explore${idx === 0 ? ' primary' : ''}`}
                          style={{ justifyContent:'center' }}
                        >
                          Explore {c.name} →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>

        ) : !loading ? (
          <div className="cc-empty">
            <div style={{ fontSize:36, marginBottom:14 }}>⬆️</div>
            <p style={{ fontSize:15, color:'rgba(255,255,255,0.35)', fontWeight:600 }}>
              Select at least 2 countries above to begin comparing
            </p>
          </div>
        ) : (
          /* Loading skeleton */
          <div style={{ display:'grid', gridTemplateColumns:'180px repeat(3,1fr)', gap:20 }}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{ display:'flex', flexDirection:'column', gap:8 }}>
                <Skel w="100%" h={160} />
                {Array.from({length:6}).map((_,j) => <Skel key={j} w="100%" h={44} />)}
              </div>
            ))}
          </div>
        )}

        {/* ── Bottom note ── */}
        <div style={{ marginTop:56, textAlign:'center' }}>
          <p style={{ fontSize:15, color:'rgba(255,255,255,0.5)', maxWidth:580, margin:'0 auto', lineHeight:1.75 }}>
            All destinations feature NMC-approved universities with
            {' '}<span style={{ color:'white', fontWeight:600 }}>full visa assistance</span>{' '}
            and expert counselling across
            {' '}<span style={{ color:'white', fontWeight:600 }}>{loading ? '26' : countries.length}+ countries</span>.
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          COUNTRY DETAIL MODAL
      ═══════════════════════════════════════════════════════ */}
      {modal && (
        <div className="cc-overlay" onClick={() => setModal(null)}>
          <div className="cc-modal" onClick={e => e.stopPropagation()}>
            <button className="cc-modal-close" onClick={() => setModal(null)} aria-label="Close">✕</button>

            {/* Hero */}
            <div style={{ position:'relative', height:190, overflow:'hidden', borderRadius:'24px 24px 0 0' }}>
              <div style={{
                position:'absolute', inset:0,
                backgroundImage: modal.heroImage ? `url(${modal.heroImage})` : 'none',
                background: modal.heroImage ? undefined : 'linear-gradient(135deg, #0F1F35, #1E3A5F)',
                backgroundSize:'cover', backgroundPosition:'center',
              }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(255,107,53,0.78) 0%, rgba(255,107,53,0.94) 100%)' }} />
              <div style={{ position:'relative', zIndex:2, padding:'36px 40px', height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
                <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:10 }}>
                  <span style={{ fontSize:30, opacity:.8 }}>{modal.flag}</span>
                  <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                    {[
                      modal.costs?.tuitionFeeRange && `${modal.costs.tuitionFeeRange} / yr`,
                      modal.stats?.totalUniversities && `${modal.stats.totalUniversities} Universities`,
                    ].filter(Boolean).map((t,i) => (
                      <span key={i} style={{ padding:'5px 14px', background:'rgba(255,255,255,0.22)', borderRadius:50, fontSize:12, fontWeight:600, color:'white' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <h2 style={{ fontSize:30, fontWeight:800, color:'white', letterSpacing:'-0.5px', lineHeight:1.1 }}>
                  Study in {modal.name}
                </h2>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding:'30px 40px 40px' }}>

              {/* Overview */}
              {modal.overview?.description && (
                <p style={{ fontSize:15, lineHeight:1.75, color:'rgba(255,255,255,0.62)', marginBottom:28 }}>
                  {modal.overview.description}
                </p>
              )}

              {/* Advantages */}
              {modal.advantages?.length > 0 && (
                <div style={{ marginBottom:26 }}>
                  <div className="cc-info-label" style={{ marginBottom:12 }}>Key Advantages</div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                    {modal.advantages.slice(0,6).map((a,i) => (
                      <span key={i} className="cc-pill">✓ {a}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* 2×2 info grid */}
              <div className="cc-modal-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:26 }}>
                {[
                  { label:'Total First Year',   val: modal.costs?.totalFirstYear },
                  { label:'Visa Processing',     val: modal.visa?.processingTime },
                  { label:'Post-Study Work',     val: modal.workOpportunities?.postStudyWork },
                  { label:'Entry Requirement',   val: modal.eligibility?.neetRequirement },
                ].filter(row => !!row.val).map(({ label, val }) => (
                  <div key={label} className="cc-info-box">
                    <div className="cc-info-label">{label}</div>
                    <div className="cc-info-value">{val}</div>
                  </div>
                ))}
              </div>

              {/* Available courses */}
              {modal.availableCourses?.length > 0 && (
                <div style={{ marginBottom:26 }}>
                  <div className="cc-info-label" style={{ marginBottom:12 }}>Available Courses</div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                    {modal.availableCourses.map((course, i) => (
                      <span key={i} className="cc-tag">🎓 {course}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Recognitions */}
              {modal.recognitions?.length > 0 && (
                <div style={{ marginBottom:32 }}>
                  <div className="cc-info-label" style={{ marginBottom:12 }}>Recognitions & Accreditations</div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                    {modal.recognitions.map((r,i) => (
                      <span key={i} className="cc-recog">✓ {r}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                <Link href={`/destinations/${modal.slug}`} className="cc-explore primary" style={{ padding:'14px 28px', fontSize:14 }}>
                  Explore {modal.name} →
                </Link>
                <Link href="/contact" className="cc-explore" style={{ padding:'14px 28px', fontSize:14 }}>
                  Book Free Consultation 💬
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}