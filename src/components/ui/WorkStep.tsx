"use client";

import * as React from "react";
import { MessagesSquare, FileCheck2, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export interface WorkStepItem {
  title: string;
  description: string;
}

export interface WorkStepProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: WorkStepItem[];
  className?: string;
}

const STEP_ICONS = [MessagesSquare, FileCheck2, Rocket];

export function WorkStep({ eyebrow, title, subtitle, steps, className }: WorkStepProps) {
  return (
    <section className={cn("relative px-6 py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-balance text-base text-muted-foreground">{subtitle}</p>
        </div>

        <ol className="mt-16 flex flex-col gap-5">
          {steps.map((step, i) => {
            const StepIcon = STEP_ICONS[i % STEP_ICONS.length];
            return (
              <li
                key={step.title}
                className="relative flex flex-col items-start gap-6 overflow-hidden rounded-[28px] border border-border bg-card p-6 sm:flex-row sm:items-center sm:p-8"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 select-none font-heading text-[6rem] font-bold leading-none text-muted-foreground/10 sm:text-[8rem]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <StepIcon className="h-6 w-6" />
                </span>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-card-foreground sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default WorkStep;
