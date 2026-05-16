"use client"

import { useState } from "react"
import { studio } from "@/lib/data/studio"
import { ArrowIcon, PhoneIcon } from "@/lib/components/icons"

type Field = {
  name: string
  label: string
  type?: "text" | "tel" | "email" | "textarea" | "select"
  required?: boolean
  options?: string[]
  half?: boolean
}

type InquiryFormProps = {
  fields: Field[]
  submitLabel: string
  successTitle: string
  successBody: string
}

export default function InquiryForm({
  fields,
  submitLabel,
  successTitle,
  successBody,
}: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false)

  // No public booking backend exists — the studio handles scheduling by phone.
  // Submitting validates input and surfaces the studio's phone-first guidance.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl2 border border-sage/40 bg-sage/10 p-8 text-center sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage text-cream">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
            <path
              d="M5 13l4 4 10-10"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl text-ink">{successTitle}</h3>
        <p className="mx-auto mt-3 max-w-md text-ink/70">{successBody}</p>
        <a
          href={studio.phoneHref}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-clay"
        >
          <PhoneIcon className="h-4 w-4" />
          Need a faster reply? Call {studio.phone}
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      {fields.map((field) => (
        <div
          key={field.name}
          className={field.half ? "sm:col-span-1" : "sm:col-span-2"}
        >
          <label
            htmlFor={field.name}
            className="mb-1.5 block text-sm font-semibold text-ink"
          >
            {field.label}
            {field.required && <span className="text-clay"> *</span>}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              rows={4}
              className="w-full rounded-2xl border border-ink/15 bg-cream px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-clay focus:ring-2 focus:ring-clay/20"
            />
          ) : field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              required={field.required}
              defaultValue=""
              className="w-full rounded-2xl border border-ink/15 bg-cream px-4 py-3 text-ink outline-none transition-colors focus:border-clay focus:ring-2 focus:ring-clay/20"
            >
              <option value="" disabled>
                Select an option
              </option>
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type ?? "text"}
              required={field.required}
              className="w-full rounded-2xl border border-ink/15 bg-cream px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-clay focus:ring-2 focus:ring-clay/20"
            />
          )}
        </div>
      ))}

      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          {submitLabel}
          <ArrowIcon className="h-4 w-4" />
        </button>
        <p className="mt-3 text-xs text-ink/50">{studio.responseNote}</p>
      </div>
    </form>
  )
}
