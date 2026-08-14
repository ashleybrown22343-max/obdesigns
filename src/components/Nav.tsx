import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import "../styles/nav.css";

export default function Nav() {
  const { itemCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="navHeader">
      <div className="navInner">
        <Link to="/" className="navLogo" onClick={() => setOpen(false)}>
          OB Designs
        </Link>

        <nav className="navLinks">
          <Link to="/projects">Projects</Link>
          <Link to="/shop">Shop{itemCount > 0 ? ` (${itemCount})` : ""}</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/consultation" className="navCta">Book Consultation</Link>
        </nav>

        <button className="navToggle" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="navMobileMenu">
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/shop" onClick={() => setOpen(false)}>Shop{itemCount > 0 ? ` (${itemCount})` : ""}</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/consultation" className="navCta" onClick={() => setOpen(false)}>Book Consultation</Link>
        </div>
      )}
    </header>
  );
}
