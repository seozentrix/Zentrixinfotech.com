'use client'

import React from 'react';
import { ArrowRight, Globe, Zap, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ContentPanel = ({ number, label, description, stats = [] }) => {

    const router = useRouter();

    const handleNavigate = () =>{
        router.push('/contact-us')
    }


  
    return (
        <div className="flex flex-col justify-center h-full p-8 bg-white">
            <div className="space-y-6">
                {/* Main stat */}
                <div className="space-y-2">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {number}
                    </div>
                    <div className="text-2xl font-semibold text-gray-800">{label}</div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                    {description}
                </p>

                {/* Additional stats */}
                {stats.length > 0 && (
                    <div className="grid grid-cols-3 gap-4 py-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Call to action */}
                <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl" onClick={handleNavigate}>
                    <span>Explore</span>
                    <ArrowRight className="w-5 h-5" />
                </button>

                {/* Feature icons */}
                <div className="flex space-x-4 pt-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                        <Shield className="w-5 h-5 text-blue-500" />
                        <span className="text-sm">Secure</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                        <Zap className="w-5 h-5 text-purple-500" />
                        <span className="text-sm">Fast</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                        <Globe className="w-5 h-5 text-cyan-500" />
                        <span className="text-sm">Global</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function TechPromoComponent() {
    return (
        <div className="bg-gray-50 lg:flex space-x-0 mx-24 lg:space-x-4">
            {/* First Section - Countries Worldwide */}
            <div className="grid grid-cols-1 lg:grid-cols-1 lg:w-1/2 transition duration-200 shadow-gray-300 shadow-lg hover:-translate-y-2 cursor-pointer">
                <ContentPanel
                    number="2+"
                    label="Countries Worldwide"
                    description="To succeed, every software solution must be deeply integrated into the existing tech environment. Our platform seamlessly connects with your current infrastructure while providing cutting-edge analytics and insights."
                    stats={[
                        { value: "99.9%", label: "Uptime" },
                        { value: "24/7", label: "Support" },
                        { value: "50ms", label: "Response" }
                    ]}
                />
            </div>
            {/* Second Section - Happy Customers */}
            <div className="grid grid-cols-1 lg:grid-cols-1 lg:w-1/2 transition duration-200 shadow-gray-300 shadow-lg hover:-translate-y-2 cursor-pointer">
                <ContentPanel
                    number="2k"
                    label="Happy Customers"
                    description="Our customers trust us to deliver reliable, scalable solutions that grow with their business. From startups to enterprise companies, we provide the tools needed for digital transformation success."
                    stats={[
                        { value: "4.9", label: "Rating" },
                        { value: "95%", label: "Retention" },
                        { value: "2hrs", label: "Setup" }
                    ]}
                />
            </div>
        </div>
    );
}
