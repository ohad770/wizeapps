"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import {
  COOKIE_CONSENT_EVENT,
  getStoredConsent,
  type CookieConsentValue,
} from "@/lib/cookieConsent";

/**
 * Loads the Google AdSense script. Rendered ONLY on pages that contain
 * substantial publisher content (resource articles), never globally — so ads
 * are not served on navigation, contact, legal, or error screens. This keeps
 * the site within the AdSense policy that prohibits ads on screens without
 * meaningful publisher content.
 *
 * Also gated behind cookie consent: the script only loads once the visitor
 * accepts cookies, so ad personalization cookies are never set silently.
 */
export default function AdSense() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setConsented(getStoredConsent() === "accepted");
    }, 0);

    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<CookieConsentValue>).detail;
      setConsented(detail === "accepted");
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, onChange);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener(COOKIE_CONSENT_EVENT, onChange);
    };
  }, []);

  if (!consented) return null;

  return (
    <Script
      id="adsbygoogle-init"
      async
      strategy="afterInteractive"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5204280332214793"
      crossOrigin="anonymous"
    />
  );
}
