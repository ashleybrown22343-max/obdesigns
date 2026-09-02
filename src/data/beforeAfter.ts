export interface BeforeAfterPair {
  id: string;
  before: string;
  after: string;
}

// Only using the exact 3 pairs you uploaded
export const beforeAfterPairs: BeforeAfterPair[] = [
  { id: "ba-1", before: "/images/ob/before-1.jpg", after: "/images/ob/after-1.jpg" },
  { id: "ba-2", before: "/images/ob/before-2.jpg", after: "/images/ob/after-2.jpg" },
  { id: "ba-3", before: "/images/ob/before-3.jpg", after: "/images/ob/after-3.jpg" },
];
