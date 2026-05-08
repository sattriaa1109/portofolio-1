import { useState } from "react";
import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Projects   from "./components/Projects";
import Education  from "./components/Education";
import Contact    from "./components/Contact";
import Preloader  from "./components/Preloader";
import SmoothScroll from "./components/SmoothScroll";
import { profileData } from "./data/portfolioData";
import "./styles/App.css";

export default function App() {
  const [done, setDone] = useState(false);

  return (
    <>
      {!done && <Preloader onComplete={() => setDone(true)} />}

      <SmoothScroll>
        <div style={{ opacity: done ? 1 : 0, transition: "opacity 0.4s cubic-bezier(0.25,0.1,0.25,1)" }}>
          <Navbar />

          <main>
            <Hero isLoaded={done} />
            <About />
            <Projects />
            <Education />
            <Contact />
          </main>

          {/* Footer */}
          <footer style={{
            background: "var(--charcoal)",
            padding: "var(--sp-6) 0 var(--sp-4)",
          }}>
            <div className="container">
              <a
                href={`mailto:${profileData.email}`}
                style={{
                  display: "block",
                  fontFamily: "var(--f-serif)",
                  fontSize: "clamp(1.25rem, 3.5vw, 3rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.04em",
                  color: "var(--tw)",
                  textDecoration: "none",
                  textAlign: "center",
                  marginBottom: "var(--sp-5)",
                  transition: "opacity var(--t-base) var(--ease)",
                  lineHeight: 1.1,
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.55"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                {profileData.email}
              </a>

              <div style={{ height: "1px", background: "var(--border-dk)", marginBottom: "var(--sp-3)" }} />

              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "var(--sp-2)",
              }}>
                <span style={{
                  fontFamily: "var(--f-sans)",
                  fontSize: "0.5625rem",
                  color: "var(--tw3)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>
                  © {new Date().getFullYear()} {profileData.name}
                </span>
                <div style={{ display: "flex", gap: "var(--sp-3)" }}>
                  {[
                    { label: "GitHub",   href: profileData.github },
                    { label: "LinkedIn", href: profileData.linkedin },
                    { label: "Email",    href: `mailto:${profileData.email}` },
                  ].map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--f-sans)",
                        fontSize: "0.5625rem",
                        color: "var(--tw3)",
                        textDecoration: "none",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        transition: "color var(--t-fast) var(--ease)",
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = "var(--tw)"}
                      onMouseLeave={e => e.currentTarget.style.color = "var(--tw3)"}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </SmoothScroll>
    </>
  );
}
