"use client";

import { useState } from "react";

export type Tier = {
  id: string;
  amount: number;
  name: string;
  tagline: string;
  perks: string[];
  highlight?: boolean;
  badge?: string;
};

type Addon = {
  id: string;
  amount: number;
  name: string;
  description: string;
};

const ADDON: Addon = {
  id: "signed-bookmark",
  amount: 35,
  name: "סימנייה חתומה בעבודת יד",
  description:
    "סימנייה ייחודית בעבודת יד, חתומה אישית. נשלחת יחד עם הספר. מהדורה מוגבלת.",
};

type Step =
  | { kind: "closed" }
  | { kind: "form"; tier: Tier }
  | { kind: "submitting"; tier: Tier }
  | { kind: "upsell"; tier: Tier; transactionId: string; name: string }
  | { kind: "upsell-submitting"; tier: Tier; transactionId: string; name: string }
  | { kind: "done"; tier: Tier; name: string; addedAddon: boolean };

export default function DonationFlow({ tiers }: { tiers: Tier[] }) {
  const [step, setStep] = useState<Step>({ kind: "closed" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  function openTier(tier: Tier) {
    setError(null);
    setStep({ kind: "form", tier });
  }

  function close() {
    setStep({ kind: "closed" });
    setName("");
    setEmail("");
    setError(null);
  }

  async function submitDonation(e: React.FormEvent) {
    e.preventDefault();
    if (step.kind !== "form") return;
    if (!name.trim() || !email.trim()) {
      setError("חסר שם או אימייל");
      return;
    }
    setError(null);
    setStep({ kind: "submitting", tier: step.tier });

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tierId: step.tier.id,
          amount: step.tier.amount,
          name: name.trim(),
          email: email.trim(),
        }),
      });
      const data = await res.json();
      if (!data.ok) {
        setError(data.error ?? "משהו השתבש. נסו שוב.");
        setStep({ kind: "form", tier: step.tier });
        return;
      }
      setStep({
        kind: "upsell",
        tier: step.tier,
        transactionId: data.transactionId as string,
        name: name.trim(),
      });
    } catch {
      setError("לא הצלחנו להתחבר. נסו שוב.");
      setStep({ kind: "form", tier: step.tier });
    }
  }

  async function acceptUpsell() {
    if (step.kind !== "upsell") return;
    const current = step;
    setStep({
      kind: "upsell-submitting",
      tier: current.tier,
      transactionId: current.transactionId,
      name: current.name,
    });
    try {
      const res = await fetch("/api/upsell", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          transactionId: current.transactionId,
          addonId: ADDON.id,
          amount: ADDON.amount,
        }),
      });
      const data = await res.json();
      if (!data.ok) {
        setStep({
          kind: "upsell",
          tier: current.tier,
          transactionId: current.transactionId,
          name: current.name,
        });
        return;
      }
      setStep({
        kind: "done",
        tier: current.tier,
        name: current.name,
        addedAddon: true,
      });
    } catch {
      setStep({
        kind: "upsell",
        tier: current.tier,
        transactionId: current.transactionId,
        name: current.name,
      });
    }
  }

  function declineUpsell() {
    if (step.kind !== "upsell") return;
    setStep({
      kind: "done",
      tier: step.tier,
      name: step.name,
      addedAddon: false,
    });
  }

  return (
    <>
      <div className="relative">
        <div
          className="absolute right-6 left-6 top-8 h-0.5 bg-gradient-to-l from-accent/10 via-accent/40 to-accent/10 hidden md:block"
          aria-hidden="true"
        />
        <ol className="grid gap-6 md:grid-cols-3 lg:grid-cols-6 relative">
          {tiers.map((tier, idx) => (
            <li key={tier.id} className="relative flex flex-col">
              <div className="hidden md:flex absolute right-1/2 translate-x-1/2 -top-1 items-center justify-center w-4 h-4 rounded-full bg-white border-2 border-accent z-10" />
              <button
                onClick={() => openTier(tier)}
                className={`group text-right h-full rounded-2xl border p-5 flex flex-col gap-3 transition-all hover:-translate-y-1 hover:shadow-lg ${
                  tier.highlight
                    ? "border-accent bg-accent/5 shadow-md"
                    : "border-gray-200 bg-white hover:border-accent/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted">
                    שלב {idx + 1}
                  </span>
                  {tier.badge ? (
                    <span className="text-[10px] font-semibold bg-accent text-white px-2 py-0.5 rounded-full">
                      {tier.badge}
                    </span>
                  ) : null}
                </div>
                <div>
                  <div className="text-3xl font-semibold tracking-tight">
                    ₪{tier.amount.toLocaleString("he-IL")}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-foreground">
                    {tier.name}
                  </div>
                  <div className="mt-1 text-xs text-muted leading-relaxed">
                    {tier.tagline}
                  </div>
                </div>
                <ul className="mt-2 space-y-1.5 text-[13px] text-muted leading-relaxed">
                  {tier.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-3">
                  <span
                    className={`inline-flex items-center justify-center w-full text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                      tier.highlight
                        ? "bg-accent text-white group-hover:opacity-90"
                        : "bg-foreground text-white group-hover:opacity-90"
                    }`}
                  >
                    אני בפנים
                    <span aria-hidden="true" className="mr-1">
                      &larr;
                    </span>
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ol>
      </div>

      {step.kind !== "closed" ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            {(step.kind === "form" || step.kind === "submitting") && (
              <form onSubmit={submitDonation} className="space-y-5">
                <div>
                  <div className="text-xs font-semibold text-accent">
                    {step.tier.name} · ₪
                    {step.tier.amount.toLocaleString("he-IL")}
                  </div>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                    כמעט שם
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    מלאו פרטים — מיד אחרי האישור נעבור למסך התשלום.
                  </p>
                </div>
                <div className="space-y-3">
                  <label className="block">
                    <span className="text-sm font-medium">שם מלא</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={step.kind === "submitting"}
                      className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition disabled:opacity-50"
                      placeholder="ישראל ישראלי"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium">אימייל</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={step.kind === "submitting"}
                      dir="ltr"
                      className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition disabled:opacity-50 text-left"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                {error ? (
                  <p className="text-sm text-red-600">{error}</p>
                ) : null}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={close}
                    disabled={step.kind === "submitting"}
                    className="flex-1 px-4 py-3 rounded-full border border-gray-200 text-sm font-medium hover:border-gray-300 disabled:opacity-50"
                  >
                    ביטול
                  </button>
                  <button
                    type="submit"
                    disabled={step.kind === "submitting"}
                    className="flex-1 px-4 py-3 rounded-full bg-foreground text-white text-sm font-medium hover:opacity-90 disabled:opacity-50"
                  >
                    {step.kind === "submitting"
                      ? "שולח..."
                      : `המשך לתשלום · ₪${step.tier.amount.toLocaleString("he-IL")}`}
                  </button>
                </div>
                <p className="text-[11px] text-muted leading-relaxed">
                  בלחיצה אתם מאשרים שהפרטים שמסרתם נכונים. הסליקה תתבצע
                  באמצעות מערכת מאובטחת.
                </p>
              </form>
            )}

            {(step.kind === "upsell" || step.kind === "upsell-submitting") && (
              <div className="space-y-5">
                <div>
                  <div className="text-xs font-semibold text-green-600">
                    ✓ התרומה התקבלה
                  </div>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                    רגע לפני שסיימנו…
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    יש משהו קטן שעדיין לא ראיתם — ומי שלוקח עכשיו לא מתחרט.
                  </p>
                </div>
                <div className="rounded-xl border-2 border-accent/30 bg-accent/5 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-base font-semibold">
                        {ADDON.name}
                      </div>
                      <p className="mt-1 text-sm text-muted leading-relaxed">
                        {ADDON.description}
                      </p>
                    </div>
                    <div className="text-2xl font-semibold text-accent flex-shrink-0">
                      +₪{ADDON.amount}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-1">
                  <button
                    type="button"
                    onClick={acceptUpsell}
                    disabled={step.kind === "upsell-submitting"}
                    className="w-full px-4 py-3 rounded-full bg-accent text-white text-sm font-semibold hover:opacity-90 disabled:opacity-50"
                  >
                    {step.kind === "upsell-submitting"
                      ? "מוסיף..."
                      : `כן, הוסיפו לי · +₪${ADDON.amount}`}
                  </button>
                  <button
                    type="button"
                    onClick={declineUpsell}
                    disabled={step.kind === "upsell-submitting"}
                    className="w-full px-4 py-2 text-sm text-muted hover:text-foreground disabled:opacity-50"
                  >
                    לא תודה, מסיימים כאן
                  </button>
                </div>
              </div>
            )}

            {step.kind === "done" && (
              <div className="text-center space-y-4 py-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                  <svg
                    className="w-8 h-8 text-green-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  תודה, {step.name}! 🎉
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  אתם רשומים כ
                  <span className="font-semibold text-foreground">
                    {" "}
                    {step.tier.name}
                  </span>
                  {step.addedAddon
                    ? ", כולל הסימנייה החתומה."
                    : "."}
                  <br />
                  אישור עם כל הפרטים נשלח לאימייל.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-foreground text-white text-sm font-medium hover:opacity-90"
                >
                  סגירה
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
