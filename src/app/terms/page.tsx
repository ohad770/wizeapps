import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Terms of Use | WizeApps",
  description:
    "Terms of use for visiting the WizeApps website and contacting WizeApps about software services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageIntro
          eyebrow="Terms of use"
          title="Website terms for WizeApps visitors."
          description="These terms explain the basic conditions for using this website and contacting WizeApps about software services."
        />
        <section className="max-w-3xl mx-auto px-6 py-14 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-deep">
            Last updated: June 25, 2026
          </span>
          <div className="mt-10 space-y-5 text-muted leading-relaxed">
            <Reveal as="section" className="rounded-2xl border border-gray-100 bg-muted-light/40 p-6 md:p-7">
              <h2 className="text-xl font-semibold text-foreground">
                Website information
              </h2>
              <p className="mt-4">
                The information on this website is provided for general business
                and educational purposes. It describes the kinds of software
                systems WizeApps may build and how we think about process
                design. It is not a guarantee of a specific project outcome.
              </p>
            </Reveal>
            <Reveal as="section" delay={80} className="rounded-2xl border border-gray-100 bg-muted-light/40 p-6 md:p-7">
              <h2 className="text-xl font-semibold text-foreground">
                Project discussions
              </h2>
              <p className="mt-4">
                Contacting WizeApps does not create a client relationship by
                itself. Project scope, pricing, timeline, ownership, support,
                and delivery terms are agreed separately before work begins.
              </p>
            </Reveal>
            <Reveal as="section" delay={80} className="rounded-2xl border border-gray-100 bg-muted-light/40 p-6 md:p-7">
              <h2 className="text-xl font-semibold text-foreground">
                Acceptable use
              </h2>
              <p className="mt-4">
                Visitors should not misuse the website, attempt to interfere
                with its operation, submit harmful files, or use the contact
                address for spam or automated solicitation.
              </p>
            </Reveal>
            <Reveal as="section" delay={80} className="rounded-2xl border border-gray-100 bg-muted-light/40 p-6 md:p-7">
              <h2 className="text-xl font-semibold text-foreground">
                External links
              </h2>
              <p className="mt-4">
                This website may link to third-party websites or services. Those
                sites have their own terms and privacy practices, and WizeApps is
                not responsible for their content or operation.
              </p>
            </Reveal>
            <Reveal as="section" delay={80} className="rounded-2xl border border-gray-100 bg-muted-light/40 p-6 md:p-7">
              <h2 className="text-xl font-semibold text-foreground">
                Contact
              </h2>
              <p className="mt-4">
                Questions about these terms can be sent to{" "}
                <a
                  href="mailto:hello@wizeapps.agency"
                  className="text-accent hover:underline"
                >
                  hello@wizeapps.agency
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
