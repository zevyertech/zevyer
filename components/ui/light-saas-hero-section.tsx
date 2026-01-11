"use client"

import React, { useEffect, useRef, useState } from "react"
import { Renderer, Program, Mesh, Triangle } from "ogl"
import { Play, Star, ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BookingPopup } from "./booking-popup"

interface PlasmaProps {
  color?: string
  speed?: number
  direction?: "forward" | "reverse" | "pingpong"
  scale?: number
  opacity?: number
  mouseInteractive?: boolean
}

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return [0.31, 0.27, 0.9]
  return [
    Number.parseInt(result[1], 16) / 255,
    Number.parseInt(result[2], 16) / 255,
    Number.parseInt(result[3], 16) / 255,
  ]
}

const vertex = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;
  for (vec2 r = iResolution.xy, Q; ++i < 60.; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y)); 
    p.z -= 4.; 
    S = p;
    d = p.y-T;
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05); 
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T)); 
    z+= d = abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4; 
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }
  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(finite1(c.r) ? c.r : 0.0, finite1(c.g) ? c.g : 0.0, finite1(c.b) ? c.b : 0.0);
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}`

export const Plasma: React.FC<PlasmaProps> = React.memo(({
  color = "#4f46e5",
  speed = 1,
  direction = "forward",
  scale = 1,
  opacity = 1,
  mouseInteractive = false,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return
    
    try {
      const useCustomColor = color ? 1.0 : 0.0
      const customColorRgb = color ? hexToRgb(color) : [1, 1, 1]
      const directionMultiplier = direction === "reverse" ? -1.0 : 1.0
      const renderer = new Renderer({
        webgl: 2,
        alpha: true,
        antialias: false,
        dpr: Math.min(window.devicePixelRatio || 1, 2),
      })
      const gl = renderer.gl
      const canvas = gl.canvas as HTMLCanvasElement
      canvas.style.display = "block"
      canvas.style.width = "100%"
      canvas.style.height = "100%"
      containerRef.current.appendChild(canvas)
      const geometry = new Triangle(gl)
      const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          iTime: { value: 0 },
          iResolution: { value: new Float32Array([1, 1]) },
          uCustomColor: { value: new Float32Array(customColorRgb) },
          uUseCustomColor: { value: useCustomColor },
          uSpeed: { value: speed * 0.4 },
          uDirection: { value: directionMultiplier },
          uScale: { value: scale },
          uOpacity: { value: opacity },
          uMouse: { value: new Float32Array([0, 0]) },
          uMouseInteractive: { value: mouseInteractive ? 1.0 : 0.0 },
        },
      })
      const mesh = new Mesh(gl, { geometry, program })
      const handleMouseMove = (e: MouseEvent) => {
        if (!mouseInteractive || !containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const mouseUniform = program.uniforms.uMouse.value as Float32Array
        mouseUniform[0] = e.clientX - rect.left
        mouseUniform[1] = e.clientY - rect.top
      }
      if (mouseInteractive) containerRef.current.addEventListener("mousemove", handleMouseMove)
      const setSize = () => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        renderer.setSize(rect.width, rect.height)
        const res = program.uniforms.iResolution.value as Float32Array
        res[0] = gl.drawingBufferWidth
        res[1] = gl.drawingBufferHeight
      }
      const ro = new ResizeObserver(setSize)
      ro.observe(containerRef.current)
      setSize()
      let raf = 0
      const t0 = performance.now()
      const loop = (t: number) => {
        ;(program.uniforms.iTime as any).value = (t - t0) * 0.001
        renderer.render({ scene: mesh })
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
      setIsReady(true)
      return () => {
        cancelAnimationFrame(raf)
        ro.disconnect()
        if (mouseInteractive && containerRef.current)
          containerRef.current.removeEventListener("mousemove", handleMouseMove)
        try {
          containerRef.current?.removeChild(canvas)
        } catch {}
      }
    } catch (error) {
      console.error('Plasma component error:', error)
    }
  }, [color, speed, direction, scale, opacity, mouseInteractive])
  
  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden">
      {!isReady && (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white animate-pulse" />
      )}
    </div>
  )
})

const GlassmorphicNavbar = ({ onBookClick }: { onBookClick?: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  const services = [
    { slug: "performance-marketing", label: "Performance Marketing" },
    { slug: "seo-and-content", label: "SEO & Content" },
    { slug: "branding-creative", label: "Branding & Creative" },
    { slug: "custom-development", label: "Custom Development" },
    { slug: "marketing-strategy", label: "Marketing Consultation" },
    { slug: "ai-automation", label: "AI & Automation" },
  ]

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      <BookingPopup isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl">
        <div className="bg-white/60 backdrop-blur-xl rounded-full px-6 py-2 shadow-lg border border-white/20 flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src="/zevyer-logo-light.svg" 
              alt="Zevyer Logo" 
              width={32} 
              height={32} 
              className="h-8 w-8"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors flex items-center gap-1"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-white/20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  {services.map((service, idx) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className={`block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors ${
                        idx !== services.length - 1 ? "border-b border-gray-100" : ""
                      }`}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/case-studies"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Case Studies
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              About
            </Link>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700 transition-all shadow-md"
            >
              Book Free Consultation
            </button>
          </div>

          <button
            className="md:hidden w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex flex-col gap-1.5">
              <div
                className={`w-5 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></div>
              <div className={`w-5 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
              <div
                className={`w-5 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-auto w-11/12 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-white/20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col">
              <Link
                href="/services"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/blog"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  setIsBookingOpen(true)
                  setIsMenuOpen(false)
                }}
                className="px-4 py-3 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-all m-4"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export const HeroSection = ({ onBookClick }: { onBookClick?: () => void }) => {
  return (
    <div className="min-h-screen relative overflow-hidden w-full bg-white">
      <GlassmorphicNavbar onBookClick={onBookClick} />
      <div className="absolute inset-0 z-0">
        <Plasma color="#4f46e5" speed={0.4} scale={1.2} opacity={0.12} mouseInteractive={false} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-44 pb-20 text-center">
        <div className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-8 border border-indigo-100">
          <Star className="w-4 h-4 mr-2 fill-indigo-700" /> 360° Digital & AI Growth Partner
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
          Scale Your Business with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            AI-Powered Intelligence
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          From marketing consultation to custom AI development. We build, automate, and scale your digital presence
          under one roof.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={onBookClick}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center"
          >
            Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center">
            <Play className="w-5 h-5 mr-2 fill-gray-900" /> Watch Demo
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-10 border-t border-gray-100">
          {[
            ["46%", "Avg ROAS Uplift"],
            ["<14 Days", "MVP Launch"],
            ["99.8%", "Uptime"],
            ["24/7", "Support"],
          ].map(([stat, label]) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold text-gray-900">{stat}</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
