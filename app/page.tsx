import AboutSection from "@/components/about-section"
import BlogPreviewSection from "@/components/blog-preview-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <hr className="bg-[#ba9669] py-1"/>
        <WhyChooseUsSection />
        <hr className="bg-[#ba9669] py-1"/>
        <TestimonialsSection />
        <BlogPreviewSection />
        <section id="contact" className="bg-[#1e2b3e] py-16 md:py-24 text-white">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
          <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669]">Contact Us</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Legal Expertise When You Need It
          </h2>
          <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            TRUST LEGAL provides reliable legal solutions in Business Law, Litigation, Immigration, and Real Estate. 
            Contact us today to schedule a consultation with our experienced team.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#ba9669]/20 p-3 text-[#ba9669]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
              </div>
              <div className="space-y-1">
          <h3 className="font-medium text-[#ba9669]">Phone</h3>
          <p className="text-sm text-gray-300">+1 (548) 333-4353</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#ba9669]/20 p-3 text-[#ba9669]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
              </div>
              <div className="space-y-1">
          <h3 className="font-medium text-[#ba9669]">Email</h3>
          <p className="text-sm text-gray-300">info@trustlegal.ca</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#ba9669]/20 p-3 text-[#ba9669]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
              </div>
              <div className="space-y-1">
          <h3 className="font-medium text-[#ba9669]">Location</h3>
          <p className="text-sm text-gray-300">206-6760 Davand Drive, Mississauga, Ontario, L5T 2L9</p>
              </div>
            </div>
            <div className="mt-6 pt-2 border-t border-[#ba9669]/30">
              <p className="text-lg font-medium text-[#ba9669]">OMUNG GUPTA</p>
              <p className="text-sm text-gray-300">BARRISTER AND SOLICITOR</p>
            </div>
          </div>
              </div>
              <div className="rounded-lg border border-[#ba9669]/30 bg-[#1e2b3e]/80 p-6 shadow-lg">
          <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

