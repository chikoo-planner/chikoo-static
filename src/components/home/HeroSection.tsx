"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-brand-900">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800/90 to-brand-900/95" />

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-brand-300 text-xs tracking-[0.3em] uppercase mb-6"
        >
          Premium Stationery & Planners
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-cream leading-tight tracking-wide mb-6"
        >
          Plan Your Life Beautifully
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-brand-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Premium planners and stationery crafted for the intentional life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/collections"
            className="px-8 py-3.5 bg-brand-500 text-brand-900 font-medium rounded hover:bg-brand-300 transition-colors tracking-wide text-sm"
          >
            Shop Collections
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 border border-brand-500/50 text-cream rounded hover:border-brand-500 hover:bg-brand-800/50 transition-colors tracking-wide text-sm"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-brand-300/60 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-6 bg-gradient-to-b from-brand-500/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
