import { products, unitLabel } from "../data/products";
import { useCart } from "../context/CartContext";
import { buildOrderWhatsAppUrl } from "../lib/whatsapp";

export default function Shop() {
  const { lines, addItem, removeItem, incrementItem, decrementItem, itemCount } = useCart();

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Shop</h1>

      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "1rem" }}>
          <strong>{p.name}</strong>
          {p.variants.map((v) => (
            <div key={v.id}>
              {v.label} —{" "}
              {v.price !== null ? `₦${v.price.toLocaleString("en-NG")}${unitLabel(v.unit)}` : "price on request"}{" "}
              <button onClick={() => addItem(p, v)}>Add</button>
            </div>
          ))}
        </div>
      ))}

      <h2>Cart ({itemCount})</h2>
      {lines.map((l) => (
        <div key={l.variantId}>
          {l.productName} ({l.variantLabel}) x{l.quantity}{" "}
          <button onClick={() => decrementItem(l.variantId)}>-</button>
          <button onClick={() => incrementItem(l.variantId)}>+</button>
          <button onClick={() => removeItem(l.variantId)}>Remove</button>
        </div>
      ))}

      {lines.length > 0 && (
        <p>
          <a href={buildOrderWhatsAppUrl(lines)} target="_blank" rel="noreferrer">
            Order via WhatsApp
          </a>
        </p>
      )}
    </div>
  );
}
