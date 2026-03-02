import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const features = [
  {
    id: 1,
    image: "images/Matt_Daniels_House/DJI_20260228081500_0197_D.JPG",
    title: "Aerial Cinematography",
    description:
      "Capture breathtaking 4K footage from perspectives impossible to achieve on the ground. Our cinematic drones deliver Hollywood-grade shots for film, advertising, and creative projects.",
  },
  {
    id: 2,
    image: "images/Matt_Daniels_House/DJI_20260228081635_0199_D.JPG",
    title: "Survey & Mapping",
    description:
      "Precision aerial surveys with centimeter-level accuracy. We generate orthomosaic maps, 3D models, and topographic data for construction, agriculture, and land management.",
  },
  {
    id: 3,
    image: "images/Matt_Daniels_House/DJI_20260228081228_0190_D.JPG",
    title: "Infrastructure Inspection",
    description:
      "Safely inspect bridges, towers, pipelines, and rooftops without scaffolding or risk. Our thermal and high-res cameras detect issues before they become costly problems.",
  },
];

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Bebas Neue', 'Barlow Condensed', sans-serif", background: "#080c10", color: "#e8e4dc", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,600;1,300&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=1600&q=80');
          background-size: cover;
          background-position: center;
          transform: translateY(${scrollY * 0.3}px);
          transition: transform 0.05s linear;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            #080c10 0%,
            rgba(8,12,16,0.6) 40%,
            rgba(8,12,16,0.1) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 6vw 8vh;
          width: 100%;
        }

        .hero-eyebrow {
          font-family: 'Barlow', sans-serif;
          font-weight: 300;
          font-style: italic;
          letter-spacing: 0.4em;
          font-size: clamp(0.65rem, 1.2vw, 0.85rem);
          color: #c8a96e;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4rem, 12vw, 11rem);
          line-height: 0.92;
          letter-spacing: 0.04em;
          color: #e8e4dc;
          text-transform: uppercase;
          /* Replace "YOUR COMPANY NAME" below */
        }

        .hero-title span {
          display: block;
          color: #c8a96e;
        }

        .hero-sub {
          font-family: 'Barlow', sans-serif;
          font-weight: 300;
          font-size: clamp(0.8rem, 1.4vw, 1rem);
          letter-spacing: 0.15em;
          color: rgba(232,228,220,0.55);
          margin-top: 2rem;
          text-transform: uppercase;
          max-width: 38ch;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3vh;
          right: 6vw;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0.45;
        }

        .scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, transparent, #c8a96e);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        .scroll-label {
          font-family: 'Barlow', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          color: #c8a96e;
          writing-mode: vertical-rl;
          text-transform: uppercase;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
          50% { opacity: 1; transform: scaleY(1); }
        }

        /* NAV */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2.2rem 6vw;
          mix-blend-mode: normal;
          background: linear-gradient(to bottom, rgba(8,12,16,0.85), transparent);
        }

        .nav-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem;
          letter-spacing: 0.2em;
          color: #c8a96e;
        }

        .nav-links {
          display: flex;
          gap: 3rem;
          list-style: none;
        }

        .nav-links a {
          font-family: 'Barlow', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(232,228,220,0.7);
          text-decoration: none;
          transition: color 0.3s;
        }

        .nav-links a:hover { color: #c8a96e; }

        /* FEATURES SECTION */
        .features {
          padding: 12vh 6vw;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          display: flex;
          align-items: baseline;
          gap: 2rem;
          margin-bottom: 8vh;
          border-bottom: 1px solid rgba(200,169,110,0.2);
          padding-bottom: 2rem;
        }

        .section-number {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 5rem;
          color: rgba(200,169,110,0.2);
          line-height: 1;
        }

        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          letter-spacing: 0.06em;
          color: #e8e4dc;
          text-transform: uppercase;
        }

        .feature-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5vw;
          align-items: center;
          padding: 6vh 0;
          border-bottom: 1px solid rgba(232,228,220,0.06);
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .feature-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .feature-item:nth-child(even) .feature-image-wrap {
          order: 2;
        }

        .feature-item:nth-child(even) .feature-text {
          order: 1;
        }

        .feature-image-wrap {
          position: relative;
          overflow: hidden;
        }

        .feature-image-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(200,169,110,0.15), transparent 60%);
          z-index: 1;
          pointer-events: none;
        }

        .feature-image-wrap img {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          display: block;
          filter: saturate(0.7) contrast(1.1);
          transition: transform 0.7s ease, filter 0.5s ease;
        }

        .feature-item:hover .feature-image-wrap img {
          transform: scale(1.04);
          filter: saturate(0.9) contrast(1.05);
        }

        .feature-index {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.35em;
          color: #c8a96e;
          margin-bottom: 1.2rem;
        }

        .feature-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem, 3.5vw, 3.2rem);
          letter-spacing: 0.04em;
          color: #e8e4dc;
          text-transform: uppercase;
          line-height: 1;
          margin-bottom: 1.5rem;
        }

        .feature-desc {
          font-family: 'Barlow', sans-serif;
          font-weight: 300;
          font-size: clamp(0.9rem, 1.3vw, 1rem);
          line-height: 1.8;
          color: rgba(232,228,220,0.6);
          max-width: 42ch;
        }

        .feature-cta {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          margin-top: 2.5rem;
          font-family: 'Barlow', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #c8a96e;
          text-decoration: none;
          transition: gap 0.3s;
          cursor: pointer;
          background: none;
          border: none;
        }

        .feature-cta:hover { gap: 1.8rem; }

        .feature-cta::after {
          content: '→';
          font-size: 1.1rem;
        }

        /* FOOTER */
        footer {
          border-top: 1px solid rgba(200,169,110,0.15);
          padding: 4vh 6vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.25em;
          color: rgba(200,169,110,0.5);
        }

        .footer-copy {
          font-family: 'Barlow', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: rgba(232,228,220,0.25);
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .feature-item {
            grid-template-columns: 1fr;
          }
          .feature-item:nth-child(even) .feature-image-wrap,
          .feature-item:nth-child(even) .feature-text {
            order: unset;
          }
          .nav-links { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        {/* ↓ Replace with your logo/company name */}
        <div className="nav-logo">Heritage Built Services</div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">About</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Professional Drone Services</p>
          {/* ↓↓ REPLACE THIS WITH YOUR COMPANY NAME ↓↓ */}
          <h1 className="hero-title">
            HERITAGE<br />
            <span>BUILT</span>
            SERVICES
          </h1>
          <p className="hero-sub">Redefining what's possible from above</p>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span className="scroll-label">Scroll</span>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="services">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">Our Services</h2>
        </div>

        {features.map((f, i) => (
          <FeatureItem key={f.id} feature={f} index={i + 1} />
        ))}
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">HERITAGE BUILT SERVICES</div>
        <div className="footer-copy">© 2026 · All Rights Reserved</div>
      </footer>
    </div>
  );
}

function FeatureItem({ feature, index }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById(`feature-${feature.id}`);
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [feature.id]);

  return (
    <div
      id={`feature-${feature.id}`}
      className={`feature-item ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className="feature-image-wrap">
        <img src={feature.image} alt={feature.title} />
      </div>
      <div className="feature-text">
        <div className="feature-index">0{index} — Service</div>
        <h3 className="feature-title">{feature.title}</h3>
        <p className="feature-desc">{feature.description}</p>
        <button className="feature-cta">Learn More</button>
      </div>
    </div>
  );
}