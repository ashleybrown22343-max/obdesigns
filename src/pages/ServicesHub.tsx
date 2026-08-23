import { Link } from "react-router-dom";
import { servicesDetail } from "../data/servicesDetail";
import { useSEO } from "../lib/useDocumentTitle";
import Breadcrumb from "../components/Breadcrumb";

export default function ServicesHub() {
  useSEO({
    title: "Our Services | OB Designs & Interiors",
    description:
      "Painting, interior design, POP ceiling installation, screeding, exterior finishing, and New Wave paint — every service OB Designs & Interiors LTD provides across Nigeria.",
  });

  return (
    <div style={{ background: "#F3ECE1", minHeight: "100vh" }}>
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem 1.5rem 5rem" }}>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2rem, 4.5vw, 3rem)", marginBottom: "2rem" }}>Our Services</h1>
        <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {servicesDetail.map((s) => (
            <Link
              key={s.slug}
              to={`/${s.slug}`}
              style={{ display: "block", background: "#FAF7F2", border: "1px solid #0E0D0C14", padding: "1.5rem", textDecoration: "none", color: "#0E0D0C" }}
            >
              <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "1.15rem", margin: "0 0 0.5rem" }}>{s.heading}</h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "#0E0D0C88", margin: 0 }}>
                {s.intro}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
