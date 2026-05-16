import type { Metadata } from "next"
import { studio } from "@/lib/data/studio"
import PageHeader from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import InquiryForm from "@/lib/components/inquiry-form"
import { PhoneIcon } from "@/lib/components/icons"

export const metadata: Metadata = {
  title: "Parties & Events",
  description:
    "Host birthdays, showers, team outings, fundraisers and class trips at Clay and Kiln Studio — in studio or off-site.",
}

const occasions = [
  {
    title: "Birthday parties",
    body: "Celebrate with a hands-on, all-ages painting party your guests will remember.",
  },
  {
    title: "Showers & celebrations",
    body: "Bridal showers, baby showers and milestone moments, made creative.",
  },
  {
    title: "Team & group outings",
    body: "A relaxed, creative break for coworkers, clubs and friend groups.",
  },
  {
    title: "Fundraisers & class trips",
    body: "Creative events for schools and organizations, in studio or brought to you.",
  },
]

export default function PartiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Parties & Events"
        title="Celebrate something — hands deep in clay."
        intro="From birthdays to fundraisers, we host private events in studio and off-site. Every detail is tailored over a quick phone call."
      />

      <section className="container-page py-24">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Occasions we host</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Made for groups of every kind.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {occasions.map((o, i) => (
            <Reveal
              key={o.title}
              delay={i * 80}
              className="rounded-xl2 border border-ink/10 bg-cream p-8"
            >
              <h3 className="font-display text-2xl text-ink">{o.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/65">{o.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Booking note */}
      <section className="bg-ink py-20 text-cream">
        <div className="container-page flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Reveal className="max-w-xl">
            <p className="eyebrow !text-clay-light">Booking a party</p>
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              Parties are booked by phone.
            </h2>
            <p className="mt-3 text-cream/75">{studio.bookingNote}</p>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={studio.phoneHref}
              className="inline-flex items-center gap-3 rounded-full bg-clay px-7 py-4 font-display text-2xl text-cream transition-transform duration-300 hover:-translate-y-0.5"
            >
              <PhoneIcon className="h-6 w-6" />
              {studio.phone}
            </a>
          </Reveal>
        </div>
      </section>

      {/* Fundraiser / class trip inquiry */}
      <section className="container-page py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Fundraisers & class trips</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Tell us about your event.
            </h2>
            <p className="mt-6 leading-relaxed text-ink/70">
              Planning a fundraiser or class trip? Share a few details and our
              team will reach out to design the perfect creative event — hosted
              in the studio or brought to your location.
            </p>
            <p className="mt-4 text-sm text-ink/55">{studio.responseNote}</p>
          </Reveal>
          <Reveal delay={120} className="rounded-xl2 border border-ink/10 bg-sand p-7 sm:p-9">
            <InquiryForm
              submitLabel="Send Inquiry"
              successTitle="Thanks for reaching out!"
              successBody="We've received your event details and will be in touch as soon as possible to plan everything with you."
              fields={[
                { name: "firstName", label: "First name", required: true, half: true },
                { name: "lastName", label: "Last name", required: true, half: true },
                { name: "phone", label: "Phone", type: "tel", required: true, half: true },
                {
                  name: "bestTime",
                  label: "Best day & time to be called",
                  half: true,
                },
                {
                  name: "eventType",
                  label: "What kind of event is this?",
                  type: "select",
                  required: true,
                  options: [
                    "Fundraiser",
                    "Class trip",
                    "Birthday party",
                    "Shower / celebration",
                    "Team / group outing",
                    "Other",
                  ],
                },
                {
                  name: "groupSize",
                  label: "How many are in your group?",
                  half: true,
                },
                {
                  name: "location",
                  label: "In studio or off-site?",
                  type: "select",
                  options: ["In studio", "Off-site", "Not sure yet"],
                  half: true,
                },
                {
                  name: "details",
                  label: "Anything else we should know?",
                  type: "textarea",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
