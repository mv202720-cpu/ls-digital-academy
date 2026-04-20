# Design Brief: LS Digital Academy

## Tone & Positioning
Premium, trustworthy, job-focused. Professional but approachable. Bold editorial serif headings convey expertise; clean sans-serif body builds accessibility and trust.

## Color Palette

| Token | OKLCH | Purpose | Context |
|-------|-------|---------|---------|
| Primary | L=32.5 C=0.12 H=251 | Dark Navy (#0B3C5D) — authority, trust | Nav, hero, CTAs, primary buttons |
| Accent | L=61 C=0.19 H=49 | Bright Orange (#FF7A00) — energy, action | Secondary CTAs, highlights, floating buttons |
| Secondary | L=99 C=0 H=0 | White — clarity, contrast | Card backgrounds, text on primary |
| Muted | L=92 C=0 H=0 | Light gray — subtle dividers, disabled states | Borders, low-emphasis backgrounds |
| Destructive | L=55 C=0.22 H=25 | Red — alerts, validation errors | Form errors, warnings |

## Typography

| Tier | Font | Scale | Weight | Use |
|------|------|-------|--------|-----|
| Display | Fraunces (Serif) | 32–56px | 700 | H1 hero, section headings (bold, elegant) |
| Body | DM Sans (Sans) | 14–18px | 400–600 | Paragraphs, body copy, card content |
| Mono | GeistMono | 12–14px | 400 | Code, pricing display, technical info |

**Line height**: 1.6 (body), 1.3 (headings). **Letter spacing**: 0 (default), +0.5% on headings for elegant spacing.

## Structural Zones

| Zone | Background | Border | Treatment |
|------|-----------|--------|-----------|
| Header/Nav | Primary (95% opacity) | Border-b (muted) | Sticky, semi-transparent scroll effect |
| Hero | Primary full-bleed | None | Gradient overlay (primary to primary-dark), full viewport height |
| Content sections | Alternating: background + muted/10 | None | Generous padding (3–4rem vertical) |
| Cards | Card (white) | Border-border (thin 1px) | Shadow-md baseline, shadow-lg on hover |
| Footer | Primary (90% opacity) | Border-t (muted) | Mirror header style, white text |
| Floating buttons | Accent | None | Fixed positioning (bottom-right, mobile-first) |

## Elevation & Depth

- **Baseline**: Cards use `shadow-sm` (0 2px 8px)
- **Hover state**: Cards lift 4px (`translate-y-[-4px]`) with `shadow-lg` (0 16px 40px)
- **Floating buttons**: `shadow-md` with slight lift on interaction
- **No glows or neon shadows** — all shadows use primary color at 8–15% opacity for refined aesthetic

## Spacing & Rhythm

- **Padding**: 1rem (small), 1.5rem (medium), 2rem (large), 3rem (sections)
- **Gaps**: 1.5rem (card grids), 3rem (section spacing)
- **Gutters**: 2rem (mobile), 3rem (desktop)
- **Ratio**: 1:1.5:2:3 creates visual rhythm without monotony

## Component Patterns

| Component | Styling | Hover | Mobile |
|-----------|---------|-------|--------|
| Primary CTA | bg-primary, text-white, rounded-lg | Translate +2px right, shadow-lg | Full width, 44px min-touch |
| Secondary CTA | bg-accent, text-white, rounded-lg | Translate +2px right, shadow-md | Full width, 44px min-touch |
| Cards | bg-card, border-1 border-border, shadow-sm | Lift 4px, shadow-lg, no color change | Stack vertically below md breakpoint |
| Floating buttons | Fixed, bottom-right, accent bg, shadow-md | Scale 1.05, shadow-lg | Adjust spacing for mobile nav |
| Form inputs | bg-input, border-1 border-border, rounded-md | Focus ring (primary, 2px offset) | Full width, 40px min height |
| Nav links | text-foreground, hover accent color | Color shift to accent, underline | Collapse to mobile menu below lg |

## Motion & Animation

- **Entrance**: `fade-in-up` 0.4s (cards, sections on scroll)
- **Interaction**: `transition-smooth` 0.2s cubic-bezier (hover lift, color shift)
- **Floating buttons**: `pulse` (subtle, 2s interval, 10% opacity)
- **No bouncy or exaggerated easing** — use ease-out for entries, ease-in-out for reversible interactions

## Signature Detail
**Accent dots**: Small orange circles (2–4px diameter) positioned asymmetrically in section margins as micro-decorative elements. Creates visual interest and reinforces accent color without clutter.

## Responsive Breakpoints
- **sm**: 640px — mobile optimized (single-column stacks)
- **md**: 768px — tablet (2–3 column grids)
- **lg**: 1024px — desktop full-width layouts

## Anti-patterns to Avoid
- ❌ Rounded containers for every section (use flat backgrounds + borders)
- ❌ Warm gray borders (use cool grays, or primary/accent for emphasis)
- ❌ Rainbow color palettes (only 5 semantic colors)
- ❌ Uniform shadows everywhere (use hierarchy: sm baseline, md/lg on hover/elevation)
- ❌ Default Tailwind rounded-full for buttons (use rounded-lg for consistency)

## Constraints
- **Typography**: Fraunces + DM Sans only; no third fonts without design review
- **Colors**: Only OKLCH tokens from CSS variables (no hex, rgb, or arbitrary values)
- **Spacing**: Stick to 4px grid (multiples of 0.5rem, 1rem, 1.5rem, 2rem, 3rem)
- **Shadows**: Use defined shadow hierarchy (sm, md, lg) — no custom blur/spread values
- **Animations**: 0.2–0.4s duration, ease-out/ease-in-out only (no ease-in on entrance)
