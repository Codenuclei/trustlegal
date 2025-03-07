"use client";

import { useEffect, useState } from "react";
import { Shield, Scale, Trophy, Clock } from "lucide-react";

export default function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById("why-choose-us");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const features = [
    {
      icon: <Shield className="h-12 w-12 text-[#ba9669]" />,
      title: "Legal Excellence",
      description: "Our attorneys bring decades of combined experience across multiple legal disciplines."
    },
    {
      icon: <Scale className="h-12 w-12 text-[#ba9669]" />,
      title: "Client-Focused Approach",
      description: "We're committed to providing personalized attention and tailored solutions to each client."
    },
    {
      icon: <Trophy className="h-12 w-12 text-[#ba9669]" />,
      title: "Proven Results",
      description: "Our track record of successful outcomes speaks to our dedication and expertise."
    },
    {
      icon: <Clock className="h-12 w-12 text-[#ba9669]" />,
      title: "Responsive Service",
      description: "We understand the urgency of legal matters and provide timely communication."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-gradient-to-b from-white to-[#f9f9f9] relative">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block rounded-lg bg-[#ba9669]/20 px-4 py-2 text-sm font-medium text-[#ba9669]">
            Why Choose Us
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1e2b3e] sm:text-4xl md:text-5xl">
            A Tradition of <span className="text-[#ba9669] relative">
              Excellence
              <span className="absolute bottom-1 left-0 w-full h-1 bg-[#ba9669]/20 rounded-full"></span>
            </span>
          </h2>
          <p className="mt-6 text-lg text-[#1e2b3e]/70 leading-relaxed">
            TRUST LEGAL is committed to providing exceptional legal services with integrity, 
            professionalism, and a dedication to achieving optimal results for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg border border-[#ba9669]/10 
              transition-all duration-700 hover:shadow-2xl hover:border-[#ba9669]/30 
              hover:translate-y-[-5px] group ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-[#ba9669]/10 rounded-xl mb-5 
                group-hover:bg-[#ba9669]/20 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1e2b3e] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#1e2b3e]/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}