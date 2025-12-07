'use client';

import { useState } from "react";
import { Mail, Phone, HelpCircle, CheckCircle, X } from "lucide-react";



const ThankYouPopup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-50 p-4 ">
      <div className="bg-white backdrop-blur border border-slate-200 rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
        <div className="mb-4">
          <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h2>
          <p className="text-slate-600">
            Your message has been sent successfully. We'll get back to you as soon as possible.
          </p>
        </div>
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-2 px-6 rounded-lg font-semibold text-white mr-4"
        >
          Close
        </button>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

const SupportPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData for FormSubmit
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('message', formData.message);
      submitData.append('_subject', `New Support Request from ${formData.name}`);
      submitData.append('_captcha', 'false');
      submitData.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/info@zentrixinfotech.com', {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        setShowThankYou(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col bg-linear-to-br from-slate-50 to-blue-50 text-slate-900 py-20">

      <main className="grow px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white backdrop-blur border border-slate-200 rounded-2xl shadow-xl p-10">
          <div className="text-center mb-10">
            <HelpCircle size={48} className="mx-auto text-blue-600 mb-2" />
            <h1 className="text-3xl font-medium font-serif text-slate-900">Support Center</h1>
            <p className="text-slate-600 mt-2">
              Reach out to us and we'll get back as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full p-3 bg-slate-50 text-slate-900 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full p-3 bg-slate-50 text-slate-900 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full p-3 bg-slate-50 text-slate-900 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                ></textarea>
              </div>
              
              <button
                onClick={handleFormSubmit}
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 transition-all duration-300 py-3 px-6 rounded-lg font-semibold shadow-lg disabled:cursor-not-allowed w-full text-white"
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </button>
              
              <p className="text-xs text-slate-500 mt-4">
                Need help?{" "}
                <a href="/contact-us" className="underline text-blue-600 hover:text-blue-700">
                  Contact support
                </a>
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-blue-600" />
                <div>
                  <h3 className="font-semibold text-slate-900">Email us</h3>
                  <p className="text-slate-600">info@zentrixinfotech.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-blue-600" />
                <div>
                  <h3 className="font-semibold text-slate-900">Call us</h3>
                  <p className="text-slate-600">+91 7248800839 </p>                                   
                  <p className="text-slate-600">+91 6397036898</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      
      <ThankYouPopup 
        isVisible={showThankYou} 
        onClose={() => setShowThankYou(false)} 
      />
    </div>
  );
};

export default SupportPage;
