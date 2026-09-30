import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header solid />
      <main id="main" className="flex-1 pt-24">
        <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-brass">Legal</p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-ink-soft">Last updated {updated}</p>
          <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-ink-soft">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
