import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About WizeApps",
  description:
    "Learn how WizeApps helps businesses turn manual processes into focused, working digital systems.",
};

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
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageIntro
          eyebrow="About"
          title="We build small systems around real business problems."
          description="WizeApps works with business owners and founders who know what is broken in their day-to-day workflow, but do not want a bloated software project just to fix it."
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
            </Reveal>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <Reveal as="h2" className="text-3xl font-semibold tracking-tight">
            Principles that guide every build
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
      </main>
      <SiteFooter />
    </div>
  );
}
