// import NavbarHero from './components/Hero'
// import ProgramsSection from './components/ProgramsSection';
// import StudyDestinationsSection from './components/StudyDestinations';
// import DestinationsSection from './components/DestinationsSection';
// import Footer from './components/Footer'
// export default function Home() {
//   return (
//     <>
//       <NavbarHero />
//       <ProgramsSection/>
      
//       <DestinationsSection/>
//       {/* <StudyDestinationsSection/> */}
//       <Footer/>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from 'react';
import NavbarHero from './components/Hero';
import ProgramsSection from './components/ProgramsSection';
import DestinationsSection from './components/DestinationsSection';
import FilteredCountriesSection from './components/FilteredConutries';
import Footer from './components/Footer';
import { getCountriesByCourse } from '@/services/dbServices';
import type { CountryDetailedInfo } from './data/countryData';
import AdSlot from './components/AdSlot';
import { db } from '@/lib/firebase';

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [filteredCountries, setFilteredCountries] = useState<CountryDetailedInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch countries when course is selected
  useEffect(() => {
    const fetchFilteredCountries = async () => {
      if (selectedCourse) {
        setIsLoading(true);
        try {
          const countries = await getCountriesByCourse(selectedCourse);
          setFilteredCountries(countries);
        } catch (error) {
          console.error('Error fetching filtered countries:', error);
          setFilteredCountries([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setFilteredCountries([]);
      }
    };

    fetchFilteredCountries();
  }, [selectedCourse]);

  const handleCourseSelect = (course: string) => {
    setSelectedCourse(course);
  };

  const handleClearFilter = () => {
    setSelectedCourse('');
    setFilteredCountries([]);
  };

  return (
    <>
      {/* Hero Section - Always Visible */}
       
      <NavbarHero 
        onCourseSelect={handleCourseSelect}
        selectedCourse={selectedCourse}
      />

      {/* Conditional Content Based on Filter State */}
      {selectedCourse ? (
        <>
          {/* Filtered Results Section */}
          {isLoading ? (
            <div style={{
              padding: '100px 20px',
              textAlign: 'center',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              background: '#F8FAFC'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                border: '4px solid #E2E8F0',
                borderTop: '4px solid #FF6B35',
                borderRadius: '50%',
                margin: '0 auto 24px',
                animation: 'spin 1s linear infinite'
              }} />
              <p style={{
                fontSize: '18px',
                color: '#64748B',
                fontWeight: '600'
              }}>
                Loading destinations for {selectedCourse}...
              </p>
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          ) : (
            <>
              {/* Clear Filter Bar */}
              <div style={{
                background: '#1E3A5F',
                padding: '20px',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}>
                <div style={{
                  maxWidth: '1400px',
                  margin: '0 auto',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}>
                  <div style={{
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '600'
                  }}>
                    Showing {filteredCountries.length} destination{filteredCountries.length !== 1 ? 's' : ''} for <span style={{ color: '#FF6B35', fontWeight: '800' }}>{selectedCourse}</span>
                  </div>
                  <button 
                    onClick={handleClearFilter}
                    style={{
                      background: 'transparent',
                      color: 'white',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      padding: '10px 24px',
                      borderRadius: '50px',
                      fontSize: '14px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.borderColor = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    }}
                  >
                    Clear Filter ✕
                  </button>
                </div>
              </div>

              {/* Filtered Countries Display */}
              <FilteredCountriesSection 
                countries={filteredCountries}
                selectedCourse={selectedCourse}
              />
            </>
          )}
        </>
      ) : (
        <>
          {/* Default Homepage Content */}
          <AdSlot 
        db={db}
        pageLocation="home" 
        position="top" 
        className="my-10" 
      />
          <ProgramsSection />
          <DestinationsSection />
          <Footer />
        </>
      )}

      {/* Footer - Always Visible */}
      
    </>
  );
}
