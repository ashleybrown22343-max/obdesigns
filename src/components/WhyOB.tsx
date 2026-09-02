import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { whyOB } from "../data/content";

export default function WhyOB() {
  return (
    <section style={{ background: "var(--off-white)", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", marginBottom: "2rem", color: "var(--black)" }}
        >
          Why OB
        </motion.h2>

        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {whyOB.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
            >
              <CheckCircle2 size={18} color="var(--gold)" style={{ marginTop: "2px", flexShrink: 0 }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "rgba(14, 13, 12, 0.85)" }}>
                {point}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
      }
