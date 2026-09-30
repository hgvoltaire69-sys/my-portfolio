import React, { useState } from 'react';
import { Award, FileText, Menu, X } from 'lucide-react';

export default function Header({ profile, onOpenResumeModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header class="site-header">
      <div class="container header-inner">
        <a href="#" class="brand-logo">
          <Award size={22} />
          <span>{profile.name}</span>
        </a>

        {/* Desktop & Mobile Navigation Links */}
        <nav class={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#about" class="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#certifications" class="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Certifications</a>
          <a href="#skills" class="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
          <a href="#contact" class="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </nav>

        <div class="header-actions">
          <button onClick={onOpenResumeModal} class="btn-primary">
            <FileText size={16} />
            <span>Resume PDF</span>
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            class="mobile-menu-btn icon-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
