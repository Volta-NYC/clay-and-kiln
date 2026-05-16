import type { Metadata } from "next"
import { studio, hours } from "@/lib/data/studio"
import PageHeader from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import InquiryForm from "@/lib/components/inquiry-form"
import {
  PhoneIcon,
  PinIcon,
  ClockIcon,
  InstagramIcon,
  FacebookIcon,
  LinkIcon,
} from "@/lib/components/icons"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Clay and Kiln Studio in West Brighton, Staten Island. Call the studio or send us a message.",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd love to hear from you."
        intro={`${studio.bookingNote} ${studio.responseNote}`}
      />

      <section className="container-page py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Info column */}
          <Reveal className="flex flex-col gap-6">
            <a
              href={studio.phoneHref}
              className="group rounded-xl2 border border-ink/10 bg-clay p-7 text-cream transition-transform duration-300 hover:-translate-y-1"
            >
              <PhoneIcon className="h-8 w-8 text-cream/80" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream/70">
                Call the studio
              </p>
              <p className="mt-1 font-display text-3xl">{studio.phone}</p>
            </a>

            <div className="rounded-xl2 border border-ink/10 bg-sand p-7">
              <PinIcon className="h-8 w-8 text-clay" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink/55">
                Location
              </p>
              <p className="mt-1 font-display text-xl text-ink">
                {studio.neighborhood}, {studio.city}, {studio.state}
              </p>
            </div>

            <div className="rounded-xl2 border border-ink/10 bg-sand p-7">
              <div className="flex items-center gap-2 text-ink/55">
                <ClockIcon className="h-5 w-5 text-clay" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Hours
                </p>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span className="text-ink/70">{h.day}</span>
                    <span
                      className={
                        h.closed ? "text-ink/35" : "font-medium text-ink"
                      }
                    >
                      {h.open}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <SocialBtn href={studio.socials.instagram} label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </SocialBtn>
              <SocialBtn href={studio.socials.facebook} label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </SocialBtn>
              <SocialBtn href={studio.socials.linktree} label="Linktree">
                <LinkIcon className="h-5 w-5" />
              </SocialBtn>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal
            delay={120}
            className="rounded-xl2 border border-ink/10 bg-cream p-7 shadow-soft sm:p-9"
          >
            <h2 className="font-display text-3xl text-ink">Send a message</h2>
            <p className="mt-2 text-ink/65">
              For parties and reservations, please call — it&apos;s the fastest
              way to check availability.
            </p>
            <div className="mt-7">
              <InquiryForm
                submitLabel="Send Message"
                successTitle="Thanks for submitting!"
                successBody={`We've received your message. ${studio.responseNote}`}
                fields={[
                  { name: "firstName", label: "First name", required: true, half: true },
                  { name: "lastName", label: "Last name", required: true, half: true },
                  { name: "phone", label: "Phone", type: "tel", required: true, half: true },
                  { name: "email", label: "Email", type: "email", half: true },
                  {
                    name: "message",
                    label: "How can we help?",
                    type: "textarea",
                    required: true,
                  },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function SocialBtn({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-clay hover:bg-clay hover:text-cream"
    >
      {children}
    </a>
  )
}
