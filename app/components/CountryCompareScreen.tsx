import { useState } from "react";

const COUNTRIES = [
  {
    id: 0,
    icon: "01",
    name: "Russia",
    flag: "🇷🇺",
    shortDesc: "Affordable MBBS with govt. scholarships",
    tuition: "$2,000–$5,000",
    universities: "50+",
    bgImage: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80",
    color: "#1E3A5F",
    fullDescription:
      "Russia hosts some of the world's oldest and most prestigious medical universities. Indian students benefit from no IELTS requirement, English-medium programs, and a large Indian student community. The Rossotrudnichestvo government scholarship programme covers full tuition for qualifying students.",
    highlights: ["No IELTS Required", "Govt. Scholarships Available", "NMC Approved"],
    quickFacts: ["NEET required", "6-year MBBS", "Hostel from $50/mo", "98% Visa Approval"],
    costs: "Total First Year: ~$3,500",
    postStudy: "Work permit available post-graduation",
    visa: "Very High approval rate — streamlined process for Indian students",
    topCourses: ["MBBS", "Engineering", "Pharmacy", "Dentistry"],
    slug: "russia",
  },
  {
    id: 1,
    icon: "02",
    name: "Georgia",
    flag: "🇬🇪",
    shortDesc: "English MBBS in Europe with no IELTS",
    tuition: "$4,000–$8,000",
    universities: "12+",
    bgImage: "https://images.unsplash.com/photo-1565008887967-97f91e3dbdf0?w=800&q=80",
    color: "#FF6B35",
    fullDescription:
      "A growing favourite for Indian medical students, Georgia's universities offer modern facilities, small class sizes, and clinical exposure from early years. The country's stable visa process, low living costs (~$300/mo), and friendly Indian community make it ideal for first-time international students.",
    highlights: ["100% English Medium", "No IELTS Needed", "European Campus Life"],
    quickFacts: ["NEET required", "6-year MBBS", "Living ~$300/mo", "WHO & NMC Approved"],
    costs: "Total First Year: ~$5,500",
    postStudy: "Return to India to practise after FMGE",
    visa: "Very High approval rate — simple single-entry student visa",
    topCourses: ["MBBS", "Dentistry", "Pharmacy", "Nursing"],
    slug: "georgia",
  },
  {
    id: 2,
    icon: "03",
    name: "Germany",
    flag: "🇩🇪",
    shortDesc: "Near-free education with EU work rights",
    tuition: "Free – €3,000",
    universities: "30+",
    bgImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    color: "#2EC4B6",
    fullDescription:
      "Germany's public university system offers world-ranked degrees across Engineering, Medicine, Business and Sciences — often with zero tuition. Indian students benefit from the 18-month job-seeker visa after graduation, which allows them to seek employment across the EU.",
    highlights: ["Near-Zero Tuition", "18-mo Job Seeker Visa", "EU Work Rights"],
    quickFacts: ["IELTS/TestDaF needed", "3–6 year programs", "Living €900–€1,200/mo", "Top Global Rankings"],
    costs: "Total First Year: ~€13,000",
    postStudy: "18-month EU job-seeker visa after graduation",
    visa: "High approval rate — Blocked Account required (€11,208)",
    topCourses: ["Engineering", "Computer Science", "Business", "Medicine"],
    slug: "germany",
  },
  {
    id: 3,
    icon: "04",
    name: "Canada",
    flag: "🇨🇦",
    shortDesc: "Strong PR pathway with PGWP up to 3 yrs",
    tuition: "$12,000–$22,000",
    universities: "100+",
    bgImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80",
    color: "#1E3A5F",
    fullDescription:
      "Canada's study-to-PR pipeline is unrivalled. After graduation, students can apply for PGWP and then transition to Express Entry or Provincial Nominee Programs. Top universities like University of Toronto, UBC, and McGill offer globally ranked programs.",
    highlights: ["PGWP up to 3 Years", "Express Entry PR Path", "World-Class Universities"],
    quickFacts: ["IELTS required", "2–4 year programs", "Living $1,200–$1,800/mo", "Top 3 for Indian Students"],
    costs: "Total First Year: ~$30,000",
    postStudy: "PGWP + Express Entry PR pathway",
    visa: "Moderate — competitive process, early application recommended",
    topCourses: ["Business & MBA", "Engineering", "IT & CS", "Health Sciences"],
    slug: "canada",
  },
];

export default function CountryCompareSection() {
  const [activeCountry, setActiveCountry] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState<typeof COUNTRIES[0] | null>(null);

  return (
    <section style={{
      padding: "80px 48px",
      background: "#1E3A5F",
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      position: "relative",
      overflow: "hidden",
      minHeight: "100vh",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .country-card {
          border-radius: 24px;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          border: 2px solid rgba(255,255,255,0.1);
          position: relative;
        }
        .country-card:hover {
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .country-card:hover .card-bg {
          transform: scale(1.1);
        }
        .country-card.active {
          border-color: #FF6B35;
        }
        .country-card.active:hover {
          border-color: #FF6B35;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .modal-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }
        .modal-content {
          background: #0F1F35;
          border-radius: 28px;
          max-width: 900px; width: 100%;
          max-height: 85vh; overflow-y: auto;
          position: relative;
          animation: slideUp 0.4s ease;
          border: 1px solid rgba(255,255,255,0.1);
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .modal-close {
          position: absolute; top: 20px; right: 20px;
          width: 44px; height: 44px; border-radius: 50%;
          background: rgba(255,255,255,0.1); border: none;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          font-size: 20px; color: rgba(255,255,255,0.7);
          transition: all 0.3s ease; z-index: 10;
          font-family: inherit;
        }
        .modal-close:hover { background: rgba(255,255,255,0.15); color: white; }

        .info-card {
          background: rgba(255,255,255,0.05);
          border-radius: 16px; padding: 20px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .course-tag {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50px;
          font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.9);
          transition: all 0.3s ease;
        }
        .course-tag:hover { border-color: #FF6B35; background: rgba(255,107,53,0.1); }

        .cta-btn {
          background: #FF6B35; color: white; border: none;
          padding: 16px 32px; border-radius: 50px;
          font-weight: 700; font-size: 15px; cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex; align-items: center; gap: 8px;
          font-family: inherit;
        }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,107,53,0.4); }
        .cta-btn-ghost {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .cta-btn-ghost:hover { background: rgba(255,255,255,0.15); box-shadow: 0 8px 24px rgba(255,255,255,0.1); }

        .learn-more {
          font-size: 14px; font-weight: 700; color: #FF6B35;
          display: inline-flex; align-items: center; gap: 6px;
          cursor: pointer; background: none; border: none;
          font-family: inherit; transition: gap 0.3s ease;
        }
        .learn-more:hover { gap: 12px; }
      `}</style>

      {/* Decorative circles — identical to ProgramsSection */}
      <div style={{ position:"absolute", top:"10%", right:"-5%", width:300, height:300, borderRadius:"50%", background:"#FF6B35", opacity:0.08 }} />
      <div style={{ position:"absolute", bottom:"10%", left:"-5%", width:250, height:250, borderRadius:"50%", background:"#2EC4B6", opacity:0.08 }} />

      <div style={{ maxWidth:1400, margin:"0 auto", position:"relative", zIndex:1 }}>

        {/* ── Section Header — identical to ProgramsSection ── */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:60, flexWrap:"wrap", gap:24 }}>
          <div>
            <div style={{ display:"inline-flex", alignItems:"center", gap:10, marginBottom:16 }}>
              <div style={{ width:36, height:3, background:"#FF6B35", borderRadius:2 }} />
              <span style={{ fontSize:13, fontWeight:700, color:"rgba(255,255,255,0.6)", letterSpacing:"1.5px", textTransform:"uppercase" }}>
                Side-by-Side Comparison
              </span>
            </div>
            <h2 style={{ fontSize:48, fontWeight:800, color:"white", letterSpacing:"-1.5px", lineHeight:1.1 }}>
              Compare Study<br />
              <span style={{ color:"#FF6B35" }}>Destinations</span>
            </h2>
          </div>

          {/* Stats — identical to ProgramsSection */}
          <div style={{ display:"flex", gap:32 }}>
            <div style={{ textAlign:"right" }}>
              <div style={{ fontSize:32, fontWeight:800, color:"white" }}>26+</div>
              <div style={{ fontSize:14, color:"rgba(255,255,255,0.5)", fontWeight:500 }}>Countries</div>
            </div>
            <div style={{ width:1, background:"rgba(255,255,255,0.15)" }} />
            <div style={{ textAlign:"right" }}>
              <div style={{ fontSize:32, fontWeight:800, color:"white" }}>200+</div>
              <div style={{ fontSize:14, color:"rgba(255,255,255,0.5)", fontWeight:500 }}>Partner Universities</div>
            </div>
          </div>
        </div>

        {/* ── Cards — flex expanding, identical mechanics to ProgramsSection ── */}
        <div style={{ display:"flex", gap:20, alignItems:"stretch" }}>
          {COUNTRIES.map((country) => {
            const isActive = activeCountry === country.id;
            return (
              <div
                key={country.id}
                className={`country-card${isActive ? " active" : ""}`}
                onClick={() => setActiveCountry(country.id)}
                style={{
                  flex: isActive ? "1.5" : "1",
                  padding: 28,
                  display: "flex", flexDirection: "column",
                  position: "relative", overflow: "hidden",
                  background: "transparent",
                }}
              >
                {/* Background image */}
                <div className="card-bg" style={{
                  position:"absolute", top:0, left:0, right:0, bottom:0,
                  backgroundImage:`url(${country.bgImage})`,
                  backgroundSize:"cover", backgroundPosition:"center",
                  transition:"transform 0.5s ease",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                }} />

                {/* Overlay — orange when active, dark navy otherwise */}
                <div style={{
                  position:"absolute", top:0, left:0, right:0, bottom:0,
                  background: isActive
                    ? "linear-gradient(180deg, rgba(255,107,53,0.85) 0%, rgba(255,107,53,0.95) 100%)"
                    : "linear-gradient(180deg, rgba(15,31,53,0.92) 0%, rgba(15,31,53,0.97) 100%)",
                  transition:"all 0.4s ease",
                }} />

                {/* Content */}
                <div style={{ position:"relative", zIndex:2, display:"flex", flexDirection:"column", height:"100%" }}>

                  {/* Top row: numbered box + two stats */}
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
                    <div style={{
                      width:52, height:52, borderRadius:14,
                      background: isActive ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.1)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:18, fontWeight:800, color:"white",
                      transition:"all 0.4s ease", backdropFilter:"blur(10px)",
                    }}>
                      {country.icon}
                    </div>

                    <div style={{ display:"flex", gap:16, alignItems:"center" }}>
                      <div style={{ textAlign:"center" }}>
                        <div style={{ fontSize:13, fontWeight:700, color:"white" }}>{country.tuition}</div>
                        <div style={{ fontSize:11, color:"rgba(255,255,255,0.6)" }}>Tuition/yr</div>
                      </div>
                      <div style={{ width:1, height:24, background:"rgba(255,255,255,0.2)" }} />
                      <div style={{ textAlign:"center" }}>
                        <div style={{ fontSize:14, fontWeight:700, color:"white" }}>{country.universities}</div>
                        <div style={{ fontSize:11, color:"rgba(255,255,255,0.6)" }}>Universities</div>
                      </div>
                    </div>
                  </div>

                  {/* Flag + Name */}
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                    <span style={{ fontSize:22 }}>{country.flag}</span>
                    <h3 style={{ fontSize:22, fontWeight:800, color:"white", transition:"all 0.4s ease" }}>
                      {country.name}
                    </h3>
                  </div>

                  {/* Short desc */}
                  <p style={{ fontSize:14, color:"rgba(255,255,255,0.7)", marginBottom:20, lineHeight:1.5, transition:"all 0.4s ease" }}>
                    {country.shortDesc}
                  </p>

                  {/* Highlight chips — only when active, same as subtypes in ProgramsSection */}
                  {isActive && (
                    <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:20, animation:"fadeIn 0.3s ease" }}>
                      {country.highlights.map((h, i) => (
                        <span key={i} style={{
                          padding:"6px 12px", borderRadius:50,
                          fontSize:11, fontWeight:600,
                          background:"rgba(255,255,255,0.15)",
                          color:"white", backdropFilter:"blur(10px)",
                        }}>{h}</span>
                      ))}
                    </div>
                  )}

                  {/* Learn More — identical to ProgramsSection CTA */}
                  <div style={{ marginTop:"auto" }}>
                    <button
                      className="learn-more"
                      onClick={(e) => { e.stopPropagation(); setSelectedCountry(country); }}
                    >
                      Learn More <span style={{ fontSize:16 }}>→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note — identical to ProgramsSection */}
        <div style={{ marginTop:48, textAlign:"center" }}>
          <p style={{ fontSize:15, color:"rgba(255,255,255,0.6)", maxWidth:600, margin:"0 auto" }}>
            All destinations feature NMC-approved universities with
            <span style={{ color:"white", fontWeight:600 }}> full visa assistance </span>
            and counselling support across
            <span style={{ color:"white", fontWeight:600 }}> 26+ countries</span>.
          </p>
        </div>
      </div>

      {/* ── Modal — identical structure to ProgramsSection ── */}
      {selectedCountry && (
        <div className="modal-overlay" onClick={() => setSelectedCountry(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <button className="modal-close" onClick={() => setSelectedCountry(null)}>✕</button>

            {/* Modal header with bg image */}
            <div style={{ position:"relative", height:200, overflow:"hidden", borderRadius:"28px 28px 0 0" }}>
              <div style={{
                position:"absolute", top:0, left:0, right:0, bottom:0,
                backgroundImage:`url(${selectedCountry.bgImage})`,
                backgroundSize:"cover", backgroundPosition:"center",
              }} />
              <div style={{
                position:"absolute", top:0, left:0, right:0, bottom:0,
                background:`linear-gradient(180deg, ${selectedCountry.color}CC 0%, ${selectedCountry.color}EE 100%)`,
              }} />
              <div style={{ position:"relative", zIndex:2, padding:40, height:"100%", display:"flex", flexDirection:"column", justifyContent:"flex-end" }}>
                <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:12 }}>
                  <span style={{ fontSize:32, fontWeight:800, color:"white", opacity:0.7 }}>{selectedCountry.flag}</span>
                  <div style={{ display:"flex", gap:12 }}>
                    {[selectedCountry.tuition + " / yr", selectedCountry.universities + " Universities"].map((t, i) => (
                      <span key={i} style={{ padding:"6px 14px", background:"rgba(255,255,255,0.2)", borderRadius:50, fontSize:13, fontWeight:600, color:"white" }}>{t}</span>
                    ))}
                  </div>
                </div>
                <h2 style={{ fontSize:36, fontWeight:800, color:"white", margin:0 }}>
                  Study in {selectedCountry.name}
                </h2>
              </div>
            </div>

            {/* Modal body */}
            <div style={{ padding:"32px 40px 40px" }}>
              <p style={{ fontSize:16, lineHeight:1.7, color:"rgba(255,255,255,0.7)", marginBottom:32 }}>
                {selectedCountry.fullDescription}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom:32 }}>
                <h4 style={{ fontSize:12, fontWeight:700, color:"rgba(255,255,255,0.5)", letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:16 }}>
                  Key Highlights
                </h4>
                <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
                  {selectedCountry.highlights.map((h, i) => (
                    <span key={i} style={{ padding:"10px 18px", background:`${selectedCountry.color}30`, borderRadius:50, fontSize:14, fontWeight:600, color:"rgba(255,255,255,0.9)" }}>
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* 2×2 info grid */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:32 }}>
                {[
                  { label:"Estimated Costs",   val: selectedCountry.costs },
                  { label:"Visa Approval",      val: selectedCountry.visa },
                  { label:"Post-Study Work",    val: selectedCountry.postStudy },
                  { label:"Quick Facts",        val: selectedCountry.quickFacts.join(" · ") },
                ].map(({ label, val }) => (
                  <div key={label} className="info-card">
                    <div style={{ fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.5)", letterSpacing:"1px", textTransform:"uppercase", marginBottom:8 }}>{label}</div>
                    <div style={{ fontSize:14, color:"rgba(255,255,255,0.8)", lineHeight:1.6 }}>{val}</div>
                  </div>
                ))}
              </div>

              {/* Top Courses */}
              <div style={{ marginBottom:40 }}>
                <h4 style={{ fontSize:12, fontWeight:700, color:"rgba(255,255,255,0.5)", letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:16 }}>
                  Top Courses Available
                </h4>
                <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
                  {selectedCountry.topCourses.map((c, i) => (
                    <span key={i} className="course-tag">🎓 {c}</span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
                <button className="cta-btn">Explore {selectedCountry.name} <span>→</span></button>
                <button className="cta-btn cta-btn-ghost">Book Free Consultation <span>💬</span></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}