import React, { useState, useEffect } from 'react';
import { Download, FileText, ExternalLink, ZoomIn, ZoomOut, X } from 'lucide-react';

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
    setZoomLevel((prev) => (prev === 1 ? 1.35 : 1));
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div
        className="resume-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="resume-modal-header">
          <div className="resume-modal-title-box">
            <FileText size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
            <h3 className="resume-modal-title">Elijah Exconde — Resume</h3>
          </div>

          <div className="resume-modal-controls">
            <button
              onClick={toggleZoom}
              className="icon-btn"
              title={zoomLevel === 1 ? 'Zoom In' : 'Zoom Out'}
              style={{ width: '2.1rem', height: '2.1rem' }}
            >
              {zoomLevel === 1 ? <ZoomIn size={16} /> : <ZoomOut size={16} />}
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* High-Performance Smooth Image Viewport */}
        <div className="resume-modal-viewport">
          {isLoaded ? (
            <img
              src={resumeImagePath}
              alt="Elijah Exconde Resume Preview"
              decoding="async"
              loading="eager"
              className="resume-modal-img"
              style={{
                width: zoomLevel === 1 ? '100%' : '135%',
                maxWidth: zoomLevel === 1 ? '760px' : 'none',
              }}
            />
          ) : (
            <div style={{ padding: '4rem 1rem', color: 'var(--text-muted)' }}>
              Loading resume preview...
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="resume-modal-footer">
          <span className="resume-modal-footer-meta">
            High-Resolution Document Preview
          </span>

          <div className="resume-modal-actions">
            <button className="btn-secondary resume-btn-close" onClick={onClose}>
              Close
            </button>
            <a href={resumeImagePath} target="_blank" rel="noreferrer" className="btn-secondary resume-btn-open">
              <ExternalLink size={15} />
              <span>Open Image</span>
            </a>
            <a href={resumePdfPath} download="Exconde_Elijah_P_resume.pdf" className="btn-primary resume-btn-download">
              <Download size={15} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
