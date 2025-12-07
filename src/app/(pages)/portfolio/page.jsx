"use client";

import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';

// export const metadata = {title: "Our Portfolio – Zentrix Infotech Projects",description: "Explore our portfolio showcasing successful software, web, mobile and digital marketing projects."};


const portfolio = () => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push("/portfolio");
    }

    const [visibleItems, setVisibleItems] = useState(new Set());
    const [isClient, setIsClient] = useState(false);
    const observerRef = useRef(null);

    const projects = [
        {
            id: 1,
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764833084/www.thebuyzaarmart.com__Nest_Hub_Max_2_-min_paneko.png',
            title: 'The Buyzaar Mart',
            category: 'E-commerce & Retail Platform',
            description: 'A modern retail franchise brand empowering entrepreneurs with a comprehensive online shopping destination. Features multi-category marketplace with seamless ordering, delivery management, and franchise operations.',
            link: 'https://www.thebuyzaarmart.com/',
            color: '#e94e1b'   // (vibrant orange/red to reflect shopping, energy, retail excitement)
        },
        {
            id: 2,
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764834884/www.psdecor.in_-min_pvdtes.png',
            title: 'PS Decor - Luxury Wedding & Event Designers',
            category: 'Wedding & Event Management Platform',
            description: 'An award-winning ISO 9001:2015 certified wedding décor and event planning platform specializing in luxury celebrations, destination weddings, and corporate events across India with bespoke design experiences.',
            link: 'https://www.psdecor.in/',
            color: '#d4af37' // (gold/champagne to reflect luxury, elegance, and celebration)
        },
        {
            id: 3,
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764762213/www.vasterior.com__Nest_Hub_Max_-min_j0vfbc.png',
            title: 'Vasterior – Luxury Interior & Vastu Design',
            category: 'Interior Design & Spatial Consulting',
            description: 'An award-driven interior studio offering bespoke residential & commercial solutions, blending elegance, function, and Vastu principles for harmonious living. ',
            link: 'https://www.vasterior.com/',
            color: '#6b4f9a'  // a sophisticated muted purple to convey luxury + creativity

        },
        {
            id: 4,
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764749292/alluring-glimpses-iota.vercel.app__Nest_Hub_Max_-min_vwnvln.png',
            title: 'Alluring Glimpses – Spatial & Interior Design',
            category: 'Interior Design & Visual Storytelling',
            description: 'Crafting elegant and timeless interiors that transform spaces into immersive experiences—merging form, texture, and atmosphere seamlessly.',
            link: 'https://alluring-glimpses-iota.vercel.app/',
            color: '#a17ca1'  // soft mauve / muted lavender to evoke creativity and sophistication
        },
        {
            id: 5,
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764749287/jigyasahospital.com_-min_frvs9d.png',
            title: 'Jigyasa Hospital, Moradabad',
            category: 'Healthcare & Wellness',
            description: 'A full-service hospital offering 24/7 emergency care, specialist consultations, and modern diagnostics to serve the Moradabad community. :contentReference[oaicite:0]{index=0}',
            link: 'https://jigyasahospital.com/',
            color: '#008080'  // teal — evokes health, calm, reliability
        },
        {
            id: 6,
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764660008/herbsfox.com__Nest_Hub_Max_bdj25p.png',
            title: 'HerbsFox – Organic Herbs & Spices Marketplace',
            category: 'E-Commerce / Natural Wellness',
            description: 'An online platform offering 100% raw, pure herbs, spices, seeds, and holistic wellness products sourced sustainably from trusted farms. :contentReference[oaicite:0]{index=0}',
            link: 'https://herbsfox.com/',
            color: '#2e7d32'  // a rich, earthy green to reflect wellness, nature, organic
        },

        {
            id: 7,
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764659997/kdedu.org__xfnieg.png',
            title: 'Kamla Devi Group of Institutions – KDEDU',
            category: 'Education & Training Platform',
            description: 'A comprehensive educational institution offering quality learning from Kindergarten to Degree level, specializing in technical education, pharmacy, and holistic student development with emphasis on research, innovation, and leadership skills.',
            link: 'https://kdedu.org/',
            color: '#1e5aa8' // (professional blue to reflect trust, education, stability)
        },
{
            id: 8,
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764836429/www.imamoradabad.com__Nest_Hub_Max_-min_lszssv.png',
            title: 'IMA Moradabad - Indian Medical Association',
            category: 'Medical Association & Community Platform',
            description: 'The official platform for Indian Medical Association, Moradabad branch - connecting doctors, organizing medical conferences, CME programs, health awareness campaigns, and fostering professional collaboration among medical practitioners in the region.',
            link: 'https://www.imamoradabad.com/',
            color: '#d32f2f' // (medical red to reflect IMA brand, healthcare, urgency)
        },

        {
            id: 9,
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764659999/www.intirioworld.in__k95xrg.png',
            title: 'Intirio World – Premium Home Décor Solutions',
            category: 'Interior Design & Home Improvement Platform',
            description: 'A comprehensive online platform offering high-quality decorative home improvement products including custom wallpapers, PVC panels, aluminum windows, vinyl flooring, artificial grass, LED mirrors, and vertical gardens for modern living spaces.',
            link: 'https://www.intirioworld.in/',
            color: '#6b4423' // (warm brown to reflect interior design, wood, sophistication)
        },
        

        {
            id: 10,
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764836261/www.selecthospitalmbd.com__Nest_Hub_Max_2_-min_xnmgmj.png',
            title: 'Select Hospital - Advanced Healthcare Solutions',
            category: 'Healthcare & Medical Services Platform',
            description: 'A leading multi-specialty hospital in Moradabad delivering comprehensive medical care with modern infrastructure, experienced doctors, advanced diagnostic facilities, and patient-centered treatment across multiple specialties with 24/7 emergency services.',
            link: 'https://www.selecthospitalmbd.com/',
            color: '#0a7e8c' // (medical teal-blue to reflect healthcare, professionalism, trust)
        },


        {
            id: 11,
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764659998/asquaremarketing.in__bkpfzs.png',
            title: 'A Square Marketing - Digital Growth Partners',
            category: 'Digital Marketing & Branding Platform',
            description: 'A full-service digital marketing agency offering SEO, social media marketing, content creation, PPC advertising, branding, and web development. Helping businesses grow their online presence with data-driven strategies and creative campaigns.',
            link: 'https://asquaremarketing.in/',
            color: '#ff6b35' // (energetic orange to reflect marketing, creativity, growth)
        },

        {
            id: 12,
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764836736/kairvifortresort.com__Nest_Hub_Max_2_-min_vvy3tx.png',
            title: 'Kairvi Fort Resort - Regal Wedding Estate',
            category: 'Hospitality & Event Venue Platform',
            description: 'A magnificent 15,000 sq.m. wedding resort in Moradabad featuring opulent banquet halls (10,000 sq.ft.), lush gardens (35,000 sq.ft.), and regal architecture. Perfect destination for grand celebrations, weddings, and events combining luxury with natural splendor.',
            link: 'https://kairvifortresort.com/',
            color: '#8b6914' // (royal gold to reflect luxury, elegance, regal ambiance)
        },

         {
            id: 13,
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764836208/selecthandicrafts.org__Nest_Hub_Max_-min_awvquk.png',
            title: 'Select Handicrafts – Authentic Indian Handcrafted Collection',
            category: 'Handicrafts & Export Platform',
            description: 'An export-focused handicrafts brand showcasing authentic Indian metalware, home décor, gift items, and lifestyle products handcrafted by skilled artisans from Moradabad and beyond, connecting traditional craftsmanship with global buyers.',
            link: 'https://selecthandicrafts.org/',
            color: '#8b5a2b' // warm bronze/brown to reflect brass, handicrafts, tradition
        },

        {
            id: 14,
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764836628/grillifoods.vercel.app__Nest_Hub_Max_1_-min_nxrwjf.png',
            title: 'Grilli Foods - Fresh Grilled Delights',
            category: 'Food & Restaurant Platform',
            description: 'A modern food delivery and restaurant platform specializing in grilled cuisine, featuring flame-grilled meats, kebabs, BBQ specialties, and healthy grilled options with online ordering, menu browsing, and seamless delivery services.',
            link: 'https://grillifoods.vercel.app/',
            color: '#ff6b35' // (warm orange-red to reflect grilling, fire, appetite)
        },
        {
            id: 15,
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764659999/deal360.in__Nest_Hub_Max_in9war.png',
            title: 'Deal360 - Smart Electronics & Appliances Hub',
            category: 'E-Commerce & Electronics Platform',
            description: 'A dynamic online marketplace offering curated deals on electronics, home appliances, and smart gadgets with real-time pricing, flash sales, and instant comparison tools for tech-savvy shoppers across India.',
            link: 'https://deal360.in/',
            color: '#ff6b35' // (vibrant orange to reflect deals, energy, shopping excitement)
        },

        {
            id: 16,
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764749289/prem-singh-swatantrta-senani-inter-college.vercel.app_-min_vhglhw.png',
            title: 'PSSIC',
            category: 'Education & Institutional Website',
            description: 'A prestigious inter college in Dhampur committed to quality education and holistic student development. Named in honor of freedom fighter Prem Singh, fostering academic excellence, values-based learning, and leadership skills since its establishment.',
            link: 'https://prem-singh-swatantrta-senani-inter-college.vercel.app/',
            color: '#1a5490' // (royal blue to reflect education, patriotism, trust, stability)
        },

    ];

    // Set client-side rendering flag
    useEffect(() => {
        setIsClient(true);
        const initialVisible = new Set(projects.map(p => p.id.toString()));
        setVisibleItems(initialVisible);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '100px 0px'
        };

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const id = entry.target.dataset.id;
                if (id) {
                    if (entry.isIntersecting) {
                        setVisibleItems(prev => new Set([...prev, id]));
                    }
                }
            });
        }, observerOptions);

        const timer = setTimeout(() => {
            const items = document.querySelectorAll('[data-portfolio-item]');
            items.forEach(item => {
                if (observerRef.current) {
                    observerRef.current.observe(item);
                }
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [isClient]);

    const ProjectCard = ({ project, index }) => {
        const [imageLoaded, setImageLoaded] = useState(false);
        const [isHovered, setIsHovered] = useState(false);
        const [imageError, setImageError] = useState(false);
        const isVisible = visibleItems.has(project.id.toString());

        return (
            <div
                data-id={project.id}
                data-portfolio-item
                className={`group relative cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ease-out transform border border-gray-100 hover:border-gray-200 ${isVisible && isClient
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-100 translate-y-0'
                    }`}
                style={{
                    transitionDelay: isClient ? `${index * 150}ms` : '0ms',
                    minHeight: '350px',
                    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Image Container with Responsive Height */}
                <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-64 overflow-hidden bg-gray-100">
                    {/* Loading Skeleton */}
                    {!imageLoaded && !imageError && (
                        <div className="absolute inset-0 animate-pulse bg-linear-to-r from-gray-200 via-gray-300 to-gray-200">
                            <div
                                className="w-full h-full animate-pulse"
                                style={{
                                    background: `linear-linear(90deg, transparent, ${project.color}20, transparent)`
                                }}
                            ></div>
                        </div>
                    )}

                    {/* Error State */}
                    {imageError && (
                        <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ backgroundColor: `${project.color}10` }}
                        >
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl mb-2" style={{ color: project.color }}>📱</div>
                                <p className="text-xs sm:text-sm text-gray-600">Preview unavailable</p>
                            </div>
                        </div>
                    )}

                    {/* Scrolling Image */}
                    {!imageError && (
                        <div className="w-full h-full overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className={`w-full h-auto min-h-full object-cover object-top transition-all duration-[3000ms] ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'
                                    } ${isHovered ? 'transform translate-y-[calc(-100%+12rem)] sm:translate-y-[calc(-100%+13rem)] md:translate-y-[calc(-100%+14rem)] lg:translate-y-[calc(-100%+16rem)]' : 'transform translate-y-0'
                                    }`}
                                style={{ minHeight: '300px' }}
                                onLoad={() => setImageLoaded(true)}
                                onError={() => setImageError(true)}
                                loading="lazy"
                            />
                        </div>
                    )}

                    {/* Hover Overlay */}
                    <div
                        className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{
                            background: `linear-linear(to top, ${project.color}70, transparent, transparent)`
                        }}
                    />

                    {/* Category Badge */}
                    <div
                        className={`absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-white transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                            }`}
                        style={{ backgroundColor: project.color }}
                    >
                        {project.category}
                    </div>

                    {/* View Project Button */}
                    <div className={`absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                        }`}>
                        <button
                            className="w-7 h-7 sm:w-8 sm:h-8 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-200"
                            onClick={handleNavigate}
                            style={{ backgroundColor: `${project.color}90` }}
                        >
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content Section with Responsive Padding */}
                <div className="p-4 sm:p-5 md:p-6 h-32 sm:h-36 flex flex-col justify-between">
                    <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 transition-colors duration-300 line-clamp-1 group-hover:text-gray-800">
                            {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Bottom Hover Effect */}
                <div
                    className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ backgroundColor: project.color }}
                />
            </div>
        );
    };

    return (
        <>
            {/* Hero Section - Responsive */}
            <div className="text-center sm:py-10 md:py-16 px-4 sm:px-6 mt-32 ">
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium bg-linear-to-r from-emerald-50 to-blue-50 border border-emerald-200 text-teal-400 mb-4 sm:mb-6 md:mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                    OUR PORTFOLIO
                    <div className="ml-2 w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium font-serif mb-4 sm:mb-6 md:mb-8 leading-tight px-4">
                    <span className="text-slate-900 block">Showcasing our best</span>
                    <span className="block bg-linear-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mt-2 relative">
                        creative work
                        <div className="hidden sm:block absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-linear-to-r from-emerald-400 to-blue-500 rounded-full animate-bounce opacity-40 blur-sm" />
                    </span>
                </h2>
                <p className="text-lg md:text-xl md:px-20 text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
                    Explore our collection of successful projects and digital solutions. Each portfolio piece represents our commitment to excellence, innovation, and delivering results that exceed expectations.
                </p>
            </div>


            <section className="bg-white py-10 sm:py-12 md:py-15 px-4 sm:px-6 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-linear-to-br from-[#f0ca4d]/10 to-[#f56a6a]/10 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-linear-to-br from-[#3c4cad]/10 to-[#f04393]/10 rounded-full blur-3xl opacity-60"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header Section - Responsive */}
                    {/* <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-3 sm:mb-4 px-4">
                            OUR{' '}
                            <span className="bg-linear-to-r from-[#f56a6a] via-[#f04393] to-[#3d1b88] bg-clip-text text-transparent">
                                portfolio
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                            Explore our latest projects showcasing cutting-edge solutions across various industries
                        </p>
                        <div className="mt-6 sm:mt-8 w-16 sm:w-20 md:w-24 h-1 bg-linear-to-r from-[#f56a6a] via-[#f04393] to-[#3d1b88] mx-auto rounded-full"></div>
                    </div> */}

                    {/* Projects Grid - Responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Decorative elements */}
                    <div className="flex justify-center mb-6 sm:mb-8">
                        <div className="flex space-x-1.5 sm:space-x-2">
                            {['#f56a6a', '#3c4cad', '#f04393', '#3d1b88', '#f0ca4d'].map((color, index) => (
                                <div
                                    key={index}
                                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse"
                                    style={{ backgroundColor: color, animationDelay: `${index * 200}ms` }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                <style jsx global>{`
                    .line-clamp-1 {
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                    .line-clamp-2 {
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                    .line-clamp-3 {
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                `}</style>
            </section>
        </>
    );
};

export default portfolio;
