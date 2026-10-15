import React, { useRef, useEffect, useCallback } from 'react';
import { User, Award, CheckSquare, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import Hero from './Hero';
import Certifications from './Certifications';
import Skills from './Skills';
import Contact from './Contact';

export const SECTIONS = [
  {
    id: 'about',
    title: 'About Me',
    shortTitle: 'About',
    desc: 'Profile, metrics & bio',
    icon: User,
    badge: 'Overview'
  },
  {
    id: 'certifications',
    title: 'Certifications',
    shortTitle: 'Certifications',
    desc: '7 verified badges & credentials',
    icon: Award,
    badge: '7 Badges'
  },
  {
    id: 'skills',
    title: 'Skills & Tools',
    shortTitle: 'Skills',
    desc: 'Core tools & proficiencies',
    icon: CheckSquare,
    badge: 'Proficiencies'
  },
  {
    id: 'contact',
    title: 'Get In Touch',
    shortTitle: 'Contact',
    desc: 'Direct email, phone & social',
    icon: Mail,
    badge: 'Connect'
  }
];

export default function SectionCarousel({
  activeSlide,
  setActiveSlide,
  profile,
  certifications,
  skills,
  onOpenResumeModal,
  onViewCertDetail
}) {
  const slideRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < SECTIONS.length) {
      setActiveSlide(index);
      // Reset scroll position of target slide to top
      if (slideRefs[index]?.current) {
        slideRefs[index].current.scrollTop = 0;
      }
    }
  }, [setActiveSlide]);

  const goToSlideById = useCallback((id) => {
    const idx = SECTIONS.findIndex((s) => s.id === id);
    if (idx !== -1) {
      goToSlide(idx);
    }
  }, [goToSlide]);

  // Keyboard navigation (ArrowLeft / ArrowRight) when not typing in inputs
  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      if (e.key === 'ArrowRight') {
        goToSlide(Math.min(activeSlide + 1, SECTIONS.length - 1));
      } else if (e.key === 'ArrowLeft') {
        goToSlide(Math.max(activeSlide - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlide, goToSlide]);

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;

    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX > 0 && activeSlide < SECTIONS.length - 1) {
        // Swipe left -> Next slide
        goToSlide(activeSlide + 1);
      } else if (diffX < 0 && activeSlide > 0) {
        // Swipe right -> Prev slide
        goToSlide(activeSlide - 1);
      }
    }
  };

  return (
    <div className="showcase-container" id="portfolio-showcase">
      {/* Top Compact Section Selector Bar */}
      <div className="showcase-nav-wrapper">
        <div className="container">
          <div className="showcase-buttons-grid" role="tablist" aria-label="Portfolio Sections">
            {SECTIONS.map((sec, idx) => {
              const Icon = sec.icon;
              const isActive = activeSlide === idx;

              return (
                <button
                  key={sec.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`slide-${sec.id}`}
                  id={`tab-${sec.id}`}
                  className={`showcase-nav-btn ${isActive ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
                >
                  <div className="showcase-btn-icon-wrapper">
                    <Icon size={18} />
                  </div>
                  <div className="showcase-btn-text">
                    <div className="showcase-btn-title-row">
                      <span className="showcase-btn-title">{sec.title}</span>
                      <span className="showcase-btn-badge">{sec.badge}</span>
                    </div>
                    <span className="showcase-btn-desc">{sec.desc}</span>
                  </div>
                  {isActive && <div className="showcase-btn-active-bar" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Viewport-Fitted Carousel Track */}
      <div
        className="carousel-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${(activeSlide * 100) / SECTIONS.length}%)`,
            width: `${SECTIONS.length * 100}%`
          }}
        >
          {/* Slide 0: Hero / About */}
          <div
            ref={slideRefs[0]}
            id="slide-about"
            role="tabpanel"
            aria-labelledby="tab-about"
            className="carousel-slide"
            style={{ width: `${100 / SECTIONS.length}%` }}
          >
            <Hero
              profile={profile}
              certCount={certifications.length}
              onOpenResumeModal={onOpenResumeModal}
              onNavigateSection={goToSlideById}
            />
          </div>

          {/* Slide 1: Certifications */}
          <div
            ref={slideRefs[1]}
            id="slide-certifications"
            role="tabpanel"
            aria-labelledby="tab-certifications"
            className="carousel-slide"
            style={{ width: `${100 / SECTIONS.length}%` }}
          >
            <Certifications
              certifications={certifications}
              onViewDetail={onViewCertDetail}
            />
          </div>

          {/* Slide 2: Skills */}
          <div
            ref={slideRefs[2]}
            id="slide-skills"
            role="tabpanel"
            aria-labelledby="tab-skills"
            className="carousel-slide"
            style={{ width: `${100 / SECTIONS.length}%` }}
          >
            <Skills skills={skills} />
          </div>

          {/* Slide 3: Contact */}
          <div
            ref={slideRefs[3]}
            id="slide-contact"
            role="tabpanel"
            aria-labelledby="tab-contact"
            className="carousel-slide"
            style={{ width: `${100 / SECTIONS.length}%` }}
          >
            <Contact profile={profile} />
          </div>
        </div>
      </div>

      {/* Bottom Compact Pagination Bar & Controls */}
      <div className="showcase-bottom-controls">
        <div className="container showcase-bottom-inner">
          {/* Previous Button */}
          <button
            onClick={() => goToSlide(activeSlide - 1)}
            disabled={activeSlide === 0}
            className="carousel-arrow-btn prev-btn"
            aria-label="Previous Section"
          >
            <ChevronLeft size={16} />
            <span className="carousel-arrow-label">
              {activeSlide > 0 ? SECTIONS[activeSlide - 1].shortTitle : 'Start'}
            </span>
          </button>

          {/* Pagination Indicator Dots */}
          <div className="carousel-dots-group" role="tablist" aria-label="Slide Pagination">
            {SECTIONS.map((sec, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={sec.id}
                  onClick={() => goToSlide(idx)}
                  className={`carousel-dot ${isActive ? 'active' : ''}`}
                  aria-label={`Go to ${sec.title}`}
                  title={sec.title}
                >
                  {isActive && <span className="carousel-dot-pill-label">{sec.shortTitle}</span>}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={() => goToSlide(activeSlide + 1)}
            disabled={activeSlide === SECTIONS.length - 1}
            className="carousel-arrow-btn next-btn"
            aria-label="Next Section"
          >
            <span className="carousel-arrow-label">
              {activeSlide < SECTIONS.length - 1 ? SECTIONS[activeSlide + 1].shortTitle : 'End'}
            </span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
