"use client";

import { useEffect, useState } from "react";
import { CoursesCta } from "@/components/CoursesCta";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/site";

type HeaderProps = {
  solid?: boolean;
};

export function Header({ solid = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isSolid = solid || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        isSolid
          ? "border-b border-line bg-paper/95 text-ink backdrop-blur"
          : "bg-transparent text-paper"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo tone={isSolid ? "dark" : "light"} />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[13px] font-medium tracking-wide transition hover:text-brass ${
                isSolid ? "text-ink-soft" : "text-paper/80"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <CoursesCta />
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className={`block h-px w-4 bg-current transition ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`block h-px w-4 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-4 bg-current transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-paper px-5 py-6 text-ink lg:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <CoursesCta className="mt-2 w-full" />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
