"use client"

import { useState } from "react"

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const phone = String(data.get("phone") || "").trim()
    const message = String(data.get("message") || "").trim()

    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !/^[+\d][\d\s-]{6,}$/.test(phone) || message.length < 10) {
      setError("Please fill in your name, phone, a valid email, and a message of at least 10 characters.")
      return
    }
    setError(null)
    setStatus("loading")

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name,
          email,
          phone,
          message,
        }),
      })
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="text-brand-500 text-3xl mb-3">✓</div>
        <p className="font-medium text-ink">Thank you for your enquiry!</p>
        <p className="text-muted text-sm mt-1">We&apos;ll get back to you within 24 hours.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-brand-500 text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      name="contact"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink mb-1">
            Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            name="name"
            required
            aria-required="true"
            className="w-full px-3 py-2.5 border border-brand-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1">
            Phone <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            required
            aria-required="true"
            pattern="[+\d][\d\s\-]{6,}"
            className="w-full px-3 py-2.5 border border-brand-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-ink mb-1">
          Email <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          aria-required="true"
          className="w-full px-3 py-2.5 border border-brand-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-ink mb-1">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          required
          aria-required="true"
          placeholder="Tell us what you need…"
          className="w-full px-3 py-2.5 border border-brand-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white resize-none"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {status === "error" && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 bg-brand-800 text-cream rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  )
}
