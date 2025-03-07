import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#1e2b3e] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Contact Us</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch With Us</h1>
              <p className="text-lg text-gray-300 mb-6">
                We&apos;re here to provide the legal expertise you need. Reach out to schedule a consultation or learn more about our services.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information and Map */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1e2b3e] mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-[#ba9669]/20 p-3 text-[#ba9669]">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#1e2b3e] mb-1">Phone</h3>
                        <p className="text-[#1e2b3e]/70">+1 (548) 333-4353</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-[#ba9669]/20 p-3 text-[#ba9669]">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#1e2b3e] mb-1">Email</h3>
                        <p className="text-[#1e2b3e]/70">info@trustlegal.ca</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-[#ba9669]/20 p-3 text-[#ba9669]">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#1e2b3e] mb-1">Office Address</h3>
                        <p className="text-[#1e2b3e]/70">206-6760 Davand Drive,<br />Mississauga, Ontario, L5T 2L9</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-[#ba9669]/20 p-3 text-[#ba9669]">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#1e2b3e] mb-1">Office Hours</h3>
                        <p className="text-[#1e2b3e]/70">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-[#1e2b3e]/70">Saturday: By appointment</p>
                        <p className="text-[#1e2b3e]/70">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <div className="mb-4">
                    <p className="text-lg font-medium text-[#ba9669]">OMUNG GUPTA</p>
                    <p className="text-sm text-[#1e2b3e]/70">BARRISTER AND SOLICITOR</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#ba9669]/20 p-3 text-[#ba9669]">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1e2b3e] mb-1">Consultations</h3>
                      <p className="text-[#1e2b3e]/70">Initial consultations can be scheduled by phone or through our contact form.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="lg:col-span-2">
                <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0936145959837!2d-79.6518937!3d43.6442288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3bee79b2e5b7%3A0x3d51c734f9f58b74!2s6760%20Davand%20Dr%20%23206%2C%20Mississauga%2C%20ON%20L5T%202L9%2C%20Canada!5e0!3m2!1sen!2sus!4v1709823938969!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Reach Out</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e] mb-6">Send Us a Message</h2>
                <p className="text-[#1e2b3e]/70 mb-6">
                  Whether you have a specific legal inquiry or would like to schedule a consultation, we&apos;re here to help. Fill out the form and we&apos;ll get back to you promptly.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-[#1e2b3e] mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-[#1e2b3e]/80">Response within 1 business day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-[#1e2b3e]/80">Initial case assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-[#1e2b3e]/80">Consultation scheduling options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-[#1e2b3e]/80">Confidential communication</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669]">FAQ</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2b3e] mt-3">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1e2b3e] mb-3">What should I bring to my first consultation?</h3>
                <p className="text-[#1e2b3e]/70">
                  Please bring any relevant documents related to your case, including contracts, correspondence, court papers, and identification. This helps us provide the most accurate assessment of your situation.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1e2b3e] mb-3">How long does an initial consultation last?</h3>
                <p className="text-[#1e2b3e]/70">
                  Initial consultations typically last 30-60 minutes, depending on the complexity of your legal matter. This gives us enough time to understand your situation and discuss potential approaches.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1e2b3e] mb-3">Do you offer virtual consultations?</h3>
                <p className="text-[#1e2b3e]/70">
                  Yes, we offer consultations via phone or video conference for clients who prefer remote meetings. Please indicate your preference when scheduling your appointment.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#1e2b3e] mb-3">What are your payment options?</h3>
                <p className="text-[#1e2b3e]/70">
                  We accept various payment methods including credit cards, debit cards, e-transfers, and checks. Payment plans may be available depending on your specific circumstances and legal needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}