import Link from "next/link";
import Image from "next/image";
import { Check, ChevronRight, FileText, Building, Building2, Ruler, Map, Shield } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RealEstatePage() {
  const realEstateServices = [
    {
      title: "Commercial Property Transactions",
      description: "Comprehensive legal counsel for the purchase, sale, and leasing of commercial properties, including office buildings, retail spaces, and industrial properties.",
      icon: <Building className="h-6 w-6" />,
      details: [
        "Purchase and sale agreements",
        "Commercial lease negotiations",
        "Property development contracts",
        "Financing documentation",
        "Due diligence coordination",
        "Closing procedures"
      ]
    },
    {
      title: "Residential Real Estate",
      description: "Expert guidance through residential property transactions, ensuring smooth closings while protecting your interests throughout the process.",
      icon: <Building2 className="h-6 w-6" />,
      details: [
        "Home purchase and sale",
        "Condominium transactions",
        "New construction purchases",
        "Residential lease reviews",
        "Title examination",
        "Mortgage documentation"
      ]
    },
    {
      title: "Lease Agreements",
      description: "Drafting, review, and negotiation of lease agreements that protect your interests as either a landlord or tenant in commercial or residential properties.",
      icon: <FileText className="h-6 w-6" />,
      details: [
        "Commercial lease drafting",
        "Residential lease preparation",
        "Lease term negotiations",
        "Renewal options",
        "Sublease agreements",
        "Lease dispute resolution"
      ]
    },
    {
      title: "Title Review & Due Diligence",
      description: "Thorough investigation of property titles and comprehensive due diligence to identify and resolve potential issues before closing.",
      icon: <Shield className="h-6 w-6" />,
      details: [
        "Title searches",
        "Property survey review",
        "Land use compliance",
        "Zoning verification",
        "Environmental assessment reviews",
        "Title insurance coordination"
      ]
    },
    {
      title: "Land Development",
      description: "Legal support for developers throughout the land development process, from acquisition through construction and eventual sale or leasing.",
      icon: <Map className="h-6 w-6" />,
      details: [
        "Development agreements",
        "Land use and zoning issues",
        "Construction contracts",
        "Environmental compliance",
        "Subdivision approvals",
        "Municipal development permits"
      ]
    },
    {
      title: "Real Estate Disputes",
      description: "Effective representation in various real estate disputes, with a focus on efficient resolution while protecting your property rights.",
      icon: <Ruler className="h-6 w-6" />,
      details: [
        "Boundary disputes",
        "Title defect litigation",
        "Landlord-tenant conflicts",
        "Contract enforcement",
        "Construction defect claims",
        "Property damage issues"
      ]
    }
  ];

  const realEstateFAQs = [
    {
      question: "What should I expect during the closing process for a property purchase?",
      answer: "The closing process typically involves several steps: final document review, title search verification, funds transfer arrangements, closing disclosure review, final property inspection, and document signing. As your legal representative, we coordinate with all parties—including lenders, agents, and opposing counsel—to ensure all conditions are met, funds are properly transferred, and all legal documents are accurately prepared and executed. We attend the closing with you to review all documents before signing, ensuring your interests are protected throughout the process."
    },
    {
      question: "What issues might arise during a title search and how do you address them?",
      answer: "Title searches can reveal various issues including liens, easements, encroachments, survey discrepancies, ownership disputes, or improper prior conveyances. When issues arise, we first thoroughly analyze their impact on your transaction and property rights. Depending on the situation, we may negotiate with the seller for resolution, work with title insurance companies on coverage exceptions, prepare curative documents like quitclaim deeds, or recommend specific legal actions to clear the title. Our goal is to ensure you receive clear title to your property with all issues properly addressed before closing."
    },
    {
      question: "How do commercial real estate transactions differ from residential purchases?",
      answer: "Commercial transactions generally involve more complex due diligence, including environmental assessments, zoning compliance, usage restrictions, and tenant rights review. The financing structures typically differ, with commercial loans having different terms and requirements. Commercial agreements often have more negotiable terms and contingencies than standardized residential contracts. The closing process usually involves additional documentation, and the legal liability considerations are more complex. Given these differences, commercial transactions generally require more specialized legal expertise to navigate effectively."
    },
    {
      question: "What should I know about purchasing investment property?",
      answer: "Investment property purchases require consideration of several unique factors: optimal ownership structure (individual, partnership, or corporation), tax implications including depreciation benefits and capital gains treatment, financing options specific to investment properties, tenant rights for properties with existing tenants, rental income verification, property management planning, and local regulations affecting rental properties. We help investors address these considerations upfront, structure their purchase appropriately, and establish proper legal protections to maximize their return while minimizing potential liability."
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Real Estate Law</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Thorough legal counsel for all aspects of residential and commercial real estate transactions, ensuring your property interests are protected.
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e] mb-6">Navigating Real Estate Transactions with Confidence</h2>
                <p className="text-[#1e2b3e]/70 mb-6">
                  At TRUST LEGAL, we understand that real estate transactions represent significant investments and important milestones, whether for individuals or businesses. Our real estate practice combines legal expertise with practical knowledge of the property market to guide clients through complex transactions.
                </p>
                <p className="text-[#1e2b3e]/70 mb-6">
                  Led by Omung Gupta, our real estate team provides detailed attention to every aspect of property transactions, from initial contract review through due diligence and closing. We anticipate potential issues before they arise and ensure your real estate dealings proceed smoothly while protecting your interests.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Transaction security",
                    "Clear title assurance",
                    "Contract protection",
                    "Risk minimization",
                    "Regulatory compliance",
                    "Smooth closing process"
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
                  src="/images/real-estate-law.jpg" 
                  alt="Real Estate Services" 
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e]">Comprehensive Real Estate Services</h2>
              <p className="mt-4 text-[#1e2b3e]/70 max-w-3xl mx-auto">
                From residential purchases to complex commercial developments, our real estate practice offers complete legal support for all your property transactions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realEstateServices.map((service, index) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e]">Real Estate Transaction Journey</h2>
              <p className="mt-4 text-[#1e2b3e]/70 max-w-3xl mx-auto">
                Our structured approach ensures thorough handling of every aspect of your real estate transaction from initial agreement to final closing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
              {[
                {
                  icon: <FileText className="h-6 w-6" />,
                  title: "Contract Review",
                  description: "We meticulously review all contract terms to ensure your interests are protected and potential issues are addressed upfront."
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Due Diligence",
                  description: "We conduct comprehensive due diligence including title searches, survey reviews, and regulatory compliance verification."
                },
                {
                  icon: <Building className="h-6 w-6" />,
                  title: "Negotiation & Resolution",
                  description: "We negotiate necessary terms and resolve any issues discovered during the due diligence process."
                },
                {
                  icon: <Map className="h-6 w-6" />,
                  title: "Closing & Transfer",
                  description: "We prepare and review all closing documents, attend closing, and ensure proper transfer of title and funds."
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Real Estate Services</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our comprehensive approach to real estate law provides distinct advantages that protect your investment and ensure smooth transactions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Transaction Security",
                  description: "Ensure your property transaction proceeds with proper legal protection, clear contract terms, and thorough documentation."
                },
                {
                  title: "Risk Mitigation",
                  description: "Identify and address potential issues before they become problems through comprehensive due diligence and careful review."
                },
                {
                  title: "Regulatory Compliance",
                  description: "Navigate complex real estate regulations with confidence, ensuring your transaction meets all legal requirements."
                },
                {
                  title: "Efficient Closings",
                  description: "Experience smooth, timely closings with all documentation properly prepared and all parties' obligations clearly defined."
                },
                {
                  title: "Long-term Protection",
                  description: "Secure your property investment with properly structured agreements that protect your interests now and in the future."
                },
                {
                  title: "Peace of Mind",
                  description: "Proceed with confidence knowing experienced real estate attorneys are protecting your interests throughout every step of the process."
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e] mb-6">Resolving Complex Commercial Property Acquisition</h2>
                <p className="text-[#1e2b3e]/70 mb-4">
                  A client approached us regarding the purchase of a multi-tenant commercial property with several complicated title and environmental concerns that threatened to derail the transaction.
                </p>
                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-lg font-medium text-[#1e2b3e] mb-2">The Challenge</h3>
                    <p className="text-[#1e2b3e]/70">
                      The property had multiple unresolved liens, easement disputes, and potential environmental issues from a previous tenant. The seller was unwilling to address these concerns, and our client faced a tight acquisition timeline due to financing requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1e2b3e] mb-2">Our Approach</h3>
                    <p className="text-[#1e2b3e]/70">
                      We conducted an expedited but thorough due diligence process, prioritizing the most significant issues. We negotiated a creative solution involving a partial holdback of funds in escrow, obtained specialized title insurance coverage, and structured an environmental indemnification agreement to protect our client while allowing the transaction to proceed.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1e2b3e] mb-2">The Result</h3>
                    <p className="text-[#1e2b3e]/70">
                      Our client successfully acquired the property within their timeline, with appropriate legal protections in place. The transaction included mechanisms to address the identified issues post-closing without delaying the acquisition. The property has since increased in value by 22%, providing an excellent return on investment while all legacy issues have been systematically resolved.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/real-estate-case-study.jpg" 
                  alt="Real Estate Case Study" 
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
              {realEstateFAQs.map((faq, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Real Estate Needs?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact TRUST LEGAL today to schedule a consultation with our real estate law team. Whether you&apos;re buying, selling, leasing, or developing property, we'll help you navigate the process with confidence.
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