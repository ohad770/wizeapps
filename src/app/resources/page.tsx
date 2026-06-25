import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { resources } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources | WizeApps",
  description:
    "Practical guides about booking automation, MVP planning, website tools, app development tools, manual operations, and preparing for software builds.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageIntro
          eyebrow="Resources"
          title="Practical notes for building less software and getting better outcomes."
          description="Short, plain-language guides and comparisons for business owners and founders who want to improve a workflow before turning it into software."
        />
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {resources.map((resource, i) => (
              <Reveal
                key={resource.slug}
                delay={(i % 2) * 100}
                className="h-full"
              >
                <Link
                  href={`/resources/${resource.slug}`}
                  className="card-fancy group flex h-full flex-col p-7"
                >
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-deep">
                    {resource.readTime}
                  </span>
                  <h2 className="mt-4 text-xl font-semibold transition-colors duration-300 group-hover:text-accent-deep">
                    {resource.title}
                  </h2>
                  <p className="mt-3 text-muted leading-relaxed">
                    {resource.description}
                  </p>
                  <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-accent font-medium">
                    Read guide
                    <span aria-hidden="true" className="arrow-nudge">
                      &rarr;
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
