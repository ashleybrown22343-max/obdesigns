import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function FeaturedWork() {
  const preview = projects.slice(0, 3);

  return (
    <section id="work" style={{ background: "#F3ECE1", padding: "4rem 1.5rem 5rem" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", margin: 0 }}>
            Featured work
          </motion.h2>
          <Link to="/projects" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#0E0D0C", textDecoration: "underline" }}>
            View all projects →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {preview.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ overflow: "hidden", aspectRatio: "4 / 5", background: "#0E0D0C11" }}>
              <motion.img src={p.image} alt={p.category} loading="lazy" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
