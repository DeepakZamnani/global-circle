

// // // // "use client";
// // // // import { useState } from 'react';
// // // // import LeadFormModal from '../components/LeadForm';
// // // // import React from 'react';
// // // // import Image from 'next/image';
// // // // import Link from 'next/link';
// // // // import { 
// // // //   MapPin, Calendar, Building2, GraduationCap, Users, Award,
// // // //   CheckCircle2, DollarSign, FileText, Globe, Plane, CloudSun,
// // // //   BookOpen, FlaskConical, Hospital, Home, Shield, Trophy,
// // // //   Briefcase, Target, TrendingUp, ArrowRight, Download,
// // // //   School, Lightbulb, Cpu, Building, BarChart3, Percent
// // // // } from 'lucide-react';
// // // // import { University } from '../data/universityData';
// // // // import Navbar from '../components/Navbar';
// // // // import Footer from '../components/Footer';

// // // // export const revalidate = 60; // revalidate every 60 seconds
// // // // interface UniversityPageProps {
// // // //   universitySlug: string;
// // // //   universityData: University;
// // // // }

// // // // export default function UniversityPage({ universitySlug, universityData }: UniversityPageProps) {
// // // //   const uni = universityData;
// // // // const [isModalOpen, setIsModalOpen] = useState(false);
// // // //   return (<>
// // // //     <main className="min-h-screen pt-5 bg-white">
// // // //   <Navbar/>
      
// // // //       {/* HERO SECTION - Full Image Left | Data Right (Desktop) / Data Only (Mobile) */}
// // // //       <section className="relative flex flex-col md:flex-row h-screen">
        
// // // //         {/* LEFT - FULL IMAGE SIDE (Hidden on mobile, visible on desktop) */}
// // // //         <div className="relative hidden md:block md:w-1/2 h-1/2 md:h-full">
// // // //           <Image
// // // //             src={uni.heroImage}
// // // //             alt={uni.name}
// // // //             fill
// // // //             className="object-cover"
// // // //             priority
// // // //           />
// // // //           {/* Subtle gradient overlay for better aesthetics */}
// // // //           <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          
// // // //           {/* University Logo Badge - Bottom Left (Desktop only) */}
// // // //           {uni.logo && (
// // // //             <div className="absolute bottom-6 left-6 bg-white p-3 shadow-xl">
// // // //               <Image
// // // //                 src={uni.logo}
// // // //                 alt={`${uni.name} logo`}
// // // //                 width={64}
// // // //                 height={64}
// // // //                 className="w-12 h-12 md:w-16 md:h-16 object-contain"
// // // //               />
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* DIVIDER (Hidden on mobile, visible on desktop) */}
// // // //         <div className="hidden md:block w-1 bg-[#FF6B35]" />

// // // //         {/* RIGHT - University Info (Full width on mobile, half on desktop) */}
// // // //         <div className="w-full md:w-1/2 h-full bg-gradient-to-br from-[#1E3A5F] via-[#2A4A6F] to-[#1E3A5F] text-white relative overflow-hidden">
// // // //           {/* Background Pattern */}
// // // //           <div className="absolute inset-0 opacity-5">
// // // //             <div className="absolute inset-0" style={{
// // // //               backgroundImage: `
// // // //                 linear-gradient(90deg, white 1px, transparent 1px),
// // // //                 linear-gradient(0deg, white 1px, transparent 1px)
// // // //               `,
// // // //               backgroundSize: '60px 60px'
// // // //             }} />
// // // //           </div>

// // // //           <div className="relative z-10 px-6 md:px-10 lg:px-12 py-8 md:py-10 h-full flex flex-col justify-center overflow-y-auto">
// // // //             <div className="space-y-4 max-w-3xl md:max-w-xl mx-auto md:mx-0 w-full">
            
// // // //             {/* University Logo - Mobile Only */}
// // // //             {uni.logo && (
// // // //               <div className="md:hidden mb-6 flex justify-center">
// // // //                 <div className="bg-white/10 backdrop-blur-sm p-5 border-l-4 border-[#FF6B35]">
// // // //                   <Image
// // // //                     src={uni.logo}
// // // //                     alt={`${uni.name} logo`}
// // // //                     width={80}
// // // //                     height={80}
// // // //                     className="w-16 h-16 object-contain"
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //             )}
            
// // // //             {/* University Name */}
// // // //             <div>
                
// // // //                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-2 leading-tight tracking-tight text-center md:text-left">
// // // //                   {uni.name}
// // // //                 </h1>
// // // //                 <p className="text-base md:text-lg text-slate-200 font-medium border-l-4 border-[#FF6B35] pl-6 md:pl-4 max-w-2xl md:max-w-none mx-auto md:mx-0">
// // // //                   {uni.tagline}
// // // //                 </p>
// // // //               </div>

// // // //               {/* Quick Info Tags */}
// // // //               <div className="grid grid-cols-3 gap-3 md:gap-2 max-w-2xl md:max-w-none mx-auto md:mx-0">
// // // //                 <div className="bg-white/10 backdrop-blur-sm p-4 md:p-3 border-l-4 border-[#FF6B35]">
// // // //                   <MapPin className="w-5 md:w-4 h-5 md:h-4 text-[#FF6B35] mb-2 md:mb-1 mx-auto md:mx-0" />
// // // //                   <div className="text-xs font-bold text-slate-300 uppercase tracking-wider text-center md:text-left">Location</div>
// // // //                   <div className="font-bold mt-1 text-sm md:text-xs text-center md:text-left">{uni.city}</div>
// // // //                 </div>
// // // //                 <div className="bg-white/10 backdrop-blur-sm p-4 md:p-3 border-l-4 border-[#FF6B35]">
// // // //                   <Calendar className="w-5 md:w-4 h-5 md:h-4 text-[#FF6B35] mb-2 md:mb-1 mx-auto md:mx-0" />
// // // //                   <div className="text-xs font-bold text-slate-300 uppercase tracking-wider text-center md:text-left">Founded</div>
// // // //                   <div className="font-bold mt-1 text-sm md:text-xs text-center md:text-left">{uni.establishedYear}</div>
// // // //                 </div>
// // // //                 <div className="bg-white/10 backdrop-blur-sm p-4 md:p-3 border-l-4 border-[#FF6B35]">
// // // //                   <Building2 className="w-5 md:w-4 h-5 md:h-4 text-[#FF6B35] mb-2 md:mb-1 mx-auto md:mx-0" />
// // // //                   <div className="text-xs font-bold text-slate-300 uppercase tracking-wider text-center md:text-left">Type</div>
// // // //                   <div className="font-bold mt-1 text-sm md:text-xs text-center md:text-left">{uni.universityType}</div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Stats Grid */}
// // // //               <div className="grid grid-cols-2 gap-4 md:gap-3 max-w-4xl md:max-w-none mx-auto md:mx-0">
// // // //                 {uni.stats.passRate && (
// // // //                   <StatCard 
// // // //                     icon={<Target className="w-5 h-5" />} 
// // // //                     value={uni.stats.passRate} 
// // // //                     label="Success Rate" 
// // // //                   />
// // // //                 )}
// // // //                 <StatCard 
// // // //                   icon={<Users className="w-5 h-5" />} 
// // // //                   value={uni.stats.totalStudents.toLocaleString()} 
// // // //                   label="Students" 
// // // //                 />
// // // //                 <StatCard 
// // // //                   icon={<BarChart3 className="w-5 h-5" />} 
// // // //                   value={uni.stats.facultyRatio} 
// // // //                   label="Faculty Ratio" 
// // // //                 />
// // // //                 {uni.ranking.globalRank && (
// // // //                   <StatCard 
// // // //                     icon={<Trophy className="w-5 h-5" />} 
// // // //                     value={`Top ${uni.ranking.globalRank}`} 
// // // //                     label="Global Rank" 
// // // //                   />
// // // //                 )}
// // // //               </div>

// // // //               {/* Accreditations */}
// // // //               {uni.accreditations.length > 0 && (
// // // //                 <div className="space-y-3 md:space-y-2 max-w-3xl md:max-w-none mx-auto md:mx-0">
// // // //                   <h3 className="text-xs font-black text-slate-300 uppercase tracking-widest text-center md:text-left">
// // // //                     Accreditations & Recognition
// // // //                   </h3>
// // // //                   <div className="flex flex-wrap gap-2 justify-center md:justify-start">
// // // //                     {uni.accreditations.map((acc, idx) => (
// // // //                       <div key={idx} className="flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1 border-l-4 border-green-500">
// // // //                         <CheckCircle2 className="w-3 h-3" />
// // // //                         <span className="text-xs font-bold">{acc}</span>
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //               )}

// // // //               {/* CTA Buttons */}
// // // //               <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
// // // //                 <Link 
// // // //                 onClick={() => setIsModalOpen(true)}
// // // //                   href="#apply"
// // // //                   className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#ff5722] text-white px-8 md:px-6 py-3 md:py-2.5 font-black uppercase text-sm md:text-xs tracking-wider transition-all shadow-lg hover:shadow-xl hover:translate-x-1 group"
// // // //                 >
// // // //                   APPLY NOW
// // // //                   <ArrowRight className="w-5 md:w-4 h-5 md:h-4 group-hover:translate-x-1 transition-transform" />
// // // //                 </Link>
               
// // // //               </div>
// // // //             </div>

// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* UNIFIED WHITE BACKGROUND CONTAINER - All sections flow together */}
// // // //       <div className="bg-white relative overflow-hidden">
        
// // // //         {/* CONTINUOUS BACKDROP EFFECTS - Span across entire white container */}
// // // //         <div className="absolute top-0 right-0 w-[900px] h-[600px] bg-gradient-to-bl from-[#FF6B35]/25 via-[#FF6B35]/15 to-transparent transform skew-x-12 blur-xl" />
// // // //         <div className="absolute top-1/4 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[#1E3A5F]/20 via-[#1E3A5F]/10 to-transparent rounded-full blur-2xl" />
// // // //         <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-gradient-to-l from-[#FF6B35]/20 via-[#FF6B35]/8 to-transparent rounded-full blur-2xl" />
// // // //         <div className="absolute bottom-0 left-1/4 w-[800px] h-[500px] bg-gradient-to-br from-[#1E3A5F]/25 via-[#1E3A5F]/12 to-transparent transform -skew-y-6 blur-xl" />
        
// // // //         {/* KEY FEATURES - Asymmetric Luxury Grid */}
// // // //         {uni.keyFeatures.length > 0 && (
// // // //           <section className="py-12 relative z-10">
            
// // // //             <div className="container mx-auto px-6">
// // // //               <div className="max-w-7xl mx-auto">
// // // //               {/* Section Header - Offset Layout */}
// // // //               <div className="grid md:grid-cols-2 gap-6 mb-10">
// // // //                 <div>
// // // //                   <div className="flex items-center gap-3 mb-2">
// // // //                     <div className="h-1 w-10 bg-[#FF6B35]" />
// // // //                     <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Excellence Defined</span>
// // // //                   </div>
// // // //                   <h2 className="text-3xl md:text-4xl font-black text-[#1E3A5F] tracking-tight leading-tight">
// // // //                     Why Choose<br />{uni.shortName || uni.name}?
// // // //                   </h2>
// // // //                 </div>
// // // //                 <div className="flex items-end">
// // // //                   <p className="text-sm text-slate-600 font-medium leading-relaxed border-l-4 border-[#FF6B35] pl-4">
// // // //                     Discover what sets us apart in delivering world-class education and unparalleled opportunities.
// // // //                   </p>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Asymmetric Feature Grid */}
// // // //               <div className="grid md:grid-cols-3 gap-4">
// // // //                 {/* First Feature - Large Featured Card */}
// // // //                 {uni.keyFeatures[0] && (
// // // //                   <div className="md:col-span-2 md:row-span-2">
// // // //                     <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] p-8 h-full shadow-2xl border-l-8 border-[#FF6B35] group hover:scale-[1.02] transition-transform duration-300">
// // // //                       <div className="text-[#FF6B35] mb-5">
// // // //                         {getFeaturedIcon(uni.keyFeatures[0].icon)}
// // // //                       </div>
// // // //                       <h3 className="font-black text-white mb-3 text-xl uppercase tracking-wide leading-tight">
// // // //                         {uni.keyFeatures[0].label}
// // // //                       </h3>
// // // //                       {uni.keyFeatures[0].value && (
// // // //                         <p className="text-4xl font-black text-[#FF6B35] mb-3">{uni.keyFeatures[0].value}</p>
// // // //                       )}
// // // //                       <div className="w-16 h-1 bg-[#FF6B35] mt-4" />
// // // //                     </div>
// // // //                   </div>
// // // //                 )}
                
// // // //                 {/* Remaining Features - Compact Cards */}
// // // //                 {uni.keyFeatures.slice(1, 5).map((feature, idx) => (
// // // //                   <div key={idx} className="bg-white p-5 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-[#FF6B35] group">
// // // //                     <div className="text-[#FF6B35] mb-3 group-hover:scale-110 transition-transform">
// // // //                       {getCompactIcon(feature.icon)}
// // // //                     </div>
// // // //                     <h3 className="font-black text-[#1E3A5F] mb-2 text-sm uppercase tracking-wide">{feature.label}</h3>
// // // //                     {feature.value && <p className="text-xl font-black text-[#FF6B35]">{feature.value}</p>}
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </section>
// // // //         )}

// // // //         {/* PROGRAMS OFFERED - Zigzag Luxury Layout */}
// // // //         {uni.programs.length > 0 && (
// // // //           <section className="py-12 relative z-10">
            
// // // //             <div className="container mx-auto px-6">
// // // //               <div className="max-w-7xl mx-auto">
// // // //               {/* Section Header - Centered with Accent */}
// // // //               <div className="text-center mb-12">
// // // //                 <div className="flex items-center justify-center gap-3 mb-3">
// // // //                   <div className="h-1 w-12 bg-[#FF6B35]" />
// // // //                   <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Academic Excellence</span>
// // // //                   <div className="h-1 w-12 bg-[#FF6B35]" />
// // // //                 </div>
// // // //                 <h2 className="text-3xl md:text-4xl font-black text-[#1E3A5F] tracking-tight mb-3">
// // // //                   Programs Offered
// // // //                 </h2>
// // // //                 <p className="text-base text-slate-600 max-w-2xl mx-auto">
// // // //                   Cutting-edge curricula designed to shape future leaders
// // // //                 </p>
// // // //               </div>

// // // //               {/* Programs Grid - Staggered Cards */}
// // // //               <div className="space-y-5">
// // // //                 {uni.programs.map((program, idx) => (
// // // //                   <div 
// // // //                     key={idx} 
// // // //                     className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
// // // //                   >
// // // //                     <div className={`w-full ${idx % 2 === 0 ? 'md:w-4/5' : 'md:w-4/5'} bg-white shadow-xl hover:shadow-2xl transition-all border-l-8 ${idx % 2 === 0 ? 'border-[#FF6B35]' : 'border-[#1E3A5F]'} group`}>
// // // //                       <div className="grid md:grid-cols-3 gap-4 p-6">
// // // //                         {/* Left - Program Info */}
// // // //                         <div className="md:col-span-2 space-y-3">
// // // //                           <div className="flex items-start justify-between gap-3">
// // // //                             <div className={`${idx % 2 === 0 ? 'bg-[#FF6B35]' : 'bg-[#1E3A5F]'} p-3`}>
// // // //                               <GraduationCap className="w-7 h-7 text-white" />
// // // //                             </div>
// // // //                             <div className={`${idx % 2 === 0 ? 'bg-[#1E3A5F]' : 'bg-[#FF6B35]'} text-white px-4 py-1 text-xs font-black uppercase tracking-widest`}>
// // // //                               {program.category}
// // // //                             </div>
// // // //                           </div>
// // // //                           <h3 className="text-2xl font-black text-[#1E3A5F] leading-tight">{program.name}</h3>
// // // //                           <p className="text-base text-slate-600 font-bold">{program.degree} • {program.duration}</p>
// // // //                         </div>

// // // //                         {/* Right - Quick Details */}
// // // //                         <div className="space-y-2">
// // // //                           <div className="bg-slate-50 p-3 border-l-4 border-[#FF6B35]">
// // // //                             <div className="flex items-center gap-2 mb-1">
// // // //                               <Calendar className="w-4 h-4 text-[#FF6B35]" />
// // // //                               <span className="text-xs font-black text-slate-600 uppercase tracking-wider">Intakes</span>
// // // //                             </div>
// // // //                             <span className="font-bold text-[#1E3A5F] text-sm">{program.intakes.join(', ')}</span>
// // // //                           </div>
// // // //                           {program.seats && (
// // // //                             <div className="bg-slate-50 p-3 border-l-4 border-[#FF6B35]">
// // // //                               <div className="flex items-center gap-2 mb-1">
// // // //                                 <Users className="w-4 h-4 text-[#FF6B35]" />
// // // //                                 <span className="text-xs font-black text-slate-600 uppercase tracking-wider">Seats</span>
// // // //                               </div>
// // // //                               <span className="font-bold text-[#1E3A5F] text-sm">{program.seats} Available</span>
// // // //                             </div>
// // // //                           )}
// // // //                           <button className="w-full bg-[#1E3A5F] hover:bg-[#FF6B35] text-white py-2.5 font-black uppercase text-xs tracking-wider transition-all">
// // // //                             LEARN MORE
// // // //                           </button>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </section>
// // // //       )}
      
// // // //       </div>
// // // //       {/* END OF FIRST UNIFIED WHITE BACKGROUND CONTAINER */}

// // // //       {/* FEES & COSTS - Dramatic Backdrop Layout */}
// // // //       {uni.fees && (
// // // //         <section className="relative py-16 overflow-hidden">
// // // //           {/* Background Image with Overlay */}
// // // //           <div className="absolute inset-0">
// // // //             <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/90 to-[#1E3A5F]/95 z-10" />
// // // //             {uni.galleryImages[0] && (
// // // //               <Image
// // // //                 src={uni.galleryImages[0]}
// // // //                 alt="Campus background"
// // // //                 fill
// // // //                 className="object-cover"
// // // //               />
// // // //             )}
// // // //           </div>

// // // //           <div className="container mx-auto px-6 relative z-20">
// // // //             <div className="max-w-6xl mx-auto">
// // // //               {/* Header */}
// // // //               <div className="text-center mb-10">
// // // //                 <div className="flex items-center justify-center gap-3 mb-3">
// // // //                   <div className="h-1 w-12 bg-[#FF6B35]" />
// // // //                   <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Investment in Your Future</span>
// // // //                   <div className="h-1 w-12 bg-[#FF6B35]" />
// // // //                 </div>
// // // //                 <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
// // // //                   Fees & Costs
// // // //                 </h2>
// // // //                 <p className="text-base text-slate-300 max-w-2xl mx-auto">
// // // //                   Transparent pricing for exceptional education
// // // //                 </p>
// // // //               </div>

// // // //               {/* Fee Grid - Split Layout */}
// // // //               <div className="grid md:grid-cols-2 gap-5">
// // // //                 {/* Left - Main Fees */}
// // // //                 <div className="bg-white/10 backdrop-blur-md p-7 border-l-8 border-[#FF6B35] shadow-2xl">
// // // //                   <h3 className="text-xl font-black text-white mb-5 uppercase tracking-wider">Annual Breakdown</h3>
// // // //                   <div className="space-y-4">
// // // //                     <div className="pb-3 border-b-2 border-white/20">
// // // //                       <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-1">Tuition Fee</div>
// // // //                       <div className="text-3xl font-black text-white">{uni.fees.currency} {uni.fees.tuitionPerYear.toLocaleString()}</div>
// // // //                     </div>
// // // //                     <div className="pb-3 border-b-2 border-white/20">
// // // //                       <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-1">Hostel Fee</div>
// // // //                       <div className="text-2xl font-black text-white">{uni.fees.currency} {uni.fees.hostelPerYear.toLocaleString()}</div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Right - Total Costs */}
// // // //                 <div className="space-y-4">
// // // //                   <div className="bg-[#FF6B35] p-7 shadow-2xl">
// // // //                     <div className="text-xs font-bold text-white/80 uppercase tracking-widest mb-2">First Year Investment</div>
// // // //                     <div className="text-4xl font-black text-white mb-2">{uni.fees.currency} {uni.fees.totalFirstYear.toLocaleString()}</div>
// // // //                     <div className="w-16 h-1 bg-white/50" />
// // // //                   </div>
// // // //                   <div className="bg-white/10 backdrop-blur-md p-7 border-l-8 border-white shadow-2xl">
// // // //                     <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">Complete Program</div>
// // // //                     <div className="text-4xl font-black text-white mb-2">{uni.fees.currency} {uni.fees.totalCourse.toLocaleString()}</div>
// // // //                     <div className="w-16 h-1 bg-[#FF6B35]" />
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Payment Note */}
// // // //               <div className="mt-8 text-center">
// // // //                 <p className="text-sm text-slate-300 font-medium">
// // // //                   Flexible payment plans available • Scholarships offered to eligible students
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
          
// // // //           {/* Seamless transition overlay to next section - REMOVED for clean separation */}
// // // //         </section>
// // // //       )}

// // // //       {/* SECOND UNIFIED WHITE BACKGROUND CONTAINER - Eligibility & Facilities flow together */}
// // // //       <div className="bg-white relative overflow-hidden">

// // // //         {/* CONTINUOUS BACKDROP EFFECTS - Span across entire white container */}
// // // //         <div className="absolute -right-32 top-1/3 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-[#FF6B35]/30 via-[#FF6B35]/15 via-[#1E3A5F]/10 to-transparent blur-2xl" />
// // // //         <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-[#1E3A5F]/25 via-[#1E3A5F]/12 to-transparent rounded-full blur-2xl" />
// // // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FF6B35]/20 via-[#FF6B35]/8 to-transparent rounded-full blur-xl" />

// // // //         {/* ELIGIBILITY CRITERIA - Split Luxury Layout */}
// // // //         {uni.eligibility && (
// // // //           <section className="py-12 relative z-10">
            
// // // //             <div className="container mx-auto px-6">
// // // //               <div className="max-w-7xl mx-auto">
              
// // // //               <div className="grid md:grid-cols-5 gap-8 items-start">
// // // //                 {/* Left - Visual Element */}
// // // //                 <div className="md:col-span-2">
// // // //                   <div className="sticky top-24">
// // // //                     <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] p-10 border-l-8 border-[#FF6B35] shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col justify-between">
// // // //                       {/* Bold Inner Accent */}
// // // //                       <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B35]/20 rounded-full blur-2xl" />
                      
// // // //                       <div className="relative z-10">
// // // //                         <div className="flex items-center gap-3 mb-4">
// // // //                           <div className="h-1 w-10 bg-[#FF6B35]" />
// // // //                           <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Requirements</span>
// // // //                         </div>
// // // //                         <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
// // // //                           Eligibility<br />Criteria
// // // //                         </h2>
// // // //                         <p className="text-slate-300 text-base leading-relaxed mb-8">
// // // //                           Meet these requirements to begin your journey towards academic excellence and secure your place in our prestigious programs.
// // // //                         </p>
// // // //                         <div className="w-24 h-1 bg-[#FF6B35] mb-10" />
                        
// // // //                         {/* Additional Visual Stats */}
// // // //                         <div className="space-y-6 pt-6 border-t border-white/10">
// // // //                           <div className="flex items-center gap-4">
// // // //                             <div className="bg-[#FF6B35]/20 p-4">
// // // //                               <CheckCircle2 className="w-8 h-8 text-[#FF6B35]" />
// // // //                             </div>
// // // //                             <div>
// // // //                               <p className="text-white font-black text-2xl">Fast Processing</p>
// // // //                               <p className="text-slate-300 text-sm">Quick admission decisions</p>
// // // //                             </div>
// // // //                           </div>
                          
// // // //                           <div className="flex items-center gap-4">
// // // //                             <div className="bg-white/10 p-4">
// // // //                               <Users className="w-8 h-8 text-white" />
// // // //                             </div>
// // // //                             <div>
// // // //                               <p className="text-white font-black text-2xl">Expert Support</p>
// // // //                               <p className="text-slate-300 text-sm">Guidance throughout process</p>
// // // //                             </div>
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Right - Criteria Cards */}
// // // //                 <div className="md:col-span-3 space-y-4">
// // // //                   {uni.eligibility.exam && (
// // // //                     <div className="bg-white p-6 shadow-lg border-l-8 border-[#FF6B35] hover:shadow-xl transition-all group">
// // // //                       <div className="flex items-start gap-4">
// // // //                         <div className="bg-[#FF6B35]/10 p-3 group-hover:scale-110 transition-transform">
// // // //                           <FileText className="w-6 h-6 text-[#FF6B35]" />
// // // //                         </div>
// // // //                         <div className="flex-1">
// // // //                           <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">Required Exam</span>
// // // //                           <p className="text-xl font-black text-[#1E3A5F]">{uni.eligibility.exam}</p>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   )}
                  
// // // //                   {uni.eligibility.minScore && (
// // // //                     <div className="bg-white p-6 shadow-lg border-l-8 border-[#1E3A5F] hover:shadow-xl transition-all group">
// // // //                       <div className="flex items-start gap-4">
// // // //                         <div className="bg-[#1E3A5F]/10 p-3 group-hover:scale-110 transition-transform">
// // // //                           <BarChart3 className="w-6 h-6 text-[#1E3A5F]" />
// // // //                         </div>
// // // //                         <div className="flex-1">
// // // //                           <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">Minimum Score</span>
// // // //                           <p className="text-xl font-black text-[#1E3A5F]">{uni.eligibility.minScore}</p>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   )}

// // // //                   <div className="bg-white p-6 shadow-lg border-l-8 border-[#FF6B35] hover:shadow-xl transition-all group">
// // // //                     <div className="flex items-start gap-4">
// // // //                       <div className="bg-[#FF6B35]/10 p-3 group-hover:scale-110 transition-transform">
// // // //                         <Percent className="w-6 h-6 text-[#FF6B35]" />
// // // //                       </div>
// // // //                       <div className="flex-1">
// // // //                         <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">Minimum Percentage</span>
// // // //                         <p className="text-xl font-black text-[#1E3A5F]">{uni.eligibility.minPercentage}</p>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>

// // // //                   {uni.eligibility.ageLimit && (
// // // //                     <div className="bg-white p-6 shadow-lg border-l-8 border-[#1E3A5F] hover:shadow-xl transition-all group">
// // // //                       <div className="flex items-start gap-4">
// // // //                         <div className="bg-[#1E3A5F]/10 p-3 group-hover:scale-110 transition-transform">
// // // //                           <Calendar className="w-6 h-6 text-[#1E3A5F]" />
// // // //                         </div>
// // // //                         <div className="flex-1">
// // // //                           <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">Age Limit</span>
// // // //                           <p className="text-xl font-black text-[#1E3A5F]">{uni.eligibility.ageLimit}</p>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   )}

// // // //                   {/* Required Documents */}
// // // //                   {uni.eligibility.requiredDocs.length > 0 && (
// // // //                     <div className="bg-gradient-to-br from-slate-50 to-white p-6 border-l-8 border-[#FF6B35] shadow-lg">
// // // //                       <h3 className="text-xs font-black text-slate-600 uppercase tracking-widest mb-4">Required Documents</h3>
// // // //                       <div className="grid grid-cols-2 gap-3">
// // // //                         {uni.eligibility.requiredDocs.map((doc, idx) => (
// // // //                           <div key={idx} className="bg-white px-3 py-2 border-l-4 border-[#1E3A5F] shadow-sm hover:shadow-md transition-all">
// // // //                             <span className="text-xs font-bold text-[#1E3A5F]">{doc}</span>
// // // //                           </div>
// // // //                         ))}
// // // //                       </div>
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               </div>

// // // //             </div>
// // // //           </div>
// // // //         </section>
// // // //       )}

// // // //         {/* FACILITIES - Masonry Grid Layout */}
// // // //         {uni.facilities.length > 0 && (
// // // //           <section className="py-12 relative z-10">
            
// // // //             <div className="container mx-auto px-6">
// // // //               <div className="max-w-7xl mx-auto">
// // // //               <div className="text-center mb-10">
// // // //                 <div className="flex items-center justify-center gap-3 mb-3">
// // // //                   <div className="h-1 w-12 bg-[#FF6B35]" />
// // // //                   <span className="text-xs font-black text-slate-600 uppercase tracking-widest">World-Class Infrastructure</span>
// // // //                   <div className="h-1 w-12 bg-[#FF6B35]" />
// // // //                 </div>
// // // //                 <h2 className="text-3xl md:text-4xl font-black text-[#1E3A5F] tracking-tight">
// // // //                   Campus Facilities
// // // //                 </h2>
// // // //               </div>

// // // //               {/* Facility Grid - Varying Heights for Visual Interest */}
// // // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
// // // //                 {uni.facilities.map((facility, idx) => (
// // // //                   <div 
// // // //                     key={idx} 
// // // //                     className={`bg-gradient-to-br from-slate-50 to-white p-4 shadow-lg hover:shadow-xl transition-all border-l-4 ${
// // // //                       idx % 3 === 0 ? 'border-[#FF6B35] md:row-span-2' : 'border-[#1E3A5F]'
// // // //                     } group hover:border-[#FF6B35] ${idx % 3 === 0 ? 'flex flex-col justify-center' : ''}`}
// // // //                   >
// // // //                     <div className={`text-[#FF6B35] group-hover:scale-110 transition-transform ${idx % 3 === 0 ? 'mb-4' : 'mb-3'}`}>
// // // //                       {getFacilityIcon(facility, idx % 3 === 0)}
// // // //                     </div>
// // // //                     <span className={`text-[#1E3A5F] font-black uppercase tracking-wide ${idx % 3 === 0 ? 'text-base' : 'text-xs'}`}>
// // // //                       {facility}
// // // //                     </span>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </section>
// // // //       )}
      
// // // //       </div>
// // // //       {/* END OF SECOND UNIFIED WHITE BACKGROUND CONTAINER */}

// // // //       {/* GALLERY - Full-Width Cinematic Layout */}
// // // //       {uni.galleryImages.length > 0 && (
// // // //         <section className="py-0 bg-black">
// // // //           <div className="relative">
// // // //             {/* Section Header Overlay */}
// // // //             <div className="absolute top-0 left-0 right-0 z-20 pt-16 pb-10">
// // // //               <div className="container mx-auto px-6">
// // // //                 <div className="max-w-4xl">
// // // //                   <div className="flex items-center gap-3 mb-3">
// // // //                     <div className="h-1 w-12 bg-[#FF6B35]" />
// // // //                     <span className="text-xs font-black text-white uppercase tracking-widest">Experience Campus Life</span>
// // // //                   </div>
// // // //                   <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
// // // //                     Campus Gallery
// // // //                   </h2>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Gallery Grid - Cinematic */}
// // // //             <div className="grid md:grid-cols-2 gap-1">
// // // //               {uni.galleryImages.slice(0, 4).map((img, idx) => (
// // // //                 <div 
// // // //                   key={idx} 
// // // //                   className={`relative group overflow-hidden ${
// // // //                     idx === 0 ? 'md:col-span-2 h-[400px]' : 'h-[300px]'
// // // //                   }`}
// // // //                 >
// // // //                   <Image
// // // //                     src={img}
// // // //                     alt={`${uni.name} campus ${idx + 1}`}
// // // //                     fill
// // // //                     className="object-cover transform group-hover:scale-105 transition-transform duration-700"
// // // //                   />
// // // //                   {/* Gradient Overlay */}
// // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
// // // //                   {/* Overlay Content */}
// // // //                   <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
// // // //                     <div className="w-12 h-1 bg-[#FF6B35] mb-2" />
// // // //                     <p className="text-white font-black text-lg uppercase tracking-wide">
// // // //                       {idx === 0 ? 'Main Campus' : idx === 1 ? 'Academic Block' : idx === 2 ? 'Research Labs' : 'Student Life'}
// // // //                     </p>
// // // //                     <p className="text-slate-300 text-sm mt-1">Explore our state-of-the-art facilities</p>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>
// // // //       )}
// // // // <LeadFormModal
// // // //      isOpen={isModalOpen}
// // // //      onClose={() => setIsModalOpen(false)}
// // // //      universitySlug={universitySlug}
// // // //      universityName={uni.name}
// // // //    />
// // // //     </main>
// // // //     <Footer/>
// // // //     </>
// // // //   );
// // // // }

// // // // // ============================================
// // // // // SUB-COMPONENTS - Luxury Sharp Design
// // // // // ============================================

// // // // function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
// // // //   return (
// // // //     <div className="bg-white/10 backdrop-blur-sm p-4 border-l-4 border-[#FF6B35] hover:bg-white/20 transition-all group">
// // // //       <div className="text-[#FF6B35] mb-2 group-hover:scale-110 transition-transform flex justify-center md:justify-start">
// // // //         {icon}
// // // //       </div>
// // // //       <div className="text-2xl md:text-3xl font-black mb-1 text-center md:text-left">{value}</div>
// // // //       <div className="text-xs font-bold text-slate-300 uppercase tracking-widest text-center md:text-left">{label}</div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // Icon Helper Functions for New Layouts
// // // // function getFeaturedIcon(iconName: string) {
// // // //   const icons: { [key: string]: React.ReactNode } = {
// // // //     'trophy': <Trophy className="w-12 h-12" />,
// // // //     'briefcase': <Briefcase className="w-12 h-12" />,
// // // //     'flask': <FlaskConical className="w-12 h-12" />,
// // // //     'globe': <Globe className="w-12 h-12" />,
// // // //     'award': <Award className="w-12 h-12" />,
// // // //     'target': <Target className="w-12 h-12" />,
// // // //     'school': <School className="w-12 h-12" />,
// // // //     'lightbulb': <Lightbulb className="w-12 h-12" />,
// // // //   };
// // // //   return icons[iconName.toLowerCase()] || <Award className="w-12 h-12" />;
// // // // }

// // // // function getCompactIcon(iconName: string) {
// // // //   const icons: { [key: string]: React.ReactNode } = {
// // // //     'trophy': <Trophy className="w-7 h-7" />,
// // // //     'briefcase': <Briefcase className="w-7 h-7" />,
// // // //     'flask': <FlaskConical className="w-7 h-7" />,
// // // //     'globe': <Globe className="w-7 h-7" />,
// // // //     'award': <Award className="w-7 h-7" />,
// // // //     'target': <Target className="w-7 h-7" />,
// // // //     'school': <School className="w-7 h-7" />,
// // // //     'lightbulb': <Lightbulb className="w-7 h-7" />,
// // // //   };
// // // //   return icons[iconName.toLowerCase()] || <Award className="w-7 h-7" />;
// // // // }

// // // // function getFacilityIcon(facilityName: string, isLarge: boolean = false) {
// // // //   const size = isLarge ? "w-8 h-8" : "w-5 h-5";
// // // //   const lower = facilityName.toLowerCase();
  
// // // //   if (lower.includes('library')) return <BookOpen className={size} />;
// // // //   if (lower.includes('lab')) return <FlaskConical className={size} />;
// // // //   if (lower.includes('hospital')) return <Hospital className={size} />;
// // // //   if (lower.includes('hostel') || lower.includes('accommodation')) return <Home className={size} />;
// // // //   if (lower.includes('sports') || lower.includes('gym')) return <Trophy className={size} />;
// // // //   if (lower.includes('wifi') || lower.includes('internet')) return <Globe className={size} />;
// // // //   if (lower.includes('security')) return <Shield className={size} />;
// // // //   if (lower.includes('research')) return <Lightbulb className={size} />;
// // // //   if (lower.includes('computer')) return <Cpu className={size} />;
// // // //   return <Building className={size} />;
// // // // }

// // // // function FeatureCard({ icon, label, value }: { icon: string; label: string; value?: string }) {
// // // //   const getIcon = (iconName: string) => {
// // // //     const icons: { [key: string]: React.ReactNode } = {
// // // //       'trophy': <Trophy className="w-10 h-10" />,
// // // //       'briefcase': <Briefcase className="w-10 h-10" />,
// // // //       'flask': <FlaskConical className="w-10 h-10" />,
// // // //       'globe': <Globe className="w-10 h-10" />,
// // // //       'award': <Award className="w-10 h-10" />,
// // // //       'target': <Target className="w-10 h-10" />,
// // // //       'school': <School className="w-10 h-10" />,
// // // //       'lightbulb': <Lightbulb className="w-10 h-10" />,
// // // //     };
// // // //     return icons[iconName.toLowerCase()] || <Award className="w-10 h-10" />;
// // // //   };

// // // //   return (
// // // //     <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-[#FF6B35] group">
// // // //       <div className="text-[#FF6B35] mb-6 group-hover:scale-110 transition-transform">
// // // //         {getIcon(icon)}
// // // //       </div>
// // // //       <h3 className="font-black text-[#1E3A5F] mb-3 text-lg uppercase tracking-wide">{label}</h3>
// // // //       {value && <p className="text-3xl font-black text-[#FF6B35]">{value}</p>}
// // // //     </div>
// // // //   );
// // // // }

// // // // function ProgramCard({ name, duration, degree, category, intakes, seats }: any) {
// // // //   return (
// // // //     <div className="bg-white shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-[#FF6B35] group">
// // // //       <div className="p-8">
// // // //         <div className="flex items-start justify-between mb-6">
// // // //           <div className="bg-[#FF6B35] p-4">
// // // //             <GraduationCap className="w-8 h-8 text-white" />
// // // //           </div>
// // // //           <div className="bg-[#1E3A5F] text-white px-4 py-2 text-xs font-black uppercase tracking-wider">
// // // //             {category}
// // // //           </div>
// // // //         </div>
// // // //         <h3 className="text-2xl font-black text-[#1E3A5F] mb-3 leading-tight">{name}</h3>
// // // //         <p className="text-slate-600 font-bold mb-6">{degree} • {duration}</p>
// // // //         <div className="space-y-3 text-sm text-slate-600 mb-6">
// // // //           <div className="flex items-center gap-3 bg-slate-50 p-3 border-l-4 border-[#FF6B35]">
// // // //             <Calendar className="w-5 h-5 text-[#FF6B35]" />
// // // //             <span className="font-semibold">Intakes: {intakes.join(', ')}</span>
// // // //           </div>
// // // //           {seats && (
// // // //             <div className="flex items-center gap-3 bg-slate-50 p-3 border-l-4 border-[#FF6B35]">
// // // //               <Users className="w-5 h-5 text-[#FF6B35]" />
// // // //               <span className="font-semibold">{seats} Seats</span>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //       <button className="w-full bg-[#1E3A5F] hover:bg-[#FF6B35] text-white py-4 font-black uppercase tracking-wider transition-all group-hover:shadow-lg">
// // // //         VIEW DETAILS
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // }

// // // // function FeeRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
// // // //   return (
// // // //     <div className={`flex justify-between items-center py-4 border-b-2 ${
// // // //       highlight 
// // // //         ? 'border-[#FF6B35] bg-[#FF6B35]/10' 
// // // //         : 'border-white/10'
// // // //     } ${highlight ? 'px-4' : ''}`}>
// // // //       <span className={`font-bold uppercase tracking-wider text-sm ${
// // // //         highlight ? 'text-[#FF6B35]' : 'text-slate-300'
// // // //       }`}>
// // // //         {label}
// // // //       </span>
// // // //       <span className={`font-black text-xl ${
// // // //         highlight ? 'text-[#FF6B35]' : 'text-white'
// // // //       }`}>
// // // //         {value}
// // // //       </span>
// // // //     </div>
// // // //   );
// // // // }

// // // // function EligibilityRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
// // // //   return (
// // // //     <div className="bg-white p-6 border-l-4 border-[#FF6B35] shadow">
// // // //       <div className="flex items-center gap-4 mb-3">
// // // //         <div className="text-[#FF6B35]">{icon}</div>
// // // //         <span className="text-slate-600 text-xs font-black uppercase tracking-widest">{label}</span>
// // // //       </div>
// // // //       <p className="font-black text-[#1E3A5F] text-xl">{value}</p>
// // // //     </div>
// // // //   );
// // // // }

// // // // function FacilityCard({ name }: { name: string }) {
// // // //   const getIcon = (facilityName: string) => {
// // // //     const lower = facilityName.toLowerCase();
// // // //     if (lower.includes('library')) return <BookOpen className="w-7 h-7" />;
// // // //     if (lower.includes('lab')) return <FlaskConical className="w-7 h-7" />;
// // // //     if (lower.includes('hospital')) return <Hospital className="w-7 h-7" />;
// // // //     if (lower.includes('hostel') || lower.includes('accommodation')) return <Home className="w-7 h-7" />;
// // // //     if (lower.includes('sports') || lower.includes('gym')) return <Trophy className="w-7 h-7" />;
// // // //     if (lower.includes('wifi') || lower.includes('internet')) return <Globe className="w-7 h-7" />;
// // // //     if (lower.includes('security')) return <Shield className="w-7 h-7" />;
// // // //     if (lower.includes('research')) return <Lightbulb className="w-7 h-7" />;
// // // //     if (lower.includes('computer')) return <Cpu className="w-7 h-7" />;
// // // //     return <Building className="w-7 h-7" />;
// // // //   };

// // // //   return (
// // // //     <div className="bg-white p-5 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-[#FF6B35] group">
// // // //       <div className="flex items-center gap-4">
// // // //         <div className="text-[#FF6B35] group-hover:scale-110 transition-transform">
// // // //           {getIcon(name)}
// // // //         </div>
// // // //         <span className="text-[#1E3A5F] font-black text-sm uppercase tracking-wide">{name}</span>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // 'use client';

// // // import React, { useState } from 'react';
// // // import Link from 'next/link';
// // // import Navbar from '../components/Navbar';
// // // import Footer from '../components/Footer';
// // // import LeadFormModal from '../com/LeadForm';
// // // import type { University } from '../data/universityData';

// // // // ─── Types ────────────────────────────────────────────────────────────────────

// // // interface UniversityPageProps {
// // //   university: University;
// // // }

// // // type TabId = 'overview' | 'programs' | 'admissions' | 'fees';

// // // // ─── Helpers ──────────────────────────────────────────────────────────────────

// // // function Label({ children }: { children: React.ReactNode }) {
// // //   return (
// // //     <div style={{ fontSize: '10px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1.8px', textTransform: 'uppercase', marginBottom: '3px' }}>
// // //       {children}
// // //     </div>
// // //   );
// // // }

// // // function SectionHeading({ title, sub }: { title: string; sub: string }) {
// // //   return (
// // //     <>
// // //       <h2 className="section-h2">{title}</h2>
// // //       <p className="section-sub">{sub}</p>
// // //     </>
// // //   );
// // // }

// // // function DocTag({ children }: { children: React.ReactNode }) {
// // //   return <div className="doc-tag"><span style={{ color: '#FF6B35' }}>↗</span> {children}</div>;
// // // }

// // // // ─── Main Component ───────────────────────────────────────────────────────────

// // // export default function UniversityPage({ university: uni }: UniversityPageProps) {
// // //   const [activeTab, setActiveTab] = useState<TabId>('overview');
// // //   const [isModalOpen, setIsModalOpen] = useState(false);

// // //   // Pre-compute data for clean JSX below
// // //   const quickStats = [
// // //     { icon: '🏛️', label: 'Established',    value: uni.establishedYear  },
// // //     { icon: '📚', label: 'Medium',          value: uni.mediumOfInstruction },
// // //   ].filter(s => s.value);

// // //   const keyFacts = [
// // //     { label: 'Programs Offered',  value: uni.programs?.length ? `${uni.programs.length} Programs` : null },
// // //     { label: 'NMC Approved',      value: uni.accreditations ? 'Yes' : null },
// // //     { label: 'Tuition / Year',    value: uni.fees?.tuitionPerYear ? `${uni.fees.currency ?? ''} ${uni.fees.tuitionPerYear.toLocaleString()}` : null },
// // //     { label: 'Course Duration',   value: uni.programs?.[0]?.duration ?? null },
// // //     { label: 'Pass Rate',         value: uni.stats?.passRate ?? null },
// // //     { label: 'Ranking',           value: uni.stats?.ranking ?? null },
// // //     { label: 'Location',          value: uni.location?.city ?? uni.location?.address ?? null },
// // //     { label: 'Country',           value: uni.country ?? null },
// // //   ].filter(r => r.value);

// // //   const eligibilityCriteria = [
// // //     { icon: '📋', label: 'NEET',      text: uni.eligibility?.minScore },
// // //     { icon: '🎓', label: 'Academics', text: uni.eligibility?.minPercentage },
// // //     { icon: '🎂', label: 'Age Limit', text: uni.eligibility?.ageLimit },
// // //   ].filter(e => e.text);

// // //   const feeRows = [
// // //     { label: 'Tuition Fee / Year', value: uni.fees?.tuitionPerYear,  note: 'Academic fees per annum' },
// // //     { label: 'Hostel Fee / Year',  value: uni.fees?.hostelPerYear,   note: 'Including meals' },
// // //     { label: 'One-Time Charges',   value: uni.fees?.totalFirstYear,      note: 'Admission, registration etc.' },
// // //   ].filter(r => r.value);

// // //   const totalPerYear = feeRows.reduce((sum, r) => {
// // //     if (r.label !== 'One-Time Charges') return sum + ((r.value as number) || 0);
// // //     return sum;
// // //   }, 0);

// // //   const tabs: { id: TabId; label: string }[] = [
// // //     { id: 'overview',   label: 'Overview'   },
// // //     { id: 'programs',   label: 'Programs'   },
// // //     { id: 'admissions', label: 'Admissions' },
// // //     { id: 'fees',       label: 'Fees'       },
// // //   ];

// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <div style={{ minHeight: '100vh', background: '#fff', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>

// // //         <LeadFormModal
// // //           isOpen={isModalOpen}
// // //           onClose={() => setIsModalOpen(false)}
// // //           universityName={uni.name}
// // //           countryCode={uni.countrySlug}
// // //         />

// // //         {/* ── Global Styles ── */}
// // //         <style>{`
// // //           @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
// // //           *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// // //           .hide-scrollbar::-webkit-scrollbar { display: none; }
// // //           .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

// // //           /* ── Tabs ── */
// // //           .page-tabs { background: #fff; border-bottom: 1px solid #E2E8F0; }
// // //           .page-tabs-inner { max-width: 1200px; margin: 0 auto; padding: 0 32px; display: flex; align-items: center; }
// // //           .page-tab {
// // //             padding: 16px 28px; background: transparent; border: none;
// // //             border-bottom: 2px solid transparent;
// // //             font-size: 14px; font-weight: 600; font-family: inherit;
// // //             color: #64748B; cursor: pointer; transition: all 0.2s ease;
// // //           }
// // //           .page-tab.active { color: #1E3A5F; border-bottom-color: #FF6B35; }
// // //           .page-tab:hover:not(.active) { color: #1E3A5F; }

// // //           /* ── Stats bar ── */
// // //           .stat-bar { display: flex; border-top: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0; background: #E2E8F0; gap: 1px; }
// // //           .stat-bar-item {
// // //             flex: 1 1 0; display: flex; align-items: center; gap: 12px;
// // //             padding: 20px 22px; background: #fff; transition: background 0.2s; min-width: 0;
// // //           }
// // //           .stat-bar-item:hover { background: #FAFBFC; }

// // //           /* ── Section headings ── */
// // //           .section-h2 { font-size: clamp(22px, 3.5vw, 32px); font-weight: 800; color: #1E3A5F; letter-spacing: -0.8px; margin-bottom: 8px; }
// // //           .section-sub { font-size: 15px; color: #64748B; font-weight: 500; margin-bottom: 36px; }

// // //           /* ── Program card ── */
// // //           .prog-card {
// // //             border: 1px solid #E2E8F0; background: #fff;
// // //             display: flex; flex-direction: column; overflow: hidden;
// // //             transition: all 0.25s ease; position: relative;
// // //           }
// // //           .prog-card::before {
// // //             content: ''; position: absolute; left: 0; top: 0; bottom: 0;
// // //             width: 3px; background: transparent; transition: background 0.2s;
// // //           }
// // //           .prog-card:hover::before { background: #FF6B35; }
// // //           .prog-card:hover { box-shadow: 0 8px 28px rgba(30,58,95,0.08); border-color: rgba(255,107,53,0.25); }

// // //           /* ── Highlight item ── */
// // //           .highlight-item {
// // //             display: flex; align-items: flex-start; gap: 20px;
// // //             padding: 24px; border: 1px solid #E2E8F0; background: #fff;
// // //             transition: all 0.25s ease; position: relative; margin-bottom: 2px;
// // //           }
// // //           .highlight-item::before {
// // //             content: ''; position: absolute; left: 0; top: 0; bottom: 0;
// // //             width: 3px; background: transparent; transition: background 0.2s;
// // //           }
// // //           .highlight-item:hover::before { background: #FF6B35; }
// // //           .highlight-item:hover { box-shadow: 0 8px 28px rgba(30,58,95,0.08); border-color: rgba(255,107,53,0.2); }

// // //           /* ── Eligibility row ── */
// // //           .elig-item { display: flex; align-items: flex-start; gap: 16px; padding: 20px 0; border-bottom: 1px solid #F1F5F9; }
// // //           .elig-item:last-child { border-bottom: none; }

// // //           /* ── Doc tag ── */
// // //           .doc-tag {
// // //             padding: 8px 14px; border: 1px solid #E2E8F0; background: #F8FAFC;
// // //             font-size: 12px; font-weight: 600; color: #1E3A5F;
// // //             display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s ease;
// // //           }
// // //           .doc-tag:hover { border-color: #FF6B35; color: #FF6B35; background: #fff; }

// // //           /* ── Fee row ── */
// // //           .fee-row { display: flex; align-items: center; padding: 18px 24px; border-bottom: 1px solid #F1F5F9; gap: 12px; transition: background 0.15s; }
// // //           .fee-row:last-child { border-bottom: none; }
// // //           .fee-row:hover { background: #FAFBFC; }

// // //           /* ── Recognition badge ── */
// // //           .recog-badge {
// // //             padding: 16px 20px; border: 1px solid #E2E8F0; background: #fff;
// // //             display: flex; align-items: center; gap: 12px; transition: all 0.2s ease;
// // //           }
// // //           .recog-badge:hover { border-color: #FF6B35; box-shadow: 0 4px 16px rgba(255,107,53,0.08); }

// // //           /* ── Buttons ── */
// // //           .btn-orange {
// // //             display: inline-flex; align-items: center; gap: 8px;
// // //             padding: 15px 36px; background: #FF6B35; color: #fff;
// // //             border: 2px solid #FF6B35; font-size: 14px; font-weight: 700;
// // //             letter-spacing: 0.3px; font-family: inherit; cursor: pointer;
// // //             text-decoration: none; transition: all 0.2s ease;
// // //           }
// // //           .btn-orange:hover { background: #E85D29; border-color: #E85D29; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,53,0.3); }
// // //           .btn-white {
// // //             display: inline-flex; align-items: center; gap: 8px;
// // //             padding: 15px 36px; background: #fff; color: #1E3A5F;
// // //             border: 2px solid #fff; font-size: 14px; font-weight: 700;
// // //             letter-spacing: 0.3px; font-family: inherit; cursor: pointer;
// // //             text-decoration: none; transition: all 0.2s ease;
// // //           }
// // //           .btn-white:hover { background: transparent; color: #fff; }

// // //           /* ── CTA banner ── */
// // //           .cta-banner {
// // //             background: #1E3A5F; padding: 52px 40px;
// // //             display: flex; align-items: center; justify-content: space-between;
// // //             gap: 32px; flex-wrap: wrap; position: relative; overflow: hidden;
// // //           }
// // //           .cta-banner::before {
// // //             content: ''; position: absolute; right: -60px; top: -60px;
// // //             width: 200px; height: 200px; border: 1px solid rgba(255,255,255,0.07); transform: rotate(15deg);
// // //           }

// // //           /* ── Responsive ── */
// // //           @media (max-width: 1024px) {
// // //             .prog-grid { grid-template-columns: repeat(2, 1fr) !important; }
// // //             .fee-grid  { grid-template-columns: 1fr !important; }
// // //           }
// // //           @media (max-width: 768px) {
// // //             .hero-inner { padding: 120px 20px 48px !important; }
// // //             .page-tabs-inner { padding: 0 16px; overflow-x: auto; }
// // //             .content-pad { padding-left: 20px !important; padding-right: 20px !important; }
// // //             .two-col { grid-template-columns: 1fr !important; }
// // //             .stat-bar { display: grid !important; grid-template-columns: 1fr 1fr; }
// // //             .stat-bar-item:last-child { grid-column: 1 / -1; }
// // //             .prog-grid { grid-template-columns: 1fr !important; }
// // //             .elig-grid { grid-template-columns: 1fr !important; }
// // //             .cta-banner { padding: 36px 20px !important; flex-direction: column !important; align-items: flex-start !important; }
// // //             .btn-orange, .btn-white { width: 100% !important; justify-content: center !important; }
// // //           }
// // //           @media (max-width: 420px) {
// // //             .stat-bar { grid-template-columns: 1fr !important; }
// // //             .stat-bar-item:last-child { grid-column: auto; }
// // //           }
// // //         `}</style>

// // //         {/* ════════════════════════════════════════
// // //             HERO
// // //         ════════════════════════════════════════ */}
// // //         <section style={{ position: 'relative', minHeight: '520px', height: '65vh', overflow: 'hidden' }}>
// // //           <div style={{
// // //             position: 'absolute', inset: 0,
// // //             backgroundImage: `url(${uni.heroImage})`,
// // //             backgroundSize: 'cover', backgroundPosition: 'center',
// // //           }} />
// // //           <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(12,24,48,0.88) 55%, rgba(12,24,48,0.45))' }} />

// // //           <div className="hero-inner" style={{
// // //             position: 'relative', zIndex: 2, height: '100%',
// // //             display: 'flex', flexDirection: 'column', justifyContent: 'center',
// // //             maxWidth: '1200px', margin: '0 auto', padding: '140px 32px 60px',
// // //           }}>

// // //             {/* Breadcrumb */}
// // //             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
// // //               <Link href="/destinations" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: '500' }}>
// // //                 Destinations
// // //               </Link>
// // //               <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
// // //               {uni.countrySlug && (
// // //                 <>
// // //                   <Link href={`/destinations/${uni.countrySlug}`} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: '500' }}>
// // //                     {uni.country}
// // //                   </Link>
// // //                   <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
// // //                 </>
// // //               )}
// // //               <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: '500' }}>{uni.name}</span>
// // //             </div>

// // //             {/* Badges */}
// // //             <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
// // //               {uni.type && (
// // //                 <div style={{ padding: '5px 14px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', fontSize: '11px', fontWeight: '700', color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
// // //                   {uni.type}
// // //                 </div>
// // //               )}
// // //               {uni.accreditations && (
// // //                 <div style={{ padding: '5px 14px', background: '#FF6B35', fontSize: '11px', fontWeight: '700', color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
// // //                   NMC Approved
// // //                 </div>
// // //               )}
// // //               {uni.country && (
// // //                 <div style={{ padding: '5px 14px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', fontSize: '11px', fontWeight: '700', color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
// // //                   {uni.country}
// // //                 </div>
// // //               )}
// // //             </div>

// // //             <h1 style={{
// // //               fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: '800', color: '#fff',
// // //               letterSpacing: '-1.5px', lineHeight: '1.05', marginBottom: '12px', maxWidth: '680px',
// // //             }}>
// // //               {uni.name}
// // //             </h1>

// // //             {(uni.location?.city || uni.location?.address) && (
// // //               <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', fontWeight: '600', marginBottom: '12px' }}>
// // //                 📍 {uni.location.city ?? uni.location.address}
// // //               </div>
// // //             )}

// // //             {uni.tagline && (
// // //               <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', fontWeight: '500', lineHeight: '1.65', maxWidth: '480px', marginBottom: '36px' }}>
// // //                 {uni.tagline}
// // //               </p>
// // //             )}

// // //             <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
// // //               <button onClick={() => setIsModalOpen(true)} className="btn-orange">Apply Now →</button>
// // //               <button
// // //                 onClick={() => setActiveTab('programs')}
// // //                 style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.35)', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s ease' }}
// // //                 onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
// // //                 onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
// // //               >
// // //                 View Programs
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ════════════════════════════════════════
// // //             QUICK STATS BAR
// // //         ════════════════════════════════════════ */}
// // //         {quickStats.length > 0 && (
// // //           <div className="stat-bar">
// // //             {quickStats.map((stat, i) => (
// // //               <div key={i} className="stat-bar-item">
// // //                 <span style={{ fontSize: '20px', flexShrink: 0 }}>{stat.icon}</span>
// // //                 <div style={{ minWidth: 0 }}>
// // //                   <Label>{stat.label}</Label>
// // //                   <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
// // //                     {String(stat.value)}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}

// // //         {/* ════════════════════════════════════════
// // //             STICKY TABS
// // //         ════════════════════════════════════════ */}
// // //         <div className="page-tabs" style={{ position: 'sticky', top: '80px', zIndex: 40 }}>
// // //           <div className="page-tabs-inner" role="tablist">
// // //             {tabs.map(tab => (
// // //               <button
// // //                 key={tab.id}
// // //                 role="tab"
// // //                 aria-selected={activeTab === tab.id}
// // //                 className={`page-tab ${activeTab === tab.id ? 'active' : ''}`}
// // //                 onClick={() => setActiveTab(tab.id)}
// // //               >
// // //                 {tab.label}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* ════════════════════════════════════════
// // //             OVERVIEW TAB
// // //         ════════════════════════════════════════ */}
// // //         {activeTab === 'overview' && (
// // //           <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

// // //             {/* ── About + Key Facts ── */}
// // //             <section style={{ padding: '64px 32px' }} className="content-pad">
// // //               <SectionHeading title={`About ${uni.name}`} sub="Everything you need to know before you apply" />

// // //               <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px', alignItems: 'start' }} className="two-col">

// // //                 {/* Left — description + highlights */}
// // //                 <div>
// // //                   {uni.overview && (
// // //                     <p style={{ fontSize: '16px', color: '#334155', fontWeight: '500', lineHeight: '1.85', marginBottom: '32px' }}>
// // //                       {uni.overview}
// // //                     </p>
// // //                   )}
// // //                   {uni.highlights && uni.highlights.length > 0 && (
// // //                     <div>
// // //                       {uni.highlights.map((point, i) => (
// // //                         <div key={i} className="highlight-item">
// // //                           <div style={{ minWidth: '36px', height: '36px', background: '#FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', color: '#fff', flexShrink: 0 }}>
// // //                             {String(i + 1).padStart(2, '0')}
// // //                           </div>
// // //                           <p style={{ fontSize: '15px', fontWeight: '600', color: '#1E3A5F', lineHeight: '1.55', margin: 0 }}>{point}</p>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 {/* Right — Key Facts panel */}
// // //                 {keyFacts.length > 0 && (
// // //                   <div style={{ border: '1px solid #E2E8F0', background: '#fff', position: 'sticky', top: '140px' }}>
// // //                     <div style={{ padding: '20px 24px', background: '#1E3A5F' }}>
// // //                       <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>At a Glance</div>
// // //                       <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff', letterSpacing: '-0.3px' }}>Key Facts</div>
// // //                     </div>
// // //                     {keyFacts.map((row, i) => (
// // //                       <div key={i} style={{ padding: '14px 24px', borderBottom: i < keyFacts.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
// // //                         <span style={{ fontSize: '12px', fontWeight: '600', color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
// // //                         <span style={{ fontSize: '14px', fontWeight: '800', color: '#1E3A5F', textAlign: 'right', wordBreak: 'break-word' }}>{row.value}</span>
// // //                       </div>
// // //                     ))}
// // //                     <div style={{ padding: '20px 24px', borderTop: '1px solid #F1F5F9' }}>
// // //                       <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ width: '100%', justifyContent: 'center' }}>
// // //                         Apply Now →
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </section>

// // //             {/* ── Recognitions ── */}
// // //             {uni.recognition && uni.recognition.length > 0 && (
// // //               <section style={{ padding: '0 32px 64px' }} className="content-pad">
// // //                 <SectionHeading title="Recognition & Accreditations" sub="Globally accepted credentials for your medical career" />
// // //                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
// // //                   {uni.recognition.map((r, i) => (
// // //                     <div key={i} className="recog-badge">
// // //                       <div style={{ width: '36px', height: '36px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
// // //                         ✅
// // //                       </div>
// // //                       <div>
// // //                         <div style={{ fontSize: '13px', fontWeight: '800', color: '#1E3A5F' }}>{r}</div>
// // //                         <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '2px' }}>Recognized</div>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </section>
// // //             )}

// // //             {/* ── Mid-page CTA ── */}
// // //             <section style={{ padding: '0 32px 64px' }} className="content-pad">
// // //               <div className="cta-banner">
// // //                 <div style={{ position: 'relative', zIndex: 1 }}>
// // //                   <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.5)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px' }}>
// // //                     Your Seat Awaits
// // //                   </div>
// // //                   <h3 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px', marginBottom: '8px' }}>
// // //                     Start your journey at {uni.name}
// // //                   </h3>
// // //                   <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', fontWeight: '500', maxWidth: '400px' }}>
// // //                     Expert counselors guide you from inquiry to enrollment — at zero cost.
// // //                   </p>
// // //                 </div>
// // //                 <button onClick={() => setIsModalOpen(true)} className="btn-white" style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
// // //                   Get Free Counseling →
// // //                 </button>
// // //               </div>
// // //             </section>

// // //           </div>
// // //         )}

// // //         {/* ════════════════════════════════════════
// // //             PROGRAMS TAB
// // //         ════════════════════════════════════════ */}
// // //         {activeTab === 'programs' && (
// // //           <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px 80px' }} className="content-pad">
// // //             <SectionHeading
// // //               title={`Programs at ${uni.name}`}
// // //               sub="Choose the right program for your medical career"
// // //             />

// // //             {uni.programs && uni.programs.length > 0 ? (
// // //               <div className="prog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
// // //                 {uni.programs.map((prog, i) => {
// // //                   const progFees = prog.fees
// // //                     ? `${prog. ?? uni.fees?.currency ?? ''} ${Number(prog.fees).toLocaleString()}`
// // //                     : uni.fees?.tuitionPerYear
// // //                     ? `${uni.fees.currency ?? ''} ${uni.fees.tuitionPerYear.toLocaleString()}`
// // //                     : null;

// // //                   const progDataRows = [
// // //                     { label: 'Duration',    value: prog.duration },
// // //                     { label: 'Seats',       value: prog.seats ? `${prog.seats} seats` : null },
// // //                     { label: 'Eligibility', value: prog.category },
// // //                     { label: 'Fees / Year', value: progFees },
// // //                   ].filter(r => r.value);

// // //                   return (
// // //                     <div key={i} className="prog-card">
// // //                       {/* Header */}
// // //                       <div style={{ padding: '20px 24px', borderBottom: '1px solid #F1F5F9' }}>
// // //                         <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
// // //                           {i % 3 === 0 ? 'High Demand' : i % 3 === 1 ? 'Popular' : 'Growing'}
// // //                         </div>
// // //                         <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#1E3A5F', lineHeight: '1.3', marginBottom: '4px' }}>
// // //                           {prog.name}
// // //                         </h3>
// // //                         {prog.degree && (
// // //                           <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600' }}>{prog.degree}</div>
// // //                         )}
// // //                       </div>

// // //                       {/* Data grid */}
// // //                       <div style={{ background: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '1px', flex: 1 }}>
// // //                         {progDataRows.map((row, j) => (
// // //                           <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', background: '#fff', gap: '12px' }}>
// // //                             <span style={{ fontSize: '11px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', flexShrink: 0 }}>{row.label}</span>
// // //                             <span style={{ fontSize: '13px', fontWeight: '800', color: '#1E3A5F', textAlign: 'right' }}>{row.value}</span>
// // //                           </div>
// // //                         ))}
// // //                       </div>

// // //                       {/* CTA */}
// // //                       <div
// // //                         onClick={() => setIsModalOpen(true)}
// // //                         style={{ padding: '15px', background: '#F8FAFC', fontSize: '11px', fontWeight: '700', color: '#1E3A5F', letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s ease', borderTop: '1px solid #E2E8F0' }}
// // //                         onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#FF6B35'; (e.currentTarget as HTMLDivElement).style.color = '#fff'; }}
// // //                         onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#F8FAFC'; (e.currentTarget as HTMLDivElement).style.color = '#1E3A5F'; }}
// // //                       >
// // //                         Enquire About This Program →
// // //                       </div>
// // //                     </div>
// // //                   );
// // //                 })}
// // //               </div>
// // //             ) : (
// // //               <div style={{ padding: '80px 40px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
// // //                 <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1E3A5F', marginBottom: '12px' }}>Program Details Coming Soon</h3>
// // //                 <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '28px' }}>Contact us to get the full program list for {uni.name}.</p>
// // //                 <button onClick={() => setIsModalOpen(true)} className="btn-orange">Contact Us →</button>
// // //               </div>
// // //             )}
// // //           </div>
// // //         )}

// // //         {/* ════════════════════════════════════════
// // //             ADMISSIONS TAB
// // //         ════════════════════════════════════════ */}
// // //         {activeTab === 'admissions' && (
// // //           <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px 80px' }} className="content-pad">
// // //             <SectionHeading title="Admissions" sub="Eligibility, documents, and the step-by-step process" />

// // //             {/* ── Eligibility + Documents ── */}
// // //             {(eligibilityCriteria.length > 0 || (uni.eligibility?.requiredDocs && uni.eligibility.requiredDocs.length > 0)) && (
// // //               <div
// // //                 style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '1px', background: '#E2E8F0', border: '1px solid #E2E8F0', marginBottom: '48px' }}
// // //                 className="elig-grid"
// // //               >
// // //                 {eligibilityCriteria.length > 0 && (
// // //                   <div style={{ background: '#fff', padding: '28px 28px 8px' }}>
// // //                     <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
// // //                       Eligibility Criteria
// // //                     </div>
// // //                     {eligibilityCriteria.map((item, i) => (
// // //                       <div key={i} className="elig-item">
// // //                         <div style={{ width: '44px', height: '44px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
// // //                           {item.icon}
// // //                         </div>
// // //                         <div>
// // //                           <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '5px' }}>{item.label}</div>
// // //                           <div style={{ fontSize: '15px', fontWeight: '700', color: '#1E3A5F', lineHeight: '1.4' }}>{item.text}</div>
// // //                         </div>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 )}

// // //                 {uni.eligibility?.requiredDocs && uni.eligibility.requiredDocs.length > 0 && (
// // //                   <div style={{ background: '#fff', padding: '28px' }}>
// // //                     <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
// // //                       Required Documents
// // //                     </div>
// // //                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
// // //                       {uni.eligibility.requiredDocs.map((doc, i) => (
// // //                         <DocTag key={i}>{doc}</DocTag>
// // //                       ))}
// // //                     </div>
// // //                     <div style={{ padding: '20px', border: '1px solid #E2E8F0', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
// // //                       <div>
// // //                         <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', marginBottom: '4px' }}>Need help with documents?</div>
// // //                         <div style={{ fontSize: '12px', color: '#64748B' }}>Our team handles everything for you.</div>
// // //                       </div>
// // //                       <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ padding: '11px 22px', fontSize: '12px' }}>
// // //                         Get Help →
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             )}

// // //             {/* ── Admission Process Steps ── */}
// // //             {uni.admissionSteps && uni.admissionSteps.length > 0 && (
// // //               <>
// // //                 <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1E3A5F', letterSpacing: '-0.4px', marginBottom: '4px' }}>
// // //                   Admission Process
// // //                 </h3>
// // //                 <p style={{ fontSize: '14px', color: '#64748B', fontWeight: '500', marginBottom: '28px' }}>
// // //                   Follow these steps to secure your seat
// // //                 </p>
// // //                 <div style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden' }}>
// // //                   {uni.admissionSteps.map((step, i) => (
// // //                     <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px 28px', borderBottom: i < uni.admissionSteps!.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
// // //                       <div style={{ minWidth: '40px', height: '40px', background: i === 0 ? '#FF6B35' : '#F8FAFC', border: i === 0 ? 'none' : '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '800', color: i === 0 ? '#fff' : '#1E3A5F', flexShrink: 0 }}>
// // //                         {String(i + 1).padStart(2, '0')}
// // //                       </div>
// // //                       <p style={{ fontSize: '15px', fontWeight: '600', color: '#1E3A5F', lineHeight: '1.6', margin: 0, paddingTop: '8px' }}>{step}</p>
// // //                     </div>
// // //                   ))}
// // //                   <div style={{ padding: '24px 28px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
// // //                     <div>
// // //                       <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', marginBottom: '4px' }}>Ready to get started?</div>
// // //                       <div style={{ fontSize: '12px', color: '#64748B' }}>Our counselors will guide you through every step.</div>
// // //                     </div>
// // //                     <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ marginLeft: 'auto' }}>
// // //                       Start Application →
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </>
// // //             )}
// // //           </div>
// // //         )}

// // //         {/* ════════════════════════════════════════
// // //             FEES TAB
// // //         ════════════════════════════════════════ */}
// // //         {activeTab === 'fees' && (
// // //           <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px 80px' }} className="content-pad">
// // //             <SectionHeading title="Fee Structure" sub="Complete cost breakdown for your planning" />

// // //             <div className="fee-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '32px', alignItems: 'start' }}>

// // //               {/* Left — Breakdown table */}
// // //               <div>
// // //                 <div style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden' }}>
// // //                   <div style={{ padding: '20px 24px', background: '#1E3A5F' }}>
// // //                     <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>
// // //                       Annual Breakdown
// // //                     </div>
// // //                     <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff' }}>
// // //                       {uni.fees?.currency ?? 'USD'} — Estimated Per Year
// // //                     </div>
// // //                   </div>

// // //                   {feeRows.length > 0 ? (
// // //                     feeRows.map((row, i) => (
// // //                       <div key={i} className="fee-row">
// // //                         <div style={{ flex: 1 }}>
// // //                           <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F' }}>{row.label}</div>
// // //                           <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '600', marginTop: '2px' }}>{row.note}</div>
// // //                         </div>
// // //                         <div style={{ fontSize: '16px', fontWeight: '800', color: '#1E3A5F', flexShrink: 0 }}>
// // //                           {uni.fees?.currency ?? ''} {Number(row.value).toLocaleString()}
// // //                         </div>
// // //                       </div>
// // //                     ))
// // //                   ) : uni.fees?.tuitionPerYear ? (
// // //                     <div className="fee-row">
// // //                       <div style={{ flex: 1 }}>
// // //                         <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F' }}>Tuition Fee / Year</div>
// // //                         <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '600', marginTop: '2px' }}>Academic fees per annum</div>
// // //                       </div>
// // //                       <div style={{ fontSize: '16px', fontWeight: '800', color: '#1E3A5F', flexShrink: 0 }}>
// // //                         {uni.fees.currency} {uni.fees.tuitionPerYear.toLocaleString()}
// // //                       </div>
// // //                     </div>
// // //                   ) : null}

// // //                   {/* Total */}
// // //                   {totalPerYear > 0 && (
// // //                     <div style={{ padding: '20px 24px', background: '#F8FAFC', borderTop: '2px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
// // //                       <div>
// // //                         <div style={{ fontSize: '12px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Est. Total / Year</div>
// // //                         <div style={{ fontSize: '11px', color: '#64748B' }}>Excluding one-time charges</div>
// // //                       </div>
// // //                       <div style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: '800', color: '#FF6B35', letterSpacing: '-0.5px' }}>
// // //                         {uni.fees?.currency ?? ''} {totalPerYear.toLocaleString()}
// // //                       </div>
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 {/* Disclaimer */}
// // //                 <div style={{ marginTop: '16px', padding: '16px 20px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
// // //                   <span style={{ fontSize: '18px', flexShrink: 0 }}>ℹ️</span>
// // //                   <p style={{ fontSize: '12px', color: '#64748B', fontWeight: '500', lineHeight: '1.6', margin: 0 }}>
// // //                     All fees are approximate and subject to change by the university. Exchange rate fluctuations may affect the final amount. Contact our counselors for the most up-to-date fee structure.
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               {/* Right — Value summary */}
// // //               <div style={{ border: '1px solid #E2E8F0', background: '#fff', position: 'sticky', top: '140px' }}>
// // //                 <div style={{ padding: '20px 24px', background: '#FF6B35' }}>
// // //                   <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>Why It's Worth It</div>
// // //                   <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff' }}>Cost vs Value</div>
// // //                 </div>

// // //                 {[
// // //                   { label: 'Globally Recognised Degree', icon: '🎓' },
// // //                   { label: 'NMC / WHO Approved',          icon: '✅' },
// // //                   { label: 'No Donation Required',         icon: '🚫' },
// // //                   { label: 'English Medium Instruction',   icon: '📚' },
// // //                   { label: 'High FMGE Pass Rate',          icon: '📊' },
// // //                   { label: 'Safe & Affordable City',       icon: '🏙️' },
// // //                 ].map((item, i, arr) => (
// // //                   <div key={i} style={{ padding: '14px 20px', borderBottom: i < arr.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
// // //                     <span style={{ fontSize: '18px' }}>{item.icon}</span>
// // //                     <span style={{ fontSize: '13px', fontWeight: '700', color: '#1E3A5F' }}>{item.label}</span>
// // //                   </div>
// // //                 ))}

// // //                 <div style={{ padding: '20px 24px', borderTop: '1px solid #F1F5F9' }}>
// // //                   <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ width: '100%', justifyContent: 'center' }}>
// // //                     Get Full Fee Breakdown →
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* ════════════════════════════════════════
// // //             FINAL CTA BANNER
// // //         ════════════════════════════════════════ */}
// // //         <section style={{ position: 'relative', overflow: 'hidden' }}>
// // //           <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${uni.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
// // //           <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,24,48,0.91)' }} />

// // //           <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '100px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px', flexWrap: 'wrap' }}>
// // //             <div>
// // //               <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
// // //                 Take the Next Step
// // //               </div>
// // //               <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: '800', color: '#fff', letterSpacing: '-2px', lineHeight: '1.0', marginBottom: '16px' }}>
// // //                 Your Medical Career<br />
// // //                 <span style={{ color: '#FF6B35' }}>Starts at {uni.name}</span>
// // //               </h2>
// // //               <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', fontWeight: '500', maxWidth: '440px' }}>
// // //                 Expert counselors guide you from first inquiry to enrollment — at zero cost.
// // //               </p>
// // //             </div>
// // //             <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '220px' }}>
// // //               <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ justifyContent: 'center' }}>
// // //                 Apply Now →
// // //               </button>
// // //               <Link href="/destinations" className="btn-white" style={{ justifyContent: 'center', color: '#1E3A5F' }}>
// // //                 Explore Destinations
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </section>

// // //       </div>
// // //       <Footer />
// // //     </>
// // //   );
// // // }
// // 'use client';

// // import React, { useState } from 'react';
// // import Link from 'next/link';
// // import Navbar from '../components/Navbar';
// // import Footer from '../components/Footer';
// // import LeadFormModal from '../components/LeadForm';
// // import type { University } from '../data/universityData';

// // // ─── Types ────────────────────────────────────────────────────────────────────

// // interface UniversityPageProps {
// //   university: University;
// // }

// // type TabId = 'overview' | 'programs' | 'admissions' | 'fees';

// // // ─── Atoms ───────────────────────────────────────────────────────────────────

// // function FieldLabel({ children }: { children: React.ReactNode }) {
// //   return (
// //     <div style={{
// //       fontSize: '10px', fontWeight: '700', color: '#94A3B8',
// //       letterSpacing: '1.8px', textTransform: 'uppercase', marginBottom: '3px',
// //     }}>
// //       {children}
// //     </div>
// //   );
// // }

// // function SectionHead({ title, sub }: { title: string; sub: string }) {
// //   return (
// //     <>
// //       <h2 className="section-h2">{title}</h2>
// //       <p className="section-sub">{sub}</p>
// //     </>
// //   );
// // }

// // function DocTag({ children }: { children: React.ReactNode }) {
// //   return (
// //     <div className="doc-tag">
// //       <span style={{ color: '#FF6B35' }}>↗</span> {children}
// //     </div>
// //   );
// // }

// // function CheckBadge({ children }: { children: React.ReactNode }) {
// //   return (
// //     <div style={{
// //       display: 'inline-flex', alignItems: 'center', gap: '8px',
// //       padding: '8px 16px', border: '1px solid #E2E8F0', background: '#F8FAFC',
// //       fontSize: '12px', fontWeight: '700', color: '#1E3A5F',
// //     }}>
// //       <span style={{ color: '#FF6B35', fontSize: '13px' }}>✓</span>
// //       {children}
// //     </div>
// //   );
// // }

// // // ─── Component ────────────────────────────────────────────────────────────────

// // export default function UniversityPage({ university: uni }: UniversityPageProps) {
// //   const [activeTab, setActiveTab] = useState<TabId>('overview');
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   // ── Defensive shorthands — never crash on missing data ──────────────────────
// //   const accreditations   = uni.accreditations   ?? [];
// //   const programs         = uni.programs         ?? [];
// //   const whyChoose        = uni.whyChoose        ?? [];
// //   const highlights       = uni.highlights       ?? [];
// //   const keyFeatures      = uni.keyFeatures      ?? [];
// //   const facilities       = uni.facilities       ?? [];
// //   const trainingPartners = uni.trainingPartners ?? [];
// //   const eligibleFor      = uni.eligibleFor      ?? [];
// //   const admissionSteps   = uni.admissionSteps   ?? [];
// //   const galleryImages    = uni.galleryImages    ?? [];
// //   const infrastructure   = uni.infrastructure   ?? {};
// //   const stats            = uni.stats            ?? {} as University['stats'];
// //   const ranking          = uni.ranking          ?? {};
// //   const studentLife      = uni.studentLife      ?? {} as University['studentLife'];
// //   const safetyRating     = uni.safetyRating     ?? {} as University['safetyRating'];
// //   const location         = uni.location         ?? {} as University['location'];
// //   const fees             = uni.fees             ?? {} as University['fees'];
// //   const eligibility      = uni.eligibility      ?? {} as University['eligibility'];
// //   const requiredDocs     = eligibility.requiredDocs ?? [];
// //   const accommodation    = uni.accommodation    ?? {} as University['accommodation'];
// //   const sportsAvailable  = studentLife.sportsAvailable ?? [];

// //   const tabs: { id: TabId; label: string }[] = [
// //     { id: 'overview',   label: 'Overview'   },
// //     { id: 'programs',   label: 'Programs'   },
// //     { id: 'admissions', label: 'Admissions' },
// //     { id: 'fees',       label: 'Fees'       },
// //   ];

// //   // Stat bar — filter out any missing values
// //   const statBarItems = [
// //     { icon: '🏛️', label: 'Established',     value: uni.establishedYear ? String(uni.establishedYear) : null },
// //     { icon: '🏫', label: 'Type',            value: uni.universityType ?? null },
// //     { icon: '📚', label: 'Medium',          value: uni.mediumOfInstruction ?? null },
// //     { icon: '👥', label: 'Total Students',  value: stats.totalStudents != null ? stats.totalStudents.toLocaleString() : null },
// //     { icon: '🇮🇳', label: 'Indian Students', value: stats.indianStudents != null ? stats.indianStudents.toLocaleString() : null },
// //     { icon: '👨‍🏫', label: 'Faculty Ratio', value: stats.facultyRatio ?? null },
// //     { icon: '🌍', label: 'Campus Size',     value: stats.campusSize ?? null },
// //     { icon: '📊', label: 'Pass Rate',       value: stats.passRate ?? null },
// //   ].filter(s => s.value !== null);

// //   // Sticky key facts panel
// //   const keyFacts = [
// //     { label: 'Global Rank',      value: ranking.globalRank  ? `#${ranking.globalRank}`  : null },
// //     { label: 'Country Rank',     value: ranking.countryRank ? `#${ranking.countryRank}` : null },
// //     { label: 'Category',         value: ranking.category ?? null },
// //     { label: 'Accreditations',   value: accreditations.length ? accreditations.join(', ') : null },
// //     { label: 'Total Students',   value: stats.totalStudents != null ? stats.totalStudents.toLocaleString() : null },
// //     { label: 'International',    value: stats.internationalStudents != null ? stats.internationalStudents.toLocaleString() : null },
// //     { label: 'Faculty',          value: (stats.facultyCount && stats.facultyRatio) ? `${stats.facultyCount} · ${stats.facultyRatio} ratio` : (stats.facultyRatio ?? null) },
// //     { label: 'Pass Rate',        value: stats.passRate ?? null },
// //     { label: 'Placement Rate',   value: stats.placementRate ?? null },
// //     { label: 'Medium',           value: uni.mediumOfInstruction ?? null },
// //   ].filter(r => r.value !== null);

// //   // Infrastructure grid items
// //   const infraItems = [
// //     { label: 'Libraries',        value: infrastructure.libraries },
// //     { label: 'Labs',             value: infrastructure.labs },
// //     { label: 'Hospitals',        value: infrastructure.hospitals },
// //     { label: 'Research Centres', value: infrastructure.researchCenters },
// //     { label: 'Hostels',          value: infrastructure.hostels },
// //     { label: 'Book Collection',  value: infrastructure.bookCollection },
// //   ].filter(r => r.value !== undefined && r.value !== null);

// //   return (
// //     <>
// //       <Navbar />
// //       <div style={{ minHeight: '100vh', background: '#fff', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>

// //         <LeadFormModal
// //           isOpen={isModalOpen}
// //           onClose={() => setIsModalOpen(false)}
// //           universityName={uni.name}
// //           countryCode={uni.countrySlug}
// //         />

// //         {/* ── Global styles ── */}
// //         <style>{`
// //           @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
// //           *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// //           .hide-scrollbar::-webkit-scrollbar { display: none; }
// //           .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

// //           /* ── Tabs ── */
// //           .page-tabs { background: #fff; border-bottom: 1px solid #E2E8F0; }
// //           .page-tabs-inner { max-width: 1200px; margin: 0 auto; padding: 0 32px; display: flex; align-items: center; }
// //           .page-tab {
// //             padding: 16px 28px; background: transparent; border: none;
// //             border-bottom: 2px solid transparent; font-size: 14px; font-weight: 600;
// //             font-family: inherit; color: #64748B; cursor: pointer; transition: all 0.2s ease;
// //           }
// //           .page-tab.active { color: #1E3A5F; border-bottom-color: #FF6B35; }
// //           .page-tab:hover:not(.active) { color: #1E3A5F; }

// //           /* ── Stat bar ── */
// //           .stat-bar { display: flex; border-top: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0; background: #E2E8F0; gap: 1px; overflow-x: auto; }
// //           .stat-bar-item { flex: 1 1 120px; display: flex; align-items: center; gap: 10px; padding: 18px 20px; background: #fff; transition: background 0.2s; min-width: 0; }
// //           .stat-bar-item:hover { background: #FAFBFC; }

// //           /* ── Section heading ── */
// //           .section-h2 { font-size: clamp(22px, 3.5vw, 32px); font-weight: 800; color: #1E3A5F; letter-spacing: -0.8px; margin-bottom: 8px; }
// //           .section-sub { font-size: 15px; color: #64748B; font-weight: 500; margin-bottom: 36px; }

// //           /* ── Why-choose item ── */
// //           .why-item {
// //             display: flex; align-items: flex-start; gap: 20px; padding: 24px;
// //             border: 1px solid #E2E8F0; background: #fff; margin-bottom: 2px;
// //             transition: all 0.25s ease; position: relative;
// //           }
// //           .why-item::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: transparent; transition: background 0.2s; }
// //           .why-item:hover::before { background: #FF6B35; }
// //           .why-item:hover { box-shadow: 0 8px 28px rgba(30,58,95,0.08); border-color: rgba(255,107,53,0.2); }

// //           /* ── Highlight card ── */
// //           .highlight-card { padding: 24px 20px; border: 1px solid #E2E8F0; background: #fff; text-align: center; transition: all 0.25s ease; }
// //           .highlight-card:hover { border-color: #FF6B35; box-shadow: 0 8px 24px rgba(255,107,53,0.08); transform: translateY(-3px); }

// //           /* ── Feature card ── */
// //           .feature-card { padding: 20px; border: 1px solid #E2E8F0; background: #fff; display: flex; align-items: flex-start; gap: 14px; transition: all 0.2s ease; }
// //           .feature-card:hover { border-color: rgba(255,107,53,0.3); box-shadow: 0 4px 16px rgba(30,58,95,0.06); }

// //           /* ── Program card ── */
// //           .prog-card {
// //             border: 1px solid #E2E8F0; background: #fff;
// //             display: flex; flex-direction: column; overflow: hidden;
// //             transition: all 0.25s ease; position: relative;
// //           }
// //           .prog-card::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: transparent; transition: background 0.2s; }
// //           .prog-card:hover::before { background: #FF6B35; }
// //           .prog-card:hover { box-shadow: 0 8px 28px rgba(30,58,95,0.08); border-color: rgba(255,107,53,0.25); }

// //           /* ── Eligibility row ── */
// //           .elig-item { display: flex; align-items: flex-start; gap: 16px; padding: 20px 0; border-bottom: 1px solid #F1F5F9; }
// //           .elig-item:last-child { border-bottom: none; }

// //           /* ── Step item ── */
// //           .step-item { display: flex; align-items: flex-start; gap: 20px; padding: 24px 28px; border-bottom: 1px solid #F1F5F9; }
// //           .step-item:last-child { border-bottom: none; }

// //           /* ── Doc tag ── */
// //           .doc-tag { padding: 8px 14px; border: 1px solid #E2E8F0; background: #F8FAFC; font-size: 12px; font-weight: 600; color: #1E3A5F; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s ease; }
// //           .doc-tag:hover { border-color: #FF6B35; color: #FF6B35; background: #fff; }

// //           /* ── Fee row ── */
// //           .fee-row { display: flex; align-items: center; padding: 18px 24px; border-bottom: 1px solid #F1F5F9; gap: 12px; transition: background 0.15s; }
// //           .fee-row:last-child { border-bottom: none; }
// //           .fee-row:hover { background: #FAFBFC; }

// //           /* ── Infra cell ── */
// //           .infra-cell { padding: 24px 20px; background: #fff; text-align: center; transition: all 0.2s ease; }
// //           .infra-cell:hover { background: #FAFBFC; }

// //           /* ── Buttons ── */
// //           .btn-orange {
// //             display: inline-flex; align-items: center; gap: 8px;
// //             padding: 15px 36px; background: #FF6B35; color: #fff;
// //             border: 2px solid #FF6B35; font-size: 14px; font-weight: 700;
// //             letter-spacing: 0.3px; font-family: inherit; cursor: pointer;
// //             text-decoration: none; transition: all 0.2s ease;
// //           }
// //           .btn-orange:hover { background: #E85D29; border-color: #E85D29; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,53,0.3); }
// //           .btn-white {
// //             display: inline-flex; align-items: center; gap: 8px;
// //             padding: 15px 36px; background: #fff; color: #1E3A5F;
// //             border: 2px solid #fff; font-size: 14px; font-weight: 700;
// //             letter-spacing: 0.3px; font-family: inherit; cursor: pointer;
// //             text-decoration: none; transition: all 0.2s ease;
// //           }
// //           .btn-white:hover { background: transparent; color: #fff; }

// //           /* ── CTA banner ── */
// //           .cta-banner {
// //             background: #1E3A5F; padding: 52px 40px;
// //             display: flex; align-items: center; justify-content: space-between;
// //             gap: 32px; flex-wrap: wrap; position: relative; overflow: hidden;
// //           }
// //           .cta-banner::before {
// //             content: ''; position: absolute; right: -60px; top: -60px;
// //             width: 200px; height: 200px; border: 1px solid rgba(255,255,255,0.07); transform: rotate(15deg);
// //           }

// //           /* ── Responsive ── */
// //           @media (max-width: 1024px) {
// //             .prog-grid    { grid-template-columns: repeat(2, 1fr) !important; }
// //             .feature-grid { grid-template-columns: repeat(2, 1fr) !important; }
// //             .fee-layout   { grid-template-columns: 1fr !important; }
// //           }
// //           @media (max-width: 768px) {
// //             .hero-inner      { padding: 120px 20px 48px !important; }
// //             .page-tabs-inner { padding: 0 16px; overflow-x: auto; }
// //             .content-pad     { padding-left: 20px !important; padding-right: 20px !important; }
// //             .two-col         { grid-template-columns: 1fr !important; }
// //             .elig-grid       { grid-template-columns: 1fr !important; }
// //             .prog-grid       { grid-template-columns: 1fr !important; }
// //             .highlight-grid  { grid-template-columns: repeat(2, 1fr) !important; }
// //             .feature-grid    { grid-template-columns: 1fr !important; }
// //             .infra-grid      { grid-template-columns: repeat(2, 1fr) !important; }
// //             .cta-banner      { padding: 36px 20px !important; flex-direction: column !important; align-items: flex-start !important; }
// //             .btn-orange, .btn-white { width: 100% !important; justify-content: center !important; }
// //           }
// //         `}</style>

// //         {/* ════════════════════════════════════════
// //             HERO
// //         ════════════════════════════════════════ */}
// //         <section style={{ position: 'relative', minHeight: '540px', height: '66vh', overflow: 'hidden' }}>
// //           <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${uni.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
// //           <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(12,24,48,0.92) 50%, rgba(12,24,48,0.4) 100%)' }} />

// //           <div className="hero-inner" style={{
// //             position: 'relative', zIndex: 2, height: '100%',
// //             display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
// //             maxWidth: '1200px', margin: '0 auto', padding: '140px 32px 56px',
// //           }}>

// //             {/* Breadcrumb */}
// //             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
// //               <Link href="/destinations" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: '500' }}>
// //                 Destinations
// //               </Link>
// //               <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
// //               <Link href={`/destinations/${uni.countrySlug}`} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: '500' }}>
// //                 {uni.country} {uni.flag}
// //               </Link>
// //               <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
// //               <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: '500' }}>
// //                 {uni.shortName ?? uni.name}
// //               </span>
// //             </div>

// //             {/* Badges */}
// //             <div style={{ display: 'flex', gap: '8px', marginBottom: '18px', flexWrap: 'wrap' }}>
// //               {uni.universityType && (
// //                 <div style={{ padding: '5px 14px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', fontSize: '11px', fontWeight: '700', color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
// //                   {uni.universityType}
// //                 </div>
// //               )}
// //               {accreditations.map((acc, i) => (
// //                 <div key={i} style={{ padding: '5px 14px', background: acc === 'NMC' ? '#FF6B35' : 'rgba(255,255,255,0.12)', border: acc === 'NMC' ? 'none' : '1px solid rgba(255,255,255,0.2)', fontSize: '11px', fontWeight: '700', color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
// //                   {acc}
// //                 </div>
// //               ))}
// //             </div>

// //             <h1 style={{ fontSize: 'clamp(28px, 5vw, 58px)', fontWeight: '800', color: '#fff', letterSpacing: '-1.5px', lineHeight: '1.05', marginBottom: '10px', maxWidth: '720px' }}>
// //               {uni.name}
// //             </h1>

// //             <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', fontWeight: '600', marginBottom: '10px' }}>
// //               📍 {uni.city}{uni.state ? `, ${uni.state}` : ''}, {uni.country} {uni.flag}
// //             </div>

// //             {uni.tagline && (
// //               <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', fontWeight: '500', lineHeight: '1.65', maxWidth: '520px', marginBottom: '32px' }}>
// //                 {uni.tagline}
// //               </p>
// //             )}

// //             <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
// //               <button onClick={() => setIsModalOpen(true)} className="btn-orange">Apply Now →</button>
// //               <button
// //                 onClick={() => setActiveTab('programs')}
// //                 style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.35)', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s ease' }}
// //                 onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)'; }}
// //                 onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
// //               >
// //                 View Programs
// //               </button>
// //               {uni.website && (
// //                 <a href={uni.website} target="_blank" rel="noopener noreferrer"
// //                   style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', background: 'transparent', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.2)', fontSize: '14px', fontWeight: '600', textDecoration: 'none', fontFamily: 'inherit' }}>
// //                   Official Website ↗
// //                 </a>
// //               )}
// //             </div>
// //           </div>
// //         </section>

// //         {/* ════════════════════════════════════════
// //             STAT BAR
// //         ════════════════════════════════════════ */}
// //         {statBarItems.length > 0 && (
// //           <div className="stat-bar">
// //             {statBarItems.map((s, i) => (
// //               <div key={i} className="stat-bar-item">
// //                 <span style={{ fontSize: '18px', flexShrink: 0 }}>{s.icon}</span>
// //                 <div style={{ minWidth: 0 }}>
// //                   <FieldLabel>{s.label}</FieldLabel>
// //                   <div style={{ fontSize: '13px', fontWeight: '700', color: '#1E3A5F', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
// //                     {s.value}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {/* ════════════════════════════════════════
// //             STICKY TABS
// //         ════════════════════════════════════════ */}
// //         <div className="page-tabs" style={{ position: 'sticky', top: '80px', zIndex: 40 }}>
// //           <div className="page-tabs-inner" role="tablist">
// //             {tabs.map(tab => (
// //               <button
// //                 key={tab.id}
// //                 role="tab"
// //                 aria-selected={activeTab === tab.id}
// //                 className={`page-tab ${activeTab === tab.id ? 'active' : ''}`}
// //                 onClick={() => setActiveTab(tab.id)}
// //               >
// //                 {tab.label}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* ════════════════════════════════════════
// //             OVERVIEW TAB
// //         ════════════════════════════════════════ */}
// //         {activeTab === 'overview' && (
// //           <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

// //             {/* ── Why Choose + Key Facts ── */}
// //             {(whyChoose.length > 0 || keyFacts.length > 0) && (
// //               <section style={{ padding: '64px 32px' }} className="content-pad">
// //                 <SectionHead title={`Why Choose ${uni.shortName ?? uni.name}`} sub="The key reasons students pick this university" />

// //                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px', alignItems: 'start' }} className="two-col">

// //                   {/* Left — whyChoose list */}
// //                   <div>
// //                     {whyChoose.map((point, i) => (
// //                       <div key={i} className="why-item">
// //                         <div style={{ minWidth: '36px', height: '36px', background: '#FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', color: '#fff', flexShrink: 0 }}>
// //                           {String(i + 1).padStart(2, '0')}
// //                         </div>
// //                         <p style={{ fontSize: '15px', fontWeight: '600', color: '#1E3A5F', lineHeight: '1.55', margin: 0 }}>
// //                           {point}
// //                         </p>
// //                       </div>
// //                     ))}
// //                   </div>

// //                   {/* Right — Key Facts panel */}
// //                   {keyFacts.length > 0 && (
// //                     <div style={{ border: '1px solid #E2E8F0', background: '#fff', position: 'sticky', top: '140px' }}>
// //                       <div style={{ padding: '20px 24px', background: '#1E3A5F' }}>
// //                         <FieldLabel>At a Glance</FieldLabel>
// //                         <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff', letterSpacing: '-0.3px', marginTop: '4px' }}>Key Facts</div>
// //                       </div>
// //                       {keyFacts.map((row, i) => (
// //                         <div key={i} style={{ padding: '14px 24px', borderBottom: i < keyFacts.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
// //                           <span style={{ fontSize: '12px', fontWeight: '600', color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
// //                           <span style={{ fontSize: '13px', fontWeight: '800', color: '#1E3A5F', textAlign: 'right', wordBreak: 'break-word' }}>{row.value}</span>
// //                         </div>
// //                       ))}
// //                       <div style={{ padding: '20px 24px', borderTop: '1px solid #F1F5F9' }}>
// //                         <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ width: '100%', justifyContent: 'center' }}>
// //                           Apply Now →
// //                         </button>
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>
// //               </section>
// //             )}

// //             {/* ── Highlights ── */}
// //             {highlights.length > 0 && (
// //               <section style={{ padding: '0 32px 64px' }} className="content-pad">
// //                 <SectionHead title="By the Numbers" sub="What the data says about this university" />
// //                 <div className="highlight-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(highlights.length, 4)}, 1fr)`, gap: '16px' }}>
// //                   {highlights.map((h, i) => (
// //                     <div key={i} className="highlight-card">
// //                       <div style={{ fontSize: '28px', marginBottom: '12px' }}>{h.icon}</div>
// //                       <div style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '800', color: '#FF6B35', letterSpacing: '-1px', marginBottom: '6px' }}>
// //                         {h.stat}
// //                       </div>
// //                       <div style={{ fontSize: '12px', fontWeight: '700', color: '#64748B', letterSpacing: '1px', textTransform: 'uppercase' }}>
// //                         {h.label}
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </section>
// //             )}

// //             {/* ── Key Features ── */}
// //             {keyFeatures.length > 0 && (
// //               <section style={{ padding: '0 32px 64px' }} className="content-pad">
// //                 <SectionHead title="Key Features" sub="What sets this university apart" />
// //                 <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
// //                   {keyFeatures.map((f, i) => (
// //                     <div key={i} className="feature-card">
// //                       <div style={{ width: '42px', height: '42px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
// //                         {f.icon}
// //                       </div>
// //                       <div>
// //                         <div style={{ fontSize: '13px', fontWeight: '800', color: '#1E3A5F', marginBottom: '2px' }}>{f.label}</div>
// //                         {f.value && (
// //                           <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35' }}>{f.value}</div>
// //                         )}
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </section>
// //             )}

// //             {/* ── Accreditations ── */}
// //             {accreditations.length > 0 && (
// //               <section style={{ padding: '0 32px 64px' }} className="content-pad">
// //                 <SectionHead title="Recognition & Accreditations" sub="Globally accepted credentials for your medical career" />
// //                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
// //                   {accreditations.map((acc, i) => (
// //                     <div key={i}
// //                       style={{ padding: '18px 24px', border: '1px solid #E2E8F0', background: '#fff', display: 'flex', alignItems: 'center', gap: '14px', transition: 'all 0.2s ease', cursor: 'default' }}
// //                       onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#FF6B35'; }}
// //                       onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#E2E8F0'; }}
// //                     >
// //                       <div style={{ width: '40px', height: '40px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>✅</div>
// //                       <div>
// //                         <div style={{ fontSize: '15px', fontWeight: '800', color: '#1E3A5F' }}>{acc}</div>
// //                         <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '2px' }}>Recognized</div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </section>
// //             )}

// //             {/* ── Infrastructure ── */}
// //             {infraItems.length > 0 && (
// //               <section style={{ padding: '0 32px 64px' }} className="content-pad">
// //                 <SectionHead title="Infrastructure" sub="Campus facilities by the numbers" />
// //                 <div className="infra-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#E2E8F0', border: '1px solid #E2E8F0' }}>
// //                   {infraItems.map((r, i) => (
// //                     <div key={i} className="infra-cell">
// //                       <div style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', color: '#1E3A5F', letterSpacing: '-1px', marginBottom: '6px' }}>
// //                         {r.value}
// //                       </div>
// //                       <div style={{ fontSize: '11px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
// //                         {r.label}
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </section>
// //             )}

// //             {/* ── Training Partners ── */}
// //             {trainingPartners.length > 0 && (
// //               <section style={{ padding: '0 32px 64px' }} className="content-pad">
// //                 <SectionHead title="Training & Clinical Partners" sub="Where students get real-world exposure" />
// //                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
// //                   {trainingPartners.map((tp, i) => (
// //                     <div key={i} style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden' }}>
// //                       <div style={{ padding: '16px 20px', background: '#1E3A5F', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
// //                         <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff' }}>{tp.type}</div>
// //                         <div style={{ padding: '4px 12px', background: '#FF6B35', fontSize: '11px', fontWeight: '700', color: '#fff', letterSpacing: '1px' }}>
// //                           {tp.count}+
// //                         </div>
// //                       </div>
// //                       <div style={{ padding: '16px 20px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
// //                         {(tp.notable ?? []).map((name, j) => (
// //                           <span key={j} style={{ padding: '5px 12px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '12px', fontWeight: '600', color: '#1E3A5F' }}>
// //                             {name}
// //                           </span>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </section>
// //             )}

// //             {/* ── Campus Life + Safety (side by side) ── */}
// //             <section style={{ padding: '0 32px 64px' }} className="content-pad">
// //               <SectionHead title="Campus Life" sub="Beyond the classroom" />
// //               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="two-col">

// //                 {/* Student Life */}
// //                 <div style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden' }}>
// //                   <div style={{ padding: '16px 24px', background: '#1E3A5F' }}>
// //                     <FieldLabel>Student Life</FieldLabel>
// //                     <div style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginTop: '4px' }}>Clubs, Sports & Culture</div>
// //                   </div>
// //                   {[
// //                     { label: 'Student Clubs',    value: studentLife.clubs != null ? `${studentLife.clubs} clubs` : null },
// //                     { label: 'Cultural Events',  value: studentLife.culturalEvents != null ? `${studentLife.culturalEvents} events / year` : null },
// //                     { label: 'Sports',           value: sportsAvailable.length > 0 ? sportsAvailable.join(', ') : null },
// //                     { label: 'Indian Association', value: studentLife.indianAssociation != null ? (studentLife.indianAssociation ? 'Yes — active chapter' : 'Not available') : null },
// //                   ].filter(r => r.value !== null).map((row, i, arr) => (
// //                     <div key={i} style={{ padding: '14px 24px', borderBottom: i < arr.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
// //                       <span style={{ fontSize: '12px', fontWeight: '600', color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
// //                       <span style={{ fontSize: '13px', fontWeight: '700', color: '#1E3A5F', textAlign: 'right' }}>{row.value}</span>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* Safety & Location */}
// //                 <div style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden' }}>
// //                   <div style={{ padding: '16px 24px', background: '#1E3A5F' }}>
// //                     <FieldLabel>Safety & Location</FieldLabel>
// //                     <div style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginTop: '4px' }}>Your Security Matters</div>
// //                   </div>
// //                   {[
// //                     { label: 'Safety Rating',  value: safetyRating.overall ?? null },
// //                     { label: 'Campus Security', value: safetyRating.campusSecurity != null ? (safetyRating.campusSecurity ? '24/7 Security Guards' : 'Standard security') : null },
// //                     { label: '24/7 Support',   value: safetyRating.support247 != null ? (safetyRating.support247 ? 'Available round the clock' : 'Office hours only') : null },
// //                     { label: 'Climate',        value: location.climate ?? null },
// //                     { label: 'Nearest Airport', value: (location.nearestAirport && location.distanceKm != null) ? `${location.nearestAirport} · ${location.distanceKm} km` : (location.nearestAirport ?? null) },
// //                   ].filter(r => r.value !== null).map((row, i, arr) => (
// //                     <div key={i} style={{ padding: '14px 24px', borderBottom: i < arr.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
// //                       <span style={{ fontSize: '12px', fontWeight: '600', color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
// //                       <span style={{ fontSize: '13px', fontWeight: '700', color: '#1E3A5F', textAlign: 'right' }}>{row.value}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </section>

// //             {/* ── Facilities ── */}
// //             {facilities.length > 0 && (
// //               <section style={{ padding: '0 32px 64px' }} className="content-pad">
// //                 <SectionHead title="Facilities" sub="What's available on campus" />
// //                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
// //                   {facilities.map((f, i) => (
// //                     <div key={i} className="doc-tag">
// //                       <span style={{ color: '#FF6B35' }}>✓</span> {f}
// //                     </div>
// //                   ))}
// //                 </div>
// //               </section>
// //             )}

// //             {/* ── Placements ── */}
// //             {uni.placements && (
// //               <section style={{ padding: '0 32px 64px' }} className="content-pad">
// //                 <SectionHead title="Placements" sub="Graduate outcomes and employer network" />
// //                 <div style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden' }}>
// //                   <div style={{ display: 'flex', background: '#E2E8F0', gap: '1px' }}>
// //                     {[
// //                       { label: 'Placement Rate',   value: uni.placements.rate },
// //                       ...(uni.placements.averagePackage ? [{ label: 'Average Package', value: uni.placements.averagePackage }] : []),
// //                       ...(uni.placements.highestPackage ? [{ label: 'Highest Package', value: uni.placements.highestPackage }] : []),
// //                     ].map((s, i) => (
// //                       <div key={i} style={{ flex: 1, padding: '24px', background: '#fff', textAlign: 'center' }}>
// //                         <div style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '800', color: '#FF6B35', letterSpacing: '-1px', marginBottom: '6px' }}>{s.value}</div>
// //                         <div style={{ fontSize: '11px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{s.label}</div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                   {(uni.placements.topRecruiters ?? []).length > 0 && (
// //                     <div style={{ padding: '20px 24px' }}>
// //                       <div style={{ fontSize: '11px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '14px' }}>Top Recruiters</div>
// //                       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
// //                         {(uni.placements.topRecruiters ?? []).map((r, i) => (
// //                           <span key={i} style={{ padding: '7px 16px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '12px', fontWeight: '700', color: '#1E3A5F' }}>{r}</span>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>
// //               </section>
// //             )}

// //             {/* ── Mid CTA ── */}
// //             <section style={{ padding: '0 32px 64px' }} className="content-pad">
// //               <div className="cta-banner">
// //                 <div style={{ position: 'relative', zIndex: 1 }}>
// //                   <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.5)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px' }}>Your Seat Awaits</div>
// //                   <h3 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px', marginBottom: '8px' }}>
// //                     Start your journey at {uni.shortName ?? uni.name}
// //                   </h3>
// //                   <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', fontWeight: '500', maxWidth: '400px' }}>
// //                     Expert counselors guide you from inquiry to enrollment — at zero cost.
// //                   </p>
// //                 </div>
// //                 <button onClick={() => setIsModalOpen(true)} className="btn-white" style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
// //                   Get Free Counseling →
// //                 </button>
// //               </div>
// //             </section>

// //           </div>
// //         )}

// //         {/* ════════════════════════════════════════
// //             PROGRAMS TAB
// //         ════════════════════════════════════════ */}
// //         {activeTab === 'programs' && (
// //           <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px 80px' }} className="content-pad">
// //             <SectionHead
// //               title={`Programs at ${uni.shortName ?? uni.name}`}
// //               sub={programs.length > 0 ? `${programs.length} program${programs.length !== 1 ? 's' : ''} offered` : 'Contact us for the latest program list'}
// //             />

// //             {programs.length > 0 ? (
// //               <>
// //                 <div className="prog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
// //                   {programs.map((prog, i) => {
// //                     const progDataRows = [
// //                       { label: 'Duration', value: prog.duration },
// //                       { label: 'Seats',    value: prog.seats ? `${prog.seats} seats` : null },
// //                       { label: 'Intakes',  value: (prog.intakes ?? []).length > 0 ? (prog.intakes ?? []).join(' · ') : null },
// //                     ].filter(r => r.value !== null);

// //                     return (
// //                       <div key={i} className="prog-card">
// //                         <div style={{ padding: '20px 24px', borderBottom: '1px solid #F1F5F9' }}>
// //                           <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
// //                             {prog.category}
// //                           </div>
// //                           <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1E3A5F', lineHeight: '1.25', marginBottom: '4px' }}>
// //                             {prog.degree}
// //                           </h3>
// //                           <div style={{ fontSize: '13px', fontWeight: '600', color: '#64748B' }}>{prog.name}</div>
// //                         </div>

// //                         <div style={{ background: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '1px', flex: 1 }}>
// //                           {progDataRows.map((row, j) => (
// //                             <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 20px', background: '#fff', gap: '12px' }}>
// //                               <span style={{ fontSize: '11px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', flexShrink: 0 }}>{row.label}</span>
// //                               <span style={{ fontSize: '13px', fontWeight: '800', color: '#1E3A5F', textAlign: 'right' }}>{row.value}</span>
// //                             </div>
// //                           ))}
// //                         </div>

// //                         <div
// //                           onClick={() => setIsModalOpen(true)}
// //                           style={{ padding: '15px 20px', background: '#F8FAFC', fontSize: '11px', fontWeight: '700', color: '#1E3A5F', letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s ease', borderTop: '1px solid #E2E8F0' }}
// //                           onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#FF6B35'; (e.currentTarget as HTMLDivElement).style.color = '#fff'; }}
// //                           onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#F8FAFC'; (e.currentTarget as HTMLDivElement).style.color = '#1E3A5F'; }}
// //                         >
// //                           Enquire About This Program →
// //                         </div>
// //                       </div>
// //                     );
// //                   })}
// //                 </div>

// //                 {eligibleFor.length > 0 && (
// //                   <div style={{ marginTop: '48px' }}>
// //                     <div style={{ fontSize: '12px', fontWeight: '700', color: '#94A3B8', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
// //                       Degree Eligible For
// //                     </div>
// //                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
// //                       {eligibleFor.map((exam, i) => <CheckBadge key={i}>{exam}</CheckBadge>)}
// //                     </div>
// //                   </div>
// //                 )}
// //               </>
// //             ) : (
// //               <div style={{ padding: '80px 40px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
// //                 <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1E3A5F', marginBottom: '12px' }}>Program Details Coming Soon</h3>
// //                 <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '28px' }}>Contact us to get the full program list for {uni.name}.</p>
// //                 <button onClick={() => setIsModalOpen(true)} className="btn-orange">Contact Us →</button>
// //               </div>
// //             )}
// //           </div>
// //         )}

// //         {/* ════════════════════════════════════════
// //             ADMISSIONS TAB
// //         ════════════════════════════════════════ */}
// //         {activeTab === 'admissions' && (
// //           <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px 80px' }} className="content-pad">
// //             <SectionHead title="Admissions" sub="Eligibility, documents, and the step-by-step process" />

// //             {/* Eligibility + Docs */}
// //             {(eligibility.exam || eligibility.minScore || eligibility.minPercentage || eligibility.ageLimit || requiredDocs.length > 0) && (
// //               <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '1px', background: '#E2E8F0', border: '1px solid #E2E8F0', marginBottom: '48px' }} className="elig-grid">

// //                 {/* Left — Criteria */}
// //                 <div style={{ background: '#fff', padding: '28px 28px 12px' }}>
// //                   <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>Eligibility Criteria</div>
// //                   {[
// //                     { icon: '📋', label: 'Exam Required',  value: eligibility.exam },
// //                     { icon: '🎯', label: 'Min Score',      value: eligibility.minScore },
// //                     { icon: '🎓', label: 'Min Percentage', value: eligibility.minPercentage },
// //                     { icon: '🎂', label: 'Age Limit',      value: eligibility.ageLimit },
// //                   ].filter(e => e.value).map((item, i) => (
// //                     <div key={i} className="elig-item">
// //                       <div style={{ width: '44px', height: '44px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
// //                         {item.icon}
// //                       </div>
// //                       <div>
// //                         <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>{item.label}</div>
// //                         <div style={{ fontSize: '15px', fontWeight: '700', color: '#1E3A5F', lineHeight: '1.4' }}>{item.value}</div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* Right — Documents */}
// //                 <div style={{ background: '#fff', padding: '28px' }}>
// //                   <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>Required Documents</div>
// //                   {requiredDocs.length > 0 ? (
// //                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
// //                       {requiredDocs.map((doc, i) => <DocTag key={i}>{doc}</DocTag>)}
// //                     </div>
// //                   ) : (
// //                     <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '28px' }}>Contact us for the full documents checklist.</p>
// //                   )}
// //                   <div style={{ padding: '20px', border: '1px solid #E2E8F0', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
// //                     <div>
// //                       <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', marginBottom: '4px' }}>Need help with documents?</div>
// //                       <div style={{ fontSize: '12px', color: '#64748B' }}>Our team handles everything for you.</div>
// //                     </div>
// //                     <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ padding: '11px 22px', fontSize: '12px' }}>Get Help →</button>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Admission Steps */}
// //             {admissionSteps.length > 0 && (
// //               <>
// //                 <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1E3A5F', letterSpacing: '-0.4px', marginBottom: '4px' }}>Admission Process</h3>
// //                 <p style={{ fontSize: '14px', color: '#64748B', fontWeight: '500', marginBottom: '28px' }}>Follow these steps to secure your seat</p>
// //                 <div style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden' }}>
// //                   {admissionSteps.map((step, i) => (
// //                     <div key={i} className="step-item">
// //                       <div style={{ minWidth: '40px', height: '40px', background: i === 0 ? '#FF6B35' : '#F8FAFC', border: i === 0 ? 'none' : '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '800', color: i === 0 ? '#fff' : '#1E3A5F', flexShrink: 0 }}>
// //                         {String(i + 1).padStart(2, '0')}
// //                       </div>
// //                       <p style={{ fontSize: '15px', fontWeight: '600', color: '#1E3A5F', lineHeight: '1.6', margin: 0, paddingTop: '8px' }}>{step}</p>
// //                     </div>
// //                   ))}
// //                   <div style={{ padding: '24px 28px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
// //                     <div>
// //                       <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', marginBottom: '4px' }}>Ready to get started?</div>
// //                       <div style={{ fontSize: '12px', color: '#64748B' }}>Our counselors guide you through every step, free of charge.</div>
// //                     </div>
// //                     <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ marginLeft: 'auto' }}>Start Application →</button>
// //                   </div>
// //                 </div>
// //               </>
// //             )}

// //             {/* Eligible-for exams */}
// //             {eligibleFor.length > 0 && (
// //               <div style={{ marginTop: '48px' }}>
// //                 <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1E3A5F', letterSpacing: '-0.4px', marginBottom: '4px' }}>Exam Eligibility</h3>
// //                 <p style={{ fontSize: '14px', color: '#64748B', fontWeight: '500', marginBottom: '20px' }}>
// //                   Degrees from {uni.shortName ?? uni.name} are recognized for these licensing exams
// //                 </p>
// //                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
// //                   {eligibleFor.map((exam, i) => <CheckBadge key={i}>{exam}</CheckBadge>)}
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         )}

// //         {/* ════════════════════════════════════════
// //             FEES TAB
// //         ════════════════════════════════════════ */}
// //         {activeTab === 'fees' && (
// //           <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px 80px' }} className="content-pad">
// //             <SectionHead title="Fee Structure" sub="Complete cost breakdown for your planning" />

// //             <div className="fee-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '32px', alignItems: 'start' }}>

// //               {/* Left */}
// //               <div>
// //                 <div style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden', marginBottom: '24px' }}>
// //                   <div style={{ padding: '20px 24px', background: '#1E3A5F' }}>
// //                     <FieldLabel>Annual Breakdown</FieldLabel>
// //                     <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff', marginTop: '4px' }}>
// //                       {fees.currency ?? 'USD'} — Per Academic Year
// //                     </div>
// //                   </div>

// //                   {/* Tuition */}
// //                   {fees.tuitionPerYear != null && (
// //                     <div className="fee-row">
// //                       <div style={{ flex: 1 }}>
// //                         <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F' }}>Tuition Fee / Year</div>
// //                         <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '600', marginTop: '2px' }}>Academic fees per annum</div>
// //                       </div>
// //                       <div style={{ fontSize: '16px', fontWeight: '800', color: '#1E3A5F', flexShrink: 0 }}>
// //                         {fees.currency} {fees.tuitionPerYear.toLocaleString()}
// //                       </div>
// //                     </div>
// //                   )}

// //                   {/* Hostel */}
// //                   {fees.hostelPerYear != null && (
// //                     <div className="fee-row">
// //                       <div style={{ flex: 1 }}>
// //                         <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F' }}>Hostel Fee / Year</div>
// //                         <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '600', marginTop: '2px' }}>Including meals / boarding</div>
// //                       </div>
// //                       <div style={{ fontSize: '16px', fontWeight: '800', color: '#1E3A5F', flexShrink: 0 }}>
// //                         {fees.currency} {fees.hostelPerYear.toLocaleString()}
// //                       </div>
// //                     </div>
// //                   )}

// //                   {/* Total first year */}
// //                   {fees.totalFirstYear != null && (
// //                     <div style={{ padding: '16px 24px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
// //                       <div>
// //                         <div style={{ fontSize: '12px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '3px' }}>Total First Year</div>
// //                         <div style={{ fontSize: '11px', color: '#64748B' }}>All inclusive — first year</div>
// //                       </div>
// //                       <div style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: '800', color: '#1E3A5F', letterSpacing: '-0.5px' }}>
// //                         {fees.currency} {fees.totalFirstYear.toLocaleString()}
// //                       </div>
// //                     </div>
// //                   )}

// //                   {/* Total course */}
// //                   {fees.totalCourse != null && (
// //                     <div style={{ padding: '16px 24px', background: '#1E3A5F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
// //                       <div>
// //                         <div style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '3px' }}>Total Course Cost</div>
// //                         <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Complete {programs[0]?.duration ?? 'program'}</div>
// //                       </div>
// //                       <div style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', color: '#FF6B35', letterSpacing: '-1px' }}>
// //                         {fees.currency} {fees.totalCourse.toLocaleString()}
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Accommodation */}
// //                 {accommodation.available && (
// //                   <div style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden', marginBottom: '24px' }}>
// //                     <div style={{ padding: '16px 24px', borderBottom: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
// //                       <div>
// //                         <div style={{ fontSize: '15px', fontWeight: '800', color: '#1E3A5F' }}>Accommodation</div>
// //                         <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>On-campus hostel</div>
// //                       </div>
// //                       <div style={{ textAlign: 'right' }}>
// //                         {accommodation.costPerYear != null && (
// //                           <div style={{ fontSize: '18px', fontWeight: '800', color: '#1E3A5F' }}>
// //                             {fees.currency} {accommodation.costPerYear.toLocaleString()} <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '600' }}>/year</span>
// //                           </div>
// //                         )}
// //                         {accommodation.capacity != null && (
// //                           <div style={{ fontSize: '11px', color: '#64748B', marginTop: '2px' }}>Capacity: {accommodation.capacity.toLocaleString()} students</div>
// //                         )}
// //                       </div>
// //                     </div>
// //                     {(accommodation.features ?? []).length > 0 && (
// //                       <div style={{ padding: '16px 24px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
// //                         {(accommodation.features ?? []).map((f, i) => (
// //                           <span key={i} style={{ padding: '5px 12px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '12px', fontWeight: '600', color: '#1E3A5F' }}>{f}</span>
// //                         ))}
// //                       </div>
// //                     )}
// //                   </div>
// //                 )}

// //                 {/* Disclaimer */}
// //                 <div style={{ padding: '16px 20px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
// //                   <span style={{ fontSize: '18px', flexShrink: 0 }}>ℹ️</span>
// //                   <p style={{ fontSize: '12px', color: '#64748B', fontWeight: '500', lineHeight: '1.6', margin: 0 }}>
// //                     All fees are approximate and subject to change. Exchange rate fluctuations may affect the final amount. Contact our counselors for the most current fee structure before making any payment.
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* Right — sticky value panel */}
// //               <div style={{ border: '1px solid #E2E8F0', background: '#fff', position: 'sticky', top: '140px' }}>
// //                 <div style={{ padding: '20px 24px', background: '#FF6B35' }}>
// //                   <FieldLabel>Why It's Worth It</FieldLabel>
// //                   <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff', marginTop: '4px' }}>Cost vs Value</div>
// //                 </div>
// //                 {[
// //                   { icon: '🎓', label: 'Accreditations',   value: accreditations.length ? accreditations.join(', ') : null },
// //                   { icon: '📊', label: 'Pass Rate',         value: stats.passRate ?? null },
// //                   { icon: '👥', label: "Int'l Students",    value: stats.internationalStudents != null ? `${stats.internationalStudents.toLocaleString()} students` : null },
// //                   { icon: '👨‍🏫', label: 'Faculty Ratio',  value: stats.facultyRatio ?? null },
// //                   { icon: '🌍', label: 'Campus Size',       value: stats.campusSize ?? null },
// //                   { icon: '🏥', label: 'Clinical Partners', value: trainingPartners[0] ? `${trainingPartners[0].count}+ ${trainingPartners[0].type}` : null },
// //                 ].filter(r => r.value !== null).map((item, i, arr) => (
// //                   <div key={i} style={{ padding: '14px 20px', borderBottom: i < arr.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
// //                     <span style={{ fontSize: '18px' }}>{item.icon}</span>
// //                     <div>
// //                       <div style={{ fontSize: '11px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase' }}>{item.label}</div>
// //                       <div style={{ fontSize: '13px', fontWeight: '700', color: '#1E3A5F', marginTop: '2px' }}>{item.value}</div>
// //                     </div>
// //                   </div>
// //                 ))}
// //                 <div style={{ padding: '20px 24px', borderTop: '1px solid #F1F5F9' }}>
// //                   <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ width: '100%', justifyContent: 'center' }}>
// //                     Get Full Fee Breakdown →
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* ════════════════════════════════════════
// //             FINAL CTA
// //         ════════════════════════════════════════ */}
// //         <section style={{ position: 'relative', overflow: 'hidden' }}>
// //           <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${galleryImages[0] ?? uni.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
// //           <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,24,48,0.91)' }} />
// //           <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '100px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px', flexWrap: 'wrap' }}>
// //             <div>
// //               <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '12px' }}>Take the Next Step</div>
// //               <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: '800', color: '#fff', letterSpacing: '-2px', lineHeight: '1.0', marginBottom: '16px' }}>
// //                 Your Medical Career<br />
// //                 <span style={{ color: '#FF6B35' }}>Starts at {uni.shortName ?? uni.name}</span>
// //               </h2>
// //               <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', fontWeight: '500', maxWidth: '440px' }}>
// //                 Expert counselors guide you from first inquiry to enrollment — at zero cost.
// //               </p>
// //             </div>
// //             <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '220px' }}>
// //               <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ justifyContent: 'center' }}>Apply Now →</button>
// //               <Link href={`/destinations/${uni.countrySlug}`} className="btn-white" style={{ justifyContent: 'center', color: '#1E3A5F' }}>
// //                 More in {uni.country} {uni.flag}
// //               </Link>
// //             </div>
// //           </div>
// //         </section>

// //       </div>
// //       <Footer />
// //     </>
// //   );
// // }
// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import LeadFormModal from '../components/LeadForm';
// import type { University } from '../data/universityData';

// interface UniversityPageProps { university: University; }
// type TabId = 'overview' | 'programs' | 'admissions' | 'fees';

// // ─────────────────────────────────────────────────────────────────────────────
// // SVG Icon set — zero emoji, renders identically on every browser + OS
// // ─────────────────────────────────────────────────────────────────────────────
// const SVG = {
//   calendar: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
//     </svg>
//   ),
//   building: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
//     </svg>
//   ),
//   book: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
//     </svg>
//   ),
//   users: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
//     </svg>
//   ),
//   graduationCap: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
//     </svg>
//   ),
//   user: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
//     </svg>
//   ),
//   globe: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
//     </svg>
//   ),
//   barChart: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
//     </svg>
//   ),
//   mapPin: (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
//     </svg>
//   ),
//   shield: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
//     </svg>
//   ),
//   hospital: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="3" y="2" width="18" height="20" rx="1"/><line x1="9" y1="22" x2="9" y2="12"/><line x1="15" y1="22" x2="15" y2="12"/><rect x="9" y="12" width="6" height="10"/><line x1="12" y1="6" x2="12" y2="10"/><line x1="10" y1="8" x2="14" y2="8"/>
//     </svg>
//   ),
//   award: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
//     </svg>
//   ),
//   trendUp: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
//     </svg>
//   ),
//   check: (
//     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//       <polyline points="20 6 9 17 4 12"/>
//     </svg>
//   ),
//   arrowRight: (
//     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//       <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
//     </svg>
//   ),
//   link: (
//     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
//     </svg>
//   ),
//   info: (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
//     </svg>
//   ),
// };

// // ─── Icon wrapper for stat items ──────────────────────────────────────────────
// function StatIconBox({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="stat-icon-box" style={{ width: 36, height: 36, flexShrink: 0, background: '#F0F4FF', borderLeft: '3px solid #FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       {children}
//     </div>
//   );
// }

// // ─── Misc atoms ───────────────────────────────────────────────────────────────
// function FieldLabel({ children }: { children: React.ReactNode }) {
//   return <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', letterSpacing: '1.8px', textTransform: 'uppercase', marginBottom: 1 }}>{children}</div>;
// }

// function SectionHead({ title, sub }: { title: string; sub: string }) {
//   return (
//     <>
//       <h2 className="section-h2">{title}</h2>
//       <p className="section-sub">{sub}</p>
//     </>
//   );
// }

// function DocTag({ children }: { children: React.ReactNode }) {
//   return (
//     <span className="doc-tag">
//       <span style={{ color: '#FF6B35' }}>{SVG.link}</span>{children}
//     </span>
//   );
// }

// function CheckBadge({ children }: { children: React.ReactNode }) {
//   return (
//     <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', border: '1px solid #E2E8F0', background: '#F8FAFC', fontSize: 12, fontWeight: 700, color: '#1E3A5F' }}>
//       <span style={{ color: '#FF6B35', display: 'flex' }}>{SVG.check}</span>
//       {children}
//     </span>
//   );
// }

// function VerifiedBadge({ label }: { label: string }) {
//   return (
//     <div
//       style={{ padding: '8px 14px', border: '1px solid #E2E8F0', background: '#fff', display: 'flex', alignItems: 'center', gap: 10, transition: 'border-color 0.2s', cursor: 'default' }}
//       onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#FF6B35'; }}
//       onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#E2E8F0'; }}
//     >
//       <div style={{ width: 26, height: 26, background: '#FF6B35', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>{SVG.check}</div>
//       <div>
//         <div style={{ fontSize: 13, fontWeight: 800, color: '#1E3A5F' }}>{label}</div>
//         <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B35', letterSpacing: '1.2px', textTransform: 'uppercase', marginTop: 1 }}>Recognized</div>
//       </div>
//     </div>
//   );
// }

// // Value panel row in fees/keyfacts sidebar — SVG icon
// function ValueRow({ svg, label, value }: { svg: React.ReactNode; label: string; value: string }) {
//   return (
//     <div style={{ padding: '9px 14px', borderBottom: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', gap: 10 }}>
//       <div style={{ width: 30, height: 30, flexShrink: 0, background: '#F0F4FF', borderLeft: '3px solid #FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         {svg}
//       </div>
//       <div>
//         <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', letterSpacing: '0.8px', textTransform: 'uppercase' }}>{label}</div>
//         <div style={{ fontSize: 12, fontWeight: 700, color: '#1E3A5F', marginTop: 1 }}>{value}</div>
//       </div>
//     </div>
//   );
// }

// // Card section header with accent bar
// function CardHeader({ label, title }: { label: string; title: string }) {
//   return (
//     <div style={{ padding: '10px 14px', background: '#1E3A5F', display: 'flex', alignItems: 'center', gap: 0 }}>
//       <div style={{ width: 4, height: 32, background: '#FF6B35', marginRight: 12, flexShrink: 0 }} />
//       <div>
//         <FieldLabel>{label}</FieldLabel>
//         <div style={{ fontSize: 12, fontWeight: 800, color: '#fff', marginTop: 1 }}>{title}</div>
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // Main Page Component
// // ─────────────────────────────────────────────────────────────────────────────
// export default function UniversityPage({ university: uni }: UniversityPageProps) {
//   const [activeTab, setActiveTab] = useState<TabId>('overview');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   if (!uni) {
//     return (
//       <>
//         <Navbar />
//         <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Plus Jakarta Sans",sans-serif' }}>
//           <p style={{ fontSize: 16, color: '#64748B' }}>University not found.</p>
//         </div>
//         <Footer />
//       </>
//     );
//   }

//   const accreditations   = uni.accreditations   ?? [];
//   const programs         = uni.programs         ?? [];
//   const whyChoose        = uni.whyChoose        ?? [];
//   const highlights       = uni.highlights       ?? [];
//   const keyFeatures      = uni.keyFeatures      ?? [];
//   const facilities       = uni.facilities       ?? [];
//   const trainingPartners = uni.trainingPartners ?? [];
//   const eligibleFor      = uni.eligibleFor      ?? [];
//   const admissionSteps   = uni.admissionSteps   ?? [];
//   const galleryImages    = uni.galleryImages    ?? [];
//   const infrastructure   = uni.infrastructure   ?? {};
//   const stats            = uni.stats            ?? {} as University['stats'];
//   const ranking          = uni.ranking          ?? {};
//   const studentLife      = uni.studentLife      ?? {} as University['studentLife'];
//   const safetyRating     = uni.safetyRating     ?? {} as University['safetyRating'];
//   const location         = uni.location         ?? {} as University['location'];
//   const fees             = uni.fees             ?? {} as University['fees'];
//   const eligibility      = uni.eligibility      ?? {} as University['eligibility'];
//   const requiredDocs     = eligibility.requiredDocs ?? [];
//   const accommodation    = uni.accommodation    ?? {} as University['accommodation'];
//   const sportsAvailable  = studentLife.sportsAvailable ?? [];

//   const tabs: { id: TabId; label: string }[] = [
//     { id: 'overview',   label: 'Overview'   },
//     { id: 'programs',   label: 'Programs'   },
//     { id: 'admissions', label: 'Admissions' },
//     { id: 'fees',       label: 'Fees'       },
//   ];

//   // SVG-icon stat items — no emoji at all
//   const statBarItems = [
//     { svg: SVG.calendar,      label: 'Established',     value: uni.establishedYear ? String(uni.establishedYear) : null },
//     // { svg: SVG.building,      label: 'Type',            value: uni.universityType ?? null },
//     // { svg: SVG.book,          label: 'Medium',          value: uni.mediumOfInstruction ?? null },
//     { svg: SVG.users,         label: 'Total Students',  value: stats.totalStudents != null ? stats.totalStudents.toLocaleString() : null },
//     // { svg: SVG.graduationCap, label: 'Indian Students', value: stats.indianStudents != null ? stats.indianStudents.toLocaleString() : null },
//     // { svg: SVG.user,          label: 'Faculty Ratio',   value: stats.facultyRatio ?? null },
//     { svg: SVG.globe,         label: 'Campus Size',     value: stats.campusSize ?? null },
//     { svg: SVG.barChart,      label: 'Pass Rate',       value: stats.passRate ?? null },
//   ].filter(s => s.value !== null);

//   const keyFacts = [
//     { label: 'Global Rank',    value: ranking.globalRank  ? `#${ranking.globalRank}`  : null },
//     { label: 'Country Rank',   value: ranking.countryRank ? `#${ranking.countryRank}` : null },
//     { label: 'Category',       value: ranking.category ?? null },
//     { label: 'Accreditations', value: accreditations.length ? accreditations.join(', ') : null },
//     { label: 'Total Students', value: stats.totalStudents != null ? stats.totalStudents.toLocaleString() : null },
//     { label: 'International',  value: stats.internationalStudents != null ? stats.internationalStudents.toLocaleString() : null },
//     { label: 'Faculty',        value: (stats.facultyCount && stats.facultyRatio) ? `${stats.facultyCount} · ${stats.facultyRatio} ratio` : (stats.facultyRatio ?? null) },
//     { label: 'Pass Rate',      value: stats.passRate ?? null },
//     { label: 'Placement Rate', value: stats.placementRate ?? null },
//     { label: 'Medium',         value: uni.mediumOfInstruction ?? null },
//   ].filter(r => r.value !== null);

//   const infraItems = [
//     { label: 'Libraries',        value: infrastructure.libraries },
//     { label: 'Labs',             value: infrastructure.labs },
//     { label: 'Hospitals',        value: infrastructure.hospitals },
//     { label: 'Research Centres', value: infrastructure.researchCenters },
//     { label: 'Hostels',          value: infrastructure.hostels },
//     { label: 'Book Collection',  value: infrastructure.bookCollection },
//   ].filter(r => r.value !== undefined && r.value !== null);

//   const valueItems = [
//     { svg: SVG.award,   label: 'Accreditations',   value: accreditations.length ? accreditations.join(', ') : null },
//     { svg: SVG.barChart,label: 'Pass Rate',         value: stats.passRate ?? null },
//     { svg: SVG.users,   label: "Int'l Students",    value: stats.internationalStudents != null ? `${stats.internationalStudents.toLocaleString()} students` : null },
//     { svg: SVG.user,    label: 'Faculty Ratio',     value: stats.facultyRatio ?? null },
//     { svg: SVG.globe,   label: 'Campus Size',       value: stats.campusSize ?? null },
//     { svg: SVG.hospital,label: 'Clinical Partners', value: trainingPartners[0] ? `${trainingPartners[0].count}+ ${trainingPartners[0].type}` : null },
//   ].filter(r => r.value !== null);

//   return (
//     <>
//       <Navbar />
//       <div style={{ minHeight: '100vh', background: '#fff', fontFamily: '"Plus Jakarta Sans",sans-serif' }}>

//         <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} universityName={uni.name} countryCode={uni.countrySlug} />

//         <style>{`
//           @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
//           *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//           button, a { -webkit-tap-highlight-color: transparent; }

//           /* ── Tabs ── */
//           .page-tabs { background: #fff; border-bottom: 1px solid #E2E8F0; position: sticky; top: 0; z-index: 40; box-shadow: 0 1px 4px rgba(0,0,0,0.05); }
//           .page-tabs-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
//           .page-tabs-inner::-webkit-scrollbar { display: none; }
//           .page-tab { padding: 12px 20px; background: transparent; border: none; border-bottom: 2px solid transparent; font-size: 13px; font-weight: 600; font-family: inherit; color: #64748B; cursor: pointer; transition: color 0.2s, border-color 0.2s; white-space: nowrap; flex-shrink: 0; min-height: 44px; }
//           .page-tab.active { color: #1E3A5F; border-bottom-color: #FF6B35; }
//           .page-tab:hover:not(.active) { color: #1E3A5F; }

//           /* ── Stat bar — always CSS grid, reflows cleanly on all widths ── */
//           .stat-bar {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
//             gap: 1px;
//             background: #E2E8F0;
//             border-bottom: 2px solid #E2E8F0;
//           }
//           .stat-bar-item {
//             display: flex; align-items: center; gap: 10px;
//             padding: 13px 16px; background: #fff; transition: background 0.15s;
//             min-width: 0;
//           }
//           .stat-bar-item:hover { background: #F8FAFC; }
//           .stat-bar-label { font-size: 10px; font-weight: 700; color: #94A3B8; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 2px; }
//           .stat-bar-value { font-size: 13px; font-weight: 700; color: #1E3A5F; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

//           /* ── Section heading ── */
//           .section-h2 { font-size: clamp(16px, 3.5vw, 22px); font-weight: 800; color: #1E3A5F; letter-spacing: -0.4px; margin-bottom: 3px; }
//           .section-sub { font-size: 13px; color: #64748B; font-weight: 500; margin-bottom: 20px; }

//           /* ── Why-choose ── */
//           .why-item { display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; border: 1px solid #E2E8F0; background: #fff; margin-bottom: 2px; position: relative; transition: box-shadow 0.2s, border-color 0.2s; }
//           .why-item::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:transparent; transition: background 0.2s; }
//           .why-item:hover::before { background: #FF6B35; }
//           .why-item:hover { box-shadow: 0 3px 12px rgba(30,58,95,0.07); border-color: rgba(255,107,53,0.2); }

//           /* ── Highlight card ── */
//           .highlight-card { padding: 18px 14px; border: 1px solid #E2E8F0; background: #fff; transition: all 0.2s; position: relative; overflow: hidden; }
//           .highlight-card::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; background: #FF6B35; transform: scaleX(0); transition: transform 0.2s; transform-origin: left; }
//           .highlight-card:hover::after { transform: scaleX(1); }
//           .highlight-card:hover { box-shadow: 0 4px 14px rgba(30,58,95,0.07); }

//           /* ── Feature card ── */
//           .feature-card { padding: 13px; border: 1px solid #E2E8F0; background: #fff; display: flex; align-items: flex-start; gap: 11px; transition: border-color 0.2s, box-shadow 0.2s; }
//           .feature-card:hover { border-color: rgba(255,107,53,0.3); box-shadow: 0 2px 8px rgba(30,58,95,0.05); }

//           /* ── Program card ── */
//           .prog-card { border: 1px solid #E2E8F0; background: #fff; display: flex; flex-direction: column; overflow: hidden; position: relative; transition: box-shadow 0.2s, border-color 0.2s; }
//           .prog-card::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:transparent; transition: background 0.2s; }
//           .prog-card:hover::before { background: #FF6B35; }
//           .prog-card:hover { box-shadow: 0 4px 18px rgba(30,58,95,0.08); border-color: rgba(255,107,53,0.2); }

//           /* ── Eligibility row ── */
//           .elig-item { display: flex; align-items: flex-start; gap: 11px; padding: 11px 0; border-bottom: 1px solid #F1F5F9; }
//           .elig-item:last-child { border-bottom: none; }

//           /* ── Step item ── */
//           .step-item { display: flex; align-items: flex-start; gap: 13px; padding: 13px 18px; border-bottom: 1px solid #F1F5F9; }
//           .step-item:last-child { border-bottom: none; }

//           /* ── Doc tag ── */
//           .doc-tag { padding: 5px 10px; border: 1px solid #E2E8F0; background: #F8FAFC; font-size: 11px; font-weight: 600; color: #1E3A5F; display: inline-flex; align-items: center; gap: 5px; transition: all 0.2s; }
//           .doc-tag:hover { border-color: #FF6B35; color: #FF6B35; }

//           /* ── Fee row ── */
//           .fee-row { display: flex; align-items: center; padding: 12px 16px; border-bottom: 1px solid #F1F5F9; gap: 12px; transition: background 0.15s; }
//           .fee-row:last-child { border-bottom: none; }
//           .fee-row:hover { background: #F8FAFC; }

//           /* ── Infra cell ── */
//           .infra-cell { padding: 18px 10px; background: #fff; text-align: center; transition: background 0.15s; }
//           .infra-cell:hover { background: #F8FAFC; }

//           /* ── Data row ── */
//           .data-row { padding: 9px 14px; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; border-bottom: 1px solid #F1F5F9; }
//           .data-row:last-child { border-bottom: none; }

//           /* ── Buttons ── */
//           .btn-orange { display: inline-flex; align-items: center; justify-content: center; gap: 7px; padding: 12px 24px; background: #FF6B35; color: #fff; border: 2px solid #FF6B35; font-size: 13px; font-weight: 700; font-family: inherit; cursor: pointer; text-decoration: none; transition: background 0.2s, border-color 0.2s; min-height: 44px; }
//           .btn-orange:hover { background: #E85D29; border-color: #E85D29; }
//           .btn-white  { display: inline-flex; align-items: center; justify-content: center; gap: 7px; padding: 12px 24px; background: #fff; color: #1E3A5F; border: 2px solid #fff; font-size: 13px; font-weight: 700; font-family: inherit; cursor: pointer; text-decoration: none; transition: background 0.2s, color 0.2s; min-height: 44px; }
//           .btn-white:hover { background: transparent; color: #fff; }
//           .btn-ghost  { display: inline-flex; align-items: center; justify-content: center; gap: 7px; padding: 12px 20px; background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.35); font-size: 13px; font-weight: 700; font-family: inherit; cursor: pointer; min-height: 44px; transition: background 0.2s; }
//           .btn-ghost:hover { background: rgba(255,255,255,0.1); }

//           /* ── CTA banner ── */
//           .cta-banner { background: #1E3A5F; padding: 32px 28px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; position: relative; overflow: hidden; }
//           .cta-banner::before { content:''; position:absolute; right:-50px; top:-50px; width:140px; height:140px; border:1px solid rgba(255,255,255,0.07); transform:rotate(15deg); }

//           /* ══════════════════════════════════
//              TABLET ≤ 1024px
//           ══════════════════════════════════ */
//           @media (max-width: 1024px) {
//             .prog-grid    { grid-template-columns: repeat(2,1fr) !important; }
//             .feature-grid { grid-template-columns: repeat(2,1fr) !important; }
//             .fee-layout   { grid-template-columns: 1fr !important; }
//             .fee-sticky, .key-facts-sticky { position: static !important; }
//           }

//           /* ══════════════════════════════════
//              MOBILE ≤ 768px
//           ══════════════════════════════════ */
//           @media (max-width: 768px) {
//             /* Hero */
//             .hero-inner { padding: 80px 16px 32px !important; }
//             .hero-btns  { flex-direction: column !important; }
//             .hero-btns > * { width: 100% !important; }

//             /* Content */
//             .content-pad { padding-left: 16px !important; padding-right: 16px !important; }

//             /* Stat bar → 2-col card grid on mobile, text stacks vertically */
//             .stat-bar { grid-template-columns: repeat(2, 1fr) !important; }
//             .stat-bar-item {
//               flex-direction: column !important;
//               align-items: flex-start !important;
//               gap: 6px !important;
//               padding: 14px 16px !important;
//               border-left: 3px solid #FF6B35 !important;
//             }
//             .stat-bar-value { font-size: 15px !important; white-space: normal !important; }

//             /* Grids */
//             .two-col, .campus-grid, .elig-grid, .prog-grid,
//             .training-grid, .fee-layout { grid-template-columns: 1fr !important; }
//             .highlight-grid, .feature-grid, .infra-grid { grid-template-columns: repeat(2,1fr) !important; }

//             /* Sticky panels become static */
//             .key-facts-sticky, .fee-sticky { position: static !important; }

//             /* CTA */
//             .cta-banner { padding: 24px 16px !important; flex-direction: column !important; align-items: flex-start !important; }
//             .btn-orange, .btn-white { width: 100% !important; }

//             /* Final CTA */
//             .final-cta-inner { flex-direction: column !important; padding: 48px 16px !important; }
//             .final-cta-btns  { flex-direction: column !important; width: 100% !important; }
//             .final-cta-btns > * { width: 100% !important; }

//             /* Stat SVG icon hidden — item shows label+value card only */
//             .stat-icon-box { display: none !important; }
//           }

//           /* ══════════════════════════════════
//              SMALL PHONE ≤ 480px
//           ══════════════════════════════════ */
//           @media (max-width: 480px) {
//             .stat-icon-box  { display: none !important; }
//             .feature-grid   { grid-template-columns: 1fr !important; }
//             .highlight-grid { grid-template-columns: repeat(2,1fr) !important; }
//             .infra-grid     { grid-template-columns: repeat(2,1fr) !important; }
//           }
//         `}</style>

//         {/* ════════════════ HERO ════════════════ */}
//         <section style={{ position: 'relative', minHeight: 420, overflow: 'hidden' }}>
//           <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${uni.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
//           <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,rgba(12,24,48,0.95) 40%,rgba(12,24,48,0.5) 100%)' }} />

//           <div className="hero-inner" style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '110px 32px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>

//             {/* Breadcrumb */}
//             <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
//               <Link href="/destinations" style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: 500 }}>Destinations</Link>
//               <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
//               <Link href={`/destinations/${uni.countrySlug}`} style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: 500 }}>{uni.country}</Link>
//               <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
//               <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{uni.shortName ?? uni.name}</span>
//             </div>

//             {/* Badges */}
//             <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
//               {uni.universityType && (
//                 <span style={{ padding: '3px 10px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{uni.universityType}</span>
//               )}
//               {accreditations.map((acc, i) => (
//                 <span key={i} style={{ padding: '3px 10px', background: acc === 'NMC' ? '#FF6B35' : 'rgba(255,255,255,0.12)', border: acc === 'NMC' ? 'none' : '1px solid rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{acc}</span>
//               ))}
//             </div>

//             <h1 style={{ fontSize: 'clamp(22px,5vw,46px)', fontWeight: 800, color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, marginBottom: 8, maxWidth: 680 }}>{uni.name}</h1>

//             {/* Location — pure SVG pin, no emoji */}
//             <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
//               <span style={{ display: 'flex', flexShrink: 0 }}>{SVG.mapPin}</span>
//               <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>
//                 {uni.city}{uni.state ? `, ${uni.state}` : ''}, {uni.country}
//               </span>
//             </div>

//             {uni.tagline && (
//               <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 500, lineHeight: 1.6, maxWidth: 500, marginBottom: 22 }}>{uni.tagline}</p>
//             )}

//             <div className="hero-btns" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
//               <button onClick={() => setIsModalOpen(true)} className="btn-orange">Apply Now →</button>
//               {/* <button onClick={() => setActiveTab('programs')} className="btn-ghost">View Programs</button> */}
//               {uni.website && (
//                 <a href={uni.website} target="_blank" rel="noopener noreferrer"
//                   style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '12px 20px', background: 'transparent', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.2)', fontSize: 13, fontWeight: 600, textDecoration: 'none', fontFamily: 'inherit', minHeight: 44 }}>
//                   {SVG.link} Official Site
//                 </a>
//               )}
//             </div>
//           </div>
//         </section>

//         {/* ════════════════ STAT BAR ════════════════ */}
//         {statBarItems.length > 0 && (
//           <div className="stat-bar">
//             {statBarItems.map((s, i) => (
//               <div key={i} className="stat-bar-item">
//                 <StatIconBox>{s.svg}</StatIconBox>
//                 <div style={{ minWidth: 0, flex: 1 }}>
//                   <div className="stat-bar-label">{s.label}</div>
//                   <div className="stat-bar-value">{s.value}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* ════════════════ TABS ════════════════ */}
//         <div className="page-tabs">
//           <div className="page-tabs-inner" role="tablist">
//             {tabs.map(tab => (
//               <button key={tab.id} role="tab" aria-selected={activeTab === tab.id} className={`page-tab${activeTab === tab.id ? ' active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
//             ))}
//           </div>
//         </div>

//         {/* ════════════════════════════════════════════
//             OVERVIEW
//         ════════════════════════════════════════════ */}
//         {activeTab === 'overview' && (
//           <div style={{ maxWidth: 1200, margin: '0 auto' }}>

//             {/* Why Choose + Key Facts */}
//             {(whyChoose.length > 0 || keyFacts.length > 0) && (
//               <section style={{ padding: '36px 32px' }} className="content-pad">
//                 <SectionHead title={`Why Choose ${uni.shortName ?? uni.name}`} sub="The key reasons students pick this university" />
//                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 278px', gap: 24, alignItems: 'start' }} className="two-col">
//                   <div>
//                     {whyChoose.map((point, i) => (
//                       <div key={i} className="why-item">
//                         <div style={{ minWidth: 26, height: 26, background: '#FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: '#fff', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</div>
//                         <p style={{ fontSize: 13, fontWeight: 600, color: '#1E3A5F', lineHeight: 1.55, margin: 0 }}>{point}</p>
//                       </div>
//                     ))}
//                   </div>

//                   {keyFacts.length > 0 && (
//                     <div className="key-facts-sticky" style={{ border: '1px solid #E2E8F0', background: '#fff', position: 'sticky', top: 54 }}>
//                       <div style={{ padding: '11px 14px', background: '#1E3A5F', borderLeft: '4px solid #FF6B35' }}>
//                         <FieldLabel>At a Glance</FieldLabel>
//                         <div style={{ fontSize: 14, fontWeight: 800, color: '#fff', marginTop: 2 }}>Key Facts</div>
//                       </div>
//                       {keyFacts.map((row, i) => (
//                         <div key={i} className="data-row">
//                           <span style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
//                           <span style={{ fontSize: 12, fontWeight: 800, color: '#1E3A5F', textAlign: 'right', wordBreak: 'break-word' }}>{row.value}</span>
//                         </div>
//                       ))}
//                       <div style={{ padding: '12px 14px', borderTop: '1px solid #F1F5F9' }}>
//                         <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ width: '100%' }}>Apply Now →</button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </section>
//             )}

//             {/* Highlights — SVG icon strip replaces emoji */}
//             {highlights.length > 0 && (
//               <section style={{ padding: '0 32px 36px' }} className="content-pad">
//                 <SectionHead title="By the Numbers" sub="What the data says about this university" />
//                 <div className="highlight-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(highlights.length, 4)},1fr)`, gap: 1, background: '#E2E8F0', border: '1px solid #E2E8F0' }}>
//                   {highlights.map((h, i) => (
//                     <div key={i} className="highlight-card">
//                       {/* Accent line top — replaces unreliable emoji icon */}
//                       <div style={{ width: 28, height: 3, background: '#FF6B35', marginBottom: 10 }} />
//                       <div style={{ fontSize: 'clamp(20px,3.5vw,30px)', fontWeight: 800, color: '#1E3A5F', letterSpacing: '-0.8px', lineHeight: 1, marginBottom: 6 }}>{h.stat}</div>
//                       <div style={{ fontSize: 11, fontWeight: 700, color: '#64748B', letterSpacing: '0.6px', textTransform: 'uppercase', lineHeight: 1.4 }}>{h.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* Key Features — CSS accent replaces emoji icon */}
//             {keyFeatures.length > 0 && (
//               <section style={{ padding: '0 32px 36px' }} className="content-pad">
//                 <SectionHead title="Key Features" sub="What sets this university apart" />
//                 <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 7 }}>
//                   {keyFeatures.map((f, i) => (
//                     <div key={i} className="feature-card">
//                       <div style={{ width: 30, height: 30, background: '#FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff' }}>
//                         {SVG.check}
//                       </div>
//                       <div>
//                         <div style={{ fontSize: 12, fontWeight: 800, color: '#1E3A5F', marginBottom: 1 }}>{f.label}</div>
//                         {f.value && <div style={{ fontSize: 11, fontWeight: 600, color: '#64748B' }}>{f.value}</div>}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* Accreditations */}
//             {accreditations.length > 0 && (
//               <section style={{ padding: '0 32px 36px' }} className="content-pad">
//                 <SectionHead title="Recognition & Accreditations" sub="Globally accepted credentials for your medical career" />
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
//                   {accreditations.map((acc, i) => <VerifiedBadge key={i} label={acc} />)}
//                 </div>
//               </section>
//             )}

//             {/* Infrastructure */}
//             {infraItems.length > 0 && (
//               <section style={{ padding: '0 32px 36px' }} className="content-pad">
//                 <SectionHead title="Infrastructure" sub="Campus facilities by the numbers" />
//                 <div className="infra-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: '#E2E8F0', border: '1px solid #E2E8F0' }}>
//                   {infraItems.map((r, i) => (
//                     <div key={i} className="infra-cell">
//                       <div style={{ fontSize: 'clamp(18px,3vw,28px)', fontWeight: 800, color: '#FF6B35', letterSpacing: '-0.5px', marginBottom: 4 }}>{r.value}</div>
//                       <div style={{ fontSize: 10, fontWeight: 700, color: '#64748B', letterSpacing: '0.8px', textTransform: 'uppercase' }}>{r.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* Training Partners */}
//             {trainingPartners.length > 0 && (
//               <section style={{ padding: '0 32px 36px' }} className="content-pad">
//                 <SectionHead title="Training & Clinical Partners" sub="Where students get real-world exposure" />
//                 <div className="training-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 8 }}>
//                   {trainingPartners.map((tp, i) => (
//                     <div key={i} style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden' }}>
//                       <div style={{ padding: '9px 13px', background: '#1E3A5F', borderLeft: '4px solid #FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                         <span style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>{tp.type}</span>
//                         <span style={{ padding: '2px 9px', background: '#FF6B35', fontSize: 11, fontWeight: 700, color: '#fff' }}>{tp.count}+</span>
//                       </div>
//                       <div style={{ padding: '9px 13px', display: 'flex', flexWrap: 'wrap', gap: 5 }}>
//                         {(tp.notable ?? []).map((name, j) => (
//                           <span key={j} style={{ padding: '3px 9px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: 11, fontWeight: 600, color: '#1E3A5F' }}>{name}</span>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* Campus Life + Safety */}
//             <section style={{ padding: '0 32px 36px' }} className="content-pad">
//               <SectionHead title="Campus Life" sub="Beyond the classroom" />
//               <div className="campus-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
//                 <div style={{ border: '1px solid #E2E8F0', overflow: 'hidden' }}>
//                   <CardHeader label="Student Life" title="Clubs, Sports & Culture" />
//                   {[
//                     { label: 'Student Clubs',      value: studentLife.clubs != null ? `${studentLife.clubs} clubs` : null },
//                     { label: 'Cultural Events',    value: studentLife.culturalEvents != null ? `${studentLife.culturalEvents} events / year` : null },
//                     { label: 'Sports',             value: sportsAvailable.length > 0 ? sportsAvailable.join(', ') : null },
//                     { label: 'Indian Association', value: studentLife.indianAssociation != null ? (studentLife.indianAssociation ? 'Yes — active chapter' : 'Not available') : null },
//                   ].filter(r => r.value !== null).map((row, i) => (
//                     <div key={i} className="data-row">
//                       <span style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
//                       <span style={{ fontSize: 12, fontWeight: 700, color: '#1E3A5F', textAlign: 'right' }}>{row.value}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div style={{ border: '1px solid #E2E8F0', overflow: 'hidden' }}>
//                   <CardHeader label="Safety & Location" title="Your Security Matters" />
//                   {[
//                     { label: 'Safety Rating',   value: safetyRating.overall ?? null },
//                     { label: 'Campus Security', value: safetyRating.campusSecurity != null ? (safetyRating.campusSecurity ? '24/7 Security Guards' : 'Standard') : null },
//                     { label: '24/7 Support',    value: safetyRating.support247 != null ? (safetyRating.support247 ? 'Available round the clock' : 'Office hours only') : null },
//                     { label: 'Climate',         value: location.climate ?? null },
//                     { label: 'Nearest Airport', value: (location.nearestAirport && location.distanceKm != null) ? `${location.nearestAirport} · ${location.distanceKm} km` : (location.nearestAirport ?? null) },
//                   ].filter(r => r.value !== null).map((row, i) => (
//                     <div key={i} className="data-row">
//                       <span style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
//                       <span style={{ fontSize: 12, fontWeight: 700, color: '#1E3A5F', textAlign: 'right' }}>{row.value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>

//             {/* Facilities */}
//             {facilities.length > 0 && (
//               <section style={{ padding: '0 32px 36px' }} className="content-pad">
//                 <SectionHead title="Facilities" sub="What's available on campus" />
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
//                   {facilities.map((f, i) => <DocTag key={i}>{f}</DocTag>)}
//                 </div>
//               </section>
//             )}

//             {/* Placements */}
//             {uni.placements && (
//               <section style={{ padding: '0 32px 36px' }} className="content-pad">
//                 <SectionHead title="Placements" sub="Graduate outcomes and employer network" />
//                 <div style={{ border: '1px solid #E2E8F0', overflow: 'hidden' }}>
//                   <div style={{ display: 'flex', background: '#E2E8F0', gap: 1 }}>
//                     {[
//                       { label: 'Placement Rate', value: uni.placements.rate },
//                       ...(uni.placements.averagePackage ? [{ label: 'Avg Package', value: uni.placements.averagePackage }] : []),
//                       ...(uni.placements.highestPackage ? [{ label: 'Highest Package', value: uni.placements.highestPackage }] : []),
//                     ].map((s, i) => (
//                       <div key={i} style={{ flex: 1, padding: '16px 12px', background: '#fff', textAlign: 'center' }}>
//                         <div style={{ fontSize: 'clamp(16px,3vw,26px)', fontWeight: 800, color: '#FF6B35', letterSpacing: '-0.5px', marginBottom: 3 }}>{s.value}</div>
//                         <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', letterSpacing: '0.8px', textTransform: 'uppercase' }}>{s.label}</div>
//                       </div>
//                     ))}
//                   </div>
//                   {(uni.placements.topRecruiters ?? []).length > 0 && (
//                     <div style={{ padding: '12px 16px' }}>
//                       <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 8 }}>Top Recruiters</div>
//                       <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
//                         {(uni.placements.topRecruiters ?? []).map((r, i) => (
//                           <span key={i} style={{ padding: '3px 10px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: 11, fontWeight: 700, color: '#1E3A5F' }}>{r}</span>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </section>
//             )}

//             {/* Mid CTA */}
//             <section style={{ padding: '0 32px 36px' }} className="content-pad">
//               <div className="cta-banner">
//                 <div style={{ position: 'relative', zIndex: 1, flex: 1, minWidth: 200 }}>
//                   <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 6 }}>Your Seat Awaits</div>
//                   <h3 style={{ fontSize: 'clamp(15px,2.8vw,21px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.3px', marginBottom: 5 }}>
//                     Start your journey at {uni.shortName ?? uni.name}
//                   </h3>
//                   <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', fontWeight: 500, maxWidth: 360 }}>
//                     Expert counselors guide you from inquiry to enrollment — at zero cost.
//                   </p>
//                 </div>
//                 <button onClick={() => setIsModalOpen(true)} className="btn-white" style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>Get Free Counseling →</button>
//               </div>
//             </section>

//           </div>
//         )}

//         {/* ════════════════════════════════════════════
//             PROGRAMS
//         ════════════════════════════════════════════ */}
//         {activeTab === 'programs' && (
//           <div style={{ maxWidth: 1200, margin: '0 auto', padding: '36px 32px 60px' }} className="content-pad">
//             <SectionHead
//               title={`Programs at ${uni.shortName ?? uni.name}`}
//               sub={programs.length > 0 ? `${programs.length} program${programs.length !== 1 ? 's' : ''} offered` : 'Contact us for the latest program list'}
//             />
//             {programs.length > 0 ? (
//               <>
//                 <div className="prog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
//                   {programs.map((prog, i) => {
//                     const rows = [
//                       { label: 'Duration', value: prog.duration },
//                       { label: 'Seats',    value: prog.seats ? `${prog.seats} seats` : null },
//                       { label: 'Intakes',  value: (prog.intakes ?? []).length > 0 ? (prog.intakes ?? []).join(' · ') : null },
//                     ].filter(r => r.value !== null);
//                     return (
//                       <div key={i} className="prog-card">
//                         <div style={{ padding: '13px 14px', borderBottom: '1px solid #F1F5F9', borderLeft: '4px solid #FF6B35' }}>
//                           <div style={{ fontSize: 10, fontWeight: 700, color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 5 }}>{prog.category}</div>
//                           <h3 style={{ fontSize: 15, fontWeight: 800, color: '#1E3A5F', lineHeight: 1.2, marginBottom: 2 }}>{prog.degree}</h3>
//                           <div style={{ fontSize: 12, fontWeight: 600, color: '#64748B' }}>{prog.name}</div>
//                         </div>
//                         <div style={{ background: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
//                           {rows.map((row, j) => (
//                             <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 13px', background: '#fff', gap: 12 }}>
//                               <span style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', letterSpacing: '0.8px', textTransform: 'uppercase', flexShrink: 0 }}>{row.label}</span>
//                               <span style={{ fontSize: 12, fontWeight: 800, color: '#1E3A5F', textAlign: 'right' }}>{row.value}</span>
//                             </div>
//                           ))}
//                         </div>
//                         <div
//                           onClick={() => setIsModalOpen(true)}
//                           style={{ padding: '11px 13px', background: '#F8FAFC', fontSize: 10, fontWeight: 700, color: '#1E3A5F', letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s', borderTop: '1px solid #E2E8F0', minHeight: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//                           onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#FF6B35'; (e.currentTarget as HTMLDivElement).style.color = '#fff'; }}
//                           onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#F8FAFC'; (e.currentTarget as HTMLDivElement).style.color = '#1E3A5F'; }}
//                         >Enquire About This Program →</div>
//                       </div>
//                     );
//                   })}
//                 </div>
//                 {eligibleFor.length > 0 && (
//                   <div style={{ marginTop: 28 }}>
//                     <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 10 }}>Degree Eligible For</div>
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
//                       {eligibleFor.map((exam, i) => <CheckBadge key={i}>{exam}</CheckBadge>)}
//                     </div>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <div style={{ padding: '48px 24px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
//                 <h3 style={{ fontSize: 17, fontWeight: 800, color: '#1E3A5F', marginBottom: 8 }}>Program Details Coming Soon</h3>
//                 <p style={{ fontSize: 13, color: '#64748B', marginBottom: 18 }}>Contact us to get the full program list for {uni.name}.</p>
//                 <button onClick={() => setIsModalOpen(true)} className="btn-orange">Contact Us →</button>
//               </div>
//             )}
//           </div>
//         )}

//         {/* ════════════════════════════════════════════
//             ADMISSIONS
//         ════════════════════════════════════════════ */}
//         {activeTab === 'admissions' && (
//           <div style={{ maxWidth: 1200, margin: '0 auto', padding: '36px 32px 60px' }} className="content-pad">
//             <SectionHead title="Admissions" sub="Eligibility, documents, and the step-by-step process" />

//             {(eligibility.exam || eligibility.minScore || eligibility.minPercentage || eligibility.ageLimit || requiredDocs.length > 0) && (
//               <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 1, background: '#E2E8F0', border: '1px solid #E2E8F0', marginBottom: 28 }} className="elig-grid">
//                 <div style={{ background: '#fff', padding: '18px 18px 8px' }}>
//                   <div style={{ fontSize: 10, fontWeight: 700, color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 12 }}>Eligibility Criteria</div>
//                   {[
//                     { svg: SVG.book,          label: 'Exam Required',  value: eligibility.exam },
//                     { svg: SVG.barChart,      label: 'Min Score',      value: eligibility.minScore },
//                     { svg: SVG.graduationCap, label: 'Min Percentage', value: eligibility.minPercentage },
//                     { svg: SVG.calendar,      label: 'Age Limit',      value: eligibility.ageLimit },
//                   ].filter(e => e.value).map((item, i) => (
//                     <div key={i} className="elig-item">
//                       <div style={{ width: 30, height: 30, background: '#F0F4FF', borderLeft: '3px solid #FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.svg}</div>
//                       <div>
//                         <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 2 }}>{item.label}</div>
//                         <div style={{ fontSize: 13, fontWeight: 700, color: '#1E3A5F', lineHeight: 1.3 }}>{item.value}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{ background: '#fff', padding: 18 }}>
//                   <div style={{ fontSize: 10, fontWeight: 700, color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 12 }}>Required Documents</div>
//                   {requiredDocs.length > 0 ? (
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 16 }}>
//                       {requiredDocs.map((doc, i) => <DocTag key={i}>{doc}</DocTag>)}
//                     </div>
//                   ) : (
//                     <p style={{ fontSize: 13, color: '#64748B', marginBottom: 16 }}>Contact us for the full documents checklist.</p>
//                   )}
//                   <div style={{ padding: '12px 14px', border: '1px solid #E2E8F0', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
//                     <div>
//                       <div style={{ fontSize: 13, fontWeight: 700, color: '#1E3A5F', marginBottom: 2 }}>Need help with documents?</div>
//                       <div style={{ fontSize: 11, color: '#64748B' }}>Our team handles everything for you.</div>
//                     </div>
//                     <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ padding: '9px 18px', fontSize: 12, minHeight: 40 }}>Get Help →</button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {admissionSteps.length > 0 && (
//               <>
//                 <h3 style={{ fontSize: 16, fontWeight: 800, color: '#1E3A5F', marginBottom: 3 }}>Admission Process</h3>
//                 <p style={{ fontSize: 12, color: '#64748B', fontWeight: 500, marginBottom: 14 }}>Follow these steps to secure your seat</p>
//                 <div style={{ border: '1px solid #E2E8F0', overflow: 'hidden' }}>
//                   {admissionSteps.map((step, i) => (
//                     <div key={i} className="step-item">
//                       <div style={{ minWidth: 30, height: 30, background: i === 0 ? '#FF6B35' : '#F8FAFC', border: i === 0 ? 'none' : '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: i === 0 ? '#fff' : '#1E3A5F', flexShrink: 0 }}>
//                         {String(i + 1).padStart(2, '0')}
//                       </div>
//                       <p style={{ fontSize: 13, fontWeight: 600, color: '#1E3A5F', lineHeight: 1.55, margin: 0, paddingTop: 4 }}>{step}</p>
//                     </div>
//                   ))}
//                   <div style={{ padding: '14px 18px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
//                     <div style={{ flex: 1, minWidth: 160 }}>
//                       <div style={{ fontSize: 13, fontWeight: 700, color: '#1E3A5F', marginBottom: 2 }}>Ready to get started?</div>
//                       <div style={{ fontSize: 11, color: '#64748B' }}>Our counselors guide you through every step, free of charge.</div>
//                     </div>
//                     <button onClick={() => setIsModalOpen(true)} className="btn-orange">Start Application →</button>
//                   </div>
//                 </div>
//               </>
//             )}

//             {eligibleFor.length > 0 && (
//               <div style={{ marginTop: 28 }}>
//                 <h3 style={{ fontSize: 16, fontWeight: 800, color: '#1E3A5F', marginBottom: 3 }}>Exam Eligibility</h3>
//                 <p style={{ fontSize: 12, color: '#64748B', fontWeight: 500, marginBottom: 12 }}>Degrees from {uni.shortName ?? uni.name} are recognized for these licensing exams</p>
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
//                   {eligibleFor.map((exam, i) => <CheckBadge key={i}>{exam}</CheckBadge>)}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {/* ════════════════════════════════════════════
//             FEES
//         ════════════════════════════════════════════ */}
//         {activeTab === 'fees' && (
//           <div style={{ maxWidth: 1200, margin: '0 auto', padding: '36px 32px 60px' }} className="content-pad">
//             <SectionHead title="Fee Structure" sub="Complete cost breakdown for your planning" />
//             <div className="fee-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 290px', gap: 20, alignItems: 'start' }}>

//               <div>
//                 <div style={{ border: '1px solid #E2E8F0', overflow: 'hidden', marginBottom: 14 }}>
//                   <div style={{ padding: '11px 16px', background: '#1E3A5F', borderLeft: '4px solid #FF6B35' }}>
//                     <FieldLabel>Annual Breakdown</FieldLabel>
//                     <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', marginTop: 2 }}>{fees.currency ?? 'USD'} — Per Academic Year</div>
//                   </div>
//                   {fees.tuitionPerYear != null && (
//                     <div className="fee-row">
//                       <div style={{ flex: 1 }}>
//                         <div style={{ fontSize: 13, fontWeight: 700, color: '#1E3A5F' }}>Tuition Fee / Year</div>
//                         <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 600, marginTop: 1 }}>Academic fees per annum</div>
//                       </div>
//                       <div style={{ fontSize: 14, fontWeight: 800, color: '#1E3A5F', flexShrink: 0 }}>{fees.currency} {fees.tuitionPerYear.toLocaleString()}</div>
//                     </div>
//                   )}
//                   {fees.hostelPerYear != null && (
//                     <div className="fee-row">
//                       <div style={{ flex: 1 }}>
//                         <div style={{ fontSize: 13, fontWeight: 700, color: '#1E3A5F' }}>Hostel Fee / Year</div>
//                         <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 600, marginTop: 1 }}>Including meals / boarding</div>
//                       </div>
//                       <div style={{ fontSize: 14, fontWeight: 800, color: '#1E3A5F', flexShrink: 0 }}>{fees.currency} {fees.hostelPerYear.toLocaleString()}</div>
//                     </div>
//                   )}
//                   {fees.totalFirstYear != null && (
//                     <div style={{ padding: '11px 16px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
//                       <div>
//                         <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 1 }}>Total First Year</div>
//                         <div style={{ fontSize: 10, color: '#64748B' }}>All inclusive</div>
//                       </div>
//                       <div style={{ fontSize: 'clamp(15px,2.5vw,20px)', fontWeight: 800, color: '#1E3A5F' }}>{fees.currency} {fees.totalFirstYear.toLocaleString()}</div>
//                     </div>
//                   )}
//                   {fees.totalCourse != null && (
//                     <div style={{ padding: '11px 16px', background: '#1E3A5F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
//                       <div>
//                         <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.45)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 1 }}>Total Course Cost</div>
//                         <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>Complete {programs[0]?.duration ?? 'program'}</div>
//                       </div>
//                       <div style={{ fontSize: 'clamp(17px,2.5vw,24px)', fontWeight: 800, color: '#FF6B35' }}>{fees.currency} {fees.totalCourse.toLocaleString()}</div>
//                     </div>
//                   )}
//                 </div>

//                 {accommodation.available && (
//                   <div style={{ border: '1px solid #E2E8F0', overflow: 'hidden', marginBottom: 14 }}>
//                     <div style={{ padding: '11px 16px', borderBottom: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
//                       <div>
//                         <div style={{ fontSize: 13, fontWeight: 800, color: '#1E3A5F' }}>Accommodation</div>
//                         <div style={{ fontSize: 11, color: '#64748B', marginTop: 1 }}>On-campus hostel</div>
//                       </div>
//                       <div style={{ textAlign: 'right' }}>
//                         {accommodation.costPerYear != null && (
//                           <div style={{ fontSize: 14, fontWeight: 800, color: '#1E3A5F' }}>{fees.currency} {accommodation.costPerYear.toLocaleString()} <span style={{ fontSize: 10, color: '#94A3B8', fontWeight: 600 }}>/yr</span></div>
//                         )}
//                         {accommodation.capacity != null && (
//                           <div style={{ fontSize: 10, color: '#64748B', marginTop: 1 }}>Capacity: {accommodation.capacity.toLocaleString()}</div>
//                         )}
//                       </div>
//                     </div>
//                     {(accommodation.features ?? []).length > 0 && (
//                       <div style={{ padding: '9px 16px', display: 'flex', flexWrap: 'wrap', gap: 5 }}>
//                         {(accommodation.features ?? []).map((f, i) => (
//                           <span key={i} style={{ padding: '3px 9px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: 11, fontWeight: 600, color: '#1E3A5F' }}>{f}</span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 <div style={{ padding: '11px 14px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
//                   <span style={{ display: 'flex', flexShrink: 0, marginTop: 1 }}>{SVG.info}</span>
//                   <p style={{ fontSize: 11, color: '#64748B', fontWeight: 500, lineHeight: 1.6, margin: 0 }}>
//                     All fees are approximate and subject to change. Exchange rate fluctuations may affect the final amount. Contact our counselors for the most current fee structure before making any payment.
//                   </p>
//                 </div>
//               </div>

//               {/* Right sticky — Cost vs Value */}
//               <div className="fee-sticky" style={{ border: '1px solid #E2E8F0', position: 'sticky', top: 54 }}>
//                 <div style={{ padding: '11px 14px', background: '#FF6B35' }}>
//                   <FieldLabel>Why It's Worth It</FieldLabel>
//                   <div style={{ fontSize: 13, fontWeight: 800, color: '#FFFFF', marginTop: 2 }}>Cost vs Value</div>
//                 </div>
//                 {valueItems.map((item, i) => (
//                   <ValueRow key={i} svg={item.svg} label={item.label} value={item.value!} />
//                 ))}
//                 <div style={{ padding: '12px 14px', borderTop: '1px solid #F1F5F9' }}>
//                   <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ width: '100%' }}>Get Full Fee Breakdown →</button>
//                 </div>
//               </div>

//             </div>
//           </div>
//         )}

//         {/* ════════════════ FINAL CTA ════════════════ */}
//         <section style={{ position: 'relative', overflow: 'hidden' }}>
//           <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${galleryImages[0] ?? uni.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
//           <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,24,48,0.91)' }} />
//           <div className="final-cta-inner" style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '64px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
//             <div style={{ flex: 1, minWidth: 220 }}>
//               <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: 9 }}>Take the Next Step</div>
//               <h2 style={{ fontSize: 'clamp(22px,4vw,38px)', fontWeight: 800, color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, marginBottom: 10 }}>
//                 Your Medical Career<br /><span style={{ color: '#FF6B35' }}>Starts at {uni.shortName ?? uni.name}</span>
//               </h2>
//               <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', fontWeight: 500, maxWidth: 380 }}>
//                 Expert counselors guide you from first inquiry to enrollment — at zero cost.
//               </p>
//             </div>
//             <div className="final-cta-btns" style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 190 }}>
//               <button onClick={() => setIsModalOpen(true)} className="btn-orange">Apply Now →</button>
//               <Link href={`/destinations/${uni.countrySlug}`} className="btn-white" style={{ color: '#1E3A5F' }}>
//                 More in {uni.country}
//               </Link>
//             </div>
//           </div>
//         </section>

//       </div>
//       <Footer />
//     </>
//   );
// }
// // // "use client";
// // // import { useState } from 'react';
// // // import LeadFormModal from '../components/LeadForm';
// // // import React from 'react';
// // // import Image from 'next/image';
// // // import Link from 'next/link';
// // // import { 
// // //   MapPin, Calendar, Building2, GraduationCap, Users, Award,
// // //   CheckCircle2, DollarSign, FileText, Globe, Plane, CloudSun,
// // //   BookOpen, FlaskConical, Hospital, Home, Shield, Trophy,
// // //   Briefcase, Target, TrendingUp, ArrowRight, Download,
// // //   School, Lightbulb, Cpu, Building, BarChart3, Percent
// // // } from 'lucide-react';
// // // import { University } from '../data/universityData';
// // // import Navbar from '../components/Navbar';
// // // import Footer from '../components/Footer';

// // // export const revalidate = 60; // revalidate every 60 seconds
// // // interface UniversityPageProps {
// // //   universitySlug: string;
// // //   universityData: University;
// // // }

// // // export default function UniversityPage({ universitySlug, universityData }: UniversityPageProps) {
// // //   const uni = universityData;
// // // const [isModalOpen, setIsModalOpen] = useState(false);
// // //   return (<>
// // //     <main className="min-h-screen pt-5 bg-white">
// // //   <Navbar/>
      
// // //       {/* HERO SECTION - Full Image Left | Data Right (Desktop) / Data Only (Mobile) */}
// // //       <section className="relative flex flex-col md:flex-row h-screen">
        
// // //         {/* LEFT - FULL IMAGE SIDE (Hidden on mobile, visible on desktop) */}
// // //         <div className="relative hidden md:block md:w-1/2 h-1/2 md:h-full">
// // //           <Image
// // //             src={uni.heroImage}
// // //             alt={uni.name}
// // //             fill
// // //             className="object-cover"
// // //             priority
// // //           />
// // //           {/* Subtle gradient overlay for better aesthetics */}
// // //           <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          
// // //           {/* University Logo Badge - Bottom Left (Desktop only) */}
// // //           {uni.logo && (
// // //             <div className="absolute bottom-6 left-6 bg-white p-3 shadow-xl">
// // //               <Image
// // //                 src={uni.logo}
// // //                 alt={`${uni.name} logo`}
// // //                 width={64}
// // //                 height={64}
// // //                 className="w-12 h-12 md:w-16 md:h-16 object-contain"
// // //               />
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* DIVIDER (Hidden on mobile, visible on desktop) */}
// // //         <div className="hidden md:block w-1 bg-[#FF6B35]" />

// // //         {/* RIGHT - University Info (Full width on mobile, half on desktop) */}
// // //         <div className="w-full md:w-1/2 h-full bg-gradient-to-br from-[#1E3A5F] via-[#2A4A6F] to-[#1E3A5F] text-white relative overflow-hidden">
// // //           {/* Background Pattern */}
// // //           <div className="absolute inset-0 opacity-5">
// // //             <div className="absolute inset-0" style={{
// // //               backgroundImage: `
// // //                 linear-gradient(90deg, white 1px, transparent 1px),
// // //                 linear-gradient(0deg, white 1px, transparent 1px)
// // //               `,
// // //               backgroundSize: '60px 60px'
// // //             }} />
// // //           </div>

// // //           <div className="relative z-10 px-6 md:px-10 lg:px-12 py-8 md:py-10 h-full flex flex-col justify-center overflow-y-auto">
// // //             <div className="space-y-4 max-w-3xl md:max-w-xl mx-auto md:mx-0 w-full">
            
// // //             {/* University Logo - Mobile Only */}
// // //             {uni.logo && (
// // //               <div className="md:hidden mb-6 flex justify-center">
// // //                 <div className="bg-white/10 backdrop-blur-sm p-5 border-l-4 border-[#FF6B35]">
// // //                   <Image
// // //                     src={uni.logo}
// // //                     alt={`${uni.name} logo`}
// // //                     width={80}
// // //                     height={80}
// // //                     className="w-16 h-16 object-contain"
// // //                   />
// // //                 </div>
// // //               </div>
// // //             )}
            
// // //             {/* University Name */}
// // //             <div>
                
// // //                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-2 leading-tight tracking-tight text-center md:text-left">
// // //                   {uni.name}
// // //                 </h1>
// // //                 <p className="text-base md:text-lg text-slate-200 font-medium border-l-4 border-[#FF6B35] pl-6 md:pl-4 max-w-2xl md:max-w-none mx-auto md:mx-0">
// // //                   {uni.tagline}
// // //                 </p>
// // //               </div>

// // //               {/* Quick Info Tags */}
// // //               <div className="grid grid-cols-3 gap-3 md:gap-2 max-w-2xl md:max-w-none mx-auto md:mx-0">
// // //                 <div className="bg-white/10 backdrop-blur-sm p-4 md:p-3 border-l-4 border-[#FF6B35]">
// // //                   <MapPin className="w-5 md:w-4 h-5 md:h-4 text-[#FF6B35] mb-2 md:mb-1 mx-auto md:mx-0" />
// // //                   <div className="text-xs font-bold text-slate-300 uppercase tracking-wider text-center md:text-left">Location</div>
// // //                   <div className="font-bold mt-1 text-sm md:text-xs text-center md:text-left">{uni.city}</div>
// // //                 </div>
// // //                 <div className="bg-white/10 backdrop-blur-sm p-4 md:p-3 border-l-4 border-[#FF6B35]">
// // //                   <Calendar className="w-5 md:w-4 h-5 md:h-4 text-[#FF6B35] mb-2 md:mb-1 mx-auto md:mx-0" />
// // //                   <div className="text-xs font-bold text-slate-300 uppercase tracking-wider text-center md:text-left">Founded</div>
// // //                   <div className="font-bold mt-1 text-sm md:text-xs text-center md:text-left">{uni.establishedYear}</div>
// // //                 </div>
// // //                 <div className="bg-white/10 backdrop-blur-sm p-4 md:p-3 border-l-4 border-[#FF6B35]">
// // //                   <Building2 className="w-5 md:w-4 h-5 md:h-4 text-[#FF6B35] mb-2 md:mb-1 mx-auto md:mx-0" />
// // //                   <div className="text-xs font-bold text-slate-300 uppercase tracking-wider text-center md:text-left">Type</div>
// // //                   <div className="font-bold mt-1 text-sm md:text-xs text-center md:text-left">{uni.universityType}</div>
// // //                 </div>
// // //               </div>

// // //               {/* Stats Grid */}
// // //               <div className="grid grid-cols-2 gap-4 md:gap-3 max-w-4xl md:max-w-none mx-auto md:mx-0">
// // //                 {uni.stats.passRate && (
// // //                   <StatCard 
// // //                     icon={<Target className="w-5 h-5" />} 
// // //                     value={uni.stats.passRate} 
// // //                     label="Success Rate" 
// // //                   />
// // //                 )}
// // //                 <StatCard 
// // //                   icon={<Users className="w-5 h-5" />} 
// // //                   value={uni.stats.totalStudents.toLocaleString()} 
// // //                   label="Students" 
// // //                 />
// // //                 <StatCard 
// // //                   icon={<BarChart3 className="w-5 h-5" />} 
// // //                   value={uni.stats.facultyRatio} 
// // //                   label="Faculty Ratio" 
// // //                 />
// // //                 {uni.ranking.globalRank && (
// // //                   <StatCard 
// // //                     icon={<Trophy className="w-5 h-5" />} 
// // //                     value={`Top ${uni.ranking.globalRank}`} 
// // //                     label="Global Rank" 
// // //                   />
// // //                 )}
// // //               </div>

// // //               {/* Accreditations */}
// // //               {uni.accreditations.length > 0 && (
// // //                 <div className="space-y-3 md:space-y-2 max-w-3xl md:max-w-none mx-auto md:mx-0">
// // //                   <h3 className="text-xs font-black text-slate-300 uppercase tracking-widest text-center md:text-left">
// // //                     Accreditations & Recognition
// // //                   </h3>
// // //                   <div className="flex flex-wrap gap-2 justify-center md:justify-start">
// // //                     {uni.accreditations.map((acc, idx) => (
// // //                       <div key={idx} className="flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1 border-l-4 border-green-500">
// // //                         <CheckCircle2 className="w-3 h-3" />
// // //                         <span className="text-xs font-bold">{acc}</span>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               {/* CTA Buttons */}
// // //               <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
// // //                 <Link 
// // //                 onClick={() => setIsModalOpen(true)}
// // //                   href="#apply"
// // //                   className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#ff5722] text-white px-8 md:px-6 py-3 md:py-2.5 font-black uppercase text-sm md:text-xs tracking-wider transition-all shadow-lg hover:shadow-xl hover:translate-x-1 group"
// // //                 >
// // //                   APPLY NOW
// // //                   <ArrowRight className="w-5 md:w-4 h-5 md:h-4 group-hover:translate-x-1 transition-transform" />
// // //                 </Link>
               
// // //               </div>
// // //             </div>

// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* UNIFIED WHITE BACKGROUND CONTAINER - All sections flow together */}
// // //       <div className="bg-white relative overflow-hidden">
        
// // //         {/* CONTINUOUS BACKDROP EFFECTS - Span across entire white container */}
// // //         <div className="absolute top-0 right-0 w-[900px] h-[600px] bg-gradient-to-bl from-[#FF6B35]/25 via-[#FF6B35]/15 to-transparent transform skew-x-12 blur-xl" />
// // //         <div className="absolute top-1/4 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[#1E3A5F]/20 via-[#1E3A5F]/10 to-transparent rounded-full blur-2xl" />
// // //         <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-gradient-to-l from-[#FF6B35]/20 via-[#FF6B35]/8 to-transparent rounded-full blur-2xl" />
// // //         <div className="absolute bottom-0 left-1/4 w-[800px] h-[500px] bg-gradient-to-br from-[#1E3A5F]/25 via-[#1E3A5F]/12 to-transparent transform -skew-y-6 blur-xl" />
        
// // //         {/* KEY FEATURES - Asymmetric Luxury Grid */}
// // //         {uni.keyFeatures.length > 0 && (
// // //           <section className="py-12 relative z-10">
            
// // //             <div className="container mx-auto px-6">
// // //               <div className="max-w-7xl mx-auto">
// // //               {/* Section Header - Offset Layout */}
// // //               <div className="grid md:grid-cols-2 gap-6 mb-10">
// // //                 <div>
// // //                   <div className="flex items-center gap-3 mb-2">
// // //                     <div className="h-1 w-10 bg-[#FF6B35]" />
// // //                     <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Excellence Defined</span>
// // //                   </div>
// // //                   <h2 className="text-3xl md:text-4xl font-black text-[#1E3A5F] tracking-tight leading-tight">
// // //                     Why Choose<br />{uni.shortName || uni.name}?
// // //                   </h2>
// // //                 </div>
// // //                 <div className="flex items-end">
// // //                   <p className="text-sm text-slate-600 font-medium leading-relaxed border-l-4 border-[#FF6B35] pl-4">
// // //                     Discover what sets us apart in delivering world-class education and unparalleled opportunities.
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               {/* Asymmetric Feature Grid */}
// // //               <div className="grid md:grid-cols-3 gap-4">
// // //                 {/* First Feature - Large Featured Card */}
// // //                 {uni.keyFeatures[0] && (
// // //                   <div className="md:col-span-2 md:row-span-2">
// // //                     <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] p-8 h-full shadow-2xl border-l-8 border-[#FF6B35] group hover:scale-[1.02] transition-transform duration-300">
// // //                       <div className="text-[#FF6B35] mb-5">
// // //                         {getFeaturedIcon(uni.keyFeatures[0].icon)}
// // //                       </div>
// // //                       <h3 className="font-black text-white mb-3 text-xl uppercase tracking-wide leading-tight">
// // //                         {uni.keyFeatures[0].label}
// // //                       </h3>
// // //                       {uni.keyFeatures[0].value && (
// // //                         <p className="text-4xl font-black text-[#FF6B35] mb-3">{uni.keyFeatures[0].value}</p>
// // //                       )}
// // //                       <div className="w-16 h-1 bg-[#FF6B35] mt-4" />
// // //                     </div>
// // //                   </div>
// // //                 )}
                
// // //                 {/* Remaining Features - Compact Cards */}
// // //                 {uni.keyFeatures.slice(1, 5).map((feature, idx) => (
// // //                   <div key={idx} className="bg-white p-5 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-[#FF6B35] group">
// // //                     <div className="text-[#FF6B35] mb-3 group-hover:scale-110 transition-transform">
// // //                       {getCompactIcon(feature.icon)}
// // //                     </div>
// // //                     <h3 className="font-black text-[#1E3A5F] mb-2 text-sm uppercase tracking-wide">{feature.label}</h3>
// // //                     {feature.value && <p className="text-xl font-black text-[#FF6B35]">{feature.value}</p>}
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>
// // //         )}

// // //         {/* PROGRAMS OFFERED - Zigzag Luxury Layout */}
// // //         {uni.programs.length > 0 && (
// // //           <section className="py-12 relative z-10">
            
// // //             <div className="container mx-auto px-6">
// // //               <div className="max-w-7xl mx-auto">
// // //               {/* Section Header - Centered with Accent */}
// // //               <div className="text-center mb-12">
// // //                 <div className="flex items-center justify-center gap-3 mb-3">
// // //                   <div className="h-1 w-12 bg-[#FF6B35]" />
// // //                   <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Academic Excellence</span>
// // //                   <div className="h-1 w-12 bg-[#FF6B35]" />
// // //                 </div>
// // //                 <h2 className="text-3xl md:text-4xl font-black text-[#1E3A5F] tracking-tight mb-3">
// // //                   Programs Offered
// // //                 </h2>
// // //                 <p className="text-base text-slate-600 max-w-2xl mx-auto">
// // //                   Cutting-edge curricula designed to shape future leaders
// // //                 </p>
// // //               </div>

// // //               {/* Programs Grid - Staggered Cards */}
// // //               <div className="space-y-5">
// // //                 {uni.programs.map((program, idx) => (
// // //                   <div 
// // //                     key={idx} 
// // //                     className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
// // //                   >
// // //                     <div className={`w-full ${idx % 2 === 0 ? 'md:w-4/5' : 'md:w-4/5'} bg-white shadow-xl hover:shadow-2xl transition-all border-l-8 ${idx % 2 === 0 ? 'border-[#FF6B35]' : 'border-[#1E3A5F]'} group`}>
// // //                       <div className="grid md:grid-cols-3 gap-4 p-6">
// // //                         {/* Left - Program Info */}
// // //                         <div className="md:col-span-2 space-y-3">
// // //                           <div className="flex items-start justify-between gap-3">
// // //                             <div className={`${idx % 2 === 0 ? 'bg-[#FF6B35]' : 'bg-[#1E3A5F]'} p-3`}>
// // //                               <GraduationCap className="w-7 h-7 text-white" />
// // //                             </div>
// // //                             <div className={`${idx % 2 === 0 ? 'bg-[#1E3A5F]' : 'bg-[#FF6B35]'} text-white px-4 py-1 text-xs font-black uppercase tracking-widest`}>
// // //                               {program.category}
// // //                             </div>
// // //                           </div>
// // //                           <h3 className="text-2xl font-black text-[#1E3A5F] leading-tight">{program.name}</h3>
// // //                           <p className="text-base text-slate-600 font-bold">{program.degree} • {program.duration}</p>
// // //                         </div>

// // //                         {/* Right - Quick Details */}
// // //                         <div className="space-y-2">
// // //                           <div className="bg-slate-50 p-3 border-l-4 border-[#FF6B35]">
// // //                             <div className="flex items-center gap-2 mb-1">
// // //                               <Calendar className="w-4 h-4 text-[#FF6B35]" />
// // //                               <span className="text-xs font-black text-slate-600 uppercase tracking-wider">Intakes</span>
// // //                             </div>
// // //                             <span className="font-bold text-[#1E3A5F] text-sm">{program.intakes.join(', ')}</span>
// // //                           </div>
// // //                           {program.seats && (
// // //                             <div className="bg-slate-50 p-3 border-l-4 border-[#FF6B35]">
// // //                               <div className="flex items-center gap-2 mb-1">
// // //                                 <Users className="w-4 h-4 text-[#FF6B35]" />
// // //                                 <span className="text-xs font-black text-slate-600 uppercase tracking-wider">Seats</span>
// // //                               </div>
// // //                               <span className="font-bold text-[#1E3A5F] text-sm">{program.seats} Available</span>
// // //                             </div>
// // //                           )}
// // //                           <button className="w-full bg-[#1E3A5F] hover:bg-[#FF6B35] text-white py-2.5 font-black uppercase text-xs tracking-wider transition-all">
// // //                             LEARN MORE
// // //                           </button>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>
// // //       )}
      
// // //       </div>
// // //       {/* END OF FIRST UNIFIED WHITE BACKGROUND CONTAINER */}

// // //       {/* FEES & COSTS - Dramatic Backdrop Layout */}
// // //       {uni.fees && (
// // //         <section className="relative py-16 overflow-hidden">
// // //           {/* Background Image with Overlay */}
// // //           <div className="absolute inset-0">
// // //             <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/90 to-[#1E3A5F]/95 z-10" />
// // //             {uni.galleryImages[0] && (
// // //               <Image
// // //                 src={uni.galleryImages[0]}
// // //                 alt="Campus background"
// // //                 fill
// // //                 className="object-cover"
// // //               />
// // //             )}
// // //           </div>

// // //           <div className="container mx-auto px-6 relative z-20">
// // //             <div className="max-w-6xl mx-auto">
// // //               {/* Header */}
// // //               <div className="text-center mb-10">
// // //                 <div className="flex items-center justify-center gap-3 mb-3">
// // //                   <div className="h-1 w-12 bg-[#FF6B35]" />
// // //                   <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Investment in Your Future</span>
// // //                   <div className="h-1 w-12 bg-[#FF6B35]" />
// // //                 </div>
// // //                 <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
// // //                   Fees & Costs
// // //                 </h2>
// // //                 <p className="text-base text-slate-300 max-w-2xl mx-auto">
// // //                   Transparent pricing for exceptional education
// // //                 </p>
// // //               </div>

// // //               {/* Fee Grid - Split Layout */}
// // //               <div className="grid md:grid-cols-2 gap-5">
// // //                 {/* Left - Main Fees */}
// // //                 <div className="bg-white/10 backdrop-blur-md p-7 border-l-8 border-[#FF6B35] shadow-2xl">
// // //                   <h3 className="text-xl font-black text-white mb-5 uppercase tracking-wider">Annual Breakdown</h3>
// // //                   <div className="space-y-4">
// // //                     <div className="pb-3 border-b-2 border-white/20">
// // //                       <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-1">Tuition Fee</div>
// // //                       <div className="text-3xl font-black text-white">{uni.fees.currency} {uni.fees.tuitionPerYear.toLocaleString()}</div>
// // //                     </div>
// // //                     <div className="pb-3 border-b-2 border-white/20">
// // //                       <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-1">Hostel Fee</div>
// // //                       <div className="text-2xl font-black text-white">{uni.fees.currency} {uni.fees.hostelPerYear.toLocaleString()}</div>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Right - Total Costs */}
// // //                 <div className="space-y-4">
// // //                   <div className="bg-[#FF6B35] p-7 shadow-2xl">
// // //                     <div className="text-xs font-bold text-white/80 uppercase tracking-widest mb-2">First Year Investment</div>
// // //                     <div className="text-4xl font-black text-white mb-2">{uni.fees.currency} {uni.fees.totalFirstYear.toLocaleString()}</div>
// // //                     <div className="w-16 h-1 bg-white/50" />
// // //                   </div>
// // //                   <div className="bg-white/10 backdrop-blur-md p-7 border-l-8 border-white shadow-2xl">
// // //                     <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">Complete Program</div>
// // //                     <div className="text-4xl font-black text-white mb-2">{uni.fees.currency} {uni.fees.totalCourse.toLocaleString()}</div>
// // //                     <div className="w-16 h-1 bg-[#FF6B35]" />
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Payment Note */}
// // //               <div className="mt-8 text-center">
// // //                 <p className="text-sm text-slate-300 font-medium">
// // //                   Flexible payment plans available • Scholarships offered to eligible students
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>
          
// // //           {/* Seamless transition overlay to next section - REMOVED for clean separation */}
// // //         </section>
// // //       )}

// // //       {/* SECOND UNIFIED WHITE BACKGROUND CONTAINER - Eligibility & Facilities flow together */}
// // //       <div className="bg-white relative overflow-hidden">

// // //         {/* CONTINUOUS BACKDROP EFFECTS - Span across entire white container */}
// // //         <div className="absolute -right-32 top-1/3 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-[#FF6B35]/30 via-[#FF6B35]/15 via-[#1E3A5F]/10 to-transparent blur-2xl" />
// // //         <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-[#1E3A5F]/25 via-[#1E3A5F]/12 to-transparent rounded-full blur-2xl" />
// // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FF6B35]/20 via-[#FF6B35]/8 to-transparent rounded-full blur-xl" />

// // //         {/* ELIGIBILITY CRITERIA - Split Luxury Layout */}
// // //         {uni.eligibility && (
// // //           <section className="py-12 relative z-10">
            
// // //             <div className="container mx-auto px-6">
// // //               <div className="max-w-7xl mx-auto">
              
// // //               <div className="grid md:grid-cols-5 gap-8 items-start">
// // //                 {/* Left - Visual Element */}
// // //                 <div className="md:col-span-2">
// // //                   <div className="sticky top-24">
// // //                     <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] p-10 border-l-8 border-[#FF6B35] shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col justify-between">
// // //                       {/* Bold Inner Accent */}
// // //                       <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B35]/20 rounded-full blur-2xl" />
                      
// // //                       <div className="relative z-10">
// // //                         <div className="flex items-center gap-3 mb-4">
// // //                           <div className="h-1 w-10 bg-[#FF6B35]" />
// // //                           <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Requirements</span>
// // //                         </div>
// // //                         <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
// // //                           Eligibility<br />Criteria
// // //                         </h2>
// // //                         <p className="text-slate-300 text-base leading-relaxed mb-8">
// // //                           Meet these requirements to begin your journey towards academic excellence and secure your place in our prestigious programs.
// // //                         </p>
// // //                         <div className="w-24 h-1 bg-[#FF6B35] mb-10" />
                        
// // //                         {/* Additional Visual Stats */}
// // //                         <div className="space-y-6 pt-6 border-t border-white/10">
// // //                           <div className="flex items-center gap-4">
// // //                             <div className="bg-[#FF6B35]/20 p-4">
// // //                               <CheckCircle2 className="w-8 h-8 text-[#FF6B35]" />
// // //                             </div>
// // //                             <div>
// // //                               <p className="text-white font-black text-2xl">Fast Processing</p>
// // //                               <p className="text-slate-300 text-sm">Quick admission decisions</p>
// // //                             </div>
// // //                           </div>
                          
// // //                           <div className="flex items-center gap-4">
// // //                             <div className="bg-white/10 p-4">
// // //                               <Users className="w-8 h-8 text-white" />
// // //                             </div>
// // //                             <div>
// // //                               <p className="text-white font-black text-2xl">Expert Support</p>
// // //                               <p className="text-slate-300 text-sm">Guidance throughout process</p>
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Right - Criteria Cards */}
// // //                 <div className="md:col-span-3 space-y-4">
// // //                   {uni.eligibility.exam && (
// // //                     <div className="bg-white p-6 shadow-lg border-l-8 border-[#FF6B35] hover:shadow-xl transition-all group">
// // //                       <div className="flex items-start gap-4">
// // //                         <div className="bg-[#FF6B35]/10 p-3 group-hover:scale-110 transition-transform">
// // //                           <FileText className="w-6 h-6 text-[#FF6B35]" />
// // //                         </div>
// // //                         <div className="flex-1">
// // //                           <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">Required Exam</span>
// // //                           <p className="text-xl font-black text-[#1E3A5F]">{uni.eligibility.exam}</p>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   )}
                  
// // //                   {uni.eligibility.minScore && (
// // //                     <div className="bg-white p-6 shadow-lg border-l-8 border-[#1E3A5F] hover:shadow-xl transition-all group">
// // //                       <div className="flex items-start gap-4">
// // //                         <div className="bg-[#1E3A5F]/10 p-3 group-hover:scale-110 transition-transform">
// // //                           <BarChart3 className="w-6 h-6 text-[#1E3A5F]" />
// // //                         </div>
// // //                         <div className="flex-1">
// // //                           <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">Minimum Score</span>
// // //                           <p className="text-xl font-black text-[#1E3A5F]">{uni.eligibility.minScore}</p>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   )}

// // //                   <div className="bg-white p-6 shadow-lg border-l-8 border-[#FF6B35] hover:shadow-xl transition-all group">
// // //                     <div className="flex items-start gap-4">
// // //                       <div className="bg-[#FF6B35]/10 p-3 group-hover:scale-110 transition-transform">
// // //                         <Percent className="w-6 h-6 text-[#FF6B35]" />
// // //                       </div>
// // //                       <div className="flex-1">
// // //                         <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">Minimum Percentage</span>
// // //                         <p className="text-xl font-black text-[#1E3A5F]">{uni.eligibility.minPercentage}</p>
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {uni.eligibility.ageLimit && (
// // //                     <div className="bg-white p-6 shadow-lg border-l-8 border-[#1E3A5F] hover:shadow-xl transition-all group">
// // //                       <div className="flex items-start gap-4">
// // //                         <div className="bg-[#1E3A5F]/10 p-3 group-hover:scale-110 transition-transform">
// // //                           <Calendar className="w-6 h-6 text-[#1E3A5F]" />
// // //                         </div>
// // //                         <div className="flex-1">
// // //                           <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">Age Limit</span>
// // //                           <p className="text-xl font-black text-[#1E3A5F]">{uni.eligibility.ageLimit}</p>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   )}

// // //                   {/* Required Documents */}
// // //                   {uni.eligibility.requiredDocs.length > 0 && (
// // //                     <div className="bg-gradient-to-br from-slate-50 to-white p-6 border-l-8 border-[#FF6B35] shadow-lg">
// // //                       <h3 className="text-xs font-black text-slate-600 uppercase tracking-widest mb-4">Required Documents</h3>
// // //                       <div className="grid grid-cols-2 gap-3">
// // //                         {uni.eligibility.requiredDocs.map((doc, idx) => (
// // //                           <div key={idx} className="bg-white px-3 py-2 border-l-4 border-[#1E3A5F] shadow-sm hover:shadow-md transition-all">
// // //                             <span className="text-xs font-bold text-[#1E3A5F]">{doc}</span>
// // //                           </div>
// // //                         ))}
// // //                       </div>
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </div>

// // //             </div>
// // //           </div>
// // //         </section>
// // //       )}

// // //         {/* FACILITIES - Masonry Grid Layout */}
// // //         {uni.facilities.length > 0 && (
// // //           <section className="py-12 relative z-10">
            
// // //             <div className="container mx-auto px-6">
// // //               <div className="max-w-7xl mx-auto">
// // //               <div className="text-center mb-10">
// // //                 <div className="flex items-center justify-center gap-3 mb-3">
// // //                   <div className="h-1 w-12 bg-[#FF6B35]" />
// // //                   <span className="text-xs font-black text-slate-600 uppercase tracking-widest">World-Class Infrastructure</span>
// // //                   <div className="h-1 w-12 bg-[#FF6B35]" />
// // //                 </div>
// // //                 <h2 className="text-3xl md:text-4xl font-black text-[#1E3A5F] tracking-tight">
// // //                   Campus Facilities
// // //                 </h2>
// // //               </div>

// // //               {/* Facility Grid - Varying Heights for Visual Interest */}
// // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
// // //                 {uni.facilities.map((facility, idx) => (
// // //                   <div 
// // //                     key={idx} 
// // //                     className={`bg-gradient-to-br from-slate-50 to-white p-4 shadow-lg hover:shadow-xl transition-all border-l-4 ${
// // //                       idx % 3 === 0 ? 'border-[#FF6B35] md:row-span-2' : 'border-[#1E3A5F]'
// // //                     } group hover:border-[#FF6B35] ${idx % 3 === 0 ? 'flex flex-col justify-center' : ''}`}
// // //                   >
// // //                     <div className={`text-[#FF6B35] group-hover:scale-110 transition-transform ${idx % 3 === 0 ? 'mb-4' : 'mb-3'}`}>
// // //                       {getFacilityIcon(facility, idx % 3 === 0)}
// // //                     </div>
// // //                     <span className={`text-[#1E3A5F] font-black uppercase tracking-wide ${idx % 3 === 0 ? 'text-base' : 'text-xs'}`}>
// // //                       {facility}
// // //                     </span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>
// // //       )}
      
// // //       </div>
// // //       {/* END OF SECOND UNIFIED WHITE BACKGROUND CONTAINER */}

// // //       {/* GALLERY - Full-Width Cinematic Layout */}
// // //       {uni.galleryImages.length > 0 && (
// // //         <section className="py-0 bg-black">
// // //           <div className="relative">
// // //             {/* Section Header Overlay */}
// // //             <div className="absolute top-0 left-0 right-0 z-20 pt-16 pb-10">
// // //               <div className="container mx-auto px-6">
// // //                 <div className="max-w-4xl">
// // //                   <div className="flex items-center gap-3 mb-3">
// // //                     <div className="h-1 w-12 bg-[#FF6B35]" />
// // //                     <span className="text-xs font-black text-white uppercase tracking-widest">Experience Campus Life</span>
// // //                   </div>
// // //                   <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
// // //                     Campus Gallery
// // //                   </h2>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Gallery Grid - Cinematic */}
// // //             <div className="grid md:grid-cols-2 gap-1">
// // //               {uni.galleryImages.slice(0, 4).map((img, idx) => (
// // //                 <div 
// // //                   key={idx} 
// // //                   className={`relative group overflow-hidden ${
// // //                     idx === 0 ? 'md:col-span-2 h-[400px]' : 'h-[300px]'
// // //                   }`}
// // //                 >
// // //                   <Image
// // //                     src={img}
// // //                     alt={`${uni.name} campus ${idx + 1}`}
// // //                     fill
// // //                     className="object-cover transform group-hover:scale-105 transition-transform duration-700"
// // //                   />
// // //                   {/* Gradient Overlay */}
// // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
// // //                   {/* Overlay Content */}
// // //                   <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
// // //                     <div className="w-12 h-1 bg-[#FF6B35] mb-2" />
// // //                     <p className="text-white font-black text-lg uppercase tracking-wide">
// // //                       {idx === 0 ? 'Main Campus' : idx === 1 ? 'Academic Block' : idx === 2 ? 'Research Labs' : 'Student Life'}
// // //                     </p>
// // //                     <p className="text-slate-300 text-sm mt-1">Explore our state-of-the-art facilities</p>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>
// // //       )}
// // // <LeadFormModal
// // //      isOpen={isModalOpen}
// // //      onClose={() => setIsModalOpen(false)}
// // //      universitySlug={universitySlug}
// // //      universityName={uni.name}
// // //    />
// // //     </main>
// // //     <Footer/>
// // //     </>
// // //   );
// // // }

// // // // ============================================
// // // // SUB-COMPONENTS - Luxury Sharp Design
// // // // ============================================

// // // function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
// // //   return (
// // //     <div className="bg-white/10 backdrop-blur-sm p-4 border-l-4 border-[#FF6B35] hover:bg-white/20 transition-all group">
// // //       <div className="text-[#FF6B35] mb-2 group-hover:scale-110 transition-transform flex justify-center md:justify-start">
// // //         {icon}
// // //       </div>
// // //       <div className="text-2xl md:text-3xl font-black mb-1 text-center md:text-left">{value}</div>
// // //       <div className="text-xs font-bold text-slate-300 uppercase tracking-widest text-center md:text-left">{label}</div>
// // //     </div>
// // //   );
// // // }

// // // // Icon Helper Functions for New Layouts
// // // function getFeaturedIcon(iconName: string) {
// // //   const icons: { [key: string]: React.ReactNode } = {
// // //     'trophy': <Trophy className="w-12 h-12" />,
// // //     'briefcase': <Briefcase className="w-12 h-12" />,
// // //     'flask': <FlaskConical className="w-12 h-12" />,
// // //     'globe': <Globe className="w-12 h-12" />,
// // //     'award': <Award className="w-12 h-12" />,
// // //     'target': <Target className="w-12 h-12" />,
// // //     'school': <School className="w-12 h-12" />,
// // //     'lightbulb': <Lightbulb className="w-12 h-12" />,
// // //   };
// // //   return icons[iconName.toLowerCase()] || <Award className="w-12 h-12" />;
// // // }

// // // function getCompactIcon(iconName: string) {
// // //   const icons: { [key: string]: React.ReactNode } = {
// // //     'trophy': <Trophy className="w-7 h-7" />,
// // //     'briefcase': <Briefcase className="w-7 h-7" />,
// // //     'flask': <FlaskConical className="w-7 h-7" />,
// // //     'globe': <Globe className="w-7 h-7" />,
// // //     'award': <Award className="w-7 h-7" />,
// // //     'target': <Target className="w-7 h-7" />,
// // //     'school': <School className="w-7 h-7" />,
// // //     'lightbulb': <Lightbulb className="w-7 h-7" />,
// // //   };
// // //   return icons[iconName.toLowerCase()] || <Award className="w-7 h-7" />;
// // // }

// // // function getFacilityIcon(facilityName: string, isLarge: boolean = false) {
// // //   const size = isLarge ? "w-8 h-8" : "w-5 h-5";
// // //   const lower = facilityName.toLowerCase();
  
// // //   if (lower.includes('library')) return <BookOpen className={size} />;
// // //   if (lower.includes('lab')) return <FlaskConical className={size} />;
// // //   if (lower.includes('hospital')) return <Hospital className={size} />;
// // //   if (lower.includes('hostel') || lower.includes('accommodation')) return <Home className={size} />;
// // //   if (lower.includes('sports') || lower.includes('gym')) return <Trophy className={size} />;
// // //   if (lower.includes('wifi') || lower.includes('internet')) return <Globe className={size} />;
// // //   if (lower.includes('security')) return <Shield className={size} />;
// // //   if (lower.includes('research')) return <Lightbulb className={size} />;
// // //   if (lower.includes('computer')) return <Cpu className={size} />;
// // //   return <Building className={size} />;
// // // }

// // // function FeatureCard({ icon, label, value }: { icon: string; label: string; value?: string }) {
// // //   const getIcon = (iconName: string) => {
// // //     const icons: { [key: string]: React.ReactNode } = {
// // //       'trophy': <Trophy className="w-10 h-10" />,
// // //       'briefcase': <Briefcase className="w-10 h-10" />,
// // //       'flask': <FlaskConical className="w-10 h-10" />,
// // //       'globe': <Globe className="w-10 h-10" />,
// // //       'award': <Award className="w-10 h-10" />,
// // //       'target': <Target className="w-10 h-10" />,
// // //       'school': <School className="w-10 h-10" />,
// // //       'lightbulb': <Lightbulb className="w-10 h-10" />,
// // //     };
// // //     return icons[iconName.toLowerCase()] || <Award className="w-10 h-10" />;
// // //   };

// // //   return (
// // //     <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-[#FF6B35] group">
// // //       <div className="text-[#FF6B35] mb-6 group-hover:scale-110 transition-transform">
// // //         {getIcon(icon)}
// // //       </div>
// // //       <h3 className="font-black text-[#1E3A5F] mb-3 text-lg uppercase tracking-wide">{label}</h3>
// // //       {value && <p className="text-3xl font-black text-[#FF6B35]">{value}</p>}
// // //     </div>
// // //   );
// // // }

// // // function ProgramCard({ name, duration, degree, category, intakes, seats }: any) {
// // //   return (
// // //     <div className="bg-white shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-[#FF6B35] group">
// // //       <div className="p-8">
// // //         <div className="flex items-start justify-between mb-6">
// // //           <div className="bg-[#FF6B35] p-4">
// // //             <GraduationCap className="w-8 h-8 text-white" />
// // //           </div>
// // //           <div className="bg-[#1E3A5F] text-white px-4 py-2 text-xs font-black uppercase tracking-wider">
// // //             {category}
// // //           </div>
// // //         </div>
// // //         <h3 className="text-2xl font-black text-[#1E3A5F] mb-3 leading-tight">{name}</h3>
// // //         <p className="text-slate-600 font-bold mb-6">{degree} • {duration}</p>
// // //         <div className="space-y-3 text-sm text-slate-600 mb-6">
// // //           <div className="flex items-center gap-3 bg-slate-50 p-3 border-l-4 border-[#FF6B35]">
// // //             <Calendar className="w-5 h-5 text-[#FF6B35]" />
// // //             <span className="font-semibold">Intakes: {intakes.join(', ')}</span>
// // //           </div>
// // //           {seats && (
// // //             <div className="flex items-center gap-3 bg-slate-50 p-3 border-l-4 border-[#FF6B35]">
// // //               <Users className="w-5 h-5 text-[#FF6B35]" />
// // //               <span className="font-semibold">{seats} Seats</span>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //       <button className="w-full bg-[#1E3A5F] hover:bg-[#FF6B35] text-white py-4 font-black uppercase tracking-wider transition-all group-hover:shadow-lg">
// // //         VIEW DETAILS
// // //       </button>
// // //     </div>
// // //   );
// // // }

// // // function FeeRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
// // //   return (
// // //     <div className={`flex justify-between items-center py-4 border-b-2 ${
// // //       highlight 
// // //         ? 'border-[#FF6B35] bg-[#FF6B35]/10' 
// // //         : 'border-white/10'
// // //     } ${highlight ? 'px-4' : ''}`}>
// // //       <span className={`font-bold uppercase tracking-wider text-sm ${
// // //         highlight ? 'text-[#FF6B35]' : 'text-slate-300'
// // //       }`}>
// // //         {label}
// // //       </span>
// // //       <span className={`font-black text-xl ${
// // //         highlight ? 'text-[#FF6B35]' : 'text-white'
// // //       }`}>
// // //         {value}
// // //       </span>
// // //     </div>
// // //   );
// // // }

// // // function EligibilityRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
// // //   return (
// // //     <div className="bg-white p-6 border-l-4 border-[#FF6B35] shadow">
// // //       <div className="flex items-center gap-4 mb-3">
// // //         <div className="text-[#FF6B35]">{icon}</div>
// // //         <span className="text-slate-600 text-xs font-black uppercase tracking-widest">{label}</span>
// // //       </div>
// // //       <p className="font-black text-[#1E3A5F] text-xl">{value}</p>
// // //     </div>
// // //   );
// // // }

// // // function FacilityCard({ name }: { name: string }) {
// // //   const getIcon = (facilityName: string) => {
// // //     const lower = facilityName.toLowerCase();
// // //     if (lower.includes('library')) return <BookOpen className="w-7 h-7" />;
// // //     if (lower.includes('lab')) return <FlaskConical className="w-7 h-7" />;
// // //     if (lower.includes('hospital')) return <Hospital className="w-7 h-7" />;
// // //     if (lower.includes('hostel') || lower.includes('accommodation')) return <Home className="w-7 h-7" />;
// // //     if (lower.includes('sports') || lower.includes('gym')) return <Trophy className="w-7 h-7" />;
// // //     if (lower.includes('wifi') || lower.includes('internet')) return <Globe className="w-7 h-7" />;
// // //     if (lower.includes('security')) return <Shield className="w-7 h-7" />;
// // //     if (lower.includes('research')) return <Lightbulb className="w-7 h-7" />;
// // //     if (lower.includes('computer')) return <Cpu className="w-7 h-7" />;
// // //     return <Building className="w-7 h-7" />;
// // //   };

// // //   return (
// // //     <div className="bg-white p-5 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-[#FF6B35] group">
// // //       <div className="flex items-center gap-4">
// // //         <div className="text-[#FF6B35] group-hover:scale-110 transition-transform">
// // //           {getIcon(name)}
// // //         </div>
// // //         <span className="text-[#1E3A5F] font-black text-sm uppercase tracking-wide">{name}</span>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // 'use client';

// // import React, { useState } from 'react';
// // import Link from 'next/link';
// // import Navbar from '../components/Navbar';
// // import Footer from '../components/Footer';
// // import LeadFormModal from '../com/LeadForm';
// // import type { University } from '../data/universityData';

// // // ─── Types ────────────────────────────────────────────────────────────────────

// // interface UniversityPageProps {
// //   university: University;
// // }

// // type TabId = 'overview' | 'programs' | 'admissions' | 'fees';

// // // ─── Helpers ──────────────────────────────────────────────────────────────────

// // function Label({ children }: { children: React.ReactNode }) {
// //   return (
// //     <div style={{ fontSize: '10px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1.8px', textTransform: 'uppercase', marginBottom: '3px' }}>
// //       {children}
// //     </div>
// //   );
// // }

// // function SectionHeading({ title, sub }: { title: string; sub: string }) {
// //   return (
// //     <>
// //       <h2 className="section-h2">{title}</h2>
// //       <p className="section-sub">{sub}</p>
// //     </>
// //   );
// // }

// // function DocTag({ children }: { children: React.ReactNode }) {
// //   return <div className="doc-tag"><span style={{ color: '#FF6B35' }}>↗</span> {children}</div>;
// // }

// // // ─── Main Component ───────────────────────────────────────────────────────────

// // export default function UniversityPage({ university: uni }: UniversityPageProps) {
// //   const [activeTab, setActiveTab] = useState<TabId>('overview');
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   // Pre-compute data for clean JSX below
// //   const quickStats = [
// //     { icon: '🏛️', label: 'Established',    value: uni.establishedYear  },
// //     { icon: '📚', label: 'Medium',          value: uni.mediumOfInstruction },
// //   ].filter(s => s.value);

// //   const keyFacts = [
// //     { label: 'Programs Offered',  value: uni.programs?.length ? `${uni.programs.length} Programs` : null },
// //     { label: 'NMC Approved',      value: uni.accreditations ? 'Yes' : null },
// //     { label: 'Tuition / Year',    value: uni.fees?.tuitionPerYear ? `${uni.fees.currency ?? ''} ${uni.fees.tuitionPerYear.toLocaleString()}` : null },
// //     { label: 'Course Duration',   value: uni.programs?.[0]?.duration ?? null },
// //     { label: 'Pass Rate',         value: uni.stats?.passRate ?? null },
// //     { label: 'Ranking',           value: uni.stats?.ranking ?? null },
// //     { label: 'Location',          value: uni.location?.city ?? uni.location?.address ?? null },
// //     { label: 'Country',           value: uni.country ?? null },
// //   ].filter(r => r.value);

// //   const eligibilityCriteria = [
// //     { icon: '📋', label: 'NEET',      text: uni.eligibility?.minScore },
// //     { icon: '🎓', label: 'Academics', text: uni.eligibility?.minPercentage },
// //     { icon: '🎂', label: 'Age Limit', text: uni.eligibility?.ageLimit },
// //   ].filter(e => e.text);

// //   const feeRows = [
// //     { label: 'Tuition Fee / Year', value: uni.fees?.tuitionPerYear,  note: 'Academic fees per annum' },
// //     { label: 'Hostel Fee / Year',  value: uni.fees?.hostelPerYear,   note: 'Including meals' },
// //     { label: 'One-Time Charges',   value: uni.fees?.totalFirstYear,      note: 'Admission, registration etc.' },
// //   ].filter(r => r.value);

// //   const totalPerYear = feeRows.reduce((sum, r) => {
// //     if (r.label !== 'One-Time Charges') return sum + ((r.value as number) || 0);
// //     return sum;
// //   }, 0);

// //   const tabs: { id: TabId; label: string }[] = [
// //     { id: 'overview',   label: 'Overview'   },
// //     { id: 'programs',   label: 'Programs'   },
// //     { id: 'admissions', label: 'Admissions' },
// //     { id: 'fees',       label: 'Fees'       },
// //   ];

// //   return (
// //     <>
// //       <Navbar />
// //       <div style={{ minHeight: '100vh', background: '#fff', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>

// //         <LeadFormModal
// //           isOpen={isModalOpen}
// //           onClose={() => setIsModalOpen(false)}
// //           universityName={uni.name}
// //           countryCode={uni.countrySlug}
// //         />

// //         {/* ── Global Styles ── */}
// //         <style>{`
// //           @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
// //           *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// //           .hide-scrollbar::-webkit-scrollbar { display: none; }
// //           .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

// //           /* ── Tabs ── */
// //           .page-tabs { background: #fff; border-bottom: 1px solid #E2E8F0; }
// //           .page-tabs-inner { max-width: 1200px; margin: 0 auto; padding: 0 32px; display: flex; align-items: center; }
// //           .page-tab {
// //             padding: 16px 28px; background: transparent; border: none;
// //             border-bottom: 2px solid transparent;
// //             font-size: 14px; font-weight: 600; font-family: inherit;
// //             color: #64748B; cursor: pointer; transition: all 0.2s ease;
// //           }
// //           .page-tab.active { color: #1E3A5F; border-bottom-color: #FF6B35; }
// //           .page-tab:hover:not(.active) { color: #1E3A5F; }

// //           /* ── Stats bar ── */
// //           .stat-bar { display: flex; border-top: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0; background: #E2E8F0; gap: 1px; }
// //           .stat-bar-item {
// //             flex: 1 1 0; display: flex; align-items: center; gap: 12px;
// //             padding: 20px 22px; background: #fff; transition: background 0.2s; min-width: 0;
// //           }
// //           .stat-bar-item:hover { background: #FAFBFC; }

// //           /* ── Section headings ── */
// //           .section-h2 { font-size: clamp(22px, 3.5vw, 32px); font-weight: 800; color: #1E3A5F; letter-spacing: -0.8px; margin-bottom: 8px; }
// //           .section-sub { font-size: 15px; color: #64748B; font-weight: 500; margin-bottom: 36px; }

// //           /* ── Program card ── */
// //           .prog-card {
// //             border: 1px solid #E2E8F0; background: #fff;
// //             display: flex; flex-direction: column; overflow: hidden;
// //             transition: all 0.25s ease; position: relative;
// //           }
// //           .prog-card::before {
// //             content: ''; position: absolute; left: 0; top: 0; bottom: 0;
// //             width: 3px; background: transparent; transition: background 0.2s;
// //           }
// //           .prog-card:hover::before { background: #FF6B35; }
// //           .prog-card:hover { box-shadow: 0 8px 28px rgba(30,58,95,0.08); border-color: rgba(255,107,53,0.25); }

// //           /* ── Highlight item ── */
// //           .highlight-item {
// //             display: flex; align-items: flex-start; gap: 20px;
// //             padding: 24px; border: 1px solid #E2E8F0; background: #fff;
// //             transition: all 0.25s ease; position: relative; margin-bottom: 2px;
// //           }
// //           .highlight-item::before {
// //             content: ''; position: absolute; left: 0; top: 0; bottom: 0;
// //             width: 3px; background: transparent; transition: background 0.2s;
// //           }
// //           .highlight-item:hover::before { background: #FF6B35; }
// //           .highlight-item:hover { box-shadow: 0 8px 28px rgba(30,58,95,0.08); border-color: rgba(255,107,53,0.2); }

// //           /* ── Eligibility row ── */
// //           .elig-item { display: flex; align-items: flex-start; gap: 16px; padding: 20px 0; border-bottom: 1px solid #F1F5F9; }
// //           .elig-item:last-child { border-bottom: none; }

// //           /* ── Doc tag ── */
// //           .doc-tag {
// //             padding: 8px 14px; border: 1px solid #E2E8F0; background: #F8FAFC;
// //             font-size: 12px; font-weight: 600; color: #1E3A5F;
// //             display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s ease;
// //           }
// //           .doc-tag:hover { border-color: #FF6B35; color: #FF6B35; background: #fff; }

// //           /* ── Fee row ── */
// //           .fee-row { display: flex; align-items: center; padding: 18px 24px; border-bottom: 1px solid #F1F5F9; gap: 12px; transition: background 0.15s; }
// //           .fee-row:last-child { border-bottom: none; }
// //           .fee-row:hover { background: #FAFBFC; }

// //           /* ── Recognition badge ── */
// //           .recog-badge {
// //             padding: 16px 20px; border: 1px solid #E2E8F0; background: #fff;
// //             display: flex; align-items: center; gap: 12px; transition: all 0.2s ease;
// //           }
// //           .recog-badge:hover { border-color: #FF6B35; box-shadow: 0 4px 16px rgba(255,107,53,0.08); }

// //           /* ── Buttons ── */
// //           .btn-orange {
// //             display: inline-flex; align-items: center; gap: 8px;
// //             padding: 15px 36px; background: #FF6B35; color: #fff;
// //             border: 2px solid #FF6B35; font-size: 14px; font-weight: 700;
// //             letter-spacing: 0.3px; font-family: inherit; cursor: pointer;
// //             text-decoration: none; transition: all 0.2s ease;
// //           }
// //           .btn-orange:hover { background: #E85D29; border-color: #E85D29; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,53,0.3); }
// //           .btn-white {
// //             display: inline-flex; align-items: center; gap: 8px;
// //             padding: 15px 36px; background: #fff; color: #1E3A5F;
// //             border: 2px solid #fff; font-size: 14px; font-weight: 700;
// //             letter-spacing: 0.3px; font-family: inherit; cursor: pointer;
// //             text-decoration: none; transition: all 0.2s ease;
// //           }
// //           .btn-white:hover { background: transparent; color: #fff; }

// //           /* ── CTA banner ── */
// //           .cta-banner {
// //             background: #1E3A5F; padding: 52px 40px;
// //             display: flex; align-items: center; justify-content: space-between;
// //             gap: 32px; flex-wrap: wrap; position: relative; overflow: hidden;
// //           }
// //           .cta-banner::before {
// //             content: ''; position: absolute; right: -60px; top: -60px;
// //             width: 200px; height: 200px; border: 1px solid rgba(255,255,255,0.07); transform: rotate(15deg);
// //           }

// //           /* ── Responsive ── */
// //           @media (max-width: 1024px) {
// //             .prog-grid { grid-template-columns: repeat(2, 1fr) !important; }
// //             .fee-grid  { grid-template-columns: 1fr !important; }
// //           }
// //           @media (max-width: 768px) {
// //             .hero-inner { padding: 120px 20px 48px !important; }
// //             .page-tabs-inner { padding: 0 16px; overflow-x: auto; }
// //             .content-pad { padding-left: 20px !important; padding-right: 20px !important; }
// //             .two-col { grid-template-columns: 1fr !important; }
// //             .stat-bar { display: grid !important; grid-template-columns: 1fr 1fr; }
// //             .stat-bar-item:last-child { grid-column: 1 / -1; }
// //             .prog-grid { grid-template-columns: 1fr !important; }
// //             .elig-grid { grid-template-columns: 1fr !important; }
// //             .cta-banner { padding: 36px 20px !important; flex-direction: column !important; align-items: flex-start !important; }
// //             .btn-orange, .btn-white { width: 100% !important; justify-content: center !important; }
// //           }
// //           @media (max-width: 420px) {
// //             .stat-bar { grid-template-columns: 1fr !important; }
// //             .stat-bar-item:last-child { grid-column: auto; }
// //           }
// //         `}</style>

// //         {/* ════════════════════════════════════════
// //             HERO
// //         ════════════════════════════════════════ */}
// //         <section style={{ position: 'relative', minHeight: '520px', height: '65vh', overflow: 'hidden' }}>
// //           <div style={{
// //             position: 'absolute', inset: 0,
// //             backgroundImage: `url(${uni.heroImage})`,
// //             backgroundSize: 'cover', backgroundPosition: 'center',
// //           }} />
// //           <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(12,24,48,0.88) 55%, rgba(12,24,48,0.45))' }} />

// //           <div className="hero-inner" style={{
// //             position: 'relative', zIndex: 2, height: '100%',
// //             display: 'flex', flexDirection: 'column', justifyContent: 'center',
// //             maxWidth: '1200px', margin: '0 auto', padding: '140px 32px 60px',
// //           }}>

// //             {/* Breadcrumb */}
// //             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
// //               <Link href="/destinations" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: '500' }}>
// //                 Destinations
// //               </Link>
// //               <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
// //               {uni.countrySlug && (
// //                 <>
// //                   <Link href={`/destinations/${uni.countrySlug}`} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: '500' }}>
// //                     {uni.country}
// //                   </Link>
// //                   <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
// //                 </>
// //               )}
// //               <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: '500' }}>{uni.name}</span>
// //             </div>

// //             {/* Badges */}
// //             <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
// //               {uni.type && (
// //                 <div style={{ padding: '5px 14px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', fontSize: '11px', fontWeight: '700', color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
// //                   {uni.type}
// //                 </div>
// //               )}
// //               {uni.accreditations && (
// //                 <div style={{ padding: '5px 14px', background: '#FF6B35', fontSize: '11px', fontWeight: '700', color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
// //                   NMC Approved
// //                 </div>
// //               )}
// //               {uni.country && (
// //                 <div style={{ padding: '5px 14px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', fontSize: '11px', fontWeight: '700', color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
// //                   {uni.country}
// //                 </div>
// //               )}
// //             </div>

// //             <h1 style={{
// //               fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: '800', color: '#fff',
// //               letterSpacing: '-1.5px', lineHeight: '1.05', marginBottom: '12px', maxWidth: '680px',
// //             }}>
// //               {uni.name}
// //             </h1>

// //             {(uni.location?.city || uni.location?.address) && (
// //               <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', fontWeight: '600', marginBottom: '12px' }}>
// //                 📍 {uni.location.city ?? uni.location.address}
// //               </div>
// //             )}

// //             {uni.tagline && (
// //               <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', fontWeight: '500', lineHeight: '1.65', maxWidth: '480px', marginBottom: '36px' }}>
// //                 {uni.tagline}
// //               </p>
// //             )}

// //             <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
// //               <button onClick={() => setIsModalOpen(true)} className="btn-orange">Apply Now →</button>
// //               <button
// //                 onClick={() => setActiveTab('programs')}
// //                 style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.35)', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s ease' }}
// //                 onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
// //                 onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
// //               >
// //                 View Programs
// //               </button>
// //             </div>
// //           </div>
// //         </section>

// //         {/* ════════════════════════════════════════
// //             QUICK STATS BAR
// //         ════════════════════════════════════════ */}
// //         {quickStats.length > 0 && (
// //           <div className="stat-bar">
// //             {quickStats.map((stat, i) => (
// //               <div key={i} className="stat-bar-item">
// //                 <span style={{ fontSize: '20px', flexShrink: 0 }}>{stat.icon}</span>
// //                 <div style={{ minWidth: 0 }}>
// //                   <Label>{stat.label}</Label>
// //                   <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
// //                     {String(stat.value)}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {/* ════════════════════════════════════════
// //             STICKY TABS
// //         ════════════════════════════════════════ */}
// //         <div className="page-tabs" style={{ position: 'sticky', top: '80px', zIndex: 40 }}>
// //           <div className="page-tabs-inner" role="tablist">
// //             {tabs.map(tab => (
// //               <button
// //                 key={tab.id}
// //                 role="tab"
// //                 aria-selected={activeTab === tab.id}
// //                 className={`page-tab ${activeTab === tab.id ? 'active' : ''}`}
// //                 onClick={() => setActiveTab(tab.id)}
// //               >
// //                 {tab.label}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* ════════════════════════════════════════
// //             OVERVIEW TAB
// //         ════════════════════════════════════════ */}
// //         {activeTab === 'overview' && (
// //           <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

// //             {/* ── About + Key Facts ── */}
// //             <section style={{ padding: '64px 32px' }} className="content-pad">
// //               <SectionHeading title={`About ${uni.name}`} sub="Everything you need to know before you apply" />

// //               <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px', alignItems: 'start' }} className="two-col">

// //                 {/* Left — description + highlights */}
// //                 <div>
// //                   {uni.overview && (
// //                     <p style={{ fontSize: '16px', color: '#334155', fontWeight: '500', lineHeight: '1.85', marginBottom: '32px' }}>
// //                       {uni.overview}
// //                     </p>
// //                   )}
// //                   {uni.highlights && uni.highlights.length > 0 && (
// //                     <div>
// //                       {uni.highlights.map((point, i) => (
// //                         <div key={i} className="highlight-item">
// //                           <div style={{ minWidth: '36px', height: '36px', background: '#FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', color: '#fff', flexShrink: 0 }}>
// //                             {String(i + 1).padStart(2, '0')}
// //                           </div>
// //                           <p style={{ fontSize: '15px', fontWeight: '600', color: '#1E3A5F', lineHeight: '1.55', margin: 0 }}>{point}</p>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Right — Key Facts panel */}
// //                 {keyFacts.length > 0 && (
// //                   <div style={{ border: '1px solid #E2E8F0', background: '#fff', position: 'sticky', top: '140px' }}>
// //                     <div style={{ padding: '20px 24px', background: '#1E3A5F' }}>
// //                       <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>At a Glance</div>
// //                       <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff', letterSpacing: '-0.3px' }}>Key Facts</div>
// //                     </div>
// //                     {keyFacts.map((row, i) => (
// //                       <div key={i} style={{ padding: '14px 24px', borderBottom: i < keyFacts.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
// //                         <span style={{ fontSize: '12px', fontWeight: '600', color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
// //                         <span style={{ fontSize: '14px', fontWeight: '800', color: '#1E3A5F', textAlign: 'right', wordBreak: 'break-word' }}>{row.value}</span>
// //                       </div>
// //                     ))}
// //                     <div style={{ padding: '20px 24px', borderTop: '1px solid #F1F5F9' }}>
// //                       <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ width: '100%', justifyContent: 'center' }}>
// //                         Apply Now →
// //                       </button>
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             </section>

// //             {/* ── Recognitions ── */}
// //             {uni.recognition && uni.recognition.length > 0 && (
// //               <section style={{ padding: '0 32px 64px' }} className="content-pad">
// //                 <SectionHeading title="Recognition & Accreditations" sub="Globally accepted credentials for your medical career" />
// //                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
// //                   {uni.recognition.map((r, i) => (
// //                     <div key={i} className="recog-badge">
// //                       <div style={{ width: '36px', height: '36px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
// //                         ✅
// //                       </div>
// //                       <div>
// //                         <div style={{ fontSize: '13px', fontWeight: '800', color: '#1E3A5F' }}>{r}</div>
// //                         <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '2px' }}>Recognized</div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </section>
// //             )}

// //             {/* ── Mid-page CTA ── */}
// //             <section style={{ padding: '0 32px 64px' }} className="content-pad">
// //               <div className="cta-banner">
// //                 <div style={{ position: 'relative', zIndex: 1 }}>
// //                   <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.5)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px' }}>
// //                     Your Seat Awaits
// //                   </div>
// //                   <h3 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px', marginBottom: '8px' }}>
// //                     Start your journey at {uni.name}
// //                   </h3>
// //                   <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', fontWeight: '500', maxWidth: '400px' }}>
// //                     Expert counselors guide you from inquiry to enrollment — at zero cost.
// //                   </p>
// //                 </div>
// //                 <button onClick={() => setIsModalOpen(true)} className="btn-white" style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
// //                   Get Free Counseling →
// //                 </button>
// //               </div>
// //             </section>

// //           </div>
// //         )}

// //         {/* ════════════════════════════════════════
// //             PROGRAMS TAB
// //         ════════════════════════════════════════ */}
// //         {activeTab === 'programs' && (
// //           <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px 80px' }} className="content-pad">
// //             <SectionHeading
// //               title={`Programs at ${uni.name}`}
// //               sub="Choose the right program for your medical career"
// //             />

// //             {uni.programs && uni.programs.length > 0 ? (
// //               <div className="prog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
// //                 {uni.programs.map((prog, i) => {
// //                   const progFees = prog.fees
// //                     ? `${prog. ?? uni.fees?.currency ?? ''} ${Number(prog.fees).toLocaleString()}`
// //                     : uni.fees?.tuitionPerYear
// //                     ? `${uni.fees.currency ?? ''} ${uni.fees.tuitionPerYear.toLocaleString()}`
// //                     : null;

// //                   const progDataRows = [
// //                     { label: 'Duration',    value: prog.duration },
// //                     { label: 'Seats',       value: prog.seats ? `${prog.seats} seats` : null },
// //                     { label: 'Eligibility', value: prog.category },
// //                     { label: 'Fees / Year', value: progFees },
// //                   ].filter(r => r.value);

// //                   return (
// //                     <div key={i} className="prog-card">
// //                       {/* Header */}
// //                       <div style={{ padding: '20px 24px', borderBottom: '1px solid #F1F5F9' }}>
// //                         <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
// //                           {i % 3 === 0 ? 'High Demand' : i % 3 === 1 ? 'Popular' : 'Growing'}
// //                         </div>
// //                         <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#1E3A5F', lineHeight: '1.3', marginBottom: '4px' }}>
// //                           {prog.name}
// //                         </h3>
// //                         {prog.degree && (
// //                           <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600' }}>{prog.degree}</div>
// //                         )}
// //                       </div>

// //                       {/* Data grid */}
// //                       <div style={{ background: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '1px', flex: 1 }}>
// //                         {progDataRows.map((row, j) => (
// //                           <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', background: '#fff', gap: '12px' }}>
// //                             <span style={{ fontSize: '11px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', flexShrink: 0 }}>{row.label}</span>
// //                             <span style={{ fontSize: '13px', fontWeight: '800', color: '#1E3A5F', textAlign: 'right' }}>{row.value}</span>
// //                           </div>
// //                         ))}
// //                       </div>

// //                       {/* CTA */}
// //                       <div
// //                         onClick={() => setIsModalOpen(true)}
// //                         style={{ padding: '15px', background: '#F8FAFC', fontSize: '11px', fontWeight: '700', color: '#1E3A5F', letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s ease', borderTop: '1px solid #E2E8F0' }}
// //                         onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#FF6B35'; (e.currentTarget as HTMLDivElement).style.color = '#fff'; }}
// //                         onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#F8FAFC'; (e.currentTarget as HTMLDivElement).style.color = '#1E3A5F'; }}
// //                       >
// //                         Enquire About This Program →
// //                       </div>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             ) : (
// //               <div style={{ padding: '80px 40px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
// //                 <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1E3A5F', marginBottom: '12px' }}>Program Details Coming Soon</h3>
// //                 <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '28px' }}>Contact us to get the full program list for {uni.name}.</p>
// //                 <button onClick={() => setIsModalOpen(true)} className="btn-orange">Contact Us →</button>
// //               </div>
// //             )}
// //           </div>
// //         )}

// //         {/* ════════════════════════════════════════
// //             ADMISSIONS TAB
// //         ════════════════════════════════════════ */}
// //         {activeTab === 'admissions' && (
// //           <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px 80px' }} className="content-pad">
// //             <SectionHeading title="Admissions" sub="Eligibility, documents, and the step-by-step process" />

// //             {/* ── Eligibility + Documents ── */}
// //             {(eligibilityCriteria.length > 0 || (uni.eligibility?.requiredDocs && uni.eligibility.requiredDocs.length > 0)) && (
// //               <div
// //                 style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '1px', background: '#E2E8F0', border: '1px solid #E2E8F0', marginBottom: '48px' }}
// //                 className="elig-grid"
// //               >
// //                 {eligibilityCriteria.length > 0 && (
// //                   <div style={{ background: '#fff', padding: '28px 28px 8px' }}>
// //                     <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
// //                       Eligibility Criteria
// //                     </div>
// //                     {eligibilityCriteria.map((item, i) => (
// //                       <div key={i} className="elig-item">
// //                         <div style={{ width: '44px', height: '44px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
// //                           {item.icon}
// //                         </div>
// //                         <div>
// //                           <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '5px' }}>{item.label}</div>
// //                           <div style={{ fontSize: '15px', fontWeight: '700', color: '#1E3A5F', lineHeight: '1.4' }}>{item.text}</div>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}

// //                 {uni.eligibility?.requiredDocs && uni.eligibility.requiredDocs.length > 0 && (
// //                   <div style={{ background: '#fff', padding: '28px' }}>
// //                     <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
// //                       Required Documents
// //                     </div>
// //                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
// //                       {uni.eligibility.requiredDocs.map((doc, i) => (
// //                         <DocTag key={i}>{doc}</DocTag>
// //                       ))}
// //                     </div>
// //                     <div style={{ padding: '20px', border: '1px solid #E2E8F0', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
// //                       <div>
// //                         <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', marginBottom: '4px' }}>Need help with documents?</div>
// //                         <div style={{ fontSize: '12px', color: '#64748B' }}>Our team handles everything for you.</div>
// //                       </div>
// //                       <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ padding: '11px 22px', fontSize: '12px' }}>
// //                         Get Help →
// //                       </button>
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             )}

// //             {/* ── Admission Process Steps ── */}
// //             {uni.admissionSteps && uni.admissionSteps.length > 0 && (
// //               <>
// //                 <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1E3A5F', letterSpacing: '-0.4px', marginBottom: '4px' }}>
// //                   Admission Process
// //                 </h3>
// //                 <p style={{ fontSize: '14px', color: '#64748B', fontWeight: '500', marginBottom: '28px' }}>
// //                   Follow these steps to secure your seat
// //                 </p>
// //                 <div style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden' }}>
// //                   {uni.admissionSteps.map((step, i) => (
// //                     <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px 28px', borderBottom: i < uni.admissionSteps!.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
// //                       <div style={{ minWidth: '40px', height: '40px', background: i === 0 ? '#FF6B35' : '#F8FAFC', border: i === 0 ? 'none' : '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '800', color: i === 0 ? '#fff' : '#1E3A5F', flexShrink: 0 }}>
// //                         {String(i + 1).padStart(2, '0')}
// //                       </div>
// //                       <p style={{ fontSize: '15px', fontWeight: '600', color: '#1E3A5F', lineHeight: '1.6', margin: 0, paddingTop: '8px' }}>{step}</p>
// //                     </div>
// //                   ))}
// //                   <div style={{ padding: '24px 28px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
// //                     <div>
// //                       <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', marginBottom: '4px' }}>Ready to get started?</div>
// //                       <div style={{ fontSize: '12px', color: '#64748B' }}>Our counselors will guide you through every step.</div>
// //                     </div>
// //                     <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ marginLeft: 'auto' }}>
// //                       Start Application →
// //                     </button>
// //                   </div>
// //                 </div>
// //               </>
// //             )}
// //           </div>
// //         )}

// //         {/* ════════════════════════════════════════
// //             FEES TAB
// //         ════════════════════════════════════════ */}
// //         {activeTab === 'fees' && (
// //           <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px 80px' }} className="content-pad">
// //             <SectionHeading title="Fee Structure" sub="Complete cost breakdown for your planning" />

// //             <div className="fee-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '32px', alignItems: 'start' }}>

// //               {/* Left — Breakdown table */}
// //               <div>
// //                 <div style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden' }}>
// //                   <div style={{ padding: '20px 24px', background: '#1E3A5F' }}>
// //                     <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>
// //                       Annual Breakdown
// //                     </div>
// //                     <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff' }}>
// //                       {uni.fees?.currency ?? 'USD'} — Estimated Per Year
// //                     </div>
// //                   </div>

// //                   {feeRows.length > 0 ? (
// //                     feeRows.map((row, i) => (
// //                       <div key={i} className="fee-row">
// //                         <div style={{ flex: 1 }}>
// //                           <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F' }}>{row.label}</div>
// //                           <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '600', marginTop: '2px' }}>{row.note}</div>
// //                         </div>
// //                         <div style={{ fontSize: '16px', fontWeight: '800', color: '#1E3A5F', flexShrink: 0 }}>
// //                           {uni.fees?.currency ?? ''} {Number(row.value).toLocaleString()}
// //                         </div>
// //                       </div>
// //                     ))
// //                   ) : uni.fees?.tuitionPerYear ? (
// //                     <div className="fee-row">
// //                       <div style={{ flex: 1 }}>
// //                         <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F' }}>Tuition Fee / Year</div>
// //                         <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '600', marginTop: '2px' }}>Academic fees per annum</div>
// //                       </div>
// //                       <div style={{ fontSize: '16px', fontWeight: '800', color: '#1E3A5F', flexShrink: 0 }}>
// //                         {uni.fees.currency} {uni.fees.tuitionPerYear.toLocaleString()}
// //                       </div>
// //                     </div>
// //                   ) : null}

// //                   {/* Total */}
// //                   {totalPerYear > 0 && (
// //                     <div style={{ padding: '20px 24px', background: '#F8FAFC', borderTop: '2px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
// //                       <div>
// //                         <div style={{ fontSize: '12px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Est. Total / Year</div>
// //                         <div style={{ fontSize: '11px', color: '#64748B' }}>Excluding one-time charges</div>
// //                       </div>
// //                       <div style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: '800', color: '#FF6B35', letterSpacing: '-0.5px' }}>
// //                         {uni.fees?.currency ?? ''} {totalPerYear.toLocaleString()}
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Disclaimer */}
// //                 <div style={{ marginTop: '16px', padding: '16px 20px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
// //                   <span style={{ fontSize: '18px', flexShrink: 0 }}>ℹ️</span>
// //                   <p style={{ fontSize: '12px', color: '#64748B', fontWeight: '500', lineHeight: '1.6', margin: 0 }}>
// //                     All fees are approximate and subject to change by the university. Exchange rate fluctuations may affect the final amount. Contact our counselors for the most up-to-date fee structure.
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* Right — Value summary */}
// //               <div style={{ border: '1px solid #E2E8F0', background: '#fff', position: 'sticky', top: '140px' }}>
// //                 <div style={{ padding: '20px 24px', background: '#FF6B35' }}>
// //                   <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>Why It's Worth It</div>
// //                   <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff' }}>Cost vs Value</div>
// //                 </div>

// //                 {[
// //                   { label: 'Globally Recognised Degree', icon: '🎓' },
// //                   { label: 'NMC / WHO Approved',          icon: '✅' },
// //                   { label: 'No Donation Required',         icon: '🚫' },
// //                   { label: 'English Medium Instruction',   icon: '📚' },
// //                   { label: 'High FMGE Pass Rate',          icon: '📊' },
// //                   { label: 'Safe & Affordable City',       icon: '🏙️' },
// //                 ].map((item, i, arr) => (
// //                   <div key={i} style={{ padding: '14px 20px', borderBottom: i < arr.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
// //                     <span style={{ fontSize: '18px' }}>{item.icon}</span>
// //                     <span style={{ fontSize: '13px', fontWeight: '700', color: '#1E3A5F' }}>{item.label}</span>
// //                   </div>
// //                 ))}

// //                 <div style={{ padding: '20px 24px', borderTop: '1px solid #F1F5F9' }}>
// //                   <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ width: '100%', justifyContent: 'center' }}>
// //                     Get Full Fee Breakdown →
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* ════════════════════════════════════════
// //             FINAL CTA BANNER
// //         ════════════════════════════════════════ */}
// //         <section style={{ position: 'relative', overflow: 'hidden' }}>
// //           <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${uni.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
// //           <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,24,48,0.91)' }} />

// //           <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '100px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px', flexWrap: 'wrap' }}>
// //             <div>
// //               <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
// //                 Take the Next Step
// //               </div>
// //               <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: '800', color: '#fff', letterSpacing: '-2px', lineHeight: '1.0', marginBottom: '16px' }}>
// //                 Your Medical Career<br />
// //                 <span style={{ color: '#FF6B35' }}>Starts at {uni.name}</span>
// //               </h2>
// //               <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', fontWeight: '500', maxWidth: '440px' }}>
// //                 Expert counselors guide you from first inquiry to enrollment — at zero cost.
// //               </p>
// //             </div>
// //             <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '220px' }}>
// //               <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ justifyContent: 'center' }}>
// //                 Apply Now →
// //               </button>
// //               <Link href="/destinations" className="btn-white" style={{ justifyContent: 'center', color: '#1E3A5F' }}>
// //                 Explore Destinations
// //               </Link>
// //             </div>
// //           </div>
// //         </section>

// //       </div>
// //       <Footer />
// //     </>
// //   );
// // }
// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import LeadFormModal from '../components/LeadForm';
// import type { University } from '../data/universityData';

// // ─── Types ────────────────────────────────────────────────────────────────────

// interface UniversityPageProps {
//   university: University;
// }

// type TabId = 'overview' | 'programs' | 'admissions' | 'fees';

// // ─── Atoms ───────────────────────────────────────────────────────────────────

// function FieldLabel({ children }: { children: React.ReactNode }) {
//   return (
//     <div style={{
//       fontSize: '10px', fontWeight: '700', color: '#94A3B8',
//       letterSpacing: '1.8px', textTransform: 'uppercase', marginBottom: '3px',
//     }}>
//       {children}
//     </div>
//   );
// }

// function SectionHead({ title, sub }: { title: string; sub: string }) {
//   return (
//     <>
//       <h2 className="section-h2">{title}</h2>
//       <p className="section-sub">{sub}</p>
//     </>
//   );
// }

// function DocTag({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="doc-tag">
//       <span style={{ color: '#FF6B35' }}>↗</span> {children}
//     </div>
//   );
// }

// function CheckBadge({ children }: { children: React.ReactNode }) {
//   return (
//     <div style={{
//       display: 'inline-flex', alignItems: 'center', gap: '8px',
//       padding: '8px 16px', border: '1px solid #E2E8F0', background: '#F8FAFC',
//       fontSize: '12px', fontWeight: '700', color: '#1E3A5F',
//     }}>
//       <span style={{ color: '#FF6B35', fontSize: '13px' }}>✓</span>
//       {children}
//     </div>
//   );
// }

// // ─── Component ────────────────────────────────────────────────────────────────

// export default function UniversityPage({ university: uni }: UniversityPageProps) {
//   const [activeTab, setActiveTab] = useState<TabId>('overview');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // ── Defensive shorthands — never crash on missing data ──────────────────────
//   const accreditations   = uni.accreditations   ?? [];
//   const programs         = uni.programs         ?? [];
//   const whyChoose        = uni.whyChoose        ?? [];
//   const highlights       = uni.highlights       ?? [];
//   const keyFeatures      = uni.keyFeatures      ?? [];
//   const facilities       = uni.facilities       ?? [];
//   const trainingPartners = uni.trainingPartners ?? [];
//   const eligibleFor      = uni.eligibleFor      ?? [];
//   const admissionSteps   = uni.admissionSteps   ?? [];
//   const galleryImages    = uni.galleryImages    ?? [];
//   const infrastructure   = uni.infrastructure   ?? {};
//   const stats            = uni.stats            ?? {} as University['stats'];
//   const ranking          = uni.ranking          ?? {};
//   const studentLife      = uni.studentLife      ?? {} as University['studentLife'];
//   const safetyRating     = uni.safetyRating     ?? {} as University['safetyRating'];
//   const location         = uni.location         ?? {} as University['location'];
//   const fees             = uni.fees             ?? {} as University['fees'];
//   const eligibility      = uni.eligibility      ?? {} as University['eligibility'];
//   const requiredDocs     = eligibility.requiredDocs ?? [];
//   const accommodation    = uni.accommodation    ?? {} as University['accommodation'];
//   const sportsAvailable  = studentLife.sportsAvailable ?? [];

//   const tabs: { id: TabId; label: string }[] = [
//     { id: 'overview',   label: 'Overview'   },
//     { id: 'programs',   label: 'Programs'   },
//     { id: 'admissions', label: 'Admissions' },
//     { id: 'fees',       label: 'Fees'       },
//   ];

//   // Stat bar — filter out any missing values
//   const statBarItems = [
//     { icon: '🏛️', label: 'Established',     value: uni.establishedYear ? String(uni.establishedYear) : null },
//     { icon: '🏫', label: 'Type',            value: uni.universityType ?? null },
//     { icon: '📚', label: 'Medium',          value: uni.mediumOfInstruction ?? null },
//     { icon: '👥', label: 'Total Students',  value: stats.totalStudents != null ? stats.totalStudents.toLocaleString() : null },
//     { icon: '🇮🇳', label: 'Indian Students', value: stats.indianStudents != null ? stats.indianStudents.toLocaleString() : null },
//     { icon: '👨‍🏫', label: 'Faculty Ratio', value: stats.facultyRatio ?? null },
//     { icon: '🌍', label: 'Campus Size',     value: stats.campusSize ?? null },
//     { icon: '📊', label: 'Pass Rate',       value: stats.passRate ?? null },
//   ].filter(s => s.value !== null);

//   // Sticky key facts panel
//   const keyFacts = [
//     { label: 'Global Rank',      value: ranking.globalRank  ? `#${ranking.globalRank}`  : null },
//     { label: 'Country Rank',     value: ranking.countryRank ? `#${ranking.countryRank}` : null },
//     { label: 'Category',         value: ranking.category ?? null },
//     { label: 'Accreditations',   value: accreditations.length ? accreditations.join(', ') : null },
//     { label: 'Total Students',   value: stats.totalStudents != null ? stats.totalStudents.toLocaleString() : null },
//     { label: 'International',    value: stats.internationalStudents != null ? stats.internationalStudents.toLocaleString() : null },
//     { label: 'Faculty',          value: (stats.facultyCount && stats.facultyRatio) ? `${stats.facultyCount} · ${stats.facultyRatio} ratio` : (stats.facultyRatio ?? null) },
//     { label: 'Pass Rate',        value: stats.passRate ?? null },
//     { label: 'Placement Rate',   value: stats.placementRate ?? null },
//     { label: 'Medium',           value: uni.mediumOfInstruction ?? null },
//   ].filter(r => r.value !== null);

//   // Infrastructure grid items
//   const infraItems = [
//     { label: 'Libraries',        value: infrastructure.libraries },
//     { label: 'Labs',             value: infrastructure.labs },
//     { label: 'Hospitals',        value: infrastructure.hospitals },
//     { label: 'Research Centres', value: infrastructure.researchCenters },
//     { label: 'Hostels',          value: infrastructure.hostels },
//     { label: 'Book Collection',  value: infrastructure.bookCollection },
//   ].filter(r => r.value !== undefined && r.value !== null);

//   return (
//     <>
//       <Navbar />
//       <div style={{ minHeight: '100vh', background: '#fff', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>

//         <LeadFormModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           universityName={uni.name}
//           countryCode={uni.countrySlug}
//         />

//         {/* ── Global styles ── */}
//         <style>{`
//           @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
//           *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//           .hide-scrollbar::-webkit-scrollbar { display: none; }
//           .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

//           /* ── Tabs ── */
//           .page-tabs { background: #fff; border-bottom: 1px solid #E2E8F0; }
//           .page-tabs-inner { max-width: 1200px; margin: 0 auto; padding: 0 32px; display: flex; align-items: center; }
//           .page-tab {
//             padding: 16px 28px; background: transparent; border: none;
//             border-bottom: 2px solid transparent; font-size: 14px; font-weight: 600;
//             font-family: inherit; color: #64748B; cursor: pointer; transition: all 0.2s ease;
//           }
//           .page-tab.active { color: #1E3A5F; border-bottom-color: #FF6B35; }
//           .page-tab:hover:not(.active) { color: #1E3A5F; }

//           /* ── Stat bar ── */
//           .stat-bar { display: flex; border-top: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0; background: #E2E8F0; gap: 1px; overflow-x: auto; }
//           .stat-bar-item { flex: 1 1 120px; display: flex; align-items: center; gap: 10px; padding: 18px 20px; background: #fff; transition: background 0.2s; min-width: 0; }
//           .stat-bar-item:hover { background: #FAFBFC; }

//           /* ── Section heading ── */
//           .section-h2 { font-size: clamp(22px, 3.5vw, 32px); font-weight: 800; color: #1E3A5F; letter-spacing: -0.8px; margin-bottom: 8px; }
//           .section-sub { font-size: 15px; color: #64748B; font-weight: 500; margin-bottom: 36px; }

//           /* ── Why-choose item ── */
//           .why-item {
//             display: flex; align-items: flex-start; gap: 20px; padding: 24px;
//             border: 1px solid #E2E8F0; background: #fff; margin-bottom: 2px;
//             transition: all 0.25s ease; position: relative;
//           }
//           .why-item::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: transparent; transition: background 0.2s; }
//           .why-item:hover::before { background: #FF6B35; }
//           .why-item:hover { box-shadow: 0 8px 28px rgba(30,58,95,0.08); border-color: rgba(255,107,53,0.2); }

//           /* ── Highlight card ── */
//           .highlight-card { padding: 24px 20px; border: 1px solid #E2E8F0; background: #fff; text-align: center; transition: all 0.25s ease; }
//           .highlight-card:hover { border-color: #FF6B35; box-shadow: 0 8px 24px rgba(255,107,53,0.08); transform: translateY(-3px); }

//           /* ── Feature card ── */
//           .feature-card { padding: 20px; border: 1px solid #E2E8F0; background: #fff; display: flex; align-items: flex-start; gap: 14px; transition: all 0.2s ease; }
//           .feature-card:hover { border-color: rgba(255,107,53,0.3); box-shadow: 0 4px 16px rgba(30,58,95,0.06); }

//           /* ── Program card ── */
//           .prog-card {
//             border: 1px solid #E2E8F0; background: #fff;
//             display: flex; flex-direction: column; overflow: hidden;
//             transition: all 0.25s ease; position: relative;
//           }
//           .prog-card::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: transparent; transition: background 0.2s; }
//           .prog-card:hover::before { background: #FF6B35; }
//           .prog-card:hover { box-shadow: 0 8px 28px rgba(30,58,95,0.08); border-color: rgba(255,107,53,0.25); }

//           /* ── Eligibility row ── */
//           .elig-item { display: flex; align-items: flex-start; gap: 16px; padding: 20px 0; border-bottom: 1px solid #F1F5F9; }
//           .elig-item:last-child { border-bottom: none; }

//           /* ── Step item ── */
//           .step-item { display: flex; align-items: flex-start; gap: 20px; padding: 24px 28px; border-bottom: 1px solid #F1F5F9; }
//           .step-item:last-child { border-bottom: none; }

//           /* ── Doc tag ── */
//           .doc-tag { padding: 8px 14px; border: 1px solid #E2E8F0; background: #F8FAFC; font-size: 12px; font-weight: 600; color: #1E3A5F; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s ease; }
//           .doc-tag:hover { border-color: #FF6B35; color: #FF6B35; background: #fff; }

//           /* ── Fee row ── */
//           .fee-row { display: flex; align-items: center; padding: 18px 24px; border-bottom: 1px solid #F1F5F9; gap: 12px; transition: background 0.15s; }
//           .fee-row:last-child { border-bottom: none; }
//           .fee-row:hover { background: #FAFBFC; }

//           /* ── Infra cell ── */
//           .infra-cell { padding: 24px 20px; background: #fff; text-align: center; transition: all 0.2s ease; }
//           .infra-cell:hover { background: #FAFBFC; }

//           /* ── Buttons ── */
//           .btn-orange {
//             display: inline-flex; align-items: center; gap: 8px;
//             padding: 15px 36px; background: #FF6B35; color: #fff;
//             border: 2px solid #FF6B35; font-size: 14px; font-weight: 700;
//             letter-spacing: 0.3px; font-family: inherit; cursor: pointer;
//             text-decoration: none; transition: all 0.2s ease;
//           }
//           .btn-orange:hover { background: #E85D29; border-color: #E85D29; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,53,0.3); }
//           .btn-white {
//             display: inline-flex; align-items: center; gap: 8px;
//             padding: 15px 36px; background: #fff; color: #1E3A5F;
//             border: 2px solid #fff; font-size: 14px; font-weight: 700;
//             letter-spacing: 0.3px; font-family: inherit; cursor: pointer;
//             text-decoration: none; transition: all 0.2s ease;
//           }
//           .btn-white:hover { background: transparent; color: #fff; }

//           /* ── CTA banner ── */
//           .cta-banner {
//             background: #1E3A5F; padding: 52px 40px;
//             display: flex; align-items: center; justify-content: space-between;
//             gap: 32px; flex-wrap: wrap; position: relative; overflow: hidden;
//           }
//           .cta-banner::before {
//             content: ''; position: absolute; right: -60px; top: -60px;
//             width: 200px; height: 200px; border: 1px solid rgba(255,255,255,0.07); transform: rotate(15deg);
//           }

//           /* ── Responsive ── */
//           @media (max-width: 1024px) {
//             .prog-grid    { grid-template-columns: repeat(2, 1fr) !important; }
//             .feature-grid { grid-template-columns: repeat(2, 1fr) !important; }
//             .fee-layout   { grid-template-columns: 1fr !important; }
//           }
//           @media (max-width: 768px) {
//             .hero-inner      { padding: 120px 20px 48px !important; }
//             .page-tabs-inner { padding: 0 16px; overflow-x: auto; }
//             .content-pad     { padding-left: 20px !important; padding-right: 20px !important; }
//             .two-col         { grid-template-columns: 1fr !important; }
//             .elig-grid       { grid-template-columns: 1fr !important; }
//             .prog-grid       { grid-template-columns: 1fr !important; }
//             .highlight-grid  { grid-template-columns: repeat(2, 1fr) !important; }
//             .feature-grid    { grid-template-columns: 1fr !important; }
//             .infra-grid      { grid-template-columns: repeat(2, 1fr) !important; }
//             .cta-banner      { padding: 36px 20px !important; flex-direction: column !important; align-items: flex-start !important; }
//             .btn-orange, .btn-white { width: 100% !important; justify-content: center !important; }
//           }
//         `}</style>

//         {/* ════════════════════════════════════════
//             HERO
//         ════════════════════════════════════════ */}
//         <section style={{ position: 'relative', minHeight: '540px', height: '66vh', overflow: 'hidden' }}>
//           <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${uni.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
//           <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(12,24,48,0.92) 50%, rgba(12,24,48,0.4) 100%)' }} />

//           <div className="hero-inner" style={{
//             position: 'relative', zIndex: 2, height: '100%',
//             display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
//             maxWidth: '1200px', margin: '0 auto', padding: '140px 32px 56px',
//           }}>

//             {/* Breadcrumb */}
//             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
//               <Link href="/destinations" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: '500' }}>
//                 Destinations
//               </Link>
//               <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
//               <Link href={`/destinations/${uni.countrySlug}`} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: '500' }}>
//                 {uni.country} {uni.flag}
//               </Link>
//               <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
//               <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: '500' }}>
//                 {uni.shortName ?? uni.name}
//               </span>
//             </div>

//             {/* Badges */}
//             <div style={{ display: 'flex', gap: '8px', marginBottom: '18px', flexWrap: 'wrap' }}>
//               {uni.universityType && (
//                 <div style={{ padding: '5px 14px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', fontSize: '11px', fontWeight: '700', color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
//                   {uni.universityType}
//                 </div>
//               )}
//               {accreditations.map((acc, i) => (
//                 <div key={i} style={{ padding: '5px 14px', background: acc === 'NMC' ? '#FF6B35' : 'rgba(255,255,255,0.12)', border: acc === 'NMC' ? 'none' : '1px solid rgba(255,255,255,0.2)', fontSize: '11px', fontWeight: '700', color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
//                   {acc}
//                 </div>
//               ))}
//             </div>

//             <h1 style={{ fontSize: 'clamp(28px, 5vw, 58px)', fontWeight: '800', color: '#fff', letterSpacing: '-1.5px', lineHeight: '1.05', marginBottom: '10px', maxWidth: '720px' }}>
//               {uni.name}
//             </h1>

//             <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', fontWeight: '600', marginBottom: '10px' }}>
//               📍 {uni.city}{uni.state ? `, ${uni.state}` : ''}, {uni.country} {uni.flag}
//             </div>

//             {uni.tagline && (
//               <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', fontWeight: '500', lineHeight: '1.65', maxWidth: '520px', marginBottom: '32px' }}>
//                 {uni.tagline}
//               </p>
//             )}

//             <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
//               <button onClick={() => setIsModalOpen(true)} className="btn-orange">Apply Now →</button>
//               <button
//                 onClick={() => setActiveTab('programs')}
//                 style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.35)', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s ease' }}
//                 onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)'; }}
//                 onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
//               >
//                 View Programs
//               </button>
//               {uni.website && (
//                 <a href={uni.website} target="_blank" rel="noopener noreferrer"
//                   style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', background: 'transparent', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.2)', fontSize: '14px', fontWeight: '600', textDecoration: 'none', fontFamily: 'inherit' }}>
//                   Official Website ↗
//                 </a>
//               )}
//             </div>
//           </div>
//         </section>

//         {/* ════════════════════════════════════════
//             STAT BAR
//         ════════════════════════════════════════ */}
//         {statBarItems.length > 0 && (
//           <div className="stat-bar">
//             {statBarItems.map((s, i) => (
//               <div key={i} className="stat-bar-item">
//                 <span style={{ fontSize: '18px', flexShrink: 0 }}>{s.icon}</span>
//                 <div style={{ minWidth: 0 }}>
//                   <FieldLabel>{s.label}</FieldLabel>
//                   <div style={{ fontSize: '13px', fontWeight: '700', color: '#1E3A5F', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//                     {s.value}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* ════════════════════════════════════════
//             STICKY TABS
//         ════════════════════════════════════════ */}
//         <div className="page-tabs" style={{ position: 'sticky', top: '80px', zIndex: 40 }}>
//           <div className="page-tabs-inner" role="tablist">
//             {tabs.map(tab => (
//               <button
//                 key={tab.id}
//                 role="tab"
//                 aria-selected={activeTab === tab.id}
//                 className={`page-tab ${activeTab === tab.id ? 'active' : ''}`}
//                 onClick={() => setActiveTab(tab.id)}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* ════════════════════════════════════════
//             OVERVIEW TAB
//         ════════════════════════════════════════ */}
//         {activeTab === 'overview' && (
//           <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

//             {/* ── Why Choose + Key Facts ── */}
//             {(whyChoose.length > 0 || keyFacts.length > 0) && (
//               <section style={{ padding: '64px 32px' }} className="content-pad">
//                 <SectionHead title={`Why Choose ${uni.shortName ?? uni.name}`} sub="The key reasons students pick this university" />

//                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px', alignItems: 'start' }} className="two-col">

//                   {/* Left — whyChoose list */}
//                   <div>
//                     {whyChoose.map((point, i) => (
//                       <div key={i} className="why-item">
//                         <div style={{ minWidth: '36px', height: '36px', background: '#FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', color: '#fff', flexShrink: 0 }}>
//                           {String(i + 1).padStart(2, '0')}
//                         </div>
//                         <p style={{ fontSize: '15px', fontWeight: '600', color: '#1E3A5F', lineHeight: '1.55', margin: 0 }}>
//                           {point}
//                         </p>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Right — Key Facts panel */}
//                   {keyFacts.length > 0 && (
//                     <div style={{ border: '1px solid #E2E8F0', background: '#fff', position: 'sticky', top: '140px' }}>
//                       <div style={{ padding: '20px 24px', background: '#1E3A5F' }}>
//                         <FieldLabel>At a Glance</FieldLabel>
//                         <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff', letterSpacing: '-0.3px', marginTop: '4px' }}>Key Facts</div>
//                       </div>
//                       {keyFacts.map((row, i) => (
//                         <div key={i} style={{ padding: '14px 24px', borderBottom: i < keyFacts.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
//                           <span style={{ fontSize: '12px', fontWeight: '600', color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
//                           <span style={{ fontSize: '13px', fontWeight: '800', color: '#1E3A5F', textAlign: 'right', wordBreak: 'break-word' }}>{row.value}</span>
//                         </div>
//                       ))}
//                       <div style={{ padding: '20px 24px', borderTop: '1px solid #F1F5F9' }}>
//                         <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ width: '100%', justifyContent: 'center' }}>
//                           Apply Now →
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </section>
//             )}

//             {/* ── Highlights ── */}
//             {highlights.length > 0 && (
//               <section style={{ padding: '0 32px 64px' }} className="content-pad">
//                 <SectionHead title="By the Numbers" sub="What the data says about this university" />
//                 <div className="highlight-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(highlights.length, 4)}, 1fr)`, gap: '16px' }}>
//                   {highlights.map((h, i) => (
//                     <div key={i} className="highlight-card">
//                       <div style={{ fontSize: '28px', marginBottom: '12px' }}>{h.icon}</div>
//                       <div style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '800', color: '#FF6B35', letterSpacing: '-1px', marginBottom: '6px' }}>
//                         {h.stat}
//                       </div>
//                       <div style={{ fontSize: '12px', fontWeight: '700', color: '#64748B', letterSpacing: '1px', textTransform: 'uppercase' }}>
//                         {h.label}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* ── Key Features ── */}
//             {keyFeatures.length > 0 && (
//               <section style={{ padding: '0 32px 64px' }} className="content-pad">
//                 <SectionHead title="Key Features" sub="What sets this university apart" />
//                 <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
//                   {keyFeatures.map((f, i) => (
//                     <div key={i} className="feature-card">
//                       <div style={{ width: '42px', height: '42px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
//                         {f.icon}
//                       </div>
//                       <div>
//                         <div style={{ fontSize: '13px', fontWeight: '800', color: '#1E3A5F', marginBottom: '2px' }}>{f.label}</div>
//                         {f.value && (
//                           <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35' }}>{f.value}</div>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* ── Accreditations ── */}
//             {accreditations.length > 0 && (
//               <section style={{ padding: '0 32px 64px' }} className="content-pad">
//                 <SectionHead title="Recognition & Accreditations" sub="Globally accepted credentials for your medical career" />
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
//                   {accreditations.map((acc, i) => (
//                     <div key={i}
//                       style={{ padding: '18px 24px', border: '1px solid #E2E8F0', background: '#fff', display: 'flex', alignItems: 'center', gap: '14px', transition: 'all 0.2s ease', cursor: 'default' }}
//                       onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#FF6B35'; }}
//                       onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#E2E8F0'; }}
//                     >
//                       <div style={{ width: '40px', height: '40px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>✅</div>
//                       <div>
//                         <div style={{ fontSize: '15px', fontWeight: '800', color: '#1E3A5F' }}>{acc}</div>
//                         <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '2px' }}>Recognized</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* ── Infrastructure ── */}
//             {infraItems.length > 0 && (
//               <section style={{ padding: '0 32px 64px' }} className="content-pad">
//                 <SectionHead title="Infrastructure" sub="Campus facilities by the numbers" />
//                 <div className="infra-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#E2E8F0', border: '1px solid #E2E8F0' }}>
//                   {infraItems.map((r, i) => (
//                     <div key={i} className="infra-cell">
//                       <div style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', color: '#1E3A5F', letterSpacing: '-1px', marginBottom: '6px' }}>
//                         {r.value}
//                       </div>
//                       <div style={{ fontSize: '11px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
//                         {r.label}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* ── Training Partners ── */}
//             {trainingPartners.length > 0 && (
//               <section style={{ padding: '0 32px 64px' }} className="content-pad">
//                 <SectionHead title="Training & Clinical Partners" sub="Where students get real-world exposure" />
//                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
//                   {trainingPartners.map((tp, i) => (
//                     <div key={i} style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden' }}>
//                       <div style={{ padding: '16px 20px', background: '#1E3A5F', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                         <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff' }}>{tp.type}</div>
//                         <div style={{ padding: '4px 12px', background: '#FF6B35', fontSize: '11px', fontWeight: '700', color: '#fff', letterSpacing: '1px' }}>
//                           {tp.count}+
//                         </div>
//                       </div>
//                       <div style={{ padding: '16px 20px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
//                         {(tp.notable ?? []).map((name, j) => (
//                           <span key={j} style={{ padding: '5px 12px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '12px', fontWeight: '600', color: '#1E3A5F' }}>
//                             {name}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* ── Campus Life + Safety (side by side) ── */}
//             <section style={{ padding: '0 32px 64px' }} className="content-pad">
//               <SectionHead title="Campus Life" sub="Beyond the classroom" />
//               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="two-col">

//                 {/* Student Life */}
//                 <div style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden' }}>
//                   <div style={{ padding: '16px 24px', background: '#1E3A5F' }}>
//                     <FieldLabel>Student Life</FieldLabel>
//                     <div style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginTop: '4px' }}>Clubs, Sports & Culture</div>
//                   </div>
//                   {[
//                     { label: 'Student Clubs',    value: studentLife.clubs != null ? `${studentLife.clubs} clubs` : null },
//                     { label: 'Cultural Events',  value: studentLife.culturalEvents != null ? `${studentLife.culturalEvents} events / year` : null },
//                     { label: 'Sports',           value: sportsAvailable.length > 0 ? sportsAvailable.join(', ') : null },
//                     { label: 'Indian Association', value: studentLife.indianAssociation != null ? (studentLife.indianAssociation ? 'Yes — active chapter' : 'Not available') : null },
//                   ].filter(r => r.value !== null).map((row, i, arr) => (
//                     <div key={i} style={{ padding: '14px 24px', borderBottom: i < arr.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
//                       <span style={{ fontSize: '12px', fontWeight: '600', color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
//                       <span style={{ fontSize: '13px', fontWeight: '700', color: '#1E3A5F', textAlign: 'right' }}>{row.value}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Safety & Location */}
//                 <div style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden' }}>
//                   <div style={{ padding: '16px 24px', background: '#1E3A5F' }}>
//                     <FieldLabel>Safety & Location</FieldLabel>
//                     <div style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginTop: '4px' }}>Your Security Matters</div>
//                   </div>
//                   {[
//                     { label: 'Safety Rating',  value: safetyRating.overall ?? null },
//                     { label: 'Campus Security', value: safetyRating.campusSecurity != null ? (safetyRating.campusSecurity ? '24/7 Security Guards' : 'Standard security') : null },
//                     { label: '24/7 Support',   value: safetyRating.support247 != null ? (safetyRating.support247 ? 'Available round the clock' : 'Office hours only') : null },
//                     { label: 'Climate',        value: location.climate ?? null },
//                     { label: 'Nearest Airport', value: (location.nearestAirport && location.distanceKm != null) ? `${location.nearestAirport} · ${location.distanceKm} km` : (location.nearestAirport ?? null) },
//                   ].filter(r => r.value !== null).map((row, i, arr) => (
//                     <div key={i} style={{ padding: '14px 24px', borderBottom: i < arr.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
//                       <span style={{ fontSize: '12px', fontWeight: '600', color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
//                       <span style={{ fontSize: '13px', fontWeight: '700', color: '#1E3A5F', textAlign: 'right' }}>{row.value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>

//             {/* ── Facilities ── */}
//             {facilities.length > 0 && (
//               <section style={{ padding: '0 32px 64px' }} className="content-pad">
//                 <SectionHead title="Facilities" sub="What's available on campus" />
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//                   {facilities.map((f, i) => (
//                     <div key={i} className="doc-tag">
//                       <span style={{ color: '#FF6B35' }}>✓</span> {f}
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* ── Placements ── */}
//             {uni.placements && (
//               <section style={{ padding: '0 32px 64px' }} className="content-pad">
//                 <SectionHead title="Placements" sub="Graduate outcomes and employer network" />
//                 <div style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden' }}>
//                   <div style={{ display: 'flex', background: '#E2E8F0', gap: '1px' }}>
//                     {[
//                       { label: 'Placement Rate',   value: uni.placements.rate },
//                       ...(uni.placements.averagePackage ? [{ label: 'Average Package', value: uni.placements.averagePackage }] : []),
//                       ...(uni.placements.highestPackage ? [{ label: 'Highest Package', value: uni.placements.highestPackage }] : []),
//                     ].map((s, i) => (
//                       <div key={i} style={{ flex: 1, padding: '24px', background: '#fff', textAlign: 'center' }}>
//                         <div style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '800', color: '#FF6B35', letterSpacing: '-1px', marginBottom: '6px' }}>{s.value}</div>
//                         <div style={{ fontSize: '11px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{s.label}</div>
//                       </div>
//                     ))}
//                   </div>
//                   {(uni.placements.topRecruiters ?? []).length > 0 && (
//                     <div style={{ padding: '20px 24px' }}>
//                       <div style={{ fontSize: '11px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '14px' }}>Top Recruiters</div>
//                       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//                         {(uni.placements.topRecruiters ?? []).map((r, i) => (
//                           <span key={i} style={{ padding: '7px 16px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '12px', fontWeight: '700', color: '#1E3A5F' }}>{r}</span>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </section>
//             )}

//             {/* ── Mid CTA ── */}
//             <section style={{ padding: '0 32px 64px' }} className="content-pad">
//               <div className="cta-banner">
//                 <div style={{ position: 'relative', zIndex: 1 }}>
//                   <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.5)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px' }}>Your Seat Awaits</div>
//                   <h3 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px', marginBottom: '8px' }}>
//                     Start your journey at {uni.shortName ?? uni.name}
//                   </h3>
//                   <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', fontWeight: '500', maxWidth: '400px' }}>
//                     Expert counselors guide you from inquiry to enrollment — at zero cost.
//                   </p>
//                 </div>
//                 <button onClick={() => setIsModalOpen(true)} className="btn-white" style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
//                   Get Free Counseling →
//                 </button>
//               </div>
//             </section>

//           </div>
//         )}

//         {/* ════════════════════════════════════════
//             PROGRAMS TAB
//         ════════════════════════════════════════ */}
//         {activeTab === 'programs' && (
//           <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px 80px' }} className="content-pad">
//             <SectionHead
//               title={`Programs at ${uni.shortName ?? uni.name}`}
//               sub={programs.length > 0 ? `${programs.length} program${programs.length !== 1 ? 's' : ''} offered` : 'Contact us for the latest program list'}
//             />

//             {programs.length > 0 ? (
//               <>
//                 <div className="prog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
//                   {programs.map((prog, i) => {
//                     const progDataRows = [
//                       { label: 'Duration', value: prog.duration },
//                       { label: 'Seats',    value: prog.seats ? `${prog.seats} seats` : null },
//                       { label: 'Intakes',  value: (prog.intakes ?? []).length > 0 ? (prog.intakes ?? []).join(' · ') : null },
//                     ].filter(r => r.value !== null);

//                     return (
//                       <div key={i} className="prog-card">
//                         <div style={{ padding: '20px 24px', borderBottom: '1px solid #F1F5F9' }}>
//                           <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
//                             {prog.category}
//                           </div>
//                           <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1E3A5F', lineHeight: '1.25', marginBottom: '4px' }}>
//                             {prog.degree}
//                           </h3>
//                           <div style={{ fontSize: '13px', fontWeight: '600', color: '#64748B' }}>{prog.name}</div>
//                         </div>

//                         <div style={{ background: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '1px', flex: 1 }}>
//                           {progDataRows.map((row, j) => (
//                             <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 20px', background: '#fff', gap: '12px' }}>
//                               <span style={{ fontSize: '11px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', flexShrink: 0 }}>{row.label}</span>
//                               <span style={{ fontSize: '13px', fontWeight: '800', color: '#1E3A5F', textAlign: 'right' }}>{row.value}</span>
//                             </div>
//                           ))}
//                         </div>

//                         <div
//                           onClick={() => setIsModalOpen(true)}
//                           style={{ padding: '15px 20px', background: '#F8FAFC', fontSize: '11px', fontWeight: '700', color: '#1E3A5F', letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s ease', borderTop: '1px solid #E2E8F0' }}
//                           onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#FF6B35'; (e.currentTarget as HTMLDivElement).style.color = '#fff'; }}
//                           onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#F8FAFC'; (e.currentTarget as HTMLDivElement).style.color = '#1E3A5F'; }}
//                         >
//                           Enquire About This Program →
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 {eligibleFor.length > 0 && (
//                   <div style={{ marginTop: '48px' }}>
//                     <div style={{ fontSize: '12px', fontWeight: '700', color: '#94A3B8', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
//                       Degree Eligible For
//                     </div>
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//                       {eligibleFor.map((exam, i) => <CheckBadge key={i}>{exam}</CheckBadge>)}
//                     </div>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <div style={{ padding: '80px 40px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
//                 <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1E3A5F', marginBottom: '12px' }}>Program Details Coming Soon</h3>
//                 <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '28px' }}>Contact us to get the full program list for {uni.name}.</p>
//                 <button onClick={() => setIsModalOpen(true)} className="btn-orange">Contact Us →</button>
//               </div>
//             )}
//           </div>
//         )}

//         {/* ════════════════════════════════════════
//             ADMISSIONS TAB
//         ════════════════════════════════════════ */}
//         {activeTab === 'admissions' && (
//           <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px 80px' }} className="content-pad">
//             <SectionHead title="Admissions" sub="Eligibility, documents, and the step-by-step process" />

//             {/* Eligibility + Docs */}
//             {(eligibility.exam || eligibility.minScore || eligibility.minPercentage || eligibility.ageLimit || requiredDocs.length > 0) && (
//               <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '1px', background: '#E2E8F0', border: '1px solid #E2E8F0', marginBottom: '48px' }} className="elig-grid">

//                 {/* Left — Criteria */}
//                 <div style={{ background: '#fff', padding: '28px 28px 12px' }}>
//                   <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>Eligibility Criteria</div>
//                   {[
//                     { icon: '📋', label: 'Exam Required',  value: eligibility.exam },
//                     { icon: '🎯', label: 'Min Score',      value: eligibility.minScore },
//                     { icon: '🎓', label: 'Min Percentage', value: eligibility.minPercentage },
//                     { icon: '🎂', label: 'Age Limit',      value: eligibility.ageLimit },
//                   ].filter(e => e.value).map((item, i) => (
//                     <div key={i} className="elig-item">
//                       <div style={{ width: '44px', height: '44px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
//                         {item.icon}
//                       </div>
//                       <div>
//                         <div style={{ fontSize: '10px', fontWeight: '700', color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>{item.label}</div>
//                         <div style={{ fontSize: '15px', fontWeight: '700', color: '#1E3A5F', lineHeight: '1.4' }}>{item.value}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Right — Documents */}
//                 <div style={{ background: '#fff', padding: '28px' }}>
//                   <div style={{ fontSize: '12px', fontWeight: '700', color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>Required Documents</div>
//                   {requiredDocs.length > 0 ? (
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
//                       {requiredDocs.map((doc, i) => <DocTag key={i}>{doc}</DocTag>)}
//                     </div>
//                   ) : (
//                     <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '28px' }}>Contact us for the full documents checklist.</p>
//                   )}
//                   <div style={{ padding: '20px', border: '1px solid #E2E8F0', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
//                     <div>
//                       <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', marginBottom: '4px' }}>Need help with documents?</div>
//                       <div style={{ fontSize: '12px', color: '#64748B' }}>Our team handles everything for you.</div>
//                     </div>
//                     <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ padding: '11px 22px', fontSize: '12px' }}>Get Help →</button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Admission Steps */}
//             {admissionSteps.length > 0 && (
//               <>
//                 <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1E3A5F', letterSpacing: '-0.4px', marginBottom: '4px' }}>Admission Process</h3>
//                 <p style={{ fontSize: '14px', color: '#64748B', fontWeight: '500', marginBottom: '28px' }}>Follow these steps to secure your seat</p>
//                 <div style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden' }}>
//                   {admissionSteps.map((step, i) => (
//                     <div key={i} className="step-item">
//                       <div style={{ minWidth: '40px', height: '40px', background: i === 0 ? '#FF6B35' : '#F8FAFC', border: i === 0 ? 'none' : '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '800', color: i === 0 ? '#fff' : '#1E3A5F', flexShrink: 0 }}>
//                         {String(i + 1).padStart(2, '0')}
//                       </div>
//                       <p style={{ fontSize: '15px', fontWeight: '600', color: '#1E3A5F', lineHeight: '1.6', margin: 0, paddingTop: '8px' }}>{step}</p>
//                     </div>
//                   ))}
//                   <div style={{ padding: '24px 28px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
//                     <div>
//                       <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F', marginBottom: '4px' }}>Ready to get started?</div>
//                       <div style={{ fontSize: '12px', color: '#64748B' }}>Our counselors guide you through every step, free of charge.</div>
//                     </div>
//                     <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ marginLeft: 'auto' }}>Start Application →</button>
//                   </div>
//                 </div>
//               </>
//             )}

//             {/* Eligible-for exams */}
//             {eligibleFor.length > 0 && (
//               <div style={{ marginTop: '48px' }}>
//                 <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1E3A5F', letterSpacing: '-0.4px', marginBottom: '4px' }}>Exam Eligibility</h3>
//                 <p style={{ fontSize: '14px', color: '#64748B', fontWeight: '500', marginBottom: '20px' }}>
//                   Degrees from {uni.shortName ?? uni.name} are recognized for these licensing exams
//                 </p>
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//                   {eligibleFor.map((exam, i) => <CheckBadge key={i}>{exam}</CheckBadge>)}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {/* ════════════════════════════════════════
//             FEES TAB
//         ════════════════════════════════════════ */}
//         {activeTab === 'fees' && (
//           <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px 80px' }} className="content-pad">
//             <SectionHead title="Fee Structure" sub="Complete cost breakdown for your planning" />

//             <div className="fee-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '32px', alignItems: 'start' }}>

//               {/* Left */}
//               <div>
//                 <div style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden', marginBottom: '24px' }}>
//                   <div style={{ padding: '20px 24px', background: '#1E3A5F' }}>
//                     <FieldLabel>Annual Breakdown</FieldLabel>
//                     <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff', marginTop: '4px' }}>
//                       {fees.currency ?? 'USD'} — Per Academic Year
//                     </div>
//                   </div>

//                   {/* Tuition */}
//                   {fees.tuitionPerYear != null && (
//                     <div className="fee-row">
//                       <div style={{ flex: 1 }}>
//                         <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F' }}>Tuition Fee / Year</div>
//                         <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '600', marginTop: '2px' }}>Academic fees per annum</div>
//                       </div>
//                       <div style={{ fontSize: '16px', fontWeight: '800', color: '#1E3A5F', flexShrink: 0 }}>
//                         {fees.currency} {fees.tuitionPerYear.toLocaleString()}
//                       </div>
//                     </div>
//                   )}

//                   {/* Hostel */}
//                   {fees.hostelPerYear != null && (
//                     <div className="fee-row">
//                       <div style={{ flex: 1 }}>
//                         <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E3A5F' }}>Hostel Fee / Year</div>
//                         <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '600', marginTop: '2px' }}>Including meals / boarding</div>
//                       </div>
//                       <div style={{ fontSize: '16px', fontWeight: '800', color: '#1E3A5F', flexShrink: 0 }}>
//                         {fees.currency} {fees.hostelPerYear.toLocaleString()}
//                       </div>
//                     </div>
//                   )}

//                   {/* Total first year */}
//                   {fees.totalFirstYear != null && (
//                     <div style={{ padding: '16px 24px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
//                       <div>
//                         <div style={{ fontSize: '12px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '3px' }}>Total First Year</div>
//                         <div style={{ fontSize: '11px', color: '#64748B' }}>All inclusive — first year</div>
//                       </div>
//                       <div style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: '800', color: '#1E3A5F', letterSpacing: '-0.5px' }}>
//                         {fees.currency} {fees.totalFirstYear.toLocaleString()}
//                       </div>
//                     </div>
//                   )}

//                   {/* Total course */}
//                   {fees.totalCourse != null && (
//                     <div style={{ padding: '16px 24px', background: '#1E3A5F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
//                       <div>
//                         <div style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '3px' }}>Total Course Cost</div>
//                         <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Complete {programs[0]?.duration ?? 'program'}</div>
//                       </div>
//                       <div style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', color: '#FF6B35', letterSpacing: '-1px' }}>
//                         {fees.currency} {fees.totalCourse.toLocaleString()}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Accommodation */}
//                 {accommodation.available && (
//                   <div style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden', marginBottom: '24px' }}>
//                     <div style={{ padding: '16px 24px', borderBottom: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
//                       <div>
//                         <div style={{ fontSize: '15px', fontWeight: '800', color: '#1E3A5F' }}>Accommodation</div>
//                         <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>On-campus hostel</div>
//                       </div>
//                       <div style={{ textAlign: 'right' }}>
//                         {accommodation.costPerYear != null && (
//                           <div style={{ fontSize: '18px', fontWeight: '800', color: '#1E3A5F' }}>
//                             {fees.currency} {accommodation.costPerYear.toLocaleString()} <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '600' }}>/year</span>
//                           </div>
//                         )}
//                         {accommodation.capacity != null && (
//                           <div style={{ fontSize: '11px', color: '#64748B', marginTop: '2px' }}>Capacity: {accommodation.capacity.toLocaleString()} students</div>
//                         )}
//                       </div>
//                     </div>
//                     {(accommodation.features ?? []).length > 0 && (
//                       <div style={{ padding: '16px 24px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
//                         {(accommodation.features ?? []).map((f, i) => (
//                           <span key={i} style={{ padding: '5px 12px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '12px', fontWeight: '600', color: '#1E3A5F' }}>{f}</span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {/* Disclaimer */}
//                 <div style={{ padding: '16px 20px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
//                   <span style={{ fontSize: '18px', flexShrink: 0 }}>ℹ️</span>
//                   <p style={{ fontSize: '12px', color: '#64748B', fontWeight: '500', lineHeight: '1.6', margin: 0 }}>
//                     All fees are approximate and subject to change. Exchange rate fluctuations may affect the final amount. Contact our counselors for the most current fee structure before making any payment.
//                   </p>
//                 </div>
//               </div>

//               {/* Right — sticky value panel */}
//               <div style={{ border: '1px solid #E2E8F0', background: '#fff', position: 'sticky', top: '140px' }}>
//                 <div style={{ padding: '20px 24px', background: '#FF6B35' }}>
//                   <FieldLabel>Why It's Worth It</FieldLabel>
//                   <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff', marginTop: '4px' }}>Cost vs Value</div>
//                 </div>
//                 {[
//                   { icon: '🎓', label: 'Accreditations',   value: accreditations.length ? accreditations.join(', ') : null },
//                   { icon: '📊', label: 'Pass Rate',         value: stats.passRate ?? null },
//                   { icon: '👥', label: "Int'l Students",    value: stats.internationalStudents != null ? `${stats.internationalStudents.toLocaleString()} students` : null },
//                   { icon: '👨‍🏫', label: 'Faculty Ratio',  value: stats.facultyRatio ?? null },
//                   { icon: '🌍', label: 'Campus Size',       value: stats.campusSize ?? null },
//                   { icon: '🏥', label: 'Clinical Partners', value: trainingPartners[0] ? `${trainingPartners[0].count}+ ${trainingPartners[0].type}` : null },
//                 ].filter(r => r.value !== null).map((item, i, arr) => (
//                   <div key={i} style={{ padding: '14px 20px', borderBottom: i < arr.length - 1 ? '1px solid #F1F5F9' : 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
//                     <span style={{ fontSize: '18px' }}>{item.icon}</span>
//                     <div>
//                       <div style={{ fontSize: '11px', fontWeight: '700', color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase' }}>{item.label}</div>
//                       <div style={{ fontSize: '13px', fontWeight: '700', color: '#1E3A5F', marginTop: '2px' }}>{item.value}</div>
//                     </div>
//                   </div>
//                 ))}
//                 <div style={{ padding: '20px 24px', borderTop: '1px solid #F1F5F9' }}>
//                   <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ width: '100%', justifyContent: 'center' }}>
//                     Get Full Fee Breakdown →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* ════════════════════════════════════════
//             FINAL CTA
//         ════════════════════════════════════════ */}
//         <section style={{ position: 'relative', overflow: 'hidden' }}>
//           <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${galleryImages[0] ?? uni.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
//           <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,24,48,0.91)' }} />
//           <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '100px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px', flexWrap: 'wrap' }}>
//             <div>
//               <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '12px' }}>Take the Next Step</div>
//               <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: '800', color: '#fff', letterSpacing: '-2px', lineHeight: '1.0', marginBottom: '16px' }}>
//                 Your Medical Career<br />
//                 <span style={{ color: '#FF6B35' }}>Starts at {uni.shortName ?? uni.name}</span>
//               </h2>
//               <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', fontWeight: '500', maxWidth: '440px' }}>
//                 Expert counselors guide you from first inquiry to enrollment — at zero cost.
//               </p>
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '220px' }}>
//               <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ justifyContent: 'center' }}>Apply Now →</button>
//               <Link href={`/destinations/${uni.countrySlug}`} className="btn-white" style={{ justifyContent: 'center', color: '#1E3A5F' }}>
//                 More in {uni.country} {uni.flag}
//               </Link>
//             </div>
//           </div>
//         </section>

//       </div>
//       <Footer />
//     </>
//   );
// }
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadFormModal from '../components/LeadForm';
import type { University } from '../data/universityData';

interface UniversityPageProps { university: University; }
type TabId = 'overview' | 'programs' | 'admissions' | 'fees';

// ─────────────────────────────────────────────────────────────────────────────
// SVG Icon set — zero emoji, renders identically on every browser + OS
// ─────────────────────────────────────────────────────────────────────────────
const SVG = {
  calendar: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  building: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
  book: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
  users: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  graduationCap: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  user: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  globe: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  barChart: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  ),
  mapPin: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  shield: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  hospital: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="2" width="18" height="20" rx="1"/><line x1="9" y1="22" x2="9" y2="12"/><line x1="15" y1="22" x2="15" y2="12"/><rect x="9" y="12" width="6" height="10"/><line x1="12" y1="6" x2="12" y2="10"/><line x1="10" y1="8" x2="14" y2="8"/>
    </svg>
  ),
  award: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  ),
  trendUp: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  check: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  arrowRight: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  link: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),
  info: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  ),
};

// ─── Icon wrapper for stat items ──────────────────────────────────────────────
function StatIconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="stat-icon-box" style={{ width: 36, height: 36, flexShrink: 0, background: '#F0F4FF', borderLeft: '3px solid #FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </div>
  );
}

// ─── Misc atoms ───────────────────────────────────────────────────────────────
function FieldLabel({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', letterSpacing: '1.8px', textTransform: 'uppercase', marginBottom: 1 }}>{children}</div>;
}

function SectionHead({ title, sub }: { title: string; sub: string }) {
  return (
    <>
      <h2 className="section-h2">{title}</h2>
      <p className="section-sub">{sub}</p>
    </>
  );
}

function DocTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="doc-tag">
      <span style={{ color: '#FF6B35' }}>{SVG.link}</span>{children}
    </span>
  );
}

function CheckBadge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', border: '1px solid #E2E8F0', background: '#F8FAFC', fontSize: 12, fontWeight: 700, color: '#1E3A5F' }}>
      <span style={{ color: '#FF6B35', display: 'flex' }}>{SVG.check}</span>
      {children}
    </span>
  );
}

function VerifiedBadge({ label }: { label: string }) {
  return (
    <div
      style={{ padding: '8px 14px', border: '1px solid #E2E8F0', background: '#fff', display: 'flex', alignItems: 'center', gap: 10, transition: 'border-color 0.2s', cursor: 'default' }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#FF6B35'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#E2E8F0'; }}
    >
      <div style={{ width: 26, height: 26, background: '#FF6B35', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>{SVG.check}</div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 800, color: '#1E3A5F' }}>{label}</div>
        <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B35', letterSpacing: '1.2px', textTransform: 'uppercase', marginTop: 1 }}>Recognized</div>
      </div>
    </div>
  );
}

// Value panel row in fees/keyfacts sidebar — SVG icon
function ValueRow({ svg, label, value }: { svg: React.ReactNode; label: string; value: string }) {
  return (
    <div style={{ padding: '9px 14px', borderBottom: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ width: 30, height: 30, flexShrink: 0, background: '#F0F4FF', borderLeft: '3px solid #FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {svg}
      </div>
      <div>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', letterSpacing: '0.8px', textTransform: 'uppercase' }}>{label}</div>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#1E3A5F', marginTop: 1 }}>{value}</div>
      </div>
    </div>
  );
}

// Card section header with accent bar
function CardHeader({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ padding: '10px 14px', background: '#1E3A5F', display: 'flex', alignItems: 'center', gap: 0 }}>
      <div style={{ width: 4, height: 32, background: '#FF6B35', marginRight: 12, flexShrink: 0 }} />
      <div>
        <FieldLabel>{label}</FieldLabel>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#fff', marginTop: 1 }}>{title}</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Page Component
// ─────────────────────────────────────────────────────────────────────────────
export default function UniversityPage({ university: uni }: UniversityPageProps) {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!uni) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Plus Jakarta Sans",sans-serif' }}>
          <p style={{ fontSize: 16, color: '#64748B' }}>University not found.</p>
        </div>
        <Footer />
      </>
    );
  }

  const accreditations   = uni.accreditations   ?? [];
  const programs         = uni.programs         ?? [];
  const whyChoose        = uni.whyChoose        ?? [];
  const highlights       = uni.highlights       ?? [];
  const keyFeatures      = uni.keyFeatures      ?? [];
  const facilities       = uni.facilities       ?? [];
  const trainingPartners = uni.trainingPartners ?? [];
  const eligibleFor      = uni.eligibleFor      ?? [];
  const admissionSteps   = uni.admissionSteps   ?? [];
  const galleryImages    = uni.galleryImages    ?? [];
  const infrastructure   = uni.infrastructure   ?? {};
  const stats            = uni.stats            ?? {} as University['stats'];
  const ranking          = uni.ranking          ?? {};
  const studentLife      = uni.studentLife      ?? {} as University['studentLife'];
  const safetyRating     = uni.safetyRating     ?? {} as University['safetyRating'];
  const location         = uni.location         ?? {} as University['location'];
  const fees             = uni.fees             ?? {} as University['fees'];
  const eligibility      = uni.eligibility      ?? {} as University['eligibility'];
  const requiredDocs     = eligibility.requiredDocs ?? [];
  const accommodation    = uni.accommodation    ?? {} as University['accommodation'];
  const sportsAvailable  = studentLife.sportsAvailable ?? [];

  const tabs: { id: TabId; label: string }[] = [
    { id: 'overview',   label: 'Overview'   },
    { id: 'programs',   label: 'Programs'   },
    { id: 'admissions', label: 'Admissions' },
    { id: 'fees',       label: 'Fees'       },
  ];

  // SVG-icon stat items — no emoji at all
  const statBarItems = [
    { svg: SVG.calendar,      label: 'Established',     value: uni.establishedYear ? String(uni.establishedYear) : null },
    // { svg: SVG.building,      label: 'Type',            value: uni.universityType ?? null },
    // { svg: SVG.book,          label: 'Medium',          value: uni.mediumOfInstruction ?? null },
    { svg: SVG.users,         label: 'Total Students',  value: stats.totalStudents != null ? stats.totalStudents.toLocaleString() : null },
    // { svg: SVG.graduationCap, label: 'Indian Students', value: stats.indianStudents != null ? stats.indianStudents.toLocaleString() : null },
    // { svg: SVG.user,          label: 'Faculty Ratio',   value: stats.facultyRatio ?? null },
    { svg: SVG.globe,         label: 'Campus Size',     value: stats.campusSize ?? null },
    { svg: SVG.barChart,      label: 'Pass Rate',       value: stats.passRate ?? null },
  ].filter(s => s.value !== null);

  const keyFacts = [
    { label: 'Global Rank',    value: ranking.globalRank  ? `#${ranking.globalRank}`  : null },
    { label: 'Country Rank',   value: ranking.countryRank ? `#${ranking.countryRank}` : null },
    { label: 'Category',       value: ranking.category ?? null },
    { label: 'Accreditations', value: accreditations.length ? accreditations.join(', ') : null },
    { label: 'Total Students', value: stats.totalStudents != null ? stats.totalStudents.toLocaleString() : null },
    { label: 'International',  value: stats.internationalStudents != null ? stats.internationalStudents.toLocaleString() : null },
    { label: 'Faculty',        value: (stats.facultyCount && stats.facultyRatio) ? `${stats.facultyCount} · ${stats.facultyRatio} ratio` : (stats.facultyRatio ?? null) },
    { label: 'Pass Rate',      value: stats.passRate ?? null },
    { label: 'Placement Rate', value: stats.placementRate ?? null },
    { label: 'Medium',         value: uni.mediumOfInstruction ?? null },
  ].filter(r => r.value !== null);

  const infraItems = [
    { label: 'Libraries',        value: infrastructure.libraries },
    { label: 'Labs',             value: infrastructure.labs },
    { label: 'Hospitals',        value: infrastructure.hospitals },
    { label: 'Research Centres', value: infrastructure.researchCenters },
    { label: 'Hostels',          value: infrastructure.hostels },
    { label: 'Book Collection',  value: infrastructure.bookCollection },
  ].filter(r => r.value !== undefined && r.value !== null);

  const valueItems = [
    { svg: SVG.award,   label: 'Accreditations',   value: accreditations.length ? accreditations.join(', ') : null },
    { svg: SVG.barChart,label: 'Pass Rate',         value: stats.passRate ?? null },
    { svg: SVG.users,   label: "Int'l Students",    value: stats.internationalStudents != null ? `${stats.internationalStudents.toLocaleString()} students` : null },
    { svg: SVG.user,    label: 'Faculty Ratio',     value: stats.facultyRatio ?? null },
    { svg: SVG.globe,   label: 'Campus Size',       value: stats.campusSize ?? null },
    { svg: SVG.hospital,label: 'Clinical Partners', value: trainingPartners[0] ? `${trainingPartners[0].count}+ ${trainingPartners[0].type}` : null },
  ].filter(r => r.value !== null);

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', background: '#fff', fontFamily: '"Plus Jakarta Sans",sans-serif' }}>

        <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} universityName={uni.name} countryCode={uni.countrySlug} />

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          button, a { -webkit-tap-highlight-color: transparent; }

          /* ── Tabs ── */
          .page-tabs { background: #fff; border-bottom: 1px solid #E2E8F0; position: sticky; top: 0; z-index: 40; box-shadow: 0 1px 4px rgba(0,0,0,0.05); }
          .page-tabs-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
          .page-tabs-inner::-webkit-scrollbar { display: none; }
          .page-tab { padding: 12px 20px; background: transparent; border: none; border-bottom: 2px solid transparent; font-size: 13px; font-weight: 600; font-family: inherit; color: #64748B; cursor: pointer; transition: color 0.2s, border-color 0.2s; white-space: nowrap; flex-shrink: 0; min-height: 44px; }
          .page-tab.active { color: #1E3A5F; border-bottom-color: #FF6B35; }
          .page-tab:hover:not(.active) { color: #1E3A5F; }

          /* ── Stat bar — always CSS grid, reflows cleanly on all widths ── */
          .stat-bar {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
            gap: 1px;
            background: #E2E8F0;
            border-bottom: 2px solid #E2E8F0;
          }
          .stat-bar-item {
            display: flex; align-items: center; gap: 10px;
            padding: 13px 16px; background: #fff; transition: background 0.15s;
            min-width: 0;
          }
          .stat-bar-item:hover { background: #F8FAFC; }
          .stat-bar-label { font-size: 10px; font-weight: 700; color: #94A3B8; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 2px; }
          .stat-bar-value { font-size: 13px; font-weight: 700; color: #1E3A5F; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

          /* ── Section heading ── */
          .section-h2 { font-size: clamp(16px, 3.5vw, 22px); font-weight: 800; color: #1E3A5F; letter-spacing: -0.4px; margin-bottom: 3px; }
          .section-sub { font-size: 13px; color: #64748B; font-weight: 500; margin-bottom: 20px; }

          /* ── Why-choose ── */
          .why-item { display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; border: 1px solid #E2E8F0; background: #fff; margin-bottom: 2px; position: relative; transition: box-shadow 0.2s, border-color 0.2s; }
          .why-item::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:transparent; transition: background 0.2s; }
          .why-item:hover::before { background: #FF6B35; }
          .why-item:hover { box-shadow: 0 3px 12px rgba(30,58,95,0.07); border-color: rgba(255,107,53,0.2); }

          /* ── Highlight card ── */
          .highlight-card { padding: 18px 14px; border: 1px solid #E2E8F0; background: #fff; transition: all 0.2s; position: relative; overflow: hidden; }
          .highlight-card::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; background: #FF6B35; transform: scaleX(0); transition: transform 0.2s; transform-origin: left; }
          .highlight-card:hover::after { transform: scaleX(1); }
          .highlight-card:hover { box-shadow: 0 4px 14px rgba(30,58,95,0.07); }

          /* ── Feature card ── */
          .feature-card { padding: 13px; border: 1px solid #E2E8F0; background: #fff; display: flex; align-items: flex-start; gap: 11px; transition: border-color 0.2s, box-shadow 0.2s; }
          .feature-card:hover { border-color: rgba(255,107,53,0.3); box-shadow: 0 2px 8px rgba(30,58,95,0.05); }

          /* ── Program card ── */
          .prog-card { border: 1px solid #E2E8F0; background: #fff; display: flex; flex-direction: column; overflow: hidden; position: relative; transition: box-shadow 0.2s, border-color 0.2s; }
          .prog-card::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:transparent; transition: background 0.2s; }
          .prog-card:hover::before { background: #FF6B35; }
          .prog-card:hover { box-shadow: 0 4px 18px rgba(30,58,95,0.08); border-color: rgba(255,107,53,0.2); }

          /* ── Eligibility row ── */
          .elig-item { display: flex; align-items: flex-start; gap: 11px; padding: 11px 0; border-bottom: 1px solid #F1F5F9; }
          .elig-item:last-child { border-bottom: none; }

          /* ── Step item ── */
          .step-item { display: flex; align-items: flex-start; gap: 13px; padding: 13px 18px; border-bottom: 1px solid #F1F5F9; }
          .step-item:last-child { border-bottom: none; }

          /* ── Doc tag ── */
          .doc-tag { padding: 5px 10px; border: 1px solid #E2E8F0; background: #F8FAFC; font-size: 11px; font-weight: 600; color: #1E3A5F; display: inline-flex; align-items: center; gap: 5px; transition: all 0.2s; }
          .doc-tag:hover { border-color: #FF6B35; color: #FF6B35; }

          /* ── Fee row ── */
          .fee-row { display: flex; align-items: center; padding: 12px 16px; border-bottom: 1px solid #F1F5F9; gap: 12px; transition: background 0.15s; }
          .fee-row:last-child { border-bottom: none; }
          .fee-row:hover { background: #F8FAFC; }

          /* ── Infra cell ── */
          .infra-cell { padding: clamp(12px,2vw,24px) clamp(10px,1.5vw,20px); background: #fff; text-align: center; transition: background 0.15s; min-width: 0; word-break: break-word; }
          .infra-cell:hover { background: #F8FAFC; }

          /* ── Data row ── */
          .data-row { padding: 9px 14px; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; border-bottom: 1px solid #F1F5F9; }
          .data-row:last-child { border-bottom: none; }

          /* ── Buttons ── */
          .btn-orange { display: inline-flex; align-items: center; justify-content: center; gap: 7px; padding: 12px 24px; background: #FF6B35; color: #fff; border: 2px solid #FF6B35; font-size: 13px; font-weight: 700; font-family: inherit; cursor: pointer; text-decoration: none; transition: background 0.2s, border-color 0.2s; min-height: 44px; }
          .btn-orange:hover { background: #E85D29; border-color: #E85D29; }
          .btn-white  { display: inline-flex; align-items: center; justify-content: center; gap: 7px; padding: 12px 24px; background: #fff; color: #1E3A5F; border: 2px solid #fff; font-size: 13px; font-weight: 700; font-family: inherit; cursor: pointer; text-decoration: none; transition: background 0.2s, color 0.2s; min-height: 44px; }
          .btn-white:hover { background: transparent; color: #fff; }
          .btn-ghost  { display: inline-flex; align-items: center; justify-content: center; gap: 7px; padding: 12px 20px; background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.35); font-size: 13px; font-weight: 700; font-family: inherit; cursor: pointer; min-height: 44px; transition: background 0.2s; }
          .btn-ghost:hover { background: rgba(255,255,255,0.1); }

          /* ── CTA banner ── */
          .cta-banner { background: #1E3A5F; padding: 32px 28px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; position: relative; overflow: hidden; }
          .cta-banner::before { content:''; position:absolute; right:-50px; top:-50px; width:140px; height:140px; border:1px solid rgba(255,255,255,0.07); transform:rotate(15deg); }

          /* ══════════════════════════════════
             TABLET ≤ 1024px
          ══════════════════════════════════ */
          @media (max-width: 1024px) {
            .prog-grid    { grid-template-columns: repeat(2,1fr) !important; }
            .feature-grid { grid-template-columns: repeat(2,1fr) !important; }
            .fee-layout   { grid-template-columns: 1fr !important; }
            .fee-sticky, .key-facts-sticky { position: static !important; }
          }

          /* ══════════════════════════════════
             MOBILE ≤ 768px
          ══════════════════════════════════ */
          @media (max-width: 768px) {
            /* Hero */
            .hero-inner { padding: 80px 16px 32px !important; }
            .hero-btns  { flex-direction: column !important; }
            .hero-btns > * { width: 100% !important; }

            /* Content */
            .content-pad { padding-left: 16px !important; padding-right: 16px !important; }

            /* Stat bar → 2-col card grid on mobile, text stacks vertically */
            .stat-bar { grid-template-columns: repeat(2, 1fr) !important; }
            .stat-bar-item {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 6px !important;
              padding: 14px 16px !important;
              border-left: 3px solid #FF6B35 !important;
            }
            .stat-bar-value { font-size: 15px !important; white-space: normal !important; }

            /* Grids */
            .two-col, .campus-grid, .elig-grid, .prog-grid,
            .training-grid, .fee-layout { grid-template-columns: 1fr !important; }
            .highlight-grid, .feature-grid, .infra-grid { grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)) !important; }

            /* Sticky panels become static */
            .key-facts-sticky, .fee-sticky { position: static !important; }

            /* CTA */
            .cta-banner { padding: 24px 16px !important; flex-direction: column !important; align-items: flex-start !important; }
            .btn-orange, .btn-white { width: 100% !important; }

            /* Final CTA */
            .final-cta-inner { flex-direction: column !important; padding: 48px 16px !important; }
            .final-cta-btns  { flex-direction: column !important; width: 100% !important; }
            .final-cta-btns > * { width: 100% !important; }

            /* Stat SVG icon hidden — item shows label+value card only */
            .stat-icon-box { display: none !important; }
          }

          /* ══════════════════════════════════
             SMALL PHONE ≤ 480px
          ══════════════════════════════════ */
          @media (max-width: 480px) {
            .stat-icon-box  { display: none !important; }
            .feature-grid   { grid-template-columns: 1fr !important; }
            .highlight-grid { grid-template-columns: repeat(2,1fr) !important; }
            .infra-grid     { grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)) !important; }
          }
        `}</style>

        {/* ════════════════ HERO ════════════════ */}
        <section style={{ position: 'relative', minHeight: 420, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${uni.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,rgba(12,24,48,0.95) 40%,rgba(12,24,48,0.5) 100%)' }} />

          <div className="hero-inner" style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '110px 32px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>

            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
              <Link href="/destinations" style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: 500 }}>Destinations</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <Link href={`/destinations/${uni.countrySlug}`} style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: 500 }}>{uni.country}</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{uni.shortName ?? uni.name}</span>
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
              {uni.universityType && (
                <span style={{ padding: '3px 10px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{uni.universityType}</span>
              )}
              {accreditations.map((acc, i) => (
                <span key={i} style={{ padding: '3px 10px', background: acc === 'NMC' ? '#FF6B35' : 'rgba(255,255,255,0.12)', border: acc === 'NMC' ? 'none' : '1px solid rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{acc}</span>
              ))}
            </div>

            <h1 style={{ fontSize: 'clamp(22px,5vw,46px)', fontWeight: 800, color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, marginBottom: 8, maxWidth: 680 }}>{uni.name}</h1>

            {/* Location — pure SVG pin, no emoji */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <span style={{ display: 'flex', flexShrink: 0 }}>{SVG.mapPin}</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>
                {uni.city}{uni.state ? `, ${uni.state}` : ''}, {uni.country}
              </span>
            </div>

            {uni.tagline && (
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 500, lineHeight: 1.6, maxWidth: 500, marginBottom: 22 }}>{uni.tagline}</p>
            )}

            <div className="hero-btns" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button onClick={() => setIsModalOpen(true)} className="btn-orange">Apply Now →</button>
              {/* <button onClick={() => setActiveTab('programs')} className="btn-ghost">View Programs</button> */}
              {uni.website && (
                <a href={uni.website} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '12px 20px', background: 'transparent', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.2)', fontSize: 13, fontWeight: 600, textDecoration: 'none', fontFamily: 'inherit', minHeight: 44 }}>
                  {SVG.link} Official Site
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ════════════════ STAT BAR ════════════════ */}
        {statBarItems.length > 0 && (
          <div className="stat-bar">
            {statBarItems.map((s, i) => (
              <div key={i} className="stat-bar-item">
                <StatIconBox>{s.svg}</StatIconBox>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div className="stat-bar-label">{s.label}</div>
                  <div className="stat-bar-value">{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ════════════════ TABS ════════════════ */}
        <div className="page-tabs">
          <div className="page-tabs-inner" role="tablist">
            {tabs.map(tab => (
              <button key={tab.id} role="tab" aria-selected={activeTab === tab.id} className={`page-tab${activeTab === tab.id ? ' active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════
            OVERVIEW
        ════════════════════════════════════════════ */}
        {activeTab === 'overview' && (
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>

            {/* Why Choose + Key Facts */}
            {(whyChoose.length > 0 || keyFacts.length > 0) && (
              <section style={{ padding: '36px 32px' }} className="content-pad">
                <SectionHead title={`Why Choose ${uni.shortName ?? uni.name}`} sub="The key reasons students pick this university" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 278px', gap: 24, alignItems: 'start' }} className="two-col">
                  <div>
                    {whyChoose.map((point, i) => (
                      <div key={i} className="why-item">
                        <div style={{ minWidth: 26, height: 26, background: '#FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: '#fff', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</div>
                        <p style={{ fontSize: 13, fontWeight: 600, color: '#1E3A5F', lineHeight: 1.55, margin: 0 }}>{point}</p>
                      </div>
                    ))}
                  </div>

                  {keyFacts.length > 0 && (
                    <div className="key-facts-sticky" style={{ border: '1px solid #E2E8F0', background: '#fff', position: 'sticky', top: 54 }}>
                      <div style={{ padding: '11px 14px', background: '#1E3A5F', borderLeft: '4px solid #FF6B35' }}>
                        <FieldLabel>At a Glance</FieldLabel>
                        <div style={{ fontSize: 14, fontWeight: 800, color: '#fff', marginTop: 2 }}>Key Facts</div>
                      </div>
                      {keyFacts.map((row, i) => (
                        <div key={i} className="data-row">
                          <span style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
                          <span style={{ fontSize: 12, fontWeight: 800, color: '#1E3A5F', textAlign: 'right', wordBreak: 'break-word' }}>{row.value}</span>
                        </div>
                      ))}
                      <div style={{ padding: '12px 14px', borderTop: '1px solid #F1F5F9' }}>
                        <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ width: '100%' }}>Apply Now →</button>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Highlights — SVG icon strip replaces emoji */}
            {highlights.length > 0 && (
              <section style={{ padding: '0 32px 36px' }} className="content-pad">
                <SectionHead title="By the Numbers" sub="What the data says about this university" />
                <div className="highlight-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(highlights.length, 4)},1fr)`, gap: 1, background: '#E2E8F0', border: '1px solid #E2E8F0' }}>
                  {highlights.map((h, i) => (
                    <div key={i} className="highlight-card">
                      {/* Accent line top — replaces unreliable emoji icon */}
                      <div style={{ width: 28, height: 3, background: '#FF6B35', marginBottom: 10 }} />
                      <div style={{ fontSize: 'clamp(20px,3.5vw,30px)', fontWeight: 800, color: '#1E3A5F', letterSpacing: '-0.8px', lineHeight: 1, marginBottom: 6 }}>{h.stat}</div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#64748B', letterSpacing: '0.6px', textTransform: 'uppercase', lineHeight: 1.4 }}>{h.label}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key Features — CSS accent replaces emoji icon */}
            {keyFeatures.length > 0 && (
              <section style={{ padding: '0 32px 36px' }} className="content-pad">
                <SectionHead title="Key Features" sub="What sets this university apart" />
                <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 7 }}>
                  {keyFeatures.map((f, i) => (
                    <div key={i} className="feature-card">
                      <div style={{ width: 30, height: 30, background: '#FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff' }}>
                        {SVG.check}
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 800, color: '#1E3A5F', marginBottom: 1 }}>{f.label}</div>
                        {f.value && <div style={{ fontSize: 11, fontWeight: 600, color: '#64748B' }}>{f.value}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Accreditations */}
            {accreditations.length > 0 && (
              <section style={{ padding: '0 32px 36px' }} className="content-pad">
                <SectionHead title="Recognition & Accreditations" sub="Globally accepted credentials for your medical career" />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {accreditations.map((acc, i) => <VerifiedBadge key={i} label={acc} />)}
                </div>
              </section>
            )}

            {/* Infrastructure */}
            {infraItems.length > 0 && (
              <section style={{ padding: '0 32px 36px' }} className="content-pad">
                <SectionHead title="Infrastructure" sub="Campus facilities by the numbers" />
                <div className="infra-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 1, background: '#E2E8F0', border: '1px solid #E2E8F0' }}>
                  {infraItems.map((r, i) => (
                    <div key={i} className="infra-cell">
                      <div style={{ fontSize: 'clamp(18px,3vw,28px)', fontWeight: 800, color: '#FF6B35', letterSpacing: '-0.5px', marginBottom: 4 }}>{r.value}</div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: '#64748B', letterSpacing: '0.8px', textTransform: 'uppercase' }}>{r.label}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Training Partners */}
            {trainingPartners.length > 0 && (
              <section style={{ padding: '0 32px 36px' }} className="content-pad">
                <SectionHead title="Training & Clinical Partners" sub="Where students get real-world exposure" />
                <div className="training-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 8 }}>
                  {trainingPartners.map((tp, i) => (
                    <div key={i} style={{ border: '1px solid #E2E8F0', background: '#fff', overflow: 'hidden' }}>
                      <div style={{ padding: '9px 13px', background: '#1E3A5F', borderLeft: '4px solid #FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>{tp.type}</span>
                        <span style={{ padding: '2px 9px', background: '#FF6B35', fontSize: 11, fontWeight: 700, color: '#fff' }}>{tp.count}+</span>
                      </div>
                      <div style={{ padding: '9px 13px', display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                        {(tp.notable ?? []).map((name, j) => (
                          <span key={j} style={{ padding: '3px 9px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: 11, fontWeight: 600, color: '#1E3A5F' }}>{name}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Campus Life + Safety */}
            <section style={{ padding: '0 32px 36px' }} className="content-pad">
              <SectionHead title="Campus Life" sub="Beyond the classroom" />
              <div className="campus-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <div style={{ border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                  <CardHeader label="Student Life" title="Clubs, Sports & Culture" />
                  {[
                    { label: 'Student Clubs',      value: studentLife.clubs != null ? `${studentLife.clubs} clubs` : null },
                    { label: 'Cultural Events',    value: studentLife.culturalEvents != null ? `${studentLife.culturalEvents} events / year` : null },
                    { label: 'Sports',             value: sportsAvailable.length > 0 ? sportsAvailable.join(', ') : null },
                    { label: 'Indian Association', value: studentLife.indianAssociation != null ? (studentLife.indianAssociation ? 'Yes — active chapter' : 'Not available') : null },
                  ].filter(r => r.value !== null).map((row, i) => (
                    <div key={i} className="data-row">
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#1E3A5F', textAlign: 'right' }}>{row.value}</span>
                    </div>
                  ))}
                </div>

                <div style={{ border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                  <CardHeader label="Safety & Location" title="Your Security Matters" />
                  {[
                    { label: 'Safety Rating',   value: safetyRating.overall ?? null },
                    { label: 'Campus Security', value: safetyRating.campusSecurity != null ? (safetyRating.campusSecurity ? '24/7 Security Guards' : 'Standard') : null },
                    { label: '24/7 Support',    value: safetyRating.support247 != null ? (safetyRating.support247 ? 'Available round the clock' : 'Office hours only') : null },
                    { label: 'Climate',         value: location.climate ?? null },
                    { label: 'Nearest Airport', value: (location.nearestAirport && location.distanceKm != null) ? `${location.nearestAirport} · ${location.distanceKm} km` : (location.nearestAirport ?? null) },
                  ].filter(r => r.value !== null).map((row, i) => (
                    <div key={i} className="data-row">
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', flexShrink: 0 }}>{row.label}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#1E3A5F', textAlign: 'right' }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Facilities */}
            {facilities.length > 0 && (
              <section style={{ padding: '0 32px 36px' }} className="content-pad">
                <SectionHead title="Facilities" sub="What's available on campus" />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {facilities.map((f, i) => <DocTag key={i}>{f}</DocTag>)}
                </div>
              </section>
            )}

            {/* Placements */}
            {uni.placements && (
              <section style={{ padding: '0 32px 36px' }} className="content-pad">
                <SectionHead title="Placements" sub="Graduate outcomes and employer network" />
                <div style={{ border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', background: '#E2E8F0', gap: 1 }}>
                    {[
                      { label: 'Placement Rate', value: uni.placements.rate },
                      ...(uni.placements.averagePackage ? [{ label: 'Avg Package', value: uni.placements.averagePackage }] : []),
                      ...(uni.placements.highestPackage ? [{ label: 'Highest Package', value: uni.placements.highestPackage }] : []),
                    ].map((s, i) => (
                      <div key={i} style={{ flex: 1, padding: '16px 12px', background: '#fff', textAlign: 'center' }}>
                        <div style={{ fontSize: 'clamp(16px,3vw,26px)', fontWeight: 800, color: '#FF6B35', letterSpacing: '-0.5px', marginBottom: 3 }}>{s.value}</div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', letterSpacing: '0.8px', textTransform: 'uppercase' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                  {(uni.placements.topRecruiters ?? []).length > 0 && (
                    <div style={{ padding: '12px 16px' }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 8 }}>Top Recruiters</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {(uni.placements.topRecruiters ?? []).map((r, i) => (
                          <span key={i} style={{ padding: '3px 10px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: 11, fontWeight: 700, color: '#1E3A5F' }}>{r}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Mid CTA */}
            <section style={{ padding: '0 32px 36px' }} className="content-pad">
              <div className="cta-banner">
                <div style={{ position: 'relative', zIndex: 1, flex: 1, minWidth: 200 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 6 }}>Your Seat Awaits</div>
                  <h3 style={{ fontSize: 'clamp(15px,2.8vw,21px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.3px', marginBottom: 5 }}>
                    Start your journey at {uni.shortName ?? uni.name}
                  </h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', fontWeight: 500, maxWidth: 360 }}>
                    Expert counselors guide you from inquiry to enrollment — at zero cost.
                  </p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="btn-white" style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>Get Free Counseling →</button>
              </div>
            </section>

          </div>
        )}

        {/* ════════════════════════════════════════════
            PROGRAMS
        ════════════════════════════════════════════ */}
        {activeTab === 'programs' && (
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '36px 32px 60px' }} className="content-pad">
            <SectionHead
              title={`Programs at ${uni.shortName ?? uni.name}`}
              sub={programs.length > 0 ? `${programs.length} program${programs.length !== 1 ? 's' : ''} offered` : 'Contact us for the latest program list'}
            />
            {programs.length > 0 ? (
              <>
                <div className="prog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                  {programs.map((prog, i) => {
                    const rows = [
                      { label: 'Duration', value: prog.duration },
                      { label: 'Seats',    value: prog.seats ? `${prog.seats} seats` : null },
                      { label: 'Intakes',  value: (prog.intakes ?? []).length > 0 ? (prog.intakes ?? []).join(' · ') : null },
                    ].filter(r => r.value !== null);
                    return (
                      <div key={i} className="prog-card">
                        <div style={{ padding: '13px 14px', borderBottom: '1px solid #F1F5F9', borderLeft: '4px solid #FF6B35' }}>
                          <div style={{ fontSize: 10, fontWeight: 700, color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 5 }}>{prog.category}</div>
                          <h3 style={{ fontSize: 15, fontWeight: 800, color: '#1E3A5F', lineHeight: 1.2, marginBottom: 2 }}>{prog.degree}</h3>
                          <div style={{ fontSize: 12, fontWeight: 600, color: '#64748B' }}>{prog.name}</div>
                        </div>
                        <div style={{ background: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
                          {rows.map((row, j) => (
                            <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 13px', background: '#fff', gap: 12 }}>
                              <span style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', letterSpacing: '0.8px', textTransform: 'uppercase', flexShrink: 0 }}>{row.label}</span>
                              <span style={{ fontSize: 12, fontWeight: 800, color: '#1E3A5F', textAlign: 'right' }}>{row.value}</span>
                            </div>
                          ))}
                        </div>
                        <div
                          onClick={() => setIsModalOpen(true)}
                          style={{ padding: '11px 13px', background: '#F8FAFC', fontSize: 10, fontWeight: 700, color: '#1E3A5F', letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s', borderTop: '1px solid #E2E8F0', minHeight: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#FF6B35'; (e.currentTarget as HTMLDivElement).style.color = '#fff'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#F8FAFC'; (e.currentTarget as HTMLDivElement).style.color = '#1E3A5F'; }}
                        >Enquire About This Program →</div>
                      </div>
                    );
                  })}
                </div>
                {eligibleFor.length > 0 && (
                  <div style={{ marginTop: 28 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 10 }}>Degree Eligible For</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                      {eligibleFor.map((exam, i) => <CheckBadge key={i}>{exam}</CheckBadge>)}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div style={{ padding: '48px 24px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#1E3A5F', marginBottom: 8 }}>Program Details Coming Soon</h3>
                <p style={{ fontSize: 13, color: '#64748B', marginBottom: 18 }}>Contact us to get the full program list for {uni.name}.</p>
                <button onClick={() => setIsModalOpen(true)} className="btn-orange">Contact Us →</button>
              </div>
            )}
          </div>
        )}

        {/* ════════════════════════════════════════════
            ADMISSIONS
        ════════════════════════════════════════════ */}
        {activeTab === 'admissions' && (
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '36px 32px 60px' }} className="content-pad">
            <SectionHead title="Admissions" sub="Eligibility, documents, and the step-by-step process" />

            {(eligibility.exam || eligibility.minScore || eligibility.minPercentage || eligibility.ageLimit || requiredDocs.length > 0) && (
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 1, background: '#E2E8F0', border: '1px solid #E2E8F0', marginBottom: 28 }} className="elig-grid">
                <div style={{ background: '#fff', padding: '18px 18px 8px' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 12 }}>Eligibility Criteria</div>
                  {[
                    { svg: SVG.book,          label: 'Exam Required',  value: eligibility.exam },
                    { svg: SVG.barChart,      label: 'Min Score',      value: eligibility.minScore },
                    { svg: SVG.graduationCap, label: 'Min Percentage', value: eligibility.minPercentage },
                    { svg: SVG.calendar,      label: 'Age Limit',      value: eligibility.ageLimit },
                  ].filter(e => e.value).map((item, i) => (
                    <div key={i} className="elig-item">
                      <div style={{ width: 30, height: 30, background: '#F0F4FF', borderLeft: '3px solid #FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.svg}</div>
                      <div>
                        <div style={{ fontSize: 9, fontWeight: 700, color: '#FF6B35', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 2 }}>{item.label}</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#1E3A5F', lineHeight: 1.3 }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ background: '#fff', padding: 18 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#FF6B35', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 12 }}>Required Documents</div>
                  {requiredDocs.length > 0 ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 16 }}>
                      {requiredDocs.map((doc, i) => <DocTag key={i}>{doc}</DocTag>)}
                    </div>
                  ) : (
                    <p style={{ fontSize: 13, color: '#64748B', marginBottom: 16 }}>Contact us for the full documents checklist.</p>
                  )}
                  <div style={{ padding: '12px 14px', border: '1px solid #E2E8F0', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#1E3A5F', marginBottom: 2 }}>Need help with documents?</div>
                      <div style={{ fontSize: 11, color: '#64748B' }}>Our team handles everything for you.</div>
                    </div>
                    <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ padding: '9px 18px', fontSize: 12, minHeight: 40 }}>Get Help →</button>
                  </div>
                </div>
              </div>
            )}

            {admissionSteps.length > 0 && (
              <>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: '#1E3A5F', marginBottom: 3 }}>Admission Process</h3>
                <p style={{ fontSize: 12, color: '#64748B', fontWeight: 500, marginBottom: 14 }}>Follow these steps to secure your seat</p>
                <div style={{ border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                  {admissionSteps.map((step, i) => (
                    <div key={i} className="step-item">
                      <div style={{ minWidth: 30, height: 30, background: i === 0 ? '#FF6B35' : '#F8FAFC', border: i === 0 ? 'none' : '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: i === 0 ? '#fff' : '#1E3A5F', flexShrink: 0 }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: '#1E3A5F', lineHeight: 1.55, margin: 0, paddingTop: 4 }}>{step}</p>
                    </div>
                  ))}
                  <div style={{ padding: '14px 18px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: 160 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#1E3A5F', marginBottom: 2 }}>Ready to get started?</div>
                      <div style={{ fontSize: 11, color: '#64748B' }}>Our counselors guide you through every step, free of charge.</div>
                    </div>
                    <button onClick={() => setIsModalOpen(true)} className="btn-orange">Start Application →</button>
                  </div>
                </div>
              </>
            )}

            {eligibleFor.length > 0 && (
              <div style={{ marginTop: 28 }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: '#1E3A5F', marginBottom: 3 }}>Exam Eligibility</h3>
                <p style={{ fontSize: 12, color: '#64748B', fontWeight: 500, marginBottom: 12 }}>Degrees from {uni.shortName ?? uni.name} are recognized for these licensing exams</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {eligibleFor.map((exam, i) => <CheckBadge key={i}>{exam}</CheckBadge>)}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ════════════════════════════════════════════
            FEES
        ════════════════════════════════════════════ */}
        {activeTab === 'fees' && (
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '36px 32px 60px' }} className="content-pad">
            <SectionHead title="Fee Structure" sub="Complete cost breakdown for your planning" />
            <div className="fee-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 290px', gap: 20, alignItems: 'start' }}>

              <div>
                <div style={{ border: '1px solid #E2E8F0', overflow: 'hidden', marginBottom: 14 }}>
                  <div style={{ padding: '11px 16px', background: '#1E3A5F', borderLeft: '4px solid #FF6B35' }}>
                    <FieldLabel>Annual Breakdown</FieldLabel>
                    <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', marginTop: 2 }}>{fees.currency ?? 'USD'} — Per Academic Year</div>
                  </div>
                  {fees.tuitionPerYear != null && (
                    <div className="fee-row">
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#1E3A5F' }}>Tuition Fee / Year</div>
                        <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 600, marginTop: 1 }}>Academic fees per annum</div>
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: '#1E3A5F', flexShrink: 0 }}>{fees.currency} {fees.tuitionPerYear.toLocaleString()}</div>
                    </div>
                  )}
                  {fees.hostelPerYear != null && (
                    <div className="fee-row">
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#1E3A5F' }}>Hostel Fee / Year</div>
                        <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 600, marginTop: 1 }}>Including meals / boarding</div>
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: '#1E3A5F', flexShrink: 0 }}>{fees.currency} {fees.hostelPerYear.toLocaleString()}</div>
                    </div>
                  )}
                  {fees.totalFirstYear != null && (
                    <div style={{ padding: '11px 16px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 1 }}>Total First Year</div>
                        <div style={{ fontSize: 10, color: '#64748B' }}>All inclusive</div>
                      </div>
                      <div style={{ fontSize: 'clamp(15px,2.5vw,20px)', fontWeight: 800, color: '#1E3A5F' }}>{fees.currency} {fees.totalFirstYear.toLocaleString()}</div>
                    </div>
                  )}
                  {fees.totalCourse != null && (
                    <div style={{ padding: '11px 16px', background: '#1E3A5F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.45)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 1 }}>Total Course Cost</div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>Complete {programs[0]?.duration ?? 'program'}</div>
                      </div>
                      <div style={{ fontSize: 'clamp(17px,2.5vw,24px)', fontWeight: 800, color: '#FF6B35' }}>{fees.currency} {fees.totalCourse.toLocaleString()}</div>
                    </div>
                  )}
                </div>

                {accommodation.available && (
                  <div style={{ border: '1px solid #E2E8F0', overflow: 'hidden', marginBottom: 14 }}>
                    <div style={{ padding: '11px 16px', borderBottom: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 800, color: '#1E3A5F' }}>Accommodation</div>
                        <div style={{ fontSize: 11, color: '#64748B', marginTop: 1 }}>On-campus hostel</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        {accommodation.costPerYear != null && (
                          <div style={{ fontSize: 14, fontWeight: 800, color: '#1E3A5F' }}>{fees.currency} {accommodation.costPerYear.toLocaleString()} <span style={{ fontSize: 10, color: '#94A3B8', fontWeight: 600 }}>/yr</span></div>
                        )}
                        {accommodation.capacity != null && (
                          <div style={{ fontSize: 10, color: '#64748B', marginTop: 1 }}>Capacity: {accommodation.capacity.toLocaleString()}</div>
                        )}
                      </div>
                    </div>
                    {(accommodation.features ?? []).length > 0 && (
                      <div style={{ padding: '9px 16px', display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                        {(accommodation.features ?? []).map((f, i) => (
                          <span key={i} style={{ padding: '3px 9px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: 11, fontWeight: 600, color: '#1E3A5F' }}>{f}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div style={{ padding: '11px 14px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ display: 'flex', flexShrink: 0, marginTop: 1 }}>{SVG.info}</span>
                  <p style={{ fontSize: 11, color: '#64748B', fontWeight: 500, lineHeight: 1.6, margin: 0 }}>
                    All fees are approximate and subject to change. Exchange rate fluctuations may affect the final amount. Contact our counselors for the most current fee structure before making any payment.
                  </p>
                </div>
              </div>

              {/* Right sticky — Cost vs Value */}
              <div className="fee-sticky" style={{ border: '1px solid #E2E8F0', position: 'sticky', top: 54 }}>
                <div style={{ padding: '11px 14px', background: '#FF6B35' }}>
                  <FieldLabel>Why It's Worth It</FieldLabel>
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#FFFFF', marginTop: 2 }}>Cost vs Value</div>
                </div>
                {valueItems.map((item, i) => (
                  <ValueRow key={i} svg={item.svg} label={item.label} value={item.value!} />
                ))}
                <div style={{ padding: '12px 14px', borderTop: '1px solid #F1F5F9' }}>
                  <button onClick={() => setIsModalOpen(true)} className="btn-orange" style={{ width: '100%' }}>Get Full Fee Breakdown →</button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ════════════════ FINAL CTA ════════════════ */}
        <section style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${galleryImages[0] ?? uni.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,24,48,0.91)' }} />
          <div className="final-cta-inner" style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '64px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: 9 }}>Take the Next Step</div>
              <h2 style={{ fontSize: 'clamp(22px,4vw,38px)', fontWeight: 800, color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, marginBottom: 10 }}>
                Your Medical Career<br /><span style={{ color: '#FF6B35' }}>Starts at {uni.shortName ?? uni.name}</span>
              </h2>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', fontWeight: 500, maxWidth: 380 }}>
                Expert counselors guide you from first inquiry to enrollment — at zero cost.
              </p>
            </div>
            <div className="final-cta-btns" style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 190 }}>
              <button onClick={() => setIsModalOpen(true)} className="btn-orange">Apply Now →</button>
              <Link href={`/destinations/${uni.countrySlug}`} className="btn-white" style={{ color: '#1E3A5F' }}>
                More in {uni.country}
              </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}