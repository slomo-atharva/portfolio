"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Wait until mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (mounted) {
      setTheme(theme === "dark" ? "light" : "dark")
    }
  }

  return {
    theme,
    mounted,
    toggleTheme,
  }
}

