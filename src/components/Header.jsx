import React from 'react';
import { Award } from 'lucide-react';

export default function Header({ profile, activeSlide, onNavigateSection }) {
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

        {/* Clean Navigation Links with Active State */}
        <nav className="nav-menu">
          <button
            type="button"
            onClick={(e) => handleClick(e, 'about')}
            className={`nav-link ${activeSlide === 0 ? 'active' : ''}`}
          >
            About
          </button>
          <button
            type="button"
            onClick={(e) => handleClick(e, 'certifications')}
            className={`nav-link ${activeSlide === 1 ? 'active' : ''}`}
          >
            Certifications
          </button>
          <button
            type="button"
            onClick={(e) => handleClick(e, 'skills')}
            className={`nav-link ${activeSlide === 2 ? 'active' : ''}`}
          >
            Skills
          </button>
          <button
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
