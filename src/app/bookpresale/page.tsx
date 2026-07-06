import type { Metadata } from "next";
import Link from "next/link";
import DonationFlow, { type Tier } from "./DonationFlow";

export const metadata: Metadata = {
  title: "פרי־מכירה: הספר שעוד לא ראיתם",
  description:
    "תומכים מוקדמים מקבלים את הספר ראשונים, במחיר מיוחד, עם פרקים בלעדיים. עזרו לנו להוציא את הספר לאור.",
  // Private campaign page, unrelated to the agency site's content. Kept out
  // of search indexes so crawlers and content reviewers never treat it as
  // part of the public site.
  robots: {
    index: false,
    follow: false,
  },
};

const TIERS: Tier[] = [
  {
    id: "tier-50",
    amount: 50,
    name: "מצטרפ/ת",
    tagline: "תרומה צנועה שעושה את ההבדל",
    perks: ["שם ברשימת התומכים הדיגיטלית", "עדכון אישי כשהספר יוצא"],
  },
  {
    id: "tier-120",
    amount: 120,
    name: "קורא/ת מוקדם/ת",
    tagline: "הספר במחיר טרום־השקה",
    perks: [
      "עותק דיגיטלי של הספר ביום ההשקה",
      "פרק בלעדי שלא יופיע בגרסה הסופית",
      "שם ברשימת התומכים",
    ],
  },
  {
    id: "tier-240",
    amount: 240,
    name: "חבר/ת המסע",
    tagline: "הספר המודפס + הטבות בלעדיות",
    highlight: true,
    badge: "הכי פופולרי",
    perks: [
      "עותק מודפס עם הקדשה אישית",
      "עותק דיגיטלי + פרק בלעדי",
      "מפגש זום קבוצתי עם המחבר/ת",
      "שם ברשימת התומכים בעמוד הקרדיטים",
    ],
  },
  {
    id: "tier-500",
    amount: 500,
    name: "פטרון/ית",
    tagline: "שני עותקים, אחד למתנה",
    perks: [
      "2 עותקים מודפסים חתומים",
      "כל מה שכלול בחבר/ת המסע",
      "אזכור אישי בעמוד התודות",
    ],
  },
  {
    id: "tier-1000",
    amount: 1000,
    name: "שותפ/ה",
    tagline: "חוויה מלאה, מהפנים",
    perks: [
      "5 עותקים מודפסים חתומים",
      "שיחת אחד־על־אחד של 45 דקות עם המחבר/ת",
      "גישה מוקדמת לפרקי המשך",
      "הזמנה לערב ההשקה",
    ],
  },
  {
    id: "tier-2500",
    amount: 2500,
    name: "מבעלי הספר",
    tagline: "החוויה הכי קרובה לקלעים",
    perks: [
      "10 עותקים מודפסים חתומים",
      "הקדשה אישית בעמוד הראשון של המהדורה",
      "ארוחת ערב פרטית עם המחבר/ת",
      "כל ההטבות של השותפ/ה",
    ],
  },
];

const RAISED = 142_500;
const GOAL = 250_000;
const BACKERS = 387;
const DAYS_LEFT = 24;
const PROGRESS = Math.min(100, Math.round((RAISED / GOAL) * 100));

export default function BookPresalePage() {
  return (
    <div dir="rtl" lang="he" className="bg-white text-foreground">
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            ← חזרה לאתר
          </Link>
          <a
            href="#tiers"
            className="hidden sm:inline-flex items-center gap-1 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            אני רוצה לתמוך
          </a>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-accent/10 via-white to-white pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                קמפיין מימון המונים · פעיל
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                ספר שעוד לא נכתב סופית —
                <br />
                <span className="text-accent">ואתם חלק ממנו.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
                שלוש שנים של מחקר, ראיונות ושעות לילה. הספר כמעט מוכן. מה
                שחסר זה הדפוס, ההפצה — ואתם. הצטרפו עכשיו, וקבלו את העותק
                הראשון לפני כולם.
              </p>

              {/* Progress */}
              <div className="mt-10 max-w-md">
                <div className="flex items-baseline justify-between mb-2">
                  <div>
                    <div className="text-3xl font-semibold tracking-tight">
                      ₪{RAISED.toLocaleString("he-IL")}
                    </div>
                    <div className="text-sm text-muted">
                      מתוך יעד של ₪{GOAL.toLocaleString("he-IL")}
                    </div>
                  </div>
                  <div className="text-2xl font-semibold text-accent">
                    {PROGRESS}%
                  </div>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-l from-accent to-accent/70 rounded-full transition-all"
                    style={{ width: `${PROGRESS}%` }}
                  />
                </div>
                <div className="mt-3 flex items-center gap-4 text-sm text-muted">
                  <span>
                    <span className="font-semibold text-foreground">
                      {BACKERS.toLocaleString("he-IL")}
                    </span>{" "}
                    תומכים
                  </span>
                  <span className="text-gray-300">·</span>
                  <span>
                    <span className="font-semibold text-foreground">
                      {DAYS_LEFT}
                    </span>{" "}
                    ימים נותרו
                  </span>
                </div>
              </div>

              <a
                href="#tiers"
                className="inline-flex items-center gap-2 mt-10 bg-foreground text-white text-base font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                בחרו את רמת התמיכה שלכם
                <span aria-hidden="true">&larr;</span>
              </a>
            </div>

            {/* Book mockup */}
            <div className="relative flex justify-center md:justify-end">
              <BookCoverPlaceholder />
            </div>
          </div>
        </section>

        {/* ── Story ── */}
        <section className="bg-muted-light">
          <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              למה הספר הזה,
              <br />
              ולמה דווקא עכשיו?
            </h2>
            <div className="mt-8 space-y-5 text-lg text-muted leading-relaxed">
              <p>
                התחלתי לכתוב את הספר הזה לפני שלוש שנים, אחרי שגיליתי שהשאלות
                שאני נשאל שוב ושוב מאנשים שונים — אין להן באמת תשובה במקום אחד.
                החומר היה פזור. חלקו בראיונות, חלקו במאמרים, חלקו בשיחות
                אישיות. הגיע הזמן לאסוף הכל לכריכה אחת.
              </p>
              <p>
                הספר מספר סיפור שלא סופר עד היום — דרך עשרות ראיונות עם אנשים
                שמשנים מבפנים את מה שכולנו רואים מבחוץ. זה לא ספר עיון יבש, וזה
                לא ביוגרפיה. זה משהו באמצע — ספר שאפשר לקרוא בשבת אחת ולחזור
                אליו עוד שנה.
              </p>
              <p className="text-foreground font-medium">
                לקחת אותו ממסמך וורד לספר אמיתי בחנויות זה הצעד שאני לא יכול
                לעשות לבד. שם אתם נכנסים לתמונה.
              </p>
            </div>
          </div>
        </section>

        {/* ── About Author ── */}
        <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12 items-start">
            <AuthorAvatarPlaceholder />
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                המחבר/ת
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
                מי עומד מאחורי הספר
              </h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  עשרים שנה של כתיבה, מתוכן שתים־עשרה ככתב/ת בכיר/ה במגזין
                  שאתם בטח מכירים. שלושה ספרים קודמים, שניים מהם רבי־מכר.
                  אבל הספר הזה? הוא הכי אישי שכתבתי עד היום.
                </p>
                <p>
                  הסיבה שאני יוצא/ת למימון המונים ולא להוצאה רגילה היא פשוטה:
                  אני רוצה שהספר הזה יישאר שלי. בלי עורך שיגיד &quot;תורידי
                  את הפרק הזה כי הוא לא מסחרי&quot;. בלי לקצר. בלי להתפשר.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tiers Timeline ── */}
        <section id="tiers" className="bg-muted-light scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                איך תומכים
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                בחרו את רמת התמיכה שלכם
              </h2>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                כל רמה מקבלת משהו משלה. ככל שתבחרו רמה גבוהה יותר — תקבלו יותר.
                אין &quot;נכון&quot; או &quot;לא נכון&quot;. כל תרומה מקרבת
                את הספר לדפוס.
              </p>
            </div>

            <div className="mt-14">
              <DonationFlow tiers={TIERS} />
            </div>

            <p className="text-center mt-10 text-sm text-muted">
              לא בטוחים מה לבחור? התחילו מהרמה הצנועה. תמיד אפשר להוסיף אחר כך.
            </p>
          </div>
        </section>

        {/* ── Why support ── */}
        <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">
            מה הכסף שלכם בעצם עושה?
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                emoji: "🖨️",
                title: "דפוס איכותי",
                desc: "נייר שאפשר לסמן עליו, כריכה שלא נשברת אחרי קריאה אחת, ופורמט שנעים להחזיק.",
              },
              {
                emoji: "🎨",
                title: "עיצוב מקצועי",
                desc: "כריכה ופנים מעוצבים בידי מעצב/ת ספרים — לא פילטר אינסטגרם.",
              },
              {
                emoji: "📚",
                title: "הפצה ושיווק",
                desc: "כדי שהספר יגיע גם לחנויות פיזיות ולא רק לידידים — לא רק כקובץ דיגיטלי.",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-4xl">{item.emoji}</div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="bg-foreground text-white">
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              מתי הספר מגיע אליכם?
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-4">
              {[
                {
                  date: "יוני 2026",
                  title: "סיום הקמפיין",
                  desc: "הקמפיין נסגר ואתם מקבלים אישור סופי על התרומה.",
                },
                {
                  date: "ספטמבר 2026",
                  title: "סיום העריכה",
                  desc: "התומכים המוקדמים מקבלים פרק בלעדי לקריאה.",
                },
                {
                  date: "דצמבר 2026",
                  title: "הספר יוצא לדפוס",
                  desc: "התומכים בעותק מודפס מקבלים את הספר ראשונים.",
                },
                {
                  date: "ינואר 2027",
                  title: "השקה רשמית",
                  desc: "הספר מופיע בחנויות. אתם כבר תקראתם אותו.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <div className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {item.date}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-gray-400 text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            שאלות שאתם בטח שואלים
          </h2>
          <div className="mt-10 divide-y divide-gray-100 border-y border-gray-100">
            {[
              {
                q: "מה קורה אם לא מגיעים ליעד?",
                a: "אם לא נגיע ליעד תוך 30 הימים שנותרו, כל התרומות יוחזרו במלואן. אתם לא לוקחים סיכון.",
              },
              {
                q: "מתי אקבל את הספר?",
                a: "תאריך היעד הוא דצמבר 2026 למודפס, וספטמבר 2026 לעותק הדיגיטלי. אם משהו ידחה — תקבלו עדכון אישי לפני כולם.",
              },
              {
                q: "אפשר לשלם בתשלומים?",
                a: "הסליקה היא בתשלום אחד דרך כרטיס אשראי מאובטח. אם אתם זקוקים לפריסה — צרו קשר ונסדר.",
              },
              {
                q: "אפשר לתת את הספר במתנה?",
                a: "כן. כל הרמות מאפשרות לציין כתובת משלוח אחרת ולהוסיף הקדשה. את הפרטים תמלאו אחרי הסליקה.",
              },
              {
                q: "האם התרומה היא לצורכי מס?",
                a: "זאת לא תרומה בהיבט המשפטי אלא קנייה מוקדמת — לא תוכלו לקבל קבלה לצורכי מס. תקבלו חשבונית מס מסודרת.",
              },
            ].map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-base font-semibold pr-4">{item.q}</h3>
                  <span className="text-accent text-2xl font-light leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted leading-relaxed text-[15px]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="bg-gradient-to-bl from-accent/10 via-white to-accent/5">
          <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              עוד {DAYS_LEFT} ימים. ואז זהו.
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              הספר הזה לא ייצא לאור בלי {Math.max(0, GOAL - RAISED).toLocaleString("he-IL")} ₪ נוספים.
              <br />
              כל תמיכה — בכל סכום — מקרבת אותנו לשם.
            </p>
            <a
              href="#tiers"
              className="inline-flex items-center gap-2 mt-10 bg-foreground text-white text-base font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              אני רוצה לתמוך
              <span aria-hidden="true">&larr;</span>
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} כל הזכויות שמורות.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground transition-colors">
              תנאי שימוש
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              צרו קשר
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BookCoverPlaceholder() {
  return (
    <div className="relative" style={{ perspective: "1000px" }}>
      <div
        className="relative w-[260px] h-[380px] md:w-[300px] md:h-[440px]"
        style={{ transform: "rotateY(-12deg) rotateX(3deg)" }}
      >
        {/* Back / shadow */}
        <div
          className="absolute inset-0 rounded-l-md rounded-r-lg shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, #2a2452 0%, #4a3f88 45%, #7F77DD 100%)",
            transform: "translateZ(-10px)",
          }}
        />
        {/* Front */}
        <div
          className="absolute inset-0 rounded-l-md rounded-r-lg overflow-hidden flex flex-col justify-between p-6 md:p-8 text-white"
          style={{
            background:
              "linear-gradient(135deg, #2a2452 0%, #4a3f88 45%, #7F77DD 100%)",
            boxShadow:
              "inset 4px 0 0 rgba(0,0,0,0.2), 0 25px 50px -12px rgba(0,0,0,0.4)",
          }}
        >
          {/* Decorative shapes */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full opacity-20"
            preserveAspectRatio="none"
          >
            <circle cx="80" cy="20" r="30" fill="white" />
            <circle cx="20" cy="80" r="40" fill="white" />
          </svg>

          <div className="relative">
            <div className="text-[10px] tracking-[0.3em] uppercase opacity-70">
              מהדורה ראשונה
            </div>
            <div className="mt-1 h-px bg-white/40 w-12" />
          </div>

          <div className="relative">
            <div className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              שם הספר
              <br />
              <span className="opacity-80">יבוא כאן</span>
            </div>
            <div className="mt-3 text-sm opacity-70">תת־כותרת קצרה</div>
          </div>

          <div className="relative">
            <div className="h-px bg-white/40 w-12 mb-2" />
            <div className="text-xs opacity-80">המחבר/ת</div>
          </div>
        </div>
      </div>
      {/* Floor reflection */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[200px] h-4 bg-black/20 blur-xl rounded-full" />
    </div>
  );
}

function AuthorAvatarPlaceholder() {
  return (
    <div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] mx-auto md:mx-0">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(135deg, #7F77DD 0%, #4a3f88 100%)",
        }}
      />
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full text-white/90"
        fill="currentColor"
      >
        <circle cx="50" cy="38" r="16" />
        <path d="M20 90 Q20 60 50 60 Q80 60 80 90 Z" />
      </svg>
      <div className="absolute -bottom-2 -left-2 bg-white rounded-full px-3 py-1 text-xs font-semibold shadow-md border border-gray-100">
        ✍️ המחבר/ת
      </div>
    </div>
  );
}
