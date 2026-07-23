import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { collections } from "@/data/collections"
import { products } from "@/data/products"
import ProductCard from "@/components/shop/ProductCard"

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const collection = collections.find((c) => c.slug === slug)
  return {
    title: collection ? collection.name : "Collection",
    description: collection?.description,
  }
}

export default async function CollectionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const collection = collections.find((c) => c.slug === slug)
  if (!collection) notFound()

  const collectionProducts = products.filter((p) =>
    collection.productIds.includes(p.id)
  )

  return (
    <div>
      <div className="bg-brand-900 py-20 text-center px-4">
        <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">Collection</p>
        <h1 className="font-display text-5xl text-cream font-light mb-3">{collection.name}</h1>
        <p className="text-white/60 max-w-sm mx-auto text-sm leading-relaxed">{collection.description}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {collectionProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collectionProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted py-12">Products coming soon.</p>
        )}
      </div>

      <div className="text-center pb-16">
        <Link href="/collections" className="text-brand-500 text-sm hover:underline">
          ← Back to all collections
        </Link>
      </div>
    </div>
  )
}
