import React from 'react';
import { CheckCircle, Shield, Mail, User, Linkedin, Phone, FileText, Download, Award, Zap, Clock } from 'lucide-react';

export default function Hero({ profile, certCount, onOpenResumeModal }) {
  return (
    <section class="hero-section" id="about">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-tag">
              <CheckCircle size={15} />
              <span>Accredited Virtual Assistant & AI Ready</span>
            </div>

            <h1 class="hero-title">
              Hi, I'm <span class="gradient-text">{profile.name}</span>
            </h1>
            <div class="hero-subtitle-role">Freelance Worker</div>

            <p class="hero-bio">
              {profile.bio}
            </p>

            <div class="hero-cta">
              <button onClick={onOpenResumeModal} class="btn-primary">
                <FileText size={18} />
                <span>Preview Resume</span>
              </button>

              <a href={profile.resumePdfPath} download="Exconde_Elijah_P_resume.pdf" class="btn-secondary">
                <Download size={18} />
                <span>Download Resume PDF</span>
              </a>

              <a href="#certifications" class="btn-secondary">
                <Shield size={18} />
                <span>View Certifications</span>
              </a>
            </div>

            {/* Enhanced Minimalist Graphic Cards Section */}
            <div class="hero-graphic-stats">
              <div class="graphic-stat-card">
                <div class="graphic-stat-icon" style={{ background: '#eff6ff', color: '#2563eb' }}>
                  <Award size={22} />
                </div>
                <div>
                  <div class="graphic-stat-value">{certCount} Credentials</div>
                  <div class="graphic-stat-label">Accredited Coursework & Badges</div>
                </div>
              </div>

              <div class="graphic-stat-card">
                <div class="graphic-stat-icon" style={{ background: '#f0fdf4', color: '#16a34a' }}>
                  <Zap size={22} />
                </div>
                <div>
                  <div class="graphic-stat-value">80+ WPM</div>
                  <div class="graphic-stat-label">Typing Speed (100% Accuracy)</div>
                </div>
              </div>

              <div class="graphic-stat-card">
                <div class="graphic-stat-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
                  <Clock size={22} />
                </div>
                <div>
                  <div class="graphic-stat-value">08:00 AM - 05:00 AM EST</div>
                  <div class="graphic-stat-label">Available Hours (US/UK Coverage)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Card with Profile Picture */}
          <div class="hero-card">
            <div class="hero-avatar-wrapper">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <div class="hero-avatar">
                  <User size={52} />
                </div>
              )}
            </div>

            <h2 class="hero-card-name">{profile.name}</h2>
            <p class="hero-card-title">Freelance Worker</p>

            <div class="social-links" style={{ marginTop: '1.25rem' }}>
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noreferrer" class="icon-btn" title="LinkedIn Profile">
                  <Linkedin size={18} />
                </a>
              )}
              {profile.email && (
                <a href={`mailto:${profile.email}`} class="icon-btn" title="Email Elijah">
                  <Mail size={18} />
                </a>
              )}
              {profile.phone && (
                <a href={`tel:${profile.phone}`} class="icon-btn" title="Call Elijah">
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
