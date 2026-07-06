import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingFlowDemo from "@/components/BookingFlowDemo";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { services, siteUrl } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const serviceDetails: Record<
  string,
  {
    intro: string;
    signs: string[];
    process: string[];
    outcome: string;
  }
> = {
  "reservation-and-booking-automation": {
    intro:
      "Booking automation is not just an online calendar. The useful version captures requests, applies your rules, confirms the right slots, reminds customers, and routes exceptions to a person before they become missed revenue.",
    signs: [
      "Staff answer booking calls during service or appointments.",
      "Customers ask to reschedule in WhatsApp, email, and phone calls.",
      "No-shows are common enough that reminders would pay for themselves.",
      "Nobody trusts the calendar because offline changes are not recorded.",
    ],
    process: [
      "Map the real booking rules and exceptions.",
      "Define the first automated path: request, confirm, remind, cancel or reschedule.",
      "Build the customer-facing flow and staff view.",
      "Run a short pilot, then add deposits, waitlists, or reports only if the data proves they matter.",
    ],
    outcome:
      "A booking flow that saves staff time without making customers feel pushed through a generic system.",
  },
  "client-intake-systems": {
    intro:
      "Client intake systems turn messy first contact into useful structured information. The goal is to qualify faster, reduce back-and-forth, and make sure the first human conversation starts with context.",
    signs: [
      "New leads arrive through several channels and get copied manually.",
      "The same questions are asked in every first call.",
      "Important details are missing when work starts.",
      "Follow-up depends on memory or a shared inbox.",
    ],
    process: [
      "List the decisions the intake should support.",
      "Design a short form that collects only useful information.",
      "Add qualification rules and internal routing.",
      "Create follow-up messages and a review queue for the team.",
    ],
    outcome:
      "A cleaner front door for new work, with fewer unqualified calls and less manual chasing.",
  },
  "mvp-builds": {
    intro:
      "A focused MVP is the smallest working version of the product loop that proves whether the idea deserves more investment. It should answer a business question, not imitate a fully mature product.",
    signs: [
      "The product idea has too many possible first features.",
      "You need real user behavior before raising or spending more money.",
      "A no-code prototype proved interest but cannot support the next step.",
      "You need a working backend, not just a clickable mockup.",
    ],
    process: [
      "Find the riskiest assumption and the smallest proof loop.",
      "Cut version-two features before estimates are made.",
      "Build the core user flow with enough admin visibility to operate it.",
      "Launch to a small audience and use the evidence to decide what comes next.",
    ],
    outcome:
      "A real product slice that can create evidence in weeks, not a months-long build that only proves you can spend a budget.",
  },
  "internal-operations-tools": {
    intro:
      "Internal tools are for processes that already work in someone's head but break when volume rises. A good tool gives the team one source of truth and makes status visible without another meeting.",
    signs: [
      "The workflow lives in spreadsheets, chat threads, and one person's memory.",
      "Managers ask for the same status update repeatedly.",
      "Mistakes happen during handoff rather than during decision-making.",
      "Training new staff takes too long because the process is undocumented.",
    ],
    process: [
      "Map the current workflow and separate judgment from handoff.",
      "Choose one painful slice for version one.",
      "Build the tracker, roles, notifications, and exports needed for that slice.",
      "Pilot with one team before rolling out more workflow coverage.",
    ],
    outcome:
      "Less status chasing, fewer handoff mistakes, and a process the business can actually scale.",
  },
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | WizeApps`,
    description: service.summary,
    alternates: { canonical: `${siteUrl}/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const details = service ? serviceDetails[service.slug] : null;

  if (!service || !details) {
    notFound();
  }

  const url = `${siteUrl}/services/${service.slug}`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url,
    provider: {
      "@type": "Organization",
      name: "WizeApps",
      url: siteUrl,
      email: "hello@wizeapps.agency",
    },
    areaServed: "Worldwide",
    serviceType: service.title,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-12 md:pt-28">
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
          >
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              &larr;
            </span>
            All services
          </Link>
          <p className="eyebrow-badge mt-6">Service</p>
          <h1 className="mt-5 max-w-3xl text-4xl md:text-5xl font-semibold tracking-tight leading-[1.08]">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted leading-relaxed">
            {details.intro}
          </p>
        </section>

        <article className="max-w-5xl mx-auto px-6 pb-20 md:pb-28">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="card-fancy p-7">
              <h2 className="text-xl font-semibold">Good fit when</h2>
              <ul className="mt-5 space-y-3 text-muted leading-relaxed">
                {details.signs.map((sign) => (
                  <li key={sign} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100} className="card-fancy p-7">
              <h2 className="text-xl font-semibold">How we build it</h2>
              <ol className="mt-5 space-y-3 text-muted leading-relaxed">
                {details.process.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent-deep">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal className="mt-8 rounded-2xl border border-accent/20 bg-accent-soft/50 p-7">
            <h2 className="text-xl font-semibold">Expected outcome</h2>
            <p className="mt-3 text-muted leading-relaxed">
              {details.outcome}
            </p>
          </Reveal>

          {service.slug === "reservation-and-booking-automation" ? (
            <BookingFlowDemo />
          ) : null}

          <Reveal className="mt-8 grid gap-4 rounded-2xl border border-gray-100 bg-muted-light/60 p-7 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold">Typical deliverables</h2>
              <ul className="mt-4 space-y-2 text-muted">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Best for</h2>
              <p className="mt-4 text-muted leading-relaxed">
                {service.bestFor}
              </p>
              <Link
                href="/contact"
                className="btn-shimmer mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white"
              >
                Discuss this service
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
