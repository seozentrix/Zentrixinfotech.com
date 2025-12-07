import "./globals.css";

import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="NrE50hHl6c-azA8AW6DpgA0bwM54EcK2iL3JOBRgX4Q"
        />
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
