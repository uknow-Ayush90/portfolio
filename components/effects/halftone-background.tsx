"use client";

export default function HalftoneBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 animate-halftone-drift"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }}
      aria-hidden="true"
    />
  );
}
