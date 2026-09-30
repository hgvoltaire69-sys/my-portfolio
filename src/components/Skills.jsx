import React from 'react';
import { CheckSquare } from 'lucide-react';

export default function Skills({ skills }) {
  return (
    <section class="section" id="skills" style={{ background: 'rgba(0, 0, 0, 0.15)' }}>
      <div class="container">
        <div class="section-header">
          <div class="section-subtitle">Technical Proficiency</div>
          <h2 class="section-title">Skills & Technologies</h2>
          <p class="section-desc">
            Core competencies, tools, and platforms validated through practical projects and certifications.
          </p>
        </div>

        <div class="skills-grid">
          {(skills || []).map((group, index) => (
            <div key={index} class="skill-card">
              <h3 class="skill-card-title">
                <CheckSquare size={20} style={{ color: 'var(--accent-primary)' }} />
                <span>{group.category}</span>
              </h3>
              <div class="skill-items-container">
                {(group.items || []).map((item, idx) => (
                  <span key={idx} class="skill-item-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
