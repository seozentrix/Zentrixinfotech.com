import React from 'react';
import Link from 'next/link';
import { Code, Palette, Users, TrendingUp, Smartphone, Layers, Figma, Cloud } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Build fast, responsive, and scalable websites tailored to your business needs and goals.",
      link: "/web-development"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Design & Branding",
      description: "Build a memorable brand identity with compelling designs that resonate with your target audience.",
      link: "/ui-ux-design"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Social Media Optimization",
      description: "Engage and grow your community with strategic social media management and compelling content.",
      link: "/social-media-optimization"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Boost your online presence with comprehensive digital strategies that deliver real results.",
      link: "/digital-marketing"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Development",
      description: "Create powerful mobile applications for iOS and Android that engage users on the go.",
      link: "/mobile-development"
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Software Development",
      description: "Custom software solutions built to streamline your operations and scale with your business.",
      link: "/software-development"
    },
    {
      icon: <Figma className="w-12 h-12" />,
      title: "UI & UX Design",
      description: "Design intuitive and beautiful user experiences that keep your customers coming back.",
      link: "/ui-ux-designer"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Solutions",
      description: "Leverage cloud technology for secure, scalable, and cost-effective infrastructure solutions.",
      link: "/cloud-solutions"
    }
  ];

  return (
    <section className="bg-white text-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-6xl font-medium font-serif text-center mb-16 tracking-wide">
          OUR SERVICES
        </h2>

        {/* Services Grid - 4 columns on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.link}
              className="flex flex-col items-center text-center group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* Icon Container */}
              <div className="mb-4 md:mb-6 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-2xl font-semibold mb-2 md:mb-4 text-black  transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description - Hidden on mobile */}
              <p className="hidden md:block text-gray-600 text-sm md:text-base leading-relaxed max-w-xs">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;