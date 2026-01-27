"use client";

import React from 'react';
import Link from 'next/link';

// ============================================
// FOOTER COMPONENT - Dark Navy Theme
// ============================================

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const destinations = [
    { name: 'Canada', slug: 'canada' },
    { name: 'China', slug: 'china' },
    { name: 'Russia', slug: 'russia' },
    { name: 'Uzbekistan', slug: 'uzbekistan' },
    { name: 'Germany', slug: 'germany' },
    { name: 'Ireland', slug: 'ireland' },
  ];

  const programs = [
    { name: 'Certificate Programs', slug: 'certificate' },
    { name: 'Diploma Programs', slug: 'diploma' },
    { name: 'Degree Programs', slug: 'degree' },
    { name: 'Masters & MBA', slug: 'masters' },
  ];

  const company = [
    { name: 'About Us', slug: 'about' },
    { name: 'Our Services', slug: 'services' },
    { name: 'Success Stories', slug: 'testimonials' },
    { name: 'Contact', slug: 'contact' },
  ];

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #1E3A5F 0%, #0F2744 100%)',
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      color: 'white'
    }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .footer-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 15px;
          transition: all 0.3s ease;
          display: block;
          padding: 6px 0;
        }

        .footer-link:hover {
          color: #FF6B35;
          padding-left: 8px;
        }

        .footer-heading {
          font-size: 14px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 20px;
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cta-box {
          background: rgba(255, 107, 53, 0.15);
          border: 1px solid rgba(255, 107, 53, 0.3);
          border-radius: 20px;
          padding: 32px;
        }

        .cta-btn {
          background: #FF6B35;
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.4);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }

          .footer-cta-section {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            padding: 60px 20px !important;
          }

          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .footer-cta-section {
            grid-column: span 1;
          }

          .footer-bottom {
            flex-direction: column !important;
            gap: 16px !important;
            text-align: center;
          }
        }
      `}</style>

      {/* Main Footer Content */}
      <div 
        className="footer-main"
        style={{
          padding: '80px 48px 60px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}
      >
        <div 
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1.5fr',
            gap: '48px'
          }}
        >
          
          {/* Company Info */}
          <div>
            {/* Logo */}
            <div style={{ marginBottom: '24px' }}>
              <img 
                src="/logo.png"
                alt="Global Circle Edu"
                style={{
                  height: '48px',
                  width: 'auto'
                }}
                onError={(e) => {
                  // Fallback if white logo doesn't exist
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.setAttribute('style', 'display: block');
                }}
              />
              <div style={{ display: 'none', fontSize: '24px', fontWeight: '800' }}>
                Global Circle <span style={{ color: '#FF6B35' }}>Edu</span>
              </div>
            </div>

            <p style={{
              fontSize: '15px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '28px'
            }}>
              Your trusted partner for international education. Guiding students to top universities across 26 countries worldwide.
            </p>

            {/* Office Hours */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <div style={{
                fontSize: '12px',
                fontWeight: '700',
                color: 'rgba(255, 255, 255, 0.5)',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}>
                Office Hours
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>
                Mon - Fri: 9:00 AM - 6:00 PM
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>
                Saturday: 10:00 AM - 2:00 PM
              </div>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="footer-heading">Destinations</h4>
            {destinations.map((dest) => (
              <Link 
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="footer-link"
              >
                {dest.name}
              </Link>
            ))}
          </div>

          {/* Programs */}
          <div>
            <h4 className="footer-heading">Programs</h4>
            {programs.map((prog) => (
              <Link 
                key={prog.slug}
                href={`/programs#${prog.slug}`}
                className="footer-link"
              >
                {prog.name}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 className="footer-heading">Company</h4>
            {company.map((item) => (
              <Link 
                key={item.slug}
                href={`/${item.slug}`}
                className="footer-link"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact & CTA */}
          <div className="footer-cta-section">
            <h4 className="footer-heading">Get In Touch</h4>
            
            {/* Address */}
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>Address</div>
                <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)', lineHeight: '1.5' }}>
                  31143-001, FZCO Business Park,<br />
                  DDP, Dubai, UAE
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>Phone</div>
                <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)' }}>+971 55 550 8943</div>
                <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)' }}>+91 8336932235</div>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>Email</div>
                <a 
                  href="mailto:info@globalcircleedu.com"
                  style={{ 
                    fontSize: '15px', 
                    color: '#FF6B35',
                    textDecoration: 'none'
                  }}
                >
                  info@globalcircleedu.com
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="#" className="cta-btn" style={{ marginTop: '8px' }}>
              Book Free Consultation
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '24px 48px'
      }}>
        <div 
          className="footer-bottom"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.5)'
          }}>
            © {currentYear} Global Circle Edu. All rights reserved.
          </div>

          <div style={{
            display: 'flex',
            gap: '32px'
          }}>
            <Link 
              href="/privacy"
              style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms"
              style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}