"use client"

import { useEffect, useState } from "react"
import { ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import HeroImage from "@/public/meetings.jpg"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#192841]/5 to-white py-20 md:py-28 lg:py-32"
    >
      {/* Refined background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#192841]/3 animate-pulse [animation-duration:7s]"></div>
        <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-[#9e814d]/3 animate-pulse [animation-duration:8s] [animation-delay:1s]"></div>
        <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-[#192841]/3 animate-pulse [animation-duration:9s] [animation-delay:2s]"></div>
      </div>

      <div className="container relative px-4 md:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          <div
            className={`flex flex-col justify-center space-y-7 transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="space-y-5">
              <div className="inline-flex items-center rounded-full bg-[#9e814d]/10 px-4 py-1.5 text-sm font-medium text-[#9e814d] transition-all hover:bg-[#9e814d]/20 cursor-default">
                <span className="mr-2 h-2 w-2 rounded-full bg-[#9e814d]"></span>
                Premier Legal Counsel
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-[#192841] to-[#9e814d] bg-clip-text text-transparent">
                Sophisticated Legal Solutions for Discerning Clients
              </h1>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Distinguished expertise in Business Law, Litigation, Immigration, and Real Estate—providing 
                meticulous, results-oriented legal counsel tailored to your strategic objectives.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#192841] px-8 text-sm font-medium text-white shadow-lg transition-colors duration-300 hover:bg-[#13203a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#192841] focus-visible:ring-offset-2 group relative overflow-hidden"
              >
                <span className="relative z-10">Schedule Consultation</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#192841] to-[#13203a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="inline-flex h-12 items-center justify-center rounded-md border border-[#9e814d]/30 bg-transparent px-8 text-sm font-medium text-[#192841] shadow-sm transition-all duration-300 hover:bg-[#9e814d]/5 hover:border-[#9e814d]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9e814d] group"
              >
                Our Practice Areas <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
            
            {/* Enhanced trust indicators */}
            <div className={`flex items-center gap-5 mt-4 transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <div className="flex -space-x-2.5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`h-9 w-9 rounded-full bg-gradient-to-br from-[#9e814d] to-[#c0a978] border-2 border-white shadow-sm`}></div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Trusted by <span className="font-semibold text-[#9e814d]">500+</span> clients nationwide</p>
                <p className="text-xs text-gray-500 mt-0.5">Including Fortune 500 companies & industry leaders</p>
              </div>
            </div>
          </div>
          
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(25,40,65,0.18)] transform transition-all duration-500 hover:shadow-[0_25px_60px_rgba(25,40,65,0.22)] group">
              <Image
                src={HeroImage}
                alt="Legal professionals in conference room"
                fill
                className="object-cover origin-center transition-transform duration-700 group-hover:scale-[1.04]"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#192841]/80 via-[#192841]/40 to-transparent group-hover:opacity-90 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
              
              {/* Professional badge */}
              <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm rounded-full px-5 py-1.5 shadow-lg text-xs font-medium text-[#192841] border border-[#9e814d]/20">
                Board Certified Attorneys
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-[#192841]/50 p-6 backdrop-blur-md border border-white/10 transform transition-all duration-500 group-hover:translate-y-0 translate-y-1 opacity-95 group-hover:opacity-100">
                <p className="text-sm font-medium text-white leading-relaxed drop-shadow-md">
                  Delivering strategic, forward-thinking legal counsel with unwavering commitment to your success
                </p>
              </div>
            </div>
            
            {/* Refined decorative elements */}
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#9e814d]/10 backdrop-blur-xl"></div>
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#192841]/10 backdrop-blur-xl"></div>
            <div className="absolute top-1/2 -right-6 h-20 w-20 rounded-full bg-[#9e814d]/15 backdrop-blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
