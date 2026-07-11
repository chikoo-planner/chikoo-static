import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about CHIKOO — our story, our craft, and our passion for helping people plan their lives beautifully.",
}

export default function AboutPage() {
  return (
    <div>
      <div className="bg-brand-900 py-20 text-center">
        <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">Our story</p>
        <h1 className="font-display text-5xl sm:text-6xl text-cream font-light">About CHIKOO</h1>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        <section>
          <h2 className="font-display text-3xl text-brand-900 font-light mb-5">
            Born from a love of intentional living
          </h2>
          <div className="space-y-4 text-muted text-base leading-relaxed">
            <p>
              CHIKOO started as a personal project — a search for stationery that felt as good to use as it looked on a shelf. We couldn&apos;t find it, so we made it.
            </p>
            <p>
              Every planner, journal, and notepad in our collection is designed with one goal: to help you show up for your life with intention, creativity, and a little bit of beauty.
            </p>
            <p>
              We believe that the tools you use every day deserve to be beautiful. Not in a fussy way — in a quiet, tactile, &ldquo;I can&apos;t stop touching this paper&rdquo; kind of way.
            </p>
          </div>
        </section>

        <section className="border-t border-brand-100 pt-12">
          <h2 className="font-display text-3xl text-brand-900 font-light mb-8">
            What we stand for
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Craftsmanship", body: "Premium materials, thoughtful layouts, and finishes that feel as good as they look." },
              { title: "Intentionality", body: "Every design decision is made to help you think clearly and plan with purpose." },
              { title: "Joy", body: "Stationery should make you smile. Life is too short for boring notebooks." },
            ].map((v) => (
              <div key={v.title} className="bg-brand-100/50 rounded-xl p-6">
                <h3 className="font-display text-xl text-brand-900 mb-2">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-brand-100 pt-12 text-center">
          <p className="font-display text-2xl text-brand-900 font-light mb-6">
            Ready to plan beautifully?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/collections"
              className="px-8 py-3 bg-brand-800 text-cream text-sm rounded-lg hover:bg-brand-700 transition-colors"
            >
              Shop Collections
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-brand-800 text-brand-800 text-sm rounded-lg hover:bg-brand-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
