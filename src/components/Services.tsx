import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
          style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", marginBottom: "2.5rem", color: "var(--black)" }}
        >
          What We Do
        </motion.h2>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link 
                to={`/${s.slug}`} 
                style={{ 
                  display: "block", 
                  borderTop: "3px solid var(--red)", 
                  paddingTop: "1.1rem", 
                  textDecoration: "none", 
                  color: "inherit",
                  transition: "border-color 0.2s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderTopColor = "var(--gold)"}
                onMouseLeave={(e) => e.currentTarget.style.borderTopColor = "var(--red)"}
              >
                <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "1.15rem", margin: "0 0 0.5rem", color: "var(--black)" }}>{s.name}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: "rgba(14, 13, 12, 0.6)", margin: 0, lineHeight: 1.6 }}>{s.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
                }
