import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact({ profile }) {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const targetEmail = profile?.email || 'exconde.elijah@gmail.com';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all fields before sending.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          message: message,
          _subject: `Portfolio Inquiry from ${senderName} (${senderEmail})`,
          _replyto: senderEmail,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success');
        setSenderName('');
        setSenderEmail('');
        setMessage('');
      } else {
        throw new Error(data.message || 'Failed to dispatch message via mail server.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage('Direct transmission encountered an issue. You can also send directly via email client below.');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Connect Directly</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-desc">
            Have a project, query, or job opportunity? Send a message below and it will be delivered directly to Elijah's inbox.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information Card */}
          <div className="contact-info-card">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>Contact Information</h3>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email</div>
                <a href={`mailto:${targetEmail}`} style={{ fontWeight: 600 }}>
                  {targetEmail}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Phone / WhatsApp</div>
                <a href={`tel:${profile.phone}`} style={{ fontWeight: 600 }}>
                  {profile.phone}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Linkedin size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LinkedIn</div>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>
                  linkedin.com/in/elijah-exconde-02a83a430
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</div>
                <div style={{ fontWeight: 600 }}>{profile.location}</div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Send a Direct Message</h3>

            {status === 'success' && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  background: '#f0fdf4',
                  border: '1px solid #86efac',
                  borderRadius: 'var(--radius-sm)',
                  color: '#166534',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}
              >
                <CheckCircle2 size={20} style={{ color: '#16a34a', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Message sent successfully!</strong>
                  <p style={{ margin: '0.2rem 0 0', color: '#15803d' }}>
                    Your message has been sent directly to <strong>{targetEmail}</strong>. Elijah will get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  background: '#fef2f2',
                  border: '1px solid #fca5a5',
                  borderRadius: 'var(--radius-sm)',
                  color: '#991b1b',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}
              >
                <AlertCircle size={20} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Message transmission alert</strong>
                  <p style={{ margin: '0.2rem 0 0.5rem', color: '#b91c1c' }}>
                    {errorMessage}
                  </p>
                  <a
                    href={`mailto:${targetEmail}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(senderName || 'Visitor')}&body=${encodeURIComponent(message)}`}
                    style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'underline' }}
                  >
                    Click here to open your email client & send to {targetEmail}
                  </a>
                </div>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Sarah Jenkins"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Your Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="e.g. sarah@company.com"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                rows={4}
                placeholder="Hi Elijah, I'm reaching out regarding..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={status === 'sending'}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'sending'}
              style={{ width: '100%', justifyContent: 'center', height: '2.75rem' }}
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={18} className="spin-animation" />
                  <span>Sending to Elijah...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message to Elijah</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
