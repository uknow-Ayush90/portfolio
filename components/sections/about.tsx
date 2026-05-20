"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Rocket, Trophy, GraduationCap } from "lucide-react";
import { stats } from "@/lib/data";
import TiltCard from "@/components/effects/tilt-card";

const ICONS = [Code2, Rocket, Trophy, GraduationCap];

function CountUp({ to, decimal, suffix }: { to: number; decimal?: boolean; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const duration = 1200;
    const raf = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(eased * to);
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {decimal ? val.toFixed(2) : Math.floor(val)}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-number mb-2">01 / About</p>
          <h2 className="section-heading">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              I&apos;m <span className="text-foreground font-medium">Ayush Mathur</span>, a 4th year
              Computer Science Engineering student at{" "}
              <span className="text-foreground font-medium">
                RV College of Engineering
              </span>
              , Bengaluru. I work on backend Python applications, scalable systems, and
              AI-driven software with interests in observability and distributed systems.
            </p>
            <p>
              Currently interning at{" "}
              <span className="text-primary font-medium">SAP</span> as a Developer and joining{" "}
              <span className="text-primary font-medium">New Relic</span> as an Associate Software Engineer.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3 content-start">
            {stats.map((stat, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                >
                  <TiltCard className="card-base h-full">
                    <Icon size={16} className="text-primary mb-2 opacity-70" />
                    <div className="text-2xl font-bold text-foreground tabular-nums">
                      <CountUp to={stat.value} decimal={stat.decimal} suffix={stat.suffix} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
