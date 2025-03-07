import Link from "next/link";
import Image from "next/image";
import { Check, ChevronRight, FileText, Scale, Gavel, BarChart, ArrowDownUp, Shield } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function LitigationPage() {
  const litigationServices = [
    {
      title: "Civil Litigation",
      description: "Comprehensive legal representation in all types of civil disputes, from initial assessment through trial and appeal if necessary.",
      icon: <Scale className="h-6 w-6" />,
      details: [
        "Personal injury claims",
        "Property disputes",
        "Professional negligence",
        "Insurance disputes",
        "Shareholder disputes",
        "Breach of statutory duty"
      ]
    },
    {
      title: "Commercial Disputes",
      description: "Strategic advocacy in business-related conflicts, focusing on your commercial objectives and the most efficient path to resolution.",
      icon: <BarChart className="h-6 w-6" />,
      details: [
        "Breach of contract claims",
        "Partnership disputes",
        "Unfair competition claims",
        "Business torts",
        "Trade secret violations",
        "Commercial fraud cases"
      ]
    },
    {
      title: "Contract Disputes",
      description: "Expert analysis and representation in disputes arising from contractual agreements, ensuring enforcement of rights and obligations.",
      icon: <FileText className="h-6 w-6" />,
      details: [
        "Contract breach remedies",
        "Contract interpretation",
        "Warranty claims",
        "Performance disputes",
        "Service level agreements",
        "Termination disputes"
      ]
    },
    {
      title: "Alternative Dispute Resolution",
      description: "Skilled representation in mediation, arbitration, and negotiated settlements to resolve disputes without the cost and time of traditional litigation.",
      icon: <ArrowDownUp className="h-6 w-6" />,
      details: [
        "Mediation proceedings",
        "Arbitration representation",
        "Settlement negotiations",
        "Early neutral evaluation",
        "Mini-trials",
        "Dispute review boards"
      ]
    },
    {
      title: "Debt Recovery",
      description: "Effective strategies to recover outstanding debts through demand letters, litigation, and enforcement of judgments.",
      icon: <Gavel className="h-6 w-6" />,
      details: [
        "Demand letter campaigns",
        "Payment plan negotiations",
        "Default judgments",
        "Garnishment proceedings",
        "Property liens",
        "Judgment enforcement"
      ]
    },
    {
      title: "Injunctions & Emergency Relief",
      description: "Urgent representation to secure court orders preventing harmful actions or preserving the status quo until a dispute is resolved.",
      icon: <Shield className="h-6 w-6" />,
      details: [
        "Temporary restraining orders",
        "Preliminary injunctions",
        "Freezing orders",
        "Non-disclosure enforcement",
        "Asset preservation orders",
        "Emergency court applications"
      ]
    }
  ];

  const litigationFAQs = [
    {
      question: "How long will my litigation case take to resolve?",
      answer: "The timeline for litigation varies significantly depending on case complexity, court schedules, and whether settlement is possible. Simple matters might resolve in 6-9 months, while complex cases can take 1-3 years. Alternative dispute resolution methods like mediation can expedite resolution. During your consultation, we'll provide a realistic timeline estimate based on your specific circumstances."
    },
    {
      question: "What are the potential costs involved in litigation?",
      answer: "Litigation costs include legal fees, court filing fees, expert witness fees, document production expenses, and potentially costs awarded to the other party if unsuccessful. We offer various fee arrangements including hourly rates, flat fees for certain services, and in some cases, contingency arrangements. We provide transparent cost estimates upfront and regular updates as your case progresses to avoid surprises."
    },
    {
      question: "Is it better to settle or go to trial?",
      answer: "The decision to settle or proceed to trial depends on numerous factors including the strength of your case, potential damages, financial and emotional costs of prolonged litigation, risk tolerance, and confidentiality concerns. Settlements offer certainty, confidentiality, and cost control, while trials may be necessary when parties are far apart or important principles are at stake. We help you weigh these factors to make an informed decision aligned with your goals."
    },
    {
      question: "What documents should I preserve if I anticipate litigation?",
      answer: "It's crucial to preserve all potentially relevant documents including contracts, correspondence (emails, letters, texts), financial records, photographs, reports, meeting notes, and electronic data. Once litigation is reasonably anticipated, you have a legal duty to preserve evidence. We can help you implement a litigation hold, identify critical documents, and develop a document management strategy to ensure compliance with disclosure obligations while protecting privileged information."
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Litigation</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Strategic representation in disputes, with a focus on efficient resolution and protecting your legal and business interests.
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e] mb-6">Effective Dispute Resolution Strategies</h2>
                <p className="text-[#1e2b3e]/70 mb-6">
                  At TRUST LEGAL, we understand that disputes can disrupt your business operations and personal life. Our litigation practice combines legal expertise with strategic thinking to resolve conflicts effectively, whether through negotiation, alternative dispute resolution, or courtroom advocacy.
                </p>
                <p className="text-[#1e2b3e]/70 mb-6">
                  Led by Omung Gupta, our litigation team focuses on achieving optimal outcomes while managing costs and minimizing disruption to your business or personal affairs. We approach each case with meticulous preparation, creative problem-solving, and the tenacity required to protect your rights and interests.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Strategic case assessment",
                    "Cost-effective solutions",
                    "Courtroom experience",
                    "Negotiation expertise",
                    "Thorough preparation",
                    "Results-oriented approach"
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
                  src="/images/litigation.jpg" 
                  alt="Litigation Services" 
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e]">Comprehensive Litigation Services</h2>
              <p className="mt-4 text-[#1e2b3e]/70 max-w-3xl mx-auto">
                From pre-litigation strategy to courtroom advocacy and enforcement of judgments, our litigation practice offers complete dispute resolution services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {litigationServices.map((service, index) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e]">The Litigation Journey</h2>
              <p className="mt-4 text-[#1e2b3e]/70 max-w-3xl mx-auto">
                Our structured approach to litigation ensures thorough preparation, strategic execution, and regular communication throughout your case.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
              {[
                {
                  icon: <FileText className="h-6 w-6" />,
                  title: "Case Assessment",
                  description: "We thoroughly evaluate the merits of your case, identify strengths and weaknesses, and determine the optimal strategy for resolution."
                },
                {
                  icon: <BarChart className="h-6 w-6" />,
                  title: "Case Development",
                  description: "We gather evidence, interview witnesses, research relevant law, and prepare all necessary documentation to build a compelling case."
                },
                {
                  icon: <ArrowDownUp className="h-6 w-6" />,
                  title: "Resolution Strategy",
                  description: "We pursue the most appropriate path to resolution, whether through negotiation, mediation, arbitration, or court proceedings."
                },
                {
                  icon: <Gavel className="h-6 w-6" />,
                  title: "Trial & Enforcement",
                  description: "When necessary, we provide skilled advocacy in court and ensure that judgments in your favor are properly enforced."
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Litigation Services</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our strategic approach to litigation provides significant advantages that help you achieve favorable outcomes while managing risks and costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Strategic Advantage",
                  description: "Benefit from our litigation experience, legal insights, and strategic approach to position your case for the best possible outcome."
                },
                {
                  title: "Cost Management",
                  description: "We focus on efficient resolution strategies that minimize unnecessary expenses while maintaining the quality of your representation."
                },
                {
                  title: "Risk Assessment",
                  description: "Receive comprehensive evaluations of potential outcomes and risks, allowing you to make informed decisions throughout the litigation process."
                },
                {
                  title: "Business Continuity",
                  description: "Our approach aims to minimize disruption to your business operations while addressing the legal dispute effectively."
                },
                {
                  title: "Negotiation Leverage",
                  description: "Strong case preparation and litigation readiness often create leverage for more favorable settlement terms."
                },
                {
                  title: "Peace of Mind",
                  description: "Rest assured knowing that experienced advocates are protecting your interests and navigating complex legal procedures on your behalf."
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e] mb-6">Resolving a Complex Commercial Dispute</h2>
                <p className="text-[#1e2b3e]/70 mb-4">
                  A mid-sized manufacturing company faced a significant breach of contract claim from a major supplier that threatened their operational stability and financial health.
                </p>
                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-lg font-medium text-[#1e2b3e] mb-2">The Challenge</h3>
                    <p className="text-[#1e2b3e]/70">
                      The supplier was demanding substantial damages for alleged breach of a long-term supply agreement. Our client maintained that poor quality and late deliveries justified their actions. With over $1.5 million at stake and potential damage to industry relationships, a strategic approach was essential.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1e2b3e] mb-2">Our Approach</h3>
                    <p className="text-[#1e2b3e]/70">
                      We conducted a comprehensive review of all contract documents and performance records, identified key leverage points, and developed a strong counterclaim. Rather than proceeding directly to litigation, we proposed a structured mediation with clearly defined parameters, giving both sides a face-saving path to resolution.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1e2b3e] mb-2">The Result</h3>
                    <p className="text-[#1e2b3e]/70">
                      Through strategic negotiation and mediation, we secured a settlement at less than 30% of the original demand, with favorable payment terms and a restructured supply arrangement. The matter was resolved in four months, saving significant litigation costs and preserving important industry relationships.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/litigation-case-study.jpg" 
                  alt="Litigation Case Study" 
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
              {litigationFAQs.map((faq, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Legal Dispute?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact TRUST LEGAL today to schedule a consultation with our litigation team. We&apos;ll help you evaluate your case and develop a strategic approach to protecting your rights and interests.
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