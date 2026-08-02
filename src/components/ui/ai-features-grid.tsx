"use client";

import * as React from "react";
import { Sparkles as SparkleIcon, Cog, LineChart, Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const gridBackground = {
  backgroundImage: `
    linear-gradient(to right, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px)
  `,
  backgroundSize: "28px 28px",
};

function CardShell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-border bg-card p-6",
        className
      )}
    >
      {children}
    </div>
  );
}

const STEP_ICONS = [SparkleIcon, Cog, LineChart];

function WorkflowStepsVisual({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      {steps.map((step, i) => {
        const StepIcon = STEP_ICONS[i % STEP_ICONS.length];
        return (
          <div
            key={step}
            className="flex items-center gap-3 rounded-xl border border-border bg-background/40 px-4 py-3"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
              <StepIcon className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium text-foreground">{step}</span>
          </div>
        );
      })}
    </div>
  );
}

function NlpWaveVisual() {
  const bars = [0.55, 0.4, 0.35, 0.75, 0.9, 0.5, 0.65, 0.7, 0.45, 0.85];
  const width = 300;
  const height = 160;
  const path = `M 4 ${height * 0.6} C ${width * 0.2} ${height * 0.15}, ${width * 0.32} ${height * 0.75}, ${width * 0.48} ${height * 0.35} S ${width * 0.68} ${height * 0.15}, ${width * 0.82} ${height * 0.55} S ${width - 8} ${height * 0.2}, ${width - 4} ${height * 0.15}`;

  return (
    <div className="relative h-40 w-full" style={gridBackground}>
      <div className="absolute inset-0 flex items-end justify-between gap-2 px-1 pb-2">
        {bars.map((v, i) => (
          <span
            key={i}
            className="w-full rounded-t-md bg-muted-foreground/25"
            style={{ height: `${v * 100}%` }}
          />
        ))}
      </div>
      <svg
        className="absolute inset-0"
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <path d={path} stroke="var(--primary)" strokeWidth={2.5} strokeLinecap="round" />
      </svg>
    </div>
  );
}

function PredictiveAnalyticsVisual() {
  const width = 280;
  const height = 160;
  const path = `M 4 ${height * 0.75} C ${width * 0.2} ${height * 0.15}, ${width * 0.3} ${height * 0.85}, ${width * 0.42} ${height * 0.4} S ${width * 0.62} ${height * 0.1}, ${width * 0.72} ${height * 0.55} S ${width - 6} ${height * 0.1}, ${width - 4} ${height * 0.1}`;

  return (
    <div className="relative h-40 w-full" style={gridBackground}>
      <svg
        className="absolute inset-0"
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d={path}
          className="text-muted-foreground/30"
          stroke="currentColor"
          strokeWidth={2}
          strokeDasharray="4 4"
        />
        <path
          d={path}
          stroke="var(--primary)"
          strokeWidth={2.5}
          strokeLinecap="round"
          transform="translate(0 18)"
        />
      </svg>
    </div>
  );
}

function DataVisualizationVisual({ metrics }: { metrics: string[] }) {
  const values = [0.55, 0.85, 0.35];
  return (
    <div className="flex h-40 w-full flex-col justify-center gap-5">
      {metrics.map((label, i) => (
        <div key={label} className="flex flex-col gap-2">
          <span className="text-sm text-foreground">{label}</span>
          <div className="h-2.5 w-full rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${(values[i % values.length] ?? 0.5) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function DecisionMakingVisual() {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-primary/40">
        <Brain className="h-10 w-10 text-primary" strokeWidth={1.5} />
      </div>
    </div>
  );
}

export interface AIFeaturesGridProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  workflow: {
    title: string;
    description: string;
    steps: string[];
  };
  nlp: {
    title: string;
    description: string;
  };
  predictive: {
    title: string;
    description: string;
  };
  visualization: {
    title: string;
    description: string;
    metrics: string[];
  };
  decision: {
    title: string;
    description: string;
  };
  ctaLabel: string;
  className?: string;
}

export function AIFeaturesGrid({
  eyebrow,
  title,
  subtitle,
  workflow,
  nlp,
  predictive,
  visualization,
  decision,
  ctaLabel,
  className,
}: AIFeaturesGridProps) {
  return (
    <section className={cn("relative px-6 py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-balance text-base text-muted-foreground">{subtitle}</p>
        </div>

        <div className="mt-16 flex flex-wrap items-stretch justify-center gap-5">
          <CardShell className="w-full sm:w-[calc(50%-10px)]">
            <WorkflowStepsVisual steps={workflow.steps} />
            <h3 className="mt-8 text-2xl font-semibold text-card-foreground">{workflow.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{workflow.description}</p>
          </CardShell>

          <CardShell className="w-full sm:w-[calc(50%-10px)]">
            <NlpWaveVisual />
            <h3 className="mt-8 text-2xl font-semibold text-card-foreground">{nlp.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{nlp.description}</p>
          </CardShell>

          <CardShell className="w-full sm:w-[calc(33.333%-14px)]">
            <PredictiveAnalyticsVisual />
            <h3 className="mt-8 text-xl font-semibold text-card-foreground">{predictive.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{predictive.description}</p>
          </CardShell>

          <CardShell className="w-full sm:w-[calc(33.333%-14px)]">
            <DataVisualizationVisual metrics={visualization.metrics} />
            <h3 className="mt-8 text-xl font-semibold text-card-foreground">{visualization.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{visualization.description}</p>
          </CardShell>

          <CardShell className="w-full sm:w-[calc(33.333%-14px)]">
            <DecisionMakingVisual />
            <h3 className="mt-8 text-xl font-semibold text-card-foreground">{decision.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{decision.description}</p>
          </CardShell>
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg" className="rounded-full px-6">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AIFeaturesGrid;
