'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Eye, Lock, Users, Database, Globe, ChevronRight, ArrowUp, Menu, X } from 'lucide-react';

// export const metadata = {title: "Privacy Policy – Zentrix Infotech",description: "Read Zentrix Infotech’s privacy policy to understand how we collect, use and protect your data."};



const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setSidebarOpen(false); // Close mobile sidebar after navigation
  };

  const sections = [
    { id: 'information-collection', title: 'Information We Collect', icon: Database },
    { id: 'usage', title: 'How We Use Information', icon: Eye },
    { id: 'sharing', title: 'Information Sharing', icon: Users },
    { id: 'security', title: 'Data Security', icon: Lock },
    { id: 'rights', title: 'Your Rights', icon: Shield },
    { id: 'contact', title: 'Contact Us', icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 text-slate-900 lg:py-22 py-10 ">
      {/* Header - Simple navbar placeholder */}


      {/* Scroll to Top Button */}

      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden fixed top-24 left-4 z-40">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-3 bg-white backdrop-blur-xl border border-slate-200 rounded-xl shadow-lg"
        >
          {sidebarOpen ? <X className="w-5 h-5 text-slate-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12 flex gap-6 lg:gap-12 mt-16 lg:mt-10">
        {/* Sidebar Navigation */}
        <aside className={`w-80 shrink-0 lg:block ${sidebarOpen ? 'block' : 'hidden'} fixed lg:relative top-0 left-0 h-full lg:h-auto z-30 lg:z-auto bg-white lg:bg-transparent`}>
          <div className={`${sidebarOpen ? 'pt-32 px-4' : ''} lg:pt-0 lg:px-0`}>
            <div className="sticky top-8">
              <div className="backdrop-blur-xl bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xl">
                <h3 className="text-base sm:text-lg font-semibold mb-4 text-slate-900">Quick Navigation</h3>
                <nav className="space-y-2">
                  {sections.map(({ id, title, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all duration-200 text-left group ${
                        activeSection === id
                          ? 'bg-linear-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700'
                          : 'hover:bg-slate-50 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="text-xs sm:text-sm font-medium">{title}</span>
                      <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 max-w-4xl">
          {/* Hero Section */}
          <div className="mb-8 sm:mb-12 text-center mt-0">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full bg-linear-to-r from-blue-50 to-purple-50 border border-blue-200 mb-4 sm:mb-6">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-blue-700">Privacy First</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif mb-4 sm:mb-6 bg-linear-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent px-4">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              As a comprehensive digital services provider offering software development, web development, 
              mobile apps, UI/UX design, branding, digital marketing, and cloud solutions, we're committed 
              to protecting your privacy and being transparent about our data practices.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 sm:space-y-12">
            <section id="information-collection" className="backdrop-blur-xl bg-white border border-slate-200 rounded-2xl p-4 sm:p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600">
                  <Database className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-medium font-serif text-slate-900">Information We Collect</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">Client Information</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span className="text-sm sm:text-base">Business contact details and project requirements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span className="text-sm sm:text-base">Account credentials for development platforms</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span className="text-sm sm:text-base">Payment information and billing details</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span className="text-sm sm:text-base">Brand assets and marketing materials</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">Project & Technical Data</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                      <span className="text-sm sm:text-base">Website analytics and user behavior data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                      <span className="text-sm sm:text-base">App usage metrics and performance data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                      <span className="text-sm sm:text-base">Digital marketing campaign data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                      <span className="text-sm sm:text-base">Cloud infrastructure usage and logs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="usage" className="backdrop-blur-xl bg-white border border-slate-200 rounded-2xl p-4 sm:p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600">
                  <Eye className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-medium font-serif text-slate-900">How We Use Your Information</h2>
              </div>
              
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  We use collected information to deliver our comprehensive digital services including software development, 
                  web development, mobile apps, UI/UX design, branding, digital marketing, and cloud solutions.
                </p>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { title: "Service Delivery", desc: "Developing and deploying custom software solutions and applications" },
                    { title: "Project Management", desc: "Coordinating development workflows and client communications" },
                    { title: "Quality Assurance", desc: "Testing applications and ensuring optimal performance" },
                    { title: "Digital Marketing", desc: "Running campaigns and analyzing engagement metrics" },
                    { title: "Cloud Management", desc: "Maintaining secure and scalable cloud infrastructure" },
                    { title: "Brand Development", desc: "Creating cohesive brand identities and design systems" }
                  ].map((item, index) => (
                    <div key={index} className="p-3 sm:p-4 rounded-xl bg-linear-to-br from-slate-50 to-blue-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="sharing" className="backdrop-blur-xl bg-white border border-slate-200 rounded-2xl p-4 sm:p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-linear-to-br from-orange-500 to-red-600">
                  <Users className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-medium font-serif text-slate-900">Information Sharing</h2>
              </div>
              
              <div className="bg-linear-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-red-600" />
                  <span className="font-semibold text-red-700 text-sm sm:text-base">We Never Sell Your Data</span>
                </div>
                <p className="text-slate-700 text-sm sm:text-base">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </div>
              
              <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
                We may share your information only in the following limited circumstances related to our digital services:
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Development Partners</h4>
                    <p className="text-slate-600 text-xs sm:text-sm">Cloud providers, hosting services, and development tools necessary for project delivery</p>
                  </div>
                </div>
                <div className="flex space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Marketing Platforms</h4>
                    <p className="text-slate-600 text-xs sm:text-sm">Analytics and advertising platforms for digital marketing campaigns (with consent)</p>
                  </div>
                </div>
                <div className="flex space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Legal Compliance</h4>
                    <p className="text-slate-600 text-xs sm:text-sm">When required by law or to protect intellectual property rights</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="security" className="backdrop-blur-xl bg-white border border-slate-200 rounded-2xl p-4 sm:p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-linear-to-br from-green-500 to-emerald-600">
                  <Lock className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-medium font-serif text-slate-900">Data Security</h2>
              </div>
              
              <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
                We implement enterprise-grade security measures to protect client data, source code, and project information 
                from unauthorized access, ensuring the confidentiality of your digital assets and business information.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4">
                  <div className="p-4 sm:p-6 rounded-xl bg-linear-to-br from-green-50 to-emerald-50 border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-3 text-sm sm:text-base">Development Security</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      <li>• Secure code repositories and version control</li>
                      <li>• Encrypted data transmission and storage</li>
                      <li>• Regular security audits and penetration testing</li>
                      <li>• Multi-factor authentication for all systems</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 sm:p-6 rounded-xl bg-linear-to-br from-blue-50 to-indigo-50 border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-3 text-sm sm:text-base">Cloud & Infrastructure</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      <li>• SOC 2 compliant cloud infrastructure</li>
                      <li>• Automated monitoring and incident response</li>
                      <li>• Data residency and compliance management</li>
                      <li>• Regular backups with disaster recovery</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="rights" className="backdrop-blur-xl bg-white border border-slate-200 rounded-2xl p-4 sm:p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-linear-to-br from-purple-500 to-pink-600">
                  <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-medium font-serif text-slate-900">Your Privacy Rights</h2>
              </div>
              
              <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
                As our client, you have comprehensive rights regarding your data, project assets, and information. 
                We're committed to helping you exercise these rights in accordance with applicable privacy laws and our service agreements.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { title: "Data Access", desc: "Request copies of your project data and analytics" },
                  { title: "Asset Ownership", desc: "Full ownership rights to your developed applications" },
                  { title: "Data Deletion", desc: "Request removal of personal and project information" },
                  { title: "Code Portability", desc: "Export source code and technical documentation" },
                  { title: "Marketing Opt-out", desc: "Control participation in marketing campaigns" },
                  { title: "Service Modification", desc: "Adjust data collection for ongoing services" }
                ].map((right, index) => (
                  <div key={index} className="p-3 sm:p-4 rounded-xl bg-linear-to-br from-slate-50 to-purple-50 border border-slate-200 hover:border-purple-300 transition-colors">
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{right.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600">{right.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="backdrop-blur-xl bg-white border border-slate-200 rounded-2xl p-4 sm:p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-linear-to-br from-indigo-500 to-blue-600">
                  <Globe className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-medium font-serif text-slate-900">Contact Us</h2>
              </div>
              
              <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Have questions about this Privacy Policy or our data practices for software development, 
                digital marketing, or cloud services? We're here to help.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 rounded-xl bg-linear-to-br from-blue-50 to-indigo-50 border border-blue-200">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Globe className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">General Inquiries</h4>
                  <p className="text-xs sm:text-sm text-blue-700">info@zentrixinfotech.com</p>
                </div>
                
                <div className="text-center p-4 sm:p-6 rounded-xl bg-linear-to-br from-purple-50 to-pink-50 border border-purple-200">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Users className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Project Support</h4>
                  <p className="text-xs sm:text-sm text-purple-700">24/7 Client Portal</p>
                </div>
                
                <div className="text-center p-4 sm:p-6 rounded-xl bg-linear-to-br from-green-50 to-emerald-50 border border-green-200 sm:col-span-2 lg:col-span-1">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Data Protectionr</h4>
                  <p className="text-xs sm:text-sm text-green-700">info@zentrixinfotech.com</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

    </div>
  );
};

export default PrivacyPolicy;
