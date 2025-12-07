"use client";

import React, { useState } from 'react';
import { Shield, Cookie, Settings, Eye, BarChart3, Globe, ChevronDown, ChevronUp, Check, X } from 'lucide-react';

import Navbar from '@/components/Navbar';


const CookiesPolicy = () => {
    const [expandedSections, setExpandedSections] = useState({});
    const [cookieSettings, setCookieSettings] = useState({
        essential: true,
        analytics: true,
        marketing: false,
        preferences: true
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const toggleCookieSetting = (type) => {
        if (type === 'essential') return; // Essential cookies can't be disabled
        setCookieSettings(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    const cookieCategories = [
        {
            id: 'essential',
            name: 'Essential Cookies',
            icon: <Shield className="w-5 h-5" />,
            description: 'These cookies are necessary for the website to function and cannot be switched off.',
            required: true,
            examples: ['Session management', 'Security tokens', 'Load balancing']
        },
        {
            id: 'analytics',
            name: 'Analytics Cookies',
            icon: <BarChart3 className="w-5 h-5" />,
            description: 'Help us understand how visitors interact with our website by collecting information anonymously.',
            required: false,
            examples: ['Google Analytics', 'Page views', 'User behavior tracking']
        },
        {
            id: 'marketing',
            name: 'Marketing Cookies',
            icon: <Eye className="w-5 h-5" />,
            description: 'Used to track visitors across websites to display relevant advertisements.',
            required: false,
            examples: ['Ad targeting', 'Social media pixels', 'Retargeting campaigns']
        },
        {
            id: 'preferences',
            name: 'Preference Cookies',
            icon: <Settings className="w-5 h-5" />,
            description: 'Enable the website to remember information about your preferences and settings.',
            required: false,
            examples: ['Language settings', 'Theme preferences', 'Customization options']
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative pt-20 pb-16">
                <div className="absolute inset-0 bg-linear-to-r from-blue-100/50 to-purple-100/50"></div>
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
                            <Cookie className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
                            Cookies Policy
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Transparency in how we use cookies to enhance your experience with our software development and digital services
                        </p>
                    </div>
                </div>
            </div>

            {/* Cookie Settings Panel */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 mt-4">
                <div className="bg-white backdrop-blur-xl rounded-3xl border border-slate-200 p-8 shadow-xl">
                    <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Cookie Preferences</h2>
                            <p className="text-slate-600">Manage your cookie settings below</p>
                        </div>
                        <button className="px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg">
                            Save Preferences
                        </button>
                    </div>

                    <div className="grid gap-6">
                        {cookieCategories.map((category) => (
                            <div key={category.id} className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-linear-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-blue-600">
                                            {category.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900">{category.name}</h3>
                                            <p className="text-slate-600 text-sm">{category.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {category.required ? (
                                            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Required</span>
                                        ) : (
                                            <button
                                                onClick={() => toggleCookieSetting(category.id)}
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${cookieSettings[category.id]
                                                        ? 'bg-linear-to-r from-blue-500 to-purple-600'
                                                        : 'bg-slate-300'
                                                    }`}
                                            >
                                                <span
                                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${cookieSettings[category.id] ? 'translate-x-6' : 'translate-x-1'
                                                        }`}
                                                />
                                            </button>
                                        )}
                                        <button
                                            onClick={() => toggleSection(category.id)}
                                            className="text-slate-600 hover:text-slate-900 transition-colors"
                                        >
                                            {expandedSections[category.id] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>

                                {expandedSections[category.id] && (
                                    <div className="mt-4 pt-4 border-t border-slate-200">
                                        <h4 className="text-sm font-medium text-slate-900 mb-2">Examples:</h4>
                                        <ul className="space-y-1">
                                            {category.examples.map((example, index) => (
                                                <li key={index} className="text-sm text-slate-600 flex items-center gap-2">
                                                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                                    {example}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-20">
                <div className="bg-white backdrop-blur-xl rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-xl">

                    {/* What Are Cookies Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <Globe className="w-8 h-8 text-blue-600" />
                            What Are Cookies?
                        </h2>
                        <div className="prose prose-lg text-slate-700 max-w-none">
                            <p className="mb-4">
                                Cookies are small text files that are placed on your computer or mobile device when you visit our website.
                                They are widely used to make websites work more efficiently and provide a better user experience.
                            </p>
                            <p>
                                As a provider of <strong className="text-slate-900">software development</strong>, <strong className="text-slate-900">web development</strong>,
                                <strong className="text-slate-900"> UI/UX design</strong>, <strong className="text-slate-900">digital marketing</strong>,
                                <strong className="text-slate-900"> mobile app development</strong>, and <strong className="text-slate-900">cloud solutions</strong>,
                                we use cookies to enhance your experience and provide personalized services.
                            </p>
                        </div>
                    </section>

                    {/* How We Use Cookies */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">How We Use Cookies</h2>
                        <div className="grid gap-6">
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                    <Check className="w-5 h-5 text-green-600" />
                                    Service Enhancement
                                </h3>
                                <p className="text-slate-700">
                                    We use cookies to remember your preferences for our development services, track project inquiries,
                                    and provide customized solutions based on your business needs.
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                    <Check className="w-5 h-5 text-green-600" />
                                    Performance Monitoring
                                </h3>
                                <p className="text-slate-700">
                                    Analytics cookies help us understand how visitors interact with our portfolio, case studies,
                                    and service pages to continuously improve our offerings.
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                    <Check className="w-5 h-5 text-green-600" />
                                    Marketing Optimization
                                </h3>
                                <p className="text-slate-700">
                                    Marketing cookies enable us to show relevant content about our software solutions,
                                    web applications, and digital services to potential clients.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Third-Party Cookies */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Third-Party Cookies</h2>
                        <div className="bg-linear-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                            <div className="prose text-slate-700 max-w-none">
                                <p className="mb-4">
                                    We may use third-party services that set cookies on our website, including:
                                </p>
                                <ul className="space-y-2 text-slate-700">
                                    <li>• <strong className="text-slate-900">Google Analytics</strong> - For website performance analysis</li>
                                    <li>• <strong className="text-slate-900">Social Media Platforms</strong> - For content sharing and engagement</li>
                                    <li>• <strong className="text-slate-900">Marketing Platforms</strong> - For targeted advertising of our development services</li>
                                    <li>• <strong className="text-slate-900">Cloud Service Providers</strong> - For hosting and performance optimization</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Cookie Rights</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                <h3 className="text-lg font-semibold text-slate-900 mb-3">Browser Controls</h3>
                                <p className="text-slate-700 text-sm">
                                    You can control cookies through your browser settings. Most browsers allow you to
                                    block or delete cookies, though this may affect website functionality.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                <h3 className="text-lg font-semibold text-slate-900 mb-3">Opt-Out Options</h3>
                                <p className="text-slate-700 text-sm">
                                    You can opt out of certain cookies using the preference center above or through
                                    industry opt-out tools for advertising cookies.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            
        </div>
    );
};

export default CookiesPolicy;
