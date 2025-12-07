"use client";

import React, { useState } from 'react';
import Banner from '@/components/Banner';

// export const metadata = {title: "Zentrix Infotech – IT & Digital Marketing Services",description: "Explore Zentrix Infotech services including software development, web & mobile apps, cloud solutions, SEO, ads management, UI/UX and branding."};

const ITServicesPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Zentrix Infotech specialises in innovative web development services, crafting responsive websites designed to elevate brands and accelerate digital growth.",
      icon: "💻",
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "Zentrix Infotech specialises in mobile application development that specialises in the creation of user-centered apps that are intuitive, responsive, and engaging with outstanding user experiences.",
      icon: "📱",
      bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "QA & Testing",
      description: "Leading the way in top-quality QA & Testing services to guarantee flawless performance, security and seamless user experiences on all platforms.",
      icon: "🔍",
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      title: "IT Consultancy",
      description: "Expert IT consulting for strategic growth enhance technology solutions, and install businesses in streamlining efficient, customised IT plans.",
      icon: "💼",
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      title: "UI/UX Design",
      description: "Build the product you want on time with an experienced team that uses a clear and effective design process.",
      icon: "🎨",
      bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 6,
      title: "Dedicated Team",
      description: "Over the past decade, our teamhas succeeded by leveraging Zentrix/stly's process of building, motivating.",
      icon: "👥",
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const hiringModels = [
    {
      title: "Staff Augmentation Model",
      icon: "👤",
      features: [
        "8 hours a day",
        "5 days a week",
        "Dedicated resources",
        "40 hours free as a trial"
      ],
      buttonText: "HIRE FULL TIME"
    },
    {
      title: "Enterprise Project Management Model",
      icon: "👥",
      features: [
        "Pay as per project hours",
        "24*7 support system",
        "Access wide range of talent pool",
        "Test us with your first free project"
      ],
      buttonText: "HIRE PART TIME"
    },
    {
      title: "Hourly Model",
      icon: "🕐",
      features: [
        "80 hours a month",
        "Pay as you consume",
        "Ideal for low volume work",
        "20 hours free as a trial"
      ],
      buttonText: "HIRE HOURLY"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      {/* Hero Section */}
      <div className="flex justify-center items-center h-80" style={{ background: 'linear-gradient(135deg, #0f172a, #1e40af, #0ea5e9)' }}>
        <h1 className="text-5xl font-bold text-black bg-white px-8 py-4 rounded-lg shadow-lg">
          IT SERVICES
        </h1>
      </div>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-semibold text-sm tracking-wide mb-4" style={{ color: '#0ea5e9' }}>OUR SERVICES</div>
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#0f172a' }}>We Offer a Wide<br />Variety of IT Services</h2>
          <button
            className="text-white px-8 py-3 rounded-lg font-semibold mb-16 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #1e40af, #0ea5e9)',
              boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #0ea5e9, #f0abfc)';
              e.target.style.boxShadow = '0 8px 25px rgba(240, 171, 252, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #1e40af, #0ea5e9)';
              e.target.style.boxShadow = '0 4px 15px rgba(14, 165, 233, 0.3)';
            }}
          >
            FREE QUOTE
          </button>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative bg-white rounded-2xl p-8 text-left transition-all duration-500 overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl"
                style={{ border: '1px solid #e2e8f0' }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background overlay for hover effect */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${hoveredCard === service.id ? 'opacity-90' : 'opacity-0'
                    }`}
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: service.id % 4 === 1 ? 'rgba(15, 23, 42, 0.8)' :
                        service.id % 4 === 2 ? 'rgba(30, 64, 175, 0.8)' :
                          service.id % 4 === 3 ? 'rgba(14, 165, 233, 0.8)' :
                            'rgba(240, 171, 252, 0.8)'
                    }}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`text-4xl mb-4 transition-all duration-500 ${hoveredCard === service.id ? 'text-white' : ''
                    }`}
                    style={{
                      color: hoveredCard === service.id ? 'white' :
                        service.id % 4 === 1 ? '#0f172a' :
                          service.id % 4 === 2 ? '#1e40af' :
                            service.id % 4 === 3 ? '#0ea5e9' :
                              '#f0abfc'
                    }}>
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-4 transition-all duration-500 ${hoveredCard === service.id ? 'text-white' : ''
                    }`}
                    style={{
                      color: hoveredCard === service.id ? 'white' : '#0f172a'
                    }}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-all duration-500 ${hoveredCard === service.id ? 'text-gray-200' : ''
                    }`}
                    style={{
                      color: hoveredCard === service.id ? '#e2e8f0' : '#475569'
                    }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}

      <Banner />
      

      {/* Hiring Models Section */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4" style={{ color: '#0f172a' }}>
            SELECT FROM ZENTRIX'S FLEXIBLE HIRING MODELS
          </h3>
          <p className="text-center mb-12 max-w-3xl mx-auto" style={{ color: '#0ea5e9' }}>
            Scale up and down with ease of the Engagement model as per your need and avoid lengthy contractual arrangements.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {hiringModels.map((model, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div
                  className="text-6xl mb-6"
                  style={{
                    color: index === 0 ? '#1e40af' :
                      index === 1 ? '#0ea5e9' :
                        '#f0abfc'
                  }}
                >
                  {model.icon}
                </div>
                <h4 className="text-xl font-bold mb-6" style={{ color: '#0f172a' }}>{model.title}</h4>
                <ul className="space-y-3 mb-8">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm" style={{ color: '#475569' }}>
                      <svg
                        className="w-4 h-4 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{ color: '#0ea5e9' }}
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: index === 0 ? 'linear-gradient(135deg, #1e40af, #0ea5e9)' :
                      index === 1 ? 'linear-gradient(135deg, #0ea5e9, #f0abfc)' :
                        'linear-gradient(135deg, #f0abfc, #ec4899)'
                  }}
                  onMouseEnter={(e) => {
                    if (index === 0) {
                      e.target.style.background = 'linear-gradient(135deg, #0ea5e9, #f0abfc)';
                    } else if (index === 1) {
                      e.target.style.background = 'linear-gradient(135deg, #f0abfc, #ec4899)';
                    } else {
                      e.target.style.background = 'linear-gradient(135deg, #ec4899, #0f172a)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = index === 0 ? 'linear-gradient(135deg, #1e40af, #0ea5e9)' :
                      index === 1 ? 'linear-gradient(135deg, #0ea5e9, #f0abfc)' :
                        'linear-gradient(135deg, #f0abfc, #ec4899)';
                  }}
                >
                  {model.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
