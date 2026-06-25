import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | WizeApps",
  description:
    "Focused software services for booking automation, client intake, MVP builds, and internal operations tools.",
};

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
        <section className="max-w-5xl mx-auto px-6 pb-20 md:pb-28">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.slug}
                className="rounded-xl border border-gray-100 p-6"
              >
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="mt-3 text-muted leading-relaxed">
                  {service.summary}
                </p>
                <p className="mt-5 text-sm font-semibold">Best for</p>
                <p className="mt-2 text-muted text-[15px] leading-relaxed">
                  {service.bestFor}
                </p>
                <p className="mt-5 text-sm font-semibold">Typical deliverables</p>
                <ul className="mt-3 space-y-2 text-[15px] text-muted">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-foreground text-white">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <h2 className="text-3xl font-semibold tracking-tight">
              What we avoid building
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3 text-gray-300">
              <p>
                Features that do not change the workflow or help a user make a
                decision.
              </p>
              <p>
                Large dashboards before the team knows which numbers matter.
              </p>
              <p>
                Generic tools that duplicate what an existing platform already
                does well.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
