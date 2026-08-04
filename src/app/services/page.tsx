import type { Metadata } from "next";
import Link from "next/link";
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

const howToChoose = [
  {
    heading: "Start from where the work currently jams",
    body: "The four services below are not packages to pick from a menu — they are the four shapes this work usually takes. If the jam is customers trying to reach you and staff answering the phone mid-service, that is booking automation. If it is unqualified enquiries arriving through five channels and the first call starting from zero, that is client intake. If nothing exists yet and you need evidence before spending more, that is an MVP build. If the process works but only when one specific person is present, that is an internal operations tool.",
  },
  {
    heading: "Most first versions are smaller than expected",
    body: "Every service page below has a section on what version one deliberately leaves out, because that is where these projects are won or lost. A booking flow does not need deposits, waitlists and loyalty points to be worth launching. An intake system does not need scoring before anyone has seen the raw enquiries. Cutting version two before estimating version one is the single habit that keeps a build launchable.",
  },
  {
    heading: "Integrations are the part that surprises people",
    body: "The screens are rarely the expensive part. The expensive part is the payment provider, the point-of-sale system, the calendar, the messaging channel — each one a real dependency on software we do not control. When we quote, integrations are named individually rather than folded into a feature list, because that is where scope quietly grows.",
  },
];

const serviceProof = [
  {
    service: "Reservation and booking automation",
    project: "Domino Ra'anana",
    href: "/case-studies/domino-ranana",
    body: "An ordering flow with delivery-zone rules that decide checkout eligibility, Cardcom card payments, and a handoff into the Aviv POS. Built in about two months and in daily use for more than five years.",
  },
  {
    service: "Reservation reminders at scale",
    project: "Mincha Time",
    href: "/case-studies/mincha-time",
    body: "Per-user reminders sent at each user's own minute, using Firestore time-bucket documents checked once a minute instead of a task queue. Six languages, and users grouped by rounded location so the source API is called once per location per day.",
  },
  {
    service: "Client intake systems",
    project: "Djob",
    href: "/case-studies/djob-agency",
    body: "Structured intake feeding a matching layer: statements stored as separate parts rather than one text blob, embeddings for similarity, and plain pass/fail business rules deciding what actually qualifies. About six months of scope.",
  },
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
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-accent-deep transition-colors hover:text-accent"
                >
                  Explore service &rarr;
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="bg-muted-light">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <Reveal as="h2" className="text-3xl font-semibold tracking-tight">
              How to tell which one you need
            </Reveal>
            <div className="mt-10 space-y-10">
              {howToChoose.map((item, i) => (
                <Reveal as="section" key={item.heading} delay={i * 90}>
                  <h3 className="text-xl font-semibold">{item.heading}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <Reveal as="h2" className="text-3xl font-semibold tracking-tight">
            What each of these looks like once it is built
          </Reveal>
          <p className="mt-4 max-w-3xl text-muted leading-relaxed">
            Every service above has shipped at least once. These are the live
            builds behind them, with the technical decisions that shaped each
            one.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {serviceProof.map((item, i) => (
              <Reveal
                as="article"
                key={item.project}
                delay={i * 110}
                className="card-fancy p-7"
              >
                <p className="eyebrow-badge">{item.service}</p>
                <h3 className="mt-4 text-lg font-semibold">{item.project}</h3>
                <p className="mt-3 text-muted text-[15px] leading-relaxed">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-accent-deep transition-colors hover:text-accent"
                >
                  Read the build notes &rarr;
                </Link>
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
