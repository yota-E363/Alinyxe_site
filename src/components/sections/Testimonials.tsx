'use client'

import { Quote } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { SectionHeader } from "./SectionHeader";

export function Testimonials() {
  const { t } = useLocale();
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={t.home.testimonials.eyebrow} title={t.home.testimonials.title} />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {t.home.testimonials.items.map((item) => (
            <figure
              key={item.author}
              className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card/60 p-6"
            >
              <Quote className="h-6 w-6 text-primary/70" />
              <blockquote className="mt-4 text-base leading-relaxed text-foreground/85">
                "{item.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border/70 pt-4">
                <div className="text-sm font-medium text-foreground">{item.author}</div>
                <div className="text-xs text-foreground/60">{item.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;