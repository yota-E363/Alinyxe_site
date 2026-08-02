"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface BumpNavbarItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export interface BumpNavbarClassNames {
  /** Wrapper <nav>. Controls width, height, and positioning — both are independent (see borderWidth note below). */
  container?: string;
  /** The bar's fill, applied directly to the SVG <path>. e.g. "fill-card". The border color is fixed to var(--muted-foreground) (same token as the tab icons) via inline style, so it always matches regardless of Tailwind class generation. */
  bar?: string;
  /** Optional glass layer (blur + tint), clipped to the same organic shape. Leave empty to skip. */
  glass?: string;
  /** The floating bubble that sits in the basin. */
  bubble?: string;
  /** The thin halo behind the bubble. */
  halo?: string;
  /** Each tab link. */
  link?: string;
  /** Color override applied to the icon rendered inside the bubble. */
  activeIcon?: string;
  /** The little label that pops up above an icon on hover. */
  tooltip?: string;
}

interface BumpNavbarProps {
  items: BumpNavbarItem[];
  classNames?: BumpNavbarClassNames;
  /** Width of the bar's border, in viewBox units (not px). Default 3. */
  borderWidth?: number;
}

const defaultClassNames: Required<BumpNavbarClassNames> = {
  // NOTE: width AND height are both set here — the two are independent,
  // there is no more aspect-ratio auto-deriving one from the other.
  // If you override `container`, always include a height (h-*) or the
  // whole bar collapses to 0px, since every child inside is absolutely positioned.
  container: "w-[94vw] max-w-[460px] h-[92px]",
  bar: "fill-card",
  glass: "bg-background/50 backdrop-blur-xl",
  bubble: "bg-primary shadow-lg",
  halo: "bg-primary/25",
  link: "",
  activeIcon: "!text-primary-foreground",
  tooltip: "border border-border bg-popover text-popover-foreground",
};

// ---- Shared coordinate system (viewBox units) — scales with any number of items ----
const VB_H = 112;
const BAR_TOP = 46;
const BAR_BOTTOM = 112;
const RADIUS_TOP = 14;
const RADIUS_BOTTOM = 30;
const BASIN_HALF_WIDTH = 40;
const BASIN_DEPTH = 40;
const CIRCLE_CY = 28;
const CIRCLE_R = 24;
const HALO_R = 27;

function tabCenterX(index: number, count: number, vbW: number) {
  return ((index + 0.5) / count) * vbW;
}

// Same path is reused for: the SVG fill, the SVG stroke (border), and the
// CSS clip-path of the glass layer — so all three always stay in sync,
// basin curve included.
function buildPath(cx: number, vbW: number) {
  const half = Math.min(BASIN_HALF_WIDTH, vbW / 12);
  const left = cx - half;
  const right = cx + half;
  const basinY = BAR_TOP + BASIN_DEPTH;
  return `M ${RADIUS_TOP} ${BAR_TOP} L ${left} ${BAR_TOP} C ${cx - half * 0.5} ${BAR_TOP}, ${cx - half * 0.5} ${basinY}, ${cx} ${basinY} C ${cx + half * 0.5} ${basinY}, ${cx + half * 0.5} ${BAR_TOP}, ${right} ${BAR_TOP} L ${vbW - RADIUS_TOP} ${BAR_TOP} A ${RADIUS_TOP} ${RADIUS_TOP} 0 0 1 ${vbW} ${BAR_TOP + RADIUS_TOP} L ${vbW} ${BAR_BOTTOM - RADIUS_BOTTOM} A ${RADIUS_BOTTOM} ${RADIUS_BOTTOM} 0 0 1 ${vbW - RADIUS_BOTTOM} ${BAR_BOTTOM} L ${RADIUS_BOTTOM} ${BAR_BOTTOM} A ${RADIUS_BOTTOM} ${RADIUS_BOTTOM} 0 0 1 0 ${BAR_BOTTOM - RADIUS_BOTTOM} L 0 ${BAR_TOP + RADIUS_TOP} A ${RADIUS_TOP} ${RADIUS_TOP} 0 0 1 ${RADIUS_TOP} ${BAR_TOP} Z`;
}

function withColorOverride(icon: React.ReactNode, overrideClassName: string) {
  if (!React.isValidElement(icon)) return icon;
  const el = icon as React.ReactElement<{ className?: string }>;
  return React.cloneElement(el, {
    className: cn(el.props.className, overrideClassName),
  });
}

function getActiveIndex(items: BumpNavbarItem[], pathname: string | null) {
  if (!pathname) return 0;
  const index = items.findIndex((item) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
  );
  return index === -1 ? 0 : index;
}

let lastCx: number | null = null;

export function BumpNavbar({ items, classNames = {}, borderWidth = 3 }: BumpNavbarProps) {
  const cls = { ...defaultClassNames, ...classNames };
  const pathname = usePathname();
  const activeIndex = getActiveIndex(items, pathname);

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);

  useEffect(() => {
    if (pendingIndex !== null && pendingIndex === activeIndex) {
      setPendingIndex(null);
    }
  }, [activeIndex, pendingIndex]);

  const displayIndex = hoverIndex ?? pendingIndex ?? activeIndex;

  const vbW = Math.max(items.length * 90, 300);
  const target = tabCenterX(displayIndex, items.length, vbW);

  const [cx, setCx] = useState<number>(() => lastCx ?? target);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const step = () => {
      setCx((prev) => {
        const diff = target - prev;
        const next = Math.abs(diff) < 0.3 ? target : prev + diff * 0.22;
        lastCx = next;
        if (Math.abs(diff) >= 0.3) {
          rafRef.current = requestAnimationFrame(step);
        }
        return next;
      });
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target]);

  const d = buildPath(cx, vbW);
  const iconRowYPercent = ((BAR_TOP + (BAR_BOTTOM - BAR_TOP) / 2) / VB_H) * 100;
  const bubbleTopPercent = (CIRCLE_CY / VB_H) * 100;
  const bubbleLeftPercent = (cx / vbW) * 100;

  return (
    <nav
      aria-label="Navigation principale"
      className={cn("relative overflow-visible", cls.container)}
    >
      {/* Optional glass layer: blur + tint, clipped to the exact same shape as the bar */}
      {cls.glass && (
        <div
          className={cn("absolute inset-0", cls.glass)}
          style={{ clipPath: `path('${d}')`, pointerEvents: "none" }}
        />
      )}

      {/* Bar: fill = background, stroke = border, both normal Tailwind classes */}
      <svg
        viewBox={`0 0 ${vbW} ${VB_H}`}
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        style={{ display: "block", overflow: "visible", pointerEvents: "none" }}
        className="absolute inset-0"
      >
        <path
          d={d}
          className={cls.bar}
          strokeWidth={borderWidth}
          strokeLinejoin="round"
          style={{ stroke: "var(--muted-foreground)" }}
        />
      </svg>

      {/* Real links — sit above the SVG, always receive clicks/hover */}
      {items.map((item, i) => {
        const isPreviewed = i === displayIndex;
        const isHovered = hoverIndex === i;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={i === activeIndex ? "page" : undefined}
            aria-label={item.title}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            onFocus={() => setHoverIndex(i)}
            onBlur={() => setHoverIndex(null)}
            onClick={() => setPendingIndex(i)}
            className={cn(
              "absolute flex h-10 w-10 cursor-pointer items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring",
              cls.link
            )}
            style={{
              top: `${iconRowYPercent}%`,
              left: `${((i + 0.5) / items.length) * 100}%`,
              transform: "translate(-50%, -50%)",
              zIndex: 4,
            }}
          >
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 6, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: 4, x: "-50%" }}
                  transition={{ duration: 0.15 }}
                  className={cn(
                 "absolute left-1/2 w-fit whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium shadow-sm",
                cls.tooltip
                )}
                style={{
                top: "-175%",
                }}
                >
                  {item.title}
                </motion.div>
              )}
            </AnimatePresence>
            <span
              className="h-5 w-5"
              style={{ opacity: isPreviewed ? 0 : 1, transition: "opacity 0.2s ease" }}
            >
              {item.icon}
            </span>
          </Link>
        );
      })}

      {/* Halo */}
      <div
        className={cn("absolute rounded-full", cls.halo)}
        style={{
          top: `${bubbleTopPercent}%`,
          left: `${bubbleLeftPercent}%`,
          transform: "translate(-50%, -50%)",
          width: HALO_R * 2,
          height: HALO_R * 2,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Bubble */}
      <div
        className={cn("absolute flex items-center justify-center rounded-full", cls.bubble)}
        style={{
          top: `${bubbleTopPercent}%`,
          left: `${bubbleLeftPercent}%`,
          transform: "translate(-50%, -50%)",
          width: CIRCLE_R * 2,
          height: CIRCLE_R * 2,
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        <span className="h-5 w-5">
          {items[displayIndex] ? withColorOverride(items[displayIndex].icon, cls.activeIcon) : null}
        </span>
      </div>
    </nav>
  );
}
