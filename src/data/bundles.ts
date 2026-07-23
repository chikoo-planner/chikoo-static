export type Bundle = {
  id: string
  tier: "basic" | "growth" | "premium" | "ultimate"
  name: string
  tagline: string
  productIds: string[]
  price: number
  originalPrice: number
  savingsPercent: number
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
    originalPrice: 699,
    savingsPercent: 15,
  },
  {
    id: "productivity-master-kit",
    tier: "growth",
    name: "Productivity Master Kit",
    tagline: "Plan monthly, act weekly, build daily habits",
    productIds: ["monthly-planner", "weekly-planner", "habit-tracker"],
    price: 1099,
    originalPrice: 1349,
    savingsPercent: 20,
    highlight: "Best Seller",
  },
  {
    id: "premium-life-pack",
    tier: "premium",
    name: "Premium Life Pack",
    tagline: "A complete system for health, work, and wellness",
    productIds: [
      "bed-time-journal",
      "fitness-tracker",
      "monthly-planner",
      "weekly-planner",
      "habit-tracker",
    ],
    price: 1699,
    originalPrice: 2149,
    savingsPercent: 21,
  },
  {
    id: "complete-life-management-bundle",
    tier: "ultimate",
    name: "Complete Life Management Bundle",
    tagline: "Every CHIKOO planner — everything you need to thrive",
    productIds: [
      "bed-time-journal",
      "habit-tracker",
      "fitness-tracker",
      "study-planner",
      "weekly-planner",
      "monthly-planner",
    ],
    price: 2499,
    originalPrice: 3299,
    savingsPercent: 25,
    highlight: "Best Value",
    freebies: ["Free sticker sheet", "Free bookmark", "Free shipping"],
  },
]
