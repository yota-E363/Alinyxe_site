"use client";

import { Bot, Brain, Plug, Workflow, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceCategoryItem {
  title: string;
  description: string;
  features: string[];
}

export interface ServiceCategoryGridProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: ServiceCategoryItem[];
  className?: string;
}

const CATEGORY_ICONS = [Brain, Workflow, Bot, Plug];

export function ServiceCategoryGrid({
  eyebrow,
  title,
  subtitle,
  items,
  className,
}: ServiceCategoryGridProps) {
  return (
    <section className={cn("relative px-4 py-16 sm:px-6 sm:py-20 lg:py-28", className)}>
      <div className="mx-auto max-w-6xl">
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

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = CATEGORY_ICONS[i % CATEGORY_ICONS.length];
            return (
              <div
                key={item.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-5 transition hover:border-primary/40 hover:bg-card sm:p-6"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/25" />
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs text-foreground/70 sm:text-sm"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceCategoryGrid;
