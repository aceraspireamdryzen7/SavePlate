import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Donate Food",
  description: "Donate your excess food to those in need.",
}

export default function DonatePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Donate Food</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Help reduce food waste by donating your excess food to those in need.
          </p>
        </div>
        
        <div className="grid gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <span className="text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-medium">List Your Donation</h3>
                  <p className="text-muted-foreground">
                    Provide details about the food you want to donate.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <span className="text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-medium">Connect with Recipients</h3>
                  <p className="text-muted-foreground">
                    Local organizations will be notified of your donation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <span className="text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-medium">Arrange Pickup</h3>
                  <p className="text-muted-foreground">
                    Coordinate pickup times and locations securely through our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/donate/new">Start Donating</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/donate/guide">Read Guidelines</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
} 