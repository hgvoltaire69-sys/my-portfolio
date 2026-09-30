import React, { useState } from 'react';
import { Award, Search } from 'lucide-react';
import CertCard from './CertCard';

const categories = ['All', 'Marketing & CRM', 'AI & Tech', 'Finance & Admin', 'Crisis & Wellness'];

export default function Certifications({ certifications, onViewDetail }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCerts = certifications.filter((cert) => {
    const matchesCategory = activeCategory === 'All' || cert.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      cert.title.toLowerCase().includes(query) ||
      cert.issuer.toLowerCase().includes(query) ||
      (cert.skills || []).some((s) => s.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  return (
    <section class="section" id="certifications">
      <div class="container">
        <div class="section-header">
          <div class="section-subtitle">Verified Accreditation</div>
          <h2 class="section-title">Certifications & Credentials</h2>
          <p class="section-desc">
            Verified course completions, professional certificates, and skill badges for Elijah Exconde. Click any credential to inspect details or preview the original document.
          </p>
        </div>

        {/* Minimalist & Non-Boxy Filter Toolbar */}
        <div class="cert-controls-minimal">
          <div class="filter-pills-minimal">
            {categories.map((cat) => (
              <button
                key={cat}
                class={`pill-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div class="cert-search-minimal" style={{ position: 'relative' }}>
            <input
              type="text"
              class="form-input"
              placeholder="Search certs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '2.1rem' }}
            />
            <Search size={14} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          </div>
        </div>

        {/* Certifications Grid */}
        <div class="cert-grid">
          {filteredCerts.length > 0 ? (
            filteredCerts.map((cert) => (
              <CertCard
                key={cert.id}
                cert={cert}
                onViewDetail={onViewDetail}
              />
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px border var(--border-color)', gridColumn: '1 / -1' }}>
              <Award size={36} style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }} />
              <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>No certifications found</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Try selecting another filter or clearing the search query.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
