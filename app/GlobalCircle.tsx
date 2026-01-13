"use client"; 
import React, { useState, useEffect } from 'react';

// GLOBAL CIRCLE EDU - Premium Study Abroad Website
// Aesthetic: Luxury Minimal + Bold Typography + Sophisticated Motion
// Inspired by: Apple, Stripe, Linear - Clean, Premium, Memorable

export default function GlobalCircleEduDesign() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeDestination, setActiveDestination] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const destinations = [
    { name: 'Canada', flag: '🍁', tagline: 'Where Dreams Take Flight', color: '#DC2626' },
    { name: 'Australia', flag: '🦘', tagline: 'Build Your Global Career', color: '#2563EB' },
    { name: 'France', flag: '🗼', tagline: 'Excellence Meets Culture', color: '#7C3AED' },
    { name: 'Spain', flag: '🏰', tagline: 'Vibrant Learning Journey', color: '#EA580C' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FAFAFA',
      fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
      overflow: 'hidden'
    }}>
      
      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .gradient-text {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        
        .fade-up {
          opacity: 0;
          animation: fadeUp 0.8s ease forwards;
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        .nav-link {
          position: relative;
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: color 0.3s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #1a1a2e, #0f3460);
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: #1a1a2e; }
        .nav-link:hover::after { width: 100%; }
        
        .btn-primary {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(26, 26, 46, 0.3);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(26, 26, 46, 0.4);
        }
        
        .btn-secondary {
          background: transparent;
          color: #1a1a2e;
          border: 2px solid #1a1a2e;
          padding: 12px 30px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-secondary:hover {
          background: #1a1a2e;
          color: white;
        }
        
        .destination-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .destination-card:hover {
          transform: scale(1.02);
        }
        .destination-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.8) 100%);
          z-index: 1;
        }
        
        .service-card {
          background: white;
          border-radius: 24px;
          padding: 40px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #E5E7EB;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #1a1a2e, #0f3460);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .service-card:hover::before {
          transform: scaleX(1);
        }
        .service-card:hover {
          box-shadow: 0 25px 50px rgba(0,0,0,0.1);
          transform: translateY(-5px);
        }
        
        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 56px;
          font-weight: 700;
          background: linear-gradient(135deg, #1a1a2e, #0f3460);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .input-field {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #E5E7EB;
          border-radius: 12px;
          font-size: 15px;
          transition: all 0.3s ease;
          background: white;
        }
        .input-field:focus {
          outline: none;
          border-color: #1a1a2e;
          box-shadow: 0 0 0 4px rgba(26, 26, 46, 0.1);
        }
        
        .testimonial-card {
          background: white;
          border-radius: 24px;
          padding: 40px;
          position: relative;
        }
        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: 20px;
          left: 30px;
          font-size: 120px;
          font-family: 'Playfair Display', serif;
          color: #E5E7EB;
          line-height: 1;
        }
      `}</style>

      {/* ============================================ */}
      {/* NAVIGATION */}
      {/* ============================================ */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '20px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(250, 250, 250, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'all 0.6s ease'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ color: 'white', fontSize: '20px', fontWeight: '700' }}>G</span>
          </div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '18px', color: '#1a1a2e', letterSpacing: '-0.5px' }}>
              Global Circle
            </div>
            <div style={{ fontSize: '11px', color: '#6B7280', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Education
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <div style={{ display: 'flex', gap: '40px' }}>
          <a href="#" className="nav-link">Destinations</a>
          <a href="#" className="nav-link">Services</a>
          <a href="#" className="nav-link">Universities</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Blog</a>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a href="#" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500', fontSize: '15px' }}>
            Login
          </a>
          <button className="btn-primary">Book Free Call</button>
        </div>
      </nav>

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 60px 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(15, 52, 96, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }} className="floating" />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }} />

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          alignItems: 'center'
        }}>
          {/* Left - Text Content */}
          <div>
            {/* Badge */}
            <div className={`fade-up ${isLoaded ? '' : ''}`} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(26, 26, 46, 0.05)',
              padding: '8px 16px',
              borderRadius: '50px',
              marginBottom: '32px',
              animationDelay: '0.1s'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10B981',
                animation: 'pulse-ring 2s ease infinite'
              }} />
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#374151' }}>
                Trusted by 500+ Students Globally
              </span>
            </div>

            {/* Headline */}
            <h1 className="fade-up stagger-2" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '72px',
              fontWeight: '600',
              lineHeight: '1.1',
              color: '#1a1a2e',
              marginBottom: '24px',
              letterSpacing: '-2px'
            }}>
              Your Path to
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #0f3460, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Global Success</span>
            </h1>

            {/* Subheadline */}
            <p className="fade-up stagger-3" style={{
              fontSize: '20px',
              lineHeight: '1.7',
              color: '#6B7280',
              marginBottom: '40px',
              maxWidth: '500px'
            }}>
              Expert guidance for studying in Canada, Australia, France & Spain. 
              We transform your international education dreams into reality.
            </p>

            {/* CTAs */}
            <div className="fade-up stagger-4" style={{ display: 'flex', gap: '16px', marginBottom: '60px' }}>
              <button className="btn-primary" style={{ padding: '18px 40px', fontSize: '16px' }}>
                Start Your Journey →
              </button>
              <button className="btn-secondary">
                Watch Our Story
              </button>
            </div>

            {/* Stats Row */}
            <div className="fade-up stagger-5" style={{
              display: 'flex',
              gap: '48px',
              paddingTop: '32px',
              borderTop: '1px solid #E5E7EB'
            }}>
              {[
                { number: '98%', label: 'Visa Success' },
                { number: '500+', label: 'Students Placed' },
                { number: '50+', label: 'Universities' }
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '36px',
                    fontWeight: '700',
                    color: '#1a1a2e'
                  }}>{stat.number}</div>
                  <div style={{ fontSize: '14px', color: '#6B7280', marginTop: '4px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Hero Visual */}
          <div style={{ position: 'relative' }}>
            {/* Main Image Card */}
            <div className="fade-up stagger-3" style={{
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 40px 80px rgba(0,0,0,0.15)',
              position: 'relative'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                alt="Students"
                style={{ width: '100%', height: '500px', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                padding: '40px 30px 30px'
              }}>
                <div style={{ color: 'white', fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>
                  Featured Destination
                </div>
                <div style={{ color: 'white', fontSize: '24px', fontWeight: '600' }}>
                  🍁 Study in Canada
                </div>
              </div>
            </div>

            {/* Floating Card 1 - Top Right */}
            <div className="glass-card floating fade-up stagger-4" style={{
              position: 'absolute',
              top: '-20px',
              right: '-30px',
              padding: '20px 24px',
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              animationDelay: '0s'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #10B981, #059669)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px'
                }}>✓</div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '18px', color: '#1a1a2e' }}>98%</div>
                  <div style={{ fontSize: '13px', color: '#6B7280' }}>Visa Success Rate</div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 - Bottom Left */}
            <div className="glass-card floating fade-up stagger-5" style={{
              position: 'absolute',
              bottom: '60px',
              left: '-40px',
              padding: '20px 24px',
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              animationDelay: '0.5s'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex' }}>
                  {['🇨🇦', '🇦🇺', '🇫🇷', '🇪🇸'].map((flag, i) => (
                    <div key={i} style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      marginLeft: i > 0 ? '-10px' : 0,
                      border: '2px solid white',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}>{flag}</div>
                  ))}
                </div>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '14px', color: '#1a1a2e' }}>4 Countries</div>
                  <div style={{ fontSize: '12px', color: '#6B7280' }}>Premium Destinations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* DESTINATIONS SECTION */}
      {/* ============================================ */}
      <section style={{
        padding: '120px 60px',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: '600',
              color: '#7C3AED',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Destinations
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '52px',
              fontWeight: '600',
              color: '#1a1a2e',
              marginBottom: '20px',
              letterSpacing: '-1px'
            }}>
              Choose Your Future
            </h2>
            <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>
              World-class education awaits in these premier destinations
            </p>
          </div>

          {/* Destination Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="destination-card hover-lift"
                style={{
                  height: '420px',
                  background: `url(https://images.unsplash.com/photo-${
                    index === 0 ? '1517935706615-2717063c2225' :
                    index === 1 ? '1506973035872-a4ec16b8e8d9' :
                    index === 2 ? '1502602898657-3e91760cbb34' :
                    '1543783207-ec64e4d95325'
                  }?w=600&q=80) center/cover`
                }}
                onMouseEnter={() => setActiveDestination(index)}
              >
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '30px',
                  zIndex: 2
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>{dest.flag}</div>
                  <h3 style={{
                    color: 'white',
                    fontSize: '28px',
                    fontWeight: '700',
                    marginBottom: '8px'
                  }}>{dest.name}</h3>
                  <p style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '14px',
                    marginBottom: '20px'
                  }}>{dest.tagline}</p>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}>
                    Explore <span style={{ fontSize: '18px' }}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICES SECTION */}
      {/* ============================================ */}
      <section style={{
        padding: '120px 60px',
        background: '#FAFAFA'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '60px'
          }}>
            <div>
              <div style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#7C3AED',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                What We Do
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '52px',
                fontWeight: '600',
                color: '#1a1a2e',
                letterSpacing: '-1px'
              }}>
                End-to-End Support
              </h2>
            </div>
            <button className="btn-secondary">View All Services</button>
          </div>

          {/* Services Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px'
          }}>
            {[
              {
                icon: '🎯',
                title: 'University Selection',
                desc: 'AI-powered matching with 50+ partner institutions. We find the perfect fit for your profile, budget, and career goals.',
                highlight: '50+ Universities'
              },
              {
                icon: '📋',
                title: 'Visa Excellence',
                desc: '98% success rate. Our experts handle documentation, interviews, and ensure a smooth visa approval process.',
                highlight: '98% Success Rate'
              },
              {
                icon: '🚀',
                title: 'Career Guidance',
                desc: 'Post-study work permit assistance, internship placements, and career counseling for long-term success.',
                highlight: 'Lifetime Support'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="service-card"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.05), rgba(15, 52, 96, 0.1))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  marginBottom: '28px'
                }}>
                  {service.icon}
                </div>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(124, 58, 237, 0.1)',
                  color: '#7C3AED',
                  padding: '6px 14px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: '600',
                  marginBottom: '20px'
                }}>
                  {service.highlight}
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#1a1a2e',
                  marginBottom: '16px'
                }}>{service.title}</h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.7',
                  color: '#6B7280',
                  marginBottom: '24px'
                }}>{service.desc}</p>
                <a href="#" style={{
                  color: '#1a1a2e',
                  fontWeight: '600',
                  fontSize: '15px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'gap 0.3s ease'
                }}>
                  Learn More <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROCESS SECTION */}
      {/* ============================================ */}
      <section style={{
        padding: '120px 60px',
        background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '-200px',
          right: '-200px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)'
        }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: '600',
              color: '#A78BFA',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              How It Works
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '52px',
              fontWeight: '600',
              color: 'white',
              marginBottom: '20px',
              letterSpacing: '-1px'
            }}>
              Your Journey in 4 Steps
            </h2>
          </div>

          {/* Process Steps */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            position: 'relative'
          }}>
            {/* Connection Line */}
            <div style={{
              position: 'absolute',
              top: '50px',
              left: '12%',
              right: '12%',
              height: '2px',
              background: 'linear-gradient(90deg, #7C3AED, #A78BFA, #7C3AED, #A78BFA)',
              opacity: 0.3
            }} />

            {[
              { step: '01', title: 'Free Consultation', desc: 'Book a call with our expert counselors' },
              { step: '02', title: 'Profile Analysis', desc: 'We evaluate your goals and qualifications' },
              { step: '03', title: 'University & Visa', desc: 'Application and documentation support' },
              { step: '04', title: 'Fly & Thrive', desc: 'Pre-departure briefing and ongoing support' }
            ].map((item, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7C3AED, #A78BFA)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 28px',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '28px',
                    fontWeight: '700',
                    color: 'white'
                  }}>{item.step}</span>
                </div>
                <h4 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '12px'
                }}>{item.title}</h4>
                <p style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: '1.6'
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALS SECTION */}
      {/* ============================================ */}
      <section style={{
        padding: '120px 60px',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: '600',
              color: '#7C3AED',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Success Stories
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '52px',
              fontWeight: '600',
              color: '#1a1a2e',
              letterSpacing: '-1px'
            }}>
              What Our Students Say
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="testimonial-card" style={{
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div style={{ paddingLeft: '40px' }}>
              <p style={{
                fontSize: '22px',
                lineHeight: '1.8',
                color: '#374151',
                fontStyle: 'italic',
                marginBottom: '32px'
              }}>
                Global Circle Edu made my Canadian dream a reality. From university selection to visa approval — their team was with me every step. Now I'm pursuing my Masters at University of Toronto!
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '20px'
                }}>R</div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '18px', color: '#1a1a2e' }}>
                    Rahul Mehta
                  </div>
                  <div style={{ fontSize: '14px', color: '#6B7280' }}>
                    MS Computer Science, University of Toronto
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              height: '350px'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="Student"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Testimonial Dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '40px'
          }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} style={{
                width: i === 0 ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: i === 0 ? '#1a1a2e' : '#E5E7EB',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION */}
      {/* ============================================ */}
      <section style={{
        padding: '100px 60px',
        background: 'linear-gradient(135deg, #FAFAFA 0%, #F3F4F6 100%)'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          borderRadius: '32px',
          padding: '80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative circles */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.1)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.1)'
          }} />

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '48px',
            fontWeight: '600',
            color: 'white',
            marginBottom: '20px',
            letterSpacing: '-1px',
            position: 'relative',
            zIndex: 1
          }}>
            Ready to Begin Your Journey?
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '40px',
            maxWidth: '500px',
            margin: '0 auto 40px',
            position: 'relative',
            zIndex: 1
          }}>
            Book a free consultation with our expert counselors today
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            position: 'relative',
            zIndex: 1
          }}>
            <button style={{
              background: 'white',
              color: '#1a1a2e',
              border: 'none',
              padding: '18px 40px',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}>
              📞 Book Free Call
            </button>
            <button style={{
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: '2px solid rgba(255,255,255,0.3)',
              padding: '18px 40px',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              💬 WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer style={{
        background: '#0A0A0F',
        padding: '80px 60px 40px',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
            gap: '60px',
            marginBottom: '60px'
          }}>
            {/* Brand Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #7C3AED, #A78BFA)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '20px', fontWeight: '700' }}>G</span>
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '18px' }}>Global Circle</div>
                  <div style={{ fontSize: '11px', color: '#6B7280', letterSpacing: '2px' }}>EDUCATION</div>
                </div>
              </div>
              <p style={{ color: '#9CA3AF', lineHeight: '1.7', fontSize: '15px', marginBottom: '24px' }}>
                Your trusted partner for international education and career opportunities. Based in Dubai, serving students globally.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {['in', 'fb', 'ig', 'tw'].map((social, i) => (
                  <div key={i} style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.3s'
                  }}>
                    <span style={{ fontSize: '12px', fontWeight: '600' }}>{social}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontWeight: '700', marginBottom: '24px', fontSize: '15px' }}>Quick Links</h4>
              {['About Us', 'Services', 'Universities', 'Blog', 'Contact'].map((link, i) => (
                <a key={i} href="#" style={{
                  display: 'block',
                  color: '#9CA3AF',
                  textDecoration: 'none',
                  marginBottom: '14px',
                  fontSize: '14px',
                  transition: 'color 0.3s'
                }}>{link}</a>
              ))}
            </div>

            {/* Destinations */}
            <div>
              <h4 style={{ fontWeight: '700', marginBottom: '24px', fontSize: '15px' }}>Destinations</h4>
              {['🍁 Canada', '🦘 Australia', '🗼 France', '🏰 Spain', '🇬🇧 UK'].map((link, i) => (
                <a key={i} href="#" style={{
                  display: 'block',
                  color: '#9CA3AF',
                  textDecoration: 'none',
                  marginBottom: '14px',
                  fontSize: '14px',
                  transition: 'color 0.3s'
                }}>{link}</a>
              ))}
            </div>

            {/* Services */}
            <div>
              <h4 style={{ fontWeight: '700', marginBottom: '24px', fontSize: '15px' }}>Services</h4>
              {['University Selection', 'Visa Assistance', 'Career Counseling', 'Test Prep', 'Scholarships'].map((link, i) => (
                <a key={i} href="#" style={{
                  display: 'block',
                  color: '#9CA3AF',
                  textDecoration: 'none',
                  marginBottom: '14px',
                  fontSize: '14px',
                  transition: 'color 0.3s'
                }}>{link}</a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontWeight: '700', marginBottom: '24px', fontSize: '15px' }}>Contact</h4>
              <div style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '14px' }}>
                📍 FZCO Business Park,<br />DDP, Dubai, UAE
              </div>
              <div style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '14px' }}>
                📧 info@globalcircleedu.com
              </div>
              <div style={{ color: '#9CA3AF', fontSize: '14px' }}>
                📞 +971 XX XXX XXXX
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ color: '#6B7280', fontSize: '14px' }}>
              © 2025 Global Circle Edu. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '32px' }}>
              <a href="#" style={{ color: '#6B7280', fontSize: '14px', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: '#6B7280', fontSize: '14px', textDecoration: 'none' }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ============================================ */}
      {/* FLOATING WHATSAPP BUTTON */}
      {/* ============================================ */}
      <div style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 1000
      }}>
        <button style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          border: 'none',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}>
          💬
        </button>
      </div>
    </div>
  );
}