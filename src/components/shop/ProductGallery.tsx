"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const t = setInterval(() => setActive((prev) => (prev + 1) % images.length), 3500)
    return () => clearInterval(t)
  }, [images.length])

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-brand-50">
        {images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`${name} — photo ${i + 1}`}
              fill
              className="object-cover object-center"
              sizes="(max-width:640px) 100vw, 320px"
            />
          </div>
        ))}
      </div>

      {/* Dot navigation */}
      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === active ? "bg-brand-500 w-4" : "bg-brand-200"
              }`}
              aria-label={`Photo ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
