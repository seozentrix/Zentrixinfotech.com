import React from "react";
import Content from "./Content";


export const metadata = {
  title: "Our Project Portfolio | Web, Mobile & Software Solutions – Zentrix Infotech",

  description:
    "Explore the portfolio of Zentrix Infotech featuring our best digital marketing, web development, mobile app, software, UI/UX, and cloud solution projects delivered for clients across industries.",

  keywords: [
    "zentrix infotech portfolio",
    "website development portfolio",
    "software development project showcase",
    "mobile app development portfolio",
    "digital marketing work portfolio",
    "ui ux design company portfolio",
    "cloud solutions project portfolio",
    "it company project gallery",
    "real client project examples",
    "completed digital projects",
    "verified client work",
    "web development portfolio in Moradabad"
  ],

  // ✅ ✅ ✅ CANONICAL
  alternates: {
    canonical: "https://www.zentrixinfotech.com/portfolio",
  },

  // ✅ ✅ ✅ OPEN GRAPH (SAME DESCRIPTION)
  openGraph: {
    title: "Our Project Portfolio | Web, Mobile & Software Solutions – Zentrix Infotech",
    description:
      "Explore the portfolio of Zentrix Infotech featuring our best digital marketing, web development, mobile app, software, UI/UX, and cloud solution projects delivered for clients across industries.",
    url: "https://www.zentrixinfotech.com/portfolio",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Portfolio – Real Client Digital & IT Projects",
      },
    ],
  },

  // ✅ ✅ ✅ TWITTER META (SAME DESCRIPTION)
  twitter: {
    card: "summary_large_image",
    title: "Our Project Portfolio | Web, Mobile & Software Solutions – Zentrix Infotech",
    description:
      "Explore the portfolio of Zentrix Infotech featuring our best digital marketing, web development, mobile app, software, UI/UX, and cloud solution projects delivered for clients across industries.",
    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ ✅ ✅ FAVICON
  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ ✅ ✅ PORTFOLIO PAGE COMPONENT
const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;
