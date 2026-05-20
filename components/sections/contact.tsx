"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Copy, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyEmail = async (email: string, key: string) => {
    await navigator.clipboard.writeText(email);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" ref={ref} className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-number mb-2">05 / Contact</p>
          <h2 className="section-heading">Get In Touch</h2>
        </motion.div>

        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-muted-foreground leading-relaxed mb-8"
          >
            Open to engineering roles, research collaborations, and ambitious side
            projects. If you&apos;re building something that matters — I&apos;d love to hear
            from you.
          </motion.p>

          {/* Primary CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <a href={`https://mail.google.com/mail/?view=cm&to=${profile.links.email}`} target="_blank" rel="noopener noreferrer">
              <Button className="gap-2">
                <Mail size={15} /> Email Me
              </Button>
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Linkedin size={15} /> LinkedIn
              </Button>
            </a>
          </motion.div>

          {/* Email addresses */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35 }}
            className="space-y-2"
          >
            {[
              { label: "Personal", email: profile.links.email, key: "personal" },
              { label: "Business", email: profile.links.businessEmail, key: "business" },
            ].map(({ label, email, key }) => (
              <div key={key} className="flex items-center gap-3">
                <span className="text-xs font-mono text-muted-foreground w-16">{label}</span>
                <button
                  onClick={() => copyEmail(email, key)}
                  className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-[#a78bfa] transition-colors border border-border rounded-md px-3 py-1.5 bg-secondary hover:border-[#a78bfa]/30"
                >
                  {copiedKey === key ? (
                    <Check size={12} className="text-green-500" />
                  ) : (
                    <Copy size={12} />
                  )}
                  {email}
                </button>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.45 }}
            className="mt-6 flex items-center gap-1.5 text-xs font-mono text-muted-foreground"
          >
            <MapPin size={11} />
            {profile.location} · Available full-time from {profile.next.from}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
