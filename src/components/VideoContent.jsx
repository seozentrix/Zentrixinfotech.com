"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="https://metasocial.ae/wp-content/uploads/2025/03/Website_Landing-page_Video-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      
    </section>
  );
}
