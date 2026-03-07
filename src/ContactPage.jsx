import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ fontFamily: "'Bebas Neue', sans-serif", background: "#080c10", color: "#e8e4dc", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,600;1,300&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        /* NAV */
        .c-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2.2rem 6vw;
          background: linear-gradient(to bottom, rgba(8,12,16,0.95), transparent);
        }

        .c-nav-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem;
          letter-spacing: 0.2em;
          color: #c8a96e;
          text-decoration: none;
        }

        .c-nav-links {
          display: flex;
          gap: 3rem;
          list-style: none;
        }

        .c-nav-links a {
          font-family: 'Barlow', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(232,228,220,0.7);
          text-decoration: none;
          transition: color 0.3s;
        }

        .c-nav-links a:hover { color: #c8a96e; }

        /* HERO BANNER */
        .c-hero {
          position: relative;
          height: 45vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .c-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1521405305800-f5c7a4a24778?w=1600&q=80');
          background-size: cover;
          background-position: center 40%;
        }

        .c-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #080c10 0%, rgba(8,12,16,0.5) 50%, rgba(8,12,16,0.3) 100%);
        }

        .c-hero-content {
          position: relative;
          z-index: 2;
          padding: 0 6vw 6vh;
        }

        .c-eyebrow {
          font-family: 'Barlow', sans-serif;
          font-weight: 300;
          font-style: italic;
          letter-spacing: 0.4em;
          font-size: 0.75rem;
          color: #c8a96e;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }

        .c-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.5rem, 9vw, 8rem);
          letter-spacing: 0.05em;
          line-height: 0.9;
          color: #e8e4dc;
        }

        .c-hero-title span { color: #c8a96e; }

        /* MAIN CONTENT */
        .c-body {
          max-width: 1300px;
          margin: 0 auto;
          padding: 10vh 6vw 12vh;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 8vw;
          align-items: start;
        }

        /* LEFT — CONTACT INFO */
        .c-info-block {
          position: sticky;
          top: 12vh;
        }

        .c-section-label {
          font-family: 'Barlow', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #c8a96e;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .c-section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(200,169,110,0.3);
        }

        .c-info-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          letter-spacing: 0.05em;
          line-height: 1.1;
          color: #e8e4dc;
          margin-bottom: 1.5rem;
        }

        .c-info-desc {
          font-family: 'Barlow', sans-serif;
          font-weight: 300;
          font-size: 0.95rem;
          line-height: 1.8;
          color: rgba(232,228,220,0.55);
          margin-bottom: 3.5rem;
          max-width: 36ch;
        }

        .c-contact-method {
          display: flex;
          align-items: flex-start;
          gap: 1.4rem;
          padding: 1.8rem 0;
          border-top: 1px solid rgba(232,228,220,0.07);
          text-decoration: none;
          transition: gap 0.3s;
          cursor: pointer;
        }

        .c-contact-method:last-of-type {
          border-bottom: 1px solid rgba(232,228,220,0.07);
        }

        .c-contact-method:hover { gap: 2rem; }

        .c-method-icon {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(200,169,110,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #c8a96e;
          font-size: 1.1rem;
        }

        .c-method-label {
          font-family: 'Barlow', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(232,228,220,0.35);
          margin-bottom: 0.3rem;
        }

        .c-method-value {
          font-family: 'Barlow', sans-serif;
          font-weight: 400;
          font-size: 0.95rem;
          color: #e8e4dc;
          transition: color 0.3s;
        }

        .c-contact-method:hover .c-method-value { color: #c8a96e; }

        /* RIGHT — FORM */
        .c-form-wrap {
          padding: 3rem;
          border: 1px solid rgba(232,228,220,0.08);
          background: rgba(255,255,255,0.02);
          position: relative;
          overflow: hidden;
        }

        .c-form-wrap::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 60px; height: 60px;
          border-top: 1px solid #c8a96e;
          border-left: 1px solid #c8a96e;
        }

        .c-form-wrap::after {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 60px; height: 60px;
          border-bottom: 1px solid #c8a96e;
          border-right: 1px solid #c8a96e;
        }

        .c-form-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          letter-spacing: 0.08em;
          color: #e8e4dc;
          margin-bottom: 0.5rem;
        }

        .c-form-subtitle {
          font-family: 'Barlow', sans-serif;
          font-weight: 300;
          font-size: 0.85rem;
          color: rgba(232,228,220,0.4);
          letter-spacing: 0.08em;
          margin-bottom: 2.5rem;
        }

        .c-field {
          margin-bottom: 1.8rem;
        }

        .c-label {
          display: block;
          font-family: 'Barlow', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #c8a96e;
          margin-bottom: 0.6rem;
        }

        .c-input, .c-textarea {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: none;
          border-bottom: 1px solid rgba(232,228,220,0.15);
          padding: 0.9rem 0;
          font-family: 'Barlow', sans-serif;
          font-weight: 300;
          font-size: 0.95rem;
          color: #e8e4dc;
          outline: none;
          transition: border-color 0.3s;
          caret-color: #c8a96e;
        }

        .c-input:focus, .c-textarea:focus {
          border-bottom-color: #c8a96e;
        }

        .c-input::placeholder, .c-textarea::placeholder {
          color: rgba(232,228,220,0.2);
        }

        .c-textarea {
          resize: none;
          height: 130px;
          padding-top: 0.9rem;
        }

        .c-submit {
          margin-top: 2.5rem;
          width: 100%;
          background: #c8a96e;
          color: #080c10;
          border: none;
          padding: 1.1rem 2rem;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.25em;
          cursor: pointer;
          transition: background 0.3s, letter-spacing 0.3s;
        }

        .c-submit:hover {
          background: #dfc08a;
          letter-spacing: 0.35em;
        }

        .c-submit:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        /* SUCCESS STATE */
        .c-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 2rem;
          min-height: 300px;
        }

        .c-success-icon {
          width: 60px;
          height: 60px;
          border: 1px solid #c8a96e;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c8a96e;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          animation: popIn 0.5s ease;
        }

        @keyframes popIn {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }

        .c-success-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.2rem;
          letter-spacing: 0.1em;
          color: #e8e4dc;
          margin-bottom: 0.8rem;
        }

        .c-success-msg {
          font-family: 'Barlow', sans-serif;
          font-weight: 300;
          font-size: 0.9rem;
          color: rgba(232,228,220,0.5);
          line-height: 1.7;
        }

        /* FOOTER */
        .c-footer {
          border-top: 1px solid rgba(200,169,110,0.15);
          padding: 4vh 6vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .c-footer-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.25em;
          color: rgba(200,169,110,0.5);
        }

        .c-footer-copy {
          font-family: 'Barlow', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: rgba(232,228,220,0.25);
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .c-body { grid-template-columns: 1fr; }
          .c-info-block { position: static; }
          .c-nav-links { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav className="c-nav">
        <a href="/" className="c-nav-logo">Heritage Built Services</a>
        <ul className="c-nav-links">
          <li><a href="/#services">Services</a></li>
          <li><a href="/#portfolio">Portfolio</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/contact" style={{ color: "#c8a96e" }}>Contact</a></li>
        </ul>
      </nav>

      {/* HERO BANNER */}
      <div className="c-hero">
        <div className="c-hero-bg" />
        <div className="c-hero-overlay" />
        <div className="c-hero-content">
          <p className="c-eyebrow">Get In Touch</p>
          <h1 className="c-hero-title">
            Contact <span>Us</span>
          </h1>
        </div>
      </div>

      {/* BODY */}
      <div className="c-body">

        {/* LEFT — INFO */}
        <div className="c-info-block">
          <div className="c-section-label">Reach Out</div>
          <h2 className="c-info-title">Let's Discuss<br />Your Project</h2>
          <p className="c-info-desc">
            Whether you need aerial cinematography, a site survey, or a custom solution — we're ready to fly. Reach out and we'll get back to you within one business day.
          </p>

          {/* PHONE */}
          <a href="tel:+15550000000" className="c-contact-method">
            <div className="c-method-icon">📞</div>
            <div>
              <div className="c-method-label">Call Us</div>
              {/* ↓ Replace with your phone number */}
              <div className="c-method-value">+1 (555) 000-0000</div>
            </div>
          </a>

          {/* EMAIL */}
          <a href="mailto:hello@yourcompany.com" className="c-contact-method">
            <div className="c-method-icon">✉</div>
            <div>
              <div className="c-method-label">Email Us</div>
              {/* ↓ Replace with your email */}
              <div className="c-method-value">hello@yourcompany.com</div>
            </div>
          </a>
        </div>

        {/* RIGHT — FORM */}
        <div className="c-form-wrap">
          {submitted ? (
            <div className="c-success">
              <div className="c-success-icon">✓</div>
              <div className="c-success-title">Message Received</div>
              <p className="c-success-msg">
                Thanks! We'll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form action="https://formspree.io/f/mwvrpkqq" method="POST" onSubmit={() => setSubmitted(true)}>
              <div className="c-form-title">Send A Message</div>
              <div className="c-form-subtitle">We respond within 1 business day</div>

              <div className="c-field">
                <label className="c-label">Your Name</label>
                <input
                  className="c-input"
                  name="name"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div className="c-field">
                <label className="c-label">Email Address</label>
                <input
                  className="c-input"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="c-field">
                <label className="c-label">Message</label>
                <textarea
                  className="c-textarea"
                  name="message"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                className="c-submit"
                type="submit"
              >
                Send Message →
              </button>
            </form>
            )}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="c-footer">
        <div className="c-footer-logo">Heritage Built Services</div>
        <div className="c-footer-copy">© 2026 · All Rights Reserved</div>
      </footer>
    </div>
  );
}