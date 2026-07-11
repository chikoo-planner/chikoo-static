import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import InstagramButton from "@/components/ui/InstagramButton";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const BASE = "https://chikoo.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "CHIKOO — Premium Planners & Stationery",
    template: "%s | CHIKOO",
  },
  description:
    "Discover CHIKOO's premium planners, journals, notepads and stationery. Beautifully crafted for the intentional life.",
  keywords: ["planners", "stationery", "journals", "notepads", "chikoo", "premium stationery india"],
  authors: [{ name: "CHIKOO" }],
  creator: "CHIKOO",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE,
    siteName: "CHIKOO",
    title: "CHIKOO — Premium Planners & Stationery",
    description:
      "Premium planners and stationery crafted for the intentional life. Shop CHIKOO collections.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHIKOO — Premium Planners & Stationery",
    description: "Premium planners and stationery crafted for the intentional life.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <InstagramButton />
      </body>
    </html>
  );
}
