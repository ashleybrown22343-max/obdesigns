import { useState } from "react";
import { buildInquiryWhatsAppUrl } from "../lib/whatsapp";

export default function ProjectConsultation() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    location: "",
    serviceNeeded: "",
    description: "",
  });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid #0E0D0C33",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.9rem",
    background: "#FFFFFF",
  };

  return (
    <section style={{ background: "#FFFFFF", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", marginBottom: "0.75rem" }}>
          Request a project consultation
        </h2>
        <p style={{ fontFamily: "Inter, sans-serif", color: "#0E0D0C99", marginBottom: "2rem", fontSize: "0.9rem" }}>
          Tell us about your project and we'll follow up on WhatsApp.
        </p>

        <div style={{ display: "grid", gap: "0.9rem" }}>
          <input style={inputStyle} placeholder="Full name" value={form.fullName} onChange={update("fullName")} />
          <input style={inputStyle} placeholder="Phone number" value={form.phone} onChange={update("phone")} />
          <input style={inputStyle} placeholder="Project location" value={form.location} onChange={update("location")} />
          <input style={inputStyle} placeholder="Service needed" value={form.serviceNeeded} onChange={update("serviceNeeded")} />
          <textarea style={{ ...inputStyle, minHeight: "100px" }} placeholder="Brief project description" value={form.description} onChange={update("description")} />

          <a
            href={buildInquiryWhatsAppUrl(form)}
            target="_blank"
            rel="noreferrer"
            style={{ background: "#0E0D0C", color: "#F3ECE1", textAlign: "center", padding: "0.9rem", textDecoration: "none", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}
          >
            Send via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
