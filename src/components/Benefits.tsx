import { benefits, course } from "@/lib/site";
import { CoursesCta } from "@/components/CoursesCta";

export function Benefits() {
  return (
    <section id="benefits" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
            Why this course
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            A standard you can take to the range.
          </h2>
        </div>
        <ul className="mt-14 grid gap-10 sm:grid-cols-2">
          {benefits.map((item) => (
            <li key={item.title} className="border-t border-line pt-6">
              <h3 className="font-serif text-2xl tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-16 rounded-3xl bg-ink px-8 py-12 text-paper sm:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <h3 className="font-serif text-3xl tracking-tight sm:text-4xl">
                Ready to start {course.name}?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper/70">
                Enrolment, progress, and your certificate live on the training
                platform — not on this website.
              </p>
            </div>
            <CoursesCta className="self-start px-7 py-3.5 text-base" />
          </div>
        </div>
      </div>
    </section>
  );
}
