"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import DeliveryCheckModal from "@/components/ui/DeliveryCheckModal"
import { WHATSAPP_NUMBER } from "@/lib/constants"

const navLinks = [
  { label: "Collections", href: "/collections" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand-800 border-b border-brand-700/60">

      {/* ── DESKTOP BAR ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:flex items-center h-16 gap-4">

        <Link href="/" aria-label="CHIKOO Home" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="CHIKOO"
            width={200}
            height={46}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="flex-1 flex items-center justify-center min-w-0">
          <ul className="flex items-center gap-5 lg:gap-7 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0 flex items-center gap-1.5 lg:gap-2">
          <DeliveryCheckModal />

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-brand-500 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-brand-500/90 active:scale-95 transition-all whitespace-nowrap shadow-sm"
          >
            Enquire
          </a>
        </div>
      </div>

      {/* ── MOBILE BAR ──────────────────────────────────────────── */}
      <div className="md:hidden px-4 h-14 flex items-center justify-between">
        <Link href="/" aria-label="CHIKOO Home">
          <Image src="/logo.svg" alt="CHIKOO" width={120} height={30} priority className="h-7 w-auto" />
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="p-2 text-white"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* ── MOBILE DRAWER ───────────────────────────────────────── */}
      {menuOpen && (
        <nav className="md:hidden border-t border-white/10 bg-brand-900 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-white/75 hover:text-white transition-colors py-2.5 border-b border-white/5 last:border-0"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-4 mt-1 border-t border-white/10">
            <DeliveryCheckModal onTriggerClick={() => setMenuOpen(false)} />

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-500 text-white text-sm font-semibold px-4 py-2.5 rounded-full w-fit hover:bg-brand-500/90 transition-colors"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
