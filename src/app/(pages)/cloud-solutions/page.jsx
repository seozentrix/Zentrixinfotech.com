'use client';

import React, { useState, useEffect } from 'react';
import {  Shield, Zap, BarChart3, Server, Globe,  Container } from 'lucide-react';
import { motion } from "framer-motion";
import { 
   FaAws 
} from 'react-icons/fa';



import { 
  SiAmazonec2, SiAmazons3, SiKubernetes, SiAmazoncloudwatch, SiAwslambda, 
  SiAmazonrds, SiAmazoneks,
  SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiJenkins, SiGitlab
} from 'react-icons/si';

import { 
  FaDocker
} from 'react-icons/fa';


const CloudServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [metrics, setMetrics] = useState({ cpu: 67, memory: 84, network: 45, storage: 72 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        cpu: Math.max(20, Math.min(95, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(30, Math.min(90, prev.memory + (Math.random() - 0.5) * 8)),
        network: Math.max(15, Math.min(85, prev.network + (Math.random() - 0.5) * 12)),
        storage: Math.max(40, Math.min(95, prev.storage + (Math.random() - 0.5) * 6))
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { name: 'Cloud Infrastructure', icon: Server, color: 'blue', instances: 2847, status: 'Healthy' },
    { name: 'Security Shield', icon: Shield, color: 'green', instances: 156, status: 'Protected' },
    { name: 'Data Analytics', icon: BarChart3, color: 'purple', instances: 934, status: 'Processing' },
    { name: 'Global CDN', icon: Globe, color: 'cyan', instances: 78, status: 'Optimized' }
  ];

  const features = [
    { title: 'Auto-Scaling Infrastructure', desc: 'Dynamic resource allocation', icon: Server, color: 'blue' },
    { title: 'Advanced Security Suite', desc: 'AI-powered threat detection', icon: Shield, color: 'green' },
    { title: 'Real-time Analytics', desc: 'Instant insights & reporting', icon: BarChart3, color: 'purple' },
    { title: 'Global Edge Network', desc: 'Ultra-low latency worldwide', icon: Globe, color: 'cyan' },
    { title: 'Container Orchestration', desc: 'Kubernetes-native deployment', icon: Container, color: 'orange' },
    { title: 'Serverless Computing', desc: 'Event-driven functions', icon: Zap, color: 'yellow' }
  ];

  const cloudTools = [
    { name: "AWS EC2", icon: <SiAmazonec2 className="text-orange-500" />, color: "text-orange-500" },
    { name: "AWS S3", icon: <SiAmazons3 className="text-green-500" />, color: "text-green-500" },
    { name: "Docker", icon: <FaDocker className="text-blue-500" />, color: "text-blue-500" },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" />, color: "text-blue-600" },
    { name: "CloudWatch", icon: <SiAmazoncloudwatch className="text-purple-500" />, color: "text-purple-500" },
    { name: "Lambda", icon: <SiAwslambda className="text-yellow-500" />, color: "text-yellow-500" },
    { name: "RDS", icon: <SiAmazonrds className="text-blue-700" />, color: "text-blue-700" },
    { name: "Route 53", icon: <FaAws className="text-orange-600" />, color: "text-orange-600" },
    { name: "EKS", icon: <SiAmazoneks className="text-blue-400" />, color: "text-blue-400" },
    { name: "Terraform", icon: <SiTerraform className="text-purple-600" />, color: "text-purple-600" },
    { name: "Ansible", icon: <SiAnsible className="text-red-500" />, color: "text-red-500" },
    { name: "Prometheus", icon: <SiPrometheus className="text-orange-700" />, color: "text-orange-700" },
    { name: "Grafana", icon: <SiGrafana className="text-orange-500" />, color: "text-orange-500" },
    { name: "Jenkins", icon: <SiJenkins className="text-blue-500" />, color: "text-blue-500" },
    { name: "GitLab", icon: <SiGitlab className="text-orange-600" />, color: "text-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-linear(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>

      {/* Hero with Live Dashboard */}
      <section className="relative z-10 px-4 sm:px-6 pb-16 pt-30 md:pt-32 lg:pt-40 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 rounded-full border border-blue-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                <span className="text-xs sm:text-sm text-blue-700 font-medium">Live Production Environment</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif leading-tight">
                <span className="bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Enterprise Cloud
                </span><br />
                <span className="text-slate-900">That Just Works</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
                Deploy, scale, and manage your applications with our intelligent cloud platform. 
                Trusted by 10,000+ developers worldwide.
              </p>
            </div>

            {/* Live Dashboard */}
            <div className="bg-linear-to-br from-slate-50 to-blue-50 backdrop-blur-xl rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">Production Console</span>
                </div>
                <div className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                  All Systems Operational
                </div>
              </div>

              {/* Live Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                {[
                  { label: 'CPU Usage', value: metrics.cpu, color: 'blue' },
                  { label: 'Memory', value: metrics.memory, color: 'green' },
                  { label: 'Network I/O', value: metrics.network, color: 'purple' },
                  { label: 'Storage', value: metrics.storage, color: 'orange' }
                ].map((metric, i) => (
                  <div key={i} className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-slate-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-slate-600 font-medium">{metric.label}</span>
                      <span className="text-sm font-mono text-slate-900 font-semibold">{Math.round(metric.value)}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-full bg-linear-to-r from-${metric.color}-500 to-${metric.color}-400 rounded-full transition-all duration-1000`}
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Status */}
              <div className="space-y-2 sm:space-y-3">
                {services.map((service, i) => (
                  <div key={i} 
                    className={`flex items-center justify-between p-3 rounded-lg transition-all cursor-pointer ${
                      activeService === i ? 'bg-blue-100 border border-blue-300' : 'bg-white hover:bg-slate-50 border border-slate-200'
                    }`}
                    onClick={() => setActiveService(i)}>
                    <div className="flex items-center space-x-3">
                      <service.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${service.color}-600`} />
                      <div>
                        <div className="font-medium text-sm text-slate-900">{service.name}</div>
                        <div className="text-xs text-slate-500">{service.instances} instances</div>
                      </div>
                    </div>
                    <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                      {service.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Tools */}
      <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif mb-3 sm:mb-4 text-slate-900">Powerful Cloud Solutions</h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg">Enterprise-ready tools for modern applications</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {features.map((feature, i) => (
              <div key={i} className="group bg-white rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all hover:transform hover:scale-105 cursor-pointer">
                <feature.icon className={`w-7 h-7 sm:w-8 sm:h-8 text-${feature.color}-600 group-hover:scale-110 transition-transform mb-3 sm:mb-4`} />
                <h3 className="font-semibold text-slate-900 mb-2 text-base sm:text-lg">{feature.title}</h3>
                <p className="text-sm text-slate-600 mb-3 sm:mb-4">{feature.desc}</p>
                <button className="w-full bg-linear-to-r from-blue-50 to-purple-50 text-blue-600 py-2 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all font-medium text-sm">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Cloud Tools Section */}
          <div className="text-center mb-8 sm:mb-12 pt-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-slate-900 mb-2">Tech Toolbox</h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg">The technologies powering our cloud solutions</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {cloudTools.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white rounded-xl w-24 sm:w-28 md:w-32 shadow-md hover:shadow-xl transition-all cursor-default select-none border border-slate-200"
              >
                <div className={`text-3xl sm:text-4xl md:text-5xl ${tech.color}`}>
                  {tech.icon}
                </div>
                <span className="text-slate-900 font-semibold text-sm sm:text-base md:text-lg text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CloudServicesPage;
