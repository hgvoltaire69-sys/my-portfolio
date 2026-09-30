import React from 'react';
import { Award, Cloud, Code, Shield, Database, Cpu, ExternalLink } from 'lucide-react';

const iconMap = {
  Award,
  Cloud,
  Code,
  Shield,
  Database,
  Cpu
};

export default function CertDetailModal({ isOpen, cert, onClose }) {
  if (!isOpen || !cert) return null;

  const IconComponent = iconMap[cert.badgeIcon] || Award;

  return (
    <div class="modal-overlay" onClick={onClose}>
      <div class="modal-content" style={{ maxWidth: '750px' }} onClick={(e) => e.stopPropagation()}>
        <div class="modal-header">
          <h3 class="modal-title">{cert.title}</h3>
          <button class="modal-close-btn" onClick={onClose}>&times;</button>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div class="cert-badge-icon" style={{ width: '4rem', height: '4rem', fontSize: '2rem' }}>
            <IconComponent size={32} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-secondary)', textTransform: 'uppercase' }}>
              {cert.category}
            </div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{cert.title}</h4>
            <div style={{ color: 'var(--text-secondary)' }}>
              Issued to <strong>Elijah Exconde</strong> by <strong>{cert.issuer}</strong>
            </div>
          </div>
        </div>

        {/* Certificate Full Image Display */}
        {cert.imagePath && (
          <div style={{ marginBottom: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
            <img
              src={cert.imagePath}
              alt={`${cert.title} Full Certificate`}
              style={{ width: '100%', maxHeight: '450px', objectFit: 'contain', background: '#000', display: 'block' }}
            />
          </div>
        )}

        <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', border: '1px solid var(--border-color)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.9rem' }}>
            <div><strong style={{ color: 'var(--text-muted)' }}>Issue Date:</strong> {cert.issueDate || 'N/A'}</div>
            <div><strong style={{ color: 'var(--text-muted)' }}>Expiration:</strong> {cert.expiryDate || 'N/A'}</div>
            <div><strong style={{ color: 'var(--text-muted)' }}>Credential ID / Code:</strong> {cert.credentialId || 'N/A'}</div>
            <div><strong style={{ color: 'var(--text-muted)' }}>Verification Status:</strong> <span style={{ color: '#10b981', fontWeight: 600 }}>Active & Verified</span></div>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
          {cert.description || 'No description provided.'}
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Validated Skills & Competencies:</div>
          <div class="cert-skills-list">
            {(cert.skills || []).map((s, i) => (
              <span key={i} class="skill-pill" style={{ padding: '0.3rem 0.7rem', fontWeight: 500 }}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <button class="btn-secondary" onClick={onClose}>
            Close
          </button>
          {cert.credentialUrl && (
            <a href={cert.credentialUrl} target="_blank" rel="noreferrer" class="btn-primary">
              <ExternalLink size={16} />
              <span>Verify Online</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
