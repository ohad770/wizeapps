import { OG_SIZE, renderOgImage } from "@/lib/ogImage";

export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return renderOgImage({
    dir: "rtl",
    eyebrowLabel: "WizeApps בעברית",
    title: "פיתוח אתרים, אפליקציות ואוטומציות לעסקים",
    description:
      "מערכות הזמנות, טפסי קליטה, MVP וכלים פנימיים — פחות עבודה ידנית, יותר תהליך שעובד.",
    footerLeft: "wizeapps.agency/he",
    footerRight: "הזמנות · קליטת לידים · MVP",
    titleFontSize: 56,
  });
}
