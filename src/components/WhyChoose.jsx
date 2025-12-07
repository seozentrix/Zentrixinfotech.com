"use client";

import { CheckCircle, Users, Heart, Calendar } from "lucide-react";

export default function WhyChoose() {
    const stats = [
        {
            icon: <CheckCircle className="h-12 w-12" />,
            number: "30+",
            label: "Completed Projects",
            description: "Successfully delivered",
            gradient: "from-[#E8A4BC] to-[#3E3CAD]",
            delay: "0"
        },
        {
            icon: <Users className="h-12 w-12" />,
            number: "10+",
            label: "WordPress Developers",
            description: "Expert team members",
            gradient: "from-[#3E3CAD] to-[#33018B]",
            delay: "100"
        },
        {
            icon: <Heart className="h-12 w-12" />,
            number: "50+",
            label: "Satisfied Clients",
            description: "Happy partnerships",
            gradient: "from-[#F04393] to-[#FFC440]",
            delay: "200"
        },
        {
            icon: <Calendar className="h-12 w-12" />,
            number: "2+",
            label: "Years of Experience",
            description: "Industry expertise",
            gradient: "from-[#33018B] to-[#F04393]",
            delay: "300"
        }
    ];

    return (
        <section className="relative py-20 px-8 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#E8A4BC] to-[#3E3CAD] rounded-full opacity-10 -translate-x-48 -translate-y-48"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#F04393] to-[#FFC440] rounded-full opacity-10 translate-x-40 translate-y-40"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-[#33018B] to-[#3E3CAD] rounded-full opacity-5 -translate-x-32 -translate-y-32"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="mb-6">
                        <span className="bg-gradient-to-r from-[#3c4cad]/10 to-[#3d1b88]/10 text-[#3c4cad] px-6 py-3 rounded-full text-lg font-medium uppercase tracking-wider border border-[#3c4cad]/20">
                            OUR SUCCESS STORY
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#33018B] via-[#3E3CAD] to-[#F04393] bg-clip-text text-transparent mb-6 leading-tight">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-600 text-md lg:text-xl max-w-2xl mx-auto">
                        We deliver exceptional results through expertise, dedication, and cutting-edge solutions that drive your business forward.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
                            style={{
                                animationDelay: `${stat.delay}ms`
                            }}
                        >
                            {/* Card background gradient on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            {/* Icon container */}
                            <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                <div className="text-white">
                                    {stat.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center relative z-10">
                                <h3 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300`}>
                                    {stat.number}
                                </h3>
                                <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                                    {stat.label}
                                </h4>
                                <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                                    {stat.description}
                                </p>
                            </div>

                            {/* Floating particles effect */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-[#FFC440] to-[#F04393] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute bottom-6 left-4 w-1.5 h-1.5 bg-gradient-to-br from-[#3E3CAD] to-[#33018B] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{ animationDelay: '0.8s' }}></div>
                            <div className="absolute top-1/2 left-2 w-1 h-1 bg-gradient-to-br from-[#E8A4BC] to-[#F04393] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Additional floating elements */}
            <div className="absolute top-20 right-20 w-4 h-4 bg-gradient-to-br from-[#FFC440] to-[#F04393] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-40 left-16 w-3 h-3 bg-gradient-to-br from-[#3E3CAD] to-[#33018B] rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute top-1/3 right-10 w-2 h-2 bg-gradient-to-br from-[#E8A4BC] to-[#F04393] rounded-full opacity-25 animate-pulse"></div>
        </section>
    );
}
