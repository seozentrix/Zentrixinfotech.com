import "./globals.css";

import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ GOOGLE SITE VERIFICATION */}
        <meta
          name="google-site-verification"
          content="NrE50hHl6c-azA8AW6DpgA0bwM54EcK2iL3JOBRgX4Q"
        />

        {/* ✅ GOOGLE ANALYTICS (GA4) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1HZF570XML"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1HZF570XML');
            `,
          }}
        ></script>
      </head>

      <body className="bg-[#FFFAFA]">
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
