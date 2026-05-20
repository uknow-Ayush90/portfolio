"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export default function Hero() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 45, damping: 18 });
  const smy = useSpring(my, { stiffness: 45, damping: 18 });

  const o1x = useTransform(smx, [0, 1], [-50,  50]);
  const o1y = useTransform(smy, [0, 1], [-35,  35]);
  const o2x = useTransform(smx, [0, 1], [ 40, -40]);
  const o2y = useTransform(smy, [0, 1], [ 25, -25]);
  const o3x = useTransform(smx, [0, 1], [-25,  25]);
  const o3y = useTransform(smy, [0, 1], [ 18, -18]);

  return (
    <section
      id="hero"
      onMouseMove={(e) => {
        mx.set(e.clientX / window.innerWidth);
        my.set(e.clientY / window.innerHeight);
      }}
      className="relative min-h-screen flex flex-col justify-center pt-14 px-6 overflow-hidden"
    >
      {/* Orb 1 — violet */}
      <motion.div
        style={{
          x: o1x, y: o1y,
          position: "absolute", top: "10%", left: "2%",
          width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)",
          filter: "blur(72px)",
          pointerEvents: "none",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Orb 2 — blue */}
      <motion.div
        style={{
          x: o2x, y: o2y,
          position: "absolute", top: "8%", right: "6%",
          width: 320, height: 320, borderRadius: "50%",
          background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)",
          filter: "blur(64px)",
          pointerEvents: "none",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Orb 3 — deep purple */}
      <motion.div
        style={{
          x: o3x, y: o3y,
          position: "absolute", bottom: "18%", left: "38%",
          width: 260, height: 260, borderRadius: "50%",
          background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          filter: "blur(56px)",
          pointerEvents: "none",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <div className="max-w-5xl mx-auto w-full py-20 md:py-28 relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full bg-white/8 border border-white/15 text-xs font-mono text-foreground/70"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          Interning @{profile.current.company} until {profile.current.until} · Joining {profile.next.company} {profile.next.from}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight"
        >
          <a
            href="https://www.youtube.com/watch?v=iik25wqIuFo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-[#a78bfa] transition-colors duration-200"
          >
            {profile.name}
          </a>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl font-medium text-foreground/80 mb-2"
        >
          {profile.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-base text-muted-foreground font-mono mb-6"
        >
          → {profile.nextTitle} @ {profile.next.company} from {profile.next.from}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="text-sm text-muted-foreground font-mono mb-10"
        >
          {profile.education} · {profile.location}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${profile.links.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="gap-2">
              Get In Touch
            </Button>
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="secondary" className="gap-2">
              LinkedIn
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
