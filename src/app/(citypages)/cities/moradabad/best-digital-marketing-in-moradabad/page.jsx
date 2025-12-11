import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Best Digital Marketing Agency in Moradabad | SEO, SMM, PPC Services",
  description: "Leading digital marketing agency in Moradabad offering SEO, social media marketing, PPC, content marketing, and web design services. Get measurable results and grow your business online with proven strategies.",
  keywords: "best digital marketing in moradabad, digital marketing agency moradabad, SEO services moradabad, social media marketing moradabad, PPC services moradabad",
  openGraph: {
    title: "Best Digital Marketing Agency in Moradabad",
    description: "Transform your business with Moradabad's leading digital marketing agency. Expert SEO, social media marketing, PPC campaigns, and web design services.",
    images: ["/images/digital-marketing-moradabad.jpg"],
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