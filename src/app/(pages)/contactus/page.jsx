"use client";

import { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        topic: '',
        message: ''
    });
    const [filledFields, setFilledFields] = useState({});

    const handleFieldChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setFilledFields(prev => ({
            ...prev,
            [field]: value && value.trim() !== ''
        }));
    };

    return (
        <div className="bg-linear-to-br from-gray-50 to-gray-100 mt-20 py-22 overflow-x-hidden">
            {/* Modern Hero Section */}
            <div className="text-center mb-10 mt-6">
                <div className="inline-flex items-center px-6 py-3 rounded-full text-lg font-medium bg-linear-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 text-teal-400 mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                    <svg className="w-4 h-4 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    CONTACT US
                    <div className="ml-2 w-2 h-2 bg-emerald-600 rounded-full animate-ping" />
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
                </div>

                <h2 className="text-5xl md:text-7xl font-medium font-serif mb-8 leading-tight">
                    <span className="text-slate-900 block">Let's start a conversation</span>
                    <span className="block bg-linear-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mt-2 relative">
                        about your project
                        <div className="absolute -top-6 -right-6 w-12 h-12 bg-linear-to-r from-emerald-400 to-blue-500 rounded-full animate-bounce opacity-40 blur-sm" />
                    </span>
                </h2>
                <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                    We're here to help bring your ideas to life. Reach out to us and let's discuss how we can transform your vision into a powerful digital solution.
                </p>
            </div>

            {/* Main Content */}
            <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Grid Layout */}
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
                        {/* Left: Contact Information */}
                        <div className="space-y-6 sm:space-y-8">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-3 sm:mb-4">
                                    LET'S CONNECT
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                                    We endeavor to answer all inquiries within 24 hours on business days. Choose your preferred way to reach us.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-4 sm:space-y-6">
                                {/* Address Card */}
                                <div className="group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                    <div className="flex items-start gap-4 sm:gap-6">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 bg-linear-to-br from-[#1E293B] to-[#3B82F6] rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-2 sm:mb-3">Our Offices</h3>
                                            <div className="space-y-2">
                                                <p className="text-sm sm:text-base text-gray-600 wrap-break-word">
                                                    {/* <span className="font-semibold text-[#3B82F6]">India:</span><br /> */}
                                                    1. East Thane, 
                                                    Mumbai - 401107
                                                </p>
                                                <p className="text-sm sm:text-base text-gray-600 wrap-break-word">
                                                   2. Gurugram,Haryana 
                                                    - 122001
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Email Card */}
                                <div className="group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                    <div className="flex items-start gap-4 sm:gap-6">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 bg-linear-to-br from-[#1E293B] to-[#3B82F6] rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-2 sm:mb-3">Email Us</h3>
                                            <p className="text-sm sm:text-base text-gray-600 font-medium break-all">info@zentrixinfotech.com</p>
                                            <p className="text-xs sm:text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone Card */}
                                <div className="group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                    <div className="flex items-start gap-4 sm:gap-6">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 bg-linear-to-br from-[#1E293B] to-[#3B82F6] rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-2 sm:mb-3">Call Us</h3>
                                            <p className="text-sm sm:text-base text-gray-600 font-medium">+91 72488 00839</p>
                                            <p className="text-xs sm:text-sm text-gray-500 mt-1">Mon-Sat, 10AM-6PM AWST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="lg:sticky lg:top-8">
                            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl border border-gray-100">
                                <div className="mb-6 sm:mb-8">
                                    <h3 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text uppercase text-transparent mb-2 sm:mb-3">
                                        Send us a Message
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                                </div>

                                <form
                                    action="https://formsubmit.co/info@zentrixinfotech.com"
                                    method="POST"
                                    className="space-y-4 sm:space-y-6"
                                >
                                    {/* Hidden fields for FormSubmit configuration */}
                                    <input type="hidden" name="_next" value="https://yourdomain.com/thankyou" />
                                    <input type="hidden" name="_subject" value="New Contact Form Submission" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />

                                    {/* Name Field */}
                                    <div className="relative">
                                        <input
                                            className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-gray-200 bg-gray-50 text-gray-900 text-sm sm:text-base outline-none transition-all duration-200 focus:border-[#3B82F6] focus:bg-white focus:shadow-lg focus:shadow-[#3B82F6]/10"
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => handleFieldChange('name', e.target.value)}
                                            autoComplete="name"
                                            required
                                        />
                                        <label
                                            className={`absolute left-3 sm:left-4 px-2 bg-white text-gray-500 text-sm sm:text-base pointer-events-none transition-all duration-200 origin-left ${filledFields.name
                                                ? 'top-0 scale-90 -translate-y-1/2 text-[#3B82F6] font-medium'
                                                : 'top-3 sm:top-4'
                                                }`}
                                            htmlFor="name"
                                        >
                                            Your Name *
                                        </label>
                                    </div>

                                    {/* Email Field */}
                                    <div className="relative">
                                        <input
                                            className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-gray-200 bg-gray-50 text-gray-900 text-sm sm:text-base outline-none transition-all duration-200 focus:border-[#3B82F6] focus:bg-white focus:shadow-lg focus:shadow-[#3B82F6]/10"
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleFieldChange('email', e.target.value)}
                                            autoComplete="email"
                                            required
                                        />
                                        <label
                                            className={`absolute left-3 sm:left-4 px-2 bg-white text-gray-500 text-sm sm:text-base pointer-events-none transition-all duration-200 origin-left ${filledFields.email
                                                ? 'top-0 scale-90 -translate-y-1/2 text-[#3B82F6] font-medium'
                                                : 'top-3 sm:top-4'
                                                }`}
                                            htmlFor="email"
                                        >
                                            Your Email *
                                        </label>
                                    </div>

                                    {/* Mobile and Topic Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <input
                                                className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-gray-200 bg-gray-50 text-gray-900 text-sm sm:text-base outline-none transition-all duration-200 focus:border-[#3B82F6] focus:bg-white focus:shadow-lg focus:shadow-[#3B82F6]/10"
                                                id="mobile"
                                                name="mobile"
                                                type="tel"
                                                value={formData.mobile}
                                                onChange={(e) => handleFieldChange('mobile', e.target.value)}
                                                pattern="\\+?[0-9\\s-]{7,}"
                                                required
                                            />
                                            <label
                                                className={`absolute left-3 sm:left-4 px-2 bg-white text-gray-500 text-sm sm:text-base pointer-events-none transition-all duration-200 origin-left ${filledFields.mobile
                                                    ? 'top-0 scale-90 -translate-y-1/2 text-[#3B82F6] font-medium'
                                                    : 'top-3 sm:top-4'
                                                    }`}
                                                htmlFor="mobile"
                                            >
                                                Mobile Number *
                                            </label>
                                        </div>

                                        <div className="relative">
                                            <select
                                                className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-gray-200 bg-gray-50 text-gray-900 text-sm sm:text-base outline-none transition-all duration-200 focus:border-[#3B82F6] focus:bg-white focus:shadow-lg focus:shadow-[#3B82F6]/10 appearance-none"
                                                id="topic"
                                                name="topic"
                                                value={formData.topic}
                                                onChange={(e) => handleFieldChange('topic', e.target.value)}
                                                onFocus={(e) => e.target.size = 6}
                                                onBlur={(e) => e.target.size = 1}
                                                required
                                                style={{
                                                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                                    backgroundPosition: 'right 12px center',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: '14px'
                                                }}
                                            >
                                                <option value="" disabled>Choose Topic *</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="Mobile Development">Mobile Development</option>
                                                <option value="Web Development">Web Development</option>
                                                <option value="Software Development">Software Development</option>
                                                <option value="Ui & Ux Designer">UI & UX Designer</option>
                                                <option value="Cloud Solutions">Cloud Solutions</option>
                                            </select>
                                            <label
                                                className={`absolute left-3 sm:left-4 px-2 bg-white text-gray-500 text-sm sm:text-base pointer-events-none transition-all duration-200 origin-left ${filledFields.topic
                                                    ? 'top-0 scale-90 -translate-y-1/2 text-[#3B82F6] font-medium'
                                                    : 'top-3 sm:top-4'
                                                    }`}
                                                htmlFor="topic"
                                            >
                                                Topic
                                            </label>
                                        </div>

                                    </div>

                                    {/* Message Field */}
                                    <div className="relative">
                                        <textarea
                                            className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-gray-200 bg-gray-50 text-gray-900 text-sm sm:text-base outline-none transition-all duration-200 focus:border-[#3B82F6] focus:bg-white focus:shadow-lg focus:shadow-[#3B82F6]/10 min-h-28 sm:min-h-32 resize-y"
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={(e) => handleFieldChange('message', e.target.value)}
                                            required
                                        />
                                        <label
                                            className={`absolute left-3 sm:left-4 px-2 bg-white text-gray-500 text-sm sm:text-base pointer-events-none transition-all duration-200 origin-left ${filledFields.message
                                                ? 'top-0 scale-90 -translate-y-1/2 text-[#3B82F6] font-medium'
                                                : 'top-3 sm:top-4'
                                                }`}
                                            htmlFor="message"
                                        >
                                            Your Message *
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                                        <button
                                            type="submit"
                                            className="w-full sm:w-auto px-6 sm:px-8 cursor-pointer py-3 sm:py-4 bg-linear-to-br from-blue-600 to-cyan-500 text-white text-sm sm:text-base font-bold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-600/30"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
