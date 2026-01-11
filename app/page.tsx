"use client"

import type React from "react"
import { useState, useRef, lazy, Suspense } from "react"
import { HeroSection } from "@/components/ui/light-saas-hero-section"
import { ArrowRight, CheckCircle, Zap, BarChart3, Sparkles, Code2, MessageSquare } from "lucide-react"
import Link from "next/link"
import { BookingPopup } from "@/components/ui/booking-popup"
import { GlowingEffect } from "@/components/ui/glowing-effect"

// Lazy load heavy components
const Testimonials = lazy(() => import("@/components/ui/testimonials").then(mod => ({ default: mod.Testimonials })))
const FeatureSteps = lazy(() => import("@/components/blocks/feature-steps").then(mod => ({ default: mod.FeatureSteps })))
const FAQSection = lazy(() => import("@/components/ui/faq-section").then(mod => ({ default: mod.FAQSection })))
const FuturisticFooter = lazy(() => import("@/components/ui/futuristic-footer").then(mod => ({ default: mod.FuturisticFooter })))

export default function Home() {
  const [submitted, setSubmitted] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  })

  const handleBookClick = () => {
    setIsBookingOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/growth-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit request")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", company: "", budget: "", message: "" })
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  const processFeatures = [
    {
      step: "Step 1",
      title: "Discover",
      content: "Audit your current state, understand goals & constraints",
      image: "/discovery-analysis-business-strategy.jpg",
    },
    {
      step: "Step 2",
      title: "Strategy",
      content: "Build roadmap: channels, messaging, positioning",
      image: "/strategy-planning-digital-roadmap.jpg",
    },
    {
      step: "Step 3",
      title: "Build",
      content: "Design & development: websites, apps, integrations",
      image: "/web-development-design-build.jpg",
    },
    {
      step: "Step 4",
      title: "Launch",
      content: "Deploy campaigns: ads, content, sequences",
      image: "/campaign-launch-deployment.jpg",
    },
    {
      step: "Step 5",
      title: "Optimize & Scale",
      content: "Monitor, iterate, automate with AI for scale",
      image: "/optimization-scaling-analytics.jpg",
    },
  ]

  const faqItems = [
    {
      question: "Do you do retainers or one-off projects?",
      answer:
        "Both. We structure engagements based on your needs—one-off audits, project-based work, or ongoing retainers with strategic oversight and optimization.",
      meta: "Engagement",
    },
    {
      question: "What's your minimum budget?",
      answer:
        "Projects typically start at $15K. Retainers start at $3K/month. We're flexible and happy to discuss your specific situation.",
      meta: "Pricing",
    },
    {
      question: "How fast can we start?",
      answer:
        "We can kick off discovery within 5 business days. Most projects are in full execution mode within 2-3 weeks of contract.",
      meta: "Timeline",
    },
    {
      question: "Do you handle both marketing and development?",
      answer:
        "Yes. That's our differentiator—integrated strategy, design, marketing, and software development all coordinated by one team.",
      meta: "Services",
    },
    {
      question: "How do you report results?",
      answer:
        "Monthly dashboards tied to KPIs you care about: ROAS, CAC, MRR, lead quality, conversion rates, automation impact, and more.",
      meta: "Reporting",
    },
    {
      question: "Can you work with our internal team?",
      answer:
        "Absolutely. We collaborate seamlessly with in-house teams, support training, and hand off operations when desired.",
      meta: "Collaboration",
    },
    {
      question: "Do you build AI chatbots and agents?",
      answer: "Yes. Custom LLM integrations, multi-turn agents, knowledge base automation, and predictive workflows.",
      meta: "AI",
    },
    {
      question: "Do you sign NDAs?",
      answer:
        "Always. Confidentiality and security are non-negotiable. We handle sensitive data with enterprise-grade protocols.",
      meta: "Security",
    },
  ]

  return (
    <main className="min-h-screen">
      <BookingPopup isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      <HeroSection onBookClick={handleBookClick} />

      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-sm font-semibold text-gray-600 mb-8 uppercase tracking-wide">
            Trusted by 150+ brands
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {["Stripe", "Vercel", "Slack", "Figma", "GitHub"].map((name) => (
              <div key={name} className="flex items-center justify-center">
                <div className="px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-600 font-semibold text-sm">
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything Digital & Tech Under One Roof
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From strategy to execution, design to development, marketing to AI automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Performance Marketing",
                desc: "Google Ads, Meta, TikTok, LinkedIn—data-driven campaigns with measurable ROI.",
              },
              {
                icon: Sparkles,
                title: "Branding & Creative",
                desc: "Brand strategy, design systems, video, and content that converts.",
              },
              {
                icon: Code2,
                title: "Web & App Development",
                desc: "Custom web applications, mobile apps, and software built for scale.",
              },
              {
                icon: Zap,
                title: "SEO & Content",
                desc: "Technical SEO, content strategy, and organic growth systems.",
              },
              {
                icon: MessageSquare,
                title: "Marketing Consultation",
                desc: "Strategic roadmaps, audit & optimization, growth planning.",
              },
              {
                icon: Sparkles,
                title: "AI & Automation",
                desc: "Chatbots, agents, workflows, and predictive analytics for your business.",
              },
            ].map((service, i) => {
              const Icon = service.icon
              return (
                <Link
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                  key={i}
                >
                  <div className="relative rounded-2xl">
                    <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                    <div className="relative p-8 rounded-2xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer bg-white">
                      <Icon className="w-10 h-10 text-indigo-600 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="py-24 bg-white" />}>
        <FeatureSteps
          features={processFeatures}
          title="How Zevyer Works"
          autoPlayInterval={4000}
          imageHeight="h-[500px]"
        />
      </Suspense>

      <section id="case-studies" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Results That Speak</h2>
            <p className="text-xl text-gray-600">See how we drive growth for companies like yours</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "TechStartup AI",
                problem: "Unclear market positioning, low lead quality",
                result: "3.2x lead growth in 90 days",
                metric: "+320%",
              },
              {
                company: "E-Commerce Pro",
                problem: "High CAC, low ROAS on performance channels",
                result: "Reduced CAC by 42%, ROAS 4.8x",
                metric: "4.8x ROAS",
              },
              {
                company: "SaaS Scale-Up",
                problem: "Manual processes, lack of automation",
                result: "Automated workflows saved 200 hrs/mo",
                metric: "200 hrs/mo saved",
              },
            ].map((cs, i) => (
              <Link href={`/case-studies#${cs.company.toLowerCase().replace(/\s/g, "-")}`} key={i}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 hover:shadow-lg transition-all cursor-pointer">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-4">
                    {cs.metric}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cs.company}</h3>
                  <p className="text-sm text-gray-600 mb-4">Challenge: {cs.problem}</p>
                  <p className="text-sm font-semibold text-indigo-600">Result: {cs.result}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all"
            >
              View All Case Studies <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-indigo-900 via-indigo-800 to-violet-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Zevyer AI Lab</h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
            Custom AI solutions: intelligent chatbots, autonomous agents, predictive analytics, internal automation
            tools, and everything in between. We build AI that works for you.
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-indigo-900 font-semibold hover:bg-indigo-50 transition-all"
          >
            Explore AI Solutions <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      <section ref={formRef} className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Get Your Growth Plan</h2>
            <p className="text-gray-600 text-center mb-8">
              Tell us about your business. We'll create a tailored roadmap in 24 hours.
            </p>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-xl font-semibold text-gray-900">Thanks! We'll be in touch shortly.</p>
                <p className="text-gray-600 mt-2">Check your email for next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                    {error}
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                />
                <select
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                >
                  <option value="">Select Budget Range</option>
                  <option value="<25k">&lt; $25K</option>
                  <option value="25-50k">$25K - $50K</option>
                  <option value="50-100k">$50K - $100K</option>
                  <option value=">100k">&gt; $100K</option>
                </select>
                <textarea
                  placeholder="What do you need help with?"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Get My Growth Plan"}
                </button>
                <p className="text-xs text-gray-500 text-center">
                  We reply within 24 hours. NDA available. Secure by design.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="py-24 bg-white" />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div className="py-24 bg-white" />}>
        <FAQSection
          title="Common Questions"
          subtitle="Everything you need to know about working with Zevyer. Clear answers, no noise."
          introLabel="Zevyer FAQ"
          faqs={faqItems}
        />
      </Suspense>

      <section className="py-24 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let's build your growth strategy together. Book a free consultation with our team.
          </p>
          <button
            onClick={handleBookClick}
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-all shadow-xl"
          >
            Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      <Suspense fallback={<div className="h-96 bg-gray-950" />}>
        <FuturisticFooter />
      </Suspense>
    </main>
  )
}
