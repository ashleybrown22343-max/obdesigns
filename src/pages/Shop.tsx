import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { products, lowestPrice, formatPrice, type ProductCategory } from "../data/products";
import "../styles/shop.css";

const categories: ("All" | ProductCategory)[] = ["All", "Panels", "Blinds", "Paint"];

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"All" | ProductCategory>("All");
  const [sort, setSort] = useState<"default" | "low" | "high">("default");

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
      </div>

      <div className="toolbar">
        <input
          className="searchInput"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="chipRow">
          {categories.map((c) => (
            <button
              key={c}
              className={`chip ${category === c ? "active" : ""}`}
              onClick={() => setCategory(c)}
            >
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
            <Link key={p.id} to={`/shop/${p.id}`} className="productCard">
              <div className="productImage">
                <img src={`/images/ob/product-${p.id}.jpg`} alt={p.name} loading="lazy" />
              </div>
              <div className="productInfo">
                <p className="productCategory">{p.category}</p>
                <h3 className="productName">{p.name}</h3>
                <p className="productPrice">
                  {p.variants.length > 1 ? "From " : ""}
                  {formatPrice(lowestPrice(p))}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
