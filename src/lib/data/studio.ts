// Central content layer for Clay and Kiln Studio.
// All facts are sourced from scraped material in `raw messy data/`.

export const studio = {
  name: "Clay and Kiln Studio",
  shortName: "Clay & Kiln",
  tagline: "An all-inclusive pottery painting studio in Staten Island.",
  established: 2020,
  neighborhood: "West Brighton",
  city: "Staten Island",
  state: "New York",
  phone: "646-661-1171",
  phoneHref: "tel:+16466611171",
  workshopsUrl: "https://linktr.ee/clayandkilnstudio",
  socials: {
    facebook: "https://facebook.com/clayandkilnstudio",
    instagram: "https://instagram.com/clayandkilnstudio",
    linktree: "https://linktr.ee/clayandkilnstudio",
  },
  intro:
    "Clay and Kiln is an all-inclusive pottery painting studio nestled in the heart of West Brighton, in Staten Island. Styled with our painters in mind, we offer an extensive collection of paints, glazes, ceramic, workshops, and more. We have amassed a large inventory of both fun and functional pieces — we hope to inspire the artist in you.",
  mission:
    "At Clay and Kiln Studio, our mission is to create a safe, communal space for all kinds of artists — from the novice to the professional. We are committed to our open-paint, all-inclusive model: no reservations required, no studio fees. Our attentive team provides on-the-spot instruction so that every painter achieves their best end result.",
  responseNote: "Please allow 48 hours for a response.",
  bookingNote:
    "Parties and reservations cannot be booked online. To check date and time availability, please call the studio.",
} as const

export type DayHours = {
  day: string
  open: string
  closed?: boolean
}

export const hours: DayHours[] = [
  { day: "Monday", open: "11am – 5pm" },
  { day: "Tuesday", open: "Closed", closed: true },
  { day: "Wednesday", open: "Closed", closed: true },
  { day: "Thursday", open: "2pm – 9pm" },
  { day: "Friday", open: "2pm – 9pm" },
  { day: "Saturday", open: "11am – 7pm" },
  { day: "Sunday", open: "11am – 6pm" },
]

export const hoursNote = "Last paint session ends thirty minutes before close."

export type Highlight = {
  title: string
  body: string
  icon: "palette" | "open" | "guide" | "kiln"
}

export const highlights: Highlight[] = [
  {
    title: "No reservations",
    body: "Walk in any time we're open. Our open-paint model means a seat is always waiting for you.",
    icon: "open",
  },
  {
    title: "No studio fees",
    body: "All-inclusive pricing. Pick a piece, grab your paints, and create — everything you need is covered.",
    icon: "palette",
  },
  {
    title: "On-the-spot instruction",
    body: "Our attentive team guides every painter, from first-timers to seasoned makers, to their best result.",
    icon: "guide",
  },
  {
    title: "We fire it for you",
    body: "Leave your piece with us. We glaze-fire it in the kiln so it comes home food-safe and forever.",
    icon: "kiln",
  },
]

export type Experience = {
  slug: string
  name: string
  summary: string
  description: string
  forWho: string
}

export const experiences: Experience[] = [
  {
    slug: "open-paint",
    name: "Open Paint",
    summary: "Drop in, pick a piece, and paint at your own pace.",
    description:
      "Our signature experience. Choose from a large inventory of fun and functional ceramic pieces, settle in with our extensive collection of paints and glazes, and let our team guide you. No booking, no fees — just you and the clay.",
    forWho: "Walk-ins, solo painters, families, friends",
  },
  {
    slug: "workshops",
    name: "Seasonal Workshops",
    summary: "Themed, hands-on sessions led by our studio artists.",
    description:
      "Throughout the year we host themed workshops — suncatchers, ash trays, holiday pieces and more. Each is a guided, hands-on session with everything supplied. Seats are limited and tickets are released regularly.",
    forWho: "Anyone looking for a guided creative night out",
  },
  {
    slug: "parties",
    name: "Parties & Events",
    summary: "Birthdays, showers, team outings and celebrations.",
    description:
      "Book the studio for a private celebration. We host birthdays, bridal and baby showers, team-building outings and more — in studio or off-site. Parties are arranged by phone so we can tailor every detail.",
    forWho: "Groups, celebrations, corporate outings",
  },
  {
    slug: "fundraisers",
    name: "Fundraisers & Class Trips",
    summary: "Creative events for schools and organizations.",
    description:
      "Partner with us for a fundraiser or class trip. We design creative, all-ages events for schools, scout troops and community groups — hosted in the studio or brought to your location.",
    forWho: "Schools, nonprofits, community organizations",
  },
]

export type Workshop = {
  title: string
  date: string
  description: string
  url: string
}

// Sourced from the studio's Linktree event listings.
export const workshops: Workshop[] = [
  {
    title: "Patriotic Suncatcher Workshop",
    date: "May 20",
    description:
      "Get crafty and make your own patriotic suncatcher to brighten up any window this Memorial Day.",
    url: "https://www.eventbrite.com/e/patriotic-suncatcher-workshop-tickets-1989539057879?aff=oddtdtcreator",
  },
  {
    title: "Ash Tray Workshop",
    date: "May 20",
    description:
      "Get creative and craft your own unique ash tray in this fun, hands-on workshop where you can chill and make something cool.",
    url: "https://www.eventbrite.com/e/ash-tray-workshop-tickets-1989539161188?aff=oddtdtcreator",
  },
]

export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: "Do I need a reservation to paint?",
    answer:
      "No. Clay and Kiln runs on an open-paint model — just walk in any time we're open and a seat will be ready for you. Note that the last paint session begins thirty minutes before close.",
  },
  {
    question: "Are there studio fees?",
    answer:
      "No studio fees. We're all-inclusive: the price of your piece covers your paints, glazes, instruction and kiln firing.",
  },
  {
    question: "How long until I can take my piece home?",
    answer:
      "Painted pieces are left with us to be glaze-fired in the kiln. Firing takes time — our team will let you know when your finished piece is ready for pickup.",
  },
  {
    question: "Can I book a party online?",
    answer:
      "Parties and reservations cannot be booked online. Please call the studio at 646-661-1171 to check date and time availability so we can tailor your event.",
  },
  {
    question: "Do you host class trips and fundraisers?",
    answer:
      "Yes. We host fundraisers and class trips both in studio and off-site. Reach out through our contact page and we'll be in touch to plan the details.",
  },
  {
    question: "Is the studio good for beginners?",
    answer:
      "Absolutely. Our space welcomes every kind of artist, from the complete novice to the professional, and our team offers on-the-spot instruction throughout your visit.",
  },
]

export const museStudio = {
  name: "Muse West Brighton",
  url: "http://www.musewestbrighton.com/",
  street: "Forest Avenue",
  description:
    "Our sister studio on Forest Avenue. Muse is an all-inclusive, no-reservation-required craft studio offering a wide assortment of crafts — from stained glass to wind chimes to glass-blown ornaments.",
}

export type NavLink = { label: string; href: string }

export const navLinks: NavLink[] = [
  { label: "Our Studio", href: "/about" },
  { label: "Visit", href: "/visit" },
  { label: "Workshops", href: "/workshops" },
  { label: "Parties & Events", href: "/parties" },
  { label: "Muse Studio", href: "/muse" },
  { label: "Contact", href: "/contact" },
]
