import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata = {
  title: "Articles & Publications",
  description: "Articles, interviews, and publications by Aparna Sinha.",
}

interface Publication {
  title: string
  publisher: string
  date: string
  description: string
  link: string
}

const publications: Publication[] = [
  {
    title: "Making Generative AI Human-Centric",
    publisher: "VentureBeat",
    date: "2024",
    description:
      "Featured in article discussing human-centered approaches to AI development, emphasizing the importance of designing AI systems that work in harmony with human users.",
    link: "https://venturebeat.com/ai/making-generative-ai-human-centric/",
  },
  {
    title: "Capital One's Generative AI Strategy",
    publisher: "Banking Dive",
    date: "2024",
    description:
      "Insights on Capital One's approach to implementing generative AI across the enterprise, focusing on governance, security, and customer value.",
    link: "https://www.bankingdive.com/news/capital-one-generative-ai-strategy-svp-aparna-sinha/720942/",
  },
  {
    title: "Perspectives in Generative AI with Stanford Researchers",
    publisher: "Pear VC",
    date: "2023",
    description:
      "Blog post on conversations with Stanford researchers about the current state and future of generative AI technologies, exploring both technical advances and ethical considerations.",
    link: "https://pear.vc/perspectives-in-generative-ai-with-stanford-researchers/",
  },
  {
    title: "Perspectives in Generative AI with Hugging Face's Nazneen Rajani",
    publisher: "Pear VC",
    date: "2023",
    description:
      "Discussion with Hugging Face's lead researcher on evaluation methods for language models, the importance of open source in AI development, and the challenges of building trustworthy AI systems.",
    link: "https://pear.vc/perspectives-in-generative-ai-with-huggingfaces-nazneen-rajani/",
  },
  {
    title: "Kubernetes: The Distributed Operating System",
    publisher: "CNCF Blog",
    date: "2019",
    description:
      "An exploration of how Kubernetes has evolved from a container orchestration system to become a distributed operating system for cloud applications.",
    link: "https://www.cncf.io",
  },
  {
    title: "The Future of Enterprise AI",
    publisher: "Forbes Technology Council",
    date: "2023",
    description:
      "A perspective on how enterprise adoption of AI is evolving, with particular focus on the organizational changes required to successfully implement AI at scale.",
    link: "https://www.forbes.com",
  },
]

export default function PublicationsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Articles & Publications</h1>
        <p className="text-xl text-muted-foreground">
          Featured articles, interviews, and publications about AI, product management, and technology.
        </p>
      </div>
      <div className="grid gap-6 pt-10">
        {publications.map((pub, index) => (
          <div key={index} className="group relative rounded-lg border p-6 shadow-md hover:shadow-lg">
            <h2 className="text-2xl font-bold">{pub.title}</h2>
            <div className="mt-2 flex items-center text-sm text-muted-foreground">
              <span>{pub.publisher}</span>
              <span className="mx-2">•</span>
              <span>{pub.date}</span>
            </div>
            <p className="mt-4">{pub.description}</p>
            <div className="mt-4">
              <Link
                href={pub.link}
                className="inline-flex items-center text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Article <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
