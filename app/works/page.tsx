import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { caseStudies } from "@/lib/case-studies"

export default function WorksPage() {
  // Get the first 2 case studies for featured projects (only internal ones)
  const internalCaseStudies = caseStudies.filter((study) => !study.externalLink)
  const featuredProjects = internalCaseStudies.slice(0, 2)

  return (
    <main className="pt-28 md:pt-24 pb-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">My Works</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            A collection of projects that showcase my skills, process, and passion for creating meaningful digital
            experiences.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-12 dark:text-white">Featured Projects</h2>
          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="border-b border-gray-200 dark:border-gray-700 pb-20">
                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src={project.featuredImage || "/placeholder.svg"}
                    alt={project.title}
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mb-2">
                  <span className="text-sm font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{project.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">{project.summary}</p>
                <Button
                  asChild
                  className="rounded-full bg-black text-white hover:bg-gray-800 dark:bg-black dark:text-white dark:hover:bg-gray-900"
                >
                  <Link href={`/works/${project.slug}`}>
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-12 dark:text-white">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.summary}
                image={project.featuredImage}
                category={project.category}
                link={`/works/${project.slug}`}
                externalLink={project.externalLink}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

