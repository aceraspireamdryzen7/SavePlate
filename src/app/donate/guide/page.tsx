import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Donation Guidelines",
  description: "Guidelines for donating food through SavePlate.",
}

export default function DonationGuidePage() {
  return (
    <main className="flex-1">
      <div className="container max-w-3xl py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Donation Guidelines</h1>
          <p className="text-muted-foreground mt-2">
            Please follow these guidelines to ensure food safety and quality.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Acceptable Food Items</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fresh fruits and vegetables</li>
              <li>Packaged foods within expiration date</li>
              <li>Canned goods</li>
              <li>Baked goods (within 24 hours of baking)</li>
              <li>Dairy products (properly refrigerated)</li>
              <li>Frozen foods (maintained at proper temperature)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Food Safety Requirements</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All food must be within its expiration date</li>
              <li>Food must be properly stored and transported</li>
              <li>Packaging must be intact and unopened</li>
              <li>Temperature-sensitive items must be kept at safe temperatures</li>
              <li>Food must be protected from contamination</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Donation Process</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Create a donation listing with accurate details</li>
              <li>Wait for a recipient to claim your donation</li>
              <li>Coordinate pickup time and location</li>
              <li>Ensure food is properly packaged for transport</li>
              <li>Complete the handoff and mark donation as completed</li>
            </ol>
          </section>

          <div className="flex justify-center pt-8">
            <Button asChild size="lg">
              <Link href="/donate/new">Start Donating</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
} 