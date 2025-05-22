import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import { Button } from "@/components/ui/button"

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-extrabold tracking-tight lg:text-5xl">
            Hi, I'm <span className="text-primary">Aparna</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            I like to ship! Building on the latest technologies to get new solutions to users is where it starts. 
            Getting their feedback, tailoring products to their needs for fun and profit!
            I'm usually working with users, founders, researchers, PMs, design,
            sales and support! Good requirements can come from anywhere! Experience at Google, PearVC, CapitalOne etc.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/about">About Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">Read My Blog</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/aparna-headshot.jpg"
            alt="Aparna Sinha"
            width={200}
            height={200}
            className="rounded-full border-4 border-primary/20 object-cover object-center"
            priority
          />
        </div>
      </div>

      <hr className="my-8" />

      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Recent Posts</h2>
          <p className="text-muted-foreground">My latest thoughts, ideas, and reflections.</p>
        </div>
        <Link href="/blog" className="flex items-center gap-2 text-sm font-medium text-primary">
          View all posts <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="mt-2 text-muted-foreground line-clamp-2">{post.excerpt}</p>
              <p className="mt-4 text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-primary/10 group-hover:ring-primary/20" />
            </article>
          </Link>
        ))}
      </div>

      <hr className="my-8" />

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="mt-2 text-muted-foreground">Some of my work and initiatives.</p>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">AI/ML at Capital One</h3>
              <p className="text-sm text-muted-foreground">Leading product management for AI/ML initiatives</p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">Google Kubernetes Engine</h3>
              <p className="text-sm text-muted-foreground">Led product management for Google's container platform</p>
              <div className="mt-2">
                <Link
                  href="https://cloud.google.com/kubernetes-engine"
                  className="text-sm text-primary hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Connect</h2>
          <p className="mt-2 text-muted-foreground">Find me on these platforms and get in touch.</p>
          <div className="mt-4 space-y-4">
            <Link
              href="https://www.linkedin.com/in/apsinha/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </Link>
            <Link
              href="https://twitter.com/aparnabsinha"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
