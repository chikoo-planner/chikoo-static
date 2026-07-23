export type Bundle = {
  id: string
  tier: "basic" | "growth" | "premium" | "ultimate"
  name: string
  tagline: string
  productIds: string[]
  price: number
  originalPrice: number
  savings: number
  highlight?: string
  freebies?: string[]
}

export const bundles: Bundle[] = [
  {
    id: "planner-starter-pack",
    tier: "basic",
    name: "Planner Starter Pack",
    tagline: "The perfect entry point into intentional planning",
    productIds: ["monthly-planner", "habit-tracker"],
    price: 599,
    originalPrice: 698,
    savings: 99,
    highlight: "Beginner Friendly",
  },
  {
    id: "academic-success-pack",
    tier: "basic",
    name: "Academic Success Pack",
    tagline: "Everything a student needs to ace every semester",
    productIds: ["study-planner", "weekly-planner", "habit-tracker"],
    price: 499,
    originalPrice: 597,
    savings: 98,
  },
  {
    id: "productivity-master-kit",
    tier: "growth",
    name: "Productivity Master Kit",
    tagline: "Plan monthly, act weekly, build daily habits",
    productIds: ["monthly-planner", "weekly-planner", "habit-tracker"],
    price: 749,
    originalPrice: 897,
    savings: 148,
    highlight: "Best Seller",
  },
  {
    id: "healthy-habits-bundle",
    tier: "growth",
    name: "Healthy Habits Bundle",
    tagline: "Sleep better, move more, track what matters",
    productIds: ["fitness-tracker", "habit-tracker", "bed-time-journal"],
    price: 899,
    originalPrice: 1097,
    savings: 198,
  },
  {
    id: "glow-grow-kit",
    tier: "premium",
    name: "Glow & Grow Planner Kit",
    tagline: "Glow from within, grow in every direction",
    productIds: ["bed-time-journal", "fitness-tracker", "study-planner"],
    price: 899,
    originalPrice: 1097,
    savings: 198,
  },
  {
    id: "complete-life-bundle",
    tier: "ultimate",
    name: "Complete Life Management Bundle",
    tagline: "Every CHIKOO planner — everything you need to thrive",
    productIds: [
      "bed-time-journal",
      "monthly-planner",
      "fitness-tracker",
      "weekly-planner",
      "habit-tracker",
      "study-planner",
    ],
    price: 1499,
    originalPrice: 1994,
    savings: 495,
    highlight: "Premium",
    freebies: ["Free sticker sheet", "Free bookmark", "Free shipping"],
  },
]
