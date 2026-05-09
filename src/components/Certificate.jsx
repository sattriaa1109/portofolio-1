import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiExternalLink, FiDownload } from "react-icons/fi";
import { certificates, cvLink } from "../data/certificateData";
import TextReveal from "./TextReveal";
import "../styles/Certificate.css";

gsap.registerPlugin(ScrollTrigger);

export default function Certificate() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".cert-card").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 21,
          duration: 0.55,
          delay: i * 0.08,
          ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="certificate" id="certificate" ref={ref}>
      <div className="container">

        {/* Header row — title + CV button */}
        <div className="cert-header">
          <div>
            <div className="sec-label">Achievements</div>
            <h2 className="sec-heading" style={{ marginBottom: 0 }}>
              <TextReveal text="Certificates" tag="span" />
            </h2>
          </div>

          {/* CV Download button */}
          {cvLink ? (
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark cv-btn"
            >
              <FiDownload size={13} />
              Download CV
            </a>
          ) : (
            <button className="btn btn-outline cv-btn cv-btn-soon" disabled>
              <FiDownload size={13} />
              CV — Coming Soon
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="cert-grid">
          {certificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              title={`Buka ${cert.title}`}
            >
              {/* Image */}
              <div className="cert-img-wrap">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-img"
                />
                {/* Hover overlay */}
                <div className="cert-overlay">
                  <FiExternalLink size={20} />
                  <span>Lihat Sertifikat</span>
                </div>
              </div>

              {/* Footer */}
              <div className="cert-footer">
                <div>
                  <div className="cert-title">{cert.title}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                </div>
                <span className="cert-open">
                  <FiExternalLink size={13} />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
