import { SectionBadge } from "./SectionBadge";
import { styles as S } from "./types";
import type { SectionTitleProps } from "./types";

export { SectionBadge } from "./SectionBadge";
export type { SectionTitleProps, SectionBadgeProps } from "./types";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  patternSrc = "/images/HeaderBgPattern.svg",
  className,
}: SectionTitleProps) {
  return (
    <section
      className={className}
      style={{
        ...S.section,
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
      }}
    >
      {/* Halo */}
      <div aria-hidden="true" style={S.halo} />

      {/* SVG pattern */}
      <div aria-hidden="true" style={S.patternWrapper}>
        <img src={patternSrc} alt="" draggable={false} style={S.patternImage} />
      </div>

      {/* Badge eyebrow */}
      <div style={S.badgeWrapper}>
        <SectionBadge label={eyebrow} />
      </div>

      {/* Titre */}
      <h2 style={{ ...S.heading, textAlign: align }}>{title}</h2>

      {/* Sous-titre */}
      {subtitle && <p style={{ ...S.subtitle, textAlign: align }}>{subtitle}</p>}
    </section>
  );
}

export default SectionTitle;
