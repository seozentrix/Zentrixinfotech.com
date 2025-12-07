
import "./globals.css";

import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FFFAFA]">
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
