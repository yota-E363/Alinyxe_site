"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { OutcomePanel } from "@/components/ui/outcome-panel";

export function AboutOutcomes() {
  const { t } = useLocale();
  const outcomes = t.about.offerings.outcomes;

  return (
    <OutcomePanel
      eyebrow={outcomes.eyebrow}
      title={outcomes.title}
      subtitle={outcomes.subtitle}
      stats={outcomes.stats}
      ctaLabel={outcomes.ctaLabel}
    />
  );
}

export default AboutOutcomes;
