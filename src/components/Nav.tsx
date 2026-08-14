import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Nav() {
  const { itemCount } = useCart();

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "#F3ECE1", borderBottom: "1px solid #0E0D0C1a" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "1rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Inter, sans-serif" }}>
        <Link to="/" style={{ fontFamily: "Fraunces, serif", fontWeight: 600, color: "#0E0D0C", textDecoration: "none" }}>
          OB Designs
        </Link>
        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center", fontSize: "0.9rem" }}>
          <Link to="/projects" style={{ color: "#0E0D0C", textDecoration: "none" }}>Projects</Link>
          <Link to="/shop" style={{ color: "#0E0D0C", textDecoration: "none" }}>
            Shop{itemCount > 0 ? ` (${itemCount})` : ""}
          </Link>
          <Link to="/contact" style={{ color: "#0E0D0C", textDecoration: "none" }}>Contact</Link>
          <Link
            to="/consultation"
            style={{ background: "#0E0D0C", color: "#F3ECE1", padding: "0.6rem 1.1rem", textDecoration: "none", fontSize: "0.85rem" }}
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
