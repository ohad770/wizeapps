import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | WizeApps",
  description:
    "Contact WizeApps to discuss a workflow, automation project, MVP, or internal operations tool. See what to include and what happens after you reach out.",
  alternates: { canonical: "/contact" },
};

const details = [
  "What currently happens step by step.",
  "Where the process slows down or creates mistakes.",
  "Who needs to approve, update, or receive information.",
  "What tools you already use, such as email, spreadsheets, calendars, CRMs, or WhatsApp.",
  "What a successful first version would let you stop doing manually.",
];

const nextSteps = [
  {
    title: "We read and reply",
    text: "We usually respond within one to two business days, in plain language — no automated ticket, no sales sequence.",
  },
  {
    title: "A short scoping conversation",
    text: "If it looks like a fit, we map the actual workflow together and identify the smallest useful first version.",
  },
  {
    title: "A clear proposal",
    text: "You get a written scope with what is included, what is not, and a fixed first phase — before any commitment.",
  },
];

const faqs = [
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
    question: "What does a first engagement usually look like?",
    answer:
      "A small, fixed-scope first phase that produces something real, so you can judge the fit before committing to more. This caps your risk and gives both sides a clear definition of done.",
  },
  {
    question: "Do you work with non-technical business owners?",
    answer:
      "Yes — that is the core of who we work with. You do not need to speak in technical terms. You need to understand your own business; we handle the software side.",
  },
];

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WizeApps",
    url: siteUrl,
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@wizeapps.agency",
      contactType: "sales and support",
      availableLanguage: ["English", "Hebrew"],
    },
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
          description="You do not need a formal brief. A few clear examples of the current workflow are enough to start a useful conversation."
        />
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
          <Reveal className="card-fancy group relative overflow-hidden p-8">
            <div
              aria-hidden="true"
              className="blob blob-accent -top-16 -right-12 h-44 w-44 opacity-40"
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
            <h2 className="mt-5 text-xl font-semibold">Email</h2>
            <p className="mt-3 text-muted leading-relaxed">
              Send a short description of the process, who uses it, and what
              would change if it worked better.
            </p>
            <a
              href="mailto:hello@wizeapps.agency"
              className="mt-5 inline-flex items-center gap-1.5 text-accent font-medium"
            >
              <span className="link-underline">hello@wizeapps.agency</span>
              <span aria-hidden="true" className="arrow-nudge">
                &rarr;
              </span>
            </a>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-xl font-semibold">Helpful details to include</h2>
            <ul className="mt-6 space-y-3">
              {details.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 rounded-xl border border-gray-100 bg-muted-light/50 p-4 transition-colors duration-300 hover:border-accent/40 hover:bg-accent-soft/50"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent-deep">
                    {i + 1}
                  </span>
                  <span className="text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section className="bg-muted-light">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <Reveal as="h2" className="text-2xl font-semibold tracking-tight">
              What happens after you reach out
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {nextSteps.map((step, i) => (
                <Reveal
                  as="article"
                  key={step.title}
                  delay={i * 110}
                  className="rounded-2xl border border-gray-100 bg-white p-6"
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
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <Reveal as="h2" className="text-2xl font-semibold tracking-tight">
            Common questions before reaching out
          </Reveal>
          <div className="mt-8 grid gap-4">
            {faqs.map((item, i) => (
              <Reveal
                key={item.question}
                delay={i * 80}
                className="rounded-xl border border-gray-100 bg-muted-light/60 p-5"
              >
                <h3 className="font-semibold text-foreground">
                  {item.question}
                </h3>
                <p className="mt-2 text-muted leading-relaxed">{item.answer}</p>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
