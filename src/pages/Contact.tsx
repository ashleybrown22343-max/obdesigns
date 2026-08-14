import { business } from "../data/business";
import { MapPin, Phone, Mail, Clock, Facebook, Globe, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <div style={{ 
      backgroundColor: "#000000", 
      color: "#FEFEFE", 
      minHeight: "100vh",
      padding: "4rem 1.5rem",
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "3rem",
        alignItems: "start",
      }}>
        {/* Left Column – Contact Info */}
        <div>
          {/* Page Title */}
          <h1 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: 700,
            marginBottom: "0.5rem",
            letterSpacing: "-0.02em",
          }}>
            Get in touch
          </h1>
          <div style={{
            width: "60px",
            height: "4px",
            background: "#F1CD50",
            marginBottom: "2rem",
          }} />

          <p style={{ 
            fontSize: "1.1rem", 
            color: "#D0C8C0", 
            maxWidth: "480px", 
            marginBottom: "2.5rem",
            lineHeight: 1.7,
          }}>
            We're here to help with your interior design, painting, and finishing needs.
            Reach out anytime – we respond within 24 hours.
          </p>

          {/* Contact Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Address */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <MapPin size={22} color="#F1CD50" style={{ marginTop: "0.2rem" }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#F1CD50", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Location
                </div>
                <p style={{ margin: 0, color: "#FEFEFE" }}>{business.address}</p>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <Phone size={22} color="#F1CD50" style={{ marginTop: "0.2rem" }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#F1CD50", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Call or WhatsApp
                </div>
                <p style={{ margin: 0 }}>
                  <a href={`tel:+${business.phoneWhatsApp}`} style={{ color: "#FEFEFE", textDecoration: "none", borderBottom: "1px solid rgba(241, 205, 80, 0.3)" }}>
                    {business.phoneDisplay}
                  </a>
                  {" · "}
                  <a href={`https://wa.me/${business.phoneWhatsApp}`} target="_blank" rel="noreferrer" style={{ color: "#F1CD50", textDecoration: "none", fontWeight: 500 }}>
                    WhatsApp
                    <ExternalLink size={14} style={{ marginLeft: "4px", verticalAlign: "middle" }} />
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <Mail size={22} color="#F1CD50" style={{ marginTop: "0.2rem" }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#F1CD50", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Email
                </div>
                <p style={{ margin: 0 }}>
                  <a href={`mailto:${business.email}`} style={{ color: "#FEFEFE", textDecoration: "none", borderBottom: "1px solid rgba(241, 205, 80, 0.3)" }}>
                    {business.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Service Area */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <Globe size={22} color="#F1CD50" style={{ marginTop: "0.2rem" }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#F1CD50", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Service Area
                </div>
                <p style={{ margin: 0, color: "#D0C8C0" }}>{business.serviceArea}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ marginTop: "2.5rem", display: "flex", gap: "1.5rem" }}>
            <a href={business.social.facebook} target="_blank" rel="noreferrer" style={{ color: "#FEFEFE", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", textDecoration: "none", borderBottom: "1px solid rgba(241, 205, 80, 0.2)" }}>
              <Facebook size={18} color="#F1CD50" /> Facebook
            </a>
            <a href={business.social.googleBusiness} target="_blank" rel="noreferrer" style={{ color: "#FEFEFE", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", textDecoration: "none", borderBottom: "1px solid rgba(241, 205, 80, 0.2)" }}>
              <Globe size={18} color="#F1CD50" /> Google Business
            </a>
            {/* Instagram placeholder */}
            <span style={{ color: "#8A8580", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
              <span style={{ opacity: 0.5 }}>📸</span> Instagram (coming soon)
            </span>
          </div>
        </div>

        {/* Right Column – Opening Hours & Map */}
        <div>
          {/* Opening Hours */}
          <div style={{ 
            backgroundColor: "#1A1A1A", 
            padding: "2rem", 
            borderRadius: "4px",
            border: "1px solid #2A2A2A",
          }}>
            <h2 style={{ 
              fontFamily: "'Fraunces', serif", 
              fontSize: "1.4rem",
              margin: "0 0 0.5rem 0",
              color: "#F1CD50",
            }}>
              Opening Hours
            </h2>
            <div style={{
              width: "40px",
              height: "3px",
              background: "#F1CD50",
              marginBottom: "1.5rem",
            }} />
            <ul style={{ 
              listStyle: "none", 
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}>
              {business.hours.map((h) => (
                <li key={h.day} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #2A2A2A",
                  paddingBottom: "0.5rem",
                  fontSize: "0.95rem",
                }}>
                  <span style={{ fontWeight: 500, color: "#D0C8C0" }}>{h.day}</span>
                  <span style={{ color: "#FEFEFE", fontWeight: 400 }}>{h.time}</span>
                </li>
              ))}
            </ul>
            <p style={{ 
              marginTop: "1.5rem", 
              fontSize: "0.85rem", 
              color: "#8A8580",
              fontStyle: "italic",
            }}>
              * Closed on Sundays
            </p>
          </div>

          {/* Map Embed – if you have a Google Maps link */}
          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", color: "#FEFEFE", marginBottom: "0.75rem" }}>
              Find us
            </h3>
            <div style={{ 
              backgroundColor: "#1A1A1A", 
              borderRadius: "4px", 
              overflow: "hidden",
              border: "1px solid #2A2A2A",
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3958.553855851476!2d3.4!3d6.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1740000000000"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OB Designs & Interiors location"
              ></iframe>
            </div>
            <p style={{ fontSize: "0.8rem", color: "#8A8580", marginTop: "0.5rem" }}>
              <a href={business.social.googleBusiness} target="_blank" rel="noreferrer" style={{ color: "#F1CD50", textDecoration: "none" }}>
                View on Google Business →
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
            }
