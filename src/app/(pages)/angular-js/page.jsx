"use client";

import React, { useState, useEffect } from 'react';
import { Globe, Smartphone, Palette, Code, Database, Tablet, Headphones, Component, Layers, Zap } from 'lucide-react';
import Banner from '@/components/Banner';

// export const metadata = {title: "AngularJS Development Company – Zentrix Infotech",description: "Enterprise-grade AngularJS development services for secure and scalable web applications."};



const Hero = () => {
  return (
    <>
      <div className="bg-white  relative overflow-hidden lg:mt-32 mt-21">
        {/* Decorative circles - Updated with new palette */}
        <div className="absolute w-48 h-48 rounded-full -top-12 -left-24 animate-pulse" style={{ backgroundColor: '#D9FCF2', opacity: 0.6 }}></div>
        <div className="absolute w-32 h-32 rounded-full top-1/2 -left-16" style={{ backgroundColor: '#FF6A79', opacity: 0.3 }}></div>
        <div className="absolute w-40 h-40 rounded-full -bottom-20 -right-20 animate-pulse" style={{ backgroundColor: '#1AA687', opacity: 0.4 }}></div>

        <div className="max-w-7xl mx-auto px-8 pt-16 flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-3 rounded-full text-md font-medium text-white" style={{ backgroundColor: '#1AA687' }}>
                  Framework Excellence
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif leading-tight uppercase" style={{ color: '#002D40' }}>
                Build Amazing<br />
                <span style={{ color: '#FF414D' }}>TypeScript Powered</span><br />
                Angular Apps!
              </h1>

              <p className="text-lg leading-relaxed max-w-lg" style={{ color: '#002D40', opacity: 0.8 }}>
                Create dynamic, scalable web applications with Angular's powerful framework.
                Leverage TypeScript, component-based architecture, and two-way data binding to build modern,
                enterprise-grade applications with exceptional performance.
              </p>
            </div>

            {/* Right Content - Company Grid */}
            <div className="flex justify-center lg:justify-end">
              <div className="grid grid-cols-3 gap-4 max-w-md">

                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(0, 45, 64, 0.05)', borderColor: '#002D40', border: '1px solid' }}>
                  <span className="font-bold text-lg" style={{ color: '#002D40' }}>Google</span>
                </div>

                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(255, 65, 77, 0.05)', borderColor: '#FF414D', border: '1px solid' }}>
                  <span className="font-bold text-lg" style={{ color: '#FF414D' }}>Microsoft</span>
                </div>

                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(26, 166, 135, 0.05)', borderColor: '#1AA687', border: '1px solid' }}>
                  <span className="font-bold text-lg" style={{ color: '#1AA687' }}>Adobe</span>
                </div>

                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(217, 252, 242, 0.5)', borderColor: '#D9FCF2', border: '1px solid' }}>
                  <span className="font-bold text-lg" style={{ color: '#1AA687' }}>IBM</span>
                </div>

                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(255, 106, 121, 0.05)', borderColor: '#FF6A79', border: '1px solid' }}>
                  <span className="font-bold text-lg" style={{ color: '#FF6A79' }}>Samsung</span>
                </div>

                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(0, 45, 64, 0.05)', borderColor: '#002D40', border: '1px solid' }}>
                  <span className="font-bold text-lg" style={{ color: '#002D40' }}>PayPal</span>
                </div>

                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(255, 65, 77, 0.05)', borderColor: '#FF414D', border: '1px solid' }}>
                  <span className="font-bold text-lg" style={{ color: '#FF414D' }}>Deutsche Bank</span>
                </div>

                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(217, 252, 242, 0.5)', borderColor: '#D9FCF2', border: '1px solid' }}>
                  <span className="font-bold text-lg" style={{ color: '#1AA687' }}>Forbes</span>
                </div>

                <div className="rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-[100px]" style={{ backgroundColor: 'rgba(255, 106, 121, 0.05)', borderColor: '#FF6A79', border: '1px solid' }}>
                  <span className="font-bold text-lg" style={{ color: '#FF6A79' }}>Upwork</span>
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
      title: "TypeScript Integration",
      description: "Leverage TypeScript for stronger typing, better IDE support, and fewer runtime errors, ensuring cleaner, more maintainable code."
    },
    {
      id: 1,
      icon: <Component className="w-8 h-8" />,
      title: "Component Architecture",
      description: "Build scalable, modular apps with Angular’s component-based architecture for efficient, reusable, and maintainable code.",
      isActive: true
    },
    {
      id: 2,
      icon: <Layers className="w-8 h-8" />,
      title: "Dependency Injection",
      description: "Implement robust dependency injection patterns for better testing, modularity, and maintainability in enterprise applications."
    },
    {
      id: 3,
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Utilize Angular's Ivy renderer, lazy loading, and change detection strategies for optimal application performance and user experience."
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
        <div className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full -top-16 -left-16 md:-top-32 md:-left-32 opacity-40" style={{ backgroundColor: '#D9FCF2' }}></div>
        <div className="absolute w-16 h-16 md:w-32 md:h-32 rounded-full top-10 right-10 md:top-20 md:right-20 opacity-60" style={{ backgroundColor: '#1AA687' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 md:space-y-6">
                <span className="font-semibold text-base md:text-lg" style={{ color: '#1AA687' }}>
                  Framework Features
                </span>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif leading-tight uppercase" style={{ color: '#002D40' }}>
                  Angular<br />
                  <span className='text-[#FF414D]'>Development</span>
                </h2>

                <p className="text-base md:text-lg leading-relaxed max-w-md" style={{ color: '#002D40', opacity: 0.8 }}>
                  Build powerful, scalable web applications with Angular's comprehensive framework.
                  Leverage TypeScript, CLI tools, and enterprise-grade features for exceptional development experience.
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
                Angular
              </button>
            </div>

            {/* Right Content - Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 order-1 lg:order-2">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`rounded-2xl min-h-80 sm:min-h-88 md:min-h-96 p-6 md:p-8 transition-all duration-500 cursor-pointer transform ${animatedCards.has(service.id)
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

const AngularServicesGrid = () => {
  const services = [
    {
      image: "/grid1.png",
      icon: Globe,
      title: "Angular Web Development",
      description: "Build robust, scalable web applications with Angular's powerful framework and TypeScript integration"
    },
    {
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Smartphone,
      title: "Angular Mobile Apps",
      description: "Create hybrid mobile applications using Ionic and Angular for cross-platform compatibility"
    },
    {
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Palette,
      title: "Angular UI/UX Development",
      description: "Design beautiful, responsive user interfaces with Angular Material and custom component libraries"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Database,
      title: "Angular Enterprise Solutions",
      description: "Develop enterprise-grade applications with advanced features, security, and scalability"
    },
    {
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Code,
      title: "Angular PWA Development",
      description: "Build Progressive Web Apps with offline capabilities, push notifications, and native-like experience"
    },
    {
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Layers,
      title: "Angular Migration Services",
      description: "Seamlessly migrate from AngularJS or other frameworks to the latest Angular version"
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Tablet,
      title: "Angular SPA Development",
      description: "Create fast, dynamic Single Page Applications with smooth navigation and real-time updates"
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Headphones,
      title: "Angular Support & Maintenance",
      description: "Comprehensive support services including updates, bug fixes, and performance optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif mb-6 uppercase" style={{ color: '#002D40' }}>
            Angular<span className='text-[#FF414D]'> Development</span> Services
          </h1>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#1AA687' }}></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
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
        "Flexible Angular development",
        "Pay per hour basis",
        "TypeScript expertise",
        "24/7 technical support"
      ],
      buttonText: "HIRE ANGULAR DEVELOPER",
      gradientFrom: colors.darkNavy,
      gradientTo: colors.teal
    },
    {
      icon: "👥",
      title: "Enterprise Model",
      features: [
        "Dedicated Angular team",
        "Full-stack capabilities",
        "60% cost reduction",
        "Enterprise-grade solutions"
      ],
      buttonText: "HIRE ANGULAR TEAM",
      gradientFrom: colors.brightRed,
      gradientTo: colors.coral
    },
    {
      icon: "⭐",
      title: "Staff Augmentation Model",
      features: [
        "Angular specialists",
        "Flexible engagement",
        "Long-term partnerships",
        "48-hour trial period"
      ],
      buttonText: "AUGMENT TEAM",
      gradientFrom: colors.teal,
      gradientTo: colors.darkNavy
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: colors.teal }}>
            Select from Zentrix's Angular Hiring Models
          </h2>
          <p
            className="text-lg leading-relaxed mx-auto max-w-4xl px-8"
            style={{ color: colors.darkNavy }}
          >
            Scale your Angular development with our flexible engagement models designed for enterprise-grade application development.
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

const Angular_Js = () => {
  return (
    <>
      <Hero />
      <Services />
      <AngularServicesGrid />
      <Banner />
    </>
  );
}

export default Angular_Js;
