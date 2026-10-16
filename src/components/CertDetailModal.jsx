import React from 'react';
import { Award, Cloud, Code, Shield, Database, Cpu, Languages, ExternalLink } from 'lucide-react';

const iconMap = {
  Award,
  Cloud,
  Code,
  Shield,
  Database,
  Cpu,
  Languages
};

export default function CertDetailModal({ isOpen, cert, onClose }) {
  if (!isOpen || !cert) return null;

  const IconComponent = iconMap[cert.badgeIcon] || Award;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content cert-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{cert.title}</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
        </div>

        <div className="cert-modal-lead">
          <div className="cert-badge-icon cert-modal-badge">
            <IconComponent size={28} />
          </div>
          <div className="cert-modal-lead-info">
            <div className="cert-modal-category">
              {cert.category}
            </div>
            <h4 className="cert-modal-heading">{cert.title}</h4>
            <div className="cert-modal-issuer">
              Issued to <strong>Elijah Exconde</strong> by <strong>{cert.issuer}</strong>
            </div>
          </div>
        </div>

        {/* Certificate Full Image Display */}
        {cert.imagePath && (
          <div className="cert-modal-image-wrap">
            <img
              src={cert.imagePath}
              alt={`${cert.title} Full Certificate`}
              className="cert-modal-image"
            />
          </div>
        )}

        <div className="cert-modal-meta-box">
          <div className="cert-modal-meta-grid">
            <div><strong className="meta-label">Issue Date:</strong> {cert.issueDate || 'N/A'}</div>
            <div><strong className="meta-label">Expiration:</strong> {cert.expiryDate || 'N/A'}</div>
            <div><strong className="meta-label">Credential ID:</strong> <span className="meta-id-val">{cert.credentialId || 'N/A'}</span></div>
            <div><strong className="meta-label">Status:</strong> <span className="meta-status-active">Active & Verified</span></div>
          </div>
        </div>

        <p className="cert-modal-description">
          {cert.description || 'No description provided.'}
        </p>

        <div className="cert-modal-skills-section">
          <div className="cert-modal-skills-title">Validated Skills & Competencies:</div>
          <div className="cert-skills-list">
            {(cert.skills || []).map((s, i) => (
              <span key={i} className="skill-pill">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="cert-modal-footer">
          <button className="btn-secondary modal-btn-close" onClick={onClose}>
            Close
          </button>
          {cert.credentialUrl && (
            <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="btn-primary modal-btn-verify">
              <ExternalLink size={16} />
              <span>Verify Online</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
