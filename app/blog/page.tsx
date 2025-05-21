import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-extrabold tracking-tight lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">My thoughts on software development, design, and more.</p>
        </div>
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center gap-2">
                  <time dateTime={post.date} className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{post.readingTime} min read</span>
                </div>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link href={`/blog/${post.slug}`} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  )
}
