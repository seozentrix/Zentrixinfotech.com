import React from "react";
import Aboutcontent from "./Aboutcontent";

// ✅ ✅ ✅ SEO METADATA FOR ABOUT PAGE
export const metadata = {
  title: "About Zentrix Infotech | Trusted Digital & IT Solutions Partner",
  description:
    "Discover Zentrix Infotech, a trusted digital marketing, web development, software, UI/UX, and cloud solutions company helping businesses grow with innovation and performance-driven technology.",

  keywords: [
    "about zentrix infotech",
    "it solutions company",
    "digital marketing company profile",
    "web development company team",
    "software development experts",
    "ui ux design team",
    "cloud solutions company",
    "technology solutions partner",
  ],

  // ✅ Canonical URL
  alternates: {
    canonical: "https://www.zentrixinfotech.com/about-us",
  },

  // ✅ Open Graph (For social sharing)
  openGraph: {
    title: "About Zentrix Infotech | Trusted Digital & IT Solutions Partner",
    description:
      "Discover Zentrix Infotech, a trusted digital marketing, web development, software, UI/UX, and cloud solutions company helping businesses grow with innovation and performance-driven technology.",
    url: "https://www.zentrixinfotech.com/about-us",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "website",
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary",
    title: "About Zentrix Infotech | Trusted Digital & IT Solutions Partner",
    description:
      "Discover Zentrix Infotech, a trusted digital marketing, web development, software, UI/UX, and cloud solutions company helping businesses grow with innovation and performance-driven technology.",
  },

  // ✅ Favicon
  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ ✅ ✅ ABOUT PAGE COMPONENT
const Page = () => {
  return (
    <div>
      <Aboutcontent />
    </div>
  );
};

export default Page;
