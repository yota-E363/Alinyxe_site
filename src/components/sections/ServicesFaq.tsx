"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { FaqAccordion } from "@/components/ui/faq-accordion";

export function ServicesFaq() {
  const { t } = useLocale();
  const faq = t.services.faq;

  return (
    <FaqAccordion
      eyebrow={faq.eyebrow}
      title={faq.title}
      subtitle={faq.subtitle}
      items={faq.items}
    />
  );
}

export default ServicesFaq;
