"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { internship } from "@/lib/data";

export default function Internship() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="internship" ref={ref} className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-number mb-2">02 / Internship</p>
          <h2 className="section-heading">Internship</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-base"
        >
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="font-semibold text-foreground text-lg">{internship.company}</h3>
              <p className="text-sm text-primary font-medium mt-0.5">{internship.role}</p>
            </div>
            <div className="flex flex-col items-end gap-1 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar size={11} /> {internship.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={11} /> {internship.location}
              </span>
            </div>
          </div>

          {/* Bullets */}
          {internship.bullets.length > 0 && (
            <ul className="space-y-2 mb-5">
              {internship.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1 shrink-0">·</span>
                  {b}
                </li>
              ))}
            </ul>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
            {internship.tags.map((tag) => (
              <span key={tag} className="tag-pill text-[11px]">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
