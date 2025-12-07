"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Clock, Tag, TrendingUp } from 'lucide-react';


const blogPosts = [
  {
    id: 1,
    title: "How Local Businesses Can Use Digital Marketing to Get More Customers",
    excerpt: "Discover the exact digital marketing strategies that helped 200+ local businesses increase their customer base by 150% in just 6 months.",
    image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371504/blog_content_1_zsuunb.png",
    category: "Digital Marketing",
    date: "Aug 1, 2025",
    readTime: "10 min read",
    tags: ["Local Marketing", "Social Media", "Google Business"],
    link: "/blog-content-1"
  },
  {
    id: 2,
    title: "Why Every Business Needs a Good Website: The Complete Guide",
    excerpt: "Learn why 64% of small businesses without websites lose customers daily, and discover the essential website features that convert visitors into buyers.",
    image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371505/blog_content_2_th2uis.png",
    category: "Web Development",
    date: "Jul 29, 2025",
    readTime: "8 min read",
    tags: ["Website Development", "Local SEO", "Mobile Optimization"],
    link: "/blog-content-2"
  },
  {
    id: 3,
    title: "How Cloud Services Can Make Local Businesses Work Smarter",
    excerpt: "Discover how simple cloud tools helped 500+ local businesses cut costs by 40%, work from anywhere, and never lose important data again.",
    image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371506/blog_content_3_to93zf.png",
    category: "Cloud Solutions",
    date: "Jul 26, 2025",
    readTime: "9 min read",
    tags: ["Cloud Computing", "Business Efficiency", "Cost Savings"],
    link: "/blog-content-3"
  }
];

const Blog = () => {
  // Show only the first 3 blog posts on the homepage
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className=" bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-black mb-4 lg:mb-6 tracking-tight px-4">
            Blogs
          </h1>
          <p className="text-lg text-gray-600  max-w-2xl mx-auto leading-relaxed">
            Stay ahead with cutting-edge insights, best practices, and industry trends from our expert team
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuredPosts.map((post, index) => (
            <Link 
              key={post.id} href={post.image}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden hover:-translate-y-2"
            >
              {/* Blog Image */}
              <Link href={post.link} className="block relative overflow-hidden">
              <div className="aspect-16/10 relative">
                  <img
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-fit group-hover:scale-110 transition-transform duration-700 h-full w-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 rounded-full text-xs font-medium border border-white/20">
                      <Tag size={12} />
                      {post.category}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <Link href={post.link}>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-16 sm:mt-20">
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-3       bg-linear-to-r from-[#3dd5c5] via-[#2dd4bf] to-[#14b8a6]  text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            <span>Explore All Articles</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Blog;