import Link from "next/link"
import { siteConfig } from "@/config/site"

export function MainNav() {
  return (
    <nav className="flex items-center space-x-6">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold inline-block text-xl">
          {siteConfig.name}
        </span>
      </Link>
      <div className="flex items-center space-x-4">
        {siteConfig.mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  )
} 