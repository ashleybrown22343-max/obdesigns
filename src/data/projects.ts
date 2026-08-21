export type ProjectCategory = "Painting" | "Screeding" | "POP Work" | "Interior Job" | "Exterior Job";

export interface ProjectItem {
  id: string;
  category: ProjectCategory;
  image: string;
}

// Add more entries here as photos come in — filename just needs to match
// what you upload to public/images/ob/. No other code changes needed.
export const projects: ProjectItem[] = [
  { id: "painting-1", category: "Painting", image: "/images/ob/painting-1.jpg" },
  { id: "painting-2", category: "Painting", image: "/images/ob/painting-2.jpg" },
  { id: "screeding-1", category: "Screeding", image: "/images/ob/screeding-1.jpg" },
  { id: "screeding-2", category: "Screeding", image: "/images/ob/screeding-2.jpg" },
  { id: "pop-1", category: "POP Work", image: "/images/ob/pop-1.jpg" },
  { id: "pop-2", category: "POP Work", image: "/images/ob/pop-2.jpg" },
  { id: "interior-1", category: "Interior Job", image: "/images/ob/interior-1.jpg" },
  { id: "interior-2", category: "Interior Job", image: "/images/ob/interior-2.jpg" },
  { id: "exterior-1", category: "Exterior Job", image: "/images/ob/exterior-1.jpg" },
  { id: "exterior-2", category: "Exterior Job", image: "/images/ob/exterior-2.jpg" },
];
