import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Cities We Serve | Zentrix Infotech",
  description:
    "Explore the list of cities where Zentrix Infotech provides affordable digital marketing, web development, software development, mobile app development, UI/UX design, and cloud solutions.",
  keywords: [
    "digital marketing in india",
    "web development cities",
    "it services locations",
    "zentrix infotech cities",
    "services by city",
    "digital services near me"
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Cities We Serve | Zentrix Infotech",

    description:
      "Explore the list of cities where Zentrix Infotech provides affordable digital marketing, web development, software development, mobile app development, UI/UX design, and cloud solutions.",

    url: "https://www.zentrixinfotech.com/",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Cities We Serve | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Cities We Serve | Zentrix Infotech",

    description:
      "Explore the list of cities where Zentrix Infotech provides affordable digital marketing, web development, software development, mobile app development, UI/UX design, and cloud solutions.",

    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ ✅ ✅ FAVICON
  icons: {
    icon: "/favicon.ico",
  },
};

const cities = [
  { name: "Moradabad", slug: "moradabad", desc: "Digital & IT services in Moradabad" },
  { name: "Delhi", slug: "delhi", desc: "Digital & IT services in Moradabad" },
  { name: "Noida", slug: "noida", desc: "Digital & IT services in Moradabad" },
  // Add more cities here
];

export default function Page() {
  return (
    <div className="p-8">
      <h1 className="text-5xl font-medium text-center mb-4 mt-30 font-serif">Cities We Serve</h1>
      <p className="text-gray-700 text-center mb-6">
        Zentrix Infotech provides digital marketing, web development, software solutions,
        mobile app development, UI/UX design, and cloud services across multiple cities.
        Select your city below to explore our services in that region.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/cities/${city.slug}`}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex items-start gap-3">
              <svg 
                className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" 
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
              <div>
                <h2 className="text-xl font-medium font-serif">{city.name}</h2>
                <p className="text-gray-600 text-sm mt-2">{city.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}