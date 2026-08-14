import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Product, ProductVariant, PriceUnit } from "../data/products";

export interface CartLine {
  productId: string;
  productName: string;
  variantId: string;
  variantLabel: string;
  price: number | null;
  unit: PriceUnit;
  quantity: number;
}

interface CartContextValue {
  lines: CartLine[];
  addItem: (product: Product, variant: ProductVariant) => void;
  removeItem: (variantId: string) => void;
  incrementItem: (variantId: string) => void;
  decrementItem: (variantId: string) => void;
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

  function addItem(product: Product, variant: ProductVariant) {
    setLines((prev) => {
      const existing = prev.find((l) => l.variantId === variant.id);
      if (existing) {
        return prev.map((l) =>
          l.variantId === variant.id ? { ...l, quantity: l.quantity + 1 } : l,
        );
      }
      return [
        ...prev,
        {
          productId: product.id,
          productName: product.name,
          variantId: variant.id,
          variantLabel: variant.label,
          price: variant.price,
          unit: variant.unit,
          quantity: 1,
        },
      ];
    });
  }

  function removeItem(variantId: string) {
    setLines((prev) => prev.filter((l) => l.variantId !== variantId));
  }

  function incrementItem(variantId: string) {
    setLines((prev) =>
      prev.map((l) => (l.variantId === variantId ? { ...l, quantity: l.quantity + 1 } : l)),
    );
  }

  function decrementItem(variantId: string) {
    setLines((prev) =>
      prev
        .map((l) => (l.variantId === variantId ? { ...l, quantity: l.quantity - 1 } : l))
        .filter((l) => l.quantity > 0),
    );
  }

  const itemCount = lines.reduce((sum, l) => sum + l.quantity, 0);

  return (
    <CartContext.Provider
      value={{ lines, addItem, removeItem, incrementItem, decrementItem, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
