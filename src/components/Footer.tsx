'use client'

import Link from "next/link";
import { Logo } from "@/components/icons";
import { useLocale } from "@/lib/i18n/locale-context";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
                <Logo size={28} />
            
          </Link>
          <p className="mt-4 max-w-sm text-sm text-foreground/65">{t.common.footer.tagline}</p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
            {t.common.navbar.services}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-foreground/70">
            {t.home.services.items.map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Alinyxe
          </div>
          <ul className="mt-4 space-y-2 text-sm text-foreground/70">
            <li><Link href="/about" className="hover:text-foreground">{t.common.navbar.about}</Link></li>
            <li><Link href="/blog" className="hover:text-foreground">{t.common.navbar.blog}</Link></li>
            <li><Link href="/faq" className="hover:text-foreground">{t.common.navbar.faq}</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">{t.common.navbar.contact}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-foreground/55 sm:flex-row">
          <span>© {year} Alinyxe. {t.common.footer.rights}</span>
          <span>alinyxe.online</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;