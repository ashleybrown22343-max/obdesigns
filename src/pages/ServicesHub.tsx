import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicesDetail } from "../data/servicesDetail";
import { useSEO } from "../lib/useDocumentTitle";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/services.css";

export default function ServicesHub() {
  useSEO({
    title: "Our Services | OB Designs & Interiors",
    description:
      "Painting, interior design, POP ceiling installation, exterior wall screeding, and New Wave paint — every service OB Designs & Interiors LTD provides across Nigeria.",
  });

  return (
    <div className="servicesPage">
      <div className="servicesHero">
        <p className="eyebrow">Our Services</p>
        <div className="heroAccentLine" />
        <h1>What We Do</h1>
        <p>From flawless interior painting to durable exterior wall screeding, we deliver high-end finishing across Mowe, Lagos, and nationwide in Nigeria.</p>
      </div>

      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Services" }]} />

      <div className="servicesGrid">
        {servicesDetail.map((s) => (
          <Link
            key={s.slug}
            to={`/${s.slug}`}
            className="serviceCard"
          >
            <div className="serviceCardContent">
              <h2 className="serviceCardTitle">{s.heading}</h2>
              <p className="serviceCardDesc">{s.intro}</p>
            </div>
            <div className="serviceCardBtn">
              View Details <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
