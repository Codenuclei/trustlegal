import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import OmungGupta from "@/public/OmungGupta.jpeg";
import TorontoOffice from "@/public/Toronto-Office.jpg";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[700px] bg-[#1e2b3e] text-white overflow-hidden">
        {/* Background layers with enhanced parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 transition-transform duration-700" 
          style={{
            backgroundImage: 'url("/images/legal-background.jpg")',
            backgroundAttachment: 'fixed',
            transform: 'translateZ(0)'
          }}
        ></div>
        {/* Enhanced gradient overlay with more depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e2b3e]/95 via-[#1e2b3e]/85 to-[#1e2b3e]/75 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#ba9669]/20 rounded-full opacity-20 z-0"></div>
        <div className="absolute bottom-40 left-10 w-40 h-40 border border-[#ba9669]/20 rounded-full opacity-20 z-0"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 border border-[#ba9669]/10 rounded-full opacity-10 z-0"></div>
        
        {/* Content container with improved positioning */}
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl" data-aos="fade-up" data-aos-duration="800">
            {/* Enhanced badge with better styling */}
            <div 
              className="inline-block rounded-lg bg-[#ba9669]/20 px-4 py-2 text-sm font-medium text-[#ba9669] mb-6 backdrop-blur-sm border border-[#ba9669]/30 shadow-lg"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              ABOUT OUR FIRM
            </div>
            
            {/* Enhanced typography with better spacing and styling */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight tracking-tight"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Trust Legal: <span className="text-[#ba9669] relative">
                Your Trusted
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ba9669]/30"></span>
              </span> Legal Partner
            </h1>
            
            <p 
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Delivering exceptional legal representation with unwavering integrity, strategic insight, and a commitment to achieving optimal outcomes for our distinguished clientele.
            </p>
            
            {/* Enhanced CTA with better animation and styling */}
            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#ba9669] text-white font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-2xl hover:bg-[#c9a677] transform hover:translate-y-[-3px]"
              >
                Schedule a Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 border border-[#ba9669] text-[#ba9669] font-medium rounded-md hover:bg-[#ba9669]/10 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
            
            {/* Law firm credentials */}
            <div className="mt-14 flex items-center space-x-6" data-aos="fade-up" data-aos-delay="500">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-[#ba9669]/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ba9669]">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-300">Licensed & Insured</span>
              </div>
              <div className="h-6 w-px bg-gray-500/30"></div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-[#ba9669]/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ba9669]">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <span className="text-sm text-gray-300">Top-Rated Practice</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced bottom gradient transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/20 via-white/5 to-transparent z-10"></div>
      </section>

      {/* Firm Overview with Enhanced Design */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6" data-aos="fade-right">
          <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669]">Our Firm</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e] mt-3 mb-6">A Tradition of <span className="text-[#ba9669]">Excellence</span></h2>
          <div className="w-20 h-1 bg-[#ba9669] mb-6"></div>
          <p className="text-[#1e2b3e]/80 mb-5 text-lg">
            Founded on the principles of integrity, professionalism, and client dedication, Trust Legal has established itself as a premier legal practice serving individuals and businesses across Ontario.
          </p>
          <p className="text-[#1e2b3e]/80 mb-5 text-lg">
            We understand that legal issues can be overwhelming, which is why we focus on providing clear, practical advice and personalized solutions that address your unique circumstances and objectives.
          </p>
          <p className="text-[#1e2b3e]/80 mb-8 text-lg">
            Our multidisciplinary approach allows us to handle complex legal matters across Business Law, Litigation, Immigration, and Real Estate, ensuring comprehensive representation for all your legal needs.
          </p>
          <div className="flex items-center space-x-4 p-5 bg-[#f9f9f9] rounded-lg border-l-4 border-[#ba9669] shadow-sm">
            <div className="h-14 w-14 rounded-full bg-[#ba9669]/20 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ba9669]">
              <path d="m12 15 2 2 4-4"></path>
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
            </svg>
            </div>
            <div>
            <h3 className="text-xl font-semibold text-[#1e2b3e]">Client-Centered Approach</h3>
            <p className="text-[#1e2b3e]/70">Your goals become our mission. We prioritize your success.</p>
            </div>
          </div>
          </div>
          <div className="lg:col-span-6" data-aos="fade-left">
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image 
            src={TorontoOffice} 
            alt="Trust Legal Office" 
            fill 
            className="object-cover transition-transform hover:scale-105 duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1e2b3e] to-transparent">
            <p className="text-white text-lg font-medium">Our Toronto Office</p>
            </div>
          </div>
          </div>
        </div>
        </div>
      </section>

      {/* Attorney Profile with Modern Design */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669]">Our Team</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e] mt-3">Meet Our Legal Experts</h2>
          <div className="w-24 h-1 bg-[#ba9669] mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative h-[350px] md:h-auto">
            <Image 
            src={OmungGupta} 
            alt="Omung Gupta" 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e2b3e]/80 to-transparent md:hidden"></div>
          </div>
          <div className="p-8 md:p-10 md:col-span-2">
            <h3 className="text-2xl font-bold text-[#1e2b3e] mb-1">OMUNG GUPTA</h3>
            <p className="text-[#ba9669] font-medium mb-4 flex items-center">
            BARRISTER AND SOLICITOR
            <span className="ml-2 h-2 w-2 rounded-full bg-[#ba9669] inline-block"></span>
            <span className="ml-2 text-[#1e2b3e]/70">Principal Attorney</span>
            </p>
            <div className="w-16 h-1 bg-[#ba9669]/50 mb-6"></div>
            <p className="text-[#1e2b3e]/80 mb-4 text-lg">
            With comprehensive experience across multiple legal disciplines in both Canada and India, Omung Gupta provides strategic solutions tailored to each client&apos;s unique needs. As Principal Lawyer at Trust Legal, he delivers excellence in Corporate/Commercial Litigation, Construction Liens, Landlord & Tenant disputes, and various other practice areas.
            </p>
            <p className="text-[#1e2b3e]/80 mb-8 text-lg">
            Mr. Gupta&apos;s background includes valuable experience at Starkman Lawyers and KND Complex Litigation, where he handled class actions, securities law matters, and employment disputes. His international legal perspective, developed through senior roles in India, enhances his ability to serve diverse clientele throughout Ontario.
            </p>
            <div className="space-y-4 bg-[#f8f9fb] p-6 rounded-lg border-l-4 border-[#ba9669]">
            <div className="flex items-start">
              <span className="w-32 text-[#1e2b3e] font-medium shrink-0">Education:</span>
              <span className="text-[#1e2b3e]/80">Masters, York University - Osgoode Hall Law School<br />
              B.A. LL.B (Hons), O.P. Jindal Global University</span>
            </div>
            <div className="flex items-start">
              <span className="w-32 text-[#1e2b3e] font-medium shrink-0">Admissions:</span>
              <span className="text-[#1e2b3e]/80">Law Society of Ontario (2025)<br />
              Bar Council of Delhi, India (2017)</span>
            </div>
            <div className="flex items-start">
              <span className="w-32 text-[#1e2b3e] font-medium shrink-0">Certifications:</span>
              <span className="text-[#1e2b3e]/80">NCA Certificate of Qualification (2023)<br />
              Licensed to Practice Law in India (2018)</span>
            </div>
            <div className="flex items-center">
              <span className="w-32 text-[#1e2b3e] font-medium">Languages:</span>
              <span className="text-[#1e2b3e]/80">English, Hindi</span>
            </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </section>

      {/* Our Values with Enhanced Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669]">Our Values</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e] mt-3">The Principles That Guide Us</h2>
          <div className="w-24 h-1 bg-[#ba9669] mx-auto mt-6 mb-6"></div>
          <p className="mt-4 max-w-2xl mx-auto text-[#1e2b3e]/70 text-lg">
          At Trust Legal, our work is guided by a set of core values that inform every aspect of our practice and client interactions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
          {
            icon: "shield-check",
            title: "Integrity",
            description: "We uphold the highest ethical standards and maintain transparency in all client interactions."
          },
          {
            icon: "award",
            title: "Excellence",
            description: "We are committed to delivering exceptional legal services and achieving optimal outcomes for our clients."
          },
          {
            icon: "users",
            title: "Accessibility",
            description: "We ensure our clients have direct access to legal counsel and maintain open lines of communication."
          },
          {
            icon: "lightbulb",
            title: "Innovation",
            description: "We embrace innovative approaches to legal challenges while respecting established legal principles."
          }
          ].map((value, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="absolute top-0 left-0 h-1 w-0 bg-[#ba9669] group-hover:w-full transition-all duration-500"></div>
            <div className="h-16 w-16 rounded-full bg-[#f8f9fb] flex items-center justify-center mb-6 group-hover:bg-[#ba9669]/10 transition-colors">
            {value.icon === "shield-check" && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ba9669]">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="m9 12 2 2 4-4"></path>
              </svg>
            )}
            {value.icon === "award" && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ba9669]">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            )}
            {value.icon === "users" && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ba9669]">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            )}
            {value.icon === "lightbulb" && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ba9669]">
              <path d="M9 18h6"></path>
              <path d="M10 22h4"></path>
              <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
              </svg>
            )}
            </div>
            <h3 className="text-xl font-bold text-[#1e2b3e] mb-4">{value.title}</h3>
            <p className="text-[#1e2b3e]/70">{value.description}</p>
          </div>
          ))}
        </div>
        </div>
      </section>

      {/* Call to Action with Enhanced Design */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1e2b3e] to-[#152030] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ba9669]/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ba9669]/10 rounded-full filter blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Ready to Discuss Your Legal Needs?</h2>
        <div className="w-24 h-1 bg-[#ba9669] mx-auto mb-8" data-aos="fade-up" data-aos-delay="100"></div>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="200">
          Trust Legal is committed to providing exceptional legal representation. Contact us today to schedule a consultation and learn how we can assist with your legal matters.
        </p>
        <div data-aos="fade-up" data-aos-delay="300">
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
          Schedule a Consultation
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          </Link>
        </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}