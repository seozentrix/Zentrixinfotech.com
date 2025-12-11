import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Digital Marketing & IT Services in noida | Zentrix Infotech",
  description:
    "Zentrix Infotech provides affordable digital marketing, web development, software development, mobile app development, UI/UX design, and cloud services in noida. Choose the best IT company for your business growth.",
  keywords: [
    "digital marketing in noida",
    "web development noida",
    "software development noida",
    "it company in noida",
    "marketing agency noida",
    "best it services noida",
    "affordable digital services noida"
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/noida",
  },
};

export default function Page() {
  const services = [
    { name: "Digital Marketing", slug: "digital-marketing" },
    { name: "Web Development", slug: "web-development" },
    { name: "Software Development", slug: "software-development" },
    { name: "Mobile App Development", slug: "mobile-app-development" },
    { name: "UI/UX Design", slug: "ui-ux-design" },
    { name: "Cloud Solutions", slug: "cloud-solutions" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-3 mt-30">
        Digital Marketing & IT Services in Noida
      </h1>

      <p className="text-gray-700 mb-6">
        Zentrix Infotech offers affordable and result-driven digital and IT
        solutions in noida. We help businesses grow with digital marketing,
        website development, mobile apps, software solutions, UI/UX design and
        cloud services. Select a service below to explore how we can help your
        business in noida.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Services in noida</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/cities/noida/${service.slug}`}
            className="p-5 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-gray-600 text-sm mt-1">
              Learn more about our {service.name.toLowerCase()} services in
              noida.
            </p>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-3">Why Choose Us in noida?</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
        <li>Affordable pricing for local businesses.</li>
        <li>End-to-end digital and IT solutions.</li>
        <li>Experienced team support.</li>
        <li>Trusted by multiple noida clients.</li>
        <li>Fast project delivery and real results.</li>
      </ul>

      <p className="text-gray-700">
        Need services in noida?{" "}
        <strong>Contact Zentrix Infotech</strong> today for a consultation.
      </p>
    </div>
  );
}
