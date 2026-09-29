import { CoursesCta } from "@/components/CoursesCta";
import { course, courseModules } from "@/lib/site";

export function Training() {
  return (
    <section id="course" className="scroll-mt-24 bg-paper-2/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
            {course.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            {course.name}
          </h2>
          <p className="mt-5 text-ink-soft">{course.summary}</p>
          <p className="mt-4 text-sm text-ink-soft">
            {course.duration} · {course.format} · {course.outcome}
          </p>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courseModules.map((item, index) => (
            <li
              key={item.id}
              className="flex flex-col rounded-2xl border border-line bg-cream p-7"
            >
              <span className="font-serif text-2xl text-brass">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-serif text-2xl tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {item.summary}
              </p>
            </li>
          ))}
          <li className="flex flex-col justify-between rounded-2xl bg-ink p-7 text-paper sm:col-span-2 lg:col-span-1">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
                Enrol
              </p>
              <h3 className="mt-4 font-serif text-2xl tracking-tight">
                Start when you are ready.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/70">
                The course lives on our training platform. This site does not
                host lessons or certificates.
              </p>
            </div>
            <div className="mt-8">
              <CoursesCta className="w-full" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
