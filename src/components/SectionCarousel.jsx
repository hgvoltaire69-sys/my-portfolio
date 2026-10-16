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
    desc: 'Verified badges & credentials',
    icon: Award,
    badge: '8 Badges'
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
  skillsHighlights,
  remoteInfrastructure,
  onOpenResumeModal,
  onViewCertDetail
}) {
  const slideRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const navGridRef = useRef(null);
  const tabButtonRefs = useRef([]);

  // Auto-scroll the top bar buttons so active section is always visible & centered
  useEffect(() => {
    const activeBtn = tabButtonRefs.current[activeSlide];
    const grid = navGridRef.current;
    if (activeBtn && grid) {
      const btnLeft = activeBtn.offsetLeft;
      const btnWidth = activeBtn.offsetWidth;
      const gridWidth = grid.offsetWidth;
      const targetScrollLeft = btnLeft - (gridWidth / 2) + (btnWidth / 2);
      grid.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeSlide]);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < SECTIONS.length) {
      setActiveSlide(index);
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

  return (
    <div className="showcase-container" id="portfolio-showcase">
      {/* Top Compact Section Selector Bar */}
      <div className="showcase-nav-wrapper">
        <div className="container">
          <div className="showcase-buttons-grid" role="tablist" aria-label="Portfolio Sections" ref={navGridRef}>
            {SECTIONS.map((sec, idx) => {
              const Icon = sec.icon;
              const isActive = activeSlide === idx;

              return (
                <button
                  key={sec.id}
                  ref={(el) => (tabButtonRefs.current[idx] = el)}
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
                      <span className="showcase-btn-badge">
                        {sec.id === 'certifications' && certifications?.length
                          ? `${certifications.length} Badges`
                          : sec.badge}
                      </span>
                    </div>
                    <span className="showcase-btn-desc">
                      {sec.id === 'certifications' && certifications?.length
                        ? `${certifications.length} verified badges & credentials`
                        : sec.desc}
                    </span>
                  </div>
                  {isActive && <div className="showcase-btn-active-bar" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Viewport-Fitted Carousel Track with Big Reactive Floating Side Arrows */}
      <div className="carousel-viewport">
        {/* Big Reactive Side Navigation Arrows */}
        <button
          type="button"
          onClick={() => goToSlide(activeSlide - 1)}
          disabled={activeSlide === 0}
          className="carousel-side-arrow left-arrow"
          aria-label="Previous Section"
          title={activeSlide > 0 ? `Previous: ${SECTIONS[activeSlide - 1].shortTitle}` : 'At Beginning'}
        >
          <ChevronLeft size={36} strokeWidth={2.2} />
        </button>

        <button
          type="button"
          onClick={() => goToSlide(activeSlide + 1)}
          disabled={activeSlide === SECTIONS.length - 1}
          className="carousel-side-arrow right-arrow"
          aria-label="Next Section"
          title={activeSlide < SECTIONS.length - 1 ? `Next: ${SECTIONS[activeSlide + 1].shortTitle}` : 'At End'}
        >
          <ChevronRight size={36} strokeWidth={2.2} />
        </button>

        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${(activeSlide * 100) / SECTIONS.length}%)`,
            width: `${SECTIONS.length * 100}%`
          }}
        >
          {/* Slide 0: Hero / About (Centered Vertically & Horizontally) */}
          <div
            ref={slideRefs[0]}
            id="slide-about"
            role="tabpanel"
            aria-labelledby="tab-about"
            className="carousel-slide carousel-slide-about"
            style={{ width: `${100 / SECTIONS.length}%` }}
          >
            <div className="carousel-slide-inner-centered">
              <Hero
                profile={profile}
                certCount={certifications.length}
                onOpenResumeModal={onOpenResumeModal}
                onNavigateSection={goToSlideById}
              />
            </div>
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
            <Skills
              skills={skills}
              skillsHighlights={skillsHighlights}
              remoteInfrastructure={remoteInfrastructure}
            />
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

      {/* Bottom Compact Pagination Bar with Stable, Non-Jumping Dots */}
      <div className="showcase-bottom-controls">
        <div className="container showcase-bottom-inner">
          {/* Stationary-Anchored Pagination Indicator Dots */}
          <div className="carousel-dots-group" role="tablist" aria-label="Slide Pagination">
            {SECTIONS.map((sec, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={sec.id}
                  onClick={() => goToSlide(idx)}
                  className={`carousel-dot-slot ${isActive ? 'active' : ''}`}
                  aria-label={`Go to ${sec.title}`}
                  title={sec.title}
                >
                  <span className="carousel-dot-pill" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
