import React, { useState } from 'react';
import { loadPortfolioData } from './data/portfolioData';

import Header from './components/Header';
import Hero from './components/Hero';
import SectionCarousel from './components/SectionCarousel';
import CertDetailModal from './components/CertDetailModal';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

export default function App() {
  const [portfolioData] = useState(() => loadPortfolioData());
  const [detailCert, setDetailCert] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNavigateSection = (sectionName) => {
    if (sectionName === 'about') {
      const heroEl = document.getElementById('about');
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (sectionName === 'certifications') {
      setActiveSlide(0);
      const el = document.getElementById('portfolio-showcase');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (sectionName === 'skills') {
      setActiveSlide(1);
      const el = document.getElementById('portfolio-showcase');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (sectionName === 'contact') {
      setActiveSlide(2);
      const el = document.getElementById('portfolio-showcase');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="app-root">
      <Header
        profile={portfolioData.profile}
        onNavigateSection={handleNavigateSection}
      />

      <Hero
        profile={portfolioData.profile}
        certCount={portfolioData.certifications.length}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      <SectionCarousel
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        certifications={portfolioData.certifications}
        skills={portfolioData.skills}
        profile={portfolioData.profile}
        onViewCertDetail={(cert) => setDetailCert(cert)}
      />

      <Footer name={portfolioData.profile.name} />

      {/* Modals */}
      <CertDetailModal
        isOpen={!!detailCert}
        cert={detailCert}
        onClose={() => setDetailCert(null)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        resumeImagePath={portfolioData.profile.resumeImagePath}
        resumePdfPath={portfolioData.profile.resumePdfPath}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
