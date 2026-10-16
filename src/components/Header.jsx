import React, { useRef, useEffect } from 'react';
import { Award } from 'lucide-react';

export default function Header({ profile, activeSlide, onNavigateSection }) {
  const navMenuRef = useRef(null);
  const navItemRefs = useRef([]);

  useEffect(() => {
    const activeItem = navItemRefs.current[activeSlide];
    const menu = navMenuRef.current;
    if (activeItem && menu) {
      const itemLeft = activeItem.offsetLeft;
      const itemWidth = activeItem.offsetWidth;
      const menuWidth = menu.offsetWidth;
      const targetScrollLeft = itemLeft - (menuWidth / 2) + (itemWidth / 2);
      menu.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeSlide]);

  const handleClick = (e, target) => {
    if (onNavigateSection) {
      e.preventDefault();
      onNavigateSection(target);
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#about" onClick={(e) => handleClick(e, 'about')} className="brand-logo">
          <Award size={22} />
          <span>{profile.name}</span>
        </a>

        {/* Clean Navigation Links with Active State & Autoscroll */}
        <nav className="nav-menu" ref={navMenuRef}>
          <button
            ref={(el) => (navItemRefs.current[0] = el)}
            type="button"
            onClick={(e) => handleClick(e, 'about')}
            className={`nav-link ${activeSlide === 0 ? 'active' : ''}`}
          >
            About
          </button>
          <button
            ref={(el) => (navItemRefs.current[1] = el)}
            type="button"
            onClick={(e) => handleClick(e, 'certifications')}
            className={`nav-link ${activeSlide === 1 ? 'active' : ''}`}
          >
            <span className="nav-text-full">Certifications</span>
            <span className="nav-text-short">Certs</span>
          </button>
          <button
            ref={(el) => (navItemRefs.current[2] = el)}
            type="button"
            onClick={(e) => handleClick(e, 'skills')}
            className={`nav-link ${activeSlide === 2 ? 'active' : ''}`}
          >
            Skills
          </button>
          <button
            ref={(el) => (navItemRefs.current[3] = el)}
            type="button"
            onClick={(e) => handleClick(e, 'contact')}
            className={`nav-link ${activeSlide === 3 ? 'active' : ''}`}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
