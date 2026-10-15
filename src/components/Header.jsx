import React from 'react';
import { Award } from 'lucide-react';

export default function Header({ profile, onNavigateSection }) {
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

        {/* Clean Navigation Links */}
        <nav className="nav-menu">
          <a href="#about" onClick={(e) => handleClick(e, 'about')} className="nav-link">About</a>
          <a href="#certifications" onClick={(e) => handleClick(e, 'certifications')} className="nav-link">Certifications</a>
          <a href="#skills" onClick={(e) => handleClick(e, 'skills')} className="nav-link">Skills</a>
          <a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}
