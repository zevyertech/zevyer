"use client"

import Link from "next/link"
import { ArrowRight, TrendingUp, Target, Zap } from "lucide-react"
import { FeatureSteps } from "@/components/blocks/feature-steps"
import { FuturisticFooter } from "@/components/ui/futuristic-footer"
import { BookingPopup } from "@/components/ui/booking-popup"
import { useState } from "react"

export default function CaseStudiesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const cases = [
    {
      id: "techstartup-ai",
      company: "TechStartup AI",
      industry: "SaaS / AI",
      problem: "Unclear market positioning, weak lead quality, inconsistent messaging",
      solution: "Full brand refresh, targeted performance campaign, SEO-optimized content hub",
      metric: "+320%",
      result: "Lead Growth in 90 Days",
      details:
        "Repositioned the company as a premium AI solution provider, built targeted ads, and created educational content. Led to qualified enterprise inbound.",
      icon: TrendingUp,
    },
    {
      id: "ecommerce-pro",
      company: "E-Commerce Pro",
      industry: "E-Commerce",
      problem: "High customer acquisition cost, low ROAS across paid channels",
      solution: "Channel optimization, creative testing, landing page redesign, conversion funnel analysis",
      metric: "4.8x",
      result: "ROAS Improvement",
      details:
        "Cut CAC by 42% through audience segmentation and creative testing. Increased average order value through targeted retargeting.",
      icon: Target,
    },
    {
      id: "saas-scaleup",
      company: "SaaS Scale-Up",
      industry: "SaaS / Productivity",
      problem: "Manual sales processes, lack of automation, losing time to repetitive tasks",
      solution: "Custom AI agents, workflow automation, integration architecture",
      metric: "200 hrs",
      result: "Monthly Time Saved",
      details:
        "Built custom AI agents to handle lead qualification, follow-ups, and data entry. Reduced sales cycle by 35%.",
      icon: Zap,
    },
  ]

  const caseStudyProcess = [
    {
      step: "Step 1",
      title: "Discovery & Analysis",
      content: "Deep dive into your business, market, and current performance metrics",
      image: "/business-analysis-discovery.jpg",
    },
    {
      step: "Step 2",
      title: "Strategy & Planning",
      content: "Develop tailored strategy with clear KPIs and success metrics",
      image: "/strategy-planning-goals.jpg",
    },
    {
      step: "Step 3",
      title: "Implementation",
      content: "Execute campaigns, build assets, deploy integrations",
      image: "/implementation-execution.jpg",
    },
    {
      step: "Step 4",
      title: "Optimization & Results",
      content: "Monitor performance, optimize, and deliver measurable results",
      image: "/results-optimization-analytics.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <BookingPopup isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Results That Speak</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how Zevyer delivers measurable growth for companies across industries.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((cs) => {
              const Icon = cs.icon
              return (
                <Link key={cs.id} href={`/case-studies#${cs.id}`}>
                  <div className="h-full p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-400 hover:shadow-xl transition-all bg-white cursor-pointer">
                    <Icon className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{cs.company}</h3>
                    <p className="text-sm text-indigo-600 font-semibold uppercase mb-4">{cs.industry}</p>

                    <div className="mb-6 space-y-3">
                      <div>
                        <p className="text-xs text-gray-600 font-semibold uppercase mb-1">Challenge</p>
                        <p className="text-sm text-gray-700">{cs.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 font-semibold uppercase mb-1">Solution</p>
                        <p className="text-sm text-gray-700">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-2">
                        {cs.metric}
                      </div>
                      <p className="text-sm font-semibold text-gray-900">{cs.result}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          {cases.map((cs) => (
            <div key={cs.id} id={cs.id} className="mb-16 scroll-mt-32">
              <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{cs.company}</h2>
                <p className="text-indigo-600 font-semibold uppercase text-sm mb-8">{cs.industry}</p>

                <div className="grid md:grid-cols-2 gap-12 mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Challenge</h3>
                    <p className="text-gray-700 leading-relaxed">{cs.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Our Approach</h3>
                    <p className="text-gray-700 leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-xl p-8 mb-8 border border-indigo-100">
                  <p className="text-gray-600 text-sm uppercase font-semibold mb-2">Result</p>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-2">
                    {cs.metric}
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{cs.result}</p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8">{cs.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Achieved These Results - Process Section */}
      <section className="py-24 bg-white">
        <FeatureSteps
          features={caseStudyProcess}
          title="How We Delivered These Results"
          autoPlayInterval={4500}
          imageHeight="h-[400px]"
        />
      </section>

      {/* Get Similar Results CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Similar Results for Your Business</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Whether you're in SaaS, e-commerce, or tech, we have proven strategies to accelerate your growth.
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-all"
          >
            Schedule a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      <FuturisticFooter />
    </main>
  )
}
