import type React from "react"
import "./globals.css"
import { IBM_Plex_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/react'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
})

export const metadata = {
  title: "Akshay Krishnan | Product Designer",
  description: "Portfolio of Akshay Krishnan, Product Designer specializing in UI/UX design",
  generator: 'v0.dev',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/light.png',
        href: '/light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/Dark.png',
        href: '/Dark.png',
      }
    ]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" storageKey="portfolio-theme">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'