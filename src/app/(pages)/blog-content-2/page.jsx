"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Link, CheckCircle, AlertCircle, TrendingUp, Instagram } from 'lucide-react';

const WebsiteBlogContent = () => {
    const [activeHeading, setActiveHeading] = useState('');

    // Table of contents data
    const tableOfContents = [
        { id: 'hard-truth', title: 'The Hard Truth: No Website = Lost Customers Every Single Day' },
        { id: 'mobile-first', title: 'Mobile-First Reality: 73% of Business Searches Happen on Phones' },
        { id: 'essential-pages', title: 'The 5 Essential Pages Every Business Website Needs' },
        { id: 'seo-basics', title: 'SEO Basics: How to Show Up When Customers Search for You' },
        { id: 'trust-signals', title: 'Trust Signals That Convert Visitors into Customers' },
        { id: 'converting-visitors', title: 'Converting Visitors into Customers: The Essential Elements' },
        { id: 'keeping-fresh', title: 'Keeping Your Website Fresh and Effective' },
        { id: 'investment-return', title: 'Website Investment vs. Return: The Numbers That Matter' }
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
            <div className="relative py-20 px-4 overflow-hidden  bg-[url('https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371505/blog_content_2_th2uis.png')]">
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 23, 42, 0.3)' }}></div>
                <div className="absolute inset-0">
                    <div className="w-full h-full opacity-10" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>
                <div className="relative max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium font-serif text-white mb-6 leading-tight capitalize">
                        Why Every Business Needs a Good Website: The Complete Guide to Getting Found Online
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-white" >
                        Learn why 64% of small businesses without websites lose customers daily, and discover the essential website features that turn visitors into loyal customers.
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
                                    Why Every Business Needs a Good Website: The Complete Guide to Getting Found Online
                                </h1>

                                <p className="text-lg md:text-xl mb-6 leading-relaxed" style={{ color: '#475569' }}>
                                    Learn why 64% of small businesses without websites lose customers daily, and discover the essential website features that turn visitors into loyal customers.
                                </p>

                                {/* Meta Information */}
                                <div className="flex flex-wrap items-center gap-6 text-sm mb-6" style={{ color: '#64748b' }}>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>July 29, 2025</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>8 min read</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span>Sarah Johnson</span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#1e40af' }}>Website Development</span>
                                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#0ea5e9' }}>Local SEO</span>
                                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#f0abfc' }}>Mobile Optimization</span>
                                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#ec4899' }}>Business Growth</span>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="p-8">

                                {/* Section 1 */}
                                <section id="hard-truth" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>The Hard Truth: No Website = Lost Customers Every Single Day</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        64% of small businesses still don't have a website, while 97% of consumers search online before visiting or purchasing. The disconnect costs businesses significant revenue daily.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Your competitors with websites are capturing customers who should have chosen your business if they could find you online. A professional website isn't just nice to have—it's essential for modern business success.
                                    </p>

                                    <div className="p-6 my-8 rounded-lg" style={{ backgroundColor: '#fce8e6', borderLeft: '4px solid #ec4899' }}>
                                        <div className="flex items-start">
                                            <AlertCircle className="w-6 h-6 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#ec4899' }} />
                                            <div>
                                                <p className="font-semibold" style={{ color: '#be185d' }}>Shocking Statistic:</p>
                                                <p style={{ color: '#ec4899' }}>88% of consumers research businesses online before visiting, and 70% won't consider a business without a website.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 2 */}
                                <section id="mobile-first" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>Mobile-First Reality: 73% of Business Searches Happen on Phones</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        More than three-quarters of searches happen on smartphones when people are out and about, looking for immediate solutions. If your website doesn't work perfectly on mobile devices, you're losing customers to competitors who do.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Mobile-friendly websites load quickly, have easy-to-tap buttons, readable text without zooming, and simple navigation that doesn't require two-finger maneuvers. They're not just convenient—they're crucial for business success.
                                    </p>
                                </section>

                                {/* Section 3 */}
                                <section id="essential-pages" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>The 5 Essential Pages Every Business Website Needs</h2>

                                    <div className="space-y-6">
                                        <div className="pl-6" style={{ borderLeft: '4px solid #1e40af' }}>
                                            <h3 className="text-xl font-semibold mb-2" style={{ color: '#0f172a' }}>Home Page:</h3>
                                            <p style={{ color: '#334155' }}>Clear description of what you do, who you serve, and why customers should choose you. About Page: Your story, experience, and what makes you different. Services/Products Page: Detailed information about what you offer.</p>
                                        </div>

                                        <div className="pl-6" style={{ borderLeft: '4px solid #0ea5e9' }}>
                                            <h3 className="text-xl font-semibold mb-2" style={{ color: '#0f172a' }}>Contact Page:</h3>
                                            <p style={{ color: '#334155' }}>Phone number, address, hours, map, and contact form. Reviews/Testimonials: Social proof from real customers who trust you with their needs.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 4 */}
                                <section id="seo-basics" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>SEO Basics: How to Show Up When Customers Search for You</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Include your city and neighborhood names throughout your website content naturally. Instead of just "Pizza Restaurant," use "Best Pizza Restaurant in Downtown Miami Beach."
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Add your business address, phone number, and hours on every page - preferably in the footer. This helps Google understand your location and display your business in search results to nearby customers.
                                    </p>
                                </section>

                                {/* Section 5 */}
                                <section id="trust-signals" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>Trust Signals That Convert Visitors into Customers</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Display customer reviews prominently on your homepage, include photos of your team, business location, and satisfied customers. Show certifications, awards, or years in business to demonstrate credibility.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Add security badges for online payments, privacy policy links, and professional-looking contact information. These elements subconsciously signal that your business is legitimate and trustworthy.
                                    </p>

                                    <div className="p-6 my-8 rounded-lg" style={{ backgroundColor: '#e0f2fe', borderLeft: '4px solid #0ea5e9' }}>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#0ea5e9' }} />
                                            <div>
                                                <p className="font-semibold" style={{ color: '#075985' }}>Trust Factor:</p>
                                                <p style={{ color: '#0284c7' }}>Websites with customer photos and testimonials increase conversions by 88% compared to those without social proof.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 6 */}
                                <section id="converting-visitors" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>Converting Visitors into Customers: The Essential Elements</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Make it incredibly easy for visitors to contact you. Display your phone number prominently, use contact forms, and have live chat. Use "Book Appointment," "Get Directions" action buttons that tell visitors exactly what you want them to do next.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Create clear call-to-action buttons like "Call Now," "Book Appointment," "Quick Contact," or "Get Quote." Tell visitors exactly what you want them to do next.
                                    </p>
                                </section>

                                {/* Section 7 */}
                                <section id="keeping-fresh" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>Keeping Your Website Fresh and Effective</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Update your content regularly with new photos, customer reviews, special offers, and business news. Fresh content signals to Google that your business is active and deserves higher rankings.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Check that all links work, contact information is current, and that website loads quickly on mobile devices. Broken website creates a negative first impression that's hard to overcome.
                                    </p>
                                </section>

                                {/* Section 8 */}
                                <section id="investment-return" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>Website Investment vs. Return: The Numbers That Matter</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        A professional business website typically pays for itself within months through increased customer acquisition. Compare this to losing potential customers weekly due to online presence.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Businesses with websites see 40% more customers than those without. The question isn't whether you can afford to have a website—it's whether you can afford to keep losing customers without one.
                                    </p>

                                    <div className="p-6 my-8 rounded-lg" style={{ backgroundColor: '#fae8ff', borderLeft: '4px solid #f0abfc' }}>
                                        <div className="flex items-start">
                                            <TrendingUp className="w-6 h-6 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#f0abfc' }} />
                                            <div>
                                                <p className="font-semibold" style={{ color: '#a21caf' }}>ROI Reality:</p>
                                                <p style={{ color: '#c026d3' }}>Small businesses with professional websites average 3x more revenue growth than those without an online presence.</p>
                                            </div>
                                        </div>
                                    </div>
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

export default WebsiteBlogContent;
