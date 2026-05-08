import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from "react-icons/fi";
import { Link } from "react-scroll";
import { profileData } from "../data/portfolioData";
import "../styles/Contacts.css";

export default function Contact() {
  const [form,   setForm]   = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mjgpdrwe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <>
      {/* ── CTA Banner ── */}
      <div className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-text">
              <div className="cta-eyebrow">✦ Limited Slots</div>
              <h2 className="cta-heading">
                Got a Vision? Let's Bring it to Life!
                <em> — Let's work together.</em>
              </h2>
            </div>
            <div className="cta-actions">
              <a href={`mailto:${profileData.email}`} className="btn btn-outline-white">
                Send Email
              </a>
              <Link to="contact" smooth duration={600} offset={-60}>
                <button className="btn btn-dark" style={{ background: "#fff", color: "#111" }}>
                  Book a Call
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Contact Form ── */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-layout">
            {/* Info */}
            <div className="contact-info">
              <div className="sec-label">Contact</div>
              <h2 className="sec-heading">Let's Work Together</h2>
              <p className="contact-info-desc">
                Terbuka untuk kolaborasi, proyek freelance, atau sekadar diskusi teknis. Jangan ragu untuk menghubungi saya.
              </p>

              <div className="contact-links">
                <a href={`mailto:${profileData.email}`} className="contact-link-row">
                  <span className="clr-icon"><FiMail /></span>
                  <div className="clr-text">
                    <span className="clr-label">Email</span>
                    <span className="clr-value">{profileData.email}</span>
                  </div>
                </a>
                <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="contact-link-row">
                  <span className="clr-icon"><FiGithub /></span>
                  <div className="clr-text">
                    <span className="clr-label">GitHub</span>
                    <span className="clr-value">Jelajahi Proyek Saya</span>
                  </div>
                </a>
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-row">
                  <span className="clr-icon"><FiLinkedin /></span>
                  <div className="clr-text">
                    <span className="clr-label">LinkedIn</span>
                    <span className="clr-value">Terhubung Profesional</span>
                  </div>
                </a>
                <span className="contact-link-row">
                  <span className="clr-icon"><FiMapPin /></span>
                  <div className="clr-text">
                    <span className="clr-label">Lokasi</span>
                    <span className="clr-value">{profileData.location}</span>
                  </div>
                </span>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrap">
              {status === "success" ? (
                <div className="form-success">
                  <div className="success-icon">✨</div>
                  <h4>Pesan Terkirim!</h4>
                  <p>Terima kasih! Saya akan segera membalas pesan Anda.</p>
                  <button className="btn btn-dark" onClick={() => setStatus("idle")}>Kirim Lagi</button>
                </div>
              ) : (
                <form className="form" onSubmit={onSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name">Nama</label>
                      <input id="name" name="name" type="text" placeholder="John Doe"
                        value={form.name} onChange={onChange} required />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" placeholder="john@example.com"
                        value={form.email} onChange={onChange} required />
                    </div>
                  </div>
                  <div className="form-field">
                    <label htmlFor="message">Pesan</label>
                    <textarea id="message" name="message" rows={5}
                      placeholder="Ceritakan proyek atau ide Anda..."
                      value={form.message} onChange={onChange} required />
                  </div>
                  {status === "error" && (
                    <div className="form-error-msg">Gagal mengirim. Coba lagi atau email langsung.</div>
                  )}
                  <button type="submit" className="btn btn-dark form-submit" disabled={status === "sending"}>
                    {status === "sending"
                      ? <span className="spinner" />
                      : <><span>Kirim Pesan</span><FiSend /></>
                    }
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
