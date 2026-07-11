// Edit this file to add/update/remove collections, then redeploy.
// coverImage should point to a file in /public/images/collections/ (or an external URL).
export type Collection = {
  slug: string
  name: string
  description: string
  coverImage: string | null
}

export const collections: Collection[] = [
  {
    slug: "daily-planners",
    name: "Daily Planners",
    description: "Undated daily planners designed to help you plan with intention, one day at a time.",
    coverImage: null,
  },
  {
    slug: "journals",
    name: "Journals",
    description: "Fountain-pen friendly journals for reflection, gratitude, and creative writing.",
    coverImage: null,
  },
  {
    slug: "notepads-stationery",
    name: "Notepads & Stationery",
    description: "Everyday notepads, stickers, and accessories to keep your desk beautifully organised.",
    coverImage: null,
  },
]
