import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WizeApps — Your idea works. It just doesn't exist yet.",
  description:
    "We turn business problems into working digital products — in weeks, not months. No tech jargon. No wasted features. Just a system that does what you actually need.",
  // Ownership verification only. The ad-serving script is loaded per-page on
  // content articles, not globally, to avoid ads on screens without
  // substantial publisher content (AdSense program policy).
  other: {
    "google-adsense-account": "ca-pub-5204280332214793",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
