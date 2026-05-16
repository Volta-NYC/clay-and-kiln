import type { Metadata } from "next"
import Image from "next/image"
import { museStudio } from "@/lib/data/studio"
import PageHeader from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import { ArrowIcon } from "@/lib/components/icons"

export const metadata: Metadata = {
  title: "Muse West Brighton",
  description:
    "Muse West Brighton is the sister studio to Clay and Kiln — an all-inclusive craft studio on Forest Avenue offering stained glass, wind chimes, glass-blown ornaments and more.",
}

const crafts = [
  {
    title: "Stained glass",
    body: "Design and assemble your own luminous stained glass pieces.",
  },
  {
    title: "Wind chimes",
    body: "Craft a wind chime to bring color and sound to any porch or garden.",
  },
  {
    title: "Glass-blown ornaments",
    body: "Make keepsake glass-blown ornaments you'll treasure for years.",
  },
]

export default function MusePage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Sister Studio"
        title="Muse West Brighton."
        intro="The same all-inclusive, no-reservation spirit as Clay and Kiln — with a whole new world of crafts to explore."
      />

      <section className="container-page py-24">
        <Reveal className="grid items-center gap-12 overflow-hidden rounded-xl2 border border-ink/10 bg-sand lg:grid-cols-2">
          <div className="relative h-72 lg:h-full lg:min-h-[420px]">
            <Image
              src="/images/mosaic-tiles.jpg"
              alt="Colorful mosaic tiles at Muse West Brighton"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="p-8 sm:p-12">
            <p className="eyebrow">On Forest Avenue</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              A craft studio next door.
            </h2>
            <p className="mt-6 leading-relaxed text-ink/70">
              {museStudio.description}
            </p>
            <a
              href={museStudio.url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-8"
            >
              Visit the Muse website
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </section>

      <section className="bg-sand py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What you can make</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              A wide assortment of crafts.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {crafts.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 90}
                className="rounded-xl2 border border-ink/10 bg-cream p-8"
              >
                <h3 className="font-display text-2xl text-ink">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/65">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <Reveal className="rounded-xl2 bg-glaze px-8 py-14 text-center text-cream shadow-lift sm:px-14">
          <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
            Explore both studios and find your creative side.
          </h2>
          <a
            href={museStudio.url}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            Let&apos;s go to Muse
            <ArrowIcon className="h-4 w-4" />
          </a>
        </Reveal>
      </section>
    </>
  )
}
