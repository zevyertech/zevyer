"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Sparkles, Twitter, Linkedin, Github, Mail } from "lucide-react"

export function FuturisticFooter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  Stay Updated
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Get insights delivered to your inbox</h3>
                <p className="text-gray-400">Weekly tips on growth, AI, and digital transformation. No spam, ever.</p>
              </div>

              <div className="w-full md:w-auto">
                {subscribed ? (
                  <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-green-500/10 border border-green-500/30">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-medium">You're subscribed!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-3">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full md:w-72 pl-12 pr-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center gap-2 whitespace-nowrap"
                    >
                      Subscribe <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center mb-6 group">
                <Image 
                  src="/zevyer-logo.svg" 
                  alt="Zevyer Logo" 
                  width={40} 
                  height={40} 
                  className="h-10 w-10"
                />
              </Link>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                360° digital marketing, custom development, and AI solutions to grow revenue—measurably. End-to-end
                digital transformation under one roof.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors group"
                >
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors group"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/services/performance-marketing"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    Performance Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/custom-development"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    Custom Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ai-automation"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    AI & Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/branding-creative"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    Branding & Creative
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© 2025 Zevyer. All rights reserved.</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
