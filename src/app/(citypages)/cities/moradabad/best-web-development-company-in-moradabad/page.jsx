import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Web Development Company in Moradabad | Affordable Website Solutions",
  
  description:
    "Trusted web development company in Moradabad offering affordable, fast, and SEO-friendly website development for local businesses, startups, and professionals. Grow your business online with us.",

  keywords:
    "web development company in moradabad, website development services moradabad, affordable web developer moradabad, local website designer moradabad, small business website moradabad, seo friendly website moradabad",

  // ✅ OPEN GRAPH (SOCIAL SHARING)
  openGraph: {
    title:
      "Web Development Company in Moradabad | Grow Your Business Online",

    description:
      "Trusted web development company in Moradabad offering affordable, fast, and SEO-friendly website development for local businesses, startups, and professionals. Grow your business online with us.",

    url: "https://www.zentrixinfotech.com/",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Company in Moradabad",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Web Development Company in Moradabad | Business Growth Websites",

    description:
      "Trusted web development company in Moradabad offering affordable, fast, and SEO-friendly website development for local businesses, startups, and professionals. Grow your business online with us.",

    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/favicon.ico",
  },
};


export default function Page() {
  return (
    <>
      <Banner />  
      <Client />
      <Content />
      <WhyChooseUs />
      <LandingServices />
      <Portfolio />
      <LovedByClients />
      
      
    </>
  );
}