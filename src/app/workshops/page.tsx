import type { Metadata } from "next"
import Image from "next/image"
import { studio, workshops } from "@/lib/data/studio"
import PageHeader from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import CtaBanner from "@/lib/components/cta-banner"
import { ArrowIcon } from "@/lib/components/icons"

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Themed, hands-on pottery and craft workshops at Clay and Kiln Studio. All supplies included — seats are limited.",
}

export default function WorkshopsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Workshops"
        title="Themed sessions, guided start to finish."
        intro="Throughout the year we host hands-on workshops with everything supplied. Seats are limited and new dates are released regularly."
      />

      <section className="container-page py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">On the calendar</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Upcoming workshops.
            </h2>
          </div>
          <a
            href={studio.workshopsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-clay link-underline"
          >
            See the full calendar
            <ArrowIcon className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {workshops.map((w, i) => (
            <Reveal
              key={w.title}
              delay={i * 90}
              as="article"
              className="group flex flex-col rounded-xl2 border border-ink/10 bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-clay/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-clay">
                  {w.date}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl text-ink">{w.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/65">
                {w.description}
              </p>
              <a
                href={w.url}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6 self-start"
              >
                Get tickets
                <ArrowIcon className="h-4 w-4" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Flyer / let's paint */}
      <section className="bg-sand py-24">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-xl2 bg-cream p-3 shadow-soft">
            <Image
              src="/images/lets-paint-flyer.png"
              alt="Clay and Kiln Studio workshop flyer"
              width={1545}
              height={2000}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full rounded-2xl object-contain"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Let&apos;s paint</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              There&apos;s always something new in the kiln.
            </h2>
            <p className="mt-6 leading-relaxed text-ink/70">
              From seasonal suncatchers to one-off craft nights, our workshop
              line-up changes with the calendar. Tickets are released regularly
              and seats fill quickly — follow along to catch the next one.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={studio.workshopsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Browse all workshops
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href={studio.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Follow on Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        heading="Want a private workshop?"
        body="We can build a custom guided session for your group, celebration or organization. Call the studio to plan the details."
      />
    </>
  )
}
