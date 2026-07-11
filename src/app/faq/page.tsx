import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about CHIKOO planners, shipping, orders, and more.",
}

const faqs = [
  {
    q: "Do you ship across India?",
    a: "Yes! We ship to all major cities and towns across India. Delivery typically takes 5–7 business days. We also offer express shipping for select pin codes.",
  },
  {
    q: "What materials are your planners made from?",
    a: "Our planners use premium 90–120 GSM paper, designed to be fountain-pen friendly with minimal bleed-through. Covers are made from durable art card or faux leather depending on the product line.",
  },
  {
    q: "Can I get a custom or personalised planner?",
    a: "Absolutely! We offer personalisation for bulk orders (10+ pieces). Reach out to us on WhatsApp or via the Contact page and we'll work out the details with you.",
  },
  {
    q: "How do I place an order?",
    a: "You can enquire about any product directly through WhatsApp or the Contact form. We'll connect with you to confirm your order and arrange payment.",
  },
  {
    q: "Do you accept returns or exchanges?",
    a: "We accept returns for manufacturing defects within 7 days of delivery. Please send us photos of the issue on WhatsApp and we'll arrange a replacement or refund.",
  },
  {
    q: "Are your products available in stores?",
    a: "Currently we operate online only. This lets us keep our prices fair and quality high. We're exploring retail partnerships — watch this space!",
  },
  {
    q: "Do you deliver to my pincode?",
    a: "Use the \"Check Delivery\" button in the header to instantly check delivery availability for your pincode via India Post.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, bank transfer, and all major debit/credit cards. Payment details are shared once you confirm your order with us.",
  },
]

export default function FAQPage() {
  return (
    <div>
      <div className="bg-brand-900 py-20 text-center">
        <p className="text-brand-500 text-xs tracking-[0.3em] uppercase mb-3">Got questions?</p>
        <h1 className="font-display text-5xl text-cream font-light">Frequently Asked Questions</h1>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border border-brand-100 rounded-xl overflow-hidden bg-white"
            >
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-brand-50 transition-colors">
                <span className="font-medium text-ink text-sm">{faq.q}</span>
                <span className="text-brand-500 text-lg shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-5 text-muted text-sm leading-relaxed border-t border-brand-100 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-14 text-center bg-brand-100/50 rounded-xl p-8">
          <p className="font-display text-2xl text-brand-900 font-light mb-2">Still have questions?</p>
          <p className="text-muted text-sm mb-6">We&apos;re happy to help — just reach out.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brand-800 text-cream text-sm rounded-lg hover:bg-brand-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
