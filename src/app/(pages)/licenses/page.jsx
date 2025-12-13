import Content from "./Content";


export const metadata = {
  title: "Licenses Information | Zentrix Infotech",

  description:
    "View licensing and intellectual property information related to Zentrix Infotech website, content, and services.",

  keywords: [
    "zentrix infotech license",
    "license information",
    "website license policy",
    "intellectual property rights",
    "content usage license",
    "software license terms",
    "copyright policy"
  ],

  alternates: {
    canonical: "https://www.zentrixinfotech.com/licenses",
  },

  openGraph: {
    title: "Licenses Information | Zentrix Infotech",
    description:
      "Learn about licensing terms, usage rights, and intellectual property at Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/licenses",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech License Information",
      },
    ],
    locale: "en_IN",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Licenses Information | Zentrix Infotech",
    description:
      "Licensing details and intellectual property rights of Zentrix Infotech.",
    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};





export default function Page() {
  return (
    <>
      
      <Content />
     
      
      
    </>
  );
}