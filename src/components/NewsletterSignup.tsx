export default function NewsletterSignup() {
  return (
    <div className="rounded-2xl border border-accent/20 bg-white p-5">
      <h2 className="text-sm font-semibold">Build notes</h2>
      <p className="mt-2 text-sm text-muted leading-relaxed">
        Occasional notes on small business software, automation, and MVP
        decisions. No signup form — send a short email and you are on the
        list.
      </p>
      <a
        href="mailto:hello@wizeapps.agency?subject=WizeApps%20build%20notes%20signup"
        className="mt-4 inline-flex min-h-11 items-center rounded-full bg-foreground px-5 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Email us to join
      </a>
    </div>
  );
}
