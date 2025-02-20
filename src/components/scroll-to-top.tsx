"use client"

import * as React from "react"
import { ArrowUpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      className={cn(
        "fixed bottom-4 right-4 z-50 rounded-full bg-primary p-2 text-primary-foreground shadow-lg transition-opacity duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUpCircle className="h-6 w-6" />
    </button>
  )
} 