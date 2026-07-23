import type { Metadata } from "next"
import { products } from "@/data/products"
import { bundles } from "@/data/bundles"
import ProductCard from "@/components/shop/ProductCard"
import BundleCard from "@/components/shop/BundleCard"

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop CHIKOO premium planners and stationery. Individual products from ₹199. Bundle and save up to 25%.",
}

export default function ShopPage() {
  return (
    <div className="bg-cream">
      {/* Page header */}
      <div className="bg-brand-900 py-20 text-center px-4">
        <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">Premium stationery</p>
        <h1 className="font-display text-5xl text-cream font-light mb-4">Shop CHIKOO Planners</h1>
        <p className="text-white/60 max-w-md mx-auto text-sm leading-relaxed">
          Thoughtfully designed planners to help you organise your life, build better habits, and achieve your goals.
        </p>
      </div>

      {/* Quick price strip */}
      <div className="bg-white border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
            {products.map((p) => (
              <div key={p.id} className="flex items-center gap-2">
                <span className="text-lg">{p.emoji}</span>
                <div>
                  <p className="text-xs font-medium text-brand-900 leading-none">{p.name}</p>
                  <div className="flex items-center gap-1.5">
                    <p className="text-brand-500 font-bold text-sm leading-none">₹{p.price}</p>
                    <p className="text-muted line-through text-xs leading-none">₹{p.mrp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Individual products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">Pick your planner</p>
            <h2 className="font-display text-4xl text-brand-900 font-light">Individual Planners</h2>
            <p className="text-muted mt-3 text-sm max-w-lg mx-auto">
              Each planner is crafted for a specific purpose. Pick the one that fits your life right now.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-brand-200" />
      </div>

      {/* Bundle & Save */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">More value together</p>
            <h2 className="font-display text-4xl text-brand-900 font-light">Bundle & Save</h2>
            <p className="text-muted mt-3 text-sm max-w-lg mx-auto">
              Combine your favourite planners and save up to 25%. Each bundle is curated around a goal in life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bundles.map((b, i) => (
              <BundleCard key={b.id} bundle={b} products={products} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
