"use client";

import React, { useState, useEffect, useRef } from 'react';

import Banner from '@/components/Banner';

import {
    Settings,
    Smartphone,
    PenTool,
    DollarSign,
    BarChart3,
    TrendingUp
} from 'lucide-react';

// export const metadata = {title: "Google & Meta Ads Management – Zentrix Infotech",description: "High-ROI Google Ads and social media ads management services to boost sales and online visibility."};


const GoogleAds = () => {
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

    const handleButtonClick = (buttonText) => {
        console.log('Button clicked:', buttonText);
    };

    return (
        <div className="font-sans text-gray-800 leading-relaxed lg:mt-32 mt-21">
            {/* Hero Section */}
            <section className="px-8 py-8 bg-gray-50 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-linear-to-br from-[#1E3A8A] to-[#1E293B] rounded-full opacity-30 -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-[#F8BBD9] to-[#E91E63] rounded-full opacity-15 translate-x-48 translate-y-48"></div>

                <div className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <span className="text-[#1E3A8A] font-medium text-xl">Paid Advertising</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-semibold bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-6 leading-tight">
                                 ADS
                                <br />
                                MANAGEMENT
                            </h1>
                            <p className="text-gray-600 mb-8 text-lg">
                                Maximize your ROI with expertly managed Google Ads campaigns. From strategic keyword bidding to conversion optimization, we drive qualified traffic and measurable results for your business.
                            </p>
                            <button className="px-8 py-3 bg-linear-to-r from-[#1E3A8A] via-[#3B82F6] to-[#E91E63] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                                Launch Ad Campaign
                            </button>
                        </div>

                        {/* Service Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-r from-[#1E293B] to-[#1E3A8A] rounded-lg mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-2 text-md">Search Campaigns</h3>
                                <p className="text-md text-gray-600">Target high-intent keywords with optimized search ads for maximum conversions</p>
                            </div>

                            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-r from-[#1E3A8A] to-[#3B82F6] rounded-lg mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-2 text-md">Display Ads</h3>
                                <p className="text-md text-gray-600">Eye-catching visual campaigns across Google's display network for brand awareness</p>
                            </div>

                            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-r from-[#F8BBD9] to-[#E91E63] rounded-lg mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-2 text-md">Performance Analytics</h3>
                                <p className="text-md text-gray-600">Detailed reporting and optimization based on conversion data and ROI metrics</p>
                            </div>

                            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-r from-[#3B82F6] to-[#E91E63] rounded-lg mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-2 text-md">Audience Targeting</h3>
                                <p className="text-md text-gray-600">Precision targeting with demographics, interests, and remarketing strategies</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Our PPC Services Section */}
            <section className="relative py-24 bg-linear-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
                {/* Static background decorative elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-[#E8A4BC] to-[#3E3CAD] rounded-full opacity-5 -translate-x-48 -translate-y-48"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-linear-to-tl from-[#F04393] to-[#FFC440] rounded-full opacity-5 translate-x-40 translate-y-40"></div>
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-linear-to-br from-[#33018B] to-[#3E3CAD] rounded-full opacity-3"></div>

                <div className="container mx-auto px-5 relative z-10">
                    {/* Enhanced Header */}
                    <div className="text-center mb-20">
                        <div className="mb-4">
                            <span className="bg-linear-to-r from-[#3c4cad]/10 to-[#3d1b88]/10 text-[#3c4cad] px-6 py-3 rounded-full text-lg font-medium uppercase tracking-wider border border-[#3c4cad]/20">
                                PPC EXCELLENCE
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-semibold bg-linear-to-r from-[#33018B] via-[#3E3CAD] to-[#F04393] bg-clip-text text-transparent mb-6 leading-tight">
                            Our PPC Service
                        </h2>
                        <p className="text-gray-600 lg:text-lg text-md max-w-4xl mx-auto">
                            At Zentrix Infotech, we provide a comprehensive range of PPC services tailored to your unique business goals and industry. Whether you aim to enhance brand awareness, drive website traffic, or increase e-commerce sales, our team of PPC experts is dedicated to delivering exceptional results through strategic paid search and engaging ad campaigns across multiple platforms.
                        </p>
                    </div>

                    {/* Modern Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: <Settings className="w-8 h-8" />,
                                title: 'PPC Strategy Development',
                                description: 'Maximize ROI with expert PPC strategy development. Target the right audience, optimize ad spend, and achieve measurable results with precision-driven campaigns.',
                                color: '#4F46E5'
                            },
                            {
                                icon: <Smartphone className="w-8 h-8" />,
                                title: 'Campaign Management',
                                description: 'Streamline success with professional campaign management. Optimize performance, track metrics, and ensure seamless execution for impactful, results-driven marketing campaigns.',
                                color: '#059669'
                            },
                            {
                                icon: <PenTool className="w-8 h-8" />,
                                title: 'Ad Copywriting',
                                description: 'Engage your audience with compelling ad copywriting. Craft persuasive messages that drive clicks, boost conversions, and elevate your brand\'s impact.',
                                color: '#DC2626'
                            },
                            {
                                icon: <DollarSign className="w-8 h-8" />,
                                title: 'CPC Optimization',
                                description: 'Reduce costs and boost performance with CPC optimization. Maximize ad efficiency, improve ROI, and achieve better results with data-driven strategies.',
                                color: '#7C3AED'
                            },
                            {
                                icon: <BarChart3 className="w-8 h-8" />,
                                title: 'PPC Bid Management',
                                description: 'Maximize ad performance with PPC bid management. Optimize bids, control costs, and achieve top placements for higher ROI and campaign success.',
                                color: '#0891B2'
                            },
                            {
                                icon: <TrendingUp className="w-8 h-8" />,
                                title: 'Reporting and Analysis',
                                description: 'Stay informed with regular reporting and analysis. Gain actionable insights, track performance, and make data-driven decisions for continuous campaign improvement.',
                                color: '#EA580C'
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
            </section>

            <Banner />

            {/* Hiring Models Section */}

        </div>
    );
};

export default GoogleAds;
