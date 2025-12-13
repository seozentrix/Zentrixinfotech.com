import Content from "./Content";


export const metadata = {
  title: "Terms of Service | Zentrix Infotech",

  description:
    "Review the Terms of Service of Zentrix Infotech outlining rules, responsibilities, and conditions for using our website and services.",

  keywords: [
    "zentrix infotech terms of service",
    "terms and conditions zentrix infotech",
    "website terms of use",
    "service usage policy",
    "user agreement",
    "website legal terms",
    "business service terms"
  ],

  alternates: {
    canonical: "https://www.zentrixinfotech.com/terms-of-service",
  },

  openGraph: {
    title: "Terms of Service | Zentrix Infotech",
    description:
      "Understand the terms and conditions applicable when using Zentrix Infotech services.",
    url: "https://www.zentrixinfotech.com/terms-of-service",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Terms of Service",
      },
    ],
    locale: "en_IN",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Zentrix Infotech",
    description:
      "Terms and conditions governing the use of Zentrix Infotech website and services.",
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