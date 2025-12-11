"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

const points = [
  {
    title: "Proven Expertise",
    desc: "We bring hands-on experience in digital marketing, software, websites, apps, UI/UX, and cloud systems."
  },
  {
    title: "Affordable Pricing",
    desc: "High-quality digital and IT services at transparent and budget-friendly rates."
  },
  {
    title: "Result-Focused Work",
    desc: "Every strategy is designed to produce real results more leads, growth, performance, and visibility."
  },
  {
    title: "Clear Communication",
    desc: "We keep you updated, respond quickly, and ensure smooth collaboration throughout the project."
  },
  {
    title: "Custom Solutions",
    desc: "Every business is unique our services are tailored to your goals, industry, and target audience."
  },
  {
    title: "Trusted by Businesses",
    desc: "Startups, brands, and enterprises rely on Zentrix Infotech for consistency, quality, and reliability."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-2 bg-white">
      {/* Heading Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-medium font-serif mb-4">Why Choose Zentrix Infotech?</h2>

        <p className="text-gray-700 mb-10">
          We combine expertise, trust, and performance to deliver digital and IT solutions
          that truly support your business growth.
        </p>
      </div>

      {/* Two Column Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-8">
        {points.map((item, index) => (
          <div key={index} className="flex gap-3 items-start">
            <CheckCircle size={25} className="text-green-600 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
