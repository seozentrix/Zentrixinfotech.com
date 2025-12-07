"use client";

import React, { useState, useEffect } from 'react';

const ProcessSection = () => {
    const [activeStep, setActiveStep] = useState(0);

    const processSteps = [
        {
            id: 0,
            title: "Research",
            subtitle: "User interviews, market analysis",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
            ),
            color: "from-[#1AA687] to-[#D9FC72]",
            bgColor: "bg-[#1AA687]",
            borderColor: "border-[#1AA687]",
            textColor: "text-[#1AA687]"
        },
        {
            id: 1,
            title: "Define",
            subtitle: "Problem definition, user personas",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
            ),
            color: "from-[#F56A79] to-[#FF414D]",
            bgColor: "bg-[#F56A79]",
            borderColor: "border-[#F56A79]",
            textColor: "text-[#F56A79]"
        },
        {
            id: 2,
            title: "Ideate",
            subtitle: "Brainstorming, concept development",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                </svg>
            ),
            color: "from-[#FF414D] to-[#F56A79]",
            bgColor: "bg-[#FF414D]",
            borderColor: "border-[#FF414D]",
            textColor: "text-[#FF414D]"
        },
        {
            id: 3,
            title: "Prototype",
            subtitle: "Wireframes, interactive mockups",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11.5-9L8 10.5l1.5 1.5L8 13.5 10.5 16l1.5-1.5L13.5 16 16 13.5 14.5 12 16 10.5 13.5 8 12 9.5 10.5 8zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
                </svg>
            ),
            color: "from-[#1AA687] to-[#D9FC72]",
            bgColor: "bg-[#1AA687]",
            borderColor: "border-[#1AA687]",
            textColor: "text-[#1AA687]"
        },
        {
            id: 4,
            title: "Test",
            subtitle: "User testing, feedback iteration",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
            ),
            color: "from-[#002D40] to-[#1AA687]",
            bgColor: "bg-[#002D40]",
            borderColor: "border-[#002D40]",
            textColor: "text-[#002D40]"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prevStep) => (prevStep + 1) % processSteps.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [processSteps.length]);

    return (
        <div className="w-full bg-white py-8 lg:py-16 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="md:text-5xl text-4xl font-semibold uppercase text-[#002D40] mb-4">Design <span className='bg-gradient-to-r from-[#822fff] via-[#ff35c4] to-[#fee140] bg-clip-text text-transparent'>Process</span></h2>
                    <p className="text-[#1AA687]  text-lg">Our systematic approach to creating user-centered designs</p>
                </div>

                {/* Process Steps */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {processSteps.map((step, index) => (
                        <div key={step.id} className="flex flex-col lg:flex-row items-center">
                            {/* Step Container */}
                            <div className="relative group">
                                {/* Glow Effect */}
                                <div
                                    className={`absolute -inset-1 rounded-2xl transition-all duration-1000 ${activeStep === index
                                        ? `bg-gradient-to-r ${step.color} opacity-20 blur-md`
                                        : 'opacity-0'
                                        }`}
                                ></div>

                                {/* Step Card */}
                                <div
                                    className={`relative border-2 rounded-2xl p-8 transition-all duration-500 ${activeStep === index
                                        ? `${step.bgColor} border-transparent transform scale-105 shadow-2xl`
                                        : `bg-white ${step.borderColor} hover:bg-gray-50`
                                        }`}
                                >
                                    {/* Icon */}
                                    <div className={`mb-6 transition-colors flex justify-center duration-500 ${activeStep === index ? 'text-white' : step.textColor
                                        }`}>
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${activeStep === index ? 'text-white' : 'text-[#002D40]'
                                            }`}>
                                            {step.title}
                                        </h3>
                                        <p className={`text-sm leading-relaxed transition-colors duration-500 ${activeStep === index ? 'text-white/90' : step.textColor
                                            }`}>
                                            {step.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow (hidden on last item) */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden lg:block mx-4">
                                    <svg
                                        className="w-8 h-8 text-gray-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center mt-12 space-x-2">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-500 ${activeStep === index
                                ? `${step.bgColor} scale-125 shadow-lg`
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        ></div>
                    ))}
                </div>

                {/* Step Counter */}
                <div className="text-center mt-8">
                    <span className="text-gray-500 text-sm">
                        Step {activeStep + 1} of {processSteps.length}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;
