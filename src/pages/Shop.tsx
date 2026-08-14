import { useEffect, useMemo, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { products, lowestPrice, formatPrice, unitLabel, type ProductCategory, type Product } from "../data/products";
import { useCart } from "../context/CartContext";
import CartDrawer from "../components/CartDrawer";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import "../styles/shop.css";

const categories: ("All" | ProductCategory)[] = ["All", "Panels", "Blinds", "Paint"];

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [variantId, setVariantId] = useState(product.variants[0]?.id);
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0];

  useEffect(() => {
    if (!justAdded) return;
    const t = setTimeout(() => setJustAdded(false), 1200);
    return () => clearTimeout(t);
  }, [justAdded]);

  function handleAdd() {
    for (let i = 0; i < qty; i++) addItem(product, variant);
    setJustAdded(true);
    setQty(1);
  }

  return (
    <div className="productCard">
      <div className="productImage">
        <span className="categoryBadge">{product.category}</span>
        <img src={`/images/ob/product-${product.id}.jpg`} alt={product.name} loading="lazy" />
      </div>
      <div className="productInfo">
        <h3 className="productName">{product.name}</h3>
        <p className="productPrice">
          {variant.price !== null ? formatPrice(variant.price) + unitLabel(variant.unit) : "Price on request"}
        </p>

        {product.variants.length > 1 && (
          <div className="variantRow">
            {product.variants.map((v) => (
              <button key={v.id} className={`variantChip ${v.id === variantId ? "active" : ""}`} onClick={() => setVariantId(v.id)}>
                {v.label}
              </button>
            ))}
          </div>
        )}

        <div className="cardFooter">
          <div className="qtyStepper">
            <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
            <span>{qty}</span>
            <button onClick={() => setQty((q) => q + 1)}>+</button>
          </div>
          <button className={`addBtn ${justAdded ? "added" : ""}`} onClick={handleAdd}>
            {justAdded ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  useDocumentTitle("Shop | OB Designs & Interiors");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"All" | ProductCategory>("All");
  const [sort, setSort] = useState<"default" | "low" | "high">("default");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { itemCount } = useCart();

  const filtered = useMemo(() => {
    let list = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    if (category !== "All") list = list.filter((p) => p.category === category);

    if (sort === "low") {
      list = [...list].sort((a, b) => (lowestPrice(a) ?? Infinity) - (lowestPrice(b) ?? Infinity));
    } else if (sort === "high") {
      list = [...list].sort((a, b) => (lowestPrice(b) ?? -Infinity) - (lowestPrice(a) ?? -Infinity));
    }
    return list;
  }, [search, category, sort]);

  return (
    <div className="shopPage">
      <div className="shopHero">
        <p className="eyebrow">Shop</p>
        <h1>Paint, panels & window finishes</h1>
        <p>Real products from OB Designs & Interiors — order directly, we confirm and deliver via WhatsApp.</p>
      </div>

      <div className="toolbar">
        <input className="searchInput" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <div className="chipRow">
          {categories.map((c) => (
            <button key={c} className={`chip ${category === c ? "active" : ""}`} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>
        <select className="sortSelect" value={sort} onChange={(e) => setSort(e.target.value as typeof sort)}>
          <option value="default">Sort: Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="emptyState">No products match your search.</p>
      ) : (
        <div className="productGrid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      {itemCount > 0 && (
        <button className="floatingCart" onClick={() => setDrawerOpen(true)}>
          <ShoppingBag size={16} /> View Cart ({itemCount})
        </button>
      )}

      {drawerOpen && <CartDrawer onClose={() => setDrawerOpen(false)} />}
    </div>
  );
}
