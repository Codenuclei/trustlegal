import Link from "next/link";
import Image from "next/image";
import { Check, ChevronRight, FileText, Users, Building, Shield, Lightbulb } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function BusinessLawPage() {
  const businessServices = [
    {
      title: "Business Formation & Incorporation",
      description: "Strategic guidance on selecting the optimal business structure, preparing and filing required documentation, and ensuring regulatory compliance during the incorporation process.",
      icon: <Building className="h-6 w-6" />,
      details: [
        "Corporation setup and registration",
        "Partnership agreements",
        "Sole proprietorship establishment",
        "Non-profit organization formation",
        "Business name registration",
        "Articles of incorporation"
      ]
    },
    {
      title: "Contract Drafting & Review",
      description: "Comprehensive contract services including drafting, negotiation, review, and revision of all types of business agreements to protect your interests and minimize risk.",
      icon: <FileText className="h-6 w-6" />,
      details: [
        "Service agreements",
        "Sales contracts",
        "Partnership agreements",
        "Vendor contracts",
        "Non-disclosure agreements",
        "License agreements"
      ]
    },
    {
      title: "Corporate Governance",
      description: "Guidance on establishing effective governance structures, board practices, and corporate policies to ensure compliance and promote sound decision-making.",
      icon: <Users className="h-6 w-6" />,
      details: [
        "Board structure and responsibilities",
        "Corporate bylaws",
        "Shareholder agreements",
        "Board meeting protocols",
        "Corporate record maintenance",
        "Governance policy development"
      ]
    },
    {
      title: "Mergers & Acquisitions",
      description: "Expert assistance through all phases of the M&A process, from initial strategy and due diligence to negotiation, documentation, and post-closing integration.",
      icon: <Building className="h-6 w-6" />,
      details: [
        "Transaction structuring",
        "Due diligence coordination",
        "Purchase agreement negotiation",
        "Regulatory compliance",
        "Asset purchases",
        "Stock transactions"
      ]
    },
    {
      title: "Employment Law",
      description: "Comprehensive employment law services covering hiring practices, employee handbooks, workplace policies, and representation in employment disputes.",
      icon: <Users className="h-6 w-6" />,
      details: [
        "Employment agreements",
        "Workplace policies",
        "Termination procedures",
        "Non-compete agreements",
        "Workplace compliance",
        "HR policy development"
      ]
    },
    {
      title: "Regulatory Compliance",
      description: "Navigating complex regulatory landscapes to ensure your business operations remain compliant with federal, provincial, and local regulations.",
      icon: <Shield className="h-6 w-6" />,
      details: [
        "Regulatory audits",
        "Compliance program development",
        "Industry-specific regulations",
        "Reporting requirements",
        "Compliance training",
        "Risk assessment"
      ]
    }
  ];

  const businessFAQs = [
    {
      question: "When should I incorporate my business?",
      answer: "The optimal timing for incorporation depends on various factors including liability concerns, tax implications, funding needs, and growth plans. Generally, incorporation becomes beneficial when your business faces increased liability risks, requires external investment, or would benefit from tax advantages available to corporations. During your consultation, we can evaluate your specific situation to determine if incorporation is right for your business."
    },
    {
      question: "What's the difference between a corporation and other business structures?",
      answer: "A corporation is a separate legal entity distinct from its owners, providing liability protection by separating personal assets from business liabilities. Other structures like sole proprietorships offer simplicity but no liability protection, while partnerships distribute liability among partners. Corporations also offer potential tax advantages, perpetual existence, and greater ease in raising capital, though they involve more regulatory compliance and administrative requirements."
    },
    {
      question: "How can I protect my business from contract disputes?",
      answer: "Preventing contract disputes begins with clearly written agreements that explicitly outline all terms, obligations, and remedies. Having your contracts professionally drafted or reviewed by a business attorney is crucial. Additional protective measures include documenting all communications, maintaining thorough records, establishing clear internal processes for contract management, building dispute resolution mechanisms into agreements, and conducting regular contract audits."
    },
    {
      question: "What should I consider before acquiring another business?",
      answer: "Before proceeding with an acquisition, conduct thorough due diligence covering financial health, legal compliance, intellectual property assets, existing contracts, employment matters, and potential liabilities. Consider the strategic fit, integration challenges, customer and supplier relationships, and market position. Develop a clear integration plan, understand regulatory approvals needed, and structure the deal appropriately. Our M&A team can guide you through this complex process."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#1e2b3e] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Practice Area</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Business Law</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Comprehensive legal solutions for businesses of all sizes, from formation and daily operations to growth strategies and complex transactions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors"
                >
                  Schedule a Consultation
                </Link>
                <Link 
                  href="#services" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded-md hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Expertise</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e] mb-6">Business Legal Solutions That Drive Success</h2>
                <p className="text-[#1e2b3e]/70 mb-6">
                  At TRUST LEGAL, we understand that businesses face unique legal challenges at every stage of their development. Our business law practice provides tailored legal solutions that support your operational needs while positioning your company for sustainable growth and success.
                </p>
                <p className="text-[#1e2b3e]/70 mb-6">
                  Led by Omung Gupta, our business law team combines industry knowledge with legal expertise to deliver practical, business-oriented advice. Whether you&apos;re launching a startup, managing day-to-day operations, or planning a major transaction, we provide the guidance you need to make informed decisions and protect your business interests.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Personalized legal strategies",
                    "Practical business advice",
                    "Risk mitigation focus",
                    "Responsive client service",
                    "Cost-effective solutions",
                    "Industry-specific knowledge"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mt-1">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-[#1e2b3e]/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/business-law.jpg" 
                  alt="Business Law Services" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Our Services</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e]">Comprehensive Business Law Services</h2>
              <p className="mt-4 text-[#1e2b3e]/70 max-w-3xl mx-auto">
                From entity formation to complex corporate transactions, our business law practice offers a complete range of services to address your company&apos;s legal needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="p-6">
                    <div className="rounded-full bg-[#1e2b3e]/10 p-3 w-fit text-[#1e2b3e] mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#1e2b3e] mb-3">{service.title}</h3>
                    <p className="text-[#1e2b3e]/70 mb-5">{service.description}</p>
                    <h4 className="text-sm font-medium text-[#1e2b3e] mb-3">Services include:</h4>
                    <ul className="space-y-2 mb-4">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mt-1">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span className="text-sm text-[#1e2b3e]/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Our Process</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e]">How We Work With Business Clients</h2>
              <p className="mt-4 text-[#1e2b3e]/70 max-w-3xl mx-auto">
                Our structured approach ensures we deliver tailored legal solutions that address your business needs while positioning you for long-term success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
              {[
                {
                  icon: <Lightbulb className="h-6 w-6" />,
                  title: "Understand",
                  description: "We begin by thoroughly understanding your business model, objectives, challenges, and industry context."
                },
                {
                  icon: <FileText className="h-6 w-6" />,
                  title: "Analyze",
                  description: "Our team analyzes your specific situation to identify legal needs and potential risks requiring attention."
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Strategize",
                  description: "We develop customized legal strategies aligned with your business goals and risk tolerance."
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Implement & Monitor",
                  description: "We execute the agreed strategy and provide ongoing support as your business evolves."
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-[#f9f9f9] rounded-lg p-6 h-full border border-gray-100 relative z-10">
                    <div className="rounded-full bg-[#ba9669]/20 p-3 w-fit text-[#ba9669] mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#1e2b3e] mb-3">{step.title}</h3>
                    <p className="text-[#1e2b3e]/70">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-20">
                      <ChevronRight className="h-8 w-8 text-[#ba9669]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Benefits */}
        <section className="py-16 md:py-24 bg-[#1e2b3e] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Benefits</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Business Law Services</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our business-focused legal approach delivers tangible benefits that support your company&apos;s growth and success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Risk Mitigation",
                  description: "Proactively identify and address legal risks before they become costly problems through comprehensive compliance reviews and strategic planning."
                },
                {
                  title: "Business Continuity",
                  description: "Ensure your business operations continue smoothly with legally sound governance structures, succession planning, and crisis management protocols."
                },
                {
                  title: "Strategic Growth",
                  description: "Position your business for expansion with legal frameworks that support scaling, new market entry, and strategic partnerships or acquisitions."
                },
                {
                  title: "Cost Efficiency",
                  description: "Prevent expensive legal issues through proper documentation, compliance, and risk management, saving significant costs in the long run."
                },
                {
                  title: "Competitive Advantage",
                  description: "Leverage legal structures and protections that allow your business to operate more efficiently and capitalize on opportunities faster than competitors."
                },
                {
                  title: "Peace of Mind",
                  description: "Focus on running your business knowing that your legal matters are being handled by experienced professionals committed to your success."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#ba9669] mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study or Example */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Case Study</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e] mb-6">Helping a Tech Startup Navigate Growth</h2>
                <p className="text-[#1e2b3e]/70 mb-4">
                  A technology startup approached us during their critical growth phase. They needed comprehensive legal support as they prepared for a significant funding round and expanded their team.
                </p>
                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-lg font-medium text-[#1e2b3e] mb-2">The Challenge</h3>
                    <p className="text-[#1e2b3e]/70">
                      The company needed to restructure their corporate governance, develop IP protection strategies, create employment agreements for new hires, and prepare documentation for investors—all while maintaining focus on their product development.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1e2b3e] mb-2">Our Approach</h3>
                    <p className="text-[#1e2b3e]/70">
                      We provided a dedicated legal team that worked closely with the founders to understand their business model and growth objectives. We developed a comprehensive legal strategy covering corporate restructuring, IP protection, employment policies, and investment documentation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1e2b3e] mb-2">The Result</h3>
                    <p className="text-[#1e2b3e]/70">
                      With our support, the company successfully closed their funding round, implemented solid governance structures, protected their intellectual property, and scaled their team—all with legally sound frameworks that positioned them for sustainable growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/business-case-study.jpg" 
                  alt="Business Case Study" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">FAQ</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e]">Frequently Asked Questions</h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {businessFAQs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-[#1e2b3e] mb-3">{faq.question}</h3>
                  <p className="text-[#1e2b3e]/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-[#1e2b3e] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Business Legal Needs?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact TRUST LEGAL today to schedule a consultation with our business law team. We&apos;ll help you navigate complex legal challenges and develop strategies that support your business goals.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}