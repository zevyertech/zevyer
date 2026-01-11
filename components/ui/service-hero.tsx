"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react"
import { ShaderBackground } from "./shader-background"
import { BookingPopup } from "./booking-popup"

interface ServiceHeroProps {
  title: string
  tagline: string
  intro: string
  badge?: string
}

const GlassmorphicNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  const services = [
    { slug: "performance-marketing", label: "Performance Marketing" },
    { slug: "seo-and-content", label: "SEO & Content" },
    { slug: "branding-creative", label: "Branding & Creative" },
    { slug: "custom-development", label: "Custom Development" },
    { slug: "marketing-strategy", label: "Marketing Consultation" },
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
        <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-2 shadow-lg border border-white/20 flex items-center justify-between">
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
                className="text-sm font-medium text-white/90 hover:text-white transition-colors flex items-center gap-1"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  {services.map((service, idx) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className={`block px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors ${
                        idx !== services.length - 1 ? "border-b border-white/10" : ""
                      }`}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/case-studies" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link href="/blog" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              About
            </Link>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-medium rounded-full hover:from-indigo-600 hover:to-violet-600 transition-all shadow-md"
            >
              Book Free Consultation
            </button>
          </div>

          <button
            className="md:hidden w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex flex-col gap-1.5">
              <div className={`w-5 h-0.5 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
              <div className={`w-5 h-0.5 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
              <div
                className={`w-5 h-0.5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-auto w-11/12 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col">
              <Link
                href="/services"
                className="px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                className="px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/blog"
                className="px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  setIsBookingOpen(true)
                  setIsMenuOpen(false)
                }}
                className="px-4 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-medium rounded-lg hover:from-indigo-600 hover:to-violet-600 transition-all m-4"
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

export const ServiceHero = ({ title, tagline, intro, badge }: ServiceHeroProps) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <BookingPopup isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Shader Background */}
        <div className="absolute inset-0 z-0">
          <ShaderBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>

        {/* Navbar */}
        <GlassmorphicNavbar />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-40 pb-24 text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 mr-2" />
            {badge || title}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 text-balance">{title}</h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300 mb-6">
            {tagline}
          </p>

          {/* Intro */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
            {intro}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center group"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="/case-studies"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>
    </>
  )
}
