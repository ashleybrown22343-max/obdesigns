import { motion } from "framer-motion";

export default function PaintStory() {
  return (
    <section style={{ background: "#FFFFFF", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gap: "2rem", gridTemplateColumns: "1fr", alignItems: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", marginBottom: "1rem", color: "var(--black)" }}>
            New Wave Paint
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.7, color: "rgba(14, 13, 12, 0.8)", maxWidth: "40rem" }}>
            We manufacture our own emulsion paint under the New Wave name, and use that same
            product on our own finishing projects — the manufacturing side gives us direct,
            practical insight into how our paint performs in real interiors and exteriors.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ aspectRatio: "16 / 9", overflow: "hidden", background: "var(--off-white)", border: "4px solid var(--gold)" }}
        >
          <img
            src="/images/ob/paint-1.jpg"
            alt="New Wave Paint product"
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
