// Using regular anchor tags instead of React Router Link
import { 
  Code, 
  Database, 
  Shield, 
  Monitor, 
  Palette, 
  Megaphone, 
  Smartphone, 
  Cloud,
  Linkedin,
  Mail,
  Instagram,
  MapPin,
  Phone,
  ExternalLink,
  Facebook
} from 'lucide-react';

import Link from 'next/link';


const Footer = () => {
  const solutions = [
    { name: "Software Development", href: "/software-development", icon: Code },
    { name: "Digital Marketing", href: "/digital-marketing", icon: Megaphone },
    { name: "Web Development", href: "/web-development", icon: Monitor },
    { name: "UI/UX Design", href: "/ui-designer", icon: Palette },
    { name: "Mobile App Development", href: "/mobile-development", icon: Smartphone },
    { name: "Cloud Solutions", href: "/cloud-solutions", icon: Cloud },
    
  ];


  const resources = [
    { name: "Blog", href: "/blogs" }, 
    { name: "Support", href: "/support" },
  ];


  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-services" },
    { name: "Cookie Policy", href: "/cookies-policy" },
    { name: "Licenses", href: "/licenses" },
  ];


  const company = [
    { name: "Careers", href: "/careers" },
    { name: "About Us", href: "/about-us" },
    
  ];


  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/zentrixinfotech.in/", icon: Facebook },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/zentrix-infotech", icon: Linkedin },
    { name: "Instagram", href: "https://www.instagram.com/zentrixinfotech", icon: Instagram }
  ];


  return (
    <footer className="relative bg-linear-to-b from-slate-50 to-white border-t border-slate-200/50 overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-linear(ellipse_at_top,var(--tw-linear-stops))] from-slate-100/20 via-slate-50 to-white"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-size-[32px_32px]"></div>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Branding Section */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="mb-8">
                <Link href="/" className="inline-block group">
                  <div className="relative rounded-2xl bg-linear-to-br from-white to-slate-50 backdrop-blur-sm border border-slate-200/50 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300">
                    <img
                      src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761370086/bg_remove_logo_zentrix_gn8ybw.png"
                      alt="Zentrix Infotech Logo"
                      className="w-24 h-24 rounded-2xl object-contain filter brightness-110 drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
              </div>


              {/* Company Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold font-serif text-slate-900 mb-4 bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text ">
                  Zentrix Infotech
                </h3>
                <p className="text-slate-700 text-base leading-relaxed mb-6">
                  Transforming ideas into powerful digital solutions. We build next-generation software that drives innovation and growth for businesses worldwide.
                </p>
              </div>


              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center text-slate-700 hover:text-slate-900 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors mr-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                   <div>
                                    <p className="text-gray-700">1. D 2102, Kakad Paradice, Miraroad - East, Thane (Mumbai)
                                        - 401107
                                    </p>
                                    <p className="text-gray-700">2. A-20 Sunshine Apartment, Ghaziabad, UP 
                                        - 201013
                                    </p>
                                </div>
                                        
                                        
                </div>
                <div className="flex items-start text-slate-700 hover:text-slate-900 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-green-100 transition-colors mr-3 mt-1">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Link 
                      href="tel:+917248800839"
                      className="hover:text-green-600 cursor-pointer transition-all duration-200"
                    >
                      +91 724-880-0839
                    </Link>
                    <Link 
                      href="tel:+916397036898" 
                      className="hover:text-green-600 cursor-pointer transition-all duration-200"
                    >
                      +91 639-703-6898
                    </Link>
                  </div>
                </div>
                <Link 
                  href="mailto:info@zentrixinfotech.com"
                  className="flex items-center text-slate-700 hover:text-slate-900 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-purple-100 transition-colors mr-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="group-hover:text-purple-600">info@zentrixinfotech.com</span>
                </Link>
              </div>
            </div>


            {/* Navigation Links */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Solutions */}
              <div>
                <h3 className="text-slate-900 font-semibold text-lg mb-6 flex items-center">
                  <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center mr-2">
                    <Database className="w-4 h-4 text-blue-600" />
                  </div>
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {solutions.map((solution) => {
                    const IconComponent = solution.icon;
                    return (
                      <li key={solution.name}>
                        <Link 
                          href={solution.href}
                          className="flex items-center text-slate-600 hover:text-slate-900 transition-all duration-200 group py-1"
                        >
                          <IconComponent className="w-4 h-4 mr-3 text-slate-500 group-hover:text-blue-600 transition-colors" />
                          <span className="group-hover:translate-x-1 transition-transform duration-200 text-sm">
                            {solution.name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              
                            
              {/* Resources */}
              <div>
                <h3 className="text-slate-900 font-semibold text-lg mb-6">Resources</h3>
                <ul className="space-y-3">
                  {resources.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-slate-600 hover:text-slate-900 transition-all duration-200 hover:translate-x-1 transform inline-block py-1 text-sm group"
                      >
                        {link.name}
                        <ExternalLink className="w-3 h-3 ml-1 inline opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>


              {/* Company */}
              <div>
                <h3 className="text-slate-900 font-semibold text-lg mb-6">Company</h3>
                <ul className="space-y-3">
                  {company.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-slate-600 hover:text-slate-900 transition-all duration-200 hover:translate-x-1 transform inline-block py-1 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>


              {/* Legal & Social */}
              <div>
                <h3 className="text-slate-900 font-semibold text-lg mb-6 flex items-center">
                  <div className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center mr-2">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  Legal
                </h3>
                <ul className="space-y-3 mb-8">
                  {legal.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-slate-600 hover:text-slate-900 transition-all duration-200 hover:translate-x-1 transform inline-block py-1 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>


                {/* Social Links */}
                <div>
                  <h4 className="text-slate-900 font-medium text-sm mb-4">Follow Us</h4>
                  <div className="flex space-x-3">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <Link
                          key={social.name}
                          href={social.href}
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-blue-100 transition-all duration-200 group"
                        >
                          <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar (Updated) */}
        <div className="border-t border-slate-200/50 py-8">
          <div className="flex justify-center items-center text-slate-600 text-sm">
            © 2025 Zentrix Infotech. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
