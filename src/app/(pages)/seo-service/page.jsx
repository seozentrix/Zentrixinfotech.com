"use client";

import React, { useState, useEffect, useRef } from 'react';

import Banner from '@/components/Banner';
import {
  Settings,
  Smartphone,
  Monitor,
  Target,
  Globe,
  BarChart3
} from 'lucide-react';

// export const metadata = {title: "SEO Services Company – Zentrix Infotech",description: "Result-driven SEO services to rank higher on Google, drive traffic and generate quality leads."};


const SEOServicePage = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.animate-card');
    cards.forEach((card, index) => {
      card.id = `card-${index}`;
      if (observerRef.current) {
        observerRef.current.observe(card);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Excellence cards data with background images
  const excellenceCards = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "On-Page SEO Excellence",
      description: "One of the pillars of effective SEO is on-page optimization. This involves fine-tuning various elements on your website to make it more search engine-friendly.",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Technical SEO for Peak Website Performance",
      description: "We understand that SEO goes beyond content and keywords, to enhance your website's visibility and success.",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Building Quality Backlinks",
      description: "Another critical aspect of SEO optimization, particularly building quality backlinks to your website.",
      bgImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Local SEO for Targeted Visibility",
      description: "Boost your local presence with targeted SEO strategies that help customers in your area find and connect with your business online.",
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Dedicated Team",
      description: "With years of SEO industry experience and dedication to achieving exceptional results, providing strategic support and expert guidance.",
      bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "SEO for E-Commerce",
      description: "Specialized e-commerce SEO services that increase your online store's visibility, drive more traffic, and boost sales through targeted optimization strategies.",
      bgImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const handleButtonClick = (action) => {
    console.log(`${action} button clicked`);
  };

  return (
    <div className="min-h-screen lg:mt-32 mt-21">
      {/* SEO Service Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-gray-50 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-linear-to-br from-[#1E3A8A] to-[#1E293B] rounded-full opacity-30 -translate-x-16 sm:-translate-x-24 lg:-translate-x-32 -translate-y-16 sm:-translate-y-24 lg:-translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-linear-to-tl from-[#F8BBD9] to-[#E91E63] rounded-full opacity-15 translate-x-24 sm:translate-x-36 lg:translate-x-48 translate-y-24 sm:translate-y-36 lg:translate-y-48"></div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <span className="text-[#1E3A8A] font-semibold text-lg sm:text-xl">Organic Growth</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-6xl font-semibold capitalize bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
                SEO Services &
                <br />
                Optimization
              </h1>
              <p className="text-gray-600 mb-6 sm:mb-8 text-md sm:text-lg">
                Dominate search results with our proven SEO strategies. We optimize every aspect of your online presence to increase organic traffic, improve rankings, and drive sustainable business growth through search engines.
              </p>
              <button className="px-6 sm:px-8 py-3 bg-linear-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                Let's Work Together
              </button>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-r from-[#1E293B] to-[#1E3A8A] rounded-lg mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-2 text-md">Keyword Strategy</h3>
                <p className="text-md text-gray-600">Comprehensive keyword research and competitive analysis for targeted rankings</p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-r from-[#1E3A8A] to-[#3B82F6] rounded-lg mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-2 text-md">Technical SEO</h3>
                <p className="text-md text-gray-600">Site speed optimization, crawlability improvements, and technical audits</p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-r from-[#F8BBD9] to-[#E91E63] rounded-lg mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="font-semibold bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-2 text-md">Content Optimization</h3>
                <p className="text-md text-gray-600">SEO-focused content creation, optimization, and strategic content planning</p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-r from-[#3B82F6] to-[#E91E63] rounded-lg mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-2 text-md">Rank Tracking</h3>
                <p className="text-md text-gray-600">Monthly ranking reports, traffic analysis, and performance monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Our Excellence Section - Static Background */}
      <section className="relative py-24 bg-linear-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Static background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-[#E8A4BC] to-[#3E3CAD] rounded-full opacity-5 -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-linear-to-tl from-[#F04393] to-[#FFC440] rounded-full opacity-5 translate-x-40 translate-y-40"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-linear-to-br from-[#33018B] to-[#3E3CAD] rounded-full opacity-3"></div>

        <div className="container mx-auto px-5 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="bg-linear-to-r from-[#3c4cad]/10 to-[#3d1b88]/10 text-[#3c4cad] px-6 py-3 rounded-full text-lg font-medium  uppercase tracking-wider border border-[#3c4cad]/20">
                WHAT SET US A PART
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl  font-semibold bg-linear-to-r from-[#33018B] via-[#3E3CAD] to-[#F04393] bg-clip-text text-transparent mb-6 leading-tight">
              Our Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the unique advantages that make us the preferred choice for innovative digital solutions and exceptional results.
            </p>
          </div>

          {/* Modern Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            {excellenceCards.map((card, index) => {
              const linears = [
                "from-[#E8A4BC] to-[#3E3CAD]",
                "from-[#3E3CAD] to-[#33018B]",
                "from-[#F04393] to-[#FFC440]",
                "from-[#33018B] to-[#F04393]"
              ];

              const currentlinear = linears[index % 4];

              return (
                <div
                  key={index}
                  className={`animate-card group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 cursor-pointer overflow-hidden border border-gray-100 ${visibleCards.has(`card-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Animated linear border */}
                  <div className={`absolute inset-0 bg-linear-to-br ${currentlinear} rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>

                  {/* Top linear accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${currentlinear} rounded-t-3xl`}></div>

                  {/* Floating icon container */}
                  <div className={`relative w-20 h-20 bg-linear-to-br ${currentlinear} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <span className="text-3xl text-white drop-shadow-sm">
                      {card.icon}
                    </span>

                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 bg-linear-to-br ${currentlinear} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-20">
                    <h3 className={`text-2xl font-bold mb-4 bg-linear-to-r ${currentlinear} bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300`}>
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>

                  {/* Interactive particles */}
                  <div className="absolute top-6 right-6 w-2 h-2 bg-linear-to-br from-[#FFC440] to-[#F04393] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-linear-to-br from-[#3E3CAD] to-[#33018B] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 right-4 w-1 h-1 bg-linear-to-br from-[#E8A4BC] to-[#F04393] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>

                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-gray-50 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-3xl"></div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r ${currentlinear} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-3xl`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Banner />

  

    </div>
  );
};

export default SEOServicePage;
