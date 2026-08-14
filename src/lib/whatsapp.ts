import { business } from "../data/business";
import { formatPrice, unitLabel } from "../data/products";
import type { CartLine } from "../context/CartContext";

export interface OrderDetails {
  fullName: string;
  phone: string;
  address: string;
  cityState: string;
}

export function buildOrderWhatsAppUrl(order: OrderDetails, lines: CartLine[]): string {
  const itemLines = lines.map(
    (l) =>
      `• ${l.productName} (${l.variantLabel}) x${l.quantity} — ${formatPrice(l.price)}${l.price !== null ? unitLabel(l.unit) : ""}`,
  );

  const hasUnknown = lines.some((l) => l.price === null);
  const total = hasUnknown
    ? "Total: to be confirmed"
    : `Total: ${formatPrice(lines.reduce((s, l) => s + (l.price ?? 0) * l.quantity, 0))}`;

  const message = [
    `Hello OB Designs & Interiors, I'd like to place an order.`,
    ``,
    `Name: ${order.fullName}`,
    `Phone: ${order.phone}`,
    `Delivery address: ${order.address}`,
    `City/State: ${order.cityState}`,
    ``,
    ...itemLines,
    ``,
    total,
  ].join("\n");

  return `https://wa.me/${business.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
}

export interface InquiryDetails {
  fullName: string;
  phone: string;
  location: string;
  serviceNeeded: string;
  description: string;
}

export function buildInquiryWhatsAppUrl(inquiry: InquiryDetails): string {
  const message = [
    `Hello OB Designs & Interiors, I'd like to request a project consultation.`,
    ``,
    `Name: ${inquiry.fullName}`,
    `Phone: ${inquiry.phone}`,
    `Project location: ${inquiry.location}`,
    `Service needed: ${inquiry.serviceNeeded}`,
    `Description: ${inquiry.description}`,
  ].join("\n");

  return `https://wa.me/${business.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
}
