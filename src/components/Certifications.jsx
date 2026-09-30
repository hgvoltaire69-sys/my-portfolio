import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, ExternalLink, Eye, Cloud, Code, Shield, Database, Cpu } from 'lucide-react';
import CertCard from './CertCard';

const categories = ['All', 'Marketing & CRM', 'Project Management', 'AI & Tech', 'Finance & Admin', 'Crisis & Wellness'];

const iconMap = {
  Award,
  Cloud,
  Code,
  Shield,
  Database,
  Cpu
};

export default function Certifications({ certifications, onViewDetail }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedCertId, setExpandedCertId] = useState(null);

  const filteredCerts = certifications.filter((cert) => {
    return activeCategory === 'All' || cert.category === activeCategory;
  });

  const toggleAccordion = (id) => {
    setExpandedCertId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Verified Accreditation</div>
          <h2 className="section-title">Certifications & Credentials</h2>
          <p className="section-desc">
            Verified course completions, professional certificates, and skill badges for Elijah Exconde. Click any credential to inspect details or preview the original document.
          </p>
        </div>

        {/* Minimalist Filter Category Pills (Search Bar Removed) */}
        <div className="cert-controls-minimal">
          <div className="filter-pills-minimal">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`pill-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop View: Grid Layout */}
        <div className="cert-grid-desktop">
          {filteredCerts.length > 0 ? (
            filteredCerts.map((cert) => (
              <CertCard
                key={cert.id}
                cert={cert}
                onViewDetail={onViewDetail}
              />
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', gridColumn: '1 / -1' }}>
              <Award size={36} style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }} />
              <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>No certifications found</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Try selecting another category filter.</p>
            </div>
          )}
        </div>

        {/* Mobile View: Tappable Dropdown Accordion List */}
        <div className="cert-mobile-accordion">
          {filteredCerts.length > 0 ? (
            filteredCerts.map((cert) => {
              const isOpen = expandedCertId === cert.id;
              const IconComponent = iconMap[cert.badgeIcon] || Award;

              return (
                <div key={cert.id} className={`mobile-cert-item ${isOpen ? 'open' : ''}`}>
                  <div className="mobile-cert-header" onClick={() => toggleAccordion(cert.id)}>
                    <div className="mobile-cert-header-left">
                      <div className="cert-badge-icon" style={{ width: '2.25rem', height: '2.25rem' }}>
                        <IconComponent size={18} />
                      </div>
                      <div className="mobile-cert-info">
                        <div className="cert-category" style={{ fontSize: '0.675rem' }}>{cert.category}</div>
                        <div className="mobile-cert-title">{cert.title}</div>
                        <div className="mobile-cert-issuer">{cert.issuer}</div>
                      </div>
                    </div>

                    <div className="mobile-cert-toggle-badge">
                      <span>{isOpen ? 'Close' : 'Details'}</span>
                      {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="mobile-cert-body">
                      {cert.imagePath && (
                        <div
                          onClick={() => onViewDetail(cert)}
                          style={{
                            marginBottom: '0.85rem',
                            borderRadius: 'var(--radius-sm)',
                            overflow: 'hidden',
                            border: '1px solid var(--border-color)',
                            cursor: 'pointer'
                          }}
                        >
                          <img
                            src={cert.imagePath}
                            alt={`${cert.title} Certificate`}
                            style={{ width: '100%', height: '150px', objectFit: 'cover', display: 'block' }}
                          />
                        </div>
                      )}

                      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
                        {cert.description}
                      </p>

                      <div className="cert-skills-list">
                        {(cert.skills || []).map((skill, i) => (
                          <span key={i} className="skill-pill">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="cert-footer" style={{ paddingTop: '0.75rem' }}>
                        <div className="cert-dates">
                          <span>Issued: {cert.issueDate || 'N/A'}</span>
                        </div>

                        <div className="cert-actions">
                          <button onClick={() => onViewDetail(cert)} className="cert-link-btn">
                            <Eye size={14} />
                            <span>View Certificate</span>
                          </button>
                          {cert.credentialUrl && (
                            <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="cert-link-btn" title="Verify Online">
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem 1rem', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <Award size={32} style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }} />
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>No certifications found</h4>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
