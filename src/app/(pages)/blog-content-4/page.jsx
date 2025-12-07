"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin,Instagram, Link, CheckCircle, Palette, Eye, Heart, TrendingUp, Award, Star, Target, Lightbulb } from 'lucide-react';

// export const metadata = {title: "Brand Identity Design: Creating Memorable Business Logos | Zentrix Infotech",description: "Learn how powerful brand identity and logo design influence customer trust, recognition and long-term business success."};



const BrandingBlogContent = () => {
    const [activeHeading, setActiveHeading] = useState('');

    // Table of contents data
    const tableOfContents = [
        { id: 'customer-loss', title: 'Why 73% of Local Businesses Lose Customers Due to Poor Branding' },
        { id: 'instant-trust', title: 'How Professional Branding Builds Instant Customer Trust' },
        { id: 'logo-impression', title: 'Your Logo: The 2-Second First Impression That Makes or Breaks Sales' },
        { id: 'color-psychology', title: 'The Secret Psychology of Colors That Influence Customer Behavior' },
        { id: 'brand-consistency', title: 'Brand Consistency: Why Using the Same Look Everywhere Multiplies Recognition' },
        { id: 'differentiation', title: 'Standing Out in Your Local Market: The Differentiation Strategy' },
        { id: 'essential-elements', title: 'Essential Branding Elements Every Local Business Needs' },
        { id: 'branding-mistakes', title: 'The 5 Deadly Branding Mistakes That Drive Customers Away' },
        { id: 'small-budget', title: 'Professional Branding on a Small Business Budget' },
        { id: 'measuring-success', title: 'How to Know If Your Branding Is Working' },
        { id: 'transformation-plan', title: 'Your 30-Day Branding Transformation Plan' }
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
            <div className="relative py-20 px-4 overflow-hidden  bg-[url('https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371507/blog_content_4_yis1ql.png')]">
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 23, 42, 0.3)' }}></div>
                <div className="absolute inset-0">
                    <div className="w-full h-full opacity-10" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>
                <div className="relative max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium font-serif text-white mb-6 leading-tight">
                        Why Good Branding Can Help Local Businesses Stand Out
                    </h1>
                    <p className="text-2xl mb-8 leading-relaxed" style={{ color: '#0ea5e9' }}>
                        Building Trust and Recognition
                    </p>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#f0abfc' }}>
                        Discover how strong branding helped 500+ local businesses increase customer recognition by 85% and charge higher prices than unbranded competitors.
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
                                <div className="flex flex-wrap items-center gap-6 text-sm mb-6" style={{ color: '#64748b' }}>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>July 24, 2025</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>12 min read</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span>Alex Rivera</span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#1e40af' }}>Branding</span>
                                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#0ea5e9' }}>Logo Design</span>
                                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#f0abfc' }}>Brand Strategy</span>
                                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#ec4899' }}>Local Business</span>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="p-8">

                                {/* Section 1 */}
                                <section id="customer-loss" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#0f172a' }}>
                                        <TrendingUp className="w-8 h-8" style={{ color: '#ec4899' }} />
                                        Why 73% of Local Businesses Lose Customers Due to Poor Branding
                                    </h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Most local businesses lack exactly the same - generic fonts, amateur colors, and forgettable logos. Customers can't tell the difference because you and your competitor, so they choose based on price alone.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Good branding sets you apart before they even talk to you. It creates trust, shows professionalism, and professional appearance. Without consistent branding, your business may in front, likely to clients who recommend you to friends.
                                    </p>

                                    <div className="p-6 my-8 rounded-lg" style={{ backgroundColor: '#fce8e6', borderLeft: '4px solid #ec4899' }}>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 mt-0.5 mr-3 shrink-0" style={{ color: '#ec4899' }} />
                                            <div>
                                                <p className="font-semibold" style={{ color: '#be185d' }}>Brand Recognition Fact:</p>
                                                <p style={{ color: '#ec4899' }}>It takes only 7 seconds to form a first impression. Professional branding reduces this to just 2 milliseconds.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 2 */}
                                <section id="instant-trust" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#0f172a' }}>
                                        <Heart className="w-8 h-8" style={{ color: '#f0abfc' }} />
                                        How Professional Branding Builds Instant Customer Trust
                                    </h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        When it comes to hiring your services, customers use visual cues to determine they'll trust you or not. Professional branding makes customers immediately feel comfortable and confident you can deliver quality.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Customers subconsciously associate neat logos, consistent colors and polished appearance to professional excellence and competitive pricing. Poor branding suggests disorganized business and low-quality service.
                                    </p>
                                </section>

                                {/* Section 3 */}
                                <section id="logo-impression" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#0f172a' }}>
                                        <Eye className="w-8 h-8" style={{ color: '#0ea5e9' }} />
                                        Your Logo: The 2-Second First Impression That Makes or Breaks Sales
                                    </h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Your logo doesn't everywhere - business cards, signage, social media, packaging. A memorable logo helps customers find and recognize your business instantly, even in crowded marketplaces.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Simple, clean logos work best for local businesses. Think McDonald's golden arches or Nike's swoosh. These shapes can be easily recognized and designed and will catch customers' eyes.
                                    </p>
                                </section>

                                {/* Section 4 */}
                                <section id="color-psychology" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#0f172a' }}>
                                        <Palette className="w-8 h-8" style={{ color: '#f0abfc' }} />
                                        The Secret Psychology of Colors That Influence Customer Behavior
                                    </h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Colors trigger emotions and influence buying decisions. Red creates urgency (great for restaurants and sales). Blue instills trust (perfect for professional services). Green suggests nature and health (ideal for organic and eco-friendly businesses).
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Consistent color use across all materials - from your email sign to business cards to social media - helps customers recognize you. Business recognizing you, business instantly, even without reading your name.
                                    </p>
                                </section>

                                {/* Section 5 */}
                                <section id="brand-consistency" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>Brand Consistency: Why Using the Same Look Everywhere Multiplies Recognition</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Use the same fonts, colors, and style across everything - store signage, business cards, social media posts, and website. This repetition helps customers to recognize your brand automatically.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Inconsistent branding confuses customers and weakens recognition. If your business card looks different from your storefront, customers might not realize they're the same business.
                                    </p>

                                    <div className="p-6 my-8 rounded-lg" style={{ backgroundColor: '#e0f2fe', borderLeft: '4px solid #0ea5e9' }}>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 mt-0.5 mr-3 shrink-0" style={{ color: '#0ea5e9' }} />
                                            <div>
                                                <p className="font-semibold" style={{ color: '#075985' }}>Recognition Boost:</p>
                                                <p style={{ color: '#0284c7' }}>Businesses with consistent branding see 23% increase in revenue because customers remember them better.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 6 */}
                                <section id="differentiation" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#0f172a' }}>
                                        <Target className="w-8 h-8" style={{ color: '#1e40af' }} />
                                        Standing Out in Your Local Market: The Differentiation Strategy
                                    </h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Make your local competitors' branding - what colors do they use? What style? Then choose something distinctly different. If everyone uses formal, serious photos, you could use bright colors and fun photography.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Your unique value proposition should reflect what makes your business special. Family-oriented? Use warm, inviting colors and family photos. High-end luxury? Choose black and gold with elegant, professional photography.
                                    </p>
                                </section>

                                {/* Section 7 */}
                                <section id="essential-elements" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>Essential Branding Elements Every Local Business Needs</h2>

                                    <div className="space-y-6">
                                        <div className="pl-6" style={{ borderLeft: '4px solid #0ea5e9' }}>
                                            <h3 className="text-xl font-semibold mb-2" style={{ color: '#0f172a' }}>Logo:</h3>
                                            <p style={{ color: '#334155' }}>Simple and memorable. 2-3 main colors that work together. 2-3 fonts (or all serif, topline that sans serif) that are simple enough for tiny sizes like social media, business cards design & materials.</p>
                                        </div>

                                        <div className="pl-6" style={{ borderLeft: '4px solid #f0abfc' }}>
                                            <h3 className="text-xl font-semibold mb-2" style={{ color: '#0f172a' }}>Brand Voice:</h3>
                                            <p style={{ color: '#334155' }}>You don't need everything all once. Start with logo and colors, then gradually apply them to all business materials. Consistency is more important than having everything perfect day one.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 8 */}
                                <section id="branding-mistakes" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#0f172a' }}>
                                        <Award className="w-8 h-8" style={{ color: '#ec4899' }} />
                                        The 5 Deadly Branding Mistakes That Drive Customers Away
                                    </h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Using too many colors (5-3), copying competitors directly, choosing fonts that impossible, unprofessional social media posts, and choosing confusing/hard-to-match color schemes that don't match your business type (like chaotic fonts for serious professional services).
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Using comic fonts, branding frequently active customers used to doing like it.
                                    </p>
                                </section>

                                {/* Section 9 */}
                                <section id="small-budget" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>Professional Branding on a Small Business Budget</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Professional branding is an investment that typically pays for itself online marketing through increased customer pricing and trust. Start with the basics - logo and business cards - then gradually expand to signage, website, and marketing materials.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Consider working with local design students for budget-friendly help. Many design and commercial photographers for your products or services.
                                    </p>
                                </section>

                                {/* Section 10 */}
                                <section id="measuring-success" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>How to Know If Your Branding Is Working</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Track customer recognition - ask new customers how they heard about you. Monitor brand business and response if customers start recognizing your business name across different touchpoints to friends.</p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Professional branding reduces need for more word-of-mouth referrals, customers requesting you specifically instead of simply choosing the cheapest option, and increased confidence when quoting higher prices.
                                    </p>
                                </section>

                                {/* Section 11 */}
                                <section id="transformation-plan" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#0f172a' }}>
                                        <Lightbulb className="w-8 h-8" style={{ color: '#0ea5e9' }} />
                                        Your 30-Day Branding Transformation Plan
                                    </h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Week 1: Research competitors and define your unique positioning. Week 2: Design logo and choose colors. Week 3: Apply your new branding to social media, business cards, and basic marketing materials. Week 4: Launch and monitor the results.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        This systematic approach ensures your new branding gets maximum exposure and recognition. Start with the most visible elements first - then logo and social media accounts.
                                    </p>

                                    <div className="p-6 my-8 rounded-lg" style={{ backgroundColor: '#dbeafe', borderLeft: '4px solid #1e40af' }}>
                                        <div className="flex items-start">
                                            <Star className="w-6 h-6 mt-0.5 mr-3 shrink-0" style={{ color: '#1e40af' }} />
                                            <div>
                                                <p className="font-semibold" style={{ color: '#1e3a8a' }}>Success Tip:</p>
                                                <p style={{ color: '#1e40af' }}>Start with one consistent element (like your logo) and apply it everywhere before moving to the next element. Consistency beats perfection every time.</p>
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

export default BrandingBlogContent;
