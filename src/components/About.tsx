import { course } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
            About
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            Built around one course, taught with care.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-ink-soft lg:col-span-7">
          <p>
            Barron Sports exists because too many people meet a firearm
            without a teacher. We wrote {course.name} so adults can learn a
            professional standard in one place: how to handle, store, transport,
            and think about firearms so that nobody is injured by haste or habit.
          </p>
          <p>
            Instructors wrote this course. Enrolment and completion live on a
            dedicated training platform. Safety is taught as its own standard,
            not as a footnote to marksmanship.
          </p>
          <p>
            If you own a firearm, intend to, or share a household with one —
            this is the front door. The work happens in the course.
          </p>
        </div>
      </div>
    </section>
  );
}
