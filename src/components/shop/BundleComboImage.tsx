"use client"

import Image from "next/image"
import type { Product } from "@/data/products"

export default function BundleComboImage({ products }: { products: Product[] }) {
  const imgs = products.map((p) => ({ src: p.images[0], name: p.name }))
  const count = imgs.length

  if (count === 2) {
    return (
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-brand-50 to-cream">
        <div className="absolute inset-2 grid grid-cols-2 gap-2">
          {imgs.slice(0, 2).map((img) => (
            <div key={img.src} className="relative rounded-lg overflow-hidden shadow-md">
              <Image src={img.src} alt={img.name} fill className="object-cover object-top" sizes="200px" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (count === 3) {
    return (
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-brand-50 to-cream">
        <div className="absolute inset-2 grid grid-cols-2 gap-2" style={{ gridTemplateRows: "1fr 1fr" }}>
          {/* Left: full-height first image */}
          <div className="relative rounded-lg overflow-hidden shadow-md row-span-2">
            <Image src={imgs[0].src} alt={imgs[0].name} fill className="object-cover object-top" sizes="160px" />
          </div>
          {/* Right: two stacked images */}
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <Image src={imgs[1].src} alt={imgs[1].name} fill className="object-cover object-top" sizes="160px" />
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <Image src={imgs[2].src} alt={imgs[2].name} fill className="object-cover object-top" sizes="160px" />
          </div>
        </div>
      </div>
    )
  }

  if (count === 4) {
    return (
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-brand-50 to-cream">
        <div className="absolute inset-2 grid grid-cols-2 grid-rows-2 gap-2">
          {imgs.slice(0, 4).map((img) => (
            <div key={img.src} className="relative rounded-lg overflow-hidden shadow-md">
              <Image src={img.src} alt={img.name} fill className="object-cover object-top" sizes="160px" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  /* 5 or 6 products */
  return (
    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-brand-50 to-cream">
      <div className="absolute inset-2 grid grid-cols-3 grid-rows-2 gap-1.5">
        {imgs.slice(0, 6).map((img) => (
          <div key={img.src} className="relative rounded-md overflow-hidden shadow-sm">
            <Image src={img.src} alt={img.name} fill className="object-cover object-top" sizes="120px" />
          </div>
        ))}
      </div>
    </div>
  )
}
