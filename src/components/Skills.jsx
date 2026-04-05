// ============================================================
// FILE: src/components/Skills.jsx
// FUNGSI: Menampilkan Hard Skills (dengan progress bar) dan
//         Soft Skills (dengan tag). Data diambil dari portfolioData.js
// ============================================================

import {
  SiGo, SiNodedotjs, SiDart, SiPostgresql, SiDocker, SiGit
} from "react-icons/si";
import { hardSkills, softSkills } from "../data/portfolioData";
import "../styles/components.css";

// Mapping nama ikon ke komponen React Icons
// Ini teknik yang berguna: kita simpan nama string di data, lalu
// konversi ke komponen di sini agar file data tetap bersih.
const ICON_MAP = {
  SiGo:         <SiGo />,
  SiNodedotjs:  <SiNodedotjs />,
  SiDart:       <SiDart />,
  SiPostgresql: <SiPostgresql />,
  SiDocker:     <SiDocker />,
  SiGit:        <SiGit />,
};

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        {/* Judul Seksi */}
        <h2 className="section-title">
          Keahlian <span>Saya</span>
        </h2>
        <p className="section-subtitle">tech stack & kemampuan</p>

        <div className="skills-grid">
          {/* ===== Kolom Kiri: Hard Skills ===== */}
          <div>
            <p className="skills-group-title">Hard Skills / Tech Stack</p>

            {hardSkills.map((skill) => (
              <div key={skill.id} className="hard-skill-item">
                <div className="skill-header">
                  {/* Info skill: ikon + nama + deskripsi */}
                  <div className="skill-info">
                    <span
                      className="skill-icon"
                      style={{ color: skill.color }}
                    >
                      {ICON_MAP[skill.icon]}
                    </span>
                    <div>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-desc">{skill.description}</div>
                    </div>
                  </div>

                  {/* Persentase */}
                  <span
                    className="skill-percent"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ===== Kolom Kanan: Soft Skills ===== */}
          <div>
            <p className="skills-group-title">Soft Skills</p>

            <div className="soft-skills-list">
              {softSkills.map((skill) => (
                <div key={skill.id} className="soft-skill-tag">
                  <span className="tag-icon">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>

            {/* Catatan tambahan */}
            <div style={{ marginTop: "32px", padding: "20px", background: "var(--bg-tertiary)", borderRadius: "var(--border-radius)", border: "1px solid var(--border-color)" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
                <span style={{ color: "var(--accent-cyan)" }}>// </span>
                Saya percaya bahwa kombinasi hard skill yang kuat dan soft skill yang baik adalah kunci menjadi developer yang profesional dan disukai tim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;