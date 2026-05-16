import Link from "next/link"
import { studio } from "@/lib/data/studio"
import { ArrowIcon, PhoneIcon } from "@/lib/components/icons"
import Reveal from "@/lib/components/reveal"

type CtaBannerProps = {
  heading?: string
  body?: string
}

export default function CtaBanner({
  heading = "Ready to make something?",
  body = "No reservations, no studio fees. Just walk in during open hours and our team will help you create a piece you'll keep forever.",
}: CtaBannerProps) {
  return (
    <section className="container-page py-20">
      <Reveal className="relative overflow-hidden rounded-xl2 bg-clay px-8 py-14 text-cream shadow-lift sm:px-14 sm:py-16">
        <div
          className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-cream/10 blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-ink/15 blur-2xl"
          aria-hidden
        />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-cream/85">{body}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/visit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Plan Your Visit
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <a
              href={studio.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream/10"
            >
              <PhoneIcon className="h-4 w-4" />
              {studio.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
