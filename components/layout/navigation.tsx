"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Internship", href: "#internship" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { threshold: 0.4, rootMargin: "-10% 0px -60% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled
              ? "bg-background/95 backdrop-blur-sm border-b border-border"
              : "bg-transparent"
          )}
        >
          {/* Scroll progress line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px origin-left"
            style={{
              scaleX,
              background: "rgba(255,255,255,0.18)",
            }}
          />

          <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-center">
            <nav className="flex items-center gap-1 overflow-x-auto">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={cn(
                    "px-3 py-1.5 text-sm rounded whitespace-nowrap transition-colors",
                    active === item.href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-[#a78bfa]"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
