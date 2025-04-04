import type React from "react"
import { cn } from "@/lib/utils"

interface RetroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  noPadding?: boolean
}

export function RetroCard({ children, className, noPadding, ...props }: RetroCardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800/80 border border-[#161616]/20 dark:border-gray-700 rounded-lg transition-all duration-200 hover:border-[#161616]/40 dark:hover:border-gray-600",
        !noPadding && "p-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default RetroCard

