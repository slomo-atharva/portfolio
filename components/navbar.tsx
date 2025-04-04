"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/theme-provider"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  // Wait until mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { name: "Works", path: "/works" },
    { name: "About", path: "/about" },
  ]

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only handle contact link specially on homepage
    if (pathname === "/") {
      e.preventDefault()
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
      closeMenu()
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent dark:bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="relative">
            {/* Light Mode Logos */}
            {/* Desktop Logo - Light Mode */}
            <svg
              width="126"
              height="9"
              viewBox="0 0 126 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block dark:hidden"
            >
              <path
                d="M8.052 8.5H6.456L5.868 6.964H2.196L1.608 8.5H0.012L3.156 0.495999H4.908L8.052 8.5ZM5.472 5.728L4.032 1.912L2.592 5.728H5.472ZM16.7422 8.5H15.0142L12.3262 5.128L11.6302 5.944V8.5H10.2262V0.495999H11.6302V4.312L14.7622 0.495999H16.5022L13.2502 4.276L16.7422 8.5ZM21.7153 8.644C20.2393 8.644 19.1713 8.128 18.4633 7.372L19.2433 6.292C19.7953 6.88 20.6593 7.396 21.7753 7.396C22.9273 7.396 23.3833 6.832 23.3833 6.304C23.3833 4.624 18.7153 5.668 18.7153 2.716C18.7153 1.396 19.8793 0.375999 21.6313 0.375999C22.8793 0.375999 23.8873 0.771999 24.6313 1.492L23.8273 2.536C23.2033 1.912 22.3513 1.624 21.5113 1.624C20.6833 1.624 20.1553 2.02 20.1553 2.62C20.1553 4.108 24.8113 3.184 24.8113 6.172C24.8113 7.504 23.8753 8.644 21.7153 8.644ZM34.3763 8.5H32.9723V5.008H28.8083V8.5H27.4043V0.495999H28.8083V3.772H32.9723V0.495999H34.3763V8.5ZM44.5762 8.5H42.9802L42.3922 6.964H38.7202L38.1322 8.5H36.5362L39.6802 0.495999H41.4322L44.5762 8.5ZM41.9962 5.728L40.5562 1.912L39.1162 5.728H41.9962ZM49.6373 8.5H48.2333V5.176L45.1253 0.495999H46.7333L48.9413 3.928L51.1253 0.495999H52.7333L49.6373 5.176V8.5ZM65.8039 8.5H64.0759L61.3879 5.128L60.6919 5.944V8.5H59.2879V0.495999H60.6919V4.312L63.8239 0.495999H65.5639L62.3119 4.276L65.8039 8.5ZM74.2331 8.5H72.6131L70.8371 5.512H69.4451V8.5H68.0411V0.495999H71.5571C73.1411 0.495999 74.1731 1.528 74.1731 3.004C74.1731 4.432 73.2371 5.2 72.2771 5.356L74.2331 8.5ZM71.3651 4.276C72.1571 4.276 72.7331 3.772 72.7331 3.004C72.7331 2.236 72.1571 1.732 71.3651 1.732H69.4451V4.276H71.3651ZM78.2802 8.5H76.8762V0.495999H78.2802V8.5ZM84.0177 8.644C82.5417 8.644 81.4737 8.128 80.7657 7.372L81.5457 6.292C82.0977 6.88 82.9617 7.396 84.0777 7.396C85.2297 7.396 85.6857 6.832 85.6857 6.304C85.6857 4.624 81.0177 5.668 81.0177 2.716C81.0177 1.396 82.1817 0.375999 83.9337 0.375999C85.1817 0.375999 86.1897 0.771999 86.9337 1.492L86.1297 2.536C85.5057 1.912 84.6537 1.624 83.8137 1.624C82.9857 1.624 82.4577 2.02 82.4577 2.62C82.4577 4.108 87.1137 3.184 87.1137 6.172C87.1137 7.504 86.1777 8.644 84.0177 8.644ZM96.6787 8.5H95.2747V5.008H91.1107V8.5H89.7067V0.495999H91.1107V3.772H95.2747V0.495999H96.6787V8.5ZM106.615 8.5H105.259L101.083 2.788V8.5H99.6786V0.495999H101.119L105.211 6.052V0.495999H106.615V8.5ZM116.815 8.5H115.219L114.631 6.964H110.959L110.371 8.5H108.775L111.919 0.495999H113.671L116.815 8.5ZM114.235 5.728L112.795 1.912L111.355 5.728H114.235ZM125.925 8.5H124.569L120.393 2.788V8.5H118.989V0.495999H120.429L124.521 6.052V0.495999H125.925V8.5Z"
                fill="black"
              />
            </svg>

            {/* Mobile Logo - Light Mode */}
            <svg
              width="17"
              height="8"
              viewBox="0 0 17 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block md:hidden dark:hidden"
            >
              <path
                d="M8.052 8H6.456L5.868 6.464H2.196L1.608 8H0.012L3.156 -0.00400066H4.908L8.052 8ZM5.472 5.228L4.032 1.412L2.592 5.228H5.472ZM16.7422 8H15.0142L12.3262 4.628L11.6302 5.444V8H10.2262V-0.00400066H11.6302V3.812L14.7622 -0.00400066H16.5022L13.2502 3.776L16.7422 8Z"
                fill="black"
              />
            </svg>

            {/* Dark Mode Logos */}
            {/* Desktop Logo - Dark Mode */}
            <svg
              width="126"
              height="9"
              viewBox="0 0 126 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:hidden dark:md:block"
            >
              <path
                d="M8.052 8.5H6.456L5.868 6.964H2.196L1.608 8.5H0.012L3.156 0.495999H4.908L8.052 8.5ZM5.472 5.728L4.032 1.912L2.592 5.728H5.472ZM16.7422 8.5H15.0142L12.3262 5.128L11.6302 5.944V8.5H10.2262V0.495999H11.6302V4.312L14.7622 0.495999H16.5022L13.2502 4.276L16.7422 8.5ZM21.7153 8.644C20.2393 8.644 19.1713 8.128 18.4633 7.372L19.2433 6.292C19.7953 6.88 20.6593 7.396 21.7753 7.396C22.9273 7.396 23.3833 6.832 23.3833 6.304C23.3833 4.624 18.7153 5.668 18.7153 2.716C18.7153 1.396 19.8793 0.375999 21.6313 0.375999C22.8793 0.375999 23.8873 0.771999 24.6313 1.492L23.8273 2.536C23.2033 1.912 22.3513 1.624 21.5113 1.624C20.6833 1.624 20.1553 2.02 20.1553 2.62C20.1553 4.108 24.8113 3.184 24.8113 6.172C24.8113 7.504 23.8753 8.644 21.7153 8.644ZM34.3763 8.5H32.9723V5.008H28.8083V8.5H27.4043V0.495999H28.8083V3.772H32.9723V0.495999H34.3763V8.5ZM44.5762 8.5H42.9802L42.3922 6.964H38.7202L38.1322 8.5H36.5362L39.6802 0.495999H41.4322L44.5762 8.5ZM41.9962 5.728L40.5562 1.912L39.1162 5.728H41.9962ZM49.6373 8.5H48.2333V5.176L45.1253 0.495999H46.7333L48.9413 3.928L51.1253 0.495999H52.7333L49.6373 5.176V8.5ZM65.8039 8.5H64.0759L61.3879 5.128L60.6919 5.944V8.5H59.2879V0.495999H60.6919V4.312L63.8239 0.495999H65.5639L62.3119 4.276L65.8039 8.5ZM74.2331 8.5H72.6131L70.8371 5.512H69.4451V8.5H68.0411V0.495999H71.5571C73.1411 0.495999 74.1731 1.528 74.1731 3.004C74.1731 4.432 73.2371 5.2 72.2771 5.356L74.2331 8.5ZM71.3651 4.276C72.1571 4.276 72.7331 3.772 72.7331 3.004C72.7331 2.236 72.1571 1.732 71.3651 1.732H69.4451V4.276H71.3651ZM78.2802 8.5H76.8762V0.495999H78.2802V8.5ZM84.0177 8.644C82.5417 8.644 81.4737 8.128 80.7657 7.372L81.5457 6.292C82.0977 6.88 82.9617 7.396 84.0777 7.396C85.2297 7.396 85.6857 6.832 85.6857 6.304C85.6857 4.624 81.0177 5.668 81.0177 2.716C81.0177 1.396 82.1817 0.375999 83.9337 0.375999C85.1817 0.375999 86.1897 0.771999 86.9337 1.492L86.1297 2.536C85.5057 1.912 84.6537 1.624 83.8137 1.624C82.9857 1.624 82.4577 2.02 82.4577 2.62C82.4577 4.108 87.1137 3.184 87.1137 6.172C87.1137 7.504 86.1777 8.644 84.0177 8.644ZM96.6787 8.5H95.2747V5.008H91.1107V8.5H89.7067V0.495999H91.1107V3.772H95.2747V0.495999H96.6787V8.5ZM106.615 8.5H105.259L101.083 2.788V8.5H99.6786V0.495999H101.119L105.211 6.052V0.495999H106.615V8.5ZM116.815 8.5H115.219L114.631 6.964H110.959L110.371 8.5H108.775L111.919 0.495999H113.671L116.815 8.5ZM114.235 5.728L112.795 1.912L111.355 5.728H114.235ZM125.925 8.5H124.569L120.393 2.788V8.5H118.989V0.495999H120.429L124.521 6.052V0.495999H125.925V8.5Z"
                fill="white"
              />
            </svg>

            {/* Mobile Logo - Dark Mode */}
            <svg
              width="17"
              height="8"
              viewBox="0 0 17 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden dark:block dark:md:hidden"
            >
              <path
                d="M8.052 8H6.456L5.868 6.464H2.196L1.608 8H0.012L3.156 -0.00400066H4.908L8.052 8ZM5.472 5.228L4.032 1.412L2.592 5.228H5.472ZM16.7422 8H15.0142L12.3262 4.628L11.6302 5.444V8H10.2262V-0.00400066H11.6302V3.812L14.7622 -0.00400066H16.5022L13.2502 3.776L16.7422 8Z"
                fill="white"
              />
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black/70 dark:hover:text-white/70",
                  pathname === link.path ? "text-black dark:text-white" : "text-black/60 dark:text-white/60",
                )}
              >
                {link.name}
              </Link>
            ))}

            <Button
              asChild
              size="sm"
              variant="outline"
              className="rounded-full border-black text-black hover:bg-black/5 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800/20"
            >
              <a href="/Akshay%20Krishnan%20-%20Product%20Designer_UI%20UX%20Designer%20Resume.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                CV
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-black text-white hover:bg-gray-800 dark:bg-black dark:text-white dark:hover:bg-gray-900 hero-button"
            >
              <a href={pathname === "/" ? "#contact" : "/#contact"} onClick={handleContactClick}>
                Get in Touch
              </a>
            </Button>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700" />
                )}
              </button>
            )}
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700" />
                )}
              </button>
            )}

            <button
              className="p-2 rounded-md text-gray-800 dark:text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Fixed animation and interaction */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-all duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto animate-slide-in"
            : "opacity-0 pointer-events-none translate-x-full",
        )}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Close button - explicitly added at the top right */}
          <button
            className="absolute top-4 right-4 p-2 rounded-md text-gray-800 dark:text-white"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <nav className="flex flex-col space-y-6 py-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-xl font-medium transition-colors hover:text-black/70 dark:hover:text-white/70",
                  pathname === link.path ? "text-black dark:text-white" : "text-black/60 dark:text-white/60",
                  "transform transition-all duration-300",
                  isOpen ? `translate-x-0 opacity-100 delay-[${index * 100}ms]` : "translate-x-8 opacity-0",
                )}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/Akshay%20Krishnan%20-%20Product%20Designer_UI%20UX%20Designer%20Resume.pdf"
              download
              className={cn(
                "flex items-center text-xl font-medium transition-colors hover:text-black/70 dark:hover:text-white/70",
                "text-black/60 dark:text-white/60",
                "transform transition-all duration-300",
                isOpen ? "translate-x-0 opacity-100 delay-300" : "translate-x-8 opacity-0",
              )}
              onClick={closeMenu}
            >
              <Download className="h-5 w-5 mr-2" />
              Download CV
            </a>
          </nav>
          <div className="mt-auto pb-8">
            <Button
              asChild
              size="lg"
              className={cn(
                "w-full rounded-full bg-black text-white hover:bg-gray-800 dark:bg-black dark:text-white dark:hover:bg-gray-900 hero-button",
                "transform transition-all duration-300",
                isOpen ? "translate-y-0 opacity-100 delay-300" : "translate-y-8 opacity-0",
              )}
            >
              <a href={pathname === "/" ? "#contact" : "/#contact"} onClick={handleContactClick}>
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

