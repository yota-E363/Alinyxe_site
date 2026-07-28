'use client'

import { ArrowRight } from "@/components/icons";
import { useLocale } from "@/lib/i18n/locale-context";
//import { HeroBackground } from "@/components/hero/HeroBackground";

export function Hero() {
  const { t } = useLocale();
  return (
    <section className="relative isolate overflow-hidden">
     {/* <HeroBackground /> */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-6 pb-24 pt-40 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_currentColor]" />
          {t.home.hero.eyebrow}
        </span>

        <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {t.home.hero.title}{" "}
          <span className="bg-gradient-to-r from-primary via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {t.home.hero.titleAccent}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-base text-foreground/70 sm:text-lg">
          {t.home.hero.subtitle}
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-5px_rgba(99,102,241,0.6)] transition hover:bg-primary/90"
          >
            {t.common.buttons.start}

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground/85 backdrop-blur-sm transition hover:bg-card"
          >
            {t.common.buttons.discover}
          </a>
        </div>

        <dl className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {t.home.hero.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-border bg-card/40 px-5 py-5 text-left backdrop-blur-sm"
            >
              <dt className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {m.value}
              </dt>
              <dd className="mt-1 text-sm text-foreground/65">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Hero;