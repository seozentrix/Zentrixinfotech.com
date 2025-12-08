"use client";

export default function VideoBanner() {
  return (
    <section className="relative w-full  text-black py-11 px-4 overflow-hidden">

      {/* ✅ Heading */}
      <h1 className="text-center font-serif text-3xl md:text-6xl font-bold tracking-wide">
        ON YOUR MARKS. GET SET.{" "}
        <span className="text-emerald-400">GROW.</span>
      </h1>

      {/* ✅ Subheading */}
      <p className="text-center mt-6 max-w-5xl mx-auto text-xs md:text-sm text-black tracking-widest uppercase leading-relaxed">
        We are an ROI driven boutique performance marketing agency in Dubai
        working with brands and organisations to help grow revenue through
        cutting edge technology and marketing.
      </p>

      {/* ✅ GIF Section */}
      <div className="relative mt-6 flex justify-center items-center">
        <div className="relative w-full max-w-6xl">

          <img
            src="https://res.cloudinary.com/dxpyhablz/image/upload/v1765191900/output-onlinegiftools_dw7ku9.gif"
            alt="Growth Animation"
            className="w-full h-auto object-contain rounded-lg"
          />

          {/* ✅ Soft Glow Overlay */}
          <div className="absolute inset-0 bg-black/20 rounded-lg"></div>

        </div>
      </div>

      {/* ✅ Bottom Labels */}
      <div className="mt-2 grid grid-cols-3 font-serif text-center text-lg md:text-2xl font-medium">
        <span>Strategise</span>
        <span >Execute</span>
        <span>Grow</span>
      </div>

    </section>
  );
}
