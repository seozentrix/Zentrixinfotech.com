'use client';

import React from 'react';
import { Code, Palette, Smartphone, Cpu, TrendingUp, Cloud } from 'lucide-react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      color: "#3B82F6",
      link: "web-development"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to engage users and drive conversions with attention to detail.",
      color: "#8B5CF6",
      link: "ui-designer"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
      color: "#EC4899",
      link: "mobile-development"
    },
    {
      icon: Cpu,
      title: "Software Development",
      description: "Comprehensive software solutions to improve efficiency and drive innovation in your business operations.",
      color: "#10B981",
      link: "software-development"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns to boost your online presence and drive measurable business growth.",
      color: "#F59E0B",
      link: "digital-marketing"
    },
    {
      icon: Cloud,
      title: "Cloud Solution",
      description: "Scalable cloud infrastructure and services to enhance performance, security, and business continuity.",
      color: "#06B6D4",
      link: "cloud-solutions"
    }
  ];

  return (
    <div className="bg-white p-8 pb-20 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 ">
          <h2 className="text-4xl md:text-6xl font-medium font-serif text-gray-900 mb-4 mt-34">Services We Offer</h2>
          <p className="text-gray-600 text-lg">Comprehensive solutions tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                href={service.link}
                className="block group"
              >
                <div
                  className="relative h-full bg-white rounded-2xl p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 border border-gray-200"
                  style={{
                    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = service.color;
                    e.currentTarget.style.boxShadow = `0 20px 25px -5px ${service.color}40, 0 8px 10px -6px ${service.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(229 231 235)';
                    e.currentTarget.style.boxShadow = '0 1px 3px 0 rgb(0 0 0 / 0.1)';
                  }}
                >
                  {/* Animated background linear on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-linear(135deg, ${service.color}08, transparent)`,
                    }}
                  />

                  {/* Content wrapper */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          backgroundColor: `${service.color}15`,
                        }}
                      >
                        <IconComponent
                          className="w-7 h-7"
                          style={{ color: service.color }}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm mb-6">
                      {service.description}
                    </p>

                    {/* Footer with arrow */}
                    <div className="flex items-center justify-between">
                      <div
                        className="h-0.5 w-0 group-hover:w-12 rounded-full transition-all duration-300"
                        style={{ backgroundColor: service.color }}
                      />
                      <div className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                        <svg
                          className="w-5 h-5"
                          style={{ color: service.color }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-linear(135deg, ${service.color}10, transparent)`,
                    }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;