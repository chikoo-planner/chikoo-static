export type Product = {
  id: string
  name: string
  tagline: string
  description: string
  emoji: string
  coverImage: string | null
  images: string[]
  price: number
  bestFor: string[]
  collectionSlug: string
}

export const products: Product[] = [
  {
    id: "bed-time-journal",
    name: "Bed Time Journal",
    tagline: "End your day with intention",
    description:
      "Wind down with gratitude prompts, reflection questions, and space to process your thoughts before sleep. Designed to help you disconnect from screens and sleep better.",
    emoji: "🌙",
    coverImage: "/images/products/bed-time-journal-2.jpeg",
    images: [
      "/images/products/bed-time-journal-2.jpeg",
      "/images/products/bed-time-journal-1.jpeg",
      "/images/products/bed-time-journal-3.jpeg",
    ],
    price: 349,
    bestFor: ["Better sleep", "Gratitude practice", "Daily reflection"],
    collectionSlug: "journals",
  },
  {
    id: "habit-tracker",
    name: "Habit Tracker",
    tagline: "Build the life you want, one habit at a time",
    description:
      "Track up to 20 habits per month with beautifully designed grids. Visual streaks keep you motivated and consistent across any goal — fitness, reading, hydration, and more.",
    emoji: "✅",
    coverImage: "/images/products/habit-tracker-1.jpeg",
    images: [
      "/images/products/habit-tracker-1.jpeg",
      "/images/products/habit-tracker-2.jpeg",
      "/images/products/habit-tracker-3.jpeg",
    ],
    price: 299,
    bestFor: ["Habit building", "Consistency", "Goal tracking"],
    collectionSlug: "trackers",
  },
  {
    id: "fitness-tracker",
    name: "Fitness Tracker",
    tagline: "Log workouts, fuel your progress",
    description:
      "Dedicated pages for workout logs, water intake, meal planning, and progress measurements. Built for anyone serious about their physical health and performance.",
    emoji: "💪",
    coverImage: "/images/products/fitness-tracker-1.jpeg",
    images: [
      "/images/products/fitness-tracker-1.jpeg",
      "/images/products/fitness-tracker-2.jpeg",
      "/images/products/fitness-tracker-3.jpeg",
    ],
    price: 349,
    bestFor: ["Workout logging", "Nutrition tracking", "Fitness goals"],
    collectionSlug: "trackers",
  },
  {
    id: "study-planner",
    name: "Study Planner",
    tagline: "Study smarter, not harder",
    description:
      "Structured for students preparing for exams or managing coursework. Includes topic schedulers, revision trackers, and daily study blocks to maximise focus and retention.",
    emoji: "📚",
    coverImage: "/images/products/study-planner-1.jpeg",
    images: [
      "/images/products/study-planner-1.jpeg",
      "/images/products/study-planner-2.jpeg",
      "/images/products/study-planner-3.jpeg",
    ],
    price: 349,
    bestFor: ["Exam prep", "Time management", "Syllabus tracking"],
    collectionSlug: "planners",
  },
  {
    id: "weekly-planner",
    name: "Weekly Planner",
    tagline: "Seven focused days, one clear vision",
    description:
      "A clean weekly spread with time-blocked scheduling, priority lists, and reflection space. Perfect for professionals and students who plan week by week.",
    emoji: "📅",
    coverImage: "/images/products/weekly-planner-1.jpeg",
    images: [
      "/images/products/weekly-planner-1.jpeg",
      "/images/products/weekly-planner-2.jpeg",
    ],
    price: 299,
    bestFor: ["Weekly planning", "Task prioritisation", "Work-life balance"],
    collectionSlug: "planners",
  },
  {
    id: "monthly-planner",
    name: "Monthly Planner",
    tagline: "See the bigger picture every month",
    description:
      "Monthly calendar spreads with goal-setting pages, habit grids, and review prompts. Ideal for anyone who wants to plan ahead and stay on top of deadlines and milestones.",
    emoji: "📆",
    coverImage: "/images/products/monthly-planner-1.jpeg",
    images: [
      "/images/products/monthly-planner-1.jpeg",
      "/images/products/monthly-planner-2.jpeg",
      "/images/products/monthly-planner-3.jpeg",
    ],
    price: 349,
    bestFor: ["Monthly goals", "Deadline tracking", "Big-picture planning"],
    collectionSlug: "planners",
  },
]
