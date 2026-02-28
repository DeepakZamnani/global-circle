
// // 'use client';

// // import React, { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import { getUniversitiesByCountry, getCoursesForCountry } from '../../services/dbServices';
// // import Navbar from './Navbar';
// // import Footer from './Footer';
// // import LeadFormModal from './LeadForm';
// // import type { CountryDetailedInfo } from '../data/countryData';
// // import { University } from '../data/universityData';

// // interface CountryPageProps {
// //   countrySlug: string;
// //   countryData: CountryDetailedInfo;
// // }

// // export default function CountryPage({ countrySlug, countryData }: CountryPageProps) {
// //   const country = countryData;
// //   const [universities, setUniversities] = useState<University[]>([]);
// //   const [loadingUniversities, setLoadingUniversities] = useState(false);
// //   const [selectedCourse, setSelectedCourse] = useState<string>('All');
// //   const [activeTab, setActiveTab] = useState<'about' | 'universities'>('about');
// //   const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
// //   const [availableCourses, setAvailableCourses] = useState<string[]>([]);
// //   const [loadingCourses, setLoadingCourses] = useState(true);

// //   useEffect(() => {
// //     if (activeTab === 'universities') {
// //       setSelectedCourse('All');
// //       setLoadingUniversities(true);
// //       getUniversitiesByCountry(countrySlug)
// //         .then(d => { setUniversities(d); setLoadingUniversities(false); })
// //         .catch(() => { setUniversities([]); setLoadingUniversities(false); });
// //     }
// //     (async () => {
// //       try {
// //         setLoadingCourses(true);
// //         setAvailableCourses(await getCoursesForCountry(countrySlug));
// //       } catch { setAvailableCourses([]); }
// //       finally { setLoadingCourses(false); }
// //     })();
// //   }, [countrySlug, activeTab]);

// //   if (!country) return <div>Country not found</div>;

// //   const topPoints = country.whyStudyHere.points.slice(0, 4);

// //   // Derive unique course filter options from universities
// //   const courseFilters = ['All', ...Array.from(new Set(
// //     universities.flatMap(u => u.programs?.map((p: any) => p.name || p) ?? [])
// //   )).slice(0, 6)];

// //   const filteredUniversities = selectedCourse === 'All'
// //     ? universities
// //     : universities.filter(u => u.programs?.some((p: any) => (p.name || p) === selectedCourse));

// //   return (
// //     <>
// //       <Navbar />
// //       <div style={{ minHeight: '100vh', background: '#fff', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>

// //         <LeadFormModal
// //           isOpen={isApplicationModalOpen}
// //           onClose={() => setIsApplicationModalOpen(false)}
// //           countryCode={countrySlug}
// //           countryName={country.name}
// //         />

// //         <style>{`
// //           @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
// //           *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// //           .hide-scrollbar::-webkit-scrollbar { display: none; }
// //           .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

// //           /* ── TABS (Acadfly style — inline with breadcrumb) ── */
// //           .page-tabs {
// //             background: #fff;
// //             border-bottom: 1px solid #E2E8F0;
// //           }
// //           .page-tabs-inner {
// //             max-width: 1200px; margin: 0 auto; padding: 0 32px;
// //             display: flex; align-items: center; gap: 0;
// //           }
// //           .page-tab {
// //             padding: 16px 28px; background: transparent; border: none;
// //             border-bottom: 2px solid transparent;
// //             font-size: 14px; font-weight: 600; font-family: inherit;
// //             color: #64748B; cursor: pointer; transition: all 0.2s ease;
// //           }
// //           .page-tab.active { color: #1E3A5F; border-bottom-color: #FF6B35; }
// //           .page-tab:hover:not(.active) { color: #1E3A5F; }

// //           /* ── LIFE BAR ── */
// //           .life-bar {
// //             display: flex;
// //             border: 1px solid #E2E8F0;
// //             background: #E2E8F0;
// //             gap: 1px;
// //           }
// //           .life-bar-item {
// //             flex: 1 1 0;
// //             display: flex; align-items: center; gap: 12px;
// //             padding: 20px 22px;
// //             background: #fff;
// //             transition: background 0.2s;
// //             min-width: 0;
// //           }
// //           .life-bar-item:hover { background: #FAFBFC; }

// //           @media (max-width: 768px) {
// //             .life-bar {
// //               display: grid !important;
// //               grid-template-columns: 1fr 1fr;
// //             }
// //             .life-bar-item:last-child {
// //               grid-column: 1 / -1;
// //               border-top: none;
// //             }
// //           }

// //           /* ── LIFE GRID RESPONSIVE ── */
// //           @media (max-width: 768px) {
// //             .life-info-grid { grid-template-columns: repeat(2, 1fr) !important; }
// //           }

// //           /* ── SECTION HEADING ── */
// //           .section-h2 {
// //             font-size: clamp(22px, 3.5vw, 32px);
// //             font-weight: 800; color: #1E3A5F;
// //             letter-spacing: -0.8px; margin-bottom: 8px;
// //           }
// //           .section-sub {
// //             font-size: 15px; color: #64748B; font-weight: 500; margin-bottom: 36px;
// //           }

// //           /* ── MID-PAGE CTA BANNER ── */
// //           .cta-banner {
// //             background: #1E3A5F;
// //             padding: 52px 40px;
// //             display: flex; align-items: center; justify-content: space-between;
// //             gap: 32px; flex-wrap: wrap;
// //             position: relative; overflow: hidden;
// //           }
// //           .cta-banner::before {
// //             content: '';
// //             position: absolute; right: -60px; top: -60px;
// //             width: 200px; height: 200px;
// //             border: 1px solid rgba(255,255,255,0.07);
// //             transform: rotate(15deg);
// //           }
// //           .cta-banner::after {
// //             content: '';
// //             position: absolute; right: 40px; bottom: -40px;
// //             width: 120px; height: 120px;
// //             border: 1px solid rgba(255,255,255,0.05);
// //           }

// //           /* ── COST CARDS ── */
// //           .cost-card {
// //             padding: 28px 24px; background: #fff;
// //             border: 1px solid #E2E8F0;
// //             transition: all 0.25s ease;
// //           }
// //           .cost-card:hover { border-color: #FF6B35; box-shadow: 0 8px 24px rgba(255,107,53,0.08); transform: translateY(-3px); }

// //           /* ── ELIGIBILITY ROWS ── */
// //           .elig-item {
// //             display: flex; align-items: flex-start; gap: 16px;
// //             padding: 20px 0; border-bottom: 1px solid #F1F5F9;
// //           }
// //           .elig-item:last-child { border-bottom: none; }

// //           /* ── ADVANTAGE ITEM ── */
// //           .adv-item {
// //             display: flex; align-items: flex-start; gap: 20px;
// //             padding: 24px; border: 1px solid #E2E8F0; background: #fff;
// //             transition: all 0.25s ease; position: relative;
// //           }
// //           .adv-item::before {
// //             content: ''; position: absolute; left: 0; top: 0; bottom: 0;
// //             width: 3px; background: transparent; transition: background 0.2s;
// //           }
// //           .adv-item:hover::before { background: #FF6B35; }
// //           .adv-item:hover { box-shadow: 0 8px 28px rgba(30,58,95,0.08); border-color: rgba(255,107,53,0.2); }

// //           /* ── UNI CARD ── */
// //           .uni-card {
// //             background: #fff; border: 1px solid #E2E8F0;
// //             display: flex; flex-direction: column; overflow: hidden;
// //             transition: all 0.25s ease;
// //           }
// //           .uni-card:hover { border-color: #1E3A5F; box-shadow: 0 12px 40px rgba(30,58,95,0.1); transform: translateY(-3px); }
// //           .uni-card-btn {
// //             padding: 16px; background: #1E3A5F; color: #fff;
// //             font-size: 11px; font-weight: 700; letter-spacing: 2px;
// //             text-transform: uppercase; text-align: center; transition: background 0.2s;
// //           }
// //           .uni-card:hover .uni-card-btn { background: #FF6B35; }

// //           /* ── COURSE PILL ── */
// //           .course-pill {
// //             flex-shrink: 0; padding: 16px 24px;
// //             border: 1px solid #E2E8F0; background: #fff;
// //             transition: all 0.2s ease; cursor: pointer;
// //           }
// //           .course-pill:hover { border-color: #FF6B35; background: #FFFAF8; transform: translateY(-3px); }

// //           /* ── CTA BUTTONS ── */
// //           .btn-orange {
// //             display: inline-flex; align-items: center; gap: 8px;
// //             padding: 15px 36px; background: #FF6B35; color: #fff;
// //             border: 2px solid #FF6B35; font-size: 14px; font-weight: 700;
// //             letter-spacing: 0.3px; font-family: inherit; cursor: pointer;
// //             text-decoration: none; transition: all 0.2s ease;
// //           }
// //           .btn-orange:hover { background: #E85D29; border-color: #E85D29; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,53,0.3); }

// //           .btn-white {
// //             display: inline-flex; align-items: center; gap: 8px;
// //             padding: 15px 36px; background: #fff; color: #1E3A5F;
// //             border: 2px solid #fff; font-size: 14px; font-weight: 700;
// //             letter-spacing: 0.3px; font-family: inherit; cursor: pointer;
// //             text-decoration: none; transition: all 0.2s ease;
// //           }
// //           .btn-white:hover { background: transparent; color: #fff; }

// //           .btn-outline {
// //             display: inline-flex; align-items: center; gap: 8px;
// //             padding: 13px 32px; background: transparent; color: #1E3A5F;
// //             border: 1px solid #E2E8F0; font-size: 13px; font-weight: 700;
// //             font-family: inherit; cursor: pointer; text-decoration: none;
// //             transition: all 0.2s ease;
// //           }
// //           .btn-outline:hover { border-color: #1E3A5F; }

// //           /* ── VISA INFO CELL ── */
// //           .visa-cell {
// //             padding: 28px 24px; background: #fff; border: 1px solid #E2E8F0;
// //             position: relative; overflow: hidden;
// //             transition: all 0.2s ease;
// //           }
// //           .visa-cell::after {
// //             content: ''; position: absolute; bottom: 0; left: 0;
// //             height: 2px; width: 0; background: #FF6B35;
// //             transition: width 0.3s ease;
// //           }
// //           .visa-cell:hover::after { width: 100%; }

// //           /* ── DOC TAG ── */
// //           .doc-tag {
// //             padding: 8px 14px; border: 1px solid #E2E8F0; background: #F8FAFC;
// //             font-size: 12px; font-weight: 600; color: #1E3A5F;
// //             display: inline-flex; align-items: center; gap: 6px;
// //             transition: all 0.2s ease;
// //           }
// //           .doc-tag:hover { border-color: #FF6B35; color: #FF6B35; background: #fff; }

// //           /* ── RESPONSIVE ── */
// //           @media (max-width: 1024px) {
// //             .cost-grid { grid-template-columns: repeat(2, 1fr) !important; }
// //             .adv-grid { grid-template-columns: 1fr !important; }
// //             .visa-grid { grid-template-columns: repeat(2, 1fr) !important; }
// //             .uni-grid { grid-template-columns: repeat(2, 1fr) !important; }
// //           }
// //           @media (max-width: 768px) {
// //             .hero-inner { padding: 120px 20px 48px !important; }
// //             .page-tabs-inner { padding: 0 16px; overflow-x: auto; }
// //             .content-pad { padding-left: 20px !important; padding-right: 20px !important; }
// //             .two-col { grid-template-columns: 1fr !important; }
// //             .elig-grid { grid-template-columns: 1fr !important; }
// //             .cost-grid { grid-template-columns: 1fr 1fr !important; }
// //             .visa-grid { grid-template-columns: 1fr 1fr !important; }
// //             .uni-grid { grid-template-columns: 1fr !important; }
// //             .cta-banner { padding: 36px 20px !important; flex-direction: column !important; align-items: flex-start !important; }
// //             .btn-orange, .btn-white { width: 100% !important; justify-content: center !important; }
// //             .section-h2 { letter-spacing: -0.5px !important; }
// //           }
// //           @media (max-width: 420px) {
// //             .cost-grid { grid-template-columns: 1fr !important; }
// //             .visa-grid { grid-template-columns: 1fr !important; }
// //           }
// //         `}</style>

// //         {/* ════════════════════════════════════════
// //             HERO
// //         ════════════════════════════════════════ */}
// //         <section style={{ position: 'relative', minHeight: '580px', height: '72vh', overflow: 'hidden' }}>
// //           <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${country.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
// //           <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,24,48,0.68)' }} />

// //           <div className="hero-inner" style={{
// //             position: 'relative', zIndex: 2,
// //             height: '100%', display: 'flex', flexDirection: 'column',
// //             justifyContent: 'center', alignItems: 'flex-start',
// //             maxWidth: '1200px', margin: '0 auto', padding: '140px 32px 60px',
// //           }}>
// //             {/* Breadcrumb */}
// //             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
// //               <Link href="/destinations" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontWeight: '500' }}>Destinations</Link>
// //               <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px' }}>›</span>
// //               <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', fontWeight: '500' }}>{country.name}</span>
// //             </div>

// //             <h1 style={{
// //               fontSize: 'clamp(32px, 5.5vw, 64px)',
// //               fontWeight: '800', color: '#fff',
// //               letterSpacing: '-2px', lineHeight: '1.0',
// //               marginBottom: '16px', maxWidth: '700px',
// //             }}>
// //               Study in {country.name} {country.flag}
// //             </h1>

// //             <p style={{
// //               fontSize: 'clamp(14px, 1.6vw, 16px)',
// //               color: 'rgba(255,255,255,0.72)', fontWeight: '500',
// //               lineHeight: '1.7', maxWidth: '480px', marginBottom: '36px',
// //             }}>
// //               {country.overview.description}
// //             </p>

// //             <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange">
// //               Get Started →
// //             </button>
// //           </div>
// //         </section>

// //         {/* ════════════════════════════════════════
// //             PAGE TABS — Acadfly style
// //         ════════════════════════════════════════ */}
// //         <div className="page-tabs" style={{ position: 'sticky', top: '80px', zIndex: 40 }}>
// //           <div className="page-tabs-inner">
// //             <button className={`page-tab ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>
// //               About
// //             </button>
// //             <button className={`page-tab ${activeTab === 'universities' ? 'active' : ''}`} onClick={() => setActiveTab('universities')}>
// //               Universities
// //             </button>
// //           </div>
// //         </div>

// //         {/* ════════════════════════════════════════
// //             ABOUT TAB
// //         ════════════════════════════════════════ */}
// //         {activeTab === 'about' && (
// //           <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

// //             {/* ── LIFE IN [COUNTRY] — Icon tile row ── */}
// //             <section style={{ padding: '56px 32px 0' }} className="content-pad">
// //               <h2 className="section-h2">Life in {country.name} {country.flag}</h2>
// //               <p className="section-sub">Know all about your favourite study destination</p>

// //               {/* Single horizontal info bar — 5 items, 2-col grid on mobile */}
// //               <div className="life-bar">
// //                 {[
// //                   { icon: '🗣️', label: 'Language',    value: country.livingInfo.language      },
// //                   { icon: '💱', label: 'Currency',     value: country.livingInfo.currency      },
// //                   { icon: '🌤️', label: 'Climate',      value: country.livingInfo.climate       },
// //                   { icon: '🛡️', label: 'Safety',       value: country.livingInfo.safetyRating  },
// //                   { icon: '📞', label: 'Dialing Code', value: country.stats.dialingCode        },
// //                 ].map((tile, i) => (
// //                   <div key={i} className="life-bar-item">
// //                     <span style={{ fontSize: '22px', flexShrink: 0, lineHeight: 1 }}>{tile.icon}</span>
// //                     <div style={{ minWidth: 0 }}>
// //                       <div style={{ fontSize: '10px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '3px' }}>
// //                         {tile.label}
// //                       </div>
// //                       <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
// //                         {tile.value}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </section>

// //             {/* ── ABOUT THE COUNTRY ── */}
// //             <section style={{ padding: '64px 32px' }} className="content-pad">
// //               <h2 className="section-h2">About {country.name}</h2>
// //               <p className="section-sub">Everything you need to know before you apply</p>

// //               <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px', alignItems: 'start' }} className="two-col">
// //                 {/* Left — description + why study here */}
// //                 <div>
// //                   <p style={{ fontSize: '16px', color: '#334155', fontWeight: '500', lineHeight: '1.85', marginBottom: '32px' }}>
// //                     {country.overview.detailedDescription?.[0]}
// //                   </p>

// //                   {/* Why study here — 4 items max */}
// //                   <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
// //                     {topPoints.map((point, i) => (
// //                       <div key={i} className="adv-item">
// //                         <div style={{
// //                           minWidth: '36px', height: '36px', background: '#FF6B35',
// //                           display: 'flex', alignItems: 'center', justifyContent: 'center',
// //                           fontSize: '12px', fontWeight: '800', color: '#fff', flexShrink: 0,
// //                         }}>
// //                           {String(i + 1).padStart(2, '0')}
// //                         </div>
// //                         <p style={{ fontSize: '15px', fontWeight: '600', color: '#1E3A5F', lineHeight: '1.55' }}>
// //                           {point}
// //                         </p>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* Right — key stats panel */}
// //                 <div style={{ border: '1px solid #E2E8F0', background: '#fff', position: 'sticky', top: '140px' }}>
// //                   {/* Header */}
// //                   <div style={{ padding: '20px 24px', background: '#1E3A5F' }}>
// //                     <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>
// //                       At a Glance
// //                     </div>
// //                     <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff', letterSpacing: '-0.3px' }}>
// //                       {country.name} — Key Facts
// //                     </div>
// //                   </div>

// //                   {/* Stat rows — label above value, never clipped */}
// //                   {[
// //                     { label: 'Total Universities', value: country.stats.totalUniversities + '+' },
// //                     { label: 'NMC Approved',        value: country.stats.nmcApproved             },
// //                     { label: 'Course Duration',     value: country.stats.programDuration         },
// //                     { label: 'Avg. Fees / Year',    value: country.stats.averageFees             },
// //                     { label: 'Indian Students',     value: country.stats.indianStudents          },
// //                     { label: 'Medium',              value: country.stats.mediumOfInstruction     },
// //                   ].map((row, i, arr) => (
// //                     <div key={i} style={{
// //                       padding: '14px 24px',
// //                       borderBottom: i < arr.length - 1 ? '1px solid #F1F5F9' : 'none',
// //                       display: 'flex', alignItems: 'center',
// //                       justifyContent: 'space-between', gap: '12px',
// //                     }}>
// //                       <span style={{ fontSize: '12px', fontWeight: '600', color: '#94A3B8', flexShrink: 0 }}>
// //                         {row.label}
// //                       </span>
// //                       <span style={{ fontSize: '14px', fontWeight: '800', color: '#1E3A5F', textAlign: 'right', wordBreak: 'break-word' }}>
// //                         {row.value}
// //                       </span>
// //                     </div>
// //                   ))}

// //                   <div style={{ padding: '20px 24px', borderTop: '1px solid #F1F5F9' }}>
// //                     <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange" style={{ width: '100%', justifyContent: 'center' }}>
// //                       Apply Now →
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </section>

// //             {/* ── MID-PAGE CTA BANNER ── */}
// //             <section style={{ padding: '0 32px 64px' }} className="content-pad">
// //               <div className="cta-banner">
// //                 <div style={{ position: 'relative', zIndex: 1 }}>
// //                   <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.5)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px' }}>
// //                     Your Future Awaits
// //                   </div>
// //                   <h3 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px', marginBottom: '8px' }}>
// //                     Begin your journey to Study in {country.name}
// //                   </h3>
// //                   <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', fontWeight: '500', maxWidth: '420px' }}>
// //                     Expert counselors guide you from inquiry to enrollment — at zero cost.
// //                   </p>
// //                 </div>
// //                 <button onClick={() => setIsApplicationModalOpen(true)} className="btn-white" style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
// //                   Get Started →
// //                 </button>
// //               </div>
// //             </section>

// //             {/* ── AVAILABLE COURSES ── */}
// //             <section style={{ padding: '0 0 64px' }}>
// //               <div style={{ padding: '0 32px 28px' }} className="content-pad">
// //                 <h2 className="section-h2">Courses Available in {country.name}</h2>
// //                 <p className="section-sub">Choose from a wide range of programmes offered at partner universities</p>
// //               </div>
// //               <div className="hide-scrollbar" style={{ display: 'flex', overflowX: 'auto', paddingLeft: '32px', gap: '12px' }}>
// //                 {loadingCourses ? (
// //                   <div style={{ padding: '32px', color: '#94A3B8', fontSize: '13px', fontWeight: '600' }}>Loading…</div>
// //                 ) : availableCourses?.length > 0 ? availableCourses.map((course, i) => (
// //                   <div key={i} className="course-pill" style={{ marginRight: i === availableCourses.length - 1 ? '32px' : 0 }}>
// //                     <div style={{ fontSize: '13px', fontWeight: '800', color: '#1E3A5F', marginBottom: '4px' }}>{course}</div>
// //                     <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
// //                       {i % 3 === 0 ? 'High Demand' : i % 3 === 1 ? 'Popular' : 'Growing'}
// //                     </div>
// //                   </div>
// //                 )) : (
// //                   <div className="course-pill" style={{ marginRight: '32px' }}>
// //                     <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: '600' }}>Course info coming soon</span>
// //                   </div>
// //                 )}
// //               </div>
// //             </section>

// //             {/* ── ELIGIBILITY & DOCUMENTS ── */}
// //             <section style={{ padding: '0 32px 64px' }} className="content-pad">
// //               <h2 className="section-h2">Eligibility for Studying in {country.name}</h2>
// //               <p className="section-sub">Make sure you meet these requirements before applying</p>

// //               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="elig-grid">
// //                 {/* Left — eligibility criteria */}
// //                 <div>
// //                   <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
// //                     Criteria
// //                   </div>
// //                   {[
// //                     { icon: '📋', label: 'NEET',      text: country.eligibility.neetRequirement     },
// //                     { icon: '🎓', label: 'Academics', text: country.eligibility.academicRequirement },
// //                     { icon: '🎂', label: 'Age Limit', text: country.eligibility.ageLimit            },
// //                   ].map((item, i) => (
// //                     <div key={i} className="elig-item">
// //                       <div style={{
// //                         width: '44px', height: '44px', background: '#F8FAFC',
// //                         border: '1px solid #E2E8F0', display: 'flex',
// //                         alignItems: 'center', justifyContent: 'center',
// //                         fontSize: '20px', flexShrink: 0,
// //                       }}>{item.icon}</div>
// //                       <div>
// //                         <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '5px' }}>
// //                           {item.label}
// //                         </div>
// //                         <div style={{ fontSize: '15px', fontWeight: '700', color: '#1E3A5F', lineHeight: '1.4' }}>
// //                           {item.text}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* Right — required documents */}
// //                 <div>
// //                   <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
// //                     Required Documents
// //                   </div>
// //                   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
// //                     {country.eligibility.documents.map((doc, i) => (
// //                       <div key={i} className="doc-tag">
// //                         <span style={{ color: '#FF6B35' }}>↗</span> {doc}
// //                       </div>
// //                     ))}
// //                   </div>
// //                   {/* Nudge box */}
// //                   <div style={{
// //                     padding: '20px', border: '1px solid #E2E8F0', background: '#F8FAFC',
// //                     display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap',
// //                   }}>
// //                     <div>
// //                       <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', marginBottom: '4px' }}>Need help with documents?</div>
// //                       <div style={{ fontSize: '12px', color: '#64748B' }}>Our team handles everything for you.</div>
// //                     </div>
// //                     <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange" style={{ padding: '11px 22px', fontSize: '12px' }}>
// //                       Get Help →
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </section>

// //             {/* ── COST BREAKDOWN ── */}
// //             <section style={{ padding: '0 32px 64px' }} className="content-pad">
// //               <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
// //                 <div>
// //                   <h2 className="section-h2">Cost of Studying in {country.name}</h2>
// //                   <p style={{ fontSize: '15px', color: '#64748B', fontWeight: '500', margin: 0 }}>
// //                     Transparent fee structure so you can plan ahead · Currency: <strong style={{ color: '#1E3A5F' }}>{country.stats.currency}</strong>
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* Cost list rows */}
// //               <div style={{ border: '1px solid #E2E8F0', background: '#fff', marginBottom: '1px' }}>
// //                 {[
// //                   { label: 'Tuition Fees',   value: country.costs.tuitionFeeRange, period: 'per year'  },
// //                   { label: 'Accommodation',  value: country.costs.hostelFees,       period: 'per year'  },
// //                   { label: 'Food & Living',  value: country.costs.foodExpenses,     period: 'per month' },
// //                   { label: 'Other Expenses', value: country.costs.otherExpenses,    period: 'per year'  },
// //                 ].map((c, i) => (
// //                   <div key={i} style={{
// //                     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
// //                     padding: '18px 24px', borderBottom: '1px solid #F1F5F9', gap: '16px',
// //                     transition: 'background 0.2s',
// //                   }}
// //                   onMouseEnter={e => (e.currentTarget.style.background = '#FAFBFC')}
// //                   onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
// //                   >
// //                     <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
// //                       <div style={{ width: '3px', height: '20px', background: '#FF6B35', flexShrink: 0 }} />
// //                       <span style={{ fontSize: '14px', fontWeight: '600', color: '#64748B' }}>{c.label}</span>
// //                     </div>
// //                     <div style={{ textAlign: 'right' }}>
// //                       <div style={{ fontSize: '17px', fontWeight: '800', color: '#1E3A5F', letterSpacing: '-0.3px' }}>{c.value}</div>
// //                       <div style={{ fontSize: '10px', color: '#94A3B8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{c.period}</div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>

// //               {/* Total bar */}
// //               <div style={{
// //                 background: '#1E3A5F', padding: '28px 32px',
// //                 display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px',
// //               }}>
// //                 <div>
// //                   <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>First Year Total</div>
// //                   <div style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px' }}>{country.costs.totalFirstYear}</div>
// //                 </div>
// //                 <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.1)' }} />
// //                 <div>
// //                   <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Complete Course</div>
// //                   <div style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '800', color: '#FF6B35', letterSpacing: '-1px' }}>{country.costs.totalCourse}</div>
// //                 </div>
// //                 <button onClick={() => setIsApplicationModalOpen(true)} className="btn-white" style={{ marginLeft: 'auto' }}>
// //                   Get Full Breakdown →
// //                 </button>
// //               </div>
// //             </section>

// //             {/* ── VISA & INTAKE ── */}
// //             <section style={{ padding: '0 32px 64px' }} className="content-pad">
// //               <h2 className="section-h2">Visa & Intake Details</h2>
// //               <p className="section-sub">Everything you need to know before planning your move</p>

// //               <div className="visa-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
// //                 {[
// //                   { label: 'Main Intake',   value: country.intakes.main,       sub: `Deadline: ${country.intakes.applicationDeadline}`  },
// //                   { label: 'Visa Type',     value: country.visa.type,           sub: `Processing: ${country.visa.processingTime}`        },
// //                   { label: 'Visa Validity', value: country.visa.validity,       sub: 'Extendable during course'                          },
// //                   { label: 'Language',      value: country.livingInfo.language, sub: `Medium: ${country.stats.mediumOfInstruction}`      },
// //                 ].map((v, i) => (
// //                   <div key={i} className="visa-cell">
// //                     <div style={{ fontSize: '10px', fontWeight: '700', color: '#94A3B8', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>{v.label}</div>
// //                     <div style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', fontWeight: '800', color: '#1E3A5F', letterSpacing: '-0.3px', marginBottom: '8px', lineHeight: '1.2' }}>
// //                       {v.value}
// //                     </div>
// //                     <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600', lineHeight: '1.5' }}>{v.sub}</div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </section>

// //             {/* ── RECOGNITIONS ── */}
           

// //           </div>
// //         )}

// //         {/* ════════════════════════════════════════
// //             UNIVERSITIES TAB
// //         ════════════════════════════════════════ */}
// //         {activeTab === 'universities' && (
// //           <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 32px 80px' }} className="content-pad">

// //             {/* Header */}
// //             <div style={{ marginBottom: '32px' }}>
// //               <h2 className="section-h2">Popular Universities in {country.name}</h2>
// //               <p style={{ fontSize: '15px', color: '#64748B', fontWeight: '500', marginTop: '4px' }}>
// //                 Selection of universities offering the best courses
// //               </p>
// //             </div>

// //             {/* Course filter pills — Acadfly style */}
// //             {!loadingUniversities && universities.length > 0 && (
// //               <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
// //                 {courseFilters.map(filter => (
// //                   <button
// //                     key={filter}
// //                     onClick={() => setSelectedCourse(filter)}
// //                     style={{
// //                       padding: '9px 22px',
// //                       border: selectedCourse === filter ? '1.5px solid #1E3A5F' : '1.5px solid #E2E8F0',
// //                       background: selectedCourse === filter ? '#1E3A5F' : '#fff',
// //                       color: selectedCourse === filter ? '#fff' : '#64748B',
// //                       fontSize: '13px', fontWeight: '700',
// //                       cursor: 'pointer', fontFamily: 'inherit',
// //                       transition: 'all 0.2s ease',
// //                     }}
// //                   >
// //                     {filter}
// //                     {filter !== 'All' && (
// //                       <span style={{
// //                         marginLeft: '8px',
// //                         fontSize: '11px',
// //                         opacity: 0.7,
// //                         fontWeight: '600',
// //                       }}>
// //                         ({universities.filter(u => u.programs?.some((p: any) => (p.name || p) === filter)).length})
// //                       </span>
// //                     )}
// //                   </button>
// //                 ))}
// //               </div>
// //             )}

// //             {loadingUniversities ? (
// //               <div className="uni-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
// //                 {[1,2,3,4,5,6].map(i => (
// //                   <div key={i} style={{ background: '#F8FAFC', height: '320px', border: '1px solid #E2E8F0' }} />
// //                 ))}
// //               </div>
// //             ) : filteredUniversities.length > 0 ? (
// //               <>
// //                 <div style={{ fontSize: '12px', fontWeight: '600', color: '#94A3B8', marginBottom: '20px' }}>
// //                   {filteredUniversities.length} {filteredUniversities.length === 1 ? 'university' : 'universities'} found
// //                   {selectedCourse !== 'All' && <span> for <strong style={{ color: '#1E3A5F' }}>{selectedCourse}</strong></span>}
// //                 </div>
// //                 <div className="uni-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
// //                   {filteredUniversities.map((uni, i) => (
// //                     <Link key={uni.id || i} href={`/university/${uni.id || i}`} style={{ textDecoration: 'none' }}>
// //                       <div className="uni-card" style={{ height: '100%' }}>
// //                         {uni.heroImage ? (
// //                           <div style={{
// //                             height: '180px', position: 'relative',
// //                             backgroundImage: `url(${uni.heroImage})`,
// //                             backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden',
// //                           }}>
// //                             <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,24,48,0.2)' }} />
// //                             {uni.accreditations && (
// //                               <div style={{
// //                                 position: 'absolute', top: '12px', right: '12px',
// //                                 padding: '5px 12px', background: '#FF6B35', color: '#fff',
// //                                 fontSize: '9px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase',
// //                               }}>NMC</div>
// //                             )}
// //                           </div>
// //                         ) : (
// //                           <div style={{ height: '100px', background: '#1E3A5F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
// //                             <span style={{ fontSize: '32px' }}>{country.flag}</span>
// //                           </div>
// //                         )}
// //                         <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
// //                           {/* Program badges */}
// //                           {uni.programs && uni.programs.length > 0 && (
// //                             <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
// //                               {uni.programs.slice(0, 3).map((p: any, pi: number) => (
// //                                 <span key={pi} style={{
// //                                   padding: '3px 10px', fontSize: '10px', fontWeight: '700',
// //                                   background: '#F1F5F9', color: '#1E3A5F',
// //                                   border: '1px solid #E2E8F0', letterSpacing: '0.3px',
// //                                 }}>
// //                                   {p.name || p}
// //                                 </span>
// //                               ))}
// //                             </div>
// //                           )}
// //                           <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#1E3A5F', lineHeight: '1.3', marginBottom: '6px' }}>
// //                             {uni.name}
// //                           </h3>
// //                           <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '600', marginBottom: '16px' }}>
// //                             {uni.location?.address || (uni as any).city}
// //                             {(uni.establishedYear || (uni as any).established) ? ` · Est. ${uni.establishedYear || (uni as any).established}` : ''}
// //                           </div>
// //                           {uni.tagline && (
// //                             <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6', marginBottom: '16px', fontWeight: '500' }}>
// //                               {uni.tagline}
// //                             </p>
// //                           )}
// //                           <div style={{ display: 'flex', gap: '1px', background: '#E2E8F0', marginTop: 'auto' }}>
// //                             <div style={{ flex: 1, padding: '12px', background: '#F8FAFC', textAlign: 'center' }}>
// //                               <div style={{ fontSize: '14px', fontWeight: '800', color: '#1E3A5F' }}>
// //                                 {uni.fees?.currency} {uni.fees?.tuitionPerYear?.toLocaleString() || '—'}
// //                               </div>
// //                               <div style={{ fontSize: '9px', color: '#94A3B8', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>Per Year</div>
// //                             </div>
// //                             <div style={{ flex: 1, padding: '12px', background: '#F8FAFC', textAlign: 'center' }}>
// //                               <div style={{ fontSize: '14px', fontWeight: '800', color: '#1E3A5F' }}>
// //                                 {uni.programs?.[0]?.duration || uni.stats?.passRate || '—'}
// //                               </div>
// //                               <div style={{ fontSize: '9px', color: '#94A3B8', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>
// //                                 {uni.programs?.[0]?.duration ? 'Duration' : 'Pass Rate'}
// //                               </div>
// //                             </div>
// //                           </div>
// //                         </div>
// //                         <div className="uni-card-btn">View Full Profile →</div>
// //                       </div>
// //                     </Link>
// //                   ))}
// //                 </div>
// //               </>
// //             ) : universities.length > 0 ? (
// //               /* No results for this filter */
// //               <div style={{ padding: '60px 32px', textAlign: 'center', border: '1px solid #E2E8F0', background: '#F8FAFC' }}>
// //                 <div style={{ fontSize: '32px', marginBottom: '16px' }}>🔍</div>
// //                 <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1E3A5F', marginBottom: '8px' }}>
// //                   No universities for {selectedCourse}
// //                 </h3>
// //                 <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '20px' }}>Try a different course or view all universities.</p>
// //                 <button onClick={() => setSelectedCourse('All')} className="btn-orange" style={{ padding: '11px 28px', fontSize: '13px' }}>
// //                   View All Universities
// //                 </button>
// //               </div>
// //             ) : (
// //               <div style={{ padding: '80px 40px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
// //                 <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#1E3A5F', marginBottom: '12px' }}>Profiles Coming Soon</h3>
// //                 <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '28px' }}>
// //                   We're compiling profiles for universities in {country.name}.
// //                 </p>
// //                 <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange">Get Notified →</button>
// //               </div>
// //             )}
// //           </div>
// //         )}

// //         {/* ════════════════════════════════════════
// //             FINAL CTA — Full width dark banner
// //         ════════════════════════════════════════ */}
// //         <section style={{ position: 'relative', overflow: 'hidden' }}>
// //           <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${country.galleryImages?.[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
// //           <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,24,48,0.91)' }} />

// //           <div style={{
// //             position: 'relative', zIndex: 2,
// //             maxWidth: '1200px', margin: '0 auto', padding: '100px 32px',
// //             display: 'flex', alignItems: 'center', justifyContent: 'space-between',
// //             gap: '48px', flexWrap: 'wrap',
// //           }}>
// //             <div>
// //               <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
// //                 Take the Next Step
// //               </div>
// //               <h2 style={{
// //                 fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: '800', color: '#fff',
// //                 letterSpacing: '-2px', lineHeight: '1.0', marginBottom: '16px',
// //               }}>
// //                 Your Medical Career<br />
// //                 <span style={{ color: '#FF6B35' }}>Starts in {country.name}</span>
// //               </h2>
// //               <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', fontWeight: '500', maxWidth: '440px' }}>
// //                 Expert counselors guide you from first inquiry to enrollment — at zero cost.
// //               </p>
// //             </div>
// //             <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '220px' }}>
// //               <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange" style={{ justifyContent: 'center' }}>
// //                 Apply Now →
// //               </button>
// //               <Link href="/destinations" className="btn-white" style={{ justifyContent: 'center', color: '#1E3A5F' }}>
// //                 Explore Destinations
// //               </Link>
// //             </div>
// //           </div>
// //         </section>

// //       </div>
// //       <Footer />
// //     </>
// //   );
// // }
// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { getUniversitiesByCountry, getCoursesForCountry } from '../../services/dbServices';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import LeadFormModal from './LeadForm';
// import type { CountryDetailedInfo } from '../data/countryData';
// import { University } from '../data/universityData';

// interface CountryPageProps {
//   countrySlug: string;
//   countryData: CountryDetailedInfo;
// }

// export default function CountryPage({ countrySlug, countryData }: CountryPageProps) {
//   const country = countryData;
//   const [universities, setUniversities] = useState<University[]>([]);
//   const [loadingUniversities, setLoadingUniversities] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState<string>('All');
//   const [activeTab, setActiveTab] = useState<'about' | 'universities'>('about');
//   const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
//   const [availableCourses, setAvailableCourses] = useState<string[]>([]);
//   const [loadingCourses, setLoadingCourses] = useState(true);

//   useEffect(() => {
//     if (activeTab === 'universities') {
//       setSelectedCourse('All');
//       setLoadingUniversities(true);
//       getUniversitiesByCountry(countrySlug)
//         .then(d => { setUniversities(d); setLoadingUniversities(false); })
//         .catch(() => { setUniversities([]); setLoadingUniversities(false); });
//     }
//     (async () => {
//       try {
//         setLoadingCourses(true);
//         setAvailableCourses(await getCoursesForCountry(countrySlug));
//       } catch { setAvailableCourses([]); }
//       finally { setLoadingCourses(false); }
//     })();
//   }, [countrySlug, activeTab]);

//   if (!country) return <div>Country not found</div>;

//   const topPoints = country.whyStudyHere.points.slice(0, 4);

//   // Derive unique course filter options from universities
//   const courseFilters = ['All', ...Array.from(new Set(
//     universities.flatMap(u => u.programs?.map((p: any) => p.name || p) ?? [])
//   )).slice(0, 6)];

//   const filteredUniversities = selectedCourse === 'All'
//     ? universities
//     : universities.filter(u => u.programs?.some((p: any) => (p.name || p) === selectedCourse));

//   return (
//     <>
//       <Navbar />
//       <div style={{ minHeight: '100vh', background: '#fff', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>

//         <LeadFormModal
//           isOpen={isApplicationModalOpen}
//           onClose={() => setIsApplicationModalOpen(false)}
//           countryCode={countrySlug}
//           countryName={country.name}
//         />

//         <style>{`
//           @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
//           *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//           .hide-scrollbar::-webkit-scrollbar { display: none; }
//           .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

//           /* ── TABS (Acadfly style — inline with breadcrumb) ── */
//           .page-tabs {
//             background: #fff;
//             border-bottom: 1px solid #E2E8F0;
//           }
//           .page-tabs-inner {
//             max-width: 1200px; margin: 0 auto; padding: 0 32px;
//             display: flex; align-items: center; gap: 0;
//           }
//           .page-tab {
//             padding: 16px 28px; background: transparent; border: none;
//             border-bottom: 2px solid transparent;
//             font-size: 14px; font-weight: 600; font-family: inherit;
//             color: #64748B; cursor: pointer; transition: all 0.2s ease;
//           }
//           .page-tab.active { color: #1E3A5F; border-bottom-color: #FF6B35; }
//           .page-tab:hover:not(.active) { color: #1E3A5F; }

//           /* ── LIFE BAR ── */
//           .life-bar {
//             display: flex;
//             border: 1px solid #E2E8F0;
//             background: #E2E8F0;
//             gap: 1px;
//           }
//           .life-bar-item {
//             flex: 1 1 0;
//             display: flex; align-items: center; gap: 12px;
//             padding: 20px 22px;
//             background: #fff;
//             transition: background 0.2s;
//             min-width: 0;
//           }
//           .life-bar-item:hover { background: #FAFBFC; }

//           @media (max-width: 768px) {
//             .life-bar {
//               display: grid !important;
//               grid-template-columns: 1fr 1fr;
//             }
//             .life-bar-item:last-child {
//               grid-column: 1 / -1;
//               border-top: none;
//             }
//           }

//           /* ── LIFE GRID RESPONSIVE ── */
//           @media (max-width: 768px) {
//             .life-info-grid { grid-template-columns: repeat(2, 1fr) !important; }
//           }

//           /* ── SECTION HEADING ── */
//           .section-h2 {
//             font-size: clamp(22px, 3.5vw, 32px);
//             font-weight: 800; color: #1E3A5F;
//             letter-spacing: -0.8px; margin-bottom: 8px;
//           }
//           .section-sub {
//             font-size: 15px; color: #64748B; font-weight: 500; margin-bottom: 36px;
//           }

//           /* ── MID-PAGE CTA BANNER ── */
//           .cta-banner {
//             background: #1E3A5F;
//             padding: 52px 40px;
//             display: flex; align-items: center; justify-content: space-between;
//             gap: 32px; flex-wrap: wrap;
//             position: relative; overflow: hidden;
//           }
//           .cta-banner::before {
//             content: '';
//             position: absolute; right: -60px; top: -60px;
//             width: 200px; height: 200px;
//             border: 1px solid rgba(255,255,255,0.07);
//             transform: rotate(15deg);
//           }
//           .cta-banner::after {
//             content: '';
//             position: absolute; right: 40px; bottom: -40px;
//             width: 120px; height: 120px;
//             border: 1px solid rgba(255,255,255,0.05);
//           }

//           /* ── COST CARDS ── */
//           .cost-card {
//             padding: 28px 24px; background: #fff;
//             border: 1px solid #E2E8F0;
//             transition: all 0.25s ease;
//           }
//           .cost-card:hover { border-color: #FF6B35; box-shadow: 0 8px 24px rgba(255,107,53,0.08); transform: translateY(-3px); }

//           /* ── ELIGIBILITY ROWS ── */
//           .elig-item {
//             display: flex; align-items: flex-start; gap: 16px;
//             padding: 20px 0; border-bottom: 1px solid #F1F5F9;
//           }
//           .elig-item:last-child { border-bottom: none; }

//           /* ── ADVANTAGE ITEM ── */
//           .adv-item {
//             display: flex; align-items: flex-start; gap: 20px;
//             padding: 24px; border: 1px solid #E2E8F0; background: #fff;
//             transition: all 0.25s ease; position: relative;
//           }
//           .adv-item::before {
//             content: ''; position: absolute; left: 0; top: 0; bottom: 0;
//             width: 3px; background: transparent; transition: background 0.2s;
//           }
//           .adv-item:hover::before { background: #FF6B35; }
//           .adv-item:hover { box-shadow: 0 8px 28px rgba(30,58,95,0.08); border-color: rgba(255,107,53,0.2); }

//           /* ── UNI CARD ── */
//           .uni-card {
//             background: #fff; border: 1px solid #E2E8F0;
//             display: flex; flex-direction: column; overflow: hidden;
//             transition: all 0.25s ease;
//           }
//           .uni-card:hover { border-color: #1E3A5F; box-shadow: 0 12px 40px rgba(30,58,95,0.1); transform: translateY(-3px); }
//           .uni-card-btn {
//             padding: 16px; background: #1E3A5F; color: #fff;
//             font-size: 11px; font-weight: 700; letter-spacing: 2px;
//             text-transform: uppercase; text-align: center; transition: background 0.2s;
//           }
//           .uni-card:hover .uni-card-btn { background: #FF6B35; }

//           /* ── COURSE PILL ── */
//           .course-pill {
//             flex-shrink: 0; padding: 16px 24px;
//             border: 1px solid #E2E8F0; background: #fff;
//             transition: all 0.2s ease; cursor: pointer;
//           }
//           .course-pill:hover { border-color: #FF6B35; background: #FFFAF8; transform: translateY(-3px); }

//           /* ── CTA BUTTONS ── */
//           .btn-orange {
//             display: inline-flex; align-items: center; gap: 8px;
//             padding: 15px 36px; background: #FF6B35; color: #fff;
//             border: 2px solid #FF6B35; font-size: 14px; font-weight: 700;
//             letter-spacing: 0.3px; font-family: inherit; cursor: pointer;
//             text-decoration: none; transition: all 0.2s ease;
//           }
//           .btn-orange:hover { background: #E85D29; border-color: #E85D29; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,53,0.3); }

//           .btn-white {
//             display: inline-flex; align-items: center; gap: 8px;
//             padding: 15px 36px; background: #fff; color: #1E3A5F;
//             border: 2px solid #fff; font-size: 14px; font-weight: 700;
//             letter-spacing: 0.3px; font-family: inherit; cursor: pointer;
//             text-decoration: none; transition: all 0.2s ease;
//           }
//           .btn-white:hover { background: transparent; color: #fff; }

//           .btn-outline {
//             display: inline-flex; align-items: center; gap: 8px;
//             padding: 13px 32px; background: transparent; color: #1E3A5F;
//             border: 1px solid #E2E8F0; font-size: 13px; font-weight: 700;
//             font-family: inherit; cursor: pointer; text-decoration: none;
//             transition: all 0.2s ease;
//           }
//           .btn-outline:hover { border-color: #1E3A5F; }

//           /* ── VISA INFO CELL ── */
//           .visa-cell {
//             padding: 28px 24px; background: #fff; border: 1px solid #E2E8F0;
//             position: relative; overflow: hidden;
//             transition: all 0.2s ease;
//           }
//           .visa-cell::after {
//             content: ''; position: absolute; bottom: 0; left: 0;
//             height: 2px; width: 0; background: #FF6B35;
//             transition: width 0.3s ease;
//           }
//           .visa-cell:hover::after { width: 100%; }

//           /* ── DOC TAG ── */
//           .doc-tag {
//             padding: 8px 14px; border: 1px solid #E2E8F0; background: #F8FAFC;
//             font-size: 12px; font-weight: 600; color: #1E3A5F;
//             display: inline-flex; align-items: center; gap: 6px;
//             transition: all 0.2s ease;
//           }
//           .doc-tag:hover { border-color: #FF6B35; color: #FF6B35; background: #fff; }

//           /* ── RESPONSIVE ── */
//           @media (max-width: 1024px) {
//             .cost-grid { grid-template-columns: repeat(2, 1fr) !important; }
//             .adv-grid { grid-template-columns: 1fr !important; }
//             .visa-grid { grid-template-columns: repeat(2, 1fr) !important; }
//             .uni-grid { grid-template-columns: repeat(2, 1fr) !important; }
//           }
//           @media (max-width: 768px) {
//             .hero-inner { padding: 120px 20px 48px !important; }
//             .page-tabs-inner { padding: 0 16px; overflow-x: auto; }
//             .content-pad { padding-left: 20px !important; padding-right: 20px !important; }
//             .two-col { grid-template-columns: 1fr !important; }
//             .elig-grid { grid-template-columns: 1fr !important; }
//             .cost-grid { grid-template-columns: 1fr 1fr !important; }
//             .visa-grid { grid-template-columns: 1fr 1fr !important; }
//             .uni-grid { grid-template-columns: 1fr !important; }
//             .cta-banner { padding: 36px 20px !important; flex-direction: column !important; align-items: flex-start !important; }
//             .btn-orange, .btn-white { width: 100% !important; justify-content: center !important; }
//             .section-h2 { letter-spacing: -0.5px !important; }
//           }
//           @media (max-width: 420px) {
//             .cost-grid { grid-template-columns: 1fr !important; }
//             .visa-grid { grid-template-columns: 1fr !important; }
//           }
//         `}</style>

//         {/* ════════════════════════════════════════
//             HERO
//         ════════════════════════════════════════ */}
//         <section style={{ position: 'relative', minHeight: '580px', height: '72vh', overflow: 'hidden' }}>
//           <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${country.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
//           <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,24,48,0.68)' }} />

//           <div className="hero-inner" style={{
//             position: 'relative', zIndex: 2,
//             height: '100%', display: 'flex', flexDirection: 'column',
//             justifyContent: 'center', alignItems: 'flex-start',
//             maxWidth: '1200px', margin: '0 auto', padding: '140px 32px 60px',
//           }}>
//             {/* Breadcrumb */}
//             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
//               <Link href="/destinations" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontWeight: '500' }}>Destinations</Link>
//               <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px' }}>›</span>
//               <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', fontWeight: '500' }}>{country.name}</span>
//             </div>

//             <h1 style={{
//               fontSize: 'clamp(32px, 5.5vw, 64px)',
//               fontWeight: '800', color: '#fff',
//               letterSpacing: '-2px', lineHeight: '1.0',
//               marginBottom: '16px', maxWidth: '700px',
//             }}>
//               Study in {country.name} {country.flag}
//             </h1>

//             <p style={{
//               fontSize: 'clamp(14px, 1.6vw, 16px)',
//               color: 'rgba(255,255,255,0.72)', fontWeight: '500',
//               lineHeight: '1.7', maxWidth: '480px', marginBottom: '36px',
//             }}>
//               {country.overview.description}
//             </p>

//             <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange">
//               Get Started →
//             </button>
//           </div>
//         </section>

//         {/* ════════════════════════════════════════
//             PAGE TABS — Acadfly style
//         ════════════════════════════════════════ */}
//         <div className="page-tabs" style={{ position: 'sticky', top: '80px', zIndex: 40 }}>
//           <div className="page-tabs-inner">
//             <button className={`page-tab ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>
//               About
//             </button>
//             <button className={`page-tab ${activeTab === 'universities' ? 'active' : ''}`} onClick={() => setActiveTab('universities')}>
//               Universities
//             </button>
//           </div>
//         </div>

//         {/* ════════════════════════════════════════
//             ABOUT TAB
//         ════════════════════════════════════════ */}
//         {activeTab === 'about' && (
//           <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

//             {/* ── LIFE IN [COUNTRY] — Icon tile row ── */}
//             {(country.livingInfo?.language || country.livingInfo?.currency || country.livingInfo?.climate || country.livingInfo?.safetyRating || country.stats?.dialingCode) && (
//             <section style={{ padding: '56px 32px 0' }} className="content-pad">
//               <h2 className="section-h2">Life in {country.name} {country.flag}</h2>
//               <p className="section-sub">Know all about your favourite study destination</p>

//               {/* Single horizontal info bar — 5 items, 2-col grid on mobile */}
//               <div className="life-bar">
//                 {[
//                   { icon: '🗣️', label: 'Language',    value: country.livingInfo.language      },
//                   { icon: '💱', label: 'Currency',     value: country.livingInfo.currency      },
//                   { icon: '🌤️', label: 'Climate',      value: country.livingInfo.climate       },
//                   { icon: '🛡️', label: 'Safety',       value: country.livingInfo.safetyRating  },
//                   { icon: '📞', label: 'Dialing Code', value: country.stats.dialingCode        },
//                 ].map((tile, i) => (
//                   <div key={i} className="life-bar-item">
//                     <span style={{ fontSize: '22px', flexShrink: 0, lineHeight: 1 }}>{tile.icon}</span>
//                     <div style={{ minWidth: 0 }}>
//                       <div style={{ fontSize: '10px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '3px' }}>
//                         {tile.label}
//                       </div>
//                       <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
//                         {tile.value}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//             )}

//             {/* ── ABOUT THE COUNTRY ── */}
//             {(country.overview?.detailedDescription?.[0] || topPoints.length > 0 || country.stats) && (() => {
//               const hasLeftContent = !!(country.overview?.detailedDescription?.[0] || topPoints.length > 0);
//               const hasStats = !!country.stats;
//               const statsRows = hasStats ? [
//                 { label: 'Total Universities', value: country.stats.totalUniversities != null ? country.stats.totalUniversities + '+' : null },
//                 { label: 'NMC Approved',        value: country.stats.nmcApproved             },
//                 { label: 'Course Duration',     value: country.stats.programDuration         },
//                 { label: 'Avg. Fees / Year',    value: country.stats.averageFees             },
//                 { label: 'Indian Students',     value: country.stats.indianStudents          },
//                 { label: 'Medium',              value: country.stats.mediumOfInstruction     },
//               ].filter(row => row.value) : [];

//               return (
//               <section style={{ padding: '64px 32px' }} className="content-pad">
//                 <h2 className="section-h2">About {country.name}</h2>
//                 <p className="section-sub">Everything you need to know before you apply</p>

//                 {/* Layout: two-col when both sides exist, centered single col when only stats */}
//                 {hasLeftContent && hasStats ? (
//                   <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px', alignItems: 'start' }} className="two-col">
//                     {/* Left */}
//                     <div>
//                       {country.overview?.detailedDescription?.[0] && (
//                         <p style={{ fontSize: '16px', color: '#334155', fontWeight: '500', lineHeight: '1.85', marginBottom: '32px' }}>
//                           {country.overview.detailedDescription[0]}
//                         </p>
//                       )}
//                       {topPoints.length > 0 && (
//                         <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
//                           {topPoints.map((point, i) => (
//                             <div key={i} className="adv-item">
//                               <div style={{
//                                 minWidth: '36px', height: '36px', background: '#FF6B35',
//                                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                 fontSize: '12px', fontWeight: '800', color: '#fff', flexShrink: 0,
//                               }}>
//                                 {String(i + 1).padStart(2, '0')}
//                               </div>
//                               <p style={{ fontSize: '15px', fontWeight: '600', color: '#1E3A5F', lineHeight: '1.55' }}>{point}</p>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                     {/* Right — stats panel */}
//                     <div style={{ border: '1px solid #E2E8F0', background: '#fff', position: 'sticky', top: '140px' }}>
//                       <div style={{ padding: '20px 24px', background: '#1E3A5F' }}>
//                         <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>At a Glance</div>
//                         <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff', letterSpacing: '-0.3px' }}>{country.name} — Key Facts</div>
//                       </div>
//                       {statsRows.map((row, i, arr) => (
//                         <div key={i} style={{ padding: '14px 24px', borderBottom: i < arr.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
//                           <span style={{ fontSize: '12px', fontWeight: '600', color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
//                           <span style={{ fontSize: '14px', fontWeight: '800', color: '#1E3A5F', textAlign: 'right', wordBreak: 'break-word' }}>{row.value}</span>
//                         </div>
//                       ))}
//                       <div style={{ padding: '20px 24px', borderTop: '1px solid #F1F5F9' }}>
//                         <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange" style={{ width: '100%', justifyContent: 'center' }}>Apply Now →</button>
//                       </div>
//                     </div>
//                   </div>

//                 ) : hasLeftContent && !hasStats ? (
//                   /* Only left content — full width */
//                   <div>
//                     {country.overview?.detailedDescription?.[0] && (
//                       <p style={{ fontSize: '16px', color: '#334155', fontWeight: '500', lineHeight: '1.85', marginBottom: '32px' }}>
//                         {country.overview.detailedDescription[0]}
//                       </p>
//                     )}
//                     {topPoints.length > 0 && (
//                       <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
//                         {topPoints.map((point, i) => (
//                           <div key={i} className="adv-item">
//                             <div style={{
//                               minWidth: '36px', height: '36px', background: '#FF6B35',
//                               display: 'flex', alignItems: 'center', justifyContent: 'center',
//                               fontSize: '12px', fontWeight: '800', color: '#fff', flexShrink: 0,
//                             }}>
//                               {String(i + 1).padStart(2, '0')}
//                             </div>
//                             <p style={{ fontSize: '15px', fontWeight: '600', color: '#1E3A5F', lineHeight: '1.55' }}>{point}</p>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                 ) : !hasLeftContent && hasStats && statsRows.length > 0 ? (
//                   /* Only stats — centered, max-width constrained, no empty left ghost */
//                   <div style={{ display: 'flex', justifyContent: 'center' }}>
//                     <div style={{ border: '1px solid #E2E8F0', background: '#fff', width: '100%', maxWidth: '560px' }}>
//                       <div style={{ padding: '20px 24px', background: '#1E3A5F' }}>
//                         <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>At a Glance</div>
//                         <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff', letterSpacing: '-0.3px' }}>{country.name} — Key Facts</div>
//                       </div>
//                       {statsRows.map((row, i, arr) => (
//                         <div key={i} style={{ padding: '16px 28px', borderBottom: i < arr.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
//                           <span style={{ fontSize: '13px', fontWeight: '600', color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
//                           <span style={{ fontSize: '15px', fontWeight: '800', color: '#1E3A5F', textAlign: 'right', wordBreak: 'break-word' }}>{row.value}</span>
//                         </div>
//                       ))}
//                       <div style={{ padding: '24px 28px', borderTop: '1px solid #F1F5F9' }}>
//                         <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange" style={{ width: '100%', justifyContent: 'center' }}>Apply Now →</button>
//                       </div>
//                     </div>
//                   </div>

//                 ) : null}
//               </section>
//               );
//             })()}

//             {/* ── MID-PAGE CTA BANNER ── */}
//             <section style={{ padding: '0 32px 64px' }} className="content-pad">
//               <div className="cta-banner">
//                 <div style={{ position: 'relative', zIndex: 1 }}>
//                   <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.5)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px' }}>
//                     Your Future Awaits
//                   </div>
//                   <h3 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px', marginBottom: '8px' }}>
//                     Begin your journey to Study in {country.name}
//                   </h3>
//                   <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', fontWeight: '500', maxWidth: '420px' }}>
//                     Expert counselors guide you from inquiry to enrollment — at zero cost.
//                   </p>
//                 </div>
//                 <button onClick={() => setIsApplicationModalOpen(true)} className="btn-white" style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
//                   Get Started →
//                 </button>
//               </div>
//             </section>

//             {/* ── AVAILABLE COURSES ── */}
//             {(!loadingCourses && availableCourses?.length > 0) && (
//             <section style={{ padding: '0 0 64px' }}>
//               <div style={{ padding: '0 32px 28px' }} className="content-pad">
//                 <h2 className="section-h2">Courses Available in {country.name}</h2>
//                 <p className="section-sub">Choose from a wide range of programmes offered at partner universities</p>
//               </div>
//               <div className="hide-scrollbar" style={{ display: 'flex', overflowX: 'auto', paddingLeft: '32px', gap: '12px' }}>
//                 {availableCourses.map((course, i) => (
//                   <div key={i} className="course-pill" style={{ marginRight: i === availableCourses.length - 1 ? '32px' : 0 }}>
//                     <div style={{ fontSize: '13px', fontWeight: '800', color: '#1E3A5F', marginBottom: '4px' }}>{course}</div>
//                     <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
//                       {i % 3 === 0 ? 'High Demand' : i % 3 === 1 ? 'Popular' : 'Growing'}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//             )}

//             {/* ── ELIGIBILITY & DOCUMENTS ── */}
//             {country.eligibility && (country.eligibility.neetRequirement || country.eligibility.academicRequirement || country.eligibility.ageLimit || country.eligibility.documents?.length > 0) && (
//             <section style={{ padding: '0 32px 64px' }} className="content-pad">
//               <h2 className="section-h2">Eligibility for Studying in {country.name}</h2>
//               <p className="section-sub">Make sure you meet these requirements before applying</p>

//               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="elig-grid">
//                 {/* Left — eligibility criteria */}
//                 {(country.eligibility.neetRequirement || country.eligibility.academicRequirement || country.eligibility.ageLimit) && (
//                 <div>
//                   <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
//                     Criteria
//                   </div>
//                   {[
//                     { icon: '📋', label: 'NEET',      text: country.eligibility.neetRequirement     },
//                     { icon: '🎓', label: 'Academics', text: country.eligibility.academicRequirement },
//                     { icon: '🎂', label: 'Age Limit', text: country.eligibility.ageLimit            },
//                   ].filter(item => item.text).map((item, i) => (
//                     <div key={i} className="elig-item">
//                       <div style={{
//                         width: '44px', height: '44px', background: '#F8FAFC',
//                         border: '1px solid #E2E8F0', display: 'flex',
//                         alignItems: 'center', justifyContent: 'center',
//                         fontSize: '20px', flexShrink: 0,
//                       }}>{item.icon}</div>
//                       <div>
//                         <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '5px' }}>
//                           {item.label}
//                         </div>
//                         <div style={{ fontSize: '15px', fontWeight: '700', color: '#1E3A5F', lineHeight: '1.4' }}>
//                           {item.text}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 )}

//                 {/* Right — required documents */}
//                 {country.eligibility.documents?.length > 0 && (
//                 <div>
//                   <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
//                     Required Documents
//                   </div>
//                   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
//                     {country.eligibility.documents.map((doc, i) => (
//                       <div key={i} className="doc-tag">
//                         <span style={{ color: '#FF6B35' }}>↗</span> {doc}
//                       </div>
//                     ))}
//                   </div>
//                   {/* Nudge box */}
//                   <div style={{
//                     padding: '20px', border: '1px solid #E2E8F0', background: '#F8FAFC',
//                     display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap',
//                   }}>
//                     <div>
//                       <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', marginBottom: '4px' }}>Need help with documents?</div>
//                       <div style={{ fontSize: '12px', color: '#64748B' }}>Our team handles everything for you.</div>
//                     </div>
//                     <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange" style={{ padding: '11px 22px', fontSize: '12px' }}>
//                       Get Help →
//                     </button>
//                   </div>
//                 </div>
//                 )}
//               </div>
//             </section>
//             )}

//             {/* ── COST BREAKDOWN ── */}
//             {country.costs && (country.costs.tuitionFeeRange || country.costs.hostelFees || country.costs.foodExpenses || country.costs.otherExpenses || country.costs.totalFirstYear || country.costs.totalCourse) && (
//             <section style={{ padding: '0 32px 64px' }} className="content-pad">
//               <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
//                 <div>
//                   <h2 className="section-h2">Cost of Studying in {country.name}</h2>
//                   <p style={{ fontSize: '15px', color: '#64748B', fontWeight: '500', margin: 0 }}>
//                     Transparent fee structure so you can plan ahead · Currency: <strong style={{ color: '#1E3A5F' }}>{country.stats.currency}</strong>
//                   </p>
//                 </div>
//               </div>

//               {/* Cost list rows */}
//               <div style={{ border: '1px solid #E2E8F0', background: '#fff', marginBottom: '1px' }}>
//                 {[
//                   { label: 'Tuition Fees',   value: country.costs.tuitionFeeRange, period: 'per year'  },
//                   { label: 'Accommodation',  value: country.costs.hostelFees,       period: 'per year'  },
//                   { label: 'Food & Living',  value: country.costs.foodExpenses,     period: 'per month' },
//                   { label: 'Other Expenses', value: country.costs.otherExpenses,    period: 'per year'  },
//                 ].filter(c => c.value).map((c, i) => (
//                   <div key={i} style={{
//                     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//                     padding: '18px 24px', borderBottom: '1px solid #F1F5F9', gap: '16px',
//                     transition: 'background 0.2s',
//                   }}
//                   onMouseEnter={e => (e.currentTarget.style.background = '#FAFBFC')}
//                   onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
//                   >
//                     <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                       <div style={{ width: '3px', height: '20px', background: '#FF6B35', flexShrink: 0 }} />
//                       <span style={{ fontSize: '14px', fontWeight: '600', color: '#64748B' }}>{c.label}</span>
//                     </div>
//                     <div style={{ textAlign: 'right' }}>
//                       <div style={{ fontSize: '17px', fontWeight: '800', color: '#1E3A5F', letterSpacing: '-0.3px' }}>{c.value}</div>
//                       <div style={{ fontSize: '10px', color: '#94A3B8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{c.period}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Total bar */}
//               {(country.costs.totalFirstYear || country.costs.totalCourse) && (
//               <div style={{
//                 background: '#1E3A5F', padding: '28px 32px',
//                 display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px',
//               }}>
//                 {country.costs.totalFirstYear && (
//                 <div>
//                   <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>First Year Total</div>
//                   <div style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px' }}>{country.costs.totalFirstYear}</div>
//                 </div>
//                 )}
//                 {country.costs.totalFirstYear && country.costs.totalCourse && (
//                 <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.1)' }} />
//                 )}
//                 {country.costs.totalCourse && (
//                 <div>
//                   <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Complete Course</div>
//                   <div style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '800', color: '#FF6B35', letterSpacing: '-1px' }}>{country.costs.totalCourse}</div>
//                 </div>
//                 )}
//                 <button onClick={() => setIsApplicationModalOpen(true)} className="btn-white" style={{ marginLeft: 'auto' }}>
//                   Get Full Breakdown →
//                 </button>
//               </div>
//               )}
//             </section>
//             )}

//             {/* ── VISA & INTAKE ── */}
//             {(country.intakes?.main || country.visa?.type || country.visa?.validity) && (
//             <section style={{ padding: '0 32px 64px' }} className="content-pad">
//               <h2 className="section-h2">Visa & Intake Details</h2>
//               <p className="section-sub">Everything you need to know before planning your move</p>

//               <div className="visa-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
//                 {[
//                   { label: 'Main Intake',   value: country.intakes?.main,       sub: country.intakes?.applicationDeadline ? `Deadline: ${country.intakes.applicationDeadline}` : ''  },
//                   { label: 'Visa Type',     value: country.visa?.type,           sub: country.visa?.processingTime ? `Processing: ${country.visa.processingTime}` : ''               },
//                   { label: 'Visa Validity', value: country.visa?.validity,       sub: 'Extendable during course'                                                                      },
//                   { label: 'Language',      value: country.livingInfo?.language, sub: country.stats?.mediumOfInstruction ? `Medium: ${country.stats.mediumOfInstruction}` : ''        },
//                 ].filter(v => v.value).map((v, i) => (
//                   <div key={i} className="visa-cell">
//                     <div style={{ fontSize: '10px', fontWeight: '700', color: '#94A3B8', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>{v.label}</div>
//                     <div style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', fontWeight: '800', color: '#1E3A5F', letterSpacing: '-0.3px', marginBottom: '8px', lineHeight: '1.2' }}>
//                       {v.value}
//                     </div>
//                     <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600', lineHeight: '1.5' }}>{v.sub}</div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//             )}

//             {/* ── RECOGNITIONS ── */}
           

//           </div>
//         )}

//         {/* ════════════════════════════════════════
//             UNIVERSITIES TAB
//         ════════════════════════════════════════ */}
//         {activeTab === 'universities' && (
//           <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 32px 80px' }} className="content-pad">

//             {/* Header */}
//             <div style={{ marginBottom: '32px' }}>
//               <h2 className="section-h2">Popular Universities in {country.name}</h2>
//               <p style={{ fontSize: '15px', color: '#64748B', fontWeight: '500', marginTop: '4px' }}>
//                 Selection of universities offering the best courses
//               </p>
//             </div>

//             {/* Course filter pills — Acadfly style */}
//             {!loadingUniversities && universities.length > 0 && (
//               <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
//                 {courseFilters.map(filter => (
//                   <button
//                     key={filter}
//                     onClick={() => setSelectedCourse(filter)}
//                     style={{
//                       padding: '9px 22px',
//                       border: selectedCourse === filter ? '1.5px solid #1E3A5F' : '1.5px solid #E2E8F0',
//                       background: selectedCourse === filter ? '#1E3A5F' : '#fff',
//                       color: selectedCourse === filter ? '#fff' : '#64748B',
//                       fontSize: '13px', fontWeight: '700',
//                       cursor: 'pointer', fontFamily: 'inherit',
//                       transition: 'all 0.2s ease',
//                     }}
//                   >
//                     {filter}
//                     {filter !== 'All' && (
//                       <span style={{
//                         marginLeft: '8px',
//                         fontSize: '11px',
//                         opacity: 0.7,
//                         fontWeight: '600',
//                       }}>
//                         ({universities.filter(u => u.programs?.some((p: any) => (p.name || p) === filter)).length})
//                       </span>
//                     )}
//                   </button>
//                 ))}
//               </div>
//             )}

//             {loadingUniversities ? (
//               <div className="uni-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
//                 {[1,2,3,4,5,6].map(i => (
//                   <div key={i} style={{ background: '#F8FAFC', height: '320px', border: '1px solid #E2E8F0' }} />
//                 ))}
//               </div>
//             ) : filteredUniversities.length > 0 ? (
//               <>
//                 <div style={{ fontSize: '12px', fontWeight: '600', color: '#94A3B8', marginBottom: '20px' }}>
//                   {filteredUniversities.length} {filteredUniversities.length === 1 ? 'university' : 'universities'} found
//                   {selectedCourse !== 'All' && <span> for <strong style={{ color: '#1E3A5F' }}>{selectedCourse}</strong></span>}
//                 </div>
//                 <div className="uni-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
//                   {filteredUniversities.map((uni, i) => (
//                     <Link key={uni.id || i} href={`/university/${uni.id || i}`} style={{ textDecoration: 'none' }}>
//                       <div className="uni-card" style={{ height: '100%' }}>
//                         {uni.heroImage ? (
//                           <div style={{
//                             height: '180px', position: 'relative',
//                             backgroundImage: `url(${uni.heroImage})`,
//                             backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden',
//                           }}>
//                             <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,24,48,0.2)' }} />
//                             {uni.accreditations && (
//                               <div style={{
//                                 position: 'absolute', top: '12px', right: '12px',
//                                 padding: '5px 12px', background: '#FF6B35', color: '#fff',
//                                 fontSize: '9px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase',
//                               }}>NMC</div>
//                             )}
//                           </div>
//                         ) : (
//                           <div style={{ height: '100px', background: '#1E3A5F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                             <span style={{ fontSize: '32px' }}>{country.flag}</span>
//                           </div>
//                         )}
//                         <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
//                           {/* Program badges */}
//                           {uni.programs && uni.programs.length > 0 && (
//                             <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
//                               {uni.programs.slice(0, 3).map((p: any, pi: number) => (
//                                 <span key={pi} style={{
//                                   padding: '3px 10px', fontSize: '10px', fontWeight: '700',
//                                   background: '#F1F5F9', color: '#1E3A5F',
//                                   border: '1px solid #E2E8F0', letterSpacing: '0.3px',
//                                 }}>
//                                   {p.name || p}
//                                 </span>
//                               ))}
//                             </div>
//                           )}
//                           <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#1E3A5F', lineHeight: '1.3', marginBottom: '6px' }}>
//                             {uni.name}
//                           </h3>
//                           <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '600', marginBottom: '16px' }}>
//                             {uni.location?.address || (uni as any).city}
//                             {(uni.establishedYear || (uni as any).established) ? ` · Est. ${uni.establishedYear || (uni as any).established}` : ''}
//                           </div>
//                           {uni.tagline && (
//                             <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6', marginBottom: '16px', fontWeight: '500' }}>
//                               {uni.tagline}
//                             </p>
//                           )}
//                           <div style={{ display: 'flex', gap: '1px', background: '#E2E8F0', marginTop: 'auto' }}>
//                             <div style={{ flex: 1, padding: '12px', background: '#F8FAFC', textAlign: 'center' }}>
//                               <div style={{ fontSize: '14px', fontWeight: '800', color: '#1E3A5F' }}>
//                                 {uni.fees?.currency} {uni.fees?.tuitionPerYear?.toLocaleString() || '—'}
//                               </div>
//                               <div style={{ fontSize: '9px', color: '#94A3B8', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>Per Year</div>
//                             </div>
//                             <div style={{ flex: 1, padding: '12px', background: '#F8FAFC', textAlign: 'center' }}>
//                               <div style={{ fontSize: '14px', fontWeight: '800', color: '#1E3A5F' }}>
//                                 {uni.programs?.[0]?.duration || uni.stats?.passRate || '—'}
//                               </div>
//                               <div style={{ fontSize: '9px', color: '#94A3B8', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>
//                                 {uni.programs?.[0]?.duration ? 'Duration' : 'Pass Rate'}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="uni-card-btn">View Full Profile →</div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </>
//             ) : universities.length > 0 ? (
//               /* No results for this filter */
//               <div style={{ padding: '60px 32px', textAlign: 'center', border: '1px solid #E2E8F0', background: '#F8FAFC' }}>
//                 <div style={{ fontSize: '32px', marginBottom: '16px' }}>🔍</div>
//                 <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1E3A5F', marginBottom: '8px' }}>
//                   No universities for {selectedCourse}
//                 </h3>
//                 <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '20px' }}>Try a different course or view all universities.</p>
//                 <button onClick={() => setSelectedCourse('All')} className="btn-orange" style={{ padding: '11px 28px', fontSize: '13px' }}>
//                   View All Universities
//                 </button>
//               </div>
//             ) : (
//               <div style={{ padding: '80px 40px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
//                 <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#1E3A5F', marginBottom: '12px' }}>Profiles Coming Soon</h3>
//                 <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '28px' }}>
//                   We're compiling profiles for universities in {country.name}.
//                 </p>
//                 <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange">Get Notified →</button>
//               </div>
//             )}
//           </div>
//         )}

//         {/* ════════════════════════════════════════
//             FINAL CTA — Full width dark banner
//         ════════════════════════════════════════ */}
//         <section style={{ position: 'relative', overflow: 'hidden' }}>
//           <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${country.galleryImages?.[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
//           <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,24,48,0.91)' }} />

//           <div style={{
//             position: 'relative', zIndex: 2,
//             maxWidth: '1200px', margin: '0 auto', padding: '100px 32px',
//             display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//             gap: '48px', flexWrap: 'wrap',
//           }}>
//             <div>
//               <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
//                 Take the Next Step
//               </div>
//               <h2 style={{
//                 fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: '800', color: '#fff',
//                 letterSpacing: '-2px', lineHeight: '1.0', marginBottom: '16px',
//               }}>
//                 Your Medical Career<br />
//                 <span style={{ color: '#FF6B35' }}>Starts in {country.name}</span>
//               </h2>
//               <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', fontWeight: '500', maxWidth: '440px' }}>
//                 Expert counselors guide you from first inquiry to enrollment — at zero cost.
//               </p>
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '220px' }}>
//               <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange" style={{ justifyContent: 'center' }}>
//                 Apply Now →
//               </button>
//               <Link href="/destinations" className="btn-white" style={{ justifyContent: 'center', color: '#1E3A5F' }}>
//                 Explore Destinations
//               </Link>
//             </div>
//           </div>
//         </section>

//       </div>
//       <Footer />
//     </>
//   );
// }
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getUniversitiesByCountry, getCoursesForCountry } from '../../services/dbServices';
import Navbar from './Navbar';
import Footer from './Footer';
import LeadFormModal from './LeadForm';
import type { CountryDetailedInfo } from '../data/countryData';
import { University } from '../data/universityData';

interface CountryPageProps {
  countrySlug: string;
  countryData: CountryDetailedInfo;
}

export default function CountryPage({ countrySlug, countryData }: CountryPageProps) {
  const country = countryData;
  const [universities, setUniversities] = useState<University[]>([]);
  const [loadingUniversities, setLoadingUniversities] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'about' | 'universities'>('about');
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [availableCourses, setAvailableCourses] = useState<string[]>([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  useEffect(() => {
    if (activeTab === 'universities') {
      setSelectedCourse('All');
      setLoadingUniversities(true);
      getUniversitiesByCountry(countrySlug)
        .then(d => { setUniversities(d); setLoadingUniversities(false); })
        .catch(() => { setUniversities([]); setLoadingUniversities(false); });
    }
    (async () => {
      try {
        setLoadingCourses(true);
        setAvailableCourses(await getCoursesForCountry(countrySlug));
      } catch { setAvailableCourses([]); }
      finally { setLoadingCourses(false); }
    })();
  }, [countrySlug, activeTab]);

  if (!country) return <div>Country not found</div>;

  const topPoints = country.whyStudyHere.points.slice(0, 4);

  // Derive unique course filter options from universities
  const courseFilters = ['All', ...Array.from(new Set(
    universities.flatMap(u => u.programs?.map((p: any) => p.name || p) ?? [])
  )).slice(0, 6)];

  const filteredUniversities = selectedCourse === 'All'
    ? universities
    : universities.filter(u => u.programs?.some((p: any) => (p.name || p) === selectedCourse));

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', background: '#fff', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>

        <LeadFormModal
          isOpen={isApplicationModalOpen}
          onClose={() => setIsApplicationModalOpen(false)}
          countryCode={countrySlug}
          countryName={country.name}
        />

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

          /* ── TABS (Acadfly style — inline with breadcrumb) ── */
          .page-tabs {
            background: #fff;
            border-bottom: 1px solid #E2E8F0;
          }
          .page-tabs-inner {
            max-width: 1200px; margin: 0 auto; padding: 0 32px;
            display: flex; align-items: center; gap: 0;
          }
          .page-tab {
            padding: 16px 28px; background: transparent; border: none;
            border-bottom: 2px solid transparent;
            font-size: 14px; font-weight: 600; font-family: inherit;
            color: #64748B; cursor: pointer; transition: all 0.2s ease;
          }
          .page-tab.active { color: #1E3A5F; border-bottom-color: #FF6B35; }
          .page-tab:hover:not(.active) { color: #1E3A5F; }

          /* ── LIFE BAR ── */
          .life-bar {
            display: flex;
            border: 1px solid #E2E8F0;
            background: #E2E8F0;
            gap: 1px;
          }
          .life-bar-item {
            flex: 1 1 0;
            display: flex; align-items: center; gap: 12px;
            padding: 20px 22px;
            background: #fff;
            transition: background 0.2s;
            min-width: 0;
          }
          .life-bar-item:hover { background: #FAFBFC; }

          @media (max-width: 768px) {
            .life-bar {
              display: grid !important;
              grid-template-columns: 1fr 1fr;
            }
            .life-bar-item:last-child {
              grid-column: 1 / -1;
              border-top: none;
            }
          }

          /* ── LIFE GRID RESPONSIVE ── */
          @media (max-width: 768px) {
            .life-info-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }

          /* ── SECTION HEADING ── */
          .section-h2 {
            font-size: clamp(22px, 3.5vw, 32px);
            font-weight: 800; color: #1E3A5F;
            letter-spacing: -0.8px; margin-bottom: 8px;
          }
          .section-sub {
            font-size: 15px; color: #64748B; font-weight: 500; margin-bottom: 36px;
          }

          /* ── MID-PAGE CTA BANNER ── */
          .cta-banner {
            background: #1E3A5F;
            padding: 52px 40px;
            display: flex; align-items: center; justify-content: space-between;
            gap: 32px; flex-wrap: wrap;
            position: relative; overflow: hidden;
          }
          .cta-banner::before {
            content: '';
            position: absolute; right: -60px; top: -60px;
            width: 200px; height: 200px;
            border: 1px solid rgba(255,255,255,0.07);
            transform: rotate(15deg);
          }
          .cta-banner::after {
            content: '';
            position: absolute; right: 40px; bottom: -40px;
            width: 120px; height: 120px;
            border: 1px solid rgba(255,255,255,0.05);
          }

          /* ── COST CARDS ── */
          .cost-card {
            padding: 28px 24px; background: #fff;
            border: 1px solid #E2E8F0;
            transition: all 0.25s ease;
          }
          .cost-card:hover { border-color: #FF6B35; box-shadow: 0 8px 24px rgba(255,107,53,0.08); transform: translateY(-3px); }

          /* ── ELIGIBILITY ROWS ── */
          .elig-item {
            display: flex; align-items: flex-start; gap: 16px;
            padding: 20px 0; border-bottom: 1px solid #F1F5F9;
          }
          .elig-item:last-child { border-bottom: none; }

          /* ── ADVANTAGE ITEM ── */
          .adv-item {
            display: flex; align-items: flex-start; gap: 20px;
            padding: 24px; border: 1px solid #E2E8F0; background: #fff;
            transition: all 0.25s ease; position: relative;
          }
          .adv-item::before {
            content: ''; position: absolute; left: 0; top: 0; bottom: 0;
            width: 3px; background: transparent; transition: background 0.2s;
          }
          .adv-item:hover::before { background: #FF6B35; }
          .adv-item:hover { box-shadow: 0 8px 28px rgba(30,58,95,0.08); border-color: rgba(255,107,53,0.2); }

          /* ── UNI CARD ── */
          .uni-card {
            background: #fff; border: 1px solid #E2E8F0;
            display: flex; flex-direction: column; overflow: hidden;
            transition: all 0.25s ease;
          }
          .uni-card:hover { border-color: #1E3A5F; box-shadow: 0 12px 40px rgba(30,58,95,0.1); transform: translateY(-3px); }
          .uni-card-btn {
            padding: 16px; background: #1E3A5F; color: #fff;
            font-size: 11px; font-weight: 700; letter-spacing: 2px;
            text-transform: uppercase; text-align: center; transition: background 0.2s;
          }
          .uni-card:hover .uni-card-btn { background: #FF6B35; }

          /* ── COURSE PILL ── */
          .course-pill {
            flex-shrink: 0; padding: 16px 24px;
            border: 1px solid #E2E8F0; background: #fff;
            transition: all 0.2s ease; cursor: pointer;
          }
          .course-pill:hover { border-color: #FF6B35; background: #FFFAF8; transform: translateY(-3px); }

          /* ── CTA BUTTONS ── */
          .btn-orange {
            display: inline-flex; align-items: center; gap: 8px;
            padding: 15px 36px; background: #FF6B35; color: #fff;
            border: 2px solid #FF6B35; font-size: 14px; font-weight: 700;
            letter-spacing: 0.3px; font-family: inherit; cursor: pointer;
            text-decoration: none; transition: all 0.2s ease;
          }
          .btn-orange:hover { background: #E85D29; border-color: #E85D29; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,53,0.3); }

          .btn-white {
            display: inline-flex; align-items: center; gap: 8px;
            padding: 15px 36px; background: #fff; color: #1E3A5F;
            border: 2px solid #fff; font-size: 14px; font-weight: 700;
            letter-spacing: 0.3px; font-family: inherit; cursor: pointer;
            text-decoration: none; transition: all 0.2s ease;
          }
          .btn-white:hover { background: transparent; color: #fff; }

          .btn-outline {
            display: inline-flex; align-items: center; gap: 8px;
            padding: 13px 32px; background: transparent; color: #1E3A5F;
            border: 1px solid #E2E8F0; font-size: 13px; font-weight: 700;
            font-family: inherit; cursor: pointer; text-decoration: none;
            transition: all 0.2s ease;
          }
          .btn-outline:hover { border-color: #1E3A5F; }

          /* ── VISA INFO CELL ── */
          .visa-cell {
            padding: 28px 24px; background: #fff; border: 1px solid #E2E8F0;
            position: relative; overflow: hidden;
            transition: all 0.2s ease;
          }
          .visa-cell::after {
            content: ''; position: absolute; bottom: 0; left: 0;
            height: 2px; width: 0; background: #FF6B35;
            transition: width 0.3s ease;
          }
          .visa-cell:hover::after { width: 100%; }

          /* ── DOC TAG ── */
          .doc-tag {
            padding: 8px 14px; border: 1px solid #E2E8F0; background: #F8FAFC;
            font-size: 12px; font-weight: 600; color: #1E3A5F;
            display: inline-flex; align-items: center; gap: 6px;
            transition: all 0.2s ease;
          }
          .doc-tag:hover { border-color: #FF6B35; color: #FF6B35; background: #fff; }

          /* ── RESPONSIVE ── */
          @media (max-width: 1024px) {
            .cost-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .adv-grid { grid-template-columns: 1fr !important; }
            .visa-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .uni-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 768px) {
            .hero-inner { padding: 120px 20px 48px !important; }
            .page-tabs-inner { padding: 0 16px; overflow-x: auto; }
            .content-pad { padding-left: 20px !important; padding-right: 20px !important; }
            .two-col { grid-template-columns: 1fr !important; }
            .elig-grid { grid-template-columns: 1fr !important; }
            .cost-grid { grid-template-columns: 1fr 1fr !important; }
            .visa-grid { grid-template-columns: 1fr 1fr !important; }
            .uni-grid { grid-template-columns: 1fr !important; }
            .cta-banner { padding: 36px 20px !important; flex-direction: column !important; align-items: flex-start !important; }
            .btn-orange, .btn-white { width: 100% !important; justify-content: center !important; }
            .section-h2 { letter-spacing: -0.5px !important; }
          }
          @media (max-width: 420px) {
            .cost-grid { grid-template-columns: 1fr !important; }
            .visa-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section style={{ position: 'relative', minHeight: '580px', height: '72vh', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${country.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,24,48,0.68)' }} />

          <div className="hero-inner" style={{
            position: 'relative', zIndex: 2,
            height: '100%', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'flex-start',
            maxWidth: '1200px', margin: '0 auto', padding: '140px 32px 60px',
          }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <Link href="/destinations" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontWeight: '500' }}>Destinations</Link>
              <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px' }}>›</span>
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', fontWeight: '500' }}>{country.name}</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(32px, 5.5vw, 64px)',
              fontWeight: '800', color: '#fff',
              letterSpacing: '-2px', lineHeight: '1.0',
              marginBottom: '16px', maxWidth: '700px',
            }}>
              Study in {country.name} {country.flag}
            </h1>

            <p style={{
              fontSize: 'clamp(14px, 1.6vw, 16px)',
              color: 'rgba(255,255,255,0.72)', fontWeight: '500',
              lineHeight: '1.7', maxWidth: '480px', marginBottom: '36px',
            }}>
              {country.overview.description}
            </p>

            <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange">
              Get Started →
            </button>
          </div>
        </section>

        {/* ════════════════════════════════════════
            PAGE TABS — Acadfly style
        ════════════════════════════════════════ */}
        <div className="page-tabs" style={{ position: 'sticky', top: '80px', zIndex: 40 }}>
          <div className="page-tabs-inner">
            <button className={`page-tab ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>
              About
            </button>
            <button className={`page-tab ${activeTab === 'universities' ? 'active' : ''}`} onClick={() => setActiveTab('universities')}>
              Universities
            </button>
          </div>
        </div>

        {/* ════════════════════════════════════════
            ABOUT TAB
        ════════════════════════════════════════ */}
        {activeTab === 'about' && (
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

            {/* ── LIFE IN [COUNTRY] — Icon tile row ── */}
            {(country.livingInfo?.language || country.livingInfo?.currency || country.livingInfo?.climate || country.livingInfo?.safetyRating || country.stats?.dialingCode) && (
            <section style={{ padding: '56px 32px 0' }} className="content-pad">
              <h2 className="section-h2">Life in {country.name} {country.flag}</h2>
              <p className="section-sub">Know all about your favourite study destination</p>

              {/* Single horizontal info bar — 5 items, 2-col grid on mobile */}
              <div className="life-bar">
                {[
                  { icon: '🗣️', label: 'Language',    value: country.livingInfo.language      },
                  { icon: '💱', label: 'Currency',     value: country.livingInfo.currency      },
                  { icon: '🌤️', label: 'Climate',      value: country.livingInfo.climate       },
                  { icon: '🛡️', label: 'Safety',       value: country.livingInfo.safetyRating  },
                  { icon: '📞', label: 'Dialing Code', value: country.stats.dialingCode        },
                ].map((tile, i) => (
                  <div key={i} className="life-bar-item">
                    <span style={{ fontSize: '22px', flexShrink: 0, lineHeight: 1 }}>{tile.icon}</span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '10px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '3px' }}>
                        {tile.label}
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {tile.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            )}

            {/* ── ABOUT THE COUNTRY ── */}
            {(country.overview?.detailedDescription?.[0] || topPoints.length > 0 || country.stats) && (() => {
              const hasLeftContent = !!(country.overview?.detailedDescription?.[0] || topPoints.length > 0);
              const hasStats = !!country.stats;
              const statsRows = hasStats ? [
                { label: 'Total Universities', value: country.stats.totalUniversities != null ? country.stats.totalUniversities + '+' : null },
                { label: 'NMC Approved',        value: country.stats.nmcApproved             },
                { label: 'Course Duration',     value: country.stats.programDuration         },
                { label: 'Avg. Fees / Year',    value: country.stats.averageFees             },
                { label: 'Indian Students',     value: country.stats.indianStudents          },
                { label: 'Medium',              value: country.stats.mediumOfInstruction     },
              ].filter(row => row.value) : [];

              return (
              <section style={{ padding: '64px 32px' }} className="content-pad">
                <h2 className="section-h2">About {country.name}</h2>
                <p className="section-sub">Everything you need to know before you apply</p>

                {/* Layout: two-col when both sides exist, centered single col when only stats */}
                {hasLeftContent && hasStats ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px', alignItems: 'start' }} className="two-col">
                    {/* Left */}
                    <div>
                      {country.overview?.detailedDescription?.[0] && (
                        <p style={{ fontSize: '16px', color: '#334155', fontWeight: '500', lineHeight: '1.85', marginBottom: '32px' }}>
                          {country.overview.detailedDescription[0]}
                        </p>
                      )}
                      {topPoints.length > 0 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                          {topPoints.map((point, i) => (
                            <div key={i} className="adv-item">
                              <div style={{
                                minWidth: '36px', height: '36px', background: '#FF6B35',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '12px', fontWeight: '800', color: '#fff', flexShrink: 0,
                              }}>
                                {String(i + 1).padStart(2, '0')}
                              </div>
                              <p style={{ fontSize: '15px', fontWeight: '600', color: '#1E3A5F', lineHeight: '1.55' }}>{point}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* Right — stats panel */}
                    <div style={{ border: '1px solid #E2E8F0', background: '#fff', position: 'sticky', top: '140px' }}>
                      <div style={{ padding: '20px 24px', background: '#1E3A5F' }}>
                        <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>At a Glance</div>
                        <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff', letterSpacing: '-0.3px' }}>{country.name} — Key Facts</div>
                      </div>
                      {statsRows.map((row, i, arr) => (
                        <div key={i} style={{ padding: '14px 24px', borderBottom: i < arr.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                          <span style={{ fontSize: '12px', fontWeight: '600', color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
                          <span style={{ fontSize: '14px', fontWeight: '800', color: '#1E3A5F', textAlign: 'right', wordBreak: 'break-word' }}>{row.value}</span>
                        </div>
                      ))}
                      <div style={{ padding: '20px 24px', borderTop: '1px solid #F1F5F9' }}>
                        <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange" style={{ width: '100%', justifyContent: 'center' }}>Apply Now →</button>
                      </div>
                    </div>
                  </div>

                ) : hasLeftContent && !hasStats ? (
                  /* Only left content — full width */
                  <div>
                    {country.overview?.detailedDescription?.[0] && (
                      <p style={{ fontSize: '16px', color: '#334155', fontWeight: '500', lineHeight: '1.85', marginBottom: '32px' }}>
                        {country.overview.detailedDescription[0]}
                      </p>
                    )}
                    {topPoints.length > 0 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        {topPoints.map((point, i) => (
                          <div key={i} className="adv-item">
                            <div style={{
                              minWidth: '36px', height: '36px', background: '#FF6B35',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: '12px', fontWeight: '800', color: '#fff', flexShrink: 0,
                            }}>
                              {String(i + 1).padStart(2, '0')}
                            </div>
                            <p style={{ fontSize: '15px', fontWeight: '600', color: '#1E3A5F', lineHeight: '1.55' }}>{point}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                ) : !hasLeftContent && hasStats && statsRows.length > 0 ? (
                  /* Only stats — centered, max-width constrained, no empty left ghost */
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ border: '1px solid #E2E8F0', background: '#fff', width: '100%', maxWidth: '560px' }}>
                      <div style={{ padding: '20px 24px', background: '#1E3A5F' }}>
                        <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>At a Glance</div>
                        <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff', letterSpacing: '-0.3px' }}>{country.name} — Key Facts</div>
                      </div>
                      {statsRows.map((row, i, arr) => (
                        <div key={i} style={{ padding: '16px 28px', borderBottom: i < arr.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                          <span style={{ fontSize: '13px', fontWeight: '600', color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
                          <span style={{ fontSize: '15px', fontWeight: '800', color: '#1E3A5F', textAlign: 'right', wordBreak: 'break-word' }}>{row.value}</span>
                        </div>
                      ))}
                      <div style={{ padding: '24px 28px', borderTop: '1px solid #F1F5F9' }}>
                        <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange" style={{ width: '100%', justifyContent: 'center' }}>Apply Now →</button>
                      </div>
                    </div>
                  </div>

                ) : null}
              </section>
              );
            })()}

            {/* ── MID-PAGE CTA BANNER ── */}
            <section style={{ padding: '0 32px 64px' }} className="content-pad">
              <div className="cta-banner">
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.5)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px' }}>
                    Your Future Awaits
                  </div>
                  <h3 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px', marginBottom: '8px' }}>
                    Begin your journey to Study in {country.name}
                  </h3>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', fontWeight: '500', maxWidth: '420px' }}>
                    Expert counselors guide you from inquiry to enrollment — at zero cost.
                  </p>
                </div>
                <button onClick={() => setIsApplicationModalOpen(true)} className="btn-white" style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
                  Get Started →
                </button>
              </div>
            </section>

            {/* ── AVAILABLE COURSES ── */}
            {(!loadingCourses && availableCourses?.length > 0) && (
            <section style={{ padding: '0 0 64px' }}>
              <div style={{ padding: '0 32px 28px' }} className="content-pad">
                <h2 className="section-h2">Courses Available in {country.name}</h2>
                <p className="section-sub">Choose from a wide range of programmes offered at partner universities</p>
              </div>
              <div className="hide-scrollbar" style={{ display: 'flex', overflowX: 'auto', paddingLeft: '32px', gap: '12px' }}>
                {availableCourses.map((course, i) => (
                  <div key={i} className="course-pill" style={{ marginRight: i === availableCourses.length - 1 ? '32px' : 0 }}>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: '#1E3A5F', marginBottom: '4px' }}>{course}</div>
                    <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                      {i % 3 === 0 ? 'High Demand' : i % 3 === 1 ? 'Popular' : 'Growing'}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            )}

            {/* ── ELIGIBILITY & DOCUMENTS ── */}
            {country.eligibility && (country.eligibility.neetRequirement || country.eligibility.academicRequirement || country.eligibility.ageLimit || country.eligibility.documents?.length > 0) && (() => {
              const hasCriteria = !!(country.eligibility.neetRequirement || country.eligibility.academicRequirement || country.eligibility.ageLimit);
              const hasDocs = country.eligibility.documents?.length > 0;
              const criteriaItems = [
                { icon: '📋', label: 'NEET',      text: country.eligibility.neetRequirement     },
                { icon: '🎓', label: 'Academics', text: country.eligibility.academicRequirement },
                { icon: '🎂', label: 'Age Limit', text: country.eligibility.ageLimit            },
              ].filter(item => item.text);

              return (
              <section style={{ padding: '0 32px 64px' }} className="content-pad">
                <h2 className="section-h2">Eligibility for Studying in {country.name}</h2>
                <p className="section-sub">Make sure you meet these requirements before applying</p>

                {/* Both sides: use stretch so left fills height, no awkward gap */}
                {hasCriteria && hasDocs ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '1px', background: '#E2E8F0', border: '1px solid #E2E8F0' }} className="elig-grid">
                    {/* Left — criteria, stretches to match right height */}
                    <div style={{ background: '#fff', padding: '28px 28px 0' }}>
                      <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                        Criteria
                      </div>
                      {criteriaItems.map((item, i) => (
                        <div key={i} className="elig-item">
                          <div style={{
                            width: '44px', height: '44px', background: '#F8FAFC',
                            border: '1px solid #E2E8F0', display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            fontSize: '20px', flexShrink: 0,
                          }}>{item.icon}</div>
                          <div>
                            <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '5px' }}>
                              {item.label}
                            </div>
                            <div style={{ fontSize: '15px', fontWeight: '700', color: '#1E3A5F', lineHeight: '1.4' }}>
                              {item.text}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right — documents */}
                    <div style={{ background: '#fff', padding: '28px' }}>
                      <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                        Required Documents
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
                        {country.eligibility.documents.map((doc, i) => (
                          <div key={i} className="doc-tag">
                            <span style={{ color: '#FF6B35' }}>↗</span> {doc}
                          </div>
                        ))}
                      </div>
                      {/* Nudge box */}
                      <div style={{
                        padding: '20px', border: '1px solid #E2E8F0', background: '#F8FAFC',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap',
                      }}>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', marginBottom: '4px' }}>Need help with documents?</div>
                          <div style={{ fontSize: '12px', color: '#64748B' }}>Our team handles everything for you.</div>
                        </div>
                        <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange" style={{ padding: '11px 22px', fontSize: '12px' }}>
                          Get Help →
                        </button>
                      </div>
                    </div>
                  </div>

                ) : hasCriteria && !hasDocs ? (
                  /* Only criteria — full width */
                  <div>
                    {criteriaItems.map((item, i) => (
                      <div key={i} className="elig-item">
                        <div style={{
                          width: '44px', height: '44px', background: '#F8FAFC',
                          border: '1px solid #E2E8F0', display: 'flex',
                          alignItems: 'center', justifyContent: 'center',
                          fontSize: '20px', flexShrink: 0,
                        }}>{item.icon}</div>
                        <div>
                          <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '5px' }}>
                            {item.label}
                          </div>
                          <div style={{ fontSize: '15px', fontWeight: '700', color: '#1E3A5F', lineHeight: '1.4' }}>
                            {item.text}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                ) : !hasCriteria && hasDocs ? (
                  /* Only documents — full width */
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                      Required Documents
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
                      {country.eligibility.documents.map((doc, i) => (
                        <div key={i} className="doc-tag">
                          <span style={{ color: '#FF6B35' }}>↗</span> {doc}
                        </div>
                      ))}
                    </div>
                    <div style={{
                      padding: '20px', border: '1px solid #E2E8F0', background: '#F8FAFC',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap',
                    }}>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', marginBottom: '4px' }}>Need help with documents?</div>
                        <div style={{ fontSize: '12px', color: '#64748B' }}>Our team handles everything for you.</div>
                      </div>
                      <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange" style={{ padding: '11px 22px', fontSize: '12px' }}>
                        Get Help →
                      </button>
                    </div>
                  </div>
                ) : null}
              </section>
              );
            })()}

            {/* ── COST BREAKDOWN ── */}
            {country.costs && (country.costs.tuitionFeeRange || country.costs.hostelFees || country.costs.foodExpenses || country.costs.otherExpenses || country.costs.totalFirstYear || country.costs.totalCourse) && (
            <section style={{ padding: '0 32px 64px' }} className="content-pad">
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
                <div>
                  <h2 className="section-h2">Cost of Studying in {country.name}</h2>
                  <p style={{ fontSize: '15px', color: '#64748B', fontWeight: '500', margin: 0 }}>
                    Transparent fee structure so you can plan ahead · Currency: <strong style={{ color: '#1E3A5F' }}>{country.stats.currency}</strong>
                  </p>
                </div>
              </div>

              {/* Cost list rows */}
              <div style={{ border: '1px solid #E2E8F0', background: '#fff', marginBottom: '1px' }}>
                {[
                  { label: 'Tuition Fees',   value: country.costs.tuitionFeeRange, period: 'per year'  },
                  { label: 'Accommodation',  value: country.costs.hostelFees,       period: 'per year'  },
                  { label: 'Food & Living',  value: country.costs.foodExpenses,     period: 'per month' },
                  { label: 'Other Expenses', value: country.costs.otherExpenses,    period: 'per year'  },
                ].filter(c => c.value).map((c, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '18px 24px', borderBottom: '1px solid #F1F5F9', gap: '16px',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#FAFBFC')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '3px', height: '20px', background: '#FF6B35', flexShrink: 0 }} />
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#64748B' }}>{c.label}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '17px', fontWeight: '800', color: '#1E3A5F', letterSpacing: '-0.3px' }}>{c.value}</div>
                      <div style={{ fontSize: '10px', color: '#94A3B8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{c.period}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total bar */}
              {(country.costs.totalFirstYear || country.costs.totalCourse) && (
              <div style={{
                background: '#1E3A5F', padding: '28px 32px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px',
              }}>
                {country.costs.totalFirstYear && (
                <div>
                  <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>First Year Total</div>
                  <div style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px' }}>{country.costs.totalFirstYear}</div>
                </div>
                )}
                {country.costs.totalFirstYear && country.costs.totalCourse && (
                <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.1)' }} />
                )}
                {country.costs.totalCourse && (
                <div>
                  <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Complete Course</div>
                  <div style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '800', color: '#FF6B35', letterSpacing: '-1px' }}>{country.costs.totalCourse}</div>
                </div>
                )}
                <button onClick={() => setIsApplicationModalOpen(true)} className="btn-white" style={{ marginLeft: 'auto' }}>
                  Get Full Breakdown →
                </button>
              </div>
              )}
            </section>
            )}

            {/* ── VISA & INTAKE ── */}
            {(country.intakes?.main || country.visa?.type || country.visa?.validity) && (
            <section style={{ padding: '0 32px 64px' }} className="content-pad">
              <h2 className="section-h2">Visa & Intake Details</h2>
              <p className="section-sub">Everything you need to know before planning your move</p>

              <div className="visa-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                {[
                  { label: 'Main Intake',   value: country.intakes?.main,       sub: country.intakes?.applicationDeadline ? `Deadline: ${country.intakes.applicationDeadline}` : ''  },
                  { label: 'Visa Type',     value: country.visa?.type,           sub: country.visa?.processingTime ? `Processing: ${country.visa.processingTime}` : ''               },
                  { label: 'Visa Validity', value: country.visa?.validity,       sub: 'Extendable during course'                                                                      },
                  { label: 'Language',      value: country.livingInfo?.language, sub: country.stats?.mediumOfInstruction ? `Medium: ${country.stats.mediumOfInstruction}` : ''        },
                ].filter(v => v.value).map((v, i) => (
                  <div key={i} className="visa-cell">
                    <div style={{ fontSize: '10px', fontWeight: '700', color: '#94A3B8', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>{v.label}</div>
                    <div style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', fontWeight: '800', color: '#1E3A5F', letterSpacing: '-0.3px', marginBottom: '8px', lineHeight: '1.2' }}>
                      {v.value}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600', lineHeight: '1.5' }}>{v.sub}</div>
                  </div>
                ))}
              </div>
            </section>
            )}

            {/* ── RECOGNITIONS ── */}
           

          </div>
        )}

        {/* ════════════════════════════════════════
            UNIVERSITIES TAB
        ════════════════════════════════════════ */}
        {activeTab === 'universities' && (
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 32px 80px' }} className="content-pad">

            {/* Header */}
            <div style={{ marginBottom: '32px' }}>
              <h2 className="section-h2">Popular Universities in {country.name}</h2>
              <p style={{ fontSize: '15px', color: '#64748B', fontWeight: '500', marginTop: '4px' }}>
                Selection of universities offering the best courses
              </p>
            </div>

            {/* Course filter pills — Acadfly style */}
            {!loadingUniversities && universities.length > 0 && (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
                {courseFilters.map(filter => (
                  <button
                    key={filter}
                    onClick={() => setSelectedCourse(filter)}
                    style={{
                      padding: '9px 22px',
                      border: selectedCourse === filter ? '1.5px solid #1E3A5F' : '1.5px solid #E2E8F0',
                      background: selectedCourse === filter ? '#1E3A5F' : '#fff',
                      color: selectedCourse === filter ? '#fff' : '#64748B',
                      fontSize: '13px', fontWeight: '700',
                      cursor: 'pointer', fontFamily: 'inherit',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {filter}
                    {filter !== 'All' && (
                      <span style={{
                        marginLeft: '8px',
                        fontSize: '11px',
                        opacity: 0.7,
                        fontWeight: '600',
                      }}>
                        ({universities.filter(u => u.programs?.some((p: any) => (p.name || p) === filter)).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}

            {loadingUniversities ? (
              <div className="uni-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} style={{ background: '#F8FAFC', height: '320px', border: '1px solid #E2E8F0' }} />
                ))}
              </div>
            ) : filteredUniversities.length > 0 ? (
              <>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#94A3B8', marginBottom: '20px' }}>
                  {filteredUniversities.length} {filteredUniversities.length === 1 ? 'university' : 'universities'} found
                  {selectedCourse !== 'All' && <span> for <strong style={{ color: '#1E3A5F' }}>{selectedCourse}</strong></span>}
                </div>
                <div className="uni-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                  {filteredUniversities.map((uni, i) => (
                    <Link key={uni.id || i} href={`/university/${uni.id || i}`} style={{ textDecoration: 'none' }}>
                      <div className="uni-card" style={{ height: '100%' }}>
                        {uni.heroImage ? (
                          <div style={{
                            height: '180px', position: 'relative',
                            backgroundImage: `url(${uni.heroImage})`,
                            backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden',
                          }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,24,48,0.2)' }} />
                            {uni.accreditations && (
                              <div style={{
                                position: 'absolute', top: '12px', right: '12px',
                                padding: '5px 12px', background: '#FF6B35', color: '#fff',
                                fontSize: '9px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase',
                              }}>NMC</div>
                            )}
                          </div>
                        ) : (
                          <div style={{ height: '100px', background: '#1E3A5F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '32px' }}>{country.flag}</span>
                          </div>
                        )}
                        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                          {/* Program badges */}
                          {uni.programs && uni.programs.length > 0 && (
                            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                              {uni.programs.slice(0, 3).map((p: any, pi: number) => (
                                <span key={pi} style={{
                                  padding: '3px 10px', fontSize: '10px', fontWeight: '700',
                                  background: '#F1F5F9', color: '#1E3A5F',
                                  border: '1px solid #E2E8F0', letterSpacing: '0.3px',
                                }}>
                                  {p.name || p}
                                </span>
                              ))}
                            </div>
                          )}
                          <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#1E3A5F', lineHeight: '1.3', marginBottom: '6px' }}>
                            {uni.name}
                          </h3>
                          <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '600', marginBottom: '16px' }}>
                            {uni.location?.address || (uni as any).city}
                            {(uni.establishedYear || (uni as any).established) ? ` · Est. ${uni.establishedYear || (uni as any).established}` : ''}
                          </div>
                          {uni.tagline && (
                            <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6', marginBottom: '16px', fontWeight: '500' }}>
                              {uni.tagline}
                            </p>
                          )}
                          <div style={{ display: 'flex', gap: '1px', background: '#E2E8F0', marginTop: 'auto' }}>
                            <div style={{ flex: 1, padding: '12px', background: '#F8FAFC', textAlign: 'center' }}>
                              <div style={{ fontSize: '14px', fontWeight: '800', color: '#1E3A5F' }}>
                                {uni.fees?.currency} {uni.fees?.tuitionPerYear?.toLocaleString() || '—'}
                              </div>
                              <div style={{ fontSize: '9px', color: '#94A3B8', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>Per Year</div>
                            </div>
                            <div style={{ flex: 1, padding: '12px', background: '#F8FAFC', textAlign: 'center' }}>
                              <div style={{ fontSize: '14px', fontWeight: '800', color: '#1E3A5F' }}>
                                {uni.programs?.[0]?.duration || uni.stats?.passRate || '—'}
                              </div>
                              <div style={{ fontSize: '9px', color: '#94A3B8', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>
                                {uni.programs?.[0]?.duration ? 'Duration' : 'Pass Rate'}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="uni-card-btn">View Full Profile →</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : universities.length > 0 ? (
              /* No results for this filter */
              <div style={{ padding: '60px 32px', textAlign: 'center', border: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>🔍</div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1E3A5F', marginBottom: '8px' }}>
                  No universities for {selectedCourse}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '20px' }}>Try a different course or view all universities.</p>
                <button onClick={() => setSelectedCourse('All')} className="btn-orange" style={{ padding: '11px 28px', fontSize: '13px' }}>
                  View All Universities
                </button>
              </div>
            ) : (
              <div style={{ padding: '80px 40px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#1E3A5F', marginBottom: '12px' }}>Profiles Coming Soon</h3>
                <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '28px' }}>
                  We're compiling profiles for universities in {country.name}.
                </p>
                <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange">Get Notified →</button>
              </div>
            )}
          </div>
        )}

        {/* ════════════════════════════════════════
            FINAL CTA — Full width dark banner
        ════════════════════════════════════════ */}
        <section style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${country.galleryImages?.[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,24,48,0.91)' }} />

          <div style={{
            position: 'relative', zIndex: 2,
            maxWidth: '1200px', margin: '0 auto', padding: '100px 32px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '48px', flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Take the Next Step
              </div>
              <h2 style={{
                fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: '800', color: '#fff',
                letterSpacing: '-2px', lineHeight: '1.0', marginBottom: '16px',
              }}>
                Your Medical Career<br />
                <span style={{ color: '#FF6B35' }}>Starts in {country.name}</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', fontWeight: '500', maxWidth: '440px' }}>
                Expert counselors guide you from first inquiry to enrollment — at zero cost.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '220px' }}>
              <button onClick={() => setIsApplicationModalOpen(true)} className="btn-orange" style={{ justifyContent: 'center' }}>
                Apply Now →
              </button>
              <Link href="/destinations" className="btn-white" style={{ justifyContent: 'center', color: '#1E3A5F' }}>
                Explore Destinations
              </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}