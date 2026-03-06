"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ─── Types ───────────────────────────────────────────────────────────────────

interface ServiceDetail {
  sections: {
    heading: string;
    items: string[];
  }[];
  quote?: string;
  tags?: string[];
}

interface Service {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  image: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
  detail: ServiceDetail;
}

// ─── Service Data ─────────────────────────────────────────────────────────────

const SERVICES: Service[] = [
  {
    id: 'counseling',
    num: '01',
    title: 'Personalized Guidance & Counseling',
    shortDesc: 'We build a roadmap tailored to your budget, ambitions, and life — not just a list of schools.',
    image: '/services/support.png',
    iconBg: 'rgba(255,107,53,0.1)',
    iconColor: '#FF6B35',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    detail: {
      sections: [
        {
          heading: 'Our 4-Step Success Framework',
          items: [
            'Discovery Session — We understand your academic background, budget, and long-term career goals.',
            'Strategic Shortlisting — Our experts curate universities that meet 100% of your must-have criteria.',
            'Application Management — From transcripts to personal statements, polished and submitted on time.',
            'Pre-Departure Support — Visa guidance and arrival prep so you land with confidence.',
          ],
        },
        {
          heading: 'Why Our Counseling Makes the Difference',
          items: [
            'Expert counselors with experience across 50+ universities in Russia and beyond.',
            'The "best" university isn\'t the most famous — it\'s the one where you will thrive.',
            'Virtual or in-person sessions to fit your schedule.',
            'Ongoing guidance, not just a one-time consultation.',
          ],
        },
      ],
      quote: '"Global Circle Edu didn\'t just help me choose — they helped me see which path actually led to the career I wanted." — Current International Student',
    },
  },
  {
    id: 'university',
    num: '02',
    title: 'University Selection Strategy',
    shortDesc: 'A data-driven Selection Matrix that matches your profile to an institution ensuring academic success and global employability.',
    image: '/services/uni.png',
    iconBg: 'rgba(30,58,95,0.1)',
    iconColor: '#1E3A5F',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    detail: {
      sections: [
        {
          heading: 'Three Pillars of Selection',
          items: [
            'Legal Compliance & Recognition — WHO, WDOMS, and NMC-verified universities only.',
            'Clinical Infrastructure — State & Federal universities with affiliated hospitals and high patient inflow.',
            'FMGE / NExT Success Rates — Proven track record in Indian, UK, and US licensing exams.',
          ],
        },
        {
          heading: '4-Stage Selection Roadmap',
          items: [
            'Student Profiling — PCB scores, NEET results, and target country of practice analysis.',
            'Shortlisting — Curated comparison of 3–5 universities tailored to your profile.',
            'Verification Check — Latest Accreditation Certificates provided for peace of mind.',
            'Final Alignment — 1-on-1 session explaining pros and cons with you and your parents.',
          ],
        },
      ],
      tags: ['WHO Verified', 'NMC Compliant', 'FMGE Track Record', 'English Medium', 'Clinical Rotations'],
    },
  },
  {
    id: 'admission',
    num: '03',
    title: 'Complete Admission Management',
    shortDesc: 'We manage the entire application lifecycle — from transcripts and personal statements to final acceptance.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    iconBg: 'rgba(255,107,53,0.1)',
    iconColor: '#FF6B35',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    detail: {
      sections: [
        {
          heading: 'What We Handle',
          items: [
            'Application form preparation and multi-university simultaneous submission.',
            'Academic transcript evaluation and certified translation when required.',
            'Personal statement and motivation letter drafting and review.',
            'Coordination with university admission boards for real-time status updates.',
            'Offer letter review and enrollment confirmation support.',
            'Scholarship and fee-waiver application assistance where available.',
          ],
        },
        {
          heading: 'Timelines & Deadlines',
          items: [
            'Russian medical universities open admissions between April and August.',
            'Our deadline calendar alerts you 30 days before each critical date.',
            'We track multiple universities simultaneously so nothing falls through the cracks.',
          ],
        },
      ],
    },
  },
  {
    id: 'documentation',
    num: '04',
    title: 'Documentation & Legal Support',
    shortDesc: 'Apostille, visa extensions, biometrics, migration registration — we manage the full administrative lifecycle.',
    image: '/services/document.png',
    iconBg: 'rgba(30,58,95,0.1)',
    iconColor: '#1E3A5F',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
    detail: {
      sections: [
        {
          heading: 'Pre-Arrival: Document Legalization',
          items: [
            'Apostille Services for Hague Convention countries — simplified authentication.',
            'Consular Legalization via Ministry of Education, MFA, and Russian Embassy for non-Hague countries.',
            'Certified Russian translations notarized within the Russian Federation for 100% university acceptance.',
          ],
        },
        {
          heading: 'Arrival: Mandatory Migration (First 90 Days)',
          items: [
            'Migration Registration (Uchet) with MVD within 7 days of arrival.',
            'Dactyloscopy & Biometrics — accompanied to Migration Centers under Federal Law No. 274-FZ.',
            'Annual mandatory medical examination booking and attendance support.',
          ],
        },
        {
          heading: 'Digital Integration & Ongoing Legal',
          items: [
            'Gosuslugi account setup, SNILS acquisition, and RuID App registration (2025/2026 regulations).',
            'Health Insurance (VHI), Police Clearance, Nostrification, and Passport update support.',
          ],
        },
      ],
    },
  },
  {
    id: 'visa',
    num: '05',
    title: 'VISA Assistance',
    shortDesc: 'Complete visa lifecycle management — student visas, multi-entry extensions, parent visas. No gaps, ever.',
    image: '/services/visa.png',
    iconBg: 'rgba(255,107,53,0.1)',
    iconColor: '#FF6B35',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
    detail: {
      sections: [
        {
          heading: 'Student Visa Services',
          items: [
            'Full documentation checklist and guidance for initial VISA approval.',
            'Multi-entry visa extension from 90-day single-entry to 1-year status.',
            'Timely renewal alerts — 60-day advance notice with full submission handling.',
            'State duty payments and university Passport & Visa Department coordination.',
            'Passport transfer assistance if your passport expires during your 6-year degree.',
          ],
        },
        {
          heading: 'Parent Accompaniment Visas',
          items: [
            'Specialised visa support for parents wishing to accompany their child.',
            'A service most consultancies simply do not offer.',
            'End-to-end documentation and embassy submission support.',
          ],
        },
      ],
    },
  },
  {
    id: 'travel',
    num: '06',
    title: 'Travel Assistance',
    shortDesc: 'Ticket booking, group travel coordination, and on-ground support — you never land alone or unprepared.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    iconBg: 'rgba(30,58,95,0.1)',
    iconColor: '#1E3A5F',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.37 2 2 0 0 1 3.6 1.17h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91A16 16 0 0 0 14 15.91l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    detail: {
      sections: [
        {
          heading: 'What We Arrange',
          items: [
            'Flight ticket booking with optimal routes, timings, and budget options.',
            'Group travel coordination — students from the same region travel together.',
            'Transit support and layover guidance for long international flights.',
            'Carry-on and check-in baggage advisory for Russian customs compliance.',
          ],
        },
        {
          heading: 'On-Journey Support',
          items: [
            'A dedicated contact available throughout your travel day.',
            'Real-time assistance for delays, rebookings, or last-minute issues.',
            'Guidance and support to make every student feel secure — even in transit.',
          ],
        },
      ],
    },
  },
  {
    id: 'postdeparture',
    num: '07',
    title: 'Post-Departure Support',
    shortDesc: 'Airport pickup, SIM cards, medical check-ups, accommodation setup — we meet you on the other side.',
    image: '/services/postdep.png',
    iconBg: 'rgba(255,107,53,0.1)',
    iconColor: '#FF6B35',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    detail: {
      sections: [
        {
          heading: 'Arrival Day Services',
          items: [
            'Airport pickup and transfer directly to accommodation or university campus.',
            'SIM card procurement for immediate local connectivity.',
            'Mandatory medical check-up scheduling and accompaniment.',
            'Initial hostel or apartment settlement support.',
          ],
        },
        {
          heading: 'First-Week Orientation',
          items: [
            'University registration and student ID card process guidance.',
            'Banking and local currency setup assistance.',
            'Introduction to campus facilities, library, and medical departments.',
            'Emergency contact setup and local support network introduction.',
          ],
        },
      ],
    },
  },
  {
    id: 'oncampus',
    num: '08',
    title: 'On-Campus Support',
    shortDesc: 'A dedicated team available throughout your entire 6-year course — academic, welfare, and beyond.',
    image: '/services/campus.png',
    iconBg: 'rgba(30,58,95,0.1)',
    iconColor: '#1E3A5F',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    detail: {
      sections: [
        {
          heading: 'Academic Support',
          items: [
            'Liaison with university faculty for academic performance tracking.',
            'FMGE / NExT exam preparation resources and coaching referrals.',
            'Study group coordination and peer mentorship setup.',
          ],
        },
        {
          heading: 'Welfare & Well-being',
          items: [
            '24/7 emergency contact line for urgent student concerns.',
            'Mental health awareness and counseling referral support.',
            'Cultural integration assistance for new arrivals.',
            'Annual welfare check-ins with student and family updates.',
          ],
        },
      ],
    },
  },
  {
    id: 'forex',
    num: '09',
    title: 'Forex Assistance',
    shortDesc: 'Best Rupee-to-Ruble exchange rates, without SWIFT complications or hidden fees.',
    image: '/services/forex.png',
    iconBg: 'rgba(255,107,53,0.1)',
    iconColor: '#FF6B35',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    detail: {
      sections: [
        {
          heading: 'How It Works',
          items: [
            'Transparent rate monitoring and optimal conversion timing advice.',
            'Coordination with verified exchange partners for secure transfers.',
            'Guidance on carrying foreign currency within legal limits.',
            'University fee payment support with Ruble-denominated transactions.',
          ],
        },
        {
          heading: 'Why This Matters',
          items: [
            'SWIFT does not operate in Russia — we bridge this gap with trusted channels.',
            'Without proper guidance, students can lose significant value in informal exchanges.',
            'Our partnerships ensure fair rates with full compliance under Indian and Russian financial regulations.',
          ],
        },
      ],
    },
  },
];

// ─── Modal Component ──────────────────────────────────────────────────────────

function ServiceModal({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(10,18,35,0.6)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(32px); opacity:0 } to { transform: translateY(0); opacity:1 } }
        .modal-scroll::-webkit-scrollbar { width: 4px; }
        .modal-scroll::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 8px; }
      `}</style>

      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-scroll"
        style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '88vh',
          overflowY: 'auto',
          animation: 'slideUp 0.3s cubic-bezier(0.22,1,0.36,1)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
        }}
      >
        {/* Modal Image Header */}
        <div style={{ position: 'relative', height: '200px', borderRadius: '24px 24px 0 0', overflow: 'hidden' }}>
          <img
            src={service.image}
            alt={service.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(30,58,95,0.3) 0%, rgba(30,58,95,0.85) 100%)',
          }} />
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '16px', right: '16px',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: 'white', borderRadius: '50%',
              width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', fontSize: '18px', fontWeight: '300',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}
          >✕</button>
          <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '60px' }}>
            <div style={{
              display: 'inline-block',
              background: '#FF6B35',
              color: 'white',
              fontSize: '11px', fontWeight: '700',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '4px 12px', borderRadius: '50px',
              marginBottom: '8px',
            }}>
              Service {service.num}
            </div>
            <h2 style={{
              fontSize: 'clamp(18px, 3vw, 24px)',
              fontWeight: '800', color: 'white',
              lineHeight: '1.2', margin: 0,
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}>
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: 'clamp(24px, 4vw, 36px)' }}>
          <p style={{
            fontSize: '15px', color: '#475569',
            lineHeight: '1.75', marginBottom: '28px',
          }}>
            {service.shortDesc}
          </p>

          {service.detail.sections.map((section, si) => (
            <div key={si} style={{ marginBottom: '24px' }}>
              <h3 style={{
                fontSize: '16px', fontWeight: '700',
                color: '#1E3A5F', marginBottom: '14px',
                paddingBottom: '10px',
                borderBottom: '1px solid #F1F5F9',
              }}>
                {section.heading}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {section.items.map((item, ii) => (
                  <li key={ii} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                    fontSize: '14px', color: '#475569', lineHeight: '1.7',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="3" style={{ marginTop: '3px', flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {service.detail.quote && (
            <div style={{
              background: 'rgba(30,58,95,0.04)',
              borderLeft: '4px solid #FF6B35',
              padding: '16px 20px',
              borderRadius: '0 12px 12px 0',
              marginBottom: '24px',
              fontSize: '14px', color: '#1E3A5F',
              fontStyle: 'italic', lineHeight: '1.7',
            }}>
              {service.detail.quote}
            </div>
          )}

          {service.detail.tags && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {service.detail.tags.map((tag) => (
                <span key={tag} style={{
                  background: 'rgba(30,58,95,0.07)',
                  color: '#1E3A5F',
                  fontSize: '12px', fontWeight: '600',
                  padding: '6px 14px', borderRadius: '50px',
                  border: '1px solid rgba(30,58,95,0.12)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '8px', borderTop: '1px solid #F1F5F9' }}>
            <button style={{
              background: '#FF6B35',
              color: 'white',
              border: 'none',
              padding: '14px 28px',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(255,107,53,0.3)',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 32px rgba(255,107,53,0.4)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(255,107,53,0.3)';
            }}
            >
              Book Free Consultation
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                color: '#64748B',
                border: '2px solid #E2E8F0',
                padding: '14px 28px',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({
  service,
  onOpen,
}: {
  service: Service;
  onOpen: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="feature-card"
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'white',
        borderRadius: '20px',
        border: '1px solid #E2E8F0',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 50px rgba(0,0,0,0.12)' : '0 1px 3px rgba(30,58,95,0.06)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Top bar accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '4px',
        background: '#FF6B35',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s ease',
        borderRadius: '20px 20px 0 0',
        zIndex: 2,
      }} />

      {/* Card Image */}
      <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={service.image}
          alt={service.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.4s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(30,58,95,0.2)',
          transition: 'background 0.3s ease',
          ...(hovered && { background: 'rgba(30,58,95,0.35)' }),
        }} />
        {/* Number badge */}
        <div style={{
          position: 'absolute', top: '12px', right: '12px',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.25)',
          color: 'white',
          fontSize: '11px', fontWeight: '700',
          letterSpacing: '0.1em',
          padding: '4px 10px', borderRadius: '50px',
        }}>
          {service.num}
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '0' }}>
        {/* Icon */}
        <div style={{
          width: '52px', height: '52px',
          borderRadius: '14px',
          background: service.iconBg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '16px',
          color: service.iconColor,
        }}>
          {service.icon}
        </div>

        <h3 style={{
          fontSize: 'clamp(16px, 2vw, 18px)',
          fontWeight: '700', color: '#1E293B',
          marginBottom: '10px', lineHeight: '1.3',
        }}>
          {service.title}
        </h3>

        <p style={{
          fontSize: '13px', color: '#64748B',
          lineHeight: '1.7', flex: 1, marginBottom: '20px',
        }}>
          {service.shortDesc}
        </p>

        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          fontSize: '13px', fontWeight: '700',
          color: hovered ? '#FF6B35' : '#1E3A5F',
          transition: 'color 0.2s ease',
        }}>
          Learn More
          <svg
            width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            style={{ transition: 'transform 0.2s ease', transform: hovered ? 'translateX(4px)' : 'translateX(0)' }}
          >
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <>
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');

        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; }

        .feature-card {
          background: white;
          border-radius: 20px;
          border: 1px solid #E2E8F0;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: #FF6B35;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .feature-card:hover::before { transform: scaleX(1); }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(4deg); }
        }

        @media (max-width: 768px) {
          .hero-split { grid-template-columns: 1fr !important; }
          .hero-img-col { min-height: 260px !important; }
        }
      `}</style>

      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FFFFFF' }}>

        {/* ─── HERO ─── */}
        <div
          className="hero-split"
          style={{
            paddingTop: '70px',
            display: 'grid',
            gridTemplateColumns: '55fr 45fr',
            minHeight: '68vh',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Left: Navy */}
          <div style={{
            background: '#1E3A5F',
            padding: 'clamp(48px, 8vw, 88px) clamp(28px, 5vw, 56px)',
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            {/* Decorative blobs */}
            <div style={{
              position: 'absolute', bottom: '60px', left: '40px',
              width: 'clamp(60px,10vw,90px)', height: 'clamp(60px,10vw,90px)',
              borderRadius: '50%',
              border: '3px solid rgba(255,107,53,0.3)',
              animation: 'float 4s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute', top: '80px', right: '50px',
              width: 'clamp(70px,12vw,110px)', height: 'clamp(70px,12vw,110px)',
              borderRadius: '18px',
              background: 'rgba(255,107,53,0.1)',
              transform: 'rotate(22deg)',
              animation: 'float 6s ease-in-out infinite',
            }} />

            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '50px',
              padding: '10px 20px',
              fontSize: 'clamp(12px,1.5vw,13px)',
              fontWeight: '600', color: 'white',
              width: 'fit-content', marginBottom: '24px',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF6B35' }} />
              Global Circle Edu
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 7vw, 72px)',
              fontWeight: '800',
              lineHeight: '0.95',
              color: 'white',
              marginBottom: '20px',
            }}>
              Our<br />
              <span style={{ color: '#FF6B35', fontStyle: 'italic' }}>Services</span>
            </h1>

            <p style={{
              fontSize: 'clamp(14px, 1.8vw, 16px)',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.75)',
              marginBottom: '36px',
              maxWidth: '460px',
            }}>
              From your first inquiry to graduation day — we partner with you at every single step of your journey to a medical degree abroad.
            </p>

            {/* Stats row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'clamp(10px, 2vw, 16px)',
              maxWidth: '400px',
            }}>
              {[
                { n: '9', label: 'Core Services' },
                { n: '6+', label: 'Years Support' },
                { n: '10K+', label: 'Students' },
              ].map((s) => (
                <div key={s.n} style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: 'clamp(12px, 2vw, 16px)',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: 'clamp(22px, 3.5vw, 28px)', fontWeight: '800', color: '#FF6B35' }}>{s.n}</div>
                  <div style={{ fontSize: 'clamp(10px, 1.3vw, 12px)', color: 'rgba(255,255,255,0.65)', fontWeight: '600' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="hero-img-col" style={{ position: 'relative', overflow: 'hidden', minHeight: '300px' }}>
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80"
              alt="Students studying abroad"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,58,95,0.2)' }} />
          </div>
        </div>

        {/* ─── INTRO STRIP ─── */}
        <div style={{ background: '#F8FAFC', padding: 'clamp(40px,6vw,60px) clamp(20px,5vw,40px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(255,107,53,0.1)',
              border: '1px solid rgba(255,107,53,0.2)',
              borderRadius: '50px',
              padding: '10px 20px',
              fontSize: 'clamp(12px,1.5vw,14px)',
              fontWeight: '600', color: '#FF6B35',
              marginBottom: '16px',
            }}>
              What We Offer
            </div>
            <h2 style={{
              fontSize: 'clamp(28px,4vw,44px)',
              fontWeight: '800', color: '#1E293B',
              marginBottom: '16px', lineHeight: '1.1',
            }}>
              Nine Pillars of{' '}
              <span style={{ color: '#FF6B35', fontStyle: 'italic' }}>Student Success</span>
            </h2>
            <p style={{
              fontSize: 'clamp(14px,2vw,17px)',
              color: '#64748B', maxWidth: '600px',
              margin: '0 auto', lineHeight: '1.7',
            }}>
              Every service is designed to remove friction from your path to a medical degree abroad. Click any card to explore in detail.
            </p>
          </div>
        </div>

        {/* ─── SERVICES GRID ─── */}
        <div style={{
          background: '#F8FAFC',
          padding: '0 clamp(20px,5vw,40px) clamp(60px,8vw,96px)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'clamp(16px, 2.5vw, 28px)',
          }}>
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onOpen={() => setActiveService(service)}
              />
            ))}
          </div>
        </div>

        {/* ─── CTA STRIP ─── */}
        <div style={{
          background: '#1E3A5F',
          padding: 'clamp(56px, 8vw, 88px) clamp(20px, 5vw, 40px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 80% at 50% 110%, rgba(255,107,53,0.22) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '50px',
              padding: '10px 20px',
              fontSize: 'clamp(12px, 1.5vw, 14px)',
              fontWeight: '600', color: 'rgba(255,255,255,0.8)',
              marginBottom: '20px',
            }}>
              Ready to Begin?
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4.5vw, 52px)',
              fontWeight: '800', color: 'white',
              marginBottom: '16px', lineHeight: '1.1',
            }}>
              Your Journey Starts With<br />
              <span style={{ color: '#FF6B35', fontStyle: 'italic' }}>One Conversation</span>
            </h2>
            <p style={{
              fontSize: 'clamp(14px, 2vw, 17px)',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '480px', margin: '0 auto 36px',
              lineHeight: '1.7',
            }}>
              Our counselors are available for a free consultation — virtually or in person. No pressure, just clarity.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                style={{
                  background: '#FF6B35',
                  color: 'white',
                  border: 'none',
                  padding: 'clamp(14px,2vw,18px) clamp(24px,3vw,36px)',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: 'clamp(14px, 1.6vw, 16px)',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(255,107,53,0.35)',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 14px 36px rgba(255,107,53,0.45)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(255,107,53,0.35)';
                }}
              >
                Book Free Consultation
              </button>
              <button
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.2)',
                  padding: 'clamp(14px,2vw,18px) clamp(24px,3vw,36px)',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: 'clamp(14px, 1.6vw, 16px)',
                  cursor: 'pointer',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#FF6B35';
                  (e.currentTarget as HTMLButtonElement).style.color = '#FF6B35';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.2)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'white';
                }}
              >
                View Destinations
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MODAL ─── */}
      {activeService && (
        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      )}

      <Footer />
    </>
  );
}