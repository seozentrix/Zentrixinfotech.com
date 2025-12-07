"use client";

import { useState, useEffect, useRef } from 'react';

// export const metadata = {
//  title: "Why Choose Zentrix Infotech – Trusted IT & Marketing Partner",
//   description: "Discover why clients choose Zentrix Infotech for software development, digital marketing, reliability, innovation and business growth."
// };

export default function TimelineServices() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeIcons, setActiveIcons] = useState([]);
    const [visibleItems, setVisibleItems] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]);

    const timelineSectionRef = useRef(null);
    const timelineItemsRef = useRef([]);
    const serviceCardsRef = useRef([]);

    const timelineData = [
        {
            id: 0,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            title: "Exceptional Car & Rental Assessment",
            content: "Stay in full disclosure! will be transparent. We start to Build, create optimized, and marketing expert. This is about our commitment to establishing a foundation of trust and expertise for fulfilling relationships and efficient solutions that generate value in your business. Stay 24/7 with extreme transparency Moving forward.",
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761370322/why_choose_image_1_lxmfel.png'
        },
        {
            id: 1,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: "Security & Safety Promises",
            content: "Experience & Strong, Navigating Big Performance while as certified to both via Structured, Telephonic, and paperwork type. Audience give strong security level with expert in system development, website-responsive and CMS selling the client's specifications and addition to their project.",
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761370321/why_choose_image_2_sylpej.png'
        },
        {
            id: 2,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21l-3.5-3.5" />
                    <circle cx="20" cy="20" r="2" />
                </svg>
            ),
            title: "Expert Hosting & Asset Evaluation",
            content: "We provide reliable hosting and comprehensive digital asset evaluation for businesses of all sizes. Our expert team ensures your websites and applications are secure, fast, and optimized. From server management to cloud solutions, we deliver customized support and maintain your online presence with top-level performance and efficiency.",
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761370320/why_choose_image_3_pcj5e3.png'
        },
        {
            id: 3,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    <path d="M3 3v18h18" />
                    <path d="M19 9l-5 5-4-4-3 3" />
                </svg>
            ),
            title: "Strategic Development & Reporting",
            content: "Whether it involves project planning, technology integration, or clear performance insights, our approach is designed to deliver measurable results. We focus on creating comprehensive strategies that optimize digital solutions, enhance operational efficiency, and provide actionable reporting for sustainable growth and long-term business success.",
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761370318/why_choose_image_4_vrlxou.png'
        }
    ];

    const servicesData = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
            ),
            title: "Web Development",
            content: "Service Technologies specializes in front-end/user interface development including clean website, computer software, applications with HTML, CSS, ASPNET, PHP, MySQL, and web graphics and multimedia design growth.",
            linear: "from-blue-500 to-cyan-500"
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                </svg>
            ),
            title: "Mobile Development",
            content: "Service Technologies specializes in Front-end/mobile client Development including clean Website in Ionic, for core java one are ultra-fast to run native Environment along native functionality.",
            linear: "from-purple-500 to-pink-500"
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
            ),
            title: "UI/UX Design",
            content: "Service Technologies believes in design-oriented UI/UX designing. By doing so we can make sure our client's concepts as they are just implementing design and user-friendly UX as per their user audience and overall brand strength.",
            linear: "from-orange-500 to-red-500"
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
                    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
                </svg>
            ),
            title: "Digital Marketing & Performance",
            content: "Maximize your online impact with our comprehensive digital marketing strategies. We optimize your website, apps, and campaigns for peak performance, ensuring seamless user experiences, higher engagement, and measurable results across all digital platforms.",
            linear: "from-green-500 to-emerald-500"
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
            ),
            title: "Software Development Consultancy",
            content: "Our expert software development consultancy helps you design and implement technology solutions tailored to your business. From strategy and system architecture to team workflows, we deliver scalable, efficient, and future-ready software that drives growth and innovation.",
            linear: "from-indigo-500 to-purple-500"
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 11l-3-3m0 0l-3 3m3-3v8" />
                </svg>
            ),
            title: "Dedicated Team",
            content: "With specifically talented and experienced experts from multiple roles, we deliver a full range and great organized project team support from your project success.",
            linear: "from-cyan-500 to-blue-500"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;

            if (timelineSectionRef.current) {
                const sectionTop = timelineSectionRef.current.offsetTop;
                const sectionHeight = timelineSectionRef.current.offsetHeight;

                const sectionProgress = Math.max(0, Math.min(1,
                    (scrollTop + windowHeight * 0.5 - sectionTop) / sectionHeight
                ));

                setScrollProgress(sectionProgress);

                const newVisibleItems = [];
                const newActiveIcons = [];

                timelineItemsRef.current.forEach((item, index) => {
                    if (item) {
                        const itemTop = item.offsetTop + sectionTop;
                        const itemTrigger = itemTop - windowHeight * 0.7;

                        if (scrollTop > itemTrigger) {
                            newVisibleItems.push(index);

                            if (scrollTop > itemTop - windowHeight * 0.5) {
                                for (let i = 0; i <= index; i++) {
                                    if (!newActiveIcons.includes(i)) {
                                        newActiveIcons.push(i);
                                    }
                                }
                            }
                        }
                    }
                });

                setVisibleItems(newVisibleItems);
                setActiveIcons(newActiveIcons);
            }

            const newVisibleCards = [];
            serviceCardsRef.current.forEach((card, index) => {
                if (card) {
                    const cardTop = card.offsetTop;
                    const cardTrigger = cardTop - windowHeight * 0.8;

                    if (scrollTop > cardTrigger) {
                        setTimeout(() => {
                            newVisibleCards.push(index);
                            setVisibleCards(prev => [...new Set([...prev, index])]);
                        }, index * 100);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='bg-linear-to-br from-slate-50 via-gray-50 to-white pt-32'>
            {/* Hero Section - Responsive */}
            <div className="text-center sm:py-10 md:py-16 px-4 sm:px-6">
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium bg-linear-to-r from-emerald-50 to-blue-50 border border-emerald-200 text-teal-400 mb-4 sm:mb-6 md:mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    WHY CHOOSE US
                    <div className="ml-2 w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium font-serif mb-4 sm:mb-6 md:mb-8 leading-tight px-4">
                    <span className="text-slate-900 block">Excellence that sets us</span>
                    <span className="block bg-linear-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mt-2 relative">
                        apart from the rest
                        <div className="hidden sm:block absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-linear-to-r from-emerald-400 to-blue-500 rounded-full animate-bounce opacity-40 blur-sm" />
                    </span>
                </h2>
                <p className="text-lg md:text-xl md:px-20 text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
                    Our commitment goes beyond work — we focus on building relationships, solving problems, and adding real value through innovative solutions that drive your business forward.
                </p>
            </div>

            {/* Services Section - Responsive */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                        <h2 className="text-5xl md:text-6xl mb-2 sm:mb-3 font-medium font-serif tracking-tight bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                            OUR SERVICES
                        </h2>
                        <p className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-lg tracking-wider uppercase mb-2">
                            We Offer a Wide Variety of IT Services
                        </p>
                    </div>

                    {/* Services Grid - Responsive & Modern */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {servicesData.map((service, index) => (
                            <div
                                key={index}
                                ref={el => serviceCardsRef.current[index] = el}
                                className={`group bg-white p-6 sm:p-7 md:p-8 cursor-pointer hover rounded-2xl text-center shadow-sm hover:shadow-2xl transition-all duration-500 ease-out border-2 border-gray-200 relative overflow-hidden ${visibleCards.includes(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                    }`}
                                style={{
                                    '--hover-linear': service.linear
                                }}
                                onMouseEnter={(e) => {
                                    // Apply linear border on hover
                                    const linears = {
                                        'from-blue-500 to-cyan-500': 'linear-linear(to bottom right, #3b82f6, #06b6d4)',
                                        'from-purple-500 to-pink-500': 'linear-linear(to bottom right, #a855f7, #ec4899)',
                                        'from-orange-500 to-red-500': 'linear-linear(to bottom right, #f97316, #ef4444)',
                                        'from-green-500 to-emerald-500': 'linear-linear(to bottom right, #22c55e, #10b981)',
                                        'from-indigo-500 to-purple-500': 'linear-linear(to bottom right, #6366f1, #a855f7)',
                                        'from-cyan-500 to-blue-500': 'linear-linear(to bottom right, #06b6d4, #3b82f6)'
                                    };
                                    e.currentTarget.style.borderImage = linears[service.linear];
                                    e.currentTarget.style.borderImageSlice = '1';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderImage = 'none';
                                    e.currentTarget.style.borderImageSlice = '0';
                                }}
                            >
                                {/* Service Icon */}
                                <div className="relative z-10">
                                    <div
                                        className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 bg-linear-to-br ${service.linear}`}
                                    >
                                        {service.icon}
                                    </div>

                                    {/* Service Title */}
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    {/* Service Content */}
                                    <p className="leading-relaxed text-xs sm:text-sm md:text-base text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                                        {service.content}
                                    </p>

                                    {/* Decorative Element */}
                                    <div className={`mt-4 sm:mt-5 md:mt-6 w-12 h-1 mx-auto rounded-full bg-linear-to-r ${service.linear} opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100`}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
}
