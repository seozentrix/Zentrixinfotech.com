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
};

const cities = [
  { name: "Moradabad", slug: "moradabad", desc: "Digital & IT services in Moradabad" },
  { name: "Delhi", slug: "delhi", desc: "Digital marketing & web development services" },
  { name: "Noida", slug: "noida", desc: "Software, apps & IT solutions in Noida" },
  // Add more cities here
];

export default function Page() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 mt-30">Cities We Serve</h1>
      <p className="text-gray-700 mb-6">
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
            <h2 className="text-xl font-semibold">{city.name}</h2>
            <p className="text-gray-600 text-sm mt-2">{city.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
