"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/locale-context";
import { BumpNavbar } from "@/components/ui/BumpNavbar";
// Importation des icônes Lucide correspondantes
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export function NavbarMobile() {
  const { t } = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    {
      title: t.common.navbar.home,
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: t.common.navbar.services,
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/services",
    },
    {
      title: t.common.navbar.about,
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: t.common.navbar.blog,
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blog",
    },
    {
      title: t.common.navbar.faq,
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/faq",
    },
    {
      title: t.common.navbar.contact,
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
  ];

  return (
    // md:hidden cache le composant sur les écrans de taille "medium" (768px) et plus.
    // fixed bottom-4 permet de le fixer en bas de l'écran sur mobile.
    <div
      className={`fixed inset-x-0 bottom-0 z-50 flex justify-center pb-[env(safe-area-inset-bottom)] md:hidden ${
        scrolled ? "translate-y-0" : "translate-y-0"
      }`}
    >
      <BumpNavbar
        items={links}
        classNames={{
          // Corps principal : couleur "primary" du thème, mais translucide
          bar: "fill-primary/60 stroke-border",
          // Bulle : plus opaque pour rester lisible/cliquable
          bubble: "bg-secondary shadow-[0_6px_14px_rgba(0,0,0,0.25)]",
          glass: "bg-background/40 backdrop-blur-xl",
          halo: "bg-primary/20",
          activeIcon: "!text-primary-foreground",
        }}
        borderWidth={1.5}
      />
    </div>
  );
}
