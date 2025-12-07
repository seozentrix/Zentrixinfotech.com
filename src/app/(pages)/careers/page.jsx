'use client';

import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  MapPin, 
  Clock, 
  Users, 
  Zap, 
  Heart, 
  Target,
  Star,
  ArrowRight,
  CheckCircle,
  Briefcase,
  Globe,
  Code,
  Sparkles,
  TrendingUp,
  Shield,
  ExternalLink
} from 'lucide-react';

// export const metadata = {title: "Careers at Zentrix Infotech – Join Our Team",description: "Explore job opportunities at Zentrix Infotech and build your career in software development and digital marketing."};



const CareersPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToOpen = () => {
    const el = document.getElementById('open-positions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const jobs = [
    {
      id: 1,
      title: 'Graphic Designer',
      location: 'Mumbai / Remote',
      type: 'Intern',
      salary: 'Stipend Based',
      description: 'Create stunning visual designs for digital platforms, marketing materials, and brand identity. Work with modern design tools to craft compelling user experiences and maintain brand consistency across all touchpoints.',
      tags: ['Adobe Creative Suite', 'Figma', 'Brand Design', 'UI/UX', 'Typography'],
      featured: true,
      googleFormLink: 'https://forms.gle/vDVG8s44BFkkrfAf8' // Replace with actual Google Form link
    },
    {
      id: 2,
      title: 'PHP Backend Developer',
      location: 'Ghaziabad / Remote',
      type: 'Intern Based',
      salary: 'Stipend',
      description: 'Build robust, scalable backend systems using PHP and modern frameworks. Develop RESTful APIs, optimize database performance, and ensure secure, maintainable code architecture.',
      tags: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Docker'],
      featured: true,
      googleFormLink: 'https://forms.gle/XQNu9K96HPUuei5S9' // Replace with actual Google Form link
    }
  ];

  const handleApplyClick = (googleFormLink) => {
    window.open(googleFormLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 lg:py-24 md:py-4">

      
      {/* Floating orbs for visual appeal */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className={`max-w-5xl mx-auto text-center relative z-10 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>

          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-slate-900 mb-8 leading-tight tracking-tight">
            Shape the
            <span className="relative">
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"> Future</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-60"></div>
            </span>
            <br />of Technology
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join a team of exceptional engineers, designers, and visionaries building 
            the next generation of AI-powered productivity tools
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={scrollToOpen}
              className="px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 text-white transition-transform duration-300 hover:scale-105 shadow-lg"
            >
              Explore Opportunities
              <ArrowRight className="w-6 h-6 ml-3" />
            </button>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="open-positions" className=" px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-slate-900 mb-8 tracking-tight">
              Open Positions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join our mission to democratize AI and build the future of work
            </p>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                className="group relative"
              >
                <div className={`absolute -inset-1 rounded-3xl blur transition duration-500 ${
                  job.featured 
                    ? 'bg-linear-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-75 group-hover:opacity-100' 
                    : 'bg-slate-200/20 opacity-0 group-hover:opacity-50'
                }`}></div>
                <div className={`relative rounded-3xl p-8 transition-all duration-300 ${
                  job.featured
                    ? 'bg-white backdrop-blur-sm border-2 border-slate-200 group-hover:shadow-xl'
                    : 'bg-white/50 backdrop-blur-sm border border-slate-200 group-hover:bg-white'
                }`}>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4 flex-wrap">
                        <div className="flex items-center gap-4">
                          <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-slate-900 group-hover:text-blue-600 transition-colors">
                            {job.title}
                          </h3>
                          {job.featured && (
                            <div className="bg-linear-to-r from-yellow-400 to-orange-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                              <Star className="w-3 h-3 mr-1" />
                              FEATURED
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5" />
                          {job.type}
                        </div>
                        <div className="text-green-600 font-semibold">
                          {job.salary}
                        </div>
                      </div>
                      
                      <p className="text-slate-700 mb-6 max-w-3xl text-lg leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        {job.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium border border-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8 lg:mt-0 lg:ml-8">
                      <button 
                        onClick={() => handleApplyClick(job.googleFormLink)}
                        className="w-full lg:w-auto px-8 py-4 rounded-2xl font-bold flex items-center justify-center bg-linear-to-r from-blue-500 to-purple-500 text-white transition-transform duration-300 hover:scale-105 shadow-lg"
                      >
                        Apply Now
                        <ExternalLink className="w-5 h-5 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CareersPage;
