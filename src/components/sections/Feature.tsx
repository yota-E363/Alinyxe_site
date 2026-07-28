'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { SectionHeader } from "./SectionHeader";

export function FAQ() {
  const { t } = useLocale();
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow={t.home.faq.eyebrow} title={t.home.faq.title} />
        <Accordion type="single" collapsible className="mt-12 w-full">
          {t.home.faq.items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-border first:border-t"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;