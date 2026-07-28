"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ChatMessage {
  from: "me" | "other";
  name: string;
  initials: string;
  text: string;
  time: string;
}

interface ChatPreviewProps {
  title?: string;
  messages?: ChatMessage[];
  className?: string;
}

const DEFAULT_MESSAGES: ChatMessage[] = [
  { from: "me", name: "You", initials: "YO", text: "Perfect, let's sync at 3pm", time: "Just now" },
  { from: "other", name: "Emma", initials: "EM", text: "Just pushed the new designs", time: "1m ago" },
];

export function ChatPreview({
  title = "Team Chat",
  messages = DEFAULT_MESSAGES,
  className,
}: ChatPreviewProps) {
  return (
    <div
      className={cn(
        "relative flex h-[232px] w-full flex-col overflow-hidden rounded-[26px]",
        "border border-border bg-card/40 p-3.5",
        className
      )}
    >
      <div className="mb-3 flex items-center gap-2 px-1">
        <span className="text-[13px] font-semibold text-card-foreground">{title}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        {messages.map((msg, i) => {
          const isMe = msg.from === "me";
          return (
            <div
              key={i}
              className={cn(
                "flex items-end gap-2",
                isMe ? "flex-row-reverse self-end" : "self-start"
              )}
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-[10px] font-bold text-foreground">
                {msg.initials}
              </div>

              <div className={cn("flex max-w-[200px] flex-col gap-1", isMe && "items-end")}>
                <span className="px-1 text-[11px] text-muted-foreground">{msg.name}</span>
                <div
                  className={cn(
                    "rounded-2xl px-3.5 py-2 text-[13.5px] leading-5",
                    isMe
                      ? "rounded-tr-sm bg-primary text-primary-foreground"
                      : "rounded-tl-sm border border-border bg-muted text-foreground"
                  )}
                >
                  {msg.text}
                </div>
                <span className="px-1 text-[10.5px] text-muted-foreground/70">{msg.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
