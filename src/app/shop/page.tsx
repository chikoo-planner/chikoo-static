import type { Metadata } from "next"
import { products } from "@/data/products"
import { bundles } from "@/data/bundles"
import ProductCard from "@/components/shop/ProductCard"
import BundleCard from "@/components/shop/BundleCard"

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop CHIKOO premium planners and stationery. Choose individual planners or value bundle combos.",
}

export default function ShopPage() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-brand-900 py-20 text-center">
        <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">Premium stationery</p>
        <h1 className="font-display text-5xl text-cream font-light mb-4">Shop CHIKOO Planners</h1>
        <p className="text-white/60 max-w-md mx-auto text-sm leading-relaxed px-4">
          Thoughtfully designed planners to help you organise your life, build better habits, and achieve your goals.
        </p>
      </div>

      {/* Pricing summary strip */}
      <div className="bg-brand-500/10 border-y border-brand-500/20 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {products.map((p) => (
              <div key={p.id} className="flex items-center gap-2">
                <span className="text-lg">{p.emoji}</span>
                <div>
                  <p className="text-xs font-medium text-brand-900 leading-none">{p.name}</p>
                  <p className="text-brand-500 font-bold text-sm">₹{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Individual products */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">Pick your planner</p>
            <h2 className="font-display text-4xl text-brand-900 font-light">Individual Planners</h2>
            <p className="text-muted mt-3 text-sm max-w-lg mx-auto">
              Each planner is crafted for a specific purpose. Pick the one that fits your life right now.
              Click <strong>"See Photos"</strong> on any card to view real product photos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Bundle tiers */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">More value together</p>
            <h2 className="font-display text-4xl text-brand-900 font-light">Bundle & Save</h2>
            <p className="text-muted mt-3 text-sm max-w-lg mx-auto">
              Combine your favourite planners and save up to 25%. Choose the bundle that matches where you are in life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {bundles.map((b, i) => (
              <BundleCard key={b.id} bundle={b} products={products} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
