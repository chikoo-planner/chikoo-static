"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { Product } from "@/data/products"
import { WHATSAPP_NUMBER } from "@/lib/constants"
import AnimatedProductImage from "./AnimatedProductImage"

type Phase = "cover" | "photo"

function DiscountBadge({ mrp, price }: { mrp: number; price: number }) {
  const pct = Math.round(((mrp - price) / mrp) * 100)
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-rose-500 text-white text-xs font-bold tracking-wide shadow">
      {pct}% OFF
    </span>
  )
}

export default function ProductCard({
  product,
  index,
}: {
  product: Product
  index: number
}) {
  const [override, setOverride] = useState<Phase | null>(null)
  const [currentPhase, setCurrentPhase] = useState<Phase>("cover")

  const waText = encodeURIComponent(
    `Hi! I'm interested in the CHIKOO ${product.name} (₹${product.price}). Could you please share availability and ordering details?`
  )
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`

  function handleToggle() {
    const next: Phase = (override ?? currentPhase) === "photo" ? "cover" : "photo"
    setOverride(next)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md border border-brand-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      {/* Image area */}
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-50">
        <AnimatedProductImage
          product={product}
          override={override}
          onPhaseChange={(p) => setCurrentPhase(p)}
        />

        {/* Discount badge */}
        <div className="absolute top-3 left-3 z-10">
          <DiscountBadge mrp={product.mrp} price={product.price} />
        </div>

        {/* Toggle button */}
        <button
          onClick={handleToggle}
          className="absolute top-3 right-3 z-10 text-xs px-2.5 py-1 rounded-full bg-white/90 text-brand-700 border border-brand-200 shadow-sm hover:bg-white transition-colors backdrop-blur-sm"
        >
          {(override ?? currentPhase) === "photo" ? "View Art" : "See Photo"}
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-display text-xl text-brand-900 font-light leading-tight flex-1">
            {product.name}
          </h3>
          <div className="shrink-0 text-right">
            <p className="text-xl font-bold text-brand-900 leading-none">₹{product.price}</p>
            <p className="text-xs text-muted line-through mt-0.5">₹{product.mrp}</p>
          </div>
        </div>

        <p className="text-brand-500 text-xs font-medium italic mb-2">{product.tagline}</p>
        <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{product.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.bestFor.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center py-3 bg-brand-800 text-cream text-sm font-semibold rounded-xl hover:bg-brand-700 active:scale-[0.98] transition-all tracking-wide"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </motion.div>
  )
}
