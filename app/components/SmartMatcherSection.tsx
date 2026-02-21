"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// ============================================
// SMART MATCHER SECTION
// Clean dropdown-based university finder
// Matches site: navy + orange, Plus Jakarta Sans
// Mixed clip-path shapes on containers
// ============================================

const COURSES = [
  'MBBS / Medicine',
  'Engineering',
  'Business & MBA',
  'Law',
  'IT & Computer Science',
  'Nursing / Healthcare',
  'Pharmacy',
  'Arts & Design',
  'Architecture',
  'Dentistry',
];

const BUDGETS = [
  'Under $5,000 / year',
  '$5,000 – $10,000 / year',
  '$10,000 – $20,000 / year',
  '$20,000+ / year',
];

const REGIONS = [
  'Eastern Europe',
  'Western Europe',
  'Asia & Central Asia',
  'North America',
  'Middle East',
];

const LANGUAGES = [
  'English Only',
  'Either (English or Local)',
  'Local Language OK',
];

const MATCH_RESULTS: Record<string, { count: number; unis: number; top: string[] }> = {
  'MBBS / Medicine_Under $5,000 / year':       { count: 6,  unis: 24, top: ['Russia', 'Georgia', 'Belarus', 'Kyrgyzstan'] },
  'MBBS / Medicine_$5,000 – $10,000 / year':   { count: 8,  unis: 31, top: ['China', 'Russia', 'Georgia', 'Ukraine'] },
  'MBBS / Medicine_$10,000 – $20,000 / year':  { count: 10, unis: 38, top: ['China', 'Poland', 'Ireland', 'UAE'] },
  'Engineering_Under $5,000 / year':            { count: 7,  unis: 29, top: ['Russia', 'Poland', 'China', 'Belarus'] },
  'Engineering_$5,000 – $10,000 / year':        { count: 9,  unis: 36, top: ['Germany', 'Russia', 'China', 'Poland'] },
  'Business & MBA_$10,000 – $20,000 / year':    { count: 9,  unis: 38, top: ['Canada', 'Ireland', 'Germany', 'UAE'] },
  'Business & MBA_$20,000+ / year':             { count: 7,  unis: 22, top: ['Canada', 'Ireland', 'UAE', 'Germany'] },
};

function getResult(course: string, budget: string) {
  return MATCH_RESULTS[`${course}_${budget}`]
    || { count: 14, unis: 52, top: ['Russia', 'China', 'Germany', 'Canada'] };
}

export default function SmartMatcherSection() {
  const [course, setCourse]     = useState('');
  const [budget, setBudget]     = useState('');
  const [region, setRegion]     = useState('');
  const [language, setLanguage] = useState('');
  const [matched, setMatched]   = useState(false);

  const filledCount = [course, budget, region, language].filter(Boolean).length;
  const canMatch    = !!(course && budget);
  const result      = canMatch ? getResult(course, budget) : null;

  return (
    <section style={{
      background: '#F8FAFC',
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      padding: '90px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .sm-select {
          width: 100%;
          height: 58px;
          padding: 0 48px 0 20px;
          border: 2px solid #E2E8F0;
          background: white;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #1E3A5F;
          outline: none;
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          transition: border-color 0.2s, box-shadow 0.2s;
          background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%2364748B' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 18px center;
        }
        .sm-select:hover  { border-color: #CBD5E1; }
        .sm-select:focus  { border-color: #1E3A5F; box-shadow: 0 0 0 4px rgba(30,58,95,0.07); }
        .sm-select.filled { border-color: #FF6B35; }
        .sm-select.filled { background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%23FF6B35' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); }

        .sm-label {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: #94A3B8;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .sm-req { color: #FF6B35; font-size: 15px; line-height: 1; }
        .sm-opt {
          font-size: 10px; font-weight: 700; letter-spacing: 0.5px;
          color: #94A3B8; background: #F1F5F9;
          padding: 2px 7px; border-radius: 4px;
        }

        /* Progress bar segments */
        .prog-seg {
          height: 4px; border-radius: 2px;
          transition: all 0.35s ease;
        }

        /* Form card — diagonal cut bottom-right */
        .form-card {
          background: white;
          padding: 48px;
          box-shadow: 0 4px 40px rgba(30,58,95,0.08);
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
        }

        /* Result panel — diagonal cut top-left */
        .result-panel {
          background: linear-gradient(140deg, #1E3A5F 0%, #0F2744 100%);
          padding: 52px 48px;
          color: white;
          clip-path: polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px);
          position: relative;
          overflow: hidden;
        }
        .result-panel::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: rgba(255,107,53,0.1);
          pointer-events: none;
        }

        /* Find button — parallelogram */
        .find-btn {
          width: 100%;
          height: 58px;
          border: none;
          color: white;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          clip-path: polygon(16px 0, 100% 0, calc(100% - 16px) 100%, 0 100%);
          letter-spacing: 0.3px;
        }
        .find-btn.active  { background: #FF6B35; }
        .find-btn.active:hover {
          background: #E55A2B;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(255,107,53,0.4);
        }
        .find-btn.inactive { background: #CBD5E1; cursor: not-allowed; }

        /* Country pill */
        .cpill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 7px 16px;
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 50px;
          font-size: 13px; font-weight: 700; color: white;
        }

        /* Result stat */
        .rstat { border-left: 3px solid #FF6B35; padding-left: 16px; }

        /* Feature row in idle panel */
        .feat-row {
          display: flex; gap: 16px; align-items: flex-start;
          padding-bottom: 24px; margin-bottom: 24px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .feat-row:last-child { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }

        .feat-icon {
          width: 42px; height: 42px; flex-shrink: 0;
          background: rgba(255,107,53,0.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
        }

        /* CTA link buttons */
        .cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: #FF6B35; color: white;
          text-decoration: none; padding: 15px 28px;
          font-weight: 800; font-size: 15px;
          clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
          transition: all 0.3s ease;
        }
        .cta-primary:hover { background: #E55A2B; }

        .cta-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: white;
          text-decoration: none; padding: 15px 28px;
          font-weight: 700; font-size: 15px;
          border: 2px solid rgba(255,255,255,0.22);
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        .cta-ghost:hover { border-color: rgba(255,255,255,0.5); }

        .reset-btn {
          background: none; border: none; cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px; font-weight: 600;
          color: rgba(255,255,255,0.4);
          text-decoration: underline; padding: 0;
        }
        .reset-btn:hover { color: rgba(255,255,255,0.7); }

        @media (max-width: 1024px) {
          .sm-layout  { grid-template-columns: 1fr !important; }
          .form-card  { clip-path: none !important; border-radius: 20px !important; }
          .result-panel { clip-path: none !important; border-radius: 20px !important; }
        }
        @media (max-width: 768px) {
          .sm-section  { padding: 60px 20px !important; }
          .form-card   { padding: 28px 20px !important; }
          .result-panel { padding: 32px 24px !important; }
          .sm-inner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Decorative bg triangles */}
      <div style={{ position:'absolute', top:0, right:0, width:'280px', height:'280px',
        background:'#FF6B35', opacity:0.03, clipPath:'polygon(100% 0, 100% 100%, 0 0)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:0, left:0, width:'220px', height:'220px',
        background:'#1E3A5F', opacity:0.05, clipPath:'polygon(0 0, 0 100%, 100% 100%)', pointerEvents:'none' }} />

      <div style={{ maxWidth:'1400px', margin:'0 auto', position:'relative', zIndex:1 }}>

        {/* Header */}
        <div style={{ marginBottom:'52px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'18px' }}>
            <div style={{ width:'40px', height:'3px', background:'#FF6B35', borderRadius:'2px' }} />
            <span style={{ fontSize:'11px', fontWeight:'800', color:'#FF6B35',
              letterSpacing:'2.5px', textTransform:'uppercase' }}>
              Personalized Matching
            </span>
          </div>
          <h2 style={{ fontSize:'clamp(32px, 4vw, 54px)', fontWeight:'800', color:'#1E3A5F',
            lineHeight:1.08, letterSpacing:'-1.5px', marginBottom:'16px' }}>
            Find Your Perfect<br />
            <span style={{ color:'#FF6B35' }}>University Match</span>
          </h2>
          <p style={{ fontSize:'17px', color:'#64748B', maxWidth:'500px', lineHeight:1.65 }}>
            Select your course and preferences — we'll show you matched countries and universities instantly.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="sm-layout" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2px', alignItems:'stretch' }}>

          {/* ─── LEFT: Form ─── */}
          <div className="form-card">

            {/* Top row: note + progress */}
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'36px' }}>
              <span style={{ fontSize:'13px', color:'#94A3B8' }}>
                <span style={{ color:'#FF6B35', fontWeight:'800' }}>*</span> Required
              </span>
              <div style={{ display:'flex', alignItems:'center', gap:'5px' }}>
                {[0,1,2,3].map(i => (
                  <div key={i} className="prog-seg" style={{
                    width: filledCount > i ? '22px' : '8px',
                    background: filledCount > i ? '#FF6B35' : '#E2E8F0',
                  }} />
                ))}
                <span style={{ fontSize:'12px', color:'#94A3B8', fontWeight:'700', marginLeft:'4px' }}>
                  {filledCount}/4
                </span>
              </div>
            </div>

            {/* Fields */}
            <div className="sm-inner-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px 20px' }}>

              {/* Course — full width */}
              <div style={{ gridColumn:'span 2' }}>
                <div className="sm-label">
                  Field of Study <span className="sm-req">*</span>
                </div>
                <select
                  className={`sm-select ${course ? 'filled' : ''}`}
                  value={course}
                  onChange={e => { setCourse(e.target.value); setMatched(false); }}
                >
                  <option value="">Select a course or field…</option>
                  {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {/* Budget */}
              <div>
                <div className="sm-label">
                  Budget / Year <span className="sm-req">*</span>
                </div>
                <select
                  className={`sm-select ${budget ? 'filled' : ''}`}
                  value={budget}
                  onChange={e => { setBudget(e.target.value); setMatched(false); }}
                >
                  <option value="">Select budget range…</option>
                  {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              {/* Region */}
              <div>
                <div className="sm-label">
                  Region <span className="sm-opt">Optional</span>
                </div>
                <select
                  className={`sm-select ${region ? 'filled' : ''}`}
                  value={region}
                  onChange={e => { setRegion(e.target.value); setMatched(false); }}
                >
                  <option value="">Any region</option>
                  {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>

              {/* Language — full width */}
              <div style={{ gridColumn:'span 2' }}>
                <div className="sm-label">
                  Language of Instruction <span className="sm-opt">Optional</span>
                </div>
                <select
                  className={`sm-select ${language ? 'filled' : ''}`}
                  value={language}
                  onChange={e => { setLanguage(e.target.value); setMatched(false); }}
                >
                  <option value="">No preference</option>
                  {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop:'36px' }}>
              <button
                className={`find-btn ${canMatch ? 'active' : 'inactive'}`}
                disabled={!canMatch}
                onClick={() => canMatch && setMatched(true)}
              >
                {canMatch ? 'Find My Matches →' : 'Select course & budget to continue'}
              </button>
              {!canMatch && (
                <p style={{ textAlign:'center', fontSize:'12px', color:'#94A3B8', marginTop:'10px' }}>
                  Course and budget are required
                </p>
              )}
            </div>

            {/* Footer note */}
            <p style={{ marginTop:'24px', fontSize:'13px', color:'#94A3B8', lineHeight:1.65,
              borderTop:'1px solid #F1F5F9', paddingTop:'20px' }}>
              💡 Matching across <strong style={{ color:'#1E3A5F' }}>26 countries</strong> and{' '}
              <strong style={{ color:'#1E3A5F' }}>200+ verified universities</strong> — public &amp; private, all accredited.
            </p>
          </div>

          {/* ─── RIGHT: Result / Idle Panel ─── */}
          <div className="result-panel">
            {matched && result ? (

              /* ── MATCHED ── */
              <div style={{ position:'relative', zIndex:1, height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                <div>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'36px' }}>
                    <span style={{ fontSize:'11px', fontWeight:'800', letterSpacing:'2px',
                      textTransform:'uppercase', color:'rgba(255,255,255,0.45)' }}>
                      Your Results
                    </span>
                    <button className="reset-btn" onClick={() => { setMatched(false); }}>
                      Search Again
                    </button>
                  </div>

                  {/* Hero number */}
                  <div style={{ marginBottom:'36px' }}>
                    <div style={{ fontSize:'clamp(56px,7vw,88px)', fontWeight:'800', lineHeight:1,
                      letterSpacing:'-3px', color:'white' }}>
                      {result.count}
                      <span style={{ fontSize:'26px', color:'#FF6B35', letterSpacing:'-1px' }}> countries</span>
                    </div>
                    <div style={{ fontSize:'18px', color:'rgba(255,255,255,0.55)', marginTop:'10px', fontWeight:'500' }}>
                      {result.unis} universities matched for{' '}
                      <span style={{ color:'rgba(255,255,255,0.9)', fontWeight:'700' }}>{course}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div style={{ display:'flex', gap:'28px', flexWrap:'wrap', marginBottom:'36px' }}>
                    <div className="rstat">
                      <div style={{ fontSize:'20px', fontWeight:'800', color:'white' }}>
                        {budget.split(' ')[0]}
                      </div>
                      <div style={{ fontSize:'12px', color:'rgba(255,255,255,0.45)', marginTop:'3px', fontWeight:'600' }}>
                        Budget Range
                      </div>
                    </div>
                    {region && (
                      <div className="rstat">
                        <div style={{ fontSize:'20px', fontWeight:'800', color:'white' }}>{region}</div>
                        <div style={{ fontSize:'12px', color:'rgba(255,255,255,0.45)', marginTop:'3px', fontWeight:'600' }}>Region</div>
                      </div>
                    )}
                    <div className="rstat">
                      <div style={{ fontSize:'20px', fontWeight:'800', color:'white' }}>98%</div>
                      <div style={{ fontSize:'12px', color:'rgba(255,255,255,0.45)', marginTop:'3px', fontWeight:'600' }}>Visa Success</div>
                    </div>
                  </div>

                  {/* Top countries */}
                  <div style={{ marginBottom:'36px' }}>
                    <div style={{ fontSize:'11px', fontWeight:'700', letterSpacing:'1.5px',
                      textTransform:'uppercase', color:'rgba(255,255,255,0.35)', marginBottom:'14px' }}>
                      Top Destinations
                    </div>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
                      {result.top.map((c: string) => (
                        <span key={c} className="cpill">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
                  <Link href="/destinations" className="cta-primary">View All Matches →</Link>
                  <Link href="/contact" className="cta-ghost">Talk to Counselor</Link>
                </div>
              </div>

            ) : (

              /* ── IDLE ── */
              <div style={{ position:'relative', zIndex:1 }}>
                <div style={{ fontSize:'11px', fontWeight:'800', letterSpacing:'2px',
                  textTransform:'uppercase', color:'rgba(255,255,255,0.4)', marginBottom:'32px' }}>
                  What You'll Get
                </div>

                {[
                  { icon:'🎯', title:'Personalized Results',    desc:'Matched to your exact course, budget and region — not a generic list.' },
                  { icon:'🏛️', title:'200+ Verified Unis',       desc:'Accredited institutions across 26 countries, all vetted by our counselors.' },
                  { icon:'💰', title:'Full Cost Breakdown',      desc:'See tuition, living costs and scholarships for each matched destination.' },
                  { icon:'✈️', title:'Visa Guidance Included',  desc:'Country-specific requirements with our 98% visa approval track record.' },
                ].map((item, i) => (
                  <div key={i} className="feat-row">
                    <div className="feat-icon" style={{
                      clipPath: i % 2 === 0
                        ? 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                        : 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize:'15px', fontWeight:'800', color:'white', marginBottom:'5px' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize:'13px', color:'rgba(255,255,255,0.5)', lineHeight:1.6 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Nudge */}
                <div style={{ marginTop:'32px', display:'flex', alignItems:'center', gap:'12px',
                  padding:'14px 18px', background:'rgba(255,107,53,0.12)',
                  border:'1px solid rgba(255,107,53,0.22)', borderRadius:'8px' }}>
                  <span style={{ fontSize:'18px' }}>←</span>
                  <span style={{ fontSize:'13px', color:'rgba(255,255,255,0.6)', fontWeight:'600' }}>
                    Fill your preferences to unlock matches
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}