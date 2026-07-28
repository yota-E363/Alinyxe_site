"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GrowthChartProps {
  growthLabel?: string;
  targetValue?: string;
  changeValue?: string;
  changeLabel?: string;
  className?: string;
}

interface Tooltip {
  x: number;
  y: number;
  value: number;
}

export function GrowthChart({
  growthLabel = "Growth Rate",
  targetValue = "95% target",
  changeValue = "+127%",
  changeLabel = "vs last quarter",
  className,
}: GrowthChartProps) {
  const width = 340;
  const height = 232;
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [tooltip, setTooltip] = React.useState<Tooltip | null>(null);
  const hideTimeout = React.useRef<ReturnType<typeof setTimeout>>();

  const path = `M 8 ${height - 30} C ${width * 0.35} ${height - 20}, ${width * 0.55} ${height - 40}, ${width * 0.68} ${height * 0.45} S ${width * 0.9} 20, ${width - 8} 14`;
  const fillPath = `${path} L ${width - 8} ${height} L 8 ${height} Z`;

  function handlePointer(e: React.PointerEvent<SVGSVGElement>) {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * width;
    const y = ((e.clientY - rect.top) / rect.height) * height;
    const value = Math.round(((height - y) / height) * 100);

    setTooltip({ x, y, value });
    clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => setTooltip(null), 2000);
  }

  React.useEffect(() => () => clearTimeout(hideTimeout.current), []);

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

      {/* Badges */}
      <div className="relative z-10 flex items-start justify-between p-3">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-[12px] font-medium text-foreground">
            <span className="text-primary">↗</span>
            {growthLabel}
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-[12px] font-medium text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {targetValue}
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-[12px] font-medium text-foreground">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] text-primary-foreground">
            $
          </span>
          {changeValue}
          <span className="text-muted-foreground">{changeLabel}</span>
        </div>
      </div>

      {/* Curve (touchable) */}
      <svg
        ref={svgRef}
        className="absolute inset-0 touch-none"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        onPointerDown={handlePointer}
      >
        <defs>
          <linearGradient id="growth-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={fillPath} fill="url(#growth-fill)" />
        <path d={path} fill="none" stroke="var(--primary)" strokeWidth={2.5} strokeLinecap="round" />

        {tooltip && <circle cx={tooltip.x} cy={tooltip.y} r={4} fill="var(--primary-foreground)" />}
      </svg>

      {/* Tooltip bubble */}
      {tooltip && (
        <div
          className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full rounded-full border border-border bg-popover px-2.5 py-1 text-[11px] font-semibold text-popover-foreground shadow-md"
          style={{
            left: `${(tooltip.x / width) * 100}%`,
            top: `${(tooltip.y / height) * 100}%`,
            marginTop: -8,
          }}
        >
          {tooltip.value}%
        </div>
      )}
    </div>
  );
}
