"use client";

import React from 'react'
import { useRouter } from 'next/navigation';

const AboutCompany = () => {

    const router = useRouter();

    const handleNavigate = () => {
        router.push('/about-us')

    }
    return (
        <>
            <section className="bg-white py-1 px-5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">


                        {/* Right Side - Content */}
                        <div className="space-y-6">
                            {/* Section Label */}
                            <div className="text-teal-500 font-medium text-lg uppercase tracking-wide bg-linear-to-r from-emerald-400/10 to-teal-400/10 px-4 py-2 rounded-full inline-block border border-emerald-400/30 shadow-sm">
                                ABOUT COMPANY
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-4xl lg:text-5xl uppercase font-medium font-serif text-gray-900 leading-tight">
                                Crafting the future
                                <br />
                                <span className="block bg-linear-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2 relative">
                                    of digital innovation
                                </span>
                            </h2>


                            {/* Description Text */}
                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                <p className="relative">
                                    Founded with a vision to bridge the gap between technology and real-world business challenges, Zentrix Infotech is a team of passionate technologists driving meaningful digital transformation. We craft smart, user-focused solutions that solve real problems, elevate user experiences, and deliver measurable business growth.
                                    Built on trust, transparency, and innovation, every project we undertake is driven by impact and long-term value. From ambitious startups to established enterprises, we empower businesses to grow, scale, and succeed in the digital era.
                                    
                                </p>

                                <div className="relative p-4 bg-linear-to-r from-[#f0ca4d]/10 to-[#f56a6a]/10 rounded-lg border-l-4 border-[#f0ca4d]">
                                    <p className="font-semibold text-gray-800 italic">
                                        We optimize enterprise technology systems to eliminate challenges, enhance performance, and accelerate business growth.
                                    </p>
                                </div>
                            </div>


                            {/* Feature Highlights */}
                            <div className="grid grid-cols-2 gap-4 py-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-[#f56a6a] rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">Web Development</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-[#3c4cad] rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">Digital Marketing</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-[#f04393] rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">Mobile Apps</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-[#f0ca4d] rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">IT Solutions</span>
                                </div>
                            </div>

                            {/* Call-to-Action Button */}
                            <div className="pt-4">
                                <button
                                    onClick={handleNavigate}
                                    className="cursor-pointer 
        bg-linear-to-r from-[#3dd5c5] via-[#2dd4bf] to-[#14b8a6] 
        text-white font-semibold py-4 px-8 rounded-full 
        transition-all duration-300 ease-in-out 
        transform hover:scale-105 
        flex items-center justify-center gap-2 
        shadow-lg hover:shadow-2xl 
        border border-white/20"
                                >
                                    <span className="cursor-pointer">Know More</span>
                                    <svg
                                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>

                            </div>

                        </div>


                        {/* Right Side - Image */}
                        <div className="relative">


                            <div className="relative">
                                <img
                                    src="https://plus.unsplash.com/premium_vector-1682306737276-670b799c9d1c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Team collaboration and technology innovation"
                                    className="w-full h-[460px] rounded-lg shadow-xl object-cover border-2 border-white/50 "
                                />

                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutCompany;
