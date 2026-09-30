import { CoursesCta } from "@/components/CoursesCta";
import { course } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="reticle-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -right-24 top-20 h-[28rem] w-[28rem] rounded-full border border-brass/20" />
      <div className="pointer-events-none absolute -right-8 top-36 h-[18rem] w-[18rem] rounded-full border border-brass/30" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 pb-10 pt-24 sm:px-8 lg:grid-cols-12 lg:pb-12 lg:pt-28">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">
            {course.eyebrow} · {course.name}
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.1] tracking-tight sm:text-6xl">
            Know the rules.
            <br />
            Handle with certainty.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            {course.summary}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CoursesCta className="px-7 py-3.5 text-base" />
            <a
              href="#course"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-base font-semibold text-paper transition hover:border-brass/50 hover:bg-white/5"
            >
              See what’s inside
            </a>
          </div>
          <p className="mt-5 text-sm text-paper/50">
            Enrol on our training platform.
          </p>
        </div>
        <div className="relative lg:col-span-5">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              The standing rules
            </p>
            <ol className="mt-6 space-y-5">
              {[
                "Treat every firearm as if it is loaded.",
                "Never point the muzzle at anything you are not willing to destroy.",
                "Keep your finger off the trigger until you have made the decision to shoot.",
                "Be sure of your target, and of what is beyond it.",
              ].map((rule, index) => (
                <li key={rule} className="flex gap-4">
                  <span className="font-serif text-2xl text-brass">
                    0{index + 1}
                  </span>
                  <span className="pt-1 text-sm leading-relaxed text-paper/80">
                    {rule}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-5 sm:grid-cols-3 sm:px-8">
          {[
            course.duration,
            course.format,
            course.outcome,
          ].map((item) => (
            <p
              key={item}
              className="text-sm font-medium tracking-wide text-paper/70"
            >
              <span className="mr-2 text-brass">▸</span>
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
