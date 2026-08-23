import { Link } from "react-router-dom";
import { business } from "../data/business";

export default function StickyCTA() {
  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 60, display: "flex", fontFamily: "Inter, sans-serif", fontSize: "0.85rem", boxShadow: "0 -8px 20px -12px #0E0D0C55" }}>
      <Link to="/consultation" style={{ flex: 1, textAlign: "center", background: "#B7913C", color: "#0E0D0C", padding: "0.9rem", textDecoration: "none", fontWeight: 600 }}>
        Request a Free Quote
      </Link>
      <a href={`https://wa.me/${business.phoneWhatsApp}`} target="_blank" rel="noreferrer" style={{ flex: 1, textAlign: "center", background: "#0E0D0C", color: "#F3ECE1", padding: "0.9rem", textDecoration: "none" }}>
        WhatsApp Us
      </a>
    </div>
  );
}
