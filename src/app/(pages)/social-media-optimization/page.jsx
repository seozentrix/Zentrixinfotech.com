"use client";

import React, { useState, useEffect } from 'react';
import WhyChoose from '@/components/WhyChoose';
import Banner from '@/components/Banner';
import {
    Youtube,
    Target,
    Facebook,
    MapPin,
    Users,
    Instagram
} from 'lucide-react';

const SocialMediaLanding = () => {
    const [visibleCards, setVisibleCards] = useState(new Set());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards(prev => new Set([...prev, entry.target.dataset.cardId]));
                    }
                });
            },
            { threshold: 0.2, rootMargin: '50px' }
        );

        const animatedElements = document.querySelectorAll('[data-card-id]');
        animatedElements.forEach(element => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    const handleButtonClick = (buttonText) => {
        console.log('Button clicked:', buttonText);
    };

    const isVisible = (cardId) => visibleCards.has(cardId);

    return (
        <div className="min-h-screen bg-white lg:mt-32 mt-21">
            {/* Hero Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-gray-50 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-linear-to-br from-[#1E3A8A] to-[#1E293B] rounded-full opacity-30 -translate-x-16 sm:-translate-x-24 lg:-translate-x-32 -translate-y-16 sm:-translate-y-24 lg:-translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-linear-to-tl from-[#F8BBD9] to-[#E91E63] rounded-full opacity-15 translate-x-24 sm:translate-x-36 lg:translate-x-48 translate-y-24 sm:translate-y-36 lg:translate-y-48"></div>

                <div className="max-w-6xl mx-auto">
                    <div className="mb-6 sm:mb-8">
                        <span className="text-[#1E3A8A] font-medium text-xl">SEO Excellence</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl lg:text-6xl font-semibold capitalize bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
                                Social Media 
                                <br />
                                Optimization
                            </h1>
                            <p className="text-gray-600 mb-6 sm:mb-8 text-md sm:text-lg">
                                Boost your website's visibility and drive organic traffic with our comprehensive SEO strategies. From keyword optimization to technical improvements, we help you rank higher and reach more customers.
                            </p>
                            <button className="px-6 sm:px-8 py-3 bg-linear-to-r from-[#ff6b6b] to-[#feca57] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                                Discover Opportunities
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
                                <h3 className="font-semibold bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-2 text-md">Keyword Research</h3>
                                <p className="text-md text-gray-600">Strategic keyword analysis and targeting for maximum search visibility</p>
                            </div>

                            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-r from-[#1E3A8A] to-[#3B82F6] rounded-lg mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-2 text-md">Technical SEO</h3>
                                <p className="text-md text-gray-600">Website optimization, page speed, and technical improvements for search engines</p>
                            </div>

                            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-r from-[#F8BBD9] to-[#E91E63] rounded-lg mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-2 text-md">Content Strategy</h3>
                                <p className="text-md text-gray-600">SEO-optimized content creation and optimization for better rankings</p>
                            </div>

                            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-r from-[#3B82F6] to-[#E91E63] rounded-lg mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-2 text-md">Link Building</h3>
                                <p className="text-md text-gray-600">High-quality backlink acquisition and domain authority improvement strategies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Why Choose Us Component */}
    
            {/* About Section */}
           


            {/* Services Section */}
            <section className="relative py-24 bg-linear-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-[#E8A4BC] to-[#3E3CAD] rounded-full opacity-5 -translate-x-48 -translate-y-48 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-linear-to-tl from-[#F04393] to-[#FFC440] rounded-full opacity-5 translate-x-40 translate-y-40 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-linear-to-br from-[#33018B] to-[#3E3CAD] rounded-full opacity-3 animate-pulse"></div>

                <div className="container mx-auto px-5 relative z-10">
                    {/* Enhanced Header */}
                    <div className="text-center mb-20">
                        <div className="mb-4">
                            <span className="bg-linear-to-r from-[#3c4cad]/10 to-[#3d1b88]/10 text-[#3c4cad] px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full text-md text-lg  font-medium uppercase tracking-wide sm:tracking-wider border border-[#3c4cad]/20 inline-block">
                                SOCIAL MEDIA EXCELLENCE
                            </span>

                        </div>
                        <h2 className="text-4xl md:text-5xl font-semibold bg-linear-to-r from-[#33018B] via-[#3E3CAD] to-[#F04393] bg-clip-text text-transparent mb-6 leading-tight">
                            Unleash Your Unique Brand Story <br /> Across Digital Platforms
                        </h2>
                        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                            Our All-Inclusive Social Media Solutions
                        </p>
                    </div>

                    {/* Modern Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: <Youtube className="w-8 h-8" />,
                                title: 'YouTube Marketing',
                                description: 'Our social media advertising experts craft impactful campaigns, including display ads, overlays, skippable and non-skippable videos, sponsored cards, and remarketing strategies.',
                                color: '#FF0000'
                            },
                            {
                                icon: <Target className="w-8 h-8" />,
                                title: 'Social Media Targeting',
                                description: 'We tailor your social media marketing and content strategy to reach your target audience based on demographics, age, professional background, and other key metrics.',
                                color: '#1DA1F2'
                            },
                            {
                                icon: <Facebook className="w-8 h-8" />,
                                title: 'Facebook Marketing',
                                description: 'Facebook allows you to connect with your ideal audience to create and promote videos, images, product collections, slideshows, offers, and event promotions.',
                                color: '#1877F2'
                            },
                            {
                                icon: <MapPin className="w-8 h-8" />,
                                title: 'Pinterest Marketing',
                                description: "Pinterest isn't just a hub for inspiration and ideas, it's a powerful marketing channel. Our SMM experts strategically promote your blog posts on Pinterest.",
                                color: '#E60023'
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: 'Lead Generation',
                                description: 'Collaborate with social media marketing experts to craft impactful strategies that generate leads across various platforms and boost sales.',
                                color: '#0A66C2'
                            },
                            {
                                icon: <Instagram className="w-8 h-8" />,
                                title: 'Instagram Marketing',
                                description: 'We help you tap into Instagram\'s visual power to engage millennials through images, videos, carousels, and story ads.',
                                color: '#E4405F'
                            }
                        ].map((service, index) => {
                            const linears = [
                                "from-[#E8A4BC] to-[#3E3CAD]",
                                "from-[#3E3CAD] to-[#33018B]",
                                "from-[#F04393] to-[#FFC440]",
                                "from-[#33018B] to-[#F04393]",
                                "from-[#E8A4BC] to-[#F04393]",
                                "from-[#3E3CAD] to-[#FFC440]"
                            ];

                            const currentlinear = linears[index % 6];

                            return (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 cursor-pointer overflow-hidden border border-gray-100"
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
                                            {service.icon}
                                        </span>

                                        {/* Icon glow effect */}
                                        <div className={`absolute inset-0 bg-linear-to-br ${currentlinear} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}></div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-20">
                                        <h3 className={`text-2xl font-bold mb-4 bg-linear-to-r ${currentlinear} bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300`}>
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                            {service.description}
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

                {/* Additional floating elements */}
                <div className="absolute top-32 right-32 w-6 h-6 bg-linear-to-br from-[#FFC440] to-[#F04393] rounded-full opacity-10 animate-bounce"></div>
                <div className="absolute bottom-48 left-24 w-4 h-4 bg-linear-to-br from-[#3E3CAD] to-[#33018B] rounded-full opacity-15 animate-pulse"></div>
                <div className="absolute top-2/3 right-16 w-3 h-3 bg-linear-to-br from-[#E8A4BC] to-[#F04393] rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
            </section>

            {/* Banner Component */}

            <Banner />

            {/* Hiring Models Section */}
        </div>
    );
};

export default SocialMediaLanding;
