"use client";

export default function ScanLines() {
  return (
    <>
      {/* Repeating horizontal scan lines */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)",
        }}
        aria-hidden="true"
      />
      {/* Slow moving bright scan line */}
      <div
        className="fixed left-0 right-0 h-[2px] pointer-events-none z-0 animate-scan-line"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(155,92,255,0.15), rgba(0,240,255,0.1), transparent)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
