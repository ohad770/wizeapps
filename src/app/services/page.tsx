import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | WizeApps",
  description:
    "Focused software services for booking automation, client intake, MVP builds, and internal operations tools.",
  alternates: { canonical: "/services" },
};

const avoided = [
  "Features that do not change the workflow or help a user make a decision.",
  "Large dashboards before the team knows which numbers matter.",
  "Generic tools that duplicate what an existing platform already does well.",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageIntro
          eyebrow="Services"
          title="Focused builds for processes that are too important to keep manual."
          description="Each service starts with process mapping and ends with a working system your team can actually use. We keep the scope narrow enough to launch quickly and useful enough to change the business."
        />
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal
                as="article"
                key={service.slug}
                delay={(i % 2) * 110}
                className="card-fancy p-7 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold">{service.title}</h2>
                  <span
                    aria-hidden="true"
                    className="text-accent opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    &rarr;
                  </span>
                </div>
                <p className="mt-3 text-muted leading-relaxed">
                  {service.summary}
                </p>
                <p className="mt-5 text-sm font-semibold text-accent-deep">
                  Best for
                </p>
                <p className="mt-2 text-muted text-[15px] leading-relaxed">
                  {service.bestFor}
                </p>
                <p className="mt-5 text-sm font-semibold text-accent-deep">
                  Typical deliverables
                </p>
                <ul className="mt-3 space-y-2 text-[15px] text-muted">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="relative overflow-hidden bg-foreground text-white">
          <div
            aria-hidden="true"
            className="blob blob-accent -top-20 right-10 h-72 w-72 opacity-40"
          />
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 relative">
            <Reveal as="h2" className="text-3xl font-semibold tracking-tight">
              What we avoid building
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {avoided.map((text, i) => (
                <Reveal
                  key={text}
                  delay={i * 110}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent/50 hover:bg-white/[0.07]"
                >
                  <span className="text-2xl text-accent" aria-hidden="true">
                    ✕
                  </span>
                  <p className="mt-3 text-gray-300 leading-relaxed">{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
