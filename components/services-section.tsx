"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, BarChart3, Globe, Lightbulb, TrendingUp, Users } from "lucide-react"

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  const services = [
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Business Law",
      description:
        "Comprehensive legal solutions for businesses of all sizes, including formation, contracts, compliance, and corporate governance.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Litigation",
      description:
        "Skilled representation in all aspects of dispute resolution, from negotiation to trial advocacy across various jurisdictions.",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Immigration Law",
      description: "Expert guidance through complex immigration processes, including visas, green cards, and citizenship applications.",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Real Estate Law",
      description: "Specialized legal services for property transactions, leasing, development projects, and real estate litigation.",
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Corporate Compliance",
      description: "Tailored compliance solutions ensuring your business meets regulatory requirements and industry standards.",
    },
    {
      icon: <ArrowRight className="h-10 w-10" />,
      title: "Legal Consultation",
      description:
        "Personalized legal advisory services to navigate complex legal challenges and protect your interests effectively.",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="bg-[#1e2b3e] py-16 md:py-24 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`mx-auto max-w-[800px] text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] font-medium">Our Services</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Reliable Legal Solutions for Every Challenge
          </h2>
          <p className="mt-4 text-gray-300 md:text-xl/relaxed">
            TRUST LEGAL provides exceptional legal expertise across Business Law, Litigation, Immigration, and Real Estate matters.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg bg-[#1e2b3e]/80 border border-[#ba9669]/20 p-6 shadow-lg transition-all duration-700 hover:border-[#ba9669]/50 hover:shadow-xl hover:shadow-[#ba9669]/5 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <div className="mb-4 text-[#ba9669] transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
              <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[#ba9669] transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <a 
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="mt-6 inline-flex items-center text-[#ba9669] hover:text-[#dfc19b] transition-colors duration-300"
              >
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-[#ba9669]/10 transition-all duration-500 group-hover:scale-[2.5] group-hover:bg-[#ba9669]/20"></div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#ba9669]/70 to-[#ba9669]/20 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
