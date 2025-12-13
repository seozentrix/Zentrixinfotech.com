import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#FFFAFA]">
      
      <h1 className="text-6xl font-bold text-gray-800">404</h1>

      <h2 className="text-2xl mt-4 font-semibold text-gray-700">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-500 max-w-md">
        The link you entered is incorrect.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <Link
          href="/services"
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          View Services
        </Link>

        <Link
          href="/contact-us"
          className="border border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
        >
          Contact Us
        </Link>
      </div>

    </div>
  );
}
