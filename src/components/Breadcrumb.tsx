import { Link } from "react-router-dom";

interface Crumb {
  label: string;
  to?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "0.8rem",
        color: "#0E0D0C77",
        padding: "1rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {items.map((item, i) => (
        <span key={i}>
          {item.to ? (
            <Link to={item.to} style={{ color: "#0E0D0C77", textDecoration: "underline" }}>
              {item.label}
            </Link>
          ) : (
            <span style={{ color: "#0E0D0C" }}>{item.label}</span>
          )}
          {i < items.length - 1 && <span style={{ margin: "0 0.4rem" }}>/</span>}
        </span>
      ))}
    </nav>
  );
}
