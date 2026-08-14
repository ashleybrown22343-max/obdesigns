export interface Product {
  id: string;
  name: string;
  price: number | null; // null = price on request
}

export const products: Product[] = [
  { id: "fluted-panel", name: "Fluted Panel", price: 10500 },
  { id: "window-blinds", name: "Window Blinds", price: 8500 },
  { id: "day-night-blinds", name: "Day/Night Blinds", price: 8500 },
  { id: "wooden-venetian", name: "Wooden Venetian", price: 14500 },
  { id: "new-wave-paint", name: "New Wave Paint", price: null },
];
