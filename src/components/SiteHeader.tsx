"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { navigation } from "@/lib/site";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-white/85 border-b border-gray-200/80 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.25)]"
          : "bg-white/70 border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="WizeApps home"
          className="shrink-0 transition-transform duration-300 hover:scale-[1.03]"
        >
          <Logo />
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-7 text-sm text-muted"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="btn-shimmer hidden sm:inline-flex items-center gap-1.5 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-[0_10px_24px_-12px_rgba(127,119,221,0.9)] hover:shadow-[0_14px_30px_-10px_rgba(127,119,221,0.95)] transition-shadow"
        >
          Start a conversation
          <span aria-hidden="true" className="arrow-nudge">
            &rarr;
          </span>
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
