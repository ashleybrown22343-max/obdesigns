import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { realEstateProjects } from "../data/realEstate";

export default function RealEstateFeature() {
  const project = realEstateProjects[0];
  if (!project) return null;

  return (
    <section style={{ background: "#FFFFFF", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", margin: 0, color: "var(--black)" }}>
            Real Estate & Property Investments
          </h2>
          <Link to="/real-estate" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "var(--red)", textDecoration: "underline" }}>
            View all properties →
          </Link>
        </div>

        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(14, 13, 12, 0.7)", marginBottom: "2rem", maxWidth: "60ch" }}>
          We are your trusted real estate experts in Mowe, Ogun State. From residential plots to commercial lands and farmland, we guide you to the best investments with valid documentation.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
          {[1, 2, 3, 4].map((imgNum) => (
            <div key={imgNum} style={{ overflow: "hidden", border: "2px solid transparent", transition: "border-color 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--gold)"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "transparent"}>
              <img src={`/images/ob/aviance-${imgNum}.jpg`} alt="Aviance Prosperity Estate" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link to="/real-estate" style={{ display: "inline-block", background: "var(--red)", color: "var(--off-white)", padding: "1rem 2.25rem", textDecoration: "none", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", fontWeight: 600 }}>
            Explore Real Estate Consultancy <ArrowRight size={16} style={{ verticalAlign: "middle", marginLeft: "6px" }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
