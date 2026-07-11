import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { collections } from "@/data/collections"

export const metadata: Metadata = {
  title: "Collections",
  description: "Browse CHIKOO's curated collections of premium planners, journals, and stationery.",
}

export default function CollectionsPage() {
  return (
    <div>
      <div className="bg-brand-900 py-20 text-center">
        <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">Curated for you</p>
        <h1 className="font-display text-5xl text-cream font-light">Our Collections</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col) => (
            <Link key={col.slug} href={`/collections/${col.slug}`} className="group block">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-100 mb-4">
                {col.coverImage ? (
                  <Image
                    src={col.coverImage}
                    alt={col.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl text-brand-300 font-light">
                      {col.name[0]}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-brand-900/30 transition-colors" />
              </div>
              <h3 className="font-display text-xl text-brand-900 group-hover:text-brand-500 transition-colors">
                {col.name}
              </h3>
              {col.description && (
                <p className="text-muted text-sm mt-1 line-clamp-2">{col.description}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
