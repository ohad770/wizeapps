import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { author, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About WizeApps",
  description:
    "Learn how WizeApps helps businesses turn manual processes into focused, working digital systems, and who is behind it.",
  alternates: { canonical: `${siteUrl}/about` },
};

const principles = [
  {
    title: "Clarity before code",
    text: "We define the problem and the decision points before designing screens or choosing tools.",
  },
  {
    title: "Useful over impressive",
    text: "A quiet tool that saves staff two hours every day is more valuable than a polished feature nobody uses.",
  },
  {
    title: "Launch small, learn fast",
    text: "The first version should create evidence quickly so the next version is based on real use.",
  },
];

export default function AboutPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "WizeApps",
      url: siteUrl,
    },
    url: `${siteUrl}/about`,
    email: "mailto:hello@wizeapps.agency",
    sameAs: [author.linkedin],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main className="flex-1">
        <PageIntro
          eyebrow="About"
          title="We build small systems around real business problems."
          description="WizeApps works with business owners and founders who know what is broken in their day-to-day workflow, but do not want a bloated software project just to fix it."
        />

        <section className="relative overflow-hidden bg-muted-light">
          <div
            aria-hidden="true"
            className="blob blob-accent-2 -bottom-24 -right-16 h-72 w-72 opacity-30"
          />
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid gap-10 md:grid-cols-[1fr_1.2fr] relative">
            <Reveal as="h2" className="text-3xl font-semibold tracking-tight">
              The work starts <span className="text-gradient">before development.</span>
            </Reveal>
            <Reveal delay={120} className="space-y-5 text-muted leading-relaxed">
              <p>
                Many software projects fail because the team starts with a list
                of requested features instead of the actual process. We begin by
                mapping what happens today: who is involved, what gets delayed,
                where customers drop off, and which steps need human judgment.
              </p>
              <p>
                Only after that map is clear do we decide what should be built.
                Sometimes the right product is a simple intake flow. Sometimes
                it is a booking system, a private dashboard, or an MVP that
                tests one business idea. The point is to make software serve the
                workflow, not the other way around.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <Reveal as="h2" className="text-3xl font-semibold tracking-tight">
            Who is behind WizeApps
          </Reveal>
          <Reveal
            delay={100}
            className="mt-8 rounded-2xl border border-gray-100 bg-muted-light/50 p-7 md:p-9"
          >
            <h3 className="text-xl font-semibold">
              {author.name} <span className="text-muted font-normal">— Founder</span>
            </h3>
            <div className="mt-4 space-y-4 text-muted leading-relaxed max-w-3xl">
              <p>{author.bio}</p>
              <p>
                Every guide published in the{" "}
                <Link href="/resources" className="text-accent hover:underline">
                  resources section
                </Link>{" "}
                is written and reviewed by Ohad, based on the patterns that come
                up repeatedly in real client conversations — booking systems
                that get routed around, MVPs that grew too large before launch,
                and manual processes that quietly outgrew their spreadsheets.
                Questions and corrections are welcome at{" "}
                <a
                  href="mailto:hello@wizeapps.agency"
                  className="text-accent hover:underline"
                >
                  hello@wizeapps.agency
                </a>
                .
              </p>
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
              >
                Connect on LinkedIn
                <span aria-hidden="true" className="arrow-nudge">
                  &rarr;
                </span>
              </a>
            </div>
          </Reveal>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16 md:pb-24">
          <Reveal as="h2" className="text-3xl font-semibold tracking-tight">
            Principles that guide every build
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {principles.map((item, i) => (
              <Reveal
                as="article"
                key={item.title}
                delay={i * 110}
                className="card-fancy p-7 group"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-deep font-semibold transition-transform duration-300 group-hover:scale-110">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-semibold text-lg">{item.title}</h3>
                <p className="mt-3 text-muted text-[15px] leading-relaxed">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
