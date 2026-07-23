import type { Metadata } from "next"
import CollectionsClient from "@/components/shop/CollectionsClient"

export const metadata: Metadata = {
  title: "Collections",
  description: "Browse CHIKOO's full range of premium planners, trackers, and journals.",
}

export default function CollectionsPage() {
  return <CollectionsClient />
}
