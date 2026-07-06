import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact | WizeApps",
  description:
    "Contact WizeApps to discuss a workflow, automation project, MVP, or internal operations tool.",
  alternates: { canonical: "/contact" },
};

const details = [
  "What currently happens step by step.",
  "Where the process slows down or creates mistakes.",
  "Who needs to approve, update, or receive information.",
  "What tools you already use, such as email, spreadsheets, calendars, CRMs, or WhatsApp.",
  "What a successful first version would let you stop doing manually.",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
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
      </main>
      <SiteFooter />
    </div>
  );
}
