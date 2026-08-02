"use client";

import * as React from "react";
import { Search, Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AiPipelineStep {
  title: string;
  description: string;
}

export interface AiPipelineFlowProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: [AiPipelineStep, AiPipelineStep, AiPipelineStep];
  className?: string;
}

function VisualPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-2xl border border-border bg-secondary/40 sm:h-[200px] md:h-[220px] md:w-[320px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 90%)",
        }}
      />
      <div className="relative flex h-full items-center justify-center p-6">{children}</div>
    </div>
  );
}

function DataConnectVisual() {
  const keys = [1, 1, 1, 1, 1, 1, 0.6, 1];
  return (
    <div className="flex w-full max-w-[220px] flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              "flex h-8 w-14 items-center gap-1 rounded-lg border border-border bg-card px-2",
              i === 1 && "border-primary/40 bg-primary/10"
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                i === 1 ? "bg-primary" : "bg-muted-foreground/40"
              )}
            />
            <span className="h-1 flex-1 rounded-full bg-muted-foreground/20" />
          </div>
        ))}
      </div>
      <svg viewBox="0 0 200 24" className="h-4 w-full text-muted-foreground/40" fill="none">
        <path d="M20 4 L100 20 L180 4" stroke="currentColor" strokeWidth={1.5} strokeDasharray="3 4" />
      </svg>
      <div className="grid w-full grid-cols-6 gap-1.5">
        {keys.map((opacity, i) => (
          <span
            key={i}
            className="h-4 rounded-[4px] bg-muted-foreground/25"
            style={{ opacity }}
          />
        ))}
        <span className="col-span-3 h-4 rounded-[4px] bg-primary/70" />
        <span className="col-span-3 h-4 rounded-[4px] bg-muted-foreground/25" />
      </div>
    </div>
  );
}

function AiAnalysisVisual() {
  const bars = [0.35, 0.55, 0.9, 0.65, 0.45, 0.3];
  return (
    <div className="relative flex h-full w-full max-w-[220px] items-end justify-center gap-2.5 pb-2">
      {bars.map((v, i) => (
        <span
          key={i}
          className="w-6 rounded-t-md"
          style={{
            height: `${v * 100}%`,
            background:
              i === 2
                ? "linear-gradient(180deg, var(--primary) 0%, color-mix(in oklch, var(--primary) 30%, transparent) 100%)"
                : "linear-gradient(180deg, var(--muted-foreground) 0%, transparent 100%)",
            opacity: i === 2 ? 1 : 0.4,
          }}
        />
      ))}
      <svg
        viewBox="0 0 220 90"
        className="pointer-events-none absolute inset-0 h-full w-full text-primary"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M6 60 C 40 45, 60 70, 90 40 S 150 10, 214 20"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm">
        <Search className="h-4 w-4" />
      </span>
    </div>
  );
}

function OptimizeVisual() {
  return (
    <div className="flex h-full w-full max-w-[240px] items-center justify-between gap-4">
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
        <Settings2 className="absolute h-10 w-10 -translate-x-2 -translate-y-2 text-muted-foreground/50" />
        <Settings2 className="h-7 w-7 translate-x-2 translate-y-2 text-primary" />
        <svg
          viewBox="0 0 64 64"
          className="absolute -left-3 -top-3 h-8 w-8 text-primary"
          fill="none"
        >
          <path
            d="M8 32 A 20 20 0 0 1 40 14"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <path d="M34 8 L41 14 L33 18" fill="currentColor" stroke="none" />
        </svg>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        {[1, 0.8, 1, 0.6, 0.9].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className={cn(
                "h-2 w-2 shrink-0 rounded-full border",
                i === 0 ? "border-primary bg-primary" : "border-muted-foreground/40 bg-transparent"
              )}
            />
            <span
              className="h-2 rounded-full bg-muted-foreground/20"
              style={{ width: `${w * 100}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const STEP_VISUALS = [DataConnectVisual, AiAnalysisVisual, OptimizeVisual];

export function AiPipelineFlow({ eyebrow, title, subtitle, steps, className }: AiPipelineFlowProps) {
  return (
    <section className={cn("relative px-4 py-16 sm:px-6 sm:py-20 lg:py-28", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in oklch, var(--primary) 18%, transparent), transparent 70%)",
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

        <ol className="mt-12 flex flex-col gap-4 sm:mt-16 sm:gap-5">
          {steps.map((step, i) => {
            const Visual = STEP_VISUALS[i];
            return (
              <li
                key={step.title}
                className="flex flex-col gap-6 rounded-3xl border border-border bg-card/60 p-5 sm:p-6 md:flex-row md:items-center md:gap-8 md:p-8"
              >
                <VisualPanel>
                  <Visual />
                </VisualPanel>
                <div className="flex flex-1 items-center gap-4 sm:gap-6">
                  <span
                    aria-hidden
                    className="select-none font-heading text-5xl font-bold leading-none text-muted-foreground/15 sm:text-6xl lg:text-7xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-card-foreground sm:text-xl lg:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default AiPipelineFlow;
