import Link from "next/link"
import { ArrowIcon } from "@/lib/components/icons"

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-4 font-display text-6xl text-ink sm:text-7xl">404</h1>
      <p className="mt-4 max-w-md text-ink/65">
        This piece never made it out of the kiln. Let&apos;s get you back to
        something we&apos;ve finished.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
        <ArrowIcon className="h-4 w-4" />
      </Link>
    </section>
  )
}
