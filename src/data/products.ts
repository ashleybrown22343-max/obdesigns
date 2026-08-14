export type PriceUnit = "flat" | "per_length" | "per_sqm";

export interface ProductVariant {
  id: string;
  label: string;
  price: number | null;
  unit: PriceUnit;
}

export interface Product {
  id: string;
  name: string;
  variants: ProductVariant[];
}

export const products: Product[] = [
  {
    id: "fluted-panel",
    name: "Fluted Panel",
    variants: [
      { id: "fluted-standard", label: "Standard", price: 10500, unit: "flat" },
      { id: "fluted-installed", label: "With installation", price: 15000, unit: "per_length" },
    ],
  },
  {
    id: "window-blinds",
    name: "Window Blinds",
    variants: [{ id: "blinds-standard", label: "Standard", price: 8500, unit: "flat" }],
  },
  {
    id: "day-night-blinds",
    name: "Day/Night Blinds",
    variants: [{ id: "day-night-sqm", label: "Per sqm", price: 8500, unit: "per_sqm" }],
  },
  {
    id: "wooden-venetian",
    name: "Wooden Venetian",
    variants: [{ id: "venetian-sqm", label: "Per sqm", price: 14500, unit: "per_sqm" }],
  },
  {
    id: "new-wave-paint",
    name: "New Wave Paint",
    variants: [{ id: "paint-request", label: "Standard", price: null, unit: "flat" }],
  },
];

export function unitLabel(unit: PriceUnit): string {
  if (unit === "per_length") return "/length";
  if (unit === "per_sqm") return "/sqm";
  return "";
}

export function formatPrice(price: number | null): string {
  return price === null ? "Price on request" : `₦${price.toLocaleString("en-NG")}`;
}
