"use client";

import { useEffect } from "react";

// The root layout renders <html lang="en"> for the whole app. This page-level
// override keeps crawlers and assistive tech from reading the Hebrew page as
// English (the RTL direction alone does not change the document language).
export default function HtmlLang({ lang, dir }: { lang: string; dir: "rtl" | "ltr" }) {
  useEffect(() => {
    const el = document.documentElement;
    const prevLang = el.lang;
    const prevDir = el.dir;
    el.lang = lang;
    el.dir = dir;
    return () => {
      el.lang = prevLang;
      el.dir = prevDir;
    };
  }, [lang, dir]);
  return null;
}
