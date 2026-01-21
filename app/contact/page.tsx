"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

// ============================================
// CONTACT PAGE - Compact with Location Box
// ============================================

export default function ContactPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
        }

        .contact-card {
          background: white;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(226, 232, 240, 0.8);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.12);
        }

        .icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 107, 53, 0.05) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .decorative-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.6;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .location-box {
          background: white;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(226, 232, 240, 0.6);
        }

        .location-box iframe {
          width: 100%;
          height: 280px;
          border: none;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .main-section {
            padding: 60px 24px !important;
          }
        }

        @media (max-width: 640px) {
          .contact-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Navbar />

      <div style={{
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        background: '#FFFFFF',
        minHeight: '100vh',
        paddingTop: '50px',
        position: 'relative',
        overflow: 'hidden'
      }}>

        {/* Decorative Background Shapes */}
        <div className="decorative-shape" style={{
          width: '500px',
          height: '500px',
          background: 'linear-gradient(135deg, rgba(30, 58, 95, 0.03) 0%, rgba(255, 107, 53, 0.03) 100%)',
          top: '-250px',
          right: '-250px',
          animationDelay: '0s'
        }} />

        <div className="decorative-shape" style={{
          width: '400px',
          height: '400px',
          background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.04) 0%, rgba(30, 58, 95, 0.02) 100%)',
          bottom: '-200px',
          left: '-200px',
          animationDelay: '2s'
        }} />

        {/* Main Content Section */}
        <div className="main-section" style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '60px 48px'
        }}>
          <div className="contact-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start'
          }}>

            {/* Left Side - Content */}
            <div>
              <div style={{
                display: 'inline-block',
                background: 'rgba(255, 107, 53, 0.1)',
                borderRadius: '12px',
                padding: '12px 20px',
                marginBottom: '20px'
              }}>
                <span style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#FF6B35',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  Get in Touch
                </span>
              </div>

              <h2 style={{
                fontSize: '40px',
                fontWeight: '800',
                lineHeight: '1.3',
                color: '#1E293B',
                marginBottom: '20px'
              }}>
                Ready to Achieve Your<br />
                Global Education Goals?
              </h2>

              <p style={{
                fontSize: '17px',
                lineHeight: '1.8',
                color: '#64748B',
                marginBottom: '32px'
              }}>
                Visit our office or connect with our expert counselors for personalized 
                guidance on your study abroad journey.
              </p>

              {/* Benefits List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {[
                  { icon: '✓', text: 'Free consultation with expert counselors' },
                  { icon: '✓', text: 'Personalized university recommendations' },
                  { icon: '✓', text: 'End-to-end visa assistance' },
                  { icon: '✓', text: 'Scholarship guidance & application support' }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px'
                  }}>
                    <div style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '13px',
                      fontWeight: '800',
                      flexShrink: 0
                    }}>
                      {item.icon}
                    </div>
                    <span style={{
                      fontSize: '15px',
                      color: '#1E293B',
                      fontWeight: '500'
                    }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div style={{
                padding: '20px',
                background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
                borderRadius: '16px',
                border: '1px solid #E2E8F0'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '6px'
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#FF6B35" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#FF6B35" strokeWidth="2" fill="none" />
                  </svg>
                  <span style={{
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#1E293B'
                  }}>
                    Trusted by 10,000+ Students
                  </span>
                </div>
                <p style={{
                  fontSize: '13px',
                  color: '#64748B',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Join thousands of successful students who achieved their dream of studying abroad.
                </p>
              </div>
            </div>

            {/* Right Side - Location Box */}
            <div className="location-box">
              {/* Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.9837!2d55.1528!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMDknMTAuMSJF!5e0!3m2!1sen!2sae!4v1699000000000!5m2!1sen!2sae"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />

              {/* Location Details */}
              <div style={{ padding: '28px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 107, 53, 0.05) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#1E293B',
                      marginBottom: '6px'
                    }}>
                      Dubai Office
                    </h3>
                    <p style={{
                      fontSize: '15px',
                      color: '#64748B',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      31143-001, FZCO Business Park,<br />
                      DDP, Dubai, UAE
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=FZCO+Business+Park+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    width: '100%',
                    background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                    color: 'white',
                    padding: '14px 24px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: '15px',
                    boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Get Directions
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingBottom: '50px',
          paddingLeft: '48px',
          paddingRight: '48px',
          position: 'relative',
          zIndex: 2
        }}>
          <div className="contact-cards-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>

            {/* Phone Card */}
            <div className="contact-card">
              <div className="icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#1E293B',
                marginBottom: '12px'
              }}>
                Call Us
              </h3>
              <a href="tel:+971555508943" style={{
                display: 'block',
                fontSize: '15px',
                color: '#FF6B35',
                textDecoration: 'none',
                fontWeight: '600',
                marginBottom: '4px'
              }}>
                +971 55 550 8943
              </a>
              <a href="tel:+918336932235" style={{
                display: 'block',
                fontSize: '15px',
                color: '#FF6B35',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                +91 8336932235
              </a>
              <p style={{
                fontSize: '14px',
                color: '#64748B',
                marginTop: '12px',
                lineHeight: '1.6'
              }}>
                Mon-Fri: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM
              </p>
            </div>

            {/* Email Card */}
            <div className="contact-card">
              <div className="icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#1E293B',
                marginBottom: '12px'
              }}>
                Email Us
              </h3>
              <a href="mailto:info@globalcircleedu.com" style={{
                display: 'block',
                fontSize: '15px',
                color: '#FF6B35',
                textDecoration: 'none',
                fontWeight: '600',
                marginBottom: '12px'
              }}>
                info@globalcircleedu.com
              </a>
              <p style={{
                fontSize: '14px',
                color: '#64748B',
                lineHeight: '1.6'
              }}>
                Get a response within 24 hours. We're here to answer all your queries.
              </p>
            </div>

            {/* WhatsApp Card */}
            <div className="contact-card">
              <div className="icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF6B35">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#1E293B',
                marginBottom: '12px'
              }}>
                WhatsApp
              </h3>
              <a href="https://wa.me/971555508943" target="_blank" rel="noopener noreferrer" style={{
                display: 'block',
                fontSize: '15px',
                color: '#FF6B35',
                textDecoration: 'none',
                fontWeight: '600',
                marginBottom: '12px'
              }}>
                Chat with us
              </a>
              <p style={{
                fontSize: '14px',
                color: '#64748B',
                lineHeight: '1.6'
              }}>
                Quick responses during business hours. Send us a message anytime!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #1E3A5F 0%, #0F2744 100%)',
          padding: '60px 48px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{
              fontSize: '28px',
              fontWeight: '800',
              color: 'white',
              marginBottom: '14px',
              lineHeight: '1.3'
            }}>
              Prefer to Talk Directly?
            </h3>
            <p style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '28px',
              lineHeight: '1.7'
            }}>
              Our counselors are available to answer your questions right now.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <a
                href="tel:+971555508943"
                className="cta-btn"
                style={{
                  background: '#FF6B35',
                  color: 'white',
                  boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now
              </a>

              <a
                href="https://wa.me/971555508943"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
                style={{
                  background: '#25D366',
                  color: 'white',
                  boxShadow: '0 8px 24px rgba(37, 211, 102, 0.3)'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}