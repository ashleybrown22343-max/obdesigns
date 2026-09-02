import { Link } from "react-router-dom";
import { MapPin, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { useSEO } from "../lib/useDocumentTitle";
import { useSchema } from "../lib/useSchema";
import { realEstateProjects, realEstateServices } from "../data/realEstate";
import { business } from "../data/business";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/realEstate.css";

export default function RealEstate() {
  useSEO({
    title: "Real Estate Consultancy in Mowe | OB Designs & Interiors",
    description:
      "Buy residential plots, commercial land, and farmland in Mowe, Ogun State. Expert real estate consultancy by OB Designs & Interiors.",
  });

  useSchema({
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: business.legalName,
    telephone: `+${business.phoneWhatsApp}`,
    address: business.address,
    areaServed: "Mowe, Ogun State, Nigeria",
  });

  return (
    <div className="realEstatePage">
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Real Estate" }]} />

      <div className="realEstateHero">
        <p className="eyebrow">Real Estate Consultancy</p>
        <div className="heroAccentLine" />
        <h1>Buy Property & Land in Mowe with Trusted Experts</h1>
        <p>
          OB Designs & Interiors is your trusted real estate partner in Mowe, Ogun State. 
          We have vast knowledge of the best areas for farming, residential properties, and commercial plots, 
          ensuring you invest wisely in lands with genuine documents and high ROI.
        </p>
      </div>

      <div className="realEstateServiceSection">
        <h2>What We Offer</h2>
        <div className="realEstateServiceGrid">
          {realEstateServices.map((service, i) => (
            <div key={i} className="realEstateServiceCard">
              <CheckCircle2 size={18} color="var(--red)" />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="realEstateProjectsSection">
        <h2>Featured Estates & Lands</h2>
        {realEstateProjects.map((project) => (
          <div key={project.id} className="estateCard">
            <div className="estateImageWrap">
              <img src={project.image} alt={project.name} loading="lazy" />
            </div>
            <div className="estateContent">
              <h3 className="estateTitle">{project.name}</h3>
              <p className="estateLocation"><MapPin size={16} color="var(--red)" /> {project.location}</p>

              <div className="estateSizes">
                {project.sizes.map((size) => (
                  <div key={size.sqm} className="sizeBlock">
                    <h4 className="sizeHeading">{size.sqm}sqm</h4>
                    <div className="planList">
                      {size.plans.map((plan, i) => (
                        <div key={i} className="planRow">
                          <span>{plan.period}</span>
                          <span className="planPrice">{plan.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="estateFeatures">
                {project.features.map((feature, i) => (
                  <span key={i} className="featureTag">{feature}</span>
                ))}
              </div>

              <div className="estateCtaRow">
                <a href={`https://wa.me/${business.phoneWhatsApp}?text=Hello, I'm interested in ${project.name}`} target="_blank" rel="noreferrer" className="realEstateBtn whatsapp">
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
                <Link to="/consultation" className="realEstateBtn primary">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="realEstateBottomCta">
        <h2>Need advice on the best land in Mowe?</h2>
        <p>Let our expert team guide you to the perfect property investment.</p>
        <a href={`tel:+${business.phoneWhatsApp}`} className="realEstateCallBtn">
          <Phone size={16} /> Call {business.phoneDisplay}
        </a>
      </div>
    </div>
  );
                                              }
