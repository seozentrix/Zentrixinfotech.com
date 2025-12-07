import React from "react";

import AboutCompany from "@/components/AboutCompany";
import Hero from "@/components/Hero";
import Servicess from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import Blog from "@/components/Blogs";

// ✅ ✅ ✅ SEO METADATA (SERVER COMPONENT SAFE)
export const metadata = {
  title: "Transforming Businesses With Tech & Creativity",
  description:
    "We deliver scalable software, cloud solutions, web & mobile apps, and powerful digital marketing including SEO, Ads and Branding to help businesses grow online.",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/",
  },

  openGraph: {
    title: "Digital Marketing, Web & Software Development Company",
    description:
      "Professional digital marketing, web development, mobile apps, software solutions, UI/UX design and cloud services for startups and enterprises.",
    url: "https://www.zentrixinfotech.com/",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech – Digital & IT Solutions Company",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, Web & Software Development Company",
    description:
      "We offer digital marketing, web development, mobile apps, software development, UI/UX design and cloud solutions.",
    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ ✅ ✅ HOMEPAGE COMPONENT
const Page = () => {
  return (
    <div className="bg-[#f8fafc]">
      <Hero />
      <AboutCompany />
      <Client />
      <Servicess />
      <Portfolio />
      <Blog />
      <LovedByClients />
    </div>
  );
};

export default Page;
