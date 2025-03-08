import Link from "next/link";
import Image from "next/image";
import { Check, ChevronRight, FileText, Users, Globe, Shield, Lightbulb, MapPin } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ImmigrationPage() {
  const immigrationServices = [
    {
      title: "Permanent Residency Applications",
      description: "Expert guidance through all pathways to permanent residency in Canada, including Express Entry, Provincial Nominee Programs, and family-based applications.",
      icon: <MapPin className="h-6 w-6" />,
      details: [
        "Express Entry applications",
        "Provincial Nominee Programs",
        "Canadian Experience Class",
        "Federal Skilled Worker Program",
        "Federal Skilled Trades Program",
        "Application preparation and submission"
      ]
    },
    {
      title: "Work Permits & Study Permits",
      description: "Assistance with temporary residence applications, including work permits, study permits, and visitor visas for various purposes and situations.",
      icon: <FileText className="h-6 w-6" />,
      details: [
        "LMIA-based work permits",
        "LMIA-exempt work permits",
        "Post-graduation work permits",
        "Study permits for all levels",
        "Permit extensions and changes",
        "Open work permits"
      ]
    },
    {
      title: "Business Immigration",
      description: "Strategic immigration solutions for entrepreneurs, investors, and skilled professionals looking to bring their talents to Canada.",
      icon: <Globe className="h-6 w-6" />,
      details: [
        "Start-up Visa Program",
        "Self-employed persons program",
        "Investor programs",
        "Entrepreneur pathways",
        "Intra-company transfers",
        "Business visitor entries"
      ]
    },
    {
      title: "Family Sponsorship",
      description: "Reuniting families through spousal sponsorship, parent and grandparent sponsorship, and other family class immigration programs.",
      icon: <Users className="h-6 w-6" />,
      details: [
        "Spousal and partner sponsorship",
        "Parent and grandparent sponsorship",
        "Dependent children sponsorship",
        "Super visa applications",
        "Extended family sponsorship",
        "Sponsorship appeals"
      ]
    },
    {
      title: "Citizenship Applications",
      description: "Support throughout the Canadian citizenship application process, from eligibility assessment to test preparation and citizenship ceremonies.",
      icon: <FileText className="h-6 w-6" />,
      details: [
        "Citizenship eligibility assessment",
        "Application preparation",
        "Document review",
        "Citizenship test preparation",
        "Residency obligation issues",
        "Citizenship ceremonies"
      ]
    },
    {
      title: "Immigration Appeals",
      description: "Representation for various immigration appeals and inadmissibility issues, including deportation defense and humanitarian applications.",
      icon: <Shield className="h-6 w-6" />,
      details: [
        "Immigration Appeal Division appeals",
        "Refugee Appeal Division appeals",
        "Judicial review applications",
        "Deportation hearings",
        "Humanitarian & compassionate applications",
        "Temporary resident permit applications"
      ]
    }
  ];

  const immigrationFAQs = [
    {
      question: "What are the main pathways to permanent residency in Canada?",
      answer: "Canada offers several pathways to permanent residency, including Express Entry (for skilled workers), Provincial Nominee Programs (province-specific streams), Family Sponsorship (for relatives of Canadian citizens/PRs), Business Immigration (for entrepreneurs and investors), and humanitarian programs like refugee protection. Each pathway has specific eligibility requirements and application procedures. During your consultation, we can assess your situation and recommend the most suitable option."
    },
    {
      question: "How long does the immigration process typically take?",
      answer: "Processing times vary significantly depending on the immigration program, your country of residence, application completeness, and current IRCC workloads. Express Entry applications can be processed in 6-12 months, while family sponsorship may take 12-24 months. Provincial programs and business immigration can range from 12-36 months. During your consultation, we can provide current processing time estimates for your specific situation based on the latest IRCC data."
    },
    {
      question: "What happens if my immigration application is refused?",
      answer: "If your application is refused, you generally have several options: submit a new application addressing the reasons for refusal, file an appeal with the Immigration Appeal Division (if eligible), request reconsideration, or apply for judicial review at the Federal Court. The appropriate option depends on your specific circumstances and the reason for refusal. Our team can help you understand the refusal grounds and develop a strategy for moving forward."
    },
    {
      question: "Do I need a job offer to immigrate to Canada?",
      answer: "While a job offer can strengthen many immigration applications, it isn't always required. Programs like Express Entry award points for job offers but don't mandate them. Some Provincial Nominee Programs do require job offers, while others don't. Family sponsorship and humanitarian programs don't require employment. Business immigration typically focuses on your ability to create jobs rather than having a job offer. We can help you navigate the options based on your professional background and connections to Canada."
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Immigration Law</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Navigating your path to Canada with expert guidance and personalized immigration solutions for individuals, families, and businesses.
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e] mb-6">Your Journey to Canada Starts Here</h2>
                <p className="text-[#1e2b3e]/70 mb-6">
                  At TRUST LEGAL, we understand that immigration is more than a legal process—it&apos;s a life-changing journey. Our immigration law practice combines in-depth knowledge of Canadian immigration regulations with a compassionate approach to help you navigate the complexities of moving to Canada.
                </p>
                <p className="text-[#1e2b3e]/70 mb-6">
                  Under the leadership of Omung Gupta, our immigration team stays current with rapidly changing immigration policies to provide up-to-date guidance tailored to your unique situation. Whether you&apos;re seeking permanent residency, applying for work or study permits, sponsoring family members, or facing immigration challenges, we&apos;re here to support you every step of the way.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Personalized immigration strategies",
                    "Thorough document preparation",
                    "Up-to-date policy knowledge",
                    "Multi-pathway expertise",
                    "Responsive client communication",
                    "Post-application support"
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
                  src="/images/immigration-law.jpg" 
                  alt="Immigration Services" 
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e]">Comprehensive Immigration Solutions</h2>
              <p className="mt-4 text-[#1e2b3e]/70 max-w-3xl mx-auto">
                Our immigration practice offers a complete range of services to address your Canadian immigration needs, whether you&apos;re looking to visit, study, work, or permanently settle in Canada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {immigrationServices.map((service, index) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e]">Your Immigration Journey</h2>
              <p className="mt-4 text-[#1e2b3e]/70 max-w-3xl mx-auto">
                Our structured approach ensures clear communication and thorough preparation throughout your immigration process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
              {[
                {
                  icon: <Lightbulb className="h-6 w-6" />,
                  title: "Assessment",
                  description: "We begin with a comprehensive assessment of your background, goals, and eligibility for various immigration pathways."
                },
                {
                  icon: <FileText className="h-6 w-6" />,
                  title: "Strategy Development",
                  description: "Based on your assessment, we develop a customized immigration strategy that maximizes your chances of success."
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Application Preparation",
                  description: "We prepare and review all documentation, ensuring accuracy, completeness, and compliance with current requirements."
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Submission & Follow-up",
                  description: "We submit your application and handle all communication with immigration authorities until a decision is reached."
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Immigration Services</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our client-centered approach to immigration law offers distinct advantages that help smooth your path to Canada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Expertise & Knowledge",
                  description: "Benefit from our deep understanding of Canadian immigration law, policies, and procedures across all pathways to Canada."
                },
                {
                  title: "Personalized Strategy",
                  description: "Receive a tailored immigration plan that considers your unique background, qualifications, and goals for coming to Canada."
                },
                {
                  title: "Reduced Complexity",
                  description: "Navigate the complex immigration system with ease as we handle paperwork, requirements, and communications with authorities."
                },
                {
                  title: "Higher Success Rate",
                  description: "Improve your application's chances with professional preparation that anticipates and addresses potential issues proactively."
                },
                {
                  title: "Time Efficiency",
                  description: "Save valuable time with our streamlined processes that minimize delays and keep your application moving forward."
                },
                {
                  title: "Peace of Mind",
                  description: "Proceed with confidence knowing that your immigration matter is being handled by experienced professionals committed to your success."
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
                <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Success Story</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e] mb-6">Family Reunification After Multiple Challenges</h2>
                <p className="text-[#1e2b3e]/70 mb-4">
                  A client approached us after facing multiple refusals in their attempts to sponsor their spouse to Canada, causing years of separation and significant emotional distress.
                </p>
                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-lg font-medium text-[#1e2b3e] mb-2">The Challenge</h3>
                    <p className="text-[#1e2b3e]/70">
                      The previous applications had been rejected due to relationship authenticity concerns and procedural errors. The couple had been separated for over three years, and the Canadian sponsor was experiencing health issues requiring family support.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1e2b3e] mb-2">Our Approach</h3>
                    <p className="text-[#1e2b3e]/70">
                      We conducted a comprehensive review of the previous applications to identify all issues. We then prepared a new application with substantially improved documentation of the relationship, including detailed affidavits, organized communication records, and additional supporting evidence. We also addressed medical compassionate factors and prepared the clients for potential interviews.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1e2b3e] mb-2">The Result</h3>
                    <p className="text-[#1e2b3e]/70">
                      The new spousal sponsorship application was approved within 11 months, significantly faster than the average processing time. The couple was finally reunited in Canada, ending their long separation and allowing them to begin their life together in their new home.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/immigration-case-study.jpg" 
                  alt="Immigration Success Story" 
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
              {immigrationFAQs.map((faq, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Canadian Journey?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact TRUST LEGAL today to schedule an immigration consultation with our experienced team. We&apos;ll help you navigate the Canadian immigration system and develop a strategy tailored to your unique situation.
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