// // // "use client";

// // // import { useState } from 'react';

// // // // ============================================
// // // // GLOBAL CIRCLE EDU - Navbar + Hero Component
// // // // Theme: Light, Solid Colors, Fun & Unique
// // // // ============================================

// // // export default function NavbarHero() {
// // //   const [hoveredNav, setHoveredNav] = useState(null);
  
// // //   // hoveredNav is used in the nav-link onMouseEnter/Leave handlers below

// // //   return (
// // //     <div style={{
// // //       minHeight: '100vh',
// // //       background: '#FFFFFF',
// // //       fontFamily: '"Plus Jakarta Sans", sans-serif',
// // //       overflow: 'hidden',
// // //       position: 'relative'
// // //     }}>
      
// // //       {/* Google Fonts Import */}
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
// // //         * {
// // //           box-sizing: border-box;
// // //           margin: 0;
// // //           padding: 0;
// // //         }

// // //         /* Nav Link Hover Effect */
// // //         .nav-link {
// // //           position: relative;
// // //           color: #1E293B;
// // //           text-decoration: none;
// // //           font-weight: 600;
// // //           font-size: 15px;
// // //           padding: 8px 0;
// // //           transition: color 0.3s ease;
// // //         }
        
// // //         .nav-link::before {
// // //           content: '';
// // //           position: absolute;
// // //           bottom: 0;
// // //           left: 50%;
// // //           transform: translateX(-50%);
// // //           width: 6px;
// // //           height: 6px;
// // //           background: #FF6B35;
// // //           border-radius: 50%;
// // //           opacity: 0;
// // //           transition: all 0.3s ease;
// // //         }
        
// // //         .nav-link:hover {
// // //           color: #FF6B35;
// // //         }
        
// // //         .nav-link:hover::before {
// // //           opacity: 1;
// // //           bottom: -8px;
// // //         }

// // //         /* Primary Button */
// // //         .btn-primary {
// // //           background: #FF6B35;
// // //           color: white;
// // //           border: none;
// // //           padding: 14px 28px;
// // //           border-radius: 50px;
// // //           font-weight: 700;
// // //           font-size: 15px;
// // //           cursor: pointer;
// // //           transition: all 0.3s ease;
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 8px;
// // //           box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
// // //         }
        
// // //         .btn-primary:hover {
// // //           transform: translateY(-2px);
// // //           box-shadow: 0 8px 30px rgba(255, 107, 53, 0.4);
// // //         }

// // //         /* Secondary Button */
// // //         .btn-secondary {
// // //           background: transparent;
// // //           color: #1E3A5F;
// // //           border: 2px solid #E2E8F0;
// // //           padding: 14px 28px;
// // //           border-radius: 50px;
// // //           font-weight: 700;
// // //           font-size: 15px;
// // //           cursor: pointer;
// // //           transition: all 0.3s ease;
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 8px;
// // //         }
        
// // //         .btn-secondary:hover {
// // //           border-color: #1E3A5F;
// // //           background: #F8FAFC;
// // //         }

// // //         /* Floating Animation */
// // //         @keyframes float {
// // //           0%, 100% { transform: translateY(0px); }
// // //           50% { transform: translateY(-12px); }
// // //         }
        
// // //         @keyframes floatSlow {
// // //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// // //           50% { transform: translateY(-8px) rotate(3deg); }
// // //         }

// // //         @keyframes pulse {
// // //           0%, 100% { transform: scale(1); }
// // //           50% { transform: scale(1.05); }
// // //         }

// // //         .floating {
// // //           animation: float 4s ease-in-out infinite;
// // //         }
        
// // //         .floating-slow {
// // //           animation: floatSlow 6s ease-in-out infinite;
// // //         }

// // //         .floating-delay-1 {
// // //           animation-delay: 0.5s;
// // //         }
        
// // //         .floating-delay-2 {
// // //           animation-delay: 1s;
// // //         }

// // //         .floating-delay-3 {
// // //           animation-delay: 1.5s;
// // //         }

// // //         /* Mobile Responsive Styles */
// // //         @media (max-width: 1024px) {
// // //           .hero-grid {
// // //             grid-template-columns: 1fr !important;
// // //             gap: 40px !important;
// // //             text-align: center;
// // //           }
          
// // //           .hero-headline {
// // //             font-size: 48px !important;
// // //           }
          
// // //           .hero-subtext {
// // //             margin-left: auto;
// // //             margin-right: auto;
// // //           }
          
// // //           .hero-cta-row {
// // //             justify-content: center !important;
// // //           }
          
// // //           .hero-stats-row {
// // //             justify-content: center !important;
// // //           }
          
// // //           .hero-image-container {
// // //             height: 450px !important;
// // //             margin: 0 auto;
// // //             max-width: 400px;
// // //           }
          
// // //           .main-circle {
// // //             width: 350px !important;
// // //             height: 350px !important;
// // //           }
          
// // //           .student-image {
// // //             width: 300px !important;
// // //             height: 400px !important;
// // //           }
// // //         }

// // //         @media (max-width: 768px) {
// // //           .navbar {
// // //             padding: 12px 20px !important;
// // //           }
          
// // //           .nav-links {
// // //             display: none !important;
// // //           }
          
// // //           .mobile-menu-btn {
// // //             display: flex !important;
// // //           }
          
// // //           .hero-section {
// // //             padding: 100px 20px 60px !important;
// // //           }
          
// // //           .hero-headline {
// // //             font-size: 38px !important;
// // //             letter-spacing: -1px !important;
// // //           }
          
// // //           .hero-subtext {
// // //             font-size: 16px !important;
// // //           }
          
// // //           .hero-cta-row {
// // //             flex-direction: column !important;
// // //             align-items: center !important;
// // //             gap: 12px !important;
// // //           }
          
// // //           .hero-cta-row button {
// // //             width: 100% !important;
// // //             max-width: 280px;
// // //             justify-content: center !important;
// // //           }
          
// // //           .hero-stats-row {
// // //             flex-direction: column !important;
// // //             gap: 12px !important;
// // //             align-items: center !important;
// // //           }
          
// // //           .stat-card {
// // //             width: 100% !important;
// // //             max-width: 280px;
// // //           }
          
// // //           .hero-image-container {
// // //             height: 380px !important;
// // //           }
          
// // //           .main-circle {
// // //             width: 280px !important;
// // //             height: 280px !important;
// // //           }
          
// // //           .student-image {
// // //             width: 240px !important;
// // //             height: 320px !important;
// // //           }
          
// // //           .floating-badge {
// // //             display: none !important;
// // //           }
          
// // //           .decorative-circle {
// // //             display: none !important;
// // //           }
          
// // //           .teal-circle, .navy-circle {
// // //             display: none !important;
// // //           }
// // //         }

// // //         @media (max-width: 480px) {
// // //           .hero-headline {
// // //             font-size: 32px !important;
// // //           }
          
// // //           .logo-text-main {
// // //             font-size: 16px !important;
// // //           }
          
// // //           .logo-text-sub {
// // //             font-size: 10px !important;
// // //           }
          
// // //           .navbar-cta {
// // //             padding: 10px 16px !important;
// // //             font-size: 13px !important;
// // //           }
          
// // //           .main-circle {
// // //             width: 240px !important;
// // //             height: 240px !important;
// // //           }
          
// // //           .student-image {
// // //             width: 200px !important;
// // //             height: 280px !important;
// // //           }
// // //         }

// // //         /* Badge Styles */
// // //         .badge {
// // //           background: white;
// // //           border-radius: 16px;
// // //           padding: 12px 18px;
// // //           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 10px;
// // //           font-weight: 600;
// // //           font-size: 14px;
// // //           color: #1E3A5F;
// // //           border: 1px solid #F1F5F9;
// // //         }

// // //         /* Stat Card */
// // //         .stat-card {
// // //           background: #F8FAFC;
// // //           border-radius: 16px;
// // //           padding: 20px 24px;
// // //           border: 1px solid #E2E8F0;
// // //           transition: all 0.3s ease;
// // //         }
        
// // //         .stat-card:hover {
// // //           border-color: #FF6B35;
// // //           transform: translateY(-4px);
// // //         }
// // //       `}</style>

// // //       {/* ============================================ */}
// // //       {/* NAVBAR */}
// // //       {/* ============================================ */}
// // //       <nav 
// // //         className="navbar"
// // //         style={{
// // //         position: 'fixed',
// // //         top: 0,
// // //         left: 0,
// // //         right: 0,
// // //         zIndex: 1000,
// // //         padding: '16px 48px',
// // //         background: 'rgba(255, 255, 255, 0.95)',
// // //         backdropFilter: 'blur(10px)',
// // //         borderBottom: '1px solid #F1F5F9'
// // //       }}>
// // //         <div style={{
// // //           maxWidth: '1400px',
// // //           margin: '0 auto',
// // //           display: 'flex',
// // //           justifyContent: 'space-between',
// // //           alignItems: 'center'
// // //         }}>
          
// // //           {/* Logo */}
// // //           <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
// // //             {/* Unique Logo Mark - Circle + Square Combo */}
// // //             <div style={{ position: 'relative', width: '44px', height: '44px' }}>
// // //               {/* Circle */}
// // //               <div style={{
// // //                 position: 'absolute',
// // //                 top: '0',
// // //                 left: '0',
// // //                 width: '32px',
// // //                 height: '32px',
// // //                 borderRadius: '50%',
// // //                 background: '#FF6B35'
// // //               }} />
// // //               {/* Square */}
// // //               <div style={{
// // //                 position: 'absolute',
// // //                 bottom: '0',
// // //                 right: '0',
// // //                 width: '24px',
// // //                 height: '24px',
// // //                 borderRadius: '6px',
// // //                 background: '#1E3A5F'
// // //               }} />
// // //             </div>
// // //             {/* Logo Text */}
// // //             <div>
// // //               <div 
// // //                 className="logo-text-main"
// // //                 style={{
// // //                 fontSize: '18px',
// // //                 fontWeight: '800',
// // //                 color: '#1E3A5F',
// // //                 letterSpacing: '-0.5px',
// // //                 lineHeight: '1.1'
// // //               }}>
// // //                 Global Circle
// // //               </div>
// // //               <div 
// // //                 className="logo-text-sub"
// // //                 style={{
// // //                 fontSize: '11px',
// // //                 fontWeight: '600',
// // //                 color: '#FF6B35',
// // //                 letterSpacing: '2px',
// // //                 textTransform: 'uppercase'
// // //               }}>
// // //                 Education
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Nav Links */}
// // //           <div className="nav-links" style={{ display: 'flex', gap: '40px' }}>
// // //             {['Destinations', 'Services', 'Universities', 'About', 'Blog'].map((link) => (
// // //               <a
// // //                 key={link}
// // //                 href="#"
// // //                 className="nav-link"
// // //                 onMouseEnter={() => setHoveredNav(link)}
// // //                 onMouseLeave={() => setHoveredNav(null)}
// // //               >
// // //                 {link}
// // //               </a>
// // //             ))}
// // //           </div>

// // //           {/* Mobile Menu Button */}
// // //           <button 
// // //             className="mobile-menu-btn"
// // //             style={{
// // //               display: 'none',
// // //               background: 'none',
// // //               border: 'none',
// // //               cursor: 'pointer',
// // //               flexDirection: 'column',
// // //               gap: '5px',
// // //               padding: '8px'
// // //             }}
// // //           >
// // //             <span style={{ width: '24px', height: '2px', background: '#1E3A5F', borderRadius: '2px' }}></span>
// // //             <span style={{ width: '24px', height: '2px', background: '#1E3A5F', borderRadius: '2px' }}></span>
// // //             <span style={{ width: '24px', height: '2px', background: '#1E3A5F', borderRadius: '2px' }}></span>
// // //           </button>

// // //           {/* CTA Button */}
// // //           <button className="btn-primary navbar-cta">
// // //             Let's Talk
// // //             <span style={{ fontSize: '18px' }}>💬</span>
// // //           </button>
// // //         </div>
// // //       </nav>

// // //       {/* ============================================ */}
// // //       {/* HERO SECTION */}
// // //       {/* ============================================ */}
// // //       <section 
// // //         className="hero-section"
// // //         style={{
// // //         minHeight: '100vh',
// // //         paddingTop: '120px',
// // //         paddingBottom: '60px',
// // //         paddingLeft: '48px',
// // //         paddingRight: '48px',
// // //         position: 'relative',
// // //         display: 'flex',
// // //         alignItems: 'center'
// // //       }}>
        
// // //         {/* Background Decorative Elements */}
// // //         {/* Small Orange Circle - Top Right */}
// // //         <div 
// // //           className="decorative-circle floating floating-delay-1"
// // //           style={{
// // //           position: 'absolute',
// // //           top: '15%',
// // //           right: '8%',
// // //           width: '20px',
// // //           height: '20px',
// // //           borderRadius: '50%',
// // //           background: '#FF6B35',
// // //           opacity: 0.6
// // //         }} />
        
// // //         {/* Small Teal Circle - Top Left */}
// // //         <div 
// // //           className="decorative-circle floating floating-delay-2"
// // //           style={{
// // //           position: 'absolute',
// // //           top: '25%',
// // //           left: '5%',
// // //           width: '14px',
// // //           height: '14px',
// // //           borderRadius: '50%',
// // //           background: '#2EC4B6',
// // //           opacity: 0.5
// // //         }} />

// // //         {/* Diamond Shape - Left */}
// // //         <div 
// // //           className="decorative-circle floating-slow"
// // //           style={{
// // //           position: 'absolute',
// // //           top: '60%',
// // //           left: '3%',
// // //           width: '24px',
// // //           height: '24px',
// // //           background: '#FF6B35',
// // //           opacity: 0.3,
// // //           transform: 'rotate(45deg)',
// // //           borderRadius: '4px'
// // //         }} />

// // //         {/* Main Content Grid */}
// // //         <div 
// // //           className="hero-grid"
// // //           style={{
// // //           maxWidth: '1400px',
// // //           margin: '0 auto',
// // //           display: 'grid',
// // //           gridTemplateColumns: '1fr 1fr',
// // //           gap: '60px',
// // //           alignItems: 'center',
// // //           width: '100%'
// // //         }}>
          
// // //           {/* Left Content */}
// // //           <div style={{ position: 'relative', zIndex: 2 }}>
            
// // //             {/* Tagline */}
// // //             <div style={{
// // //               display: 'inline-flex',
// // //               alignItems: 'center',
// // //               gap: '8px',
// // //               marginBottom: '24px'
// // //             }}>
// // //               <div style={{
// // //                 width: '40px',
// // //                 height: '3px',
// // //                 background: '#FF6B35',
// // //                 borderRadius: '2px'
// // //               }} />
// // //               <span style={{
// // //                 fontSize: '14px',
// // //                 fontWeight: '700',
// // //                 color: '#64748B',
// // //                 letterSpacing: '1px',
// // //                 textTransform: 'uppercase'
// // //               }}>
// // //                 Your Future Awaits
// // //               </span>
// // //             </div>

// // //             {/* Main Headline */}
// // //             <h1 
// // //               className="hero-headline"
// // //               style={{
// // //               fontSize: '68px',
// // //               fontWeight: '800',
// // //               color: '#1E3A5F',
// // //               lineHeight: '1.05',
// // //               letterSpacing: '-2px',
// // //               marginBottom: '28px'
// // //             }}>
// // //               Study
// // //               <br />
// // //               Abroad
// // //               <br />
// // //               <span style={{ 
// // //                 color: '#FF6B35',
// // //                 position: 'relative',
// // //                 display: 'inline-block'
// // //               }}>
// // //                 With Confidence
// // //                 {/* Underline decoration */}
// // //                 <svg 
// // //                   style={{
// // //                     position: 'absolute',
// // //                     bottom: '-8px',
// // //                     left: '0',
// // //                     width: '100%',
// // //                     height: '12px'
// // //                   }}
// // //                   viewBox="0 0 300 12" 
// // //                   fill="none"
// // //                 >
// // //                   <path 
// // //                     d="M2 8C50 3 150 3 298 8" 
// // //                     stroke="#2EC4B6" 
// // //                     strokeWidth="4" 
// // //                     strokeLinecap="round"
// // //                   />
// // //                 </svg>
// // //               </span>
// // //             </h1>

// // //             {/* Subheadline */}
// // //             <p 
// // //               className="hero-subtext"
// // //               style={{
// // //               fontSize: '18px',
// // //               lineHeight: '1.7',
// // //               color: '#64748B',
// // //               maxWidth: '480px',
// // //               marginBottom: '40px'
// // //             }}>
// // //               Your trusted partner for international education. We guide you to top universities in 
// // //               <span style={{ color: '#1E3A5F', fontWeight: '600' }}> Canada</span>,
// // //               <span style={{ color: '#1E3A5F', fontWeight: '600' }}> Australia</span>,
// // //               <span style={{ color: '#1E3A5F', fontWeight: '600' }}> France</span> &
// // //               <span style={{ color: '#1E3A5F', fontWeight: '600' }}> Spain</span>.
// // //             </p>

// // //             {/* CTA Buttons */}
// // //             <div className="hero-cta-row" style={{ display: 'flex', gap: '16px', marginBottom: '50px' }}>
// // //               <button className="btn-primary" style={{ padding: '18px 36px', fontSize: '16px' }}>
// // //                 Start Your Journey
// // //                 <span style={{ fontSize: '20px' }}>→</span>
// // //               </button>
// // //               <button className="btn-secondary">
// // //                 <span style={{
// // //                   width: '32px',
// // //                   height: '32px',
// // //                   borderRadius: '50%',
// // //                   background: '#FF6B35',
// // //                   display: 'flex',
// // //                   alignItems: 'center',
// // //                   justifyContent: 'center',
// // //                   color: 'white',
// // //                   fontSize: '12px'
// // //                 }}>▶</span>
// // //                 Watch Our Story
// // //               </button>
// // //             </div>

// // //             {/* Stats Row */}
// // //             <div className="hero-stats-row" style={{ display: 'flex', gap: '20px' }}>
// // //               {/* Stat 1 */}
// // //               <div className="stat-card">
// // //                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
// // //                   <div style={{
// // //                     width: '48px',
// // //                     height: '48px',
// // //                     borderRadius: '12px',
// // //                     background: '#ECFDF5',
// // //                     display: 'flex',
// // //                     alignItems: 'center',
// // //                     justifyContent: 'center',
// // //                     fontSize: '24px'
// // //                   }}>✓</div>
// // //                   <div>
// // //                     <div style={{ fontSize: '28px', fontWeight: '800', color: '#1E3A5F' }}>98%</div>
// // //                     <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500' }}>Visa Success</div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Stat 2 */}
// // //               <div className="stat-card">
// // //                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
// // //                   <div style={{
// // //                     width: '48px',
// // //                     height: '48px',
// // //                     borderRadius: '12px',
// // //                     background: '#FFF7ED',
// // //                     display: 'flex',
// // //                     alignItems: 'center',
// // //                     justifyContent: 'center',
// // //                     fontSize: '24px'
// // //                   }}>🎓</div>
// // //                   <div>
// // //                     <div style={{ fontSize: '28px', fontWeight: '800', color: '#1E3A5F' }}>500+</div>
// // //                     <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500' }}>Students Placed</div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Stat 3 */}
// // //               <div className="stat-card">
// // //                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
// // //                   <div style={{
// // //                     width: '48px',
// // //                     height: '48px',
// // //                     borderRadius: '12px',
// // //                     background: '#F0FDFA',
// // //                     display: 'flex',
// // //                     alignItems: 'center',
// // //                     justifyContent: 'center',
// // //                     fontSize: '24px'
// // //                   }}>🌍</div>
// // //                   <div>
// // //                     <div style={{ fontSize: '28px', fontWeight: '800', color: '#1E3A5F' }}>50+</div>
// // //                     <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500' }}>Universities</div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Right Content - Hero Image */}
// // //           <div className="hero-image-container" style={{ position: 'relative', height: '600px' }}>
            
// // //             {/* Main Orange Circle Background */}
// // //             <div 
// // //               className="main-circle"
// // //               style={{
// // //               position: 'absolute',
// // //               top: '50%',
// // //               left: '50%',
// // //               transform: 'translate(-50%, -50%)',
// // //               width: '450px',
// // //               height: '450px',
// // //               borderRadius: '50%',
// // //               background: '#FF6B35',
// // //               zIndex: 1
// // //             }} />

// // //             {/* Secondary Teal Circle */}
// // //             <div 
// // //               className="teal-circle floating-slow floating-delay-1"
// // //               style={{
// // //               position: 'absolute',
// // //               bottom: '5%',
// // //               left: '5%',
// // //               width: '120px',
// // //               height: '120px',
// // //               borderRadius: '50%',
// // //               background: '#2EC4B6',
// // //               zIndex: 0
// // //             }} />

// // //             {/* Small Navy Circle */}
// // //             <div 
// // //               className="navy-circle floating floating-delay-2"
// // //               style={{
// // //               position: 'absolute',
// // //               top: '10%',
// // //               right: '10%',
// // //               width: '60px',
// // //               height: '60px',
// // //               borderRadius: '50%',
// // //               background: '#1E3A5F',
// // //               zIndex: 0
// // //             }} />

// // //             {/* Student Image (Transparent PNG) */}
// // //             <div 
// // //               className="student-image"
// // //               style={{
// // //               position: 'absolute',
// // //               top: '50%',
// // //               left: '50%',
// // //               transform: 'translate(-50%, -50%)',
// // //               zIndex: 2,
// // //               width: '400px',
// // //               height: '500px'
// // //             }}>
// // //               <img 
// // //                 src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80"
// // //                 alt="Student"
// // //                 style={{
// // //                   width: '100%',
// // //                   height: '100%',
// // //                   objectFit: 'cover',
// // //                   objectPosition: 'top',
// // //                   borderRadius: '0 0 200px 200px'
// // //                 }}
// // //               />
// // //             </div>

// // //             {/* Floating Badge - Top Left */}
// // //             <div 
// // //               className="badge floating-badge floating floating-delay-1"
// // //               style={{
// // //                 position: 'absolute',
// // //                 top: '15%',
// // //                 left: '0%',
// // //                 zIndex: 3
// // //               }}
// // //             >
// // //               <span style={{ fontSize: '24px' }}>🍁</span>
// // //               <span>Study in Canada</span>
// // //             </div>

// // //             {/* Floating Badge - Right */}
// // //             <div 
// // //               className="badge floating-badge floating floating-delay-2"
// // //               style={{
// // //                 position: 'absolute',
// // //                 top: '35%',
// // //                 right: '-5%',
// // //                 zIndex: 3
// // //               }}
// // //             >
// // //               <span style={{ fontSize: '24px' }}>🦘</span>
// // //               <span>Australia</span>
// // //             </div>

// // //             {/* Floating Badge - Bottom Right */}
// // //             <div 
// // //               className="badge floating-badge floating floating-delay-3"
// // //               style={{
// // //                 position: 'absolute',
// // //                 bottom: '20%',
// // //                 right: '0%',
// // //                 zIndex: 3
// // //               }}
// // //             >
// // //               <div style={{
// // //                 width: '36px',
// // //                 height: '36px',
// // //                 borderRadius: '50%',
// // //                 background: '#ECFDF5',
// // //                 display: 'flex',
// // //                 alignItems: 'center',
// // //                 justifyContent: 'center',
// // //                 color: '#10B981',
// // //                 fontWeight: '700'
// // //               }}>✓</div>
// // //               <div>
// // //                 <div style={{ fontWeight: '700', color: '#1E3A5F' }}>98% Success</div>
// // //                 <div style={{ fontSize: '12px', color: '#64748B' }}>Visa Approval</div>
// // //               </div>
// // //             </div>

// // //             {/* Floating Badge - Bottom Left */}
// // //             <div 
// // //               className="badge floating-badge floating-slow"
// // //               style={{
// // //                 position: 'absolute',
// // //                 bottom: '8%',
// // //                 left: '10%',
// // //                 zIndex: 3,
// // //                 background: '#1E3A5F',
// // //                 color: 'white'
// // //               }}
// // //             >
// // //               <div style={{ display: 'flex', marginRight: '4px' }}>
// // //                 {['🇨🇦', '🇦🇺', '🇫🇷', '🇪🇸'].map((flag, i) => (
// // //                   <span key={i} style={{ 
// // //                     fontSize: '18px',
// // //                     marginLeft: i > 0 ? '-6px' : 0 
// // //                   }}>{flag}</span>
// // //                 ))}
// // //               </div>
// // //               <span style={{ fontWeight: '600', fontSize: '13px' }}>4 Countries</span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Angled Divider */}
// // //         <div style={{
// // //           position: 'absolute',
// // //           bottom: 0,
// // //           left: 0,
// // //           right: 0,
// // //           height: '80px',
// // //           background: '#F8FAFC',
// // //           clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'
// // //         }} />
// // //       </section>

// // //       {/* ============================================ */}
// // //       {/* FLOATING WHATSAPP BUTTON */}
// // //       {/* ============================================ */}
// // //       <div style={{
// // //         position: 'fixed',
// // //         bottom: '32px',
// // //         right: '32px',
// // //         zIndex: 1000
// // //       }}>
// // //         <button style={{
// // //           width: '60px',
// // //           height: '60px',
// // //           borderRadius: '50%',
// // //           background: '#25D366',
// // //           border: 'none',
// // //           boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
// // //           cursor: 'pointer',
// // //           display: 'flex',
// // //           alignItems: 'center',
// // //           justifyContent: 'center',
// // //           fontSize: '28px',
// // //           transition: 'all 0.3s ease'
// // //         }}>
// // //           💬
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import React, { useState } from 'react';

// // export default function NavbarHero() {
// //   const [hoveredNav, setHoveredNav] = useState(null);

// //   return (
// //     <div style={{
// //       minHeight: '100vh',
// //       background: '#FFFFFF',
// //       fontFamily: '"Plus Jakarta Sans", sans-serif',
// //       overflow: 'hidden',
// //       position: 'relative'
// //     }}>
      
// //       {/* Google Fonts Import */}
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
// //         * {
// //           box-sizing: border-box;
// //           margin: 0;
// //           padding: 0;
// //         }

// //         /* Nav Link Hover Effect */
// //         .nav-link {
// //           position: relative;
// //           color: #1E293B;
// //           text-decoration: none;
// //           font-weight: 600;
// //           font-size: 15px;
// //           padding: 8px 0;
// //           transition: color 0.3s ease;
// //         }
        
// //         .nav-link::before {
// //           content: '';
// //           position: absolute;
// //           bottom: 0;
// //           left: 50%;
// //           transform: translateX(-50%);
// //           width: 6px;
// //           height: 6px;
// //           background: #FF6B35;
// //           border-radius: 50%;
// //           opacity: 0;
// //           transition: all 0.3s ease;
// //         }
        
// //         .nav-link:hover {
// //           color: #FF6B35;
// //         }
        
// //         .nav-link:hover::before {
// //           opacity: 1;
// //           bottom: -8px;
// //         }

// //         /* Primary Button */
// //         .btn-primary {
// //           background: #FF6B35;
// //           color: white;
// //           border: none;
// //           padding: 14px 28px;
// //           border-radius: 50px;
// //           font-weight: 700;
// //           font-size: 15px;
// //           cursor: pointer;
// //           transition: all 0.3s ease;
// //           display: flex;
// //           align-items: center;
// //           gap: 8px;
// //           box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
// //         }
        
// //         .btn-primary:hover {
// //           transform: translateY(-2px);
// //           box-shadow: 0 8px 30px rgba(255, 107, 53, 0.4);
// //         }

// //         /* Secondary Button */
// //         .btn-secondary {
// //           background: transparent;
// //           color: #1E3A5F;
// //           border: 2px solid #E2E8F0;
// //           padding: 14px 28px;
// //           border-radius: 50px;
// //           font-weight: 700;
// //           font-size: 15px;
// //           cursor: pointer;
// //           transition: all 0.3s ease;
// //           display: flex;
// //           align-items: center;
// //           gap: 8px;
// //         }
        
// //         .btn-secondary:hover {
// //           border-color: #1E3A5F;
// //           background: #F8FAFC;
// //         }

// //         /* Floating Animation */
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-12px); }
// //         }
        
// //         @keyframes floatSlow {
// //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// //           50% { transform: translateY(-8px) rotate(3deg); }
// //         }

// //         @keyframes pulse {
// //           0%, 100% { transform: scale(1); }
// //           50% { transform: scale(1.05); }
// //         }

// //         .floating {
// //           animation: float 4s ease-in-out infinite;
// //         }
        
// //         .floating-slow {
// //           animation: floatSlow 6s ease-in-out infinite;
// //         }

// //         .floating-delay-1 {
// //           animation-delay: 0.5s;
// //         }
        
// //         .floating-delay-2 {
// //           animation-delay: 1s;
// //         }

// //         .floating-delay-3 {
// //           animation-delay: 1.5s;
// //         }

// //         /* Mobile Responsive Styles */
// //         @media (max-width: 1024px) {
// //           .hero-grid {
// //             grid-template-columns: 1fr !important;
// //             gap: 40px !important;
// //             text-align: center;
// //           }
          
// //           .hero-headline {
// //             font-size: 48px !important;
// //           }
          
// //           .hero-subtext {
// //             margin-left: auto;
// //             margin-right: auto;
// //           }
          
// //           .hero-cta-row {
// //             justify-content: center !important;
// //           }
          
// //           .hero-stats-row {
// //             justify-content: center !important;
// //           }
          
// //           .hero-image-container {
// //             height: 450px !important;
// //             margin: 0 auto;
// //             max-width: 400px;
// //           }
          
// //           .main-circle {
// //             width: 350px !important;
// //             height: 350px !important;
// //           }
          
// //           .student-image {
// //             width: 300px !important;
// //             height: 400px !important;
// //           }
// //         }

// //         @media (max-width: 768px) {
// //           .navbar {
// //             padding: 12px 20px !important;
// //           }
          
// //           .nav-links {
// //             display: none !important;
// //           }
          
// //           .mobile-menu-btn {
// //             display: flex !important;
// //           }
          
// //           .hero-section {
// //             padding: 100px 20px 60px !important;
// //           }
          
// //           .hero-headline {
// //             font-size: 38px !important;
// //             letter-spacing: -1px !important;
// //           }
          
// //           .hero-subtext {
// //             font-size: 16px !important;
// //           }
          
// //           .hero-cta-row {
// //             flex-direction: column !important;
// //             align-items: center !important;
// //             gap: 12px !important;
// //           }
          
// //           .hero-cta-row button {
// //             width: 100% !important;
// //             max-width: 280px;
// //             justify-content: center !important;
// //           }
          
// //           .hero-stats-row {
// //             flex-direction: column !important;
// //             gap: 12px !important;
// //             align-items: center !important;
// //           }
          
// //           .stat-card {
// //             width: 100% !important;
// //             max-width: 280px;
// //           }
          
// //           .hero-image-container {
// //             height: 380px !important;
// //           }
          
// //           .main-circle {
// //             width: 280px !important;
// //             height: 280px !important;
// //           }
          
// //           .student-image {
// //             width: 240px !important;
// //             height: 320px !important;
// //           }
          
// //           .floating-badge {
// //             display: none !important;
// //           }
          
// //           .decorative-circle {
// //             display: none !important;
// //           }
          
// //           .teal-circle, .navy-circle {
// //             display: none !important;
// //           }
// //         }

// //         @media (max-width: 480px) {
// //           .hero-headline {
// //             font-size: 32px !important;
// //           }
          
// //           .logo-text-main {
// //             font-size: 16px !important;
// //           }
          
// //           .logo-text-sub {
// //             font-size: 10px !important;
// //           }
          
// //           .navbar-cta {
// //             padding: 10px 16px !important;
// //             font-size: 13px !important;
// //           }
          
// //           .main-circle {
// //             width: 240px !important;
// //             height: 240px !important;
// //           }
          
// //           .student-image {
// //             width: 200px !important;
// //             height: 280px !important;
// //           }
// //         }

// //         /* Badge Styles */
// //         .badge {
// //           background: white;
// //           border-radius: 16px;
// //           padding: 12px 18px;
// //           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
// //           display: flex;
// //           align-items: center;
// //           gap: 10px;
// //           font-weight: 600;
// //           font-size: 14px;
// //           color: #1E3A5F;
// //           border: 1px solid #F1F5F9;
// //         }

// //         /* Stat Card */
// //         .stat-card {
// //           background: #F8FAFC;
// //           border-radius: 16px;
// //           padding: 20px 24px;
// //           border: 1px solid #E2E8F0;
// //           transition: all 0.3s ease;
// //         }
        
// //         .stat-card:hover {
// //           border-color: #FF6B35;
// //           transform: translateY(-4px);
// //         }
// //       `}</style>

// //       {/* ============================================ */}
// //       {/* NAVBAR */}
// //       {/* ============================================ */}
// //       <nav 
// //         className="navbar"
// //         style={{
// //         position: 'fixed',
// //         top: 0,
// //         left: 0,
// //         right: 0,
// //         zIndex: 1000,
// //         padding: '16px 48px',
// //         background: 'rgba(255, 255, 255, 0.95)',
// //         backdropFilter: 'blur(10px)',
// //         borderBottom: '1px solid #F1F5F9'
// //       }}>
// //         <div style={{
// //           maxWidth: '1400px',
// //           margin: '0 auto',
// //           display: 'flex',
// //           justifyContent: 'space-between',
// //           alignItems: 'center'
// //         }}>
          
// //           {/* Logo */}
// //           <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
// //             <img 
// //               src='/logo.png'
// //               alt="Global Circle Edu"
// //               style={{
// //                 height: '48px',
// //                 width: 'auto',
// //                 objectFit: 'contain'
// //               }}
// //             />
// //           </div>

// //           {/* Nav Links */}
// //           <div className="nav-links" style={{ display: 'flex', gap: '40px' }}>
// //             {['Destinations', 'Services', 'Universities', 'About', 'Blog'].map((link) => (
// //               <a
// //                 key={link}
// //                 href="#"
// //                 className="nav-link"
// //                 onMouseEnter={() => setHoveredNav(link)}
// //                 onMouseLeave={() => setHoveredNav(null)}
// //               >
// //                 {link}
// //               </a>
// //             ))}
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <button 
// //             className="mobile-menu-btn"
// //             style={{
// //               display: 'none',
// //               background: 'none',
// //               border: 'none',
// //               cursor: 'pointer',
// //               flexDirection: 'column',
// //               gap: '5px',
// //               padding: '8px'
// //             }}
// //           >
// //             <span style={{ width: '24px', height: '2px', background: '#1E3A5F', borderRadius: '2px' }}></span>
// //             <span style={{ width: '24px', height: '2px', background: '#1E3A5F', borderRadius: '2px' }}></span>
// //             <span style={{ width: '24px', height: '2px', background: '#1E3A5F', borderRadius: '2px' }}></span>
// //           </button>

// //           {/* CTA Button */}
// //           <button className="btn-primary navbar-cta">
// //             Let's Talk
// //             <span style={{ fontSize: '18px' }}>💬</span>
// //           </button>
// //         </div>
// //       </nav>

// //       {/* ============================================ */}
// //       {/* HERO SECTION */}
// //       {/* ============================================ */}
// //       <section 
// //         className="hero-section"
// //         style={{
// //         minHeight: '100vh',
// //         paddingTop: '120px',
// //         paddingBottom: '60px',
// //         paddingLeft: '48px',
// //         paddingRight: '48px',
// //         position: 'relative',
// //         display: 'flex',
// //         alignItems: 'center'
// //       }}>
        
// //         {/* Background Decorative Elements */}
// //         {/* Small Orange Circle - Top Right */}
// //         <div 
// //           className="decorative-circle floating floating-delay-1"
// //           style={{
// //           position: 'absolute',
// //           top: '15%',
// //           right: '8%',
// //           width: '20px',
// //           height: '20px',
// //           borderRadius: '50%',
// //           background: '#FF6B35',
// //           opacity: 0.6
// //         }} />
        
// //         {/* Small Teal Circle - Top Left */}
// //         <div 
// //           className="decorative-circle floating floating-delay-2"
// //           style={{
// //           position: 'absolute',
// //           top: '25%',
// //           left: '5%',
// //           width: '14px',
// //           height: '14px',
// //           borderRadius: '50%',
// //           background: '#2EC4B6',
// //           opacity: 0.5
// //         }} />

// //         {/* Diamond Shape - Left */}
// //         <div 
// //           className="decorative-circle floating-slow"
// //           style={{
// //           position: 'absolute',
// //           top: '60%',
// //           left: '3%',
// //           width: '24px',
// //           height: '24px',
// //           background: '#FF6B35',
// //           opacity: 0.3,
// //           transform: 'rotate(45deg)',
// //           borderRadius: '4px'
// //         }} />

// //         {/* Main Content Grid */}
// //         <div 
// //           className="hero-grid"
// //           style={{
// //           maxWidth: '1400px',
// //           margin: '0 auto',
// //           display: 'grid',
// //           gridTemplateColumns: '1fr 1fr',
// //           gap: '60px',
// //           alignItems: 'center',
// //           width: '100%'
// //         }}>
          
// //           {/* Left Content */}
// //           <div style={{ position: 'relative', zIndex: 2 }}>
            
// //             {/* Tagline */}
// //             <div style={{
// //               display: 'inline-flex',
// //               alignItems: 'center',
// //               gap: '8px',
// //               marginBottom: '24px'
// //             }}>
// //               <div style={{
// //                 width: '40px',
// //                 height: '3px',
// //                 background: '#FF6B35',
// //                 borderRadius: '2px'
// //               }} />
// //               <span style={{
// //                 fontSize: '14px',
// //                 fontWeight: '700',
// //                 color: '#64748B',
// //                 letterSpacing: '1px',
// //                 textTransform: 'uppercase'
// //               }}>
// //                 Your Future Awaits
// //               </span>
// //             </div>

// //             {/* Main Headline */}
// //             <h1 
// //               className="hero-headline"
// //               style={{
// //               fontSize: '68px',
// //               fontWeight: '800',
// //               color: '#1E3A5F',
// //               lineHeight: '1.05',
// //               letterSpacing: '-2px',
// //               marginBottom: '28px'
// //             }}>
// //               Study
// //               <br />
// //               Abroad
// //               <br />
// //               <span style={{ 
// //                 color: '#FF6B35',
// //                 position: 'relative',
// //                 display: 'inline-block'
// //               }}>
// //                 With Confidence
// //                 {/* Underline decoration */}
// //                 <svg 
// //                   style={{
// //                     position: 'absolute',
// //                     bottom: '-8px',
// //                     left: '0',
// //                     width: '100%',
// //                     height: '12px'
// //                   }}
// //                   viewBox="0 0 300 12" 
// //                   fill="none"
// //                 >
// //                   <path 
// //                     d="M2 8C50 3 150 3 298 8" 
// //                     stroke="#2EC4B6" 
// //                     strokeWidth="4" 
// //                     strokeLinecap="round"
// //                   />
// //                 </svg>
// //               </span>
// //             </h1>

// //             {/* Subheadline */}
// //             <p 
// //               className="hero-subtext"
// //               style={{
// //               fontSize: '18px',
// //               lineHeight: '1.7',
// //               color: '#64748B',
// //               maxWidth: '480px',
// //               marginBottom: '40px'
// //             }}>
// //               Your trusted partner for international education. Access prestigious universities and comprehensive support for your international education journey
// //             </p>

// //             {/* CTA Buttons */}
// //             <div className="hero-cta-row" style={{ display: 'flex', gap: '16px', marginBottom: '50px' }}>
// //               <button className="btn-primary" style={{ padding: '18px 36px', fontSize: '16px' }}>
// //                 Start Your Journey
// //                 <span style={{ fontSize: '20px' }}>→</span>
// //               </button>
// //               <button className="btn-secondary">
// //                 <span style={{
// //                   width: '32px',
// //                   height: '32px',
// //                   borderRadius: '50%',
// //                   background: '#FF6B35',
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   color: 'white',
// //                   fontSize: '12px'
// //                 }}>▶</span>
// //                 Watch Our Story
// //               </button>
// //             </div>

// //             {/* Stats Row */}
// //             <div className="hero-stats-row" style={{ display: 'flex', gap: '20px' }}>
// //               {/* Stat 1 */}
// //               <div className="stat-card">
// //                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
// //                   <div style={{
// //                     width: '48px',
// //                     height: '48px',
// //                     borderRadius: '12px',
// //                     background: '#ECFDF5',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'center',
// //                     fontSize: '24px'
// //                   }}>✓</div>
// //                   <div>
// //                     <div style={{ fontSize: '28px', fontWeight: '800', color: '#1E3A5F' }}>98%</div>
// //                     <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500' }}>Visa Success</div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Stat 2 */}
// //               <div className="stat-card">
// //                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
// //                   <div style={{
// //                     width: '48px',
// //                     height: '48px',
// //                     borderRadius: '12px',
// //                     background: '#FFF7ED',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'center',
// //                     fontSize: '24px'
// //                   }}>🎓</div>
// //                   <div>
// //                     <div style={{ fontSize: '28px', fontWeight: '800', color: '#1E3A5F' }}>500+</div>
// //                     <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500' }}>Students Placed</div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Stat 3 */}
// //               <div className="stat-card">
// //                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
// //                   <div style={{
// //                     width: '48px',
// //                     height: '48px',
// //                     borderRadius: '12px',
// //                     background: '#F0FDFA',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'center',
// //                     fontSize: '24px'
// //                   }}>🌍</div>
// //                   <div>
// //                     <div style={{ fontSize: '28px', fontWeight: '800', color: '#1E3A5F' }}>50+</div>
// //                     <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500' }}>Universities</div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Content - Hero Image */}
// //           <div className="hero-image-container" style={{ position: 'relative', height: '600px' }}>
            
// //             {/* Main Orange Circle Background */}
// //             <div 
// //               className="main-circle"
// //               style={{
// //               position: 'absolute',
// //               top: '50%',
// //               left: '50%',
// //               transform: 'translate(-50%, -50%)',
// //               width: '450px',
// //               height: '450px',
// //               borderRadius: '50%',
// //               background: '#FF6B35',
// //               zIndex: 1
// //             }} />

// //             {/* Secondary Teal Circle */}
// //             <div 
// //               className="teal-circle floating-slow floating-delay-1"
// //               style={{
// //               position: 'absolute',
// //               bottom: '5%',
// //               left: '5%',
// //               width: '120px',
// //               height: '120px',
// //               borderRadius: '50%',
// //               background: '#2EC4B6',
// //               zIndex: 0
// //             }} />

// //             {/* Small Navy Circle */}
// //             <div 
// //               className="navy-circle floating floating-delay-2"
// //               style={{
// //               position: 'absolute',
// //               top: '10%',
// //               right: '10%',
// //               width: '60px',
// //               height: '60px',
// //               borderRadius: '50%',
// //               background: '#1E3A5F',
// //               zIndex: 0
// //             }} />

// //             {/* Student Image (Transparent PNG) */}
// //             <div 
// //               className="student-image"
// //               style={{
// //               position: 'absolute',
// //               top: '50%',
// //               left: '50%',
// //               transform: 'translate(-50%, -50%)',
// //               zIndex: 2,
// //               width: '400px',
// //               height: '500px'
// //             }}>
// //               <img 
// //                 // src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80"
// //                 src="/student3.png"
// //                 alt="Student"
// //                 style={{
// //                   width: '100%',
// //                   height: '100%',
// //                   objectFit: 'cover',
// //                   objectPosition: 'top',
// //                   borderRadius: '0 0 200px 200px'
// //                 }}
// //               />
// //             </div>

// //             {/* Floating Badge - Top Left */}
// //             <div 
// //               className="badge floating-badge floating floating-delay-1"
// //               style={{
// //                 position: 'absolute',
// //                 top: '15%',
// //                 left: '0%',
// //                 zIndex: 3
// //               }}
// //             >
// //               <span style={{ fontSize: '24px' }}>🍁</span>
// //               <span>Study in Canada</span>
// //             </div>

// //             {/* Floating Badge - Right */}
// //             <div 
// //               className="badge floating-badge floating floating-delay-2"
// //               style={{
// //                 position: 'absolute',
// //                 top: '35%',
// //                 right: '-5%',
// //                 zIndex: 3
// //               }}
// //             >
// //               <span style={{ fontSize: '24px' }}>🦘</span>
// //               <span>Australia</span>
// //             </div>

// //             {/* Floating Badge - Bottom Right */}
// //             <div 
// //               className="badge floating-badge floating floating-delay-3"
// //               style={{
// //                 position: 'absolute',
// //                 bottom: '20%',
// //                 right: '0%',
// //                 zIndex: 3
// //               }}
// //             >
// //               <div style={{
// //                 width: '36px',
// //                 height: '36px',
// //                 borderRadius: '50%',
// //                 background: '#ECFDF5',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 color: '#10B981',
// //                 fontWeight: '700'
// //               }}>✓</div>
// //               <div>
// //                 <div style={{ fontWeight: '700', color: '#1E3A5F' }}>98% Success</div>
// //                 <div style={{ fontSize: '12px', color: '#64748B' }}>Visa Approval</div>
// //               </div>
// //             </div>

// //             {/* Floating Badge - Bottom Left */}
// //             <div 
// //               className="badge floating-badge floating-slow"
// //               style={{
// //                 position: 'absolute',
// //                 bottom: '8%',
// //                 left: '10%',
// //                 zIndex: 3,
// //                 background: '#1E3A5F',
// //                 color: 'white'
// //               }}
// //             >
// //               <div style={{ display: 'flex', marginRight: '4px' }}>
// //                 {['🇨🇦', '🇦🇺', '🇫🇷', '🇪🇸'].map((flag, i) => (
// //                   <span key={i} style={{ 
// //                     fontSize: '18px',
// //                     marginLeft: i > 0 ? '-6px' : 0 
// //                   }}>{flag}</span>
// //                 ))}
// //               </div>
// //               <span style={{ fontWeight: '600', fontSize: '13px' }}>10+ Countries</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Angled Divider */}
// //         <div style={{
// //           position: 'absolute',
// //           bottom: 0,
// //           left: 0,
// //           right: 0,
// //           height: '80px',
// //           background: '#F8FAFC',
// //           clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'
// //         }} />
// //       </section>

// //       {/* ============================================ */}
// //       {/* FLOATING WHATSAPP BUTTON */}
// //       {/* ============================================ */}
// //       <div style={{
// //         position: 'fixed',
// //         bottom: '32px',
// //         right: '32px',
// //         zIndex: 1000
// //       }}>
// //         <button style={{
// //           width: '60px',
// //           height: '60px',
// //           borderRadius: '50%',
// //           background: '#25D366',
// //           border: 'none',
// //           boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
// //           cursor: 'pointer',
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           fontSize: '28px',
// //           transition: 'all 0.3s ease'
// //         }}>
// //           💬
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
"use client";

import React from 'react';
import Navbar from './Navbar';
// ============================================
// HERO SECTION - Standalone (Homepage only)
// ============================================

export default function HeroSection() {

  return (

    <section style={{
      minHeight: '100vh',
      paddingTop: '120px',
      paddingBottom: '60px',
      paddingLeft: '48px',
      paddingRight: '48px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      background: '#FFFFFF'
    }}>
      <Navbar/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .btn-primary {
          background: #FF6B35;
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(255, 107, 53, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #1E3A5F;
          border: 2px solid #E2E8F0;
          padding: 12px 28px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .btn-secondary:hover {
          border-color: #1E3A5F;
          background: #F8FAFC;
        }

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

        .floating-delay-1 { animation-delay: 0.5s; }
        .floating-delay-2 { animation-delay: 1s; }
        .floating-delay-3 { animation-delay: 1.5s; }

        .badge {
          background: white;
          border-radius: 16px;
          padding: 12px 18px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 14px;
          color: #1E3A5F;
          border: 1px solid #F1F5F9;
        }

        .stat-card {
          background: #F8FAFC;
          border-radius: 16px;
          padding: 20px 24px;
          border: 1px solid #E2E8F0;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          border-color: #FF6B35;
          transform: translateY(-4px);
        }

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
          
          .hero-cta-row {
            justify-content: center !important;
          }
          
          .hero-stats-row {
            justify-content: center !important;
          }
          
          .hero-image-container {
            height: 450px !important;
            margin: 0 auto;
            max-width: 400px;
          }
          
          .main-circle {
            width: 350px !important;
            height: 350px !important;
          }
          
          .student-image {
            width: 300px !important;
            height: 400px !important;
          }
        }

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
          
          .hero-cta-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
          }
          
          .hero-cta-row button {
            width: 100% !important;
            max-width: 280px;
            justify-content: center !important;
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
          
          .floating-badge {
            display: none !important;
          }
          
          .decorative-circle {
            display: none !important;
          }
          
          .teal-circle, .navy-circle {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .hero-headline {
            font-size: 32px !important;
          }
          
          .main-circle {
            width: 240px !important;
            height: 240px !important;
          }
          
          .student-image {
            width: 200px !important;
            height: 280px !important;
          }
        }
      `}</style>

      {/* Background Decorative Elements */}
      <div 
        className="decorative-circle floating floating-delay-1"
        style={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: '#FF6B35',
          opacity: 0.6
        }} 
      />
      
      <div 
        className="decorative-circle floating floating-delay-2"
        style={{
          position: 'absolute',
          top: '25%',
          left: '5%',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: '#2EC4B6',
          opacity: 0.5
        }} 
      />

      <div 
        className="decorative-circle floating-slow"
        style={{
          position: 'absolute',
          top: '60%',
          left: '3%',
          width: '24px',
          height: '24px',
          background: '#FF6B35',
          opacity: 0.3,
          transform: 'rotate(45deg)',
          borderRadius: '4px'
        }} 
      />

      {/* Main Content Grid */}
      <div 
        className="hero-grid"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          width: '100%'
        }}
      >
        
        {/* Left Content */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Tagline */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '40px',
              height: '3px',
              background: '#FF6B35',
              borderRadius: '2px'
            }} />
            <span style={{
              fontSize: '14px',
              fontWeight: '700',
              color: '#64748B',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Your Future Awaits
            </span>
          </div>

          {/* Main Headline */}
          <h1 
            className="hero-headline"
            style={{
              fontSize: '68px',
              fontWeight: '800',
              color: '#1E3A5F',
              lineHeight: '1.05',
              letterSpacing: '-2px',
              marginBottom: '28px'
            }}
          >
            Study
            <br />
            Abroad
            <br />
            <span style={{ 
              color: '#FF6B35',
              position: 'relative',
              display: 'inline-block'
            }}>
              With Confidence
              <svg 
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '0',
                  width: '100%',
                  height: '12px'
                }}
                viewBox="0 0 300 12" 
                fill="none"
              >
                <path 
                  d="M2 8C50 3 150 3 298 8" 
                  stroke="#2EC4B6" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className="hero-subtext"
            style={{
              fontSize: '18px',
              lineHeight: '1.7',
              color: '#64748B',
              maxWidth: '480px',
              marginBottom: '40px'
            }}
          >
            Your trusted partner for international education. We guide you to top universities in 
            <span style={{ color: '#1E3A5F', fontWeight: '600' }}> Canada</span>,
            <span style={{ color: '#1E3A5F', fontWeight: '600' }}> Australia</span>,
            <span style={{ color: '#1E3A5F', fontWeight: '600' }}> France</span> &
            <span style={{ color: '#1E3A5F', fontWeight: '600' }}> Spain</span>.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-row" style={{ display: 'flex', gap: '16px', marginBottom: '50px' }}>
            <button className="btn-primary" style={{ padding: '18px 36px', fontSize: '16px' }}>
              Start Your Journey
              <span style={{ fontSize: '20px' }}>→</span>
            </button>
            <button className="btn-secondary">
              <span style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#FF6B35',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px'
              }}>▶</span>
              Watch Our Story
            </button>
          </div>

          {/* Stats Row */}
          <div className="hero-stats-row" style={{ display: 'flex', gap: '20px' }}>
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
                  fontSize: '20px'
                }}>🎓</div>
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
                  fontSize: '20px'
                }}>🌍</div>
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

          {/* Floating Badge - Top Left */}
          <div 
            className="badge floating-badge floating floating-delay-1"
            style={{
              position: 'absolute',
              top: '15%',
              left: '0%',
              zIndex: 3
            }}
          >
            <span style={{ fontSize: '24px' }}>🇨🇦</span>
            <span>Study in Canada</span>
          </div>

          {/* Floating Badge - Right */}
          <div 
            className="badge floating-badge floating floating-delay-2"
            style={{
              position: 'absolute',
              top: '35%',
              right: '-5%',
              zIndex: 3
            }}
          >
            <span style={{ fontSize: '24px' }}>🇦🇺</span>
            <span>Australia</span>
          </div>

          {/* Floating Badge - Bottom Right */}
          <div 
            className="badge floating-badge floating floating-delay-3"
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

          {/* Floating Badge - Bottom Left */}
          <div 
            className="badge floating-badge floating-slow"
            style={{
              position: 'absolute',
              bottom: '8%',
              left: '10%',
              zIndex: 3,
              background: '#1E3A5F',
              color: 'white'
            }}
          >
            <div style={{ display: 'flex', marginRight: '4px' }}>
              {['🇨🇦', '🇦🇺', '🇫🇷', '🇪🇸'].map((flag, i) => (
                <span key={i} style={{ 
                  fontSize: '18px',
                  marginLeft: i > 0 ? '-6px' : 0 
                }}>{flag}</span>
              ))}
            </div>
            <span style={{ fontWeight: '600', fontSize: '13px' }}>20+ Countries</span>
          </div>
        </div>
      </div>

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
    </section>
  );
}
