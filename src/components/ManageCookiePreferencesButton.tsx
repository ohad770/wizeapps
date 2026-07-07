"use client";

import { COOKIE_CONSENT_KEY } from "@/lib/cookieConsent";

export default function ManageCookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => {
        window.localStorage.removeItem(COOKIE_CONSENT_KEY);
        window.location.reload();
      }}
      className="text-accent hover:underline"
    >
      Update cookie preferences
    </button>
  );
}
