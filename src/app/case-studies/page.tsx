import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies | WizeApps",
  description:
    "Examples of how focused software systems can improve reservations, clinic operations, and early MVP launches.",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageIntro
          eyebrow="Case studies"
          title="Realistic examples of what a focused build can change."
          description="These examples show the kind of operational problems WizeApps is built to solve: repeated work, unclear handoffs, and product ideas that need a usable first version."
        />
        <section className="max-w-5xl mx-auto px-6 pb-20 md:pb-28">
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                className="rounded-xl border border-gray-100 p-6 md:p-8"
              >
                <p className="text-sm font-semibold text-accent">
                  {study.industry}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  {study.title}
                </h2>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="text-sm font-semibold">Problem</h3>
                    <p className="mt-2 text-muted text-[15px] leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Approach</h3>
                    <p className="mt-2 text-muted text-[15px] leading-relaxed">
                      {study.approach}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Outcome</h3>
                    <p className="mt-2 text-muted text-[15px] leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
