import type { Metadata } from "next"
import Image from "next/image"
import { studio, highlights, hoursNote } from "@/lib/data/studio"
import PageHeader from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import CtaBanner from "@/lib/components/cta-banner"
import { highlightIcons } from "@/lib/components/icons"

export const metadata: Metadata = {
  title: "Our Studio",
  description:
    "Clay and Kiln Studio is an all-inclusive pottery painting space in West Brighton, Staten Island — built for novices and professionals alike.",
}

const values = [
  {
    title: "Safe & communal",
    body: "A welcoming space designed for artists of every level to create side by side.",
  },
  {
    title: "Truly all-inclusive",
    body: "One price covers your piece, paints, glazes, guidance and kiln firing — no hidden studio fees.",
  },
  {
    title: "Always inspiring",
    body: "A large, ever-growing inventory of fun and functional ceramic pieces to choose from.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Studio"
        title="Built to inspire the artist in everyone."
        intro={studio.tagline}
      />

      <section className="container-page grid items-center gap-14 py-24 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">What is Clay and Kiln?</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            A pottery painting studio with painters in mind.
          </h2>
          <p className="mt-6 leading-relaxed text-ink/70">{studio.intro}</p>
        </Reveal>
        <Reveal delay={120} className="overflow-hidden rounded-xl2 shadow-soft">
          <Image
            src="/images/studio-hero.jpg"
            alt="Inside Clay and Kiln Studio"
            width={2400}
            height={1800}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-full w-full object-cover"
          />
        </Reveal>
      </section>

      <section className="bg-sand py-24">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal
            delay={120}
            className="order-2 overflow-hidden rounded-xl2 shadow-soft lg:order-1"
          >
            <Image
              src="/images/studio-portrait.jpg"
              alt="Hand-painting a ceramic piece"
              width={1800}
              height={1012}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <p className="eyebrow">Our mission</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Who we are.
            </h2>
            <p className="mt-6 leading-relaxed text-ink/70">{studio.mission}</p>
            <p className="mt-4 text-sm text-ink/55">{hoursNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-24">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What we stand for</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            The values behind the studio.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 90}
              className="rounded-xl2 border border-ink/10 bg-cream p-8"
            >
              <span className="font-display text-4xl text-clay/30">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-xl text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {v.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24 text-cream">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow !text-clay-light">The Clay and Kiln promise</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              What every visit includes.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => {
              const Icon = highlightIcons[h.icon]
              return (
                <Reveal
                  key={h.title}
                  delay={i * 80}
                  className="rounded-xl2 border border-cream/15 bg-cream/[0.04] p-7"
                >
                  <Icon className="h-9 w-9 text-clay-light" />
                  <h3 className="mt-4 font-display text-lg">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">
                    {h.body}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
