"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

const btn = () => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push("/contact-us");
        window.scrollTo(0, 0);
    }

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 mb-8">
                <div
                    className="min-h-52 flex flex-col md:flex-row justify-between items-center gap-4 rounded-xl p-5 md:p-6 mx-0 md:mx-14 shadow-xl"
                    style={{
                        background: 'linear-gradient(135deg, #1e40af, #0ea5e9, #f0abfc)',
                        boxShadow: '0 25px 50px rgba(30, 64, 175, 0.25)'
                    }}
                >
                    <div className="w-full md:w-1/2 py-2">
                        <p className="font-bold tracking-wider uppercase text-sm mb-1" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                            We carry more than just good coding skills
                        </p>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mt-1">
                            Let's Build Your Website
                        </h1>
                    </div>
                    <div className="flex items-center justify-start md:justify-end w-full md:w-1/2">
                        <button
                            onClick={handleNavigate}
                            className="bg-white px-5 py-4 text-sm font-extrabold uppercase tracking-wide rounded-lg shadow-lg hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:shadow-lg transition-all duration-150 focus:outline-none focus:ring-3 focus:ring-offset-3 min-w-40 cursor-pointer"
                            style={{
                                color: '#0f172a',
                                focusRingColor: '#f0abfc'
                            }}
                            onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px #f0abfc'}
                            onBlur={(e) => e.target.style.boxShadow = 'none'}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default btn;
