// Edit this file to add/update/remove testimonials, then redeploy.
export type Testimonial = {
  id: string
  authorName: string
  location: string | null
  content: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    authorName: "Ananya R.",
    location: "Mumbai",
    content: "The paper quality is incredible and the layout actually helps me stick to my planning routine. Worth every rupee.",
    rating: 5,
  },
  {
    id: "2",
    authorName: "Vikram S.",
    location: "Bengaluru",
    content: "Ordered a journal as a gift and ended up buying one for myself too. Beautifully made and feels premium.",
    rating: 5,
  },
  {
    id: "3",
    authorName: "Priya M.",
    location: "Pune",
    content: "Fast delivery and the packaging was lovely. The planner has become part of my morning routine.",
    rating: 4,
  },
]
