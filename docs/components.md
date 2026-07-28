# Components

This is an inventory of the reusable UI in the repository. For primitives that follow shadcn/radix patterns, the docs note the custom props and the general purpose instead of repeating every upstream prop.

## Layout Components

- `Navbar` (`src/layouts/Navbars/Navbar.tsx`): desktop top navigation. Props: none. Uses the current pathname and locale labels internally.
- `NavbarMobile` (`src/layouts/Navbars/NavbarMobile.tsx`): mobile bottom navigation. Props: none. Passes link items into `BumpNavbar`.
- `Footer` (`src/layouts/Footer.tsx`): shared footer. Props: none.
- `LanguageSwitcher` (`src/layouts/LanguageSwitcher.tsx`): toggles between `fr` and `en`. Props: none.
- `ThemeToggle` (`src/layouts/ThemeToggle.tsx`): toggles light/dark mode. Props: none.

## Section Components

- `Hero` (`src/components/sections/Hero/index.tsx`): landing-page hero. Props: none.
- `HeroBackground` (`src/components/sections/Hero/components/HeroBackground.tsx`): animated or static background chooser for the hero. Props: none.
- `Blobs` (`src/components/sections/Hero/components/Blobs.tsx`): 3D blob background effect. Props: none.
- `LaserBeam` (`src/components/sections/Hero/components/LaserBeam.tsx`): WebGL light-beam effect. Props: `color?`, `intensity?`, `className?`.
- `Services` (`src/components/sections/Services.tsx`): services grid. Props: none.
- `HowItWorks` (`src/components/sections/HowItWorks.tsx`): the 4-step work/process section. This is the codebase equivalent of a `WorkSteps` component. Props: none.
- `FAQ` (`src/components/sections/FAQ/index.tsx`): home-page feature showcase using preview cards. Props: none.
- `Testimonials` (`src/components/sections/Testimonials.tsx`): testimonials section. Props: none.
- `Newsletter` (`src/components/sections/Newsletter.tsx`): newsletter signup section. Props: none.
- `CTA` (`src/components/sections/CTA.tsx`): call-to-action section. Props: none.
- `Feature` (`src/components/sections/Feature.tsx`): FAQ/feature section variant that renders the same reusable preview cards. Props: none.
- `SectionHeader` (`src/components/sections/SectionHeader.tsx`): simple eyebrow/title/subtitle header. Props: `eyebrow?`, `title`, `subtitle?`, `align?`.
- `SectionTitle` (`src/components/sections/SectionTitle/index.tsx`): decorative section title block with pattern background and badge. Props: `eyebrow`, `title`, `subtitle?`, `align?`, `patternSrc?`, `className?`.
- `SectionBadge` (`src/components/sections/SectionTitle/SectionBadge.tsx`): eyebrow badge used by `SectionTitle`. Props: `label`, `className?`.

## FAQ Preview Widgets

- `FeatureCard` (`src/components/sections/FAQ/components/ui/Feature-card.tsx`): branded card shell for the feature previews. Props: `title`, `description?`, `children`, `className?`, `grid?`, `centered?`.
- `NotificationsPreview` (`src/components/sections/FAQ/components/Notifications-preview.tsx`): notification list mockup. Props: `items?`, `buttonLabel?`, `className?`.
- `ChatPreview` (`src/components/sections/FAQ/components/Chat-preview.tsx`): chat conversation mockup. Props: `title?`, `messages?`, `className?`.
- `GrowthChart` (`src/components/sections/FAQ/components/Growth-chart.tsx`): line-chart preview with pointer tooltip. Props: `growthLabel?`, `targetValue?`, `changeValue?`, `changeLabel?`, `className?`.
- `GaugeChart` (`src/components/sections/FAQ/components/Gauge-chart.tsx`): semicircle gauge visualization. Props: `value`, `size?`, `className?`.
- `AnalyticsDashboard` (`src/components/sections/FAQ/components/Analytics-dashboard.tsx`): dashboard-style bar chart preview. Props: `query?`, `values?`, `highlightIndex?`, `className?`.

## Branding Icons

- `Icon` (`src/components/icons/icon.tsx`): raw brand SVG. Props: `size?`, `className?`, `color?`.
- `Logo` (`src/components/icons/logo.tsx`): brand mark plus wordmark. Props: `showText?`, `className?`, `size?`.
- `ArrowRight` (`src/components/icons/arrow-right.tsx`): animated arrow icon. Props: `size?` plus normal div event/HTML attributes.
- `Sparkles` (`src/components/icons/sparkles.tsx`): animated sparkles icon. Props: `size?` plus normal div event/HTML attributes.

## Shared UI Primitives

### Core Building Blocks

- `Button` (`src/components/ui/button.tsx`): primary interactive control. Props: standard button props, `variant?`, `size?`, `asChild?`.
- `Badge` (`src/components/ui/badge.tsx`): small status label. Props: standard span props, `variant?`, `asChild?`.
- `Card` family (`src/components/ui/card.tsx`): `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter`. `Card` props: standard div props plus `size?`.
- `Alert` family (`src/components/ui/alert.tsx`): `Alert`, `AlertTitle`, `AlertDescription`, `AlertAction`. `Alert` props: standard div props plus `variant?`.
- `Sheet` family (`src/components/ui/sheet.tsx`): `Sheet`, `SheetTrigger`, `SheetClose`, `SheetPortal`, `SheetOverlay`, `SheetContent`, `SheetHeader`, `SheetFooter`, `SheetTitle`, `SheetDescription`. `SheetContent` adds `side?` and `showCloseButton?`.
- `Dialog` family (`src/components/ui/dialog.tsx`): modal dialog wrapper and parts. Props follow the underlying radix dialog primitives with project styling.
- `AlertDialog` family (`src/components/ui/alert-dialog.tsx`): destructive confirmation dialog wrapper and parts. Props follow the underlying radix alert-dialog primitives.
- `Drawer` family (`src/components/ui/drawer.tsx`): bottom-sheet style drawer and parts. Props follow the underlying drawer primitives and placement variants.
- `Popover` family (`src/components/ui/popover.tsx`): popover wrapper and parts. Props follow the underlying radix popover primitives.
- `HoverCard` family (`src/components/ui/hover-card.tsx`): hover preview wrapper and parts. Props follow the underlying radix hover-card primitives.
- `Tooltip` family (`src/components/ui/tooltip.tsx`): tooltip wrapper and parts. Props follow the underlying radix tooltip primitives.
- `DropdownMenu`, `ContextMenu`, `Menubar`, `NavigationMenu`: menu primitives with standard radix props and project styling.
- `Command` (`src/components/ui/command.tsx`): command palette/search menu primitives. Props follow the cmdk API and the local wrapper parts.

### Form And Input Controls

- `Input` (`src/components/ui/input.tsx`): text input. Props: standard input props.
- `Textarea` (`src/components/ui/textarea.tsx`): multiline input. Props: standard textarea props.
- `Label` (`src/components/ui/label.tsx`): form label. Props: standard label props.
- `Checkbox` (`src/components/ui/checkbox.tsx`): checkbox control. Props follow radix checkbox props.
- `RadioGroup` family (`src/components/ui/radio-group.tsx`): radio list and items. Props follow radix radio-group props.
- `Switch` (`src/components/ui/switch.tsx`): toggle switch. Props follow radix switch props.
- `Slider` (`src/components/ui/slider.tsx`): range slider. Props follow radix slider props.
- `Select` family (`src/components/ui/select.tsx`): select dropdown and parts. Props follow radix select props.
- `InputGroup` family (`src/components/ui/input-group.tsx`): compound input control. `InputGroupAddon` adds `align?`; `InputGroupButton` adds `variant?` and `size?`; `InputGroupText`, `InputGroupInput`, and `InputGroupTextarea` are composition helpers.
- `InputOTP` (`src/components/ui/input-otp.tsx`): one-time-password input. Props follow the input-otp library API.
- `Toggle` (`src/components/ui/toggle.tsx`): on/off button. Props: radix toggle props plus `variant?` and `size?`.
- `ToggleGroup` (`src/components/ui/toggle-group.tsx`): grouped toggle controls. Props follow the radix toggle-group API plus styling variants.

### Navigation And Structure

- `Breadcrumb` (`src/components/ui/breadcrumb.tsx`): breadcrumb trail. Props follow the breadcrumb primitive API.
- `Pagination` family (`src/components/ui/pagination.tsx`): `Pagination`, `PaginationContent`, `PaginationItem`, `PaginationLink`, `PaginationPrevious`, `PaginationNext`, `PaginationEllipsis`. `PaginationLink` adds `isActive?` and `size?`; previous/next accept `text?`.
- `Separator` (`src/components/ui/separator.tsx`): visual divider. Props follow radix separator props.
- `Tabs` family (`src/components/ui/tabs.tsx`): `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`. `Tabs` adds `orientation?`; `TabsList` adds `variant?`.
- `Collapsible` (`src/components/ui/collapsible.tsx`): collapsible panel primitive. Props follow radix collapsible props.
- `Accordion` (`src/components/ui/accordion.tsx`): collapsible list primitive. Props follow radix accordion props.
- `Resizable` (`src/components/ui/resizable.tsx`): resizable panel primitives. Props follow the resizable-panels API.
- `Sidebar` family (`src/components/ui/sidebar.tsx`): full sidebar layout system. Props follow the sidebar API and variant/collapse state props defined in that file.

### Data Display

- `Avatar` (`src/components/ui/avatar.tsx`): user avatar image/group. Props follow radix avatar props.
- `Table` (`src/components/ui/table.tsx`): table shell and parts. Props follow semantic table element props.
- `Calendar` (`src/components/ui/calendar.tsx`): date picker shell. Props follow the calendar/day-picker API.
- `Chart` (`src/components/ui/chart.tsx`): chart context and helpers for consistent chart styling. Props follow the local chart context API.
- `Progress` (`src/components/ui/progress.tsx`): progress bar. Props follow radix progress props.
- `Skeleton` (`src/components/ui/skeleton.tsx`): loading placeholder. Props: standard div props.
- `AspectRatio` (`src/components/ui/aspect-ratio.tsx`): aspect-ratio container. Props follow radix aspect-ratio props.
- `ScrollArea` (`src/components/ui/scroll-area.tsx`): styled scroll container. Props follow radix scroll-area props.
- `Carousel` (`src/components/ui/carousel.tsx`): embla-based carousel shell and helpers. Props follow the local carousel API.
- `BumpNavbar` (`src/components/ui/BumpNavbar.tsx`): animated bottom nav bar. Props: `items`, `classNames?`, `borderWidth?`.
- `FloatingDock` (`src/components/ui/floating-dock.tsx`): animated desktop/mobile dock nav. Props: `items`, `desktopClassName?`, `mobileClassName?`.
- `Sonner` toaster wrapper (`src/components/ui/sonner.tsx`): global toast host. Props follow `sonner` toaster props.

## Notes

- The app-specific section components are the main reusable building blocks for page composition.
- The `src/components/ui` folder holds the lower-level primitives. Most of those are thin wrappers around radix/shadcn patterns with project styling.
