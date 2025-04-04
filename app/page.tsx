import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { caseStudies } from "@/lib/case-studies"
import { RetroCard } from "@/components/retro-card"
import HeroHeading from "@/components/hero-heading"
import ContactForm from "@/components/contact-form"

export default function Home() {
  // Get the first 3 case studies for the homepage
  const featuredProjects = caseStudies.slice(0, 3)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 via-yellow-100 to-purple-300 opacity-80 -z-10 animate-gradient dark:opacity-30 dark:from-emerald-900 dark:via-gray-900 dark:to-purple-900" />
        <div className="max-w-4xl mx-auto text-center">
          <HeroHeading
            defaultText="Crafting digital experiences with purpose"
            hoverText="Creating solutions driven by passion and coffee"
          />
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-8 max-w-3xl mx-auto">
            I transform complex problems into elegant, intuitive designs that connect with users and drive business
            growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-black text-white hover:bg-gray-800 dark:bg-black dark:text-white dark:hover:bg-gray-900 hero-button"
            >
              <Link href="/works">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-black text-black hover:bg-black/5 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800/20 hero-button"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-black dark:text-white" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-black dark:text-white">Selected Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            A collection of projects that showcase my approach to design and problem-solving.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
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
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-black text-black hover:bg-black/5 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800/20 hero-button"
            >
              <Link href="/works">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section id="process" className="py-20 px-4 md:px-8 lg:px-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 via-yellow-100 to-purple-300 opacity-80 -z-10 animate-gradient dark:opacity-30 dark:from-emerald-900 dark:via-gray-900 dark:to-purple-900" />
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-black dark:text-white">
            My Design Process
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-16 text-center max-w-3xl mx-auto">
            A thoughtful approach that balances user needs, business goals, and technical constraints.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step) => (
              <RetroCard
                key={step.number}
                className="h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-gray-300 dark:text-gray-600">{step.number}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
              </RetroCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center dark:text-white">Let's Work Together</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "I start by understanding the problem space through research, interviews, and analysis to identify opportunities.",
  },
  {
    number: "02",
    title: "Define",
    description: "Next, I define the scope, create user personas, and establish clear goals and metrics for success.",
  },
  {
    number: "03",
    title: "Design",
    description: "I create wireframes, prototypes, and visual designs, iterating based on feedback and testing.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Finally, I prepare assets for development, collaborate with engineers, and ensure the final product meets quality standards.",
  },
]

