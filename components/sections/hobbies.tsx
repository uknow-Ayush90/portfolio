"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { hobbies } from "@/lib/data";
import TiltCard from "@/components/effects/tilt-card";

export default function Hobbies() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="hobbies" ref={ref} className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-number mb-2">03 / Hobbies</p>
          <h2 className="section-heading">Hobbies &amp; Interests</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.07 }}
            >
              <TiltCard className="card-base h-full">
                <h3 className="font-medium text-foreground mb-1">{hobby.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {hobby.description}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
