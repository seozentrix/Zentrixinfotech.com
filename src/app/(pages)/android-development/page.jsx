'use client';

import React, { useState, useEffect } from 'react';
import { Smartphone, Code, Palette, Shield, Zap, Globe, Users, BarChart3, Play, Star, TrendingUp, Search, Menu, Heart, ShoppingCart, Camera, MapPin, Calendar, Bell, Settings, Download, Package, Cpu, Layers } from 'lucide-react';
import { motion } from "framer-motion";

const AndroidDevelopment = () => {
  const [codeIndex, setCodeIndex] = useState(0);

  const codeSnippets = [
    `// Kotlin - Modern Android Development
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        val button = findViewById<Button>(R.id.button)
        button.setOnClickListener {
            // Handle click event
            startActivity(Intent(this, SecondActivity::class.java))
        }
    }
}`,
    `// Jetpack Compose - UI Development
@Composable
fun GreetingScreen(name: String) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = "Hello, $name!",
            style = MaterialTheme.typography.h4,
            color = MaterialTheme.colors.primary
        )
    }
}`,
    `// Android ViewModel - Architecture
class UserViewModel : ViewModel() {
    private val _users = MutableLiveData<List<User>>()
    val users: LiveData<List<User>> = _users
    
    fun fetchUsers() {
        viewModelScope.launch {
            val result = repository.getUsers()
            _users.value = result
        }
    }
}`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const androidServices = [
    {
      icon: Smartphone,
      title: "Native Android Apps",
      description: "Build high-performance native Android applications using Kotlin and Java with latest Android SDK",
      technologies: ["Kotlin", "Java", "Android SDK", "Android Studio", "Gradle"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Layers,
      title: "Jetpack Compose UI",
      description: "Modern declarative UI toolkit for building beautiful, responsive Android interfaces",
      technologies: ["Jetpack Compose", "Material Design 3", "Compose Navigation", "Animation"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: "Android Architecture",
      description: "MVVM, Clean Architecture, and modern Android architecture components",
      technologies: ["MVVM", "Room Database", "LiveData", "ViewModel", "Repository Pattern"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Backend Integration",
      description: "RESTful APIs, GraphQL, and real-time data synchronization for Android apps",
      technologies: ["Retrofit", "OkHttp", "GraphQL", "WebSocket", "Firebase"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Security & Authentication",
      description: "Secure data storage, OAuth, biometric authentication, and encryption",
      technologies: ["Encrypted SharedPreferences", "Biometric API", "OAuth 2.0", "SSL Pinning"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: BarChart3,
      title: "Testing & Optimization",
      description: "Unit testing, UI testing, performance optimization, and crash analytics",
      technologies: ["JUnit", "Espresso", "Mockito", "Firebase Crashlytics", "LeakCanary"],
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const androidFeatures = [
    { icon: Zap, title: "High Performance", desc: "Optimized for speed" },
    { icon: Shield, title: "Secure", desc: "Enterprise-grade security" },
    { icon: Users, title: "Scalable", desc: "Millions of users" },
    { icon: Package, title: "Play Store Ready", desc: "Optimized for deployment" }
  ];

  const dashboardStats = [
    { label: "Android Apps Built", value: "180+", change: "+15%", color: "text-green-600" },
    { label: "Play Store Rating", value: "4.8", change: "+0.3", color: "text-blue-600" },
    { label: "Active Users", value: "2M+", change: "+25%", color: "text-purple-600" },
    { label: "Code Quality", value: "96%", change: "+4%", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-white md:py-24 py-18">


      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 pb-16 sm:pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-green-100/40 to-blue-100/40 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-green-100 border border-green-300 rounded-full mb-6">
                <Smartphone className="w-4 h-4 mr-2 text-green-700" />
                <span className="text-sm font-medium text-green-700">Android Development</span>
              </div>

              <h1 className="text-5xl md:text-6xl  font-medium font-serif mb-4 sm:mb-6 ">
                Professional Android <span className=''>App Development</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-6 sm:mb-8 leading-relaxed">
                Build powerful, scalable Android applications with modern Kotlin, Jetpack Compose, and cutting-edge Android technologies that reach billions of users worldwide.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                {androidFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white px-3 sm:px-4 py-2 rounded-full border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
                    <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-slate-700">{feature.title}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact-us">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 cursor-pointer bg-linear-to-r from-[#3dd5c5] via-[#2dd4bf] to-[#14b8a6]  text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    Start Your Android Project
                  </button>
                </a>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-slate-700 rounded-xl font-semibold hover:border-teal-400  hover:text-teal-600 cursor-pointer transition-all duration-300 flex items-center justify-center">
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
                  <span className="text-slate-300 text-xs sm:text-sm font-medium">MainActivity.kt</span>
                </div>
                <Code className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
              </div>
              <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-x-auto bg-slate-900">
                <pre className="text-slate-300 leading-relaxed">
                  <code className="language-kotlin">
                    <span className="text-purple-400">// Kotlin - Modern Android Development</span>
                    {'\n'}
                    <span className="text-pink-400">class</span> <span className="text-yellow-300">MainActivity</span> : <span className="text-blue-400">AppCompatActivity</span>() {'{'}
                    {'\n  '}
                    <span className="text-pink-400">override fun</span> <span className="text-green-400">onCreate</span>(<span className="text-orange-300">savedInstanceState</span>: <span className="text-blue-400">Bundle</span>?) {'{'}
                    {'\n    '}
                    <span className="text-pink-400">super</span>.<span className="text-green-400">onCreate</span>(savedInstanceState)
                    {'\n    '}
                    <span className="text-green-400">setContentView</span>(<span className="text-blue-400">R</span>.layout.activity_main)
                    {'\n    '}
                    {'\n    '}
                    <span className="text-pink-400">val</span> <span className="text-cyan-300">button</span> = <span className="text-green-400">findViewById</span>&lt;<span className="text-blue-400">Button</span>&gt;(<span className="text-blue-400">R</span>.id.button)
                    {'\n    '}
                    <span className="text-cyan-300">button</span>.<span className="text-green-400">setOnClickListener</span> {'{'}
                    {'\n      '}
                    <span className="text-purple-400">// Handle click event</span>
                    {'\n      '}
                    <span className="text-green-400">startActivity</span>(<span className="text-green-400">Intent</span>(<span className="text-pink-400">this</span>, <span className="text-yellow-300">SecondActivity</span>::<span className="text-pink-400">class</span>.java))
                    {'\n    '}
                    {'}'}
                    {'\n  '}
                    {'}'}
                    {'\n'}
                    {'}'}
                  </code>
                </pre>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-12 md:mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-medium font-serif text-slate-900 mb-3 sm:mb-4">Our Android Expertise</h2>
            <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base">Real-time metrics showcasing our Android development excellence</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {dashboardStats.map((stat, index) => (
              <div key={index} className="bg-white backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-700 text-xs sm:text-sm">{stat.label}</span>
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                </div>
                <div className="flex items-end space-x-2">
                  <span className="text-2xl sm:text-3xl font-bold text-slate-900">{stat.value}</span>
                  <span className={`text-xs sm:text-sm ${stat.color}`}>{stat.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Android Phone Mockup Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left - Phone Mockup 1: E-commerce App */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-[520px] sm:w-72 sm:h-[600px] bg-gray-800 rounded-[1.5rem] sm:rounded-[2rem] p-2.5 sm:p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[1.2rem] sm:rounded-[1.5rem] overflow-hidden relative">
                    <div className="h-full bg-linear-to-br from-purple-50 to-pink-50 relative">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-4 sm:px-6 pt-6 sm:pt-8 pb-3 sm:pb-4 text-black text-xs sm:text-sm">
                        <span className="font-medium">11:24 AM</span>
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <div className="w-1 h-2.5 sm:h-3 bg-green-500 rounded-full"></div>
                            <div className="w-1 h-2.5 sm:h-3 bg-green-500 rounded-full"></div>
                            <div className="w-1 h-2.5 sm:h-3 bg-green-500 rounded-full"></div>
                            <div className="w-1 h-2.5 sm:h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="w-5 h-2.5 sm:w-6 sm:h-3 border border-black rounded-sm">
                            <div className="w-4 h-0.5 sm:w-5 sm:h-1 bg-green-500 rounded-sm mt-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="px-4 sm:px-6 mb-4 sm:mb-6">
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div>
                              <h1 className="text-lg sm:text-xl font-bold text-gray-900">ShopMart</h1>
                              <p className="text-xs sm:text-sm text-gray-500">E-commerce Store</p>
                            </div>
                          </div>
                          <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                        </div>

                        {/* Search Bar */}
                        <div className="flex items-center bg-white rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-sm">
                          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          <span className="ml-2 sm:ml-3 text-gray-500 text-xs sm:text-sm">Search products...</span>
                        </div>
                      </div>

                      {/* Category Chips */}
                      <div className="px-4 sm:px-6 mb-4 sm:mb-6">
                        <div className="flex space-x-2 overflow-x-auto pb-2">
                          {["Electronics", "Fashion", "Home", "Beauty"].map((cat, idx) => (
                            <div key={idx} className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap ${idx === 0 ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white' : 'bg-white text-gray-700 border border-gray-200'}`}>
                              {cat}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Featured Banner */}
                      <div className="px-4 sm:px-6 mb-4 sm:mb-6">
                        <div className="bg-linear-to-r from-orange-500 to-red-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
                          <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Mega Sale! 🎉</h3>
                          <p className="text-xs sm:text-sm opacity-90 mb-2 sm:mb-3">Up to 70% off on electronics</p>
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 sm:py-2 inline-block">
                            <span className="text-xs sm:text-sm font-semibold">Shop Now →</span>
                          </div>
                        </div>
                      </div>

                      {/* Product Grid */}
                      <div className="px-4 sm:px-6">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Trending Products</h3>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                          {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-sm">
                              <div className="w-full h-16 sm:h-20 bg-linear-to-br from-purple-100 to-pink-100 rounded-lg mb-2 sm:mb-3 flex items-center justify-center">
                                <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                              </div>
                              <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">Product {item}</div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">₹{2999 + item * 500}</span>
                                <div className="flex items-center">
                                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-current" />
                                  <span className="text-xs text-gray-600 ml-1">4.{item + 4}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Navigation Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
                      <div className="flex justify-around">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <ShoppingCart className="w-4 h-4 text-purple-600" />
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                            <Heart className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                            <Settings className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Phone Mockup 2: Fitness App */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-[520px] sm:w-72 sm:h-[600px] bg-gray-800 rounded-[1.5rem] sm:rounded-[2rem] p-2.5 sm:p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[1.2rem] sm:rounded-[1.5rem] overflow-hidden relative">
                    <div className="h-full bg-linear-to-br from-green-50 to-blue-50 relative">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-4 sm:px-6 pt-6 sm:pt-8 pb-3 sm:pb-4 text-black text-xs sm:text-sm">
                        <span className="font-medium">3:45 PM</span>
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <div className="w-1 h-2.5 sm:h-3 bg-green-500 rounded-full"></div>
                            <div className="w-1 h-2.5 sm:h-3 bg-green-500 rounded-full"></div>
                            <div className="w-1 h-2.5 sm:h-3 bg-green-500 rounded-full"></div>
                            <div className="w-1 h-2.5 sm:h-3 bg-gray-300 rounded-full"></div>
                          </div>
                          <div className="w-5 h-2.5 sm:w-6 sm:h-3 border border-black rounded-sm">
                            <div className="w-4 h-0.5 sm:w-5 sm:h-1 bg-green-500 rounded-sm mt-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="px-4 sm:px-6 mb-4 sm:mb-6">
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center">
                              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div>
                              <h1 className="text-lg sm:text-xl font-bold text-gray-900">FitPro</h1>
                              <p className="text-xs sm:text-sm text-gray-500">Fitness Tracker</p>
                            </div>
                          </div>
                          <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                        </div>
                      </div>

                      {/* Progress Card */}
                      <div className="px-4 sm:px-6 mb-4 sm:mb-6">
                        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
                          <div className="flex justify-between items-center mb-3 sm:mb-4">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900">Today's Activity</h3>
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          </div>

                          <div className="space-y-3 sm:space-y-4">
                            {/* Steps Progress */}
                            <div>
                              <div className="flex justify-between mb-2">
                                <span className="text-xs sm:text-sm text-gray-600">Steps</span>
                                <span className="text-xs sm:text-sm font-bold text-gray-900">9,247 / 10,000</span>
                              </div>
                              <div className="w-full bg-gray-200 h-2 rounded-full">
                                <div className="bg-linear-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                              </div>
                            </div>

                            {/* Calories Progress */}
                            <div>
                              <div className="flex justify-between mb-2">
                                <span className="text-xs sm:text-sm text-gray-600">Calories</span>
                                <span className="text-xs sm:text-sm font-bold text-gray-900">456 / 600</span>
                              </div>
                              <div className="w-full bg-gray-200 h-2 rounded-full">
                                <div className="bg-linear-to-r from-orange-400 to-red-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                              </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-100">
                              <div className="text-center">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                                </div>
                                <div className="text-base sm:text-lg font-bold text-gray-900">3.8</div>
                                <div className="text-xs text-gray-500">km</div>
                              </div>
                              <div className="text-center">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                </div>
                                <div className="text-base sm:text-lg font-bold text-gray-900">78</div>
                                <div className="text-xs text-gray-500">bpm</div>
                              </div>
                              <div className="text-center">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                                </div>
                                <div className="text-base sm:text-lg font-bold text-gray-900">42</div>
                                <div className="text-xs text-gray-500">min</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Workout Plans */}
                      <div className="px-4 sm:px-6">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Recommended Workouts</h3>
                        <div className="space-y-2 sm:space-y-3">
                          <div className="bg-linear-to-r from-orange-500 to-red-500 rounded-xl p-3 sm:p-4 text-white flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                <Play className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <div className="text-sm sm:text-base font-semibold">HIIT Workout</div>
                                <div className="text-xs opacity-90">30 minutes</div>
                              </div>
                            </div>
                            <div className="text-xs font-medium">Start →</div>
                          </div>

                          <div className="bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl p-3 sm:p-4 text-white flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <div className="text-sm sm:text-base font-semibold">Yoga Session</div>
                                <div className="text-xs opacity-90">45 minutes</div>
                              </div>
                            </div>
                            <div className="text-xs font-medium">Start →</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
                      <div className="flex justify-around">
                        <div className="w-8 h-1 bg-green-500 rounded-full"></div>
                        <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                        <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
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
            <h2 className="text-5xl md:text-6xl font-medium font-serif text-slate-900 mb-3 sm:mb-4">Android Development Services</h2>
            <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base">
              Comprehensive Android solutions using latest technologies and best practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {androidServices.map((service, index) => (
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
            <h2 className="text-5xl md:text-6xl font-medium font-serif text-slate-900 mb-3 sm:mb-4">Android Development Process</h2>
            <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base">
              Agile methodology with continuous integration and delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: "01", title: "Planning & Analysis", desc: "Requirements gathering, feasibility study, and technical architecture design" },
              { step: "02", title: "UI/UX Design", desc: "Material Design implementation, prototyping, and user experience optimization" },
              { step: "03", title: "Development & Testing", desc: "Kotlin coding, unit testing, integration testing, and QA automation" },
              { step: "04", title: "Deployment & Support", desc: "Play Store launch, monitoring, updates, and continuous improvement" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white font-bold text-base sm:text-lg shadow-lg">
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
            <Smartphone className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto mb-3 sm:mb-4" />
            <h2 className="text-5xl md:text-5xl font-medium font-serif mb-3 sm:mb-4 text-slate-900">Ready to Build Your Android App?</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-700">
              Let's create a powerful Android application that stands out in the Google Play Store
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact-us">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Start Your Android Project
              </button>
            </a>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-400 text-slate-700 rounded-xl font-semibold hover:border-green-600 hover:text-green-600 transition-all duration-300 flex items-center justify-center">
              <Download className="w-4 h-4 mr-2" />
              View Case Studies
            </button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AndroidDevelopment;
