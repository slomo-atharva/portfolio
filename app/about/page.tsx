import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import RetroCard from "@/components/retro-card"

export default function AboutPage() {
  return (
    <main className="pt-28 md:pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-16 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">About Me</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I'm a product designer who loves creating intuitive, user-friendly interfaces that make technology
                easier to use. Currently elevating Gravity One's strategic planning platform, used by businesses and
                government organizations across the UAE and Australia. My process starts with deep user research,
                collaborative iteration, and ends with polished solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-black text-white hover:bg-gray-800 dark:bg-black dark:text-white dark:hover:bg-gray-900 hero-button"
                >
                  <Link href="/#contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-black text-black hover:bg-black/5 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800/20 hero-button"
                >
                  <a href="/Akshay%20Krishnan%20-%20Product%20Designer_UI%20UX%20Designer%20Resume.pdf" download>
                    Download CV <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/1111.png"
                alt="Akshay Krishnan portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Background Section - New Minimal Layout */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center dark:text-white">My Background</h2>

          {/* Experience Timeline */}
          <div className="mb-20">
            <h3 className="text-xl font-bold mb-10 inline-block border-b-2 border-[#161616] dark:border-gray-400 pb-2 dark:text-white">
              Experience
            </h3>
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-3 h-3 rounded-full bg-[#161616] dark:bg-gray-400"></div>
                    <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-600 ml-1.5 -mt-1"></div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-medium dark:text-white">{experience.role}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{experience.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">{experience.company}</p>
                    <p className="text-gray-700 dark:text-gray-300">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h3 className="text-xl font-bold mb-10 inline-block border-b-2 border-[#161616] dark:border-gray-400 pb-2 dark:text-white">
                Education
              </h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-3 h-3 rounded-full bg-[#161616] dark:bg-gray-400"></div>
                      {index < education.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-600 ml-1.5 -mt-1"></div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium dark:text-white">{edu.degree}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{edu.school}</p>
                      <p className="text-gray-600 dark:text-gray-300">{edu.period}</p>
                      {edu.gpa && <p className="text-gray-600 dark:text-gray-300">GPA: {edu.gpa}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold mb-10 inline-block border-b-2 border-[#161616] dark:border-gray-400 pb-2 dark:text-white">
                Skills
              </h3>
              <div className="grid grid-cols-2 gap-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#161616] dark:bg-gray-400 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 md:px-8 lg:px-16 py-20 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">My Values</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            These core principles guide my approach to design and collaboration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <RetroCard key={index} className="h-full">
                <h3 className="text-xl font-bold mb-4 dark:text-white">{value.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
              </RetroCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-gradient-to-br from-emerald-300 via-yellow-100 to-purple-300 dark:from-emerald-900 dark:via-gray-900 dark:to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">Ready to work together?</h2>
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance projects, full-time positions, or just a friendly chat about design.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-black text-white hover:bg-gray-800 dark:bg-black dark:text-white dark:hover:bg-gray-900"
          >
            <Link href="/#contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

const skills = [
  "User Interface Design",
  "User Experience Design",
  "User Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Figma",
  "Adobe Creative Suite",
  "Responsive Design",
  "Design Thinking",
  "User Flows",
  "Usability Testing",
]

const values = [
  {
    title: "User-Centered",
    description:
      "I believe in designing for real people with real needs. Every decision starts with understanding the user.",
  },
  {
    title: "Collaborative",
    description:
      "Great design happens through teamwork. I value open communication and cross-functional collaboration.",
  },
  {
    title: "Purposeful",
    description:
      "I focus on solving real problems with thoughtful solutions that balance user needs and business goals.",
  },
]

const experiences = [
  {
    role: "UI/UX Designer",
    company: "Tandemloop Technologies",
    period: "Jan 2024 - Present",
    description:
      "Designed user-friendly interfaces for products such as Gravity One's Strategy Dot Zero, a platform utilized by government organizations and enterprises. Performed research, usability testing, and prototyping to create intuitive designs aligned with client needs.",
  },
  {
    role: "Junior Designer",
    company: "300 Pixlr",
    period: "Jun 2023 - Jan 2024",
    description:
      "Designed intuitive web and mobile interfaces, focusing on user-friendly experiences and maintaining brand consistency. Conducted user research and collaborated with cross-functional teams to deliver impactful design solutions tailored to user needs.",
  },
]

const education = [
  {
    degree: "Bachelor's Degree, Computer Science",
    school: "Mar Baselios Christian College of Engineering & Technology",
    period: "Aug 2019 - Jun 2023",
    gpa: "7.79",
  },
  {
    degree: "Google UX Design Professional Certificate",
    school: "Google",
    period: "Aug 2023",
  },
  {
    degree: "UX/UI Professional Certification",
    school: "Designboat UI/UX School",
    period: "Dec 2023",
  },
]

