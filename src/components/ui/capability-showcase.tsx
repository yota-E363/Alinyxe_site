"use client";

import { Languages, LineChart, Gauge, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CapabilityItem {
  title: string;
  description: string;
}

export interface CapabilityShowcaseProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: CapabilityItem[];
  className?: string;
}

const CAPABILITY_ICONS = [Languages, LineChart, Gauge, ShieldCheck];

export function CapabilityShowcase({
  eyebrow,
  title,
  subtitle,
  items,
  className,
}: CapabilityShowcaseProps) {
  return (
    <section className={cn("relative px-4 py-16 sm:px-6 sm:py-20 lg:py-28", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-72 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in oklch, var(--primary) 16%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-primary sm:text-xs">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-balance text-sm text-muted-foreground sm:text-base">
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = CAPABILITY_ICONS[i % CAPABILITY_ICONS.length];
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border-l-2 border-primary/40 bg-card/40 p-5 sm:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-card-foreground sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CapabilityShowcase;
