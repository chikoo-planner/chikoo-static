"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"

type Result = {
  deliverable: boolean | null
  message: string
  city?: string
  state?: string
  postOffice?: string
  codAvailable?: boolean
  estimatedDays?: string
}

function PinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

async function checkPincode(pincode: string): Promise<Result> {
  try {
    const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`, {
      signal: AbortSignal.timeout(6000),
    })
    const data = await res.json()
    const result = data?.[0]

    if (!result || result.Status === "Error" || !Array.isArray(result.PostOffice) || !result.PostOffice.length) {
      return { deliverable: false, message: "This pincode doesn't appear to be valid. Please check and try again." }
    }

    const po = result.PostOffice.find((p: Record<string, string>) => p.DeliveryStatus === "Delivery") ?? result.PostOffice[0]
    const canDeliver = po.DeliveryStatus === "Delivery"
    const city = po.District || po.Division || po.Name

    if (!canDeliver) {
      return {
        deliverable: false,
        city,
        state: po.State,
        message: `Sorry, India Post does not deliver to ${city}, ${po.State}. Please contact us on WhatsApp.`,
      }
    }

    return {
      deliverable: true,
      city,
      state: po.State,
      postOffice: po.Name,
      codAvailable: true,
      estimatedDays: "5–8 business days",
      message: `We deliver to ${city}, ${po.State}!`,
    }
  } catch {
    return { deliverable: null, message: "Unable to check right now. Please contact us on WhatsApp." }
  }
}

export default function DeliveryCheckModal({ onTriggerClick }: { onTriggerClick?: () => void } = {}) {
  const [open, setOpen] = useState(false)
  const [pincode, setPincode] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Result | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (pincode.length === 6) {
      setLoading(true)
      setResult(null)
      checkPincode(pincode).then((r) => {
        setResult(r)
        setLoading(false)
      })
    } else {
      setResult(null)
    }
  }, [pincode])

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 60)
      return () => clearTimeout(t)
    }
  }, [open])

  function handleClose() {
    setOpen(false)
    setPincode("")
    setResult(null)
  }

  const remaining = 6 - pincode.length

  return (
    <>
      <button
        onClick={() => { onTriggerClick?.(); setOpen(true) }}
        aria-label="Check delivery availability"
        className="inline-flex items-center gap-1.5 bg-white/15 text-white border border-white/30 text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/25 hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 active:scale-95 transition-all duration-150 whitespace-nowrap"
      >
        <PinIcon className="w-4 h-4 shrink-0 text-brand-300" />
        Check Delivery
      </button>

      {open && createPortal(
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
            <div className="bg-gradient-to-r from-brand-800 to-brand-700 px-6 py-5 text-cream">
              <button
                onClick={handleClose}
                aria-label="Close"
                className="absolute top-4 right-4 text-cream/60 hover:text-cream transition-colors text-xl leading-none"
              >
                ×
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-500/20 rounded-full flex items-center justify-center shrink-0">
                  <PinIcon className="w-5 h-5 text-brand-300" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold">Check Delivery</h2>
                  <p className="text-cream/60 text-xs mt-0.5">Enter your 6-digit pincode</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="relative mb-4">
                <input
                  ref={inputRef}
                  type="tel"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="_ _ _ _ _ _"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
                  className="w-full border-2 border-brand-100 focus:border-brand-500 rounded-xl px-4 py-3 text-sm font-mono tracking-[0.4em] focus:outline-none transition-colors placeholder:tracking-widest placeholder:text-ink/20 pr-10"
                />

                {loading && (
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="w-4 h-4 border-2 border-brand-200 border-t-brand-500 rounded-full animate-spin block" />
                  </div>
                )}

                {!loading && pincode.length > 0 && pincode.length < 6 && (
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-ink/30 font-sans pointer-events-none">
                    {remaining}
                  </div>
                )}
              </div>

              {result && !loading && (
                <div className={`rounded-xl overflow-hidden border text-sm ${
                  result.deliverable === true  ? "border-green-200"
                  : result.deliverable === false ? "border-red-200"
                  : "border-amber-200"
                }`}>
                  <div className={`px-4 py-3 flex items-start gap-2.5 font-semibold leading-snug ${
                    result.deliverable === true  ? "bg-green-50 text-green-800"
                    : result.deliverable === false ? "bg-red-50 text-red-800"
                    : "bg-amber-50 text-amber-800"
                  }`}>
                    <span className="text-base mt-px shrink-0">
                      {result.deliverable === true ? "✅" : result.deliverable === false ? "❌" : "⚠️"}
                    </span>
                    {result.message}
                  </div>

                  {result.deliverable === true && (
                    <div className="divide-y divide-gray-50 bg-white">
                      {result.postOffice && (
                        <div className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-ink/60">
                          <span className="shrink-0">📮</span>
                          <span>
                            Delivery via{" "}
                            <span className="font-medium text-ink/80">{result.postOffice} Post Office</span>
                          </span>
                        </div>
                      )}

                      {result.estimatedDays && (
                        <div className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-ink/60">
                          <span className="shrink-0">🚚</span>
                          <span>
                            Estimated delivery in{" "}
                            <span className="font-medium text-ink/80">{result.estimatedDays}</span>
                          </span>
                        </div>
                      )}

                      {result.codAvailable && (
                        <div className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-green-700 font-medium">
                          <span className="shrink-0">💵</span>
                          Cash on Delivery available
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              <p className="text-xs text-ink/30 text-center mt-5 flex items-center justify-center gap-1.5">
                <span>🇮🇳</span> Ships pan-India via India Post
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
