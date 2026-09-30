import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  tone?: "light" | "dark";
};

export function Logo({ tone = "dark" }: LogoProps) {
  const color = tone === "light" ? "text-paper" : "text-ink";

  return (
    <Link href="/" className={`flex items-center gap-3 ${color}`}>
      <svg
        viewBox="0 0 36 36"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
      >
        <circle
          cx="18"
          cy="18"
          r="15.5"
          fill="none"
          className="stroke-brass"
          strokeWidth="1.4"
        />
        <circle
          cx="18"
          cy="18"
          r="8"
          fill="none"
          className="stroke-brass"
          strokeWidth="1.4"
        />
        <circle cx="18" cy="18" r="2.1" className="fill-brass" />
        <path
          d="M18 2.2v4.2M18 29.6v4.2M2.2 18h4.2M29.6 18h4.2"
          className="stroke-brass"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg tracking-tight">{site.name}</span>
        <span
          className={`mt-1 text-[10px] font-medium uppercase tracking-[0.22em] ${
            tone === "light" ? "text-brass-light" : "text-ink-soft"
          }`}
        >
          Firearms safety course
        </span>
      </span>
    </Link>
  );
}
