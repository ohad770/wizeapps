import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact | WizeApps",
  description:
    "Contact WizeApps to discuss a workflow, automation project, MVP, or internal operations tool.",
};

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
        <section className="max-w-5xl mx-auto px-6 pb-20 md:pb-28 grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div className="rounded-xl border border-gray-100 p-6">
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="mt-3 text-muted leading-relaxed">
              Send a short description of the process, who uses it, and what
              would change if it worked better.
            </p>
            <a
              href="mailto:hello@wizeapps.agency"
              className="mt-5 inline-flex text-accent font-medium hover:underline"
            >
              hello@wizeapps.agency
            </a>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Helpful details to include</h2>
            <ul className="mt-5 space-y-4 text-muted leading-relaxed">
              {[
                "What currently happens step by step.",
                "Where the process slows down or creates mistakes.",
                "Who needs to approve, update, or receive information.",
                "What tools you already use, such as email, spreadsheets, calendars, CRMs, or WhatsApp.",
                "What a successful first version would let you stop doing manually.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
