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
    "Focused software services for booking automation, client intake, MVP builds, and internal operations tools — plus mobile SDK development, ad monetization and ad server integration, and AI features inside existing products.",
  alternates: { canonical: "/services" },
};

const technicalServiceSlugs = [
  "mobile-sdk-development",
  "ad-monetization-integration",
  "ai-feature-integration",
];

const businessServices = services.filter(
  (service) => !technicalServiceSlugs.includes(service.slug),
);

const technicalServices = services.filter((service) =>
  technicalServiceSlugs.includes(service.slug),
);

const avoided = [
  "Features that do not change the workflow or help a user make a decision.",
  "Large dashboards before the team knows which numbers matter.",
  "Generic tools that duplicate what an existing platform already does well.",
  "Ad integrations signed off from a source review or a debug build instead of the packaged artifact.",
  "SDK support that stops at native Android and iOS when the host apps ship React Native, Flutter or Unity.",
  "AI features that depend on data the product is not collecting yet.",
];

const howToChoose = [
  {
    heading: "Start from where the work currently jams",
    body: "The four business systems on this page are not packages to pick from a menu — they are the four shapes that work usually takes. If the jam is customers trying to reach you and staff answering the phone mid-service, that is booking automation. If it is unqualified enquiries arriving through five channels and the first call starting from zero, that is client intake. If nothing exists yet and you need evidence before spending more, that is an MVP build. If the process works but only when one specific person is present, that is an internal operations tool.",
  },
  {
    heading: "Most first versions are smaller than expected",
    body: "Every business-systems page linked above has a section on what version one deliberately leaves out, because that is where these projects are won or lost. A booking flow does not need deposits, waitlists and loyalty points to be worth launching. An intake system does not need scoring before anyone has seen the raw enquiries. Cutting version two before estimating version one is the single habit that keeps a build launchable.",
  },
  {
    heading: "Integrations are the part that surprises people",
    body: "The screens are rarely the expensive part. The expensive part is the payment provider, the point-of-sale system, the calendar, the messaging channel — each one a real dependency on software we do not control. When we quote, integrations are named individually rather than folded into a feature list, because that is where scope quietly grows.",
  },
  {
    heading: "If the product already exists, the question is which layer is failing",
    body: "For the engineering group the first useful question is where the boundary sits. If other teams have to embed your code — native Android, native iOS, and a React Native, Flutter or Unity wrapper on top — that is SDK work, and the wrapper is usually where the time goes, because it has to forward calls and callbacks in the exact shape the host SDK expects. If the app already shows ads and the problem is what the ad request contains, when it fires, or which of Google Ad Manager, AdMob, IMA and GMA is involved, that is ad monetization and ad server integration. If the product itself works and the feature you want is a ranking, a match or a summary the current code cannot produce, that is the AI work.",
  },
  {
    heading: "SDK and ad work is verified against the artifact, not the source tree",
    body: "Two facts decide how this work is run. Release builds on Android go through R8 and ProGuard, which can strip or rename a class an ad SDK resolves reflectively at runtime — so the debug build passes, the release build fails, and nothing in the source tells you which one you are looking at. And there is no unit test for whether the ad server received the parameter you think you sent. So verification means building the APK, AAB or framework and inspecting what is actually inside it, then making real ad requests and reading them. A unit test cannot catch a class that compiled cleanly and then got dropped from the shipped bundle.",
  },
  {
    heading: "Ordering is a requirement, not an implementation detail",
    body: "Identity and signal enrichment has to be registered and ready before the ads SDK initializes, and that readiness has to be awaited rather than assumed. If it is not, the first ad request of the session goes out unenriched, nothing throws, no log line looks wrong, and the session simply earns less. The same applies per call site: enrichment has to happen at every ad request in the app, and a missed one is invisible unless you go looking for it. That is why listing every ad-request site in the app is part of the estimate rather than something discovered halfway through.",
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

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[number];
  delay: number;
}) {
  return (
    <Reveal as="article" delay={delay} className="card-fancy p-7 group">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <span
          aria-hidden="true"
          className="text-accent opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
        >
          &rarr;
        </span>
      </div>
      <p className="mt-3 text-muted leading-relaxed">{service.summary}</p>
      <p className="mt-5 text-sm font-semibold text-accent-deep">Best for</p>
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
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageIntro
          eyebrow="Services"
          title="Focused builds for processes that are too important to keep manual."
          description="Two groups of work sit on this page: business systems for small businesses and founders, and mobile SDK, ad monetization and AI integration work for product and engineering teams. Both start with mapping what actually happens and end with a working system. We keep the scope narrow enough to launch quickly and useful enough to change the business."
        />
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="text-lg text-muted leading-relaxed">
              The first group is for a business where something is manual, or
              does not exist yet, and the build starts by mapping the process.
              The second is engineering work inside a product that already ships
              and already has users — a mobile SDK other teams embed, an ad
              monetization stack, an AI feature — where the process exists and
              one layer of it is failing.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              They sit on one page because the failure mode is the same in both:
              the visible part looks fine while the part that decides the
              outcome was never checked. In a booking flow that is the
              cancellation path nobody tried. In an ad integration it is the
              release build that quietly stopped sending a parameter. What
              changes between the groups is who we talk to and where the risk
              hides — not how the work is run.
            </p>
          </Reveal>

          <Reveal className="mt-16">
            <p className="eyebrow-badge">Business systems</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">
              Turning a manual process into software
            </h2>
            <p className="mt-4 max-w-3xl text-muted leading-relaxed">
              Booking, intake, first versions and internal tools for small
              businesses and early-stage founders. These builds start from how
              the work runs today — who calls whom, what gets retyped, what
              falls through — and end with something your team uses instead of
              the manual routine.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {businessServices.map((service, i) => (
              <ServiceCard
                key={service.slug}
                service={service}
                delay={(i % 2) * 110}
              />
            ))}
          </div>

          <Reveal className="mt-20">
            <p className="eyebrow-badge">SDK, ad-tech and AI</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">
              Engineering inside a product that already exists
            </h2>
            <p className="mt-4 max-w-3xl text-muted leading-relaxed">
              For product and engineering teams: native Android and iOS, SDKs
              that host apps embed through React Native, Flutter or Unity
              wrappers, Google Ad Manager, AdMob, IMA for video and GMA for
              mobile display, releases through the App Store and Google Play,
              and AI features added to a codebase that was written before we
              arrived. The team here usually has engineers already — the gap is
              someone who has shipped this specific integration before and knows
              how it is verified.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {technicalServices.map((service, i) => (
              <ServiceCard
                key={service.slug}
                service={service}
                delay={(i % 2) * 110}
              />
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
            Each of the business systems above has shipped at least once. These
            are the live builds behind them, with the technical decisions that
            shaped each one.
          </p>
          <p className="mt-4 max-w-3xl text-muted leading-relaxed">
            The SDK and ad monetization work is not represented above for a
            simple reason: it is contract engineering inside another company&apos;s
            product, so there is no site of ours to link to. The client is
            IntentIQ, an ad-tech company we work with on mobile SDK development
            — native Android and iOS plus the React Native, Flutter and Unity
            wrappers — and on identity and secure-signals integration across
            Google Ad Manager, AdMob, IMA and GMA. Their implementation details
            stay theirs. What this work produces that we can publish is the
            engineering practice around it: the ordering constraints, the keep
            rules, and the habit of verifying against the packaged artifact
            rather than the source tree.
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
