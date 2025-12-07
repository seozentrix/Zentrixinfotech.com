import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Topbar = () => {
  return (
    <div className="bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] text-white py-2 text-sm fixed top-0 left-0 right-0 z-[60] hidden lg:block">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Contact Info */}
        <div className="flex gap-8">
          <a
            href="mailto:info@zentrixinfotech.com"
            className="text-white no-underline flex items-center gap-1 transition-all duration-300 ease-in-out hover:text-white"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
            <span>info@zentrixinfotech.com</span>
          </a>

          <a
            href="tel:+917248800839"
            className="text-white no-underline flex items-center gap-1 transition-colors duration-300 ease-in-out hover:text-white"
          >
            <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
            <span>+91 72488 00839</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="gap-4 flex">
          <a
            href="https://www.facebook.com/zentrixinfotech.in/"
            className="text-white no-underline w-7 h-7 flex items-center justify-center rounded transition-all duration-300 ease-in-out hover:bg-blue-600 hover:bg-opacity-20 hover:-translate-y-0.5"
          >
            <FontAwesomeIcon icon={faFacebookF} className="h-4 w-4" />
          </a>
          <a
            href="https://in.linkedin.com/company/zentrix-infotech"
            className="text-white no-underline w-7 h-7 flex items-center justify-center rounded transition-all duration-300 ease-in-out hover:bg-blue-600 hover:bg-opacity-20 hover:-translate-y-0.5"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/zentrixinfotech/"
            className="text-white no-underline w-7 h-7 flex items-center justify-center rounded transition-all duration-300 ease-in-out hover:bg-blue-600 hover:bg-opacity-20 hover:-translate-y-0.5"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
