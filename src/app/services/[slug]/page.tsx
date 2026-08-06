import type { Metadata } from "next";
import Image from "next/image";
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
  "mobile-sdk-development": {
    intro:
      "An SDK runs inside somebody else's app, on their threads, with their dependency versions and their release configuration. That one difference is what separates it from building an app: the public surface, the dependency footprint, the wrapper layer and the shipped artifact all become the product.",
    signs: [
      "Your library works in a debug build and a customer reports it failing in release.",
      "The native Android and iOS side is fine and the React Native, Flutter or Unity wrapper keeps falling behind it.",
      "The same integration questions arrive repeatedly, which usually means the entry points or the guide are the problem.",
      "Nobody can state which OS, host framework and dependency versions the current release actually supports.",
    ],
    process: [
      "Agree the public surface: entry points, threading, failure behaviour, and what is safe to call twice.",
      "Build the native Android and iOS libraries first, then wrap them one platform at a time.",
      "Ship keep rules with the library and test them from a release build of a consuming app.",
      "Verify from the packaged artifact — the AAB, APK or framework — rather than from the source.",
      "Publish with a support matrix, sample apps that resolve the published version, and a guide a developer can follow unaided.",
    ],
    outcome:
      "An SDK another team can integrate without contacting you, that survives their release build, and whose next version does not break their app.",
  },
  "ad-monetization-integration": {
    intro:
      "Google Ad Manager, AdMob, IMA for video and GMA for mobile display are four systems with their own initialization order, request shape and failure modes. Most broken integrations are not broken in a way anyone notices: the ads appear, and the requests leaving the device are missing something.",
    signs: [
      "Ads render, and nobody can demonstrate which parameters the ad server actually received.",
      "Identity or signal enrichment was added, and the first ad request of a cold session was never checked.",
      "The app has more live placements than there are request sites anyone can point to in the code.",
      "Video was added to an app that already had display, and it behaves like an unrelated product.",
      "The release build behaves differently from the debug build everything was tested against.",
    ],
    process: [
      "Read the initialization path and list every ad-request site, per platform and per wrapper.",
      "Fix the ordering: consent, then adapter registration, then awaited initialization, then requests.",
      "Route every placement through one request builder so a new placement cannot be an unenriched one.",
      "Verify with real ad requests, captured and read, including the first request after a cold start.",
    ],
    outcome:
      "An integration whose request contents you can demonstrate instead of assume, with the silent losses — unenriched first requests and unenriched placements — closed.",
  },
  "ai-feature-integration": {
    intro:
      "Putting AI into a product that already has users is mostly not a model problem. It is a question of which decisions the model is allowed to make, what happens when it is wrong, and whether the screens people use every day stay as fast as they were.",
    signs: [
      "You have a matching, ranking or classification problem that a person cannot keep up with at your volume.",
      "A feature was prototyped and turned out too slow or too expensive to leave switched on.",
      "The output is plausible and nobody can explain to a user why it came out that way.",
      "The model is right most of the time, and there is no defined path for the rest.",
    ],
    process: [
      "Pick one decision the feature supports, and settle whether it drafts or decides.",
      "Structure the inputs before reaching for a model — separate statements beat one blob of text.",
      "Put plain pass or fail rules around the score, and keep the reason with the result.",
      "Move the cost off the read path with precomputation, then measure what a single use costs.",
      "Ship the correction path and the provider-down fallback in the first version.",
    ],
    outcome:
      "One AI feature that earns its place in a product already in use: explainable to the people reading it, cheap enough to leave on, and safe when the model is wrong.",
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

  const faqJsonLd = service.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}
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

          {service.sections ? (
            <div className="mt-14 space-y-12">
              {service.sections.map((section) => (
                <Reveal as="section" key={section.heading}>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    <span className="bg-gradient-to-r from-accent to-accent-deep bg-clip-text text-transparent">
                      {section.heading}
                    </span>
                  </h2>
                  <div className="mt-4 space-y-4 text-muted leading-relaxed">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.image ? (
                    <figure className="mt-6 overflow-hidden rounded-xl border border-gray-100 bg-white">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        width={section.image.width}
                        height={section.image.height}
                        sizes="(min-width: 768px) 720px, 100vw"
                        className="h-auto w-full"
                      />
                      <figcaption className="border-t border-gray-100 px-5 py-4 text-sm leading-relaxed text-muted md:px-7">
                        {section.image.caption}
                      </figcaption>
                    </figure>
                  ) : null}
                  {section.bullets ? (
                    <div className="mt-6">
                      {section.bulletsHeading ? (
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-deep">
                          {section.bulletsHeading}
                        </h3>
                      ) : null}
                      <div className="mt-3 grid gap-3">
                        {section.bullets.map((bullet) => (
                          <div
                            key={bullet.label}
                            className="rounded-xl border border-gray-100 bg-muted-light/60 p-5 transition-colors duration-300 hover:border-accent/40 hover:bg-accent-soft/50"
                          >
                            <h4 className="font-semibold text-foreground">{bullet.label}</h4>
                            <p className="mt-2 text-muted leading-relaxed">{bullet.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </Reveal>
              ))}
            </div>
          ) : null}

          {service.workedExample ? (
            <Reveal as="section" className="mt-14 card-fancy p-7">
              <h2 className="text-2xl font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-accent to-accent-deep bg-clip-text text-transparent">
                  {service.workedExample.heading}
                </span>
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                {service.workedExample.context}
              </p>
              {service.workedExample.steps ? (
                <ol className="mt-6 space-y-4">
                  {service.workedExample.steps.map((step, index) => (
                    <li key={step.label} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent-deep">
                        {index + 1}
                      </span>
                      <span>
                        <span className="block font-semibold text-foreground">{step.label}</span>
                        <span className="mt-1 block text-muted leading-relaxed">{step.text}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              ) : null}
              {service.workedExample.result ? (
                <p className="mt-6 rounded-xl border border-accent/20 bg-accent-soft/50 p-5 text-muted leading-relaxed">
                  {service.workedExample.result}
                </p>
              ) : null}
            </Reveal>
          ) : null}

          {service.relatedProject ? (
            <Reveal className="mt-8">
              <Link
                href={service.relatedProject.href}
                className="block rounded-2xl border border-accent/20 bg-accent-soft/50 p-6 transition-colors hover:border-accent/50 hover:bg-accent-soft"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-accent-deep">
                  {service.relatedProject.label}
                </span>
                <span className="mt-2 block font-semibold text-foreground">
                  {service.relatedProject.title}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-muted">
                  {service.relatedProject.text}
                </span>
              </Link>
            </Reveal>
          ) : null}

          {service.faq ? (
            <Reveal as="section" className="mt-14">
              <h2 className="text-2xl font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-accent to-accent-deep bg-clip-text text-transparent">
                  Questions we get asked about this
                </span>
              </h2>
              <div className="mt-6 grid gap-4">
                {service.faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-xl border border-gray-100 bg-muted-light/60 p-5"
                  >
                    <h3 className="font-semibold text-foreground">{item.question}</h3>
                    <p className="mt-2 text-muted leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </Reveal>
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
