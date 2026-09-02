import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Globe, ArrowUp, MessageCircle } from "lucide-react";
import { business } from "../data/business";
import "../styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Top CTA Banner */}
      <div className="footerCtaBanner">
        <div className="footerCtaInner">
          <h2 className="footerCtaTitle">Ready to transform your space?</h2>
          <p className="footerCtaText">Get a free, no-obligation quote today.</p>
          <Link to="/consultation" className="footerCtaBtn">Request a Free Quote →</Link>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="footerMain">
        <div className="footerGrid">
          
          {/* Brand Column */}
          <div className="footerCol brandCol">
            <div className="footerBrand">
              <img src="/images/ob/logo-1.jpg" alt="OB Designs & Interiors" className="footerLogo" />
              <span className="footerBrandName">{business.legalName}</span>
            </div>
            <p className="footerAbout">
              {business.yearsActive} years of active service in painting, screeding, POP, and full
              interior & exterior design. {business.serviceArea}.
            </p>
            <div className="footerSocials">
              <a href={business.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href={business.social.googleBusiness} target="_blank" rel="noreferrer" aria-label="Google Business Profile">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footerCol">
            <h3 className="footerHeading">Quick Links</h3>
            <ul className="footerLinks">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/consultation">Consultation</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footerCol">
            <h3 className="footerHeading">Our Services</h3>
            <ul className="footerLinks">
              <li><Link to="/painters-in-nigeria">Painting</Link></li>
              <li><Link to="/floor-screeding-nigeria">Screeding</Link></li>
              <li><Link to="/pop-ceiling-installation-nigeria">POP Installations</Link></li>
              <li><Link to="/interior-designers-in-nigeria">Interiors</Link></li>
              <li><Link to="/exterior-painting-nigeria">Exteriors</Link></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="footerCol">
            <h3 className="footerHeading">Get In Touch</h3>
            <ul className="footerContactList">
              <li>
                <MapPin size={16} className="icon" />
                <span>{business.address}</span>
              </li>
              <li>
                <Phone size={16} className="icon" />
                <a href={`tel:+${business.phoneWhatsApp}`}>{business.phoneDisplay}</a>
              </li>
              <li>
                <Mail size={16} className="icon" />
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </li>
              <li>
                <MessageCircle size={16} className="icon" />
                <a href={`https://wa.me/${business.phoneWhatsApp}`} target="_blank" rel="noreferrer">WhatsApp Us</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footerBottom">
        <div className="footerBottomInner">
          <p>© {currentYear} {business.legalName}. All rights reserved.</p>
          <button className="backToTop" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={16} /> Top
          </button>
        </div>
      </div>
    </footer>
  );
                    }
