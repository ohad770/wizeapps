import Script from "next/script";

/**
 * Loads the Google AdSense script. Rendered ONLY on pages that contain
 * substantial publisher content (resource articles), never globally — so ads
 * are not served on navigation, contact, legal, or error screens. This keeps
 * the site within the AdSense policy that prohibits ads on screens without
 * meaningful publisher content.
 */
export default function AdSense() {
  return (
    <Script
      id="adsbygoogle-init"
      async
      strategy="afterInteractive"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5204280332214793"
      crossOrigin="anonymous"
    />
  );
}
