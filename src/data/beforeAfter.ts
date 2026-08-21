export interface BeforeAfterPair {
  id: string;
  before: string;
  after: string;
}

// Pair your 25 photos yourself (which "before" matches which "after"),
// then upload to public/images/ob/before-after/ using this naming pattern.
// Add more lines here as you pair more photos — no other code changes needed.
export const beforeAfterPairs: BeforeAfterPair[] = [
  { id: "ba-1", before: "/images/ob/before-after/before-1.jpg", after: "/images/ob/before-after/after-1.jpg" },
  { id: "ba-2", before: "/images/ob/before-after/before-2.jpg", after: "/images/ob/before-after/after-2.jpg" },
  { id: "ba-3", before: "/images/ob/before-after/before-3.jpg", after: "/images/ob/before-after/after-3.jpg" },
  { id: "ba-4", before: "/images/ob/before-after/before-4.jpg", after: "/images/ob/before-after/after-4.jpg" },
  { id: "ba-5", before: "/images/ob/before-after/before-5.jpg", after: "/images/ob/before-after/after-5.jpg" },
  { id: "ba-6", before: "/images/ob/before-after/before-6.jpg", after: "/images/ob/before-after/after-6.jpg" },
];
