'use client'

import { useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function Newsletter() {
  const { t } = useLocale();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="relative px-6 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm sm:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl"
        />
        <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {t.home.newsletter.title}
            </h3>
            <p className="mt-2 text-sm text-foreground/65">
              {t.home.newsletter.subtitle}
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.includes("@")) setSent(true);
            }}
            className="flex flex-col gap-2 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.home.newsletter.placeholder}
              className="h-11 w-full min-w-[16rem] rounded-full border border-border bg-background/70 px-4 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              className="h-11 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              {sent ? "✓" : t.common.buttons.subscribe}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;