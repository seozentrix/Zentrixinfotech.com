import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[570px] overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://plus.unsplash.com/premium_photo-1661693870771-dbbd8b95b2b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfDB8MHx8fDA%3D"
          alt="Best Web Development Company in Moradabad"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70" />
      </div>
      
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-wide capitalize mb-4 md:mb-6 leading-tight">
            Best Web Development Company in Moradabad
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-medium text-white tracking-wide drop-shadow-lg">
            Grow your business with smarter websites.
          </p>
        </div>
      </div>
    </section>
  );
}