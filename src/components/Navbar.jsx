"use client";

import Link from "next/link";
import { useState } from 'react';
import { ChevronDown, X, Menu } from 'lucide-react';



export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleDropdownEnter = (dropdown) => {
        setActiveDropdown(dropdown);
        setActiveNestedDropdown(null);
    };

    const handleDropdownLeave = () => {
        setActiveDropdown(null);
        setActiveNestedDropdown(null);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveDropdown(null);
        setActiveNestedDropdown(null);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setActiveNestedDropdown(null);
    };

    // Reusable styles
    const hoverStyles = {
        onMouseEnter: (e) => { e.currentTarget.style.color = '#0ea5e9'; },
        onMouseLeave: (e) => { e.currentTarget.style.color = '#475569'; }
    };

    const dropdownItemStyles = {
        onMouseEnter: (e) => {
            e.currentTarget.style.backgroundColor = '#f8fafc';
            e.currentTarget.style.color = '#0ea5e9';
        },
        onMouseLeave: (e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#475569';
        }
    };

    const mobileHoverStyles = {
        onMouseEnter: (e) => {
            e.currentTarget.style.color = '#0ea5e9';
            e.currentTarget.style.backgroundColor = '#f8fafc';
        },
        onMouseLeave: (e) => {
            e.currentTarget.style.color = '#475569';
            e.currentTarget.style.backgroundColor = 'transparent';
        }
    };

    const nestedItemStyles = {
        onMouseEnter: (e) => {
            e.currentTarget.style.color = '#0ea5e9';
            e.currentTarget.style.backgroundColor = '#f8fafc';
        },
        onMouseLeave: (e) => {
            e.currentTarget.style.color = '#64748b';
            e.currentTarget.style.backgroundColor = 'transparent';
        }
    };

    // Menu data structure
    const aboutLinks = [
        { href: "/aboutus", label: "ABOUT US" },
        { href: "/whychooseus", label: "WHY CHOOSE US" },
        { href: "/faq", label: "FAQS" }
    ];

    const digitalMarketingLinks = [
        { href: "/seo-service", label: "SEO SERVICE" },
        { href: "/social-media-optimization", label: "SOCIAL MEDIA OPTIMIZATION" },
        { href: "/ads-management", label: "ADS MANAGEMENT" }
    ];

    const mobileDevLinks = [
        { href: "/ios-development", label: "iOS DEVELOPMENT" },
        { href: "/android-development", label: "ANDROID DEVELOPMENT" }
    ];

    const webDevLinks = [
        { href: "/angular-js", label: "ANGULAR JS" },
        { href: "/wordpress", label: "WORDPRESS" },
        { href: "/drupal", label: "DRUPAL" },
        { href: "/laravel", label: "LARAVEL" },
        { href: "/magneto", label: "MAGNETO" },
        { href: "/react-js", label: "REACT JS" },
        { href: "/shopify", label: "SHOPIFY" }
    ];

    const NavLink = ({ href, children, className = "" }) => (
        <Link href={href} className={`px-3 py-2 text-base font-semibold transition-colors duration-200 ${className}`}
            style={{ color: '#475569' }} {...hoverStyles}>
            {children}
        </Link>
    );

    const DropdownItem = ({ href, children, onClick }) => (
        <Link href={href} onClick={onClick} className="block px-4 py-3 text-sm font-medium transition-colors duration-200"
            style={{ color: '#475569' }} {...dropdownItemStyles}>
            {children}
        </Link>
    );

    const NestedDropdown = ({ id, href, label, links, icon = true }) => (
        <div className="relative" onMouseEnter={() => setActiveNestedDropdown(id)} onMouseLeave={() => setActiveNestedDropdown(null)}>
            <Link href={href} className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold transition-colors duration-200"
                style={{ color: '#475569' }} {...dropdownItemStyles}>
                {label}
                {icon && <ChevronDown className="h-3 w-3 -rotate-90" />}
            </Link>

            {activeNestedDropdown === id && links && (
                <div className="absolute top-0 left-full w-52 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                        {links.map(link => (
                            <DropdownItem key={link.href} href={link.href}>{link.label}</DropdownItem>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <nav className="bg-white shadow-md fixed top-0 lg:top-11 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/">
                        <div className="shrink-0">
                            <div className="text-2xl font-bold" style={{ color: '#0ea5e9' }}>
                                <img
                                    src='https://res.cloudinary.com/dewxpvl5s/image/upload/v1761370086/bg_remove_logo_zentrix_gn8ybw.png'
                                    alt="Logo"
                                    className="h-full w-50 object-contain"
                                />
                            </div>
                        </div>

                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            {/* About Zentrix Dropdown */}
                            <div className="relative" onMouseEnter={() => handleDropdownEnter('about')} onMouseLeave={handleDropdownLeave}>
                                <button className="flex items-center px-3 py-2 text-base font-semibold transition-colors duration-200"
                                    style={{ color: '#475569' }} {...hoverStyles}>
                                    About Zentrix
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>

                                {activeDropdown === 'about' && (
                                    <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                                        <div className="py-2">
                                            {aboutLinks.map(link => (
                                                <DropdownItem key={link.href} href={link.href}>{link.label}</DropdownItem>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* IT Services Dropdown */}
                            <div className="relative" onMouseEnter={() => handleDropdownEnter('services')} onMouseLeave={handleDropdownLeave}>
                                <button className="flex items-center px-3 py-2 text-base font-semibold transition-colors duration-200"
                                    style={{ color: '#475569' }} {...hoverStyles}>
                                    Services
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>

                                {activeDropdown === 'services' && (
                                    <div className="absolute top-full left-0 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                                        <div className="py-2">
                                            <NestedDropdown id="digital" href="/digital-marketing" label="DIGITAL MARKETING" links={digitalMarketingLinks} />
                                            <NestedDropdown id="mobile" href="/mobile-development" label="MOBILE DEVELOPMENT" links={mobileDevLinks} />
                                            <NestedDropdown id="web" href="/web-development" label="WEB DEVELOPMENT" links={webDevLinks} />
                                            <NestedDropdown href="/software-development" label="SOFTWARE DEVELOPMENT" icon={false} />
                                            <NestedDropdown href="/ui-designer" label="UI & UX DESIGNER" icon={false} />
                                            <NestedDropdown href="/cloud-solutions" label="CLOUD SOLUTIONS" icon={false} />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <NavLink href="/portfolio">Portfolio</NavLink>
                            <NavLink href="/contactus">Contact Us</NavLink>
                            <NavLink href="/blogs">Blogs</NavLink>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button onClick={toggleMobileMenu} className="p-2 rounded-md transition-colors duration-200"
                            style={{ color: '#475569' }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.backgroundColor = '#f8fafc'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                            aria-label="Toggle mobile menu">
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40 max-h-[calc(100vh-5rem)] overflow-y-auto">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {/* About Zentrix Mobile */}
                            <div>
                                <button onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                                    className="flex items-center justify-between w-full px-3 py-4 text-base font-semibold rounded-md transition-colors duration-200"
                                    style={{ color: '#475569' }} {...mobileHoverStyles}>
                                    About Zentrix
                                    <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                                </button>
                                {activeDropdown === 'about' && (
                                    <div className="ml-4 mt-2 space-y-1 rounded-md p-2" style={{ backgroundColor: '#f8fafc' }}>
                                        {aboutLinks.map(link => (
                                            <Link key={link.href} href={link.href} onClick={closeMobileMenu}
                                                className="block px-3 py-3 text-sm font-medium rounded-md transition-all duration-200"
                                                style={{ color: '#475569' }}
                                                onMouseEnter={(e) => { e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.backgroundColor = 'white'; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* IT Services Mobile */}
                            <div>
                                <button onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                                    className="flex items-center justify-between w-full px-3 py-4 text-base font-semibold rounded-md transition-colors duration-200"
                                    style={{ color: '#475569' }} {...mobileHoverStyles}>
                                    Services
                                    <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                                </button>
                                {activeDropdown === 'services' && (
                                    <div className="ml-4 mt-2 space-y-2 rounded-md p-2" style={{ backgroundColor: '#f8fafc' }}>
                                        {/* Digital Marketing */}
                                        <div>
                                            <Link href="/digital-marketing" onClick={closeMobileMenu} className="block px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 mb-2"
                                                style={{ color: '#475569' }}
                                                onMouseEnter={(e) => { e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.backgroundColor = 'white'; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                                                DIGITAL MARKETING
                                            </Link>
                                            <button onClick={() => setActiveNestedDropdown(activeNestedDropdown === 'digital' ? null : 'digital')}
                                                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ml-4"
                                                style={{ color: '#64748b' }}
                                                onMouseEnter={(e) => { e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.backgroundColor = 'white'; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                                                View Services
                                                <ChevronDown className={`h-3 w-3 transform transition-transform duration-200 ${activeNestedDropdown === 'digital' ? 'rotate-180' : ''}`} />
                                            </button>
                                            {activeNestedDropdown === 'digital' && (
                                                <div className="ml-8 mt-2 space-y-1 bg-white rounded-md p-2">
                                                    {digitalMarketingLinks.map(link => (
                                                        <Link key={link.href} href={link.href} onClick={closeMobileMenu}
                                                            className="block px-3 py-3 text-sm font-medium rounded-md transition-all duration-200"
                                                            style={{ color: '#64748b' }} {...nestedItemStyles}>
                                                            {link.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Mobile Development */}
                                        <div>
                                            <Link href="/mobile-development" onClick={closeMobileMenu} className="block px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 mb-2"
                                                style={{ color: '#475569' }}
                                                onMouseEnter={(e) => { e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.backgroundColor = 'white'; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                                                MOBILE DEVELOPMENT
                                            </Link>
                                            <button onClick={() => setActiveNestedDropdown(activeNestedDropdown === 'mobile' ? null : 'mobile')}
                                                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ml-4"
                                                style={{ color: '#64748b' }}
                                                onMouseEnter={(e) => { e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.backgroundColor = 'white'; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                                                View Technologies
                                                <ChevronDown className={`h-3 w-3 transform transition-transform duration-200 ${activeNestedDropdown === 'mobile' ? 'rotate-180' : ''}`} />
                                            </button>
                                            {activeNestedDropdown === 'mobile' && (
                                                <div className="ml-8 mt-2 space-y-1 bg-white rounded-md p-2">
                                                    {mobileDevLinks.map(link => (
                                                        <Link key={link.href} href={link.href} onClick={closeMobileMenu}
                                                            className="block px-3 py-3 text-sm font-medium rounded-md transition-all duration-200"
                                                            style={{ color: '#64748b' }} {...nestedItemStyles}>
                                                            {link.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Web Development */}
                                        <div>
                                            <Link href="/web-development" onClick={closeMobileMenu} className="block px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 mb-2"
                                                style={{ color: '#475569' }}
                                                onMouseEnter={(e) => { e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.backgroundColor = 'white'; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                                                WEB DEVELOPMENT
                                            </Link>
                                            <button onClick={() => setActiveNestedDropdown(activeNestedDropdown === 'web' ? null : 'web')}
                                                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ml-4"
                                                style={{ color: '#64748b' }}
                                                onMouseEnter={(e) => { e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.backgroundColor = 'white'; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                                                View Services
                                                <ChevronDown className={`h-3 w-3 transform transition-transform duration-200 ${activeNestedDropdown === 'web' ? 'rotate-180' : ''}`} />
                                            </button>
                                            {activeNestedDropdown === 'web' && (
                                                <div className="ml-8 mt-2 space-y-1 bg-white rounded-md p-2">
                                                    {webDevLinks.map(link => (
                                                        <Link key={link.href} href={link.href} onClick={closeMobileMenu}
                                                            className="block px-3 py-3 text-sm font-medium rounded-md transition-all duration-200"
                                                            style={{ color: '#64748b' }} {...nestedItemStyles}>
                                                            {link.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Software Development */}
                                        <Link href="/software-development" onClick={closeMobileMenu} className="block px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 mb-2"
                                            style={{ color: '#475569' }}
                                            onMouseEnter={(e) => { e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.backgroundColor = 'white'; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                                            SOFTWARE DEVELOPMENT
                                        </Link>

                                        {/* UI & UX Designer */}
                                        <Link href="/ui-designer" onClick={closeMobileMenu} className="block px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 mb-2"
                                            style={{ color: '#475569' }}
                                            onMouseEnter={(e) => { e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.backgroundColor = 'white'; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                                            UI & UX DESIGNER
                                        </Link>
                                        <Link href="/cloud-solutions" onClick={closeMobileMenu} className="block px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 mb-2"
                                            style={{ color: '#475569' }}
                                            onMouseEnter={(e) => { e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.backgroundColor = 'white'; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                                            CLOUD SOLUTIONS
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Other Mobile Menu Items */}
                            <Link href="/portfolio" onClick={closeMobileMenu} className="block px-3 py-4 text-base font-semibold rounded-md transition-colors duration-200"
                                style={{ color: '#475569' }} {...mobileHoverStyles}>
                                portfolio
                            </Link>
                            <Link href="/contact-us" onClick={closeMobileMenu} className="block px-3 py-4 text-base font-semibold rounded-md transition-colors duration-200"
                                style={{ color: '#475569' }} {...mobileHoverStyles}>
                                Contact Us
                            </Link>
                            <Link href="/blogs" onClick={closeMobileMenu} className="block px-3 py-4 text-base font-semibold rounded-md transition-colors duration-200"
                                style={{ color: '#475569' }} {...mobileHoverStyles}>
                                Blogs
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}