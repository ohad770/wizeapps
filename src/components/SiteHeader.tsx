import Link from "next/link";
import Logo from "@/components/Logo";
import { navigation } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" aria-label="WizeApps home" className="shrink-0">
          <Logo />
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-6 text-sm text-muted"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center gap-1 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Start a conversation
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="lg:hidden border-t border-gray-100 overflow-x-auto"
      >
        <div className="max-w-5xl mx-auto px-6 py-3 flex gap-5 text-sm text-muted whitespace-nowrap">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
