import { motion } from "framer-motion";

const images = [
  { src: "/images/ob/work-1.jpg", alt: "OB project 1" },
  { src: "/images/ob/work-2.jpg", alt: "OB project 2" },
  { src: "/images/ob/work-3.jpg", alt: "OB project 3" },
];

export default function FeaturedWork() {
  return (
    <section id="work" style={{ background: "#F3ECE1", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", marginBottom: "2rem" }}
        >
          Featured work
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ overflow: "hidden", aspectRatio: "4 / 5", background: "#0E0D0C11" }}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
