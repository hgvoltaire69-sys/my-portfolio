import React, { useState } from 'react';
import { loadPortfolioData } from './data/portfolioData';

import Header from './components/Header';
import SectionCarousel from './components/SectionCarousel';
import CertDetailModal from './components/CertDetailModal';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

export default function App() {
  const [portfolioData] = useState(() => loadPortfolioData());
  const [detailCert, setDetailCert] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  const handleNavigateSection = (sectionName) => {
    setIsFooterVisible(true);
    if (sectionName === 'about') {
      setActiveSlide(0);
    } else if (sectionName === 'certifications') {
      setActiveSlide(1);
    } else if (sectionName === 'skills') {
      setActiveSlide(2);
    } else if (sectionName === 'contact') {
      setActiveSlide(3);
    }
  };

  return (
    <div className="app-root">
      <Header
        profile={portfolioData.profile}
        activeSlide={activeSlide}
        onNavigateSection={handleNavigateSection}
      />

      <main className="app-main-viewport">
        <SectionCarousel
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          profile={portfolioData.profile}
          certifications={portfolioData.certifications}
          skills={portfolioData.skills}
          skillsHighlights={portfolioData.skillsHighlights}
          remoteInfrastructure={portfolioData.remoteInfrastructure}
          onFooterVisibilityChange={setIsFooterVisible}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onViewCertDetail={(cert) => setDetailCert(cert)}
        />
      </main>

      <Footer name={portfolioData.profile.name} isVisible={isFooterVisible} />

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
