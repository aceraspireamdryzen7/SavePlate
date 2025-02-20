import { Metadata } from "next"
import { DonationMap } from "@/components/map/donation-map"

export const metadata: Metadata = {
  title: "Find Food Map",
  description: "Find food donations near you on the map.",
}

export default function FindFoodMapPage() {
  return (
    <main className="flex-1">
      <div className="container py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Find Food Near You</h1>
          <p className="text-muted-foreground mt-2">
            Browse available food donations in your area using the map.
          </p>
        </div>
        <div className="h-[600px] rounded-lg border">
          <DonationMap />
        </div>
      </div>
    </main>
  )
} 