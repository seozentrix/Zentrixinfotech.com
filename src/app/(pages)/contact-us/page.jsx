import React from "react";
import Content from "./Content";

// ✅ SEO METADATA FOR CONTACT PAGE
export const metadata = {
  title:
    "Contact Us | Zentrix Infotech – Talk to Our Digital & IT Solutions Team",

  // ✅ SAME DESCRIPTION USED EVERYWHERE
  description:
    "Get in touch with Zentrix Infotech for affordable digital marketing, web development, software, mobile app, UI/UX design, and cloud solutions. Contact our team for project enquiries, quotes, and collaboration opportunities.",

  // ✅ LOW-COMPETITION, CONTACT-FOCUSED KEYWORDS
  keywords: [
    "contact zentrix infotech",
    "contact digital marketing company",
    "get in touch with it solutions company",
    "contact web development team",
    "request quote for software development",
    "business enquiries zentrix infotech",
    "contact for mobile app development",
    "contact ui ux design company",
    "affordable digital services contact",
    "project enquiry zentrix infotech",
    "affordable software services contact",
  ],

  // ✅ CANONICAL URL
  alternates: {
    canonical: "https://www.zentrixinfotech.com/contact-us",
  },

  // ✅ OPEN GRAPH (USES SAME DESCRIPTION)
  openGraph: {
    title:
      "Contact Us | Zentrix Infotech – Talk to Our Digital & IT Solutions Team",
    description:
      "Get in touch with Zentrix Infotech for affordable digital marketing, web development, software, mobile app, UI/UX design, and cloud solutions. Contact our team for project enquiries, quotes, and collaboration opportunities.",
    url: "https://www.zentrixinfotech.com/contact-us",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg", // 🔁 Replace with your actual contact banner image
        width: 1200,
        height: 630,
        alt: "Contact Zentrix Infotech – Digital & IT Solutions Team",
      },
    ],
  },

  // ✅ TWITTER CARD (USES SAME DESCRIPTION)
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Us | Zentrix Infotech – Talk to Our Digital & IT Solutions Team",
    description:
      "Get in touch with Zentrix Infotech for affordable digital marketing, web development, software, mobile app, UI/UX design, and cloud solutions. Contact our team for project enquiries, quotes, and collaboration opportunities.",
    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ CONTACT PAGE COMPONENT
const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;
