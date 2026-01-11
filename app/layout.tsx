import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-geist",
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Zevyer - 360° Digital Marketing, Custom Development & AI Solutions",
  description:
    "Strategy, performance marketing, design, web/app/software, and AI automation to grow revenue—measurably. End-to-end digital transformation under one roof.",
  generator: "v0.app",
  keywords: ["digital marketing", "web development", "AI automation", "performance marketing", "SEO", "branding"],
  authors: [{ name: "Zevyer" }],
  creator: "Zevyer",
  publisher: "Zevyer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Zevyer - 360° Digital Marketing, Custom Development & AI Solutions",
    description: "Strategy, performance marketing, design, web/app/software, and AI automation to grow revenue—measurably.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
