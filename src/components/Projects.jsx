import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projectsData } from "../data/portfolioData";
import TextReveal from "./TextReveal";
import "../styles/Projects.css";

gsap.registerPlugin(ScrollTrigger);

const images = import.meta.glob("../assets/**/*.{png,jpg,jpeg,svg,webp}", { eager: true });

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
      gsap.utils.toArray(".project-img-wrap img").forEach((img) => {
        gsap.to(img, {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
            invalidateOnRefresh: false,
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const getImageUrl = (imagePath, index) => {
    if (!imagePath) return FALLBACK_IMGS[index % FALLBACK_IMGS.length];
    if (imagePath.startsWith("http")) return imagePath;
    
    const cleanPath = imagePath.replace("src/", "../");
    return images[cleanPath]?.default || images[cleanPath] || FALLBACK_IMGS[index % FALLBACK_IMGS.length];
  };

  return (
    <div ref={ref}>
      <section className="works-section" id="works">
        <div className="container">
          <div className="works-header">
            <div className="sec-label">Portfolio</div>
            <h2 className="sec-heading">
              <TextReveal text="Selected Works" tag="span" />
            </h2>
          </div>

          {projectsData.map((p, i) => {
            const isLocalImage = p.image && !p.image.startsWith("http");
            const shouldHideImage = p.comingSoon && !isLocalImage;

            return (
              <div key={p.id} className={`project-row ${i % 2 === 0 ? "odd" : "even"}`}>
                <div className="project-img-col" style={{ order: 1 }}>
                  <div className="project-img-wrap" style={{ position: "relative", overflow: "hidden" }}>
                    
                    {!shouldHideImage ? (
                      <img
                        src={getImageUrl(p.image, i)}
                        alt={p.title}
                        loading="lazy"
                        decoding="async"
                        style={{ 
                          width: "100%", 
                          height: "100%", 
                          objectFit: "cover"
                        }}
                      />
                    ) : (
                      <div className="project-coming-soon">
                        <span className="project-coming-soon-dot" />
                        <span className="project-coming-soon-text">On Development</span>
                        <span className="project-coming-soon-sub">{p.title}</span>
                      </div>
                    )}

                    <span className="project-num">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>

                <div className="project-text-col" style={{ order: 2 }}>
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
            );
          })}
        </div>
      </section>
    </div>
  );
}