import React, { Fragment } from "react";

import AboutCompany from "@/components/AboutCompany";
import Hero from "@/components/Hero";

import Servicess from "@/components/Services";
import portfolio from "@/components/Portfolio";

import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import Blog from "@/components/Blogs";

export const metadata = {
  title: "Zentrix Infotech – Transforming Businesses With Tech & Creativity",
  description:
    "At Zentrix Infotech, we deliver scalable software, cloud solutions, web & mobile apps, and powerful digital marketing (SEO, Ads, Branding) to help businesses grow online.",
};

const page = () => {
  return (
    <div className="bg-[#f8fafc]">
      <Hero />
      <AboutCompany />
      <Client />
      <Servicess />
      <portfolio />
      <Blog />
      <LovedByClients />
    </div>
  );
};

export default page;
