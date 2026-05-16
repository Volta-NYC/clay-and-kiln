import type { Metadata } from "next"
import { studio, hours, hoursNote, faqs } from "@/lib/data/studio"
import PageHeader from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import FaqAccordion from "@/lib/components/faq-accordion"
import CtaBanner from "@/lib/components/cta-banner"
import { ClockIcon, PhoneIcon, PinIcon } from "@/lib/components/icons"

export const metadata: Metadata = {
  title: "Visit the Studio",
  description:
    "Studio hours, location and what to expect on your visit to Clay and Kiln Studio in West Brighton, Staten Island.",
}

const steps = [
  {
    title: "Choose your piece",
    body: "Browse our large inventory of fun and functional ceramics and pick what speaks to you.",
  },
  {
    title: "Paint at your pace",
    body: "Settle in with our paints and glazes. Our team gives on-the-spot instruction whenever you want it.",
  },
  {
    title: "We fire it",
    body: "Leave your piece with us — we glaze-fire it in the kiln so it comes back glossy and food-safe.",
  },
  {
    title: "Take it home",
    body: "We'll let you know when your finished piece is ready to be picked up and treasured.",
  },
]

export default function VisitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Plan Your Visit"
        title="Everything you need for an easy first visit."
        intro="No reservations, no studio fees. Here's how a visit works and when our doors are open."
      />

      {/* Hours + info */}
      <section className="container-page grid gap-8 py-24 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
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
          <p className="mt-3 px-1 text-sm text-ink/55">{hoursNote}</p>
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-6">
          <div className="rounded-xl2 border border-ink/10 bg-sand p-7">
            <PinIcon className="h-8 w-8 text-clay" />
            <h3 className="mt-4 font-display text-xl text-ink">Where to find us</h3>
            <p className="mt-2 leading-relaxed text-ink/70">
              We&apos;re in the heart of {studio.neighborhood},{" "}
              {studio.city}, {studio.state}. Call the studio for directions and
              parking details before your visit.
            </p>
          </div>
          <div className="rounded-xl2 border border-ink/10 bg-sand p-7">
            <PhoneIcon className="h-8 w-8 text-clay" />
            <h3 className="mt-4 font-display text-xl text-ink">
              Questions before you come?
            </h3>
            <p className="mt-2 leading-relaxed text-ink/70">
              Reservations and parties are arranged by phone. Give us a call and
              our team will help you plan.
            </p>
            <a
              href={studio.phoneHref}
              className="mt-4 inline-flex items-center gap-2 font-display text-2xl text-clay"
            >
              {studio.phone}
            </a>
          </div>
        </Reveal>
      </section>

      {/* How a visit works */}
      <section className="bg-sand py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">How a visit works</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Four simple steps to your finished piece.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 90}
                className="rounded-xl2 border border-ink/10 bg-cream p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay font-display text-lg text-cream">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-24">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Good to know</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Frequently asked questions.
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-10">
          <FaqAccordion items={faqs} />
        </Reveal>
      </section>

      <CtaBanner
        heading="Come paint with us."
        body="Walk in during open hours — a seat and a fresh palette are always waiting."
      />
    </>
  )
}
