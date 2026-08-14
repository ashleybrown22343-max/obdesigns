export type ProjectCategory = "Painting" | "Screeding" | "POP Work" | "Interior Job" | "Exterior Job";

export interface ProjectItem {
  id: string;
  category: ProjectCategory;
  image: string;
}

// Add more entries here as photos come in — filename just needs to match
// what you upload to public/images/ob/projects/. No code changes needed
// beyond adding a line like the ones below.
export const projects: ProjectItem[] = [
  { id: "painting-1", category: "Painting", image: "/images/ob/projects/painting-1.jpg" },
  { id: "painting-2", category: "Painting", image: "/images/ob/projects/painting-2.jpg" },
  { id: "screeding-1", category: "Screeding", image: "/images/ob/projects/screeding-1.jpg" },
  { id: "screeding-2", category: "Screeding", image: "/images/ob/projects/screeding-2.jpg" },
  { id: "pop-1", category: "POP Work", image: "/images/ob/projects/pop-1.jpg" },
  { id: "pop-2", category: "POP Work", image: "/images/ob/projects/pop-2.jpg" },
  { id: "interior-1", category: "Interior Job", image: "/images/ob/projects/interior-1.jpg" },
  { id: "interior-2", category: "Interior Job", image: "/images/ob/projects/interior-2.jpg" },
  { id: "exterior-1", category: "Exterior Job", image: "/images/ob/projects/exterior-1.jpg" },
  { id: "exterior-2", category: "Exterior Job", image: "/images/ob/projects/exterior-2.jpg" },
];
