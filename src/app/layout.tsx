import type { Metadata } from "next";
import type { Metadata, Viewport } from 'next'
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/lib/theme";
import { LocaleProvider } from '@/lib/i18n/locale-context'
import { Toaster } from '@/components/ui/sonner'

const fontSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Alinyxe — Intelligence artificielle & automatisation sur mesure',
    template: '%s | Alinyxe',
  },
  description:
    "Alinyxe conçoit, intègre et automatise des solutions d'intelligence artificielle : chatbots, automatisation de processus et agents IA autonomes pour accélérer votre croissance.",
    metadataBase: new URL('https://alinyxe.com'),
  keywords: [
    'IA',
    'intelligence artificielle',
    'automatisation',
    'chatbot',
    'agents IA',
    'AI agency',
    'automation',
  ],
  openGraph: {
    title: 'Alinyxe — AI & automation agency',
    description:
      'Custom AI chatbots, business process automation and autonomous AI agents.',
    type: 'website',
    siteName: 'Alinyxe',
  },
  icons: {
    icon: [{ url: 'next/image', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn(
      "dark font-sans",
      fontSans.variable,
      fontMono.variable
    )}>
        <body className="antialiased">
          <ThemeProvider>
            <LocaleProvider>
              {children}
              <Toaster richColors position="top-center" />
            </LocaleProvider>
          </ThemeProvider>
        </body>
    </html>
  );
}
