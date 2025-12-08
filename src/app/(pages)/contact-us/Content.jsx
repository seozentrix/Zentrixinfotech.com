"use client";

import { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: '',
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
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 mt-10 py-20 overflow-x-hidden">
            {/* Modern Hero Section */}
            <div className="text-center mb-10 mt-6">
                <div className="inline-flex items-center px-6 py-3 rounded-full text-lg font-medium bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 text-teal-400 mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                    <svg className="w-4 h-4 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    CONTACT US
                    <div className="ml-2 w-2 h-2 bg-emerald-600 rounded-full animate-ping" />
                </div>

                <h2 className="text-4xl md:text-7xl font-medium font-serif mb-4 leading-tight">
                    <span className="text-slate-900 text-6xl block">Let's start a conversation</span>
                    
                </h2>
                <p className="text-1xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                    We're here to help bring your ideas to life. Reach out to us and let's discuss how we can transform your vision into a powerful digital solution.
                </p>
            </div>

            {/* Main Content */}
            <section className="py-8 sm:py-12 md:py-1 px-4 sm:px-6 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Grid Layout */}
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-20 items-start">
                        {/* Left: Contact Information */}
                        <div className="space-y-2">
                            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
                                <h2 className="text-3xl sm:text-3xl font-bold bg-gradient-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-3 sm:mb-4">
                                    LET'S CONNECT
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    We endeavor to answer all inquiries within 24 hours on business days. Choose your preferred way to reach us.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-2">
                                {/* Address Card */}
                                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-gradient-to-br from-[#1E293B] to-[#3B82F6] rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-2">Our Offices</h3>
                                            <div className="space-y-2">
                                                <p className="text-sm text-gray-600 wrap-break-word">
                                                    1. D 2102, Kakad Paradice, Miraroad - East, Thane (Mumbai)
                                                    - 401107
                                                </p>
                                                <p className="text-sm text-gray-600 wrap-break-word">
                                                   2. A-20 Sunshine Apartment, Ghaziabad, UP - 201013
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Email Card */}
                                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-gradient-to-br from-[#1E293B] to-[#3B82F6] rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-2">Email Us</h3>
                                            <p className="text-sm text-gray-600 font-medium break-all">info@zentrixinfotech.com</p>
                                            <p className="text-xs text-gray-500 mt-1">We'll respond within 24 hours</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone Card */}
                                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-gradient-to-br from-[#1E293B] to-[#3B82F6] rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-2">Call Us</h3>
                                            <p className="text-sm text-gray-600 font-medium">+91 72488 00839, +91 6397036898</p>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="lg:sticky lg:top-8">
                            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
                                <div className="mb-6">
                                    <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-2 sm:mb-3">
                                        Send us a Message
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                                </div>

                                <form
                                    action="https://formsubmit.co/zentrixit@gmail.com"
                                    method="POST"
                                    className="space-y-4"
                                >
                                    {/* Hidden fields for FormSubmit configuration */}
                                    <input type="hidden" name="_next" value="https://zentrixinfotech.com/thankyou" />
                                    <input type="hidden" name="_subject" value="New Contact Form Submission" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />
                                    {/* Name Field */}
                                        <div className="relative">
                                            <input
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50/50 text-gray-900 text-sm outline-none transition-all duration-300 focus:border-[#3B82F6] focus:bg-white focus:shadow-md placeholder-transparent peer"
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={(e) => handleFieldChange('name', e.target.value)}
                                                autoComplete="name"
                                            />
                                            <label
                                                className="absolute left-3 -top-2.5 px-2 bg-white text-[#3B82F6] text-xs font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#3B82F6]"
                                                htmlFor="name"
                                            >
                                                Your Name
                                            </label>
                                        </div>
                                    {/* Two Column Grid */}
                                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-5">
                                        

                                        {/* Email Field */}
                                        <div className="relative">
                                            <input
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50/50 text-gray-900 text-sm outline-none transition-all duration-300 focus:border-[#3B82F6] focus:bg-white focus:shadow-md placeholder-transparent peer"
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={(e) => handleFieldChange('email', e.target.value)}
                                                autoComplete="email"
                                            />
                                            <label
                                                className="absolute left-3 -top-2.5 px-2 bg-white text-[#3B82F6] text-xs font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#3B82F6]"
                                                htmlFor="email"
                                            >
                                                Your Email
                                            </label>
                                        </div>

                                        {/* Mobile Field */}
                                        <div className="relative">
                                            <input
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50/50 text-gray-900 text-sm outline-none transition-all duration-300 focus:border-[#3B82F6] focus:bg-white focus:shadow-md placeholder-transparent peer"
                                                id="mobile"
                                                name="mobile"
                                                type="tel"
                                                placeholder="Mobile Number"
                                                value={formData.mobile}
                                                onChange={(e) => handleFieldChange('mobile', e.target.value)}
                                                pattern="\\+?[0-9\\s-]{7,}"
                                                required
                                            />
                                            <label
                                                className="absolute left-3 -top-2.5 px-2 bg-white text-[#3B82F6] text-xs font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#3B82F6]"
                                                htmlFor="mobile"
                                            >
                                                Mobile Number *
                                            </label>
                                        </div>

                                    </div>

                                    
                                        {/* Service Interest Field */}
                                        <div className="relative">
                                            <select
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50/50 text-gray-900 text-sm outline-none transition-all duration-300 focus:border-[#3B82F6] focus:bg-white focus:shadow-md appearance-none cursor-pointer"
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={(e) => handleFieldChange('service', e.target.value)}
                                                style={{
                                                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                                    backgroundPosition: 'right 12px center',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: '18px'
                                                }}
                                            >
                                                <option value="">Select a Service</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="Mobile Development">Mobile Development</option>
                                                <option value="Web Development">Web Development</option>
                                                <option value="Software Development">Software Development</option>
                                                <option value="UI & UX Design">UI & UX Design</option>
                                                <option value="Cloud Solutions">Cloud Solutions</option>
                                            </select>
                                            <label
                                                className={`absolute left-3 -top-2.5 px-2 bg-white text-xs font-medium pointer-events-none transition-all duration-200 ${
                                                    filledFields.service ? 'text-[#3B82F6]' : 'text-gray-500'
                                                }`}
                                                htmlFor="service"
                                            >
                                                Service Interest
                                            </label>
                                        </div>

                                    {/* Message Field */}
                                    <div className="relative">
                                        <textarea
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50/50 text-gray-900 text-sm outline-none transition-all duration-300 focus:border-[#3B82F6] focus:bg-white focus:shadow-md min-h-28 resize-y placeholder-transparent peer"
                                            id="message"
                                            name="message"
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={(e) => handleFieldChange('message', e.target.value)}
                                        />
                                        <label
                                            className="absolute left-3 -top-2.5 px-2 bg-white text-[#3B82F6] text-xs font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#3B82F6]"
                                            htmlFor="message"
                                        >
                                            Your Message
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-5">
                                        <button
                                            type="submit"
                                            className="w-full px-6 py-3 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-[#2563EB] hover:to-[#1D4ED8] transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
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