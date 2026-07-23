export type Collection = {
  slug: string
  name: string
  description: string
  coverImage: string | null
  productIds: string[]
}

export const collections: Collection[] = [
  {
    slug: "planners",
    name: "Planners",
    description:
      "Monthly, weekly, and study planners for students and professionals who plan with intention.",
    coverImage: "/images/products/study-planner-1.jpeg",
    productIds: ["monthly-planner", "weekly-planner", "study-planner"],
  },
  {
    slug: "trackers",
    name: "Trackers",
    description:
      "Habit and fitness trackers to help you build consistency and hit your health and lifestyle goals.",
    coverImage: "/images/products/habit-tracker-1.jpeg",
    productIds: ["habit-tracker", "fitness-tracker"],
  },
  {
    slug: "journals",
    name: "Journals",
    description:
      "Thoughtfully designed journals to help you reflect, unwind, and make the most of every evening.",
    coverImage: "/images/products/bed-time-journal-2.jpeg",
    productIds: ["bed-time-journal"],
  },
]
