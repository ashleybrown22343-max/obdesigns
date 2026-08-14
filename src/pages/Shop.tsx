import { useState } from "react";
import { products, formatPrice, unitLabel } from "../data/products";
import { useCart } from "../context/CartContext";
import { buildOrderWhatsAppUrl } from "../lib/whatsapp";

export default function Shop() {
  const { lines, addItem, removeItem, incrementItem, decrementItem, itemCount } = useCart();
  const [order, setOrder] = useState({ fullName: "", phone: "", address: "", cityState: "" });

  const canCheckout = lines.length > 0 && order.fullName.trim() !== "" && order.phone.trim() !== "";

  return (
    <div style={{ padding: "2rem 1.5rem", fontFamily: "Inter, sans-serif", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ fontFamily: "Fraunces, serif" }}>Shop</h1>

      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "1.5rem" }}>
          <strong>{p.name}</strong>
          {p.variants.map((v) => (
            <div key={v.id} style={{ margin: "0.4rem 0" }}>
              {v.label} — {formatPrice(v.price)}{v.price !== null ? unitLabel(v.unit) : ""}{" "}
              <button onClick={() => addItem(p, v)}>Add</button>
            </div>
          ))}
        </div>
      ))}

      <h2>Cart ({itemCount})</h2>
      {lines.map((l) => (
        <div key={l.variantId} style={{ margin: "0.4rem 0" }}>
          {l.productName} ({l.variantLabel}) x{l.quantity}{" "}
          <button onClick={() => decrementItem(l.variantId)}>-</button>
          <button onClick={() => incrementItem(l.variantId)}>+</button>
          <button onClick={() => removeItem(l.variantId)}>Remove</button>
        </div>
      ))}

      {lines.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Your details</h2>
          <div style={{ display: "grid", gap: "0.6rem", maxWidth: "400px" }}>
            <input placeholder="Full name" value={order.fullName} onChange={(e) => setOrder((o) => ({ ...o, fullName: e.target.value }))} />
            <input placeholder="Phone number" value={order.phone} onChange={(e) => setOrder((o) => ({ ...o, phone: e.target.value }))} />
            <input placeholder="Delivery address" value={order.address} onChange={(e) => setOrder((o) => ({ ...o, address: e.target.value }))} />
            <input placeholder="City/State" value={order.cityState} onChange={(e) => setOrder((o) => ({ ...o, cityState: e.target.value }))} />
          </div>

          {canCheckout ? (
            <p style={{ marginTop: "1rem" }}>
              <a href={buildOrderWhatsAppUrl(order, lines)} target="_blank" rel="noreferrer">
                Order via WhatsApp
              </a>
            </p>
          ) : (
            <p style={{ marginTop: "1rem", color: "#0E0D0C88", fontSize: "0.85rem" }}>
              Enter your name and phone number to continue.
            </p>
          )}
        </div>
      )}
    </div>
  );
              }
