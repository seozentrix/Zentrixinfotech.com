import Content from "./Content";


export const metadata = {
  title: "Privacy Policy | Zentrix Infotech",

  description:
    "Read the Privacy Policy of Zentrix Infotech to understand how we collect, use, store, and protect your personal information.",

  keywords: [
    "zentrix infotech privacy policy",
    "privacy policy zentrix infotech",
    "data protection policy",
    "user privacy policy",
    "personal information protection",
    "website privacy policy india",
    "data security policy",
    "information privacy notice"
  ],

  alternates: {
    canonical: "https://www.zentrixinfotech.com/privacy-policy",
  },

  openGraph: {
    title: "Privacy Policy | Zentrix Infotech",
    description:
      "Learn how Zentrix Infotech protects user data and maintains privacy across its digital platforms.",
    url: "https://www.zentrixinfotech.com/privacy-policy",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Privacy Policy",
      },
    ],
    locale: "en_IN",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Zentrix Infotech",
    description:
      "Understand how Zentrix Infotech collects and protects personal information.",
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