// ============================================================
// FILE: src/components/Navbar.jsx
// FUNGSI: Navigasi sticky di atas halaman, dengan smooth scroll
//         dan hamburger menu untuk tampilan mobile.
// ============================================================

import { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Library untuk smooth scroll
import "../styles/Navbar.css";

// Daftar menu navigasi
const NAV_LINKS = [
  { label: "Beranda",    to: "hero" },
  { label: "Keahlian",  to: "skills" },
  { label: "Pendidikan",to: "education" },
  { label: "Proyek",    to: "projects" },
  { label: "Kontak",    to: "contact" },
];

function Navbar() {
  // State: apakah halaman sudah di-scroll?
  const [scrolled, setScrolled] = useState(false);
  // State: apakah hamburger menu terbuka? (untuk mobile)
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect: pasang event listener scroll saat komponen muncul
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup: hapus listener saat komponen dihancurkan
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="hero" smooth duration={600} className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-bracket">&lt;</span>
          DevPortfolio
          <span className="logo-bracket">/&gt;</span>
        </Link>

        {/* Menu Desktop */}
        <ul className="navbar-menu">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-70}
                className="nav-link"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Tombol Hamburger (muncul di mobile) */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menu Mobile (muncul saat hamburger diklik) */}
      <div className={`navbar-mobile ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth={true}
            duration={600}
            offset={-70}
            className="nav-link"
            onClick={() => setMenuOpen(false)} // Tutup menu saat item diklik
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;