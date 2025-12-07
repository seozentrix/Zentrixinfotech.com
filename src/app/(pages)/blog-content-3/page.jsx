"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Link, CheckCircle, Shield, Cloud, Zap, Users, DollarSign, Lock, Instagram } from 'lucide-react';

const CloudBlogContent = () => {
    const [activeHeading, setActiveHeading] = useState('');

    // Table of contents data
    const tableOfContents = [
        { id: 'what-is-cloud', title: 'What is "The Cloud" and Why Should Local Businesses Care?' },
        { id: 'never-lose-files', title: 'Never Lose Important Files Again: Cloud Storage and Backup' },
        { id: 'choosing-storage', title: 'Choosing the Right Cloud Storage for Your Business' },
        { id: 'cloud-billing', title: 'Get Paid Faster with Cloud-Based Billing and Invoicing' },
        { id: 'collaboration-tools', title: 'Work Together Better: Cloud Collaboration Tools' },
        { id: 'cloud-crm', title: 'Know Your Customers Better: Cloud CRM Systems' },
        { id: 'cost-comparison', title: 'Cloud vs. Traditional: The Real Cost Comparison' },
        { id: 'better-security', title: 'Better Security Than Most Local Businesses Can Afford' },
        { id: 'migration-plan', title: 'Getting Started: Your Simple Cloud Migration Plan' }
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
            <div className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0  bg-[url('https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371506/blog_content_3_to93zf.png')]"></div>

                <div className="relative max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium font-serif text-white mb-6 leading-tight">
                        How Cloud Services Can Make Local Businesses Work Smarter
                    </h1>
                    <p className="text-2xl mb-8 leading-relaxed" style={{ color: '#ffffff' }}>
                        Save Time, Money, and Headaches
                    </p>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#ffffff' }}>
                        Discover how simple cloud tools helped 500+ local businesses cut costs by 40%, work from anywhere, and never lose important data again.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <article className="bg-white rounded-xl shadow-sm overflow-hidden">

                            {/* Article Header */}
                            <div className="p-8">
                                <div className="flex flex-wrap items-center gap-6 text-sm mb-6" >
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>July 26, 2025</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>9 min read</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span>Mike Chen</span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#1e40af' }}>Cloud Computing</span>
                                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#0ea5e9' }}>Business Efficiency</span>
                                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#f0abfc' }}>Cost Savings</span>
                                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#ec4899' }}>Digital Tools</span>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="p-8">

                                {/* Section 1 */}
                                <section id="what-is-cloud" className="mb-12">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-serif mb-6 flex items-center gap-3" style={{ color: '#0f172a' }}>
                                        <Cloud className="w-8 h-8" style={{ color: '#0ea5e9' }} />
                                        What is "The Cloud" and Why Should Local Businesses Care?
                                    </h2>

                                    <p className="text-lg lg:text-xl mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Being able to work from home when needed, and having professional-grade tools without expensive upfront costs, makes cloud services incredibly valuable for local businesses.
                                    </p>

                                    <div className="p-6 my-8 rounded-lg" style={{ backgroundColor: '#dbeafe', borderLeft: '4px solid #1e40af' }}>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 mt-0.5 mr-3 shrink-0" style={{ color: '#1e40af' }} />
                                            <div>
                                                <p className="font-semibold" style={{ color: '#1e3a8a' }}>Simple Truth:</p>
                                                <p style={{ color: '#1e40af' }}>If you use Gmail, Facebook, or online banking, you're already using cloud services. Business cloud tools work the same way but for business needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 2 */}
                                <section id="never-lose-files" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#0f172a' }}>
                                        <Shield className="w-8 h-8" style={{ color: '#0ea5e9' }} />
                                        Never Lose Important Files Again: Cloud Storage and Backup
                                    </h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Computer crashes, theft, and accidents destroy business data every day. Cloud storage automatically backs up your important files so you'll never lose customer lists, financial records, or photos again.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Cloud storage works like having a secure file cabinet that backs up automatically without your effort. Professional automatic backup plans cost $5-15 monthly but save thousands in lost data and recovery costs. Your files are accessible from any device, anywhere.
                                    </p>
                                </section>

                                {/* Section 3 */}
                                <section id="choosing-storage" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>Choosing the Right Cloud Storage for Your Business</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Google Workspace Start fits business using Gmail, includes some file storage, Google Docs, and professional email. Microsoft 365: Great if you use Word/Excel, includes substantial storage and Office apps.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Dropbox Business: Excellent sharing large files with customers, whether from home offices, work device, or during customer site visits with team members.
                                    </p>
                                </section>

                                {/* Section 4 */}
                                <section id="cloud-billing" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#0f172a' }}>
                                        <DollarSign className="w-8 h-8" style={{ color: '#0ea5e9' }} />
                                        Get Paid Faster with Cloud-Based Billing and Invoicing
                                    </h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Cloud invoicing tools like QuickBooks Online, FreshBooks, or Wave create professional invoices, track payments, and send automatic payment reminders. Customers can pay online with credit cards, reducing collection time from weeks to days.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        These tools have pre-made, modify-searchable but typically pay for themselves by getting you paid 50% faster and reducing late payments through automated follow-ups.
                                    </p>
                                </section>

                                {/* Section 5 */}
                                <section id="collaboration-tools" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#0f172a' }}>
                                        <Users className="w-8 h-8" style={{ color: '#f0abfc' }} />
                                        Work Together Better: Cloud Collaboration Tools
                                    </h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Cloud collaboration tools let your team share files, communicate, and work on projects together, even when not in the same location. Use team calendars, share customer information, and coordinate tasks efficiently.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Tools like Slack for messaging, Google Workspace for document sharing, and Trello for project management help everyone be on the same page and reduce miscommunication that can cost time and money.
                                    </p>

                                    <div className="p-6 my-8 rounded-lg" style={{ backgroundColor: '#fae8ff', borderLeft: '4px solid #f0abfc' }}>
                                        <div className="flex items-start">
                                            <Zap className="w-6 h-6 mt-0.5 mr-3 shrink-0" style={{ color: '#f0abfc' }} />
                                            <div>
                                                <p className="font-semibold" style={{ color: '#a21caf' }}>Productivity Boost:</p>
                                                <p style={{ color: '#c026d3' }}>Businesses using cloud collaboration tools complete projects 25% faster and have 67% fewer communication delays.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 6 */}
                                <section id="cloud-crm" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>Know Your Customers Better: Cloud CRM Systems</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Customer Relationship Management (CRM) systems help you track customer preferences, purchase history, and contact information in one place. Remember when Mrs. Smith prefers delivery on Tuesdays or that Johnson family always orders extra cheese.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Simple CRM tools like HubSpot (with free starter options) or Zoho CRM help you provide better customer service and increase repeat business by remembering important details.
                                    </p>
                                </section>

                                {/* Section 7 */}
                                <section id="cost-comparison" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>Cloud vs. Traditional: The Real Cost Comparison</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Traditional setup: Significant upfront investment for servers, accounting software, business email, ongoing maintenance costs, and regular upgrade and maintenance the local.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Cloud services: Start small with your business - not just what services you grow, with no long-term expensive systems upfront that you might not fully use for years.
                                    </p>
                                </section>

                                {/* Section 8 */}
                                <section id="better-security" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#0f172a' }}>
                                        <Lock className="w-8 h-8" style={{ color: '#ec4899' }} />
                                        Better Security Than Most Local Businesses Can Afford
                                    </h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Cloud services invest millions in security that local businesses could never afford individually. Your data is protected by enterprise-grade encryption, 24/7 monitoring, and automatic security updates.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Cloud services also provide access controls so you can decide who can access what information, track who accesses what files, and immediately revoke access if someone leaves your business.
                                    </p>
                                </section>

                                {/* Section 9 */}
                                <section id="migration-plan" className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#0f172a' }}>Getting Started: Your Simple Cloud Migration Plan</h2>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Week 1: Start with cloud storage - move important files to Google Drive or Dropbox. Week 2: Set up cloud-based email if you haven't already. Week 3: Try a cloud invoicing tool for new customers. Week 4: Evaluate what you've saved on your specific needs.
                                    </p>

                                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#334155' }}>
                                        Don't try to change everything at once. Implement one cloud service at a time, train your team, and see how you see the benefits and convenience with the technology.
                                    </p>

                                    <div className="p-6 my-8 rounded-lg" style={{ backgroundColor: '#e0f2fe', borderLeft: '4px solid #0ea5e9' }}>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 mt-0.5 mr-3 shrink-0" style={{ color: '#0ea5e9' }} />
                                            <div>
                                                <p className="font-semibold" style={{ color: '#075985' }}>Success Tip:</p>
                                                <p style={{ color: '#0284c7' }}>Start with one cloud service that solves your biggest daily frustration. Most businesses see immediate benefits within the first week of implementation.</p>
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

export default CloudBlogContent;
