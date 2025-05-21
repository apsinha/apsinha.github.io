import Link from "next/link"

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
    description: "Featured in article discussing human-centered approaches to AI development.",
    link: "https://venturebeat.com/ai/making-generative-ai-human-centric/",
  },
  {
    title: "Capital One's Generative AI Strategy",
    publisher: "Banking Dive",
    date: "2024",
    description: "Insights on Capital One's approach to implementing generative AI.",
    link: "https://www.bankingdive.com/news/capital-one-generative-ai-strategy-svp-aparna-sinha/720942/",
  },
  {
    title: "Perspectives in Generative AI with Stanford Researchers",
    publisher: "Pear VC",
    date: "2023",
    description: "Blog post on conversations with Stanford researchers about generative AI.",
    link: "https://pear.vc/perspectives-in-generative-ai-with-stanford-researchers/",
  },
  {
    title: "Perspectives in Generative AI with Hugging Face's Nazneen Rajani",
    publisher: "Pear VC",
    date: "2023",
    description: "Discussion on generative AI with Hugging Face's lead researcher.",
    link: "https://pear.vc/perspectives-in-generative-ai-with-huggingfaces-nazneen-rajani/",
  },
]

export function PublicationsSection() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Articles & Publications</h2>
      <div className="grid gap-4">
        {publications.map((pub, index) => (
          <div key={index} className="rounded-lg border p-4">
            <h3 className="font-bold">{pub.title}</h3>
            <p className="text-sm text-muted-foreground">
              {pub.publisher} | {pub.date}
            </p>
            <p className="mt-2 text-sm">{pub.description}</p>
            <div className="mt-2">
              <Link
                href={pub.link}
                className="text-sm text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Article →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
