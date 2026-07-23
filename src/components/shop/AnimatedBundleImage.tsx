"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { Product } from "@/data/products"

/* Per-slot slide-in and fan-out config */
type SlotCfg = { initial: object; fan: object }

function getSlotConfig(totalShown: number, i: number): SlotCfg {
  if (totalShown === 2) {
    return [
      { initial: { x: -130, rotate: -22, opacity: 0, scale: 0.75 }, fan: { x: -48, rotate: -9, opacity: 1, scale: 1 } },
      { initial: { x:  130, rotate:  22, opacity: 0, scale: 0.75 }, fan: { x:  48, rotate:  9, opacity: 1, scale: 1 } },
    ][i]
  }
  if (totalShown === 3) {
    return [
      { initial: { x: -150, rotate: -22, opacity: 0, scale: 0.75 }, fan: { x: -65, rotate: -11, opacity: 1, scale: 1 } },
      { initial: { y:  80,  rotate:   0, opacity: 0, scale: 0.55 }, fan: { y:   0, rotate:   0, opacity: 1, scale: 1.06 } },
      { initial: { x:  150, rotate:  22, opacity: 0, scale: 0.75 }, fan: { x:  65, rotate:  11, opacity: 1, scale: 1 } },
    ][i]
  }
  /* 4-6 products: simple stagger fade-up */
  return {
    initial: { y: 36, opacity: 0, scale: 0.88 },
    fan:     { y:  0, opacity: 1, scale: 1 },
  }
}

/* Final static grid once assembly is done */
function StaticGrid({ products }: { products: Product[] }) {
  const n = products.length
  if (n === 2) {
    return (
      <div className="grid grid-cols-2 gap-2 h-full">
        {products.map((p) => (
          <div key={p.id} className="relative rounded-lg overflow-hidden shadow-sm">
            <Image src={p.images[0]} alt={p.name} fill className="object-cover object-top" sizes="160px" />
          </div>
        ))}
      </div>
    )
  }
  if (n === 3) {
    return (
      <div className="grid grid-cols-2 gap-2 h-full" style={{ gridTemplateRows: "1fr 1fr" }}>
        <div className="relative rounded-lg overflow-hidden shadow-sm row-span-2">
          <Image src={products[0].images[0]} alt={products[0].name} fill className="object-cover object-top" sizes="160px" />
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-sm">
          <Image src={products[1].images[0]} alt={products[1].name} fill className="object-cover object-top" sizes="160px" />
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-sm">
          <Image src={products[2].images[0]} alt={products[2].name} fill className="object-cover object-top" sizes="160px" />
        </div>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-1.5 h-full">
      {products.slice(0, 6).map((p) => (
        <div key={p.id} className="relative rounded-md overflow-hidden shadow-sm">
          <Image src={p.images[0]} alt={p.name} fill className="object-cover object-top" sizes="110px" />
        </div>
      ))}
    </div>
  )
}

export default function AnimatedBundleImage({ products }: { products: Product[] }) {
  const [entered, setEntered] = useState(false)   // products slide in
  const [showStatic, setShowStatic] = useState(false) // dissolve to grid
  const ref = useRef<HTMLDivElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          // Small initial delay so the card is visible first
          setTimeout(() => setEntered(true), 180)
          // Switch to static grid after assembly
          setTimeout(() => setShowStatic(true), 2100)
        }
      },
      { threshold: 0.28 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const shown = Math.min(products.length, 3)
  const displayProducts = products.slice(0, shown)
  /* z-order for 3: left behind, center front, right mid */
  const zOrders = shown === 3 ? [1, 3, 2] : [1, 2]

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-brand-50 via-cream to-brand-100"
    >
      <AnimatePresence mode="wait">
        {!showStatic ? (
          <motion.div
            key="assembly"
            className="absolute inset-0 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55 }}
          >
            {displayProducts.map((product, i) => {
              const cfg = getSlotConfig(shown, i)
              const imgSize = shown <= 2 ? "44%" : "36%"

              return (
                <motion.div
                  key={product.id}
                  className="absolute rounded-xl overflow-hidden"
                  style={{
                    width: imgSize,
                    aspectRatio: "2/3",
                    zIndex: zOrders[i] ?? 1,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                  }}
                  initial={cfg.initial}
                  animate={entered ? cfg.fan : cfg.initial}
                  transition={{
                    duration: 0.55,
                    delay: entered ? i * 0.13 : 0,
                    ease: [0.34, 1.26, 0.64, 1], // spring-like overshoot
                  }}
                >
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover object-top"
                    sizes="150px"
                  />
                  {/* Bottom label */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/65 to-transparent pt-6 pb-1.5 px-1">
                    <p className="text-white text-center font-semibold leading-tight truncate" style={{ fontSize: 8 }}>
                      {product.name}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        ) : (
          <motion.div
            key="static"
            className="absolute inset-2"
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <StaticGrid products={products} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
