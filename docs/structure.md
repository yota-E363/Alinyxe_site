# Codebase Structure

This project is organized around the Next.js App Router, with shared UI and app-specific sections split into separate folders under `src/`.

## `src/app`

The `src/app` folder contains route entry points and the root layout.

- `src/app/layout.tsx`: wraps the app with `ThemeProvider`, `LocaleProvider`, global fonts, the desktop navbar, the mobile navbar, and the Sonner toaster.
- `src/app/page.tsx`: home route. It currently composes the `Hero` and `FAQ` sections.
- `src/app/services/page.tsx`: services route placeholder page.
- `src/app/test/page.tsx`: local sanity-check page for fonts, colors, and basic layout behavior.
- `src/app/globals.css`: global styles, CSS variables, Tailwind theme mapping, and font-face declarations.

## `src/components`

Shared components live here and are split into a few subfolders.

### `src/components/sections`

Page sections and section-level building blocks.

- `Hero/`: hero section and its visual background pieces.
- `Services.tsx`: services grid section.
- `HowItWorks.tsx`: the 4-step process section.
- `FAQ/`: home-page feature showcase with the preview cards.
- `Testimonials.tsx`: testimonial section.
- `Newsletter.tsx`: newsletter signup section.
- `CTA.tsx`: call-to-action section.
- `SectionHeader.tsx`: reusable centered section header with eyebrow, title, and optional subtitle.
- `SectionTitle/`: richer section title system with a decorative pattern, badge, and inline styles.
- `index.ts`: barrel export for the main section components.

### `src/components/ui`

Reusable UI primitives and shared widgets.

- `button.tsx`, `badge.tsx`, `card.tsx`, `alert.tsx`, `dialog.tsx`, `sheet.tsx`, `tabs.tsx`, `toggle.tsx`, `switch.tsx`, `input.tsx`, `textarea.tsx`, `select.tsx`, `checkbox.tsx`, `radio-group.tsx`, `slider.tsx`, `progress.tsx`, `label.tsx`, `avatar.tsx`, `separator.tsx`, `tooltip.tsx`, `popover.tsx`, `hover-card.tsx`, `dropdown-menu.tsx`, `context-menu.tsx`, `menubar.tsx`, `navigation-menu.tsx`, `command.tsx`, `accordion.tsx`, `collapsible.tsx`, `scroll-area.tsx`, `table.tsx`, `calendar.tsx`, `breadcrumb.tsx`, `pagination.tsx`, `resizable.tsx`, `drawer.tsx`, `alert-dialog.tsx`, `input-otp.tsx`, `carousel.tsx`, `floating-dock.tsx`, `sidebar.tsx`, `chart.tsx`, `sonner.tsx`, `input-group.tsx`, `BumpNavbar.tsx`, `aspect-ratio.tsx`, `skeleton.tsx`.
- Most of these are shadcn/radix-style wrappers. They usually accept the upstream primitive props plus `className`, with small project-specific additions like variants, sizes, or custom slots.

### `src/components/icons`

Shared icon wrappers used by the navigation and branding.

- `Icon`: the core SVG brand mark.
- `Logo`: brand mark with optional text label.
- `ArrowRight`: animated arrow icon wrapper.
- `Sparkles`: animated sparkle icon wrapper.

## `src/layouts`

Layout-level components that are reused across routes.

- `Navbar.tsx`: desktop top navigation.
- `NavbarMobile.tsx`: bottom mobile navigation with the bump-style control.
- `Footer.tsx`: shared site footer.
- `LanguageSwitcher.tsx`: locale picker.
- `ThemeToggle.tsx`: light/dark toggle.

## `src/lib`

Utility and app-state helpers.

- `utils.ts`: `cn()` helper for merging Tailwind classes safely.
- `theme.tsx`: theme provider and `useTheme()` hook.
- `i18n/locale-context.tsx`: locale provider and `useLocale()` hook.
- `i18n/types.ts`: dictionary and locale type definitions.
- `assets.ts`: shared asset references.

## `src/hooks`

- `use-mobile.ts`: viewport helper for mobile detection.

## `src/locales`

- `en.ts` and `fr.ts`: translation dictionaries.
- `index.ts`: locale registry and default locale.
