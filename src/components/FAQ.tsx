"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            Straight answers before the course.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <ul className="divide-y divide-line border-y border-line">
            {faqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <li key={item.question}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span className="font-medium tracking-tight">
                      {item.question}
                    </span>
                    <span
                      className="mt-0.5 text-brass"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="pb-5 pr-10 text-sm leading-relaxed text-ink-soft">
                      {item.answer}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
