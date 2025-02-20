export interface User {
  id: string
  name?: string | null
  email?: string | null
  emailVerified?: Date | null
  image?: string | null
  role?: 'vendor' | 'volunteer' | null
}

export interface Donation {
  id: string
  title: string
  description: string
  quantity: number
  expiryAt: Date
  status: 'available' | 'pending' | 'completed'
  vendorId: string
  createdAt: Date
  updatedAt: Date
  vendor?: User
  pickup?: Pickup | null
}

export interface Pickup {
  id: string
  donationId: string
  volunteerId: string
  status: 'pending' | 'accepted' | 'rejected' | 'completed' | 'cancelled'
  createdAt: Date
  updatedAt: Date
  donation?: Donation
  volunteer?: User
}

export interface UserSettings {
  id: string
  userId: string
  emailNotifications: boolean
  pushNotifications: boolean
  radius: number
  language: string
  theme: 'light' | 'dark'
  createdAt: Date
  updatedAt: Date
  user?: User
}

// API Response Types
export interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}

// Dashboard Types
export interface DashboardStats {
  vendor?: {
    totalDonations: number
    activeDonations: number
    completedDonations: number
  }
  volunteer?: {
    totalPickups: number
    pendingPickups: number
    completedPickups: number
  }
}

export interface RecentActivity {
  id: string
  type: 'donation' | 'pickup'
  title: string
  status: string
  date: Date
  user: {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
  }
} 