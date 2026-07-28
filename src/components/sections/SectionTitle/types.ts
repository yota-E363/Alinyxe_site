// ─────────────────────────────────────────────
// INTERFACES PROPS
// ─────────────────────────────────────────────

export type SectionTitleAlign = "center" | "left";

export interface SectionBadgeProps {
  label: string;
  className?: string;
}

export interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: SectionTitleAlign;
  /** @default "/images/HeaderBgPattern.svg" */
  patternSrc?: string;
  className?: string;
}

// ─────────────────────────────────────────────
// DESIGN — tout le visuel est déclaré ici
// ─────────────────────────────────────────────

export const styles = {

  /* Section wrapper */
  section: {
    position: "relative",
    padding: "80px 24px 60px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },

  /*
   * Halo lumineux — utilise var(--primary) via color-mix
   * pour s'adapter automatiquement light / dark.
   * Light : halo bleu subtil sur fond clair
   * Dark  : halo bleu plus intense sur fond sombre
   */
  halo: {
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    paddingBottom: "15%",
    borderRadius: "50%",
    background: [
      "radial-gradient(circle at center,",
      "  color-mix(in oklch, var(--primary) 10%, transparent) 0%,",
      "  color-mix(in oklch, var(--primary) 10%, transparent) 40%,",
      "  transparent 70%",
      ")",
    ].join(""),
    filter: "blur(24px)",
    pointerEvents: "none",
    zIndex: 0,
  },

  /* Conteneur du SVG pattern */
  patternWrapper: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "24px",
    pointerEvents: "none",
    zIndex: 1,
  },

  /* Image SVG
   * Light : opacité basse pour ne pas surcharger
   * Dark  : opacité plus haute pour être visible
   * → on utilise une opacité moyenne qui convient aux deux
   */
  patternImage: {
    width: "100%",
    maxWidth: "700px",
    opacity: 1,
    userSelect: "none",
  },

  /* Wrapper du badge eyebrow */
  badgeWrapper: {
    position: "relative",
    zIndex: 2,
    marginBottom: "20px",
  },

  /* Pill badge
   * --border et --card s'adaptent automatiquement light/dark
   */
  badge: {
    display: "inline-flex",
    alignItems: "center",
    border: "1px solid var(--border)",
    borderRadius: "999px",
    padding: "4px 14px",
    background: "var(--card)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
  },

  /* Texte du badge — --primary reste le même bleu dans les deux thèmes */
  badgeLabel: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--primary)",
    fontFamily: "var(--font-sans)",
    lineHeight: 1,
  },

  /* Titre h2 — Clash Display via --font-heading (défini dans globals.css) */
  heading: {
    position: "relative",
    zIndex: 2,
    margin: "0 0 16px",
    fontSize: "clamp(28px, 5vw, 46px)",
    fontWeight: 600,
    lineHeight: 1.15,
    letterSpacing: "var(--tracking-normal)",
    color: "var(--foreground)",   /* adapte automatiquement light/dark */
    fontFamily: "var(--font-heading)",
    maxWidth: "640px",
  },

  /* Sous-titre — --muted-foreground adapte automatiquement */
  subtitle: {
    position: "relative",
    zIndex: 2,
    margin: 0,
    fontSize: "15px",
    lineHeight: 1.65,
    color: "var(--muted-foreground)",
    fontFamily: "var(--font-sans)",
    maxWidth: "480px",
  },

} as const;
