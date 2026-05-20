"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface KineticTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function KineticText({
  text,
  className,
  delay = 0,
  stagger = 0.04,
  as: Tag = "h1",
}: KineticTextProps) {
  const letters = text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 60,
      rotate: -8,
      skewX: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      skewX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 18,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn("inline-flex flex-wrap", className)}
      aria-label={text}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={letter}
          className="inline-block"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
