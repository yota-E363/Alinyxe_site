"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  grid?: boolean;
  centered?: boolean;
}

export function FeatureCard({
  title,
  description,
  children,
  className,
  grid = true,
  centered = true,
}: FeatureCardProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-[36px] border border-border",
        "bg-gradient-to-b from-card via-card to-background",
        "shadow-lg p-6",
        className
      )}
    >
      {/* Grid */}
      {grid && (
        <div
          className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-70"
          style={{
            backgroundImage: `
              linear-gradient(to right, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px),
              linear-gradient(to bottom, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 100% 65% at 50% 15%, black 35%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 100% 65% at 50% 15%, black 35%, transparent 85%)",
          }}
        />
      )}

      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 -top-16 h-[260px] w-[380px] -translate-x-1/2 rounded-full blur-xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--primary) 30%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col gap-8">
        {/* Slot */}
        <div className="min-h-[230px] flex items-center justify-center">
          {children}
        </div>

        {/* Text */}
        <div className={cn("space-y-3", centered && "text-center")}>
          <h2 className="text-3xl font-bold tracking-tight text-card-foreground">
            {title}
          </h2>

          {description && (
            <p
              className={cn(
                "text-[15px] leading-7 text-muted-foreground",
                centered && "mx-auto max-w-[32ch]"
              )}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
