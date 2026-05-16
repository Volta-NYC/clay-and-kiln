type PageHeaderProps = {
  eyebrow: string
  title: string
  intro?: string
}

export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-sand">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-clay/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-sage/15 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative py-20 sm:py-24">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-ink animate-fade-up sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70 animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {intro}
          </p>
        )}
      </div>
    </section>
  )
}
