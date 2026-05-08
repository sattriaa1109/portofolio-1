import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiGo, SiNodedotjs, SiDart, SiPostgresql, SiDocker, SiGit,
} from "react-icons/si";
import { educationData, hardSkills, softSkills } from "../data/portfolioData";
import TextReveal from "./TextReveal";
import "../styles/Education.css";

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP = {
  SiGo:         <SiGo />,
  SiNodedotjs:  <SiNodedotjs />,
  SiDart:       <SiDart />,
  SiPostgresql: <SiPostgresql />,
  SiDocker:     <SiDocker />,
  SiGit:        <SiGit />,
};

// Duplicate array for seamless infinite loop
const doubled = [...hardSkills, ...hardSkills];

// Soft skills split into two rows for opposite-direction marquees
const softRow1 = [...softSkills, ...softSkills, ...softSkills];
const softRow2 = [...softSkills, ...softSkills, ...softSkills];

export default function Education() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Journey rows stagger in
      gsap.utils.toArray(".journey-item").forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          x: -13,
          duration: 0.5,
          delay: i * 0.06,
          ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            once: true,
          },
        });
      });

      // Skills section fade in
      gsap.from(".skills-header", {
        opacity: 0,
        y: 21,
        duration: 0.6,
        ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 85%",
          once: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      {/* ── Journey / Education ── */}
      <section className="journey" id="journey">
        <div className="container">
          <div className="journey-layout">
            <div className="journey-left">
              <div className="sec-label">Experience</div>
              <h2 className="sec-heading">
                <TextReveal text="My Learning Journey" tag="span" />
              </h2>
              <p>
                Perjalanan akademik yang membentuk fondasi teknis saya sebagai
                backend developer.
              </p>
              <a href="#contact" className="btn btn-dark">
                Let's Talk
              </a>
            </div>

            <div className="journey-list">
              {educationData.map((edu) => (
                <div key={edu.id} className="journey-item">
                  <div>
                    <div className="ji-school">{edu.school}</div>
                    <div className="ji-major">{edu.major}</div>
                  </div>
                  <div className="ji-desc">{edu.description}</div>
                  <div>
                    <div className="ji-year">{edu.year}</div>
                    {edu.current ? (
                      <div className="ji-badge">
                        <span className="ji-badge-dot" />
                        Active
                      </div>
                    ) : (
                      <div className="ji-badge-past">Completed</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
