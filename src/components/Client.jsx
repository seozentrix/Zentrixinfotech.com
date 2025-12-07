'use client';

import React from 'react';

const companies = [

  { id: 1, name: "Vasterior Pvt. Ltd.", logo: "https://www.vasterior.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fda12wzxoq%2Fimage%2Fupload%2Fv1764841085%2Fvasteriorlogo_bmzk0r.png&w=384&q=75" },
  { id: 2, name: "The Buyzaar Mart", logo: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png" },
  { id: 3, name: "Kdedu", logo: "/kdedu-logo.png" },
  { id: 4, name: "Herbsfox", logo: "https://herbsfox.com/wp-content/uploads/2024/01/logo1.png" },
  { id: 5, name: "IMA", logo: "https://www.imamoradabad.com/IMA_LOGO.png" },
  { id: 6, name: "Pradeep Shukla Decor", logo: "https://www.psdecor.in/_next/image?url=%2Fassets%2Fpslogo.PNG&w=256&q=75" },
  { id: 7, name: "CUET Mock", logo: "https://cuetmock.com/img/logo_main_light.png" },
  { id: 8, name: "Kairvi Fort Resort", logo: "https://kairvifortresort.com/wp-content/uploads/2025/05/cropped-Kailash_Fort_Resort_Logo-removebg-preview-300x154.png" },
  { id: 9, name: "Jigyasa Hospital", logo: "https://www.jigyasahospital.com/logo.png" },
  { id: 10, name: "Interio World", logo: "https://www.intirioworld.in/images/logo.jpg" },
  { id: 11, name: "Southern Palate", logo: "/southern-palate.png" },
  { id: 12, name: "Alluring Glimpses", logo: "https://res.cloudinary.com/dxpyhablz/image/upload/v1765010070/alluring_logo_vcsuge.png" },
  { id: 13, name: "Deal 360", logo: "https://deal360.in/wp-content/uploads/2024/06/cropped-cropped-Navy_Blue_Minimalist_Text_Logo_20240501_223022_0000-removebg-preview-300x300.png" },
  { id: 14, name: "A Square Marketing", logo: "https://res.cloudinary.com/dxpyhablz/image/upload/v1765011236/a-sqaure_fk7u5x.png" },
  { id: 15, name: "Oracle Eye Hospital", logo: "https://www.oracleeyehospital.com/assets/oracle-eye-hospital-logo-6bz8k2xK.png" },
  { id: 16, name: "Balaji Bath & Tiles", logo: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764845324/WhatsApp_Image_2025-12-04_at_16.12.21_4bafaf4e_tdfwqu.jpg" },
  { id: 17, name: "Dhaanya Ventures", logo: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764845192/WhatsApp_Image_2025-12-04_at_16.09.05_d5e20307_mme28r.jpg" },
  { id: 18, name: "Ahlawat Pharmacy", logo: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764845199/WhatsApp_Image_2025-12-04_at_16.09.23_39fba8bc_fqvizm.jpg" },
  { id: 19, name: "Nai Ummed Foundation", logo: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764845207/WhatsApp_Image_2025-12-04_at_16.10.33_599a3261_wk7gvu.jpg" },
  { id: 20, name: "Select HandiCraft", logo: "https://selecthandicrafts.org/select_logo.png" },
  


  
  // { id: 22, name: "Shivoham Yogshala", logo: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764845196/WhatsApp_Image_2025-12-04_at_16.09.05_dd9f8e49_g5jdxs.jpg" }, 
  // { id: 23, name: "Starchcharm", logo: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764845207/WhatsApp_Image_2025-12-04_at_16.10.33_599a3261_wk7gvu.jpg" },
  // { id: 21, name: "Garbs", logo: "" },
  // { id: 23, name: "Madhuram Heritage", logo: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764845189/Madhuram_heritage_bzbfy9.jpg" },
  // { id: 24, name: "Hawkeye", logo: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764845189/Hawkeye_q1xgfy.jpg" },
  // { id: 27, name: "The Parv's Academy", logo: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764845323/WhatsApp_Image_2025-12-04_at_16.10.57_eb0e45c6_bcd7fv.jpg" },
  // { id: 28, name: "Madhuam Heritage", logo: "https://via.placeholder.com/32x32/ffffff/000000?text=EE" },
];

const CompanyName = ({ company }) => (
  <div className="inline-flex flex-col items-center justify-center px-4 sm:px-6 py-3 sm:py-4 mx-3 sm:mx-6 whitespace-nowrap group">

    {/* Logo - Enhanced with better shadow and hover effect */}
    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-z-to-br from-white to-gray-50 overflow-hidden border-2 border-gray-200 shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 mb-3 group-hover:border-blue-400">
      {company.logo ? (
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          className="w-full h-full object-contain p-2"
          onError={(e) => {
            e.target.style.display = "none";
            if (e.target.nextElementSibling) {
              e.target.nextElementSibling.classList.remove("hidden");
            }
          }}
        />
      ) : null}

      {/* Fallback Initial - Enhanced */}
      <span className={`text-slate-700 text-xl text-center sm:text-2xl md:text-3xl font-medium ${company.logo ? "hidden" : ""}`}>
        {company.name.charAt(0)}
      </span>
    </div>

    {/* Company Name - Enhanced typography */}
    <span
      className="text-slate-900 text-xs sm:text-sm md:text-base font-medium font-serif tracking-wide text-center transition-all duration-300 group-hover:text-blue-600 cursor-pointer max-w-[120px] sm:max-w-[140px] leading-tight"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {company.name}
    </span>
  </div>
);

const SingleScrollingCompanies = () => {
  const infiniteCompanies = [...companies, ...companies, ...companies];

  return (
    <div className="relative pb-10  bg-white overflow-hidden">
      {/* Decorative linear overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* Optional: Subtle decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-gray-200 to-transparent opacity-30"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-gray-200 to-transparent opacity-30"></div>

      <div className="relative z-10 w-full overflow-hidden h-full flex items-center">
        <div className="flex">
          <div
            className="flex animate-scroll items-center"
          >
            {infiniteCompanies.map((company, index) => (
              <CompanyName key={`${company.id}-${index}`} company={company} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SingleScrollingCompanies;