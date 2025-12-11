'use client';

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const TechServicesForm = () => {
  const [isClient, setIsClient] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const recaptchaRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace with your actual site key
  const RECAPTCHA_SITE_KEY = "6LdfEigsAAAAAHguTeUVCbTNyAUs4k3oN1N4qS67";

  useEffect(() => {
    setIsClient(true);

    // Define the callback function globally
    window.recaptchaCallback = () => {
      console.log('reCAPTCHA loaded');
      setRecaptchaLoaded(true);
      
      if (window.grecaptcha && window.grecaptcha.render) {
        try {
          const container = document.getElementById('recaptcha-container');
          if (container && !recaptchaRef.current) {
            recaptchaRef.current = window.grecaptcha.render('recaptcha-container', {
              sitekey: RECAPTCHA_SITE_KEY,
              theme: 'light',
              size: 'normal'
            });
          }
        } catch (error) {
          console.error('reCAPTCHA render error:', error);
        }
      }
    };

    // Load reCAPTCHA script with callback
    if (!document.getElementById('recaptcha-script')) {
      const script = document.createElement('script');
      script.id = 'recaptcha-script';
      script.src = `https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=explicit`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else if (window.grecaptcha) {
      // If script already loaded, render immediately
      window.recaptchaCallback();
    }

    return () => {
      // Cleanup
      if (recaptchaRef.current !== null && window.grecaptcha) {
        try {
          window.grecaptcha.reset(recaptchaRef.current);
        } catch (e) {
          console.error('Cleanup error:', e);
        }
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Validate all required fields
    const requiredFields = [
      
      { field: 'phone', label: 'Phone number' },
    ];

    for (const { field, label } of requiredFields) {
      if (!formData[field].toString().trim()) {
        setError(`${label} is required.`);
        setIsSubmitting(false);
        return;
      }
    }

    // Verify reCAPTCHA
    let recaptchaResponse = '';
    try {
      if (!window.grecaptcha) {
        setError("reCAPTCHA not loaded. Please refresh the page.");
        setIsSubmitting(false);
        return;
      }

      recaptchaResponse = window.grecaptcha.getResponse(recaptchaRef.current);
      
      if (!recaptchaResponse) {
        setError("Please complete the reCAPTCHA verification.");
        setIsSubmitting(false);
        return;
      }
    } catch (err) {
      console.error('reCAPTCHA error:', err);
      setError("reCAPTCHA verification failed. Please try again.");
      setIsSubmitting(false);
      return;
    }

    // Create form data
    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });

    // Add reCAPTCHA response
    submitData.append("g-recaptcha-response", recaptchaResponse);

    // FormSubmit configuration
    submitData.append("_next", "https://www.zentrixinfotech.com/thankyou");
    submitData.append("_subject", "New Tech Services Inquiry from " + formData.name);
    submitData.append("_captcha", "false");
    submitData.append("_template", "table");

    try {
      await fetch("https://formsubmit.co/zentrixit@gmail.com", {
        method: "POST",
        mode: "no-cors",
        body: submitData,
      });

      setTimeout(() => {
        window.location.href = "https://www.zentrixinfotech.com/thankyou";
      }, 1000);

    } catch (error) {
      console.error("Form submission error:", error);
      setError("There was an error submitting the form. Please try again.");
      setIsSubmitting(false);
      
      // Reset reCAPTCHA
      if (window.grecaptcha && recaptchaRef.current !== null) {
        window.grecaptcha.reset(recaptchaRef.current);
      }
    }
  };

  if (!isClient) {
    return (
      <div className="bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-rose-100 p-4 w-full max-w-sm mx-auto">
        <h3 className="text-lg font-bold text-center text-gray-800 mb-3">
          Let&apos;s Grow Your Business Together
        </h3>
        <div className="space-y-3">
          <div className="h-64 flex items-center justify-center">
            <div className="text-gray-500 text-sm">Loading form...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-rose-100 p-4 w-full max-w-sm mx-auto">
      <h3 className="text-lg font-bold text-center text-gray-800 mb-3">
        Let&apos;s Grow Your Business Together
      </h3>
      
      {error && (
        <div className="mb-2 p-2 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        </div>
      )}
      
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Name 
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-2 py-2 border text-black border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-rose-400"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Email 
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-2 py-2 border border-gray-300 text-black rounded text-sm focus:outline-none focus:ring-1 focus:ring-rose-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-2 py-2 border border-gray-300 text-black rounded text-sm focus:outline-none focus:ring-1 focus:ring-rose-400"
            />
          </div>
          <div className="relative">
            <label className="block text-xs text-gray-600 mb-1">
              Services 
            </label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-2 py-2 pr-7 text-black border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-rose-400 bg-white appearance-none"
            >
              <option value="">Select a Service</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Web Development">Web Development</option>
              <option value="Software Development">Software Development</option>
              <option value="UI & UX Design">UI & UX Design</option>
              <option value="Cloud Solutions">Cloud Solutions</option>
              <option value="Custom">Custom (Specify in Message)</option>
            </select>
            <ChevronDown className="absolute right-2 top-7 w-3 h-3 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Message 
          </label>
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows={2}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-2 py-2 text-black border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-rose-400 resize-none"
          />
        </div>

        {/* reCAPTCHA Container */}
        <div className="flex justify-center my-3">
          <div id="recaptcha-container" className="inline-block"></div>
        </div>

        {!recaptchaLoaded && (
          <div className="text-center text-xs text-gray-500">
            Loading reCAPTCHA...
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full py-2.5 bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] text-black font-semibold rounded text-sm hover:bg-[#f5d0a8] transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </button>
      </div>
    </div>
  );
};

export default TechServicesForm;