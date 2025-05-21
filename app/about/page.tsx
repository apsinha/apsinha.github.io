import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TalksSection } from "@/components/talks-section"
import { PublicationsSection } from "@/components/publications-section"

export const metadata = {
  title: "About Me",
  description: "Learn more about Aparna Sinha and her background in product management and technology.",
}

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Me</h1>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Hi, I'm Aparna Sinha. I'm a Senior Vice President of Products, AI/ML at Capital One with a passion for
              creating innovative products that solve real problems.
            </p>
            <p>
              I love brainstorming, defining and delivering products using the latest technologies to unlock new
              capabilities people didn't have before. I'm usually working with founders, researchers, PMs, designers,
              sales and support teams to generate ideas and create solutions.
            </p>
            <p>
              I've worked at Google, PearVC and with many amazing startups and enterprises, and am particularly familiar
              with Open Source and platform software.
            </p>
            <h2 className="text-xl font-bold text-foreground pt-4">My Experience</h2>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">Senior Vice President, Capital One</h3>
                <p className="text-sm text-muted-foreground">January 2024 - Present</p>
                <p className="mt-2">
                  Head of Enterprise AI/ML Products, leading 100+ product and analyst team. Responsible for Capital
                  One's Generative AI and Machine learning model platform across the Enterprise.
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm">
                  <li>Launched Dealer Concierge chatbot</li>
                  <li>10+ AI/ML applications hosted including Search, Summarization and Multi-agent chat</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">Startup Advisor / Investor, Pear VC</h3>
                <p className="text-sm text-muted-foreground">January 2024 - Present</p>
                <p className="mt-2">Advising startups including Patronus AI and ConfigHub.</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">Partner, AI/ML, Pear VC</h3>
                <p className="text-sm text-muted-foreground">December 2022 - January 2024</p>
                <p className="mt-2">
                  Investor in AI/ML, Developer Tools and Enterprise startups. Launched PearXAI investment track with
                  cloud credits, AI advisors and Founder Community. Launched PearVC's Perspectives on AI, Fireside
                  series with AI researchers and founders.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">Senior Director, Google Cloud Developer Platform</h3>
                <p className="text-sm text-muted-foreground">January 2020 - December 2022</p>
                <p className="mt-2">
                  P&L Owner / lead ~100 member team delivering portfolio of services to accelerate time-to-value for GCP
                  Developers. Includes Cloud Run / Functions, GCP's SDK, Programming Languages, IDEs, Container Tools,
                  and end-to-end CICD.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">Google Kubernetes Engine</h3>
                <p className="text-sm text-muted-foreground">March 2016 - April 2020</p>
                <p className="mt-2">
                  P&L Owner, built team of ~30 product managers as our product (GKE) grew. Led roadmap for 10+ major
                  foundational features in Kubernetes including container runtime flexibility, scaling to 15000 node
                  clusters, auto-upgrades, dynamic storage provisioning, stateful sets, cluster autoscaling and
                  scheduling.
                </p>
              </div>
            </div>
            <h2 className="text-xl font-bold text-foreground pt-4">Education</h2>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">Stanford University</h3>
                <p className="text-sm text-muted-foreground">PhD, Electrical Engineering</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">Stanford University</h3>
                <p className="text-sm text-muted-foreground">Bachelor of Science, Physics</p>
              </div>
            </div>

            <TalksSection />

            <PublicationsSection />

            <h2 className="text-xl font-bold text-foreground pt-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Developer Experience",
                "Generative AI",
                "Product Leadership",
                "AI/ML",
                "Cloud Computing",
                "Enterprise Software",
                "Open Source",
                "Product Strategy",
                "Go-to-Market",
                "Team Leadership",
              ].map((skill) => (
                <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <Button asChild>
              <Link href="/blog">Read My Blog</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/aparna-headshot.jpg"
            alt="Aparna Sinha"
            width={300}
            height={300}
            className="rounded-lg border-4 border-primary/20 object-cover object-center"
            priority
          />
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/apsinha/"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com/aparnasinha"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
