'use client';

import React from 'react';
import { Shield, AlertTriangle, Users, Lock, FileText, CheckCircle, Code, Smartphone, Palette, Cloud, TrendingUp, Globe } from 'lucide-react';


const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      {/* Simple Navbar */}


      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-100 rounded-full border border-blue-200">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Terms of <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">Service</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Terms governing our comprehensive digital services including software development, web development, 
              mobile apps, UI/UX design, branding, digital marketing, and cloud solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white backdrop-blur-sm rounded-2xl border border-slate-200 p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Our Digital Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { icon: Code, title: "Software Development", color: "text-blue-600" },
              { icon: Globe, title: "Web Development", color: "text-green-600" },
              { icon: Smartphone, title: "Mobile Apps", color: "text-purple-600" },
              { icon: Palette, title: "UI/UX Design", color: "text-pink-600" },
              { icon: Shield, title: "Branding", color: "text-yellow-600" },
              { icon: TrendingUp, title: "Digital Marketing", color: "text-orange-600" },
              { icon: Cloud, title: "Cloud Solutions", color: "text-indigo-600" }
            ].map((service) => (
              <div
                key={service.title}
                className="flex flex-col items-center p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200"
              >
                <service.icon className={`w-5 h-5 ${service.color} mb-2`} />
                <span className="text-slate-700 text-xs font-medium text-center">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white backdrop-blur-sm rounded-2xl border border-slate-200 p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Users, title: "Client Agreements", href: "#agreements" },
              { icon: Shield, title: "Project Delivery", href: "#delivery" },
              { icon: Lock, title: "Intellectual Property", href: "#ip" },
              { icon: AlertTriangle, title: "Limitations", href: "#limitations" }
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200 hover:border-blue-300"
              >
                <item.icon className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 text-sm font-medium">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-12">
          
          {/* Section 1: Acceptance of Terms */}
          <section className="bg-white backdrop-blur-sm rounded-2xl border border-slate-200 p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed mb-4">
                By engaging our digital services including software development, web development, mobile app development, 
                UI/UX design, branding, digital marketing, or cloud solutions, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms of Service.
              </p>
              <p className="text-slate-700 leading-relaxed">
                These terms constitute a legally binding agreement between you (the "Client") and our company. 
                Each project may also be governed by additional project-specific agreements and statements of work.
              </p>
            </div>
          </section>

          {/* Section 2: Service Agreements */}
          <section id="agreements" className="bg-white backdrop-blur-sm rounded-2xl border border-slate-200 p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">2. Client Agreements and Project Scope</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Project Definition</h3>
                <p className="text-slate-700 leading-relaxed">
                  Each project begins with a detailed Statement of Work (SOW) defining scope, deliverables, timelines, 
                  and payment terms. Changes to project scope require written approval and may affect timeline and cost.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Client Responsibilities</h3>
                <p className="text-slate-700 leading-relaxed">
                  Clients must provide necessary access, content, feedback, and approvals in a timely manner. 
                  Delays in client deliverables may impact project timelines and costs.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Communication Protocols</h3>
                <p className="text-slate-700 leading-relaxed">
                  We maintain regular communication through designated project managers and agreed-upon channels. 
                  Major project decisions and changes must be documented in writing.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Service Delivery */}
          <section id="delivery" className="bg-white backdrop-blur-sm rounded-2xl border border-slate-200 p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-slate-900">3. Service Delivery and Quality Standards</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-600">✓ Our Commitments</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Deliver projects according to agreed timelines and specifications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Provide regular progress updates and project status reports</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Ensure all deliverables meet industry quality standards</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Provide post-launch support as specified in the agreement</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">Service Categories</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Custom software development and applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Web development and e-commerce solutions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Mobile app development for iOS and Android</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>UI/UX design, branding, and digital marketing</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Intellectual Property */}
          <section id="ip" className="bg-white backdrop-blur-sm rounded-2xl border border-slate-200 p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Lock className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900">4. Intellectual Property Rights</h2>
            </div>
            <div className="bg-linear-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200 mb-6">
              <p className="text-slate-700 leading-relaxed">
                Upon full payment, clients receive ownership rights to custom-developed applications, websites, and designs. 
                We retain rights to our development frameworks, tools, and methodologies.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-slate-900 font-medium mb-1">Client-Owned Assets</h3>
                  <p className="text-slate-600 text-sm">Source code, designs, content, and branding materials developed specifically for your project.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-slate-900 font-medium mb-1">Our Proprietary Tools</h3>
                  <p className="text-slate-600 text-sm">Development frameworks, libraries, and methodologies remain our intellectual property.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-slate-900 font-medium mb-1">Third-Party Licenses</h3>
                  <p className="text-slate-600 text-sm">Third-party software and services are subject to their respective licensing terms.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Payment Terms */}
          <section className="bg-white backdrop-blur-sm rounded-2xl border border-slate-200 p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-6 h-6 text-yellow-600" />
              <h2 className="text-2xl font-bold text-slate-900">5. Payment Terms and Billing</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h3 className="text-slate-900 font-semibold mb-2">Project Payments</h3>
                <p className="text-slate-700 text-sm">Typically structured as milestone-based payments with an initial deposit to commence work.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h3 className="text-slate-900 font-semibold mb-2">Ongoing Services</h3>
                <p className="text-slate-700 text-sm">Monthly billing for hosting, maintenance, and digital marketing services as specified in agreements.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h3 className="text-slate-900 font-semibold mb-2">Payment Terms</h3>
                <p className="text-slate-700 text-sm">Net 15 days from invoice date. Late payments may incur fees and project suspension.</p>
              </div>
            </div>
          </section>

          {/* Section 6: Data and Confidentiality */}
          <section className="bg-white backdrop-blur-sm rounded-2xl border border-slate-200 p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-slate-900">6. Data Protection and Confidentiality</h2>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
              <p className="text-slate-700 leading-relaxed">
                We maintain strict confidentiality of all client information, source code, business data, and project details. 
                Our team members sign comprehensive NDAs for all client projects.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-slate-900 font-semibold">Security Measures</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Secure development environments and code repositories</li>
                  <li>• Encrypted data transmission and storage</li>
                  <li>• Regular security audits and compliance checks</li>
                  <li>• Access controls and monitoring systems</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-slate-900 font-semibold">Data Handling</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Client data used only for project delivery purposes</li>
                  <li>• Secure data backup and disaster recovery procedures</li>
                  <li>• GDPR and privacy regulation compliance</li>
                  <li>• Data deletion upon project completion (if requested)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7: Limitations */}
          <section id="limitations" className="bg-white backdrop-blur-sm rounded-2xl border border-slate-200 p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-slate-900">7. Limitations of Liability</h2>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <p className="text-slate-700 leading-relaxed mb-4">
                While we strive for excellence in all our digital services, our liability is limited to the total amount 
                paid for the specific project or service. We are not liable for indirect damages, lost profits, or 
                business interruption.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Force majeure events, third-party service outages, or circumstances beyond our reasonable control 
                do not constitute breach of these terms.
              </p>
            </div>
          </section>

          {/* Section 8: Warranties and Support */}
          <section className="bg-white backdrop-blur-sm rounded-2xl border border-slate-200 p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">8. Warranties and Support</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h3 className="text-slate-900 font-semibold mb-3">Quality Warranty</h3>
                <p className="text-slate-700 text-sm mb-3">We provide a 90-day warranty on deliverables to be free from defects and perform according to specifications.</p>
                <ul className="text-slate-600 text-xs space-y-1">
                  <li>• Bug fixes and compatibility issues</li>
                  <li>• Performance optimization</li>
                  <li>• Security patches (if applicable)</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h3 className="text-slate-900 font-semibold mb-3">Ongoing Support</h3>
                <p className="text-slate-700 text-sm mb-3">Extended support and maintenance packages available for continued service and updates.</p>
                <ul className="text-slate-600 text-xs space-y-1">
                  <li>• Technical support and troubleshooting</li>
                  <li>• Regular updates and feature enhancements</li>
                  <li>• Cloud hosting and monitoring services</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
