import { motion } from "framer-motion";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" style={{ background: "#FFFFFF", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", marginBottom: "2.5rem" }}
        >
          Services
        </motion.h2>

        <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {services.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ borderTop: "1px solid #0E0D0C22", paddingTop: "1.25rem" }}
            >
              <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "1.1rem", marginBottom: "0.75rem" }}>
                {group.group}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontFamily: "Inter, sans-serif", color: "#0E0D0Ccc", fontSize: "0.9rem", lineHeight: 1.8 }}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
