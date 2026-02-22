"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { getAllCountries, submitFormData } from '@/services/dbServices';
import type { CountryDetailedInfo } from '@/app/data/countryData';

// ============================================
// BUDGET PLANNER SECTION
// Study abroad cost estimator
// Matches site: navy + orange, Plus Jakarta Sans
// Mixed clip-path shapes, polygon geometries
// ============================================

// Internal shape used by the calculator — derived from CountryDetailedInfo
interface CountryCost {
  tuitionMin: number;   // parsed from costs.tuitionFeeRange
  tuitionMax: number;
  livingMin:  number;   // parsed from hostelFees + foodExpenses + otherExpenses
  livingMax:  number;
  currency:   string;   // from stats.currency
  note:       string;   // from overview.description
}

// ─── Parsers ──────────────────────────────────────────────────────────────────

/**
 * Pull every positive integer out of a money string.
 * "$2,000 – $5,000 / year"  →  [2000, 5000]
 * "₹1,20,000"               →  [120000]   (handles Indian formatting too)
 */
function parseNums(str: string): number[] {
  const matches = (str ?? '').match(/[\d,]+/g) ?? [];
  return matches
    .map(m => parseInt(m.replace(/,/g, ''), 10))
    .filter(n => !isNaN(n) && n > 0);
}

/** "$2,000 – $5,000/year" → { min: 2000, max: 5000 }. Single value → both equal. */
function parseRange(str: string): { min: number; max: number } {
  const nums = parseNums(str);
  if (nums.length === 0) return { min: 0, max: 0 };
  if (nums.length === 1) return { min: nums[0], max: nums[0] };
  return { min: nums[0], max: nums[1] };
}

/**
 * Map a CountryDetailedInfo document (from the `screens` Firestore collection)
 * to the flat CountryCost shape the calculator needs.
 *
 * Living cost = hostelFees + foodExpenses + otherExpenses  (all annual strings)
 * Tuition     = costs.tuitionFeeRange
 * Currency    = stats.currency
 * Note        = overview.description
 */
function mapCountry(doc: CountryDetailedInfo): CountryCost {
  const costs   = doc.costs      ?? {} as CountryDetailedInfo['costs'];
  const stats   = doc.stats      ?? {} as CountryDetailedInfo['stats'];
  const overview = doc.overview  ?? {} as CountryDetailedInfo['overview'];

  const tuition  = parseRange(costs.tuitionFeeRange ?? '');
  const hostel   = parseRange(costs.hostelFees      ?? '');
  const food     = parseRange(costs.foodExpenses    ?? '');
  const other    = parseRange(costs.otherExpenses   ?? '');

  return {
    tuitionMin: tuition.min,
    tuitionMax: tuition.max,
    livingMin:  hostel.min + food.min + other.min,
    livingMax:  hostel.max + food.max + other.max,
    currency:   stats.currency ?? 'USD',
    note:       overview.description ?? '',
  };
}

// ─── Constants ────────────────────────────────────────────────────────────────

const DURATIONS = [1, 2, 3, 4, 5, 6];

const SCHOLARSHIP_REDUCTIONS: Record<string, number> = {
  None: 0, Partial: 0.25, Half: 0.5, Full: 1,
};

const BAR_COLORS = ['#FF6B35', '#1E3A5F', '#2EC4B6', '#6366F1'];

function fmt(n: number) {
  return '$' + Math.round(n).toLocaleString();
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BudgetPlannerSection() {

  // ── DB state ────────────────────────────────────────────────────────────────
  const [countryData, setCountryData] = useState<Record<string, CountryCost>>({});
  const [dbLoading,   setDbLoading]   = useState(true);
  const [dbError,     setDbError]     = useState(false);

  useEffect(() => {
    let active = true;

    getAllCountries()
      .then((docs: CountryDetailedInfo[]) => {
        if (!active) return;

        const mapped: Record<string, CountryCost> = {};
        docs.forEach((doc) => {
          if (doc.name) mapped[doc.name] = mapCountry(doc);
        });

        setCountryData(mapped);

        // Default the selector to the first country alphabetically
        const names = Object.keys(mapped).sort();
        if (names.length) setCountry(names[0]);
      })
      .catch((err) => {
        console.error('BudgetPlanner: failed to load countries', err);
        if (active) setDbError(true);
      })
      .finally(() => { if (active) setDbLoading(false); });

    return () => { active = false; };
  }, []);

  // ── Planner state ───────────────────────────────────────────────────────────
  const [country,        setCountry]        = useState('');
  const [duration,       setDuration]       = useState(4);
  const [scholarship,    setScholarship]    = useState<'None' | 'Partial' | 'Half' | 'Full'>('None');
  const [showComparison, setShowComparison] = useState(false);

  const countryNames = useMemo(
    () => Object.keys(countryData).sort(),
    [countryData],
  );

  const data      = countryData[country];
  const reduction = SCHOLARSHIP_REDUCTIONS[scholarship];

  const calc = useMemo(() => {
    if (!data) return { tuition: 0, living: 0, total: 0 };
    const tuition = ((data.tuitionMin + data.tuitionMax) / 2) * (1 - reduction) * duration;
    const living  = ((data.livingMin  + data.livingMax)  / 2) * duration;
    const misc    = duration * 300;
    const total   = tuition + living + misc;
    return { tuition, living, total };
  }, [country, duration, scholarship, data, reduction]);

  const barData = data ? [
    { label: 'Tuition', value: calc.tuition, pct: (calc.tuition / calc.total) * 100 },
    { label: 'Living',  value: calc.living,  pct: (calc.living  / calc.total) * 100 },
  ] : [];

  const alternatives = Object.entries(countryData)
    .filter(([k]) => k !== country)
    .map(([k, v]) => {
      const t = ((v.tuitionMin + v.tuitionMax) / 2) * (1 - reduction) * duration;
      const l = ((v.livingMin  + v.livingMax)  / 2) * duration;
      return { name: k, total: t + l + duration * 300 };
    })
    .sort((a, b) => a.total - b.total)
    .slice(0, 3);

  // ── Save budget estimate to Firestore when user clicks CTA ─────────────────
  function handleCtaClick() {
    if (!data) return;
    submitFormData('budgetEstimates', {
      country,
      duration,
      scholarship,
      estimatedTotal:  Math.round(calc.total),
      tuitionEstimate: Math.round(calc.tuition),
      livingEstimate:  Math.round(calc.living),
      currency:        data.currency,
      source:          'BudgetPlannerSection',
    }).catch((err) =>
      console.error('BudgetPlanner: failed to save estimate', err),
    );
  }

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <section style={{
      background: '#ffffff',
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      padding: '90px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .bp-select {
          width: 100%;
          height: 56px;
          padding: 0 44px 0 18px;
          border: 2px solid #E2E8F0;
          background: white;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px; font-weight: 600; color: #1E3A5F;
          outline: none; appearance: none; -webkit-appearance: none;
          cursor: pointer;
          transition: border-color 0.2s, box-shadow 0.2s;
          background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%2364748B' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 16px center;
          border-radius: 0;
        }
        .bp-select:focus { border-color: #1E3A5F; box-shadow: 0 0 0 4px rgba(30,58,95,0.07); }

        .bp-label {
          font-size: 11px; font-weight: 800; letter-spacing: 1.8px;
          text-transform: uppercase; color: #94A3B8; margin-bottom: 10px;
        }

        /* Duration buttons */
        .dur-btn {
          flex: 1; height: 48px;
          border: 2px solid #E2E8F0; background: white;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px; font-weight: 700; color: #64748B;
          cursor: pointer; transition: all 0.2s ease;
        }
        .dur-btn:first-child { clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%); }
        .dur-btn:last-child  { clip-path: polygon(0 0, 100% 0, 100% 100%, 8px 100%, 0 calc(100% - 8px)); }
        .dur-btn.active { background: #1E3A5F; border-color: #1E3A5F; color: white; }
        .dur-btn:hover:not(.active) { border-color: #1E3A5F; color: #1E3A5F; }

        /* Scholarship pills */
        .sch-pill {
          flex: 1; height: 46px;
          border: 2px solid #E2E8F0; background: white;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px; font-weight: 700; color: #64748B;
          cursor: pointer; transition: all 0.2s ease;
          border-radius: 50px;
        }
        .sch-pill.active { background: #FF6B35; border-color: #FF6B35; color: white; }
        .sch-pill:hover:not(.active) { border-color: #FF6B35; color: #FF6B35; }

        /* Controls card — cut top-right */
        .controls-card {
          background: #F8FAFC;
          padding: 44px 40px;
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%);
        }

        /* Result card — cut bottom-left */
        .result-card {
          background: #1E3A5F;
          padding: 44px 40px;
          color: white;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px));
          position: relative; overflow: hidden;
        }
        .result-card::before {
          content: '';
          position: absolute; top: -80px; right: -80px;
          width: 260px; height: 260px; border-radius: 50%;
          background: rgba(255,107,53,0.1); pointer-events: none;
        }

        /* Bar chart */
        .bar-track {
          height: 10px; background: rgba(255,255,255,0.1); border-radius: 5px;
          overflow: hidden; margin-top: 8px;
        }
        .bar-fill {
          height: 100%; border-radius: 5px;
          transition: width 0.6s cubic-bezier(0.4,0,0.2,1);
        }

        /* Total number */
        .total-num {
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 800; line-height: 1; letter-spacing: -2px; color: white;
        }

        /* Comparison row */
        .alt-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 16px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          margin-bottom: 8px;
          transition: background 0.2s;
        }
        .alt-row:hover { background: rgba(255,255,255,0.12); }

        /* Savings badge */
        .savings-badge {
          background: rgba(16,185,129,0.2);
          color: #6EE7B7;
          font-size: 12px; font-weight: 700;
          padding: 3px 10px; border-radius: 20px;
        }

        /* CTA button */
        .bp-cta {
          display: block; width: 100%; padding: 16px;
          background: #FF6B35; color: white; border: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px; font-weight: 800;
          cursor: pointer; text-align: center;
          text-decoration: none;
          clip-path: polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%);
          transition: all 0.3s ease; margin-top: 8px;
        }
        .bp-cta:hover { background: #E55A2B; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(255,107,53,0.4); }

        /* India comparison callout */
        .india-callout {
          background: rgba(255,107,53,0.15);
          border: 1px solid rgba(255,107,53,0.3);
          border-radius: 10px;
          padding: 14px 18px;
          font-size: 13px; color: rgba(255,255,255,0.8); line-height: 1.6;
        }

        /* Note text */
        .note-text {
          font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.6;
          font-style: italic;
        }

        /* Divider */
        .white-divider { border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 24px 0; }

        /* Shimmer skeleton */
        @keyframes bp-shimmer {
          0%   { background-position: -600px 0; }
          100% { background-position:  600px 0; }
        }
        .bp-skeleton {
          border-radius: 0;
          background: linear-gradient(90deg, #E2E8F0 25%, #F1F5F9 50%, #E2E8F0 75%);
          background-size: 1200px 100%;
          animation: bp-shimmer 1.4s infinite linear;
        }

        @media (max-width: 1024px) {
          .bp-layout { grid-template-columns: 1fr !important; }
          .controls-card { clip-path: none !important; border-radius: 16px !important; }
          .result-card   { clip-path: none !important; border-radius: 16px !important; }
        }
        @media (max-width: 768px) {
          .bp-section { padding: 60px 20px !important; }
          .controls-card { padding: 28px 20px !important; }
          .result-card   { padding: 28px 20px !important; }
          .dur-btns { flex-wrap: wrap !important; }
          .sch-pills { flex-wrap: wrap !important; }
        }
      `}</style>

      {/* BG decorative */}
      <div style={{ position:'absolute', top:0, left:0, width:'250px', height:'250px',
        background:'#1E3A5F', opacity:0.03, clipPath:'polygon(0 0, 100% 0, 0 100%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:0, right:0, width:'300px', height:'300px',
        background:'#FF6B35', opacity:0.03, clipPath:'polygon(100% 0, 100% 100%, 0 100%)', pointerEvents:'none' }} />

      <div style={{ maxWidth:'1400px', margin:'0 auto', position:'relative', zIndex:1 }}>

        {/* Header */}
        <div style={{ marginBottom:'52px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'18px' }}>
            <div style={{ width:'40px', height:'3px', background:'#FF6B35', borderRadius:'2px' }} />
            <span style={{ fontSize:'11px', fontWeight:'800', color:'#FF6B35', letterSpacing:'2.5px', textTransform:'uppercase' }}>
              Budget Planning
            </span>
          </div>
          <h2 style={{ fontSize:'clamp(32px, 4vw, 54px)', fontWeight:'800', color:'#1E3A5F',
            lineHeight:1.08, letterSpacing:'-1.5px', marginBottom:'16px' }}>
            How Much Will It<br />
            <span style={{ color:'#FF6B35' }}>Actually Cost You?</span>
          </h2>
          <p style={{ fontSize:'17px', color:'#64748B', maxWidth:'520px', lineHeight:1.65 }}>
            Get an instant cost estimate for your study abroad plan — tuition, living, visa and flights — all in one place.
          </p>
        </div>

        {/* ── Error state ── */}
        {dbError && (
          <div style={{
            padding: '24px', background: '#FFF5F5', border: '2px solid #FED7D7',
            borderRadius: '8px', color: '#C53030', fontWeight: 600, fontSize: '15px',
          }}>
            Unable to load country data. Please refresh the page.
          </div>
        )}

        {/* Layout */}
        {!dbError && (
          <div className="bp-layout" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2px', alignItems:'stretch' }}>

            {/* ─── LEFT: Controls ─── */}
            <div className="controls-card">

              {/* Country */}
              <div style={{ marginBottom:'28px' }}>
                <div className="bp-label">Destination Country</div>
                {dbLoading ? (
                  <div className="bp-skeleton" style={{ height: 56 }} />
                ) : (
                  <select
                    className="bp-select"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                  >
                    {countryNames.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                )}
              </div>

              {/* Duration */}
              <div style={{ marginBottom:'28px' }}>
                <div className="bp-label">Duration of Study</div>
                <div className="dur-btns" style={{ display:'flex', gap:'4px' }}>
                  {DURATIONS.map(d => (
                    <button
                      key={d}
                      className={`dur-btn ${duration === d ? 'active' : ''}`}
                      onClick={() => setDuration(d)}
                    >
                      {d} yr{d > 1 ? 's' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scholarship */}
              <div style={{ marginBottom:'36px' }}>
                <div className="bp-label">Scholarship Expected</div>
                <div className="sch-pills" style={{ display:'flex', gap:'8px' }}>
                  {(['None', 'Partial', 'Half', 'Full'] as const).map(s => (
                    <button
                      key={s}
                      className={`sch-pill ${scholarship === s ? 'active' : ''}`}
                      onClick={() => setScholarship(s)}
                    >
                      {s === 'Partial' ? '25%' : s === 'Half' ? '50%' : s === 'Full' ? '100%' : 'None'}
                    </button>
                  ))}
                </div>
                {scholarship !== 'None' && (
                  <p style={{ fontSize:'12px', color:'#64748B', marginTop:'10px', fontWeight:'500' }}>
                    Scholarship reduces tuition by {SCHOLARSHIP_REDUCTIONS[scholarship] * 100}%.
                    Final eligibility confirmed with counselor.
                  </p>
                )}
              </div>

              {/* Country note — sourced from overview.description */}
              <div style={{
                background:'white',
                border:'2px solid #E2E8F0',
                padding:'16px 18px',
                borderRadius:'0',
                clipPath:'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
              }}>
                <div style={{ fontSize:'12px', fontWeight:'800', color:'#94A3B8',
                  letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'8px' }}>
                  📌 Country Note
                </div>
                {dbLoading ? (
                  <>
                    <div className="bp-skeleton" style={{ height: 14, marginBottom: 8 }} />
                    <div className="bp-skeleton" style={{ height: 14, width: '75%' }} />
                  </>
                ) : (
                  <div style={{ fontSize:'14px', color:'#1E3A5F', fontWeight:'600', lineHeight:1.6 }}>
                    {data?.note || '—'}
                  </div>
                )}
              </div>
            </div>

            {/* ─── RIGHT: Result ─── */}
            <div className="result-card">
              <div style={{ position:'relative', zIndex:1 }}>

                {/* Total */}
                <div style={{ marginBottom:'36px' }}>
                  <div style={{ fontSize:'11px', fontWeight:'800', letterSpacing:'2px',
                    textTransform:'uppercase', color:'rgba(255,255,255,0.4)', marginBottom:'16px' }}>
                    Estimated Total Cost
                  </div>
                  {dbLoading ? (
                    <div className="bp-skeleton" style={{ height: 64, width: '60%', background: 'rgba(255,255,255,0.1)' }} />
                  ) : (
                    <div className="total-num">{fmt(calc.total)}</div>
                  )}
                  <div style={{ fontSize:'15px', color:'rgba(255,255,255,0.5)', marginTop:'8px', fontWeight:'500' }}>
                    Over {duration} year{duration > 1 ? 's' : ''}{country ? ` in ${country}` : ''}
                    {scholarship !== 'None' ? ` · ${scholarship} scholarship applied` : ''}
                  </div>
                </div>

                {/* Breakdown bars */}
                <div style={{ marginBottom:'32px' }}>
                  <div style={{ fontSize:'11px', fontWeight:'800', letterSpacing:'1.5px',
                    textTransform:'uppercase', color:'rgba(255,255,255,0.35)', marginBottom:'18px' }}>
                    Cost Breakdown
                  </div>
                  {dbLoading ? (
                    [0, 1].map(i => (
                      <div key={i} style={{ marginBottom: 16 }}>
                        <div className="bp-skeleton" style={{ height: 12, marginBottom: 8, background: 'rgba(255,255,255,0.1)' }} />
                        <div className="bp-skeleton" style={{ height: 10, background: 'rgba(255,255,255,0.1)' }} />
                      </div>
                    ))
                  ) : (
                    barData.map((b, i) => (
                      <div key={b.label} style={{ marginBottom:'16px' }}>
                        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'4px' }}>
                          <span style={{ fontSize:'13px', fontWeight:'700', color:'rgba(255,255,255,0.7)' }}>
                            {b.label}
                          </span>
                          <span style={{ fontSize:'14px', fontWeight:'800', color:'white' }}>
                            {fmt(b.value)}
                          </span>
                        </div>
                        <div className="bar-track">
                          <div className="bar-fill" style={{
                            width: `${Math.max(b.pct, 2)}%`,
                            background: BAR_COLORS[i],
                          }} />
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <hr className="white-divider" />

                {/* India comparison */}
                <div className="india-callout" style={{ marginBottom:'24px' }}>
                  💡 The same degree in India typically costs{' '}
                  <strong style={{ color:'white' }}>$50,000 – $80,000</strong>.
                  {calc.total > 0 && (
                    <> You save <strong style={{ color:'#FF6B35' }}>{fmt(70000 - calc.total)}</strong> by studying{country ? ` in ${country}` : ' abroad'}.</>
                  )}
                </div>

                {/* Alt comparison toggle */}
                <button
                  onClick={() => setShowComparison(!showComparison)}
                  style={{ background:'none', border:'none', cursor:'pointer', padding:0, marginBottom:'16px',
                    fontSize:'13px', fontWeight:'700', color:'rgba(255,255,255,0.5)',
                    fontFamily:'"Plus Jakarta Sans", sans-serif', display:'flex', alignItems:'center', gap:'6px' }}
                >
                  {showComparison ? '▲ Hide' : '▼ Compare'} cheaper alternatives
                </button>

                {showComparison && (
                  <div style={{ marginBottom:'24px' }}>
                    {alternatives.map(alt => (
                      <div key={alt.name} className="alt-row">
                        <span style={{ fontSize:'14px', fontWeight:'700', color:'white' }}>{alt.name}</span>
                        <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                          <span style={{ fontSize:'14px', fontWeight:'800', color:'white' }}>
                            {fmt(alt.total)}
                          </span>
                          {alt.total < calc.total && (
                            <span className="savings-badge">
                              Save {fmt(calc.total - alt.total)}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA — saves the estimate to Firestore then navigates */}
                <Link href="/contact" className="bp-cta" onClick={handleCtaClick}>
                  Get My Exact Quote from a Counselor →
                </Link>
                <p className="note-text" style={{ marginTop:'12px' }}>
                  * Estimates based on average costs. A counselor will confirm exact numbers based on your chosen university and program.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}