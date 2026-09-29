import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="bg-olive-deep text-paper">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass-light">
          Trust
        </p>
        <h2 className="mt-4 max-w-xl font-serif text-4xl tracking-tight sm:text-5xl">
          What people say after the course.
        </h2>
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <li
              key={item.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7"
            >
              <p className="flex-1 text-[15px] leading-relaxed text-paper/85">
                “{item.quote}”
              </p>
              <p className="mt-8 text-sm font-semibold">{item.name}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-brass-light">
                {item.role}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
