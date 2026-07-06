import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSense from "@/components/AdSense";
import Reveal from "@/components/Reveal";
import { diagrams } from "@/components/ResourceDiagrams";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { author, resources, siteUrl } from "@/lib/site";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

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

  const url = `${siteUrl}/resources/${resource.slug}`;

  return {
    title: `${resource.title} | WizeApps`,
    description: resource.description,
    authors: [{ name: author.name, url: author.url }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "WizeApps",
      title: resource.title,
      description: resource.description,
      publishedTime: resource.datePublished,
      modifiedTime: resource.dateModified,
      authors: [author.name],
    },
  };
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

  const url = `${siteUrl}/resources/${resource.slug}`;
  const index = resources.indexOf(resource);
  const related = Array.from(
    { length: 3 },
    (_, i) => resources[(index + i + 1) % resources.length],
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.description,
    datePublished: resource.datePublished,
    dateModified: resource.dateModified,
    mainEntityOfPage: url,
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
      sameAs: [author.linkedin],
    },
    publisher: {
      "@type": "Organization",
      name: "WizeApps",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo-180.png`,
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: `${siteUrl}/resources`,
      },
      { "@type": "ListItem", position: 3, name: resource.title, item: url },
    ],
  };

  const faqJsonLd = resource.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: resource.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}
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
            <div
              className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted"
              style={{ animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.22s both" }}
            >
              <span>
                By{" "}
                <Link href="/about" className="font-medium text-foreground hover:text-accent-deep">
                  {author.name}
                </Link>
                , {author.role}
              </span>
              <span aria-hidden="true">·</span>
              <time dateTime={resource.datePublished}>
                Published {formatDate(resource.datePublished)}
              </time>
              {resource.dateModified !== resource.datePublished ? (
                <>
                  <span aria-hidden="true">·</span>
                  <time dateTime={resource.dateModified}>
                    Updated {formatDate(resource.dateModified)}
                  </time>
                </>
              ) : null}
            </div>
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
                {section.diagramId && diagrams[section.diagramId] ? (
                  <div className="mt-6 rounded-xl border border-gray-100 bg-white p-5 md:p-7">
                    {diagrams[section.diagramId]()}
                  </div>
                ) : null}
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

          {resource.faq ? (
            <Reveal as="section" className="mt-16">
              <h2 className="text-2xl font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-accent to-accent-deep bg-clip-text text-transparent">
                  Frequently asked questions
                </span>
              </h2>
              <div className="mt-6 grid gap-4">
                {resource.faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-xl border border-gray-100 bg-muted-light/60 p-5"
                  >
                    <h3 className="font-semibold text-foreground">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          ) : null}

          {/* Author */}
          <Reveal className="mt-16 rounded-2xl border border-gray-100 bg-muted-light/50 p-6 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-deep">
              About the author
            </p>
            <h2 className="mt-3 font-semibold text-foreground">
              {author.name} — {author.role}
            </h2>
            <p className="mt-2 text-muted leading-relaxed">{author.bio}</p>
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              Connect on LinkedIn
              <span aria-hidden="true" className="arrow-nudge">
                &rarr;
              </span>
            </a>
          </Reveal>

          {/* Related guides */}
          <Reveal as="section" className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Keep reading
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/resources/${item.slug}`}
                  className="card-fancy group flex h-full flex-col p-5"
                >
                  <span className="text-xs font-medium text-accent-deep">
                    {item.readTime}
                  </span>
                  <span className="mt-2 font-semibold leading-snug transition-colors duration-300 group-hover:text-accent-deep">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>

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
