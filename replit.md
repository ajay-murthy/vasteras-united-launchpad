# Västerås United Cricket Club

## Overview
A single-page website for Västerås United, a new cricket franchise based in Västerås, Sweden, competing in the Nordic Smashers T20 Championship. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Project Structure
- `src/pages/Index.tsx` — Main landing page with all sections (Hero, About, Championship, Squad, Sponsors, Contact)
- `src/pages/NotFound.tsx` — 404 page
- `src/App.tsx` — App root with routing and providers
- `src/components/ui/` — shadcn/ui component library
- `src/assets/` — Logo and hero background image
- `public/videos/` — Logo animation video for hero section

## Tech Stack
- **React 18** with TypeScript
- **Vite** (dev server on port 5000)
- **Tailwind CSS** with custom theme (navy, gold, cream colors)
- **Framer Motion** for animations
- **shadcn/ui** for UI components
- **React Router v6** for routing
- **TanStack Query** for data fetching

## Running the Project
```
npm run dev
```
Runs on port 5000.

## Notes
- Migrated from Lovable to Replit — `lovable-tagger` plugin removed from vite.config.ts
- Vite server configured with `host: "0.0.0.0"` for Replit compatibility
