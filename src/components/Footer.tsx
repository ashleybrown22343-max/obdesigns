import { business } from "../data/business";

export default function Footer() {
  return (
    <footer style={{ background: "#0E0D0C", color: "#F3ECE199", padding: "2rem 1.5rem", fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1rem" }}>
        <span>{business.legalName}</span>
        <span>{business.phoneDisplay} · {business.email}</span>
      </div>
    </footer>
  );
}
