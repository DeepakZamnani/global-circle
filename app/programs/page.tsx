"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProgramsSection() {
  const [selectedTab, setSelectedTab] = useState(0);

  const programs = [
    {
      id: 0,
      number: '01',
      title: 'Certificate',
      shortDesc: 'Quick skills for fast career entry',
      duration: '3-12 months',
      countries: '25+',
      fullDescription: 'Short-term specialized programs designed for skill development and career advancement. These programs focus on practical knowledge and are ideal for professionals looking to upskill or students seeking quick entry into the workforce.',
      subtypes: ['Graduate Certificate', 'Undergraduate Certificate'],
      fields: ['Business', 'Technology', 'Arts', 'Healthcare'],
      entryRequirements: 'Typically require high school completion or equivalent; some may need work experience.',
      accreditation: 'Accredited by partner universities and recognized internationally for career and further education pathways.',
      postStudy: 'Skill enhancement leading to job placements or further studies; post-study work visas available in select countries.',
      visaSupport: 'Full visa assistance provided, including application guidance and immigration support.',
      topDestinations: ['France', 'Spain', 'Canada', 'Australia', 'Ireland', 'Germany']
    },
    {
      id: 1,
      number: '02',
      title: 'Diploma',
      shortDesc: 'Industry-ready training programs',
      duration: '1-2 years',
      countries: '30+',
      fullDescription: 'Comprehensive diploma programs offering practical skills and in-depth industry knowledge. These are suitable for students aiming for hands-on training and quick career entry with strong employment outcomes.',
      subtypes: ['Graduate Diploma', 'Undergraduate Diploma'],
      fields: ['Engineering', 'Hospitality', 'Health Sciences', 'Creative Industries'],
      entryRequirements: 'High school diploma or equivalent; language proficiency tests may be required.',
      accreditation: 'Accredited through partnerships with global universities, ensuring quality and transferability of credits.',
      postStudy: 'Pathways to degree programs or employment; post-graduation work permits in countries like Canada and Australia.',
      visaSupport: 'Expert guidance through visa applications to ensure smooth transitions.',
      topDestinations: ['Canada', 'Australia', 'Germany', 'France', 'Ireland', 'Netherlands']
    },
    {
      id: 2,
      number: '03',
      title: 'Degree',
      shortDesc: 'Full academic programs worldwide',
      duration: '2-5 years',
      countries: '40+',
      fullDescription: 'Comprehensive academic programs ranging from foundational to advanced levels, designed to build expertise and open global career opportunities. These programs emphasize both theoretical and practical learning.',
      subtypes: ["Associate's Degree", "Bachelor's Degree", "Master's Degree", "Doctorate/Ph.D."],
      fields: ['Business', 'Engineering', 'Sciences', 'Fashion', 'Culinary Arts', 'Medicine'],
      entryRequirements: 'Varies by level - high school for undergrad, bachelor\'s for master\'s; includes GPA, language tests (IELTS/TOEFL), and sometimes entrance exams.',
      accreditation: 'Offered through accredited partner universities, with international recognition for quality education standards.',
      postStudy: 'Post-study work options, permanent residency pathways in countries like Canada and Australia; career building in multicultural environments.',
      visaSupport: 'Complete assistance with student visas and immigration procedures.',
      topDestinations: ['Canada', 'Australia', 'UK', 'Germany', 'France', 'USA', 'Ireland']
    }
  ];

  const activeProgram = programs[selectedTab];

  return (
    <>
      <Navbar />
      <section style={{
        minHeight: '100vh',
        paddingTop: '50px',
        background: 'white',
        fontFamily: '"Plus Jakarta Sans", sans-serif',
      }}>
        
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

          .program-tab {
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
          }

          .program-tab::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
            height: 3px;
            background: #FF6B35;
            transform: scaleX(0);
            transition: transform 0.3s ease;
          }

          .program-tab.active::after {
            transform: scaleX(1);
          }

          .program-tab:hover {
            opacity: 0.7;
          }

          .info-section {
            padding: 32px 0;
            border-bottom: 1px solid rgba(30, 58, 95, 0.1);
          }

          .info-section:last-child {
            border-bottom: none;
          }

          .pill-tag {
            display: inline-block;
            padding: 8px 20px;
            margin: 6px 8px 6px 0;
            background: rgba(30, 58, 95, 0.05);
            color: #1E3A5F;
            border-radius: 50px;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.2s ease;
          }

          .pill-tag:hover {
            background: rgba(30, 58, 95, 0.1);
          }

          .destination-pill {
            display: inline-block;
            padding: 8px 20px;
            margin: 6px 8px 6px 0;
            background: rgba(255, 107, 53, 0.1);
            color: #FF6B35;
            border-radius: 50px;
            font-size: 14px;
            font-weight: 600;
          }

          .cta-button {
            padding: 16px 36px;
            background: #FF6B35;
            color: white;
            border: none;
            border-radius: 50px;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(255, 107, 53, 0.3);
          }

          .cta-button-outline {
            background: white;
            color: #1E3A5F;
            border: 2px solid #1E3A5F;
          }

          .cta-button-outline:hover {
            background: #1E3A5F;
            color: white;
            box-shadow: 0 8px 24px rgba(30, 58, 95, 0.2);
          }

          @media (max-width: 768px) {
            .header-section {
              padding: 60px 24px 40px !important;
            }

            .program-tabs {
              gap: 0 !important;
              padding: 0 24px !important;
              justify-content: center !important;
            }

            .program-tab {
              padding: 20px 16px !important;
              flex: 0 1 auto !important;
              text-align: center !important;
            }

            .program-tab::after {
              left: 50% !important;
              transform: translateX(-50%) scaleX(0) !important;
              width: 40px !important;
            }

            .program-tab.active::after {
              transform: translateX(-50%) scaleX(1) !important;
            }

            .program-tab > div:nth-child(1) {
              font-size: 10px !important;
            }

            .program-tab > div:nth-child(2) {
              font-size: 16px !important;
            }

            .program-tab > div:nth-child(3) {
              font-size: 11px !important;
            }

            .content-wrapper {
              padding: 40px 24px !important;
            }

            .stats-row {
              flex-direction: column !important;
              gap: 16px !important;
            }

            .cta-buttons {
              flex-direction: column !important;
            }

            .cta-button {
              width: 100%;
              justify-content: center;
            }
          }
        `}</style>

        {/* Header Section - Dark Blue */}
        <div className="header-section" style={{
          background: '#1E3A5F',
          padding: '80px 48px 60px',
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <div style={{
                width: '50px',
                height: '4px',
                background: '#FF6B35',
                borderRadius: '2px'
              }} />
              <span style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#FF6B35',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}>
                Study Abroad Programs
              </span>
            </div>
            
            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: '800',
              color: 'white',
              marginBottom: '16px',
              lineHeight: '1.1'
            }}>
              Your Path to Global Education
            </h1>
            
            <p style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '700px',
              lineHeight: '1.6'
            }}>
              Choose from our comprehensive range of international study programs designed to match your academic goals and career aspirations.
            </p>
          </div>
        </div>

        {/* Program Tabs */}
        <div style={{
          borderBottom: '2px solid rgba(30, 58, 95, 0.1)',
          background: 'white'
        }}>
          <div className="program-tabs" style={{
            display: 'flex',
            gap: '0',
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 48px'
          }}>
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`program-tab ${selectedTab === index ? 'active' : ''}`}
                onClick={() => setSelectedTab(index)}
                style={{
                  flex: '1',
                  padding: '24px 32px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  color: selectedTab === index ? '#FF6B35' : 'rgba(30, 58, 95, 0.4)',
                  letterSpacing: '1.5px',
                  marginBottom: '8px'
                }}>
                  {program.number}
                </div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: selectedTab === index ? '#1E3A5F' : 'rgba(30, 58, 95, 0.5)',
                  marginBottom: '4px'
                }}>
                  {program.title}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: 'rgba(30, 58, 95, 0.5)',
                  fontWeight: '500'
                }}>
                  {program.shortDesc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="content-wrapper" style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '60px 48px 80px'
        }}>
          
          {/* Stats Row */}
          <div className="stats-row" style={{
            display: 'flex',
            gap: '48px',
            marginBottom: '48px'
          }}>
            <div>
              <div style={{
                fontSize: '14px',
                fontWeight: '700',
                color: 'rgba(30, 58, 95, 0.5)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '8px'
              }}>
                Duration
              </div>
              <div style={{
                fontSize: '28px',
                fontWeight: '800',
                color: '#1E3A5F'
              }}>
                {activeProgram.duration}
              </div>
            </div>
            
           
          </div>

          {/* Description */}
          <div className="info-section">
            <h2 style={{
              fontSize: '14px',
              fontWeight: '700',
              color: 'rgba(30, 58, 95, 0.5)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Overview
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: 'rgba(30, 58, 95, 0.8)',
              maxWidth: '900px'
            }}>
              {activeProgram.fullDescription}
            </p>
          </div>

          {/* Program Types */}
          <div className="info-section">
            <h2 style={{
              fontSize: '14px',
              fontWeight: '700',
              color: 'rgba(30, 58, 95, 0.5)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Program Types Available
            </h2>
            <div>
              {activeProgram.subtypes.map((subtype, idx) => (
                <span key={idx} className="pill-tag">
                  {subtype}
                </span>
              ))}
            </div>
          </div>

          {/* Fields of Study */}
          <div className="info-section">
            <h2 style={{
              fontSize: '14px',
              fontWeight: '700',
              color: 'rgba(30, 58, 95, 0.5)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Fields of Study
            </h2>
            <div>
              {activeProgram.fields.map((field, idx) => (
                <span key={idx} className="pill-tag">
                  {field}
                </span>
              ))}
            </div>
          </div>

          {/* Entry Requirements */}
          <div className="info-section">
            <h2 style={{
              fontSize: '14px',
              fontWeight: '700',
              color: 'rgba(30, 58, 95, 0.5)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Entry Requirements
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: 'rgba(30, 58, 95, 0.8)',
              maxWidth: '900px'
            }}>
              {activeProgram.entryRequirements}
            </p>
          </div>

          {/* Accreditation */}
          <div className="info-section">
            <h2 style={{
              fontSize: '14px',
              fontWeight: '700',
              color: 'rgba(30, 58, 95, 0.5)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Accreditation
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: 'rgba(30, 58, 95, 0.8)',
              maxWidth: '900px'
            }}>
              {activeProgram.accreditation}
            </p>
          </div>

          {/* Post-Study Opportunities */}
          <div className="info-section">
            <h2 style={{
              fontSize: '14px',
              fontWeight: '700',
              color: 'rgba(30, 58, 95, 0.5)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Post-Study Opportunities
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: 'rgba(30, 58, 95, 0.8)',
              maxWidth: '900px'
            }}>
              {activeProgram.postStudy}
            </p>
          </div>

          {/* Visa Support */}
          <div className="info-section">
            <h2 style={{
              fontSize: '14px',
              fontWeight: '700',
              color: 'rgba(30, 58, 95, 0.5)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Visa Support
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: 'rgba(30, 58, 95, 0.8)',
              maxWidth: '900px'
            }}>
              {activeProgram.visaSupport}
            </p>
          </div>

          {/* Top Destinations */}
          <div className="info-section">
            <h2 style={{
              fontSize: '14px',
              fontWeight: '700',
              color: 'rgba(30, 58, 95, 0.5)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Top Destinations
            </h2>
            <div>
              {activeProgram.topDestinations.map((destination, idx) => (
                <span key={idx} className="destination-pill">
                  {destination}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons" style={{
            display: 'flex',
            gap: '16px',
            marginTop: '56px',
            flexWrap: 'wrap'
          }}>
            <button className="cta-button">
              Apply Now
              <span>→</span>
            </button>
            <button className="cta-button cta-button-outline">
              Book Free Consultation
              <span>💬</span>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}