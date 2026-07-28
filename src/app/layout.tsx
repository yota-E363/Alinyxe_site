import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/lib/theme";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { Toaster } from "@/components/ui/sonner";
import { 
  NavbarMobile,
  Navbar,
} from "@/layouts"; // ajuste le chemin si besoin

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Alinyxe — Intelligence artificielle & automatisation sur mesure",
    template: "%s | Alinyxe",
  },
  description:
    "Alinyxe conçoit, intègre et automatise des solutions d'intelligence artificielle : chatbots, automatisation de processus et agents IA autonomes pour accélérer votre croissance.",
  metadataBase: new URL("https://alinyxe.com"),
  keywords: [
    "IA",
    "intelligence artificielle",
    "automatisation",
    "chatbot",
    "agents IA",
    "AI agency",
    "automation",
  ],
  openGraph: {
    title: "Alinyxe — AI & automation agency",
    description:
      "Custom AI chatbots, business process automation and autonomous AI agents.",
    type: "website",
    siteName: "Alinyxe",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  generator: "Mohamed Djoudir",
  openGraph: {
    title: "Alinyxe - Elevate Your Digital Experience",
    description:
      "Transform how you work with our AI-powered platform. Automate workflows, gain insights, and boost productivity.", },
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Nova - AI-powered platform",
      },
      ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={cn("dark font-sans", fontSans.variable, fontMono.variable)}
    >
      <body className="antialiased">
        <ThemeProvider>
          <LocaleProvider>
            <Navbar />
            {children}
            <NavbarMobile />
            <Toaster richColors position="top-center" />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}