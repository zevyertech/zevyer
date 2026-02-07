"use client"
import { ArrowRight, Target, Users, Zap } from "lucide-react"
import { FuturisticFooter } from "@/components/ui/futuristic-footer"
import { BookingPopup } from "@/components/ui/booking-popup"
import { useState } from "react"

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <BookingPopup isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Zevyer</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We&apos;re a team of strategists, designers, engineers, and data scientists focused on one goal: driving
            measurable growth for ambitious companies.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe the best digital transformation comes from integrated expertise. Marketing without
                development is incomplete. Development without strategy is misaligned. We&apos;ve built Zevyer to bring all
                these disciplines under one roof, working together toward a single mission:{" "}
                <strong>deliver measurable, sustainable growth for our clients.</strong>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We&apos;re not a team of generalists. We&apos;re specialists who collaborate. Every member brings deep expertise
                in their domain, and together we deliver outcomes that single-discipline agencies simply can&apos;t.
              </p>
            </div>
            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-indigo-50 border border-indigo-100">
                <Target className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Results-First</h3>
                <p className="text-gray-700">
                  Every recommendation, every design, every line of code is measured against impact. Vanity metrics
                  don&apos;t matter. Revenue does.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-violet-50 border border-violet-100">
                <Users className="w-10 h-10 text-violet-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Collaboration</h3>
                <p className="text-gray-700">
                  You&apos;re not a client number. You&apos;re a partner. We share data, decisions, and wins. Monthly reports,
                  weekly check-ins, Slack-based communication.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-indigo-50 border border-indigo-100">
                <Zap className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Innovation</h3>
                <p className="text-gray-700">
                  We&apos;re always testing new channels, tools, and strategies. What worked last quarter might not work
                  today. We evolve, so you stay ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Zevyer */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Why Choose Zevyer</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrated Expertise</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                No handoffs between silos. Marketing strategy informs development architecture. Design decisions are
                backed by data and conversion science. Everything connects.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Engineering Depth</h3>
              <p className="text-gray-600 leading-relaxed">
                We&apos;re not a digital agency that sometimes builds things. We&apos;re a software company that deeply
                understands marketing. Our founders come from growth and engineering backgrounds.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Analytics</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every project includes built-in measurement. Conversion tracking, attribution modeling, cohort analysis.
                You&apos;ll always know what&apos;s working and why.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Ownership Mentality</h3>
              <p className="text-gray-600 leading-relaxed">
                We operate like an extension of your team. When you win, we win. Aligned incentives. Long-term
                partnerships. No transactional engagements.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">We Don&apos;t Do</h3>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <p className="text-lg font-semibold mb-2">Vanity Metrics</p>
                <p className="text-indigo-100">
                  We don&apos;t optimize for impressions, clicks, or arbitrary KPIs. We optimize for revenue and growth.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2">One-Size-Fits-All</p>
                <p className="text-indigo-100">
                  Every business is different. We build custom solutions, not templated packages.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2">Excuses</p>
                <p className="text-indigo-100">
                  If something isn&apos;t working, we pivot. We take accountability for results.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2">Vendor Lock-In</p>
                <p className="text-indigo-100">
                  Full documentation, knowledge transfer, and flexibility to move if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Team</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "Alex Kim",
                role: "Founder & Head of Strategy",
                bio: "Former VP Growth at Series B SaaS. 10+ years in performance marketing and growth strategy.",
              },
              {
                name: "Maria Vasquez",
                role: "Founder & Head of Engineering",
                bio: "Full-stack engineer. Built scalable systems at enterprise tech companies. CTO-for-hire mentality.",
              },
              {
                name: "James Chen",
                role: "Head of Performance Marketing",
                bio: "Performance marketing specialist. Managed 8-figure ad budgets. Data-obsessed optimizer.",
              },
              {
                name: "Sam Patel",
                role: "Head of Product Design",
                bio: "Product designer with conversion optimization expertise. Obsessed with user behavior and testing.",
              },
            ].map((member, i) => (
              <div key={i} className="p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 mb-6"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-semibold text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Build Something Great Together</h2>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-all"
          >
            Start a Conversation <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      <FuturisticFooter />
    </main>
  )
}
