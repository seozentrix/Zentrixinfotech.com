"use client";

import React, { useState, useEffect } from 'react';
import { Globe, Palette, Code, Database, Headphones, Zap, ShoppingCart, Package, Settings } from 'lucide-react';
import Banner from '@/components/Banner';

const Hero = () => {
    return (
        <>
            <div className="bg-white relative overflow-hidden lg:mt-32 mt-21">
                {/* Decorative circles - Using same palette */}
                <div className="absolute w-48 h-48 rounded-full -top-12 -left-24 animate-pulse" style={{ backgroundColor: '#1AA687', opacity: 0.1 }}></div>
                <div className="absolute w-32 h-32 rounded-full top-1/2 -left-16" style={{ backgroundColor: '#FF414D', opacity: 0.1 }}></div>
                <div className="absolute w-40 h-40 rounded-full -bottom-20 -right-20 animate-pulse" style={{ backgroundColor: '#002D40', opacity: 0.1 }}></div>

                <div className="max-w-7xl mx-auto px-8 pt-16 flex items-center">
                    <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="inline-block">
                                <span className="px-4 py-2 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#1AA687' }}>
                                    Adobe Commerce Platform
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif uppercase leading-tight" style={{ color: '#002D40' }}>
                                Build Enterprise<br />
                                <span style={{ color: '#FF414D' }}>Open-Source</span><br />
                                Magento Stores!
                            </h1>

                            <p className="text-lg leading-relaxed max-w-lg" style={{ color: '#002D40', opacity: 0.8 }}>
                                Create sophisticated e-commerce solutions with Magento's enterprise-grade platform.
                                Leverage advanced catalog management, multi-store capabilities, B2B functionality, and robust customization options
                                to build scalable online stores that handle complex business requirements and high-volume transactions.
                            </p>

                        </div>

                        {/* Right Content - Company Grid */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="grid grid-cols-3 gap-4 max-w-md">

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(0, 45, 64, 0.05)', borderColor: '#002D40', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#002D40' }}>Nike</span>
                                </div>

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(255, 65, 77, 0.05)', borderColor: '#FF414D', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#FF414D' }}>Ford</span>
                                </div>

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(26, 166, 135, 0.05)', borderColor: '#1AA687', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#1AA687' }}>Coca-Cola</span>
                                </div>

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(255, 106, 121, 0.05)', borderColor: '#FF6A79', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#FF6A79' }}>Samsung</span>
                                </div>

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(217, 248, 255, 0.3)', borderColor: '#D9FCF2', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#1AA687' }}>Liverpool FC</span>
                                </div>

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(0, 45, 64, 0.05)', borderColor: '#002D40', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#002D40' }}>Helly Hansen</span>
                                </div>

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(255, 65, 77, 0.05)', borderColor: '#FF414D', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#FF414D' }}>Olympus</span>
                                </div>

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(26, 166, 135, 0.05)', borderColor: '#1AA687', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#1AA687' }}>Venia</span>
                                </div>

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(255, 106, 121, 0.05)', borderColor: '#FF6A79', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#FF6A79' }}>Bulk Reef</span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

const Services = () => {
    const [activeService, setActiveService] = useState(1);
    const [animatedCards, setAnimatedCards] = useState(new Set());

    const services = [
        {
            id: 0,
            icon: <Database className="w-8 h-8" />,
            title: "Catalog Management",
            description: "Manage unlimited products with flexible product types, advanced pricing options, and comprehensive inventory tracking."
        },
        {
            id: 1,
            icon: <Settings className="w-8 h-8" />,
            title: "Multi-Store Architecture",
            description: "Build and manage multiple stores from a single admin panel. Support multi-language, multi-currency operations with shared customer databases and centralized inventory management for global e-commerce scalability.",
            isActive: true
        },
        {
            id: 2,
            icon: <Package className="w-8 h-8" />,
            title: "Order Management",
            description: "Streamline order processing with comprehensive workflow systems, automated notifications, and flexible fulfillment options."
        },
        {
            id: 3,
            icon: <Zap className="w-8 h-8" />,
            title: "B2B Functionality",
            description: "Enable B2B commerce with company accounts, custom catalogs, quote management, and advanced pricing structures."
        }
    ];

    // Staggered animation effect
    useEffect(() => {
        services.forEach((service, index) => {
            const timer = setTimeout(() => {
                setAnimatedCards(prev => new Set([...prev, service.id]));
            }, index * 300);

            return () => clearTimeout(timer);
        });
    }, []);

    return (
        <>
            <div className="bg-white min-h-screen relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full -top-16 -left-16 md:-top-32 md:-left-32 opacity-60" style={{ backgroundColor: '#D9FCF2' }}></div>
                <div className="absolute w-16 h-16 md:w-32 md:h-32 rounded-full top-10 right-10 md:top-20 md:right-20 opacity-80" style={{ backgroundColor: '#1AA687' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

                        {/* Left Content */}
                        <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                            <div className="space-y-4 md:space-y-6">
                                <span className="font-medium text-base md:text-lg" style={{ color: '#1AA687' }}>
                                    Platform Capabilities
                                </span>

                                <h2 className="text-4xl lg:text-5xl font-semibold uppercase leading-tight" style={{ color: '#002D40' }}>
                                    Magento<br />
                                    <span className='text-[#FF414D]'>Development</span>
                                </h2>

                                <p className="text-base md:text-lg leading-relaxed max-w-md" style={{ color: '#002D40', opacity: 0.8 }}>
                                    Build enterprise-level e-commerce solutions with Magento's robust open-source platform.
                                    Create scalable, customizable online stores with advanced features for complex business requirements.
                                </p>
                            </div>

                            {/* Navigation dots */}
                            <div className="flex space-x-3">
                                {services.map((service, index) => (
                                    <button
                                        key={service.id}
                                        onClick={() => setActiveService(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300`}
                                        style={{
                                            backgroundColor: activeService === index ? '#1AA687' : '#E5E7EB'
                                        }}
                                    />
                                ))}
                            </div>

                            <button
                                className="px-6 py-2.5 md:px-8 md:py-3 rounded-full font-semibold transition-all duration-300 text-white hover:opacity-90 text-sm md:text-base"
                                style={{ backgroundColor: '#1AA687' }}
                            >
                                Magneto
                            </button>
                        </div>

                        {/* Right Content - Service Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 order-1 lg:order-2">
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className={`rounded-2xl p-6 md:p-8 transition-all duration-500 cursor-pointer transform ${animatedCards.has(service.id)
                                        ? 'scale-100 opacity-100'
                                        : 'scale-75 opacity-0'
                                        } ${activeService === index
                                            ? 'bg-white shadow-2xl scale-105'
                                            : 'bg-gray-50 shadow-md hover:shadow-lg'
                                        }`}
                                    onClick={() => setActiveService(index)}
                                    style={{
                                        animationDelay: `${index * 0.3}s`,
                                        animationFillMode: 'forwards',
                                        borderColor: activeService === index ? '#FF6A79' : '#E5E7EB',
                                        borderWidth: '1px',
                                        borderStyle: 'solid'
                                    }}
                                >
                                    <div
                                        className="inline-flex p-3 md:p-4 rounded-2xl mb-4 md:mb-6"
                                        style={{
                                            backgroundColor: activeService === index ? '#FF6A79' : 'rgba(26, 166, 135, 0.1)'
                                        }}
                                    >
                                        <div style={{ color: activeService === index ? '#FFFFFF' : '#1AA687' }}>
                                            {service.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4" style={{ color: '#002D40' }}>
                                        {service.title}
                                    </h3>

                                    <p className={`leading-relaxed text-sm ${activeService === index ? 'line-clamp-none' : 'line-clamp-3'}`} style={{ color: '#002D40', opacity: 0.8 }}>
                                        {service.description}
                                    </p>

                                    {activeService === index && (
                                        <div className="mt-4 md:mt-6">
                                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#FF414D' }}></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>


            {/* CSS Animation Keyframes */}
            <style jsx>{`
                @keyframes cardScale {
                    0% {
                        transform: scale(0.75);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                
                .animate-card-scale {
                    animation: cardScale 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                }
            `}</style>
        </>
    );
};

const ServiceCard = ({ image, icon: Icon, title, description, index }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, index * 150);

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div
            className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform ${isVisible
                ? 'scale-100 opacity-100 translate-y-0'
                : 'scale-90 opacity-0 translate-y-4'
                } hover:-translate-y-2`}
            style={{
                transitionDelay: `${index * 0.15}s`
            }}
        >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0" style={{ background: `linear-gradient(45deg, #FF414D, #1AA687)` }}>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 "></div>
                </div>

                {/* Logo Badge */}
                <div className="absolute bottom-4 left-4 rounded-lg p-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#002D40' }}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
                <div>
                    <h3 className="text-xl font-bold mb-2 transition-colors" style={{ color: '#002D40' }}>
                        {title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#002D40', opacity: 0.8 }}>
                        {description}
                    </p>
                </div>

                {/* Read More Link */}

            </div>
        </div>
    );
};

const MagentoServicesGrid = () => {
    const services = [
        {
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Globe,
            title: "Magento Store Development",
            description: "Build enterprise-level e-commerce stores with custom themes, advanced functionality, and scalable architecture"
        },
        {
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Settings,
            title: "Adobe Commerce Solutions",
            description: "Implement Adobe Commerce (Magento Enterprise) with advanced B2B features, cloud hosting, and premium support"
        },
        {
            image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Palette,
            title: "Custom Extension Development",
            description: "Create custom Magento extensions and modules to extend platform functionality for specific business needs"
        },
        {
            image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Code,
            title: "Magento Theme Development",
            description: "Design responsive, performance-optimized themes with advanced customization and modern UI/UX principles"
        },
        {
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Database,
            title: "Magento Migration Services",
            description: "Migrate from Magento 1.x to Magento 2.x or from other platforms with data preservation and feature enhancement"
        },
        {
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Package,
            title: "Multi-Store Setup",
            description: "Configure complex multi-store, multi-language, and multi-currency e-commerce environments for global businesses"
        },
        {
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: ShoppingCart,
            title: "B2B Commerce Development",
            description: "Implement advanced B2B features including company accounts, custom catalogs, quote systems, and bulk ordering"
        },
        {
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Headphones,
            title: "Magento Support & Maintenance",
            description: "Comprehensive Magento support including security updates, performance optimization, and ongoing technical maintenance"
        }
    ];

    return (
        <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif uppercase  mb-4" style={{ color: '#002D40' }}>
                        Magento <span className='text-[#FF414D]'>Development</span> Services
                    </h1>
                    <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#1AA687' }}></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            image={service.image}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

const HiringModel = () => {
    const colors = {
        darkNavy: '#002D40',
        brightRed: '#FF414D',
        tealGreen: '#1AA687',
        lightPink: '#FF6A79',
        lightBlue: '#D9FCF2'
    };

    const [hoveredCard, setHoveredCard] = useState(null);

    const hiringModels = [
        {
            icon: "👤",
            title: "Hourly Model",
            features: [
                "Flexible Magento development",
                "Pay per hour basis",
                "Enterprise e-commerce experts",
                "24/7 technical support"
            ],
            buttonText: "HIRE MAGENTO DEVELOPER",
            gradientFrom: colors.darkNavy,
            gradientTo: colors.tealGreen
        },
        {
            icon: "👥",
            title: "Enterprise Model",
            features: [
                "Dedicated Magento team",
                "Adobe Commerce expertise",
                "60% cost reduction",
                "Enterprise-grade solutions"
            ],
            buttonText: "HIRE MAGENTO TEAM",
            gradientFrom: colors.brightRed,
            gradientTo: colors.lightPink
        },
        {
            icon: "⭐",
            title: "Staff Augmentation Model",
            features: [
                "Magento specialists",
                "Flexible engagement",
                "Long-term partnerships",
                "48-hour trial period"
            ],
            buttonText: "AUGMENT TEAM",
            gradientFrom: colors.tealGreen,
            gradientTo: colors.darkNavy
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto max-w-6xl px-5">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: colors.tealGreen }}>
                        Select from Zentrix's Magento Hiring Models
                    </h2>
                    <p
                        className="text-lg leading-relaxed mx-auto max-w-4xl px-8"
                        style={{ color: colors.darkNavy }}
                    >
                        Scale your Magento development with our flexible engagement models designed for enterprise e-commerce solutions and complex business requirements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {hiringModels.map((model, index) => (
                        <div
                            key={index}
                            className="bg-white border-2 border-gray-200 rounded-2xl p-10 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
                            style={{
                                borderColor: hoveredCard === `hiring-${index}` ? model.gradientFrom : '#e5e7eb'
                            }}
                            onMouseEnter={() => setHoveredCard(`hiring-${index}`)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div
                                className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300"
                                style={{ color: model.gradientFrom }}
                            >
                                {model.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-6" style={{ color: colors.darkNavy }}>
                                {model.title}
                            </h3>

                            <ul className="space-y-3 mb-8 text-left">
                                {model.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center" style={{ color: colors.darkNavy }}>
                                        <span className="font-bold mr-3" style={{ color: colors.tealGreen }}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="text-white px-8 py-3 rounded-full font-semibold hover:-translate-y-1 transition-all duration-300"
                                style={{
                                    background: `linear-gradient(45deg, ${model.gradientFrom}, ${model.gradientTo})`,
                                    boxShadow: `0 4px 15px ${model.gradientFrom}30`
                                }}
                            >
                                {model.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const Magento_Page = () => {
    return (
        <>
            <Hero />
            <Services />
            <MagentoServicesGrid />
            <Banner />
            {/* <HiringModel /> */}
        </>
    );
}

export default Magento_Page;
