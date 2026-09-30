import { site } from "@/lib/site";

type CoursesCtaProps = {
  className?: string;
};

export function CoursesCta({ className = "" }: CoursesCtaProps) {
  return (
    <a
      href={site.coursesUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brass px-5 py-2.5 text-sm font-semibold tracking-wide text-ink shadow-[0_1px_0_rgb(255_255_255/0.25)_inset] transition hover:bg-brass-light ${className}`}
    >
      Start the course
      <span aria-hidden="true">↗</span>
    </a>
  );
}
