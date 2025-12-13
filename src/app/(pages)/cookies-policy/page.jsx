import Content from "./Content";


export const metadata = {
  title: "Cookies Policy | Zentrix Infotech",

  description:
    "This Cookies Policy explains how Zentrix Infotech uses cookies and similar technologies to improve user experience.",

  keywords: [
    "zentrix infotech cookies policy",
    "cookies policy",
    "website cookies usage",
    "tracking technologies policy",
    "cookie consent policy",
    "browser cookies information",
    "analytics cookies policy"
  ],

  alternates: {
    canonical: "https://www.zentrixinfotech.com/cookies-policy",
  },

  openGraph: {
    title: "Cookies Policy | Zentrix Infotech",
    description:
      "Learn how cookies and tracking technologies are used on the Zentrix Infotech website.",
    url: "https://www.zentrixinfotech.com/cookies-policy",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Cookies Policy",
      },
    ],
    locale: "en_IN",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cookies Policy | Zentrix Infotech",
    description:
      "Details on how cookies are used on Zentrix Infotech website.",
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