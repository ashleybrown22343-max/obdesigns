import { motion } from "framer-motion";

const steps = ["Consultation", "Site / Needs Assessment", "Design & Planning", "Execution", "Final Delivery"];

export default function Process() {
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
          Our process
        </motion.h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center", fontFamily: "Inter, sans-serif" }}>
          {steps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <span style={{ padding: "0.5rem 1rem", background: i % 2 === 0 ? "var(--red)" : "var(--black)", color: "var(--off-white)", fontSize: "0.85rem" }}>
                {step}
              </span>
              {i < steps.length - 1 && <span style={{ color: "rgba(14, 13, 12, 0.4)" }}>→</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
                }
