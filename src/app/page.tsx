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
                    "Many clients say this alone was worth the engagement. You finally understand what you're actually solving.",
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
              2–4 weeks from first conversation to working product. This
              isn&apos;t a 6-month engagement — it&apos;s a focused sprint that
              ends with something real.
            </p>
          </div>
        </section>

        {/* ── Section 5: Real Examples ── */}
        <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Real situations, real outcomes
          </h2>
          <div className="mt-12 space-y-12">
            {[
              {
                title: "The restaurant that stopped losing reservations",
                body: "They were handling bookings over the phone. Staff overwhelmed during peak hours, no-shows costing them tables. We mapped the real flow: book → confirm → remind → cancel automatically. Built in 2 weeks. No-shows dropped. Staff stopped answering phones during dinner.",
              },
              {
                title: "The clinic that got 3 hours back every day",
                body: "Appointment confirmations happening manually over WhatsApp — one message at a time. We built an automated flow: patient books, confirmation goes out instantly, reminder 24 hours before, cancellation handled without staff. What took 3 hours now takes zero.",
              },
              {
                title: "The founder who launched in 3 weeks instead of 6 months",
                body: "Had an idea for a service marketplace. Didn't know what to build first. We stripped it to the core loop — the one thing that proves the idea works. Built and deployed it. Real users, real feedback, before most startups finish their wireframes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-accent pl-6 max-w-2xl"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-muted leading-relaxed text-[15px]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-12 text-accent font-medium hover:underline"
          >
            That sound like your situation? Let&apos;s talk
            <span aria-hidden="true">&rarr;</span>
          </Link>
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
            actually worked, and there is no standing retainer to sign. We do
            not publish client names for SDK and ad-tech work, so the thing to
            judge us on up front is the engineering detail above rather than a
            logo wall.
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
