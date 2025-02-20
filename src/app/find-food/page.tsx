import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Find Food",
  description: "Find available food donations in your area.",
}

export default function FindFoodPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Find Food</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Connect with local food donors and find available donations in your area.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Available Options</h2>
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <span className="text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-medium">Search by Location</h3>
                  <p className="text-muted-foreground">
                    Find food donations available in your area.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <span className="text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-medium">Filter by Type</h3>
                  <p className="text-muted-foreground">
                    Filter donations by food type, quantity, and dietary restrictions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <span className="text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-medium">Request Pickup</h3>
                  <p className="text-muted-foreground">
                    Coordinate with donors to arrange food pickup.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/find-food/map">View Map</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/find-food/list">List View</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
} 