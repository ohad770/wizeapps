import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "WizeApps בעברית | פיתוח אתרים, אפליקציות ואוטומציות לעסקים",
  description:
    "וויזאפס בונה מערכות הזמנות, טפסי קליטה, MVP וכלים פנימיים לעסקים שרוצים להפוך תהליך ידני למערכת שעובדת.",
  alternates: {
    canonical: `${siteUrl}/he`,
    languages: {
      en: siteUrl,
      he: `${siteUrl}/he`,
      "x-default": siteUrl,
    },
  },
};

const hebrewServices = [
  {
    title: "מערכות הזמנות ותורים",
    text: "זרימה שמקבלת בקשה, בודקת כללים עסקיים, מאשרת, מזכירה ללקוח ומעדכנת את הצוות.",
  },
  {
    title: "טפסי קליטה ולידים",
    text: "תהליך שמרכז פניות ממספר ערוצים, שואל את השאלות הנכונות ומעביר לצוות מידע שאפשר לפעול לפיו.",
  },
  {
    title: "MVP ממוקד",
    text: "גרסה ראשונה שעונה על שאלה עסקית אמיתית במקום לבנות חודשים לפני שיש ראיות מהשטח.",
  },
  {
    title: "כלים פנימיים",
    text: "מערכת פשוטה שמחליפה גיליונות, הודעות וזיכרון של אדם אחד בתהליך מסודר שהצוות יכול להפעיל.",
  },
];

const proofPoints = [
  "מינחה אלארם: חישובי זמני תפילה לפי מיקום, שפות, תזכורות וחוויית שימוש פשוטה.",
  "דומינו רעננה: תפריט, עגלה, checkout, תשלום, אזורי משלוח וחיבור לתפעול.",
  "Djob: פלטפורמת התאמה דו-צדדית עם embeddings, סינון מועמדים ותמונת מצב לתפעול.",
];

export default function HebrewPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main dir="rtl" lang="he" className="flex-1 text-right">
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-14 md:pt-28">
          <p className="eyebrow-badge">WizeApps בעברית</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
            פיתוח אתרים, אפליקציות ואוטומציות לעסקים שרוצים פחות עבודה ידנית.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            אנחנו מתחילים מהתהליך העסקי, לא מרשימת פיצ׳רים. המטרה היא לבנות
            מערכת קטנה מספיק כדי לעלות מהר, אבל שימושית מספיק כדי לחסוך זמן,
            לצמצם טעויות ולעזור ללקוחות להתקדם בלי עוד שיחה מיותרת.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="btn-shimmer inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white"
            >
              דברו איתנו
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent-deep"
            >
              לראות פרויקטים אמיתיים
            </Link>
          </div>
        </section>

        <section className="border-y border-gray-100 bg-muted-light">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <Reveal as="h2" className="text-3xl font-semibold">
              מה אפשר לבנות
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {hebrewServices.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={(index % 2) * 100}
                  className="card-fancy p-6"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <h2 className="text-3xl font-semibold">למה זה אמין יותר מתוכן כללי</h2>
              <p className="mt-4 leading-relaxed text-muted">
                באתר יש מאמרי teardown על פרויקטים אמיתיים, צילומי מסך אמיתיים
                וכלים אינטראקטיביים בתוך מאמרים. זה תוכן שמבוסס על ניסיון
                בנייה בפועל, לא רק על הסבר כללי על פיתוח תוכנה.
              </p>
            </Reveal>
            <Reveal delay={120} className="card-fancy p-6">
              <h3 className="text-xl font-semibold">דוגמאות מהשטח</h3>
              <ul className="mt-5 space-y-3 leading-relaxed text-muted">
                {proofPoints.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="bg-foreground text-white">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <Reveal className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  Next step
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                  יש לכם תהליך שחוזר על עצמו כל שבוע?
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-gray-300">
                  נתחיל ממיפוי קצר: איפה נאבד זמן, איפה נוצרות טעויות, ומה
                  חייב להיות בגרסה הראשונה כדי שהמערכת באמת תעבוד.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-white"
              >
                להתחלת שיחה
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
