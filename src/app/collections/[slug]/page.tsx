import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { collections } from "@/data/collections"
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants"

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const collection = collections.find((c) => c.slug === params.slug)
  return { title: collection?.name ?? "Collection" }
}

export default function CollectionDetailPage({ params }: { params: { slug: string } }) {
  const collection = collections.find((c) => c.slug === params.slug)
  if (!collection) notFound()

  return (
    <div>
      <div className="bg-brand-900 py-20 text-center px-4">
        <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">Collection</p>
        <h1 className="font-display text-5xl text-cream font-light">{collection.name}</h1>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-brand-100 mb-8">
          {collection.coverImage ? (
            <Image src={collection.coverImage} alt={collection.name} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-6xl text-brand-300 font-light">
                {collection.name[0]}
              </span>
            </div>
          )}
        </div>

        <p className="text-muted text-base leading-relaxed mb-8">{collection.description}</p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${WHATSAPP_DEFAULT_MESSAGE} I'm interested in the ${collection.name} collection.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-brand-800 text-cream text-sm rounded-lg hover:bg-brand-700 transition-colors"
        >
          Enquire on WhatsApp
        </a>

        <div className="mt-6">
          <Link href="/collections" className="text-brand-500 text-sm hover:underline">
            ← Back to all collections
          </Link>
        </div>
      </div>
    </div>
  )
}
