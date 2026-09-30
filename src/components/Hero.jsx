import React from 'react';
import { CheckCircle, Shield, Mail, User, Linkedin, Phone, FileText, Download } from 'lucide-react';

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

            <div class="hero-stats">
              <div class="stat-item">
                <div class="stat-number">{certCount}</div>
                <div class="stat-label">Accredited Credentials</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">80+ WPM</div>
                <div class="stat-label">Typing Speed (100% Acc)</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">08:00AM - 05:00AM EST</div>
                <div class="stat-label">Available Hours</div>
              </div>
            </div>
          </div>

          {/* Profile Card with Profile Picture Placeholder */}
          <div class="hero-card">
            <div class="hero-avatar-wrapper">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt="Elijah Exconde Profile Placeholder"
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                />
              ) : (
                <div class="hero-avatar">
                  <User size={52} />
                </div>
              )}
            </div>

            <h2 class="hero-card-name">{profile.name}</h2>
            <p class="hero-card-title">Freelance Worker</p>

            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'var(--bg-primary)', padding: '0.35rem 0.6rem', borderRadius: '4px', margin: '0.5rem 0 1rem', display: 'inline-block' }}>
              📷 Profile Picture Placeholder
            </div>

            <div class="social-links">
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
