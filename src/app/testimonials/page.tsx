import type { Metadata } from "next"
import { testimonials } from "@/data/testimonials"

export const metadata: Metadata = {
  title: "Testimonials",
  description: "See what our customers are saying about CHIKOO planners and stationery.",
}

export default function TestimonialsPage() {
  return (
    <div>
      <div className="bg-brand-900 py-20 text-center">
        <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">What they say</p>
        <h1 className="font-display text-5xl text-cream font-light">Loved by Planners</h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-brand-100/40 border border-brand-100 rounded-xl p-6"
            >
              <div className="text-brand-500 mb-4 text-sm tracking-wide">
                {"★".repeat(t.rating)}
              </div>
              <blockquote className="text-ink/80 text-sm leading-relaxed mb-5 font-light">
                &ldquo;{t.content}&rdquo;
              </blockquote>
              <div>
                <p className="text-ink text-sm font-medium">{t.authorName}</p>
                {t.location && (
                  <p className="text-muted text-xs mt-0.5">{t.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
