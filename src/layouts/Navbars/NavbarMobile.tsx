"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useLocale } from "@/lib/i18n/locale-context";
import { BumpNavbar } from "@/components/ui/BumpNavbar";
import { Home, LayoutGrid, Info, Newspaper, HelpCircle, Mail } from "lucide-react";

export function NavbarMobile() {
  const { t } = useLocale();
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const idleTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      if (y < 24) {
        setHidden(false);
      } else if (delta > 4) {
        setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }

      lastScrollY.current = y;

      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setHidden(false), 150);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(idleTimer.current);
    };
  }, []);

  const links = [
    {
      title: t.common.navbar.home,
      icon: <Home className="h-full w-full text-muted-foreground" />,
      href: "/",
    },
    {
      title: t.common.navbar.services,
      icon: <LayoutGrid className="h-full w-full text-muted-foreground" />,
      href: "/services",
    },
    {
      title: t.common.navbar.about,
      icon: <Info className="h-full w-full text-muted-foreground" />,
      href: "/about",
    },
    {
      title: t.common.navbar.blog,
      icon: <Newspaper className="h-full w-full text-muted-foreground" />,
      href: "/blog",
    },
    {
      title: t.common.navbar.faq,
      icon: <HelpCircle className="h-full w-full text-muted-foreground" />,
      href: "/faq",
    },
    {
      title: t.common.navbar.contact,
      icon: <Mail className="h-full w-full text-muted-foreground" />,
      href: "/contact",
    },
  ];

  return (
    // md:hidden cache le composant sur les écrans de taille "medium" (768px) et plus.
    // La marge basse (safe-area incluse) fait flotter la barre au-dessus du bord de l'écran.
    <motion.div
      animate={{ y: hidden ? 96 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden"
      style={{
        filter:
          "drop-shadow(0 8px 24px color-mix(in oklch, var(--primary) 25%, transparent))",
      }}
    >
      <BumpNavbar
        items={links}
        classNames={{
          bar: "fill-card stroke-muted-foreground",
          bubble: "bg-primary shadow-lg",
          glass: "bg-background/50 backdrop-blur-xl",
          halo: "bg-primary/25",
          activeIcon: "!text-primary-foreground",
        }}
        borderWidth={3}
      />
    </motion.div>
  );
}
