import React from 'react';
import { CheckCircle, Shield, Mail, User, Linkedin, Phone, FileText, Download, Award, Zap, Clock, MapPin } from 'lucide-react';

export default function Hero({ profile, certCount, onOpenResumeModal, onNavigateSection }) {
  return (
    <section className="hero-section" id="about">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-tag">
              <CheckCircle size={15} />
              <span>Aspiring Virtual Assistant & AI Ready</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{profile.name}</span>
            </h1>
            <div className="hero-subtitle-role">Aspiring Virtual Assistant</div>

            <p className="hero-bio">
              {profile.bio}
            </p>

            <div className="hero-cta">
              <button onClick={onOpenResumeModal} className="btn-primary">
                <FileText size={18} />
                <span>Preview Resume</span>
              </button>

              <a href={profile.resumePdfPath} download="Exconde_Elijah_P_resume.pdf" className="btn-secondary">
                <Download size={18} />
                <span>Download Resume PDF</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  if (onNavigateSection) {
                    onNavigateSection('certifications');
                  }
                }}
                className="btn-secondary"
              >
                <Shield size={18} />
                <span>View Certifications</span>
              </button>
            </div>

            {/* Enhanced Minimalist Graphic Cards Section - Single X-Axis Line */}
            <div className="hero-graphic-stats">
              <div className="graphic-stat-card">
                <div className="graphic-stat-icon" style={{ background: '#eff6ff', color: '#2563eb' }}>
                  <Award size={18} />
                </div>
                <div className="graphic-stat-text-wrap">
                  <div className="graphic-stat-value">Accredited Credentials</div>
                  <div className="graphic-stat-label">Verified Badges & Coursework</div>
                </div>
              </div>

              <div className="graphic-stat-card">
                <div className="graphic-stat-icon" style={{ background: '#f0fdf4', color: '#16a34a' }}>
                  <Zap size={18} />
                </div>
                <div className="graphic-stat-text-wrap">
                  <div className="graphic-stat-value">105 WPM Typing</div>
                  <div className="graphic-stat-label">100% Precision (Expert)</div>
                </div>
              </div>

              <div className="graphic-stat-card">
                <div className="graphic-stat-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
                  <Clock size={18} />
                </div>
                <div className="graphic-stat-text-wrap">
                  <div className="graphic-stat-value">08:00 AM - 05:00 AM EST</div>
                  <div className="graphic-stat-label">Full Shift Availability</div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Card with Profile Picture - Vertically Enlarged */}
          <div className="hero-card">
            <div className="hero-avatar-wrapper">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <div className="hero-avatar">
                  <User size={56} />
                </div>
              )}
            </div>

            <h2 className="hero-card-name">{profile.name}</h2>
            <p className="hero-card-title">Aspiring Virtual Assistant</p>

            <div className="hero-card-location">
              <MapPin size={13} />
              <span>{profile.location || 'Lipa City, Philippines'}</span>
            </div>

            <div className="hero-card-availability">
              <span className="infra-status-dot"></span>
              <span>EST Shift Ready</span>
            </div>

            <div className="social-links" style={{ marginTop: '1.25rem' }}>
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-btn" title="LinkedIn Profile">
                  <Linkedin size={18} />
                </a>
              )}
              {profile.email && (
                <a href={`mailto:${profile.email}`} className="icon-btn" title="Email Elijah">
                  <Mail size={18} />
                </a>
              )}
              {profile.phone && (
                <a href={`tel:${profile.phone}`} className="icon-btn" title="Call Elijah">
                  <Phone size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
