'use client';

import { ChevronRight, Zap, Code, Megaphone, Play, Star, TrendingUp, Shield, Terminal, Users, BarChart3, Palette, Layout, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [particles, setParticles] = useState([]);

  const services = [
    {
      title: "Web Development Mastery",
      prefix: "Transform Ideas Into",
      mockup: "code",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Software Development",
      prefix: "Scale Your Business With",
      mockup: "terminal",
      icon: <Terminal className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Digital Marketing Excellence",
      prefix: "Elevate Your Brand With",
      mockup: "analytics",
      icon: <Megaphone className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    
    
    {
      title: "UI/UX Design",
      prefix: "Create Stunning Experiences With",
      mockup: "design",
      icon: <Layout className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Logo Design",
      prefix: "Build Your Identity With",
      mockup: "logo",
      icon: <Palette className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const currentService = services[currentServiceIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  const renderMockup = () => {
    const mockupType = currentService.mockup;

    if (mockupType === "analytics") {
      return (
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 p-6 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Analytics Dashboard</h3>
                <p className="text-xs text-gray-500">Real-time insights</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 rounded-full">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span className="text-xs font-medium text-green-700">Live</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { label: "Conversions", value: "2,847", change: "+12.5%" },
              { label: "Engagement", value: "94.2%", change: "+8.3%" },
              { label: "Reach", value: "1.2M", change: "+24.1%" },
              { label: "ROI", value: "340%", change: "+15.7%" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="bg-linear-to-br from-white to-gray-50 rounded-lg p-3 border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-xs text-gray-600 mb-1">{stat.label}</p>
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs font-medium text-green-600">{stat.change}</p>
              </motion.div>
            ))}
          </div>

          <div className="relative h-28 bg-linear-to-t from-orange-50 to-transparent rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-end justify-around px-1">
              {[30, 45, 65, 50, 75, 90, 80, 95, 100, 98].map((height, i) => (
                <motion.div
                  key={i}
                  className="w-[8%] bg-linear-to-t from-orange-500 to-red-500 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      );
    }

    if (mockupType === "code") {
      return (
        <motion.div
          className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-800 border-b border-gray-700 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300 font-mono">app.tsx</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/20 rounded-full">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
              <span className="text-xs text-green-400">Building</span>
            </div>
          </div>

          <div className="p-4 font-mono text-sm min-h-[280px]">
            {[
              { num: 1, code: "import React from 'react';", color: "text-purple-400" },
              { num: 2, code: "import { motion } from 'framer-motion';", color: "text-purple-400" },
              { num: 3, code: "", color: "" },
              { num: 4, code: "export default function App() {", color: "text-blue-400" },
              { num: 5, code: "  return (", color: "text-pink-400" },
              { num: 6, code: "    <motion.div", color: "text-green-400" },
              { num: 7, code: "      initial={{ opacity: 0 }}", color: "text-yellow-400" },
              { num: 8, code: "      animate={{ opacity: 1 }}", color: "text-yellow-400" },
              { num: 9, code: "    >", color: "text-green-400" },
              { num: 10, code: "      <h1>Welcome</h1>", color: "text-green-400" },
              { num: 11, code: "    </motion.div>", color: "text-green-400" },
              { num: 12, code: "  );", color: "text-pink-400" },
              { num: 13, code: "}", color: "text-blue-400" },
            ].map((line, i) => (
              <motion.div
                key={i}
                className="flex"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.03 }}
              >
                <span className="text-gray-600 w-8 text-right mr-4 text-xs">{line.num || ""}</span>
                <span className={line.color || "text-gray-300"}>{line.code}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-black/50 border-t border-gray-700 p-3">
            <div className="flex items-center gap-2 mb-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs text-gray-400 font-medium">OUTPUT</span>
            </div>
            <div className="font-mono text-xs">
              <motion.div
                className="text-cyan-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-gray-500">$</span> npm run dev
              </motion.div>
              <motion.div
                className="text-green-400 text-xs mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                ✓ Ready in 1.2s
              </motion.div>
            </div>
          </div>
        </motion.div>
      );
    }

    if (mockupType === "terminal") {
      return (
        <motion.div
          className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-purple-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-800 border-b border-gray-700 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300 font-mono">terminal</span>
              </div>
            </div>
          </div>

          <div className="p-4 font-mono text-sm space-y-2.5 min-h-[280px]">
            {[
              { cmd: "$ npm install", output: "✓ Installed 847 packages", delay: 0.2 },
              { cmd: "$ npm run build", output: "✓ Build completed", delay: 0.5 },
              { cmd: "$ npm test", output: "✓ All tests passed", delay: 0.8 },
              { cmd: "$ docker build -t app .", output: "✓ Image built successfully", delay: 1.1 },
              { cmd: "$ kubectl apply -f deploy.yml", output: "✓ Deployed to production", delay: 1.4 },
            ].map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: line.delay }}
              >
                <div className="text-purple-400 mb-0.5">{line.cmd}</div>
                <div className="text-green-400 text-xs ml-2">{line.output}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );
    }

    if (mockupType === "design") {
      return (
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 p-6 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <Layout className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Design System</h3>
                <p className="text-xs text-gray-500">Components</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-xs font-bold text-gray-600 mb-2 uppercase">Colors</p>
            <div className="grid grid-cols-5 gap-2">
              {[
                'bg-linear-to-br from-pink-500 to-rose-500',
                'bg-linear-to-br from-purple-500 to-indigo-500',
                'bg-linear-to-br from-blue-500 to-cyan-500',
                'bg-linear-to-br from-green-500 to-emerald-500',
                'bg-linear-to-br from-orange-500 to-red-500'
              ].map((color, i) => (
                <motion.div
                  key={i}
                  className={`${color} h-12 rounded-lg shadow-md`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="text-xs font-bold text-gray-600 mb-2 uppercase">Typography</p>
            <div className="bg-gray-50 rounded-lg p-3 space-y-1">
              <div className="text-2xl font-black text-gray-900">Heading</div>
              <div className="text-lg font-semibold text-gray-700">Subheading</div>
              <div className="text-sm text-gray-600">Body Text</div>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-gray-600 mb-2 uppercase">Buttons</p>
            <div className="flex gap-2">
              <motion.button
                className="px-4 py-2 bg-linear-to-r from-pink-500 to-rose-500 text-white rounded-lg text-sm font-semibold shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                Primary
              </motion.button>
              <motion.button
                className="px-4 py-2 border-2 border-pink-500 text-pink-600 rounded-lg text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                Secondary
              </motion.button>
            </div>
          </div>
        </motion.div>
      );
    }

    if (mockupType === "logo") {
      return (
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 p-6 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Palette className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Brand Identity</h3>
                <p className="text-xs text-gray-500">Logo variations</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              {
                linear: "from-white/60 to-white/20 backdrop-blur-lg border border-white/30 shadow-xl",
                img: "https://www.psdecor.in/_next/image?url=%2Fassets%2Fpslogo.PNG&w=256&q=75",
                alt: "Logo Variant 1"
              },
              {
                linear: "from-slate-200/70 to-slate-500/30 backdrop-blur-lg border border-white/20 shadow-lg",
                img: "/logo-2.png",
                alt: "Logo Variant 2"
              },
              {
                linear: "from-purple-200/60 to-pink-200/30 backdrop-blur-xl border border-white/20 shadow-xl",
                img: "/logo-3.png",
                alt: "Logo Variant 3"
              },
              {
                linear: "from-blue-200/60 to-cyan-200/30 backdrop-blur-xl border border-white/20 shadow-xl",
                img: "/logo-4.png",
                alt: "Logo Variant 4"
              }

            ].map((logo, i) => (
              <motion.div
                key={i}
                className={`bg-linear-to-br ${logo.linear} rounded-xl h-24 flex items-center justify-center shadow-lg relative overflow-hidden group`}

              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={logo.img}
                  alt={logo.alt}
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML += '<span class="text-4xl font-black text-white">LOGO</span>';
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-lg p-3">
            <p className="text-xl font-black text-gray-900">ZENTRIX</p>
            <p className="text-xs text-gray-600 font-medium">Tech Solutions</p>
          </div>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-[#f56a6a]/5 via-white to-[#f04393]/5">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'linear-linear(rgba(0,0,0,0.05) 1px, transparent 1px), linear-linear(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-500/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 bg-linear-to-r from-blue-500 to-purple-500"
          style={{ top: '20%', left: '20%' }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-15 bg-linear-to-r from-pink-500 to-orange-500"
          style={{ bottom: '20%', right: '20%' }}
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">

          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >



            {/* Main Heading */}
            <div>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentServiceIndex}
                  className="text-5xl sm:text-6xl lg:text-6xl font-black tracking-tight leading-tight mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="block text-gray-900 mb-2 font-medium font-serif">{currentService.prefix}</span>
                  <span className={`block bg-linear-to-r ${currentService.color} bg-clip-text text-transparent font-medium font-serif`}>
                    {currentService.title}
                  </span>
                </motion.h1>
              </AnimatePresence>
              <p className="text-xl text-gray-600 mt-4">
                Enterprise-grade solutions powered by cutting-edge technology
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <motion.button
                className={`px-8 py-4 bg-linear-to-r cursor-pointer ${currentService.color} text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all w-full sm:w-auto flex items-center justify-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contactus'}
              >
                <Rocket className="w-5 h-5" />
                <span>Get Started</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="px-8 py-4 bg-white border-2 cursor-pointer border-gray-300 text-gray-700 font-bold text-lg rounded-xl hover:bg-gray-50 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/portfolios'}
              >
                <Play className="w-5 h-5" />
                <span>View Work</span>
              </motion.button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              {[
                { icon: <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />, value: "4.7/5", label: "Rating" },
                { icon: <TrendingUp className="w-5 h-5 text-green-600" />, value: "250+", label: "Projects" },
                { icon: <Users className="w-5 h-5 text-blue-600" />, value: "270+", label: "Clients" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Mockup */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentServiceIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                {renderMockup()}
              </motion.div>
            </AnimatePresence>

            <div className={`absolute -inset-4 bg-linear-to-r ${currentService.color} opacity-20 rounded-2xl blur-2xl -z-10`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;