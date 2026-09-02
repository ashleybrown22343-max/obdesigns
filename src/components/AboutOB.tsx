import { motion } from "framer-motion";
import { aboutOB } from "../data/content";
import { business } from "../data/business";

export default function AboutOB() {
  return (
    <section id="about" style={{ background: "var(--black)", color: "var(--off-white)", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", marginBottom: "1.5rem", color: "var(--off-white)" }}
        >
          About OB
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.7, color: "rgba(243, 236, 225, 0.8)" }}
        >
          {aboutOB}
        </motion.p>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "var(--gold)", marginTop: "1.5rem" }}>
          {business.yearsActive} years active · {business.serviceArea}
        </p>
      </div>
    </section>
  );
}
