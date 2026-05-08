import { SiGo, SiNodedotjs, SiDart, SiPostgresql, SiDocker, SiGit } from "react-icons/si";
import { hardSkills, softSkills } from "../data/portfolioData";
import "../styles/Skills.css";

const ICON_MAP = {
  SiGo:         <SiGo />,
  SiNodedotjs:  <SiNodedotjs />,
  SiDart:       <SiDart />,
  SiPostgresql: <SiPostgresql />,
  SiDocker:     <SiDocker />,
  SiGit:        <SiGit />,
};

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-label">Skills</div>
        <h2 className="section-heading">Tech Stack & <span>Keahlian</span></h2>
        <p className="section-sub">Teknologi yang saya gunakan untuk membangun sistem yang efisien dan skalabel.</p>

        <div className="skills-layout">
          {/* Hard Skills */}
          <div className="skills-card">
            <div className="skills-card-title">Hard Skills / Tech Stack</div>
            {hardSkills.map(skill => (
              <div key={skill.id} className="skill-row">
                <div className="skill-top">
                  <div className="skill-left">
                    <div className="skill-icon-wrap" style={{ color: skill.color }}>
                      {ICON_MAP[skill.icon]}
                    </div>
                    <div>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-desc">{skill.description}</div>
                    </div>
                  </div>
                  <span className="skill-pct" style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="skills-card">
            <div className="skills-card-title">Soft Skills</div>
            <div className="soft-grid">
              {softSkills.map(s => (
                <div key={s.id} className="soft-item">
                  <span className="soft-emoji">{s.icon}</span>
                  {s.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
