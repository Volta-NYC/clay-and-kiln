import Link from "next/link"
import Image from "next/image"
import {
  studio,
  highlights,
  experiences,
  hours,
  hoursNote,
  workshops,
} from "@/lib/data/studio"
import Reveal from "@/lib/components/reveal"
import CtaBanner from "@/lib/components/cta-banner"
import { ArrowIcon, ClockIcon, highlightIcons } from "@/lib/components/icons"

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/studio-hero.jpg"
            alt="Painters at work inside Clay and Kiln Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25" />
        </div>
        <div className="container-page flex min-h-[100svh] flex-col justify-center py-28 text-cream">
          <p
            className="eyebrow !text-clay-light animate-fade-up"
          >
            {studio.neighborhood} · {studio.city}, {studio.state}
          </p>
          <h1
            className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] animate-fade-up sm:text-6xl md:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            <span className="md:hidden">Where everyone is an artist.</span>
            <span className="hero-typewriter hidden md:inline-block">
              Where everyone is an artist.
            </span>
          </h1>
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80 animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            An all-inclusive pottery painting studio. No reservations, no studio
            fees — just walk in, pick a piece, and let the clay do the rest.
          </p>
          <div
            className="mt-9 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Link href="/visit" className="btn-primary">
              Plan Your Visit
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <a
              href={studio.workshopsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream/10"
            >
              Browse Workshops
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b border-ink/10 bg-cream">
        <div className="container-page grid gap-px overflow-hidden py-2 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => {
            const Icon = highlightIcons[h.icon]
            return (
              <Reveal
                key={h.title}
                delay={i * 80}
                className="px-2 py-10 sm:px-6"
              >
                <Icon className="h-9 w-9 text-clay" />
                <h3 className="mt-4 font-display text-xl text-ink">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {h.body}
                </p>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Intro / About */}
      <section className="container-page grid items-center gap-14 py-24 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-xl2 shadow-soft">
            <Image
              src="/images/studio-portrait.jpg"
              alt="A finished piece being painted at Clay and Kiln"
              width={1800}
              height={1012}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-clay px-6 py-5 text-cream shadow-lift sm:block">
            <p className="font-display text-3xl">Est. {studio.established}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/75">
              {studio.neighborhood}
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">What is Clay and Kiln?</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            A communal space for every kind of maker.
          </h2>
          <p className="mt-6 leading-relaxed text-ink/70">{studio.intro}</p>
          <p className="mt-4 leading-relaxed text-ink/70">{studio.mission}</p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-clay link-underline"
          >
            More about our studio
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* Experiences */}
      <section className="bg-sand py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Ways to create</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Find the experience that fits you.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {experiences.map((exp, i) => (
              <Reveal
                key={exp.slug}
                delay={i * 90}
                as="article"
                className="group flex flex-col rounded-xl2 border border-ink/10 bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <h3 className="font-display text-2xl text-ink">{exp.name}</h3>
                <p className="mt-2 text-ink/70">{exp.summary}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/55">
                  {exp.description}
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-sage">
                  For {exp.forWho}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="container-page grid gap-14 py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">When we&apos;re here</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Open paint, open doors.
          </h2>
          <p className="mt-5 leading-relaxed text-ink/70">
            Drop by any time during open hours — no booking needed. {hoursNote}
          </p>
          <Link href="/visit" className="btn-ghost mt-7">
            Visit details
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-xl2 border border-ink/10 bg-cream p-2 shadow-soft">
            <div className="flex items-center gap-3 rounded-t-[1.4rem] bg-ink px-6 py-5 text-cream">
              <ClockIcon className="h-5 w-5 text-clay-light" />
              <span className="font-display text-lg">Studio Hours</span>
            </div>
            <ul>
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between border-b border-ink/8 px-6 py-4 last:border-0"
                >
                  <span className="font-semibold text-ink">{h.day}</span>
                  <span
                    className={
                      h.closed
                        ? "text-sm font-medium text-ink/40"
                        : "text-sm font-medium text-clay"
                    }
                  >
                    {h.open}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Workshops preview */}
      <section className="bg-ink py-24 text-cream">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow !text-clay-light">Upcoming workshops</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Guided sessions, all supplies included.
              </h2>
            </div>
            <Link
              href="/workshops"
              className="inline-flex items-center gap-2 text-sm font-semibold text-clay-light link-underline"
            >
              All workshops
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {workshops.map((w, i) => (
              <Reveal
                key={w.title}
                delay={i * 100}
                as="article"
                className="flex flex-col rounded-xl2 border border-cream/15 bg-cream/[0.04] p-8"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-light">
                  {w.date}
                </span>
                <h3 className="mt-3 font-display text-2xl">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  {w.description}
                </p>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cream link-underline"
                >
                  Get tickets
                  <ArrowIcon className="h-4 w-4" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
