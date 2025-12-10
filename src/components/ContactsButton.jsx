"use client"; 

import { useState } from 'react';
import { X, Phone, Mail } from 'lucide-react';

const ContactWidget = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed bottom-24 right-6 bg-white rounded-lg shadow-2xl p-6 w-72 z-50 animate-fadeIn">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
          
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-black">Welcome to Zentrix Infotech</h3>

            <p className="text-sm text-gray-600">
              Looking for trusted digital and IT solutions? Our team is dedicated to helping your business grow with smart, scalable services.
            </p>

            <p className="text-sm font-bold text-black">
              (+91 7248800839, +91 6397036898){' '}
              <a 
                href="mailto:zentrixit@gmail.com" 
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
            </p>

            <p className="text-sm text-gray-600">Thank you for choosing Zentrix Infotech.</p>
          </div>
        </div>
      )}

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-6 ">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/916397036898"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          title="WhatsApp"
        >
          <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl group-hover:rotate-12 animate-pulse-slow">
            <svg 
              viewBox="0 0 24 24" 
              width="28" 
              height="28" 
              fill="currentColor"
              className="drop-shadow-md"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 bg-gradient-to-br from-red-400 to-red-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg animate-bounce-subtle">
            1
          </span>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
        </a>
         {/* Phone Button */}
        <a
          href="tel:+917248800839"
          className="relative group"
          title="Call Us"
        >
          {/* Ripple Rings */}
          <div className="absolute inset-0 animate-ripple-1">
            <div className="absolute inset-0 border-2 border-blue-400 rounded-full"></div>
          </div>
          <div className="absolute inset-0 animate-ripple-2">
            <div className="absolute inset-0 border-2 border-blue-400 rounded-full"></div>
          </div>
          <div className="absolute inset-0 animate-ripple-3">
            <div className="absolute inset-0 border-2 border-blue-400 rounded-full"></div>
          </div>
          
          <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl z-10">
            <Phone size={28} className="drop-shadow-md animate-phone-shake" />
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
        </a>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        
        @keyframes phone-shake {
          0%, 100% {
            transform: rotate(0deg);
          }
          5% {
            transform: rotate(-15deg);
          }
          10% {
            transform: rotate(15deg);
          }
          15% {
            transform: rotate(-15deg);
          }
          20% {
            transform: rotate(15deg);
          }
          25% {
            transform: rotate(0deg);
          }
        }
        
        @keyframes ripple-1 {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
        
        @keyframes ripple-2 {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
        
        @keyframes ripple-3 {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2.6);
            opacity: 0;
          }
        }
        
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-phone-shake {
          animation: phone-shake 2s ease-in-out infinite;
        }
        
        .animate-ripple-1 {
          animation: ripple-1 2s ease-out infinite;
        }
        
        .animate-ripple-2 {
          animation: ripple-2 2s ease-out 0.3s infinite;
        }
        
        .animate-ripple-3 {
          animation: ripple-3 2s ease-out 0.6s infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default ContactWidget;