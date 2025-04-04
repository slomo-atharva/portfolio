"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface HeroHeadingProps {
  defaultText: string
  hoverText: string
}

export default function HeroHeading({ defaultText, hoverText }: HeroHeadingProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative h-auto mb-6 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white absolute w-full transition-all duration-500 ease-in-out",
          isHovered ? "opacity-0 transform translate-y-[-20px] blur-sm" : "opacity-100 transform translate-y-0 blur-0",
        )}
      >
        {defaultText}
      </h1>
      <h1
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white absolute w-full transition-all duration-500 ease-in-out",
          isHovered ? "opacity-100 transform translate-y-0 blur-0" : "opacity-0 transform translate-y-[20px] blur-sm",
        )}
      >
        {hoverText}
      </h1>
      {/* Invisible text to maintain proper height */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0 pointer-events-none">
        {defaultText.length > hoverText.length ? defaultText : hoverText}
      </h1>
    </div>
  )
}

