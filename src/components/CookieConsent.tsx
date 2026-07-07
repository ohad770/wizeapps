"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getStoredConsent,
  setStoredConsent,
  type CookieConsentValue,
} from "@/lib/cookieConsent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setVisible(getStoredConsent() === null);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  const choose = (value: CookieConsentValue) => {
    setStoredConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-gray-200 bg-white/95 backdrop-blur-md shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.15)]"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted leading-relaxed">
          We use cookies for basic site functionality and, on some pages, for
          advertising. You can accept all cookies or continue with only the
          essential ones. See our{" "}
          <Link href="/privacy" className="text-accent hover:underline">
            privacy policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("declined")}
            className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-gray-300"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
