'use client';

import Link from "next/link"; // Correct import pour Next.js
import { usePathname } from "next/navigation"; // Pour gérer l'état actif
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/locale-context";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "@/components/icons";

export function Navbar() {
  const { t } = useLocale();
  const pathname = usePathname(); // Récupère l'URL actuelle
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Remplacement de 'to' par 'href' pour Next.js
  const links = [
    { href: "/", label: t.common.navbar.home },
    { href: "/services", label: t.common.navbar.services },
    { href: "/about", label: t.common.navbar.about },
    { href: "/blog", label: t.common.navbar.blog },
    { href: "/faq", label: t.common.navbar.faq },
    { href: "/contact", label: t.common.navbar.contact },
  ] as const;

  return (
    <header
      className={`fixed left-1/2 top-0 z-50 -translate-x-1/2 transition-all duration-500 ease-out ${
        scrolled
          ? "mt-3 w-[min(96%,1100px)] rounded-full border border-border bg-background/60 px-3 py-2 shadow-[0_10px_40px_-15px_rgba(99,102,241,0.35)] backdrop-blur-xl"
          : "mt-0 w-full rounded-none border-b border-border/40 bg-background/30 px-4 py-3 backdrop-blur-sm"
      }`}
    >
      <nav className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
                <Logo size={28} />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            // Vérifie si le lien est actif
            const isActive = pathname === l.href;

            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`rounded-full px-3 py-1.5 text-sm transition duration-200 hover:bg-card/60 hover:text-foreground ${
                    isActive
                      ? "text-foreground bg-card/80 font-medium"
                      : "text-foreground/70"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
