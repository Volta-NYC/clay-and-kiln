import Link from "next/link"
import { hours, navLinks, studio } from "@/lib/data/studio"
import { InstagramIcon, FacebookIcon, LinkIcon } from "@/lib/components/icons"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 bg-ink text-cream/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <p className="font-display text-2xl text-cream">{studio.name}</p>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            {studio.tagline} Established {studio.established} in{" "}
            {studio.neighborhood}, {studio.city}.
          </p>
          <div className="mt-6 flex gap-3">
            <SocialLink href={studio.socials.instagram} label="Instagram">
              <InstagramIcon className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={studio.socials.facebook} label="Facebook">
              <FacebookIcon className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={studio.socials.linktree} label="Linktree">
              <LinkIcon className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-light">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline text-cream/70 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-light">
            Visit & Hours
          </h3>
          <a
            href={studio.phoneHref}
            className="mt-5 block text-lg font-semibold text-cream transition-colors hover:text-clay-light"
          >
            {studio.phone}
          </a>
          <ul className="mt-4 space-y-1.5 text-sm text-cream/70">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className={h.closed ? "text-cream/40" : ""}>
                  {h.open}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {studio.name}. All rights reserved.
          </span>
          <Link
            href="https://nyc.voltanpo.org"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-cream"
          >
            Website made by @VoltaNYC
          </Link>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-clay hover:bg-clay hover:text-cream"
    >
      {children}
    </a>
  )
}
