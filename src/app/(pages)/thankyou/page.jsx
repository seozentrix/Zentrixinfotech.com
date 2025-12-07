import React from 'react';
import { CheckCircle, Mail, Phone, MapPin, Home } from 'lucide-react';

export default function ThankYouPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="bg-green-500 rounded-full p-4">
                            <CheckCircle className="w-16 h-16 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Your message has been received successfully. We'll get back to you within 24 hours on business days.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* What Happens Next */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                                    <span className="text-blue-600 font-bold">1</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Message Received</h3>
                                    <p className="text-gray-600">We've received your inquiry and it's been assigned to our team.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                                    <span className="text-blue-600 font-bold">2</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Review & Analysis</h3>
                                    <p className="text-gray-600">Our experts will carefully review your message and prepare a response.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                                    <span className="text-blue-600 font-bold">3</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">We'll Contact You</h3>
                                    <p className="text-gray-600">Expect to hear from us within 24 hours on business days.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* Our Offices */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <div className="bg-blue-600 rounded-xl p-3 mr-4">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Our Office</h2>
                            </div>
                            <div className="space-y-4">

                                <div>
                                    <p className="text-gray-700">1. East Thane,
                                        - 401107
                                    </p>
                                    <p className="text-gray-700">2. Gurugram,Haryana 
                                        - 122001
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Contact */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Immediate Help?</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="bg-pink-100 rounded-xl p-3 mr-4">
                                        <Mail className="w-6 h-6 text-pink-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Email Us</p>
                                        <a href="mailto:zentrixit@gmail.com" className="text-gray-900 font-medium hover:text-blue-600">
                                            zentrixinfotech@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-purple-100 rounded-xl p-3 mr-4">
                                        <Phone className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Call Us</p>
                                        <a href="tel:+61341000901" className="text-gray-900 font-medium hover:text-blue-600">
                                            +91 72488 00839
                                        </a>
                                        <p className="text-xs text-gray-500">Mon-Sat, 10AM-6PM AWST</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back to Home Button */}
                <div className="text-center">
                    <button className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                        <Home className="w-5 h-5 mr-2" />
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}