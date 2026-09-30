import Link from "next/link";
import { CoursesCta } from "@/components/CoursesCta";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/70">
            {site.description}
          </p>
          <div className="mt-6">
            <CoursesCta />
          </div>
        </div>
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Explore
          </p>
          <ul className="mt-4 space-y-3 text-sm text-paper/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brass-light">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.coursesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brass-light"
              >
                Start the course
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Legal
          </p>
          <ul className="mt-4 space-y-3 text-sm text-paper/80">
            <li>
              <Link href="/privacy" className="hover:text-brass-light">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-brass-light">
                Terms of use
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-brass-light">
                Cookie policy
              </Link>
            </li>
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-paper/60">
            <a href={`mailto:${site.email}`} className="hover:text-brass-light">
              {site.email}
            </a>
            <br />
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-brass-light">
              {site.phone}
            </a>
            <br />
            {site.address.name}, {site.address.line1}
            <br />
            {site.address.eircode}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}.
          </p>
          <p>Safety instruction is not legal advice or a licence.</p>
        </div>
      </div>
    </footer>
  );
}
