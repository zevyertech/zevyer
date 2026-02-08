"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div
          className={`mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 ${
            isHome
              ? "text-white border border-white/20 rounded-full"
              : "rounded-full bg-white/95 text-gray-900 shadow-md backdrop-blur border border-slate-200"
          }`}
        >
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image src="/zevyer-logo.svg" alt="Zevyer Logo" width={28} height={28} className="h-7 w-7" />
            <span className="ml-2 text-sm font-semibold">Zevyer</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/" className="hover:opacity-80">
              Home
            </Link>
            <Link href="/about" className="hover:opacity-80">
              About
            </Link>
            <Link href="/services" className="hover:opacity-80">
              Services
            </Link>
            <Link href="/pricing" className="hover:opacity-80">
              Pricing
            </Link>
            <Link href="/blog" className="hover:opacity-80">
              Blog
            </Link>
            <Link
              href="/contact"
              className={`rounded-full px-4 py-2 text-sm font-semibold shadow-sm ${
                isHome ? "bg-white text-blue-700" : "bg-blue-600 text-white"
              }`}
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex flex-col gap-1.5">
              <div
                className={`w-5 h-0.5 ${isHome ? "bg-white" : "bg-gray-900"} transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></div>
              <div
                className={`w-5 h-0.5 ${isHome ? "bg-white" : "bg-gray-900"} transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 ${isHome ? "bg-white" : "bg-gray-900"} transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-auto w-11/12 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            <div className="flex flex-col">
              <Link
                href="/"
                className="px-4 py-3 text-sm font-medium text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-sm font-medium text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="px-4 py-3 text-sm font-medium text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/pricing"
                className="px-4 py-3 text-sm font-medium text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="px-4 py-3 text-sm font-medium text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="m-4 rounded-lg bg-indigo-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
