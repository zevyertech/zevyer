"use client"

import Link from "next/link"
import { ArrowRight, BarChart3, Sparkles, Code2, Zap, MessageSquare } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { FuturisticFooter } from "@/components/ui/futuristic-footer"
import { BookingPopup } from "@/components/ui/booking-popup"
import { useState } from "react"

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const services = [
    {
      slug: "performance-marketing",
      title: "Performance Marketing",
      icon: BarChart3,
      description: "Data-driven campaigns across Google Ads, Meta, TikTok, and LinkedIn focused on measurable ROI.",
      outcomes: ["3x Average ROAS Uplift", "Qualified Lead Growth", "Cost-Per-Acquisition Reduction"],
    },
    {
      slug: "seo-and-content",
      title: "SEO & Content",
      icon: Zap,
      description: "Technical SEO audits, keyword strategy, and high-conversion content systems.",
      outcomes: ["Organic Traffic Growth", "Ranking for Intent Keywords", "Long-Term Asset Build"],
    },
    {
      slug: "branding-creative",
      title: "Branding & Creative",
      icon: Sparkles,
      description: "Brand strategy, design systems, video production, and conversion-optimized creative.",
      outcomes: ["Cohesive Brand Identity", "Design System Documentation", "Creative Assets at Scale"],
    },
    {
      slug: "custom-development",
      title: "Custom Development",
      icon: Code2,
      description: "Web applications, mobile apps, and software built with modern tech and scalability in mind.",
      outcomes: ["Production-Ready Code", "Fast Launch Timeline", "Seamless Integrations"],
    },
    {
      slug: "marketing-strategy",
      title: "Marketing Consultation",
      icon: MessageSquare,
      description: "Strategic roadmaps, audits, optimization sprints, and growth planning.",
      outcomes: ["Clear Growth Strategy", "Channel Recommendations", "Quick Wins Identified"],
    },
    {
      slug: "ai-automation",
      title: "AI & Automation",
      icon: Sparkles,
      description: "AI chatbots, autonomous agents, predictive analytics, and workflow automation.",
      outcomes: ["Automated Workflows", "Intelligent Customer Interactions", "Data-Driven Insights"],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <BookingPopup isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Everything Digital & Tech</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From marketing consultation to custom AI development. We build, automate, and scale your digital presence
            under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <div className="relative rounded-2xl">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    <div className="relative p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-400 hover:shadow-xl transition-all cursor-pointer bg-white">
                      <Icon className="w-12 h-12 text-indigo-600 mb-4" />
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                            <span className="text-gray-700">{outcome}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center text-indigo-600 font-semibold">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-all"
          >
            Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      <FuturisticFooter />
    </main>
  )
}
