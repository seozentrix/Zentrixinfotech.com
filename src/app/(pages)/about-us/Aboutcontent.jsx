"use client";

import React, { useState, useEffect } from "react";
import {
  Building,
  Heart,
  Target,
  Users,
  Globe,
  Lightbulb,
  Shield,
  Rocket,
  Award,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

// export const metadata = {
//   title: "About Zentrix Infotech – Technology, Innovation & Growth",
//   description: "Learn about Zentrix Infotech, a leading IT company delivering software development, digital marketing, cloud solutions and branding to help businesses scale globally."
// };


const AboutUsSection = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const valueInterval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(valueInterval);
  }, []);

  const companyValues = [
    {
      icon: "🎯",
      title: "Innovation & Excellence",
      description:
        "We push the boundaries of what's possible, constantly exploring new technologies and methodologies to deliver cutting-edge solutions that set industry standards.",
    },
    {
      icon: "💡",
      title: "Client-Centric Approach",
      description:
        "Your success is our priority. We listen, understand, and collaborate closely with every client to ensure our solutions perfectly align with your business goals and vision.",
    },
    {
      icon: "🚀",
      title: "Agile & Adaptive",
      description:
        "In a rapidly evolving digital landscape, we embrace change and adapt quickly. Our agile methodologies ensure we deliver results efficiently while maintaining flexibility.",
    },
    {
      icon: "🌟",
      title: "Quality & Integrity",
      description:
        "We believe in doing things right the first time. Our commitment to quality, transparency, and ethical practices forms the foundation of every partnership we build.",
    },
  ];

  const teamHighlights = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Diverse Expertise",
      description:
        "Our multidisciplinary team brings together creative designers, skilled developers, strategic thinkers, and technology enthusiasts.",
      linear: "from-blue-500 to-purple-600",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Perspective",
      description:
        "With experience across various industries and markets, we understand the nuances of building solutions that work worldwide.",
      linear: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Continuous Learning",
      description:
        "We stay ahead of the curve by constantly learning, experimenting with new technologies, and evolving our expertise.",
      linear: "from-yellow-500 to-orange-600",
    },
  ];

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-linear-to-r from-cyan-400 to-purple-400 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );

  const TechGrid = () => (
    <div className="absolute inset-0 opacity-5">
      <div className="grid grid-cols-12 gap-4 h-full">
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="border border-emerald-500/20 rounded-sm"
            style={{
              animation: `pulse ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <section className="relative px-4 py-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-50 via-gray-50 to-white overflow-hidden">
        {/* Background Effects */}
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-linear(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-linear(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[conic-linear(from_0deg_at_50%_50%,transparent_0deg,rgba(34,197,94,0.03)_120deg,transparent_240deg)]" />
          <FloatingElements />
          <TechGrid />
        </div>

        {/* Scanning Line Effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "linear-linear(90deg, transparent, rgba(34, 197, 94, 0.1), transparent)",
            animation: "scan 10s infinite linear",
          }}
        />

        <div className="max-w-7xl lg:pt-32 py-14 mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-10 mt-10">
            <div className="inline-flex items-center px-6 py-3 rounded-full font-medium font-serif bg-linear-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 text-teal-400 mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <svg
                className="w-4 h-4 mr-2 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              ABOUT US
              <div className="ml-2 w-2 h-2 bg-emerald-600 rounded-full animate-ping" />
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-shimmer" />
            </div>

            <h2 className="text-3xl md:text-6xl lg:text-5xl font-medium font-serif mb-8 leading-tight">
              <span className="text-slate-900 block">
                Crafting the future of
              </span>
              <span className="block bg-linear-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mt-2 relative">
                digital innovation
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-linear-to-r from-emerald-400 to-blue-500 rounded-full animate-bounce opacity-40 blur-sm" />
              </span>
            </h2>
            <p className="md:text-xl text-lg text-slate-600 max-w-5xl mx-auto md:px-5 leading-relaxed">
              We are a passionate team of innovators, creators, and
              problem-solvers dedicated to transforming ideas into powerful
              digital experiences that make a meaningful impact.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left Content - Our Story */}
            <div className="relative">
              <h3 className="text-4xl md:text-5xl font-medium font-serif mb-8 text-slate-900 leading-tight">
                Our
                <span className="bg-linear-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Story
                </span>
              </h3>

              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-lg">
                  Born from a vision to bridge the gap between innovative
                  technology and real-world business challenges, we started as a
                  small team of passionate technologists who believed that great
                  software could change everything.
                </p>

                <p className="text-lg">
                  What began as a shared dream has evolved into a thriving
                  company that helps businesses of all sizes harness the power
                  of digital transformation. We've learned that success isn't
                  just about writing code—it's about understanding people,
                  solving problems, and creating experiences that truly matter.
                </p>

                <p className="text-lg">
                  Today, we continue to push boundaries, embrace new challenges,
                  and maintain the same entrepreneurial spirit that started it
                  all. Every project we take on is an opportunity to make a
                  difference, and every client relationship is built on trust,
                  transparency, and shared success.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="mt-10 p-6 bg-linear-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-emerald-600 mr-3" />
                  <h4 className="text-xl font-medium font-serif text-slate-900">
                    Our Mission
                  </h4>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  To empower businesses with innovative digital solutions that
                  drive growth, enhance user experiences, and create lasting
                  value in an ever-evolving technological landscape.
                </p>
              </div>
            </div>

            {/* Right Content - Interactive Values */}
            <div className="relative">
              <div className="bg-linear-to-br from-white/90 to-slate-50/90 rounded-3xl border border-slate-200/50 backdrop-blur-xl p-8 relative overflow-hidden hover:border-emerald-500/50 transition-all duration-500 shadow-xl">
                {/* Values Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <Heart className="w-8 h-8 text-emerald-600 mr-3" />
                    <h4 className="text-2xl font-medium font-serif text-slate-900">
                      Our Values
                    </h4>
                  </div>

                  {/* Active Value Display */}
                  <div className="mb-8 p-6 bg-slate-50/80 rounded-2xl border border-slate-200/50 min-h-[200px] relative overflow-hidden">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">
                        {companyValues[activeValue].icon}
                      </span>
                      <h5 className="text-xl font-bold text-slate-900">
                        {companyValues[activeValue].title}
                      </h5>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {companyValues[activeValue].description}
                    </p>

                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-200">
                      <div
                        className="h-full bg-linear-to-r from-emerald-500 to-blue-500 transition-all duration-300"
                        style={{ width: `${((animationKey % 4) + 1) * 25}%` }}
                      />
                    </div>
                  </div>

                  {/* Value Indicators */}
                  <div className="flex justify-center space-x-3">
                    {companyValues.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveValue(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeValue === index
                            ? "bg-emerald-600 scale-125"
                            : "bg-slate-300 hover:bg-slate-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Scanning Effects */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-emerald-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-2000" />
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-emerald-400 to-transparent animate-scan" />
              </div>

              {/* External Glow */}
              <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 to-blue-600/10 rounded-3xl blur-3xl -z-10 animate-pulse" />
            </div>
          </div>

          {/* Team Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamHighlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-500 hover:transform hover:scale-105 shadow-lg"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-r ${highlight.linear} mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse" />
                  <div className="text-white relative z-10">
                    {highlight.icon}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  {highlight.title}
                </h4>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {highlight.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      </section>
    </div>
  );
};

export default AboutUsSection;
