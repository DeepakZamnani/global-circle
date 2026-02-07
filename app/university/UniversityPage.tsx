// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { 
//   MapPin, Calendar, Building2, GraduationCap, Users, Award,
//   CheckCircle2, DollarSign, FileText, Globe, Plane, CloudSun,
//   BookOpen, FlaskConical, Hospital, Home, Shield, Trophy,
//   Briefcase, Target, TrendingUp, ArrowRight, Download,
//   School, Lightbulb, Cpu, Building, BarChart3, Percent
// } from 'lucide-react';
// import { University } from '../data/universityData';
// import Navbar from '../components/Navbar';

// // ============================================
// // UNIVERSITY PAGE - PROFESSIONAL SHARP DESIGN
// // Modern boxy layout, bold typography, no emojis
// // Clean professional aesthetic inspired by CountryPage
// // ============================================

// interface UniversityPageProps {
//   universitySlug: string;
//   universityData: University;
// }

// export default function UniversityPage({ universitySlug, universityData }: UniversityPageProps) {
//   const uni = universityData;

//   return (<>
//     <Navbar/>
//     <main className="min-h-screen bg-white">
      
//       {/* HERO SECTION - Full Image Left | Data Right */}
//       <section className="relative flex flex-col md:flex-row h-screen">
        
//         {/* LEFT - FULL IMAGE SIDE (No box, no border) */}
//         <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
//           <Image
//             src={uni.heroImage}
//             alt={uni.name}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Subtle gradient overlay for better aesthetics */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          
//           {/* University Logo Badge - Bottom Left */}
//           {uni.logo && (
//             <div className="absolute bottom-6 left-6 bg-white p-3 shadow-xl">
//               <Image
//                 src={uni.logo}
//                 alt={`${uni.name} logo`}
//                 width={64}
//                 height={64}
//                 className="w-12 h-12 md:w-16 md:h-16 object-contain"
//               />
//             </div>
//           )}
//         </div>

//         {/* DIVIDER */}
//         <div className="hidden md:block w-1 bg-[#FF6B35]" />

//         {/* RIGHT - University Info */}
//         <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gradient-to-br from-[#1E3A5F] via-[#2A4A6F] to-[#1E3A5F] text-white relative overflow-hidden">
//           {/* Background Pattern */}
//           <div className="absolute inset-0 opacity-5">
//             <div className="absolute inset-0" style={{
//               backgroundImage: `
//                 linear-gradient(90deg, white 1px, transparent 1px),
//                 linear-gradient(0deg, white 1px, transparent 1px)
//               `,
//               backgroundSize: '60px 60px'
//             }} />
//           </div>

//           <div className="relative z-10 px-6 md:px-10 lg:px-12 py-8 md:py-10 h-full flex flex-col justify-center overflow-y-auto">
//             <div className="space-y-4 max-w-xl">
//             {/* University Name */}
//             <div>
//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="text-3xl md:text-4xl">{uni.flag}</span>
//                   {uni.shortName && (
//                     <span className="bg-[#FF6B35] text-white px-3 py-1 font-black text-xs uppercase tracking-wider">
//                       {uni.shortName}
//                     </span>
//                   )}
//                 </div>
//                 <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-2 leading-tight tracking-tight">
//                   {uni.name}
//                 </h1>
//                 <p className="text-base md:text-lg text-slate-200 font-medium border-l-4 border-[#FF6B35] pl-4">
//                   {uni.tagline}
//                 </p>
//               </div>

//               {/* Quick Info Tags */}
//               <div className="grid grid-cols-3 gap-2 text-sm">
//                 <div className="bg-white/10 backdrop-blur-sm p-3 border-l-4 border-[#FF6B35]">
//                   <MapPin className="w-4 h-4 text-[#FF6B35] mb-1" />
//                   <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">Location</div>
//                   <div className="font-bold mt-1 text-xs">{uni.city}</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm p-3 border-l-4 border-[#FF6B35]">
//                   <Calendar className="w-4 h-4 text-[#FF6B35] mb-1" />
//                   <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">Founded</div>
//                   <div className="font-bold mt-1 text-xs">{uni.establishedYear}</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm p-3 border-l-4 border-[#FF6B35]">
//                   <Building2 className="w-4 h-4 text-[#FF6B35] mb-1" />
//                   <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">Type</div>
//                   <div className="font-bold mt-1 text-xs">{uni.universityType}</div>
//                 </div>
//               </div>

//               {/* Stats Grid */}
//               <div className="grid grid-cols-2 gap-3">
//                 {uni.stats.passRate && (
//                   <StatCard 
//                     icon={<Target className="w-5 h-5" />} 
//                     value={uni.stats.passRate} 
//                     label="Success Rate" 
//                   />
//                 )}
//                 <StatCard 
//                   icon={<Users className="w-5 h-5" />} 
//                   value={uni.stats.totalStudents.toLocaleString()} 
//                   label="Students" 
//                 />
//                 <StatCard 
//                   icon={<BarChart3 className="w-5 h-5" />} 
//                   value={uni.stats.facultyRatio} 
//                   label="Faculty Ratio" 
//                 />
//                 {uni.ranking.globalRank && (
//                   <StatCard 
//                     icon={<Trophy className="w-5 h-5" />} 
//                     value={`Top ${uni.ranking.globalRank}`} 
//                     label="Global Rank" 
//                   />
//                 )}
//               </div>

//               {/* Accreditations */}
//               {uni.accreditations.length > 0 && (
//                 <div className="space-y-2">
//                   <h3 className="text-xs font-black text-slate-300 uppercase tracking-widest">
//                     Accreditations & Recognition
//                   </h3>
//                   <div className="flex flex-wrap gap-2">
//                     {uni.accreditations.map((acc, idx) => (
//                       <div key={idx} className="flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1 border-l-4 border-green-500">
//                         <CheckCircle2 className="w-3 h-3" />
//                         <span className="text-xs font-bold">{acc}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* CTA Buttons */}
//               <div className="flex flex-wrap gap-3 pt-2">
//                 <Link 
//                   href="#apply"
//                   className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#ff5722] text-white px-6 py-2.5 font-black uppercase text-xs tracking-wider transition-all shadow-lg hover:shadow-xl hover:translate-x-1 group"
//                 >
//                   APPLY NOW
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//                 <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 font-bold uppercase text-xs tracking-wider transition-all backdrop-blur-sm border border-white/20">
//                   <Download className="w-4 h-4" />
//                   BROCHURE
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* KEY FEATURES - Asymmetric Luxury Grid */}
//       {uni.keyFeatures.length > 0 && (
//         <section className="py-12 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
//           {/* Decorative Background Element */}
//           <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF6B35]/5 to-transparent" />
          
//           <div className="container mx-auto px-6 relative z-10">
//             <div className="max-w-7xl mx-auto">
//               {/* Section Header - Offset Layout */}
//               <div className="grid md:grid-cols-2 gap-6 mb-10">
//                 <div>
//                   <div className="flex items-center gap-3 mb-2">
//                     <div className="h-1 w-10 bg-[#FF6B35]" />
//                     <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Excellence Defined</span>
//                   </div>
//                   <h2 className="text-3xl md:text-4xl font-black text-[#1E3A5F] tracking-tight leading-tight">
//                     Why Choose<br />{uni.shortName || uni.name}?
//                   </h2>
//                 </div>
//                 <div className="flex items-end">
//                   <p className="text-sm text-slate-600 font-medium leading-relaxed border-l-4 border-[#FF6B35] pl-4">
//                     Discover what sets us apart in delivering world-class education and unparalleled opportunities.
//                   </p>
//                 </div>
//               </div>

//               {/* Asymmetric Feature Grid */}
//               <div className="grid md:grid-cols-3 gap-4">
//                 {/* First Feature - Large Featured Card */}
//                 {uni.keyFeatures[0] && (
//                   <div className="md:col-span-2 md:row-span-2">
//                     <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] p-8 h-full shadow-2xl border-l-8 border-[#FF6B35] group hover:scale-[1.02] transition-transform duration-300">
//                       <div className="text-[#FF6B35] mb-5">
//                         {getFeaturedIcon(uni.keyFeatures[0].icon)}
//                       </div>
//                       <h3 className="font-black text-white mb-3 text-xl uppercase tracking-wide leading-tight">
//                         {uni.keyFeatures[0].label}
//                       </h3>
//                       {uni.keyFeatures[0].value && (
//                         <p className="text-4xl font-black text-[#FF6B35] mb-3">{uni.keyFeatures[0].value}</p>
//                       )}
//                       <div className="w-16 h-1 bg-[#FF6B35] mt-4" />
//                     </div>
//                   </div>
//                 )}
                
//                 {/* Remaining Features - Compact Cards */}
//                 {uni.keyFeatures.slice(1, 5).map((feature, idx) => (
//                   <div key={idx} className="bg-white p-5 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-[#FF6B35] group">
//                     <div className="text-[#FF6B35] mb-3 group-hover:scale-110 transition-transform">
//                       {getCompactIcon(feature.icon)}
//                     </div>
//                     <h3 className="font-black text-[#1E3A5F] mb-2 text-sm uppercase tracking-wide">{feature.label}</h3>
//                     {feature.value && <p className="text-xl font-black text-[#FF6B35]">{feature.value}</p>}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* PROGRAMS OFFERED - Zigzag Luxury Layout */}
//       {uni.programs.length > 0 && (
//         <section className="py-12 bg-white relative">
//           {/* Diagonal Background Accent */}
//           <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-[#1E3A5F]/5 to-transparent transform -skew-y-2" />
          
//           <div className="container mx-auto px-6 relative z-10">
//             <div className="max-w-7xl mx-auto">
//               {/* Section Header - Centered with Accent */}
//               <div className="text-center mb-12">
//                 <div className="flex items-center justify-center gap-3 mb-3">
//                   <div className="h-1 w-12 bg-[#FF6B35]" />
//                   <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Academic Excellence</span>
//                   <div className="h-1 w-12 bg-[#FF6B35]" />
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-black text-[#1E3A5F] tracking-tight mb-3">
//                   Programs Offered
//                 </h2>
//                 <p className="text-base text-slate-600 max-w-2xl mx-auto">
//                   Cutting-edge curricula designed to shape future leaders
//                 </p>
//               </div>

//               {/* Programs Grid - Staggered Cards */}
//               <div className="space-y-5">
//                 {uni.programs.map((program, idx) => (
//                   <div 
//                     key={idx} 
//                     className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
//                   >
//                     <div className={`w-full ${idx % 2 === 0 ? 'md:w-4/5' : 'md:w-4/5'} bg-white shadow-xl hover:shadow-2xl transition-all border-l-8 ${idx % 2 === 0 ? 'border-[#FF6B35]' : 'border-[#1E3A5F]'} group`}>
//                       <div className="grid md:grid-cols-3 gap-4 p-6">
//                         {/* Left - Program Info */}
//                         <div className="md:col-span-2 space-y-3">
//                           <div className="flex items-start justify-between gap-3">
//                             <div className={`${idx % 2 === 0 ? 'bg-[#FF6B35]' : 'bg-[#1E3A5F]'} p-3`}>
//                               <GraduationCap className="w-7 h-7 text-white" />
//                             </div>
//                             <div className={`${idx % 2 === 0 ? 'bg-[#1E3A5F]' : 'bg-[#FF6B35]'} text-white px-4 py-1 text-xs font-black uppercase tracking-widest`}>
//                               {program.category}
//                             </div>
//                           </div>
//                           <h3 className="text-2xl font-black text-[#1E3A5F] leading-tight">{program.name}</h3>
//                           <p className="text-base text-slate-600 font-bold">{program.degree} • {program.duration}</p>
//                         </div>

//                         {/* Right - Quick Details */}
//                         <div className="space-y-2">
//                           <div className="bg-slate-50 p-3 border-l-4 border-[#FF6B35]">
//                             <div className="flex items-center gap-2 mb-1">
//                               <Calendar className="w-4 h-4 text-[#FF6B35]" />
//                               <span className="text-xs font-black text-slate-600 uppercase tracking-wider">Intakes</span>
//                             </div>
//                             <span className="font-bold text-[#1E3A5F] text-sm">{program.intakes.join(', ')}</span>
//                           </div>
//                           {program.seats && (
//                             <div className="bg-slate-50 p-3 border-l-4 border-[#FF6B35]">
//                               <div className="flex items-center gap-2 mb-1">
//                                 <Users className="w-4 h-4 text-[#FF6B35]" />
//                                 <span className="text-xs font-black text-slate-600 uppercase tracking-wider">Seats</span>
//                               </div>
//                               <span className="font-bold text-[#1E3A5F] text-sm">{program.seats} Available</span>
//                             </div>
//                           )}
//                           <button className="w-full bg-[#1E3A5F] hover:bg-[#FF6B35] text-white py-2.5 font-black uppercase text-xs tracking-wider transition-all">
//                             LEARN MORE
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* FEES & COSTS - Dramatic Backdrop Layout */}
//       {uni.fees && (
//         <section className="relative py-16 overflow-hidden">
//           {/* Background Image with Overlay */}
//           <div className="absolute inset-0">
//             <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/90 to-[#1E3A5F]/95 z-10" />
//             {uni.galleryImages[0] && (
//               <Image
//                 src={uni.galleryImages[0]}
//                 alt="Campus background"
//                 fill
//                 className="object-cover"
//               />
//             )}
//           </div>

//           <div className="container mx-auto px-6 relative z-20">
//             <div className="max-w-6xl mx-auto">
//               {/* Header */}
//               <div className="text-center mb-10">
//                 <div className="flex items-center justify-center gap-3 mb-3">
//                   <div className="h-1 w-12 bg-[#FF6B35]" />
//                   <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Investment in Your Future</span>
//                   <div className="h-1 w-12 bg-[#FF6B35]" />
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
//                   Fees & Costs
//                 </h2>
//                 <p className="text-base text-slate-300 max-w-2xl mx-auto">
//                   Transparent pricing for exceptional education
//                 </p>
//               </div>

//               {/* Fee Grid - Split Layout */}
//               <div className="grid md:grid-cols-2 gap-5">
//                 {/* Left - Main Fees */}
//                 <div className="bg-white/10 backdrop-blur-md p-7 border-l-8 border-[#FF6B35] shadow-2xl">
//                   <h3 className="text-xl font-black text-white mb-5 uppercase tracking-wider">Annual Breakdown</h3>
//                   <div className="space-y-4">
//                     <div className="pb-3 border-b-2 border-white/20">
//                       <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-1">Tuition Fee</div>
//                       <div className="text-3xl font-black text-white">{uni.fees.currency} {uni.fees.tuitionPerYear.toLocaleString()}</div>
//                     </div>
//                     <div className="pb-3 border-b-2 border-white/20">
//                       <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-1">Hostel Fee</div>
//                       <div className="text-2xl font-black text-white">{uni.fees.currency} {uni.fees.hostelPerYear.toLocaleString()}</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right - Total Costs */}
//                 <div className="space-y-4">
//                   <div className="bg-[#FF6B35] p-7 shadow-2xl">
//                     <div className="text-xs font-bold text-white/80 uppercase tracking-widest mb-2">First Year Investment</div>
//                     <div className="text-4xl font-black text-white mb-2">{uni.fees.currency} {uni.fees.totalFirstYear.toLocaleString()}</div>
//                     <div className="w-16 h-1 bg-white/50" />
//                   </div>
//                   <div className="bg-white/10 backdrop-blur-md p-7 border-l-8 border-white shadow-2xl">
//                     <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">Complete Program</div>
//                     <div className="text-4xl font-black text-white mb-2">{uni.fees.currency} {uni.fees.totalCourse.toLocaleString()}</div>
//                     <div className="w-16 h-1 bg-[#FF6B35]" />
//                   </div>
//                 </div>
//               </div>

//               {/* Payment Note */}
//               <div className="mt-8 text-center">
//                 <p className="text-sm text-slate-300 font-medium">
//                   Flexible payment plans available • Scholarships offered to eligible students
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* ELIGIBILITY CRITERIA - Split Luxury Layout */}
//       {uni.eligibility && (
//         <section className="py-12 bg-gradient-to-b from-white via-slate-50 to-white">
//           <div className="container mx-auto px-6">
//             <div className="max-w-7xl mx-auto">
              
//               <div className="grid md:grid-cols-5 gap-8 items-start">
//                 {/* Left - Visual Element */}
//                 <div className="md:col-span-2">
//                   <div className="sticky top-24">
//                     <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] p-8 border-l-8 border-[#FF6B35] shadow-2xl">
//                       <div className="flex items-center gap-3 mb-3">
//                         <div className="h-1 w-10 bg-[#FF6B35]" />
//                         <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Requirements</span>
//                       </div>
//                       <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
//                         Eligibility<br />Criteria
//                       </h2>
//                       <p className="text-slate-300 text-sm leading-relaxed mb-5">
//                         Meet these requirements to begin your journey towards academic excellence
//                       </p>
//                       <div className="w-20 h-1 bg-[#FF6B35]" />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right - Criteria Cards */}
//                 <div className="md:col-span-3 space-y-4">
//                   {uni.eligibility.exam && (
//                     <div className="bg-white p-6 shadow-lg border-l-8 border-[#FF6B35] hover:shadow-xl transition-all group">
//                       <div className="flex items-start gap-4">
//                         <div className="bg-[#FF6B35]/10 p-3 group-hover:scale-110 transition-transform">
//                           <FileText className="w-6 h-6 text-[#FF6B35]" />
//                         </div>
//                         <div className="flex-1">
//                           <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">Required Exam</span>
//                           <p className="text-xl font-black text-[#1E3A5F]">{uni.eligibility.exam}</p>
//                         </div>
//                       </div>
//                     </div>
//                   )}
                  
//                   {uni.eligibility.minScore && (
//                     <div className="bg-white p-6 shadow-lg border-l-8 border-[#1E3A5F] hover:shadow-xl transition-all group">
//                       <div className="flex items-start gap-4">
//                         <div className="bg-[#1E3A5F]/10 p-3 group-hover:scale-110 transition-transform">
//                           <BarChart3 className="w-6 h-6 text-[#1E3A5F]" />
//                         </div>
//                         <div className="flex-1">
//                           <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">Minimum Score</span>
//                           <p className="text-xl font-black text-[#1E3A5F]">{uni.eligibility.minScore}</p>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   <div className="bg-white p-6 shadow-lg border-l-8 border-[#FF6B35] hover:shadow-xl transition-all group">
//                     <div className="flex items-start gap-4">
//                       <div className="bg-[#FF6B35]/10 p-3 group-hover:scale-110 transition-transform">
//                         <Percent className="w-6 h-6 text-[#FF6B35]" />
//                       </div>
//                       <div className="flex-1">
//                         <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">Minimum Percentage</span>
//                         <p className="text-xl font-black text-[#1E3A5F]">{uni.eligibility.minPercentage}</p>
//                       </div>
//                     </div>
//                   </div>

//                   {uni.eligibility.ageLimit && (
//                     <div className="bg-white p-6 shadow-lg border-l-8 border-[#1E3A5F] hover:shadow-xl transition-all group">
//                       <div className="flex items-start gap-4">
//                         <div className="bg-[#1E3A5F]/10 p-3 group-hover:scale-110 transition-transform">
//                           <Calendar className="w-6 h-6 text-[#1E3A5F]" />
//                         </div>
//                         <div className="flex-1">
//                           <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">Age Limit</span>
//                           <p className="text-xl font-black text-[#1E3A5F]">{uni.eligibility.ageLimit}</p>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* Required Documents */}
//                   {uni.eligibility.requiredDocs.length > 0 && (
//                     <div className="bg-gradient-to-br from-slate-50 to-white p-6 border-l-8 border-[#FF6B35] shadow-lg">
//                       <h3 className="text-xs font-black text-slate-600 uppercase tracking-widest mb-4">Required Documents</h3>
//                       <div className="grid grid-cols-2 gap-3">
//                         {uni.eligibility.requiredDocs.map((doc, idx) => (
//                           <div key={idx} className="bg-white px-3 py-2 border-l-4 border-[#1E3A5F] shadow-sm hover:shadow-md transition-all">
//                             <span className="text-xs font-bold text-[#1E3A5F]">{doc}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>
//       )}

//       {/* FACILITIES - Masonry Grid Layout */}
//       {uni.facilities.length > 0 && (
//         <section className="py-12 bg-white relative overflow-hidden">
//           {/* Decorative Element */}
//           <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent" />
          
//           <div className="container mx-auto px-6 relative z-10">
//             <div className="max-w-7xl mx-auto">
//               <div className="text-center mb-10">
//                 <div className="flex items-center justify-center gap-3 mb-3">
//                   <div className="h-1 w-12 bg-[#FF6B35]" />
//                   <span className="text-xs font-black text-slate-600 uppercase tracking-widest">World-Class Infrastructure</span>
//                   <div className="h-1 w-12 bg-[#FF6B35]" />
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-black text-[#1E3A5F] tracking-tight">
//                   Campus Facilities
//                 </h2>
//               </div>

//               {/* Facility Grid - Varying Heights for Visual Interest */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//                 {uni.facilities.map((facility, idx) => (
//                   <div 
//                     key={idx} 
//                     className={`bg-gradient-to-br from-slate-50 to-white p-4 shadow-lg hover:shadow-xl transition-all border-l-4 ${
//                       idx % 3 === 0 ? 'border-[#FF6B35] md:row-span-2' : 'border-[#1E3A5F]'
//                     } group hover:border-[#FF6B35] ${idx % 3 === 0 ? 'flex flex-col justify-center' : ''}`}
//                   >
//                     <div className={`text-[#FF6B35] group-hover:scale-110 transition-transform ${idx % 3 === 0 ? 'mb-4' : 'mb-3'}`}>
//                       {getFacilityIcon(facility, idx % 3 === 0)}
//                     </div>
//                     <span className={`text-[#1E3A5F] font-black uppercase tracking-wide ${idx % 3 === 0 ? 'text-base' : 'text-xs'}`}>
//                       {facility}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* GALLERY - Full-Width Cinematic Layout */}
//       {uni.galleryImages.length > 0 && (
//         <section className="py-0 bg-black">
//           <div className="relative">
//             {/* Section Header Overlay */}
//             <div className="absolute top-0 left-0 right-0 z-20 pt-16 pb-10">
//               <div className="container mx-auto px-6">
//                 <div className="max-w-4xl">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="h-1 w-12 bg-[#FF6B35]" />
//                     <span className="text-xs font-black text-white uppercase tracking-widest">Experience Campus Life</span>
//                   </div>
//                   <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
//                     Campus Gallery
//                   </h2>
//                 </div>
//               </div>
//             </div>

//             {/* Gallery Grid - Cinematic */}
//             <div className="grid md:grid-cols-2 gap-1">
//               {uni.galleryImages.slice(0, 4).map((img, idx) => (
//                 <div 
//                   key={idx} 
//                   className={`relative group overflow-hidden ${
//                     idx === 0 ? 'md:col-span-2 h-[400px]' : 'h-[300px]'
//                   }`}
//                 >
//                   <Image
//                     src={img}
//                     alt={`${uni.name} campus ${idx + 1}`}
//                     fill
//                     className="object-cover transform group-hover:scale-105 transition-transform duration-700"
//                   />
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
//                   {/* Overlay Content */}
//                   <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                     <div className="w-12 h-1 bg-[#FF6B35] mb-2" />
//                     <p className="text-white font-black text-lg uppercase tracking-wide">
//                       {idx === 0 ? 'Main Campus' : idx === 1 ? 'Academic Block' : idx === 2 ? 'Research Labs' : 'Student Life'}
//                     </p>
//                     <p className="text-slate-300 text-sm mt-1">Explore our state-of-the-art facilities</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//     </main>
//     </>
//   );
// }

// // ============================================
// // SUB-COMPONENTS - Luxury Sharp Design
// // ============================================

// function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
//   return (
//     <div className="bg-white/10 backdrop-blur-sm p-4 border-l-4 border-[#FF6B35] hover:bg-white/20 transition-all group">
//       <div className="text-[#FF6B35] mb-2 group-hover:scale-110 transition-transform">
//         {icon}
//       </div>
//       <div className="text-2xl md:text-3xl font-black mb-1">{value}</div>
//       <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">{label}</div>
//     </div>
    
//   );
// }

// // Icon Helper Functions for New Layouts
// function getFeaturedIcon(iconName: string) {
//   const icons: { [key: string]: React.ReactNode } = {
//     'trophy': <Trophy className="w-12 h-12" />,
//     'briefcase': <Briefcase className="w-12 h-12" />,
//     'flask': <FlaskConical className="w-12 h-12" />,
//     'globe': <Globe className="w-12 h-12" />,
//     'award': <Award className="w-12 h-12" />,
//     'target': <Target className="w-12 h-12" />,
//     'school': <School className="w-12 h-12" />,
//     'lightbulb': <Lightbulb className="w-12 h-12" />,
//   };
//   return icons[iconName.toLowerCase()] || <Award className="w-12 h-12" />;
// }

// function getCompactIcon(iconName: string) {
//   const icons: { [key: string]: React.ReactNode } = {
//     'trophy': <Trophy className="w-7 h-7" />,
//     'briefcase': <Briefcase className="w-7 h-7" />,
//     'flask': <FlaskConical className="w-7 h-7" />,
//     'globe': <Globe className="w-7 h-7" />,
//     'award': <Award className="w-7 h-7" />,
//     'target': <Target className="w-7 h-7" />,
//     'school': <School className="w-7 h-7" />,
//     'lightbulb': <Lightbulb className="w-7 h-7" />,
//   };
//   return icons[iconName.toLowerCase()] || <Award className="w-7 h-7" />;
// }

// function getFacilityIcon(facilityName: string, isLarge: boolean = false) {
//   const size = isLarge ? "w-8 h-8" : "w-5 h-5";
//   const lower = facilityName.toLowerCase();
  
//   if (lower.includes('library')) return <BookOpen className={size} />;
//   if (lower.includes('lab')) return <FlaskConical className={size} />;
//   if (lower.includes('hospital')) return <Hospital className={size} />;
//   if (lower.includes('hostel') || lower.includes('accommodation')) return <Home className={size} />;
//   if (lower.includes('sports') || lower.includes('gym')) return <Trophy className={size} />;
//   if (lower.includes('wifi') || lower.includes('internet')) return <Globe className={size} />;
//   if (lower.includes('security')) return <Shield className={size} />;
//   if (lower.includes('research')) return <Lightbulb className={size} />;
//   if (lower.includes('computer')) return <Cpu className={size} />;
//   return <Building className={size} />;
// }

// function FeatureCard({ icon, label, value }: { icon: string; label: string; value?: string }) {
//   const getIcon = (iconName: string) => {
//     const icons: { [key: string]: React.ReactNode } = {
//       'trophy': <Trophy className="w-10 h-10" />,
//       'briefcase': <Briefcase className="w-10 h-10" />,
//       'flask': <FlaskConical className="w-10 h-10" />,
//       'globe': <Globe className="w-10 h-10" />,
//       'award': <Award className="w-10 h-10" />,
//       'target': <Target className="w-10 h-10" />,
//       'school': <School className="w-10 h-10" />,
//       'lightbulb': <Lightbulb className="w-10 h-10" />,
//     };
//     return icons[iconName.toLowerCase()] || <Award className="w-10 h-10" />;
//   };

//   return (
//     <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-[#FF6B35] group">
//       <div className="text-[#FF6B35] mb-6 group-hover:scale-110 transition-transform">
//         {getIcon(icon)}
//       </div>
//       <h3 className="font-black text-[#1E3A5F] mb-3 text-lg uppercase tracking-wide">{label}</h3>
//       {value && <p className="text-3xl font-black text-[#FF6B35]">{value}</p>}
//     </div>
//   );
// }

// function ProgramCard({ name, duration, degree, category, intakes, seats }: any) {
//   return (
//     <div className="bg-white shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-[#FF6B35] group">
//       <div className="p-8">
//         <div className="flex items-start justify-between mb-6">
//           <div className="bg-[#FF6B35] p-4">
//             <GraduationCap className="w-8 h-8 text-white" />
//           </div>
//           <div className="bg-[#1E3A5F] text-white px-4 py-2 text-xs font-black uppercase tracking-wider">
//             {category}
//           </div>
//         </div>
//         <h3 className="text-2xl font-black text-[#1E3A5F] mb-3 leading-tight">{name}</h3>
//         <p className="text-slate-600 font-bold mb-6">{degree} • {duration}</p>
//         <div className="space-y-3 text-sm text-slate-600 mb-6">
//           <div className="flex items-center gap-3 bg-slate-50 p-3 border-l-4 border-[#FF6B35]">
//             <Calendar className="w-5 h-5 text-[#FF6B35]" />
//             <span className="font-semibold">Intakes: {intakes.join(', ')}</span>
//           </div>
//           {seats && (
//             <div className="flex items-center gap-3 bg-slate-50 p-3 border-l-4 border-[#FF6B35]">
//               <Users className="w-5 h-5 text-[#FF6B35]" />
//               <span className="font-semibold">{seats} Seats</span>
//             </div>
//           )}
//         </div>
//       </div>
//       <button className="w-full bg-[#1E3A5F] hover:bg-[#FF6B35] text-white py-4 font-black uppercase tracking-wider transition-all group-hover:shadow-lg">
//         VIEW DETAILS
//       </button>
//     </div>
//   );
// }

// function FeeRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
//   return (
//     <div className={`flex justify-between items-center py-4 border-b-2 ${
//       highlight 
//         ? 'border-[#FF6B35] bg-[#FF6B35]/10' 
//         : 'border-white/10'
//     } ${highlight ? 'px-4' : ''}`}>
//       <span className={`font-bold uppercase tracking-wider text-sm ${
//         highlight ? 'text-[#FF6B35]' : 'text-slate-300'
//       }`}>
//         {label}
//       </span>
//       <span className={`font-black text-xl ${
//         highlight ? 'text-[#FF6B35]' : 'text-white'
//       }`}>
//         {value}
//       </span>
//     </div>
//   );
// }

// function EligibilityRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
//   return (
//     <div className="bg-white p-6 border-l-4 border-[#FF6B35] shadow">
//       <div className="flex items-center gap-4 mb-3">
//         <div className="text-[#FF6B35]">{icon}</div>
//         <span className="text-slate-600 text-xs font-black uppercase tracking-widest">{label}</span>
//       </div>
//       <p className="font-black text-[#1E3A5F] text-xl">{value}</p>
//     </div>
//   );
// }

// function FacilityCard({ name }: { name: string }) {
//   const getIcon = (facilityName: string) => {
//     const lower = facilityName.toLowerCase();
//     if (lower.includes('library')) return <BookOpen className="w-7 h-7" />;
//     if (lower.includes('lab')) return <FlaskConical className="w-7 h-7" />;
//     if (lower.includes('hospital')) return <Hospital className="w-7 h-7" />;
//     if (lower.includes('hostel') || lower.includes('accommodation')) return <Home className="w-7 h-7" />;
//     if (lower.includes('sports') || lower.includes('gym')) return <Trophy className="w-7 h-7" />;
//     if (lower.includes('wifi') || lower.includes('internet')) return <Globe className="w-7 h-7" />;
//     if (lower.includes('security')) return <Shield className="w-7 h-7" />;
//     if (lower.includes('research')) return <Lightbulb className="w-7 h-7" />;
//     if (lower.includes('computer')) return <Cpu className="w-7 h-7" />;
//     return <Building className="w-7 h-7" />;
//   };

//   return (
//     <div className="bg-white p-5 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-[#FF6B35] group">
//       <div className="flex items-center gap-4">
//         <div className="text-[#FF6B35] group-hover:scale-110 transition-transform">
//           {getIcon(name)}
//         </div>
//         <span className="text-[#1E3A5F] font-black text-sm uppercase tracking-wide">{name}</span>
//       </div>
//     </div>
//   );
// }'use client';

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, Calendar, Building2, GraduationCap, Users, Award,
  CheckCircle2, DollarSign, FileText, Globe, Plane, CloudSun,
  BookOpen, FlaskConical, Hospital, Home, Shield, Trophy,
  Briefcase, Target, TrendingUp, ArrowRight, Download,
  School, Lightbulb, Cpu, Building, BarChart3, Percent
} from 'lucide-react';
import { University } from '../data/universityData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ============================================
// UNIVERSITY PAGE - PROFESSIONAL SHARP DESIGN
// Modern boxy layout, bold typography, no emojis
// Clean professional aesthetic inspired by CountryPage
// ============================================

interface UniversityPageProps {
  universitySlug: string;
  universityData: University;
}

export default function UniversityPage({ universitySlug, universityData }: UniversityPageProps) {
  const uni = universityData;

  return (<>
    <main className="min-h-screen pt-5 bg-white">
  <Navbar/>
      
      {/* HERO SECTION - Full Image Left | Data Right (Desktop) / Data Only (Mobile) */}
      <section className="relative flex flex-col md:flex-row h-screen">
        
        {/* LEFT - FULL IMAGE SIDE (Hidden on mobile, visible on desktop) */}
        <div className="relative hidden md:block md:w-1/2 h-1/2 md:h-full">
          <Image
            src={uni.heroImage}
            alt={uni.name}
            fill
            className="object-cover"
            priority
          />
          {/* Subtle gradient overlay for better aesthetics */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          
          {/* University Logo Badge - Bottom Left (Desktop only) */}
          {uni.logo && (
            <div className="absolute bottom-6 left-6 bg-white p-3 shadow-xl">
              <Image
                src={uni.logo}
                alt={`${uni.name} logo`}
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
            </div>
          )}
        </div>

        {/* DIVIDER (Hidden on mobile, visible on desktop) */}
        <div className="hidden md:block w-1 bg-[#FF6B35]" />

        {/* RIGHT - University Info (Full width on mobile, half on desktop) */}
        <div className="w-full md:w-1/2 h-full bg-gradient-to-br from-[#1E3A5F] via-[#2A4A6F] to-[#1E3A5F] text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(90deg, white 1px, transparent 1px),
                linear-gradient(0deg, white 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }} />
          </div>

          <div className="relative z-10 px-6 md:px-10 lg:px-12 py-8 md:py-10 h-full flex flex-col justify-center overflow-y-auto">
            <div className="space-y-4 max-w-3xl md:max-w-xl mx-auto md:mx-0 w-full">
            
            {/* University Logo - Mobile Only */}
            {uni.logo && (
              <div className="md:hidden mb-6 flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm p-5 border-l-4 border-[#FF6B35]">
                  <Image
                    src={uni.logo}
                    alt={`${uni.name} logo`}
                    width={80}
                    height={80}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
            )}
            
            {/* University Name */}
            <div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-2 leading-tight tracking-tight text-center md:text-left">
                  {uni.name}
                </h1>
                <p className="text-base md:text-lg text-slate-200 font-medium border-l-4 border-[#FF6B35] pl-6 md:pl-4 max-w-2xl md:max-w-none mx-auto md:mx-0">
                  {uni.tagline}
                </p>
              </div>

              {/* Quick Info Tags */}
              <div className="grid grid-cols-3 gap-3 md:gap-2 max-w-2xl md:max-w-none mx-auto md:mx-0">
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-3 border-l-4 border-[#FF6B35]">
                  <MapPin className="w-5 md:w-4 h-5 md:h-4 text-[#FF6B35] mb-2 md:mb-1 mx-auto md:mx-0" />
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider text-center md:text-left">Location</div>
                  <div className="font-bold mt-1 text-sm md:text-xs text-center md:text-left">{uni.city}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-3 border-l-4 border-[#FF6B35]">
                  <Calendar className="w-5 md:w-4 h-5 md:h-4 text-[#FF6B35] mb-2 md:mb-1 mx-auto md:mx-0" />
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider text-center md:text-left">Founded</div>
                  <div className="font-bold mt-1 text-sm md:text-xs text-center md:text-left">{uni.establishedYear}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-3 border-l-4 border-[#FF6B35]">
                  <Building2 className="w-5 md:w-4 h-5 md:h-4 text-[#FF6B35] mb-2 md:mb-1 mx-auto md:mx-0" />
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider text-center md:text-left">Type</div>
                  <div className="font-bold mt-1 text-sm md:text-xs text-center md:text-left">{uni.universityType}</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-3 max-w-4xl md:max-w-none mx-auto md:mx-0">
                {uni.stats.passRate && (
                  <StatCard 
                    icon={<Target className="w-5 h-5" />} 
                    value={uni.stats.passRate} 
                    label="Success Rate" 
                  />
                )}
                <StatCard 
                  icon={<Users className="w-5 h-5" />} 
                  value={uni.stats.totalStudents.toLocaleString()} 
                  label="Students" 
                />
                <StatCard 
                  icon={<BarChart3 className="w-5 h-5" />} 
                  value={uni.stats.facultyRatio} 
                  label="Faculty Ratio" 
                />
                {uni.ranking.globalRank && (
                  <StatCard 
                    icon={<Trophy className="w-5 h-5" />} 
                    value={`Top ${uni.ranking.globalRank}`} 
                    label="Global Rank" 
                  />
                )}
              </div>

              {/* Accreditations */}
              {uni.accreditations.length > 0 && (
                <div className="space-y-3 md:space-y-2 max-w-3xl md:max-w-none mx-auto md:mx-0">
                  <h3 className="text-xs font-black text-slate-300 uppercase tracking-widest text-center md:text-left">
                    Accreditations & Recognition
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {uni.accreditations.map((acc, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1 border-l-4 border-green-500">
                        <CheckCircle2 className="w-3 h-3" />
                        <span className="text-xs font-bold">{acc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
                <Link 
                  href="#apply"
                  className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#ff5722] text-white px-8 md:px-6 py-3 md:py-2.5 font-black uppercase text-sm md:text-xs tracking-wider transition-all shadow-lg hover:shadow-xl hover:translate-x-1 group"
                >
                  APPLY NOW
                  <ArrowRight className="w-5 md:w-4 h-5 md:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 md:px-6 py-3 md:py-2.5 font-bold uppercase text-sm md:text-xs tracking-wider transition-all backdrop-blur-sm border border-white/20">
                  <Download className="w-5 md:w-4 h-5 md:h-4" />
                  BROCHURE
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* UNIFIED WHITE BACKGROUND CONTAINER - All sections flow together */}
      <div className="bg-white relative overflow-hidden">
        
        {/* CONTINUOUS BACKDROP EFFECTS - Span across entire white container */}
        <div className="absolute top-0 right-0 w-[900px] h-[600px] bg-gradient-to-bl from-[#FF6B35]/25 via-[#FF6B35]/15 to-transparent transform skew-x-12 blur-xl" />
        <div className="absolute top-1/4 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[#1E3A5F]/20 via-[#1E3A5F]/10 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-gradient-to-l from-[#FF6B35]/20 via-[#FF6B35]/8 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[500px] bg-gradient-to-br from-[#1E3A5F]/25 via-[#1E3A5F]/12 to-transparent transform -skew-y-6 blur-xl" />
        
        {/* KEY FEATURES - Asymmetric Luxury Grid */}
        {uni.keyFeatures.length > 0 && (
          <section className="py-12 relative z-10">
            
            <div className="container mx-auto px-6">
              <div className="max-w-7xl mx-auto">
              {/* Section Header - Offset Layout */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-1 w-10 bg-[#FF6B35]" />
                    <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Excellence Defined</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-[#1E3A5F] tracking-tight leading-tight">
                    Why Choose<br />{uni.shortName || uni.name}?
                  </h2>
                </div>
                <div className="flex items-end">
                  <p className="text-sm text-slate-600 font-medium leading-relaxed border-l-4 border-[#FF6B35] pl-4">
                    Discover what sets us apart in delivering world-class education and unparalleled opportunities.
                  </p>
                </div>
              </div>

              {/* Asymmetric Feature Grid */}
              <div className="grid md:grid-cols-3 gap-4">
                {/* First Feature - Large Featured Card */}
                {uni.keyFeatures[0] && (
                  <div className="md:col-span-2 md:row-span-2">
                    <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] p-8 h-full shadow-2xl border-l-8 border-[#FF6B35] group hover:scale-[1.02] transition-transform duration-300">
                      <div className="text-[#FF6B35] mb-5">
                        {getFeaturedIcon(uni.keyFeatures[0].icon)}
                      </div>
                      <h3 className="font-black text-white mb-3 text-xl uppercase tracking-wide leading-tight">
                        {uni.keyFeatures[0].label}
                      </h3>
                      {uni.keyFeatures[0].value && (
                        <p className="text-4xl font-black text-[#FF6B35] mb-3">{uni.keyFeatures[0].value}</p>
                      )}
                      <div className="w-16 h-1 bg-[#FF6B35] mt-4" />
                    </div>
                  </div>
                )}
                
                {/* Remaining Features - Compact Cards */}
                {uni.keyFeatures.slice(1, 5).map((feature, idx) => (
                  <div key={idx} className="bg-white p-5 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-[#FF6B35] group">
                    <div className="text-[#FF6B35] mb-3 group-hover:scale-110 transition-transform">
                      {getCompactIcon(feature.icon)}
                    </div>
                    <h3 className="font-black text-[#1E3A5F] mb-2 text-sm uppercase tracking-wide">{feature.label}</h3>
                    {feature.value && <p className="text-xl font-black text-[#FF6B35]">{feature.value}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        )}

        {/* PROGRAMS OFFERED - Zigzag Luxury Layout */}
        {uni.programs.length > 0 && (
          <section className="py-12 relative z-10">
            
            <div className="container mx-auto px-6">
              <div className="max-w-7xl mx-auto">
              {/* Section Header - Centered with Accent */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="h-1 w-12 bg-[#FF6B35]" />
                  <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Academic Excellence</span>
                  <div className="h-1 w-12 bg-[#FF6B35]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#1E3A5F] tracking-tight mb-3">
                  Programs Offered
                </h2>
                <p className="text-base text-slate-600 max-w-2xl mx-auto">
                  Cutting-edge curricula designed to shape future leaders
                </p>
              </div>

              {/* Programs Grid - Staggered Cards */}
              <div className="space-y-5">
                {uni.programs.map((program, idx) => (
                  <div 
                    key={idx} 
                    className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-full ${idx % 2 === 0 ? 'md:w-4/5' : 'md:w-4/5'} bg-white shadow-xl hover:shadow-2xl transition-all border-l-8 ${idx % 2 === 0 ? 'border-[#FF6B35]' : 'border-[#1E3A5F]'} group`}>
                      <div className="grid md:grid-cols-3 gap-4 p-6">
                        {/* Left - Program Info */}
                        <div className="md:col-span-2 space-y-3">
                          <div className="flex items-start justify-between gap-3">
                            <div className={`${idx % 2 === 0 ? 'bg-[#FF6B35]' : 'bg-[#1E3A5F]'} p-3`}>
                              <GraduationCap className="w-7 h-7 text-white" />
                            </div>
                            <div className={`${idx % 2 === 0 ? 'bg-[#1E3A5F]' : 'bg-[#FF6B35]'} text-white px-4 py-1 text-xs font-black uppercase tracking-widest`}>
                              {program.category}
                            </div>
                          </div>
                          <h3 className="text-2xl font-black text-[#1E3A5F] leading-tight">{program.name}</h3>
                          <p className="text-base text-slate-600 font-bold">{program.degree} • {program.duration}</p>
                        </div>

                        {/* Right - Quick Details */}
                        <div className="space-y-2">
                          <div className="bg-slate-50 p-3 border-l-4 border-[#FF6B35]">
                            <div className="flex items-center gap-2 mb-1">
                              <Calendar className="w-4 h-4 text-[#FF6B35]" />
                              <span className="text-xs font-black text-slate-600 uppercase tracking-wider">Intakes</span>
                            </div>
                            <span className="font-bold text-[#1E3A5F] text-sm">{program.intakes.join(', ')}</span>
                          </div>
                          {program.seats && (
                            <div className="bg-slate-50 p-3 border-l-4 border-[#FF6B35]">
                              <div className="flex items-center gap-2 mb-1">
                                <Users className="w-4 h-4 text-[#FF6B35]" />
                                <span className="text-xs font-black text-slate-600 uppercase tracking-wider">Seats</span>
                              </div>
                              <span className="font-bold text-[#1E3A5F] text-sm">{program.seats} Available</span>
                            </div>
                          )}
                          <button className="w-full bg-[#1E3A5F] hover:bg-[#FF6B35] text-white py-2.5 font-black uppercase text-xs tracking-wider transition-all">
                            LEARN MORE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      </div>
      {/* END OF FIRST UNIFIED WHITE BACKGROUND CONTAINER */}

      {/* FEES & COSTS - Dramatic Backdrop Layout */}
      {uni.fees && (
        <section className="relative py-16 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/90 to-[#1E3A5F]/95 z-10" />
            {uni.galleryImages[0] && (
              <Image
                src={uni.galleryImages[0]}
                alt="Campus background"
                fill
                className="object-cover"
              />
            )}
          </div>

          <div className="container mx-auto px-6 relative z-20">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="h-1 w-12 bg-[#FF6B35]" />
                  <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Investment in Your Future</span>
                  <div className="h-1 w-12 bg-[#FF6B35]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
                  Fees & Costs
                </h2>
                <p className="text-base text-slate-300 max-w-2xl mx-auto">
                  Transparent pricing for exceptional education
                </p>
              </div>

              {/* Fee Grid - Split Layout */}
              <div className="grid md:grid-cols-2 gap-5">
                {/* Left - Main Fees */}
                <div className="bg-white/10 backdrop-blur-md p-7 border-l-8 border-[#FF6B35] shadow-2xl">
                  <h3 className="text-xl font-black text-white mb-5 uppercase tracking-wider">Annual Breakdown</h3>
                  <div className="space-y-4">
                    <div className="pb-3 border-b-2 border-white/20">
                      <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-1">Tuition Fee</div>
                      <div className="text-3xl font-black text-white">{uni.fees.currency} {uni.fees.tuitionPerYear.toLocaleString()}</div>
                    </div>
                    <div className="pb-3 border-b-2 border-white/20">
                      <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-1">Hostel Fee</div>
                      <div className="text-2xl font-black text-white">{uni.fees.currency} {uni.fees.hostelPerYear.toLocaleString()}</div>
                    </div>
                  </div>
                </div>

                {/* Right - Total Costs */}
                <div className="space-y-4">
                  <div className="bg-[#FF6B35] p-7 shadow-2xl">
                    <div className="text-xs font-bold text-white/80 uppercase tracking-widest mb-2">First Year Investment</div>
                    <div className="text-4xl font-black text-white mb-2">{uni.fees.currency} {uni.fees.totalFirstYear.toLocaleString()}</div>
                    <div className="w-16 h-1 bg-white/50" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-7 border-l-8 border-white shadow-2xl">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">Complete Program</div>
                    <div className="text-4xl font-black text-white mb-2">{uni.fees.currency} {uni.fees.totalCourse.toLocaleString()}</div>
                    <div className="w-16 h-1 bg-[#FF6B35]" />
                  </div>
                </div>
              </div>

              {/* Payment Note */}
              <div className="mt-8 text-center">
                <p className="text-sm text-slate-300 font-medium">
                  Flexible payment plans available • Scholarships offered to eligible students
                </p>
              </div>
            </div>
          </div>
          
          {/* Seamless transition overlay to next section - REMOVED for clean separation */}
        </section>
      )}

      {/* SECOND UNIFIED WHITE BACKGROUND CONTAINER - Eligibility & Facilities flow together */}
      <div className="bg-white relative overflow-hidden">

        {/* CONTINUOUS BACKDROP EFFECTS - Span across entire white container */}
        <div className="absolute -right-32 top-1/3 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-[#FF6B35]/30 via-[#FF6B35]/15 via-[#1E3A5F]/10 to-transparent blur-2xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-[#1E3A5F]/25 via-[#1E3A5F]/12 to-transparent rounded-full blur-2xl" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FF6B35]/20 via-[#FF6B35]/8 to-transparent rounded-full blur-xl" />

        {/* ELIGIBILITY CRITERIA - Split Luxury Layout */}
        {uni.eligibility && (
          <section className="py-12 relative z-10">
            
            <div className="container mx-auto px-6">
              <div className="max-w-7xl mx-auto">
              
              <div className="grid md:grid-cols-5 gap-8 items-start">
                {/* Left - Visual Element */}
                <div className="md:col-span-2">
                  <div className="sticky top-24">
                    <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] p-10 border-l-8 border-[#FF6B35] shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col justify-between">
                      {/* Bold Inner Accent */}
                      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B35]/20 rounded-full blur-2xl" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-1 w-10 bg-[#FF6B35]" />
                          <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Requirements</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
                          Eligibility<br />Criteria
                        </h2>
                        <p className="text-slate-300 text-base leading-relaxed mb-8">
                          Meet these requirements to begin your journey towards academic excellence and secure your place in our prestigious programs.
                        </p>
                        <div className="w-24 h-1 bg-[#FF6B35] mb-10" />
                        
                        {/* Additional Visual Stats */}
                        <div className="space-y-6 pt-6 border-t border-white/10">
                          <div className="flex items-center gap-4">
                            <div className="bg-[#FF6B35]/20 p-4">
                              <CheckCircle2 className="w-8 h-8 text-[#FF6B35]" />
                            </div>
                            <div>
                              <p className="text-white font-black text-2xl">Fast Processing</p>
                              <p className="text-slate-300 text-sm">Quick admission decisions</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="bg-white/10 p-4">
                              <Users className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <p className="text-white font-black text-2xl">Expert Support</p>
                              <p className="text-slate-300 text-sm">Guidance throughout process</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Criteria Cards */}
                <div className="md:col-span-3 space-y-4">
                  {uni.eligibility.exam && (
                    <div className="bg-white p-6 shadow-lg border-l-8 border-[#FF6B35] hover:shadow-xl transition-all group">
                      <div className="flex items-start gap-4">
                        <div className="bg-[#FF6B35]/10 p-3 group-hover:scale-110 transition-transform">
                          <FileText className="w-6 h-6 text-[#FF6B35]" />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">Required Exam</span>
                          <p className="text-xl font-black text-[#1E3A5F]">{uni.eligibility.exam}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {uni.eligibility.minScore && (
                    <div className="bg-white p-6 shadow-lg border-l-8 border-[#1E3A5F] hover:shadow-xl transition-all group">
                      <div className="flex items-start gap-4">
                        <div className="bg-[#1E3A5F]/10 p-3 group-hover:scale-110 transition-transform">
                          <BarChart3 className="w-6 h-6 text-[#1E3A5F]" />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">Minimum Score</span>
                          <p className="text-xl font-black text-[#1E3A5F]">{uni.eligibility.minScore}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="bg-white p-6 shadow-lg border-l-8 border-[#FF6B35] hover:shadow-xl transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#FF6B35]/10 p-3 group-hover:scale-110 transition-transform">
                        <Percent className="w-6 h-6 text-[#FF6B35]" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">Minimum Percentage</span>
                        <p className="text-xl font-black text-[#1E3A5F]">{uni.eligibility.minPercentage}</p>
                      </div>
                    </div>
                  </div>

                  {uni.eligibility.ageLimit && (
                    <div className="bg-white p-6 shadow-lg border-l-8 border-[#1E3A5F] hover:shadow-xl transition-all group">
                      <div className="flex items-start gap-4">
                        <div className="bg-[#1E3A5F]/10 p-3 group-hover:scale-110 transition-transform">
                          <Calendar className="w-6 h-6 text-[#1E3A5F]" />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">Age Limit</span>
                          <p className="text-xl font-black text-[#1E3A5F]">{uni.eligibility.ageLimit}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Required Documents */}
                  {uni.eligibility.requiredDocs.length > 0 && (
                    <div className="bg-gradient-to-br from-slate-50 to-white p-6 border-l-8 border-[#FF6B35] shadow-lg">
                      <h3 className="text-xs font-black text-slate-600 uppercase tracking-widest mb-4">Required Documents</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {uni.eligibility.requiredDocs.map((doc, idx) => (
                          <div key={idx} className="bg-white px-3 py-2 border-l-4 border-[#1E3A5F] shadow-sm hover:shadow-md transition-all">
                            <span className="text-xs font-bold text-[#1E3A5F]">{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

        {/* FACILITIES - Masonry Grid Layout */}
        {uni.facilities.length > 0 && (
          <section className="py-12 relative z-10">
            
            <div className="container mx-auto px-6">
              <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="h-1 w-12 bg-[#FF6B35]" />
                  <span className="text-xs font-black text-slate-600 uppercase tracking-widest">World-Class Infrastructure</span>
                  <div className="h-1 w-12 bg-[#FF6B35]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#1E3A5F] tracking-tight">
                  Campus Facilities
                </h2>
              </div>

              {/* Facility Grid - Varying Heights for Visual Interest */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {uni.facilities.map((facility, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-gradient-to-br from-slate-50 to-white p-4 shadow-lg hover:shadow-xl transition-all border-l-4 ${
                      idx % 3 === 0 ? 'border-[#FF6B35] md:row-span-2' : 'border-[#1E3A5F]'
                    } group hover:border-[#FF6B35] ${idx % 3 === 0 ? 'flex flex-col justify-center' : ''}`}
                  >
                    <div className={`text-[#FF6B35] group-hover:scale-110 transition-transform ${idx % 3 === 0 ? 'mb-4' : 'mb-3'}`}>
                      {getFacilityIcon(facility, idx % 3 === 0)}
                    </div>
                    <span className={`text-[#1E3A5F] font-black uppercase tracking-wide ${idx % 3 === 0 ? 'text-base' : 'text-xs'}`}>
                      {facility}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      </div>
      {/* END OF SECOND UNIFIED WHITE BACKGROUND CONTAINER */}

      {/* GALLERY - Full-Width Cinematic Layout */}
      {uni.galleryImages.length > 0 && (
        <section className="py-0 bg-black">
          <div className="relative">
            {/* Section Header Overlay */}
            <div className="absolute top-0 left-0 right-0 z-20 pt-16 pb-10">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-1 w-12 bg-[#FF6B35]" />
                    <span className="text-xs font-black text-white uppercase tracking-widest">Experience Campus Life</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                    Campus Gallery
                  </h2>
                </div>
              </div>
            </div>

            {/* Gallery Grid - Cinematic */}
            <div className="grid md:grid-cols-2 gap-1">
              {uni.galleryImages.slice(0, 4).map((img, idx) => (
                <div 
                  key={idx} 
                  className={`relative group overflow-hidden ${
                    idx === 0 ? 'md:col-span-2 h-[400px]' : 'h-[300px]'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${uni.name} campus ${idx + 1}`}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-12 h-1 bg-[#FF6B35] mb-2" />
                    <p className="text-white font-black text-lg uppercase tracking-wide">
                      {idx === 0 ? 'Main Campus' : idx === 1 ? 'Academic Block' : idx === 2 ? 'Research Labs' : 'Student Life'}
                    </p>
                    <p className="text-slate-300 text-sm mt-1">Explore our state-of-the-art facilities</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
    <Footer/>
    </>
  );
}

// ============================================
// SUB-COMPONENTS - Luxury Sharp Design
// ============================================

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-4 border-l-4 border-[#FF6B35] hover:bg-white/20 transition-all group">
      <div className="text-[#FF6B35] mb-2 group-hover:scale-110 transition-transform flex justify-center md:justify-start">
        {icon}
      </div>
      <div className="text-2xl md:text-3xl font-black mb-1 text-center md:text-left">{value}</div>
      <div className="text-xs font-bold text-slate-300 uppercase tracking-widest text-center md:text-left">{label}</div>
    </div>
  );
}

// Icon Helper Functions for New Layouts
function getFeaturedIcon(iconName: string) {
  const icons: { [key: string]: React.ReactNode } = {
    'trophy': <Trophy className="w-12 h-12" />,
    'briefcase': <Briefcase className="w-12 h-12" />,
    'flask': <FlaskConical className="w-12 h-12" />,
    'globe': <Globe className="w-12 h-12" />,
    'award': <Award className="w-12 h-12" />,
    'target': <Target className="w-12 h-12" />,
    'school': <School className="w-12 h-12" />,
    'lightbulb': <Lightbulb className="w-12 h-12" />,
  };
  return icons[iconName.toLowerCase()] || <Award className="w-12 h-12" />;
}

function getCompactIcon(iconName: string) {
  const icons: { [key: string]: React.ReactNode } = {
    'trophy': <Trophy className="w-7 h-7" />,
    'briefcase': <Briefcase className="w-7 h-7" />,
    'flask': <FlaskConical className="w-7 h-7" />,
    'globe': <Globe className="w-7 h-7" />,
    'award': <Award className="w-7 h-7" />,
    'target': <Target className="w-7 h-7" />,
    'school': <School className="w-7 h-7" />,
    'lightbulb': <Lightbulb className="w-7 h-7" />,
  };
  return icons[iconName.toLowerCase()] || <Award className="w-7 h-7" />;
}

function getFacilityIcon(facilityName: string, isLarge: boolean = false) {
  const size = isLarge ? "w-8 h-8" : "w-5 h-5";
  const lower = facilityName.toLowerCase();
  
  if (lower.includes('library')) return <BookOpen className={size} />;
  if (lower.includes('lab')) return <FlaskConical className={size} />;
  if (lower.includes('hospital')) return <Hospital className={size} />;
  if (lower.includes('hostel') || lower.includes('accommodation')) return <Home className={size} />;
  if (lower.includes('sports') || lower.includes('gym')) return <Trophy className={size} />;
  if (lower.includes('wifi') || lower.includes('internet')) return <Globe className={size} />;
  if (lower.includes('security')) return <Shield className={size} />;
  if (lower.includes('research')) return <Lightbulb className={size} />;
  if (lower.includes('computer')) return <Cpu className={size} />;
  return <Building className={size} />;
}

function FeatureCard({ icon, label, value }: { icon: string; label: string; value?: string }) {
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'trophy': <Trophy className="w-10 h-10" />,
      'briefcase': <Briefcase className="w-10 h-10" />,
      'flask': <FlaskConical className="w-10 h-10" />,
      'globe': <Globe className="w-10 h-10" />,
      'award': <Award className="w-10 h-10" />,
      'target': <Target className="w-10 h-10" />,
      'school': <School className="w-10 h-10" />,
      'lightbulb': <Lightbulb className="w-10 h-10" />,
    };
    return icons[iconName.toLowerCase()] || <Award className="w-10 h-10" />;
  };

  return (
    <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-[#FF6B35] group">
      <div className="text-[#FF6B35] mb-6 group-hover:scale-110 transition-transform">
        {getIcon(icon)}
      </div>
      <h3 className="font-black text-[#1E3A5F] mb-3 text-lg uppercase tracking-wide">{label}</h3>
      {value && <p className="text-3xl font-black text-[#FF6B35]">{value}</p>}
    </div>
  );
}

function ProgramCard({ name, duration, degree, category, intakes, seats }: any) {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-[#FF6B35] group">
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="bg-[#FF6B35] p-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <div className="bg-[#1E3A5F] text-white px-4 py-2 text-xs font-black uppercase tracking-wider">
            {category}
          </div>
        </div>
        <h3 className="text-2xl font-black text-[#1E3A5F] mb-3 leading-tight">{name}</h3>
        <p className="text-slate-600 font-bold mb-6">{degree} • {duration}</p>
        <div className="space-y-3 text-sm text-slate-600 mb-6">
          <div className="flex items-center gap-3 bg-slate-50 p-3 border-l-4 border-[#FF6B35]">
            <Calendar className="w-5 h-5 text-[#FF6B35]" />
            <span className="font-semibold">Intakes: {intakes.join(', ')}</span>
          </div>
          {seats && (
            <div className="flex items-center gap-3 bg-slate-50 p-3 border-l-4 border-[#FF6B35]">
              <Users className="w-5 h-5 text-[#FF6B35]" />
              <span className="font-semibold">{seats} Seats</span>
            </div>
          )}
        </div>
      </div>
      <button className="w-full bg-[#1E3A5F] hover:bg-[#FF6B35] text-white py-4 font-black uppercase tracking-wider transition-all group-hover:shadow-lg">
        VIEW DETAILS
      </button>
    </div>
  );
}

function FeeRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`flex justify-between items-center py-4 border-b-2 ${
      highlight 
        ? 'border-[#FF6B35] bg-[#FF6B35]/10' 
        : 'border-white/10'
    } ${highlight ? 'px-4' : ''}`}>
      <span className={`font-bold uppercase tracking-wider text-sm ${
        highlight ? 'text-[#FF6B35]' : 'text-slate-300'
      }`}>
        {label}
      </span>
      <span className={`font-black text-xl ${
        highlight ? 'text-[#FF6B35]' : 'text-white'
      }`}>
        {value}
      </span>
    </div>
  );
}

function EligibilityRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-white p-6 border-l-4 border-[#FF6B35] shadow">
      <div className="flex items-center gap-4 mb-3">
        <div className="text-[#FF6B35]">{icon}</div>
        <span className="text-slate-600 text-xs font-black uppercase tracking-widest">{label}</span>
      </div>
      <p className="font-black text-[#1E3A5F] text-xl">{value}</p>
    </div>
  );
}

function FacilityCard({ name }: { name: string }) {
  const getIcon = (facilityName: string) => {
    const lower = facilityName.toLowerCase();
    if (lower.includes('library')) return <BookOpen className="w-7 h-7" />;
    if (lower.includes('lab')) return <FlaskConical className="w-7 h-7" />;
    if (lower.includes('hospital')) return <Hospital className="w-7 h-7" />;
    if (lower.includes('hostel') || lower.includes('accommodation')) return <Home className="w-7 h-7" />;
    if (lower.includes('sports') || lower.includes('gym')) return <Trophy className="w-7 h-7" />;
    if (lower.includes('wifi') || lower.includes('internet')) return <Globe className="w-7 h-7" />;
    if (lower.includes('security')) return <Shield className="w-7 h-7" />;
    if (lower.includes('research')) return <Lightbulb className="w-7 h-7" />;
    if (lower.includes('computer')) return <Cpu className="w-7 h-7" />;
    return <Building className="w-7 h-7" />;
  };

  return (
    <div className="bg-white p-5 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-[#FF6B35] group">
      <div className="flex items-center gap-4">
        <div className="text-[#FF6B35] group-hover:scale-110 transition-transform">
          {getIcon(name)}
        </div>
        <span className="text-[#1E3A5F] font-black text-sm uppercase tracking-wide">{name}</span>
      </div>
    </div>
  );
}