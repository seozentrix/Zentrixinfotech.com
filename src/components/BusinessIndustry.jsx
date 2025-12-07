"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// ServiceCard Component - Light Theme
const ServiceCard = ({ icon, title, description, iconColor, borderColor }) => {
    return (
        <div
            className="relative w-full h-80 md:h-80 bg-white rounded-xl shadow-xl text-left md:py-20 pt-15 lg:pl-45 pl-33 pr-4 md:pr-12 mx-4 border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            style={{ borderColor: borderColor }}
        >
            {/* Background Icon - positioned absolutely within the card */}
            <div
                className="absolute md:left-6 left-5 md:top-1/2 top-40 -translate-y-1/2 md:text-[180px] text-[140px] font-black select-none group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: iconColor }}
            >
                {icon}
            </div>

            {/* Content Section */}
            <div className="relative z-10">
                <h3
                    className="md:text-2xl text-xl font-bold lg:pt-8 mb-3 transition-colors duration-300"
                    style={{ color: iconColor }}
                >
                    {title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                    {description}
                </p>

                {/* Colored accent line */}
                <div
                    className="w-12 h-1 mt-4 rounded-full transition-all duration-300 group-hover:w-16"
                    style={{ backgroundColor: iconColor }}
                ></div>
            </div>

            {/* Subtle hover overlay */}
            <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{ backgroundColor: iconColor }}
            ></div>
        </div>
    );
};

// Main App Component
function App() {
    // Sample data for 8 cards with light theme colors
    const servicesData = [
        {
            icon: "B",
            title: "Business & Finance",
            description: "Driving financial growth with fintech solutions, data analytics, and secure transactions for seamless business operations.",
            iconColor: "#1a1a2e", // navy blue
            borderColor: "#1a1a2e"
        },
        {
            icon: "G",
            title: "Gaming & Entertainment",
            description: "Creating immersive gaming experiences that entertain, educate, and inspire with cutting-edge game development.",
            iconColor: "#16537e", // royal blue
            borderColor: "#16537e"
        },
        {
            icon: "C",
            title: "Cloud & IT Solutions",
            description: "Empowering businesses with cloud services, secure networks, and innovative IT strategies for seamless digital operations.",
            iconColor: "#2e86de", // deeper blue for trust and technology
            borderColor: "#2e86de"
        },
        {
            icon: "H",
            title: "Healthcare & Medical",
            description: "Revolutionizing healthcare with digital solutions, telemedicine platforms, and patient management systems.",
            iconColor: "#f48fb1", // light pink
            borderColor: "#f48fb1"
        },
        {
            icon: "E",
            title: "Education & Learning",
            description: "Empowering education through e-learning platforms, virtual classrooms, and interactive learning management systems.",
            iconColor: "#e91e63", // hot pink
            borderColor: "#e91e63"
        },
        {
            icon: "R",
            title: "Retail & E-commerce",
            description: "Transforming retail experiences with modern e-commerce solutions, inventory management, and customer analytics.",
            iconColor: "#1a1a2e", // navy blue (cycling)
            borderColor: "#16537e"
        },
        {
            icon: "T",
            title: "Transportation & Logistics",
            description: "Optimizing supply chains with smart logistics solutions, fleet management, and real-time tracking systems.",
            iconColor: "#16537e", // royal blue (cycling)
            borderColor: "#5dade2"
        },
        {
            icon: "A",
            title: "Advanced Manufacturing",
            description: "Enhancing industrial efficiency through automation, IoT integration, and predictive maintenance solutions.",
            iconColor: "#ff9800", // vibrant orange for energy and innovation
            borderColor: "#ffb74d"
        }
    ];

    return (
        <div className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-pink-50/30 py-16 relative overflow-hidden">
            {/* Subtle background decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#5dade2]/5 to-[#16537e]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#f48fb1]/5 to-[#e91e63]/5 rounded-full blur-3xl"></div>

            {/* Section Header */}
            <div className="text-center mb-16">
                {/* Vibrant Badge */}
                <div className="inline-block">
                    <div className="flex justify-center">
                        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center font-medium text-xl uppercase tracking-wider mb-2 px-6 py-2 rounded-full inline-block border border-indigo-500/20">
                            BUSINESS BENEFITS
                        </div>
                    </div>
                </div>


                {/* Colorful Main Heading */}
                <h1 className="text-4xl md:text-5xl font-normal uppercase leading-tight mb-6">
                    <span className="text-gray-900"> Business </span>
                    <span className="text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text">
                        industries
                    </span>
                </h1>

                {/* Stylized Description */}
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Streamline operations and
                    boost revenue
                    across all business sectors.

                </p>
            </div>


            {/* Swiper Carousel */}
            <div className="px-4 relative z-10">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet custom-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
                    }}
                    breakpoints={{
                        // Mobile (default): 1 slide
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                            centeredSlides: true
                        },
                        // Tablet: 2 slides  
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            centeredSlides: false
                        },
                        // Desktop: 2 slides
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            centeredSlides: false
                        }
                    }}
                    className="w-full max-w-7xl mx-auto pb-12"
                >
                    {servicesData.map((service, index) => (
                        <SwiperSlide key={index} className="h-auto min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                            <ServiceCard
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                iconColor={service.iconColor}
                                borderColor={service.borderColor}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Decorative dots */}
            <div className="flex justify-center mt-12 relative z-10">
                <div className="flex space-x-3">
                    {['#1a1a2e', '#16537e', '#5dade2', '#f48fb1', '#e91e63'].map((color, index) => (
                        <div
                            key={index}
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: color, animationDelay: `${index * 200}ms` }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Custom Pagination Styles */}
            <style jsx global>{`
                .swiper-pagination {
                    bottom: -50px !important;
                }
                
                .custom-bullet {
                    background: linear-gradient(135deg, #16537e, #5dade2) !important;
                    width: 14px !important;
                    height: 14px !important;
                    margin: 0 8px !important;
                    transition: all 0.3s ease !important;
                    opacity: 0.4 !important;
                    border: 2px solid rgba(22, 83, 126, 0.2) !important;
                }
                
                .custom-bullet-active {
                    background: linear-gradient(135deg, #f48fb1, #e91e63) !important;
                    transform: scale(1.3) !important;
                    opacity: 1 !important;
                    border: 2px solid rgba(244, 143, 177, 0.4) !important;
                    box-shadow: 0 0 20px rgba(244, 143, 177, 0.3) !important;
                }
                
                .swiper-slide {
                    display: flex !important;
                    justify-content: center !important;
                    align-items: center !important;
                }

                /* Hover effects for pagination bullets */
                .custom-bullet:hover {
                    background: linear-gradient(135deg, #1a1a2e, #16537e) !important;
                    transform: scale(1.1) !important;
                    opacity: 0.7 !important;
                }
            `}</style>
        </div>
    );
}

export default App;
