import { useState } from "react";
import { buildInquiryWhatsAppUrl } from "../lib/whatsapp";
import { business } from "../data/business";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import "../styles/consultation.css";

export default function Consultation() {
  useDocumentTitle("Book a Consultation | OB Designs & Interiors");

  const [form, setForm] = useState({ fullName: "", phone: "", location: "", serviceNeeded: "", description: "" });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const canSubmit = form.fullName.trim() !== "" && form.phone.trim() !== "" && form.serviceNeeded.trim() !== "";

  return (
    <div className="consultPage">
      <div className="consultGrid">
        <div className="consultIntro">
          <p className="eyebrow">Book a Consultation</p>
          <h1>Tell us about your project — we'll take it from there.</h1>
          <p>
            {business.legalName} handles painting, screeding, POP work, and full interior and
            exterior jobs nationwide. Share a few details and we'll follow up directly on
            WhatsApp to discuss scope, timeline, and pricing.
          </p>
          <ul className="consultPoints">
            <li>Owner personally reviews every consultation request</li>
            <li>{business.yearsActive} years of active service</li>
            <li>{business.serviceArea}</li>
            <li>No obligation — just a conversation about your project</li>
          </ul>
        </div>

        <div className="consultForm">
          <h2>Project details</h2>
          <div className="fieldGroup">
            <div>
              <label>Full name</label>
              <input value={form.fullName} onChange={update("fullName")} placeholder="Your name" />
            </div>
            <div>
              <label>Phone number</label>
              <input value={form.phone} onChange={update("phone")} placeholder="080..." />
            </div>
            <div>
              <label>Project location</label>
              <input value={form.location} onChange={update("location")} placeholder="City, State" />
            </div>
            <div>
              <label>Service needed</label>
              <input value={form.serviceNeeded} onChange={update("serviceNeeded")} placeholder="Painting, Screeding, POP Work, Interior Job, Exterior Job..." />
            </div>
            <div>
              <label>Tell us more</label>
              <textarea value={form.description} onChange={update("description")} placeholder="Brief description of your project" />
            </div>
          </div>

          <a className={`consultSubmit ${canSubmit ? "" : "disabled"}`} href={canSubmit ? buildInquiryWhatsAppUrl(form) : undefined} target="_blank" rel="noreferrer">
            {canSubmit ? "Send via WhatsApp" : "Fill in name, phone & service"}
          </a>
        </div>
      </div>
    </div>
  );
}
