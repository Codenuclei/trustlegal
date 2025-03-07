"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Team from "../public/legal-team.jpg"

export default function AboutSection() {
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

  return (
    <section id="about" ref={sectionRef} className="bg-gradient-to-b from-white to-[#f8f5f0] py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div
            className={`relative transition-all duration-1000 ease-in-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative h-[480px] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(8,112,184,0.07)]">
              <Image
                src={Team}
                alt="TRUST LEGAL legal professionals"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1a2537]/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 lg:bottom-36 -right-6 h-32 w-32 rounded-full bg-[#c9a77a] shadow-lg opacity-90"></div>
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#1e2b3e]/20 backdrop-blur-md"></div>
            <div className="absolute top-1/2 right-12 h-16 w-16 rounded-full bg-[#1e2b3e]/10 backdrop-blur-sm"></div>
          </div>
          <div
            className={`flex flex-col justify-center space-y-8 transition-all duration-1000 ease-in-out delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <div className="inline-block rounded-md border border-[#ba9669]/40 bg-[#ba9669]/10 px-5 py-2 text-sm font-semibold tracking-wide text-[#9a7954]">Our Expertise</div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a2537] sm:text-4xl md:text-5xl lg:leading-tight">
                Legal Excellence with <span className="text-[#ba9669] border-b-2 border-[#ba9669]/20 pb-1">Integrity & Precision</span>
              </h2>
              <p className="max-w-[650px] text-[#1e2b3e]/80 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                TRUST LEGAL assembles distinguished attorneys with exceptional credentials and proven expertise across critical legal disciplines. 
                We deliver sophisticated, tailored legal solutions for individuals, businesses, and institutions, providing strategic 
                counsel that safeguards your interests and advances your strategic objectives with the highest standards of professionalism.
              </p>
            </div>
            <div className="grid gap-6 pt-4 md:grid-cols-2">
              {[
                { title: "Corporate & Business Law", desc: "Sophisticated legal solutions spanning entity formation, governance, compliance, and complex commercial transactions." },
                { title: "Litigation & Dispute Resolution", desc: "Strategic representation in high-stakes litigation with meticulous preparation and compelling advocacy." },
                { title: "Immigration & Global Mobility", desc: "Comprehensive immigration counsel for multinational corporations, investors, and skilled professionals." },
                { title: "Real Estate & Property", desc: "Expert guidance for commercial and residential acquisitions, development, leasing, and regulatory compliance." }
              ].map((item, i) => (
                <div key={i} className="group space-y-2.5 rounded-xl border border-[#1e2b3e]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#ba9669]/40 hover:shadow-md">
                  <div className="flex items-center gap-3.5">
                    <div className="rounded-full bg-gradient-to-r from-[#ba9669]/20 to-[#d4b78e]/30 p-2.5 group-hover:from-[#ba9669]/30 group-hover:to-[#d4b78e]/40 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-[#ba9669]"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-[#1a2537] group-hover:text-[#ba9669] transition-colors duration-300">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#1e2b3e]/70 pl-10">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <button className="inline-flex items-center gap-2 rounded-lg bg-[#1e2b3e] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#ba9669] focus:outline-none focus:ring-2 focus:ring-[#ba9669]/50">
                Learn More About Our Services
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
