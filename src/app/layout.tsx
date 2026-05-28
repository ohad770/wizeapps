import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WizeApps — Your idea works. It just doesn't exist yet.",
  description:
    "We turn business problems into working digital products — in weeks, not months. No tech jargon. No wasted features. Just a system that does what you actually need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5204280332214793"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
    </html>
  );
}
