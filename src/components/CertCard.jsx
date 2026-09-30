import React from 'react';
import { Award, Cloud, Code, Shield, Database, Cpu, ChevronRight, ExternalLink } from 'lucide-react';

const iconMap = {
  Award,
  Cloud,
  Code,
  Shield,
  Database,
  Cpu
};

export default function CertCard({ cert, onViewDetail }) {
  const IconComponent = iconMap[cert.badgeIcon] || Award;

  return (
    <div class="cert-card">
      <div>
        <div class="cert-card-top">
          <div class="cert-badge-icon">
            <IconComponent size={24} />
          </div>
          <div class="cert-header-text">
            <div class="cert-category">{cert.category || 'General'}</div>
            <h3 class="cert-title">{cert.title}</h3>
            <div class="cert-issuer">
              Issued by <strong>{cert.issuer}</strong>
            </div>
          </div>
        </div>

        {/* Certificate Image Preview */}
        {cert.imagePath && (
          <div
            onClick={() => onViewDetail(cert)}
            style={{
              marginBottom: '1rem',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              maxHeight: '140px'
            }}
          >
            <img
              src={cert.imagePath}
              alt={`${cert.title} Certificate`}
              style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}

        <p class="cert-description">{cert.description}</p>

        <div class="cert-skills-list">
          {(cert.skills || []).map((skill, i) => (
            <span key={i} class="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div class="cert-footer">
        <div class="cert-dates">
          <span>Issued: {cert.issueDate || 'N/A'}</span>
        </div>
        <div class="cert-actions">
          <button onClick={() => onViewDetail(cert)} class="cert-link-btn">
            <span>View Certificate</span>
            <ChevronRight size={16} />
          </button>
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              class="cert-link-btn"
              title="Verify Credential Online"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
