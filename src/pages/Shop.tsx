import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { buildOrderWhatsAppUrl } from "../lib/whatsapp";

export default function Shop() {
  const { lines, addItem, removeItem, itemCount } = useCart();

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Shop</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: "0.75rem" }}>
            {p.name} — {p.price !== null ? `₦${p.price.toLocaleString("en-NG")}` : "price on request"}{" "}
            <button onClick={() => addItem(p)}>Add to cart</button>
          </li>
        ))}
      </ul>

      <h2>Cart ({itemCount})</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {lines.map((l) => (
          <li key={l.productId}>
            {l.name} x{l.quantity}{" "}
            <button onClick={() => removeItem(l.productId)}>Remove</button>
          </li>
        ))}
      </ul>

      {lines.length > 0 && (
        <a href={buildOrderWhatsAppUrl(lines)} target="_blank" rel="noreferrer">
          Order via WhatsApp
        </a>
      )}
    </div>
  );
}
