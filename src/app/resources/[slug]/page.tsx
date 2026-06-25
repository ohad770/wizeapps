import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSense from "@/components/AdSense";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { resources } from "@/lib/site";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    return {};
  }

  return {
    title: `${resource.title} | WizeApps`,
    description: resource.description,
  };
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AdSense />
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-b from-accent-soft/70 via-white to-white"
          />
          <div aria-hidden="true" className="blob blob-accent -top-24 -left-16 h-72 w-72" />
          <div aria-hidden="true" className="blob blob-accent-2 -top-10 right-0 h-64 w-64" />
          <div className="max-w-3xl mx-auto px-6 pt-20 pb-12 md:pt-28">
            <Link
              href="/resources"
              className="group inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
            >
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1">
                &larr;
              </span>
              All resources
            </Link>
            <p
              className="eyebrow-badge mt-6"
              style={{ animation: "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
            >
              {resource.readTime}
            </p>
            <h1
              className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.08]"
              style={{ animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.08s both" }}
            >
              {resource.title}
            </h1>
            <p
              className="mt-6 text-lg text-muted leading-relaxed"
              style={{ animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.16s both" }}
            >
              {resource.description}
            </p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 pb-20 md:pb-28">
          <div className="space-y-12">
            {resource.sections.map((section) => (
              <Reveal as="section" key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-tight">
                  <span className="bg-gradient-to-r from-accent to-accent-deep bg-clip-text text-transparent">
                    {section.heading}
                  </span>
                </h2>
                <div className="mt-4 space-y-4 text-muted leading-relaxed">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <div className="mt-6 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <div
                        key={bullet.label}
                        className="rounded-xl border border-gray-100 bg-muted-light/60 p-5 transition-colors duration-300 hover:border-accent/40 hover:bg-accent-soft/50"
                      >
                        <h3 className="font-semibold text-foreground">
                          {bullet.label}
                        </h3>
                        <p className="mt-2 text-muted leading-relaxed">
                          {bullet.text}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
                {section.comparison ? (
                  <div className="mt-6 grid gap-4">
                    {section.comparison.map((row) => (
                      <div
                        key={row.tool}
                        className="card-fancy p-6"
                      >
                        <h3 className="text-lg font-semibold text-foreground">
                          {row.tool}
                        </h3>
                        <dl className="mt-4 grid gap-4 text-sm leading-relaxed md:grid-cols-3">
                          <div>
                            <dt className="font-semibold text-accent-deep">
                              Best for
                            </dt>
                            <dd className="mt-1 text-muted">{row.bestFor}</dd>
                          </div>
                          <div>
                            <dt className="font-semibold text-accent-deep">
                              Strengths
                            </dt>
                            <dd className="mt-1 text-muted">{row.strengths}</dd>
                          </div>
                          <div>
                            <dt className="font-semibold text-accent-deep">
                              Tradeoffs
                            </dt>
                            <dd className="mt-1 text-muted">{row.tradeoffs}</dd>
                          </div>
                        </dl>
                      </div>
                    ))}
                  </div>
                ) : null}
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal className="mt-16 overflow-hidden rounded-2xl bg-foreground text-white relative">
            <div
              aria-hidden="true"
              className="blob blob-accent -top-16 right-0 h-56 w-56 opacity-40"
            />
            <div className="relative px-7 py-10 md:px-10">
              <h2 className="text-2xl font-semibold tracking-tight">
                Thinking about building this?
              </h2>
              <p className="mt-3 text-gray-300 leading-relaxed max-w-lg">
                Tell us what is not working yet. A few clear examples of the
                current workflow are enough to start a useful conversation.
              </p>
              <Link
                href="/contact"
                className="btn-shimmer mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white"
              >
                Start a conversation
                <span aria-hidden="true" className="arrow-nudge">
                  &rarr;
                </span>
              </Link>
            </div>
          </Reveal>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
