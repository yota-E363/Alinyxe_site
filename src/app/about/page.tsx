"use client";

import { Navbar, Footer } from "@/layouts";
import {
  AboutServiceCategories,
  AboutCapabilities,
  AboutOutcomes,
} from "@/components/sections";
import { useLocale } from "@/lib/i18n/locale-context";

export default function AboutPage() {
  const { t } = useLocale();
  const hero = t.about.hero;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 pt-32 text-center">
        <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs uppercase tracking-wider text-primary">
          {hero.eyebrow}
        </span>

        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {hero.title}
        </h1>

        <p className="mt-4 max-w-xl text-balance text-foreground/65">{hero.subtitle}</p>
      </main>

      <AboutServiceCategories />
      <AboutCapabilities />
      <AboutOutcomes />

      <Footer />
    </div>
  );
}
