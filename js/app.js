/**
 * Main Application Logic
 * Renders UI components, handles state updates, interactive modals, theme toggling, and live editing.
 */

import { getPortfolioData, savePortfolioData, resetPortfolioData } from './data.js';

let appState = getPortfolioData();
let currentCategoryFilter = 'All';
let isEditMode = false;

// DOM Elements
const certGrid = document.getElementById('cert-grid');
const skillsGrid = document.getElementById('skills-grid');
const projectsGrid = document.getElementById('projects-grid');
const experienceTimeline = document.getElementById('experience-timeline');
const searchInput = document.getElementById('cert-search-input');
const categoryTabs = document.getElementById('category-tabs');

// Modals
const certFormModal = document.getElementById('cert-form-modal');
const certDetailModal = document.getElementById('cert-detail-modal');
const exportImportModal = document.getElementById('export-import-modal');

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderAll();
  setupEventListeners();
});

/**
 * Initialize Theme (Dark/Light)
 */
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.setAttribute('data-feather', theme === 'dark' ? 'sun' : 'moon');
    if (window.feather) window.feather.replace();
  }
}

/**
 * Main Render Dispatcher
 */
function renderAll() {
  renderProfile();
  renderCertifications();
  renderSkills();
  renderProjects();
  renderExperience();
  updateStats();
  if (window.feather) window.feather.replace();
}

/**
 * Render Profile & Header Text
 */
function renderProfile() {
  const { profile } = appState;
  
  // Header & Hero Elements
  document.getElementById('header-brand-name').textContent = profile.name;
  document.getElementById('hero-name').textContent = profile.name;
  document.getElementById('hero-bio').textContent = profile.bio;
  document.getElementById('profile-card-name').textContent = profile.name;
  document.getElementById('profile-card-title').textContent = profile.title;
  document.getElementById('footer-name').textContent = profile.name;

  // Contact Links
  const emailLink = document.getElementById('contact-email-link');
  if (emailLink) {
    emailLink.href = `mailto:${profile.email}`;
    emailLink.textContent = profile.email;
  }
  const locationEl = document.getElementById('contact-location');
  if (locationEl) locationEl.textContent = profile.location;

  const websiteLink = document.getElementById('contact-website-link');
  if (websiteLink) {
    websiteLink.href = profile.website || '#';
    websiteLink.textContent = profile.website || 'N/A';
  }

  // Social Links
  const socialContainer = document.getElementById('social-links-container');
  if (socialContainer) {
    socialContainer.innerHTML = `
      ${profile.github ? `<a href="${profile.github}" target="_blank" class="icon-btn" title="GitHub"><i data-feather="github"></i></a>` : ''}
      ${profile.linkedin ? `<a href="${profile.linkedin}" target="_blank" class="icon-btn" title="LinkedIn"><i data-feather="linkedin"></i></a>` : ''}
      ${profile.twitter ? `<a href="${profile.twitter}" target="_blank" class="icon-btn" title="Twitter"><i data-feather="twitter"></i></a>` : ''}
      ${profile.email ? `<a href="mailto:${profile.email}" class="icon-btn" title="Email"><i data-feather="mail"></i></a>` : ''}
    `;
  }
}

/**
 * Render Certifications Cards Grid
 */
function renderCertifications() {
  if (!certGrid) return;

  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const filtered = appState.certifications.filter(cert => {
    const matchesCategory = currentCategoryFilter === 'All' || cert.category === currentCategoryFilter;
    const matchesQuery = !query || 
      cert.title.toLowerCase().includes(query) ||
      cert.issuer.toLowerCase().includes(query) ||
      cert.skills.some(s => s.toLowerCase().includes(query));
    return matchesCategory && matchesQuery;
  });

  if (filtered.length === 0) {
    certGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"><i data-feather="award"></i></div>
        <h3>No certifications found</h3>
        <p style="color: var(--text-muted); margin: 0.5rem 0 1.25rem;">
          Try adjusting your filter or search keywords, or add a new certification template.
        </p>
        <button class="btn-primary" id="empty-add-btn">
          <i data-feather="plus"></i>
          <span>Add Certification</span>
        </button>
      </div>
    `;
    const emptyBtn = document.getElementById('empty-add-btn');
    if (emptyBtn) emptyBtn.addEventListener('click', openAddCertModal);
    if (window.feather) window.feather.replace();
    return;
  }

  certGrid.innerHTML = filtered.map(cert => `
    <div class="cert-card" data-id="${cert.id}">
      <div class="edit-actions">
        <button class="icon-btn edit-cert-btn" data-id="${cert.id}" title="Edit Certification"><i data-feather="edit-2"></i></button>
        <button class="icon-btn delete-cert-btn" data-id="${cert.id}" title="Delete Certification" style="color: #ef4444;"><i data-feather="trash-2"></i></button>
      </div>

      <div>
        <div class="cert-card-top">
          <div class="cert-badge-icon">
            <i data-feather="${cert.badgeIcon || 'award'}"></i>
          </div>
          <div class="cert-header-text">
            <div class="cert-category">${escapeHtml(cert.category || 'General')}</div>
            <h3 class="cert-title">${escapeHtml(cert.title)}</h3>
            <div class="cert-issuer">Issued by <strong>${escapeHtml(cert.issuer)}</strong></div>
          </div>
        </div>

        <p class="cert-description">${escapeHtml(cert.description || '')}</p>

        <div class="cert-skills-list">
          ${(cert.skills || []).map(skill => `<span class="skill-pill">${escapeHtml(skill)}</span>`).join('')}
        </div>
      </div>

      <div class="cert-footer">
        <div class="cert-dates">
          <span>Issued: ${escapeHtml(cert.issueDate || 'N/A')}</span>
        </div>
        <div class="cert-actions">
          <button class="cert-link-btn view-detail-btn" data-id="${cert.id}">
            <span>Details</span>
            <i data-feather="chevron-right"></i>
          </button>
          ${cert.credentialUrl ? `
            <a href="${escapeHtml(cert.credentialUrl)}" target="_blank" rel="noopener noreferrer" class="cert-link-btn" title="Verify Online">
              <i data-feather="external-link"></i>
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');

  // Attach card event listeners
  document.querySelectorAll('.view-detail-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      openDetailModal(id);
    });
  });

  document.querySelectorAll('.edit-cert-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      openEditCertModal(id);
    });
  });

  document.querySelectorAll('.delete-cert-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      deleteCert(id);
    });
  });

  if (window.feather) window.feather.replace();
}

/**
 * Render Skills Section
 */
function renderSkills() {
  if (!skillsGrid) return;
  skillsGrid.innerHTML = (appState.skills || []).map(group => `
    <div class="skill-card">
      <h3 class="skill-card-title">
        <i data-feather="check-square" style="color: var(--accent-primary);"></i>
        <span>${escapeHtml(group.category)}</span>
      </h3>
      <div class="skill-items-container">
        ${(group.items || []).map(item => `<span class="skill-item-tag">${escapeHtml(item)}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/**
 * Render Projects Section
 */
function renderProjects() {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = (appState.projects || []).map(proj => `
    <div class="project-card">
      <div class="project-header">
        <span class="project-category">${escapeHtml(proj.category || 'Project')}</span>
        <h3 class="project-title">${escapeHtml(proj.title)}</h3>
        <p class="project-desc">${escapeHtml(proj.description || '')}</p>
      </div>

      <div>
        <div class="project-tags">
          ${(proj.techStack || []).map(t => `<span class="skill-pill">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div class="project-footer">
          ${proj.demoUrl ? `<a href="${escapeHtml(proj.demoUrl)}" target="_blank" class="cert-link-btn"><i data-feather="eye"></i> Live Demo</a>` : ''}
          ${proj.githubUrl ? `<a href="${escapeHtml(proj.githubUrl)}" target="_blank" class="cert-link-btn"><i data-feather="github"></i> Source Code</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Render Experience Section
 */
function renderExperience() {
  if (!experienceTimeline) return;
  experienceTimeline.innerHTML = (appState.experience || []).map(exp => `
    <div class="timeline-item">
      <div class="timeline-card">
        <div class="timeline-role">${escapeHtml(exp.role)}</div>
        <div class="timeline-company">${escapeHtml(exp.company)}</div>
        <div class="timeline-period">${escapeHtml(exp.period)}</div>
        <p style="color: var(--text-secondary); font-size: 0.95rem;">${escapeHtml(exp.description)}</p>
      </div>
    </div>
  `).join('');
}

/**
 * Update Header & Hero Stats
 */
function updateStats() {
  const statCert = document.getElementById('stat-cert-count');
  const statProj = document.getElementById('stat-project-count');
  if (statCert) statCert.textContent = appState.certifications.length;
  if (statProj) statProj.textContent = appState.projects.length;
}

/**
 * Open Add Cert Modal
 */
function openAddCertModal() {
  document.getElementById('cert-modal-headline').textContent = 'Add Certification';
  document.getElementById('form-cert-id').value = '';
  document.getElementById('cert-form').reset();
  certFormModal.showModal();
}

/**
 * Open Edit Cert Modal
 */
function openEditCertModal(id) {
  const cert = appState.certifications.find(c => c.id === id);
  if (!cert) return;

  document.getElementById('cert-modal-headline').textContent = 'Edit Certification';
  document.getElementById('form-cert-id').value = cert.id;
  document.getElementById('form-cert-title').value = cert.title;
  document.getElementById('form-cert-issuer').value = cert.issuer;
  document.getElementById('form-cert-category').value = cert.category || 'Cloud & Infrastructure';
  document.getElementById('form-cert-issuedate').value = cert.issueDate || '';
  document.getElementById('form-cert-expirydate').value = cert.expiryDate || '';
  document.getElementById('form-cert-credid').value = cert.credentialId || '';
  document.getElementById('form-cert-credurl').value = cert.credentialUrl || '';
  document.getElementById('form-cert-skills').value = (cert.skills || []).join(', ');
  document.getElementById('form-cert-icon').value = cert.badgeIcon || 'award';
  document.getElementById('form-cert-desc').value = cert.description || '';

  certFormModal.showModal();
}

/**
 * Open Credential Detail Preview Modal
 */
function openDetailModal(id) {
  const cert = appState.certifications.find(c => c.id === id);
  if (!cert) return;

  document.getElementById('detail-cert-title').textContent = cert.title;
  const body = document.getElementById('detail-modal-body');
  body.innerHTML = `
    <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1.5rem;">
      <div class="cert-badge-icon" style="width: 4rem; height: 4rem; font-size: 2rem;">
        <i data-feather="${cert.badgeIcon || 'award'}"></i>
      </div>
      <div>
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-secondary); text-transform: uppercase;">${escapeHtml(cert.category)}</div>
        <h4 style="font-size: 1.25rem; font-weight: 700;">${escapeHtml(cert.title)}</h4>
        <div style="color: var(--text-secondary);">Issued by <strong>${escapeHtml(cert.issuer)}</strong></div>
      </div>
    </div>

    <div style="background: var(--bg-primary); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem; border: 1px solid var(--border-color);">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.9rem;">
        <div><strong style="color: var(--text-muted);">Issue Date:</strong> ${escapeHtml(cert.issueDate || 'N/A')}</div>
        <div><strong style="color: var(--text-muted);">Expiration:</strong> ${escapeHtml(cert.expiryDate || 'N/A')}</div>
        <div><strong style="color: var(--text-muted);">Credential ID:</strong> ${escapeHtml(cert.credentialId || 'N/A')}</div>
        <div><strong style="color: var(--text-muted);">Status:</strong> <span style="color: #10b981; font-weight: 600;">Active & Verified</span></div>
      </div>
    </div>

    <p style="color: var(--text-secondary); margin-bottom: 1.25rem; font-size: 0.95rem;">
      ${escapeHtml(cert.description || 'No description provided.')}
    </p>

    <div style="margin-bottom: 1.5rem;">
      <div style="font-size: 0.85rem; font-weight: 600; margin-bottom: 0.5rem;">Validated Skills & Competencies:</div>
      <div class="cert-skills-list">
        ${(cert.skills || []).map(s => `<span class="skill-pill" style="padding: 0.3rem 0.7rem; font-weight: 500;">${escapeHtml(s)}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; justify-content: flex-end; gap: 0.75rem;">
      <button class="btn-secondary" id="close-detail-inner-btn">Close</button>
      ${cert.credentialUrl ? `
        <a href="${escapeHtml(cert.credentialUrl)}" target="_blank" class="btn-primary">
          <i data-feather="external-link"></i>
          <span>Verify Credential</span>
        </a>
      ` : ''}
    </div>
  `;

  document.getElementById('close-detail-inner-btn').addEventListener('click', () => certDetailModal.close());
  if (window.feather) window.feather.replace();
  certDetailModal.showModal();
}

/**
 * Save Certification Form (Create or Update)
 */
function handleCertFormSubmit(e) {
  e.preventDefault();
  const id = document.getElementById('form-cert-id').value;
  const title = document.getElementById('form-cert-title').value.trim();
  const issuer = document.getElementById('form-cert-issuer').value.trim();
  const category = document.getElementById('form-cert-category').value;
  const issueDate = document.getElementById('form-cert-issuedate').value;
  const expiryDate = document.getElementById('form-cert-expirydate').value.trim();
  const credentialId = document.getElementById('form-cert-credid').value.trim();
  const credentialUrl = document.getElementById('form-cert-credurl').value.trim();
  const skillsRaw = document.getElementById('form-cert-skills').value;
  const badgeIcon = document.getElementById('form-cert-icon').value;
  const description = document.getElementById('form-cert-desc').value.trim();

  const skills = skillsRaw.split(',').map(s => s.trim()).filter(Boolean);

  if (id) {
    // Update existing
    const index = appState.certifications.findIndex(c => c.id === id);
    if (index !== -1) {
      appState.certifications[index] = {
        id, title, issuer, category, issueDate, expiryDate, credentialId, credentialUrl, skills, badgeIcon, description
      };
    }
  } else {
    // Create new
    const newCert = {
      id: 'cert-' + Date.now(),
      title, issuer, category, issueDate, expiryDate, credentialId, credentialUrl, skills, badgeIcon, description
    };
    appState.certifications.unshift(newCert);
  }

  savePortfolioData(appState);
  certFormModal.close();
  renderCertifications();
  updateStats();
}

/**
 * Delete Certification
 */
function deleteCert(id) {
  if (confirm('Are you sure you want to delete this certification?')) {
    appState.certifications = appState.certifications.filter(c => c.id !== id);
    savePortfolioData(appState);
    renderCertifications();
    updateStats();
  }
}

/**
 * Open Export / Import Modal
 */
function openExportImportModal() {
  const textarea = document.getElementById('json-data-textarea');
  if (textarea) {
    textarea.value = JSON.stringify(appState, null, 2);
  }
  exportImportModal.showModal();
}

/**
 * Setup All Event Listeners
 */
function setupEventListeners() {
  // Theme Toggle Button
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    });
  }

  // Category Filter Tabs
  if (categoryTabs) {
    categoryTabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tab-btn')) {
        categoryTabs.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        currentCategoryFilter = e.target.getAttribute('data-category');
        renderCertifications();
      }
    });
  }

  // Cert Search Input
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderCertifications();
    });
  }

  // Add Cert Buttons
  const addNavBtn = document.getElementById('add-cert-nav-btn');
  const openAddBtn = document.getElementById('open-add-cert-btn');
  if (addNavBtn) addNavBtn.addEventListener('click', openAddCertModal);
  if (openAddBtn) openAddBtn.addEventListener('click', openAddCertModal);

  // Close Modals
  document.getElementById('close-cert-modal-btn').addEventListener('click', () => certFormModal.close());
  document.getElementById('cancel-cert-form-btn').addEventListener('click', () => certFormModal.close());
  document.getElementById('close-detail-modal-btn').addEventListener('click', () => certDetailModal.close());
  document.getElementById('close-export-modal-btn').addEventListener('click', () => exportImportModal.close());

  // Form Submit
  document.getElementById('cert-form').addEventListener('submit', handleCertFormSubmit);

  // Export / Import Controls
  document.getElementById('open-export-modal-btn').addEventListener('click', openExportImportModal);

  document.getElementById('copy-json-btn').addEventListener('click', () => {
    const textarea = document.getElementById('json-data-textarea');
    navigator.clipboard.writeText(textarea.value).then(() => {
      alert('JSON copied to clipboard!');
    });
  });

  document.getElementById('download-json-btn').addEventListener('click', () => {
    const textarea = document.getElementById('json-data-textarea');
    const blob = new Blob([textarea.value], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-data.json';
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById('import-json-btn').addEventListener('click', () => {
    const textarea = document.getElementById('json-data-textarea');
    try {
      const parsed = JSON.parse(textarea.value);
      if (parsed.profile && parsed.certifications) {
        appState = parsed;
        savePortfolioData(appState);
        renderAll();
        exportImportModal.close();
        alert('Portfolio data imported successfully!');
      } else {
        alert('Invalid JSON structure. Must contain "profile" and "certifications" keys.');
      }
    } catch (err) {
      alert('JSON syntax error: ' + err.message);
    }
  });

  // Toggle Live Edit Mode
  const editToggleBtn = document.getElementById('toggle-edit-mode-btn');
  const editStatusText = document.getElementById('edit-mode-status-text');

  if (editToggleBtn) {
    editToggleBtn.addEventListener('click', () => {
      isEditMode = !isEditMode;
      document.body.classList.toggle('edit-mode', isEditMode);
      editToggleBtn.classList.toggle('active', isEditMode);

      const targets = [
        document.getElementById('hero-name'),
        document.getElementById('hero-bio'),
        document.getElementById('profile-card-name'),
        document.getElementById('profile-card-title')
      ];

      targets.forEach(el => {
        if (el) el.contentEditable = isEditMode ? "true" : "false";
      });

      if (editStatusText) {
        editStatusText.textContent = isEditMode ? "Edit Mode: ON" : "Edit Mode: OFF";
      }

      if (!isEditMode) {
        // Save inline edits
        appState.profile.name = document.getElementById('hero-name').textContent.trim();
        appState.profile.bio = document.getElementById('hero-bio').textContent.trim();
        appState.profile.title = document.getElementById('profile-card-title').textContent.trim();
        savePortfolioData(appState);
        renderProfile();
      }
    });
  }

  // Reset Data Template Button
  document.getElementById('reset-data-btn').addEventListener('click', () => {
    if (confirm('Reset portfolio back to default template dataset? Any custom additions will be cleared.')) {
      appState = resetPortfolioData();
      renderAll();
      alert('Template reset to initial default state.');
    }
  });
}

/**
 * Utility: HTML Escape String
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
