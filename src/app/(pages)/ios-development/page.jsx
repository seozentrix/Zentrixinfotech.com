'use client';

import React, { useState, useEffect } from 'react';
import { Smartphone, Code, Palette, Shield, Zap, Globe, Users, BarChart3, Play, Star, TrendingUp, Search, Menu, Heart, ShoppingCart, Camera, MapPin, Calendar, Bell, Settings, Download, Package, Cpu, Layers, Apple } from 'lucide-react';

import { motion } from "framer-motion";

const iOSDevelopment = () => {
  const [codeIndex, setCodeIndex] = useState(0);

  const codeSnippets = [
    `// Swift - Modern iOS Development
import UIKit

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let button = UIButton(type: .system)
        button.setTitle("Get Started", for: .normal)
        button.addTarget(self, action: #selector(buttonTapped), 
                        for: .touchUpInside)
        view.addSubview(button)
    }
    
    @objc func buttonTapped() {
        // Handle button tap
    }
}`,
    `// SwiftUI - Declarative UI
import SwiftUI

struct ContentView: View {
    @State private var username = ""
    
    var body: some View {
        VStack(spacing: 20) {
            Text("Welcome to iOS")
                .font(.largeTitle)
                .fontWeight(.bold)
            
            TextField("Enter username", text: $username)
                .textFieldStyle(.roundedBorder)
                .padding()
            
            Button("Continue") {
                // Handle action
            }
            .buttonStyle(.borderedProminent)
        }
    }
}`,
    `// Combine Framework - Reactive Programming
import Combine

class UserViewModel: ObservableObject {
    @Published var users: [User] = []
    private var cancellables = Set<AnyCancellable>()
    
    func fetchUsers() {
        APIService.shared.getUsers()
            .receive(on: DispatchQueue.main)
            .sink { completion in
                // Handle completion
            } receiveValue: { [weak self] users in
                self?.users = users
            }
            .store(in: &cancellables)
    }
}`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const iosServices = [
    {
      icon: Apple,
      title: "Native iOS Apps",
      description: "Build high-performance native iOS applications using Swift and latest iOS SDK",
      technologies: ["Swift", "Xcode", "iOS SDK", "UIKit", "Foundation"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Layers,
      title: "SwiftUI Development",
      description: "Modern declarative UI framework for building beautiful iOS interfaces",
      technologies: ["SwiftUI", "Combine", "SF Symbols", "MVVM", "Animations"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Code,
      title: "iOS Architecture",
      description: "Clean architecture, MVVM, and modern design patterns for maintainable code",
      technologies: ["MVVM", "Core Data", "URLSession", "Async/Await", "Dependency Injection"],
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Globe,
      title: "Backend Integration",
      description: "RESTful APIs, GraphQL, CloudKit, and real-time data synchronization",
      technologies: ["Alamofire", "URLSession", "CloudKit", "Firebase", "WebSocket"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Secure data storage, biometric authentication, and privacy compliance",
      technologies: ["Keychain", "Face ID", "Touch ID", "App Transport Security", "Privacy API"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: BarChart3,
      title: "Testing & Analytics",
      description: "XCTest, UI testing, crash analytics, and performance monitoring",
      technologies: ["XCTest", "XCUITest", "TestFlight", "Firebase Analytics", "App Store Connect"],
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const iosFeatures = [
    { icon: Zap, title: "Fast Performance", desc: "Native speed" },
    { icon: Shield, title: "Secure", desc: "Apple security" },
    { icon: Users, title: "Premium Users", desc: "High engagement" },
    { icon: Package, title: "App Store Ready", desc: "Optimized for approval" }
  ];

  const dashboardStats = [
    { label: "iOS Apps Built", value: "150+", change: "+18%", color: "text-blue-600" },
    { label: "App Store Rating", value: "4.9", change: "+0.4", color: "text-purple-600" },
    { label: "Active Users", value: "1.8M+", change: "+22%", color: "text-pink-600" },
    { label: "Code Quality", value: "98%", change: "+5%", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-white py-20">


      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 pb-16 sm:pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-100/40 to-purple-100/40 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 border border-blue-300 rounded-full mb-6">
                <Apple className="w-4 h-4 mr-2 text-blue-700" />
                <span className="text-sm font-medium text-blue-700">iOS Development</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-medium font-serif mb-4 sm:mb-6 bg-linear-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Professional iOS App Development
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-6 sm:mb-8 leading-relaxed">
                Create stunning, high-performance iOS applications with Swift, SwiftUI, and cutting-edge Apple technologies that deliver exceptional user experiences.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                {iosFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white px-3 sm:px-4 py-2 rounded-full border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
                    <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    <span className="text-xs sm:text-sm text-slate-700">{feature.title}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact-us">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    Start Your iOS Project
                  </button>
                </a>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-slate-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-4 h-4 mr-2" />
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right Code Editor */}
            <div className="bg-linear-to-br from-slate-900 to-slate-800 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border-b border-slate-700">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="flex space-x-1.5 sm:space-x-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-300 text-xs sm:text-sm font-medium">ViewController.swift</span>
                </div>
                <Code className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              </div>
              <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-x-auto bg-slate-900">
                <pre className="text-slate-300 leading-relaxed">
                  <code>{codeSnippets[codeIndex]}</code>
                </pre>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-12 md:mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-medium font-serif text-slate-900 mb-3 sm:mb-4">Our iOS Expertise</h2>
            <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base">Real-time metrics showcasing our iOS development excellence</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {dashboardStats.map((stat, index) => (
              <div key={index} className="bg-white backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-700 text-xs sm:text-sm">{stat.label}</span>
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                </div>
                <div className="flex items-end space-x-2">
                  <span className="text-2xl sm:text-3xl font-medium text-slate-900">{stat.value}</span>
                  <span className={`text-xs sm:text-sm ${stat.color}`}>{stat.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* iPhone Mockup Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left - iPhone Mockup 1: Finance App */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-[520px] sm:w-72 sm:h-[600px] bg-black rounded-[2.5rem] sm:rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-4xl sm:rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 sm:w-32 sm:h-6 bg-black rounded-b-2xl z-10"></div>

                    {/* Screen Content */}
                    <div className="h-full bg-linear-to-br from-blue-50 to-indigo-50 relative">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-4 sm:px-6 pt-10 sm:pt-12 pb-3 sm:pb-4 text-black text-xs sm:text-sm font-medium">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                          </div>
                          <div className="w-5 h-2.5 sm:w-6 sm:h-3 border border-black rounded-sm">
                            <div className="w-3.5 h-0.5 sm:w-4 sm:h-1 bg-green-500 rounded-sm mt-0.5 ml-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="px-4 sm:px-6 mb-4 sm:mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">$24,850</h1>
                            <p className="text-xs sm:text-sm text-gray-600">Total Balance</p>
                          </div>
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Cards */}
                      <div className="px-4 sm:px-6 mb-4 sm:mb-6">
                        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-4 sm:p-6 text-white shadow-xl">
                          <div className="flex justify-between items-start mb-8 sm:mb-12">
                            <div>
                              <p className="text-xs sm:text-sm opacity-90 mb-1">Card Number</p>
                              <p className="text-base sm:text-lg font-semibold">**** **** **** 8492</p>
                            </div>
                            <Apple className="w-6 h-6 sm:w-8 sm:h-8" />
                          </div>
                          <div className="flex justify-between items-end">
                            <div>
                              <p className="text-xs opacity-90 mb-1">Card Holder</p>
                              <p className="text-sm sm:text-base font-semibold">John Smith</p>
                            </div>
                            <div>
                              <p className="text-xs opacity-90 mb-1">Expires</p>
                              <p className="text-sm sm:text-base font-semibold">12/26</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="px-4 sm:px-6 mb-4 sm:mb-6">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-4 gap-3">
                          {[
                            { icon: <ShoppingCart className="w-5 h-5" />, label: "Pay" },
                            { icon: <Download className="w-5 h-5" />, label: "Receive" },
                            { icon: <BarChart3 className="w-5 h-5" />, label: "Stats" },
                            { icon: <Users className="w-5 h-5" />, label: "Send" }
                          ].map((action, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-2 shadow-sm">
                                {action.icon}
                              </div>
                              <span className="text-xs text-gray-700">{action.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Transactions */}
                      <div className="px-4 sm:px-6">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Recent Transactions</h3>
                        <div className="space-y-3">
                          {[
                            { name: "Apple Store", amount: "-$129", icon: <Apple className="w-5 h-5" />, color: "from-gray-600 to-gray-700" },
                            { name: "Netflix", amount: "-$15.99", icon: <Play className="w-5 h-5" />, color: "from-red-500 to-red-600" },
                            { name: "Spotify", amount: "-$9.99", icon: <Star className="w-5 h-5" />, color: "from-green-500 to-green-600" }
                          ].map((transaction, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-3 sm:p-4 flex items-center justify-between shadow-sm">
                              <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r ${transaction.color} rounded-xl flex items-center justify-center text-white`}>
                                  {transaction.icon}
                                </div>
                                <div>
                                  <div className="text-sm sm:text-base font-semibold text-gray-900">{transaction.name}</div>
                                  <div className="text-xs text-gray-500">Today, 2:30 PM</div>
                                </div>
                              </div>
                              <div className="text-sm sm:text-base font-bold text-red-600">{transaction.amount}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 sm:w-32 bg-black/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - iPhone Mockup 2: Travel App */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-[520px] sm:w-72 sm:h-[600px] bg-black rounded-[2.5rem] sm:rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-4xl sm:rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 sm:w-32 sm:h-6 bg-black rounded-b-2xl z-10"></div>

                    {/* Screen Content */}
                    <div className="h-full bg-linear-to-br from-orange-50 to-pink-50 relative">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-4 sm:px-6 pt-10 sm:pt-12 pb-3 sm:pb-4 text-black text-xs sm:text-sm font-medium">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                          </div>
                          <div className="w-5 h-2.5 sm:w-6 sm:h-3 border border-black rounded-sm">
                            <div className="w-3.5 h-0.5 sm:w-4 sm:h-1 bg-green-500 rounded-sm mt-0.5 ml-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="px-4 sm:px-6 mb-4 sm:mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Explore</h1>
                            <p className="text-xs sm:text-sm text-gray-600">Find your next adventure</p>
                          </div>
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                            <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                        </div>

                        {/* Search Bar */}
                        <div className="flex items-center bg-white rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-sm">
                          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          <span className="ml-2 sm:ml-3 text-gray-500 text-xs sm:text-sm">Search destinations...</span>
                        </div>
                      </div>

                      {/* Category Pills */}
                      <div className="px-4 sm:px-6 mb-4 sm:mb-6">
                        <div className="flex space-x-2 overflow-x-auto pb-2">
                          {["🏖️ Beach", "🏔️ Mountains", "🏙️ Cities", "🌴 Tropical"].map((cat, idx) => (
                            <div key={idx} className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap ${idx === 0 ? 'bg-linear-to-r from-orange-500 to-pink-500 text-white' : 'bg-white text-gray-700 border border-gray-200'}`}>
                              {cat}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Featured Destination */}
                      <div className="px-4 sm:px-6 mb-4 sm:mb-6">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Featured Destinations</h3>
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                          <div className="h-32 sm:h-40 bg-linear-to-br from-orange-400 to-pink-400 flex items-center justify-center relative">
                            <Camera className="w-12 h-12 sm:w-16 sm:h-16 text-white opacity-50" />
                            <div className="absolute top-3 right-3">
                              <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <Heart className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="p-3 sm:p-4">
                            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Bali, Indonesia</h4>
                            <p className="text-xs sm:text-sm text-gray-600 mb-3">7 days • All inclusive</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm font-semibold text-gray-900 ml-1">4.9</span>
                                <span className="text-xs text-gray-500 ml-1">(2.4k reviews)</span>
                              </div>
                              <div className="text-lg sm:text-xl font-bold text-orange-600">$899</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Popular Destinations */}
                      <div className="px-4 sm:px-6">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Popular This Week</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { name: "Paris", price: "$1,299", rating: "4.8" },
                            { name: "Tokyo", price: "$1,499", rating: "4.9" }
                          ].map((dest, idx) => (
                            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm">
                              <div className="h-20 sm:h-24 bg-linear-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-50" />
                              </div>
                              <div className="p-2 sm:p-3">
                                <h5 className="text-sm sm:text-base font-bold text-gray-900">{dest.name}</h5>
                                <div className="flex items-center justify-between mt-1">
                                  <span className="text-xs text-gray-600">{dest.price}</span>
                                  <div className="flex items-center">
                                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                    <span className="text-xs text-gray-700 ml-1">{dest.rating}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 sm:w-32 bg-black/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-medium font-serif text-slate-900 mb-3 sm:mb-4">iOS Development Services</h2>
            <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base">
              Comprehensive iOS solutions using latest Apple technologies and best practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {iosServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-300 hover:border-gray-400 transition-all duration-300 group shadow-sm hover:shadow-lg"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-slate-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-slate-900">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-slate-700 text-xs rounded-md border border-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-medium font-serif text-slate-900 mb-3 sm:mb-4">iOS Development Process</h2>
            <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base">
              Apple-approved methodology with TestFlight and App Store optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: "01", title: "Strategy & Planning", desc: "Requirements analysis, iOS guidelines review, and architecture design" },
              { step: "02", title: "Design & Prototyping", desc: "Human Interface Guidelines, SwiftUI design, and interactive prototypes" },
              { step: "03", title: "Development & Testing", desc: "Swift coding, XCTest, TestFlight beta testing, and QA validation" },
              { step: "04", title: "App Store Launch", desc: "App Store submission, optimization, and post-launch support" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white font-bold text-base sm:text-lg shadow-lg">
                  {phase.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">{phase.title}</h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <Apple className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-900">Ready to Build Your iOS App?</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-700">
              Let's create a stunning iOS application that shines on the App Store
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact-us">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Start Your iOS Project
              </button>
            </a>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-400 text-slate-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
              <Download className="w-4 h-4 mr-2" />
              View Case Studies
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default iOSDevelopment;
