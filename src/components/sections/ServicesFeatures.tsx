"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { AIFeaturesGrid } from "@/components/ui/ai-features-grid";

export function ServicesFeatures() {
  const { t } = useLocale();
  const features = t.services.features;

  return (
    <AIFeaturesGrid
      eyebrow={features.eyebrow}
      title={features.title}
      subtitle={features.subtitle}
      workflow={features.workflow}
      nlp={features.nlp}
      predictive={features.predictive}
      visualization={features.visualization}
      decision={features.decision}
      ctaLabel={features.cta}
    />
  );
}

export default ServicesFeatures;
