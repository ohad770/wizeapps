import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Start a conversation
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </header>

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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-10 bg-foreground text-white text-base font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Tell us what you&apos;re trying to solve
            <span aria-hidden="true">&rarr;</span>
          </a>
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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-12 text-accent font-medium hover:underline"
          >
            That sound like your situation? Let&apos;s talk
            <span aria-hidden="true">&rarr;</span>
          </a>
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
          <ul className="mt-8 space-y-4 max-w-xl">
            {[
              "Small business owners with a process that's broken or manual",
              "Founders with an idea who don't know where to start technically",
              "Anyone who's been burned by a project that went nowhere",
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
                href="mailto:hello@wizeapps.com"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-white text-base font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Start a conversation
                <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-base font-medium px-8 py-3.5 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
              >
                See how the process works
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo />
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} WizeApps. Clarity before code.
          </p>
        </div>
      </footer>
    </div>
  );
}
