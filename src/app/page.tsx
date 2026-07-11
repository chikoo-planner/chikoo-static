import HeroSection from "@/components/home/HeroSection"
import FeaturedCollections from "@/components/home/FeaturedCollections"
import TestimonialsStrip from "@/components/home/TestimonialsStrip"
import InstagramSection from "@/components/home/InstagramSection"
import NewsletterSection from "@/components/home/NewsletterSection"
import { collections } from "@/data/collections"
import { testimonials } from "@/data/testimonials"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCollections collections={collections} />
      <TestimonialsStrip testimonials={testimonials} />
      <InstagramSection />
      <NewsletterSection />
    </>
  )
}
