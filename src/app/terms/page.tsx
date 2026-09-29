import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of use" updated="29 September 2026">
      <p>
        These terms govern your use of the {site.name} website. Firearms
        Safety Essentials is delivered on a separate training platform;
        enrolment there is subject to that platform’s terms.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Education only</h2>
      <p>
        {site.legalName} provides firearms safety education. We are not a
        firearms dealer. Nothing on this site is an offer to sell a firearm,
        ammunition, or related equipment. Instruction is not a substitute for
        licensing, a background check, or advice from a qualified attorney in
        your jurisdiction.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Responsible use</h2>
      <p>
        You agree to use this site lawfully. The course is for legitimate
        safety education. You are responsible for complying with all laws that
        apply to you, including ownership, storage, transport, and use of
        firearms.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">No warranty</h2>
      <p>
        Content is provided for general information. Completing the course does
        not guarantee a licence, range membership, employment, or any particular
        outcome. To the fullest extent permitted by law, we disclaim liability
        for actions taken after reading this site or completing the course.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Intellectual property</h2>
      <p>
        Site design, copy, and branding are owned by {site.legalName} or our
        licensors. You may not copy them for a competing service without
        permission.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Contact</h2>
      <p>
        Questions: {site.email}.
      </p>
    </LegalLayout>
  );
}
