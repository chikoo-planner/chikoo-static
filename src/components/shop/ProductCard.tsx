"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import type { Product } from "@/data/products"
import { WHATSAPP_NUMBER } from "@/lib/constants"
import ProductGallery from "./ProductGallery"

const ProductCover = dynamic(() => import("./ProductCover"), { ssr: false })

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const [showPhotos, setShowPhotos] = useState(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const waText = encodeURIComponent(
    `Hi! I'm interested in the CHIKOO ${product.name} (₹${product.price}). Could you please share availability and ordering details?`
  )
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-100 hover:shadow-lg transition-shadow flex flex-col group"
    >
      {/* Image area */}
      <div className="relative">
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: showPhotos ? "3/4" : "1/1" }}
        >
          {showPhotos ? (
            <ProductGallery images={product.images} name={product.name} />
          ) : (
            <div className="w-full h-full">
              {mounted
                ? <ProductCover productId={product.id} />
                : <div className="w-full h-full bg-brand-50" />}
            </div>
          )}
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setShowPhotos(!showPhotos)}
          className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded-full bg-white/90 text-brand-700 border border-brand-200 shadow-sm hover:bg-brand-50 transition-colors backdrop-blur-sm"
        >
          {showPhotos ? "View Cover" : "See Photos"}
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Name + price row */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display text-xl text-brand-900 font-light leading-tight">
            {product.name}
          </h3>
          <div className="shrink-0 text-right">
            <p className="text-2xl font-bold text-brand-900 leading-none">
              ₹{product.price}
            </p>
            <p className="text-xs text-muted mt-0.5">per unit</p>
          </div>
        </div>

        <p className="text-brand-500 text-xs font-semibold italic mb-2">{product.tagline}</p>
        <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{product.description}</p>

        {/* Tags */}
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

        {/* CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center py-3 bg-brand-800 text-cream text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors tracking-wide"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </motion.div>
  )
}
