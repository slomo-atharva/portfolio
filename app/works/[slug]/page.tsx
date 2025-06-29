import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { caseStudies } from "@/lib/case-studies"
import { notFound, redirect } from "next/navigation"
import ImageModal from "@/components/image-modal"
import NdaNotice from "@/components/nda-notice"

interface CaseStudyPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return caseStudies
    .filter((study) => !study.externalLink)
    .map((study) => ({
      slug: study.slug,
    }))
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = caseStudies.find((study) => study.slug === slug)

  if (!caseStudy) {
    notFound()
  }

  if (caseStudy.externalLink) {
    redirect(caseStudy.externalLink)
  }

  const internalCaseStudies = caseStudies.filter((study) => !study.externalLink)
  const currentIndex = internalCaseStudies.findIndex((study) => study.slug === slug)
  const prevStudy = currentIndex > 0 ? internalCaseStudies[currentIndex - 1] : null
  const nextStudy = currentIndex < internalCaseStudies.length - 1 ? internalCaseStudies[currentIndex + 1] : null

  return (
    <main className="pt-28 md:pt-24 pb-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm text-gray-600 uppercase tracking-wider">CASE STUDY</p>
            <h1 className="text-5xl font-light leading-tight dark:text-white">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-gray-600 font-light dark:text-gray-300">{caseStudy.summary}</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded border-l-4 border-gray-300 dark:border-gray-600">
            <p className="text-sm text-gray-700 dark:text-gray-300 italic">
              Note: Due to NDA requirements, some details including client names, specific metrics, and software branding have been modified while maintaining the integrity of the design process and outcomes.
            </p>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-200 dark:border-gray-700 pt-6">
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
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-700">
        <div className="bg-gray-50 dark:bg-gray-800 aspect-video rounded flex items-center justify-center border dark:border-gray-700">
          <ImageModal
            src={caseStudy.featuredImage || "/placeholder.svg"}
            alt={caseStudy.title}
            width={1200}
            height={675}
          />
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-700">
        <div className="space-y-6">
          <h2 className="text-3xl font-light dark:text-white">Overview</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{caseStudy.overview}</p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-700">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-light dark:text-white">The Challenge</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-50 dark:bg-gray-800 aspect-video rounded flex items-center justify-center border dark:border-gray-700">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="text-2xl mb-2">📊</div>
              <p className="text-sm">Problem Visualization</p>
              <p className="text-xs mt-1">Before/After comparison showing cluttered vs clean layout</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium dark:text-white">The Problem Was Clear:</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Client retention dropped from 13 to 5-6 major enterprises</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Users couldn't find essential project information without navigating through multiple workspaces</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Confusing action categories ("Actions" vs "Assigned to me" - what's the difference?)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Zero-value content taking up prime dashboard real estate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Inconsistent typography and cluttered UI creating cognitive overload</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-700">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-light dark:text-white">The "Aha!" Moment: Going Back to Basics</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Before jumping into pretty UI fixes, we knew we needed a reality check. Strategy Zero has hundreds of dashboards and workspaces, but most weren't being used effectively. We partnered with business consultants who regularly speak with clients to understand what actually matters.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-50 dark:bg-gray-800 aspect-video rounded flex items-center justify-center border dark:border-gray-700">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="text-2xl mb-2">🔍</div>
              <p className="text-sm">Research Process</p>
              <p className="text-xs mt-1">Miro board showing user research and journey mapping</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium dark:text-white">Our Discovery Process:</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Analyzed user behavior patterns across all client organizations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Identified the core workflows for Project Managers (PM) and Portfolio Management Office (PMO) users</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Created information architecture focused only on high-value, frequently-used features</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Developed user personas based on real usage data, not assumptions</span>
              </li>
            </ul>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-50 dark:bg-gray-800 aspect-video rounded flex items-center justify-center border dark:border-gray-700">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="text-2xl mb-2">🗺️</div>
              <p className="text-sm">Information Architecture</p>
              <p className="text-xs mt-1">Flowchart showing the new structure and user flows</p>
            </div>
          </div>
        </div>
      </section>

      {/* PM Dashboard Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-700">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-light dark:text-white">The PM Dashboard: From Chaos to Clarity</h2>
            <h3 className="text-xl font-medium dark:text-white">The Strategic Shift: Project-Centric Design</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Instead of overwhelming PMs with every possible workspace, we made a crucial decision: focus on projects, not features. Most PMs handle 1-2 projects normally (3-4 in worst cases), so why not design around that reality?
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-50 dark:bg-gray-800 aspect-video rounded flex items-center justify-center border dark:border-gray-700">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="text-2xl mb-2">📋</div>
              <p className="text-sm">PM Dashboard Concept</p>
              <p className="text-xs mt-1">Low-fi wireframes showing project-centric approach</p>
            </div>
          </div>

          <div className="grid gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-medium dark:text-white">Project Selection at the Top</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Clean dropdown to select which project to manage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Everything below updates contextually to that specific project</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium dark:text-white">Visual Timeline View</h4>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 ml-4">
                <p><strong>Before:</strong> Users had to visit multiple workspaces to understand project status</p>
                <p><strong>After:</strong> One visual timeline showing deliverables, benefits, risks, and product due dates</p>
                <p><strong>Impact:</strong> Instant project overview without clicking through dozens of pages</p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-50 dark:bg-gray-800 aspect-video rounded flex items-center justify-center border dark:border-gray-700">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="text-2xl mb-2">⏱️</div>
              <p className="text-sm">Timeline Component</p>
              <p className="text-xs mt-1">Close-up of the timeline feature visualization</p>
            </div>
          </div>

          <div className="grid gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-medium dark:text-white">Intelligent Activity Log</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Real-time feed of all project activities (edits, creations, updates)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Click any activity to jump directly to where the change was made</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>User Feedback:</strong> "Finally, I can track what happened without playing detective"</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium dark:text-white">Project Status Report (PSR) Trend</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Visual timeline of past reporting cycles showing on-track/off-track/alert status</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>One-click access to create new PSR for current cycle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Measurable Impact:</strong> PSR creation time reduced from 15+ minutes to under 3 minutes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-50 dark:bg-gray-800 aspect-video rounded flex items-center justify-center border dark:border-gray-700">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="text-2xl mb-2">📈</div>
              <p className="text-sm">PSR Trend Visualization</p>
              <p className="text-xs mt-1">Chart showing status trends and data visualization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-700">
        <div className="space-y-12">
          <h2 className="text-3xl font-light dark:text-white">The Numbers Don't Lie</h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded">
            <h3 className="text-xl font-medium mb-8 text-center dark:text-white">Quantifiable Improvements</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th className="pb-4 pr-8 font-medium dark:text-white">Metric</th>
                    <th className="pb-4 pr-8 font-medium dark:text-white">Before</th>
                    <th className="pb-4 pr-8 font-medium dark:text-white">After</th>
                    <th className="pb-4 font-medium dark:text-white">Improvement</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="py-4 pr-8">Task completion time</td>
                    <td className="py-4 pr-8">8.5 minutes</td>
                    <td className="py-4 pr-8">3.2 minutes</td>
                    <td className="py-4 font-medium">62% faster</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="py-4 pr-8">Navigation clicks</td>
                    <td className="py-4 pr-8">12-15 clicks</td>
                    <td className="py-4 pr-8">3-5 clicks</td>
                    <td className="py-4 font-medium">73% reduction</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="py-4 pr-8">User satisfaction</td>
                    <td className="py-4 pr-8">2.4/5</td>
                    <td className="py-4 pr-8">4.2/5</td>
                    <td className="py-4 font-medium">75% increase</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="py-4 pr-8">Time to find info</td>
                    <td className="py-4 pr-8">5+ minutes</td>
                    <td className="py-4 pr-8">30 seconds</td>
                    <td className="py-4 font-medium">90% reduction</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-8">PSR creation time</td>
                    <td className="py-4 pr-8">15+ minutes</td>
                    <td className="py-4 pr-8">&lt;3 minutes</td>
                    <td className="py-4 font-medium">80% faster</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded text-center border-l-4 border-gray-400 dark:border-gray-500">
            <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
              "The new dashboard feels like we're using a completely different product. Everything I need is right there, and it actually makes sense now."
            </blockquote>
            <cite className="text-gray-600 dark:text-gray-400 font-medium">— PMO Director, Enterprise Client</cite>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-700">
        <div className="space-y-12">
          <h2 className="text-3xl font-light dark:text-white">Design Principles That Drove Success</h2>

          {/* Image Placeholder */}
          <div className="bg-gray-50 dark:bg-gray-800 aspect-video rounded flex items-center justify-center border dark:border-gray-700">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="text-2xl mb-2">🎨</div>
              <p className="text-sm">Design System</p>
              <p className="text-xs mt-1">Visual showing design principles and component library</p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">1</div>
              <div>
                <h4 className="font-medium mb-2 dark:text-white">Context Over Content</h4>
                <p className="text-gray-700 dark:text-gray-300">Show relevant information based on user selection, not everything at once</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">2</div>
              <div>
                <h4 className="font-medium mb-2 dark:text-white">Visual Hierarchy Matters</h4>
                <p className="text-gray-700 dark:text-gray-300">Most important tasks get prime real estate. Secondary functions remain accessible but don't clutter</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">3</div>
              <div>
                <h4 className="font-medium mb-2 dark:text-white">Reduce Cognitive Load</h4>
                <p className="text-gray-700 dark:text-gray-300">Consistent visual language, clear action states and feedback, logical information grouping</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">4</div>
              <div>
                <h4 className="font-medium mb-2 dark:text-white">Speed of Completion</h4>
                <p className="text-gray-700 dark:text-gray-300">Optimize for user goals, not feature showcasing. Minimize clicks to common actions</p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-50 dark:bg-gray-800 aspect-video rounded flex items-center justify-center border dark:border-gray-700">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="text-2xl mb-2">🔄</div>
              <p className="text-sm">Before/After UI Comparison</p>
              <p className="text-xs mt-1">Side-by-side showing key component improvements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-700">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-light dark:text-white">The Ripple Effect: Beyond Pretty Interfaces</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The redesign didn't just improve usability—it changed user behavior:
            </p>
          </div>

          <div className="grid gap-6">
            <div>
              <h4 className="font-medium mb-2 dark:text-white">Increased Feature Adoption</h4>
              <p className="text-gray-700 dark:text-gray-300">Users now explore previously hidden capabilities</p>
            </div>
            <div>
              <h4 className="font-medium mb-2 dark:text-white">Better Project Outcomes</h4>
              <p className="text-gray-700 dark:text-gray-300">Faster information access leads to quicker decision-making</p>
            </div>
            <div>
              <h4 className="font-medium mb-2 dark:text-white">Client Retention</h4>
              <p className="text-gray-700 dark:text-gray-300">Early indicators show improved client satisfaction and reduced churn risk</p>
            </div>
            <div>
              <h4 className="font-medium mb-2 dark:text-white">Internal Confidence</h4>
              <p className="text-gray-700 dark:text-gray-300">Our team now has a clear design system and user-centered approach for future features</p>
            </div>
          </div>

          <div className="bg-black dark:bg-white text-white dark:text-black p-8 rounded text-center">
            <h3 className="text-xl font-medium mb-4">Key Takeaway</h3>
            <p className="text-gray-300 dark:text-gray-700 leading-relaxed">
              Sometimes the best innovation isn't adding more features—it's removing the friction that prevents users from achieving their goals. By focusing on what actually matters to PMs and PMOs, we transformed a legacy liability into a competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-gray-200 dark:border-gray-700 mt-24">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {prevStudy ? (
              <Link href={`/works/${prevStudy.slug}`} className="flex items-center group mb-6 md:mb-0">
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

