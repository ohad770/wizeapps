import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { navigation } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-b from-accent-soft/70 via-white to-white"
          />
          <div aria-hidden="true" className="blob blob-accent -top-24 -left-16 h-72 w-72" />
          <div aria-hidden="true" className="blob blob-accent-2 -top-10 right-0 h-64 w-64" />
          <div className="max-w-3xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
            <p
              className="eyebrow-badge"
              style={{ animation: "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
            >
              404
            </p>
            <h1
              className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.08]"
              style={{ animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.08s both" }}
            >
              We couldn&apos;t find that page.
            </h1>
            <p
              className="mt-6 text-lg text-muted leading-relaxed max-w-xl"
              style={{ animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.16s both" }}
            >
              The link may be broken or the page may have moved. Here are some
              useful places to continue instead.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent-deep"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/"
              className="btn-shimmer mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-base font-medium text-white"
            >
              Back to home
              <span aria-hidden="true" className="arrow-nudge">
                &rarr;
              </span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
