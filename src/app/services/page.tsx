// src/app/services/page.tsx

import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alinyxe — services",
  description: "Page en construction.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center px-6 pt-32 text-center">
        <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs uppercase tracking-wider text-primary">
          Bientôt
        </span>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Services
        </h1>

        <p className="mt-4 max-w-md text-foreground/65">
          Cette page sera disponible dans la prochaine itération.
        </p>
      </main>

      <Footer />
    </div>
  );
}