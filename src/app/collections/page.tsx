import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/products"

export const metadata: Metadata = {
  title: "Collections",
  description: "Browse CHIKOO's full range of premium planners, trackers, and journals.",
}

const categoryOrder = [
  { slug: "planners", label: "Planners" },
  { slug: "trackers", label: "Trackers" },
  { slug: "journals", label: "Journals" },
]

function discountPct(mrp: number, price: number) {
  return Math.round(((mrp - price) / mrp) * 100)
}

export default function CollectionsPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-brand-900 py-20 text-center px-4">
        <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">Curated for you</p>
        <h1 className="font-display text-5xl text-cream font-light mb-3">Our Collection</h1>
        <p className="text-white/60 max-w-sm mx-auto text-sm leading-relaxed">
          Six beautifully designed stationery products, each built for a specific purpose in your life.
        </p>
      </div>

      {/* Products grouped by category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {categoryOrder.map(({ slug, label }) => {
          const catProducts = products.filter((p) => p.collectionSlug === slug)
          if (catProducts.length === 0) return null
          return (
            <section key={slug}>
              {/* Category label */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-display text-3xl text-brand-900 font-light">{label}</h2>
                <div className="flex-1 h-px bg-brand-200" />
                <span className="text-muted text-xs">{catProducts.length} product{catProducts.length > 1 ? "s" : ""}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catProducts.map((product, i) => (
                  <Link
                    key={product.id}
                    href="/shop"
                    className="group bg-white rounded-2xl overflow-hidden shadow-md border border-brand-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
                    style={{
                      animationDelay: `${i * 80}ms`,
                    }}
                  >
                    {/* Image */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-brand-50">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent" />

                      {/* Discount badge */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-rose-500 text-white text-xs font-bold shadow">
                          {discountPct(product.mrp, product.price)}% OFF
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-display text-xl text-brand-900 font-light leading-snug flex-1">
                          {product.name}
                        </h3>
                        <div className="shrink-0 text-right">
                          <p className="text-lg font-bold text-brand-900 leading-none">₹{product.price}</p>
                          <p className="text-xs text-muted line-through mt-0.5">₹{product.mrp}</p>
                        </div>
                      </div>
                      <p className="text-brand-500 text-xs italic mb-3">{product.tagline}</p>

                      <div className="flex flex-wrap gap-1.5 mb-5 flex-1">
                        {product.bestFor.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="w-full text-center py-2.5 bg-brand-800 text-cream text-sm font-semibold rounded-xl group-hover:bg-brand-700 transition-colors tracking-wide">
                        View in Shop →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
