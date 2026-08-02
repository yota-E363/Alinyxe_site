"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import HatchGrid, { type HatchGridProps } from "./hatch-grid";

export interface TiltedHatchGridProps extends HatchGridProps {
  /** 2D tilt in degrees. Positive = clockwise. 0 = flat. @default -6 */
  tiltAngle?: number;
  /** Extra room reserved around the tilted pattern */
  overscan?: string;
  className?: string;
}

export function TiltedHatchGrid({
  tiltAngle = -6,
  overscan = "-20% -10%",
  className,
  ...hatchGridProps
}: TiltedHatchGridProps) {
  return (
    <div
      // 💡 CORRECTION : "absolute inset-0 pointer-events-none" par défaut
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      style={{ isolation: "isolate" }}
    >
      <div
        style={{
          position: "absolute",
          inset: overscan,
          transform: `rotate(${tiltAngle}deg)`,
          transformOrigin: "center",
        }}
      >
        <HatchGrid {...hatchGridProps} />
      </div>
    </div>
  );
}

export default TiltedHatchGrid;