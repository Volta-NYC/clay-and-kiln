"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { navLinks, studio } from "@/lib/data/studio"

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-cream/90 backdrop-blur-md"
          : "border-b border-transparent bg-cream"
      }`}
    >
      <nav className="container-page flex items-center justify-between gap-6 py-4">
        <Link href="/" aria-label={`${studio.name} home`} className="shrink-0">
          <Image
            src="/images/logo.png"
            alt={studio.name}
            width={571}
            height={215}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`link-underline text-sm font-semibold tracking-wide transition-colors ${
                    active ? "text-clay" : "text-ink/75 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={studio.phoneHref}
            className="text-sm font-semibold text-ink/70 transition-colors hover:text-clay"
          >
            {studio.phone}
          </a>
          <a
            href={studio.workshopsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !py-2.5 !text-xs"
          >
            Upcoming Workshops
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 top-[73px] bg-ink/30 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-x-0 origin-top border-b border-ink/10 bg-cream transition-all duration-300 ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                      active
                        ? "bg-clay/10 text-clay"
                        : "text-ink/80 hover:bg-ink/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li className="mt-3 flex flex-col gap-3 px-1">
              <a href={studio.phoneHref} className="btn-ghost">
                Call {studio.phone}
              </a>
              <a
                href={studio.workshopsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Upcoming Workshops
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
