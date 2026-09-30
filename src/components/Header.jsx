import React from 'react';
import { Award } from 'lucide-react';

export default function Header({ profile }) {
  return (
    <header class="site-header">
      <div class="container header-inner">
        <a href="#" class="brand-logo">
          <Award size={22} />
          <span>{profile.name}</span>
        </a>

        {/* Clean Navigation Links */}
        <nav class="nav-menu">
          <a href="#about" class="nav-link">About</a>
          <a href="#certifications" class="nav-link">Certifications</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}
