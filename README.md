# Meridian Cyber — Enterprise Security Advisory Website

A production-ready marketing site for an enterprise cybersecurity advisory firm, built with React, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## Run locally
```
npm install
npm run dev
```

## Build
```
npm run build
```
Output goes to `dist/`.

## Structure
- `src/pages` — route-level pages (Home, About, Contact, 404)
- `src/components/sections` — page sections (Hero, Services, Process, etc.)
- `src/components/layout` — Navbar, Footer
- `src/components/ui` — Reveal (scroll animation), Counter (animated stats)
- `src/data/content.ts` — all site copy and structured content
- `src/hooks` — shared hooks

## Notes
- Images are sourced from Unsplash via direct URLs (royalty-free, no API key required).
- Routing via React Router; in-page anchors (`/#services`) smooth-scroll on the home page.
- Respects `prefers-reduced-motion`.
