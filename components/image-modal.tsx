"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageModalProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export default function ImageModal({ src, alt, width = 600, height = 400, className }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsOpen(false)
    // Re-enable body scrolling
    document.body.style.overflow = "auto"
  }

  return (
    <>
      {/* Clickable Image */}
      <div
        className={cn("cursor-pointer relative group", className)}
        onClick={openModal}
        role="button"
        tabIndex={0}
        aria-label={`View full size image of ${alt}`}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-black/70 text-white text-sm py-1 px-3 rounded-full">Click to enlarge</div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors z-10"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={1200}
              height={800}
              className="w-auto h-auto max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}

