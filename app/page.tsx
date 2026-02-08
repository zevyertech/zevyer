"use client"

import type React from "react"
import { useState, useRef, useEffect, lazy, Suspense } from "react"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  PlayCircle,
  Sparkles,
  Star,
  BarChart3,
  Code2,
  Zap,
} from "lucide-react"
import { BookingPopup } from "@/components/ui/booking-popup"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const Testimonials = lazy(() => import("@/components/ui/testimonials").then((mod) => ({ default: mod.Testimonials })))
const FeatureSteps = lazy(() => import("@/components/blocks/feature-steps").then((mod) => ({ default: mod.FeatureSteps })))
const FAQSection = lazy(() => import("@/components/ui/faq-section").then((mod) => ({ default: mod.FAQSection })))
const FuturisticFooter = lazy(() =>
  import("@/components/ui/futuristic-footer").then((mod) => ({ default: mod.FuturisticFooter })),
)

export default function Home() {
  const [submitted, setSubmitted] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const [activeBanner, setActiveBanner] = useState(0)
  const [isBannerPaused, setIsBannerPaused] = useState(false)
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

  useEffect(() => {
    if (isBannerPaused) return
    const timer = window.setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % 3)
    }, 3000)
    return () => window.clearInterval(timer)
  }, [isBannerPaused])

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
  ]

  const services = [
    {
      slug: "performance-marketing",
      icon: BarChart3,
      title: "Cloud Infrastructure",
      desc: "Accelerate performance, scale with confidence, and optimize infrastructure.",
    },
    {
      slug: "custom-development",
      icon: Code2,
      title: "Software Development",
      desc: "Custom product builds and robust systems aligned with your goals.",
    },
    {
      slug: "ai-automation",
      icon: Zap,
      title: "Data Analytics",
      desc: "Actionable insights and reporting that drive better decisions.",
    },
  ]

  const faqItems = [
    {
      question: "How quickly can we launch?",
      answer:
        "Most projects start within 5 business days and move into execution within 2-3 weeks.",
      meta: "Timeline",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer retainers and long-term optimization support after launch.",
      meta: "Support",
    },
    {
      question: "Can you work with our internal team?",
      answer: "Absolutely. We collaborate with in-house teams and provide a smooth handoff.",
      meta: "Collaboration",
    },
  ]

  const serviceBanners = [
    {
      label: "Cloud Infrastructure",
      title: "Scale faster with reliable cloud architecture.",
      cta: "Explore Cloud Solutions",
      href: "/services/performance-marketing",
    },
    {
      label: "Software Development",
      title: "Ship modern products built for growth.",
      cta: "See Development Services",
      href: "/services/custom-development",
    },
    {
      label: "Data Analytics",
      title: "Turn data into decisions that drive revenue.",
      cta: "Unlock Analytics",
      href: "/services/ai-automation",
    },
  ]

  return (
    <main className="min-h-screen bg-[#FFFFFB] text-slate-900">
      <BookingPopup isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      <div className="fixed top-0 left-0 right-0 z-40 bg-[#E12836] text-[#FFFFFB]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-sm font-semibold">
          <span>Limited slots open for Q2 growth partners.</span>
          <Link href="/contact" className="inline-flex items-center gap-2">
            Book a Strategy Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <section className="relative overflow-hidden bg-[#083EFD] text-[#FFFFFB]">
        <div className="absolute inset-0 opacity-25">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
              backgroundSize: "26px 26px",
            }}
          />
        </div>
        <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-[#E12836]/25 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold">
                <Star className="h-4 w-4 text-[#FFFFFB]" />
                DIGITAL HAS EVOLVED
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                Empowering Your <span className="text-[#FFFFFB]">Tech Solutions</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/80">
                Innovative solutions to drive your business forward.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E12836] px-6 py-3 text-sm font-semibold text-[#FFFFFB] shadow-lg"
                >
                  Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
                </Link>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white">
                  <PlayCircle className="h-4 w-4" />
                  Watch Demo
                </button>
              </div>
              <div
                className="mt-10 rounded-2xl bg-white/10 p-4 backdrop-blur"
                onMouseEnter={() => setIsBannerPaused(true)}
                onMouseLeave={() => setIsBannerPaused(false)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/70">{serviceBanners[activeBanner].label}</p>
                    <p className="mt-2 text-base font-semibold">{serviceBanners[activeBanner].title}</p>
                  </div>
                  <Link
                    href={serviceBanners[activeBanner].href}
                    className="inline-flex items-center gap-2 rounded-full bg-[#FFFFFB] px-4 py-2 text-xs font-semibold text-[#083EFD]"
                  >
                    {serviceBanners[activeBanner].cta} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="mt-3 flex gap-2">
                  {serviceBanners.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 w-6 rounded-full ${idx === activeBanner ? "bg-[#E12836]" : "bg-white/30"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <div className="rounded-2xl bg-[#FFFFFB] p-5 text-slate-800 shadow-lg">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Analytics</span>
                    <span className="text-[#E12836]">+24%</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {["#083EFD", "#E12836", "#083EFD"].map((color, idx) => (
                      <div key={`${color}-${idx}`} className="rounded-lg bg-slate-100 px-2 py-4 text-center">
                        <div className="h-10 rounded-md" style={{ backgroundColor: color, opacity: 0.85 }} />
                        <p className="mt-2 text-xs text-slate-500">Q{idx + 1}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-[#083EFD]/20" />
                    <div>
                      <p className="text-sm font-semibold text-slate-700">Live dashboards</p>
                      <p className="text-xs text-slate-500">Real-time insights</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center text-white">
                  {["Cloud", "Apps", "Data"].map((label) => (
                    <div key={label} className="rounded-2xl bg-white/15 px-3 py-4 text-xs font-semibold">
                      {label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 right-6 h-16 w-16 rounded-2xl bg-[#E12836]" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Our Services</h2>
          <p className="mt-2 text-sm text-slate-500">Advanced solutions for your digital business.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <div className="relative rounded-2xl">
                    <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#083EFD]/10 text-[#083EFD]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-slate-800">{service.title}</h3>
                      <p className="mt-2 text-sm text-slate-500">{service.desc}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              Driving Innovation <span className="block text-[#083EFD]">&amp; Efficiency</span>
            </h3>
            <p className="mt-3 text-sm text-slate-500">
              Delivering cutting-edge tech solutions for your business growth.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {["Scalable and secure solutions", "Expert team of developers", "Data-driven insights"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#E12836]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-[#083EFD]/10 p-6">
              <div className="rounded-2xl bg-white p-4 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Productivity</p>
                    <p className="text-lg font-semibold text-slate-800">+32%</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-[#E12836]/20" />
                </div>
                <div className="mt-4 h-32 rounded-xl bg-gradient-to-r from-[#083EFD]/20 via-[#083EFD]/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="py-16" />}>
        <FeatureSteps
          features={processFeatures}
          title="How We Deliver Results"
          autoPlayInterval={4000}
          imageHeight="h-[360px]"
        />
      </Suspense>

      <section id="case-studies" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Results That Speak</h2>
            <p className="mt-2 text-sm text-slate-500">Proven growth for ambitious companies.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { metric: "+320%", label: "Lead Growth", detail: "TechStartup AI" },
              { metric: "4.8x", label: "ROAS Improvement", detail: "E-Commerce Pro" },
              { metric: "200 hrs", label: "Time Saved", detail: "SaaS Scale-Up" },
            ].map((cs) => (
              <div key={cs.metric} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <div className="text-3xl font-bold text-[#083EFD]">{cs.metric}</div>
                <p className="mt-2 text-sm font-semibold text-slate-800">{cs.label}</p>
                <p className="mt-1 text-xs text-slate-500">{cs.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#083EFD] text-[#FFFFFB]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Sparkles className="mx-auto h-10 w-10" />
          <h2 className="mt-4 text-3xl font-bold">AI & Automation Lab</h2>
          <p className="mt-3 text-white/80">
            Intelligent chatbots, predictive analytics, and automation workflows tailored to your business.
          </p>
          <button
            onClick={handleBookClick}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E12836] px-6 py-3 text-sm font-semibold text-white"
          >
            Explore AI Solutions <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section ref={formRef} className="py-16 bg-[#FFFFFB]">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 text-center">Get Your Growth Plan</h2>
            <p className="mt-2 text-center text-sm text-slate-500">
              Tell us about your business. We&apos;ll create a tailored roadmap in 24 hours.
            </p>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#083EFD]/10">
                  <CheckCircle2 className="h-7 w-7 text-[#083EFD]" />
                </div>
                <p className="text-lg font-semibold text-slate-900">Thanks! We&apos;ll be in touch shortly.</p>
                <p className="text-sm text-slate-500">Check your email for next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {error && (
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {error}
                  </div>
                )}
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-lg border border-slate-200 px-4 py-3 text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-lg border border-slate-200 px-4 py-3 text-sm"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
                />
                <select
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
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
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-[#E12836] py-3 text-sm font-semibold text-white disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Get My Growth Plan"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="py-16" />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div className="py-16" />}>
        <div className="bg-[#083EFD]/10">
          <FAQSection
            title="Common Questions"
            subtitle="Everything you need to know about working with Zevyer."
            introLabel="Zevyer FAQ"
            faqs={faqItems}
          />
        </div>
      </Suspense>

      <section className="bg-[#083EFD] py-16 text-[#FFFFFB]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to Accelerate Your Business?</h2>
          <p className="mt-2 text-sm text-white/80">Transform your tech strategy with Zevyer.</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E12836] px-6 py-3 text-sm font-semibold text-white"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Suspense fallback={<div className="h-40" />}>
        <FuturisticFooter />
      </Suspense>
    </main>
  )
}
