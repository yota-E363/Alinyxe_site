"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AnalyticsDashboardProps {
  query?: string;
  values?: number[]; // hauteurs relatives, 0 à 1
  highlightIndex?: number;
  className?: string;
}

const DEFAULT_VALUES = [0.38, 0.58, 1, 0.58, 0.38];

export function AnalyticsDashboard({
  query = "The First",
  values = DEFAULT_VALUES,
  highlightIndex = 2,
  className,
}: AnalyticsDashboardProps) {
  const maxBarHeight = 150;

  return (
    <div className={cn("relative h-[232px] w-full overflow-hidden", className)}>
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 90%)",
        }}
      />

      {/* Search bar */}
      <div className="relative z-10 flex items-center justify-between rounded-full border border-border bg-secondary/60 px-4 py-2.5 text-[13px] font-medium text-foreground">
        {query}
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Bars */}
      <div className="relative z-10 mt-6 flex h-[150px] items-end justify-center gap-3 px-2">
        {values.map((v, i) => {
          const isHighlight = i === highlightIndex;
          const barHeight = Math.max(8, v * maxBarHeight);
          return (
            <div key={i} className="relative flex w-9 flex-col items-center">
              {isHighlight && (
                <span
                  className="absolute -top-3 h-2.5 w-2.5 rounded-full bg-primary-foreground"
                  style={{
                    boxShadow: "0 0 12px 4px color-mix(in oklch, var(--primary) 60%, transparent)",
                  }}
                />
              )}
              <div
                className="w-full rounded-t-xl"
                style={{
                  height: barHeight,
                  background: isHighlight
                    ? "linear-gradient(180deg, var(--primary) 0%, color-mix(in oklch, var(--primary) 40%, transparent) 100%)"
                    : "linear-gradient(180deg, var(--muted-foreground) 0%, transparent 100%)",
                  opacity: isHighlight ? 1 : 0.4,
                  boxShadow: isHighlight
                    ? "0 0 24px -6px color-mix(in oklch, var(--primary) 80%, transparent)"
                    : undefined,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
