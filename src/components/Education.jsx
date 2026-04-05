// ============================================================
// FILE: src/components/Education.jsx
// FUNGSI: Menampilkan riwayat pendidikan dalam format timeline.
// ============================================================

import { educationData } from "../data/portfolioData";
import "../styles/components.css";

function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <h2 className="section-title">
          Riwayat <span>Pendidikan</span>
        </h2>
        <p className="section-subtitle">jejak akademik saya</p>

        {/* Timeline */}
        <div className="education-timeline">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className={`edu-item ${edu.current ? "current" : ""}`}
            >
              {/* Titik pada garis timeline */}
              <div className="edu-dot"></div>

              {/* Kartu Pendidikan */}
              <div className="edu-card">
                <div className="edu-header">
                  <div className="edu-school">{edu.school}</div>
                  <span className="edu-year">{edu.year}</span>
                </div>
                <div className="edu-major">{edu.major}</div>
                <p className="edu-desc">{edu.description}</p>

                {/* Badge "Sedang Berjalan" untuk pendidikan terkini */}
                {edu.current && (
                  <div style={{ marginTop: "12px" }}>
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      padding: "4px 12px", background: "rgba(74, 222, 128, 0.1)",
                      border: "1px solid rgba(74, 222, 128, 0.3)",
                      borderRadius: "20px", fontSize: "0.75rem",
                      color: "var(--accent-green)", fontFamily: "var(--font-mono)"
                    }}>
                      {/* Titik berkedip tanda aktif */}
                      <span style={{
                        width: "6px", height: "6px", borderRadius: "50%",
                        background: "var(--accent-green)",
                        animation: "pulse 1.5s infinite"
                      }}></span>
                      Sedang Berjalan
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;