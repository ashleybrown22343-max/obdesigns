import { business } from "../data/business";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--black)",
        color: "rgba(243, 236, 225, 0.7)",
        padding: "2rem 1.5rem 6rem", // Added 6rem bottom padding to clear the StickyCTA area
        fontFamily: "Inter, sans-serif",
        fontSize: "0.85rem",
        borderTop: "3px solid var(--gold)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <span style={{ color: "var(--off-white)" }}>{business.legalName}</span>
        <span style={{ color: "var(--gold)" }}>
          {business.phoneDisplay} · {business.email}
        </span>
      </div>
    </footer>
  );
}
