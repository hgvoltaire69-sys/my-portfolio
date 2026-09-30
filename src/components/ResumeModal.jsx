import React, { useState, useEffect } from 'react';
import { Download, FileText, ExternalLink, ZoomIn, ZoomOut } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose, resumeImagePath, resumePdfPath }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    if (isOpen && resumeImagePath) {
      const img = new Image();
      img.src = resumeImagePath;
      img.onload = () => setIsLoaded(true);
    } else {
      setIsLoaded(false);
      setZoomLevel(1);
    }
  }, [isOpen, resumeImagePath]);

  if (!isOpen) return null;

  const toggleZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.4 : 1));
  };

  return (
    <div class="modal-overlay" onClick={onClose}>
      <div
        class="modal-content"
        style={{
          maxWidth: '900px',
          height: '88vh',
          display: 'flex',
          flexDirection: 'column',
          willChange: 'transform, opacity',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div class="modal-header" style={{ marginBottom: '0.75rem', paddingBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={22} style={{ color: 'var(--accent-primary)' }} />
            <h3 class="modal-title">Elijah Exconde — Resume Preview</h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={toggleZoom}
              class="icon-btn"
              title={zoomLevel === 1 ? 'Zoom In' : 'Zoom Out'}
              style={{ width: '2rem', height: '2rem' }}
            >
              {zoomLevel === 1 ? <ZoomIn size={16} /> : <ZoomOut size={16} />}
            </button>
            <button class="modal-close-btn" onClick={onClose}>&times;</button>
          </div>
        </div>

        {/* Ultra-Smooth Hardware-Accelerated Resume Viewer */}
        <div
          style={{
            flex: 1,
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-sm)',
            overflowY: 'auto',
            overflowX: 'auto',
            background: '#f8fafc',
            padding: '1.25rem',
            textAlign: 'center',
            WebkitOverflowScrolling: 'touch',
            willChange: 'scroll-position',
            transform: 'translateZ(0)',
            contain: 'strict',
            contentVisibility: 'auto'
          }}
        >
          {isLoaded ? (
            <img
              src={resumeImagePath}
              alt="Elijah Exconde Resume Preview"
              style={{
                width: zoomLevel === 1 ? '100%' : '140%',
                maxWidth: zoomLevel === 1 ? '760px' : 'none',
                height: 'auto',
                borderRadius: '4px',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.12)',
                display: 'inline-block',
                transition: 'transform 0.2s ease, width 0.2s ease',
                willChange: 'transform',
                transform: 'translateZ(0)',
                imageRendering: 'high-quality'
              }}
            />
          ) : (
            <div style={{ padding: '4rem 1rem', color: 'var(--text-muted)' }}>
              Loading high-resolution resume...
            </div>
          )}
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
