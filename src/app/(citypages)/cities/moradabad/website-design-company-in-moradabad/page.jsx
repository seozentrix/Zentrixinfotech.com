import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Website Design Company in Moradabad | Custom & Responsive",
  
  description:
    "Best website design company in Moradabad creating modern, user-friendly websites. Get custom web designs with Zentrix Infotech.",

  keywords:
    "website design Moradabad, web design company, responsive design, UI design, UX design, custom websites, e-commerce design, mobile-friendly sites, Zentrix Infotech",

  // ✅ OPEN GRAPH (SOCIAL SHARING)
  openGraph: {
    title:
      "Website Design Company in Moradabad | Custom & Responsive",

    description:
      "Best website design company in Moradabad creating modern, user-friendly websites. Get custom web designs with Zentrix Infotech.",

    url: "https://www.zentrixinfotech.com/",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Website Design Company in Moradabad | Custom & Responsive",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Website Design Company in Moradabad | Custom & Responsive",

    description:
      "Best website design company in Moradabad creating modern, user-friendly websites. Get custom web designs with Zentrix Infotech.",

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