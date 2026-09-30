import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  tone?: "light" | "dark";
};

export function Logo({ tone = "dark" }: LogoProps) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3">
      <Image
        src={`${site.basePath}/logo.png`}
        alt={site.name}
        width={656}
        height={201}
        className="h-10 w-auto sm:h-11"
        priority
      />
      <span
        className={`font-serif text-xs leading-tight tracking-tight sm:text-sm ${
          tone === "light" ? "text-paper/70" : "text-black"
        }`}
      >
        Firearm Safety Course
      </span>
    </Link>
  );
}
