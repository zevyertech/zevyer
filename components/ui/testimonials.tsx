"use client"

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1"
import { motion } from "motion/react"

const testimonials = [
  {
    text: "Zevyer transformed our entire marketing stack. Within 6 months, we saw a 250% increase in qualified leads. Their team is exceptionally responsive and strategic.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Chen",
    role: "CEO, MarketLeap",
  },
  {
    text: "We brought Zevyer in for a full rebrand and web rebuild. The result was a cohesive, conversion-focused site that immediately improved our sales cycle.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "James Rodriguez",
    role: "Founder, DevFlow",
  },
  {
    text: "The AI automation work Zevyer did for our sales process saved us thousands every month. It's like adding a full team to our payroll, without the overhead.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Elena Vasquez",
    role: "CMO, GrowthCo",
  },
  {
    text: "Their performance marketing campaigns generated a 320% ROI. Zevyer knows how to balance creativity with data-driven results. Best agency partner we've had.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Marcus Thompson",
    role: "VP Marketing, TechScale",
  },
  {
    text: "Custom development work was seamless from start to finish. Zevyer delivered a scalable SaaS platform in half the time we expected. Highly recommend.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Priya Kapoor",
    role: "Founder, CloudOps",
  },
  {
    text: "The SEO and content strategy Zevyer implemented drove our organic traffic up 450%. They truly understand both technical SEO and content-led growth.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Amanda Torres",
    role: "COO, ContentHub",
  },
  {
    text: "Zevyer's AI chatbot integration reduced our support tickets by 60%. The implementation was smooth and the results were immediate.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "David Lee",
    role: "CEO, SupportFlow",
  },
  {
    text: "We partnered with Zevyer for a complete digital transformation. Their holistic approach—strategy, design, development, and marketing—was game-changing.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Lisa Anderson",
    role: "Head of Growth, FinTech Inc",
  },
  {
    text: "Zevyer's creative team delivered a brand identity that perfectly captures our vision. Combined with their marketing expertise, we've seen immediate market impact.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Robert Chen",
    role: "Founder, DesignFlow",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg text-sm text-gray-700">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-center mt-5 opacity-75 text-gray-600">
            See what our customers have to say about their growth with Zevyer.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
