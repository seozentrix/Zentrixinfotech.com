"use client";

import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';

const Portfolios = () => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push("/portfolios");
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
            image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1764659997/kdedu.org__xfnieg.png',
            title: 'Kamla Devi Group of Institutions – KDEDU',
            category: 'Education & Training Platform',
            description: 'A comprehensive educational institution offering quality learning from Kindergarten to Degree level, specializing in technical education, pharmacy, and holistic student development with emphasis on research, innovation, and leadership skills.',
            link: 'https://kdedu.org/',
            color: '#1e5aa8' // (professional blue to reflect trust, education, stability)
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
                className={`group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ease-out transform border border-gray-100 hover:border-gray-200 ${isVisible && isClient
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-100 translate-y-0'
                    }`}
                style={{
                    transitionDelay: isClient ? `${index * 150}ms` : '0ms',
                    minHeight: '400px',
                    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Image Container with Fixed Height */}
                <div className="relative w-full h-64 overflow-hidden bg-gray-100">
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
                                <div className="text-3xl mb-2" style={{ color: project.color }}>📱</div>
                                <p className="text-sm text-gray-600">Preview unavailable</p>
                            </div>
                        </div>
                    )}

                    {/* Scrolling Image */}
                    {!imageError && (
                        <div className="w-full h-full overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className={`w-full h-auto min-h-full object-cover object-top transition-all duration-5000 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'
                                    } ${isHovered ? 'transform translate-y-[calc(-100%+16rem)]' : 'transform translate-y-0'
                                    }`}
                                style={{ minHeight: '400px' }}
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
                        className={`absolute top-4 left-4 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                            }`}
                        style={{ backgroundColor: project.color }}
                    >
                        {project.category}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 h-36 flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 line-clamp-1 group-hover:text-gray-800">
                            {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
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
        <section className="bg-white py-16 px-6 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-[#f0ca4d]/10 to-[#f56a6a]/10 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-br from-[#3c4cad]/10 to-[#f04393]/10 rounded-full blur-3xl opacity-60"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">

                    <h2 className="text-4xl  md:text-5xl lg:text-6xl font-medium font-serif text-slate-900 mb-4 lg:mb-6 tracking-tight px-4">
                        Our{' '}
                        <span className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif mb-4 lg:mb-6 tracking-tight">
                            Portfolios
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Explore our latest projects showcasing cutting-edge solutions across various industries
                    </p>
                    <div className="mt-8 w-24 h-1 bg-linear-to-r from-[#f56a6a] via-[#f04393] to-[#3d1b88] mx-auto rounded-full"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* Decorative elements */}
                <div className="flex justify-center mb-8">
                    <div className="flex space-x-2">
                        {['#f56a6a', '#3c4cad', '#f04393', '#3d1b88', '#f0ca4d'].map((color, index) => (
                            <div
                                key={index}
                                className="w-2 h-2 rounded-full animate-pulse"
                                style={{ backgroundColor: color, animationDelay: `${index * 200}ms` }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <button
                        className="inline-flex items-center bg-linear-to-r from-[#3dd5c5] via-[#2dd4bf] to-[#14b8a6]  text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white/20 backdrop-blur-sm group relative overflow-hidden"
                        onClick={handleNavigate}
                    >
                        {/* Button background animation */}
                        <div className="absolute inset-0 bg-linear-to-r from-[#f0ca4d] to-[#f56a6a] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                        <span className="relative z-10">View All Portfolio</span>
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
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
    );
};

export default Portfolios;
