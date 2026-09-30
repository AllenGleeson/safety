import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Firearms Safety Essentials`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: [{ url: `${site.basePath}/mini-logo.PNG`, type: "image/png" }],
    shortcut: `${site.basePath}/mini-logo.PNG`,
    apple: `${site.basePath}/mini-logo.PNG`,
  },
  openGraph: {
    title: `${site.name} — Firearms Safety Essentials`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
