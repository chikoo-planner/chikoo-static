"use client"

import { motion } from "framer-motion"
import type { Bundle } from "@/data/bundles"
import type { Product } from "@/data/products"
import { WHATSAPP_NUMBER } from "@/lib/constants"

const tierStyles: Record<Bundle["tier"], { card: string; badge: string; button: string }> = {
  basic: {
    card: "border-brand-200 bg-white",
    badge: "bg-brand-100 text-brand-700",
    button: "bg-brand-800 text-cream hover:bg-brand-700",
  },
  growth: {
    card: "border-brand-400 bg-white ring-2 ring-brand-400",
    badge: "bg-brand-500 text-white",
    button: "bg-brand-500 text-white hover:bg-brand-600",
  },
  premium: {
    card: "border-brand-600 bg-brand-50",
    badge: "bg-brand-700 text-white",
    button: "bg-brand-700 text-white hover:bg-brand-800",
  },
  ultimate: {
    card: "border-amber-400 bg-amber-50 ring-2 ring-amber-400",
    badge: "bg-amber-500 text-white",
    button: "bg-amber-500 text-white hover:bg-amber-600",
  },
}

export default function BundleCard({
  bundle,
  products,
  index,
}: {
  bundle: Bundle
  products: Product[]
  index: number
}) {
  const included = bundle.productIds.map((id) => products.find((p) => p.id === id)!).filter(Boolean)
  const styles = tierStyles[bundle.tier]

  const waText = encodeURIComponent(
    `Hi! I'm interested in the CHIKOO ${bundle.name}. Could you please share details and pricing?`
  )
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl border-2 p-6 flex flex-col ${styles.card}`}
    >
      {bundle.highlight && (
        <span
          className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${styles.badge}`}
        >
          {bundle.highlight}
        </span>
      )}

      <div className="mb-4">
        <p className="text-xs tracking-[0.25em] uppercase text-muted font-medium mb-1">
          {bundle.tier === "basic" && "Starter"}
          {bundle.tier === "growth" && "Growth"}
          {bundle.tier === "premium" && "Premium"}
          {bundle.tier === "ultimate" && "Ultimate"}
        </p>
        <h3 className="font-display text-2xl text-brand-900 font-light">{bundle.name}</h3>
        <p className="text-muted text-sm mt-1">{bundle.tagline}</p>
      </div>

      <div className="flex items-end gap-3 mb-5">
        <span className="text-3xl font-bold text-brand-900">
          ₹{bundle.price.toLocaleString("en-IN")}
        </span>
        <span className="text-muted line-through text-sm mb-1">
          ₹{bundle.originalPrice.toLocaleString("en-IN")}
        </span>
        <span className="text-green-600 text-sm font-semibold mb-1">
          Save {bundle.savingsPercent}%
        </span>
      </div>

      <div className="space-y-2 mb-5 flex-1">
        <p className="text-xs uppercase tracking-widest text-muted font-medium mb-3">Includes</p>
        {included.map((p) => (
          <div key={p.id} className="flex items-center gap-2">
            <span className="text-lg">{p.emoji}</span>
            <span className="text-sm text-brand-800">{p.name}</span>
          </div>
        ))}
      </div>

      {bundle.freebies && bundle.freebies.length > 0 && (
        <div className="border-t border-amber-200 pt-4 mb-5 space-y-1.5">
          {bundle.freebies.map((f) => (
            <div key={f} className="flex items-center gap-2">
              <span className="text-amber-500 text-sm">★</span>
              <span className="text-sm text-amber-800 font-medium">{f}</span>
            </div>
          ))}
        </div>
      )}

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full text-center py-3 rounded-xl text-sm font-semibold transition-colors ${styles.button}`}
      >
        Enquire on WhatsApp
      </a>
    </motion.div>
  )
}
