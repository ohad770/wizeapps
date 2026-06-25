import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies | WizeApps",
  description:
    "Examples of how focused software systems can improve reservations, clinic operations, and early MVP launches.",
};

const stages = ["Problem", "Approach", "Outcome"] as const;

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
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="space-y-8">
            {caseStudies.map((study, i) => (
              <Reveal
                as="article"
                key={study.slug}
                delay={(i % 2) * 90}
                className="card-fancy p-7 md:p-9 group"
              >
                <p className="eyebrow-badge">{study.industry}</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent-deep">
                  {study.title}
                </h2>
                <div className="mt-7 grid gap-6 md:grid-cols-3">
                  {stages.map((stage) => {
                    const key = stage.toLowerCase() as
                      | "problem"
                      | "approach"
                      | "outcome";
                    return (
                      <div
                        key={stage}
                        className="relative rounded-xl bg-muted-light/70 p-5"
                      >
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-accent-deep">
                          {stage}
                        </h3>
                        <p className="mt-2 text-muted text-[15px] leading-relaxed">
                          {study[key]}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
