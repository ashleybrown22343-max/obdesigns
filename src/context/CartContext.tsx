import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "../data/products";

export interface CartLine {
  productId: string;
  name: string;
  price: number | null;
  quantity: number;
}

interface CartContextValue {
  lines: CartLine[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  itemCount: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "obdesigns-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  function addItem(product: Product) {
    setLines((prev) => {
      const existing = prev.find((l) => l.productId === product.id);
      if (existing) {
        return prev.map((l) =>
          l.productId === product.id ? { ...l, quantity: l.quantity + 1 } : l,
        );
      }
      return [...prev, { productId: product.id, name: product.name, price: product.price, quantity: 1 }];
    });
  }

  function removeItem(productId: string) {
    setLines((prev) => prev.filter((l) => l.productId !== productId));
  }

  const itemCount = lines.reduce((sum, l) => sum + l.quantity, 0);

  return (
    <CartContext.Provider value={{ lines, addItem, removeItem, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
