"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"
import type { Product } from "@/data/products"

const ProductCover = dynamic(() => import("./ProductCover"), { ssr: false })

type Phase = "cover" | "photo"

interface Props {
  product: Product
  /** Optional external override — set by the toggle button in the parent card */
  override: Phase | null
  onPhaseChange?: (p: Phase) => void
}

export default function AnimatedProductImage({ product, override, onPhaseChange }: Props) {
  const [autoPhase, setAutoPhase] = useState<Phase>("cover")
  const containerRef = useRef<HTMLDivElement>(null)
  const triggered = useRef(false)
  const [activePhoto, setActivePhoto] = useState(0)
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  /* Trigger auto-reveal when card scrolls into view */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true

          // Preload real image silently
          const img = new window.Image()
          img.src = product.images[0]

          const t = setTimeout(() => {
            setAutoPhase("photo")
            onPhaseChange?.("photo")
          }, 1450)

          return () => clearTimeout(t)
        }
      },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [product.images, onPhaseChange])

  /* Effective phase: manual override wins, else auto */
  const phase: Phase = override ?? autoPhase

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <AnimatePresence mode="sync">
        {phase === "cover" ? (
          <motion.div
            key="cover"
            className="absolute inset-0"
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          >
            {/* Animated cover art — only render after hydration */}
            {mounted
              ? <ProductCover productId={product.id} />
              : <div className="w-full h-full bg-brand-50" />}

            {/* Shimmer sweep overlay */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.38) 50%, transparent 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmerSweep 2.8s ease-in-out infinite",
              }}
            />

            {/* Soft glow at top */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1/3 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.22) 0%, transparent 70%)",
                animation: "glowPulse 3s ease-in-out infinite",
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="photo"
            className="absolute inset-0"
            initial={{ opacity: 0, filter: "blur(10px)", scale: 1.04 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src={product.images[activePhoto]}
              alt={product.name}
              fill
              className="object-cover object-top"
              sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            />

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Dot nav */}
            {product.images.length > 1 && (
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActivePhoto(i) }}
                    aria-label={`Photo ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === activePhoto ? "bg-white w-5 h-1.5" : "bg-white/55 w-1.5 h-1.5"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
