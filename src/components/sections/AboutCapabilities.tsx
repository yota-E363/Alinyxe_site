"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { CapabilityShowcase } from "@/components/ui/capability-showcase";

export function AboutCapabilities() {
  const { t } = useLocale();
  const capabilities = t.about.offerings.capabilities;

  return (
    <CapabilityShowcase
      eyebrow={capabilities.eyebrow}
      title={capabilities.title}
      subtitle={capabilities.subtitle}
      items={capabilities.items}
    />
  );
}

export default AboutCapabilities;
