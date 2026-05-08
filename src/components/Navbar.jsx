import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { profileData } from "../data/portfolioData";
import "../styles/Navbar.css";

const LINKS = [
  { label: "Home",      to: "hero" },
  { label: "About",     to: "about" },
  { label: "Works",     to: "works" },
  { label: "Journey",   to: "journey" },
  { label: "Contact",   to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          <Link to="hero" smooth duration={600} className="nav-logo" onClick={() => setOpen(false)}>
            {profileData.name.split(" ")[0]}.
          </Link>

          <ul className="nav-links">
            {LINKS.map(l => (
              <li key={l.to}>
                <Link to={l.to} smooth duration={600} offset={-60}>{l.label}</Link>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <a href={`mailto:${profileData.email}`} className="nav-hire">Hire Me</a>
            <button className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(v => !v)} aria-label="menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`nav-mobile ${open ? "open" : ""}`}>
        {LINKS.map(l => (
          <Link key={l.to} to={l.to} smooth duration={600} offset={-60} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
