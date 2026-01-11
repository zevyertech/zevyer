"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { FeatureSteps } from "@/components/blocks/feature-steps"
import { FAQSection } from "@/components/ui/faq-section"
import { FuturisticFooter } from "@/components/ui/futuristic-footer"
import { ServiceHero } from "@/components/ui/service-hero"
import { use } from "react"

const serviceDetails: Record<string, any> = {
  "performance-marketing": {
    title: "Performance Marketing",
    tagline: "Data-Driven Campaigns That Scale",
    badge: "Paid Advertising Excellence",
    intro:
      "We run performance campaigns across Google Ads, Meta, TikTok, and LinkedIn with a singular focus: measurable ROI. Every dollar is tracked, optimized, and reported.",
    outcomes: [
      "Average ROAS uplift of 3x within 90 days",
      "Qualified lead generation with defined parameters",
      "Cost-per-acquisition reduction through iterative testing",
      "Clear attribution and conversion tracking",
    ],
    deliverables: [
      "Multi-channel campaign strategy and execution",
      "Creative production and A/B testing frameworks",
      "Audience segmentation and targeting optimization",
      "Weekly performance reports with actionable insights",
      "Bid and budget optimization based on data",
    ],
    tools: ["Google Ads", "Meta Ads Manager", "TikTok Ads", "LinkedIn Campaign Manager", "Analytics 4", "Data Studio"],
    process: [
      {
        step: "Audit & Goal Setting",
        desc: "Review current performance, define KPIs, identify high-opportunity channels",
      },
      { step: "Strategy & Targeting", desc: "Build audience segments, define messaging, create testing roadmap" },
      { step: "Creative & Asset Prep", desc: "Produce ads, build landing pages, set up conversion tracking" },
      { step: "Launch & Monitor", desc: "Deploy campaigns, establish baselines, begin optimization" },
      { step: "Optimize & Scale", desc: "Pause underperformers, scale winners, iterate creative" },
    ],
    faq: [
      {
        q: "How long until I see results?",
        a: "Typically 3-4 weeks to establish baseline performance. Meaningful optimization insights arrive by week 6-8.",
      },
      {
        q: "What's a realistic budget to start?",
        a: "We recommend $5K-10K/month minimum to test properly across channels. Smaller budgets work but limit statistical significance.",
      },
      {
        q: "Can you integrate with my CRM?",
        a: "Yes. We connect to Salesforce, HubSpot, Pipedrive, and most platforms for lead tracking and attribution.",
      },
    ],
  },
  "seo-and-content": {
    title: "SEO & Content",
    tagline: "Organic Growth That Compounds",
    badge: "Search Engine Optimization",
    intro:
      "Technical SEO, keyword strategy, and high-conversion content. We build sustainable, long-term organic revenue streams.",
    outcomes: [
      "Organic traffic growth of 2-5x within 12 months",
      "Ranking for high-intent, revenue-generating keywords",
      "Content assets that convert visitors to leads and customers",
      "Improved site health, Core Web Vitals, and indexation",
    ],
    deliverables: [
      "Technical SEO audit and optimization roadmap",
      "Keyword research and competitive analysis",
      "On-page optimization for priority pages",
      "Content strategy and editorial calendar",
      "Monthly SEO performance reporting",
    ],
    tools: ["SEMrush", "Ahrefs", "Google Search Console", "Screaming Frog", "ContentStudio"],
    process: [
      { step: "Site Audit", desc: "Crawl site, identify technical issues, assess current keyword positions" },
      { step: "Keyword Research", desc: "Identify high-intent keywords, analyze search volume and competition" },
      { step: "Content Strategy", desc: "Map keywords to content pillars, build content calendar" },
      { step: "Implementation", desc: "Create content, optimize pages, build internal linking structure" },
      { step: "Monitor & Refine", desc: "Track rankings, analyze traffic, iterate based on performance" },
    ],
    faq: [
      {
        q: "How long until ranking improvements?",
        a: "Google typically takes 4-8 weeks to recrawl and re-index. Ranking improvements can take 3-6 months depending on competition.",
      },
      {
        q: "Do you handle content writing?",
        a: "Yes, we write SEO-optimized content in-house or coordinate with specialist writers.",
      },
      {
        q: "What's included in reporting?",
        a: "Keyword rankings, organic traffic, conversion tracking, Core Web Vitals, and competitor benchmarking.",
      },
    ],
  },
  "branding-creative": {
    title: "Branding & Creative",
    tagline: "Stand Out. Be Remembered.",
    badge: "Brand Identity Design",
    intro:
      "Brand strategy, design systems, video production, and conversion-optimized creative. We build cohesive brand identities that resonate and convert.",
    outcomes: [
      "Cohesive brand identity across all touchpoints",
      "Design system with reusable components",
      "High-converting creative assets at scale",
      "Memorable visual storytelling",
    ],
    deliverables: [
      "Brand strategy and positioning",
      "Logo and visual identity design",
      "Design system and style guide",
      "Marketing collateral and templates",
      "Video production and motion graphics",
    ],
    tools: ["Figma", "Adobe Creative Suite", "After Effects", "Premiere Pro", "Lottie"],
    process: [
      { step: "Discovery", desc: "Understand your brand, audience, and competitive landscape" },
      { step: "Strategy", desc: "Define positioning, messaging, and visual direction" },
      { step: "Design", desc: "Create logo, color palette, typography, and visual elements" },
      { step: "System Build", desc: "Document design system with components and guidelines" },
      { step: "Asset Creation", desc: "Produce marketing materials, templates, and creative assets" },
    ],
    faq: [
      {
        q: "How long does a rebrand take?",
        a: "A full rebrand typically takes 6-10 weeks. Smaller identity refreshes can be done in 3-4 weeks.",
      },
      {
        q: "Do you create video content?",
        a: "Yes, we handle everything from explainer videos to social media content and motion graphics.",
      },
      {
        q: "Can you work with our existing brand?",
        a: "Absolutely. We can extend, refine, or evolve your current brand identity.",
      },
    ],
  },
  "custom-development": {
    title: "Custom Development",
    tagline: "Built for Performance and Scale",
    badge: "Software Engineering",
    intro:
      "Web applications, mobile apps, and software built with modern architecture, security, and scalability. From MVP to enterprise systems.",
    outcomes: [
      "Production-ready, performant applications",
      "Fast launch timelines without compromising quality",
      "Seamless integrations with your existing stack",
      "Long-term maintainability and scalability",
    ],
    deliverables: [
      "Full-stack web and mobile applications",
      "API development and integrations",
      "Database design and optimization",
      "CI/CD pipelines and deployment automation",
      "Comprehensive documentation and knowledge transfer",
    ],
    tools: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS/GCP"],
    process: [
      { step: "Discovery & Planning", desc: "Define requirements, architecture, and technical roadmap" },
      { step: "Design & Prototyping", desc: "Create wireframes, UI/UX designs, and interactive prototypes" },
      { step: "Development", desc: "Build frontend, backend, integrations, and testing" },
      { step: "QA & Deployment", desc: "Comprehensive testing, security audit, production deployment" },
      { step: "Support & Maintenance", desc: "Ongoing support, monitoring, and feature updates" },
    ],
    faq: [
      {
        q: "What's your typical project timeline?",
        a: "MVPs launch in 8-12 weeks. Larger projects take 4-6 months depending on scope and complexity.",
      },
      {
        q: "Do you provide ongoing support?",
        a: "Yes. We offer retainer-based support and feature development packages post-launch.",
      },
      {
        q: "Can you work with our existing codebase?",
        a: "Absolutely. We audit legacy code, migrate systems, and extend existing applications.",
      },
    ],
  },
  "marketing-strategy": {
    title: "Marketing Consultation",
    tagline: "Strategic Clarity for Growth",
    badge: "Growth Strategy",
    intro:
      "Strategic roadmaps, audits, optimization sprints, and growth planning. We help you make smarter decisions faster.",
    outcomes: [
      "Clear growth strategy with prioritized actions",
      "Channel recommendations backed by data",
      "Quick wins identified and executed",
      "Long-term strategic roadmap",
    ],
    deliverables: [
      "Comprehensive marketing audit",
      "Competitive analysis and benchmarking",
      "Channel strategy recommendations",
      "Growth roadmap with timelines",
      "Ongoing strategic advisory",
    ],
    tools: ["Google Analytics", "Mixpanel", "Tableau", "Notion", "Miro"],
    process: [
      { step: "Audit", desc: "Review current marketing performance, channels, and assets" },
      { step: "Analysis", desc: "Identify gaps, opportunities, and competitive positioning" },
      { step: "Strategy", desc: "Develop prioritized recommendations and action plan" },
      { step: "Roadmap", desc: "Create timeline with milestones and success metrics" },
      { step: "Execution Support", desc: "Guide implementation and provide ongoing advisory" },
    ],
    faq: [
      {
        q: "Do you execute or just advise?",
        a: "Both. We can provide strategic advisory only, or execute the full plan with our team.",
      },
      {
        q: "How often do we meet?",
        a: "Weekly check-ins during active projects. Monthly strategic reviews for retainer clients.",
      },
      {
        q: "What if we already have a marketing team?",
        a: "We work alongside your team, providing expertise and capacity where needed.",
      },
    ],
  },
  "ai-automation": {
    title: "AI & Automation",
    tagline: "Intelligence That Works For You",
    badge: "Artificial Intelligence",
    intro:
      "Custom AI solutions: intelligent chatbots, autonomous agents, predictive analytics, internal automation tools, and everything in between. We build AI that works for you.",
    outcomes: [
      "Automated workflows saving hours weekly",
      "Intelligent customer interactions 24/7",
      "Data-driven insights and predictions",
      "Reduced operational costs",
    ],
    deliverables: [
      "Custom AI chatbots and agents",
      "Workflow automation systems",
      "Predictive analytics dashboards",
      "Integration with existing tools",
      "Training and documentation",
    ],
    tools: ["OpenAI", "LangChain", "Pinecone", "n8n", "Zapier", "Python", "TensorFlow"],
    process: [
      { step: "Discovery", desc: "Identify automation opportunities and AI use cases" },
      { step: "Architecture", desc: "Design system architecture and integration points" },
      { step: "Development", desc: "Build AI models, agents, and automation workflows" },
      { step: "Testing", desc: "Validate accuracy, performance, and edge cases" },
      { step: "Deployment & Training", desc: "Launch system and train your team" },
    ],
    faq: [
      {
        q: "What kind of AI solutions do you build?",
        a: "Chatbots, autonomous agents, document processing, predictive analytics, and custom LLM integrations.",
      },
      {
        q: "Do you use our data securely?",
        a: "Yes. Enterprise-grade security, data encryption, and we sign NDAs. Your data stays yours.",
      },
      {
        q: "Can AI integrate with our existing tools?",
        a: "Absolutely. We integrate with CRMs, ERPs, communication tools, and custom APIs.",
      },
    ],
  },
  "web-&-app-development": {
    title: "Web & App Development",
    tagline: "Built for Performance and Scale",
    badge: "Full-Stack Development",
    intro:
      "Web applications, mobile apps, and software built with modern architecture, security, and scalability. From MVP to enterprise systems.",
    outcomes: [
      "Production-ready, performant applications",
      "Fast launch timelines without compromising quality",
      "Seamless integrations with your existing stack",
      "Long-term maintainability and scalability",
    ],
    deliverables: [
      "Full-stack web and mobile applications",
      "API development and integrations",
      "Database design and optimization",
      "CI/CD pipelines and deployment automation",
      "Comprehensive documentation and knowledge transfer",
    ],
    tools: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS/GCP"],
    process: [
      { step: "Discovery & Planning", desc: "Define requirements, architecture, and technical roadmap" },
      { step: "Design & Prototyping", desc: "Create wireframes, UI/UX designs, and interactive prototypes" },
      { step: "Development", desc: "Build frontend, backend, integrations, and testing" },
      { step: "QA & Deployment", desc: "Comprehensive testing, security audit, production deployment" },
      { step: "Support & Maintenance", desc: "Ongoing support, monitoring, and feature updates" },
    ],
    faq: [
      {
        q: "What's your typical project timeline?",
        a: "MVPs launch in 8-12 weeks. Larger projects take 4-6 months depending on scope and complexity.",
      },
      {
        q: "Do you provide ongoing support?",
        a: "Yes. We offer retainer-based support and feature development packages post-launch.",
      },
      {
        q: "Can you work with our existing codebase?",
        a: "Absolutely. We audit legacy code, migrate systems, and extend existing applications.",
      },
    ],
  },
  "marketing-consultation": {
    title: "Marketing Consultation",
    tagline: "Strategic Clarity for Growth",
    badge: "Growth Strategy",
    intro:
      "Strategic roadmaps, audits, optimization sprints, and growth planning. We help you make smarter decisions faster.",
    outcomes: [
      "Clear growth strategy with prioritized actions",
      "Channel recommendations backed by data",
      "Quick wins identified and executed",
      "Long-term strategic roadmap",
    ],
    deliverables: [
      "Comprehensive marketing audit",
      "Competitive analysis and benchmarking",
      "Channel strategy recommendations",
      "Growth roadmap with timelines",
      "Ongoing strategic advisory",
    ],
    tools: ["Google Analytics", "Mixpanel", "Tableau", "Notion", "Miro"],
    process: [
      { step: "Audit", desc: "Review current marketing performance, channels, and assets" },
      { step: "Analysis", desc: "Identify gaps, opportunities, and competitive positioning" },
      { step: "Strategy", desc: "Develop prioritized recommendations and action plan" },
      { step: "Roadmap", desc: "Create timeline with milestones and success metrics" },
      { step: "Execution Support", desc: "Guide implementation and provide ongoing advisory" },
    ],
    faq: [
      {
        q: "Do you execute or just advise?",
        a: "Both. We can provide strategic advisory only, or execute the full plan with our team.",
      },
      {
        q: "How often do we meet?",
        a: "Weekly check-ins during active projects. Monthly strategic reviews for retainer clients.",
      },
      {
        q: "What if we already have a marketing team?",
        a: "We work alongside your team, providing expertise and capacity where needed.",
      },
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = use(params)
  const service = serviceDetails[resolvedParams.slug]

  if (!service) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link href="/services" className="text-indigo-600 hover:text-indigo-700">
            Back to Services
          </Link>
        </div>
      </main>
    )
  }

  const processFeatures = service.process.map((item: any, index: number) => ({
    step: `Step ${index + 1}`,
    title: item.step,
    content: item.desc,
    image: `/placeholder.svg?height=500&width=1000&query=${item.step.toLowerCase().replace(/\s+/g, "-")}-service-process`,
  }))

  return (
    <main className="min-h-screen bg-white">
      <ServiceHero title={service.title} tagline={service.tagline} intro={service.intro} badge={service.badge} />

      {/* Outcomes */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Expected Outcomes</h2>
          <div className="space-y-4">
            {service.outcomes.map((outcome: string, i: number) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-lg bg-indigo-50 border border-indigo-100">
                <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                <p className="text-lg text-gray-900">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.deliverables.map((deliverable: string, i: number) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-indigo-600 flex-shrink-0">{i + 1}.</span>
                  <p className="text-gray-700 leading-relaxed">{deliverable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Stack */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {service.tools.map((tool: string, i: number) => (
              <span
                key={i}
                className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full font-medium border border-indigo-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <FeatureSteps
            features={processFeatures}
            title="Our Process"
            autoPlayInterval={5000}
            imageHeight="h-[400px]"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <FAQSection
            title={`${service.title} FAQ`}
            subtitle={`Common questions about our ${service.title.toLowerCase()} services.`}
            introLabel={service.title}
            faqs={service.faq.map((item: { q: string; a: string }) => ({
              question: item.q,
              answer: item.a,
            }))}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how {service.title.toLowerCase()} can transform your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <FuturisticFooter />
    </main>
  )
}
