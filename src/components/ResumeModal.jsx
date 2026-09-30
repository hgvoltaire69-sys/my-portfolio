import React from 'react';
import { Download, FileText, ExternalLink } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose, resumeImagePath, resumePdfPath }) {
  if (!isOpen) return null;

  return (
    <div class="modal-overlay" onClick={onClose}>
      <div class="modal-content" style={{ maxWidth: '850px', height: '88vh', display: 'flex', flexDirection: 'column' }} onClick={(e) => e.stopPropagation()}>
        <div class="modal-header" style={{ marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={22} style={{ color: 'var(--accent-primary)' }} />
            <h3 class="modal-title">Elijah Exconde — Resume Preview</h3>
          </div>
          <button class="modal-close-btn" onClick={onClose}>&times;</button>
        </div>

        {/* High-Resolution Resume Image Viewer */}
        <div style={{ flex: 1, border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', overflowY: 'auto', background: '#f8fafc', padding: '1rem', textAlign: 'center' }}>
          <img
            src={resumeImagePath}
            alt="Elijah Exconde Resume Preview"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', display: 'inline-block' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            High-Resolution Resume Document
          </span>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button class="btn-secondary" onClick={onClose}>
              Close
            </button>
            <a href={resumeImagePath} target="_blank" rel="noreferrer" class="btn-secondary">
              <ExternalLink size={16} />
              <span>Open Image</span>
            </a>
            <a href={resumePdfPath} download="Exconde_Elijah_P_resume.pdf" class="btn-primary">
              <Download size={16} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
