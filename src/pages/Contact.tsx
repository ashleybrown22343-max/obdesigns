import { business } from "../data/business";

export default function Contact() {
  return (
    <div style={{ padding: "2rem 1.5rem", fontFamily: "Inter, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontFamily: "Fraunces, serif" }}>Contact</h1>
      <p>{business.address}</p>
      <p>
        <a href={`tel:+${business.phoneWhatsApp}`}>{business.phoneDisplay}</a> ·{" "}
        <a href={`https://wa.me/${business.phoneWhatsApp}`} target="_blank" rel="noreferrer">WhatsApp</a>
      </p>
      <p>
        <a href={`mailto:${business.email}`}>{business.email}</a>
      </p>
      <p>{business.serviceArea}</p>

      <h2 style={{ marginTop: "2rem" }}>Opening hours</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {business.hours.map((h) => (
          <li key={h.day}>{h.day}: {h.time}</li>
        ))}
      </ul>

      <h2 style={{ marginTop: "2rem" }}>Find us online</h2>
      <p>
        <a href={business.social.facebook} target="_blank" rel="noreferrer">Facebook</a> ·{" "}
        <a href={business.social.googleBusiness} target="_blank" rel="noreferrer">Google Business</a>
      </p>
    </div>
  );
}
