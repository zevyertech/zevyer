import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin, ArrowRight } from "lucide-react"
import { FuturisticFooter } from "@/components/ui/futuristic-footer"

interface BlogPost {
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  author: string
  authorRole: string
  image: string
  content: string
}

const blogPosts: Record<string, BlogPost> = {
  "ai-marketing-automation-2025": {
    title: "The Future of AI in Marketing Automation: 2025 and Beyond",
    excerpt:
      "Explore how artificial intelligence is reshaping marketing automation, from predictive analytics to autonomous campaign management.",
    category: "AI & Automation",
    readTime: "8 min read",
    date: "Jan 8, 2025",
    author: "Alex Kim",
    authorRole: "Head of Strategy",
    image: "/ai-marketing-automation-futuristic.jpg",
    content: `
      <p>Artificial intelligence is no longer a futuristic concept in marketing—it's the foundation of how modern campaigns are built, optimized, and scaled. As we move through 2025, the integration of AI into marketing automation has reached a tipping point where businesses that don't adapt risk being left behind.</p>
      
      <h2>The Evolution of AI in Marketing</h2>
      <p>Just three years ago, AI in marketing meant basic personalization and simple chatbots. Today, we're working with systems that can autonomously manage entire campaign lifecycles, from creative generation to audience targeting to budget optimization.</p>
      
      <h2>Key Trends Shaping 2025</h2>
      <h3>1. Predictive Analytics at Scale</h3>
      <p>Modern AI systems can now analyze millions of data points in real-time to predict customer behavior with unprecedented accuracy. This means marketers can move from reactive to proactive strategies.</p>
      
      <h3>2. Autonomous Campaign Management</h3>
      <p>AI agents are now capable of managing campaigns end-to-end, making real-time adjustments to creative, targeting, and bids based on performance data.</p>
      
      <h3>3. Hyper-Personalization</h3>
      <p>Beyond simple segmentation, AI enables true 1:1 personalization at scale. Every touchpoint can be tailored to individual preferences and behaviors.</p>
      
      <h2>Implementation Strategies</h2>
      <p>For businesses looking to leverage AI in their marketing automation, we recommend a phased approach:</p>
      <ul>
        <li>Start with data infrastructure—AI is only as good as the data it's trained on</li>
        <li>Identify high-impact use cases where AI can provide immediate ROI</li>
        <li>Build internal capabilities while partnering with specialists</li>
        <li>Iterate and scale based on results</li>
      </ul>
      
      <h2>The Human Element</h2>
      <p>Despite the rise of AI, human creativity and strategic thinking remain irreplaceable. The most successful marketing teams use AI to handle execution while humans focus on strategy, creativity, and relationship building.</p>
    `,
  },
  "performance-marketing-strategies": {
    title: "5 Performance Marketing Strategies That Actually Work in 2025",
    excerpt:
      "Cut through the noise with data-backed strategies that deliver measurable ROI across Google, Meta, and emerging platforms.",
    category: "Performance Marketing",
    readTime: "6 min read",
    date: "Jan 5, 2025",
    author: "James Chen",
    authorRole: "Head of Performance",
    image: "/performance-marketing-dashboard.jpg",
    content: `
      <p>Performance marketing in 2025 requires a fundamentally different approach than even a year ago. Platform changes, privacy regulations, and shifting consumer behavior have upended traditional playbooks.</p>
      
      <h2>Strategy 1: First-Party Data Infrastructure</h2>
      <p>With third-party cookies nearly extinct and privacy regulations tightening, first-party data is your competitive advantage. Build robust data collection systems and leverage server-side tracking.</p>
      
      <h2>Strategy 2: Creative Velocity</h2>
      <p>The days of running the same creative for months are over. Winning brands are producing 10x more creative variations and letting data decide what works.</p>
      
      <h2>Strategy 3: Full-Funnel Measurement</h2>
      <p>Last-click attribution is dead. Implement incrementality testing and media mix modeling to understand true channel contribution.</p>
      
      <h2>Strategy 4: Platform Diversification</h2>
      <p>Don't put all your budget in Meta and Google. Emerging platforms like TikTok, Reddit, and connected TV offer significant opportunities.</p>
      
      <h2>Strategy 5: Landing Page Optimization</h2>
      <p>Your ad is only half the equation. Invest in landing page optimization with the same rigor you apply to ad creative.</p>
    `,
  },
  "custom-development-mvp-guide": {
    title: "From Idea to MVP: A Technical Founder's Guide to Building Fast",
    excerpt:
      "Learn how to launch your MVP in 8-12 weeks without compromising on quality or scalability. Real frameworks, real timelines.",
    category: "Development",
    readTime: "10 min read",
    date: "Jan 2, 2025",
    author: "Maria Vasquez",
    authorRole: "Head of Engineering",
    image: "/software-development-coding.jpg",
    content: `
      <p>Building an MVP is a balancing act. Move too slow and you miss market opportunities. Move too fast and you accumulate technical debt that cripples future growth. Here's our framework for getting it right.</p>
      
      <h2>Week 1-2: Discovery & Architecture</h2>
      <p>Before writing any code, invest time in understanding the problem deeply. Map user journeys, identify core features, and design a scalable architecture.</p>
      
      <h2>Week 3-4: Design & Prototyping</h2>
      <p>Create interactive prototypes and validate with users before committing to development. This saves countless hours of rework.</p>
      
      <h2>Week 5-8: Core Development</h2>
      <p>Build the essential features first. Use proven technologies and patterns. Don't reinvent the wheel.</p>
      
      <h2>Week 9-10: Integration & Testing</h2>
      <p>Integrate all components, set up CI/CD, and conduct thorough testing. Security and performance testing are non-negotiable.</p>
      
      <h2>Week 11-12: Polish & Launch</h2>
      <p>Final refinements, documentation, and launch preparation. Set up monitoring and analytics from day one.</p>
    `,
  },
  "seo-content-strategy": {
    title: "Content Strategy That Drives Organic Growth: A Complete Framework",
    excerpt:
      "Build a content engine that compounds. From keyword research to content production to distribution—everything you need.",
    category: "SEO & Content",
    readTime: "12 min read",
    date: "Dec 28, 2024",
    author: "Priya Nair",
    authorRole: "SEO Lead",
    image: "/content-strategy-seo.jpg",
    content: `
      <p>Organic growth is rarely an accident. High-performing teams build a content strategy that ties search intent to business outcomes, then execute consistently.</p>

      <h2>Step 1: Align on Business Goals</h2>
      <p>Start with revenue and pipeline targets, then map those goals to topics, funnel stages, and target audiences.</p>

      <h2>Step 2: Build a Keyword Map</h2>
      <p>Group keywords by intent and difficulty. Focus on clusters that drive qualified traffic, not just volume.</p>

      <h2>Step 3: Create the Content System</h2>
      <p>Define formats, templates, and review workflows so production is repeatable and scalable.</p>

      <h2>Step 4: Distribute and Iterate</h2>
      <p>Publish, promote, measure, and improve based on real performance data.</p>
    `,
  },
  "brand-positioning-startups": {
    title: "Brand Positioning for Startups: Stand Out in a Crowded Market",
    excerpt:
      "Your brand is more than a logo. Learn how to craft positioning that resonates with your ideal customers and drives growth.",
    category: "Branding",
    readTime: "7 min read",
    date: "Dec 22, 2024",
    author: "Lena Morales",
    authorRole: "Brand Strategist",
    image: "/brand-positioning-creative.jpg",
    content: `
      <p>Positioning is the story customers repeat back to you. Strong positioning makes it obvious why you're the right choice.</p>

      <h2>Define the Category</h2>
      <p>Clarify what you do, who you serve, and what makes you different. If you cannot explain this in one sentence, customers won't either.</p>

      <h2>Find the Strategic Advantage</h2>
      <p>Identify the intersection of your strengths, customer pains, and competitive gaps.</p>

      <h2>Message with Consistency</h2>
      <p>Translate positioning into clear, repeatable language across your site, ads, and sales materials.</p>
    `,
  },
  "chatbot-implementation-guide": {
    title: "Building AI Chatbots That Actually Help Customers",
    excerpt:
      "Move beyond FAQ bots. Learn how to build intelligent conversational agents that solve real problems and drive conversions.",
    category: "AI & Automation",
    readTime: "9 min read",
    date: "Dec 18, 2024",
    author: "Andre Patel",
    authorRole: "AI Solutions Lead",
    image: "/ai-chatbot-conversation.jpg",
    content: `
      <p>Great chatbots are fast, accurate, and helpful. The best ones do not feel like bots at all.</p>

      <h2>Start with Intent, Not Features</h2>
      <p>Define the top customer intents you want to support, then design flows that reduce time to resolution.</p>

      <h2>Connect the Right Data</h2>
      <p>Integrate your knowledge base, product data, and support systems so the chatbot can respond with real answers.</p>

      <h2>Measure and Improve</h2>
      <p>Track containment rate, CSAT, and deflection. Optimize the model and content based on real conversations.</p>
    `,
  },
  "saas-marketing-playbook": {
    title: "The Complete SaaS Marketing Playbook for 2025",
    excerpt:
      "Acquisition, activation, retention, referral—the full funnel breakdown for SaaS companies looking to scale efficiently.",
    category: "Performance Marketing",
    readTime: "15 min read",
    date: "Dec 15, 2024",
    author: "Jordan Lee",
    authorRole: "Growth Director",
    image: "/saas-marketing-growth.jpg",
    content: `
      <p>Scaling SaaS growth requires a full-funnel approach. That means balancing top-of-funnel demand with retention and expansion.</p>

      <h2>Acquisition</h2>
      <p>Invest in channels with measurable ROI and fast feedback loops.</p>

      <h2>Activation</h2>
      <p>Onboarding is the real conversion. Remove friction and guide users to value quickly.</p>

      <h2>Retention and Expansion</h2>
      <p>Build lifecycle programs that keep users engaged and expand usage over time.</p>
    `,
  },
  "technical-seo-checklist": {
    title: "Technical SEO Checklist: 50 Items for 2025",
    excerpt:
      "Core Web Vitals, crawlability, indexation, schema markup—everything you need to ensure your site is technically sound.",
    category: "SEO & Content",
    readTime: "11 min read",
    date: "Dec 10, 2024",
    author: "Haruto Sato",
    authorRole: "Technical SEO Specialist",
    image: "/technical-seo-analysis.jpg",
    content: `
      <p>Technical SEO is the foundation of organic growth. If search engines cannot crawl and understand your site, content cannot perform.</p>

      <h2>Core Web Vitals</h2>
      <p>Optimize LCP, CLS, and INP by compressing images, minimizing JS, and reducing layout shifts.</p>

      <h2>Indexation and Crawlability</h2>
      <p>Use sitemaps, clean URL structures, and correct canonical tags to guide search engines.</p>

      <h2>Structured Data</h2>
      <p>Implement schema markup to improve rich results and enhance search visibility.</p>
    `,
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params
  const post = blogPosts[resolvedParams.slug]
  const shareUrl = `https://zevyer.com/blog/${resolvedParams.slug}`
  const encodedShareUrl = encodeURIComponent(shareUrl)
  const encodedShareTitle = encodeURIComponent(post?.title || "Zevyer Blog")

  if (!post) {
    return (
      <main className="min-h-screen bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-indigo-400 hover:text-indigo-300">
            Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 opacity-20">
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

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-400 text-sm font-medium border border-indigo-600/30">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

          <p className="text-xl text-gray-400 mb-8">{post.excerpt}</p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600" />
              <div>
                <p className="font-semibold text-white">{post.author}</p>
                <p className="text-sm text-gray-500">{post.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodedShareUrl}&text=${encodedShareTitle}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4 text-gray-400" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-gray-400" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Share2 className="w-4 h-4 text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={800}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div
            className="prose prose-lg prose-invert prose-headings:text-white prose-p:text-gray-300 prose-a:text-indigo-400 prose-strong:text-white prose-ul:text-gray-300 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to implement these strategies?</h2>
          <p className="text-gray-400 mb-8">Let&apos;s discuss how we can help you achieve similar results.</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
          >
            Book a Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <FuturisticFooter />
    </main>
  )
}
