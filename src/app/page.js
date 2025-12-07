import React from "react";

import AboutCompany from "@/components/AboutCompany";
import Hero from "@/components/Hero";
import Servicess from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import Blog from "@/components/Blogs";

// ✅ ✅ ✅ CORRECT SEO META TAGS FOR ZENTRIX INFOTECH LLP
export const metadata = {
  title:
    "Zentrix Infotech LLP – Digital Marketing, Web & Software Development Company",

  description:
    "Zentrix Infotech LLP is a professional digital marketing, web development, mobile app, software development, UI/UX design, and cloud solutions company delivering affordable IT services for businesses.",

  keywords: [
    "digital marketing company",
    "web development company",
    "software development company",
    "mobile app development company",
    "ui ux design company",
    "cloud solutions company",
    "branding and designing company",
    "it solutions company",
    "seo services company",
    "affordable digital marketing company",
    "best digital marketing services for small business",
    "custom web development company",
    "professional website development services",
    "custom software development services",
    "business software solutions company",
    "affordable mobile app development services",
    "android and ios app development company",
    "ui ux design services for startups",
    "user interface and experience design company",
    "cloud solutions for small business",
    "cloud deployment and migration services",
    "branding and graphic designing company",
    "creative branding solutions for business",
    "seo services for small businesses",
    "local seo and website optimization services",
    "it solutions company for startups",
    "affordable it services company"
  ],

  // ✅ ✅ ✅ CANONICAL URL
  alternates: {
    canonical: "https://www.zentrixinfotech.com/",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Zentrix Infotech LLP – Digital Marketing, Web & Software Development Company",

    description:
      "Zentrix Infotech LLP delivers reliable digital marketing, web development, mobile apps, software development, UI/UX design, and cloud IT solutions for startups and enterprises.",

    url: "https://www.zentrixinfotech.com/",
    siteName: "Zentrix Infotech LLP",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech LLP – Digital & IT Solutions Company",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Zentrix Infotech LLP – Digital Marketing, Web & Software Development Company",

    description:
      "Zentrix Infotech LLP is a professional IT solutions company offering digital marketing, web development, mobile apps, software development, UI/UX design, and cloud solutions.",

    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ ✅ ✅ FAVICON
  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ ✅ ✅ PAGE COMPONENT
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
