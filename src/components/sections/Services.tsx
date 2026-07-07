'use client'

import { Bot, Brain, Plug, Workflow } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { SectionHeader } from "./SectionHeader";

const icons = [Brain, Workflow, Bot, Plug];

export function Services() {
  const { t } = useLocale();
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t.home.services.eyebrow}
          title={t.home.services.title}
          subtitle={t.home.services.subtitle}
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.services.items.map((s, i) => {
            const Icon = icons[i] ?? Brain;
            return (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition hover:border-primary/40 hover:bg-card"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/25" />
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;