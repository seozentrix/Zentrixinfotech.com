import React from "react";
import Link from "next/link";
import LandingServices from "@/components/LandingServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import { mbddata } from "@/data/mbddata";

export const metadata = {
  title: "Digital Marketing & IT Services in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech provides affordable digital marketing, web development, software development, mobile app development, UI/UX design, and cloud services in Moradabad. Choose the best IT company for your business growth.",
  keywords: [
    "digital marketing in moradabad",
    "web development moradabad",
    "software development moradabad",
    "it company in moradabad",
    "marketing agency moradabad",
    "best it services moradabad",
    "affordable digital services moradabad"
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Digital Marketing & IT Services in Moradabad | Zentrix Infotech",

    description:
      "Zentrix Infotech provides affordable digital marketing, web development, software development, mobile app development, UI/UX design, and cloud services in Moradabad. Choose the best IT company for your business growth.",

    url: "https://www.zentrixinfotech.com/",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing & IT Services in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Digital Marketing & IT Services in Moradabad | Zentrix Infotech",

    description:
      "Zentrix Infotech provides affordable digital marketing, web development, software development, mobile app development, UI/UX design, and cloud services in Moradabad. Choose the best IT company for your business growth.",

    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ ✅ ✅ FAVICON
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-4 mt-30">
            <svg 
              className="w-8 h-8 text-blue-600 mr-3" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            <span className="text-blue-600 font-semibold text-lg">Moradabad</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-medium font-serif text-center mb-4">
            Digital Marketing & IT Services in Moradabad
          </h1>

          <p className="text-gray-700 text-center text-lg mb-0 max-w-7xl mx-auto leading-relaxed">
            Zentrix Infotech is your trusted partner for affordable and result-driven digital and IT
            solutions in Moradabad. We help businesses grow with digital marketing,
            website development, mobile apps, software solutions, UI/UX design and
            cloud services. Select a service below to explore how we can help your
            business thrive in Moradabad.
          </p>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Leading IT Company in Moradabad – Your Digital Growth Partner
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Moradabad, known as the "Brass City" of India, is rapidly emerging as a hub for small and medium enterprises. 
            As businesses in Moradabad expand their digital presence, the demand for reliable IT and digital marketing 
            services has grown exponentially. Zentrix Infotech stands at the forefront of this digital transformation, 
            offering comprehensive solutions tailored to the local business landscape.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Our Expertise in Moradabad's Digital Landscape
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            With years of experience serving businesses across Moradabad, we understand the unique challenges and 
            opportunities in this market. Whether you're a traditional brass industry looking to establish an online 
            presence or a modern startup seeking cutting-edge software solutions, our team delivers customized strategies 
            that align with your business goals and budget.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Comprehensive Digital Marketing Services
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our digital marketing services in Moradabad encompass SEO, social media marketing, Google Ads management, 
            content marketing, and email campaigns. We help local businesses increase their visibility, attract more 
            customers, and build a strong online reputation. Our data-driven approach ensures every marketing rupee 
            you invest delivers measurable results and sustainable growth.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Custom Web & Software Development
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            From responsive websites to complex enterprise software, we build digital solutions that empower your business. 
            Our developers create fast, secure, and user-friendly platforms that enhance customer experience and streamline 
            your operations. We specialize in e-commerce solutions, business management systems, and custom web applications 
            designed specifically for Moradabad businesses.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Mobile App Development for Local Businesses
          </h3>
          <p className="text-gray-700 leading-relaxed">
            In today's mobile-first world, having a dedicated app can set your business apart. We develop Android and iOS 
            applications that connect you directly with your customers in Moradabad and beyond. Our apps are designed for 
            performance, security, and seamless user experience across all devices.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-0">
        <LandingServices />
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-0">
        <div className="max-w-7xl mx-auto px-8 mb-10">
          <WhyChooseUs />
        </div>
      </div>

      {/* Related Pages Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-serif font-medium text-center mb-3">
            Explore Other Cities
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Discover detailed information about each service we offer in Other cities
          </p>
          
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {mbddata.map((city, index) => (
    <Link
      key={index}
      href={`/cities/${city.slug}`}
      className="group"
    >
      <div className="flex items-start gap-3">

        {/* 📍 Location Icon */}
        <svg
          className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 21c4.418-4.418 7-7.582 7-11a7 7 0 10-14 0c0 3.418 2.582 6.582 7 11z"
          />
        </svg>

        <div>
          <h3 className="text-lg font-serif font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {city.name}
          </h3>
        </div>
      </div>
    </Link>
  ))}
</div>



        </div>
      </div>

      
    </div>
  );
}