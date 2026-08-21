import { useRef, useState } from "react";
import { Move } from "lucide-react";

interface Props {
  before: string;
  after: string;
  alt?: string;
}

export default function BeforeAfterSlider({ before, after, alt = "Project" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }

  function onPointerDown(e: React.PointerEvent) {
    dragging.current = true;
    updateFromClientX(e.clientX);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (dragging.current) updateFromClientX(e.clientX);
  }
  function endDrag() {
    dragging.current = false;
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      style={{
        position: "relative",
        aspectRatio: "4 / 3",
        overflow: "hidden",
        userSelect: "none",
        cursor: "ew-resize",
        background: "#0E0D0C0d",
        touchAction: "none",
      }}
    >
      <img
        src={after}
        alt={`${alt} — after`}
        draggable={false}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <img
        src={before}
        alt={`${alt} — before`}
        draggable={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${position}%`,
          width: "2px",
          background: "#F3ECE1",
          transform: "translateX(-1px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${position}%`,
          transform: "translate(-50%, -50%)",
          width: 36,
          height: 36,
          borderRadius: "999px",
          background: "#F3ECE1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px #0E0D0C55",
        }}
      >
        <Move size={16} color="#0E0D0C" />
      </div>

      <span style={{ position: "absolute", top: 8, left: 8, background: "#0E0D0Cd9", color: "#F3ECE1", fontSize: "0.65rem", padding: "0.25rem 0.5rem", fontFamily: "Inter, sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}>
        Before
      </span>
      <span style={{ position: "absolute", top: 8, right: 8, background: "#0E0D0Cd9", color: "#F3ECE1", fontSize: "0.65rem", padding: "0.25rem 0.5rem", fontFamily: "Inter, sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}>
        After
      </span>
    </div>
  );
          }
