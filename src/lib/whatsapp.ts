import { business } from "../data/business";
import type { CartLine } from "../context/CartContext";

export function buildOrderWhatsAppUrl(lines: CartLine[]): string {
  const itemLines = lines.map((l) => {
    const priceText = l.price !== null ? `₦${l.price.toLocaleString("en-NG")}` : "price on request";
    return `• ${l.name} x${l.quantity} — ${priceText}`;
  });

  const hasUnknown = lines.some((l) => l.price === null);
  const total = hasUnknown
    ? "Total: to be confirmed"
    : `Total: ₦${lines.reduce((s, l) => s + (l.price ?? 0) * l.quantity, 0).toLocaleString("en-NG")}`;

  const message = [`Hello OB Designs & Interiors, I'd like to order:`, ``, ...itemLines, ``, total].join("\n");

  return `https://wa.me/${business.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
}
