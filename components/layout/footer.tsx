import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Ayush Mathur
        </p>

<div className="flex items-center gap-4">
          {[
            { icon: Github, href: profile.links.github, label: "GitHub" },
            { icon: Linkedin, href: profile.links.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `https://mail.google.com/mail/?view=cm&to=${profile.links.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-[#a78bfa] transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
