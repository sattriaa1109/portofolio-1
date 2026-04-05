// ============================================================
// FILE: src/App.jsx
// FUNGSI: Komponen ROOT — merakit semua bagian/komponen menjadi
//         satu halaman website yang utuh.
//         Urutan komponen di sini = urutan yang terlihat di website.
// ============================================================

import Navbar    from "./components/Navbar";
import Hero      from "./components/Hero";
import Skills    from "./components/Skills";
import Education from "./components/Education";
import Projects  from "./components/Projects";
import Contact   from "./components/Contact";

// Import CSS global (warna, font, reset, utilitas)
import "./styles/App.css";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Navbar — selalu di atas, sticky */}
      <Navbar />

      {/* Konten Utama — urutan ini = urutan scroll */}
      <main>
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <p>
            Dibuat dengan <span>❤️</span> menggunakan{" "}
            <span>React + Vite</span>
          </p>
          <p>
            &copy; {currentYear} — Semua hak cipta dilindungi
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;