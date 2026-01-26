// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { submitPartnerForm } from '@/services/dbServices';
// import type { PartnerFormData, Message } from '@/types';
// import Navbar from '../components/Navbar';

// // ============================================
// // PARTNER WITH US PAGE
// // Luxury Professional Design
// // ============================================

// export default function PartnerPage() {
//   const [formData, setFormData] = useState<PartnerFormData>({
//     organizationName: '',
//     contactPerson: '',
//     email: '',
//     phone: '',
//     country: '',
//     partnershipType: '',
//     message: ''
//   });
//   const [loading, setLoading] = useState<boolean>(false);
//   const [message, setMessage] = useState<Message>({ type: '', text: '' });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage({ type: '', text: '' });

//     try {
//       await submitPartnerForm(formData);

//       setMessage({ 
//         type: 'success', 
//         text: 'Thank you for your interest! Our partnership team will contact you within 48 hours.' 
//       });
      
//       setFormData({
//         organizationName: '',
//         contactPerson: '',
//         email: '',
//         phone: '',
//         country: '',
//         partnershipType: '',
//         message: ''
//       });
//     } catch (error) {
//       setMessage({ 
//         type: 'error', 
//         text: 'Something went wrong. Please try again or email us at partners@globalcircleedu.com' 
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//     <Navbar/>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

//         * {
//           box-sizing: border-box;
//         }

//         body {
//           margin: 0;
//           padding: 0;
//         }

//         .partner-input,
//         .partner-select,
//         .partner-textarea {
//           width: 100%;
//           padding: 16px 20px;
//           border: 2px solid #E2E8F0;
//           border-radius: 12px;
//           font-size: 15px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           transition: all 0.3s ease;
//           background: white;
//           color: #1E293B;
//         }

//         .partner-input:focus,
//         .partner-select:focus,
//         .partner-textarea:focus {
//           outline: none;
//           border-color: #FF6B35;
//           box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.1);
//         }

//         .partner-textarea {
//           min-height: 120px;
//           resize: vertical;
//         }

//         .partner-input::placeholder,
//         .partner-textarea::placeholder {
//           color: #94A3B8;
//         }

//         .submit-btn-partner {
//           width: 100%;
//           background: #FF6B35;
//           color: white;
//           border: none;
//           padding: 18px 32px;
//           border-radius: 50px;
//           font-weight: 700;
//           font-size: 16px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 8px 24px rgba(255, 107, 53, 0.3);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }

//         .submit-btn-partner:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 12px 32px rgba(255, 107, 53, 0.4);
//         }

//         .submit-btn-partner:disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//           transform: none;
//         }

//         .feature-card {
//           background: white;
//           border-radius: 20px;
//           padding: 32px;
//           border: 1px solid #E2E8F0;
//           transition: all 0.3s ease;
//           position: relative;
//           overflow: hidden;
//         }

//         .feature-card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 4px;
//           background: #FF6B35;
//           transform: scaleX(0);
//           transition: transform 0.3s ease;
//         }

//         .feature-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
//           border-color: #FF6B35;
//         }

//         .feature-card:hover::before {
//           transform: scaleX(1);
//         }

//         .stat-box {
//           background: #FFFFFF;
//           border-radius: 16px;
//           padding: 24px;
//           border: 1px solid #E2E8F0;
//           text-align: center;
//         }

//         .icon-circle {
//           width: 64px;
//           height: 64px;
//           border-radius: 50%;
//           background: rgba(255, 107, 53, 0.1);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin: 0 auto 20px;
//         }

//         .icon-square {
//           width: 64px;
//           height: 64px;
//           border-radius: 16px;
//           background: rgba(30, 58, 95, 0.1);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 20px;
//         }

//         .gradient-text-partner {
//           color: #FF6B35;
//         }

//         .decorative-blob {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(60px);
//           opacity: 0.3;
//           animation: float 8s ease-in-out infinite;
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-30px) rotate(5deg); }
//         }

//         .partnership-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: rgba(255, 107, 53, 0.1);
//           border: 1px solid rgba(255, 107, 53, 0.2);
//           border-radius: 50px;
//           padding: 8px 20px;
//           font-size: 14px;
//           font-weight: 600;
//           color: #FF6B35;
//         }

//         @media (max-width: 1024px) {
//           .hero-grid-partner {
//             grid-template-columns: 1fr !important;
//           }

//           .features-grid {
//             grid-template-columns: 1fr !important;
//           }

//           .stats-grid {
//             grid-template-columns: repeat(2, 1fr) !important;
//           }
//         }

//         @media (max-width: 640px) {
//           .stats-grid {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>

//       <div style={{
//         paddingTop:'40px',
//         fontFamily: '"Plus Jakarta Sans", sans-serif',
//         background: '#FFFFFF',
//         minHeight: '100vh',
//         position: 'relative',
//         overflow: 'hidden'
//       }}>

//         {/* Decorative Blobs */}
//         <div className="decorative-blob" style={{
//           width: '600px',
//           height: '600px',
//           background: '#FF6B35',
//           opacity: 0.05,
//           top: '-300px',
//           right: '-300px'
//         }} />

//         <div className="decorative-blob" style={{
//           width: '500px',
//           height: '500px',
//           background: '#1E3A5F',
//           opacity: 0.05,
//           bottom: '-250px',
//           left: '-250px',
//           animationDelay: '4s'
//         }} />
// {/* Hero Section - Split Design */}
// <div style={{
//   position: 'relative',
//   display: 'grid',
//   gridTemplateColumns: '55fr 45fr',
//   minHeight: '70vh',
//   overflow: 'hidden'
// }}>
  
//   {/* Left Side - Content with Navy Background */}
//   <div style={{
//     background: '#1E3A5F',
//     padding: '80px 48px 60px',
//     position: 'relative',
//     zIndex: 2
//   }}>
//     <div className="partnership-badge" style={{
//       marginBottom: '20px',
//       background: 'rgba(255, 255, 255, 0.1)',
//       border: '1px solid rgba(255, 255, 255, 0.2)',
//       color: 'white'
//     }}>
//       <div style={{
//         width: '8px',
//         height: '8px',
//         borderRadius: '50%',
//         background: '#FF6B35'
//       }} />
//       Partnership Opportunities
//     </div>

//     <h1 style={{
//       fontSize: '72px',
//       fontWeight: '800',
//       lineHeight: '0.95',
//       color: 'white',
//       marginBottom: '20px'
//     }}>
//       Partner<br />
//       <span style={{ 
//         color: '#FF6B35',
//         fontStyle: 'italic'
//       }}>With Us</span>
//     </h1>

//     <p style={{
//       fontSize: '16px',
//       lineHeight: '1.6',
//       color: 'rgba(255, 255, 255, 0.85)',
//       marginBottom: '32px',
//       maxWidth: '480px'
//     }}>
//       Join forces with Global Circle Edu to expand your reach, grow your business, 
//       and help students achieve their dreams of studying abroad.
//     </p>

//     {/* Stats in Compact Grid */}
//     <div style={{
//       display: 'grid',
//       gridTemplateColumns: 'repeat(3, 1fr)',
//       gap: '20px',
//       maxWidth: '520px'
//     }}>
//       {[
//         { number: '500+', label: 'Partners' },
//         { number: '26', label: 'Countries' },
//         { number: '10K+', label: 'Students' }
//       ].map((stat, idx) => (
//         <div key={idx} style={{
//           background: 'rgba(255, 255, 255, 0.08)',
//           borderRadius: '12px',
//           padding: '16px 12px',
//           textAlign: 'center',
//           border: '1px solid rgba(255, 255, 255, 0.1)'
//         }}>
//           <div style={{
//             fontSize: '28px',
//             fontWeight: '800',
//             color: '#FF6B35',
//             marginBottom: '4px'
//           }}>
//             {stat.number}
//           </div>
//           <div style={{
//             fontSize: '12px',
//             color: 'rgba(255, 255, 255, 0.7)',
//             fontWeight: '600'
//           }}>
//             {stat.label}
//           </div>
//         </div>
//       ))}
//     </div>

//     {/* Decorative Elements */}
//     <div style={{
//       position: 'absolute',
//       bottom: '40px',
//       left: '48px',
//       width: '80px',
//       height: '80px',
//       borderRadius: '50%',
//       border: '3px solid rgba(255, 107, 53, 0.3)',
//       animation: 'pulse 3s ease-in-out infinite'
//     }} />
    
//     <div style={{
//       position: 'absolute',
//       top: '100px',
//       right: '60px',
//       width: '120px',
//       height: '120px',
//       borderRadius: '20px',
//       background: 'rgba(255, 107, 53, 0.1)',
//       transform: 'rotate(25deg)',
//       animation: 'float 6s ease-in-out infinite'
//     }} />
//   </div>

//   {/* Right Side - Image */}
//   <div style={{
//     position: 'relative',
//     background: '#F1F5F9',
//     overflow: 'hidden'
//   }}>
//     <img 
//       src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200"
//       alt="Partnership collaboration"
//       style={{
//         width: '100%',
//         height: '100%',
//         objectFit: 'cover',
//         objectPosition: 'center'
//       }}
//     />
//     <div style={{
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: 'rgba(30, 58, 95, 0.25)'
//     }} />
//   </div>
// </div>

//         {/* Who We Are Section - Compact */}
//         <div style={{
//           maxWidth: '1400px',
//           margin: '0 auto',
//           padding: '50px 48px 40px',
//           background: '#FFFFFF'
//         }}>
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: '40fr 60fr',
//             gap: '40px',
//             alignItems: 'start'
//           }}>
            
//             {/* Left - Compact Image with Overlays */}
//             <div style={{ position: 'relative' }}>
//               <div style={{
//                 borderRadius: '24px',
//                 overflow: 'hidden',
//                 height: '420px',
//                 boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
//                 position: 'relative'
//               }}>
//                 <img 
//                   src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
//                   alt="Team collaboration"
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover'
//                   }}
//                 />
                
//                 {/* Floating Stat Card */}
//                 <div style={{
//                   position: 'absolute',
//                   bottom: '20px',
//                   left: '20px',
//                   right: '20px',
//                   background: 'rgba(255, 255, 255, 0.95)',
//                   backdropFilter: 'blur(10px)',
//                   borderRadius: '16px',
//                   padding: '20px',
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center'
//                 }}>
//                   <div>
//                     <div style={{
//                       fontSize: '32px',
//                       fontWeight: '800',
//                       color: '#FF6B35',
//                       lineHeight: '1'
//                     }}>
//                       98%
//                     </div>
//                     <div style={{
//                       fontSize: '13px',
//                       color: '#64748B',
//                       fontWeight: '600',
//                       marginTop: '4px'
//                     }}>
//                       Success Rate
//                     </div>
//                   </div>
//                   <div style={{
//                     width: '48px',
//                     height: '48px',
//                     borderRadius: '12px',
//                     background: '#FF6B35',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '24px'
//                   }}>
//                     ✓
//                   </div>
//                 </div>
//               </div>

//               {/* Decorative Shape */}
//               <div style={{
//                 position: 'absolute',
//                 top: '-20px',
//                 right: '-20px',
//                 width: '140px',
//                 height: '140px',
//                 borderRadius: '50%',
//                 background: 'rgba(255, 107, 53, 0.08)',
//                 zIndex: -1
//               }} />
//             </div>

//             {/* Right - Content */}
//             <div style={{ paddingTop: '10px' }}>
//               <div style={{
//                 display: 'inline-block',
//                 background: 'rgba(255, 107, 53, 0.1)',
//                 borderRadius: '10px',
//                 padding: '8px 16px',
//                 marginBottom: '16px'
//               }}>
//                 <span style={{
//                   fontSize: '12px',
//                   fontWeight: '700',
//                   color: '#FF6B35',
//                   letterSpacing: '1.2px',
//                   textTransform: 'uppercase'
//                 }}>
//                   About Us
//                 </span>
//               </div>

//               <h2 style={{
//                 fontSize: '42px',
//                 fontWeight: '800',
//                 lineHeight: '1.15',
//                 color: '#1E293B',
//                 marginBottom: '20px'
//               }}>
//                 Who <span className="gradient-text-partner">We Are</span>
//               </h2>

//               <p style={{
//                 fontSize: '16px',
//                 lineHeight: '1.7',
//                 color: '#64748B',
//                 marginBottom: '18px'
//               }}>
//                 Global Circle Edu is a leading international education consultancy based in Dubai, 
//                 specializing in connecting students with top universities across 26 countries worldwide.
//               </p>

//               <p style={{
//                 fontSize: '16px',
//                 lineHeight: '1.7',
//                 color: '#64748B',
//                 marginBottom: '24px'
//               }}>
//                 With over 10,000 successful student placements and a network of 500+ partner organizations, 
//                 we've established ourselves as a trusted name in overseas education consulting.
//               </p>

//               {/* Compact Features Grid */}
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(2, 1fr)',
//                 gap: '12px',
//                 marginTop: '24px'
//               }}>
//                 {[
//                   { icon: '⚡', text: 'Dubai-based with global reach', color: '#FF6B35' },
//                   { icon: '🎯', text: 'Expert counseling & visa support', color: '#1E3A5F' },
//                   { icon: '🔄', text: 'End-to-end comprehensive care', color: '#FF6B35' },
//                   { icon: '📈', text: 'Proven success track record', color: '#1E3A5F' }
//                 ].map((item, index) => (
//                   <div key={index} style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '10px',
//                     background: '#F8FAFC',
//                     padding: '12px 16px',
//                     borderRadius: '10px',
//                     border: '1px solid #E2E8F0'
//                   }}>
//                     <div style={{
//                       width: '32px',
//                       height: '32px',
//                       borderRadius: '50%',
//                       background: item.color,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       flexShrink: 0
//                     }}>
//                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
//                         <polyline points="20 6 9 17 4 12"/>
//                       </svg>
//                     </div>
//                     <span style={{
//                       fontSize: '14px',
//                       color: '#1E293B',
//                       fontWeight: '600',
//                       lineHeight: '1.4'
//                     }}>
//                       {item.text}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* What We Do Section - Ultra Compact */}
//         <div style={{
//           background: '#FFFFFF',
//           padding: '50px 48px 40px'
//         }}>
//           <div style={{
//             maxWidth: '1200px',
//             margin: '0 auto'
//           }}>
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: '380px 1fr',
//               gap: '60px',
//               alignItems: 'start'
//             }}>
              
//               {/* Left - Header */}
//               <div>
//                 <div style={{
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   background: 'rgba(30, 58, 95, 0.08)',
//                   borderRadius: '8px',
//                   padding: '6px 14px',
//                   marginBottom: '14px'
//                 }}>
//                   <span style={{
//                     fontSize: '11px',
//                     fontWeight: '700',
//                     color: '#1E3A5F',
//                     letterSpacing: '1.2px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Our Services
//                   </span>
//                 </div>

//                 <h2 style={{
//                   fontSize: '36px',
//                   fontWeight: '800',
//                   lineHeight: '1.2',
//                   color: '#1E293B',
//                   marginBottom: '12px'
//                 }}>
//                   What <span className="gradient-text-partner">We Do</span>
//                 </h2>
                
//                 <p style={{
//                   fontSize: '15px',
//                   lineHeight: '1.6',
//                   color: '#64748B',
//                   marginBottom: '20px'
//                 }}>
//                   Comprehensive international education consulting services.
//                 </p>

//                 {/* Stats */}
//                 <div style={{
//                   display: 'flex',
//                   gap: '20px',
//                   paddingTop: '20px',
//                   borderTop: '2px solid #E2E8F0'
//                 }}>
//                   <div>
//                     <div style={{
//                       fontSize: '28px',
//                       fontWeight: '800',
//                       color: '#FF6B35',
//                       lineHeight: '1'
//                     }}>
//                       26
//                     </div>
//                     <div style={{
//                       fontSize: '12px',
//                       color: '#64748B',
//                       fontWeight: '600',
//                       marginTop: '4px'
//                     }}>
//                       Countries
//                     </div>
//                   </div>
//                   <div>
//                     <div style={{
//                       fontSize: '28px',
//                       fontWeight: '800',
//                       color: '#1E3A5F',
//                       lineHeight: '1'
//                     }}>
//                       500+
//                     </div>
//                     <div style={{
//                       fontSize: '12px',
//                       color: '#64748B',
//                       fontWeight: '600',
//                       marginTop: '4px'
//                     }}>
//                       Universities
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right - Compact Services List */}
//               <div style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '16px'
//               }}>
//                 {[
//                   {
//                     title: 'University Selection',
//                     desc: 'Expert guidance in choosing universities matching your profile and career goals.',
//                     color: '#FF6B35'
//                   },
//                   {
//                     title: 'Visa Assistance',
//                     desc: 'Complete visa support with document preparation and interview coaching.',
//                     color: '#1E3A5F'
//                   },
//                   {
//                     title: 'Application Support',
//                     desc: 'End-to-end application assistance including SOP writing and LOR guidance.',
//                     color: '#FF6B35'
//                   },
//                   {
//                     title: 'Scholarship Guidance',
//                     desc: 'Identifying and applying for scholarships and financial aid opportunities.',
//                     color: '#1E3A5F'
//                   },
//                   {
//                     title: 'Career Counseling',
//                     desc: 'Professional guidance to align education choices with career objectives.',
//                     color: '#FF6B35'
//                   },
//                   {
//                     title: 'Pre-Departure Support',
//                     desc: 'Accommodation assistance, forex guidance, and orientation sessions.',
//                     color: '#1E3A5F'
//                   }
//                 ].map((service, index) => (
//                   <div key={index} style={{
//                     paddingLeft: '20px',
//                     borderLeft: `3px solid ${service.color}`,
//                     transition: 'all 0.2s ease'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.paddingLeft = '24px';
//                     e.currentTarget.style.borderLeftWidth = '4px';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.paddingLeft = '20px';
//                     e.currentTarget.style.borderLeftWidth = '3px';
//                   }}
//                   >
//                     <h3 style={{
//                       fontSize: '16px',
//                       fontWeight: '700',
//                       color: '#1E293B',
//                       marginBottom: '4px',
//                       lineHeight: '1.3'
//                     }}>
//                       {service.title}
//                     </h3>
                    
//                     <p style={{
//                       fontSize: '14px',
//                       lineHeight: '1.6',
//                       color: '#64748B',
//                       margin: 0
//                     }}>
//                       {service.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Partnership Benefits Section - Ultra Compact */}
//         <div style={{
//           background: '#FFFFFF',
//           padding: '50px 48px 40px',
//           borderTop: '1px solid #E2E8F0'
//         }}>
//           <div style={{
//             maxWidth: '1200px',
//             margin: '0 auto'
//           }}>
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: '380px 1fr',
//               gap: '60px',
//               alignItems: 'start'
//             }}>
              
//               {/* Left - Header & Stats */}
//               <div>
//                 <div style={{
//                   display: 'inline-block',
//                   background: 'rgba(255, 107, 53, 0.08)',
//                   borderRadius: '8px',
//                   padding: '6px 14px',
//                   marginBottom: '14px'
//                 }}>
//                   <span style={{
//                     fontSize: '11px',
//                     fontWeight: '700',
//                     color: '#FF6B35',
//                     letterSpacing: '1.2px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Benefits
//                   </span>
//                 </div>

//                 <h2 style={{
//                   fontSize: '36px',
//                   fontWeight: '800',
//                   lineHeight: '1.2',
//                   color: '#1E293B',
//                   marginBottom: '12px'
//                 }}>
//                   Why <span className="gradient-text-partner">Partner</span>
//                 </h2>

//                 <p style={{
//                   fontSize: '15px',
//                   lineHeight: '1.6',
//                   color: '#64748B',
//                   marginBottom: '20px'
//                 }}>
//                   Unlock growth opportunities in international education.
//                 </p>

//                 {/* Compact Stats */}
//                 <div style={{
//                   background: '#1E3A5F',
//                   borderRadius: '16px',
//                   padding: '20px 18px',
//                   display: 'grid',
//                   gridTemplateColumns: '1fr 1fr',
//                   gap: '14px'
//                 }}>
//                   {[
//                     { value: '500+', label: 'Partners' },
//                     { value: '10K+', label: 'Students' },
//                     { value: '26', label: 'Countries' },
//                     { value: '98%', label: 'Success' }
//                   ].map((stat, idx) => (
//                     <div key={idx} style={{
//                       textAlign: 'center',
//                       padding: '10px 8px',
//                       background: 'rgba(255, 255, 255, 0.05)',
//                       borderRadius: '10px'
//                     }}>
//                       <div style={{
//                         fontSize: '22px',
//                         fontWeight: '800',
//                         color: '#FF6B35',
//                         lineHeight: '1'
//                       }}>
//                         {stat.value}
//                       </div>
//                       <div style={{
//                         fontSize: '10px',
//                         color: 'rgba(255, 255, 255, 0.8)',
//                         fontWeight: '600',
//                         marginTop: '4px'
//                       }}>
//                         {stat.label}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Right - Compact Benefits List */}
//               <div style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '16px'
//               }}>
//                 {[
//                   {
//                     title: 'Global Network Access',
//                     desc: 'Connect with 500+ universities across 26 countries and our extensive network.',
//                     color: '#FF6B35'
//                   },
//                   {
//                     title: 'Revenue Growth',
//                     desc: 'Increase revenue streams through commission structure and referral programs.',
//                     color: '#1E3A5F'
//                   },
//                   {
//                     title: 'Marketing Support',
//                     desc: 'Co-branded marketing materials, digital campaigns, and promotional support.',
//                     color: '#FF6B35'
//                   },
//                   {
//                     title: 'Real-Time Dashboard',
//                     desc: 'Partner portal with application tracking, analytics, and performance metrics.',
//                     color: '#1E3A5F'
//                   },
//                   {
//                     title: 'Dedicated Support',
//                     desc: 'Assigned partnership manager for personalized support and quick resolution.',
//                     color: '#FF6B35'
//                   },
//                   {
//                     title: 'Training & Resources',
//                     desc: 'Regular training sessions, webinars, and comprehensive resource libraries.',
//                     color: '#1E3A5F'
//                   }
//                 ].map((benefit, index) => (
//                   <div key={index} style={{
//                     paddingLeft: '20px',
//                     borderLeft: `3px solid ${benefit.color}`,
//                     transition: 'all 0.2s ease'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.paddingLeft = '24px';
//                     e.currentTarget.style.borderLeftWidth = '4px';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.paddingLeft = '20px';
//                     e.currentTarget.style.borderLeftWidth = '3px';
//                   }}
//                   >
//                     <h3 style={{
//                       fontSize: '16px',
//                       fontWeight: '700',
//                       color: '#1E293B',
//                       marginBottom: '4px',
//                       lineHeight: '1.3'
//                     }}>
//                       {benefit.title}
//                     </h3>
                    
//                     <p style={{
//                       fontSize: '14px',
//                       lineHeight: '1.6',
//                       color: '#64748B',
//                       margin: 0
//                     }}>
//                       {benefit.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>

//         {/* Partnership Form Section - Compact */}
//         <div style={{
//           background: '#FFFFFF',
//           padding: '50px 48px',
//           borderTop: '1px solid #E2E8F0'
//         }}>
//           <div style={{
//             maxWidth: '1400px',
//             margin: '0 auto'
//           }}>
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: '45fr 55fr',
//               gap: '48px',
//               alignItems: 'start'
//             }}>
              
//               {/* Left - Info Cards */}
//               <div>
//                 <div style={{
//                   display: 'inline-block',
//                   background: 'rgba(255, 107, 53, 0.1)',
//                   borderRadius: '10px',
//                   padding: '8px 16px',
//                   marginBottom: '16px'
//                 }}>
//                   <span style={{
//                     fontSize: '12px',
//                     fontWeight: '700',
//                     color: '#FF6B35',
//                     letterSpacing: '1.2px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Get Started
//                   </span>
//                 </div>

//                 <h2 style={{
//                   fontSize: '38px',
//                   fontWeight: '800',
//                   lineHeight: '1.2',
//                   color: '#1E293B',
//                   marginBottom: '16px'
//                 }}>
//                   Let's Build<br />
//                   <span className="gradient-text-partner">Something Amazing</span>
//                 </h2>

//                 <p style={{
//                   fontSize: '15px',
//                   lineHeight: '1.7',
//                   color: '#64748B',
//                   marginBottom: '32px'
//                 }}>
//                   Our partnership team will get in touch within 48 hours to discuss 
//                   opportunities tailored to your organization.
//                 </p>

//                 {/* Quick Info Cards */}
//                 <div style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: '16px'
//                 }}>
//                   {[
//                     {
//                       icon: (
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
//                           <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
//                         </svg>
//                       ),
//                       title: '48-Hour Response',
//                       desc: 'Quick turnaround on all partnership inquiries',
//                       color: '#FF6B35'
//                     },
//                     {
//                       icon: (
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
//                           <circle cx="12" cy="12" r="10"/>
//                           <path d="m8 12 2 2 4-4"/>
//                         </svg>
//                       ),
//                       title: 'Tailored Solutions',
//                       desc: 'Customized partnership models for your needs',
//                       color: '#1E3A5F'
//                     },
//                     {
//                       icon: (
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
//                           <line x1="12" y1="20" x2="12" y2="10"/>
//                           <line x1="18" y1="20" x2="18" y2="4"/>
//                           <line x1="6" y1="20" x2="6" y2="16"/>
//                         </svg>
//                       ),
//                       title: 'Growth Support',
//                       desc: 'Dedicated resources to help you succeed',
//                       color: '#FF6B35'
//                     }
//                   ].map((item, idx) => (
//                     <div key={idx} style={{
//                       background: 'white',
//                       borderRadius: '16px',
//                       padding: '20px',
//                       border: '2px solid #E2E8F0',
//                       display: 'flex',
//                       gap: '16px',
//                       alignItems: 'start'
//                     }}>
//                       <div style={{
//                         width: '44px',
//                         height: '44px',
//                         borderRadius: '50%',
//                         background: item.color,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         flexShrink: 0
//                       }}>
//                         {item.icon}
//                       </div>
//                       <div>
//                         <div style={{
//                           fontSize: '16px',
//                           fontWeight: '700',
//                           color: '#1E293B',
//                           marginBottom: '4px'
//                         }}>
//                           {item.title}
//                         </div>
//                         <div style={{
//                           fontSize: '13px',
//                           color: '#64748B',
//                           lineHeight: '1.5'
//                         }}>
//                           {item.desc}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Contact Alternative */}
//                 <div style={{
//                   marginTop: '32px',
//                   padding: '20px',
//                   background: '#1E3A5F',
//                   borderRadius: '16px',
//                   color: 'white'
//                 }}>
//                   <div style={{
//                     fontSize: '14px',
//                     fontWeight: '600',
//                     marginBottom: '12px',
//                     opacity: 0.9
//                   }}>
//                     Prefer Direct Contact?
//                   </div>
//                   <a 
//                     href="mailto:partners@globalcircleedu.com"
//                     style={{
//                       fontSize: '16px',
//                       fontWeight: '700',
//                       color: '#FF6B35',
//                       textDecoration: 'none',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '8px'
//                     }}
//                   >
//                     partners@globalcircleedu.com
//                     <span style={{ fontSize: '12px' }}>→</span>
//                   </a>
//                 </div>
//               </div>

//               {/* Right - Form Card */}
//               <div style={{
//                 background: 'white',
//                 borderRadius: '24px',
//                 padding: '40px',
//                 boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
//                 border: '2px solid #E2E8F0'
//               }}>
                
//                 {/* Success/Error Message */}
//                 {message.text && (
//                   <div style={{
//                     marginBottom: '24px',
//                     padding: '14px 18px',
//                     borderRadius: '12px',
//                     border: `2px solid ${message.type === 'success' ? '#10B981' : '#EF4444'}`,
//                     background: message.type === 'success' 
//                       ? 'rgba(16, 185, 129, 0.1)' 
//                       : 'rgba(239, 68, 68, 0.1)',
//                     color: message.type === 'success' ? '#047857' : '#DC2626',
//                     fontSize: '14px',
//                     fontWeight: '600',
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '10px'
//                   }}>
//                     <span style={{ fontSize: '18px' }}>
//                       {message.type === 'success' ? '✓' : '✕'}
//                     </span>
//                     {message.text}
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit}>
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    
//                     {/* Organization Name */}
//                     <div>
//                       <label style={{
//                         display: 'block',
//                         fontSize: '13px',
//                         fontWeight: '600',
//                         color: '#1E293B',
//                         marginBottom: '8px'
//                       }}>
//                         Organization Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="organizationName"
//                         required
//                         value={formData.organizationName}
//                         onChange={handleChange}
//                         className="partner-input"
//                         placeholder="ABC Education Consultancy"
//                       />
//                     </div>

//                     {/* Contact Person & Email Row */}
//                     <div style={{
//                       display: 'grid',
//                       gridTemplateColumns: '1fr 1fr',
//                       gap: '16px'
//                     }}>
//                       <div>
//                         <label style={{
//                           display: 'block',
//                           fontSize: '13px',
//                           fontWeight: '600',
//                           color: '#1E293B',
//                           marginBottom: '8px'
//                         }}>
//                           Contact Person *
//                         </label>
//                         <input
//                           type="text"
//                           name="contactPerson"
//                           required
//                           value={formData.contactPerson}
//                           onChange={handleChange}
//                           className="partner-input"
//                           placeholder="John Doe"
//                         />
//                       </div>

//                       <div>
//                         <label style={{
//                           display: 'block',
//                           fontSize: '13px',
//                           fontWeight: '600',
//                           color: '#1E293B',
//                           marginBottom: '8px'
//                         }}>
//                           Email Address *
//                         </label>
//                         <input
//                           type="email"
//                           name="email"
//                           required
//                           value={formData.email}
//                           onChange={handleChange}
//                           className="partner-input"
//                           placeholder="john@example.com"
//                         />
//                       </div>
//                     </div>

//                     {/* Phone & Country Row */}
//                     <div style={{
//                       display: 'grid',
//                       gridTemplateColumns: '1fr 1fr',
//                       gap: '16px'
//                     }}>
//                       <div>
//                         <label style={{
//                           display: 'block',
//                           fontSize: '13px',
//                           fontWeight: '600',
//                           color: '#1E293B',
//                           marginBottom: '8px'
//                         }}>
//                           Phone Number *
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           required
//                           value={formData.phone}
//                           onChange={handleChange}
//                           className="partner-input"
//                           placeholder="+1 234 567 8900"
//                         />
//                       </div>

//                       <div>
//                         <label style={{
//                           display: 'block',
//                           fontSize: '13px',
//                           fontWeight: '600',
//                           color: '#1E293B',
//                           marginBottom: '8px'
//                         }}>
//                           Country *
//                         </label>
//                         <input
//                           type="text"
//                           name="country"
//                           required
//                           value={formData.country}
//                           onChange={handleChange}
//                           className="partner-input"
//                           placeholder="United States"
//                         />
//                       </div>
//                     </div>

//                     {/* Partnership Type */}
//                     <div>
//                       <label style={{
//                         display: 'block',
//                         fontSize: '13px',
//                         fontWeight: '600',
//                         color: '#1E293B',
//                         marginBottom: '8px'
//                       }}>
//                         Partnership Type *
//                       </label>
//                       <select
//                         name="partnershipType"
//                         required
//                         value={formData.partnershipType}
//                         onChange={handleChange}
//                         className="partner-select"
//                       >
//                         <option value="">Select partnership type</option>
//                         <option value="University">University / College</option>
//                         <option value="Agency">Education Agency</option>
//                         <option value="Corporate">Corporate / Company</option>
//                         <option value="School">School / Institute</option>
//                         <option value="Other">Other</option>
//                       </select>
//                     </div>

//                     {/* Message */}
//                     <div>
//                       <label style={{
//                         display: 'block',
//                         fontSize: '13px',
//                         fontWeight: '600',
//                         color: '#1E293B',
//                         marginBottom: '8px'
//                       }}>
//                         Message (Optional)
//                       </label>
//                       <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         className="partner-textarea"
//                         placeholder="Tell us about your organization and partnership goals..."
//                         style={{ minHeight: '100px' }}
//                       />
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="submit-btn-partner"
//                       style={{
//                         marginTop: '8px'
//                       }}
//                     >
//                       {loading ? 'Submitting...' : 'Submit Partnership Request'}
//                     </button>

//                     {/* Privacy Notice */}
//                     <p style={{
//                       fontSize: '12px',
//                       color: '#94A3B8',
//                       textAlign: 'center',
//                       lineHeight: '1.6',
//                       margin: '4px 0 0'
//                     }}>
//                       By submitting this form, you agree to our{' '}
//                       <Link href="/privacy" style={{ color: '#FF6B35', textDecoration: 'none' }}>
//                         Privacy Policy
//                       </Link>
//                       {' '}and{' '}
//                       <Link href="/terms" style={{ color: '#FF6B35', textDecoration: 'none' }}>
//                         Terms
//                       </Link>
//                     </p>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA - Professional & Sophisticated */}
//         <div style={{
//           background: '#1E3A5F',
//           padding: '60px 48px',
//           position: 'relative',
//           overflow: 'hidden'
//         }}>
//           {/* Subtle Pattern Background */}
//           <div style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             opacity: 0.4
//           }} />

//           <div style={{ 
//             maxWidth: '1200px', 
//             margin: '0 auto',
//             position: 'relative',
//             zIndex: 1
//           }}>
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr',
//               gap: '40px',
//               alignItems: 'center'
//             }}>
              
//               {/* Left Content */}
//               <div>
//                 <div style={{
//                   display: 'inline-block',
//                   background: 'rgba(255, 107, 53, 0.15)',
//                   border: '1px solid rgba(255, 107, 53, 0.3)',
//                   borderRadius: '8px',
//                   padding: '6px 14px',
//                   marginBottom: '16px'
//                 }}>
//                   <span style={{
//                     fontSize: '11px',
//                     fontWeight: '700',
//                     color: '#FF6B35',
//                     letterSpacing: '1.5px',
//                     textTransform: 'uppercase'
//                   }}>
//                     Need Assistance?
//                   </span>
//                 </div>

//                 <h3 style={{
//                   fontSize: '32px',
//                   fontWeight: '800',
//                   color: 'white',
//                   marginBottom: '12px',
//                   lineHeight: '1.2'
//                 }}>
//                   Questions About<br />Partnership Opportunities?
//                 </h3>
                
//                 <p style={{
//                   fontSize: '15px',
//                   color: 'rgba(255, 255, 255, 0.75)',
//                   lineHeight: '1.6',
//                   marginBottom: 0
//                 }}>
//                   Our dedicated partnership team is available to discuss tailored solutions 
//                   and answer any questions about collaboration opportunities.
//                 </p>
//               </div>

//               {/* Right Contact Cards */}
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: '1fr 1fr',
//                 gap: '16px'
//               }}>
//                 {/* Email Card */}
//                 <a 
//                   href="mailto:partners@globalcircleedu.com"
//                   style={{
//                     background: 'rgba(255, 255, 255, 0.08)',
//                     backdropFilter: 'blur(10px)',
//                     border: '1px solid rgba(255, 255, 255, 0.12)',
//                     borderRadius: '16px',
//                     padding: '24px 20px',
//                     textDecoration: 'none',
//                     transition: 'all 0.3s ease',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '12px'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
//                     e.currentTarget.style.borderColor = '#FF6B35';
//                     e.currentTarget.style.transform = 'translateY(-4px)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
//                     e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   }}
//                 >
//                   <div style={{
//                     width: '44px',
//                     height: '44px',
//                     borderRadius: '10px',
//                     background: 'rgba(255, 107, 53, 0.15)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                   }}>
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
//                       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
//                       <polyline points="22,6 12,13 2,6"/>
//                     </svg>
//                   </div>
//                   <div>
//                     <div style={{
//                       fontSize: '11px',
//                       color: 'rgba(255, 255, 255, 0.6)',
//                       fontWeight: '600',
//                       marginBottom: '4px',
//                       textTransform: 'uppercase',
//                       letterSpacing: '0.5px'
//                     }}>
//                       Email Us
//                     </div>
//                     <div style={{
//                       fontSize: '13px',
//                       color: '#FF6B35',
//                       fontWeight: '600',
//                       lineHeight: '1.3'
//                     }}>
//                       partners@<br />globalcircleedu.com
//                     </div>
//                   </div>
//                 </a>

//                 {/* Phone Card */}
//                 <a 
//                   href="tel:+971555508943"
//                   style={{
//                     background: 'rgba(255, 255, 255, 0.08)',
//                     backdropFilter: 'blur(10px)',
//                     border: '1px solid rgba(255, 255, 255, 0.12)',
//                     borderRadius: '16px',
//                     padding: '24px 20px',
//                     textDecoration: 'none',
//                     transition: 'all 0.3s ease',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '12px'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
//                     e.currentTarget.style.borderColor = '#FF6B35';
//                     e.currentTarget.style.transform = 'translateY(-4px)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
//                     e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   }}
//                 >
//                   <div style={{
//                     width: '44px',
//                     height: '44px',
//                     borderRadius: '10px',
//                     background: 'rgba(255, 107, 53, 0.15)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                   }}>
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
//                       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
//                     </svg>
//                   </div>
//                   <div>
//                     <div style={{
//                       fontSize: '11px',
//                       color: 'rgba(255, 255, 255, 0.6)',
//                       fontWeight: '600',
//                       marginBottom: '4px',
//                       textTransform: 'uppercase',
//                       letterSpacing: '0.5px'
//                     }}>
//                       Call Us
//                     </div>
//                     <div style={{
//                       fontSize: '14px',
//                       color: 'white',
//                       fontWeight: '700',
//                       lineHeight: '1.4'
//                     }}>
//                       +971 55 550 8943
//                     </div>
//                     <div style={{
//                       fontSize: '13px',
//                       color: 'rgba(255, 255, 255, 0.7)',
//                       fontWeight: '600',
//                       marginTop: '2px'
//                     }}>
//                       +91 8336932235
//                     </div>
//                   </div>
//                 </a>

//                 {/* WhatsApp Card */}
//                 <a 
//                   href="https://wa.me/971555508943"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     background: 'rgba(255, 255, 255, 0.08)',
//                     backdropFilter: 'blur(10px)',
//                     border: '1px solid rgba(255, 255, 255, 0.12)',
//                     borderRadius: '16px',
//                     padding: '24px 20px',
//                     textDecoration: 'none',
//                     transition: 'all 0.3s ease',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '12px'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
//                     e.currentTarget.style.borderColor = '#25D366';
//                     e.currentTarget.style.transform = 'translateY(-4px)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
//                     e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   }}
//                 >
//                   <div style={{
//                     width: '44px',
//                     height: '44px',
//                     borderRadius: '10px',
//                     background: 'rgba(37, 211, 102, 0.15)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                   }}>
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
//                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//                     </svg>
//                   </div>
//                   <div>
//                     <div style={{
//                       fontSize: '11px',
//                       color: 'rgba(255, 255, 255, 0.6)',
//                       fontWeight: '600',
//                       marginBottom: '4px',
//                       textTransform: 'uppercase',
//                       letterSpacing: '0.5px'
//                     }}>
//                       WhatsApp
//                     </div>
//                     <div style={{
//                       fontSize: '14px',
//                       color: '#25D366',
//                       fontWeight: '700'
//                     }}>
//                       Chat Now
//                     </div>
//                   </div>
//                 </a>

//                 {/* Office Hours Card */}
//                 <div style={{
//                   background: 'rgba(255, 107, 53, 0.1)',
//                   border: '1px solid rgba(255, 107, 53, 0.2)',
//                   borderRadius: '16px',
//                   padding: '24px 20px',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: '12px'
//                 }}>
//                   <div style={{
//                     width: '44px',
//                     height: '44px',
//                     borderRadius: '10px',
//                     background: 'rgba(255, 107, 53, 0.2)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                   }}>
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
//                       <circle cx="12" cy="12" r="10"/>
//                       <polyline points="12 6 12 12 16 14"/>
//                     </svg>
//                   </div>
//                   <div>
//                     <div style={{
//                       fontSize: '11px',
//                       color: 'rgba(255, 255, 255, 0.6)',
//                       fontWeight: '600',
//                       marginBottom: '4px',
//                       textTransform: 'uppercase',
//                       letterSpacing: '0.5px'
//                     }}>
//                       Office Hours
//                     </div>
//                     <div style={{
//                       fontSize: '13px',
//                       color: 'white',
//                       fontWeight: '600',
//                       lineHeight: '1.5'
//                     }}>
//                       Mon-Fri: 9AM-6PM<br />
//                       Sat: 10AM-2PM
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       {/* </div> */}
//     </>
//   );
// }
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { submitPartnerForm } from '@/services/dbServices';
import type { PartnerFormData, Message } from '@/types';
import Navbar from '../components/Navbar';

// ============================================
// PARTNER WITH US PAGE
// Luxury Professional Design - Mobile Responsive
// ============================================

export default function PartnerPage() {
  const [formData, setFormData] = useState<PartnerFormData>({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    partnershipType: '',
    message: ''
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<Message>({ type: '', text: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await submitPartnerForm(formData);

      setMessage({ 
        type: 'success', 
        text: 'Thank you for your interest! Our partnership team will contact you within 48 hours.' 
      });
      
      setFormData({
        organizationName: '',
        contactPerson: '',
        email: '',
        phone: '',
        country: '',
        partnershipType: '',
        message: ''
      });
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Something went wrong. Please try again or email us at partners@globalcircleedu.com' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
        }

        .partner-input,
        .partner-select,
        .partner-textarea {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #E2E8F0;
          border-radius: 12px;
          font-size: 15px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: all 0.3s ease;
          background: white;
          color: #1E293B;
        }

        .partner-input:focus,
        .partner-select:focus,
        .partner-textarea:focus {
          outline: none;
          border-color: #FF6B35;
          box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.1);
        }

        .partner-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .partner-input::placeholder,
        .partner-textarea::placeholder {
          color: #94A3B8;
        }

        .submit-btn-partner {
          width: 100%;
          background: #FF6B35;
          color: white;
          border: none;
          padding: 18px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.3);
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .submit-btn-partner:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(255, 107, 53, 0.4);
        }

        .submit-btn-partner:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .feature-card {
          background: white;
          border-radius: 20px;
          padding: 32px;
          border: 1px solid #E2E8F0;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: #FF6B35;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
          border-color: #FF6B35;
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .stat-box {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #E2E8F0;
          text-align: center;
        }

        .icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(255, 107, 53, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .icon-square {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(30, 58, 95, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .gradient-text-partner {
          color: #FF6B35;
        }

        .decorative-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: float 8s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }

        .partnership-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 107, 53, 0.1);
          border: 1px solid rgba(255, 107, 53, 0.2);
          border-radius: 50px;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 600;
          color: #FF6B35;
          letter-spacing: 0.3px;
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .feature-card {
            padding: 24px;
          }

          .stat-box {
            padding: 20px;
          }

          .icon-circle,
          .icon-square {
            width: 52px;
            height: 52px;
          }

          .partnership-badge {
            padding: 8px 16px;
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .feature-card {
            padding: 20px;
          }

          .partner-input,
          .partner-select,
          .partner-textarea {
            padding: 14px 16px;
            font-size: 14px;
          }
        }
      `}</style>

      <div style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: '#FFFFFF'
      }}>
        
        {/* Hero Section - Responsive Split Design */}
        <div style={{
          paddingTop:'50px',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '55fr 45fr',
          minHeight: '70vh',
          overflow: 'hidden'
        }}
        className="hero-section-responsive">
          
          {/* Left Side - Content with Navy Background */}
          <div style={{
            background: '#1E3A5F',
            padding: 'clamp(40px, 8vw, 80px) clamp(24px, 5vw, 48px) clamp(30px, 6vw, 60px)',
            position: 'relative',
            zIndex: 2
          }}>
            <div className="partnership-badge" style={{
              marginBottom: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#FF6B35'
              }} />
              Partnership Opportunities
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 8vw, 72px)',
              fontWeight: '800',
              lineHeight: '0.95',
              color: 'white',
              marginBottom: '20px'
            }}>
              Partner<br />
              <span style={{ 
                color: '#FF6B35',
                fontStyle: 'italic'
              }}>With Us</span>
            </h1>

            <p style={{
              fontSize: 'clamp(14px, 2vw, 16px)',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '32px',
              maxWidth: '480px'
            }}>
              Join forces with Global Circle Edu to expand your reach, grow your business, 
              and help students achieve their dreams of studying abroad.
            </p>

            {/* Stats in Compact Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
              gap: 'clamp(12px, 2vw, 20px)',
              maxWidth: '520px'
            }}>
              {[
                { number: '500+', label: 'Partners' },
                { number: '26', label: 'Countries' },
                { number: '10K+', label: 'Students' }
              ].map((stat, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: 'clamp(12px, 2vw, 16px)',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{
                    fontSize: 'clamp(22px, 4vw, 28px)',
                    fontWeight: '800',
                    color: '#FF6B35',
                    marginBottom: '4px'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: 'clamp(11px, 1.5vw, 12px)',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontWeight: '600'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div style={{
              position: 'absolute',
              bottom: '40px',
              left: '48px',
              width: 'clamp(60px, 10vw, 80px)',
              height: 'clamp(60px, 10vw, 80px)',
              borderRadius: '50%',
              border: '3px solid rgba(255, 107, 53, 0.3)',
              animation: 'pulse 3s ease-in-out infinite'
            }} 
            className="decorative-circle"/>
            
            <div style={{
              position: 'absolute',
              top: '100px',
              right: '60px',
              width: 'clamp(80px, 15vw, 120px)',
              height: 'clamp(80px, 15vw, 120px)',
              borderRadius: '20px',
              background: 'rgba(255, 107, 53, 0.1)',
              transform: 'rotate(25deg)',
              animation: 'float 6s ease-in-out infinite'
            }}
            className="decorative-square" />
          </div>

          {/* Right Side - Image */}
          <div style={{
            position: 'relative',
            background: '#F1F5F9',
            overflow: 'hidden',
            minHeight: '300px'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200"
              alt="Partnership collaboration"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(30, 58, 95, 0.25)'
            }} />
          </div>
        </div>

        {/* Partnership Types Section */}
        <div style={{
          background: '#F8FAFC',
          padding: 'clamp(40px, 8vw, 80px) clamp(20px, 5vw, 40px)'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto'
          }}>
            <div style={{ 
              textAlign: 'center', 
              marginBottom: 'clamp(40px, 6vw, 60px)' 
            }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(255, 107, 53, 0.1)',
                border: '1px solid rgba(255, 107, 53, 0.2)',
                borderRadius: '50px',
                padding: '10px 20px',
                fontSize: 'clamp(12px, 1.5vw, 14px)',
                fontWeight: '600',
                color: '#FF6B35',
                marginBottom: '16px'
              }}>
                Partnership Models
              </div>
              
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: '800',
                color: '#1E293B',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                Multiple Ways to <span className="gradient-text-partner">Collaborate</span>
              </h2>
              
              <p style={{
                fontSize: 'clamp(14px, 2vw, 18px)',
                color: '#64748B',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Choose the partnership model that best aligns with your goals and capabilities
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(20px, 3vw, 32px)'
            }}>
              {/* University Representatives */}
              <div className="feature-card">
                <div style={{
                  width: 'clamp(56px, 8vw, 64px)',
                  height: 'clamp(56px, 8vw, 64px)',
                  borderRadius: '16px',
                  background: 'rgba(30, 58, 95, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E3A5F" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                
                <h3 style={{
                  fontSize: 'clamp(18px, 2.5vw, 22px)',
                  fontWeight: '700',
                  color: '#1E293B',
                  marginBottom: '12px'
                }}>
                  University Representatives
                </h3>
                
                <p style={{
                  fontSize: 'clamp(13px, 1.8vw, 15px)',
                  color: '#64748B',
                  lineHeight: '1.7',
                  marginBottom: '20px'
                }}>
                  Represent your institution and connect with aspiring medical students worldwide
                </p>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    'Dedicated support team',
                    'Marketing materials',
                    'Lead generation system',
                    'Commission structure'
                  ].map((benefit, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '10px',
                      fontSize: 'clamp(12px, 1.6vw, 14px)',
                      color: '#475569'
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education Consultants */}
              <div className="feature-card">
                <div style={{
                  width: 'clamp(56px, 8vw, 64px)',
                  height: 'clamp(56px, 8vw, 64px)',
                  borderRadius: '16px',
                  background: 'rgba(255, 107, 53, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                
                <h3 style={{
                  fontSize: 'clamp(18px, 2.5vw, 22px)',
                  fontWeight: '700',
                  color: '#1E293B',
                  marginBottom: '12px'
                }}>
                  Education Consultants
                </h3>
                
                <p style={{
                  fontSize: 'clamp(13px, 1.8vw, 15px)',
                  color: '#64748B',
                  lineHeight: '1.7',
                  marginBottom: '20px'
                }}>
                  Expand your services with our comprehensive MBBS abroad programs
                </p>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    'Co-branding opportunities',
                    'Training & workshops',
                    'CRM access',
                    'Competitive commissions'
                  ].map((benefit, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '10px',
                      fontSize: 'clamp(12px, 1.6vw, 14px)',
                      color: '#475569'
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Regional Partners */}
              <div className="feature-card">
                <div style={{
                  width: 'clamp(56px, 8vw, 64px)',
                  height: 'clamp(56px, 8vw, 64px)',
                  borderRadius: '16px',
                  background: 'rgba(30, 58, 95, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E3A5F" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                
                <h3 style={{
                  fontSize: 'clamp(18px, 2.5vw, 22px)',
                  fontWeight: '700',
                  color: '#1E293B',
                  marginBottom: '12px'
                }}>
                  Regional Partners
                </h3>
                
                <p style={{
                  fontSize: 'clamp(13px, 1.8vw, 15px)',
                  color: '#64748B',
                  lineHeight: '1.7',
                  marginBottom: '20px'
                }}>
                  Establish exclusive regional representation and build your network
                </p>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    'Territory protection',
                    'Custom marketing plans',
                    'Priority support',
                    'Higher commission tiers'
                  ].map((benefit, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '10px',
                      fontSize: 'clamp(12px, 1.6vw, 14px)',
                      color: '#475569'
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div style={{
          background: 'white',
          padding: 'clamp(40px, 8vw, 80px) clamp(20px, 5vw, 40px)'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto'
          }}>
            <div style={{ 
              textAlign: 'center', 
              marginBottom: 'clamp(40px, 6vw, 60px)' 
            }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(30, 58, 95, 0.1)',
                border: '1px solid rgba(30, 58, 95, 0.2)',
                borderRadius: '50px',
                padding: '10px 20px',
                fontSize: 'clamp(12px, 1.5vw, 14px)',
                fontWeight: '600',
                color: '#1E3A5F',
                marginBottom: '16px'
              }}>
                Partner Benefits
              </div>
              
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: '800',
                color: '#1E293B',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                Why Choose <span className="gradient-text-partner">Global Circle Edu</span>
              </h2>
              
              <p style={{
                fontSize: 'clamp(14px, 2vw, 18px)',
                color: '#64748B',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Experience unmatched support and growth opportunities with our partnership program
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'clamp(20px, 3vw, 32px)'
            }}>
              {[
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  ),
                  title: 'Extensive Network',
                  description: '500+ university partnerships across 26 countries providing diverse opportunities'
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  ),
                  title: 'Quick Processing',
                  description: 'Fast-track applications with our streamlined processes and direct university connections'
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  ),
                  title: 'Proven Success',
                  description: '10,000+ students successfully placed in top medical universities worldwide'
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  ),
                  title: 'Full Support',
                  description: 'End-to-end assistance from counseling to visa processing and beyond'
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  ),
                  title: 'Attractive Commissions',
                  description: 'Competitive commission structure with timely payments and performance bonuses'
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  ),
                  title: 'Dedicated Support',
                  description: 'Personal relationship manager and 24/7 technical support for all partners'
                }
              ].map((benefit, idx) => (
                <div key={idx} style={{
                  background: '#F8FAFC',
                  borderRadius: '20px',
                  padding: 'clamp(24px, 4vw, 32px)',
                  border: '1px solid #E2E8F0',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.12)';
                  e.currentTarget.style.borderColor = '#FF6B35';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}>
                  <div style={{
                    width: 'clamp(52px, 8vw, 64px)',
                    height: 'clamp(52px, 8vw, 64px)',
                    borderRadius: '50%',
                    background: 'rgba(255, 107, 53, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    {benefit.icon}
                  </div>
                  
                  <h3 style={{
                    fontSize: 'clamp(16px, 2.2vw, 20px)',
                    fontWeight: '700',
                    color: '#1E293B',
                    marginBottom: '12px'
                  }}>
                    {benefit.title}
                  </h3>
                  
                  <p style={{
                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                    color: '#64748B',
                    lineHeight: '1.7'
                  }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stats Section */}
        <div style={{
          background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A8C 100%)',
          padding: 'clamp(40px, 8vw, 80px) clamp(20px, 5vw, 40px)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="decorative-blob" style={{
            width: '300px',
            height: '300px',
            background: '#FF6B35',
            top: '-100px',
            right: '-100px'
          }} />
          
          <div className="decorative-blob" style={{
            width: '400px',
            height: '400px',
            background: '#1E3A5F',
            bottom: '-150px',
            left: '-150px'
          }} />

          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{ 
              textAlign: 'center', 
              marginBottom: 'clamp(40px, 6vw, 60px)' 
            }}>
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: '800',
                color: 'white',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                Our Impact in <span style={{ color: '#FF6B35' }}>Numbers</span>
              </h2>
              
              <p style={{
                fontSize: 'clamp(14px, 2vw, 18px)',
                color: 'rgba(255, 255, 255, 0.85)',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Join a network that's transforming international medical education
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'clamp(20px, 3vw, 32px)'
            }}>
              {[
                { number: '10,000+', label: 'Students Placed', sublabel: 'Across 26 countries' },
                { number: '500+', label: 'Partner Network', sublabel: 'Universities & consultants' },
                { number: '98%', label: 'Visa Success', sublabel: 'Industry-leading rate' },
                { number: '26', label: 'Countries', sublabel: 'Worldwide coverage' }
              ].map((stat, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: 'clamp(24px, 4vw, 32px)',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}>
                  <div style={{
                    fontSize: 'clamp(36px, 6vw, 56px)',
                    fontWeight: '800',
                    color: '#FF6B35',
                    marginBottom: '8px',
                    lineHeight: '1'
                  }}>
                    {stat.number}
                  </div>
                  
                  <div style={{
                    fontSize: 'clamp(16px, 2.2vw, 20px)',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '6px'
                  }}>
                    {stat.label}
                  </div>
                  
                  <div style={{
                    fontSize: 'clamp(12px, 1.6vw, 14px)',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontWeight: '500'
                  }}>
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Application Form Section */}
        <div style={{
          background: 'white',
          padding: 'clamp(40px, 8vw, 80px) clamp(20px, 5vw, 40px)'
        }}>
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto'
          }}>
            <div style={{ 
              textAlign: 'center', 
              marginBottom: 'clamp(40px, 6vw, 60px)' 
            }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(255, 107, 53, 0.1)',
                border: '1px solid rgba(255, 107, 53, 0.2)',
                borderRadius: '50px',
                padding: '10px 20px',
                fontSize: 'clamp(12px, 1.5vw, 14px)',
                fontWeight: '600',
                color: '#FF6B35',
                marginBottom: '16px'
              }}>
                Get Started
              </div>
              
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: '800',
                color: '#1E293B',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                Apply for <span className="gradient-text-partner">Partnership</span>
              </h2>
              
              <p style={{
                fontSize: 'clamp(14px, 2vw, 18px)',
                color: '#64748B',
                lineHeight: '1.6'
              }}>
                Fill out the form below and our partnership team will get back to you within 48 hours
              </p>
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} style={{
              background: '#F8FAFC',
              borderRadius: '24px',
              padding: 'clamp(32px, 5vw, 48px)',
              border: '1px solid #E2E8F0'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'clamp(16px, 2.5vw, 24px)'
              }}>
                {/* Organization Name */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{
                    display: 'block',
                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                    fontWeight: '600',
                    color: '#1E293B',
                    marginBottom: '10px'
                  }}>
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    required
                    className="partner-input"
                    placeholder="Your Organization Name"
                  />
                </div>

                {/* Contact Person */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                    fontWeight: '600',
                    color: '#1E293B',
                    marginBottom: '10px'
                  }}>
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="partner-input"
                    placeholder="Full Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                    fontWeight: '600',
                    color: '#1E293B',
                    marginBottom: '10px'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="partner-input"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                    fontWeight: '600',
                    color: '#1E293B',
                    marginBottom: '10px'
                  }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="partner-input"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>

                {/* Country */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                    fontWeight: '600',
                    color: '#1E293B',
                    marginBottom: '10px'
                  }}>
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="partner-input"
                    placeholder="Your Country"
                  />
                </div>

                {/* Partnership Type */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{
                    display: 'block',
                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                    fontWeight: '600',
                    color: '#1E293B',
                    marginBottom: '10px'
                  }}>
                    Partnership Type *
                  </label>
                  <select
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    required
                    className="partner-select"
                  >
                    <option value="">Select Partnership Type</option>
                    <option value="university">University Representative</option>
                    <option value="consultant">Education Consultant</option>
                    <option value="regional">Regional Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{
                    display: 'block',
                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                    fontWeight: '600',
                    color: '#1E293B',
                    marginBottom: '10px'
                  }}>
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="partner-textarea"
                    placeholder="Tell us about your organization and partnership goals..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="submit-btn-partner"
                style={{
                  marginTop: 'clamp(20px, 3vw, 32px)'
                }}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>

              {/* Success/Error Message */}
              {message.text && (
                <div style={{
                  marginTop: '20px',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: message.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  border: `1px solid ${message.type === 'success' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                  color: message.type === 'success' ? '#16A34A' : '#DC2626',
                  fontSize: 'clamp(13px, 1.8vw, 15px)',
                  fontWeight: '600',
                  textAlign: 'center'
                }}>
                  {message.text}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div style={{
          background: '#1E3A5F',
          padding: 'clamp(40px, 8vw, 80px) clamp(20px, 5vw, 40px)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(20px, 3vw, 32px)',
              alignItems: 'center'
            }}>
              {/* Left Content */}
              <div style={{
                gridColumn: 'span 1'
              }}>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(255, 107, 53, 0.15)',
                  border: '1px solid rgba(255, 107, 53, 0.3)',
                  borderRadius: '50px',
                  padding: '8px 16px',
                  fontSize: 'clamp(11px, 1.5vw, 13px)',
                  fontWeight: '600',
                  color: '#FF6B35',
                  marginBottom: '16px'
                }}>
                  Need More Information?
                </div>
                
                <h2 style={{
                  fontSize: 'clamp(28px, 4.5vw, 42px)',
                  fontWeight: '800',
                  color: 'white',
                  marginBottom: '16px',
                  lineHeight: '1.2'
                }}>
                  Let's Talk About Your <span style={{ color: '#FF6B35' }}>Partnership</span>
                </h2>
                
                <p style={{
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  Our partnership team is ready to discuss how we can work together to create mutual success
                </p>

                <Link 
                  href="/"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'white',
                    color: '#1E3A5F',
                    padding: '14px 28px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 255, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Back to Home
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>

              {/* Right Contact Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: 'clamp(16px, 2.5vw, 20px)'
              }}>
                {/* Email Card */}
                <a 
                  href="mailto:partners@globalcircleedu.com"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '16px',
                    padding: 'clamp(20px, 3vw, 24px)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.borderColor = '#FF6B35';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: 'clamp(40px, 6vw, 44px)',
                    height: 'clamp(40px, 6vw, 44px)',
                    borderRadius: '10px',
                    background: 'rgba(255, 107, 53, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{
                      fontSize: 'clamp(10px, 1.5vw, 11px)',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontWeight: '600',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Email Us
                    </div>
                    <div style={{
                      fontSize: 'clamp(12px, 1.8vw, 13px)',
                      color: '#FF6B35',
                      fontWeight: '600',
                      lineHeight: '1.3',
                      wordBreak: 'break-word'
                    }}>
                      partners@<br />globalcircleedu.com
                    </div>
                  </div>
                </a>

                {/* Phone Card */}
                <a 
                  href="tel:+971555508943"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '16px',
                    padding: 'clamp(20px, 3vw, 24px)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.borderColor = '#FF6B35';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: 'clamp(40px, 6vw, 44px)',
                    height: 'clamp(40px, 6vw, 44px)',
                    borderRadius: '10px',
                    background: 'rgba(255, 107, 53, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{
                      fontSize: 'clamp(10px, 1.5vw, 11px)',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontWeight: '600',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Call Us
                    </div>
                    <div style={{
                      fontSize: 'clamp(13px, 1.9vw, 14px)',
                      color: 'white',
                      fontWeight: '700',
                      lineHeight: '1.4'
                    }}>
                      +971 55 550 8943
                    </div>
                    <div style={{
                      fontSize: 'clamp(12px, 1.8vw, 13px)',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontWeight: '600',
                      marginTop: '2px'
                    }}>
                      +91 8336932235
                    </div>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a 
                  href="https://wa.me/971555508943"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '16px',
                    padding: 'clamp(20px, 3vw, 24px)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.borderColor = '#25D366';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: 'clamp(40px, 6vw, 44px)',
                    height: 'clamp(40px, 6vw, 44px)',
                    borderRadius: '10px',
                    background: 'rgba(37, 211, 102, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{
                      fontSize: 'clamp(10px, 1.5vw, 11px)',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontWeight: '600',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      WhatsApp
                    </div>
                    <div style={{
                      fontSize: 'clamp(13px, 1.9vw, 14px)',
                      color: '#25D366',
                      fontWeight: '700'
                    }}>
                      Chat Now
                    </div>
                  </div>
                </a>

                {/* Office Hours Card */}
                <div style={{
                  background: 'rgba(255, 107, 53, 0.1)',
                  border: '1px solid rgba(255, 107, 53, 0.2)',
                  borderRadius: '16px',
                  padding: 'clamp(20px, 3vw, 24px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div style={{
                    width: 'clamp(40px, 6vw, 44px)',
                    height: 'clamp(40px, 6vw, 44px)',
                    borderRadius: '10px',
                    background: 'rgba(255, 107, 53, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{
                      fontSize: 'clamp(10px, 1.5vw, 11px)',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontWeight: '600',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Office Hours
                    </div>
                    <div style={{
                      fontSize: 'clamp(12px, 1.8vw, 13px)',
                      color: 'white',
                      fontWeight: '600',
                      lineHeight: '1.5'
                    }}>
                      Mon-Fri: 9AM-6PM<br />
                      Sat: 10AM-2PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-section-responsive {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }

          .decorative-circle,
          .decorative-square {
            display: none;
          }
        }
      `}</style>
    </>
  );
}