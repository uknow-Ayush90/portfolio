"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ComicBurstProps {
  text: string;
  className?: string;
  color?: string;
  size?: "sm" | "md" | "lg";
  delay?: number;
  animate?: boolean;
}

const sizeMap = {
  sm: { outer: 70, inner: 56, fontSize: 9, points: 10 },
  md: { outer: 96, inner: 78, fontSize: 11, points: 12 },
  lg: { outer: 128, inner: 104, fontSize: 14, points: 14 },
};

function starPath(cx: number, cy: number, outer: number, inner: number, points: number) {
  let path = "";
  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const r = i % 2 === 0 ? outer : inner;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    path += (i === 0 ? "M" : "L") + `${x},${y}`;
  }
  return path + "Z";
}

export default function ComicBurst({
  text,
  className,
  color = "#ff2d55",
  size = "md",
  delay = 0,
  animate = true,
}: ComicBurstProps) {
  const { outer, inner, fontSize, points } = sizeMap[size];
  const cx = outer + 4;
  const cy = outer + 4;
  const svgSize = outer * 2 + 8;

  return (
    <motion.div
      className={cn("inline-flex items-center justify-center relative", className)}
      initial={{ scale: 0, rotate: -15, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{
        delay,
        type: "spring",
        stiffness: 260,
        damping: 16,
      }}
    >
      <motion.div
        animate={animate ? { rotate: [0, 2, -2, 1, -1, 0] } : {}}
        transition={{
          duration: 0.18,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "linear",
        }}
      >
        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          aria-hidden="true"
        >
          {/* Ink outline */}
          <path
            d={starPath(cx, cy, outer + 3, inner + 2, points)}
            fill="#0a0a14"
          />
          {/* Main star */}
          <path
            d={starPath(cx, cy, outer, inner, points)}
            fill={color}
          />
          <text
            x={cx}
            y={cy}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={fontSize}
            fontFamily="var(--font-display), Impact, sans-serif"
            fill="#fff"
            letterSpacing="0.5"
          >
            {text}
          </text>
        </svg>
      </motion.div>
    </motion.div>
  );
}
