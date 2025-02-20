export const DonationStatus = ['available', 'reserved', 'completed', 'expired', 'cancelled'] as const
export type DonationStatus = typeof DonationStatus[number]

export interface Location {
  address: string
  latitude: number
  longitude: number
}

export interface DonationBase {
  title: string
  description: string
  quantity: number
  expiryTime: string
  status: DonationStatus
  location?: Location
}

export interface Donation extends DonationBase {
  id: string
  createdAt: Date
  updatedAt: Date
  vendorId: string
  vendor: {
    id: string
    name: string | null
    image: string | null
  }
  location?: Location
}

export type DonationCreateInput = Omit<DonationBase, 'status'> & {
  status?: DonationStatus | undefined
}

export type DonationUpdateInput = {
  id: string
  title?: string
  description?: string
  quantity?: number
  expiryTime?: string
  status?: DonationStatus
  location?: Location
} 