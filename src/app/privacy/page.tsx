import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy policy" updated="29 September 2026">
      <p>
        {site.legalName} (“we”) operates this website and, separately, a
        training platform linked from the Start the course buttons. This
        policy describes how we handle personal information collected through
        this marketing site.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">What we collect</h2>
      <p>
        If you email us, we receive whatever you include in that message.
        Server logs may include IP address, browser type, and pages requested.
        We do not use this site to collect payment card details.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">How we use it</h2>
      <p>
        We use contact details to reply to you. Course enrolment, progress, and
        certificates are handled on the training platform under that
        platform’s own terms and privacy notice.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Sharing</h2>
      <p>
        We do not sell personal information. We may share data with service
        providers who host this site (for example Vercel) — only as needed to
        operate the service — or if required by law.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Retention</h2>
      <p>
        Email correspondence is kept only as long as needed to respond and to
        maintain a reasonable business record, then deleted or anonymised.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Your rights</h2>
      <p>
        You may request access, correction, or deletion of the information we
        hold about you, subject to applicable law. Contact {site.email}.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Children</h2>
      <p>
        This site and the course are directed at adults. We do not knowingly
        collect personal information from children.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Contact</h2>
      <p>
        Privacy questions: {site.email}. Postal: {site.address.line1},{" "}
        {site.address.line2}.
      </p>
    </LegalLayout>
  );
}
