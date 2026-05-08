import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-scroll";
import { profileData, hardSkills, projectsData } from "../data/portfolioData";
import "../styles/Hero.css";

export default function Hero({ isLoaded }) {
  const helloStrokeRef = useRef(null);
  const helloFillRef = useRef(null);

  useEffect(() => {
    if (!isLoaded) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // Animate stroke outline drawing
      tl.fromTo(
        helloStrokeRef.current,
        { strokeDasharray: 1500, strokeDashoffset: 1500 },
        { 
          strokeDashoffset: 0, 
          duration: 2.5, 
          ease: "cubic-bezier(0.7, 0, 0.3, 1)" 
        }
      );

      // Fade in the solid fill color
      tl.to(
        helloFillRef.current,
        { opacity: 1, duration: 1.2, ease: "power2.out" },
        "-=0.8" // Start slightly before outline finishes
      );
    });

    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <section className="hero" id="hero">
      {/* Top bar — stats */}
      <div className="hero-topbar">
        <div className="hero-stats">
          <div className="hero-stat-item">
            <span className="hero-stat-num">+{hardSkills.length * 10}</span>
            <span className="hero-stat-label">Projects Done</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-num">+{projectsData.length * 10}</span>
            <span className="hero-stat-label">Happy Clients</span>
          </div>
        </div>
        <div className="hero-available">
          <span className="hero-avail-dot" />
          Available for work
        </div>
      </div>

      {/* Main — 3 col */}
      <div className="hero-main">
        {/* Left */}
        <div className="hero-left">
          <p className="hero-tagline">Backend Developer</p>
          <p className="hero-desc">{profileData.tagline}</p>
          <div className="hero-actions">
            <Link to="works" smooth duration={600} offset={-60}>
              <button className="btn btn-dark">View Works</button>
            </Link>
            <Link to="contact" smooth duration={600} offset={-60}>
              <button className="btn btn-outline">Contact Me</button>
            </Link>
          </div>
        </div>

        {/* Center — big name + photo */}
        <div className="hero-center">
          <div className="hero-hello-svg-wrap">
            <svg 
              viewBox="0 0 500 160" 
              className="hero-hello-svg"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ink bleed filter */}
              <filter id="inkBleedHello" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
              </filter>

              {/* Stroke (Animated) */}
              <text
                ref={helloStrokeRef}
                x="50%"
                y="65%"
                dominantBaseline="middle"
                textAnchor="middle"
                stroke="var(--charcoal)"
                strokeWidth="1.5"
                filter="url(#inkBleedHello)"
                style={{
                  fontFamily: "var(--f-serif)",
                  fontSize: "140px",
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                }}
              >
                Hello
              </text>

              {/* Fill (Fades in) */}
              <text
                ref={helloFillRef}
                x="50%"
                y="65%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="var(--charcoal)"
                opacity="0"
                style={{
                  fontFamily: "var(--f-serif)",
                  fontSize: "140px",
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                }}
              >
                Hello
              </text>
            </svg>
          </div>

          <div className="hero-photo-wrap">
            <div className="hero-photo-placeholder">SP</div>
          </div>
          <p className="hero-role-line">I'm a Backend Developer</p>
        </div>

        {/* Right */}
        <div className="hero-right">
          <p className="hero-location">{profileData.location}</p>
          <p className="hero-name-small">{profileData.name}</p>
          <div className="hero-scroll-hint">
            <div className="hero-scroll-line" />
            Scroll down
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="hero-bottom">
        <span className="hero-bottom-left">© 2025 — {profileData.name}</span>
        <div className="hero-bottom-right">
          <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="hero-social-link">GitHub</a>
          <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link">LinkedIn</a>
          <a href={`mailto:${profileData.email}`} className="hero-social-link">Email</a>
        </div>
      </div>
    </section>
  );
}
