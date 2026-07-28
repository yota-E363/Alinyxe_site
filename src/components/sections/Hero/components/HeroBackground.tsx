'use client'

import { lazy, Suspense, useEffect, useState } from "react";

/*{const Blobs = lazy(() => import("./Blobs").then((m) => ({ default: m.Blobs }))); 
const LaserBeam = lazy(() =>
  import("./LaserBeam").then((m) => ({ default: m.LaserBeam })),
);
}*/
type Tier = "static" | "blobs" | "full";

function StaticBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 55%, oklch(0.42 0.18 260 / 0.55), transparent 65%), radial-gradient(ellipse 60% 50% at 30% 20%, oklch(0.55 0.18 280 / 0.25), transparent 70%), linear-gradient(180deg, oklch(0.13 0.04 264) 0%, oklch(0.10 0.04 264) 100%)",
      }}
    />
  );
}

export function HeroBackground() {
  const [tier, setTier] = useState<Tier>("static");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowEnd = (navigator.hardwareConcurrency ?? 8) <= 4;
    if (reduce) setTier("static");
    else if (lowEnd) setTier("blobs");
    else setTier("full");
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <StaticBackdrop />
      {mounted && tier !== "static" && (
        <div className="absolute inset-0" style={{ opacity: 0.85 }}>
{   /*       <Suspense fallback={null}>
            <Blobs />
          </Suspense>  */  }
        </div>
      )}
      {mounted && tier === "full" && (
        <div
          className="absolute inset-0"
          style={{ mixBlendMode: "screen", opacity: 0.95 }}
        >
{  /*        <Suspense fallback={null}>
            <LaserBeam color="#6366f1" intensity={1.05} />
          </Suspense>  */ }
        </div>
      )}
      {/* Bottom fade into page bg */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(180deg, transparent, var(--color-background))",
        }}
      />
    </div>
  );
}

export default HeroBackground;