import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Globe, Clock } from "lucide-react";
import { business } from "../data/business";
import { useSEO } from "../lib/useDocumentTitle";
import "../styles/contact.css";

export default function Contact() {
  useSEO({
    title: "Contact Us | OB Designs & Interiors",
    description:
      "Get in touch with OB Designs & Interiors — call, WhatsApp, or visit us in Mowe, Ogun State. Nationwide service and delivery.",
  });

  return (
    <div className="contactPage">
      <div className="contactHero">
        <p className="eyebrow">Contact</p>
        <div className="heroAccentLine" />
        <h1>Let's talk about your project</h1>
        <p>
          Reach out directly, or send a message on WhatsApp — {business.legalName} serves
          clients nationwide, with {business.yearsActive} years of active work in interiors,
          painting and finishing.
        </p>
      </div>

      <div className="contactGrid">
        <div className="panel lightPanel">
          <p className="panelLabel">Get in touch</p>
          <ul className="contactList">
            <li>
              <a className="contactRow" href={`tel:+${business.phoneWhatsApp}`}>
                <span className="iconWrap"><Phone size={17} strokeWidth={1.5} /></span>
                <span><span className="label">Call</span><span className="value">{business.phoneDisplay}</span></span>
              </a>
            </li>
            <li>
              <a className="contactRow" href={`https://wa.me/${business.phoneWhatsApp}`} target="_blank" rel="noreferrer">
                <span className="iconWrap"><MessageCircle size={17} strokeWidth={1.5} /></span>
                <span><span className="label">WhatsApp</span><span className="value">Message us directly</span></span>
              </a>
            </li>
            <li>
              <a className="contactRow" href={`mailto:${business.email}`}>
                <span className="iconWrap"><Mail size={17} strokeWidth={1.5} /></span>
                <span><span className="label">Email</span><span className="value">{business.email}</span></span>
              </a>
            </li>
            <li>
              <div className="contactRow">
                <span className="iconWrap"><MapPin size={17} strokeWidth={1.5} /></span>
                <span><span className="label">Address</span><span className="value">{business.address}</span></span>
              </div>
            </li>
          </ul>

          <p className="panelLabel">Find us online</p>
          <div className="socialRow">
            <a className="socialIcon" href={business.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} strokeWidth={1.5} />
            </a>
            {business.social.instagram && (
              <a className="socialIcon" href={business.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
            )}
            <a className="socialIcon" href={business.social.googleBusiness} target="_blank" rel="noreferrer" aria-label="Google Business Profile">
              <Globe size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="panel darkPanel">
          <p className="panelLabel"><Clock size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Opening hours</p>
          <ul className="hoursList">
            {business.hours.map((h) => (
              <li key={h.day} className={`hoursRow ${h.time === "Closed" ? "closed" : ""}`}>
                <span className="day">{h.day}</span>
                <span className="time">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="serviceNote">{business.serviceArea}</p>
        </div>
      </div>

      {/* Custom CTA Section - Breaks the template feel */}
      <div className="contactCtaBanner">
        <div className="contactCtaInner">
          <h2>Prefer a quick quote?</h2>
          <p>Send us a message on WhatsApp and we’ll respond with pricing details or schedule a site visit.</p>
          <div className="contactCtaButtons">
            <a href={`https://wa.me/${business.phoneWhatsApp}`} target="_blank" rel="noreferrer" className="ctaBtnWhatsapp">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <Link to="/consultation" className="ctaBtnConsultation">
              Request a Free Quote →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
              }
