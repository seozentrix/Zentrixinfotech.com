'use client';

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';

import { 
  Code, 
  Cpu, 
  Database, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 

  Award
} from 'lucide-react';

import { FaReact, FaNodeJs, FaPython, FaAws, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiDocker } from "react-icons/si";

import {
  FaJava,
  FaDocker,
  FaAngular,
  FaLinux,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJenkins,
  SiKubernetes,
  SiPostgresql,
  SiRedux,
  SiGraphql,
  SiNextdotjs,
} from "react-icons/si";

const SoftwareDevelopmentPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    clients: 0,
    uptime: 0,
    satisfaction: 0,
    pullRequests: 8,
    commits: 32,
    coverage: 87,
    velocity: 120,
  });

  // Animate stats on mount
  useEffect(() => {
    const animateValue = (start, end, duration, key) => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(start + (end - start) * progress);
        
        setAnimatedStats(prev => ({ ...prev, [key]: value }));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    };

    setTimeout(() => animateValue(0, 250, 2000, 'projects'), 200);
    setTimeout(() => animateValue(0, 150, 2000, 'clients'), 400);
    setTimeout(() => animateValue(0, 99, 2000, 'uptime'), 600);
    setTimeout(() => animateValue(0, 98, 2000, 'satisfaction'), 800);
  }, []);
  
  const techStack = [
    { name: "React.js", level: 90, icon: <FaReact />, color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", level: 85, icon: <FaNodeJs />, color: "from-lime-400 to-green-500" },
    { name: "Python", level: 80, icon: <FaPython />, color: "from-yellow-400 to-amber-500" },
    { name: "MongoDB", level: 75, icon: <SiMongodb />, color: "from-emerald-400 to-green-600" },
    { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss />, color: "from-sky-400 to-teal-400" },
    { name: "Docker", level: 70, icon: <SiDocker />, color: "from-blue-400 to-indigo-500" },
    { name: "AWS", level: 65, icon: <FaAws />, color: "from-orange-400 to-yellow-500" },
    { name: "Git", level: 90, icon: <FaGitAlt />, color: "from-red-500 to-orange-500" },
    { name: "TypeScript", icon: <SiTypescript />, color: "from-blue-600 to-blue-700" },
    { name: "Java", icon: <FaJava />, color: "from-red-600 to-yellow-600" },
    { name: "Angular", icon: <FaAngular />, color: "from-red-500 to-red-700" },
    { name: "Linux", icon: <FaLinux />, color: "from-gray-600 to-black" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "from-blue-700 to-blue-900" },
    { name: "Jenkins", icon: <SiJenkins />, color: "from-red-500 to-red-700" },
    { name: "Kubernetes", icon: <SiKubernetes />, color: "from-blue-500 to-blue-700" },
    { name: "Redux", icon: <SiRedux />, color: "from-purple-600 to-purple-800" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "from-gray-700 to-black" },
    { name: "SQL Databases", icon: <FaDatabase />, color: "from-indigo-600 to-indigo-800" },
  ];

  const services = [
    {
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Custom Software Development",
      description: "Tailored solutions built from scratch to meet your specific business requirements",
      features: ["Full-stack development", "API integration", "Real-time systems", "Scalable architecture"]
    },
    {
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Enterprise Solutions",
      description: "Robust, scalable systems designed for large-scale business operations",
      features: ["ERP systems", "CRM platforms", "Business intelligence", "Workflow automation"]
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Security & Compliance",
      description: "Secure software with industry-standard compliance and data protection",
      features: ["Data encryption", "GDPR compliance", "Security audits", "Penetration testing"]
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Performance Optimization",
      description: "High-performance applications optimized for speed and efficiency",
      features: ["Code optimization", "Database tuning", "Caching strategies", "Load balancing"]
    }
  ];

  const projects = [
    {
      title: "FinTech Trading Platform",
      description: "Real-time trading platform with advanced analytics",
      tech: ["React", "Node.js", "WebSocket", "Redis"],
      metrics: { users: "50K+", uptime: "99.9%", trades: "1M+" }
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive patient management and telemedicine platform",
      tech: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      metrics: { patients: "25K+", providers: "500+", appointments: "100K+" }
    },
    {
      title: "E-commerce Marketplace",
      description: "Multi-vendor marketplace with AI-powered recommendations",
      tech: ["Next.js", "Microservices", "MongoDB", "AWS"],
      metrics: { vendors: "1K+", products: "50K+", orders: "500K+" }
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 py-16">
      {/* Hero Section - Responsive */}

      <section className="relative pt-16 lg:pt-26 sm:pt-20 pb-12 sm:pb-16 overflow-hidden ">
        <div className="absolute inset-0 bg-linear-to-r from-blue-100/40 to-purple-100/40"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 border border-blue-300 rounded-full">
                <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600" />
                <span className="text-xs sm:text-sm font-medium text-blue-700">Software Development</span>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-5xl md:text-6xl font-medium font-serif bg-linear-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                  Build Powerful Software Solutions
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                  Transform your ideas into robust, scalable software applications with our expert development team. 
                  From concept to deployment, we deliver cutting-edge solutions that drive business growth.
                </p>
              </div>
            </div>
            
            {/* Unique Developer Dashboard - Responsive */}
            <div className="relative bg-linear-to-br from-white to-gray-100 p-4 sm:p-6 rounded-2xl shadow-2xl  text-slate-900">
              {/* Header */}
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <div className="flex space-x-1.5 sm:space-x-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                </div>
                <div className="text-xs text-gray-600">Developer Console: main.ts</div>
              </div>

              {/* Code Preview */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-300 font-mono text-xs sm:text-sm text-green-700 leading-relaxed mb-4 sm:mb-5">
                <p><span className="text-purple-600">function</span> <span className="text-sky-600">deployApp</span>() {'{'}</p>
                <p className="ml-3 sm:ml-4">const build = compileCode();</p>
                <p className="ml-3 sm:ml-4">const result = upload(build, 'prod');</p>
                <p className="ml-3 sm:ml-4">console.log(<span className="text-yellow-600">'🚀 Deployment Successful'</span>);</p>
                <p>{'}'}</p>
              </div>

              {/* Terminal Logs */}
              <div className="bg-slate-900 p-2.5 sm:p-3 rounded-lg text-xs font-mono text-green-400 border border-gray-400 mb-4 sm:mb-5">
                <p><span className="text-blue-400">root@dev</span>:~$ yarn deploy --env production</p>
                <p>🔄 Bundling modules...</p>
                <p>✔ Build complete in 2.91s</p>
                <p className="hidden sm:block">📦 Uploaded to S3 → cdn.nexgen.dev</p>
                <p>✅ Deployment to server-1 completed!</p>
              </div>

              {/* AI Assistant Chat Bubble */}
              {/* <div className="bg-blue-50 p-3 sm:p-4 rounded-xl border border-blue-200 mb-4 sm:mb-5 shadow-sm">
                <p className="text-xs sm:text-sm text-gray-800">💡 <span className="text-emerald-600">AI Assistant:</span> "Try using lazy loading for modules above 300kb for better performance!"</p>
              </div> */}

              {/* System Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="bg-gray-100 p-3 sm:p-4 rounded-lg border border-gray-300">
                  <p className="text-slate-700">Memory Usage</p>
                  <p className="text-lg sm:text-xl text-lime-600 font-bold">2.3 GB / 8 GB</p>
                </div>
                <div className="bg-gray-100 p-3 sm:p-4 rounded-lg border border-gray-300">
                  <p className="text-slate-700">CPU Load</p>
                  <p className="text-lg sm:text-xl text-orange-600 font-bold">34%</p>
                </div>
                {/* <div className="bg-gray-100 p-3 sm:p-4 rounded-lg col-span-2 border border-gray-300">
                  <p className="text-slate-700 mb-1">Next Scheduled Deployment</p>
                  <p className="text-xs sm:text-sm text-cyan-700">⏰ Sunday, 3:30 PM - Auto-triggered from GitHub Actions</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Responsive */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-5xl md:text-6xl font-medium font-serif  mb-3 sm:mb-4 text-slate-900">Our Development Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Comprehensive software development solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-linear-to-br from-white to-gray-50 border border-gray-300 rounded-2xl p-5 sm:p-6 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 shadow-sm hover:shadow-lg">
                <div className="mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-900">{service.title}</h3>
                <p className="text-sm sm:text-base text-slate-700 mb-3 sm:mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-5xl md:text-6xl font-medium font-serif text-slate-900 mb-2">Tech Toolbox</h2>
            <p className="text-slate-700 text-base sm:text-lg">The technologies powering our code.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                className="bg-white border border-gray-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 shadow-md hover:-translate-y-2 transition-transform duration-300"
              >
                <span className="text-xl sm:text-2xl md:text-3xl text-slate-900">{tech.icon}</span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-slate-900">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 sm:mb-8">
            <Award className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium font-serif mb-3 sm:mb-4 text-slate-900">Ready to Build Something Amazing?</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-700">
              Let's discuss your software development needs and create a solution that exceeds your expectations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contactus">
              <button className="w-full sm:w-auto px-6 cursor-pointer sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                Start Your Project Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;
