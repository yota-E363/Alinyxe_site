'use client'

import { useLocale } from "@/lib/i18n/Locale-context";

export function HowItWorks() {
  const { t } = useLocale();
  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-72 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.62 0.18 260 / 0.18), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex max-w-full flex-wrap items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-primary sm:text-xs">
            {t.home.how.eyebrow}
          </span>
          <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            {t.home.how.title}
          </h2>
          <p className="mt-4 text-balance text-sm text-foreground/65 sm:text-base">
            {t.home.how.subtitle}
          </p>
        </div>
        <ol className="mt-12 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.home.how.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative flex h-full flex-col rounded-2xl border border-border bg-card/60 p-4 sm:p-5 lg:p-6"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary sm:text-xs">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold tracking-tight text-foreground sm:text-lg">
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
