import { Link } from "react-router-dom";
import { useDocumentTitle } from "../lib/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle({
    title: "Page not found | OB Designs & Interiors",
    description: "The page you're looking for doesn't exist. Return to the OB Designs homepage.",
  });

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "4rem 2rem",
        fontFamily: "Inter, sans-serif",
        background: "var(--off-white)",
      }}
    >
      <p
        style={{
          fontFamily: "Fraunces, serif",
          fontSize: "clamp(5rem, 15vw, 9rem)",
          color: "var(--red)",
          margin: 0,
          lineHeight: 1,
          fontWeight: 600,
        }}
      >
        404
      </p>
      
      <div style={{ width: "56px", height: "4px", background: "var(--gold)", margin: "1.5rem 0" }} />

      <h1
        style={{
          fontFamily: "Fraunces, serif",
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          color: "var(--black)",
          margin: "0 0 1rem",
        }}
      >
        Page not found
      </h1>
      
      <p style={{ color: "rgba(14, 13, 12, 0.6)", marginBottom: "2.5rem", maxWidth: "40ch", lineHeight: 1.7 }}>
        The page you're looking for doesn't exist. Let's get you back to exploring our beautiful projects.
      </p>
      
      <Link
        to="/"
        style={{
          background: "var(--red)",
          color: "var(--off-white)",
          padding: "1rem 2.25rem",
          textDecoration: "none",
          fontSize: "0.95rem",
          fontWeight: 600,
          transition: "background 0.2s ease, color 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--gold)";
          e.currentTarget.style.color = "var(--black)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--red)";
          e.currentTarget.style.color = "var(--off-white)";
        }}
      >
        Back to Home
      </Link>
    </div>
  );
      }
