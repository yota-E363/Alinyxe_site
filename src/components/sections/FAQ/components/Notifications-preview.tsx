"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface NotificationItem {
  name: string;
  subtitle: string;
  faded?: boolean;
}

interface NotificationsPreviewProps {
  items?: NotificationItem[];
  buttonLabel?: string;
  className?: string;
}

const DEFAULT_ITEMS: NotificationItem[] = [
  { name: "Emma Richardson", subtitle: "Started Following You" },
  { name: "David Chen", subtitle: "Started Following You" },
  { name: "Sarah Mitchell", subtitle: "Started Following You", faded: true },
];

function initials(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

export function NotificationsPreview({
  items = DEFAULT_ITEMS,
  buttonLabel = "View",
  className,
}: NotificationsPreviewProps) {
  return (
    <div
      className={cn(
        "relative h-[232px] w-full overflow-hidden rounded-[26px]",
        "border border-border bg-card/40 p-3",
        className
      )}
      style={{
        maskImage: "linear-gradient(to bottom, black 52%, transparent 92%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 52%, transparent 92%)",
      }}
    >
      <div className="flex flex-col gap-2.5">
        {items.map((item, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center gap-3.5 rounded-[18px] border border-border bg-secondary/60 p-3.5",
              item.faded && "opacity-35"
            )}
          >
            <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[14px] border border-border bg-muted text-base font-bold text-foreground">
              {initials(item.name)}
            </div>

            <div className="min-w-0 flex-1">
              <div className="truncate text-[16px] font-bold tracking-tight text-card-foreground">
                {item.name}
              </div>
              <div className="truncate text-[13.5px] text-muted-foreground">
                {item.subtitle}
              </div>
            </div>

            <button
              type="button"
              className="shrink-0 rounded-full bg-primary px-3.5 py-1.5 text-[13px] font-semibold text-primary-foreground"
            >
              {buttonLabel} →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
