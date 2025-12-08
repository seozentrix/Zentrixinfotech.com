import React from "react";
import Content from "./Content";

// ✅ ✅ ✅ SEO METADATA FOR SERVICES PAGE
export const metadata = {
  title: "Our Services |  Web, Software, Digital, & Cloud Solutions – Zentrix Infotech",
  description:
    "Zentrix Infotech offers affordable digital marketing, web development, mobile app development, software development, UI/UX design, and cloud solutions tailored for startups, small businesses, and growing enterprises.",

  keywords: [
    "digital marketing services company",
    "web development services company",
    "software development services",
    "mobile app development services",
    "ui ux design services",
    "cloud solutions services",
    "custom it services for business",
    "affordable digital solutions company",
  ],

  // ✅ Canonical URL
  alternates: {
    canonical: "https://www.zentrixinfotech.com/services",
  },

  // ✅ Open Graph for Social Sharing
  openGraph: {
    title: "Our Services | Web, Software, Digital, & Cloud Solutions – Zentrix Infotech",
    description:
      "Zentrix Infotech offers affordable digital marketing, web development, mobile app development, software development, UI/UX design, and cloud solutions tailored for startups, small businesses, and growing enterprises.",
    url: "https://www.zentrixinfotech.com/services",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "website",


    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech – Digital & IT Solutions Company",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary",
    title: "Our Services | Web, Software, Digital, & Cloud Solutions – Zentrix Infotech",
    description:
      "Zentrix Infotech offers affordable digital marketing, web development, mobile app development, software development, UI/UX design, and cloud solutions tailored for startups, small businesses, and growing enterprises.",

    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],  
  },

  // ✅ Favicon
  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ ✅ ✅ SERVICES PAGE COMPONENT
const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;
