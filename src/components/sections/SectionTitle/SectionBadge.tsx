import type { SectionBadgeProps } from "./types";
import { styles as S } from "./types";

export function SectionBadge({ label, className }: SectionBadgeProps) {
  return (
    <div className={className} style={S.badge}>
      <span style={S.badgeLabel}>{label}</span>
    </div>
  );
}
