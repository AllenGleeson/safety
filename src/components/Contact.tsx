"use client";

import { useActionState } from "react";
import { submitEnquiry, type ContactState } from "@/app/actions/contact";
import { course, enquiryTopics, site } from "@/lib/site";

const initial: ContactState = { ok: false, submitted: false, error: null };

export function Contact() {
  const [state, action, pending] = useActionState(submitEnquiry, initial);

  return (
    <section id="contact" className="scroll-mt-24 bg-paper-2/50">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
            Contact
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            Ask before you enrol.
          </h2>
          <p className="mt-5 text-ink-soft">
            Questions about {course.name}, group enrolment, or platform access —
            send a note. To begin the lessons, use Start the course.
          </p>
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-brass">
                Email
              </dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="hover:text-brass">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-brass">
                Phone
              </dt>
              <dd className="mt-1">{site.phone}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-brass">
                Studio
              </dt>
              <dd className="mt-1">
                {site.address.line1}
                <br />
                {site.address.line2}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-brass">
                Hours
              </dt>
              <dd className="mt-1">{site.hours}</dd>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-7">
          {state.submitted ? (
            <div className="rounded-2xl border border-line bg-cream p-10">
              <h3 className="font-serif text-3xl">Received.</h3>
              <p className="mt-3 text-ink-soft">
                Thank you. An instructor will reply to the email you provided,
                usually within one business day.
              </p>
            </div>
          ) : (
            <form action={action} className="rounded-2xl border border-line bg-cream p-6 sm:p-8">
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required autoComplete="name" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
                <label className="block text-sm">
                  <span className="font-medium">Interest</span>
                  <select
                    name="topic"
                    defaultValue={enquiryTopics[0]}
                    className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-3 outline-none focus:border-brass"
                  >
                    {enquiryTopics.map((topic) => (
                      <option key={topic}>{topic}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="mt-5 block text-sm">
                <span className="font-medium">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-3 outline-none focus:border-brass"
                />
              </label>
              {state.error ? (
                <p className="mt-4 text-sm text-red-800" role="alert">
                  {state.error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={pending}
                className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-olive-deep disabled:opacity-60"
              >
                {pending ? "Sending…" : "Send enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="font-medium">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-3 outline-none focus:border-brass"
      />
    </label>
  );
}
