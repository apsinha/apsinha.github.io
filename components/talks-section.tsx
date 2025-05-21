import Link from "next/link"

interface Talk {
  title: string
  event: string
  date: string
  link?: string
}

const talks: Talk[] = [
  {
    title: "Keynote: Building a Generative AI Platform to Enable Innovation at Scale",
    event: "KubeCon NA 2024",
    date: "April 2024",
    link: "https://www.youtube.com/watch?si=l8XQyDh-Gl9hA9d0&v=atG5oJm6W-k&feature=youtu.be",
  },
  {
    title: "Cloud Computing at Google",
    event: "Women in Data Science Conference",
    date: "March 2021",
    link: "https://www.youtube.com/watch?v=TWWYMXSj07w",
  },
  {
    title: "Panel: The Business of Open Source",
    event: "KubeCon Europe",
    date: "May 2019",
    link: "",
  },
  {
    title: "Kubernetes and Beyond",
    event: "Google Cloud Next",
    date: "April 2019",
    link: "",
  },
]

export function TalksSection() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Talks & Presentations</h2>
      <div className="grid gap-4">
        {talks.map((talk, index) => (
          <div key={index} className="rounded-lg border p-4">
            <h3 className="font-bold">{talk.title}</h3>
            <p className="text-sm text-muted-foreground">
              {talk.event} | {talk.date}
            </p>
            {talk.link && (
              <div className="mt-2">
                <Link
                  href={talk.link}
                  className="text-sm text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video →
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
