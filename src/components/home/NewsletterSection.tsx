"use client"

import { useState } from "react"
import { motion } from "framer-motion"

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "newsletter", email }),
      })
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">Stay inspired</p>
          <h2 className="font-display text-4xl text-brand-900 font-light mb-3">
            Join the CHIKOO Circle
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-8">
            New arrivals, planning tips, and exclusive offers — straight to your inbox.
          </p>

          {status === "success" ? (
            <p className="text-brand-800 font-medium">
              You&apos;re in! Thank you for subscribing.
            </p>
          ) : (
            <form
              name="newsletter"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="flex gap-2 max-w-sm mx-auto"
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-2.5 border border-brand-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-5 py-2.5 bg-brand-800 text-cream text-sm rounded-lg hover:bg-brand-700 transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {status === "loading" ? "…" : "Subscribe"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-red-500 text-xs mt-2">Something went wrong. Please try again.</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
