// ============================================================
// FILE: src/components/Contact.jsx
// FUNGSI: Formulir kontak sederhana + info kontak.
// ============================================================

import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from "react-icons/fi";
import { profileData } from "../data/portfolioData";
import "../styles/Contacts.css"; // Fixed import

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mjgpdrwe", {
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
      {/* Decorative Background Elements */}
      <div className="contact-blob blob-1"></div>
      <div className="contact-blob blob-2"></div>
      
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="contact-header animate-fadeInUp">
          <h2 className="section-title">
            Mari berkolaborasi <span>Bersama</span>
          </h2>
          <p className="section-subtitle">jangan ragu untuk menyapa</p>
        </div>

        <div className="contact-inner">
          {/* ===== Kiri: Info Kontak ===== */}
          <div className="contact-info animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <div className="info-card">
              <h3>Mari Terhubung!</h3>
              <p>
                Saya terbuka untuk peluang kerja sama, diskusi teknis,
                atau sekadar ngobrol seputar teknologi. Jangan ragu untuk
                menghubungi saya melalui form di samping atau kontak di bawah.
              </p>

              <div className="contact-detail">
                <a href={`mailto:${profileData.email}`} className="contact-detail-item">
                  <span className="contact-detail-icon"><FiMail /></span>
                  <div className="contact-detail-text">
                     <span className="contact-label">Email</span>
                     <span className="contact-value">{profileData.email}</span>
                  </div>
                </a>
                <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                  <span className="contact-detail-icon"><FiGithub /></span>
                  <div className="contact-detail-text">
                     <span className="contact-label">GitHub</span>
                     <span className="contact-value">Jelajahi Projek Saya</span>
                  </div>
                </a>
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                  <span className="contact-detail-icon"><FiLinkedin /></span>
                  <div className="contact-detail-text">
                     <span className="contact-label">LinkedIn</span>
                     <span className="contact-value">Mari Terhubung Profesional</span>
                  </div>
                </a>
                <span className="contact-detail-item">
                  <span className="contact-detail-icon"><FiMapPin /></span>
                  <div className="contact-detail-text">
                     <span className="contact-label">Lokasi</span>
                     <span className="contact-value">{profileData.location}</span>
                  </div>
                </span>
              </div>
            </div>
          </div>

          {/* ===== Kanan: Form ===== */}
          <div className="contact-form-wrapper animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            {status === "success" ? (
              <div className="form-success">
                <div className="success-icon-wrapper">
                  <span className="success-icon">✨</span>
                </div>
                <h4>Pesan Terkirim!</h4>
                <p>Terima kasih telah menghubungi, saya akan segera membalas pesan Anda.</p>
                <button className="btn-outline" onClick={() => setStatus("idle")}>Kirim Pesan Lainnya</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder=" "
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="name">Nama Lengkap</label>
                    <div className="input-focus-border"></div>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder=" "
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Alamat Email</label>
                    <div className="input-focus-border"></div>
                  </div>
                </div>

                <div className="form-group textarea-group">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="message">Tuliskan pesan Anda di sini...</label>
                  <div className="input-focus-border"></div>
                </div>

                {status === "error" && (
                  <div className="form-error">
                    <p>Ups! Terjadi kesalahan. Coba lagi atau email langsung.</p>
                  </div>
                )}

                <button
                  type="submit"
                  className={`btn-primary form-submit ${status === "sending" ? "sending" : ""}`}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                      <span className="spinner"></span>
                  ) : (
                    <>
                      <span>Kirim Pesan</span>
                      <FiSend className="send-icon" />
                    </>
                  )}
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