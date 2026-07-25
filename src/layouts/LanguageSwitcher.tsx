'use client'

import { useLocale } from "@/lib/i18n/locale-context";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <div className="inline-flex h-9 items-center rounded-full border border-border bg-card/40 p-0.5 text-xs font-medium">
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`flex h-8 w-9 items-center justify-center rounded-full uppercase tracking-wide transition ${
            locale === l
              ? "bg-primary text-primary-foreground"
              : "text-foreground/70 hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;