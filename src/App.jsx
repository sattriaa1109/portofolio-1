import { useState } from "react";
import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Projects   from "./components/Projects";
import Education  from "./components/Education";
import Contact    from "./components/Contact";
import Certificate from "./components/Certificate";
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
            <Certificate />
            <Contact />
          </main>

          {/* Footer */}
          <footer style={{
            background: "var(--charcoal)",
            padding: "var(--sp-4) 0",
          }}>
            <div className="container">
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "var(--sp-2)",
              }}>
                {/* Kiri — nama */}
                <span style={{
                  fontFamily: "var(--f-sans)",
                  fontSize: "0.5625rem",
                  color: "var(--tw3)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>
                  © {new Date().getFullYear()} {profileData.name}
                </span>

                {/* Tengah — email */}
                <a
                  href={`mailto:${profileData.email}`}
                  style={{
                    fontFamily: "var(--f-sans)",
                    fontSize: "0.5625rem",
                    color: "var(--tw2)",
                    textDecoration: "none",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    transition: "color var(--t-fast) var(--ease)",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--tw)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--tw2)"}
                >
                  {profileData.email}
                </a>

                {/* Kanan — social links */}
                <div style={{ display: "flex", gap: "var(--sp-3)" }}>
                  {[
                    { label: "GitHub",   href: profileData.github },
                    { label: "LinkedIn", href: profileData.linkedin },
                  ].map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
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
