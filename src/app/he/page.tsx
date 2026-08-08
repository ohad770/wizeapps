import type { Metadata } from "next";
import Link from "next/link";
import HtmlLang from "@/components/HtmlLang";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { author, siteUrl } from "@/lib/site";

const pageTitle = "WizeApps בעברית | פיתוח אתרים, אפליקציות ואוטומציות לעסקים";
const pageDescription =
  "וויזאפס בונה מערכות הזמנות, טפסי קליטה, MVP וכלים פנימיים לעסקים. בעמוד הזה, בעברית: תחומי העבודה, שלושה פרויקטים שעלו לאוויר, טווחי המחירים ופרטי הקשר.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    type: "website",
    url: `${siteUrl}/he`,
    siteName: "WizeApps",
    locale: "he_IL",
    title: pageTitle,
    description: pageDescription,
  },
  alternates: {
    canonical: `${siteUrl}/he`,
    languages: {
      en: siteUrl,
      he: `${siteUrl}/he`,
      "x-default": siteUrl,
    },
  },
};

const companyName = "המכון לאפליקציות חכמות";
const streetAddress = "רחוב ויצמן 117";
const locality = "כפר סבא";
const phoneDisplay = "+972-9-7677094";
const phoneHref = "tel:+97297677094";
const siteEmail = "hello@wizeapps.agency";

const pageSections = [
  { href: "#services", label: "תחומי העבודה" },
  { href: "#projects", label: "פרויקטים שעלו לאוויר" },
  { href: "#pricing", label: "מחירים" },
  { href: "#process", label: "איך מתחילים" },
  { href: "#business", label: "פרטי העסק" },
  { href: "#faq", label: "שאלות נפוצות" },
];

const englishPages = [
  {
    href: "/services",
    label: "שירותים",
    text: "עמוד לכל אחד מארבעת תחומי העבודה, עם דוגמאות מפורטות ושאלות נפוצות.",
  },
  {
    href: "/case-studies",
    label: "פרויקטים",
    text: "פירוק מלא של שלושת הפרויקטים: מה נבנה, אילו החלטות נלקחו, מה היה מסובך יותר ממה שנראה.",
  },
  {
    href: "/resources",
    label: "מאמרים",
    text: "מאמרים טכניים ומדריכים לבעלי עסקים, כולל תמחור, תחזוקה אחרי עלייה לאוויר ותזמון התראות בלי תור משימות.",
  },
  {
    href: "/about",
    label: "אודות",
    text: "מי עומד מאחורי הסטודיו ואיך נראית עבודה משותפת.",
  },
  {
    href: "/contact",
    label: "יצירת קשר",
    text: "פרטי הקשר, מה כדאי לצרף לפנייה ראשונה, ומה קורה אחריה.",
  },
];

const hebrewServices = [
  {
    title: "מערכות הזמנות ותורים",
    href: "/services/reservation-and-booking-automation",
    text: "זרימה שמקבלת בקשה, בודקת את הכללים העסקיים, מאשרת, מזכירה ללקוח ומעדכנת את הצוות. הטופס הוא החלק הקל. העבודה האמיתית היא מה שקורה סביבו.",
    points: [
      "ההזמנה נרשמת במקום אחד ובמבנה שכל שאר המערכת יכולה לעבוד איתו: מי, איזה שירות, איזה מועד ואיך מגיעים לאדם. האישור, התזכורת ומסך היום של הצוות קוראים כולם מאותה רשומה.",
      "גם הזמנה שהתקבלה בטלפון נכנסת לאותה רשומה. מערכת שמכירה רק את ההזמנות שנכנסו אליה אונליין היא מערכת שהצוות עוקף, וממשיך לנהל מחברת בצד.",
      "כללי זכאות הם לא תצוגה. באתר של דומינו רעננה לכל אזור חלוקה יש דמי משלוח ומינימום הזמנה משלו, והם אלה שקובעים אם אפשר בכלל לסיים הזמנה לכתובת הזאת.",
      "תזכורות הן בעיית תזמון, לא בעיית הודעות, ולפני כל שליחה צריך לבדוק אם האדם ביקש לא לקבל.",
    ],
  },
  {
    title: "טפסי קליטה ולידים",
    href: "/services/client-intake-systems",
    text: "תהליך שמרכז פניות מכמה ערוצים, שואל את השאלות הנכונות ומעביר לצוות מידע שאפשר לפעול לפיו. ההחלטה המרכזית היא לא איך הטופס נראה, אלא באיזה מבנה נשמרות התשובות.",
    points: [
      "שדה טקסט חופשי אחד אוסף הכול ולא מאפשר כלום. אי אפשר למיין לפיו, לנתב לפיו או להשוות בין פניות. שדות נפרדים אוספים פחות, ואפשר לעבוד איתם.",
      "כל שדה צריך להצדיק את עצמו בהחלטה שהוא משרת: מי מטפל בפנייה, האם היא בתחום שלנו, ומה אפשר להפסיק לשאול בשיחה הראשונה. כל השאר נכנס לתיבת הערות אחת בסוף.",
      "תור טיפול שאפשר לסמוך עליו נראה כך: רשימה אחת בסדר שבו צריך לעבוד, סטטוס שגלוי לכולם, וסיבה שנשמרת גם על דחייה. דחיות בלי סיבה לא מאפשרות לדעת אם הכללים מחמירים מדי.",
      "טופס ציבורי קצר לא חייב להשאיר רשומה דלה. אפשר לשאול מעט בחוץ ולהשלים את הפרטים ברשומה הפנימית תוך כדי השיחה.",
    ],
  },
  {
    title: "MVP ממוקד",
    href: "/services/mvp-builds",
    text: "גרסה ראשונה שאנשים אמיתיים יכולים להשתמש בה, ולא גרסה מוזלת של המוצר המלא. מה שנבנה הוא הרצף שחייב לעבוד, זה שהמשתמש חוזר עליו כדי לקבל את מה שהובטח לו.",
    points: [
      "כותבים את הרצף הזה במשפט אחד, וזה המקום שבו נסגרים רוב הוויכוחים על היקף. ב-Mincha Time המשפט היה: לדעת איפה המשתמש נמצא, לחשב את הזמן של היום, ולהזכיר לו לפני שהוא נסגר.",
      "מה שנשאר בחוץ נשאר בחוץ בכוונה. הגרסה הראשונה של Mincha Time עשתה דבר אחד, ובדיוק בגלל זה היא לקחה בערך חודש.",
      "גם גרסה ראשונה צריכה מסכי ניהול מינימליים כדי שיהיה אפשר להפעיל אותה. אי אפשר ללמוד ממערכת שאין לכם דרך להסתכל עליה.",
      "קיצורי דרך שנעשו במודע נרשמים. כשיודעים איפה הם, אפשר להחליף אותם בזמן שנוח ולא לגלות אותם בזמן תקלה.",
    ],
  },
  {
    title: "כלים פנימיים",
    href: "/services/internal-operations-tools",
    text: "מערכת שמחליפה גיליונות, הודעות וזיכרון של אדם אחד בתהליך מסודר שהצוות מפעיל. רוב התהליכים הפנימיים עובדים בסדר עד ששני דברים קורים יחד: הנפח עולה, והאדם שמחזיק את התהליך בראש עסוק.",
    points: [
      "מה שנשבר הוא בדרך כלל לא קבלת ההחלטות אלא ההעברה בין אנשים: שלב שנעשה פעמיים, שלב שדילגו עליו, סטטוס שאי אפשר לראות בלי לשאול מישהו.",
      "מסכי הניהול הם רוב העבודה, גם אם מבחוץ לא רואים אותם. בדומינו רעננה נבנו מסכים למוצרים, למבצעים, לקטגוריות, לגדלי פיצה, לשתייה, לרטבים, לאזורי חלוקה, להגדרות האתר ולהזמנות. כל אחד מהם הוא דבר שהצוות צריך לשנות בעצמו.",
      "כל העברה למערכת שאתם לא שולטים בה דורשת שלוש תשובות מראש: מה מוכיח שהצד השני קיבל את העבודה, מה קורה כשהוא לא קיבל, ומי מגלה את זה.",
      "כלל שמשתנה לעתים קרובות צריך להיות נתון שהצוות עורך, לא קוד. לכן לדומינו יש מסכים לאזורים, למחירים, לגדלים ולמבצעים, ולא קובץ הגדרות שמפתח נוגע בו בכל שינוי.",
    ],
  },
];

const hebrewProjects = [
  {
    name: "Mincha Time",
    url: "https://mincha-time.com",
    href: "/case-studies/mincha-time",
    timeline: "גרסה ראשונה בבערך חודש",
    summary:
      "אפליקציית תזכורות לזמני תפילה. המשתמש מקבל התראה לפני שהזמן הרלוונטי במקום שבו הוא נמצא נסגר, בלי להגדיר משהו מחדש כל יום. מה שרואים מבחוץ הוא התראה שמגיעה בזמן. מה שנדרש בשבילה הוא מנוע שליחה שפועל בדקה הנכונה, כל יום, לכל מקום.",
    points: [
      "זמני היום מגיעים מ-API הזמנים של Hebcal. ההתראות נשלחות דרך Firebase Cloud Functions, Firestore ו-FCM.",
      "אין תור משימות. פונקציה רצה פעם בדקה ובודקת אם קיים מסמך ב-Firestore לדקה הנוכחית. המסמכים ממופתחים לפי שעה_דקה, כך ש-13:47 הוא המסמך 13_47. אם המסמך לא קיים, הריצה לא עושה כלום.",
      "משתמשים מקובצים לפי קו רוחב וקו אורך מעוגלים, ולכן ה-API נקרא פעם אחת לכל מקום ביום ולא פעם אחת לכל משתמש.",
      "כל ריצה כותבת את המסמך של מחר לאותה קבוצה, כך שהלוח מתקדם יום אחד בכל פעם במקום להיות מחושב מראש.",
      "שתי דרכים נפרדות ובלתי תלויות להפסיק לקבל: כיבוי קבוע, ונודניק לאותו יום. שתיהן נבדקות לפני כל שליחה.",
      "שש שפות בהודעות, וניקוי של משתמשים שלא היו פעילים שלושים יום.",
    ],
  },
  {
    name: "דומינו רעננה",
    url: "https://domino-rn.co.il",
    href: "/case-studies/domino-ranana",
    timeline: "בערך חודשיים, בשימוש יומיומי למעלה מחמש שנים",
    summary:
      "אתר הזמנות לסניף דומינו רעננה: תפריט, מבצעים, עגלה, תשלום ומשלוח. מבחוץ זה נראה כמו תפריט. העבודה האמיתית מתחילה ברגע שהלקוח לוחץ על סיום הזמנה.",
    points: [
      "בנוי ב-Vite ו-React מעל Base44, עם סליקה דרך Cardcom.",
      "הזמנות עוברות למערכת הקופה בסניף (Aviv POS), כך שאף אחד לא מקליד אותן מחדש בעמדה.",
      "סדר הפעולות סביב הכסף: קודם נוצרת הזמנה במצב ממתין, אחר כך התשלום ב-Cardcom, ורק אחריו עדכון הסטטוס, המיילים וההעברה לקופה.",
      "לכל אזור חלוקה יש דמי משלוח ומינימום הזמנה משלו, והם קובעים אם אפשר בכלל לסיים הזמנה לכתובת הזאת.",
      "מבצע הוא לא מוצר בהנחה. הוא יכול להכיל כמה מוצרים ואפשרויות בחירה משלו, ולכן העגלה שומרת את המבנה של המבצע ולא משטחת אותו לשורה אחת.",
      "מסכי ניהול למוצרים, למבצעים, לקטגוריות, לגדלי פיצה, לשתייה, לרטבים, לאזורי חלוקה, להגדרות האתר ולהזמנות.",
    ],
  },
  {
    name: "Djob",
    url: "https://djob.agency",
    href: "/case-studies/djob-agency",
    timeline: "בערך שישה חודשים",
    summary:
      "סביבת עבודה דו-צדדית לגיוס: מועמדים בצד אחד, משרות ומגייסים בצד השני, וההתאמה ביניהם. התוכניות הציבוריות מתחילות ב-29 דולר לחודש.",
    points: [
      "הנתונים יושבים ב-PostgreSQL, והפלטפורמה בנויה מעל Base44.",
      "ה-embeddings, במודל text-embedding-3-small של OpenAI, מחושבים על חלקי היגד מובנים ולא על מסמך טקסט אחד לכל רשומה.",
      "בגלל זה אפשר להסביר את התוצאה. דמיון קוסינוס נותן ציון קרבה, וציון לבד הוא לא החלטה: מועמד יכול להיראות קרוב למשרה ובכל זאת ליפול בדרישה קשה. לכן הציון עובר דרך כללים עסקיים פשוטים של עובר או נכשל.",
      "מסכי ההתאמה קוראים מטבלאות תמונת מצב שנבנות מחדש פעם ביום, במקום לחשב כל מועמד מול כל משרה בכל פעם שנפתח עמוד.",
      "שני קהלים שצריכים דברים שונים מאותם נתונים. זה מה שהפך את זה לפרויקט של שישה חודשים ולא של חודש.",
    ],
  },
];

const pricingExamples = [
  { name: "Mincha Time", duration: "בערך חודש", range: "5,000 עד 10,000 דולר" },
  { name: "דומינו רעננה", duration: "בערך חודשיים", range: "10,000 עד 20,000 דולר" },
  { name: "Djob", duration: "בערך שישה חודשים", range: "30,000 עד 60,000 דולר" },
];

const processSteps = [
  {
    title: "פנייה ראשונה",
    text: "כמה שורות על התהליך: מה קורה היום, מי מפעיל אותו, ומה היה משתנה אם הוא היה עובד טוב יותר. לא צריך מסמך אפיון ולא צריך לדעת לדבר במונחים טכניים.",
  },
  {
    title: "שיחת מיפוי",
    text: "עוברים על התהליך שלב אחר שלב, מסמנים איפה נאבד זמן ואיפה נוצרות טעויות, ומחליטים מה חייב להיכנס לגרסה הראשונה. בעברית או באנגלית, בשיחה או במייל.",
  },
  {
    title: "הצעה כתובה",
    text: "מה נכנס, מה לא נכנס, וטווח מחיר לפי חודשי העבודה המוערכים. אם העבודה לא מתאימה לנו, נגיד את זה במקום להגיש הצעה.",
  },
];

const businessDetails = [
  { label: "שם רשום", value: companyName },
  { label: "כתובת", value: `${streetAddress}, ${locality}, ישראל` },
  { label: "טלפון", value: phoneDisplay, href: phoneHref },
  { label: "מייל", value: siteEmail, href: `mailto:${siteEmail}` },
  { label: "מי עונה", value: `${author.name}, מייסד` },
  { label: "שפות עבודה", value: "עברית ואנגלית" },
];

const hebrewFaqs = [
  {
    question: "כל האתר בעברית?",
    answer:
      "העמוד הזה בעברית, והוא עומד בפני עצמו. שאר העמודים באתר, וגם תפריט הניווט למעלה ובתחתית העמוד, כתובים באנגלית. הקישורים לעמודים האלה מסומנים כאן במפורש, כדי שלא תגיעו לעמוד באנגלית בהפתעה. העבודה עצמה, השיחות והמסמכים, נעשית בעברית או באנגלית לפי מה שנוח לכם.",
  },
  {
    question: "אפשר להתקשר במקום לכתוב?",
    answer: `כן, ${phoneDisplay} מגיע למשרד. במייל בדרך כלל מקבלים תשובה שלמה יותר, כי אפשר לצרף את הגיליון, את צילום המסך או את הטופס שמראה את הבעיה. בשני המקרים אתם מדברים עם מי שיעשה את העבודה.`,
  },
  {
    question: "צריך אפיון טכני לפני שפונים?",
    answer:
      "לא. כמה דוגמאות בשפה פשוטה מהתהליך הקיים מספיקות. אם אתם יכולים לתאר מה מציק היום ואיך נראה מצב טוב יותר, זו נקודת פתיחה טובה.",
  },
  {
    question: "אנחנו כבר עובדים עם מערכת קיימת. צריך להחליף אותה?",
    answer:
      "בדרך כלל לא. באתר של דומינו הסניף המשיך עם הקופה שהייתה לו, והאתר מעביר אליה כל הזמנה משולמת. להחזיק את הצד שפונה ללקוח ולהעביר את התוצאה למערכת שכבר עובדת זה כמעט תמיד זול יותר ומטלטל פחות מהחלפה של משהו שהצוות סומך עליו.",
  },
  {
    question: "מה קורה אחרי שהמערכת עולה לאוויר?",
    answer:
      "עבודה נוספת מחויבת לפי שעה, 85 עד 165 דולר לשעה, לפי שעות שבוצעו בפועל. אין ריטיינר חודשי קבוע למערכות קטנות, כך שבחודש שבו לא נדרשה עבודה אין תשלום.",
  },
  {
    question: "אפשר לראות משהו שעלה לאוויר לפני שפונים?",
    answer:
      "כן. שלושת הפרויקטים כאן חיים ופתוחים לכל אחד: mincha-time.com, domino-rn.co.il ו-djob.agency. לכל אחד מהם יש גם עמוד פירוק באתר, באנגלית, שמתאר מה נבנה, מה היה מסובך ומה היה נעשה אחרת.",
  },
];

export default function HebrewPage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/he#organization`,
    name: "WizeApps",
    legalName: companyName,
    url: `${siteUrl}/he`,
    inLanguage: "he",
    description: pageDescription,
    email: `mailto:${siteEmail}`,
    telephone: phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: locality,
      addressCountry: "IL",
    },
    founder: {
      "@type": "Person",
      name: author.name,
      jobTitle: "מייסד",
      url: `${siteUrl}/about`,
      sameAs: [author.linkedin],
    },
    areaServed: {
      "@type": "Country",
      name: "ישראל",
    },
    availableLanguage: ["Hebrew", "English"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: siteEmail,
        telephone: phoneDisplay,
        contactType: "sales and support",
        availableLanguage: ["Hebrew", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: phoneDisplay,
        contactType: "office",
        availableLanguage: ["Hebrew", "English"],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HtmlLang lang="he" dir="rtl" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            העמוד הזה מכסה בעברית את כל מה שצריך כדי להחליט אם כדאי לדבר איתנו:
            מה אנחנו בונים, שלושה פרויקטים שאפשר לפתוח עכשיו בדפדפן, איך העבודה
            מתומחרת, ומי בצד השני של הטלפון.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="btn-shimmer inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white"
            >
              דברו איתנו
            </Link>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent-deep"
            >
              לראות פרויקטים אמיתיים
            </a>
          </div>
          <nav
            aria-label="ניווט בתוך העמוד"
            className="mt-10 border-t border-gray-100 pt-6"
          >
            <p className="text-[13px] font-semibold uppercase tracking-wide text-muted">
              מה יש בעמוד הזה
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5 text-sm">
              {pageSections.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex rounded-full border border-gray-200 px-4 py-2 text-muted transition-colors hover:border-accent/50 hover:text-accent-deep"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section className="border-y border-gray-100 bg-muted-light">
          <div className="max-w-5xl mx-auto grid gap-8 px-6 py-16 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <h2 className="text-3xl font-semibold">מי אנחנו ומה אנחנו עושים</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted">
                <p>
                  WizeApps הוא סטודיו לפיתוח מוצר. אנחנו בונים מערכות לעסקים
                  ולצוותים שהתהליך שלהם עובד היום על ניירות, גיליונות והודעות,
                  והגיע לנקודה שבה הוא לא מחזיק יותר. לא בגלל שאף אחד לא מתאמץ,
                  אלא בגלל שהנפח עלה.
                </p>
                <p>
                  השאלה הראשונה שלנו היא לא איזו טכנולוגיה מתאימה, אלא מה קורה
                  היום שלב אחר שלב: מי מקבל את הפנייה, מה הוא בודק, מה הוא שולח
                  בחזרה, איפה מחכים לתשובה ואיפה דברים נופלים בין הכיסאות. אחרי
                  שהתהליך כתוב, קל בהרבה להחליט מה חייב להיכנס לגרסה הראשונה ומה
                  יכול לחכות.
                </p>
                <p>
                  אנחנו לא מוכרים פלטפורמה ולא מנסים להחליף כל מה שיש לכם. במקרים
                  רבים הדבר הנכון הוא לבנות את הצד שפונה ללקוח ולהעביר את התוצאה
                  למערכת שאתם כבר עובדים איתה. עובדים בעברית ובאנגלית, בכתב
                  ובשיחות.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} className="card-fancy relative overflow-hidden p-7">
              <div
                aria-hidden="true"
                className="blob blob-accent -top-16 -right-12 h-44 w-44 opacity-40"
              />
              <h3 className="text-xl font-semibold">
                שאר האתר כתוב <span className="text-gradient">באנגלית</span>
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                כדי שלא תגיעו לעמוד באנגלית בהפתעה: כל קישור בהמשך מסומן. גם
                תפריט הניווט למעלה ובתחתית העמוד באנגלית בלבד.
              </p>
              <ul className="mt-6 space-y-4">
                {englishPages.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      hrefLang="en"
                      className="inline-flex flex-wrap items-center gap-2 font-medium text-accent"
                    >
                      <span className="link-underline">{item.label}</span>
                      <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent-deep">
                        באנגלית
                      </span>
                      <span aria-hidden="true" className="arrow-nudge">
                        &larr;
                      </span>
                    </Link>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section id="services" className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <Reveal as="h2" className="text-3xl font-semibold">
            ארבעה תחומי עבודה
          </Reveal>
          <Reveal delay={80} className="mt-4 max-w-3xl leading-relaxed text-muted">
            <p>
              אלה סוגי המערכות שאנחנו בונים. לכל אחד מהם יש עמוד מפורט באתר,
              באנגלית, ולכל אחד מהם יש פרויקט אמיתי שאפשר לפתוח ולראות.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {hebrewServices.map((item, index) => (
              <Reveal
                as="article"
                key={item.title}
                delay={(index % 2) * 100}
                className="card-fancy p-6"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
                <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-muted">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={item.href}
                  hrefLang="en"
                  className="mt-6 inline-flex flex-wrap items-center gap-2 text-sm font-medium text-accent"
                >
                  <span className="link-underline">העמוד המפורט</span>
                  <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent-deep">
                    באנגלית
                  </span>
                  <span aria-hidden="true" className="arrow-nudge">
                    &larr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="border-y border-gray-100 bg-muted-light">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <Reveal as="h2" className="text-3xl font-semibold">
              שלושה פרויקטים שעלו לאוויר
            </Reveal>
            <Reveal delay={80} className="mt-4 max-w-3xl leading-relaxed text-muted">
              <p>
                שלושת האתרים האלה חיים עכשיו ואפשר לפתוח כל אחד מהם. לכל פרויקט
                כתוב כמה זמן לקחה הבנייה, ומה היו ההחלטות שקבעו את זה.
              </p>
            </Reveal>
            <div className="mt-10 space-y-6">
              {hebrewProjects.map((project, index) => (
                <Reveal
                  as="article"
                  key={project.name}
                  delay={index * 100}
                  className="card-fancy p-7"
                >
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                    <h3 className="text-2xl font-semibold">{project.name}</h3>
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-[13px] font-semibold text-accent-deep">
                      {project.timeline}
                    </span>
                  </div>
                  <p className="mt-4 leading-relaxed text-muted">
                    {project.summary}
                  </p>
                  <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-muted">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent"
                    >
                      <span className="link-underline">לאתר החי</span>
                    </a>
                    <Link
                      href={project.href}
                      hrefLang="en"
                      className="inline-flex flex-wrap items-center gap-2 font-medium text-accent"
                    >
                      <span className="link-underline">הפירוק המלא</span>
                      <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent-deep">
                        באנגלית
                      </span>
                      <span aria-hidden="true" className="arrow-nudge">
                        &larr;
                      </span>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <h2 className="text-3xl font-semibold">איך העבודה מתומחרת</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted">
                <p>
                  בנייה מתומחרת לפי חודש עבודה מוערך: 5,000 עד 10,000 דולר לכל
                  חודש עבודה מוערך. המקום המדויק בטווח נקבע לפי מורכבות. פרויקט
                  שמוערך בשני חודשי עבודה מתומחר בהתאם, וההערכה נכתבת בהצעה לפני
                  שמתחילים.
                </p>
                <p>
                  עבודה אחרי העלייה לאוויר מחויבת לפי שעה: 85 עד 165 דולר לשעה,
                  לפי שעות שבוצעו בפועל. אין ריטיינר חודשי קבוע למערכות קטנות,
                  כך שבחודש שבו לא נדרשה עבודה אין תשלום.
                </p>
                <p>
                  מה שמזיז את התאריך ואת המחיר הוא ההיקף, לא הטכנולוגיה. מערכת עם
                  חישוב אחד ותזכורת אחת היא בסדר גודל של חודש. הוספת תשלומים
                  ומערכת חיצונית שצריך להעביר אליה נתונים מקרבת את זה לסדר הגודל
                  של דומינו. שני קהלים שצריכים דברים שונים מאותם נתונים זה סדר
                  גודל אחר לגמרי.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} className="card-fancy p-7">
              <h3 className="text-xl font-semibold">
                אותה שיטה, על שלושת הפרויקטים
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                כדי שהטווח יהיה קונקרטי, כך הוא מיתרגם לשלושת הפרויקטים שכבר
                נבנו. אלה קני מידה, לא הצעת מחיר לפרויקט שלכם.
              </p>
              <dl className="mt-6 divide-y divide-gray-100">
                {pricingExamples.map((item) => (
                  <div key={item.name} className="py-4">
                    <dt className="font-semibold">{item.name}</dt>
                    <dd className="mt-1 text-[15px] leading-relaxed text-muted">
                      {item.duration} — {item.range}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-[15px] leading-relaxed text-muted">
                אם הצעה שקיבלתם רחוקה מהקנה מידה הזה, השאלה השימושית היא מה יש
                בה שלא היה בפרויקט של דומינו.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="process" className="border-y border-gray-100 bg-muted-light">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <Reveal as="h2" className="text-3xl font-semibold">
              איך מתחילים
            </Reveal>
            <Reveal delay={80} className="mt-4 max-w-3xl leading-relaxed text-muted">
              <p>
                אין תהליך מכירה ואין טופס סינון אוטומטי. שלושה שלבים, וכל אחד מהם
                מסתיים במשהו כתוב שאתם יכולים להסתכל עליו ולהחליט.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <Reveal
                  as="article"
                  key={step.title}
                  delay={index * 110}
                  className="rounded-2xl border border-gray-100 bg-white/70 p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-sm font-semibold text-accent-deep">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {step.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="business" className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-[1fr_1.05fr] md:items-start">
            <Reveal className="card-fancy relative overflow-hidden p-8">
              <div
                aria-hidden="true"
                className="blob blob-accent-2 -top-16 -right-12 h-44 w-44 opacity-40"
              />
              <p className="eyebrow-badge">פרטי העסק</p>
              <h2 className="mt-5 text-xl font-semibold">
                WizeApps מופעל על ידי{" "}
                <span className="text-gradient">{companyName}</span>
              </h2>
              <dl className="mt-6 divide-y divide-gray-100">
                {businessDetails.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-1 py-3 sm:grid-cols-[9.5rem_1fr] sm:gap-4"
                  >
                    <dt className="text-[13px] font-semibold uppercase tracking-wide text-muted">
                      {item.label}
                    </dt>
                    <dd className="leading-relaxed">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-accent link-underline"
                          dir="ltr"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 font-medium text-accent"
              >
                <span className="link-underline">{author.name} בלינקדאין</span>
                <span aria-hidden="true" className="arrow-nudge">
                  &larr;
                </span>
              </a>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="text-xl font-semibold">עם מי אתם מדברים</h2>
              <div className="mt-3 space-y-4 leading-relaxed text-muted">
                <p>
                  WizeApps היא חברת תוכנה שיושבת ב{streetAddress} ב{locality}.
                  כשאתם כותבים לנו, אתם מדברים ישירות עם המהנדס שיבנה את המוצר
                  שלכם — ההחלטות נסגרות כבר בשיחה הראשונה, ושום דבר לא הולך
                  לאיבוד בדרך בין איש מכירות, מנהל פרויקט ומפתח.
                </p>
                <p>
                  האדם הזה הוא אוהד, המייסד. הוא קורא את מה שמגיע ל-
                  <a
                    href={`mailto:${siteEmail}`}
                    className="text-accent hover:underline"
                  >
                    {siteEmail}
                  </a>{" "}
                  והוא זה שתהיו איתו בשיחה. אין מנהל תיקים באמצע ואין תור קריאות.
                  מי שמעדיף לדבר ולא לכתוב מוזמן לטלפון{" "}
                  <a href={phoneHref} className="text-accent hover:underline" dir="ltr">
                    {phoneDisplay}
                  </a>
                  .
                </p>
                <p>
                  אנחנו בישראל ועובדים לפי שעון ישראל, בעברית ובאנגלית, בכתב
                  ובשיחות. כל מה שכתוב כאן אפשר לבדוק: הכתובת היא משרד אמיתי,
                  הפרופיל בלינקדאין פומבי, ושלושת האתרים למעלה עומדים באוויר
                  ברגע זה.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="faq" className="border-y border-gray-100 bg-muted-light">
          <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
            <Reveal as="h2" className="text-3xl font-semibold">
              שאלות נפוצות
            </Reveal>
            <div className="mt-8 grid gap-4">
              {hebrewFaqs.map((item, index) => (
                <Reveal
                  key={item.question}
                  delay={index * 80}
                  className="rounded-xl border border-gray-100 bg-white p-5"
                >
                  <h3 className="font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.answer}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-foreground text-white">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <Reveal className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  השלב הבא
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                  יש לכם תהליך שחוזר על עצמו כל שבוע?
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-gray-300">
                  נתחיל ממיפוי קצר: איפה נאבד זמן, איפה נוצרות טעויות, ומה חייב
                  להיות בגרסה הראשונה כדי שהמערכת באמת תעבוד. אפשר לכתוב בעברית
                  ל-
                  <a
                    href={`mailto:${siteEmail}`}
                    className="font-medium text-white underline decoration-accent decoration-2 underline-offset-4"
                  >
                    {siteEmail}
                  </a>{" "}
                  או להתקשר ל-
                  <a
                    href={phoneHref}
                    dir="ltr"
                    className="font-medium text-white underline decoration-accent decoration-2 underline-offset-4"
                  >
                    {phoneDisplay}
                  </a>
                  .
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
