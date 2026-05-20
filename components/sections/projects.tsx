"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import TiltCard from "@/components/effects/tilt-card";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" ref={ref} className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-number mb-2">04 / Projects</p>
          <h2 className="section-heading">Projects</h2>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.08 }}
            >
              <TiltCard className="card-base flex flex-col sm:flex-row sm:items-start gap-4" intensity={6}>
                {/* Left: name + tagline */}
                <div className="sm:w-56 shrink-0">
                  <h3 className="font-semibold text-foreground">{project.name}</h3>
                  <p className="text-xs font-mono text-muted-foreground mt-0.5">
                    {project.tagline}
                  </p>
                </div>

                {/* Right: brief + tech + links */}
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {project.brief}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <div className="flex gap-3 ml-auto">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-muted-foreground hover:text-[#a78bfa] transition-colors flex items-center gap-1"
                        >
                          <Github size={13} /> Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-muted-foreground hover:text-[#a78bfa] transition-colors flex items-center gap-1"
                        >
                          <ExternalLink size={13} /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
