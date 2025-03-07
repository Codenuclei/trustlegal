import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 border-t border-gray-100">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="space-y-5">
        <h3 className="text-xl font-bold text-[#1e2b3e] tracking-tight">
          <span className="text-[#ba9669]">TRUST</span> LEGAL
        </h3>
        <p className="max-w-[280px] text-sm leading-relaxed text-gray-600">
          Reliable legal solutions for businesses and individuals with expertise in Business Law, Litigation, Immigration, and Real Estate.
        </p>
        <div className="flex space-x-5 pt-2">
          {[
          { icon: Facebook, label: "Facebook" },
          { icon: Twitter, label: "Twitter" },
          { icon: Instagram, label: "Instagram" },
          { icon: Linkedin, label: "LinkedIn" }
          ].map((social, index) => (
          <Link 
            key={index}
            href="#" 
            className="text-[#1e2b3e] hover:text-[#ba9669] transition-all duration-300 hover:scale-110"
            aria-label={social.label}
          >
            <social.icon className="h-5 w-5" />
          </Link>
          ))}
        </div>
        </div>
        
        {[
        {
          title: "Practice Areas",
          links: [
          "Business Law", "Corporate Litigation", "Immigration Services", 
          "Real Estate Law", "Contract Review"
          ]
        },
        {
          title: "Firm",
          links: [
          "About Us", "Our Attorneys", "Careers", "Legal Resources", "Contact"
          ]
        },
        {
          title: "Legal",
          links: [
          "Terms of Service", "Privacy Policy", "Disclaimer", "Attorney Advertising"
          ]
        }
        ].map((section, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#1e2b3e] after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#ba9669] after:mt-2">
          {section.title}
          </h3>
          <ul className="space-y-3 text-sm">
          {section.links.map((link, i) => (
            <li key={i}>
            <Link href="#" className="text-gray-600 hover:text-[#ba9669] transition-colors hover:pl-1 inline-block duration-300">
              {link}
            </Link>
            </li>
          ))}
          </ul>
        </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} <span className="text-[#ba9669] font-medium">TRUST LEGAL</span>. All rights reserved.</p>
        <p className="text-xs text-gray-500 mt-2 md:mt-0">Professional Legal Services & Consultation</p>
        </div>
      </div>
      </div>
    </footer>
  )
}

