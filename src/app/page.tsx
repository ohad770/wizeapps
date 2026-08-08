import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { author, resources, services, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "WizeApps turns business problems into working digital products for small businesses and founders, and works with product and engineering teams on mobile SDK development, ad monetization and ad server integration, and AI features inside existing products.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      he: "/he",
      "x-default": "/",
    },
  },
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

const engineeringLessons = [
  {
    title: "The wrapper is where it breaks",
    body: "Native Android and native iOS are one problem. React Native, Flutter and Unity add a layer that has to forward every call and every callback the host SDK expects, and that layer is where most integrations actually fail — not in the native code underneath it.",
  },
  {
    title: "A debug build proves nothing about a release build",
    body: "Release builds on Android run R8 and ProGuard, which can strip or rename a class an ad SDK resolves reflectively at runtime. Reading the source cannot tell you whether the keep rules are right. So we check the packaged APK or AAB, and the built framework on iOS, rather than the source tree — a unit test cannot catch a class that compiled fine and then got dropped from the shipped bundle.",
  },
  {
    title: "Silent revenue loss has no stack trace",
    body: "Identity and signal enrichment has an ordering constraint: the adapter has to be registered and ready before the ads SDK initializes, and that readiness has to be awaited. Miss it and the first ad request of the session goes out unenriched with no error anywhere — it just earns less. Same story if one ad-request site in the app skips enrichment.",
  },
  {
    title: "Verification means real ad requests",
    body: "There is no unit test for whether the ad server received the parameter you think you sent. You make real requests and inspect them. Google Ad Manager, AdMob, IMA for video and GMA for mobile display each have their own initialization order, request shape and failure modes, and treating them as one interchangeable thing is the usual reason an integration is quietly broken.",
  },
];

const liveProjects = [
  {
    name: "Mincha Time",
    url: "https://mincha-time.com",
    href: "/case-studies/mincha-time",
    timeline: "First version in about a month",
    summary:
      "A reminder app for prayer times. The user gets a notification before the relevant window closes wherever they happen to be, without setting anything up again each day. What you see from the outside is a notification arriving on time. What it takes is a send engine that fires on the right minute, every day, for every location.",
    points: [
      "Prayer times come from the Hebcal zmanim API. Notifications go out through Firebase Cloud Functions, Firestore and FCM.",
      "There is no task queue. A function runs once a minute and checks whether a Firestore document exists for the current minute. Documents are keyed hour_minute, so 13:47 is the document 13_47. If it is not there, the run does nothing.",
      "Users are grouped by rounded latitude and longitude, so the zmanim API is called once per location per day instead of once per user. Each run also writes tomorrow's document for that group, so the schedule advances one day at a time instead of being precomputed.",
      "Two separate and independent ways to stop receiving: a permanent off switch and a same-day snooze. Both get checked before every send.",
    ],
  },
  {
    name: "Domino's Pizza Ra'anana",
    url: "https://domino-rn.co.il",
    href: "/case-studies/domino-ranana",
    timeline: "About two months, in daily use for over five years",
    summary:
      "An ordering site for the Ra'anana branch: menu, deals, cart, payment and delivery. From the outside it looks like a menu. The real work starts the moment a customer hits checkout.",
    points: [
      "Built in Vite and React on top of Base44, with card payments through Cardcom.",
      "Orders are handed to the branch's Aviv POS, so nobody retypes them at the register.",
      "The order of operations around money: a pending order is created first, then payment runs at Cardcom, and only after that come the status update, the emails and the POS handoff.",
      "Every delivery zone carries its own delivery fee and minimum order, and those two values decide whether an address can complete an order at all.",
      "A deal is not a discounted product. It can hold several products with its own option choices, so the cart keeps the deal's structure instead of flattening it into one line.",
    ],
  },
  {
    name: "Djob",
    url: "https://djob.agency",
    href: "/case-studies/djob-agency",
    timeline: "About six months",
    summary:
      "A two-sided recruitment workspace: candidates on one side, roles and recruiters on the other, and the matching between them. Public plans start at $29 a month.",
    points: [
      "The data sits in PostgreSQL, with the platform built on Base44.",
      "Embeddings use OpenAI's text-embedding-3-small, computed over structured statement parts rather than one text blob per record.",
      "That is what makes a result explainable. Cosine similarity gives a proximity score, and a score on its own is not a decision — a candidate can look close to a role and still fail a hard requirement, so the score passes through simple pass/fail business rules.",
      "The matching screens read from snapshot tables rebuilt once a day, instead of scoring every candidate against every job each time a page opens.",
      "Two audiences needing different things out of the same data is what made this a six-month project instead of a one-month one.",
    ],
  },
];

const pricingExamples = [
  {
    name: "Mincha Time",
    duration: "About one month",
    range: "$5,000 to $10,000",
  },
  {
    name: "Domino's Pizza Ra'anana",
    duration: "About two months",
    range: "$10,000 to $20,000",
  },
  { name: "Djob", duration: "About six months", range: "$30,000 to $60,000" },
];

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WizeApps",
    url: siteUrl,
    logo: `${siteUrl}/logo-180.png`,
    email: "mailto:hello@wizeapps.agency",
    description:
      "WizeApps builds focused digital systems for small businesses and founders — booking automation, client intake flows, internal operations tools, and MVPs — and works with product and engineering teams on mobile SDK development, ad monetization and ad server integration, and AI features inside existing products.",
    founder: {
      "@type": "Person",
      name: author.name,
      url: author.url,
      sameAs: [author.linkedin],
    },
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WizeApps",
    url: siteUrl,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />

      <main className="flex-1">
        {/* ── Section 1: Hero ── */}
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-28">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] max-w-2xl">
            Your idea works.
            <br />
            <span className="text-accent">It just doesn&apos;t exist yet.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
            We turn business problems into working digital products — in weeks,
            not months. No tech jargon. No wasted features. Just a system that
            does what you actually need.
          </p>
          <p className="mt-5 text-[15px] text-muted max-w-xl leading-relaxed">
            That covers two kinds of work. Small businesses and founders come to
            us to get a manual process running as software. Product and
            engineering teams come to us for the parts that are awkward to staff
            internally — a mobile SDK, a Google Ad Manager or AdMob integration,
            an AI feature that has to hold up in production.{" "}
            <Link href="/services" className="text-accent link-underline">
              Both are on the services page
            </Link>
            .
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-foreground text-white text-base font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Tell us what you&apos;re trying to solve
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </section>

        {/* ── Section 1b: Latest Guides ── */}
        <section className="max-w-5xl mx-auto px-6 pb-20 md:pb-28">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow-badge">Latest guides</p>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                Useful notes before you build
              </h2>
              <p className="mt-4 text-muted leading-relaxed max-w-xl">
                Short guides and tool comparisons for business owners and
                founders who want to make better software decisions before
                spending money on development.
              </p>
            </div>
            <Link
              href="/resources"
              className="text-accent font-medium hover:underline shrink-0"
            >
              Read all guides &rarr;
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {resources.slice(0, 6).map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="block border-l-2 border-accent pl-6 hover:translate-x-1 transition-transform"
              >
                <span className="text-sm text-muted">{resource.readTime}</span>
                <h3 className="mt-2 text-lg font-semibold">
                  {resource.title}
                </h3>
                <p className="mt-2 text-muted text-[15px] leading-relaxed">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Section 2: The Problem ── */}
        <section className="bg-muted-light">
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-lg">
              You know what needs to happen.
              <br />
              You just don&apos;t know how to build it.
            </h2>
            <div className="mt-8 space-y-5 text-lg text-muted max-w-2xl leading-relaxed">
              <p>
                Maybe you&apos;re running a clinic and patients keep missing
                appointments because the booking process is a mess. Maybe
                you&apos;re a founder with an idea that makes perfect sense on
                paper — but you don&apos;t know where to start technically.
              </p>
              <p>
                Maybe you hired a developer once and got something that looked
                fine but didn&apos;t actually solve the problem.
              </p>
              <p className="text-foreground font-medium">
                You don&apos;t need another developer. You need someone who
                thinks about the problem first.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 3: How It Works ── */}
        <section id="process" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            How it actually works
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "You explain the problem",
                desc: "In your own words. No technical language needed.",
              },
              {
                step: "02",
                title: "We map the logic",
                desc: "We figure out how things should actually flow — what triggers what, who gets notified, what happens when something goes wrong.",
              },
              {
                step: "03",
                title: "We challenge it",
                desc: "Before building anything, we look for what's missing, what's overcomplicated, and what can be cut.",
              },
              {
                step: "04",
                title: "We build it",
                desc: "A real, working product. Not a mockup. Not a prototype. Something you and your team can use tomorrow.",
              },
            ].map((item) => (
              <div key={item.step}>
                <span className="text-sm font-semibold text-accent">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted leading-relaxed text-[15px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 4: What You Get ── */}
        <section className="bg-muted-light">
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              What you actually get
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  label: "A clear problem definition",
                  detail:
                    "A written statement of what the system has to decide, what it must not do, and what version one deliberately leaves out.",
                },
                {
                  label: "A system map",
                  detail:
                    "A visual map showing how everything connects — so you understand your own product, not just use it.",
                },
                {
                  label: "A working product",
                  detail:
                    "Deployed, functional, ready to use. Not a demo. Something you can hand to your staff or show to investors.",
                },
                {
                  label: "Real time saved",
                  detail:
                    "Hours of manual work replaced by a system that handles it. Processes that ran on WhatsApp and phone calls now run themselves.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="text-base font-semibold">{item.label}</h3>
                  <p className="mt-2 text-muted text-[15px] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-lg text-muted">
              <span className="text-foreground font-semibold">Timeline:</span>{" "}
              scope sets it, not technology. The three builds on this site took
              about one month, about two months, and about six. The estimate is
              written down before work starts, and it is what the price is
              derived from.
            </p>
          </div>
        </section>

        {/* ── Section 5: Three live projects ── */}
        <section
          id="projects"
          className="max-w-5xl mx-auto px-6 py-20 md:py-28"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Three projects that are live right now
          </h2>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            All three of these are running and you can open any of them. Each
            one says how long the build took and what the decisions were that
            set that number. Nothing here is a mockup or a pilot.
          </p>
          <div className="mt-10 space-y-6">
            {liveProjects.map((project) => (
              <article key={project.name} className="card-fancy p-7">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                  <span className="rounded-full bg-accent-soft px-3 py-1 text-[13px] font-semibold text-accent-deep">
                    {project.timeline}
                  </span>
                </div>
                <p className="mt-4 text-muted leading-relaxed">
                  {project.summary}
                </p>
                <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-muted">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent"
                  >
                    <span className="link-underline">Open the live site</span>
                  </a>
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 font-medium text-accent"
                  >
                    <span className="link-underline">Read the full teardown</span>
                    <span aria-hidden="true" className="arrow-nudge">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Section 5b: Pricing ── */}
        <section id="pricing" className="bg-muted-light">
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  What this actually costs
                </h2>
                <div className="mt-6 space-y-5 text-muted leading-relaxed">
                  <p>
                    A build is priced by the estimated month of work: $5,000 to
                    $10,000 for every month we estimate. Where a project lands
                    inside that range is set by complexity. A build we estimate
                    at two months is priced as two months, and the estimate goes
                    into the written proposal before any work starts — so you
                    are agreeing to a number, not to an hourly meter that runs
                    until someone says stop.
                  </p>
                  <p>
                    After launch, work is billed hourly at $85 to $165, against
                    hours actually worked. There is no standing monthly retainer
                    on a small system, so a month where nothing needed doing
                    costs nothing.
                  </p>
                  <p>
                    What moves the price is scope, not technology. One
                    calculation and one reminder going out is roughly a
                    one-month job. Add payments and an external system you have
                    to push orders into and keep in sync, and you are at the
                    Domino&apos;s Ra&apos;anana scale. Two audiences who need
                    different things out of the same data is a different order
                    of magnitude again.
                  </p>
                </div>
              </div>
              <div className="card-fancy bg-white p-7">
                <h3 className="text-xl font-semibold">
                  The same method, on three real builds
                </h3>
                <p className="mt-3 text-muted leading-relaxed text-[15px]">
                  So the range is concrete, here is how it maps onto the three
                  projects above. These are benchmarks, not a quote for your
                  project.
                </p>
                <dl className="mt-6 divide-y divide-gray-100">
                  {pricingExamples.map((item) => (
                    <div key={item.name} className="py-4">
                      <dt className="font-semibold">{item.name}</dt>
                      <dd className="mt-1 text-[15px] leading-relaxed text-muted">
                        {item.duration} — {item.range}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 text-accent font-medium hover:underline"
            >
              Tell us what you are trying to build
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>

        <section className="bg-muted-light">
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Practical systems we build
                </h2>
                <p className="mt-4 text-muted leading-relaxed max-w-xl">
                  These are the kinds of focused builds that usually create the
                  fastest operational lift for small businesses and early-stage
                  teams.
                </p>
              </div>
              <Link
                href="/services"
                className="text-accent font-medium hover:underline"
              >
                View all services &rarr;
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {businessServices.slice(0, 4).map((service) => (
                <article
                  key={service.slug}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 text-muted text-[15px] leading-relaxed">
                    {service.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5c: Engineering work for product teams ── */}
        <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <p className="eyebrow-badge">For product and engineering teams</p>
          <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">
            Mobile SDKs, ad monetization, and AI inside a product that already
            ships
          </h2>
          <div className="mt-6 space-y-5 text-lg text-muted max-w-2xl leading-relaxed">
            <p>
              The other half of the work is not about replacing phone calls and
              WhatsApp threads. It is engineering inside products that already
              exist and already have users: native Android and iOS, SDKs that
              host apps embed through React Native, Flutter or Unity wrappers,
              Google Ad Manager, AdMob, IMA for video and GMA for mobile
              display, releases through the App Store and Google Play, and AI
              features added to a codebase somebody else wrote.
            </p>
            <p className="text-foreground font-medium">
              The brief here is rarely &quot;build us an app&quot;. It is
              &quot;this integration does not behave and we need someone who has
              shipped one before&quot;.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {technicalServices.map((service) => (
              <article key={service.slug} className="card-fancy p-6 group">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-muted text-[15px] leading-relaxed">
                  {service.summary}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-deep transition-colors hover:text-accent"
                >
                  Explore service
                  <span aria-hidden="true" className="arrow-nudge">
                    &rarr;
                  </span>
                </Link>
              </article>
            ))}
          </div>
          <h3 className="mt-16 text-xl font-semibold tracking-tight">
            What this work actually turns on
          </h3>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {engineeringLessons.map((item) => (
              <div key={item.title} className="border-l-2 border-accent pl-6">
                <h4 className="text-base font-semibold">{item.title}</h4>
                <p className="mt-2 text-muted leading-relaxed text-[15px]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-muted text-[15px] max-w-2xl leading-relaxed">
            Same terms as the rest of the work: a build is priced by the
            estimated month of work, hands-on integration is billed by the hours
            actually worked, and there is no standing retainer to sign. This is
            where our contract engineering sits: we work with IntentIQ, an
            ad-tech company, on mobile SDK development and on identity and
            secure-signals integration across Google Ad Manager, AdMob, IMA and
            GMA. What is inside their SDK stays theirs, so what we publish is
            how this work is built and how it is checked, which is the
            engineering detail above.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 mt-8 text-accent font-medium hover:underline"
          >
            See these three services in detail
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </section>

        {/* ── Section 6: What Makes This Different ── */}
        <section className="bg-foreground text-white">
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              We&apos;re not an agency.
              <br />
              We&apos;re not freelancers.
              <br />
              <span className="text-accent">We&apos;re a system.</span>
            </h2>
            <div className="mt-10 space-y-6 text-lg text-gray-400 max-w-2xl leading-relaxed">
              <p>
                A developer takes your requirements and builds them — even the
                bad ones.
              </p>
              <p>An agency takes your budget and fills the time.</p>
              <p className="text-white font-medium">
                We take your problem and solve it.
              </p>
              <p>
                That means we&apos;ll push back if something you&apos;re asking
                for doesn&apos;t actually help. We&apos;ll suggest cutting a
                feature if it adds complexity without adding value. We&apos;ll
                ask &quot;do you really need that?&quot; before building it.
              </p>
            </div>
            <p className="mt-10 text-xl font-semibold tracking-tight">
              Less software. Better outcomes.
            </p>
          </div>
        </section>

        {/* ── Section 7: Who This Is For ── */}
        <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Who this is for
          </h2>
          <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
            You don&apos;t need to be technical. You need to know your own
            business.
          </p>
          <p className="mt-4 text-muted max-w-xl leading-relaxed text-[15px]">
            And if you are technical, the conversation just starts further in —
            at the release process, the wrapper layer, or whichever ad request
            is not carrying what it should.
          </p>
          <ul className="mt-8 space-y-4 max-w-xl">
            {[
              "Small business owners with a process that's broken or manual",
              "Founders with an idea who don't know where to start technically",
              "Anyone who's been burned by a project that went nowhere",
              "Product teams shipping a mobile SDK, or maintaining one that host apps keep integrating differently",
              "Engineering teams whose ad monetization needs to be verified against real ad requests rather than assumed",
              "Teams adding an AI feature to a product that already has users and cannot be taken offline for it",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] leading-relaxed"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted text-[15px]">
            The only thing we need from you: a clear sense of the problem. We
            handle the rest.
          </p>
        </section>

        {/* ── Section 8: Final CTA ── */}
        <section
          id="contact"
          className="bg-muted-light border-t border-gray-100"
        >
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Got a problem you&apos;ve been thinking about?
            </h2>
            <p className="mt-4 text-lg text-muted max-w-lg mx-auto leading-relaxed">
              You don&apos;t need a spec. You don&apos;t need a brief. Just tell
              us what&apos;s not working — and we&apos;ll tell you if we can
              help.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@wizeapps.agency"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-white text-base font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Start a conversation
                <span aria-hidden="true">&rarr;</span>
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-base font-medium px-8 py-3.5 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
              >
                See what we build
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
