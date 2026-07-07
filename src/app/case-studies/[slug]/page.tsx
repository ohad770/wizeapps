import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { author, realProjects, siteUrl } from "@/lib/site";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

const sectionLabels = {
  decisions: "Key build decisions",
  whatShipped: "What shipped",
  trickyParts: "What got tricky",
  nextTime: "What we would improve next time",
} as const;

export function generateStaticParams() {
  return realProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = realProjects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  const url = `${siteUrl}${project.detailHref}`;

  return {
    title: `How we built ${project.title} | WizeApps`,
    description: project.problem,
    authors: [{ name: author.name, url: author.url }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "WizeApps",
      title: `How we built ${project.title}`,
      description: project.problem,
      images: [{ url: `${siteUrl}${project.screenshot}` }],
      authors: [author.name],
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const project = realProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const url = `${siteUrl}${project.detailHref}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `How we built ${project.title}`,
    description: project.problem,
    mainEntityOfPage: url,
    image: `${siteUrl}${project.screenshot}`,
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
        name: "Case studies",
        item: `${siteUrl}/case-studies`,
      },
      { "@type": "ListItem", position: 3, name: project.title, item: url },
    ],
  };

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
      <SiteHeader />
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-12 md:pt-28">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
          >
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              &larr;
            </span>
            All case studies
          </Link>
          <p className="eyebrow-badge mt-6">{project.industry}</p>
          <h1 className="mt-5 max-w-3xl text-4xl md:text-5xl font-semibold tracking-tight leading-[1.08]">
            How we built {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted leading-relaxed">
            {project.problem}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{project.timeline}</span>
            <span aria-hidden="true">·</span>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:underline"
            >
              View live project
            </a>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16 md:pb-24">
          <Reveal className="overflow-hidden rounded-2xl border border-gray-100 bg-muted-light">
            <Image
              src={project.screenshot}
              alt={`Screenshot of ${project.title}`}
              width={1440}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
          </Reveal>
        </section>

        <article className="max-w-3xl mx-auto px-6 pb-20 md:pb-28">
          {project.testimonial ? (
            <Reveal className="mb-12 rounded-2xl border border-accent/20 bg-accent-soft/40 p-6 md:p-8">
              <p className="text-lg leading-relaxed text-foreground">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-accent-deep">
                {project.testimonial.author}
                <span className="ml-2 font-normal text-muted">
                  {project.testimonial.role}
                </span>
              </p>
            </Reveal>
          ) : null}
          <Reveal className="rounded-2xl border border-gray-100 bg-muted-light/60 p-6 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-deep">
              Stack
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.builtWith.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-accent/20 bg-white px-3 py-1 text-sm text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 space-y-12">
            <Reveal as="section">
              <h2 className="text-2xl font-semibold tracking-tight">
                Why this was the right shape
              </h2>
              <div className="mt-4 space-y-4 text-muted leading-relaxed">
                {project.teardown.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal as="section">
              <h2 className="text-2xl font-semibold tracking-tight">
                {sectionLabels.decisions}
              </h2>
              <div className="mt-6 grid gap-4">
                {project.teardown.decisions.map((decision) => (
                  <div
                    key={decision.label}
                    className="rounded-xl border border-gray-100 bg-muted-light/60 p-5"
                  >
                    <h3 className="font-semibold text-foreground">
                      {decision.label}
                    </h3>
                    <p className="mt-2 text-muted leading-relaxed">
                      {decision.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {(["whatShipped", "trickyParts", "nextTime"] as const).map(
              (key) => (
                <Reveal as="section" key={key}>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {sectionLabels[key]}
                  </h2>
                  <ul className="mt-5 space-y-3 text-muted leading-relaxed">
                    {project.teardown[key].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ),
            )}
          </div>

          <Reveal className="mt-16 overflow-hidden rounded-2xl bg-foreground text-white">
            <div className="px-7 py-10 md:px-10">
              <h2 className="text-2xl font-semibold tracking-tight">
                Want a teardown like this for your own workflow?
              </h2>
              <p className="mt-3 max-w-lg text-gray-300 leading-relaxed">
                Send the current process, the tools involved, and what keeps
                breaking. We can usually find the smallest useful build before
                anyone writes code.
              </p>
              <Link
                href="/contact"
                className="btn-shimmer mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white"
              >
                Talk through a project
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
