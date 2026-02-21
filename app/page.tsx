"use client";

import { useState, useEffect, useCallback } from 'react';
import Hero from './components/Hero';
import DestinationsSection from './components/DestinationsSection';
import FilteredUniversitiesSection from './components/FilteredUnvierstiesSection';
import Footer from './components/Footer';
import {
  getUniversitiesByCourse,
  getAllCountries,
} from '@/services/dbServices';
import type { University } from '@/app/data/universityData';
import type { CountryDetailedInfo } from '@/app/data/countryData';
import type { MatcherFilters } from './components/Hero';
import ProgramsSection from './components/ProgramsSection';
import BudgetPlannerSection from './components/BudgetPlannerSection';
import CountryCompareSection from './components/CountryCompareScreen';

// ─── Budget label → annual USD range ──────────────────────────────────────────
function budgetToRange(label: string): { min: number; max: number } {
  switch (label) {
    case 'Under $5,000 / year':       return { min: 0,     max: 5000       };
    case '$5,000 – $10,000 / year':   return { min: 5000,  max: 10000      };
    case '$10,000 – $20,000 / year':  return { min: 10000, max: 20000      };
    case '$20,000+ / year':           return { min: 20000, max: Infinity   };
    default:                          return { min: 0,     max: Infinity   };
  }
}

// ─── Language → medium of instruction match ────────────────────────────────────
function matchesLanguage(uni: University, lang: string): boolean {
  if (!lang) return true;
  const m = (uni.mediumOfInstruction || '').toLowerCase();
  if (lang === 'English Only') return m === 'english';
  // 'English + Local' and 'Local Language OK' — accept all
  return true;
}

// ─── Region → country.region match via pre-built map ──────────────────────────
function matchesRegion(
  uni: University,
  region: string,
  countryRegionMap: Map<string, string>
): boolean {
  if (!region) return true;
  return countryRegionMap.get(uni.countrySlug) === region;
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeFilters, setActiveFilters] = useState<MatcherFilters | null>(null);
  const [universities,  setUniversities]  = useState<University[]>([]);
  const [isLoading,     setIsLoading]     = useState(false);

  // Pre-build countrySlug → region map once on mount
  // (uses country.region field from CountryDetailedInfo / 'screens' Firestore collection)
  const [countryRegionMap, setCountryRegionMap] = useState<Map<string, string>>(new Map());

  useEffect(() => {
    getAllCountries()
      .then((countries: CountryDetailedInfo[]) => {
        const map = new Map<string, string>();
        countries.forEach(c => {
          if (c.region) map.set(c.slug, c.region);
        });
        setCountryRegionMap(map);
      })
      .catch(err => console.error('Page: error loading country regions:', err));
  }, []);

  // ── Search handler — only fires when "Find Matches" button is clicked ──────
  const handleSearch = useCallback(async (filters: MatcherFilters) => {
    setActiveFilters(filters);
    setIsLoading(true);
    setUniversities([]);

    try {
      // 1. Fetch from 'universities' Firestore collection — filtered by program.name
      //    Uses getUniversitiesByCourse() from dbServices which checks university.programs[].name
      const allForCourse: University[] = await getUniversitiesByCourse(filters.course);

      // 2. Client-side filter by budget (fees.tuitionPerYear), region, language
      const { min, max } = budgetToRange(filters.budget);

      const matched = allForCourse.filter(uni => {
        // Budget: compare against fees.tuitionPerYear (number in University interface)
        const tuition = uni.fees?.tuitionPerYear ?? 0;
        if (tuition < min || tuition > max) return false;

        // Region: match via countrySlug → country.region map
        if (!matchesRegion(uni, filters.region, countryRegionMap)) return false;

        // Language: match against mediumOfInstruction
        if (!matchesLanguage(uni, filters.language)) return false;

        return true;
      });

      setUniversities(matched);
    } catch (err) {
      console.error('Page: error fetching universities:', err);
      setUniversities([]);
    } finally {
      setIsLoading(false);
    }
  }, [countryRegionMap]);

  // ── Clear: resets to homepage state ────────────────────────────────────────
  const handleClear = () => {
    setActiveFilters(null);
    setUniversities([]);
  };

  return (
    <>
      {/* Hero always renders — contains the Matcher */}
      <Hero onSearch={handleSearch} />

      {/* ── LOADING SPINNER ── */}
      {isLoading && (
        <div style={{
          background: '#1E3A5F',
          padding: '100px 20px',
          textAlign: 'center',
          fontFamily: '"Plus Jakarta Sans", sans-serif',
        }}>
          <style>{`
            @keyframes spin {
              0%   { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <div style={{
            width: '56px', height: '56px', margin: '0 auto 24px',
            border: '4px solid rgba(255,255,255,0.12)',
            borderTop: '4px solid #FF6B35',
            borderRadius: '50%',
            animation: 'spin 0.9s linear infinite',
          }} />
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', fontWeight: '600' }}>
            Searching universities for{' '}
            <span style={{ color: '#FF6B35', fontWeight: '800' }}>
              {activeFilters?.course}
            </span>
            …
          </p>
        </div>
      )}

      {/* ── FILTERED UNIVERSITIES — only visible after "Find Matches" is clicked ── */}
      {!isLoading && activeFilters && (
        <FilteredUniversitiesSection
          universities={universities}
          filters={activeFilters}
          onClear={handleClear}
        />
      )}
     <CountryCompareSection/>
      {/* ── DESTINATIONS + FOOTER — always visible ── */}
      <BudgetPlannerSection/>
      <DestinationsSection />
      <Footer />
    </>
  );
}