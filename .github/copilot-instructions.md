# Copilot Instructions for SushiYuki

## Project Overview
SushiYuki is a premium Japanese restaurant landing page built with Vite, React 18, TypeScript, shadcn/ui, and Tailwind CSS. This is a **Lovable.dev** project with automatic Git sync.

## Tech Stack Architecture
- **Build Tool**: Vite with React SWC plugin (fast refresh enabled)
- **Framework**: React 18.3 with React Router DOM for client-side routing
- **Styling**: Tailwind CSS + CSS Variables for theming + shadcn/ui component system
- **Animation**: Framer Motion for page transitions and component animations
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives via shadcn/ui
- **Testing**: Vitest + React Testing Library (jsdom environment)

## Critical Path Aliases
All imports use `@/` alias pointing to `src/`:
```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HeroSection from "@/components/HeroSection";
```

## Design System & Theming

### Brand Colors (CSS Variables)
- **Navy** (`--navy: 216 54% 11%`): Primary background, text overlays
- **Silk** (`--silk: 40 33% 97%`): Primary text on dark backgrounds
- **Gold** (`--gold: 38 70% 50%`): Premium CTA accents

These are defined in [src/index.css](src/index.css) and used via Tailwind utility classes:
```tsx
<div className="bg-navy text-silk">
<button className="gradient-gold"> // Custom gradient class
```

### Custom Button Variants
The [Button component](src/components/ui/button.tsx) has premium variants beyond shadcn defaults:
- `gold`: Premium gradient CTA with scale hover effect
- `hero`: Silk outline for transparent hero sections
- `silk`: Light button for dark backgrounds

Usage: `<Button variant="gold" size="xl">Order Now</Button>`

### Typography Convention
- **Serif font** (`font-serif`): Headlines, branding (Cormorant Garamond)
- **Sans font** (`font-sans`): Body text (Inter)
- Japanese character accents: Use `鮨` (sushi kanji) for decorative elements at low opacity

## Component Patterns

### Section Components
Page sections ([HeroSection](src/components/HeroSection.tsx), [PromotionsSection](src/components/PromotionsSection.tsx), etc.) follow this pattern:
- Export as default
- Wrap in `<section>` with semantic HTML
- Use Framer Motion for entrance animations
- Apply `relative` positioning for overlays
- Background images use gradient overlays: `bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80`

### Animation Pattern
Consistent Framer Motion entrance animation:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
```
Stagger child animations with incremental `delay` values (0.2s, 0.3s, etc.).

### Navigation
[Navigation component](src/components/Navigation.tsx) uses:
- Fixed positioning with scroll-based backdrop blur
- Mobile menu with AnimatePresence for smooth transitions
- Scroll detection hook to add/remove background on scroll

## Routing Architecture

Routes defined in [App.tsx](src/App.tsx):
```tsx
<Route path="/" element={<Index />} />
<Route path="/accessibility" element={<Accessibility />} />
<Route path="*" element={<NotFound />} /> // MUST be last
```

**Critical**: Always add new routes **above** the catch-all `*` route to avoid shadowing.

## Development Workflow

### Local Development
```bash
npm run dev  # Starts Vite dev server on port 8080
```
HMR overlay is disabled (`hmr.overlay: false` in [vite.config.ts](vite.config.ts)).

### Testing
```bash
npm test          # Run tests once
npm run test:watch # Watch mode
```
Tests live in `src/test/` or colocated with `*.test.ts(x)` suffix. Setup file: [src/test/setup.ts](src/test/setup.ts)

### Building
```bash
npm run build      # Production build
npm run build:dev  # Development mode build
npm run preview    # Preview production build
```

### Linting
```bash
npm run lint  # ESLint with React hooks + React refresh plugins
```

## TypeScript Configuration
Relaxed settings in [tsconfig.json](tsconfig.json):
- `noImplicitAny: false`
- `strictNullChecks: false`
- `noUnusedParameters: false`

This project prioritizes rapid iteration over strict type safety.

## Asset Management
- Static images: Place in `src/assets/` and import directly
- Example: `import heroImage from "@/assets/hero-sushi.jpg"`
- Public assets: `public/` directory (e.g., `robots.txt`)

## Lovable.dev Integration
- **Component Tagging**: `lovable-tagger` plugin runs in development mode only
- Changes pushed to Git sync automatically with Lovable
- Deploy via Lovable dashboard: Share → Publish

## UI Component Additions
To add new shadcn/ui components, configuration is in [components.json](components.json):
```bash
npx shadcn@latest add <component-name>
```
Components install to `src/components/ui/`.

## Common Pitfalls
1. **Route ordering**: New routes MUST be above `<Route path="*">`
2. **Color usage**: Use CSS variable classes (`text-silk`, `bg-navy`) not hex values
3. **Import paths**: Always use `@/` alias, never relative paths like `../../`
4. **Button variants**: Use custom `gold`/`hero`/`silk` variants for brand consistency
5. **Font classes**: `font-serif` for headers, `font-sans` for body text

## Key Files to Reference
- Theme customization: [src/index.css](src/index.css)
- Button variants: [src/components/ui/button.tsx](src/components/ui/button.tsx)
- Tailwind config: [tailwind.config.ts](tailwind.config.ts)
- Animation patterns: [src/components/HeroSection.tsx](src/components/HeroSection.tsx)
