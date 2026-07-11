"use client"

import { motion } from "framer-motion"
import type { Testimonial } from "@/data/testimonials"

export default function TestimonialsStrip({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="py-24 bg-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">What they say</p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream font-light">
            Loved by Planners
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-brand-800/40 border border-brand-700/40 rounded-xl p-6"
            >
              <div className="text-brand-500 mb-4 text-sm tracking-wide">
                {"★".repeat(t.rating)}
              </div>
              <blockquote className="text-cream/90 text-sm leading-relaxed mb-5 font-light">
                &ldquo;{t.content}&rdquo;
              </blockquote>
              <div>
                <p className="text-cream text-sm font-medium">{t.authorName}</p>
                {t.location && (
                  <p className="text-brand-300 text-xs mt-0.5">{t.location}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
