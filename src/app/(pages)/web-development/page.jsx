'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Globe, Smartphone, Zap, Shield, Monitor, Tablet, Play, Pause } from 'lucide-react';
import { motion } from "framer-motion";

import {
    FaReact, FaNodeJs, FaPython, FaAws, FaGitAlt, FaHtml5, FaCss3Alt, FaGithub, FaLinux
} from 'react-icons/fa';

import {
    SiMongodb, SiTailwindcss, SiDocker, SiJavascript, SiTypescript, SiPostgresql, SiFirebase, SiNextdotjs, SiRedux
} from 'react-icons/si';

const techStack = [
    { name: "React.js", icon: <FaReact className="text-cyan-600" />, color: "text-cyan-600" },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" />, color: "text-black" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, color: "text-green-600" },
    { name: "Python", icon: <FaPython className="text-yellow-600" />, color: "text-yellow-600" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, color: "text-yellow-500" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, color: "text-blue-600" },
    { name: "MongoDB", icon: <SiMongodb className="text-emerald-600" />, color: "text-emerald-600" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-indigo-600" />, color: "text-indigo-600" },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-600" />, color: "text-yellow-600" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-600" />, color: "text-sky-600" },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, color: "text-orange-600" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, color: "text-blue-600" },
    { name: "Redux", icon: <SiRedux className="text-purple-600" />, color: "text-purple-600" },
];

const WebDevelopment = () => {
    const [currentDevice, setCurrentDevice] = useState('desktop');
    const [isAnimating, setIsAnimating] = useState(false);

    const features = [
        {
            icon: Globe,
            title: "Modern Web Apps",
            description: "Cutting-edge web applications built with React, Next.js, and the latest technologies."
        },
        {
            icon: Smartphone,
            title: "Responsive Design",
            description: "Pixel-perfect designs that work flawlessly across all devices and screen sizes."
        },
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Optimized for speed with advanced performance techniques and best practices."
        },
        {
            icon: Shield,
            title: "SEO Optimized",
            description: "Built with SEO best practices to ensure maximum visibility and search rankings."
        }
    ];

    const getDeviceStyles = () => {
        switch (currentDevice) {
            case 'desktop':
                return 'w-full h-96 bg-linear-to-br from-slate-100 to-slate-200 border border-slate-300 rounded-lg overflow-hidden shadow-2xl';
            case 'tablet':
                return 'w-80 h-96 mx-auto bg-linear-to-br from-slate-100 to-slate-200 border border-slate-300 rounded-xl overflow-hidden shadow-2xl';
            case 'mobile':
                return 'w-64 h-96 mx-auto bg-linear-to-br from-slate-100 to-slate-200 border border-slate-300 rounded-2xl overflow-hidden shadow-2xl';
            default:
                return 'w-full h-96 bg-linear-to-br from-slate-100 to-slate-200 border border-slate-300 rounded-lg overflow-hidden shadow-2xl';
        }
    };

    const MockWebsite = () => (
        <div className={`${isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'} transition-all duration-300`}>
            <div className={getDeviceStyles()}>
                {/* Browser Header */}
                <div className="bg-slate-200 p-2 flex items-center space-x-2 border-b border-slate-300">
                    <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-3 py-1 ml-4 border border-slate-300">
                        <span className="text-xs text-slate-700">https://yourwebsite.com</span>
                    </div>
                </div>

                {/* Website Content */}
                <div className="p-4 h-full bg-linear-to-br from-blue-50 to-purple-50 overflow-hidden">
                    {currentDevice === 'desktop' && (
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold">LOGO</div>
                                <div className="flex space-x-4">
                                    <div className="bg-slate-300 rounded h-2 w-12"></div>
                                    <div className="bg-slate-300 rounded h-2 w-12"></div>
                                    <div className="bg-slate-300 rounded h-2 w-12"></div>
                                </div>
                            </div>
                            <div className="bg-linear-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg">
                                <div className="bg-white/20 rounded h-4 w-3/4 mb-2"></div>
                                <div className="bg-white/20 rounded h-3 w-1/2"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="bg-white p-4 rounded shadow">
                                        <div className="bg-blue-200 rounded h-16 mb-2"></div>
                                        <div className="bg-slate-200 rounded h-2 mb-1"></div>
                                        <div className="bg-slate-200 rounded h-2 w-3/4"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentDevice === 'tablet' && (
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold">LOGO</div>
                                <div className="bg-slate-300 rounded h-6 w-6"></div>
                            </div>
                            <div className="bg-linear-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg">
                                <div className="bg-white/20 rounded h-3 w-3/4 mb-2"></div>
                                <div className="bg-white/20 rounded h-2 w-1/2"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="bg-white p-3 rounded shadow">
                                        <div className="bg-blue-200 rounded h-12 mb-2"></div>
                                        <div className="bg-slate-200 rounded h-2 mb-1"></div>
                                        <div className="bg-slate-200 rounded h-2 w-2/3"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentDevice === 'mobile' && (
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">LOGO</div>
                                <div className="bg-slate-300 rounded h-4 w-4"></div>
                            </div>
                            <div className="bg-linear-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg">
                                <div className="bg-white/20 rounded h-3 w-full mb-1"></div>
                                <div className="bg-white/20 rounded h-2 w-3/4"></div>
                            </div>
                            <div className="space-y-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="bg-white p-3 rounded shadow">
                                        <div className="bg-blue-200 rounded h-8 mb-2"></div>
                                        <div className="bg-slate-200 rounded h-2 mb-1"></div>
                                        <div className="bg-slate-200 rounded h-2 w-4/5"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-gray-50 to-white py-24">

            <section className="pt-12 sm:pt-16 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header - Responsive */}
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h1 className="text-5xl md:text-6xl font-medium font-serif mb-4 sm:mb-6 bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mt-6 sm:mt-10">
                            Web <span>Development</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed px-4">
                            Create stunning, high-performance websites that captivate your audience and drive conversions.
                            See how your website will look across all devices.
                        </p>
                    </div>

                    {/* Responsive Demo Section - Fully Responsive */}
                    <div className="mb-12 sm:mb-16 md:mb-20">
                        <div className="text-center mb-6 sm:mb-8">
                            <h2 className="text-2xl sm:text-3xl font-medium font-serif text-slate-900 mb-3 sm:mb-4">Perfect Responsiveness in Action</h2>
                            <p className="text-slate-700 mb-4 sm:mb-6 px-4 text-sm sm:text-base">See how your website transforms seamlessly from desktop to mobile</p>
                        </div>

                        {/* Side by Side Demo Container - Responsive */}
                        <div className="bg-linear-to-br from-gray-100 via-slate-100 to-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-300 shadow-sm">
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">

                                {/* Desktop View - Left Side - Responsive */}
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
                                        <Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                        <span className="text-slate-900 font-semibold text-sm sm:text-base">Desktop Version</span>
                                    </div>

                                    {/* Desktop Mockup - Responsive */}
                                    <div className="transition-all duration-500 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                                        {/* Browser Header */}
                                        <div className="bg-gray-100 p-1.5 sm:p-2 flex items-center space-x-1.5 sm:space-x-2 border-b border-gray-300">
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                                            </div>
                                            <div className="flex-1 bg-white rounded-md px-2 sm:px-3 py-0.5 sm:py-1 ml-2 sm:ml-4 border border-gray-300">
                                                <span className="text-xs text-slate-700">https://vasterior.com</span>
                                            </div>
                                        </div>

                                        {/* Desktop Content - Responsive */}
                                        <div className="h-72 sm:h-80 md:h-96 bg-linear-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
                                            {/* Navigation */}
                                            <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200 px-3 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
                                                <div className="flex items-center space-x-4 sm:space-x-8">
                                                    <div className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold">
                                                        TechFlow
                                                    </div>
                                                    <div className="hidden sm:flex space-x-6 text-xs text-slate-600">
                                                        <span className="hover:text-indigo-600 cursor-pointer">Features</span>
                                                        <span className="hover:text-indigo-600 cursor-pointer">Pricing</span>
                                                        <span className="hover:text-indigo-600 cursor-pointer">About</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-2 sm:space-x-3">
                                                    <div className="bg-slate-100 text-slate-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs">Login</div>
                                                    <div className="hidden sm:block bg-indigo-600 text-white px-3 py-1.5 rounded-md text-xs">Get Started</div>
                                                </div>
                                            </div>

                                            {/* Hero Section - Responsive */}
                                            <div className="px-3 sm:px-6 py-3 sm:py-6 text-center bg-linear-to-br from-indigo-50 via-white to-purple-50">
                                                <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs mb-2 sm:mb-3">
                                                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-indigo-500 rounded-full mr-1 sm:mr-2"></span>
                                                    New: AI-Powered Analytics
                                                </div>
                                                <h1 className="text-base sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">
                                                    Scale Your Business with AI
                                                </h1>
                                                <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-4 max-w-md mx-auto">
                                                    Transform your workflow with intelligent automation
                                                </p>
                                                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 mb-3 sm:mb-4">
                                                    <div className="bg-indigo-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs">Start Free Trial</div>
                                                    <div className="hidden sm:block border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-xs">Watch Demo</div>
                                                </div>

                                                {/* Desktop Dashboard - Responsive */}
                                                <div className="bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border border-slate-200 p-2 sm:p-3">
                                                    <div className="bg-slate-50 rounded-lg p-1.5 sm:p-2">
                                                        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                                                            <div className="bg-linear-to-r from-blue-500 to-blue-600 rounded p-1.5 sm:p-2 text-white">
                                                                <div className="text-xs opacity-90">Revenue</div>
                                                                <div className="text-xs sm:text-sm font-bold">$24.5k</div>
                                                            </div>
                                                            <div className="bg-linear-to-r from-green-500 to-green-600 rounded p-1.5 sm:p-2 text-white">
                                                                <div className="text-xs opacity-90">Users</div>
                                                                <div className="text-xs sm:text-sm font-bold">1,247</div>
                                                            </div>
                                                            <div className="bg-linear-to-r from-purple-500 to-purple-600 rounded p-1.5 sm:p-2 text-white">
                                                                <div className="text-xs opacity-90">Growth</div>
                                                                <div className="text-xs sm:text-sm font-bold">+18%</div>
                                                            </div>
                                                        </div>
                                                        <div className="bg-white rounded border h-4 sm:h-6 flex items-end px-0.5 sm:px-1 space-x-0.5">
                                                            {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                                                                <div key={i} className="bg-indigo-400 rounded-sm flex-1" style={{ height: `${height}%` }}></div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile View - Right Side - Responsive */}
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
                                        <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                                        <span className="text-slate-900 font-semibold text-sm sm:text-base">Mobile Version</span>
                                    </div>

                                    {/* Mobile Mockup - Responsive */}
                                    <div className="mx-auto w-56 sm:w-64 transition-all duration-500 bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-lg">
                                        {/* Mobile Browser Header */}
                                        <div className="bg-gray-100 p-1.5 sm:p-2 flex items-center space-x-1.5 sm:space-x-2 border-b border-gray-300">
                                            <div className="flex space-x-1">
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                                            </div>
                                            <div className="flex-1 bg-white rounded px-1.5 sm:px-2 py-0.5 sm:py-1 ml-1.5 sm:ml-2 border border-gray-300">
                                                <span className="text-xs text-slate-700">yoursaas.com</span>
                                            </div>
                                        </div>

                                        {/* Mobile Content - Responsive */}
                                        <div className="h-72 sm:h-96 bg-linear-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
                                            {/* Mobile Navigation */}
                                            <div className="bg-white/95 backdrop-blur-sm border-b border-slate-200 px-2.5 sm:px-3 py-2 sm:py-2.5 flex justify-between items-center">
                                                <div className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold">
                                                    TechFlow
                                                </div>
                                                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-slate-200 rounded flex flex-col justify-center items-center space-y-0.5">
                                                    <div className="w-2 sm:w-2.5 h-0.5 bg-slate-500 rounded"></div>
                                                    <div className="w-2 sm:w-2.5 h-0.5 bg-slate-500 rounded"></div>
                                                </div>
                                            </div>

                                            {/* Mobile Hero - Responsive */}
                                            <div className="px-2.5 sm:px-3 py-3 sm:py-4 text-center bg-linear-to-br from-indigo-50 via-white to-purple-50">
                                                <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-1.5 sm:px-2 py-0.5 rounded-full text-xs mb-1.5 sm:mb-2">
                                                    <span className="w-1 h-1 bg-indigo-500 rounded-full mr-1"></span>
                                                    AI-Powered
                                                </div>
                                                <h1 className="text-sm sm:text-base font-bold text-slate-900 mb-1 sm:mb-1.5">
                                                    Scale Your Business
                                                </h1>
                                                <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">
                                                    Intelligent automation for teams
                                                </p>
                                                <div className="bg-indigo-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm mb-2 sm:mb-3">
                                                    Start Free Trial
                                                </div>

                                                {/* Mobile Dashboard - Responsive */}
                                                <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-2 sm:p-2.5">
                                                    <div className="space-y-1.5 sm:space-y-2 mb-1.5 sm:mb-2">
                                                        <div className="bg-linear-to-r from-blue-500 to-blue-600 rounded p-1.5 sm:p-2 text-white flex justify-between">
                                                            <span className="text-xs">Revenue</span>
                                                            <span className="text-xs sm:text-sm font-bold">$24.5k</span>
                                                        </div>
                                                        <div className="bg-linear-to-r from-green-500 to-green-600 rounded p-1.5 sm:p-2 text-white flex justify-between">
                                                            <span className="text-xs">Users</span>
                                                            <span className="text-xs sm:text-sm font-bold">1,247</span>
                                                        </div>
                                                    </div>
                                                    <div className="bg-slate-50 rounded p-1 sm:p-1.5">
                                                        <div className="flex items-end space-x-0.5 h-3 sm:h-4">
                                                            {[40, 60, 35, 80, 50].map((height, i) => (
                                                                <div key={i} className="bg-indigo-400 rounded-sm flex-1" style={{ height: `${height}%` }}></div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Comparison Text - Responsive */}
                            <div className="text-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-300">
                                <p className="text-slate-700 text-xs sm:text-sm md:text-base px-4">
                                    <span className="text-blue-600 font-semibold">Desktop:</span> Full navigation & detailed dashboard
                                    <span className="mx-2 sm:mx-4">•</span>
                                    <span className="text-green-600 font-semibold">Mobile:</span> Optimized touch interface & stacked layout
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack - Responsive */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Features Grid - Responsive */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group bg-white border border-gray-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gray-100 text-blue-600 mb-4 sm:mb-6 transition-transform group-hover:scale-110">
                                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3 sm:mb-4">
                                        {feature.description}
                                    </p>

                                    {/* Simulated UI Block - Responsive */}
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 text-xs sm:text-sm text-slate-700">
                                        <p className="mb-2 font-medium">Example:</p>
                                        {feature.title === "Modern Web Apps" && (
                                            <div>
                                                <p className="mb-1">📊 Dashboard: User Analytics</p>
                                                <div className="h-2 rounded-full bg-blue-600 w-3/4 mb-1"></div>
                                                <p className="text-xs text-slate-600">Active Users: 1.2k</p>
                                            </div>
                                        )}
                                        {feature.title === "Responsive Design" && (
                                            <div>
                                                <p className="mb-1">📱 Devices:</p>
                                                <div className="flex flex-wrap gap-1 sm:gap-2 text-xs text-slate-600">
                                                    <span>✔️ Mobile</span>
                                                    <span>✔️ Tablet</span>
                                                    <span>✔️ Desktop</span>
                                                </div>
                                            </div>
                                        )}
                                        {feature.title === "Lightning Fast" && (
                                            <div>
                                                <p>⚡ Load Time: <span className="text-green-600">0.8s</span></p>
                                                <p className="text-xs text-slate-600">GTMetrix Grade: A</p>
                                            </div>
                                        )}
                                        {feature.title === "SEO Optimized" && (
                                            <div>
                                                <p>🔍 Meta Tags & Alt Text</p>
                                                <p className="text-xs text-slate-600">Lighthouse Score: 97</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tech Toolbox - Responsive */}
                        <div className="text-center mb-10 sm:mb-12 md:mb-16">
                            <h2 className="text-5xl md:text-6xl font-medium font-serif text-slate-900 mb-2">Tech Toolbox</h2>
                            <p className="text-slate-700 text-base sm:text-lg">The technologies powering our code.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                            {techStack.map((tech, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white rounded-xl w-24 sm:w-28 md:w-32 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-default select-none"
                                >
                                    <div className={`text-3xl sm:text-4xl md:text-5xl ${tech.color}`}>
                                        {tech.icon}
                                    </div>
                                    <span className="text-slate-900 font-semibold text-sm sm:text-base md:text-lg text-center">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>

        </div>
    );
};

export default WebDevelopment;
