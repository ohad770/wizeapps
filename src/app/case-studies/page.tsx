import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { caseStudies, realProjects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies | WizeApps",
  description:
    "Real, live projects we've built, plus illustrative examples of how focused software systems can improve reservations, clinic operations, and early MVP launches.",
  alternates: { canonical: "/case-studies" },
};

const stages = ["Problem", "Approach", "Outcome"] as const;

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageIntro
          eyebrow="Real projects and example scenarios"
          title="What we've actually shipped, and what a focused build can change."
          description="The projects below are live products we built. Further down are illustrative scenarios showing the kinds of operational problems WizeApps is built to solve."
        />
        <section className="max-w-5xl mx-auto px-6 pt-16 md:pt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Live projects
          </h2>
          <p className="mt-2 text-muted leading-relaxed max-w-2xl">
            Real products, built and shipped. Click through and see them
            running.
          </p>
          <div className="mt-8 space-y-8">
            {realProjects.map((project, i) => (
              <Reveal
                as="article"
                key={project.slug}
                delay={(i % 2) * 90}
                className="card-fancy p-7 md:p-9 group"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <p className="eyebrow-badge">{project.industry}</p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-green-600" />
                    Live project
                  </span>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent-deep"
                >
                  {project.title}
                  <span aria-hidden="true" className="arrow-nudge text-lg">
                    &rarr;
                  </span>
                </a>
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
                          {project[key]}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Illustrative scenarios
          </h2>
          <Reveal className="mt-6 mb-10 rounded-2xl border border-accent/20 bg-accent-soft/50 p-5 text-sm text-muted leading-relaxed md:p-6">
            <span className="font-semibold text-accent-deep">
              A note on these examples:
            </span>{" "}
            the following are illustrative scenarios built from common patterns
            we see across small businesses and early-stage teams. They are
            written to explain how we approach problems — they are not
            descriptions of specific named clients or guaranteed results.
          </Reveal>
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
