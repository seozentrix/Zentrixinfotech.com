import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, TrendingUp, Search, Users, FileText } from 'lucide-react';

const RecentBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 SEO Strategies for Moradabad Businesses in 2025",
      excerpt: "Discover the latest SEO techniques that are helping local businesses rank higher and attract more customers.",
      date: "Dec 10, 2025",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      slug: "/"
    },
    {
      id: 2,
      title: "Social Media Marketing Tips for Small Businesses",
      excerpt: "Learn how to leverage social media platforms to grow your brand presence and engage with your audience.",
      date: "Dec 8, 2025",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
      slug: "/"
    },
    {
      id: 3,
      title: "The Power of Content Marketing in Digital Growth",
      excerpt: "Why quality content is the backbone of successful digital marketing campaigns.",
      date: "Dec 5, 2025",
      category: "Content Marketing",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=400&h=250&fit=crop",
      slug: "/"
    },
    {
      id: 4,
      title: "PPC Advertising: Maximize Your ROI",
      excerpt: "Essential tips for running profitable pay-per-click campaigns in competitive markets.",
      date: "Dec 3, 2025",
      category: "PPC",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      slug: "/"
    }
  ];

  const suggestedPages = [
    { name: "Our Services", icon: <TrendingUp className="w-4 h-4" />, link: "/services" },
    { name: "Portfolio", icon: <Search className="w-4 h-4" />, link: "/portfolio" },
    { name: "About Us", icon: <Users className="w-4 h-4" />, link: "/about" },
    { name: "All Blogs", icon: <FileText className="w-4 h-4" />, link: "/blogs" }
  ];

  return (
    <div className="w-full bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Recent Blogs Section */}
        <div className="mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Recent Blog Posts
            </h2>
            <p className="text-gray-600 text-sm">
              Stay updated with the latest digital marketing insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center text-gray-500 text-xs mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{blog.date}</span>
                  </div>
                  
                  <h3 className="text-base font-bold text-gray-900 mb-2 hover:text-orange-500 transition-colors line-clamp-2">
                    <Link href={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Pages Section */}
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h3 className="text-base font-bold text-gray-900 mb-3">
            Quick Links
          </h3>
          
          <div className="flex flex-wrap gap-2">
            {suggestedPages.map((page, index) => (
              <Link
                key={index}
                href={page.link}
                className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 group text-sm"
              >
                <span className="text-gray-600 group-hover:text-orange-500 transition-colors">
                  {page.icon}
                </span>
                <span className="font-medium text-gray-700 group-hover:text-orange-500 transition-colors">
                  {page.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;