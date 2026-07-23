"use client"

import { motion } from "framer-motion"
import type { Bundle } from "@/data/bundles"
import type { Product } from "@/data/products"
import { WHATSAPP_NUMBER } from "@/lib/constants"
import BundleComboImage from "./BundleComboImage"

const tierStyles: Record<Bundle["tier"], { card: string; badge: string; button: string; savingsBg: string }> = {
  basic: {
    card: "border-brand-200 bg-white",
    badge: "bg-brand-800 text-cream",
    button: "bg-brand-800 text-cream hover:bg-brand-700",
    savingsBg: "bg-brand-50 text-brand-700",
  },
  growth: {
    card: "border-brand-400 bg-white ring-1 ring-brand-300",
    badge: "bg-brand-500 text-white",
    button: "bg-brand-500 text-white hover:bg-brand-600",
    savingsBg: "bg-brand-50 text-brand-600",
  },
  premium: {
    card: "border-rose-300 bg-rose-50/40",
    badge: "bg-rose-500 text-white",
    button: "bg-rose-500 text-white hover:bg-rose-600",
    savingsBg: "bg-rose-50 text-rose-700",
  },
  ultimate: {
    card: "border-amber-400 bg-amber-50/60 ring-1 ring-amber-300",
    badge: "bg-amber-500 text-white",
    button: "bg-amber-500 text-white hover:bg-amber-600",
    savingsBg: "bg-amber-50 text-amber-700",
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
  const included = bundle.productIds
    .map((id) => products.find((p) => p.id === id)!)
    .filter(Boolean)

  const styles = tierStyles[bundle.tier]
  const savingsPct = Math.round((bundle.savings / bundle.originalPrice) * 100)

  const waText = encodeURIComponent(
    `Hi! I'm interested in the CHIKOO ${bundle.name} (₹${bundle.price.toLocaleString("en-IN")}). Could you please share details and ordering information?`
  )
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -5 }}
      className={`relative rounded-2xl border-2 overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-xl ${styles.card}`}
    >
      {/* Highlight badge */}
      {bundle.highlight && (
        <div className="absolute top-3 left-3 z-10">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow ${styles.badge}`}>
            {bundle.highlight}
          </span>
        </div>
      )}

      {/* Savings badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold shadow ${styles.savingsBg}`}>
          Save {savingsPct}%
        </span>
      </div>

      {/* Combo image */}
      <div className="px-3 pt-12 pb-2">
        <BundleComboImage products={included} />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs tracking-[0.25em] uppercase text-muted font-medium mb-1">
          {bundle.tier === "basic" && "Starter"}
          {bundle.tier === "growth" && "Growth"}
          {bundle.tier === "premium" && "Premium"}
          {bundle.tier === "ultimate" && "Ultimate"}
        </p>
        <h3 className="font-display text-2xl text-brand-900 font-light leading-tight mb-1">{bundle.name}</h3>
        <p className="text-muted text-sm mb-4">{bundle.tagline}</p>

        {/* Pricing */}
        <div className="flex items-end gap-3 mb-5 pb-4 border-b border-brand-100">
          <div>
            <p className="text-xs text-muted line-through leading-none mb-1">
              ₹{bundle.originalPrice.toLocaleString("en-IN")}
            </p>
            <span className="text-3xl font-bold text-brand-900 leading-none">
              ₹{bundle.price.toLocaleString("en-IN")}
            </span>
          </div>
          <span className="text-green-600 text-sm font-semibold mb-0.5">
            You save ₹{bundle.savings.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Included products */}
        <div className="space-y-2 mb-5 flex-1">
          <p className="text-xs uppercase tracking-widest text-muted font-medium mb-2">Includes</p>
          {included.map((p) => (
            <div key={p.id} className="flex items-center gap-2.5">
              <span className="text-base">{p.emoji}</span>
              <span className="text-sm text-brand-800">{p.name}</span>
              <span className="ml-auto text-xs text-muted">₹{p.price}</span>
            </div>
          ))}
        </div>

        {/* Freebies */}
        {bundle.freebies && bundle.freebies.length > 0 && (
          <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 mb-5 space-y-1.5">
            {bundle.freebies.map((f) => (
              <div key={f} className="flex items-center gap-2">
                <span className="text-amber-500">★</span>
                <span className="text-sm text-amber-800 font-medium">{f}</span>
              </div>
            ))}
          </div>
        )}

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full text-center py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] ${styles.button}`}
        >
          Enquire on WhatsApp
        </a>
      </div>
    </motion.div>
  )
}
