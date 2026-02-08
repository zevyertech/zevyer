import Link from "next/link"
import { ArrowRight, CheckCircle2, PlayCircle, Star } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-500 via-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-25">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold">
                <Star className="h-4 w-4 text-yellow-300" />
                CEO&apos;s #1 choice for tech growth
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                Empowering Your
                <span className="block text-cyan-200">Tech Solutions</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-blue-100">
                Innovative solutions to drive your business forward.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-lg"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white">
                  <PlayCircle className="h-4 w-4" />
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 h-20 w-20 rounded-3xl bg-white/20" />
              <div className="absolute -bottom-8 right-8 h-20 w-20 rounded-3xl bg-cyan-200/40" />
              <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
                <div className="rounded-2xl bg-white/90 p-6 shadow-lg">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Analytics</span>
                    <span>+24%</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {["#3b82f6", "#60a5fa", "#93c5fd"].map((color, idx) => (
                      <div key={color} className="rounded-lg bg-slate-100 px-2 py-4 text-center">
                        <div className="h-10 rounded-md" style={{ backgroundColor: color, opacity: 0.8 }} />
                        <p className="mt-2 text-xs text-slate-500">Q{idx + 1}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-blue-500/20" />
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
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800">Our Services</h2>
          <p className="mt-2 text-sm text-slate-500">Advanced solutions for your digital business.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Cloud Infrastructure",
                description: "Accelerate performance, scale with confidence, and optimize infrastructure.",
              },
              {
                title: "Software Development",
                description: "Custom product builds and robust systems aligned with your goals.",
              },
              {
                title: "Data Analytics",
                description: "Actionable insights and reporting that drive better decisions.",
              },
            ].map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-800">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="text-3xl font-bold text-slate-800">
              Driving Innovation
              <span className="block text-blue-600">&amp; Efficiency</span>
            </h3>
            <p className="mt-3 text-sm text-slate-500">
              Delivering cutting-edge tech solutions for your business growth.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {["Scalable and secure solutions", "Expert team of developers", "Data-driven insights"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -top-6 left-8 h-24 w-24 rounded-full bg-cyan-200/40 blur-2xl" />
            <div className="rounded-3xl bg-blue-50 p-6">
              <div className="rounded-2xl bg-white p-4 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Productivity</p>
                    <p className="text-lg font-semibold text-slate-800">+32%</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-blue-100" />
                </div>
                <div className="mt-4 h-32 rounded-xl bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-bold">Ready to Accelerate Your Business?</h2>
          <p className="mt-2 text-sm text-blue-100">Transform your tech strategy with Zevyer.</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-lg"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
