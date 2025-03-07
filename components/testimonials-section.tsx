"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import Penguine from "../public/penguine.jpg"

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const testimonials = [
    {
      quote:
        "TRUST LEGAL provided exceptional guidance through our company's complex regulatory compliance challenges. Their business law expertise helped us restructure our operations efficiently while minimizing legal risks.",
      author: "Sarah Johnson",
      title: "CEO, Pinnacle Innovations",
      image: Penguine,
    },
    {
      quote:
        "When facing a high-stakes commercial litigation case, TRUST LEGAL delivered outstanding representation. Their meticulous preparation and strategic approach resulted in a favorable settlement that preserved our company's reputation.",
      author: "Michael Chen",
      title: "CFO, Meridian Enterprises",
      image: Penguine,
    },
    {
      quote:
        "The immigration team at TRUST LEGAL navigated our multinational staffing challenges with remarkable efficiency. Their expertise in both immigration and real estate law was invaluable as we established our North American headquarters.",
      author: "Elena Rodriguez",
      title: "Director of Operations, Global Solutions Inc.",
      image: Penguine,
    },
  ]


  return (
    <section id="testimonials" ref={sectionRef} className="bg-[#1e2b3e] py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`mx-auto max-w-[800px] text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block border-b-2 border-[#ba9669] px-4 py-2 text-sm font-medium text-[#ba9669]">CLIENT TESTIMONIALS</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Trusted Legal Excellence</h2>
          <p className="mt-4 text-gray-300 md:text-xl/relaxed">
            Our clients trust TRUST LEGAL for professional representation in Business Law, Litigation, Immigration, and Real Estate matters.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-[800px]">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="relative rounded-xl bg-white/5 backdrop-blur-sm p-8 shadow-xl border border-white/10 border-l-4 border-l-[#ba9669]">
                <div className="absolute -top-4 left-8 text-[#ba9669]">
                  <Quote className="h-10 w-10" />
                </div>
                <blockquote className="relative pt-6">
                  <p className="mb-6 text-lg italic text-white">{testimonials[activeIndex].quote}</p>
                  <div className="h-px w-16 bg-[#ba9669] mb-6"></div>
                  <footer className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#ba9669] shadow-lg">
                      <Image
                        src={testimonials[activeIndex].image || "/placeholder.svg"}
                        alt={testimonials[activeIndex].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonials[activeIndex].author}</p>
                      <p className="text-sm text-[#ba9669]">{testimonials[activeIndex].title}</p>
                    </div>
                  </footer>
                </blockquote>
              </div>
              <div className="mt-8 flex justify-center gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-[#ba9669] w-8" : "bg-gray-500 w-2 hover:bg-[#ba9669]/40"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={prevTestimonial}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-[#ba9669]/90 p-3 shadow-lg hover:bg-[#ba9669] focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#ba9669]/90 p-3 shadow-lg hover:bg-[#ba9669] focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
