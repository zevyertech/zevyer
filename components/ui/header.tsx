"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { BookingPopup } from "./booking-popup"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  const services = [
    { slug: "performance-marketing", label: "Performance Marketing" },
    { slug: "seo-and-content", label: "SEO & Content" },
    { slug: "branding-creative", label: "Branding & Creative" },
    { slug: "custom-development", label: "Custom Development" },
    { slug: "marketing-consultation", label: "Marketing Consultation" },
    { slug: "ai-automation", label: "AI & Automation" },
  ]

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      <BookingPopup isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl">
        <div className="bg-white backdrop-blur-xl rounded-full px-6 py-2 shadow-lg border border-gray-200 flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src="/zevyer-logo.svg" 
              alt="Zevyer Logo" 
              width={32} 
              height={32} 
              className="h-8 w-8"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors flex items-center gap-1"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white backdrop-blur-md rounded-lg shadow-xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  {services.map((service, idx) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className={`block px-4 py-3 text-sm font-medium text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors ${
                        idx !== services.length - 1 ? "border-b border-gray-100" : ""
                      }`}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/case-studies"
              className="text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors"
            >
              Case Studies
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors">
              Contact
            </Link>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700 transition-all shadow-md"
            >
              Book Free Consultation
            </button>
          </div>

          <button
            className="md:hidden w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex flex-col gap-1.5">
              <div
                className={`w-5 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></div>
              <div className={`w-5 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
              <div
                className={`w-5 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-auto w-11/12 bg-white backdrop-blur-md rounded-lg shadow-xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col">
              <Link
                href="/services"
                className="px-4 py-3 text-sm font-medium text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                className="px-4 py-3 text-sm font-medium text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/blog"
                className="px-4 py-3 text-sm font-medium text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-sm font-medium text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-sm font-medium text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  setIsBookingOpen(true)
                  setIsMenuOpen(false)
                }}
                className="px-4 py-3 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-all m-4"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
