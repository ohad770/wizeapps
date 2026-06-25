type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative animated backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-accent-soft/70 via-white to-white"
      />
      <div aria-hidden="true" className="blob blob-accent -top-24 -left-16 h-72 w-72" />
      <div aria-hidden="true" className="blob blob-accent-2 -top-10 right-0 h-64 w-64" />

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-14 md:pt-32 md:pb-20">
        {eyebrow ? (
          <p
            className="eyebrow-badge"
            style={{ animation: "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            {eyebrow}
          </p>
        ) : null}
        <h1
          className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl"
          style={{ animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.08s both" }}
        >
          {title}
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl"
          style={{ animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.16s both" }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
