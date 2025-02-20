import "next-auth"
import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      role?: string
      name?: string | null
      image?: string | null
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    email: string
    role?: string
    name?: string | null
    image?: string | null
  }
} 