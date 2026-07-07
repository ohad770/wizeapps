export const COOKIE_CONSENT_KEY = "wizeapps-cookie-consent";
export const COOKIE_CONSENT_EVENT = "wizeapps-cookie-consent-changed";

export type CookieConsentValue = "accepted" | "declined";

export function getStoredConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === "accepted" || value === "declined" ? value : null;
}

export function setStoredConsent(value: CookieConsentValue) {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(
    new CustomEvent<CookieConsentValue>(COOKIE_CONSENT_EVENT, { detail: value }),
  );
}
