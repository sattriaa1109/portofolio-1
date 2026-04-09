// ============================================================
// FILE: src/components/Projects.jsx
// FUNGSI: Menampilkan galeri proyek dalam bentuk kartu (card grid).
// ============================================================

import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projectsData } from "../data/portfolioData";
import "../styles/Projects.css";

// Ikon per teknologi (emoji sebagai alternatif mudah)
const TECH_ICON = {
  Golang: "🔵",
  "Node.js": "🟢",
  Dart: "🩵",
  Flutter: "🩵",
  PostgreSQL: "🐘",
  MongoDB: "🍃",
  Docker: "🐳",
  JWT: "🔐",
  Express: "⚡",
  "Express.js": "⚡",
  Provider: "🔄",
  Hive: "🐝",
};

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">
          Galeri <span>Proyek</span>
        </h2>
        <p className="section-subtitle">apa yang sudah saya bangun</p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="project-card"
              style={{ "--card-color": project.color }} // CSS variable dinamis
            >
              {/* Gambar / Preview Proyek */}
              {project.image && (
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-image-overlay"></div>
                </div>
              )}

              <div className="project-content">
                {/* Baris atas: ikon + link */}
                <div className="project-top">
                  <div className="project-icon">
                    {/* Ikon berdasarkan tech stack pertama */}
                    {TECH_ICON[project.tech[0]] || "💻"}
                  </div>
                  <div className="project-links">
                    {/* Link GitHub */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub />
                      </a>
                    )}
                    {/* Link Demo (jika ada) */}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>

                {/* Judul & Deskripsi */}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Tech Tags */}
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;