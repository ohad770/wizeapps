import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { author, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About WizeApps",
  description:
    "Who runs WizeApps, what we have shipped, how a build actually runs, and the company details behind the site: Softphone Ltd., Kfar-Saba, Israel.",
  alternates: { canonical: `${siteUrl}/about` },
};

const company = {
  legalName: "Softphone Ltd.",
  street: "117 Weizman Street",
  city: "Kfar-Saba",
  country: "Israel",
  phone: "+972-9-7677094",
  officeEmail: "office@softphone.co.il",
  siteEmail: "hello@wizeapps.agency",
};

const shipped = [
  {
    name: "Mincha Time",
    industry: "Consumer web app",
    timeline: "First version in about one month",
    href: "https://mincha-time.com",
    hrefLabel: "mincha-time.com",
    caseStudy: "/case-studies/mincha-time",
    paragraphs: [
      "Mincha Time reminds people when the afternoon prayer window is open where they are. The window moves with sunset, so it is different every day and different in every city, and a reminder that arrives at the wrong minute is worse than no reminder at all. The first version was built in about one month.",
      "Most of the work is behind the screens. A function runs once a minute and checks whether a Firestore document exists for the current time — the documents are keyed hour_minute, so 13_47 is a document, not a queued job. There is no task queue and no per-user cron entry. Users are grouped by rounded latitude and longitude, so the Hebcal zmanim API is called once per location per day instead of once per person, and each run writes tomorrow's bucket for that location before it finishes. The system walks itself forward one day at a time.",
      "The rest is the unglamorous detail that decides whether people keep the app installed: notification copy in six languages, two independent opt-outs that are both checked before every send (a permanent disable and a same-day snooze), and a cleanup job that removes users who have been inactive for 30 days.",
    ],
    builtWith:
      "Firebase Cloud Functions, Firestore, Firebase Cloud Messaging, Hebcal zmanim API",
  },
  {
    name: "Domino Ra'anana — online ordering",
    industry: "Food and delivery",
    timeline: "Built in about two months",
    href: "https://domino-rn.co.il",
    hrefLabel: "domino-rn.co.il",
    caseStudy: "/case-studies/domino-ranana",
    paragraphs: [
      "The pizza ordering site for the Ra'anana branch, built for its owner, Eran Atra, in about two months. It has been in daily use for more than five years. That is the part of this project we point at most often, because a site that is still carrying real orders years later is a different claim from a site that launched.",
      "From the outside it is a menu. The system is the checkout. Delivery-zone rules carry a delivery cost and a minimum order amount, so a zone decides whether an order can be placed at all, not just what the page displays. Cart rules keep a deal and its selectable options intact instead of flattening them into loose line items, because a deal is not a discounted product. Card payment goes through Cardcom, which means the order exists before the payment succeeds and has to be reconciled after it does. A completed order is handed to the branch's Aviv POS, so nobody retypes it into the register.",
      "Staff run the menu, the deals, and the delivery zones themselves through admin screens. That was part of the build rather than a later addition — a menu that only a developer can change is a menu that goes stale.",
    ],
    builtWith: "Vite, React, Base44, Cardcom, Aviv POS integration",
  },
  {
    name: "Djob",
    industry: "Recruitment platform",
    timeline: "Built in about six months",
    href: "https://djob.agency",
    hrefLabel: "djob.agency",
    caseStudy: "/case-studies/djob-agency",
    paragraphs: [
      "Djob is a two-sided recruiting workspace: candidates and open roles on one side, the people working through them on the other. It took about six months. That is longer than the other two builds for a straightforward reason — two user flows plus the admin layer that connects them is roughly three products, not one. Its public plans start at $29 per month.",
      "The matching layer is the part worth explaining. Jobs and candidates are broken into structured statements and each statement is embedded with OpenAI's text-embedding-3-small, rather than pushing a whole CV through as one block of text. Cosine similarity then gives a ranking — but a ranking is not a decision, so the score is gated by pass/fail business rules. A candidate can read as close to a role and still fail a hard requirement, and the system says which one.",
      "Rankings are read from precomputed snapshot tables in PostgreSQL that are rebuilt daily, not recomputed when someone opens a page. A recruiter scanning a shortlist will not wait for every pair to be scored live, and if the screen is slow they go back to the spreadsheet they were using before.",
    ],
    builtWith: "PostgreSQL, OpenAI text-embedding-3-small, Base44",
  },
];

const workflow = [
  {
    title: "Map the process that exists today",
    text: "We write down what actually happens now: who touches the work, in what order, where it waits, and what people do by hand to keep it moving. This is done with real examples from last week, not a hypothetical flow.",
    example:
      "On the Domino build, following a real order end to end is what moved checkout to the centre of the project. Delivery zones, deals, cash versus card and the handoff to the kitchen all live in that one step, so it could not be the last screen we designed.",
  },
  {
    title: "Find the decision points",
    text: "Next we separate the steps where a person is exercising judgment from the steps where the rule is stable enough to encode. Judgment stays with people. The stable rules are what software can carry without anyone checking on it.",
    example:
      "Djob made this concrete. Matching looks like a pure ranking problem until you notice that recruiters also make pass/fail calls about hard requirements, so the system computes the similarity score and the gates separately, and shows which gate a candidate failed.",
  },
  {
    title: "Scope the smallest useful first version",
    text: "Then we cut to the version that is small enough to finish and still useful on its own. The test is whether it delivers one real outcome end to end, not whether it covers every case someone can imagine.",
    example:
      "Mincha Time did one job in version one: the correct window for the user's location, and a reminder before it closes. It did not try to become a calendar app. That is why it was about a month rather than a project without an end date.",
  },
  {
    title: "Build the load-bearing part first",
    text: "We build the mechanism everything else depends on early, while there is still time to be wrong about it. Screens are easier to change late than the thing underneath them.",
    example:
      "In each of the three builds that part was different: the minute-resolution scheduler in Mincha Time, the checkout and payment state in the Domino site, the embedding and snapshot pipeline in Djob. In all three, that is where the first weeks went.",
  },
  {
    title: "Then keep it running",
    text: "Software in daily use meets things that were not in the plan: a payment provider changes, an API response shifts, volume grows, staff want a field they did not ask for. We stay close enough to the code to handle that, and we say plainly which parts we already know are the weak ones.",
    example:
      "One example we do not hide: Mincha Time reads the UTC offset out of the Hebcal response string to build tomorrow's bucket. It works in production, and it is the first thing we would replace if that response format ever changed.",
  },
];

const principles = [
  {
    title: "Clarity before code",
    text: "We define the problem and the decision points before designing screens or choosing tools.",
  },
  {
    title: "Useful over impressive",
    text: "A quiet tool that saves staff two hours every day is more valuable than a polished feature nobody uses.",
  },
  {
    title: "Launch small, learn fast",
    text: "The first version should create evidence quickly so the next version is based on real use.",
  },
];

export default function AboutPage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: "WizeApps",
    legalName: company.legalName,
    url: siteUrl,
    logo: `${siteUrl}/logo-180.png`,
    email: `mailto:${company.siteEmail}`,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.street,
      addressLocality: company.city,
      addressCountry: "IL",
    },
    founder: { "@id": `${siteUrl}/about#founder` },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales and support",
      email: company.siteEmail,
      telephone: company.phone,
      availableLanguage: ["English", "Hebrew"],
    },
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/about#founder`,
    name: author.name,
    jobTitle: "Founder",
    worksFor: { "@id": `${siteUrl}#organization` },
    url: `${siteUrl}/about`,
    email: `mailto:${company.siteEmail}`,
    sameAs: [author.linkedin],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main className="flex-1">
        <PageIntro
          eyebrow="About"
          title="We build small systems around real business problems."
          description="WizeApps is run by Softphone Ltd. in Kfar-Saba, Israel. We work with business owners and founders who know what is broken in their day-to-day workflow, but do not want a bloated software project just to fix it."
        />

        <section className="relative overflow-hidden bg-muted-light">
          <div
            aria-hidden="true"
            className="blob blob-accent-2 -bottom-24 -right-16 h-72 w-72 opacity-30"
          />
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid gap-10 md:grid-cols-[1fr_1.2fr] relative">
            <Reveal as="h2" className="text-3xl font-semibold tracking-tight">
              The work starts <span className="text-gradient">before development.</span>
            </Reveal>
            <Reveal delay={120} className="space-y-5 text-muted leading-relaxed">
              <p>
                Many software projects fail because the team starts with a list
                of requested features instead of the actual process. We begin by
                mapping what happens today: who is involved, what gets delayed,
                where customers drop off, and which steps need human judgment.
              </p>
              <p>
                Only after that map is clear do we decide what should be built.
                Sometimes the right product is a simple intake flow. Sometimes
                it is a booking system, a private dashboard, or an MVP that
                tests one business idea. The point is to make software serve the
                workflow, not the other way around.
              </p>
              <p>
                We also build and then keep the result running, which changes
                how we scope. When you know you will still be maintaining
                something years from now, you stop adding parts nobody asked
                for. Everything below — the projects, the sequence we follow,
                the company details — is here so you can check that claim rather
                than take it on trust.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <Reveal as="h2" className="text-3xl font-semibold tracking-tight">
            What we have <span className="text-gradient">actually built</span>
          </Reveal>
          <Reveal
            delay={100}
            className="mt-5 max-w-3xl space-y-4 text-muted leading-relaxed"
          >
            <p>
              Three products are live and you can open all three. The build
              durations below are the real ones, and they are what we use when
              somebody asks how long a project like theirs takes — they are the
              only honest numbers we have for that question, and none of them
              came from a proposal template.
            </p>
            <p>
              Each one links to a longer teardown on this site, including the
              parts that were awkward and what we would do differently.
            </p>
          </Reveal>
          <div className="mt-10 space-y-8">
            {shipped.map((project, i) => (
              <Reveal
                as="article"
                key={project.name}
                delay={(i % 2) * 90}
                className="card-fancy p-7 md:p-9 group"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <p className="eyebrow-badge">{project.industry}</p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-green-600"
                    />
                    Live project
                  </span>
                  <span className="text-xs font-medium text-muted">
                    {project.timeline}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent-deep">
                  {project.name}
                </h3>
                <div className="mt-4 max-w-3xl space-y-4 text-muted leading-relaxed">
                  {project.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <p className="mt-5 text-[15px] text-muted">
                  <span className="font-semibold text-foreground">
                    Built with:
                  </span>{" "}
                  {project.builtWith}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <Link
                    href={project.caseStudy}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                  >
                    Read the teardown
                    <span aria-hidden="true" className="arrow-nudge">
                      &rarr;
                    </span>
                  </Link>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground"
                  >
                    <span className="link-underline">{project.hrefLabel}</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-muted-light">
          <div
            aria-hidden="true"
            className="blob blob-accent -top-24 -left-16 h-64 w-64 opacity-30"
          />
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 relative">
            <Reveal as="h2" className="text-3xl font-semibold tracking-tight">
              How a build actually runs
            </Reveal>
            <Reveal
              delay={100}
              className="mt-5 max-w-3xl text-muted leading-relaxed"
            >
              <p>
                The same five steps, in the same order, on every project. Each
                one below is illustrated with what it looked like on one of the
                three builds above, so you can see the step rather than just
                read the label.
              </p>
            </Reveal>
            <div className="mt-10 space-y-5">
              {workflow.map((step, i) => (
                <Reveal
                  as="article"
                  key={step.title}
                  delay={i * 80}
                  className="rounded-2xl border border-gray-100 bg-white p-6 md:p-7"
                >
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft text-sm font-semibold text-accent-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="mt-4 max-w-3xl text-muted leading-relaxed">
                    {step.text}
                  </p>
                  <p className="mt-4 max-w-3xl rounded-xl bg-muted-light/70 p-4 text-[15px] text-muted leading-relaxed">
                    <span className="font-semibold text-accent-deep">
                      In practice:
                    </span>{" "}
                    {step.example}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <Reveal as="h2" className="text-3xl font-semibold tracking-tight">
            Who is behind WizeApps
          </Reveal>
          <Reveal
            delay={100}
            className="mt-8 rounded-2xl border border-gray-100 bg-muted-light/50 p-7 md:p-9"
          >
            <h3 className="text-xl font-semibold">
              {author.name} <span className="text-muted font-normal">— Founder</span>
            </h3>
            <div className="mt-4 space-y-4 text-muted leading-relaxed max-w-3xl">
              <p>{author.bio}</p>
              <p>
                Ohad runs the scoping conversations and the builds, which is why
                the three projects above are described down to the level of
                Firestore document keys and payment reconciliation rather than
                in marketing language. If you email about a project, you are
                writing to the person who would work on it.
              </p>
              <p>
                Every guide published in the{" "}
                <Link href="/resources" className="text-accent hover:underline">
                  resources section
                </Link>{" "}
                is written and reviewed by Ohad, based on the patterns that come
                up repeatedly in real client conversations — booking systems
                that get routed around, MVPs that grew too large before launch,
                and manual processes that quietly outgrew their spreadsheets.
                Questions and corrections are welcome at{" "}
                <a
                  href={`mailto:${company.siteEmail}`}
                  className="text-accent hover:underline"
                >
                  {company.siteEmail}
                </a>
                .
              </p>
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
              >
                Connect on LinkedIn
                <span aria-hidden="true" className="arrow-nudge">
                  &rarr;
                </span>
              </a>
            </div>
          </Reveal>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16 md:pb-24">
          <Reveal as="h2" className="text-3xl font-semibold tracking-tight">
            Principles that guide every build
          </Reveal>
          <Reveal
            delay={90}
            className="mt-5 max-w-3xl text-muted leading-relaxed"
          >
            <p>
              These three sit underneath the five steps above. They are short
              because they are decision rules, not a manifesto: when a project
              has to choose, this is how it chooses.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {principles.map((item, i) => (
              <Reveal
                as="article"
                key={item.title}
                delay={i * 110}
                className="card-fancy p-7 group"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-deep font-semibold transition-transform duration-300 group-hover:scale-110">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-semibold text-lg">{item.title}</h3>
                <p className="mt-3 text-muted text-[15px] leading-relaxed">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-muted-light">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <Reveal as="h2" className="text-3xl font-semibold tracking-tight">
              Company details
            </Reveal>
            <Reveal
              delay={90}
              className="mt-5 max-w-3xl text-muted leading-relaxed"
            >
              <p>
                WizeApps is operated by {company.legalName}. If you want to know
                who is behind the site before you write to anyone, this is it —
                a registered company with an address and a phone number, not a
                contact form.
              </p>
            </Reveal>
            <Reveal
              delay={150}
              className="mt-8 grid gap-6 rounded-2xl border border-gray-100 bg-white p-7 md:grid-cols-2 md:p-9"
            >
              <dl className="space-y-4 text-[15px]">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-accent-deep">
                    Company
                  </dt>
                  <dd className="mt-1 text-muted">{company.legalName}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-accent-deep">
                    Address
                  </dt>
                  <dd className="mt-1 text-muted">
                    {company.street}
                    <br />
                    {company.city}, {company.country}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-accent-deep">
                    Phone
                  </dt>
                  <dd className="mt-1 text-muted">
                    <a
                      href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                      className="link-underline hover:text-foreground transition-colors"
                    >
                      {company.phone}
                    </a>
                  </dd>
                </div>
              </dl>
              <dl className="space-y-4 text-[15px]">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-accent-deep">
                    Project email
                  </dt>
                  <dd className="mt-1 text-muted">
                    <a
                      href={`mailto:${company.siteEmail}`}
                      className="link-underline hover:text-foreground transition-colors"
                    >
                      {company.siteEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-accent-deep">
                    Company email
                  </dt>
                  <dd className="mt-1 text-muted">
                    <a
                      href={`mailto:${company.officeEmail}`}
                      className="link-underline hover:text-foreground transition-colors"
                    >
                      {company.officeEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-accent-deep">
                    Languages
                  </dt>
                  <dd className="mt-1 text-muted">
                    English and Hebrew. There is a Hebrew version of this site
                    at{" "}
                    <Link
                      href="/he"
                      className="text-accent hover:underline"
                    >
                      wizeapps.agency/he
                    </Link>
                    .
                  </dd>
                </div>
              </dl>
            </Reveal>
            <Reveal
              delay={200}
              className="mt-6 max-w-3xl text-muted leading-relaxed"
            >
              <p>
                Use {company.siteEmail} for anything about a build — that
                address goes straight to the work. {company.officeEmail} reaches
                the company directly. Either way a person reads it and replies;
                if you would rather start with the workflow questions we ask
                first, they are listed on the{" "}
                <Link href="/contact" className="text-accent hover:underline">
                  contact page
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
