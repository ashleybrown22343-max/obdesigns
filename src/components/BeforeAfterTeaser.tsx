import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { beforeAfterPairs } from "../data/beforeAfter";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function BeforeAfterTeaser() {
  const preview = beforeAfterPairs.slice(0, 3);
  if (preview.length === 0) return null;

  return (
    <section style={{ background: "#FFFFFF", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", margin: 0, color: "var(--black)" }}
          >
            See the transformation
          </motion.h2>
          <Link to="/projects?tab=before-after" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "var(--red)", textDecoration: "underline" }}>
            View all before & after →
          </Link>
        </div>

        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(14, 13, 12, 0.6)", marginBottom: "2rem", maxWidth: "40ch" }}>
          Drag the slider on any photo to see the real difference OB makes.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
          {preview.map((pair) => (
            <BeforeAfterSlider key={pair.id} before={pair.before} after={pair.after} />
          ))}
        </div>
      </div>
    </section>
  );
}
