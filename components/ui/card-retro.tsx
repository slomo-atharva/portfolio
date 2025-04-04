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
        "bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        !noPadding && "p-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

