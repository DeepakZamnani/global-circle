
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUniqueCourses } from '@/services/dbServices';
import Navbar from './Navbar';

interface HeroProps {
  onCourseSelect: (course: string) => void;
  selectedCourse: string;
}

export default function Hero({ onCourseSelect, selectedCourse }: HeroProps) {
  const router = useRouter();
  const [courses, setCourses] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      const uniqueCourses = await getUniqueCourses();
      setCourses(uniqueCourses);
    };
    fetchCourses();
  }, []);

  const navigateToCountry = (countryName: string) => {
    router.push(`/destinations/${countryName.toLowerCase()}`);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FFFFFF',
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      overflow: 'hidden',
      position: 'relative'
    }}>
      
      {/* Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* Course Selection Dropdown */
        .course-selector {
          position: relative;
          width: 100%;
          max-width: 500px;
        }

        .course-button {
          width: 100%;
          background: white;
          border: 2px solid #1E3A5F;
          padding: 18px 24px;
          border-radius: 16px;
          font-weight: 700;
          font-size: 16px;
          color: #1E3A5F;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 20px rgba(30, 58, 95, 0.1);
        }

        .course-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(30, 58, 95, 0.15);
          border-color: #FF6B35;
        }

        .course-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          right: 0;
          background: white;
          border: 2px solid #E2E8F0;
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
          max-height: 400px;
          overflow-y: auto;
          z-index: 100;
          animation: dropdownSlide 0.3s ease;
        }

        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .course-option {
          padding: 16px 24px;
          cursor: pointer;
          transition: all 0.2s ease;
          border-bottom: 1px solid #F1F5F9;
          font-weight: 600;
          color: #1E3A5F;
        }

        .course-option:last-child {
          border-bottom: none;
        }

        .course-option:hover {
          background: #FFF7ED;
          color: #FF6B35;
          padding-left: 32px;
        }

        /* Stats Card */
        .stat-card {
          background: white;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 16px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          border-color: #CBD5E1;
        }

        /* Floating Badge */
        .badge {
          background: white;
          border: 1px solid #E2E8F0;
          border-radius: 50px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 13px;
          color: #1E3A5F;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }

        /* Country Button Styles */
        .country-badge-btn {
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }

        .country-badge-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 40px rgba(0,0,0,0.18);
        }

        .country-badge-btn:active {
          transform: scale(0.98);
        }

        /* Floating Animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(3deg); }
        }

        .floating {
          animation: float 4s ease-in-out infinite;
        }
        
        .floating-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }

        .floating-delay-1 {
          animation-delay: 0.5s;
        }
        
        .floating-delay-2 {
          animation-delay: 1s;
        }

        .floating-delay-3 {
          animation-delay: 1.5s;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          
          .hero-headline {
            font-size: 48px !important;
          }
          
          .hero-subtext {
            margin-left: auto;
            margin-right: auto;
          }
          
          .course-selector {
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-stats-row {
            justify-content: center !important;
          }
          
          .hero-image-container {
            height: 500px !important;
            margin: 0 auto;
            max-width: 450px;
          }
          
          .main-circle {
            width: 380px !important;
            height: 380px !important;
          }
          
          .student-image {
            width: 340px !important;
            height: 440px !important;
          }

          .teal-circle {
            width: 100px !important;
            height: 100px !important;
          }

          .navy-circle {
            width: 50px !important;
            height: 50px !important;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero-section {
            padding: 100px 20px 60px !important;
          }
          
          .hero-headline {
            font-size: 38px !important;
            letter-spacing: -1px !important;
          }
          
          .hero-subtext {
            font-size: 16px !important;
          }
          
          .course-selector {
            max-width: 100%;
          }
          
          .hero-stats-row {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: center !important;
          }
          
          .stat-card {
            width: 100% !important;
            max-width: 280px;
          }
          
          .hero-image-container {
            height: 380px !important;
          }
          
          .main-circle {
            width: 280px !important;
            height: 280px !important;
          }
          
          .student-image {
            width: 240px !important;
            height: 320px !important;
          }

          .teal-circle {
            width: 70px !important;
            height: 70px !important;
          }

          .navy-circle {
            width: 40px !important;
            height: 40px !important;
          }

          /* Spread badges far apart - frame the image */
          .badge-canada {
            top: 5% !important;
            left: -8% !important;
          }

          /* China Badge - Right */
          .badge-australia {
            top: 40% !important;
            right: -10% !important;
          }

          .badge-success {
            bottom: 10% !important;
            right: -8% !important;
          }

          .badge-countries {
            bottom: 2% !important;
            left: -5% !important;
          }
        }

        /* Extra Small Mobile */
        @media (max-width: 480px) {
          .hero-headline {
            font-size: 32px !important;
          }

          .hero-image-container {
            height: 380px !important;
          }

          .main-circle {
            width: 240px !important;
            height: 240px !important;
          }

          .student-image {
            width: 200px !important;
            height: 280px !important;
          }

          .teal-circle {
            width: 50px !important;
            height: 50px !important;
          }

          .navy-circle {
            width: 30px !important;
            height: 30px !important;
          }

          /* Spread badges even further apart on small screens */
          .badge-canada {
            top: 3% !important;
            left: -10% !important;
          }

          /* China Badge */
          .badge-australia {
            top: 38% !important;
            right: -12% !important;
          }

          .badge-australia span {
            display: none;
          }

          .badge-success {
            bottom: 8% !important;
            right: -10% !important;
          }

          .badge-countries {
            bottom: 0% !important;
            left: -8% !important;
          }
        }
      `}</style>
      
      <Navbar/>
      
      {/* Hero Section */}
      <section className="hero-section" style={{
        padding: '140px 40px 80px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          
          {/* Left Content */}
          <div>
            {/* Headline */}
            <h1 className="hero-headline" style={{
              fontSize: 'clamp(48px, 6vw, 72px)',
              fontWeight: '800',
              color: '#1E3A5F',
              lineHeight: '1.1',
              letterSpacing: '-2px',
              marginBottom: '24px'
            }}>
              Find Your Perfect
              <span style={{
                background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C61 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block'
              }}>Study Destination</span>
            </h1>

            {/* Subtext */}
            <p className="hero-subtext" style={{
              fontSize: '18px',
              color: '#64748B',
              lineHeight: '1.7',
              maxWidth: '520px',
              marginBottom: '40px',
              fontWeight: '500'
            }}>
              Choose your course and explore countries offering world-class education opportunities tailored to your dreams.
            </p>

            {/* Course Selection Dropdown */}
            <div className="course-selector" style={{ marginBottom: '32px' }}>
              <button 
                className="course-button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{selectedCourse || 'Select a Course'}</span>
                <span style={{ 
                  fontSize: '20px',
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}>▼</span>
              </button>

              {isDropdownOpen && (
                <div className="course-dropdown">
                  {courses.map((course) => (
                    <div
                      key={course}
                      className="course-option"
                      onClick={() => {
                        onCourseSelect(course);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {course}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Stats Row */}
            <div className="hero-stats-row" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div className="stat-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: '#ECFDF5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px'
                  }}>✓</div>
                  <div>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#1E3A5F' }}>98%</div>
                    <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500' }}>Visa Success</div>
                  </div>
                </div>
              </div>

              <div className="stat-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: '#FFF7ED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    color: '#FF6B35'
                  }}>→</div>
                  <div>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#1E3A5F' }}>500+</div>
                    <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500' }}>Students Placed</div>
                  </div>
                </div>
              </div>

              <div className="stat-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: '#F0FDFA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    color: '#2EC4B6'
                  }}>★</div>
                  <div>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#1E3A5F' }}>50+</div>
                    <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500' }}>Universities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="hero-image-container" style={{ position: 'relative', height: '600px' }}>
            
            {/* Main Orange Circle Background */}
            <div 
              className="main-circle"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '450px',
                height: '450px',
                borderRadius: '50%',
                background: '#FF6B35',
                zIndex: 1
              }} 
            />

            {/* Secondary Teal Circle */}
            <div 
              className="teal-circle floating-slow floating-delay-1"
              style={{
                position: 'absolute',
                bottom: '5%',
                left: '5%',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: '#2EC4B6',
                zIndex: 0
              }} 
            />

            {/* Small Navy Circle */}
            <div 
              className="navy-circle floating floating-delay-2"
              style={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#1E3A5F',
                zIndex: 0
              }} 
            />

            {/* Student Image */}
            <div 
              className="student-image"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 2,
                width: '400px',
                height: '500px'
              }}
            >
              <img 
                src="/student3.png"
                alt="Student"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  borderRadius: '0 0 200px 200px'
                }}
              />
            </div>

            {/* Floating Badge - Canada Button */}
            <button 
              onClick={() => navigateToCountry('canada')}
              className="badge floating-badge country-badge-btn floating floating-delay-1 badge-canada"
              style={{
                position: 'absolute',
                top: '15%',
                left: '0%',
                zIndex: 3
              }}
              aria-label="Study in Canada"
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#1E3A5F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '16px',
                fontWeight: '700'
              }}>CA</div>
              <span>Study in Canada</span>
            </button>

            {/* Floating Badge - China Button */}
            <button 
              onClick={() => navigateToCountry('china')}
              className="badge floating-badge country-badge-btn floating floating-delay-2 badge-australia"
              style={{
                position: 'absolute',
                top: '35%',
                right: '-5%',
                zIndex: 3
              }}
              aria-label="Study in China"
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#FF6B35',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '16px',
                fontWeight: '700'
              }}>CN</div>
              <span>China</span>
            </button>

            {/* Floating Badge - Success Rate (Non-clickable) */}
            <div 
              className="badge floating-badge floating floating-delay-3 badge-success"
              style={{
                position: 'absolute',
                bottom: '20%',
                right: '0%',
                zIndex: 3
              }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#ECFDF5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10B981',
                fontWeight: '700'
              }}>✓</div>
              <div>
                <div style={{ fontWeight: '700', color: '#1E3A5F' }}>98% Success</div>
                <div style={{ fontSize: '12px', color: '#64748B' }}>Visa Approval</div>
              </div>
            </div>

            {/* Floating Badge - Countries Button */}
            <button 
              onClick={() => router.push('/destinations/')}
              className="badge floating-badge country-badge-btn floating-slow badge-countries"
              style={{
                position: 'absolute',
                bottom: '8%',
                left: '10%',
                zIndex: 3,
                background: '#1E3A5F',
                color: 'white'
              }}
              aria-label="View all destinations"
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px'
              }}>+</div>
              <span style={{ fontWeight: '600', fontSize: '13px' }}>20+ Countries</span>
            </button>
          </div>
        </div>
      </section>

      {/* Angled Divider */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '80px',
        background: '#1E3A5F',
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'
      }} />
    </div>
  );
}