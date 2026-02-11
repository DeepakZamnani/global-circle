"use client";

import { useState, useEffect, useRef } from 'react';
import { getUniqueCourses, getUniversitiesByCourse } from '@/services/dbServices';

interface CourseDropdownProps {
  selectedCourse: string;
  onCourseSelect: (course: string) => void;
}

export default function CourseDropdown({ selectedCourse, onCourseSelect }: CourseDropdownProps) {
  const [courses, setCourses] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [courseCounts, setCourseCounts] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch courses on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const uniqueCourses = await getUniqueCourses();
        setCourses(uniqueCourses);

        // Fetch university counts for each course
        const counts: Record<string, number> = {};
        await Promise.all(
          uniqueCourses.map(async (course) => {
            const unis = await getUniversitiesByCourse(course);
            counts[course] = unis.length;
          })
        );
        setCourseCounts(counts);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter courses based on search
  const filteredCourses = courses.filter(course =>
    course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Popular courses (most universities)
  const popularCourses = [...courses]
    .sort((a, b) => (courseCounts[b] || 0) - (courseCounts[a] || 0))
    .slice(0, 3);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .course-dropdown-container {
          position: relative;
          width: 100%;
          max-width: 550px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .course-trigger-btn {
          width: 100%;
          background: white;
          border: 2px solid #1E3A5F;
          padding: 20px 24px;
          border-radius: 16px;
          font-weight: 700;
          font-size: 16px;
          color: #1E3A5F;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 20px rgba(30, 58, 95, 0.1);
          position: relative;
          overflow: hidden;
        }

        .course-trigger-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .course-trigger-btn:hover::before {
          left: 100%;
        }

        .course-trigger-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(30, 58, 95, 0.15);
          border-color: #FF6B35;
        }

        .course-trigger-btn.open {
          border-color: #FF6B35;
          box-shadow: 0 8px 30px rgba(255, 107, 53, 0.2);
        }

        .trigger-content {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        .trigger-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #FF6B35 0%, #FF8C61 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
        }

        .trigger-text {
          text-align: left;
          flex: 1;
        }

        .trigger-label {
          font-size: 11px;
          font-weight: 600;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }

        .trigger-value {
          font-size: 16px;
          font-weight: 800;
          color: #1E3A5F;
          line-height: 1.2;
        }

        .trigger-arrow {
          font-size: 18px;
          color: #64748B;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .course-trigger-btn.open .trigger-arrow {
          transform: rotate(180deg);
          color: #FF6B35;
        }

        /* DROPDOWN PANEL - Natural scroll, no body lock needed */
        .course-dropdown-panel {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          right: 0;
          background: white;
          border: 2px solid #E2E8F0;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          animation: dropdownSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          max-height: 500px;
        }

        @keyframes dropdownSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .dropdown-search {
          padding: 20px 20px 16px;
          border-bottom: 2px solid #F1F5F9;
          background: white;
          border-radius: 20px 20px 0 0;
          flex-shrink: 0;
        }

        .search-input-wrapper {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 18px;
          color: #94A3B8;
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 14px 16px 14px 48px;
          border: 2px solid #E2E8F0;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #1E3A5F;
          transition: all 0.3s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .search-input:focus {
          outline: none;
          border-color: #FF6B35;
          box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.1);
        }

        .search-input::placeholder {
          color: #94A3B8;
          font-weight: 500;
        }

        .popular-section {
          padding: 16px 20px;
          border-bottom: 2px solid #F1F5F9;
          background: #F8FAFC;
          flex-shrink: 0;
        }

        .popular-label {
          font-size: 11px;
          font-weight: 700;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .popular-label::before {
          content: '🔥';
          font-size: 14px;
        }

        .popular-chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .popular-chip {
          background: white;
          border: 2px solid #E2E8F0;
          padding: 8px 14px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          color: #1E3A5F;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .popular-chip:hover {
          border-color: #FF6B35;
          background: #FFF7ED;
          color: #FF6B35;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 107, 53, 0.2);
        }

        .popular-chip.selected {
          background: linear-gradient(135deg, #FF6B35 0%, #FF8C61 100%);
          border-color: #FF6B35;
          color: white;
          box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
        }

        .chip-count {
          font-size: 11px;
          opacity: 0.8;
        }

        /* COURSES LIST - Smooth scrolling */
        .courses-list {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 8px;
          min-height: 0;
        }

        .courses-list::-webkit-scrollbar {
          width: 8px;
        }

        .courses-list::-webkit-scrollbar-track {
          background: #F1F5F9;
          border-radius: 4px;
        }

        .courses-list::-webkit-scrollbar-thumb {
          background: #CBD5E1;
          border-radius: 4px;
          transition: background 0.3s ease;
        }

        .courses-list::-webkit-scrollbar-thumb:hover {
          background: #94A3B8;
        }

        .courses-list {
          scrollbar-width: thin;
          scrollbar-color: #CBD5E1 #F1F5F9;
        }

        .course-option {
          padding: 14px 16px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
          position: relative;
          overflow: hidden;
        }

        .course-option::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: #FF6B35;
          transform: scaleY(0);
          transition: transform 0.2s ease;
        }

        .course-option:hover {
          background: #FFF7ED;
          transform: translateX(4px);
        }

        .course-option:hover::before {
          transform: scaleY(1);
        }

        .course-option.selected {
          background: linear-gradient(135deg, #FF6B35 0%, #FF8C61 100%);
          color: white;
        }

        .course-option.selected::before {
          display: none;
        }

        .course-option-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .course-option-icon {
          width: 36px;
          height: 36px;
          background: #F1F5F9;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .course-option:hover .course-option-icon {
          background: #E2E8F0;
          transform: rotate(5deg);
        }

        .course-option.selected .course-option-icon {
          background: rgba(255, 255, 255, 0.2);
        }

        .course-option-text {
          font-size: 14px;
          font-weight: 700;
          color: #1E3A5F;
        }

        .course-option.selected .course-option-text {
          color: white;
        }

        .course-option-badge {
          background: #E2E8F0;
          color: #64748B;
          padding: 4px 10px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          min-width: 45px;
          text-align: center;
        }

        .course-option.selected .course-option-badge {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .empty-state {
          padding: 40px 20px;
          text-align: center;
        }

        .empty-icon {
          font-size: 48px;
          margin-bottom: 12px;
          opacity: 0.5;
        }

        .empty-text {
          font-size: 14px;
          font-weight: 600;
          color: #64748B;
        }

        .loading-state {
          padding: 40px 20px;
          text-align: center;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #E2E8F0;
          border-top: 4px solid #FF6B35;
          border-radius: 50%;
          margin: 0 auto 16px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loading-text {
          font-size: 14px;
          font-weight: 600;
          color: #64748B;
        }

        @media (max-width: 768px) {
          .course-dropdown-container {
            max-width: 100%;
          }

          .course-trigger-btn {
            padding: 16px 18px;
            font-size: 15px;
          }

          .trigger-icon {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }

          .trigger-label {
            font-size: 10px;
          }

          .trigger-value {
            font-size: 14px;
          }

          .course-dropdown-panel {
            max-height: 400px;
          }

          .dropdown-search {
            padding: 16px;
          }

          .search-input {
            padding: 12px 14px 12px 44px;
            font-size: 13px;
          }

          .popular-section {
            padding: 12px 16px;
          }

          .popular-chip {
            font-size: 12px;
            padding: 6px 12px;
          }

          .course-option {
            padding: 12px 14px;
          }

          .course-option-icon {
            width: 32px;
            height: 32px;
            font-size: 14px;
          }

          .course-option-text {
            font-size: 13px;
          }

          .course-option-badge {
            font-size: 10px;
            padding: 3px 8px;
            min-width: 40px;
          }
        }
      `}</style>

      <div className="course-dropdown-container" ref={dropdownRef}>
        <button
          className={`course-trigger-btn ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <div className="trigger-content">
            <div className="trigger-icon">
              {selectedCourse ? '📚' : '🎓'}
            </div>
            <div className="trigger-text">
              <div className="trigger-label">Select Your Course</div>
              <div className="trigger-value">
                {selectedCourse || 'Browse all programs'}
              </div>
            </div>
          </div>
          <div className="trigger-arrow">▼</div>
        </button>

        {isOpen && (
          <div className="course-dropdown-panel">
            <div className="dropdown-search">
              <div className="search-input-wrapper">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
              </div>
            </div>

            {isLoading && (
              <div className="loading-state">
                <div className="loading-spinner" />
                <div className="loading-text">Loading courses...</div>
              </div>
            )}

            {!isLoading && (
              <>
                {!searchTerm && popularCourses.length > 0 && (
                  <div className="popular-section">
                    <div className="popular-label">Popular Courses</div>
                    <div className="popular-chips">
                      {popularCourses.map((course) => (
                        <button
                          key={course}
                          className={`popular-chip ${selectedCourse === course ? 'selected' : ''}`}
                          onClick={() => {
                            onCourseSelect(course);
                            setIsOpen(false);
                            setSearchTerm('');
                          }}
                          type="button"
                        >
                          <span>{course}</span>
                          <span className="chip-count">{courseCounts[course] || 0}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="courses-list">
                  {filteredCourses.length === 0 ? (
                    <div className="empty-state">
                      <div className="empty-icon">🔍</div>
                      <div className="empty-text">
                        No courses found for "{searchTerm}"
                      </div>
                    </div>
                  ) : (
                    filteredCourses.map((course) => (
                      <div
                        key={course}
                        className={`course-option ${selectedCourse === course ? 'selected' : ''}`}
                        onClick={() => {
                          onCourseSelect(course);
                          setIsOpen(false);
                          setSearchTerm('');
                        }}
                      >
                        <div className="course-option-left">
                          <div className="course-option-icon">
                            {getCourseIcon(course)}
                          </div>
                          <div className="course-option-text">{course}</div>
                        </div>
                        <div className="course-option-badge">
                          {courseCounts[course] || 0} unis
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

function getCourseIcon(course: string): string {
  const icons: Record<string, string> = {
    'MBBS': '🩺',
    'Engineering': '⚙️',
    'MBA': '💼',
    'BDS': '🦷',
    'Pharmacy': '💊',
    'Nursing': '👩‍⚕️',
    'Architecture': '🏛️',
    'Law': '⚖️',
    'Arts': '🎨',
    'Science': '🔬',
  };
  return icons[course] || '📚';
}