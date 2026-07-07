'use client'

import { useLocale } from "@/lib/i18n/LocaleContext";
import { SectionHeader } from "./SectionHeader";

export function HowItWorks() {
  const { t } = useLocale();
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-72 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.62 0.18 260 / 0.18), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t.home.how.eyebrow}
          title={t.home.how.title}
          subtitle={t.home.how.subtitle}
        />
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.how.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-border bg-card/60 p-6"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;