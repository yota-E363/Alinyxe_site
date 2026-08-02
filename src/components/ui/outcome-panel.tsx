"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface OutcomeStat {
  value: string;
  label: string;
}

export interface OutcomePanelProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  stats: [OutcomeStat, OutcomeStat, OutcomeStat];
  ctaLabel: string;
  className?: string;
}

export function OutcomePanel({
  eyebrow,
  title,
  subtitle,
  stats,
  ctaLabel,
  className,
}: OutcomePanelProps) {
  return (
    <section className={cn("relative px-4 py-16 sm:px-6 sm:py-20 lg:py-28", className)}>
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-6 sm:p-10 lg:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 90%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 90%)",
            }}
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-primary sm:text-xs">
              {eyebrow}
            </span>
            <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-balance text-sm text-muted-foreground sm:text-base">
              {subtitle}
            </p>
          </div>

          <div className="relative mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-2xl border border-border bg-background/40 px-4 py-6 text-center"
              >
                <span className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="relative mt-10 flex justify-center">
            <Button size="lg" className="rounded-full px-6">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OutcomePanel;
