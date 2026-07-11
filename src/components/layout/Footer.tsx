import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_NUMBER, INSTAGRAM_URL, INSTAGRAM_HANDLE, CONTACT_EMAIL } from "@/lib/constants";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-cream mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/logo-light.svg"
              alt="CHIKOO"
              width={160}
              height={48}
              className="h-10 w-auto mb-3"
            />
            <p className="text-sm text-brand-300 leading-relaxed mb-5">
              Premium planners and stationery crafted for the intentional life.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="inline-flex items-center gap-2 text-sm text-brand-300 hover:text-brand-500 transition-colors"
            >
              <InstagramIcon />
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-300 mb-4">Explore</p>
            <ul className="space-y-2 text-sm">
              {[
                ["Collections", "/collections"],
                ["About Us", "/about"],
                ["Testimonials", "/testimonials"],
                ["FAQ", "/faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-brand-100 hover:text-brand-500 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Order */}
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-300 mb-4">Support</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-brand-100 hover:text-brand-500 transition-colors">
                  Help &amp; Support
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-brand-100 hover:text-brand-500 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-300 mb-4">Get in Touch</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-100 hover:text-brand-500 transition-colors"
            >
              WhatsApp: +91 9970309633
            </a>
            <p className="mt-2 text-sm text-brand-100">
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-brand-500 transition-colors">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-800 pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-brand-300">
          <span>© {new Date().getFullYear()} CHIKOO. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
