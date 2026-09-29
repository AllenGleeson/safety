import { site } from "@/lib/site";

type CoursesCtaProps = {
  label?: string;
  variant?: "solid" | "outline" | "light";
  className?: string;
};

const variants = {
  solid:
    "bg-brass text-ink hover:bg-brass-light shadow-[0_1px_0_rgb(255_255_255/0.25)_inset]",
  outline:
    "border border-ink/15 bg-transparent text-ink hover:border-ink/40 hover:bg-ink/5",
  light:
    "border border-brass/40 bg-transparent text-paper hover:border-brass-light hover:bg-white/5",
};

export function CoursesCta({
  label = "Start the course",
  variant = "solid",
  className = "",
}: CoursesCtaProps) {
  return (
    <a
      href={site.coursesUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition ${variants[variant]} ${className}`}
    >
      {label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
