'use client'

import { ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function CTA() {
  const { t } = useLocale();
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-card to-card p-12 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 0%, oklch(0.62 0.18 260 / 0.45), transparent 60%)",
          }}
        />
        <div className="relative">
          <h3 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.home.cta.title}
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">{t.home.cta.subtitle}</p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-5px_rgba(99,102,241,0.6)] transition hover:bg-primary/90"
          >
            {t.common.buttons.book}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;