import Link from "next/link";
import Logo from "@/components/Logo";
import { navigation } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="relative mt-auto border-t border-gray-100 bg-gradient-to-b from-white to-accent-soft/40">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />
      <div className="max-w-5xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            aria-label="WizeApps home"
            className="inline-block transition-transform duration-300 hover:scale-[1.03]"
          >
            <Logo />
          </Link>
          <p className="mt-4 text-sm text-muted leading-relaxed max-w-sm">
            WizeApps turns manual business processes into focused digital
            systems. Clarity before code, useful software before feature lists.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-underline hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Trust</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>
              <Link
                href="/privacy"
                className="link-underline hover:text-foreground transition-colors"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="link-underline hover:text-foreground transition-colors"
              >
                Terms of use
              </Link>
            </li>
            <li>
              <a
                href="mailto:hello@wizeapps.agency"
                className="link-underline hover:text-foreground transition-colors"
              >
                hello@wizeapps.agency
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-5 text-xs text-muted">
          &copy; {new Date().getFullYear()} WizeApps. Clarity before code.
        </div>
      </div>
    </footer>
  );
}
