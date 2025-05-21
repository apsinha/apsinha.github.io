import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata = {
  title: "Talks & Presentations",
  description: "Keynotes, panel discussions, and presentations by Aparna Sinha.",
}

interface Talk {
  title: string
  event: string
  date: string
  description: string
  link?: string
}

const talks: Talk[] = [
  {
    title: "Keynote: Building a Generative AI Platform to Enable Innovation at Scale",
    event: "KubeCon NA 2024",
    date: "April 2024",
    description:
      "In this keynote, I discuss how organizations can build AI platforms that enable innovation at scale while maintaining governance and security.",
    link: "https://www.youtube.com/watch?si=l8XQyDh-Gl9hA9d0&v=atG5oJm6W-k&feature=youtu.be",
  },
  {
    title: "Cloud Computing at Google",
    event: "Women in Data Science Conference",
    date: "March 2021",
    description:
      "A discussion on Google's approach to cloud computing, containerization, and the evolution of cloud infrastructure.",
    link: "https://www.youtube.com/watch?v=TWWYMXSj07w",
  },
  {
    title: "Panel: The Business of Open Source",
    event: "KubeCon Europe",
    date: "May 2019",
    description:
      "A panel discussion on building sustainable business models around open source technologies while maintaining community engagement.",
  },
  {
    title: "Kubernetes and Beyond",
    event: "Google Cloud Next",
    date: "April 2019",
    description:
      "An overview of Kubernetes as a platform and its evolution to support broader application management needs.",
  },
  {
    title: "The Future of Cloud Native Computing",
    event: "CNCF Webinar Series",
    date: "October 2018",
    description:
      "A presentation on trends and future directions for cloud native technologies and their impact on enterprise IT.",
  },
  {
    title: "Container Orchestration: Past, Present and Future",
    event: "DockerCon",
    date: "June 2018",
    description:
      "Discussing the evolution of container orchestration systems and how Kubernetes emerged as the leading solution.",
  },
]

export default function TalksPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Talks & Presentations</h1>
        <p className="text-xl text-muted-foreground">
          Selected keynotes, conference presentations, and panel discussions on AI, cloud computing, and product
          management.
        </p>
      </div>
      <div className="grid gap-6 pt-10">
        {talks.map((talk, index) => (
          <div key={index} className="group relative rounded-lg border p-6 shadow-md hover:shadow-lg">
            <h2 className="text-2xl font-bold">{talk.title}</h2>
            <div className="mt-2 flex items-center text-sm text-muted-foreground">
              <span>{talk.event}</span>
              <span className="mx-2">•</span>
              <span>{talk.date}</span>
            </div>
            <p className="mt-4">{talk.description}</p>
            {talk.link && (
              <div className="mt-4">
                <Link
                  href={talk.link}
                  className="inline-flex items-center text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
