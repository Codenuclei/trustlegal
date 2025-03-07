"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Logo from "@/public/logo.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // const scrollToSection = (id: string) => {
  //   setIsOpen(false)
  //   const element = document.getElementById(id)
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" })
  //   }
  // }

  const isHomePage = pathname === "/"
  
  const isActive = (path: string) => {
    return pathname === path ? "text-[#ba9669] font-medium" : "text-gray-700 hover:text-[#ba9669]"
  }

  return (
    <>
      {/* Top contact bar */}
      <div className="hidden md:block bg-[#1e2b3e] text-white py-2">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#ba9669]" />
              <span>+1 (548) 333-4353</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-[#ba9669]" />
              <span>info@trustlegal.ca</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-[#ba9669]" />
            <span>206-6760 Davand Drive, Mississauga, Ontario</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-white shadow-md py-2" 
            : "bg-white py-4 border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-[#1e2b3e] to-[#2a3b52] overflow-hidden shadow-sm transition-transform group-hover:scale-105">
              {/* You can replace this with an actual logo image */}
              <Image 
                src={Logo}
                alt="Trust Legal" 
                width={48} 
                height={48}
                className="object-contain"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.style.display = 'none';
                  const container = e.currentTarget.parentElement;
                  if (container) {
                    const span = document.createElement('span');
                    span.textContent = 'TL';
                    span.className = 'text-xl font-bold text-[#ba9669]';
                    container.appendChild(span);
                  }
                }}
              />
            </div>
            <div className="transition-transform group-hover:translate-x-1">
              <span className="text-2xl font-bold">
                <span className="text-[#1e2b3e]">Trust</span>
                <span className="text-[#ba9669]">Legal</span>
              </span>
              <span className="block text-xs uppercase tracking-wider text-gray-500 mt-[-2px]">Reliable Legal Solutions</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors relative ${isActive('/')} 
                ${isHomePage ? "after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[3px] after:w-full after:bg-[#ba9669] after:rounded-full" : ""}`}
            >
              Home
            </Link>
            <Link 
              href="/about-us" 
              className={`text-sm font-medium transition-colors relative ${isActive('/about-us')}`}
            >
              About
            </Link>
            <div className="relative">
              <button 
                onClick={() => setIsPracticeDropdownOpen(!isPracticeDropdownOpen)}
                onMouseEnter={() => setIsPracticeDropdownOpen(true)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  pathname.includes('/practice-areas') ? 'text-[#ba9669] font-medium' : 'text-gray-700 hover:text-[#ba9669]'
                }`}
              >
                Practice Areas <ChevronDown className={`h-4 w-4 transition-transform ${isPracticeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isPracticeDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-20 border border-gray-100"
                  onMouseEnter={() => setIsPracticeDropdownOpen(true)}
                  onMouseLeave={() => setIsPracticeDropdownOpen(false)}
                >
                  <Link 
                    href="/practice-areas" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f9f9f9] hover:text-[#ba9669]"
                  >
                    All Practice Areas
                  </Link>
                  <Link 
                    href="/practice-areas/business-law" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f9f9f9] hover:text-[#ba9669]"
                  >
                    Business Law
                  </Link>
                  <Link 
                    href="/practice-areas/litigation" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f9f9f9] hover:text-[#ba9669]"
                  >
                    Litigation
                  </Link>
                  <Link 
                    href="/practice-areas/immigration" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f9f9f9] hover:text-[#ba9669]"
                  >
                    Immigration
                  </Link>
                  <Link 
                    href="/practice-areas/real-estate" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f9f9f9] hover:text-[#ba9669]"
                  >
                    Real Estate
                  </Link>
                </div>
              )}
            </div>
            <Link 
              href="/blogs" 
              className={`text-sm font-medium transition-colors ${isActive('/blogs')}`}
            >
              Blogs
            </Link>
            <Link 
              href="/contact-us" 
              className={`text-sm font-medium transition-colors ${isActive('/contact-us')}`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact-us"
              className="inline-flex h-11 items-center justify-center rounded-md px-6 text-sm font-medium shadow transition-all 
                bg-gradient-to-r from-[#1e2b3e] to-[#2a3b52] text-white hover:shadow-md hover:translate-y-[-1px] 
                border border-[#ba9669]/20 focus:outline-none focus:ring-2 focus:ring-[#ba9669]/50"
            >
              <span className="mr-2">Free Consultation</span>
              <span className="w-5 h-5 rounded-full bg-[#ba9669] flex items-center justify-center text-[10px]">→</span>
            </Link>
          </div>
          
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-white pt-16 pb-6 px-4 overflow-y-auto md:hidden">
            <button
              className="absolute top-4 right-4 p-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-md bg-gradient-to-br from-[#1e2b3e] to-[#2a3b52]">
                <span className="text-2xl font-bold text-[#ba9669]">TL</span>
              </div>
              <div className="mt-3 text-center">
                <div className="text-xl font-bold">
                  <span className="text-[#1e2b3e]">Trust</span>
                  <span className="text-[#ba9669]">Legal</span>
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Reliable Legal Solutions</div>
              </div>
            </div>
            
            <nav className="flex flex-col space-y-5">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)} 
                className={`text-center py-3 text-base font-medium ${isActive('/')}`}
              >
                Home
              </Link>
              <Link 
                href="/about-us" 
                onClick={() => setIsOpen(false)} 
                className={`text-center py-3 text-base font-medium ${isActive('/about-us')}`}
              >
                About
              </Link>
              
              <div className="border-t border-b border-gray-100 py-3">
                <div className="text-center font-medium text-[#1e2b3e] mb-2">Practice Areas</div>
                <div className="grid grid-cols-2 gap-3 px-4">
                  <Link 
                    href="/practice-areas/business-law" 
                    onClick={() => setIsOpen(false)} 
                    className="text-center py-2 px-2 text-sm bg-gray-50 rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    Business Law
                  </Link>
                  <Link 
                    href="/practice-areas/litigation" 
                    onClick={() => setIsOpen(false)} 
                    className="text-center py-2 px-2 text-sm bg-gray-50 rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    Litigation
                  </Link>
                  <Link 
                    href="/practice-areas/immigration" 
                    onClick={() => setIsOpen(false)} 
                    className="text-center py-2 px-2 text-sm bg-gray-50 rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    Immigration
                  </Link>
                  <Link 
                    href="/practice-areas/real-estate" 
                    onClick={() => setIsOpen(false)} 
                    className="text-center py-2 px-2 text-sm bg-gray-50 rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    Real Estate
                  </Link>
                </div>
              </div>
              
              <Link 
                href="/blogs" 
                onClick={() => setIsOpen(false)} 
                className={`text-center py-3 text-base font-medium ${isActive('/blogs')}`}
              >
                Blogs
              </Link>
              <Link 
                href="/contact-us" 
                onClick={() => setIsOpen(false)} 
                className={`text-center py-3 text-base font-medium ${isActive('/contact-us')}`}
              >
                Contact
              </Link>
            </nav>
            
            <div className="mt-8 space-y-6">
              <Link
                href="/contact-us"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 text-center font-medium rounded-md bg-gradient-to-r from-[#1e2b3e] to-[#2a3b52] text-white"
              >
                Free Consultation
              </Link>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-[#ba9669]" />
                  <span className="text-gray-700">+1 (548) 333-4353</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-[#ba9669]" />
                  <span className="text-gray-700">info@trustlegal.ca</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-center">
                  <MapPin className="h-4 w-4 text-[#ba9669] flex-shrink-0" />
                  <span className="text-gray-700">206-6760 Davand Drive, Mississauga</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}