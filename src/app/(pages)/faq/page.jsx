"use client";

import { useState, useRef } from 'react';
import { useRouter } from "next/navigation";

// export const metadata = {title: "FAQs – Zentrix Infotech Services & Support",description: "Find answers to frequently asked questions about our services, pricing, processes and support."};


export default function FAQSection() {
    const [openItems, setOpenItems] = useState({});
    const itemRefs = useRef({});

    const faqData = [
        // Left Column
        {
            id: 'left-1',
            column: 'left',
            question: 'What types of websites do you develop?',
            answer: 'We build e‑commerce, corporate, portfolio, and blog websites, tailored to specific needs.'
        },
        {
            id: 'left-2',
            column: 'left',
            question: 'How long does it take to develop a website?',
            answer: 'Simple sites can launch in 2–4 weeks; larger, custom builds may take 6–12+ weeks depending on scope.'
        },
        {
            id: 'left-3',
            column: 'left',
            question: 'What is off‑page SEO link building?',
            answer: 'Activities outside your site—like digital PR and quality backlinks—that improve search authority.'
        },
        {
            id: 'left-4',
            column: 'left',
            question: 'What digital marketing services do you offer?',
            answer: 'SEO, content, PPC, social media, and analytics setup to drive measurable growth.'
        },
        {
            id: 'left-5',
            column: 'left',
            question: 'Do you offer app maintenance services?',
            answer: 'Yes—plans include updates, monitoring, backups, and security patches.'
        },
        // Right Column
        {
            id: 'right-1',
            column: 'right',
            question: 'Can you integrate my app with existing systems?',
            answer: 'Yes, we connect to APIs and internal tools to enhance functionality and UX.'
        },
        {
            id: 'right-2',
            column: 'right',
            question: 'What is the starting price for hiring digital marketing experts?',
            answer: 'Engagements typically start from a monthly retainer; get a custom quote based on goals and scope.'
        },
        {
            id: 'right-3',
            column: 'right',
            question: 'How does the resource selection process work?',
            answer: 'We shortlist by skills, conduct interviews, and align a dedicated team with your roadmap.'
        },
        {
            id: 'right-4',
            column: 'right',
            question: 'How do clients handle time zone differences with remote resources?',
            answer: 'Overlap hours, async updates, and agreed SLAs ensure smooth collaboration.'
        },
        {
            id: 'right-5',
            column: 'right',
            question: 'How do you ensure security of client data?',
            answer: 'Least‑privilege access, encrypted storage, secure SDLC practices, and regular audits.'
        }
    ];

    const router = useRouter();

    const handleNavigate = () => {
        router.push("/contactus");
    };

    const leftColumnItems = faqData.filter(item => item.column === 'left');
    const rightColumnItems = faqData.filter(item => item.column === 'right');

    const handleToggle = (itemId) => {
        const isCurrentlyOpen = openItems[itemId];

        if (!isCurrentlyOpen) {
            // Close all other items in the same column
            const currentItem = faqData.find(item => item.id === itemId);
            const sameColumnItems = faqData.filter(item => item.column === currentItem.column);

            const newOpenItems = { ...openItems };
            sameColumnItems.forEach(item => {
                if (item.id !== itemId) {
                    newOpenItems[item.id] = false;
                }
            });
            newOpenItems[itemId] = true;
            setOpenItems(newOpenItems);

            // Smooth scroll to opened item
            setTimeout(() => {
                if (itemRefs.current[itemId]) {
                    itemRefs.current[itemId].scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }
            }, 50);
        } else {
            setOpenItems(prev => ({ ...prev, [itemId]: false }));
        }
    };

    const ChevronIcon = ({ isOpen }) => (
        <div className="relative w-5 h-5 rounded-full shrink-0">
            <div
                className={`absolute inset-0 transition-transform duration-300 ease-out ${isOpen ? '-rotate-90' : 'rotate-90'
                    }`}
                style={{
                    maskImage: 'radial-linear(circle at 50% 50%, black 62%, transparent 63%)',
                    WebkitMaskImage: 'radial-linear(circle at 50% 50%, black 62%, transparent 63%)',
                    background: 'conic-linear(from 45deg, transparent 0 25%, #0ea5e9 0 50%, transparent 0 100%)'
                }}
            />
        </div>
    );

    const FAQItem = ({ item }) => {
        const isOpen = openItems[item.id] || false;

        return (
            <div
                ref={el => itemRefs.current[item.id] = el}
                className="bg-white rounded-lg overflow-hidden"
                style={{ border: '1px solid #e2e8f0' }}
            >
                <button
                    className="w-full flex items-center justify-between gap-3 p-4 pl-5 cursor-pointer font-semibold text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset"
                    style={{
                        color: '#0f172a',
                        focusRingColor: '#0ea5e9'
                    }}
                    onClick={() => handleToggle(item.id)}
                    aria-expanded={isOpen}
                    onFocus={(e) => e.target.style.boxShadow = 'inset 0 0 0 2px #0ea5e9'}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                >
                    <span>{item.question}</span>
                    <ChevronIcon isOpen={isOpen} />
                </button>

                {isOpen && (
                    <div className="px-5 pb-4 leading-relaxed text-sm" style={{
                        color: '#475569',
                        borderTop: '1px solid #e2e8f0'
                    }}>
                        {item.answer}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div style={{ backgroundColor: '#f8fafc' }} className='mt-20 lg:mt-31'>

            {/* FAQs Hero */}
            <div className="text-center sm:py-10 md:py-16 px-4 sm:px-6">
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 text-emerald-700 mb-4 sm:mb-6 md:mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    FREQUENTLY ASKED QUESTIONS
                    <div className="ml-2 w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium font-serif mb-4 sm:mb-6 md:mb-8 leading-tight px-4">
                    <span className="text-cyan-500 block">FAQs</span>
                </h2>
                <p className="text-lg md:text-xl md:px-20 text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
                    From basic queries to important details, our FAQ section brings together the answers you're searching for — so you can make informed decisions with confidence.
                </p>
            </div>





            {/* FAQ Section */}
            <section className="py-8 sm:py-12 lg:py-16 px-4 max-w-6xl mx-auto" aria-labelledby="faqs-title">



                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
                    {/* Left Column */}
                    <div className="grid gap-3">
                        {leftColumnItems.map((item) => (
                            <FAQItem key={item.id} item={item} />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="grid gap-3">
                        {rightColumnItems.map((item) => (
                            <FAQItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div className="max-w-6xl mx-auto px-4 mb-8">
                <div className="min-h-52 flex flex-col md:flex-row justify-between items-center gap-4 rounded-xl p-5 md:p-6 mx-0 md:mx-14 shadow-xl" style={{
                    background: 'linear-linear(135deg, #1e40af, #0ea5e9, #f0abfc)',
                    boxShadow: '0 25px 50px rgba(30, 64, 175, 0.25)'
                }}>
                    <div className="w-full md:w-1/2 py-2">
                        <p className="font-bold tracking-wider uppercase text-sm mb-1" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                            We carry more than just good coding skills
                        </p>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mt-1">
                            Let's Build Your Website
                        </h1>
                    </div>
                    <div className="flex items-center justify-start md:justify-end w-full md:w-1/2">
                        <button
                            onClick={handleNavigate}
                            className="bg-white px-5 py-4 text-sm font-extrabold uppercase tracking-wide rounded-lg shadow-lg hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:shadow-lg transition-all duration-150 focus:outline-none focus:ring-3 focus:ring-offset-3 min-w-40 cursor-pointer"
                            style={{
                                color: '#0f172a',
                                focusRingColor: '#f0abfc'
                            }}
                            onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px #f0abfc'}
                            onBlur={(e) => e.target.style.boxShadow = 'none'}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
}
