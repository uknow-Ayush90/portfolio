"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
}

export default function Marquee({
  children,
  className,
  speed = 30,
  reverse = false,
}: MarqueeProps) {
  return (
    <div
      className={cn("overflow-hidden", className)}
      aria-hidden="true"
    >
      <div
        className="flex w-max"
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        {/* Duplicate for seamless loop */}
        <div className="flex items-center gap-4 pr-4">{children}</div>
        <div className="flex items-center gap-4 pr-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
