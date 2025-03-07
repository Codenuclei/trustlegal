"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";

export default function BlogPreviewSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById("blog-preview");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.observe(section);
    };
  }, []);

  // Sample blog articles
  const articles = [
    {
      id: 1,
      title: "Key Considerations for Business Incorporation in Ontario",
      excerpt: "Learn about the essential legal considerations when incorporating your business in Ontario.",
      date: "March 1, 2025",
      category: "Business Law",
      slug: "business-incorporation-ontario",
      image: "/images/blog/business-incorporation.jpg"
    },
    {
      id: 2,
      title: "Recent Changes to Canadian Immigration Policies",
      excerpt: "Stay informed about the latest updates to immigration policies that may affect your status.",
      date: "February 20, 2025",
      category: "Immigration",
      slug: "canadian-immigration-policy-updates",
      image: "/images/blog/immigration-policies.jpg"
    },
    {
      id: 3,
      title: "Understanding Commercial Real Estate Transactions",
      excerpt: "A comprehensive guide to navigating complex commercial real estate deals in today's market.",
      date: "February 5, 2025",
      category: "Real Estate",
      slug: "commercial-real-estate-transactions-guide",
      image: "/images/blog/real-estate-transactions.jpg"
    }
  ];

  return (
    <section id="blog-preview" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm font-medium text-[#ba9669]">Latest Insights</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1e2b3e] sm:text-4xl">
              Legal Resources & Updates
            </h2>
          </div>
          <Link href="/blog" className="inline-flex items-center text-[#ba9669] hover:text-[#ba9669]/80 font-medium transition-colors group">
            View All Articles <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={article.id}
              className={`group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-700 hover:shadow-lg hover:border-[#ba9669]/20 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-r from-[#1e2b3e]/5 to-[#ba9669]/10 relative">
                  {/* Replace with actual images when available */}
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})`, opacity: 0.9 }}></div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#1e2b3e] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1 text-[#ba9669]" />
                    {article.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1e2b3e] mb-3 group-hover:text-[#ba9669] transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-[#1e2b3e]/70 mb-5 text-sm">{article.excerpt}</p>
                <Link 
                  href={`/blog/${article.slug}`} 
                  className="text-[#ba9669] font-medium inline-flex items-center hover:underline group-hover:translate-x-0.5 transition-transform"
                >
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}