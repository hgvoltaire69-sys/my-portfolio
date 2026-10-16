import React from 'react';
import {
  Briefcase,
  Database,
  Sparkles,
  Palette,
  Zap,
  Globe,
  Clock,
  Wifi,
  Laptop,
  Headphones,
  CheckCircle2,
  ShieldCheck,
  CheckSquare
} from 'lucide-react';
import { initialPortfolioData } from '../data/portfolioData';

const iconMap = {
  Briefcase,
  Database,
  Sparkles,
  Palette,
  Zap,
  Globe,
  Clock,
  Wifi,
  Laptop,
  Headphones,
  ShieldCheck,
  CheckSquare
};

export default function Skills({ skills, skillsHighlights, remoteInfrastructure }) {
  // Graceful fallback to initialPortfolioData if props are missing or from old storage
  const activeHighlights = skillsHighlights || initialPortfolioData.skillsHighlights || [];
  const activeInfra = remoteInfrastructure || initialPortfolioData.remoteInfrastructure || [];
  const activeSkillGroups = (skills && skills.length > 0) ? skills : initialPortfolioData.skills;

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">ATS-Optimized Technical Proficiency</div>
          <h2 className="section-title">Skills & Operational Stack</h2>
          <p className="section-desc">
            Core competencies, enterprise platforms, and remote infrastructure validated through accredited certifications.
          </p>
        </div>

        {/* ATS & Recruiter Quick Scan Ribbon */}
        {activeHighlights.length > 0 && (
          <div className="skills-ats-strip" role="region" aria-label="Key Qualifications Summary">
            {activeHighlights.map((item) => {
              const IconComp = iconMap[item.icon] || Zap;
              return (
                <div key={item.id || item.label} className="ats-metric-pill">
                  <div className="ats-metric-icon-wrap">
                    <IconComp size={16} />
                  </div>
                  <div className="ats-metric-info">
                    <span className="ats-metric-label">{item.label}</span>
                    <span className="ats-metric-value">{item.value}</span>
                    {item.subtext && <span className="ats-metric-sub">{item.subtext}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 4 Core Competency Domains Grid */}
        <div className="skills-domain-grid">
          {activeSkillGroups.map((group, index) => {
            const GroupIcon = iconMap[group.icon] || Briefcase;
            return (
              <div key={group.id || index} className="skill-domain-card">
                <div className="skill-domain-header">
                  <div className="skill-domain-icon-box">
                    <GroupIcon size={20} />
                  </div>
                  <div className="skill-domain-title-group">
                    <div className="skill-domain-top-line">
                      <h3 className="skill-domain-title">{group.category}</h3>
                      {group.badge && (
                        <span className="skill-domain-badge">{group.badge}</span>
                      )}
                    </div>
                    {group.subtitle && (
                      <p className="skill-domain-subtitle">{group.subtitle}</p>
                    )}
                  </div>
                </div>

                <div className="skill-domain-items">
                  {(group.items || []).map((skillItem, idx) => (
                    <div key={idx} className="skill-domain-pill" data-keyword={skillItem}>
                      <CheckCircle2 size={13} className="skill-domain-pill-check" />
                      <span>{skillItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Remote Infrastructure & Readiness Panel */}
        {activeInfra.length > 0 && (
          <div className="remote-infra-card" role="region" aria-label="Remote Work Infrastructure">
            <div className="remote-infra-card-header">
              <div className="remote-infra-header-left">
                <div className="remote-infra-header-icon">
                  <Laptop size={18} />
                </div>
                <div>
                  <h3 className="remote-infra-heading">Enterprise Remote Readiness & Workstation Specs</h3>
                  <span className="remote-infra-subheading">100% Home Office Prepared for US & UK Time Zone Operations</span>
                </div>
              </div>
              <div className="remote-infra-status-badge">
                <span className="infra-status-dot"></span>
                <span>Active EST Shift Coverage</span>
              </div>
            </div>

            <div className="remote-infra-specs-grid">
              {activeInfra.map((spec, i) => {
                const SpecIcon = iconMap[spec.icon] || Laptop;
                return (
                  <div key={i} className="remote-infra-spec-item">
                    <div className="remote-spec-icon-box">
                      <SpecIcon size={16} />
                    </div>
                    <div className="remote-spec-text">
                      <div className="remote-spec-title">{spec.title}</div>
                      <div className="remote-spec-val">{spec.value}</div>
                      <div className="remote-spec-detail">{spec.detail}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
