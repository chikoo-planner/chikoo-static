"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Collection } from "@/data/collections"

export default function FeaturedCollections({ collections }: { collections: Collection[] }) {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">Curated for you</p>
          <h2 className="font-display text-4xl sm:text-5xl text-brand-900 font-light">
            Our Collections
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col, i) => (
            <motion.div
              key={col.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/collections/${col.slug}`} className="group block">
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
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/collections"
            className="inline-block px-8 py-3 border border-brand-800 text-brand-800 text-sm rounded hover:bg-brand-800 hover:text-cream transition-colors tracking-wide"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  )
}
