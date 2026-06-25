import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
      <SiteHeader />
      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-semibold text-accent">
            {resource.readTime}
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            {resource.title}
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            {resource.description}
          </p>
          <div className="mt-12 space-y-10">
            {resource.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {section.heading}
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
                        className="rounded-lg border border-gray-100 p-4"
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
                        className="rounded-lg border border-gray-100 p-5"
                      >
                        <h3 className="text-lg font-semibold text-foreground">
                          {row.tool}
                        </h3>
                        <dl className="mt-4 grid gap-4 text-sm leading-relaxed md:grid-cols-3">
                          <div>
                            <dt className="font-semibold text-foreground">
                              Best for
                            </dt>
                            <dd className="mt-1 text-muted">{row.bestFor}</dd>
                          </div>
                          <div>
                            <dt className="font-semibold text-foreground">
                              Strengths
                            </dt>
                            <dd className="mt-1 text-muted">
                              {row.strengths}
                            </dd>
                          </div>
                          <div>
                            <dt className="font-semibold text-foreground">
                              Tradeoffs
                            </dt>
                            <dd className="mt-1 text-muted">
                              {row.tradeoffs}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
