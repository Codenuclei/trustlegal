"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ChevronRight, Calendar, Tag, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  // Sample blog articles
  const articles = [
    {
      id: 1,
      title: "Key Considerations for Business Incorporation in Ontario",
      excerpt: "Learn about the essential legal considerations when incorporating your business in Ontario, including liability protection, tax implications, and ongoing corporate obligations.",
      date: "March 1, 2025",
      category: "Business Law",
      image: "/images/blog/business-incorporation.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Recent Changes to Canadian Immigration Policies",
      excerpt: "Stay informed about the latest updates to immigration policies that may affect your status, including new pathways to permanent residency and changes to processing times.",
      date: "February 20, 2025",
      category: "Immigration",
      image: "/images/blog/immigration-policies.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Understanding Commercial Real Estate Transactions",
      excerpt: "A comprehensive guide to navigating complex commercial real estate deals in today's market, including due diligence, financing options, and closing procedures.",
      date: "February 5, 2025",
      category: "Real Estate",
      image: "/images/blog/commercial-real-estate.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Effective Litigation Strategies for Small Businesses",
      excerpt: "Learn how small businesses can navigate litigation efficiently while minimizing costs and business disruption through strategic legal approaches.",
      date: "January 28, 2025",
      category: "Litigation",
      image: "/images/blog/litigation-strategies.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Navigating Employment Contracts: What Employers Need to Know",
      excerpt: "Essential guidelines for employers when drafting and negotiating employment contracts to ensure compliance with Ontario labor laws and protect business interests.",
      date: "January 15, 2025",
      category: "Business Law",
      image: "/images/blog/employment-contracts.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Family Sponsorship Immigration: Process and Requirements",
      excerpt: "A detailed overview of the family sponsorship immigration process in Canada, including eligibility requirements, documentation, and processing timelines.",
      date: "January 3, 2025",
      category: "Immigration",
      image: "/images/blog/family-sponsorship.jpg",
      featured: false
    },
    {
      id: 7,
      title: "Resolving Boundary Disputes in Residential Properties",
      excerpt: "Practical advice for homeowners facing boundary disputes, including legal remedies, survey considerations, and alternative resolution approaches.",
      date: "December 18, 2024",
      category: "Real Estate",
      image: "/images/blog/boundary-disputes.jpg",
      featured: false
    },
    {
      id: 8,
      title: "Preparing for Depositions: Client Guidelines",
      excerpt: "Expert tips on how to prepare for and conduct yourself during depositions to strengthen your litigation position and avoid common pitfalls.",
      date: "December 5, 2024",
      category: "Litigation",
      image: "/images/blog/depositions.jpg",
      featured: false
    }
  ];

  useEffect(() => {
    filterArticles();
  }, [activeFilter, searchQuery]);

  const filterArticles = () => {
    let results = [...articles];
    
    // Apply category filter
    if (activeFilter !== "all") {
      results = results.filter(article => article.category === activeFilter);
    }
    
    // Apply search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      results = results.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.excerpt.toLowerCase().includes(query)
      );
    }
    
    setFilteredArticles(results);
  };

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#1e2b3e] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Our Blog</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Insights & Resources</h1>
              <p className="text-lg text-gray-300">
                Stay informed with the latest legal developments, expert analysis, and practical guidance from the Trust Legal team.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        {featuredArticles.length > 0 && (
          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e2b3e]">Featured Articles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <div key={article.id} className="group bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="relative h-64 w-full">
                      <div className="absolute top-0 left-0 z-10 bg-[#ba9669] text-white px-3 py-1 text-sm font-medium m-4 rounded">
                        Featured
                      </div>
                      <Image
                        src={article.image || "/images/blog/placeholder.jpg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3 text-sm text-gray-500">
                        <span className="bg-[#1e2b3e]/10 text-[#1e2b3e] px-2 py-1 rounded text-xs font-medium">
                          {article.category}
                        </span>
                        <div className="flex items-center ml-3">
                          <Calendar className="h-3 w-3 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#1e2b3e] mb-3 group-hover:text-[#ba9669] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-[#1e2b3e]/70 mb-4">{article.excerpt}</p>
                      <Link href={`/blog/${article.id}`} className="text-[#ba9669] font-medium inline-flex items-center hover:underline">
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Blog Listing Section */}
        <section className="py-16 md:py-20 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e2b3e] mb-6">All Articles</h2>
              
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="relative md:max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#ba9669]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      activeFilter === "all"
                        ? "bg-[#1e2b3e] text-white"
                        : "bg-gray-200 text-[#1e2b3e] hover:bg-gray-300"
                    }`}
                    onClick={() => setActiveFilter("all")}
                  >
                    All
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      activeFilter === "Business Law"
                        ? "bg-[#1e2b3e] text-white"
                        : "bg-gray-200 text-[#1e2b3e] hover:bg-gray-300"
                    }`}
                    onClick={() => setActiveFilter("Business Law")}
                  >
                    Business Law
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      activeFilter === "Litigation"
                        ? "bg-[#1e2b3e] text-white"
                        : "bg-gray-200 text-[#1e2b3e] hover:bg-gray-300"
                    }`}
                    onClick={() => setActiveFilter("Litigation")}
                  >
                    Litigation
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      activeFilter === "Immigration"
                        ? "bg-[#1e2b3e] text-white"
                        : "bg-gray-200 text-[#1e2b3e] hover:bg-gray-300"
                    }`}
                    onClick={() => setActiveFilter("Immigration")}
                  >
                    Immigration
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      activeFilter === "Real Estate"
                        ? "bg-[#1e2b3e] text-white"
                        : "bg-gray-200 text-[#1e2b3e] hover:bg-gray-300"
                    }`}
                    onClick={() => setActiveFilter("Real Estate")}
                  >
                    Real Estate
                  </button>
                </div>
              </div>
              
              {/* Articles Grid */}
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article) => (
                    <div key={article.id} className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="relative h-48 w-full">
                        <Image
                          src={article.image || "/images/blog/placeholder.jpg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center mb-2 text-xs text-gray-500">
                          <span className="bg-[#1e2b3e]/10 text-[#1e2b3e] px-2 py-1 rounded text-xs font-medium">
                            {article.category}
                          </span>
                          <div className="flex items-center ml-3">
                            <Calendar className="h-3 w-3 mr-1" />
                            {article.date}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-[#1e2b3e] mb-2 group-hover:text-[#ba9669] transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-[#1e2b3e]/70 mb-3 text-sm line-clamp-3">{article.excerpt}</p>
                        <Link href={`/blog/${article.id}`} className="text-[#ba9669] text-sm font-medium inline-flex items-center hover:underline">
                          Read More <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-white rounded-lg border border-gray-200">
                  <p className="text-lg text-[#1e2b3e]/70">No articles found matching your criteria.</p>
                  <button 
                    onClick={() => {setActiveFilter("all"); setSearchQuery("");}}
                    className="mt-4 px-4 py-2 bg-[#ba9669] text-white rounded-md hover:bg-[#ba9669]/90 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-[#1e2b3e] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Stay Informed</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
              <p className="text-gray-300 mb-8">
                Receive the latest legal insights, news, and updates directly to your inbox. We respect your privacy and will never share your information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-md border border-gray-700 bg-[#1e2b3e]/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ba9669] flex-grow"
                />
                <button className="px-6 py-3 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                By subscribing, you agree to receive email communications from Trust Legal.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}