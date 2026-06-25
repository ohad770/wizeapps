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
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16">
      {eyebrow ? (
        <p className="text-sm font-semibold text-accent">{eyebrow}</p>
      ) : null}
      <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
        {title}
      </h1>
      <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
        {description}
      </p>
    </section>
  );
}
