"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">Aparna Sinha</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/"
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                pathname === "/" && "text-foreground",
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                pathname === "/about" && "text-foreground",
              )}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                pathname === "/blog" || pathname.startsWith("/blog/") ? "text-foreground" : "",
              )}
            >
              Blog
            </Link>
            <Link
              href="/talks"
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                pathname === "/talks" && "text-foreground",
              )}
            >
              Talks
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <Button variant="outline" size="sm" asChild>
              <Link href="mailto:apbhatnagar@gmail.com">Contact</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
