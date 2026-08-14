import { business } from "../data/business";

export default function Contact() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Contact</h1>
      <p>{business.address}</p>
      <p>{business.phoneDisplay}</p>
      <p>{business.email}</p>
    </div>
  );
}
