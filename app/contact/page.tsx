"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import { FuturisticFooter } from "@/components/ui/futuristic-footer"
import { BookingPopup } from "@/components/ui/booking-popup"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", company: "", subject: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOpenChat = () => {
    window.location.href = "mailto:hello@zevyer.com?subject=Quick%20Question%20from%20Zevyer.com"
  }

  return (
    <main className="min-h-screen bg-white">
      <BookingPopup isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            We&apos;re here to help. Reach out and let&apos;s start a conversation about your growth.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:hello@zevyer.com" className="text-indigo-600 hover:text-indigo-700">
                      hello@zevyer.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+14155551234" className="text-indigo-600 hover:text-indigo-700">
                      +1 (415) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">
                      San Francisco, CA
                      <br />
                      Remote-friendly team
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-indigo-50 rounded-2xl border border-indigo-100">
                <h3 className="font-bold text-gray-900 mb-3">Response Time</h3>
                <p className="text-gray-700">
                  We typically respond within 24 hours. For urgent matters, use the phone number above.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-12 rounded-2xl border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-xl font-semibold text-gray-900">Message sent!</p>
                  <p className="text-gray-600 mt-2">We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                      {error}
                    </div>
                  )}
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                  />
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
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                  >
                    <option value="">What can we help with?</option>
                    <option value="marketing">Performance Marketing</option>
                    <option value="development">Custom Development</option>
                    <option value="ai">AI & Automation</option>
                    <option value="strategy">Strategy Consultation</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea
                    placeholder="Tell us about your project or goals..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Other Ways to Connect</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schedule a Call</h3>
              <p className="text-gray-600 mb-6">
                Book a 30-minute discovery call with our team. No pressure, just conversation.
              </p>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex items-center px-6 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all"
              >
                Book a Call
              </button>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chat with Us</h3>
              <p className="text-gray-600 mb-6">
                Have a quick question? Chat with our team in real-time via our messaging platform.
              </p>
              <button
                onClick={handleOpenChat}
                className="inline-flex items-center px-6 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-all"
              >
                Open Chat
              </button>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Connect on LinkedIn</h3>
              <p className="text-gray-600 mb-6">Follow our updates, insights, and case studies on LinkedIn.</p>
              <a
                href="https://www.linkedin.com/company/zevyer/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
              >
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <FuturisticFooter />
    </main>
  )
}
