"use client";

import React, { useState, useEffect } from 'react';
import { Gamepad2, Globe, Smartphone, Palette, Code, Database, Tablet, Headphones, Component, Layers, Zap } from 'lucide-react';
import Banner from '@/components/Banner';

const Hero = () => {
    return (
        <>
            <div className="bg-white relative overflow-hidden lg:mt-32 mt-21">
                {/* Decorative circles - Updated with new palette */}
                <div className="absolute w-48 h-48 rounded-full -top-12 -left-24 animate-pulse" style={{ backgroundColor: '#D9FCF2', opacity: 0.6 }}></div>
                <div className="absolute w-32 h-32 rounded-full top-1/2 -left-16" style={{ backgroundColor: '#FF6A79', opacity: 0.3 }}></div>
                <div className="absolute w-40 h-40 rounded-full -bottom-20 -right-20 animate-pulse" style={{ backgroundColor: '#1AA687', opacity: 0.4 }}></div>

                <div className="max-w-7xl mx-auto px-8 pt-16 flex items-center">
                    <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="inline-block">
                                <span className="px-4 py-2 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#1AA687' }}>
                                    Developer review
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif leading-tight uppercase" style={{ color: '#002D40' }}>
                                So powerful<br />
                                <span style={{ color: '#FF414D' }}>Component-based</span><br />
                                and flexible!
                            </h1>

                            <p className="text-lg leading-relaxed max-w-lg" style={{ color: '#002D40', opacity: 0.8 }}>
                                Build encapsulated components that manage their own state, then compose them to make complex UIs.
                                Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app.
                            </p>

                        </div>

                        {/* Right Content - Company Grid */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="grid grid-cols-3 gap-4 max-w-md">

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(0, 45, 64, 0.05)', borderColor: '#002D40', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#002D40' }}>Facebook</span>
                                </div>

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(255, 65, 77, 0.05)', borderColor: '#FF414D', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#FF414D' }}>Netflix</span>
                                </div>

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(26, 166, 135, 0.05)', borderColor: '#1AA687', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#1AA687' }}>Airbnb</span>
                                </div>

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(217, 252, 242, 0.5)', borderColor: '#D9FCF2', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#1AA687' }}>Uber</span>
                                </div>

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(255, 106, 121, 0.05)', borderColor: '#FF6A79', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#FF6A79' }}>WhatsApp</span>
                                </div>

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(0, 45, 64, 0.05)', borderColor: '#002D40', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#002D40' }}>Instagram</span>
                                </div>

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(255, 65, 77, 0.05)', borderColor: '#FF414D', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#FF414D' }}>Dropbox</span>
                                </div>

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(217, 252, 242, 0.5)', borderColor: '#D9FCF2', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#1AA687' }}>Tesla</span>
                                </div>

                                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(255, 106, 121, 0.05)', borderColor: '#FF6A79', border: '1px solid' }}>
                                    <span className="font-bold text-lg" style={{ color: '#FF6A79' }}>Yahoo</span>
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
            icon: <Code className="w-8 h-8" />,
            title: "Components",
            description: "Build encapsulated components that manage their own state and compose them to make complex UIs."
        },
        {
            id: 1,
            icon: <Component className="w-8 h-8" />,
            title: "React Development",
            description: "Create interactive UIs with declarative views. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
            isActive: true
        },
        {
            id: 2,
            icon: <Layers className="w-8 h-8" />,
            title: "State Management",
            description: "Manage application state efficiently with React's built-in state management and popular libraries like Redux."
        },
        {
            id: 3,
            icon: <Zap className="w-8 h-8" />,
            title: "Performance Optimization",
            description: "Optimize your React applications with techniques like code splitting, lazy loading, and memoization."
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
                {/* Decorative circles - Updated colors */}
                <div className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full -top-16 -left-16 md:-top-32 md:-left-32 opacity-40" style={{ backgroundColor: '#D9FCF2' }}></div>
                <div className="absolute w-16 h-16 md:w-32 md:h-32 rounded-full top-10 right-10 md:top-20 md:right-20 opacity-60" style={{ backgroundColor: '#1AA687' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

                        {/* Left Content */}
                        <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                            <div className="space-y-4 md:space-y-6">
                                <span className="font-medium text-base md:text-lg" style={{ color: '#1AA687' }}>
                                    Features
                                </span>

                                <h2 className="text-4xl lg:text-5xl font-semibold leading-tight uppercase" style={{ color: '#002D40' }}>
                                    React JS<br />
                                    <span className='text-[#FF414D]'>Development</span>
                                </h2>

                                <p className="text-base md:text-lg leading-relaxed max-w-md" style={{ color: '#002D40', opacity: 0.8 }}>
                                    Build fast, interactive user interfaces with React's component-based architecture. Create reusable UI components and manage application state efficiently.
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
                                React Js
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
                    <div className="absolute inset-0"></div>
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

            {/* CSS Animation Styles */}
            <style jsx>{`
                @keyframes slideInScale {
                    0% {
                        transform: scale(0.9) translateY(20px);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1) translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

const ReactServicesGrid = () => {
    const services = [
        {
            image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Gamepad2,
            title: "React JS Game Development",
            description: "Bring your envisioned gaming app to life with world-class ReactJS games"
        },
        {
            image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Globe,
            title: "React JS Web Development",
            description: "Create progressive and dynamic web apps by allowing you to re-use components"
        },
        {
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Smartphone,
            title: "React JS App Development",
            description: "Develop feature-rich mobile apps that would work well on both iOS and Android platforms"
        },
        {
            image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Palette,
            title: "React JS UI Development",
            description: "Build result-driven interactive UIs for your business that fulfils your clients' need"
        },
        {
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Code,
            title: "JS Web Development",
            description: "Create bespoke ReactJS plugins to add unique features to your website or application"
        },
        {
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Database,
            title: "React JS Firebase Integration",
            description: "Develop applications with real-time databases without worrying about the app's back end"
        },
        {
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Tablet,
            title: "React JS Mobile App Development",
            description: "Create feature-rich, business-oriented hybrid mobile apps for superior user experience"
        },
        {
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Headphones,
            title: "Support & Maintenance",
            description: "Our service ensures that your product delivers quality offerings throughout its existence"
        }
    ];

    return (
        <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif mb-4 uppercase" style={{ color: '#002D40' }}>
                        React JS <span className='text-[#FF414D]'>Development</span> Services
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
        lightMint: '#D9FCF2',
        coral: '#FF6A79',
        brightRed: '#FF414D',
        teal: '#1AA687',
        darkNavy: '#002D40'
    };

    const [hoveredCard, setHoveredCard] = useState(null);

    const hiringModels = [
        {
            icon: "👤",
            title: "Hourly Model",
            features: [
                "Flexibility of staffing",
                "Pay as per demand",
                "Transparent billing",
                "24/7 ready live chat"
            ],
            buttonText: "HIRE DEVELOPER",
            gradientFrom: colors.darkNavy,
            gradientTo: colors.teal
        },
        {
            icon: "👥",
            title: "Enterprise Model",
            features: [
                "Dedicated team",
                "All technical expert",
                "60% saving in average cost",
                "Fast and very cost free project"
            ],
            buttonText: "HIRE PART TIME",
            gradientFrom: colors.brightRed,
            gradientTo: colors.coral
        },
        {
            icon: "⭐",
            title: "Staff Augmentation Model",
            features: [
                "Direct client contact",
                "3 days a week",
                "Build long-term relationship",
                "48 hours free as a trial"
            ],
            buttonText: "HIRE FULL TIME",
            gradientFrom: colors.teal,
            gradientTo: colors.darkNavy
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto max-w-6xl px-5">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: colors.teal }}>
                        Select from Zentrix's Flexible Hiring Models
                    </h2>
                    <p
                        className="text-lg leading-relaxed mx-auto max-w-4xl px-8"
                        style={{ color: colors.darkNavy }}
                    >
                        Scale up and down with ease of our engagements models as per your need and avoid lengthy contractual arrangements.
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
                                        <span className="font-bold mr-3" style={{ color: colors.teal }}>✓</span>
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

const React_Js = () => {
    return (
        <>
            <Hero />
            <Services />
            <ReactServicesGrid />
            <Banner />
            {/* <HiringModel /> */}
        </>
    );
}

export default React_Js;
