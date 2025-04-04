import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { caseStudies } from "@/lib/case-studies"
import { notFound, redirect } from "next/navigation"
import ImageModal from "@/components/image-modal"
import NdaNotice from "@/components/nda-notice"

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return caseStudies
    .filter((study) => !study.externalLink)
    .map((study) => ({
      slug: study.slug,
    }))
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug)

  if (!caseStudy) {
    notFound()
  }

  if (caseStudy.externalLink) {
    redirect(caseStudy.externalLink)
  }

  const internalCaseStudies = caseStudies.filter((study) => !study.externalLink)
  const currentIndex = internalCaseStudies.findIndex((study) => study.slug === params.slug)
  const prevStudy = currentIndex > 0 ? internalCaseStudies[currentIndex - 1] : null
  const nextStudy = currentIndex < internalCaseStudies.length - 1 ? internalCaseStudies[currentIndex + 1] : null

  return (
    <main className="pt-28 md:pt-24 pb-20">
      {/* Minimal Hero Section */}
      <section className="px-4 md:px-8 lg:px-16 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">
              {caseStudy.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">{caseStudy.title}</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mb-12">{caseStudy.summary}</p>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6 border-t border-gray-200 dark:border-gray-700 pt-8">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Timeline</h3>
              <p className="text-base font-medium dark:text-white">{caseStudy.timeline}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Role</h3>
              <p className="text-base font-medium dark:text-white">{caseStudy.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Deliverables</h3>
              <p className="text-base font-medium dark:text-white">{caseStudy.deliverables}</p>
            </div>
          </div>

          {/* NDA Notice */}
          <NdaNotice />
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="rounded-xl overflow-hidden">
            <Image
              src={caseStudy.featuredImage || "/placeholder.svg"}
              alt={caseStudy.title}
              width={1400}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 md:px-8 lg:px-16 mb-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 dark:text-white">Overview</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{caseStudy.overview}</p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="px-4 md:px-8 lg:px-16 py-24 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 dark:text-white">The Challenge</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-12">{caseStudy.challenge}</p>

          {caseStudy.challengeImage && (
            <div className="mt-12">
              <ImageModal
                src={caseStudy.challengeImage || "/placeholder.svg"}
                alt="Challenge visualization"
                width={1000}
                height={600}
              />
            </div>
          )}
        </div>
      </section>

      {/* User Insights Section - Only for Strategize */}
      {caseStudy.slug === "strategize" && (
        <section className="px-4 md:px-8 lg:px-16 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 dark:text-white">User Insights</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-12">
              Direct feedback from stakeholders revealed key pain points and opportunities for improvement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <Quote className="h-6 w-6 text-gray-400 mb-4" />
                <blockquote className="text-lg mb-6 dark:text-white">
                  "I don't have time to shift through all this data. We need something more streamlined."
                </blockquote>
                <div>
                  <p className="font-medium dark:text-white">Chief Strategy Officer</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <Quote className="h-6 w-6 text-gray-400 mb-4" />
                <blockquote className="text-lg mb-6 dark:text-white">
                  "It will be fantastic if I can access what I want at a place rather than browsing through workspaces
                  and dashboards."
                </blockquote>
                <div>
                  <p className="font-medium dark:text-white">Operations Director</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <Quote className="h-6 w-6 text-gray-400 mb-4" />
                <blockquote className="text-lg mb-6 dark:text-white">
                  "We need a streamlined design to prioritize key data. The current system is overwhelming."
                </blockquote>
                <div>
                  <p className="font-medium dark:text-white">Executive Director</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <Quote className="h-6 w-6 text-gray-400 mb-4" />
                <blockquote className="text-lg mb-6 dark:text-white">
                  "I really don't know why I am seeing these unnecessary items. We need better organization."
                </blockquote>
                <div>
                  <p className="font-medium dark:text-white">Head of Strategy</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Section - Minimal approach */}
      <section className="px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 dark:text-white">The Process</h2>

          <div className="space-y-20">
            {caseStudy.process.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <h3 className="text-xl font-bold mb-4 dark:text-white">{item.title}</h3>
                  <p className="text-base text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <ImageModal src={item.image || "/placeholder.svg"} alt={item.title} width={600} height={400} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-4 md:px-8 lg:px-16 py-24 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 dark:text-white">The Solution</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-16">{caseStudy.solution}</p>

          <div className="grid grid-cols-1 gap-8">
            {caseStudy.solutionImages.map((image, index) => (
              <div key={index}>
                <ImageModal
                  src={image || "/placeholder.svg"}
                  alt={`Solution visualization ${index + 1}`}
                  width={1000}
                  height={600}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section - Minimal cards */}
      <section className="px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-16 dark:text-white">Results & Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudy.results.map((result, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="text-2xl font-bold mb-4 text-black dark:text-white">{result.stat}</div>
                <h3 className="text-lg font-medium mb-3 dark:text-white">{result.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section (if available) */}
      {caseStudy.testimonial && (
        <section className="px-4 md:px-8 lg:px-16 py-24 bg-gray-50 dark:bg-gray-800/30">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <Quote className="h-10 w-10 text-gray-300 dark:text-gray-600 mb-6" />
              <blockquote className="text-2xl font-medium mb-8 dark:text-white">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-bold dark:text-white">{caseStudy.testimonial.author}</p>
                <p className="text-gray-600 dark:text-gray-400">{caseStudy.testimonial.role}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Conclusion Section */}
      <section className="px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 dark:text-white">Key Takeaways</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-12">{caseStudy.conclusion}</p>

          {caseStudy.link && (
            <Button
              asChild
              className="rounded-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <a href={caseStudy.link} target="_blank" rel="noopener noreferrer">
                Visit Live Project <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </section>

      {/* Next/Previous Project Navigation */}
      <section className="px-4 md:px-8 lg:px-16 py-16 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {prevStudy ? (
              <Link href={`/works/${prevStudy.slug}`} className="flex items-center group mb-8 md:mb-0">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1 dark:text-white" />
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Previous Project</div>
                  <div className="font-medium dark:text-white">{prevStudy.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            <Link
              href="/works"
              className="text-sm font-medium px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors dark:text-white"
            >
              All Projects
            </Link>

            {nextStudy ? (
              <Link href={`/works/${nextStudy.slug}`} className="flex items-center text-right group">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Next Project</div>
                  <div className="font-medium dark:text-white">{nextStudy.title}</div>
                </div>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 dark:text-white" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

