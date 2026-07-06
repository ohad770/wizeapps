import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | WizeApps",
  description:
    "Privacy policy for WizeApps, including contact data, cookies, analytics, and Google advertising disclosures.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageIntro
          eyebrow="Privacy policy"
          title="How WizeApps handles information."
          description="This page explains what information may be collected when you visit the site or contact WizeApps, and how advertising cookies may be used."
        />
        <section className="max-w-3xl mx-auto px-6 py-14 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-deep">
            Last updated: June 25, 2026
          </span>
          <div className="mt-10 space-y-5 text-muted leading-relaxed">
            <Reveal as="section" className="rounded-2xl border border-gray-100 bg-muted-light/40 p-6 md:p-7">
              <h2 className="text-xl font-semibold text-foreground">
                Information you provide
              </h2>
              <p className="mt-4">
                If you contact WizeApps by email, we may receive your name,
                email address, company name, project details, and any files or
                examples you choose to share. We use this information to reply,
                understand the request, prepare proposals, and provide services.
              </p>
            </Reveal>
            <Reveal as="section" delay={80} className="rounded-2xl border border-gray-100 bg-muted-light/40 p-6 md:p-7">
              <h2 className="text-xl font-semibold text-foreground">
                Site usage information
              </h2>
              <p className="mt-4">
                The site may collect basic technical information such as browser
                type, device information, pages visited, referral source, and
                approximate location derived from network data. This information
                helps us understand whether the site is working correctly and
                which pages are useful to visitors.
              </p>
            </Reveal>
            <Reveal as="section" delay={80} className="rounded-2xl border border-gray-100 bg-muted-light/40 p-6 md:p-7">
              <h2 className="text-xl font-semibold text-foreground">
                Google advertising cookies
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Third party vendors, including Google, use cookies to serve
                  ads based on a user&apos;s prior visits to this website or
                  other websites. Google&apos;s use of advertising cookies
                  enables Google and its partners to serve ads to users based on
                  their visits to this site and/or other sites on the Internet.
                </p>
                <p>
                  Users may opt out of personalized advertising by visiting{" "}
                  <a
                    href="https://www.google.com/settings/ads"
                    className="text-accent hover:underline"
                  >
                    Google Ads Settings
                  </a>
                  . Users can also learn how Google uses information from sites
                  that use its services at{" "}
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    className="text-accent hover:underline"
                  >
                    Google&apos;s partner sites policy page
                  </a>
                  .
                </p>
              </div>
            </Reveal>
            <Reveal as="section" delay={80} className="rounded-2xl border border-gray-100 bg-muted-light/40 p-6 md:p-7">
              <h2 className="text-xl font-semibold text-foreground">
                How information is used
              </h2>
              <p className="mt-4">
                Information may be used to respond to inquiries, operate and
                improve the website, provide requested services, prevent abuse,
                and comply with legal obligations. WizeApps does not sell
                personal information.
              </p>
            </Reveal>
            <Reveal as="section" delay={80} className="rounded-2xl border border-gray-100 bg-muted-light/40 p-6 md:p-7">
              <h2 className="text-xl font-semibold text-foreground">
                Contact
              </h2>
              <p className="mt-4">
                Questions about this policy can be sent to{" "}
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
