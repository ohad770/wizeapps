import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { resources } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources | WizeApps",
  description:
    "Practical guides about booking automation, MVP planning, manual operations, and preparing for software builds.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageIntro
          eyebrow="Resources"
          title="Practical notes for building less software and getting better outcomes."
          description="Short, plain-language guides for business owners and founders who want to improve a workflow before turning it into software."
        />
        <section className="max-w-5xl mx-auto px-6 pb-20 md:pb-28">
          <div className="grid gap-6 md:grid-cols-2">
            {resources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="rounded-xl border border-gray-100 p-6 hover:border-gray-200 hover:-translate-y-0.5 transition"
              >
                <span className="text-sm text-muted">{resource.readTime}</span>
                <h2 className="mt-3 text-xl font-semibold">
                  {resource.title}
                </h2>
                <p className="mt-3 text-muted leading-relaxed">
                  {resource.description}
                </p>
                <span className="mt-5 inline-flex text-accent font-medium">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
