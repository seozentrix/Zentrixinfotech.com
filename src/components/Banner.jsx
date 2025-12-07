"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push("/contactus");
    }

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 mb-8">
                <div
                    className="min-h-52 flex flex-col md:flex-row justify-between items-center gap-4 rounded-xl p-5 md:p-6 mx-0 md:mx-14 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #1e40af, #0ea5e9, #f0abfc)',
                        boxShadow: '0 25px 50px rgba(30, 64, 175, 0.25)'
                    }}
                >
                    {/* Animated background overlay */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                            background: 'linear-gradient(135deg, #f0abfc, #0ea5e9, #1e40af)'
                        }}
                    ></div>

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                        <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    </div>

                    <div className="w-full md:w-1/2 py-2 relative z-10">
                        <p className="font-medium tracking-wider uppercase text-sm mb-1 group-hover:text-white transition-colors duration-300" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                            We carry more than just good coding skills
                        </p>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-thin text-white leading-tight mt-1 group-hover:scale-105 transition-transform duration-300">
                            Let's Build Your Website
                        </h1>
                    </div>

                    <div className="flex items-center justify-start md:justify-end w-full md:w-1/2 relative z-10">
                        <button
                            onClick={handleNavigate}
                            className="relative bg-white px-5 py-4 text-sm font-extrabold uppercase tracking-wide rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:scale-110 active:translate-y-0 active:shadow-lg transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-offset-3 min-w-40 cursor-pointer overflow-hidden group/button"
                            style={{
                                color: '#0f172a',
                                focusRingColor: '#f0abfc'
                            }}
                            onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px #f0abfc'}
                            onBlur={(e) => e.target.style.boxShadow = 'none'}
                        >
                            {/* Button shine effect */}
                            <span
                                className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover/button:opacity-30 transform -translate-x-full group-hover/button:translate-x-full transition-all duration-700"
                            ></span>
                            <span className="relative">Contact Us</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;