import React from 'react';

export default function Footer({ name, isVisible = true }) {
  return (
    <footer className={`site-footer ${!isVisible ? 'footer-hidden' : ''}`} aria-hidden={!isVisible}>
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        <span className="footer-tag">Aspiring Virtual Assistant • Remote Ready</span>
      </div>
    </footer>
  );
}
