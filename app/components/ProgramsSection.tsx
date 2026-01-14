// // "use client";

// // import React, { useState } from 'react';

// // // ============================================
// // // PROGRAMS SECTION - Expanding Cards Design
// // // Minimal, Unique, Professional
// // // ============================================

// // export default function ProgramsSection() {
// //   const [activeProgram, setActiveProgram] = useState(1); // Default: Diploma expanded

// //   const programs = [
// //     {
// //       id: 0,
// //       icon: '📜',
// //       title: 'Certificate',
// //       shortDesc: 'Quick skills for fast career entry',
// //       duration: '3-12 months',
// //       countries: '25+',
// //       description: 'Short-term specialized programs designed for skill development and career advancement. Focus on practical knowledge ideal for professionals looking to upskill.',
// //       subtypes: ['Graduate Certificate', 'Undergraduate Certificate'],
// //       fields: ['Business', 'Technology', 'Arts', 'Healthcare'],
// //       color: '#2EC4B6',
// //       bgImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80'
// //     },
// //     {
// //       id: 1,
// //       icon: '📋',
// //       title: 'Diploma',
// //       shortDesc: 'Industry-ready training programs',
// //       duration: '1-2 years',
// //       countries: '30+',
// //       description: 'Comprehensive diploma programs offering practical skills and in-depth industry knowledge. Perfect for hands-on training and quick career entry.',
// //       subtypes: ['Graduate Diploma', 'Undergraduate Diploma'],
// //       fields: ['Engineering', 'Hospitality', 'Health Sciences', 'Creative Industries'],
// //       color: '#FF6B35',
// //       bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80'
// //     },
// //     {
// //       id: 2,
// //       icon: '🎓',
// //       title: 'Degree',
// //       shortDesc: 'Full academic programs worldwide',
// //       duration: '2-5 years',
// //       countries: '40+',
// //       description: 'Comprehensive academic programs from foundational to advanced levels. Build expertise and open global career opportunities with theoretical and practical learning.',
// //       subtypes: ["Associate's", "Bachelor's", "Master's", 'Doctorate'],
// //       fields: ['Business', 'Engineering', 'Sciences', 'Fashion', 'Culinary Arts'],
// //       color: '#1E3A5F',
// //       bgImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80'
// //     }
// //   ];

// //   return (
// //     <section style={{
// //       padding: '120px 48px',
// //       background: '#F8FAFC',
// //       fontFamily: '"Plus Jakarta Sans", sans-serif',
// //       position: 'relative',
// //       overflow: 'hidden'
// //     }}>
      
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

// //         .program-card {
// //           border-radius: 24px;
// //           cursor: pointer;
// //           transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
// //           overflow: hidden;
// //           border: 2px solid #E2E8F0;
// //           position: relative;
// //         }

// //         .program-card:hover {
// //           border-color: #CBD5E1;
// //           transform: translateY(-4px);
// //           box-shadow: 0 20px 40px rgba(0,0,0,0.1);
// //         }

// //         .program-card:hover .card-bg {
// //           transform: scale(1.1);
// //         }

// //         .program-card.active {
// //           border-color: #1E3A5F;
// //         }

// //         .program-card.active:hover {
// //           border-color: #1E3A5F;
// //         }

// //         .card-content {
// //           transition: all 0.4s ease;
// //         }

// //         .expand-icon {
// //           width: 40px;
// //           height: 40px;
// //           border-radius: 50%;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           font-size: 20px;
// //           transition: all 0.3s ease;
// //         }

// //         .tag {
// //           padding: 6px 14px;
// //           border-radius: 50px;
// //           font-size: 12px;
// //           font-weight: 600;
// //           display: inline-block;
// //           margin-right: 8px;
// //           margin-bottom: 8px;
// //         }

// //         .stat-box {
// //           padding: 16px 20px;
// //           border-radius: 16px;
// //           text-align: center;
// //           min-width: 100px;
// //         }

// //         .subtype-item {
// //           display: flex;
// //           align-items: center;
// //           gap: 10px;
// //           padding: 10px 0;
// //           border-bottom: 1px solid rgba(255,255,255,0.1);
// //         }

// //         .subtype-item:last-child {
// //           border-bottom: none;
// //         }

// //         .learn-more-btn {
// //           background: #FF6B35;
// //           color: white;
// //           border: none;
// //           padding: 14px 28px;
// //           border-radius: 50px;
// //           font-weight: 700;
// //           font-size: 14px;
// //           cursor: pointer;
// //           transition: all 0.3s ease;
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 8px;
// //         }

// //         .learn-more-btn:hover {
// //           transform: translateY(-2px);
// //           box-shadow: 0 8px 24px rgba(255, 107, 53, 0.4);
// //         }

// //         /* Mobile Responsive */
// //         @media (max-width: 1024px) {
// //           .programs-grid {
// //             flex-direction: column !important;
// //           }
          
// //           .program-card {
// //             width: 100% !important;
// //             flex: none !important;
// //           }
// //         }

// //         @media (max-width: 768px) {
// //           .programs-section {
// //             padding: 80px 20px !important;
// //           }

// //           .section-header {
// //             flex-direction: column !important;
// //             text-align: center;
// //             gap: 20px !important;
// //           }

// //           .section-title {
// //             font-size: 36px !important;
// //           }

// //           .stats-row {
// //             justify-content: center !important;
// //           }

// //           .expanded-content {
// //             flex-direction: column !important;
// //           }

// //           .subtypes-list {
// //             margin-top: 24px;
// //           }
// //         }
// //       `}</style>

// //       {/* Background Decorative */}
// //       <div style={{
// //         position: 'absolute',
// //         top: '10%',
// //         right: '-5%',
// //         width: '300px',
// //         height: '300px',
// //         borderRadius: '50%',
// //         background: '#FF6B35',
// //         opacity: 0.03
// //       }} />
// //       <div style={{
// //         position: 'absolute',
// //         bottom: '10%',
// //         left: '-5%',
// //         width: '250px',
// //         height: '250px',
// //         borderRadius: '50%',
// //         background: '#2EC4B6',
// //         opacity: 0.03
// //       }} />

// //       <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
// //         {/* Section Header */}
// //         <div 
// //           className="section-header"
// //           style={{
// //             display: 'flex',
// //             justifyContent: 'space-between',
// //             alignItems: 'flex-end',
// //             marginBottom: '60px'
// //           }}
// //         >
// //           <div>
// //             {/* Tagline */}
// //             <div style={{
// //               display: 'inline-flex',
// //               alignItems: 'center',
// //               gap: '10px',
// //               marginBottom: '16px'
// //             }}>
// //               <div style={{
// //                 width: '36px',
// //                 height: '3px',
// //                 background: '#FF6B35',
// //                 borderRadius: '2px'
// //               }} />
// //               <span style={{
// //                 fontSize: '13px',
// //                 fontWeight: '700',
// //                 color: '#64748B',
// //                 letterSpacing: '1.5px',
// //                 textTransform: 'uppercase'
// //               }}>
// //                 Accredited Programs
// //               </span>
// //             </div>

// //             {/* Title */}
// //             <h2 
// //               className="section-title"
// //               style={{
// //                 fontSize: '48px',
// //                 fontWeight: '800',
// //                 color: '#1E3A5F',
// //                 letterSpacing: '-1.5px',
// //                 lineHeight: '1.1'
// //               }}
// //             >
// //               Choose Your<br />
// //               <span style={{ color: '#FF6B35' }}>Academic Journey</span>
// //             </h2>
// //           </div>

// //           {/* Stats */}
// //           <div 
// //             className="stats-row"
// //             style={{
// //               display: 'flex',
// //               gap: '32px'
// //             }}
// //           >
// //             <div style={{ textAlign: 'right' }}>
// //               <div style={{ fontSize: '32px', fontWeight: '800', color: '#1E3A5F' }}>500+</div>
// //               <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '500' }}>Partner Universities</div>
// //             </div>
// //             <div style={{
// //               width: '1px',
// //               background: '#E2E8F0'
// //             }} />
// //             <div style={{ textAlign: 'right' }}>
// //               <div style={{ fontSize: '32px', fontWeight: '800', color: '#1E3A5F' }}>50+</div>
// //               <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '500' }}>Countries Worldwide</div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Programs Cards */}
// //         <div 
// //           className="programs-grid"
// //           style={{
// //             display: 'flex',
// //             gap: '20px',
// //             alignItems: 'stretch'
// //           }}
// //         >
// //           {programs.map((program) => {
// //             const isActive = activeProgram === program.id;
            
// //             return (
// //               <div
// //                 key={program.id}
// //                 className={`program-card ${isActive ? 'active' : ''}`}
// //                 onClick={() => setActiveProgram(program.id)}
// //                 style={{
// //                   flex: isActive ? '1.5' : '1',
// //                   padding: '28px',
// //                   minHeight: 'auto',
// //                   display: 'flex',
// //                   flexDirection: 'column',
// //                   position: 'relative',
// //                   overflow: 'hidden',
// //                   background: 'transparent'
// //                 }}
// //               >
// //                 {/* Background Image */}
// //                 <div style={{
// //                   position: 'absolute',
// //                   top: 0,
// //                   left: 0,
// //                   right: 0,
// //                   bottom: 0,
// //                   backgroundImage: `url(${program.bgImage})`,
// //                   backgroundSize: 'cover',
// //                   backgroundPosition: 'center',
// //                   transition: 'transform 0.5s ease',
// //                   transform: isActive ? 'scale(1.05)' : 'scale(1)'
// //                 }} />

// //                 {/* Overlay */}
// //                 <div style={{
// //                   position: 'absolute',
// //                   top: 0,
// //                   left: 0,
// //                   right: 0,
// //                   bottom: 0,
// //                   background: isActive 
// //                     ? 'linear-gradient(180deg, rgba(30, 58, 95, 0.85) 0%, rgba(30, 58, 95, 0.95) 100%)'
// //                     : 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.97) 100%)',
// //                   transition: 'all 0.4s ease'
// //                 }} />

// //                 {/* Card Content - Now with z-index */}
// //                 <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  
// //                   {/* Card Header - Icon & Stats */}
// //                   <div style={{
// //                     display: 'flex',
// //                     justifyContent: 'space-between',
// //                     alignItems: 'center',
// //                     marginBottom: '20px'
// //                   }}>
// //                     {/* Icon */}
// //                     <div style={{
// //                       width: '52px',
// //                       height: '52px',
// //                       borderRadius: '14px',
// //                       background: isActive ? 'rgba(255,255,255,0.15)' : `${program.color}20`,
// //                       display: 'flex',
// //                       alignItems: 'center',
// //                       justifyContent: 'center',
// //                       fontSize: '24px',
// //                       transition: 'all 0.4s ease',
// //                       backdropFilter: 'blur(10px)'
// //                     }}>
// //                       {program.icon}
// //                     </div>

// //                     {/* Duration & Countries - Compact */}
// //                     <div style={{
// //                       display: 'flex',
// //                       gap: '16px',
// //                       alignItems: 'center'
// //                     }}>
// //                       <div style={{ textAlign: 'center' }}>
// //                         <div style={{
// //                           fontSize: '14px',
// //                           fontWeight: '700',
// //                           color: isActive ? 'white' : '#1E3A5F'
// //                         }}>
// //                           {program.duration}
// //                         </div>
// //                         <div style={{
// //                           fontSize: '11px',
// //                           color: isActive ? 'rgba(255,255,255,0.6)' : '#94A3B8'
// //                         }}>
// //                           Duration
// //                         </div>
// //                       </div>
// //                       <div style={{
// //                         width: '1px',
// //                         height: '24px',
// //                         background: isActive ? 'rgba(255,255,255,0.2)' : '#E2E8F0'
// //                       }} />
// //                       <div style={{ textAlign: 'center' }}>
// //                         <div style={{
// //                           fontSize: '14px',
// //                           fontWeight: '700',
// //                           color: isActive ? 'white' : '#1E3A5F'
// //                         }}>
// //                           {program.countries}
// //                         </div>
// //                         <div style={{
// //                           fontSize: '11px',
// //                           color: isActive ? 'rgba(255,255,255,0.6)' : '#94A3B8'
// //                         }}>
// //                           Countries
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Title & Description */}
// //                   <h3 style={{
// //                     fontSize: '22px',
// //                     fontWeight: '800',
// //                     color: isActive ? 'white' : '#1E3A5F',
// //                     marginBottom: '6px',
// //                     transition: 'all 0.4s ease'
// //                   }}>
// //                     {program.title}
// //                   </h3>

// //                   <p style={{
// //                     fontSize: '14px',
// //                     color: isActive ? 'rgba(255,255,255,0.7)' : '#64748B',
// //                     marginBottom: '20px',
// //                     lineHeight: '1.5',
// //                     transition: 'all 0.4s ease'
// //                   }}>
// //                     {program.shortDesc}
// //                   </p>

// //                   {/* Subtypes - Only show when active */}
// //                   {isActive && (
// //                     <div style={{
// //                       display: 'flex',
// //                       flexWrap: 'wrap',
// //                       gap: '8px',
// //                       marginBottom: '20px',
// //                       animation: 'fadeIn 0.3s ease'
// //                     }}>
// //                       <style>{`
// //                         @keyframes fadeIn {
// //                           from { opacity: 0; }
// //                           to { opacity: 1; }
// //                         }
// //                       `}</style>
// //                       {program.subtypes.map((subtype, idx) => (
// //                         <span
// //                           key={idx}
// //                           style={{
// //                             padding: '6px 12px',
// //                             borderRadius: '50px',
// //                             fontSize: '11px',
// //                             fontWeight: '600',
// //                             background: 'rgba(255,255,255,0.15)',
// //                             color: 'white',
// //                             backdropFilter: 'blur(10px)'
// //                           }}
// //                         >
// //                           {subtype}
// //                         </span>
// //                       ))}
// //                     </div>
// //                   )}

// //                   {/* CTA */}
// //                   <div style={{ marginTop: 'auto' }}>
// //                     <span style={{
// //                       fontSize: '14px',
// //                       fontWeight: '700',
// //                       color: '#FF6B35',
// //                       display: 'inline-flex',
// //                       alignItems: 'center',
// //                       gap: '6px',
// //                       cursor: 'pointer',
// //                       transition: 'gap 0.3s ease'
// //                     }}>
// //                       Learn More
// //                       <span style={{ fontSize: '16px' }}>→</span>
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>

// //         {/* Bottom Note */}
// //         <div style={{
// //           marginTop: '48px',
// //           textAlign: 'center'
// //         }}>
// //           <p style={{
// //             fontSize: '15px',
// //             color: '#64748B',
// //             maxWidth: '600px',
// //             margin: '0 auto'
// //           }}>
// //             All programs are internationally accredited through our partnerships with 
// //             <span style={{ color: '#1E3A5F', fontWeight: '600' }}> 500+ universities </span> 
// //             across 
// //             <span style={{ color: '#1E3A5F', fontWeight: '600' }}> 50+ countries</span>.
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import React, { useState } from 'react';

// // ============================================
// // PROGRAMS SECTION - Expanding Cards Design
// // Minimal, Unique, Professional
// // ============================================

// export default function ProgramsSection() {
//   const [activeProgram, setActiveProgram] = useState(1); // Default: Diploma expanded
//   const [selectedProgram, setSelectedProgram] = useState<any>(null); // For modal detail view

//   const programs = [
//     {
//       id: 0,
//       icon: '📜',
//       title: 'Certificate',
//       shortDesc: 'Quick skills for fast career entry',
//       duration: '3-12 months',
//       countries: '25+',
//       description: 'Short-term specialized programs designed for skill development and career advancement. Focus on practical knowledge ideal for professionals looking to upskill.',
//       fullDescription: 'Short-term specialized programs designed for skill development and career advancement. These programs focus on practical knowledge and are ideal for professionals looking to upskill or students seeking quick entry into the workforce.',
//       subtypes: ['Graduate Certificate', 'Undergraduate Certificate'],
//       fields: ['Business', 'Technology', 'Arts', 'Healthcare'],
//       color: '#2EC4B6',
//       bgImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
//       accreditation: 'Accredited by partner universities and recognized internationally for career and further education pathways.',
//       entryRequirements: 'Typically require high school completion or equivalent; some may need work experience.',
//       postStudy: 'Skill enhancement leading to job placements or further studies; post-study work visas available in select countries.',
//       visaSupport: 'Full visa assistance provided, including application guidance and immigration support.',
//       topDestinations: ['France', 'Spain', 'Canada', 'Australia', 'Ireland', 'Germany']
//     },
//     {
//       id: 1,
//       icon: '📋',
//       title: 'Diploma',
//       shortDesc: 'Industry-ready training programs',
//       duration: '1-2 years',
//       countries: '30+',
//       description: 'Comprehensive diploma programs offering practical skills and in-depth industry knowledge. Perfect for hands-on training and quick career entry.',
//       fullDescription: 'Comprehensive diploma programs offering practical skills and in-depth industry knowledge. These are suitable for students aiming for hands-on training and quick career entry with strong employment outcomes.',
//       subtypes: ['Graduate Diploma', 'Undergraduate Diploma'],
//       fields: ['Engineering', 'Hospitality', 'Health Sciences', 'Creative Industries'],
//       color: '#FF6B35',
//       bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
//       accreditation: 'Accredited through partnerships with global universities, ensuring quality and transferability of credits.',
//       entryRequirements: 'High school diploma or equivalent; language proficiency tests may be required.',
//       postStudy: 'Pathways to degree programs or employment; post-graduation work permits in countries like Canada and Australia.',
//       visaSupport: 'Expert guidance through visa applications to ensure smooth transitions.',
//       topDestinations: ['Canada', 'Australia', 'Germany', 'France', 'Ireland', 'Netherlands']
//     },
//     {
//       id: 2,
//       icon: '🎓',
//       title: 'Degree',
//       shortDesc: 'Full academic programs worldwide',
//       duration: '2-5 years',
//       countries: '40+',
//       description: 'Comprehensive academic programs from foundational to advanced levels. Build expertise and open global career opportunities with theoretical and practical learning.',
//       fullDescription: 'Comprehensive academic programs ranging from foundational to advanced levels, designed to build expertise and open global career opportunities. These programs emphasize both theoretical and practical learning.',
//       subtypes: ["Associate's Degree", "Bachelor's Degree", "Master's Degree", "Doctorate/Ph.D."],
//       fields: ['Business', 'Engineering', 'Sciences', 'Fashion', 'Culinary Arts', 'Medicine'],
//       color: '#1E3A5F',
//       bgImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
//       accreditation: 'Offered through accredited partner universities, with international recognition for quality education standards.',
//       entryRequirements: 'Varies by level - high school for undergrad, bachelor\'s for master\'s; includes GPA, language tests (IELTS/TOEFL), and sometimes entrance exams.',
//       postStudy: 'Post-study work options, permanent residency pathways in countries like Canada and Australia; career building in multicultural environments.',
//       visaSupport: 'Complete assistance with student visas and immigration procedures.',
//       topDestinations: ['Canada', 'Australia', 'UK', 'Germany', 'France', 'USA', 'Ireland']
//     }
//   ];

//   return (
//     <section style={{
//       padding: '120px 48px',
//       background: '#F8FAFC',
//       fontFamily: '"Plus Jakarta Sans", sans-serif',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
      
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

//         .program-card {
//           border-radius: 24px;
//           cursor: pointer;
//           transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//           overflow: hidden;
//           border: 2px solid #E2E8F0;
//           position: relative;
//         }

//         .program-card:hover {
//           border-color: #CBD5E1;
//           transform: translateY(-4px);
//           box-shadow: 0 20px 40px rgba(0,0,0,0.1);
//         }

//         .program-card:hover .card-bg {
//           transform: scale(1.1);
//         }

//         .program-card.active {
//           border-color: #1E3A5F;
//         }

//         .program-card.active:hover {
//           border-color: #1E3A5F;
//         }

//         .card-content {
//           transition: all 0.4s ease;
//         }

//         .expand-icon {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 20px;
//           transition: all 0.3s ease;
//         }

//         .tag {
//           padding: 6px 14px;
//           border-radius: 50px;
//           font-size: 12px;
//           font-weight: 600;
//           display: inline-block;
//           margin-right: 8px;
//           margin-bottom: 8px;
//         }

//         .stat-box {
//           padding: 16px 20px;
//           border-radius: 16px;
//           text-align: center;
//           min-width: 100px;
//         }

//         .subtype-item {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 10px 0;
//           border-bottom: 1px solid rgba(255,255,255,0.1);
//         }

//         .subtype-item:last-child {
//           border-bottom: none;
//         }

//         .learn-more-btn {
//           background: #FF6B35;
//           color: white;
//           border: none;
//           padding: 14px 28px;
//           border-radius: 50px;
//           font-weight: 700;
//           font-size: 14px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//         }

//         .learn-more-btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 24px rgba(255, 107, 53, 0.4);
//         }

//         /* Mobile Responsive */
//         @media (max-width: 1024px) {
//           .programs-grid {
//             flex-direction: column !important;
//           }
          
//           .program-card {
//             width: 100% !important;
//             flex: none !important;
//           }
//         }

//         @media (max-width: 768px) {
//           .programs-section {
//             padding: 80px 20px !important;
//           }

//           .section-header {
//             flex-direction: column !important;
//             text-align: center;
//             gap: 20px !important;
//           }

//           .section-title {
//             font-size: 36px !important;
//           }

//           .stats-row {
//             justify-content: center !important;
//           }

//           .expanded-content {
//             flex-direction: column !important;
//           }

//           .subtypes-list {
//             margin-top: 24px;
//           }

//           .modal-content {
//             width: 95% !important;
//             max-height: 90vh !important;
//             margin: 20px !important;
//             padding: 24px !important;
//           }

//           .modal-grid {
//             grid-template-columns: 1fr !important;
//           }

//           .modal-title {
//             font-size: 28px !important;
//           }
//         }

//         /* Modal Styles */
//         .modal-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(0, 0, 0, 0.6);
//           backdrop-filter: blur(8px);
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 20px;
//           animation: fadeIn 0.3s ease;
//         }

//         .modal-content {
//           background: white;
//           border-radius: 28px;
//           max-width: 900px;
//           width: 100%;
//           max-height: 85vh;
//           overflow-y: auto;
//           position: relative;
//           animation: slideUp 0.4s ease;
//         }

//         @keyframes slideUp {
//           from { 
//             opacity: 0; 
//             transform: translateY(40px); 
//           }
//           to { 
//             opacity: 1; 
//             transform: translateY(0); 
//           }
//         }

//         .modal-close {
//           position: absolute;
//           top: 20px;
//           right: 20px;
//           width: 44px;
//           height: 44px;
//           border-radius: 50%;
//           background: #F1F5F9;
//           border: none;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 20px;
//           color: #64748B;
//           transition: all 0.3s ease;
//           z-index: 10;
//         }

//         .modal-close:hover {
//           background: #E2E8F0;
//           color: #1E3A5F;
//         }

//         .info-card {
//           background: #F8FAFC;
//           border-radius: 16px;
//           padding: 20px;
//           border: 1px solid #E2E8F0;
//         }

//         .info-card-title {
//           font-size: 11px;
//           font-weight: 700;
//           color: #94A3B8;
//           letter-spacing: 1px;
//           text-transform: uppercase;
//           margin-bottom: 8px;
//         }

//         .info-card-content {
//           font-size: 14px;
//           color: #1E3A5F;
//           line-height: 1.6;
//         }

//         .destination-tag {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           padding: 8px 14px;
//           background: white;
//           border: 1px solid #E2E8F0;
//           border-radius: 50px;
//           font-size: 13px;
//           font-weight: 600;
//           color: #1E3A5F;
//           transition: all 0.3s ease;
//         }

//         .destination-tag:hover {
//           border-color: #FF6B35;
//           background: #FFF7ED;
//         }

//         .cta-button {
//           background: #FF6B35;
//           color: white;
//           border: none;
//           padding: 16px 32px;
//           border-radius: 50px;
//           font-weight: 700;
//           font-size: 15px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//         }

//         .cta-button:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 24px rgba(255, 107, 53, 0.4);
//         }

//         .cta-button-secondary {
//           background: #1E3A5F;
//         }

//         .cta-button-secondary:hover {
//           box-shadow: 0 8px 24px rgba(30, 58, 95, 0.4);
//         }
//       `}</style>

//       {/* Background Decorative */}
//       <div style={{
//         position: 'absolute',
//         top: '10%',
//         right: '-5%',
//         width: '300px',
//         height: '300px',
//         borderRadius: '50%',
//         background: '#FF6B35',
//         opacity: 0.03
//       }} />
//       <div style={{
//         position: 'absolute',
//         bottom: '10%',
//         left: '-5%',
//         width: '250px',
//         height: '250px',
//         borderRadius: '50%',
//         background: '#2EC4B6',
//         opacity: 0.03
//       }} />

//       <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
//         {/* Section Header */}
//         <div 
//           className="section-header"
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'flex-end',
//             marginBottom: '60px'
//           }}
//         >
//           <div>
//             {/* Tagline */}
//             <div style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: '10px',
//               marginBottom: '16px'
//             }}>
//               <div style={{
//                 width: '36px',
//                 height: '3px',
//                 background: '#FF6B35',
//                 borderRadius: '2px'
//               }} />
//               <span style={{
//                 fontSize: '13px',
//                 fontWeight: '700',
//                 color: '#64748B',
//                 letterSpacing: '1.5px',
//                 textTransform: 'uppercase'
//               }}>
//                 Accredited Programs
//               </span>
//             </div>

//             {/* Title */}
//             <h2 
//               className="section-title"
//               style={{
//                 fontSize: '48px',
//                 fontWeight: '800',
//                 color: '#1E3A5F',
//                 letterSpacing: '-1.5px',
//                 lineHeight: '1.1'
//               }}
//             >
//               Choose Your<br />
//               <span style={{ color: '#FF6B35' }}>Academic Journey</span>
//             </h2>
//           </div>

//           {/* Stats */}
//           <div 
//             className="stats-row"
//             style={{
//               display: 'flex',
//               gap: '32px'
//             }}
//           >
//             <div style={{ textAlign: 'right' }}>
//               <div style={{ fontSize: '32px', fontWeight: '800', color: '#1E3A5F' }}>500+</div>
//               <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '500' }}>Partner Universities</div>
//             </div>
//             <div style={{
//               width: '1px',
//               background: '#E2E8F0'
//             }} />
//             <div style={{ textAlign: 'right' }}>
//               <div style={{ fontSize: '32px', fontWeight: '800', color: '#1E3A5F' }}>50+</div>
//               <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '500' }}>Countries Worldwide</div>
//             </div>
//           </div>
//         </div>

//         {/* Programs Cards */}
//         <div 
//           className="programs-grid"
//           style={{
//             display: 'flex',
//             gap: '20px',
//             alignItems: 'stretch'
//           }}
//         >
//           {programs.map((program) => {
//             const isActive = activeProgram === program.id;
            
//             return (
//               <div
//                 key={program.id}
//                 className={`program-card ${isActive ? 'active' : ''}`}
//                 onClick={() => setActiveProgram(program.id)}
//                 style={{
//                   flex: isActive ? '1.5' : '1',
//                   padding: '28px',
//                   minHeight: 'auto',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   position: 'relative',
//                   overflow: 'hidden',
//                   background: 'transparent'
//                 }}
//               >
//                 {/* Background Image */}
//                 <div style={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   backgroundImage: `url(${program.bgImage})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   transition: 'transform 0.5s ease',
//                   transform: isActive ? 'scale(1.05)' : 'scale(1)'
//                 }} />

//                 {/* Overlay */}
//                 <div style={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: isActive 
//                     ? 'linear-gradient(180deg, rgba(30, 58, 95, 0.85) 0%, rgba(30, 58, 95, 0.95) 100%)'
//                     : 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.97) 100%)',
//                   transition: 'all 0.4s ease'
//                 }} />

//                 {/* Card Content - Now with z-index */}
//                 <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  
//                   {/* Card Header - Icon & Stats */}
//                   <div style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     marginBottom: '20px'
//                   }}>
//                     {/* Icon */}
//                     <div style={{
//                       width: '52px',
//                       height: '52px',
//                       borderRadius: '14px',
//                       background: isActive ? 'rgba(255,255,255,0.15)' : `${program.color}20`,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       fontSize: '24px',
//                       transition: 'all 0.4s ease',
//                       backdropFilter: 'blur(10px)'
//                     }}>
//                       {program.icon}
//                     </div>

//                     {/* Duration & Countries - Compact */}
//                     <div style={{
//                       display: 'flex',
//                       gap: '16px',
//                       alignItems: 'center'
//                     }}>
//                       <div style={{ textAlign: 'center' }}>
//                         <div style={{
//                           fontSize: '14px',
//                           fontWeight: '700',
//                           color: isActive ? 'white' : '#1E3A5F'
//                         }}>
//                           {program.duration}
//                         </div>
//                         <div style={{
//                           fontSize: '11px',
//                           color: isActive ? 'rgba(255,255,255,0.6)' : '#94A3B8'
//                         }}>
//                           Duration
//                         </div>
//                       </div>
//                       <div style={{
//                         width: '1px',
//                         height: '24px',
//                         background: isActive ? 'rgba(255,255,255,0.2)' : '#E2E8F0'
//                       }} />
//                       <div style={{ textAlign: 'center' }}>
//                         <div style={{
//                           fontSize: '14px',
//                           fontWeight: '700',
//                           color: isActive ? 'white' : '#1E3A5F'
//                         }}>
//                           {program.countries}
//                         </div>
//                         <div style={{
//                           fontSize: '11px',
//                           color: isActive ? 'rgba(255,255,255,0.6)' : '#94A3B8'
//                         }}>
//                           Countries
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Title & Description */}
//                   <h3 style={{
//                     fontSize: '22px',
//                     fontWeight: '800',
//                     color: isActive ? 'white' : '#1E3A5F',
//                     marginBottom: '6px',
//                     transition: 'all 0.4s ease'
//                   }}>
//                     {program.title}
//                   </h3>

//                   <p style={{
//                     fontSize: '14px',
//                     color: isActive ? 'rgba(255,255,255,0.7)' : '#64748B',
//                     marginBottom: '20px',
//                     lineHeight: '1.5',
//                     transition: 'all 0.4s ease'
//                   }}>
//                     {program.shortDesc}
//                   </p>

//                   {/* Subtypes - Only show when active */}
//                   {isActive && (
//                     <div style={{
//                       display: 'flex',
//                       flexWrap: 'wrap',
//                       gap: '8px',
//                       marginBottom: '20px',
//                       animation: 'fadeIn 0.3s ease'
//                     }}>
//                       <style>{`
//                         @keyframes fadeIn {
//                           from { opacity: 0; }
//                           to { opacity: 1; }
//                         }
//                       `}</style>
//                       {program.subtypes.map((subtype, idx) => (
//                         <span
//                           key={idx}
//                           style={{
//                             padding: '6px 12px',
//                             borderRadius: '50px',
//                             fontSize: '11px',
//                             fontWeight: '600',
//                             background: 'rgba(255,255,255,0.15)',
//                             color: 'white',
//                             backdropFilter: 'blur(10px)'
//                           }}
//                         >
//                           {subtype}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   {/* CTA */}
//                   <div style={{ marginTop: 'auto' }}>
//                     <span 
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setSelectedProgram(program);
//                       }}
//                       style={{
//                         fontSize: '14px',
//                         fontWeight: '700',
//                         color: '#FF6B35',
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         gap: '6px',
//                         cursor: 'pointer',
//                         transition: 'gap 0.3s ease'
//                       }}
//                     >
//                       Learn More
//                       <span style={{ fontSize: '16px' }}>→</span>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom Note */}
//         <div style={{
//           marginTop: '48px',
//           textAlign: 'center'
//         }}>
//           <p style={{
//             fontSize: '15px',
//             color: '#64748B',
//             maxWidth: '600px',
//             margin: '0 auto'
//           }}>
//             All programs are internationally accredited through our partnerships with 
//             <span style={{ color: '#1E3A5F', fontWeight: '600' }}> 500+ universities </span> 
//             across 
//             <span style={{ color: '#1E3A5F', fontWeight: '600' }}> 50+ countries</span>.
//           </p>
//         </div>
//       </div>

//       {/* Program Detail Modal */}
//       {selectedProgram && (
//         <div 
//           className="modal-overlay"
//           onClick={() => setSelectedProgram(null)}
//         >
//           <div 
//             className="modal-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button 
//               className="modal-close"
//               onClick={() => setSelectedProgram(null)}
//             >
//               ✕
//             </button>

//             {/* Modal Header with Background */}
//             <div style={{
//               position: 'relative',
//               height: '200px',
//               overflow: 'hidden',
//               borderRadius: '28px 28px 0 0'
//             }}>
//               <div style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 backgroundImage: `url(${selectedProgram.bgImage})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//               }} />
//               <div style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 background: `linear-gradient(180deg, ${selectedProgram.color}CC 0%, ${selectedProgram.color}EE 100%)`
//               }} />
              
//               {/* Header Content */}
//               <div style={{
//                 position: 'relative',
//                 zIndex: 2,
//                 padding: '40px',
//                 height: '100%',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'flex-end'
//               }}>
//                 <div style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '16px',
//                   marginBottom: '12px'
//                 }}>
//                   <span style={{ fontSize: '40px' }}>{selectedProgram.icon}</span>
//                   <div style={{
//                     display: 'flex',
//                     gap: '12px'
//                   }}>
//                     <span style={{
//                       padding: '6px 14px',
//                       background: 'rgba(255,255,255,0.2)',
//                       borderRadius: '50px',
//                       fontSize: '13px',
//                       fontWeight: '600',
//                       color: 'white'
//                     }}>
//                       {selectedProgram.duration}
//                     </span>
//                     <span style={{
//                       padding: '6px 14px',
//                       background: 'rgba(255,255,255,0.2)',
//                       borderRadius: '50px',
//                       fontSize: '13px',
//                       fontWeight: '600',
//                       color: 'white'
//                     }}>
//                       {selectedProgram.countries} Countries
//                     </span>
//                   </div>
//                 </div>
//                 <h2 
//                   className="modal-title"
//                   style={{
//                     fontSize: '36px',
//                     fontWeight: '800',
//                     color: 'white',
//                     margin: 0
//                   }}
//                 >
//                   {selectedProgram.title} Programs
//                 </h2>
//               </div>
//             </div>

//             {/* Modal Body */}
//             <div style={{ padding: '32px 40px 40px' }}>
              
//               {/* Description */}
//               <p style={{
//                 fontSize: '16px',
//                 lineHeight: '1.7',
//                 color: '#64748B',
//                 marginBottom: '32px'
//               }}>
//                 {selectedProgram.fullDescription}
//               </p>

//               {/* Program Types */}
//               <div style={{ marginBottom: '32px' }}>
//                 <h4 style={{
//                   fontSize: '12px',
//                   fontWeight: '700',
//                   color: '#94A3B8',
//                   letterSpacing: '1.5px',
//                   textTransform: 'uppercase',
//                   marginBottom: '16px'
//                 }}>
//                   Program Types Available
//                 </h4>
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//                   {selectedProgram.subtypes.map((subtype: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, idx: React.Key | null | undefined) => (
//                     <span
//                       key={idx}
//                       style={{
//                         padding: '10px 18px',
//                         background: `${selectedProgram.color}15`,
//                         borderRadius: '50px',
//                         fontSize: '14px',
//                         fontWeight: '600',
//                         color: selectedProgram.color
//                       }}
//                     >
//                       {subtype}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Info Grid */}
//               <div 
//                 className="modal-grid"
//                 style={{
//                   display: 'grid',
//                   gridTemplateColumns: '1fr 1fr',
//                   gap: '16px',
//                   marginBottom: '32px'
//                 }}
//               >
//                 {/* Entry Requirements */}
//                 <div className="info-card">
//                   <div className="info-card-title">📋 Entry Requirements</div>
//                   <div className="info-card-content">{selectedProgram.entryRequirements}</div>
//                 </div>

//                 {/* Accreditation */}
//                 <div className="info-card">
//                   <div className="info-card-title">✓ Accreditation</div>
//                   <div className="info-card-content">{selectedProgram.accreditation}</div>
//                 </div>

//                 {/* Post Study */}
//                 <div className="info-card">
//                   <div className="info-card-title">🚀 Post-Study Opportunities</div>
//                   <div className="info-card-content">{selectedProgram.postStudy}</div>
//                 </div>

//                 {/* Visa Support */}
//                 <div className="info-card">
//                   <div className="info-card-title">✈️ Visa Support</div>
//                   <div className="info-card-content">{selectedProgram.visaSupport}</div>
//                 </div>
//               </div>

//               {/* Fields of Study */}
//               <div style={{ marginBottom: '32px' }}>
//                 <h4 style={{
//                   fontSize: '12px',
//                   fontWeight: '700',
//                   color: '#94A3B8',
//                   letterSpacing: '1.5px',
//                   textTransform: 'uppercase',
//                   marginBottom: '16px'
//                 }}>
//                   Fields of Study
//                 </h4>
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//                   {selectedProgram.fields.map((field: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, idx: React.Key | null | undefined) => (
//                     <span
//                       key={idx}
//                       style={{
//                         padding: '8px 16px',
//                         background: '#F1F5F9',
//                         borderRadius: '50px',
//                         fontSize: '13px',
//                         fontWeight: '600',
//                         color: '#1E3A5F'
//                       }}
//                     >
//                       {field}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Top Destinations */}
//               <div style={{ marginBottom: '40px' }}>
//                 <h4 style={{
//                   fontSize: '12px',
//                   fontWeight: '700',
//                   color: '#94A3B8',
//                   letterSpacing: '1.5px',
//                   textTransform: 'uppercase',
//                   marginBottom: '16px'
//                 }}>
//                   Top Destinations
//                 </h4>
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//                   {selectedProgram.topDestinations.map((dest: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, idx: React.Key | null | undefined) => (
//                     <span key={idx} className="destination-tag">
//                       🌍 {dest}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* CTA Buttons */}
//               <div style={{
//                 display: 'flex',
//                 gap: '16px',
//                 flexWrap: 'wrap'
//               }}>
//                 <button className="cta-button">
//                   Apply Now
//                   <span>→</span>
//                 </button>
//                 <button className="cta-button cta-button-secondary">
//                   Book Free Consultation
//                   <span>💬</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
"use client";

import React, { useState } from 'react';

// ============================================
// PROGRAMS SECTION - Expanding Cards Design
// Minimal, Unique, Professional
// ============================================

export default function ProgramsSection() {
  const [activeProgram, setActiveProgram] = useState(1); // Default: Diploma expanded
  const [selectedProgram, setSelectedProgram] = useState<any>(null); // For modal detail view

  const programs = [
    {
      id: 0,
      icon: '01',
      title: 'Certificate',
      shortDesc: 'Quick skills for fast career entry',
      duration: '3-12 months',
      countries: '25+',
      description: 'Short-term specialized programs designed for skill development and career advancement. Focus on practical knowledge ideal for professionals looking to upskill.',
      fullDescription: 'Short-term specialized programs designed for skill development and career advancement. These programs focus on practical knowledge and are ideal for professionals looking to upskill or students seeking quick entry into the workforce.',
      subtypes: ['Graduate Certificate', 'Undergraduate Certificate'],
      fields: ['Business', 'Technology', 'Arts', 'Healthcare'],
      color: '#1E3A5F',
      bgImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
      accreditation: 'Accredited by partner universities and recognized internationally for career and further education pathways.',
      entryRequirements: 'Typically require high school completion or equivalent; some may need work experience.',
      postStudy: 'Skill enhancement leading to job placements or further studies; post-study work visas available in select countries.',
      visaSupport: 'Full visa assistance provided, including application guidance and immigration support.',
      topDestinations: ['France', 'Spain', 'Canada', 'Australia', 'Ireland', 'Germany']
    },
    {
      id: 1,
      icon: '02',
      title: 'Diploma',
      shortDesc: 'Industry-ready training programs',
      duration: '1-2 years',
      countries: '30+',
      description: 'Comprehensive diploma programs offering practical skills and in-depth industry knowledge. Perfect for hands-on training and quick career entry.',
      fullDescription: 'Comprehensive diploma programs offering practical skills and in-depth industry knowledge. These are suitable for students aiming for hands-on training and quick career entry with strong employment outcomes.',
      subtypes: ['Graduate Diploma', 'Undergraduate Diploma'],
      fields: ['Engineering', 'Hospitality', 'Health Sciences', 'Creative Industries'],
      color: '#FF6B35',
      bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
      accreditation: 'Accredited through partnerships with global universities, ensuring quality and transferability of credits.',
      entryRequirements: 'High school diploma or equivalent; language proficiency tests may be required.',
      postStudy: 'Pathways to degree programs or employment; post-graduation work permits in countries like Canada and Australia.',
      visaSupport: 'Expert guidance through visa applications to ensure smooth transitions.',
      topDestinations: ['Canada', 'Australia', 'Germany', 'France', 'Ireland', 'Netherlands']
    },
    {
      id: 2,
      icon: '03',
      title: 'Degree',
      shortDesc: 'Full academic programs worldwide',
      duration: '2-5 years',
      countries: '40+',
      description: 'Comprehensive academic programs from foundational to advanced levels. Build expertise and open global career opportunities with theoretical and practical learning.',
      fullDescription: 'Comprehensive academic programs ranging from foundational to advanced levels, designed to build expertise and open global career opportunities. These programs emphasize both theoretical and practical learning.',
      subtypes: ["Associate's Degree", "Bachelor's Degree", "Master's Degree", "Doctorate/Ph.D."],
      fields: ['Business', 'Engineering', 'Sciences', 'Fashion', 'Culinary Arts', 'Medicine'],
      color: '#1E3A5F',
      bgImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
      accreditation: 'Offered through accredited partner universities, with international recognition for quality education standards.',
      entryRequirements: 'Varies by level - high school for undergrad, bachelor\'s for master\'s; includes GPA, language tests (IELTS/TOEFL), and sometimes entrance exams.',
      postStudy: 'Post-study work options, permanent residency pathways in countries like Canada and Australia; career building in multicultural environments.',
      visaSupport: 'Complete assistance with student visas and immigration procedures.',
      topDestinations: ['Canada', 'Australia', 'UK', 'Germany', 'France', 'USA', 'Ireland']
    }
  ];

  return (
    <section style={{
      padding: '120px 48px',
      background: '#F8FAFC',
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .program-card {
          border-radius: 24px;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          border: 2px solid #E2E8F0;
          position: relative;
        }

        .program-card:hover {
          border-color: #CBD5E1;
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .program-card:hover .card-bg {
          transform: scale(1.1);
        }

        .program-card.active {
          border-color: #1E3A5F;
        }

        .program-card.active:hover {
          border-color: #1E3A5F;
        }

        .card-content {
          transition: all 0.4s ease;
        }

        .expand-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: all 0.3s ease;
        }

        .tag {
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          display: inline-block;
          margin-right: 8px;
          margin-bottom: 8px;
        }

        .stat-box {
          padding: 16px 20px;
          border-radius: 16px;
          text-align: center;
          min-width: 100px;
        }

        .subtype-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .subtype-item:last-child {
          border-bottom: none;
        }

        .learn-more-btn {
          background: #FF6B35;
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .learn-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.4);
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .programs-grid {
            flex-direction: column !important;
          }
          
          .program-card {
            width: 100% !important;
            flex: none !important;
          }
        }

        @media (max-width: 768px) {
          .programs-section {
            padding: 80px 20px !important;
          }

          .section-header {
            flex-direction: column !important;
            text-align: center;
            gap: 20px !important;
          }

          .section-title {
            font-size: 36px !important;
          }

          .stats-row {
            justify-content: center !important;
          }

          .expanded-content {
            flex-direction: column !important;
          }

          .subtypes-list {
            margin-top: 24px;
          }

          .modal-content {
            width: 95% !important;
            max-height: 90vh !important;
            margin: 20px !important;
            padding: 24px !important;
          }

          .modal-grid {
            grid-template-columns: 1fr !important;
          }

          .modal-title {
            font-size: 28px !important;
          }
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: white;
          border-radius: 28px;
          max-width: 900px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.4s ease;
        }

        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #F1F5F9;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #64748B;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .modal-close:hover {
          background: #E2E8F0;
          color: #1E3A5F;
        }

        .info-card {
          background: #F8FAFC;
          border-radius: 16px;
          padding: 20px;
          border: 1px solid #E2E8F0;
        }

        .info-card-title {
          font-size: 11px;
          font-weight: 700;
          color: #94A3B8;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .info-card-content {
          font-size: 14px;
          color: #1E3A5F;
          line-height: 1.6;
        }

        .destination-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: white;
          border: 1px solid #E2E8F0;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          color: #1E3A5F;
          transition: all 0.3s ease;
        }

        .destination-tag:hover {
          border-color: #FF6B35;
          background: #FFF7ED;
        }

        .cta-button {
          background: #FF6B35;
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.4);
        }

        .cta-button-secondary {
          background: #1E3A5F;
        }

        .cta-button-secondary:hover {
          box-shadow: 0 8px 24px rgba(30, 58, 95, 0.4);
        }
      `}</style>

      {/* Background Decorative */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: '#FF6B35',
        opacity: 0.03
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: '#2EC4B6',
        opacity: 0.03
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div 
          className="section-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '60px'
          }}
        >
          <div>
            {/* Tagline */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px'
            }}>
              <div style={{
                width: '36px',
                height: '3px',
                background: '#FF6B35',
                borderRadius: '2px'
              }} />
              <span style={{
                fontSize: '13px',
                fontWeight: '700',
                color: '#64748B',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}>
                Accredited Programs
              </span>
            </div>

            {/* Title */}
            <h2 
              className="section-title"
              style={{
                fontSize: '48px',
                fontWeight: '800',
                color: '#1E3A5F',
                letterSpacing: '-1.5px',
                lineHeight: '1.1'
              }}
            >
              Choose Your<br />
              <span style={{ color: '#FF6B35' }}>Academic Journey</span>
            </h2>
          </div>

          {/* Stats */}
          <div 
            className="stats-row"
            style={{
              display: 'flex',
              gap: '32px'
            }}
          >
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#1E3A5F' }}>500+</div>
              <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '500' }}>Partner Universities</div>
            </div>
            <div style={{
              width: '1px',
              background: '#E2E8F0'
            }} />
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#1E3A5F' }}>50+</div>
              <div style={{ fontSize: '14px', color: '#64748B', fontWeight: '500' }}>Countries Worldwide</div>
            </div>
          </div>
        </div>

        {/* Programs Cards */}
        <div 
          className="programs-grid"
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'stretch'
          }}
        >
          {programs.map((program) => {
            const isActive = activeProgram === program.id;
            
            return (
              <div
                key={program.id}
                className={`program-card ${isActive ? 'active' : ''}`}
                onClick={() => setActiveProgram(program.id)}
                style={{
                  flex: isActive ? '1.5' : '1',
                  padding: '28px',
                  minHeight: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'transparent'
                }}
              >
                {/* Background Image */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${program.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.5s ease',
                  transform: isActive ? 'scale(1.05)' : 'scale(1)'
                }} />

                {/* Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: isActive 
                    ? 'linear-gradient(180deg, rgba(30, 58, 95, 0.85) 0%, rgba(30, 58, 95, 0.95) 100%)'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.97) 100%)',
                  transition: 'all 0.4s ease'
                }} />

                {/* Card Content - Now with z-index */}
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  
                  {/* Card Header - Icon & Stats */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px'
                  }}>
                    {/* Icon - Now shows number */}
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: isActive ? 'rgba(255,255,255,0.15)' : `${program.color}10`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      fontWeight: '800',
                      color: isActive ? 'white' : program.color,
                      transition: 'all 0.4s ease',
                      backdropFilter: 'blur(10px)'
                    }}>
                      {program.icon}
                    </div>

                    {/* Duration & Countries - Compact */}
                    <div style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'center'
                    }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: '700',
                          color: isActive ? 'white' : '#1E3A5F'
                        }}>
                          {program.duration}
                        </div>
                        <div style={{
                          fontSize: '11px',
                          color: isActive ? 'rgba(255,255,255,0.6)' : '#94A3B8'
                        }}>
                          Duration
                        </div>
                      </div>
                      <div style={{
                        width: '1px',
                        height: '24px',
                        background: isActive ? 'rgba(255,255,255,0.2)' : '#E2E8F0'
                      }} />
                      <div style={{ textAlign: 'center' }}>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: '700',
                          color: isActive ? 'white' : '#1E3A5F'
                        }}>
                          {program.countries}
                        </div>
                        <div style={{
                          fontSize: '11px',
                          color: isActive ? 'rgba(255,255,255,0.6)' : '#94A3B8'
                        }}>
                          Countries
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: '800',
                    color: isActive ? 'white' : '#1E3A5F',
                    marginBottom: '6px',
                    transition: 'all 0.4s ease'
                  }}>
                    {program.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: isActive ? 'rgba(255,255,255,0.7)' : '#64748B',
                    marginBottom: '20px',
                    lineHeight: '1.5',
                    transition: 'all 0.4s ease'
                  }}>
                    {program.shortDesc}
                  </p>

                  {/* Subtypes - Only show when active */}
                  {isActive && (
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '20px',
                      animation: 'fadeIn 0.3s ease'
                    }}>
                      <style>{`
                        @keyframes fadeIn {
                          from { opacity: 0; }
                          to { opacity: 1; }
                        }
                      `}</style>
                      {program.subtypes.map((subtype, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '50px',
                            fontSize: '11px',
                            fontWeight: '600',
                            background: 'rgba(255,255,255,0.15)',
                            color: 'white',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          {subtype}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div style={{ marginTop: 'auto' }}>
                    <span 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProgram(program);
                      }}
                      style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        color: '#FF6B35',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        transition: 'gap 0.3s ease'
                      }}
                    >
                      Learn More
                      <span style={{ fontSize: '16px' }}>→</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div style={{
          marginTop: '48px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '15px',
            color: '#64748B',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            All programs are internationally accredited through our partnerships with 
            <span style={{ color: '#1E3A5F', fontWeight: '600' }}> 500+ universities </span> 
            across 
            <span style={{ color: '#1E3A5F', fontWeight: '600' }}> 50+ countries</span>.
          </p>
        </div>
      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div 
          className="modal-overlay"
          onClick={() => setSelectedProgram(null)}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="modal-close"
              onClick={() => setSelectedProgram(null)}
            >
              ✕
            </button>

            {/* Modal Header with Background */}
            <div style={{
              position: 'relative',
              height: '200px',
              overflow: 'hidden',
              borderRadius: '28px 28px 0 0'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${selectedProgram.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(180deg, ${selectedProgram.color}CC 0%, ${selectedProgram.color}EE 100%)`
              }} />
              
              {/* Header Content */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                padding: '40px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '12px'
                }}>
                  <span style={{ 
                    fontSize: '32px', 
                    fontWeight: '800',
                    color: 'white',
                    opacity: 0.5
                  }}>{selectedProgram.icon}</span>
                  <div style={{
                    display: 'flex',
                    gap: '12px'
                  }}>
                    <span style={{
                      padding: '6px 14px',
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '50px',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: 'white'
                    }}>
                      {selectedProgram.duration}
                    </span>
                    <span style={{
                      padding: '6px 14px',
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '50px',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: 'white'
                    }}>
                      {selectedProgram.countries} Countries
                    </span>
                  </div>
                </div>
                <h2 
                  className="modal-title"
                  style={{
                    fontSize: '36px',
                    fontWeight: '800',
                    color: 'white',
                    margin: 0
                  }}
                >
                  {selectedProgram.title} Programs
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '32px 40px 40px' }}>
              
              {/* Description */}
              <p style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#64748B',
                marginBottom: '32px'
              }}>
                {selectedProgram.fullDescription}
              </p>

              {/* Program Types */}
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#94A3B8',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginBottom: '16px'
                }}>
                  Program Types Available
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {selectedProgram.subtypes.map((subtype: string, idx: number) => (
                    <span
                      key={idx}
                      style={{
                        padding: '10px 18px',
                        background: `${selectedProgram.color}15`,
                        borderRadius: '50px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: selectedProgram.color
                      }}
                    >
                      {subtype}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info Grid */}
              <div 
                className="modal-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  marginBottom: '32px'
                }}
              >
                {/* Entry Requirements */}
                <div className="info-card">
                  <div className="info-card-title">Entry Requirements</div>
                  <div className="info-card-content">{selectedProgram.entryRequirements}</div>
                </div>

                {/* Accreditation */}
                <div className="info-card">
                  <div className="info-card-title">Accreditation</div>
                  <div className="info-card-content">{selectedProgram.accreditation}</div>
                </div>

                {/* Post Study */}
                <div className="info-card">
                  <div className="info-card-title">Post-Study Opportunities</div>
                  <div className="info-card-content">{selectedProgram.postStudy}</div>
                </div>

                {/* Visa Support */}
                <div className="info-card">
                  <div className="info-card-title">Visa Support</div>
                  <div className="info-card-content">{selectedProgram.visaSupport}</div>
                </div>
              </div>

              {/* Fields of Study */}
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#94A3B8',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginBottom: '16px'
                }}>
                  Fields of Study
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {selectedProgram.fields.map((field: string, idx: number) => (
                    <span
                      key={idx}
                      style={{
                        padding: '8px 16px',
                        background: '#F1F5F9',
                        borderRadius: '50px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#1E3A5F'
                      }}
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>

              {/* Top Destinations */}
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#94A3B8',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginBottom: '16px'
                }}>
                  Top Destinations
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {selectedProgram.topDestinations.map((dest: string, idx: number) => (
                    <span key={idx} className="destination-tag">
                      {dest}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <button className="cta-button">
                  Apply Now
                  <span>→</span>
                </button>
                <button className="cta-button cta-button-secondary">
                  Book Free Consultation
                  <span>💬</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}