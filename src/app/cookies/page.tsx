import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie policy",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie policy" updated="29 September 2026">
      <p>
        This site is hosted on Vercel. Like most websites, the hosting and
        delivery network may set strictly necessary cookies or similar
        technologies to operate the service securely (for example, load
        balancing or bot protection).
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Analytics</h2>
      <p>
        We do not currently load a marketing or analytics pixel on this
        marketing site. If that changes, this page will be updated and, where
        required, we will ask for consent.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Training platform</h2>
      <p>
        The Start the course links leave this site. Cookies on the training
        platform are governed by that platform’s own policy.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Questions</h2>
      <p>{site.email}</p>
    </LegalLayout>
  );
}
