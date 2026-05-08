import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projectsData } from "../data/portfolioData";
import TextReveal from "./TextReveal";
import "../styles/Projects.css";

gsap.registerPlugin(ScrollTrigger);

const FALLBACK_IMGS = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&auto=format&fit=crop",
];

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal scale: 1.12 → 1.0 on scroll
      gsap.utils.toArray(".project-img-wrap img").forEach((img) => {
        gsap.to(img, {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top 90%",
            end: "bottom 30%",
            scrub: true,
          },
        });
      });

      // Latest works image scale
      gsap.utils.toArray(".lw-img-wrap img").forEach((img) => {
        gsap.to(img, {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top 95%",
            end: "bottom 40%",
            scrub: true,
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      {/* ── Selected Works — alternating rows ── */}
      <section className="works-section" id="works">
        <div className="container">
          <div className="works-header">
            <div className="sec-label">Portfolio</div>
            <h2 className="sec-heading">
              <TextReveal text="Selected Works" tag="span" />
            </h2>
          </div>

          {projectsData.map((p, i) => (
            <div key={p.id} className={`project-row ${i % 2 === 0 ? "odd" : "even"}`}>
              {/* Image */}
              <div className="project-img-col">
                <div className="project-img-wrap">
                  <img
                    src={p.image || FALLBACK_IMGS[i % FALLBACK_IMGS.length]}
                    alt={p.title}
                  />
                  <span className="project-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>

              {/* Text */}
              <div className="project-text-col">
                <div className="project-index">Project {String(i + 1).padStart(2, "0")}</div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tech.map(t => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
                      <FiGithub />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Demo">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Latest Works grid ── */}
      <section className="latest-section" id="latest-works">
        <div className="container">
          <div className="latest-header">
            <div className="sec-label" style={{ justifyContent: "center" }}>Projects</div>
            <h2 className="sec-heading" style={{ textAlign: "center" }}>
              <TextReveal text="Latest Works" tag="span" />
            </h2>
          </div>

          <div className="latest-grid">
            {projectsData.map((p, i) => (
              <article key={p.id} className="lw-card">
                <div className="lw-img-wrap">
                  <img
                    src={p.image || FALLBACK_IMGS[i % FALLBACK_IMGS.length]}
                    alt={p.title}
                  />
                </div>
                <div className="lw-body">
                  <div className="lw-tags">
                    {p.tech.slice(0, 2).map(t => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                  <h3 className="lw-title">{p.title}</h3>
                  <p className="lw-desc">{p.description}</p>
                  <div className="lw-footer">
                    <div className="lw-tags">
                      {p.tech.slice(2).map(t => (
                        <span key={t} className="pill">{t}</span>
                      ))}
                    </div>
                    <div className="lw-links">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="lw-link" aria-label="GitHub">
                          <FiGithub />
                        </a>
                      )}
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="lw-link" aria-label="Demo">
                          <FiExternalLink />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
