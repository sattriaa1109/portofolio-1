import { profileData, softSkills, hardSkills } from "../data/portfolioData";
import { SiGo, SiNodedotjs, SiDart, SiPostgresql, SiDocker, SiGit, SiFlutter, SiSwift, SiKotlin } from "react-icons/si";
import TextReveal from "./TextReveal";
import photoImg from "../assets/photos.jpeg";
import "../styles/About.css";

const ICON_MAP = {
  SiGo: <SiGo />,
  SiNodedotjs: <SiNodedotjs />,
  SiDart: <SiDart />,
  SiPostgresql: <SiPostgresql />,
  SiDocker: <SiDocker />,
  SiGit: <SiGit />,
  SiFlutter: <SiFlutter />,
  SiSwift: <SiSwift />,
  SiKotlin: <SiKotlin />,
};

// Duplicate arrays for seamless infinite scroll — doubled is enough
const doubledTech = [...hardSkills, ...hardSkills];
const doubledSoft = [...softSkills, ...softSkills, ...softSkills];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left — text */}
          <div className="about-left">
            <div className="sec-label">About Me</div>
            <h2 className="sec-heading">
              <TextReveal text="Passionate about building great software" tag="span" />
            </h2>
            <p className="about-bio">{profileData.bio}</p>
            <a href={`mailto:${profileData.email}`} className="btn btn-dark">Get In Touch</a>
          </div>

          {/* Center — big number + small photo */}
          <div className="about-center">
            <span className="about-big-num">80%</span>
            <span className="about-big-label">Avg. Skill Level</span>
            <div className="about-photo-placeholder"><img src={photoImg} alt="" /></div>
          </div>

          {/* Right — info cards */}
          <div className="about-right">
            <div className="about-info-card">
              <div className="about-info-card-label">Current Status</div>
              <div className="about-info-card-val">SMK Kelas XI — RPL</div>
              <div className="about-info-card-sub">Rekayasa Perangkat Lunak</div>
            </div>
            <div className="about-info-card">
              <div className="about-info-card-label">Location</div>
              <div className="about-info-card-val">{profileData.location}</div>
              <div className="about-info-card-sub">Available remotely</div>
            </div>
          </div>
        </div>

        {/* ── Auto Marquee Tech Stack (Photos/Icons) ── */}
        <div style={{ marginTop: "var(--sp-6)" }}>
          <div className="sec-label">Tech Stack</div>
          <div className="about-tech-marquee">
            <div className="about-tech-track">
              {doubledTech.map((skill, i) => (
                <div className="about-tech-card" key={`${skill.id}-${i}`}>
                  <div className="about-tech-photo" style={{ color: skill.color }}>
                    {ICON_MAP[skill.icon]}
                  </div>
                  <span className="about-tech-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Auto Marquee Soft Skills (Text Only) ── */}
        <div>
          <div className="sec-label">Soft Skills</div>
          <div className="about-soft-marquee">
            <div className="about-soft-track">
              {doubledSoft.map((s, i) => (
                <span className="about-soft-item" key={`soft-${s.id}-${i}`}>
                  <span>{s.icon}</span>
                  {s.name}
                  <span className="about-soft-dot" />
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
