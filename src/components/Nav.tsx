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
        <nav style={{ display: "flex", gap: "1.5rem", fontSize: "0.9rem" }}>
          <a href="/#work" style={{ color: "#0E0D0C", textDecoration: "none" }}>Work</a>
          <a href="/#services" style={{ color: "#0E0D0C", textDecoration: "none" }}>Services</a>
          <a href="/#about" style={{ color: "#0E0D0C", textDecoration: "none" }}>About</a>
          <Link to="/shop" style={{ color: "#0E0D0C", textDecoration: "none" }}>
            Shop{itemCount > 0 ? ` (${itemCount})` : ""}
          </Link>
          <Link to="/contact" style={{ color: "#0E0D0C", textDecoration: "none" }}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
