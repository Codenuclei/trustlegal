"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, ArrowLeft, Search, Phone, FileText } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    setIsAnimated(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would redirect to search results
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-8">
            <div className={`inline-block rounded-full bg-[#ba9669]/20 p-8 mb-6 transform transition-all duration-700 ${isAnimated ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
              <div className="relative">
                <svg className="w-24 h-24 text-[#1e2b3e]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Stylized scales of justice */}
                  <path d="M12 3L4 9H20L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 21H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="7" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#ba9669]">404</span>
                </div>
              </div>
            </div>
            
            <h1 className={`text-3xl md:text-4xl font-bold text-[#1e2b3e] mb-4 transition-all duration-700 ${isAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              Page Not Found
            </h1>
            
            <p className={`text-[#1e2b3e]/70 mb-8 max-w-lg mx-auto transition-all duration-700 delay-100 ${isAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              We apologize, but the legal document you&apos;re looking for appears to be missing from our files. 
              Perhaps you&apos;d like to search for it or navigate to another section of our website.
            </p>
          </div>
          
          <div className={`mb-12 transition-all duration-700 delay-200 ${isAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <form onSubmit={handleSearch} className="flex items-center max-w-md mx-auto mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search our website..."
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#ba9669] focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-[#1e2b3e] text-white px-5 py-3 rounded-r-md hover:bg-[#1e2b3e]/90 transition-colors"
              >
                Search
              </button>
            </form>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Link href="/" className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-[#ba9669] hover:bg-[#f9f9f9] transition-colors group">
                <div className="rounded-full bg-[#1e2b3e]/10 p-2 mr-4 group-hover:bg-[#ba9669]/20 transition-colors">
                  <Home className="h-5 w-5 text-[#1e2b3e] group-hover:text-[#ba9669] transition-colors" />
                </div>
                <div>
                  <h3 className="font-medium text-[#1e2b3e] group-hover:text-[#ba9669] transition-colors">Return Home</h3>
                  <p className="text-sm text-gray-500">Visit our homepage</p>
                </div>
              </Link>
              
              <Link href="/practice-areas" className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-[#ba9669] hover:bg-[#f9f9f9] transition-colors group">
                <div className="rounded-full bg-[#1e2b3e]/10 p-2 mr-4 group-hover:bg-[#ba9669]/20 transition-colors">
                  <FileText className="h-5 w-5 text-[#1e2b3e] group-hover:text-[#ba9669] transition-colors" />
                </div>
                <div>
                  <h3 className="font-medium text-[#1e2b3e] group-hover:text-[#ba9669] transition-colors">Practice Areas</h3>
                  <p className="text-sm text-gray-500">Explore our legal services</p>
                </div>
              </Link>
              
              <Link href="/blog" className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-[#ba9669] hover:bg-[#f9f9f9] transition-colors group">
                <div className="rounded-full bg-[#1e2b3e]/10 p-2 mr-4 group-hover:bg-[#ba9669]/20 transition-colors">
                  <ArrowLeft className="h-5 w-5 text-[#1e2b3e] group-hover:text-[#ba9669] transition-colors" />
                </div>
                <div>
                  <h3 className="font-medium text-[#1e2b3e] group-hover:text-[#ba9669] transition-colors">Legal Blog</h3>
                  <p className="text-sm text-gray-500">Read our latest insights</p>
                </div>
              </Link>
              
              <Link href="/contact" className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-[#ba9669] hover:bg-[#f9f9f9] transition-colors group">
                <div className="rounded-full bg-[#1e2b3e]/10 p-2 mr-4 group-hover:bg-[#ba9669]/20 transition-colors">
                  <Phone className="h-5 w-5 text-[#1e2b3e] group-hover:text-[#ba9669] transition-colors" />
                </div>
                <div>
                  <h3 className="font-medium text-[#1e2b3e] group-hover:text-[#ba9669] transition-colors">Contact Us</h3>
                  <p className="text-sm text-gray-500">Get in touch for assistance</p>
                </div>
              </Link>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-300 ${isAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-md mx-auto mb-8"></div>
            <p className="text-sm text-gray-500">
              If you believe this is an error, please <Link href="/contact" className="text-[#ba9669] hover:underline">contact our team</Link> for assistance.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}