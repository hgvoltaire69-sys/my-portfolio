import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Award, CheckSquare, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import Certifications from './Certifications';
import Skills from './Skills';
import Contact from './Contact';

export const SECTIONS = [
  {
    id: 'certifications',
    title: 'Certifications & Credentials',
    shortTitle: 'Certifications',
    desc: 'Verified badges & accreditations',
    icon: Award,
    badge: '7 Badges'
  },
  {
    id: 'skills',
    title: 'Skills & Technologies',
    shortTitle: 'Skills',
    desc: 'Core tools & proficiencies',
    icon: CheckSquare,
    badge: 'Competencies'
  },
  {
    id: 'contact',
    title: 'Get In Touch',
    shortTitle: 'Contact',
    desc: 'Inquiries & direct outreach',
    icon: Mail,
    badge: 'Connect'
  }
];

export default function SectionCarousel({
  activeSlide,
  setActiveSlide,
  certifications,
  skills,
  profile,
  onViewCertDetail
}) {
  const slideRefs = [useRef(null), useRef(null), useRef(null)];
  const [viewportHeight, setViewportHeight] = useState('auto');
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);

  const goToSlide = useCallback((index, shouldScroll = true) => {
    if (index < 0 || index >= SECTIONS.length) return;
    setActiveSlide(index);

    if (shouldScroll) {
      const showcaseEl = document.getElementById('portfolio-showcase');
      if (showcaseEl) {
        showcaseEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [setActiveSlide]);

  // Dynamically update viewport height using ResizeObserver to adapt to active slide content
  useEffect(() => {
    const activeEl = slideRefs[activeSlide]?.current;
    if (!activeEl) return;

    const updateHeight = () => {
      if (activeEl) {
        setViewportHeight(activeEl.offsetHeight);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === activeEl) {
          setViewportHeight(entry.target.offsetHeight);
        }
      }
    });

    resizeObserver.observe(activeEl);
    return () => resizeObserver.disconnect();
  }, [activeSlide]);

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

    // Only swipe if horizontal motion exceeds vertical motion by a safe threshold
    if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX > 0 && activeSlide < SECTIONS.length - 1) {
        // Swipe left -> Next slide
        goToSlide(activeSlide + 1, false);
      } else if (diffX < 0 && activeSlide > 0) {
        // Swipe right -> Prev slide
        goToSlide(activeSlide - 1, false);
      }
    }
  };

  return (
    <div id="portfolio-showcase" className="showcase-container">
      {/* Top Section Navigator Buttons */}
      <div className="container showcase-nav-wrapper">
        <div className="showcase-nav-header">
          <span className="showcase-nav-eyebrow">PORTFOLIO EXPLORER</span>
          <h2 className="showcase-nav-title">Select a Section to View</h2>
        </div>

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
                onClick={() => goToSlide(idx, true)}
              >
                <div className="showcase-btn-icon-wrapper">
                  <Icon size={20} />
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

      {/* Carousel Track & Viewport */}
      <div
        className="carousel-viewport"
        style={{ height: typeof viewportHeight === 'number' ? `${viewportHeight}px` : 'auto' }}
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
          {/* Slide 0: Certifications */}
          <div
            ref={slideRefs[0]}
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

          {/* Slide 1: Skills */}
          <div
            ref={slideRefs[1]}
            id="slide-skills"
            role="tabpanel"
            aria-labelledby="tab-skills"
            className="carousel-slide"
            style={{ width: `${100 / SECTIONS.length}%` }}
          >
            <Skills skills={skills} />
          </div>

          {/* Slide 2: Contact */}
          <div
            ref={slideRefs[2]}
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

      {/* Bottom Pagination Dots & Arrows Controls */}
      <div className="container showcase-bottom-controls">
        <div className="carousel-controls-bar">
          {/* Previous Button */}
          <button
            onClick={() => goToSlide(activeSlide - 1, true)}
            disabled={activeSlide === 0}
            className="carousel-arrow-btn prev-btn"
            aria-label="Previous Section"
          >
            <ChevronLeft size={18} />
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
                  onClick={() => goToSlide(idx, true)}
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
            onClick={() => goToSlide(activeSlide + 1, true)}
            disabled={activeSlide === SECTIONS.length - 1}
            className="carousel-arrow-btn next-btn"
            aria-label="Next Section"
          >
            <span className="carousel-arrow-label">
              {activeSlide < SECTIONS.length - 1 ? SECTIONS[activeSlide + 1].shortTitle : 'End'}
            </span>
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="carousel-page-indicator">
          Section <strong>{activeSlide + 1}</strong> of <strong>{SECTIONS.length}</strong>: {SECTIONS[activeSlide].title}
        </div>
      </div>
    </div>
  );
}
