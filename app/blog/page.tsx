"use client"

import Link from "next/link"
import { ArrowRight, Clock, Tag, TrendingUp, Sparkles, Search } from "lucide-react"
import { useState } from "react"
import { FuturisticFooter } from "@/components/ui/futuristic-footer"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const blogPosts = [
  {
    slug: "ai-marketing-automation-2025",
    title: "The Future of AI in Marketing Automation: 2025 and Beyond",
    excerpt:
      "Explore how artificial intelligence is reshaping marketing automation, from predictive analytics to autonomous campaign management.",
    category: "AI & Automation",
    readTime: "8 min read",
    date: "Jan 8, 2025",
    featured: true,
    image: "/ai-marketing-automation-futuristic.jpg",
  },
  {
    slug: "performance-marketing-strategies",
    title: "5 Performance Marketing Strategies That Actually Work in 2025",
    excerpt:
      "Cut through the noise with data-backed strategies that deliver measurable ROI across Google, Meta, and emerging platforms.",
    category: "Performance Marketing",
    readTime: "6 min read",
    date: "Jan 5, 2025",
    featured: true,
    image: "/performance-marketing-dashboard.jpg",
  },
  {
    slug: "custom-development-mvp-guide",
    title: "From Idea to MVP: A Technical Founder's Guide to Building Fast",
    excerpt:
      "Learn how to launch your MVP in 8-12 weeks without compromising on quality or scalability. Real frameworks, real timelines.",
    category: "Development",
    readTime: "10 min read",
    date: "Jan 2, 2025",
    featured: true,
    image: "/software-development-coding.jpg",
  },
  {
    slug: "seo-content-strategy",
    title: "Content Strategy That Drives Organic Growth: A Complete Framework",
    excerpt:
      "Build a content engine that compounds. From keyword research to content production to distribution—everything you need.",
    category: "SEO & Content",
    readTime: "12 min read",
    date: "Dec 28, 2024",
    featured: false,
    image: "/content-strategy-seo.jpg",
  },
  {
    slug: "brand-positioning-startups",
    title: "Brand Positioning for Startups: Stand Out in a Crowded Market",
    excerpt:
      "Your brand is more than a logo. Learn how to craft positioning that resonates with your ideal customers and drives growth.",
    category: "Branding",
    readTime: "7 min read",
    date: "Dec 22, 2024",
    featured: false,
    image: "/brand-positioning-creative.jpg",
  },
  {
    slug: "chatbot-implementation-guide",
    title: "Building AI Chatbots That Actually Help Customers",
    excerpt:
      "Move beyond FAQ bots. Learn how to build intelligent conversational agents that solve real problems and drive conversions.",
    category: "AI & Automation",
    readTime: "9 min read",
    date: "Dec 18, 2024",
    featured: false,
    image: "/ai-chatbot-conversation.jpg",
  },
  {
    slug: "saas-marketing-playbook",
    title: "The Complete SaaS Marketing Playbook for 2025",
    excerpt:
      "Acquisition, activation, retention, referral—the full funnel breakdown for SaaS companies looking to scale efficiently.",
    category: "Performance Marketing",
    readTime: "15 min read",
    date: "Dec 15, 2024",
    featured: false,
    image: "/saas-marketing-growth.jpg",
  },
  {
    slug: "technical-seo-checklist",
    title: "Technical SEO Checklist: 50 Items for 2025",
    excerpt:
      "Core Web Vitals, crawlability, indexation, schema markup—everything you need to ensure your site is technically sound.",
    category: "SEO & Content",
    readTime: "11 min read",
    date: "Dec 10, 2024",
    featured: false,
    image: "/technical-seo-analysis.jpg",
  },
]

const categories = ["All", "AI & Automation", "Performance Marketing", "Development", "SEO & Content", "Branding"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured || selectedCategory !== "All")

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Insights & Expertise
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Zevyer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Deep dives into growth strategy, AI, marketing, and technology. Insights from the trenches.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-y border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && searchQuery === "" && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-5 h-5 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Featured Articles</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <div
                    className={`relative rounded-2xl overflow-hidden group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                  >
                    <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                    <div className="relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all">
                      <div className={`relative overflow-hidden ${i === 0 ? "h-80" : "h-48"}`}>
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-indigo-600/90 text-white text-xs font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3
                          className={`font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors ${i === 0 ? "text-2xl" : "text-lg"}`}
                        >
                          {post.title}
                        </h3>
                        <p className={`text-gray-400 mb-4 ${i === 0 ? "text-base" : "text-sm"} line-clamp-2`}>
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {(selectedCategory !== "All" || searchQuery !== "") && (
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                {selectedCategory === "All" ? "Search Results" : selectedCategory}
              </h2>
              <span className="text-gray-500">{filteredPosts.length} articles</span>
            </div>
          )}

          {selectedCategory === "All" && searchQuery === "" && (
            <div className="flex items-center gap-3 mb-8">
              <Tag className="w-5 h-5 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">All Articles</h2>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedCategory === "All" && searchQuery === ""
              ? blogPosts.filter((p) => !p.featured)
              : filteredPosts
            ).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="relative rounded-2xl group h-full">
                  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative h-full bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-gray-800/90 text-gray-300 text-xs font-medium border border-gray-700">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchQuery("")
                }}
                className="mt-4 px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-violet-900/50" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="w-full h-full opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Sparkles className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Stay Ahead of the Curve</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get weekly insights on growth, AI, and digital transformation. No spam, just value.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all"
          >
            Subscribe Now <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <FuturisticFooter />
    </main>
  )
}
