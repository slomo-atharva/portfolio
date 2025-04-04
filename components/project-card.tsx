"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  category: string
  link: string
  externalLink?: string
}

export default function ProjectCard({ title, description, image, category, link, externalLink }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (externalLink) {
      return (
        <a
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group block h-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </a>
      )
    }

    return (
      <Link
        href={link}
        className="group block h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </Link>
    )
  }

  return (
    <CardWrapper>
      <div className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={cn("object-cover transition-transform duration-500", isHovered ? "scale-105" : "scale-100")}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          {externalLink && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full">
              <ExternalLink className="h-4 w-4 text-black" />
            </div>
          )}
        </div>
        <div className="flex flex-col flex-grow p-5">
          <div className="mb-2">
            <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200">
              {category}
            </span>
          </div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
          <div
            className={cn(
              "flex items-center text-sm font-medium transition-all duration-300",
              isHovered ? "text-black dark:text-white" : "text-black/60 dark:text-white/60",
            )}
          >
            {externalLink ? "View on Behance" : "View Case Study"}
            <ArrowRight
              className={cn(
                "ml-1 h-4 w-4 transition-transform duration-300",
                isHovered ? "translate-x-1" : "translate-x-0",
              )}
            />
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

