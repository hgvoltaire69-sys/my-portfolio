import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';

export default function Contact({ profile }) {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${senderName}! Your message to Elijah Exconde has been sent.`);
    setSenderName('');
    setSenderEmail('');
    setMessage('');
  };

  return (
    <section class="section" id="contact">
      <div class="container">
        <div class="section-header">
          <div class="section-subtitle">Connect</div>
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-desc">Have a project, query, or freelance opportunity? Feel free to reach out directly.</p>
        </div>

        <div class="contact-grid">
          <div class="contact-info-card">
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Contact Information</h3>

            <div class="contact-item">
              <div class="contact-icon">
                <Mail size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email</div>
                <a href={`mailto:${profile.email}`} style={{ fontWeight: 600 }}>
                  {profile.email}
                </a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <Phone size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Phone</div>
                <a href={`tel:${profile.phone}`} style={{ fontWeight: 600 }}>
                  {profile.phone}
                </a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <Linkedin size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>LinkedIn</div>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>
                  linkedin.com/in/elijah-exconde-02a83a430
                </a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Location</div>
                <div style={{ fontWeight: 600 }}>{profile.location}</div>
              </div>
            </div>
          </div>

          <form class="contact-form" onSubmit={handleSubmit}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>Send a Message</h3>

            <div class="form-group">
              <label class="form-label">Your Name</label>
              <input
                type="text"
                class="form-input"
                placeholder="Jane Doe"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label">Your Email</label>
              <input
                type="email"
                class="form-input"
                placeholder="jane@example.com"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label">Message</label>
              <textarea
                class="form-textarea"
                rows={4}
                placeholder="Hi Elijah, I would like to discuss..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button type="submit" class="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
