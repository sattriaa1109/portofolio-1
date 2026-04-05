// ============================================================
// FILE: src/components/Hero.jsx
// FUNGSI: Bagian pertama yang dilihat pengunjung. Berisi nama,
//         role, bio singkat, CTA button, dan terminal window keren.
// ============================================================

import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { Link } from "react-scroll";
import { profileData } from "../data/portfolioData";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Efek glow di background */}
      <div className="hero-glow"></div>

      <div className="hero-inner container">
        {/* ===== KIRI: Konten Teks ===== */}
        <div className="hero-content">
          <p className="hero-greeting">👋 Halo, perkenalkan saya</p>

          <h1 className="hero-name">{profileData.name}</h1>

          <div className="hero-role">
            <span className="role-text">{profileData.role}</span>
            {/* Cursor berkedip */}
            <span className="cursor"></span>
          </div>

          <p className="hero-bio">{profileData.bio}</p>

          {/* Tombol CTA */}
          <div className="hero-cta">
            <Link to="projects" smooth duration={600} offset={-70}>
              <button className="btn-primary">
                Lihat Proyek Saya
              </button>
            </Link>
            <Link to="contact" smooth duration={600} offset={-70}>
              <button className="btn-outline">
                Hubungi Saya
              </button>
            </Link>
          </div>

          {/* Ikon Sosial Media */}
          <div className="hero-socials">
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${profileData.email}`} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        {/* ===== KANAN: Terminal Window ===== */}
        <div className="hero-terminal">
          <div className="terminal-window">
            {/* Header terminal (titik merah, kuning, hijau) */}
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="terminal-title">profile.go — zsh</span>
            </div>

            {/* Isi terminal */}
            <div className="terminal-body">
              <div className="t-line">
                <span className="t-prompt">$</span>
                <span className="t-cmd">cat developer.json</span>
              </div>
              <div className="t-blank"></div>
              <div className="t-line"><span className="t-output t-key">{"{"}</span></div>
              <div className="t-line">
                <span className="t-output">
                  &nbsp;&nbsp;<span className="t-key">"name"</span>: <span className="t-str">"{profileData.name}"</span>,
                </span>
              </div>
              <div className="t-line">
                <span className="t-output">
                  &nbsp;&nbsp;<span className="t-key">"role"</span>: <span className="t-str">"{profileData.role}"</span>,
                </span>
              </div>
              <div className="t-line">
                <span className="t-output">
                  &nbsp;&nbsp;<span className="t-key">"status"</span>: <span className="t-val">learning & building</span>,
                </span>
              </div>
              <div className="t-line">
                <span className="t-output">
                  &nbsp;&nbsp;<span className="t-key">"stack"</span>: [
                </span>
              </div>
              <div className="t-line">
                <span className="t-output">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-str">"Golang"</span>, <span className="t-str">"Node.js"</span>, <span className="t-str">"Dart"</span>
                </span>
              </div>
              <div className="t-line">
                <span className="t-output">&nbsp;&nbsp;],</span>
              </div>
              <div className="t-line">
                <span className="t-output">
                  &nbsp;&nbsp;<span className="t-key">"available"</span>: <span className="t-val">true</span>,
                </span>
              </div>
              <div className="t-line">
                <span className="t-output">
                  &nbsp;&nbsp;<span className="t-key">"location"</span>: <span className="t-str">"{profileData.location}"</span>
                </span>
              </div>
              <div className="t-line"><span className="t-output">{"}"}</span></div>
              <div className="t-blank"></div>
              <div className="t-line">
                <span className="t-prompt">$</span>
                <span className="t-cmd">
                  <span className="cursor"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;