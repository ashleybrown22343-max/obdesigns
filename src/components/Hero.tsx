import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { business } from "../data/business";

export default function Hero() {
  return (
    <section style={{ background: "#0E0D0C", color: "#F3ECE1" }}>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "3rem 1.5rem",
          display: "grid",
          gap: "2rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#D4B472", marginBottom: "1rem" }}>
            {business.yearsActive} years active · {business.serviceArea}
          </p>
          <h1 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2rem, 6vw, 3.5rem)", lineHeight: 1.05, margin: 0 }}>
            Interiors, painting and finishing — done with care, built to last.
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", color: "#F3ECE1cc", maxWidth: "32rem", marginTop: "1.25rem" }}>
            OB Designs & Interiors brings interior design, painting, POP work and our own New Wave paint together under one roof.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
            <a href="#work" style={{ background: "#F3ECE1", color: "#0E0D0C", padding: "0.75rem 1.5rem", textDecoration: "none", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>
              View Our Work
            </a>
            <Link to="/shop" style={{ border: "1px solid #F3ECE155", color: "#F3ECE1", padding: "0.75rem 1.5rem", textDecoration: "none", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>
              Shop Paint & Finishes
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ aspectRatio: "4 / 3", overflow: "hidden", background: "#1A1816" }}
        >
          <img
            src="/images/ob/hero-1.jpg"
            alt="OB Designs & Interiors project"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
