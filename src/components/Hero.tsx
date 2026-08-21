import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { business } from "../data/business";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="heroSection">
      <img src="/images/ob/hero-1.jpg" alt="OB Designs & Interiors project" className="heroBg" />
      <div className="heroOverlay" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="heroContent"
      >
        <p className="heroEyebrow">Interiors · Painting · Finishing</p>

        <h1 className="heroTitle">
          Spaces designed to feel like <span className="accent">yours.</span>
        </h1>

        <div className="heroAccentLine" />

        <p className="heroSubtext">
          {business.legalName} delivers exceptional interior and exterior solutions with
          quality materials, careful execution, and personal supervision —{" "}
          {business.yearsActive} years active, {business.serviceArea.toLowerCase()}.
        </p>

        <div className="heroButtons">
          <Link to="/consultation" className="heroBtnPrimary">
            Book Consultation →
          </Link>
          <Link to="/shop" className="heroBtnSecondary">
            Shop Now
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
