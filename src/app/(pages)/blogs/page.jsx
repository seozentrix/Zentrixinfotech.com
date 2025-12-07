"use client";

import { useRouter } from 'next/navigation';
import React, { useState, useMemo } from 'react';
import { Search, Clock, Calendar, Tag } from 'lucide-react';

const BlogSection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const router = useRouter();

    // Sample blog data
    const blogPosts = [
        {
            id: 1,
            title: "How Local Businesses Can Use Digital Marketing to Get More Customers",
            excerpt: "Discover the exact digital marketing strategies that helped 200+ local businesses increase their customer base by 150% in just 6 months.",
            image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371504/blog_content_1_zsuunb.png",
            category: "Digital Marketing",
            date: "Aug 1, 2025",
            readTime: "10 min read",
            tags: ["Local Marketing", "Social Media", "Google Business"],
            link: "/blog-content-1"
        },
        {
            id: 2,
            title: "Why Every Business Needs a Good Website: The Complete Guide",
            excerpt: "Learn why 64% of small businesses without websites lose customers daily, and discover the essential website features that convert visitors into buyers.",
            image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371505/blog_content_2_th2uis.png",
            category: "Web Development",
            date: "Jul 29, 2025",
            readTime: "8 min read",
            tags: ["Website Development", "Local SEO", "Mobile Optimization"],
            link: "/blog-content-2"
        },
        // {
        //     id: 3,
        //     title: "How Cloud Services Can Make Local Businesses Work Smarter",
        //     excerpt: "Discover how simple cloud tools helped 500+ local businesses cut costs by 40%, work from anywhere, and never lose important data again.",
        //     image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371506/blog_content_3_to93zf.png",
        //     category: "Cloud Solutions",
        //     date: "Jul 26, 2025",
        //     readTime: "9 min read",
        //     tags: ["Cloud Computing", "Business Efficiency", "Cost Savings"],
        //     link: "/blog-content-3"
        // },
        {
            id: 3,
            title: "Brand Identity Design: Creating Memorable Business Logos",
            excerpt: "Learn the psychology behind effective logo design and how to create a brand identity that resonates with your target audience.",
            image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371507/blog_content_4_yis1ql.png",
            category: "Design & Branding",
            date: "Jul 24, 2025",
            readTime: "12 min read",
            tags: ["Logo Design", "Brand Strategy", "Visual Identity"],
            link: "/blog-content-4"
        },
    ];

    const categories = ['All', 'Digital Marketing', 'Web Development', 'Cloud Solutions', 'Design & Branding'];

    // Navigation function that accepts the specific link
    const handleNavigate = (link) => {
        router.push(link);
    };

    // Filter and search logic
    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    const getCategoryColor = (category) => {
        const colors = {
            'Digital Marketing': { backgroundColor: '#0f172a', color: 'white' },
            'Web Development': { backgroundColor: '#1e40af', color: 'white' },
            'Cloud Solutions': { backgroundColor: '#0ea5e9', color: 'white' },
            'Design & Branding': { backgroundColor: '#f0abfc', color: 'black' }
        };
        return colors[category] || { backgroundColor: '#6B7280', color: 'white' };
    };

    return (
        <div className='bg-[#f8fafc]'>
            {/* Hero Section */}
            <div className="text-center sm:py-10 md:py-16 px-4 sm:px-6 mt-32 bg-[#f8fafc]">
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium bg-linear-to-r from-emerald-50 to-blue-50 border border-emerald-200 text-teal-400 mb-4 sm:mb-6 md:mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    OUR BLOG
                    <div className="ml-2 w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium font-serif mb-4 sm:mb-6 md:mb-8 leading-tight px-4">
                    <span className="text-slate-900 block">Insights and</span>
                    <span className="block bg-linear-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mt-2 relative">
                        industry trends
                        <div className="hidden sm:block absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-linear-to-r from-emerald-400 to-blue-500 rounded-full animate-bounce opacity-40 blur-sm" />
                    </span>
                </h2>
                <p className="text-lg md:text-xl md:px-20 text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
                    Stay updated with expert insights and technology trends to navigate the digital landscape with confidence.
                </p>
            </div>



            <div className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f8fafc' }}>
                <div className="max-w-7xl mx-auto">

                    {/* Search and Filter Section */}
                    <div className="mb-6 sm:mb-8 space-y-4">
                        {/* Search Bar */}
                        <div className="relative max-w-2xl mx-auto px-4">
                            <Search className="absolute left-6 sm:left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#64748b' }} />
                            <input
                                type="text"
                                placeholder="Search articles, topics, or tags..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                                style={{
                                    borderColor: '#e2e8f0',
                                    color: '#334155'
                                }}
                                onFocus={(e) => {
                                    e.target.style.boxShadow = '0 0 0 2px #4C4CAD';
                                    e.target.style.borderColor = '#4C4CAD';
                                }}
                                onBlur={(e) => {
                                    e.target.style.boxShadow = 'none';
                                    e.target.style.borderColor = '#e2e8f0';
                                }}
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-2 px-4">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full cursor-pointer text-xs sm:text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                        ? 'shadow-lg scale-105'
                                        : 'bg-white border hover:shadow-md'
                                        }`}
                                    style={selectedCategory === category
                                        ? { backgroundColor: '#4C4CAD', color: 'white' }
                                        : { borderColor: '#e2e8f0', color: '#64748b' }
                                    }
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results Counter */}
                    <div className="text-center mb-4 sm:mb-6 px-4">
                        <p className="text-sm sm:text-base" style={{ color: '#36086B' }}>
                            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                            {searchQuery && ` for "${searchQuery}"`}
                            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                        </p>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4">
                        {filteredPosts.map(post => (
                            <article
                                key={post.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
                                style={{ border: '1px solid #e2e8f0' }}
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden">
                                    {/* Image layer */}
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-40 sm:h-44 md:h-48 object-cover"
                                    />

                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-black/40" />

                                    {/* Category initials */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-white text-4xl sm:text-5xl md:text-6xl font-medium opacity-20">
                                            {post.category.split(' ').map(word => word[0]).join('')}
                                        </div>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                                        <span
                                            className="px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-white"
                                            style={{
                                                backgroundColor:
                                                    post.category === 'Digital Marketing' ? '#E94A4C' :
                                                        post.category === 'Web Development' ? '#4C4CAD' :
                                                            post.category === 'Cloud Solutions' ? '#36086B' :
                                                                '#EA4393',
                                            }}
                                        >
                                            {post.category}
                                        </span>
                                    </div>
                                </div>



                                {/* Content */}
                                <div className="p-4 sm:p-5 md:p-6">
                                    {/* Meta Info */}
                                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm mb-2 sm:mb-3" style={{ color: '#64748b' }}>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 line-clamp-2 group-hover:transition-colors duration-300"
                                        style={{ color: '#36086B' }}
                                        onMouseEnter={(e) => e.target.style.color = '#E94A4C'}
                                        onMouseLeave={(e) => e.target.style.color = '#36086B'}
                                    >
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-xs sm:text-sm line-clamp-3 mb-3 sm:mb-4" style={{ color: '#4C4CAD' }}>
                                        {post.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                        {post.tags.slice(0, 3).map(tag => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs"
                                                style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}
                                            >
                                                <Tag className="w-3 h-3" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read More Button */}
                                    <button
                                        className="w-full py-2 sm:py-2.5 px-4 cursor-pointer text-white rounded-lg text-sm sm:text-base font-medium transition-all duration-300 transform group-hover:scale-105"
                                        style={{
                                            background: 'linear-linear(135deg, #4C4CAD, #EA4393)'
                                        }}
                                        onClick={() => handleNavigate(post.link)}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'linear-linear(135deg, #36086B, #E94A4C)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'linear-linear(135deg, #4C4CAD, #EA4393)';
                                        }}
                                    >
                                        Read Article
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* No Results State */}
                    {filteredPosts.length === 0 && (
                        <div className="text-center py-12 sm:py-16 px-4">
                            <div
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                                style={{ backgroundColor: 'rgba(76, 76, 173, 0.1)' }}
                            >
                                <Search className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: '#4C4CAD' }} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#36086B' }}>No articles found</h3>
                            <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: '#4C4CAD' }}>
                                Try adjusting your search terms or selecting a different category
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('All');
                                }}
                                className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white rounded-lg font-medium transition-colors duration-300"
                                style={{ backgroundColor: '#4C4CAD' }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#36086B'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#4C4CAD'}
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
