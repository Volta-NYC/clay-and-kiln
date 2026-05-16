import type { Metadata } from "next"
import { Fraunces, Nunito_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import { studio } from "@/lib/data/studio"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"],
})

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clayandkilnstudio.com"),
  title: {
    default: `${studio.name} | Pottery Painting in Staten Island, NY`,
    template: `%s | ${studio.name}`,
  },
  description:
    "Clay and Kiln is an all-inclusive pottery painting studio in West Brighton, Staten Island. No reservations, no studio fees — walk in and create.",
  keywords: [
    "pottery painting",
    "Staten Island pottery",
    "West Brighton studio",
    "ceramics workshop",
    "paint your own pottery",
  ],
  openGraph: {
    title: `${studio.name} | Pottery Painting in Staten Island`,
    description: studio.tagline,
    type: "website",
    images: ["/images/studio-hero.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-sm focus:text-cream"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
