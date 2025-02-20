import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about SavePlate and our mission to reduce food waste.",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About SavePlate</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Our mission is to reduce food waste and help those in need by connecting food donors with recipients.
          </p>
        </div>

        <div className="grid gap-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              SavePlate was founded with a simple yet powerful mission: to create a world where no food goes to waste while people go hungry. 
              We believe technology can bridge the gap between excess food and those who need it most.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">How We Work</h2>
            <div className="grid gap-4">
              <div className="bg-card rounded-lg p-6">
                <h3 className="font-medium mb-2">For Donors</h3>
                <p className="text-muted-foreground">
                  We make it easy for restaurants, grocery stores, and individuals to donate their excess food. 
                  Our platform provides a simple way to list available food and connect with local recipients.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="font-medium mb-2">For Recipients</h3>
                <p className="text-muted-foreground">
                  Whether you're a food bank, charity, or individual in need, our platform helps you find 
                  available food donations in your area and coordinate pickups efficiently.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Join Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              Together, we can make a difference in our communities. Join us in our mission to reduce food waste 
              and ensure that good food reaches those who need it most.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/donate">Start Donating</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/find-food">Find Food</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 