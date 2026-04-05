// ============================================================
// FILE: src/components/Contact.jsx
// FUNGSI: Formulir kontak sederhana + info kontak.
//         Form menggunakan Formspree (gratis, tanpa backend).
// ============================================================

import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from "react-icons/fi";
import { profileData } from "../data/portfolioData";
import "../styles/components.css";

function Contact() {
  // State untuk menyimpan isi form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // State untuk status pengiriman
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  // Handler: update state saat input berubah
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler: kirim form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Cegah reload halaman
    setStatus("sending");

    // === CARA PAKAI FORMSPREE ===
    // 1. Daftar gratis di https://formspree.io
    // 2. Buat form baru, dapatkan endpoint seperti:
    //    https://formspree.io/f/xyzabc12
    // 3. Ganti URL di bawah ini dengan endpoint milikmu

    try {
      const response = await fetch("https://formspree.io/f/GANTI_DENGAN_ID_KAMU", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">
          Hubungi <span>Saya</span>
        </h2>
        <p className="section-subtitle">mari berkolaborasi</p>

        <div className="contact-inner">
          {/* ===== Kiri: Info Kontak ===== */}
          <div className="contact-info">
            <h3>Mari Terhubung!</h3>
            <p>
              Saya terbuka untuk peluang kerja sama, diskusi teknis,
              atau sekadar ngobrol seputar teknologi. Jangan ragu untuk
              menghubungi saya melalui form ini atau kontak di bawah.
            </p>

            <div className="contact-detail">
              <a href={`mailto:${profileData.email}`} className="contact-detail-item">
                <span className="contact-detail-icon"><FiMail /></span>
                {profileData.email}
              </a>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                <span className="contact-detail-icon"><FiGithub /></span>
                GitHub
              </a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                <span className="contact-detail-icon"><FiLinkedin /></span>
                LinkedIn
              </a>
              <span className="contact-detail-item">
                <span className="contact-detail-icon"><FiMapPin /></span>
                {profileData.location}
              </span>
            </div>
          </div>

          {/* ===== Kanan: Form ===== */}
          <div className="contact-form-wrapper">
            {/* Tampilkan pesan sukses jika form terkirim */}
            {status === "success" ? (
              <div className="form-success">
                <span className="success-icon">✅</span>
                <p>Pesan terkirim! Terima kasih, saya akan segera membalas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Alamat Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Halo, saya ingin bertanya tentang..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {status === "error" && (
                  <p style={{ color: "#f87171", fontSize: "0.85rem", marginBottom: "12px" }}>
                    Ups! Terjadi kesalahan. Coba lagi atau email langsung.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-primary form-submit"
                  disabled={status === "sending"}
                >
                  <FiSend />
                  {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;