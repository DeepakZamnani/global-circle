"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .nav-link {
          position: relative;
          color: #1E293B;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          padding: 8px 0;
          transition: color 0.3s ease;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: #FF6B35;
          border-radius: 50%;
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .nav-link:hover {
          color: #FF6B35;
        }
        
        .nav-link:hover::before {
          opacity: 1;
          bottom: -8px;
        }

        .nav-dropdown {
          position: relative;
        }

        .nav-dropdown-content {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 16px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          min-width: 200px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 1001;
          padding: 8px;
        }

        .nav-dropdown:hover .nav-dropdown-content {
          opacity: 1;
          visibility: visible;
          margin-top: 8px;
        }

        .nav-dropdown-item {
          padding: 12px 16px;
          color: #1E293B;
          text-decoration: none;
          display: block;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s ease;
          border-radius: 8px;
          white-space: nowrap;
        }

        .nav-dropdown-item:hover {
          background: #FFF5F2;
          color: #FF6B35;
        }

        .nav-btn-primary {
          background: #FF6B35;
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
          text-decoration: none;
        }
        
        .nav-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(255, 107, 53, 0.4);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          background: white;
          padding: 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          z-index: 999;
        }

        .mobile-menu.open {
          display: block;
        }

        .mobile-menu a {
          display: block;
          padding: 16px 0;
          color: #1E293B;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          border-bottom: 1px solid #E2E8F0;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: flex !important;
          }

          .nav-btn-primary {
            padding: 10px 16px !important;
            font-size: 13px !important;
          }

          .navbar {
            padding: 12px 20px !important;
          }
        }
      `}</style>

      <nav 
        className="navbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '16px 48px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #F1F5F9',
          fontFamily: '"Plus Jakarta Sans", sans-serif'
        }}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src="/logo.png"
              alt="Global Circle Edu"
              style={{
                height: '48px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Nav Links - Desktop */}
          <div className="nav-links" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            <Link href="/destinations" className="nav-link">Destinations</Link>
        
            {/* <div className="nav-dropdown">
              <span className="nav-link" style={{ cursor: 'pointer' }}>Contact</span>
              <div className="nav-dropdown-content"> */}
                <Link href="/contact" className="nav-dropdown-item">Contact</Link>
                <Link href="/partner-with-us" className="nav-dropdown-item">Partner with Us</Link>
              {/* </div>
            </div> */}
          </div>

          {/* Right Side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                flexDirection: 'column',
                gap: '5px',
                padding: '8px'
              }}
            >
              <span style={{ 
                width: '24px', 
                height: '2px', 
                background: '#1E3A5F', 
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
              }} />
              <span style={{ 
                width: '24px', 
                height: '2px', 
                background: '#1E3A5F', 
                borderRadius: '2px',
                opacity: mobileMenuOpen ? 0 : 1,
                transition: 'all 0.3s ease'
              }} />
              <span style={{ 
                width: '24px', 
                height: '2px', 
                background: '#1E3A5F', 
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
              }} />
            </button>

            {/* CTA Button */}
            <Link href="#" className="nav-btn-primary">
              Let's Talk
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link href="/destinations" onClick={() => setMobileMenuOpen(false)}>Destinations</Link>
        {/* <Link href="/programs" onClick={() => setMobileMenuOpen(false)}>Programs</Link> */}
        <Link href="/jobs" onClick={() => setMobileMenuOpen(false)}>Jobs</Link>
        <Link href="/forex" onClick={() => setMobileMenuOpen(false)}>Forex</Link>
        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        <Link href="/partner-with-us" onClick={() => setMobileMenuOpen(false)}>Partner with Us</Link>
      </div>
    </>
  );
}