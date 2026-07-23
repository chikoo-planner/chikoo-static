"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { bundles } from "@/data/bundles"
import { products } from "@/data/products"

const tierLabel: Record<string, string> = {
  basic: "Starter",
  growth: "Growth",
  premium: "Premium",
  ultimate: "Ultimate",
}

const tierAccent: Record<string, string> = {
  basic: "border-brand-200",
  growth: "border-brand-400 ring-2 ring-brand-400",
  premium: "border-brand-600",
  ultimate: "border-amber-400 ring-2 ring-amber-400",
}

const tierBadge: Record<string, string> = {
  basic: "bg-brand-100 text-brand-700",
  growth: "bg-brand-500 text-white",
  premium: "bg-brand-700 text-white",
  ultimate: "bg-amber-500 text-white",
}

export default function ShopPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">Bundle & Save</p>
          <h2 className="font-display text-4xl sm:text-5xl text-brand-900 font-light">
            Planner Bundles
          </h2>
          <p className="text-muted mt-4 text-sm max-w-md mx-auto">
            Combine your planners and save up to 25%. Four tiers to match every lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {bundles.map((bundle, i) => {
            const included = bundle.productIds
              .map((id) => products.find((p) => p.id === id))
              .filter(Boolean) as (typeof products)[0][]

            return (
              <motion.div
                key={bundle.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl border-2 p-5 bg-white ${tierAccent[bundle.tier]}`}
              >
                {bundle.highlight && (
                  <span
                    className={`absolute -top-3 left-5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${tierBadge[bundle.tier]}`}
                  >
                    {bundle.highlight}
                  </span>
                )}

                <p className="text-xs tracking-[0.25em] uppercase text-muted font-medium mb-1">
                  {tierLabel[bundle.tier]}
                </p>
                <h3 className="font-display text-lg text-brand-900 font-light leading-tight mb-1">
                  {bundle.name}
                </h3>

                <div className="flex items-baseline gap-2 my-3">
                  <span className="text-2xl font-bold text-brand-900">
                    ₹{bundle.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-muted line-through text-xs">
                    ₹{bundle.originalPrice.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="space-y-1.5 mb-4">
                  {included.map((p) => (
                    <div key={p.id} className="flex items-center gap-2 text-sm text-brand-800">
                      <span>{p.emoji}</span>
                      <span>{p.name}</span>
                    </div>
                  ))}
                </div>

                <span className="inline-block text-xs font-semibold text-green-600">
                  Save {Math.round((bundle.savings / bundle.originalPrice) * 100)}%
                </span>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-block px-8 py-3 border border-brand-800 text-brand-800 text-sm rounded hover:bg-brand-800 hover:text-cream transition-colors tracking-wide"
          >
            View All Planners & Bundles
          </Link>
        </div>
      </div>
    </section>
  )
}
