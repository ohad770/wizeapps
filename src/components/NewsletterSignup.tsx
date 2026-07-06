export default function NewsletterSignup() {
  return (
    <form
      action="mailto:hello@wizeapps.agency?subject=WizeApps%20build%20notes%20signup"
      method="post"
      encType="text/plain"
      className="rounded-2xl border border-accent/20 bg-white p-5"
    >
      <h2 className="text-sm font-semibold">Build notes</h2>
      <p className="mt-2 text-sm text-muted leading-relaxed">
        Occasional notes on small business software, automation, and MVP
        decisions.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row md:flex-col">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="min-h-11 rounded-full border border-gray-200 px-4 text-sm outline-none transition-colors focus:border-accent"
        />
        <button
          type="submit"
          className="min-h-11 rounded-full bg-foreground px-5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Join the list
        </button>
      </div>
    </form>
  );
}
