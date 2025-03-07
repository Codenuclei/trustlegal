import Link from "next/link";
import { Briefcase, Scale, Globe, Building2, ChevronRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      id: "business-law",
      title: "Business Law",
      icon: <Briefcase className="h-10 w-10" />,
      description: "Comprehensive legal solutions for businesses of all sizes, from formation to compliance and beyond.",
      services: [
        "Business Formation & Incorporation",
        "Contract Drafting & Review",
        "Corporate Governance",
        "Mergers & Acquisitions",
        "Employment Law",
        "Regulatory Compliance"
      ]
    },
    {
      id: "litigation",
      title: "Litigation",
      icon: <Scale className="h-10 w-10" />,
      description: "Strategic representation in disputes, with a focus on efficient resolution and protecting your interests.",
      services: [
        "Civil Litigation",
        "Commercial Disputes",
        "Contract Disputes",
        "Alternative Dispute Resolution",
        "Debt Recovery",
        "Injunctions & Emergency Relief"
      ]
    },
    {
      id: "immigration",
      title: "Immigration",
      icon: <Globe className="h-10 w-10" />,
      description: "Expert guidance through Canadian immigration processes for individuals, families, and businesses.",
      services: [
        "Permanent Residency Applications",
        "Work Permits & Study Permits",
        "Business Immigration",
        "Family Sponsorship",
        "Citizenship Applications",
        "Immigration Appeals"
      ]
    },
    {
      id: "real-estate",
      title: "Real Estate",
      icon: <Building2 className="h-10 w-10" />,
      description: "Thorough legal counsel for all aspects of residential and commercial real estate transactions.",
      services: [
        "Commercial Property Transactions",
        "Residential Real Estate",
        "Lease Agreements",
        "Title Review & Due Diligence",
        "Land Development",
        "Real Estate Disputes"
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#1e2b3e] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Our Expertise</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Practice Areas</h1>
              <p className="text-lg text-gray-300 mb-8">
                At TRUST LEGAL, we provide comprehensive legal solutions across various practice areas, 
                ensuring our clients receive expert guidance tailored to their specific needs.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">How We Help</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e] mb-6">Legal Solutions For Your Needs</h2>
              <p className="text-[#1e2b3e]/70 text-lg">
                Our diverse expertise allows us to handle a wide range of legal matters with precision and care.
                Whether you require assistance with business matters, litigation, immigration, or real estate transactions,
                our skilled legal team is ready to advocate for your best interests.
              </p>
            </div>

            {/* Practice Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {practiceAreas.map((area) => (
                <div key={area.id} className="bg-[#f9f9f9] rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-[#1e2b3e] p-8">
                    <div className="text-[#ba9669] mb-4">{area.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{area.title}</h3>
                    <p className="text-gray-300">{area.description}</p>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-medium text-[#1e2b3e] mb-4">Our Services Include:</h4>
                    <ul className="space-y-2 mb-6">
                      {area.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mr-3 mt-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span className="text-[#1e2b3e]/80">{service}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <Link
                        href={`/practice-areas/${area.id}`}
                        className="inline-flex items-center text-[#ba9669] hover:text-[#ba9669]/80 font-medium transition-colors"
                      >
                        Learn More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 md:py-24 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Our Approach</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e] mb-6">How We Work With You</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#1e2b3e] text-white h-8 w-8 flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e2b3e] mb-2">Initial Consultation</h3>
                      <p className="text-[#1e2b3e]/70">
                        We begin with a thorough consultation to understand your specific legal needs, objectives, and circumstances.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#1e2b3e] text-white h-8 w-8 flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e2b3e] mb-2">Strategic Planning</h3>
                      <p className="text-[#1e2b3e]/70">
                        Our legal team develops a tailored strategy designed to achieve your goals efficiently and effectively.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#1e2b3e] text-white h-8 w-8 flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e2b3e] mb-2">Execution & Advocacy</h3>
                      <p className="text-[#1e2b3e]/70">
                        We implement the strategy with meticulous attention to detail and advocate strongly on your behalf.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#1e2b3e] text-white h-8 w-8 flex items-center justify-center flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e2b3e] mb-2">Ongoing Support</h3>
                      <p className="text-[#1e2b3e]/70">
                        We provide continuous guidance and regular updates, ensuring you&apos;re informed every step of the way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                <div className="space-y-6">
                  <div>
                    <p className="text-xl font-bold text-[#1e2b3e] mb-2">Our Commitment</p>
                    <p className="text-[#1e2b3e]/70">
                      At TRUST LEGAL, we are dedicated to providing exceptional legal services that exceed our clients&apos; expectations. We approach each case with diligence, creativity, and a commitment to achieving the best possible outcome.
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-xl font-bold text-[#1e2b3e] mb-2">Client-Centered Practice</p>
                    <p className="text-[#1e2b3e]/70">
                      We believe in building strong client relationships based on trust, open communication, and responsiveness. Your goals become our goals, and we work tirelessly to help you achieve them.
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200 mb-6">
                    <div className="mb-4">
                      <p className="text-lg font-medium text-[#ba9669]">OMUNG GUPTA</p>
                      <p className="text-sm text-[#1e2b3e]/70">BARRISTER AND SOLICITOR</p>
                    </div>
                    <p className="italic text-[#1e2b3e]/70">
                      &quot;Every legal challenge has a solution. Our role is to find the most effective path forward for our clients.&quot;
                    </p>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors w-full"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">FAQ</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e]">Common Questions</h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1e2b3e] mb-3">How do I know which practice area my legal issue falls under?</h3>
                <p className="text-[#1e2b3e]/70">
                  Many legal matters can span multiple practice areas. During your initial consultation, we&apos;ll assess your situation and determine which of our legal teams is best suited to handle your needs. Often, we take a collaborative approach to provide comprehensive service.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1e2b3e] mb-3">What types of clients do you typically represent?</h3>
                <p className="text-[#1e2b3e]/70">
                  We represent a diverse clientele including individuals, families, startups, small to medium-sized businesses, and established corporations. Our services are tailored to meet the specific needs of each client, regardless of size or industry.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1e2b3e] mb-3">How are legal fees structured?</h3>
                <p className="text-[#1e2b3e]/70">
                  Fee structures vary depending on the nature of your case. We offer hourly rates, flat fees for specific services, and contingency arrangements in certain cases. We provide transparent fee information at the outset of our engagement and work to ensure our services deliver value.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1e2b3e] mb-3">How quickly can you respond to urgent legal matters?</h3>
                <p className="text-[#1e2b3e]/70">
                  We understand that legal issues can arise unexpectedly and require immediate attention. Our team is committed to responding promptly to urgent matters and can provide expedited services when necessary. For emergencies, please contact our office directly.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-[#1e2b3e] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Legal Needs?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact TRUST LEGAL today to schedule a consultation with our experienced legal team. We&apos;ll help you navigate the complexities of the law and develop strategic solutions for your specific situation.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}