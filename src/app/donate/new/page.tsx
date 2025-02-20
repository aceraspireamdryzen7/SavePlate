import { Metadata } from "next"
import { DonationForm } from "@/components/forms/donation-form"

export const metadata: Metadata = {
  title: "Create Donation",
  description: "Create a new food donation listing.",
}

export default function NewDonationPage() {
  return (
    <main className="flex-1">
      <div className="container max-w-3xl py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Create Donation</h1>
          <p className="text-muted-foreground">
            Fill out the form below to create a new food donation listing.
          </p>
        </div>
        <DonationForm />
      </div>
    </main>
  )
} 