"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Instagram, CheckCircle } from 'lucide-react';

const BlogContent = () => {
    const [activeHeading, setActiveHeading] = useState('');

    // Table of contents data
    const tableOfContents = [
        { id: 'local-business-reality', title: 'The Local Business Marketing Reality: Why 78% Struggle to Find New Customers' },
        { id: 'google-my-business', title: 'Google My Business: Your Free Marketing Goldmine' },
        { id: 'gmb-routine', title: 'The 15-Minute Daily GMB Routine That Drives Customers' },
        { id: 'social-media', title: 'Social Media That Actually Brings in Customers (Not Just Likes)' },
        { id: 'weekly-formula', title: 'The 5-Post Weekly Formula for Local Business Success' },
        { id: 'online-advertising', title: 'Smart Online Advertising: Maximum Results with Minimal Budget' },
        { id: 'review-strategy', title: 'The Review Strategy That Builds Trust and Drives Sales' },
        { id: 'measuring-results', title: 'Measuring What Matters: Simple Metrics That Show Real Results' }
    ];

    // Scroll to section when clicking table of contents
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Track active section on scroll
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveHeading(entry.target.id);
                }
            });
        }, observerOptions);

        tableOfContents.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen lg:mt-32 mt-21" style={{ backgroundColor: '#f8fafc' }}>
            {/* Hero Section */}
            <div className="relative py-20 px-4 overflow-hidden bg-[url('https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371504/blog_content_1_zsuunb.png')]">
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 23, 42, 0.3)' }}></div>
                <div className="absolute inset-0">
                    <div className="w-full h-full opacity-10" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>
                <div className="relative max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-white mb-6 leading-tight capitalize">
                        how local businesses can use digital marketing to get more customers: a complete guide for 2025
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#ffffff' }}>
                        Discover the exact digital marketing strategies that helped 200+ local businesses increase their customer base by 150% in just 6 months, without breaking the bank.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <article className="bg-white rounded-xl shadow-sm overflow-hidden" style={{ border: '1px solid #e2e8f0' }}>

                            {/* Article Header */}
                            <div className="p-8" style={{ borderBottom: '1px solid #e2e8f0' }}>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium font-serif mb-4 leading-tight" style={{ color: '#0f172a' }}>
                                    How Local Businesses Can Use Digital Marketing to Get More Customers: A Complete Guide for 2025
                                </h1>

                                <p className="text-xl mb-6 leading-relaxed" style={{ color: '#475569' }}>
                                    Discover the exact digital marketing strategies that helped 200+ local businesses increase their customer base by 150% in just 6 months, without breaking the bank.
                                </p>

                                {/* Meta Information */}
                                <div className="flex flex-wrap items-center gap-6 text-sm mb-6" style={{ color: '#64748b' }}>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>August 1, 2025</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>10 min read</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span>John Smith</span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#1e40af' }}>Local Marketing</span>
                                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#0ea5e9' }}>Social Media</span>
                                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#f0abfc' }}>Google Business</span>
                                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#ec4899' }}>Customer Acquisition</span>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="p-8">

                                {/* Section 1 */}
                                <section id="local-business-reality" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>The Local Business Marketing Reality: Why 78% Struggle to Find New Customers</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Most local businesses rely on word-of-mouth and walk-ins, missing out on the 97% of customers who search online before making any purchase. The traditional approach simply isn't enough in today's digital world.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        The good news? Local digital marketing doesn't require huge budgets or technical expertise. Small, consistent efforts can dramatically increase your customer base and revenue within months.
                                    </p>

                                    <div className="p-6 my-8 rounded-lg" style={{ backgroundColor: '#dbeafe', borderLeft: '4px solid #1e40af' }}>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#1e40af' }} />
                                            <div>
                                                <p className="font-semibold" style={{ color: '#1e3a8a' }}>Local Search Fact:</p>
                                                <p style={{ color: '#1e40af' }}>88% of Google searches are looking for local information, and 76% of people who search for something nearby visit a business within 24 hours.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 2 */}
                                <section id="google-my-business" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>Google My Business: Your Free Marketing Goldmine</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Google My Business is the most powerful free marketing tool for local businesses. A completely optimized profile can bring your visibility up by 200% and drive more customers than expensive advertising campaigns.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Upload high-quality photos, collect customer reviews, post regular updates, and respond to inquiries. These simple actions help you appear in local search results and show customers you're ready to buy.
                                    </p>
                                </section>

                                {/* Section 3 */}
                                <section id="gmb-routine" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>The 15-Minute Daily GMB Routine That Drives Customers</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Spend just 15 minutes daily maintaining your Google My Business profile. Post updates, respond to new reviews, upload a photo, and check messages. This consistency signals to Google that your business is active and trustworthy.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Use Google Posts to announce special offers, new products, or events. These appear directly in search results and can significantly improve click-through rates to your website.
                                    </p>
                                </section>

                                {/* Section 4 */}
                                <section id="social-media" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>Social Media That Actually Brings in Customers (Not Just Likes)</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Focus on platforms where your customers spend time. For restaurants: use quick Instagram and Facebook. For professional services: Facebook and LinkedIn. For beauty/retail: Instagram and TikTok.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Share behind-the-scenes content, customer stories, and special offers. People buy from businesses they know and trust, and social media helps build that personal connection.
                                    </p>
                                </section>

                                {/* Section 5 */}
                                <section id="weekly-formula" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>The 5-Post Weekly Formula for Local Business Success</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Monday: Behind-the-scenes or team spotlight. Tuesday: Educational tip related to your service. Wednesday: Customer spotlight or testimonial. Thursday: Educational tip related to your business. Friday: Weekend special event announcement.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        This simple formula ensures consistent posting without overwhelming your schedule. Each week's content on Tuesday for the entire week to save time and maintain quality.
                                    </p>

                                    <div className="p-6 my-8 rounded-lg" style={{ backgroundColor: '#e0f2fe', borderLeft: '4px solid #0ea5e9' }}>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#0ea5e9' }} />
                                            <div>
                                                <p className="font-semibold" style={{ color: '#075985' }}>Engagement Tip:</p>
                                                <p style={{ color: '#0284c7' }}>Posts with local hashtags get 79% more engagement. Use tags like #YourCityName or #LocalBusiness #YourIndustry.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 6 */}
                                <section id="online-advertising" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>Smart Online Advertising: Maximum Results with Minimal Budget</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Start with a modest daily budget for Facebook or Google Ads targeting people within 10 km of your business. Even small spending can reach hundreds of potential customers within your targeted service area.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Focus on advertising special offers, new products, or events rather than general advertisements. Give people a specific reason to visit your business today.
                                    </p>
                                </section>

                                {/* Section 7 */}
                                <section id="review-strategy" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>The Review Strategy That Builds Trust and Drives Sales</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Ask every satisfied customer for a review. Make it easy by providing direct links to your Google, Facebook, or Yelp pages. Reviews are the modern word-of-mouth that influences 93% of purchasing decisions.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Respond to all reviews - positive and negative. Professional, helpful responses show potential customers that you care about their experience and stand behind your service.
                                    </p>
                                </section>

                                {/* Section 8 */}
                                <section id="measuring-results" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>Measuring What Matters: Simple Metrics That Show Real Results</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Track phone calls, website visits, and foot traffic from your marketing efforts. Use Google Analytics, Facebook Insights, and ask new customers how they found about you.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Focus on metrics that directly relate to business: new customer inquiries, appointment bookings, online orders, or store visits. Likes and followers are nice, but customers pay the bills.
                                    </p>
                                </section>

                                {/* Share Section */}
                                <div className="mt-12 pt-8" style={{ borderTop: '1px solid #e2e8f0' }}>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <h3 className="text-lg font-semibold" style={{ color: '#0f172a' }}>
                                            Follow for more
                                        </h3>

                                        <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
                                            <a
                                                href="https://www.facebook.com/zentrixinfotech.in/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-3 sm:px-4 py-2 text-white rounded-lg transition-colors text-sm sm:text-base flex-1 sm:flex-initial justify-center no-underline"
                                                style={{ backgroundColor: '#1e40af' }}
                                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1e40af'}
                                            >
                                                <Facebook className="w-4 h-4" />
                                                <span className="hidden sm:inline">Facebook</span>
                                            </a>

                                     

                                            <a
                                                href="https://www.linkedin.com/company/zentrix-infotech/posts/?feedView=all"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-3 sm:px-4 py-2 text-white rounded-lg transition-colors text-sm sm:text-base flex-1 sm:flex-initial justify-center no-underline"
                                                style={{ backgroundColor: '#f0abfc' }}
                                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e879f9'}
                                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f0abfc'}
                                            >
                                                <Linkedin className="w-4 h-4" />
                                                <span className="hidden sm:inline">LinkedIn</span>
                                            </a>

                                            <a
                                                href="https://www.instagram.com/zentrixinfotech/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-3 sm:px-4 py-2 text-white rounded-lg transition-colors text-sm sm:text-base flex-1 sm:flex-initial justify-center no-underline"
                                                style={{ backgroundColor: '#ec4899' }}
                                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#db2777'}
                                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ec4899'}
                                            >
                                                <Instagram className="w-4 h-4" />
                                                <span className="hidden sm:inline">Instagram</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </article>
                    </div>

                    {/* Table of Contents Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <div className="bg-white rounded-xl shadow-sm p-6" style={{ border: '1px solid #e2e8f0' }}>
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#0f172a' }}>
                                    <Share2 className="w-5 h-5" />
                                    Table of Contents
                                </h3>

                                <nav className="space-y-2">
                                    {tableOfContents.map((item, index) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${activeHeading === item.id
                                                ? 'border-l-4'
                                                : ''
                                                }`}
                                            style={activeHeading === item.id
                                                ? { backgroundColor: '#dbeafe', color: '#1e40af', borderLeftColor: '#1e40af' }
                                                : { color: '#64748b' }
                                            }
                                            onMouseOver={(e) => {
                                                if (activeHeading !== item.id) {
                                                    e.target.style.backgroundColor = '#f1f5f9';
                                                    e.target.style.color = '#1e40af';
                                                }
                                            }}
                                            onMouseOut={(e) => {
                                                if (activeHeading !== item.id) {
                                                    e.target.style.backgroundColor = 'transparent';
                                                    e.target.style.color = '#64748b';
                                                }
                                            }}
                                        >
                                            <div className="text-sm font-medium leading-5">
                                                {item.title}
                                            </div>
                                        </button>
                                    ))}
                                </nav>

                                {/* Progress Indicator */}
                                <div className="mt-6 pt-4" style={{ borderTop: '1px solid #e2e8f0' }}>
                                    <div className="text-sm mb-2" style={{ color: '#64748b' }}>Reading Progress</div>
                                    <div className="w-full rounded-full h-2" style={{ backgroundColor: '#e2e8f0' }}>
                                        <div
                                            className="h-2 rounded-full transition-all duration-300"
                                            style={{
                                                backgroundColor: '#1e40af',
                                                width: `${((tableOfContents.findIndex(item => item.id === activeHeading) + 1) / tableOfContents.length) * 100}%`
                                            }}
                                        ></div>
                                    </div>
                                    <div className="text-xs mt-1" style={{ color: '#94a3b8' }}>
                                        {Math.round(((tableOfContents.findIndex(item => item.id === activeHeading) + 1) / tableOfContents.length) * 100)}% Complete
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogContent;
