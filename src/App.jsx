import React, { useState } from 'react';
import { loadPortfolioData } from './data/portfolioData';

import Header from './components/Header';
import Hero from './components/Hero';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CertDetailModal from './components/CertDetailModal';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

export default function App() {
  const [portfolioData] = useState(() => loadPortfolioData());
  const [detailCert, setDetailCert] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="app-root">
      <Header profile={portfolioData.profile} />

      <Hero
        profile={portfolioData.profile}
        certCount={portfolioData.certifications.length}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      <Certifications
        certifications={portfolioData.certifications}
        onViewDetail={(cert) => setDetailCert(cert)}
      />

      <Skills skills={portfolioData.skills} />

      <Contact profile={portfolioData.profile} />

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
