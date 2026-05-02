---
design_system: portfolio-the-manifesto
version: 1.0.0
source_mockup: "../Portfolio Mockup/01-manifesto.html"
intent: "A cinematic manifesto portfolio for Vinayak Kumar, positioned as an AI full-stack engineer."
tokens:
  color:
    cream: "#F2EDE4"
    cream_deep: "#E8E0D0"
    ink: "#0A0908"
    ink_soft: "#1A1816"
    paper: "#FAF7F1"
    accent: "oklch(0.62 0.18 45)"
    accent_deep: "oklch(0.52 0.18 40)"
  typography:
    serif: "Instrument Serif"
    sans: "Geist"
    mono: "Geist Mono"
  radius:
    default: "0px"
    chip: "999px"
  motion:
    primary_ease: "cubic-bezier(0.19, 1, 0.22, 1)"
    secondary_ease: "cubic-bezier(0.77, 0, 0.175, 1)"
---

# Overview

`portfolio-the-manifesto` is a portfolio system built from the manifesto mockup. It should feel editorial, sharp, high-contrast, and performance-aware. The first screen establishes Vinayak Kumar as an AI full-stack engineer who ships production software across Next.js, React Native, TypeScript, Node.js, LangChain, RAG, commerce, ed-tech, automation, and analytics.

# Color

Use `cream` as the primary page surface, `ink` for text and high-contrast panels, `paper` for stacked chapter cards, and `accent` for emphasis, section markers, and small UI highlights. Do not introduce unrelated decorative gradients. High-contrast dark sections must use `ink` backgrounds with `cream` text.

# Typography

Use `Instrument Serif` for hero-scale statements, project titles, chapter titles, and contact display text. Use `Geist` for body copy and `Geist Mono` for navigation, metadata, labels, counters, tags, and SEO-signal microcopy.

# Layout

The site is a single-page manifesto with anchored sections: hero, statement, chapters, work rail, work ledger, about, experience, and contact. Desktop layouts favor wide editorial spacing and sticky scroll moments. Mobile layouts must reduce to single-column sections, preserve all text, and avoid horizontal page overflow.

# Components

- Fixed nav: mixed-blend navigation over every section with Work, About, Contact, and Resume anchors.
- Hero: oversized serif statement with staged word reveal and concise AI full-stack positioning.
- Marquee: technology bands using the approved stack terms.
- Chapter cards: sticky paper cards with numbered manifesto statements.
- Work rail: scroll-linked project cards for the strongest work, freelance, and open-source pieces.
- Work ledger: scan-friendly project index with hover preview on pointer devices only.
- About and experience: factual proof points from the resume and portfolio data.
- Contact: large invitation, email, social links, and resume link.

# Accessibility

Keep anchor focus styles visible. Respect `prefers-reduced-motion` by disabling sticky scroll transforms and making content visible without animation. Hide custom cursor and hover previews on coarse pointers. Every project screenshot needs useful alt text when it carries content; decorative previews are hidden from assistive tech.

# SEO Rules

Primary phrase: "AI full-stack engineer". Use natural variants across title, description, hero copy, structured data, project blurbs, and metadata. Include the phrase set for Next.js, React Native, LangChain, RAG, TypeScript, Node.js, commerce, ed-tech, automation, and analytics. Do not keyword-stuff visible copy.

# Do Not

- Do not replace the manifesto aesthetic with a conventional card-heavy landing page.
- Do not add unrelated stock imagery, gradient blobs, or decorative SVG hero art.
- Do not remove resume, GitHub, LinkedIn, or project links.
- Do not ship a section that depends on animation to reveal essential information.
