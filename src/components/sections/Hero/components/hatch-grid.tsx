"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* ============================================================================
   HatchGrid — static, gap-free base
   ----------------------------------------------------------------------------
   Fills its container edge-to-edge with a regular grid of engraver's marks,
   using the 3 stroke shapes from the original design:
     - 1 stroke  → a single oblique line (32° or -32°)
     - 2 strokes → a small cross / "X" (32° + -32°)
     - 3 strokes → a small asterisk (32° + -32° + 90°)
   Every grid cell gets a shape — deterministic, not threshold-based — so
   there are no empty gaps. Spacing (and therefore mark size) auto-scales
   with the container's real pixel size, same idea as before: bigger
   container → bigger, more widely-spaced marks, not the same tiny marks
   stretched thin. No animation yet — this is the static base to validate
   before any wave/light effect gets layered on top.
   ========================================================================== */

const ANGLES_DEG = [32, -32, 90] as const;
const ANGLE_RAD = ANGLES_DEG.map((a) => (a * Math.PI) / 180);

const REF_DIM = 500; // container size the base spacing was tuned at
const MAX_AREA_SCALE = 2; // how big marks are allowed to grow on huge containers

export interface HatchGridProps {
  /** Spacing multiplier — smaller number = tighter grid, more marks. */
  density?: number;
  /** Stroke color. */
  color?: string;
  /** Background fill (use "transparent" to let the page show through). */
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

function clamp(n: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, n));
}

function computeStep(density: number, W: number, H: number) {
  // Driven by the SMALLER of the two dimensions: on a wide-but-short desktop
  // hero, a huge width alone no longer inflates mark size — the component's
  // actual height genuinely caps how big the pattern is allowed to get.
  const areaScale = clamp(Math.min(W, H) / REF_DIM, 1, MAX_AREA_SCALE);
  const base = 24 / Math.max(0.4, density);
  return clamp(base * areaScale, 14, 100);
}

/** Deterministic shape type per grid cell — cycles 3→2→1 strokes in a fixed,
 *  orderly repeating pattern (not random), so the rectangle always reads as
 *  fully, evenly covered. */
function shapeTypeFor(gx: number, gy: number): 1 | 2 | 3 {
  const cycle = (gx + gy * 2) % 4;
  if (cycle === 0) return 3; // asterisk
  if (cycle === 1 || cycle === 3) return 2; // cross
  return 1; // single oblique line
}

export default function HatchGrid({
  density = 1,
  color = "#9ea3c4",
  backgroundColor = "#0a0b10",
  className,
  style,
}: HatchGridProps) {
  const wrapRef = React.useRef<HTMLDivElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const dpr = Math.min(2, typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1);
      const W = wrap.clientWidth || 1;
      const H = wrap.clientHeight || 1;
      canvas.width = Math.max(1, Math.round(W * dpr));
      canvas.height = Math.max(1, Math.round(H * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, W, H);

      const step = computeStep(density, W, H);
      const half = step * 0.46;

      ctx.strokeStyle = color;
      ctx.lineWidth = 1.2;

      let gy = 0;
      for (let y = 0; y < H + step; y += step, gy++) {
        const rowOffset = (gy % 2) * step * 0.5;
        let gx = 0;
        for (let x = rowOffset; x < W + step; x += step, gx++) {
          const type = shapeTypeFor(gx, gy);
          const anglesToDraw =
            type === 3 ? ANGLE_RAD : type === 2 ? [ANGLE_RAD[0], ANGLE_RAD[1]] : [ANGLE_RAD[gy % 2]];

          ctx.beginPath();
          for (const ang of anglesToDraw) {
            const dx = Math.cos(ang) * half;
            const dy = Math.sin(ang) * half;
            ctx.moveTo(x - dx, y - dy);
            ctx.lineTo(x + dx, y + dy);
          }
          ctx.stroke();
        }
      }
    };

    draw();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(draw) : null;
    ro?.observe(wrap);
    return () => ro?.disconnect();
  }, [density, color, backgroundColor]);

  return (
    <div
      ref={wrapRef}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={style}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
