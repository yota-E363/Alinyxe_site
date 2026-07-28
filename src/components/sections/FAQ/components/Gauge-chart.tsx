"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GaugeChartProps {
  value: number; // 0 à 100
  size?: number;
  className?: string;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angleRad = (angleDeg - 180) * (Math.PI / 180);
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

// Dégradé de 5 nuances basées sur --primary, de la plus foncée à la plus claire
const SEGMENT_MIX = [20, 40, 60, 80, 100];

export function GaugeChart({ value, size = 180, className }: GaugeChartProps) {
  const height = size * 0.62;
  const cx = size / 2;
  const cy = height * 0.92;
  const radius = size * 0.4;
  const strokeWidth = size * 0.09;
  const gap = 3;
  const segmentAngle = 180 / SEGMENT_MIX.length;

  const clamped = Math.min(100, Math.max(0, value));
  const needleAngle = (clamped / 100) * 180;
  const needleLength = radius * 0.78;
  const needleTip = polarToCartesian(cx, cy, needleLength, needleAngle);

  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: size, height }}
    >
      <svg width={size} height={height} viewBox={`0 0 ${size} ${height}`}>
        {SEGMENT_MIX.map((mix, i) => {
          const start = i * segmentAngle + gap / 2;
          const end = (i + 1) * segmentAngle - gap / 2;
          return (
            <path
              key={i}
              d={describeArc(cx, cy, radius, start, end)}
              stroke={`color-mix(in oklch, var(--primary) ${mix}%, var(--muted))`}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              fill="none"
            />
          );
        })}

        <line
          x1={cx}
          y1={cy}
          x2={needleTip.x}
          y2={needleTip.y}
          stroke="var(--primary)"
          strokeWidth={2.5}
          strokeLinecap="round"
        />

        <circle cx={cx} cy={cy} r={4} fill="var(--primary)" />

        <circle
          cx={needleTip.x}
          cy={needleTip.y}
          r={7}
          fill="color-mix(in oklch, var(--primary) 35%, transparent)"
        />
        <circle cx={needleTip.x} cy={needleTip.y} r={3.5} fill="var(--primary-foreground)" />
      </svg>
    </div>
  );
}
