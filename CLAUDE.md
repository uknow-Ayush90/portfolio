# Ayush Mathur — Spider-Verse Inspired Developer Portfolio

> A cinematic, comic-inspired, recruiter-friendly portfolio for Ayush Mathur built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, and ShadCN UI.

---

## 1. Vision & Aesthetic

A digital experience that feels like stepping into a Spider-Verse frame — energetic, layered, kinetic, comic-inspired, and futuristic — without sacrificing the polish recruiters expect from a senior-track engineer.

**Design language pillars**

- **Comic-book DNA** — halftone dot textures, bold ink outlines, action-burst speech panels, "POW!" style chips, frame-by-frame jitter (~12fps look) for accent elements.
- **Cinematic motion** — Framer Motion–driven page reveals, scroll-linked parallax, depth-based layering, motion blur on transitions, and dynamic lighting that follows the cursor.
- **Neon-noir palette** — deep ink (#0a0a14) backgrounds with neon red/pink/cyan/violet accent gradients, glow rings, and chromatic-aberration RGB-split flourishes used sparingly.
- **Kinetic typography** — display-weight headlines that animate per-letter, slight skew/rotation, marquee bands, and shimmer fills.
- **Premium startup polish** — generous whitespace, restrained section rhythm, accessible contrast, clear hierarchy. Eye-candy never blocks information.

**Hard rules**

- Recruiter-readable in <10 seconds: name, role, headline, current/next employer visible in the hero without interaction.
- All motion respects `prefers-reduced-motion`; animation can be muted but the layout must still work.
- No autoplaying audio. No layout shift on load.
- Mobile-first responsive — every effect must degrade gracefully below 768px.

---

## 2. Tech Stack

| Layer | Choice | Notes |
| --- | --- | --- |
| Framework | **Next.js 15** (App Router) | RSC where possible, `'use client'` only on interactive components |
| Runtime | **React 19 RC** (paired with Next 15) | |
| Language | **TypeScript** strict mode | |
| Styling | **Tailwind CSS 3.4** + custom CSS variables | Custom theme tokens for `spider.*` palette |
| Animation | **Framer Motion 11** | scroll-linked, layout, presence, gestures |
| UI primitives | **ShadCN UI** (new-york style) | Button only initially; add as needed |
| Icons | **lucide-react** | |
| Fonts | `next/font/google` — **Bebas Neue** (display), **Space Grotesk** (sans), **JetBrains Mono** (mono) | |
| Lint/format | Default Next ESLint config | |

No state libraries, no CMS, no DB — content lives in typed `lib/data.ts`.

---

## 3. File / Folder Layout

```
portfolio/
├── CLAUDE.md                       # this plan
├── README.md                       # short user-facing overview (only if asked)
├── package.json
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.ts
├── components.json                 # shadcn config
├── .gitignore
├── app/
│   ├── layout.tsx                  # fonts, metadata, global providers
│   ├── globals.css                 # design tokens + halftone/neon utilities
│   ├── page.tsx                    # composes all sections
│   └── favicon.ico                 # (skipped — no binary)
├── components/
│   ├── ui/
│   │   └── button.tsx              # shadcn button
│   ├── layout/
│   │   ├── navigation.tsx          # floating glass nav
│   │   └── footer.tsx
│   ├── effects/
│   │   ├── particle-field.tsx      # canvas particle web
│   │   ├── halftone-background.tsx # animated halftone overlay
│   │   ├── scan-lines.tsx          # subtle CRT scan + grain
│   │   ├── cursor-spotlight.tsx    # cursor-following radial light
│   │   ├── kinetic-text.tsx        # per-letter reveal
│   │   ├── comic-burst.tsx         # POW/BAM star-burst chip
│   │   ├── tilt-card.tsx           # 3D tilt wrapper
│   │   └── marquee.tsx             # infinite scrolling band
│   └── sections/
│       ├── hero.tsx
│       ├── about.tsx
│       ├── skills.tsx
│       ├── experience.tsx
│       ├── projects.tsx
│       ├── achievements.tsx
│       └── contact.tsx
└── lib/
    ├── utils.ts                    # cn()
    └── data.ts                     # all portfolio content
```

---

## 4. Design System (globals.css + Tailwind)

**CSS variables (`:root`)**

- `--background: 240 20% 4%` (near-black ink)
- `--foreground: 0 0% 98%`
- `--primary: 348 100% 59%` (spider red)
- `--accent: 188 100% 50%` (cyan)
- `--radius: 0.75rem`

**Tailwind extensions** (already drafted in section 7)

- `colors.spider.{red, pink, blue, cyan, purple, yellow, ink, paper}`
- `fontFamily.{display, sans, mono}`
- `keyframes/animation`: `comic-pop`, `frame-shift`, `neon-pulse`, `scan-line`, `halftone-drift`, `marquee`, `float-slow`, `shimmer`
- `backgroundImage`: `halftone-dots`, `comic-gradient`, `ink-gradient`

**Custom utility classes (in globals.css)**

- `.text-stroke` — black ink stroke around text (comic outline)
- `.text-glitch` — RGB-split shadow for chromatic aberration
- `.neon-text` — multi-layer drop-shadow glow
- `.comic-panel` — thick black border, white inner ring, slight rotation
- `.halftone-overlay` — repeating radial gradient at low opacity
- `.glass` — frosted backdrop-blur card

---

## 5. Content Model (`lib/data.ts`)

Strongly-typed exports consumed by sections. Keeps the design layer pure.

```ts
export const profile = {
  name: "Ayush Mathur",
  title: "Software Engineer",
  tagline: "Building secure, scalable systems at the edge of AI, blockchain, and distributed software.",
  location: "Bengaluru, India",
  education: "B.E. Computer Science (Cybersecurity) — RV College of Engineering",
  current: { company: "SAP", role: "Software Engineering Intern" },
  next:    { company: "New Relic", role: "Software Engineer" },
  links: { github, linkedin, email, resume },
};

export const skills: { category: string; items: string[] }[];
export const experience: { company; role; period; location; bullets[]; tags[] }[];
export const projects: {
  name; tagline; description; tech[]; highlights[]; github?; demo?; accent;
}[];
export const achievements: { title; org; year; blurb }[];
```

**Projects to feature** (cinematic cards):

1. **Smart Chair — AI Posture Detection System** — CV + IoT, real-time posture correction
2. **DocuChain** — blockchain-backed document verification
3. **Krypton Solar** — solar energy monitoring / optimization platform
4. **Secure US** — security tooling / threat-detection project

Each gets: animated preview gradient, tech-stack pills, GitHub/demo CTA, hover distortion + glow.

---

## 6. Sections — what each one does

### 6.1 Navigation (`components/layout/navigation.tsx`)
Fixed floating glass pill, top-center. Animates in after 400ms. Active section highlighted via `IntersectionObserver`. Mobile: collapses to a comic-burst hamburger that opens a full-screen panel.

### 6.2 Hero (`components/sections/hero.tsx`)
- Full viewport, layered:
  - Layer 0: animated halftone background + cursor spotlight + particle field
  - Layer 1: oversized kinetic display name "AYUSH MATHUR" with per-letter stagger, slight skew, RGB-split on hover
  - Layer 2: floating comic-burst chips ("CYBERSECURITY", "AI/ML", "FULL-STACK", "DISTRIBUTED")
  - Layer 3: subline with current/next role, two CTA buttons (View Work / Get In Touch)
- Scroll indicator at bottom with bouncing chevron.

### 6.3 About (`components/sections/about.tsx`)
Two-column comic-panel layout:
- Left: short narrative bio framed as a comic panel (thick black border, halftone corner, slight rotation).
- Right: stacked stat cards — years coding, projects shipped, hackathon wins, CGPA — each with a neon icon and count-up animation.

### 6.4 Skills (`components/sections/skills.tsx`)
Categorized clusters (Languages, Frontend, Backend, AI/ML, Cybersecurity, Cloud/DevOps, Blockchain). Each skill is an animated pill with hover lift, neon underline, and a brief tooltip. Pills enter with stagger + spring.

### 6.5 Experience (`components/sections/experience.tsx`)
Vertical timeline with a glowing animated rail. Entries for SAP, incoming New Relic, plus key prior roles/positions. Each card: company, role, dates, 2–3 achievement bullets, tech tags.

### 6.6 Projects (`components/sections/projects.tsx`)
Grid (1 col mobile, 2 col tablet, 2–3 col desktop) of `TiltCard`s.
- Animated gradient "preview" header (per project accent)
- Title in display font, tagline, description, tech pills
- Hover: card tilts on 3D axis, glow ring intensifies, RGB-split on title, scan-lines sweep
- Buttons: GitHub, Live Demo (when applicable)

### 6.7 Achievements (`components/sections/achievements.tsx`)
Marquee band of comic-burst badges + a grid of detailed cards (hackathon wins, certifications, publications, leadership).

### 6.8 Contact (`components/sections/contact.tsx`)
Cinematic CTA panel: oversized "LET'S BUILD" headline, animated outline, three buttons (Email, LinkedIn, GitHub), copy-email-on-click, footer note with location + availability.

### 6.9 Footer
Minimal — name, year, "Built with Next.js + Framer Motion", social icons.

---

## 7. Effects Library (`components/effects/`)

| Component | Behavior | Notes |
| --- | --- | --- |
| `ParticleField` | Canvas, ~80 particles, web of lines between near neighbors, drift slowly, brighten near cursor. | Pauses on `prefers-reduced-motion`. |
| `HalftoneBackground` | Fixed full-screen `radial-gradient` repeating at 4px intervals, drifts via `halftone-drift`. | Pure CSS. |
| `ScanLines` | Repeating linear gradient + grain via SVG turbulence, very low opacity. | |
| `CursorSpotlight` | Radial gradient that follows mouse via `motion.div` + `useMotionValue`. | |
| `KineticText` | Splits text into letters, staggers in with spring + slight rotation/skew. | Variants for h1/h2. |
| `ComicBurst` | Star-burst SVG with text inside, `comic-pop` entrance, `frame-shift` idle. | |
| `TiltCard` | `useMotionValue` based 3D tilt using mouse coords. | Adds glow ring on hover. |
| `Marquee` | Duplicated content row sliding via `marquee` keyframe, hover-pause. | |

---

## 8. Motion & Interaction Principles

- **Page entry**: ~600ms staggered reveal — nav → hero name → hero subline → CTAs → ambient effects fade in.
- **Section reveal**: each section uses `whileInView` with `once: true`, threshold 0.2, comic-pop or slide-up depending on emphasis.
- **Scroll**: `useScroll` + `useTransform` for hero parallax (background drifts slower than foreground).
- **Hover**: subtle scale (1.02), glow ring, optional RGB-split. No hover effect should shift layout.
- **Focus states**: visible neon ring on keyboard nav, not just `:hover`.
- **Reduced motion**: skip particles, marquee, frame-shift, scan-lines; keep fades/opacity transitions only.

---

## 9. Accessibility & Performance

- Semantic HTML (`<header>`, `<main>`, `<section aria-labelledby>`, `<footer>`).
- All interactive elements reachable by keyboard with visible focus.
- Color contrast checked: primary text on ink background ≥ 4.5:1.
- Images: none required initially (gradient previews); if added, `next/image` with explicit dimensions.
- Fonts via `next/font` — no FOIT/FOUT, preloaded.
- Particle field capped at 80 nodes, `requestAnimationFrame`, paused when tab hidden.
- No layout shift: reserve hero height with `min-h-screen`.
- Lighthouse target: Perf ≥ 90, A11y ≥ 95, Best Practices ≥ 95, SEO ≥ 95.

---

## 10. Implementation Phases (mapped to tasks)

1. **Scaffold project config** — package.json, tsconfig, next.config, tailwind, postcss, gitignore, components.json. (task #4)
2. **Design system** — globals.css with tokens, halftone/neon/comic utilities. (task #3)
3. **Core layout + utilities** — `app/layout.tsx`, `app/page.tsx` shell, `lib/utils.ts`, ShadCN button, `lib/data.ts`. (task #1)
4. **Effects + cursor + particles** — all of `components/effects/`. (task #8)
5. **Navigation + Hero** — first impression. (task #6)
6. **About + Skills**. (task #7)
7. **Experience + Projects + Achievements + Contact + Footer**. (task #2)
8. **Install + build verification** — `npm install`, `npm run build`. (task #5)

Each phase ends green (typechecks, no console errors) before moving on.

---

## 11. Risks & Mitigations

| Risk | Mitigation |
| --- | --- |
| React 19 RC + Next 15 peer-dep churn | Pin exact versions in package.json; if install fails, fall back to `react@18.3.1` + `next@14.2.x`. |
| Heavy effects causing jank on low-end devices | Cap particles, throttle pointermove, respect `prefers-reduced-motion`, lazy-mount below-fold effects. |
| Comic aesthetic clashing with "recruiter-friendly" | Restrain saturation in body sections; reserve maximalism for hero/transitions; keep typography hierarchy strict. |
| Build environment is Windows | Use cross-platform paths in scripts; no shell-specific commands in package.json. |
| Animations breaking SSR | All effect components marked `'use client'`; gate `window`/`document` access behind `useEffect`. |

---

## 12. Definition of Done

- `npm install` succeeds.
- `npm run build` succeeds with zero TS errors.
- `npm run dev` renders all 7 sections without console errors.
- Hero, About, Skills, Experience, Projects, Achievements, Contact all visible and animated.
- All four featured projects (Smart Chair, DocuChain, Krypton Solar, Secure US) appear with tech pills and CTA buttons.
- `prefers-reduced-motion: reduce` disables particle/marquee/scan animations.
- Mobile breakpoint (375px) shows readable, non-overlapping layout.
