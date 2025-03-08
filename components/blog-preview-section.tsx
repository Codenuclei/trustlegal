"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, ChevronRight, Pen, Star } from "lucide-react";
import { toast } from "sonner";

export default function BlogPreviewSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Key Considerations for Business Incorporation in Ontario",
      excerpt: "Learn about the essential legal considerations when incorporating your business in Ontario, including liability protection, tax implications, and ongoing corporate obligations.",
      date: "March 1, 2025",
      category: "Business Law",
      slug: "business-incorporation-ontario",
      image: "/images/blog/business-incorporation.jpg",
      href: '/blog/business-incorporation-ontario',
      starred: true
    },
    {
      id: 2,
      title: "Recent Changes to Canadian Immigration Policies",
      excerpt: "Stay informed about the latest updates to immigration policies that may affect your status, including new pathways to permanent residency and changes to processing times.",
      date: "February 20, 2025",
      category: "Immigration",
      slug: "canadian-immigration-policy-updates",
      image: "/images/blog/immigration-policies.jpg",
      href: '/blog/canadian-immigration-policy-updates',
      starred: true
    },
    {
      id: 3,
      title: "Understanding Commercial Real Estate Transactions",
      excerpt: "A comprehensive guide to navigating complex commercial real estate deals in today's market, including due diligence, financing options, and closing procedures.",
      date: "February 5, 2025",
      category: "Real Estate",
      slug: "commercial-real-estate-transactions-guide",
      image: "/images/blog/commercial-real-estate.jpg",
      href: '/blog/commercial-real-estate-transactions-guide',
      starred: false
    },
    {
      id: 4,
      title: "Effective Litigation Strategies for Small Businesses",
      excerpt: "Learn how small businesses can navigate litigation efficiently while minimizing costs and business disruption through strategic legal approaches.",
      date: "January 28, 2025",
      category: "Litigation",
      slug: "effective-litigation-strategies",
      image: "/images/blog/litigation-strategies.jpg",
      href: '/blog/effective-litigation-strategies',
      starred: false
    },
    {
      id: 5,
      title: "Navigating Employment Contracts: What Employers Need to Know",
      excerpt: "Essential guidelines for employers when drafting and negotiating employment contracts to ensure compliance with Ontario labor laws and protect business interests.",
      date: "January 15, 2025",
      category: "Business Law",
      slug: "navigating-employment-contracts",
      image: "/images/blog/employment-contracts.jpg",
      href: '/blog/navigating-employment-contracts',
      starred: false
    },
    {
      id: 6,
      title: "Family Sponsorship Immigration: Process and Requirements",
      excerpt: "A detailed overview of the family sponsorship immigration process in Canada, including eligibility requirements, documentation, and processing timelines.",
      date: "January 3, 2025",
      category: "Immigration",
      slug: "family-sponsorship-immigration",
      image: "/images/blog/family-sponsorship.jpg",
      href: '/blog/family-sponsorship-immigration',
      starred: false
    },
    {
      id: 7,
      title: "Resolving Boundary Disputes in Residential Properties",
      excerpt: "Practical advice for homeowners facing boundary disputes, including legal remedies, survey considerations, and alternative resolution approaches.",
      date: "December 18, 2024",
      category: "Real Estate",
      slug: "resolving-boundary-disputes",
      image: "/images/blog/boundary-disputes.jpg",
      href: '/blog/resolving-boundary-disputes',
      starred: false
    },
    {
      id: 8,
      title: "Preparing for Depositions: Client Guidelines",
      excerpt: "Expert tips on how to prepare for and conduct yourself during depositions to strengthen your litigation position and avoid common pitfalls.",
      date: "December 5, 2024",
      category: "Litigation",
      slug: "preparing-for-depositions",
      image: "/images/blog/depositions.jpg",
      href: '/blog/preparing-for-depositions',
      starred: false
    }
  ]);

  useEffect(() => {
    async function fetchData() {
      try{
        const res = await fetch('/api/blogs');
        const data = await res.json();
        setArticles(data);
      }catch(err: any){
        console.error(err);
        toast.error('Failed to fetch blog articles');
      }

    }
    fetchData();
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
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleStarClick = (index: number) => {
    setArticles((prevArticles) => {
      const updatedArticles = [...prevArticles];
      updatedArticles[index] = {
        ...updatedArticles[index],
        starred: !updatedArticles[index].starred
      };
      return updatedArticles;
    });
  };

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
          <Link href="/blogs" className="inline-flex items-center text-[#ba9669] hover:text-[#ba9669]/80 font-medium transition-colors group">
            View All Articles <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-700 hover:shadow-lg hover:border-[#ba9669]/20 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-r from-[#1e2b3e]/5 to-[#ba9669]/10 relative">
                  {/* Replace with actual images when available */}
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})`, opacity: 0.9 }}>
                    <div className="absolute top-4 right-4 flex gap-3">
                      <Star 
                        size={20} 
                        className="cursor-pointer" 
                        fill={article.starred ? '#FFD700' : 'none'} 
                        stroke={article.starred ? '#FFD700' : 'currentColor'}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStarClick(index);
                        }}
                      />
                      <Pen size={20} className="cursor-pointer" />
                    </div>
                  </div>
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
                  href={`/blogs/${article.slug}`} 
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