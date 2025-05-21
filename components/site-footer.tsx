import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Aparna Sinha. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/about" className="hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/blog" className="hover:underline underline-offset-4">
            Blog
          </Link>
          <Link href="/talks" className="hover:underline underline-offset-4">
            Talks
          </Link>
          <Link href="/publications" className="hover:underline underline-offset-4">
            Publications
          </Link>
          <Link
            href="https://www.linkedin.com/in/apsinha/"
            className="hover:underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}
