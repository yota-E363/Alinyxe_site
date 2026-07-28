# Design System

The visual system is token-driven. Most UI should use semantic Tailwind classes that map to CSS variables from `src/app/globals.css`.

## Core Tokens

These tokens are active in both light and dark themes:

- `background`
- `foreground`
- `card`
- `card-foreground`
- `popover`
- `popover-foreground`
- `primary`
- `primary-foreground`
- `secondary`
- `secondary-foreground`
- `muted`
- `muted-foreground`
- `accent`
- `accent-foreground`
- `destructive`
- `destructive-foreground`
- `border`
- `input`
- `ring`
- `chart-1`
- `chart-2`
- `chart-3`
- `chart-4`
- `chart-5`
- `sidebar`
- `sidebar-foreground`
- `sidebar-primary`
- `sidebar-primary-foreground`
- `sidebar-accent`
- `sidebar-accent-foreground`
- `sidebar-border`
- `sidebar-ring`

## Typography And Shape

- `--font-sans` maps to `DM Sans`.
- `--font-heading` maps to `Clash Display`.
- `--font-mono` maps to `JetBrains Mono`.
- `--radius` controls the rounded scale used across cards, pills, dialogs, and buttons.
- The global heading hierarchy uses `font-heading` for `h1`, `h2`, and `h3`.

## Usage Convention

- Use Tailwind semantic classes like `bg-background`, `text-foreground`, `border-border`, `bg-card`, and `text-muted-foreground` instead of hardcoded color values.
- Use `cn()` from `@/lib/utils` to compose classes and resolve conditional Tailwind utilities safely.
- Prefer semantic tokens for backgrounds, borders, text, and surfaces. Reserve hardcoded colors for brand assets, gradients, or art-direction-specific SVG effects.
- When a component needs a custom overlay or glow, keep it tied to CSS variables with `color-mix(...)` or existing theme tokens so it still works in both themes.

## Responsive Convention

- Mobile-first classes are the default.
- Add `sm:`, `md:`, and `lg:` overrides only when a component needs to change layout or density at larger breakpoints.
- Preserve existing desktop layouts unless a component explicitly needs responsive refinement.

## Dark Mode

- Dark mode is controlled by the `dark` class on the root element.
- Theme state is handled by `ThemeProvider` in `src/lib/theme.tsx`.
- The component system assumes theme tokens, not separate light and dark color palettes in component code.
