import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type ProjectCategory } from "../data/projects";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import "../styles/projects.css";
import { useSEO } from "../lib/useDocumentTitle";

const filters: ("All" | ProjectCategory)[] = ["All", "Painting", "Screeding", "POP Work", "Interior Job", "Exterior Job"];

export default function Projects() {
  useSEO({
    title: "Our Projects | OB Designs & Interiors Portfolio",
    description:
      "Browse real painting, screeding, POP, interior and exterior projects completed by OB Designs & Interiors nationwide.",
  });
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  function close() {
    setLightboxIndex(null);
  }
  function next() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }
  function prev() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }

  return (
    <div className="projectsPage">
      <div className="projectsHero">
        <p className="eyebrow">Our Work</p>
        <h1>Projects that speak for themselves</h1>
        <p>A look at real work by OB Designs & Interiors — painting, screeding, POP installations, and full interior and exterior jobs, delivered nationwide.</p>
      </div>

      <div className="filterRow">
        {filters.map((f) => (
          <button key={f} className={`filterChip ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <div className="masonry">
        {filtered.map((p, i) => (
          <div key={p.id} className="masonryItem" onClick={() => setLightboxIndex(i)}>
            <img src={p.image} alt={`${p.category} project`} loading="lazy" />
            <span className="masonryBadge">{p.category}</span>
          </div>
        ))}
      </div>

      <div className="ctaBanner">
        <p>Like what you see? Let's talk about your project.</p>
        <Link className="ctaBannerBtn" to="/consultation">Book a Consultation</Link>
      </div>

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div className="lightboxBackdrop" onClick={close}>
          <button className="lightboxClose" onClick={close} aria-label="Close"><X size={24} /></button>
          <button className="lightboxNav prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">
            <ChevronLeft size={28} />
          </button>
          <img className="lightboxImg" src={filtered[lightboxIndex].image} alt={`${filtered[lightboxIndex].category} project`} onClick={(e) => e.stopPropagation()} />
          <button className="lightboxNav next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  );
}
