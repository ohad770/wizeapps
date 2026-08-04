import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { author, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | WizeApps",
  description:
    "Contact WizeApps — the product studio of Softphone Ltd., 117 Weizman Street, Kfar-Saba, Israel. Phone +972-9-7677094, hello@wizeapps.agency. English and Hebrew.",
  alternates: { canonical: "/contact" },
};

const companyName = "Softphone Ltd.";
const streetAddress = "117 Weizman Street";
const locality = "Kfar-Saba";
const phoneDisplay = "+972-9-7677094";
const phoneHref = "tel:+97297677094";
const siteEmail = "hello@wizeapps.agency";
const companyEmail = "office@softphone.co.il";

type CompanyDetail = {
  label: string;
  value: string;
  href?: string;
};

const companyDetails: CompanyDetail[] = [
  { label: "Company", value: companyName },
  {
    label: "Office",
    value: `${streetAddress}, ${locality}, Israel`,
  },
  { label: "Phone", value: phoneDisplay, href: phoneHref },
  { label: "Email (projects)", value: siteEmail, href: `mailto:${siteEmail}` },
  { label: "Email (company)", value: companyEmail, href: `mailto:${companyEmail}` },
  { label: "Who answers", value: `${author.name}, founder` },
  { label: "Working languages", value: "English and Hebrew" },
];

const liveWork = [
  {
    name: "Mincha Time",
    url: "https://mincha-time.com",
    href: "/case-studies/mincha-time",
    text: "Prayer-time reminders in six languages. First version built in about one month.",
  },
  {
    name: "Domino Ra'anana",
    url: "https://domino-rn.co.il",
    href: "/case-studies/domino-ranana",
    text: "Ordering site for the Ra'anana branch, in daily use for more than five years. Built in about two months.",
  },
  {
    name: "Djob",
    url: "https://djob.agency",
    href: "/case-studies/djob-agency",
    text: "Two-sided recruiting workspace with its own matching layer. Built in about six months.",
  },
];

const details = [
  "What currently happens step by step.",
  "Where the process slows down or creates mistakes.",
  "Who needs to approve, update, or receive information.",
  "What tools you already use, such as email, spreadsheets, calendars, CRMs, or WhatsApp.",
  "Roughly how often this happens — per day, per week, or per busy season.",
  "Anything that already exists: a spreadsheet, a paper form, a WhatsApp thread. Messy is fine and usually more useful than a tidy summary.",
  "What a successful first version would let you stop doing manually.",
];

const nextSteps = [
  {
    title: "We read and reply",
    text: "We usually respond within one to two business days, in plain language — no automated ticket, no sales sequence. The reply comes from Ohad, not from a form handler.",
  },
  {
    title: "A short scoping conversation",
    text: "If it looks like a fit, we map the actual workflow together and identify the smallest useful first version. This happens by call or email, in English or Hebrew, whichever suits you.",
  },
  {
    title: "A clear proposal",
    text: "You get a written scope with what is included, what is not, and a fixed first phase — before any commitment. If we think the job is wrong for us, we say so instead of quoting for it.",
  },
];

const faqs = [
  {
    question: "Who is behind WizeApps, and where are you based?",
    answer:
      `WizeApps is the product studio of ${companyName}, at ${streetAddress}, ${locality}, Israel. ${author.name} is the founder and the person who reads incoming messages. The office line is ${phoneDisplay} and the company email is ${companyEmail}.`,
  },
  {
    question: "Can I call instead of writing?",
    answer:
      `Yes — ${phoneDisplay} reaches the office. Email usually gets you a more complete answer, because you can attach the spreadsheet, screenshot, or form that shows the problem. Either way you are talking to the person who would do the work.`,
  },
  {
    question: "Do I need a technical spec before contacting you?",
    answer:
      "No. A few plain-language examples of the current workflow are enough. If you can describe what is painful today and what a better outcome looks like, that is a strong starting point.",
  },
  {
    question: "How quickly will I hear back?",
    answer:
      "Typically within one to two business days. A real person reads every message — there is no automated qualification funnel.",
  },
  {
    question: "Which languages can we work in?",
    answer:
      "English and Hebrew, in writing and on calls. This site has a Hebrew version, and project documents can be written in either language.",
  },
  {
    question: "What does a first engagement usually look like?",
    answer:
      "A small, fixed-scope first phase that produces something real, so you can judge the fit before committing to more. This caps your risk and gives both sides a clear definition of done.",
  },
  {
    question: "Do you work with non-technical business owners?",
    answer:
      "Yes — that is the core of who we work with. You do not need to speak in technical terms. You need to understand your own business; we handle the software side.",
  },
  {
    question: "Can I see something you have actually shipped before I get in touch?",
    answer:
      "Yes. Mincha Time, the Domino Ra'anana ordering site, and Djob are all live and open to anyone. Each one has a case study on this site describing what was built, what was hard, and how long it took.",
  },
];

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WizeApps",
    legalName: companyName,
    url: siteUrl,
    email: `mailto:${siteEmail}`,
    telephone: phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: locality,
      addressCountry: "IL",
    },
    founder: {
      "@type": "Person",
      name: author.name,
      jobTitle: "Founder",
      url: `${siteUrl}/about`,
      sameAs: [author.linkedin],
    },
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    availableLanguage: ["English", "Hebrew"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: siteEmail,
        contactType: "sales and support",
        availableLanguage: ["English", "Hebrew"],
      },
      {
        "@type": "ContactPoint",
        email: companyEmail,
        telephone: phoneDisplay,
        contactType: "office",
        availableLanguage: ["English", "Hebrew"],
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main className="flex-1">
        <PageIntro
          eyebrow="Contact"
          title="Tell us what is not working yet."
          description={`You do not need a formal brief. A few clear examples of the current workflow are enough to start a useful conversation. We are in ${locality}, Israel, and we work in English and Hebrew.`}
        />

        <section className="bg-muted-light">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid gap-8 md:grid-cols-[1fr_1.05fr] md:items-start">
            <Reveal className="card-fancy group relative overflow-hidden p-8">
              <div
                aria-hidden="true"
                className="blob blob-accent -top-16 -right-12 h-44 w-44 opacity-40"
              />
              <p className="eyebrow-badge">Business details</p>
              <h2 className="mt-5 text-xl font-semibold">
                WizeApps is run by <span className="text-gradient">{companyName}</span>
              </h2>
              <dl className="mt-6 divide-y divide-gray-100">
                {companyDetails.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-1 py-3 sm:grid-cols-[9.5rem_1fr] sm:gap-4"
                  >
                    <dt className="text-[13px] font-semibold uppercase tracking-wide text-muted">
                      {item.label}
                    </dt>
                    <dd className="leading-relaxed">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-accent font-medium link-underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 font-medium text-accent"
              >
                <span className="link-underline">
                  {author.name} on LinkedIn
                </span>
                <span aria-hidden="true" className="arrow-nudge">
                  &rarr;
                </span>
              </a>
            </Reveal>

            <Reveal delay={120} className="space-y-5">
              <h2 className="text-xl font-semibold">Who you are actually contacting</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  WizeApps is the product-studio side of {companyName}, a company
                  based at {streetAddress} in {locality}, Israel. Softphone is
                  the registered company; WizeApps is the name the software work
                  runs under. Same office, same phone number, same person picking
                  up.
                </p>
                <p>
                  That person is {author.name}. He reads what arrives at{" "}
                  <a
                    href={`mailto:${siteEmail}`}
                    className="text-accent hover:underline"
                  >
                    {siteEmail}
                  </a>{" "}
                  and he is who you would be on a call with — there is no account
                  manager in between and no ticket queue. If you would rather
                  reach the company directly, use{" "}
                  <a href={phoneHref} className="text-accent hover:underline">
                    {phoneDisplay}
                  </a>{" "}
                  or{" "}
                  <a
                    href={`mailto:${companyEmail}`}
                    className="text-accent hover:underline"
                  >
                    {companyEmail}
                  </a>
                  .
                </p>
                <p>
                  We work in English and Hebrew, in writing and on calls, and
                  this site is published in both. We are on Israel time, so if
                  you are in a different time zone, say so in your first message
                  and suggest a couple of windows that suit you — scheduling is
                  easier than guessing.
                </p>
                <p>
                  If you want to check who you are dealing with before you write,
                  everything above is checkable: the street address is a real
                  office, the LinkedIn profile is public, and the three sites
                  below are live right now.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <Reveal as="h2" className="text-2xl font-semibold tracking-tight">
            Work you can open before you write
          </Reveal>
          <Reveal delay={80} className="mt-4 max-w-2xl text-muted leading-relaxed">
            <p>
              These are shipped builds, not mockups. Each has a case study on
              this site covering the decisions behind it, the parts that were
              awkward, and what we would do differently.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {liveWork.map((item, i) => (
              <Reveal
                as="article"
                key={item.name}
                delay={i * 110}
                className="card-fancy p-7 group"
              >
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="mt-3 text-muted text-[15px] leading-relaxed">
                  {item.text}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent"
                  >
                    <span className="link-underline">Visit the live site</span>
                  </a>
                  <Link
                    href={item.href}
                    className="font-medium text-accent inline-flex items-center gap-1.5"
                  >
                    <span className="link-underline">Case study</span>
                    <span aria-hidden="true" className="arrow-nudge">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-muted-light">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
            <Reveal className="card-fancy group relative overflow-hidden p-8">
              <div
                aria-hidden="true"
                className="blob blob-accent-2 -top-16 -right-12 h-44 w-44 opacity-40"
              />
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent-deep transition-transform duration-300 group-hover:scale-110">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
              </span>
              <h2 className="mt-5 text-xl font-semibold">Start here</h2>
              <p className="mt-3 text-muted leading-relaxed">
                Send a short description of the process, who uses it, and what
                would change if it worked better. Two paragraphs is plenty for a
                first message.
              </p>
              <a
                href={`mailto:${siteEmail}`}
                className="mt-5 inline-flex items-center gap-1.5 text-accent font-medium"
              >
                <span className="link-underline">{siteEmail}</span>
                <span aria-hidden="true" className="arrow-nudge">
                  &rarr;
                </span>
              </a>
              <p className="mt-4 text-sm text-muted">
                Prefer the phone?{" "}
                <a href={phoneHref} className="text-accent hover:underline">
                  {phoneDisplay}
                </a>
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="text-xl font-semibold">Helpful details to include</h2>
              <p className="mt-3 text-muted leading-relaxed">
                None of this is required to get a reply. It just means the first
                answer can be about your actual workflow instead of a round of
                clarifying questions.
              </p>
              <ul className="mt-6 space-y-3">
                {details.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5 rounded-xl border border-gray-100 bg-white/70 p-4 transition-colors duration-300 hover:border-accent/40 hover:bg-accent-soft/50"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent-deep">
                      {i + 1}
                    </span>
                    <span className="text-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <Reveal as="h2" className="text-2xl font-semibold tracking-tight">
            What happens after you reach out
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {nextSteps.map((step, i) => (
              <Reveal
                as="article"
                key={step.title}
                delay={i * 110}
                className="rounded-2xl border border-gray-100 bg-muted-light/50 p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-sm font-semibold text-accent-deep">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted text-[15px] leading-relaxed">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-muted-light">
          <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
            <Reveal as="h2" className="text-2xl font-semibold tracking-tight">
              Common questions before reaching out
            </Reveal>
            <div className="mt-8 grid gap-4">
              {faqs.map((item, i) => (
                <Reveal
                  key={item.question}
                  delay={i * 80}
                  className="rounded-xl border border-gray-100 bg-white p-5"
                >
                  <h3 className="font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed">{item.answer}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120} className="mt-8 text-muted leading-relaxed">
              <p>
                Still unsure whether your situation is a fit? Read{" "}
                <Link href="/about" className="text-accent hover:underline">
                  how we work
                </Link>{" "}
                or the{" "}
                <Link href="/case-studies" className="text-accent hover:underline">
                  case studies
                </Link>
                , then send the shortest version of your question to{" "}
                <a
                  href={`mailto:${siteEmail}`}
                  className="text-accent hover:underline"
                >
                  {siteEmail}
                </a>
                . A one-line email is a perfectly good place to start.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
