import { useState } from "react";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { buildOrderWhatsAppUrl } from "../lib/whatsapp";
import { formatPrice, unitLabel, type PriceUnit } from "../data/products";

export default function CartDrawer({ onClose }: { onClose: () => void }) {
  const { lines, incrementItem, decrementItem, removeItem } = useCart();
  const [order, setOrder] = useState({ fullName: "", phone: "", address: "", cityState: "" });

  const hasUnknown = lines.some((l) => l.price === null);
  const subtotal = lines.reduce((s, l) => s + (l.price ?? 0) * l.quantity, 0);
  const canCheckout = lines.length > 0 && order.fullName.trim() !== "" && order.phone.trim() !== "";

  return (
    <>
      <div className="drawerBackdrop" onClick={onClose} />
      <div className="drawer">
        <div className="drawerHeader">
          <h2>Your cart</h2>
          <button className="drawerClose" onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        <div className="drawerBody">
          {lines.length === 0 ? (
            <p className="drawerEmpty">Your cart is empty.</p>
          ) : (
            lines.map((l) => (
              <div key={l.variantId} className="drawerLine">
                <div>
                  <p className="lineName">{l.productName}</p>
                  <p className="lineMeta">
                    {l.variantLabel} · {formatPrice(l.price)}
                    {l.price !== null ? unitLabel(l.unit as PriceUnit) : ""}
                  </p>
                  <div className="qtyStepper" style={{ marginTop: "0.5rem" }}>
                    <button onClick={() => decrementItem(l.variantId)}><Minus size={13} /></button>
                    <span>{l.quantity}</span>
                    <button onClick={() => incrementItem(l.variantId)}><Plus size={13} /></button>
                  </div>
                </div>
                <button onClick={() => removeItem(l.variantId)} aria-label="Remove" style={{ background: "none", border: "none", cursor: "pointer", color: "#0E0D0C77" }}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {lines.length > 0 && (
          <div className="drawerFooter">
            <div className="subtotalRow">
              <span>Subtotal</span>
              <span>{hasUnknown ? "To be confirmed" : formatPrice(subtotal)}</span>
            </div>

            <div className="checkoutFields">
              <input placeholder="Full name" value={order.fullName} onChange={(e) => setOrder((o) => ({ ...o, fullName: e.target.value }))} />
              <input placeholder="Phone number" value={order.phone} onChange={(e) => setOrder((o) => ({ ...o, phone: e.target.value }))} />
              <input placeholder="Delivery address" value={order.address} onChange={(e) => setOrder((o) => ({ ...o, address: e.target.value }))} />
              <input placeholder="City/State" value={order.cityState} onChange={(e) => setOrder((o) => ({ ...o, cityState: e.target.value }))} />
            </div>

            <a
              className={`checkoutBtn ${canCheckout ? "" : "disabled"}`}
              href={canCheckout ? buildOrderWhatsAppUrl(order, lines) : undefined}
              target="_blank"
              rel="noreferrer"
            >
              {canCheckout ? "Checkout via WhatsApp" : "Enter name & phone to continue"}
            </a>
          </div>
        )}
      </div>
    </>
  );
          }
