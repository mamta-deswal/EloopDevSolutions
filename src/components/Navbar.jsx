import React, { useState, useEffect } from 'react';
import WhatWe from './WhatWe';
import MadBrainsDropdown from './MadBrainsDropdown';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Replace this with your actual Google Form URL
    const GOOGLE_FORM_URL = 'https://forms.google.com/your-form-id-here';

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Clean up timeout on unmount
    useEffect(() => {
        return () => {
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
            }
        };
    }, [hoverTimeout]);

    // Close mobile menu when screen size changes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseEnter = (dropdownName) => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
        setOpenDropdown(dropdownName);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setOpenDropdown(null);
        }, 100);
        setHoverTimeout(timeout);
    };

    const closeDropdown = () => {
        setOpenDropdown(null);
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const location = useLocation();
    const navigate = useNavigate();

    const handleRedirect = (path) => {
        navigate(path);
        closeDropdown();
        closeMobileMenu();
    };

    const openBookingForm = () => {
        window.open(GOOGLE_FORM_URL, '_blank');
        closeDropdown();
        closeMobileMenu();
    };

    return (
        <div className={`text-lg w-full fixed top-0 z-50 ${isScrolled ? 'text-black' : 'text-white'}`}>
            {/* Top banner - Hide on very small screens */}
            <div className="hidden sm:block text-center text-xs sm:text-sm font-medium py-2 bg-gradient-to-r from-gray-300 via-white to-[#f6f2f1]">
                <p className="text-black px-2">
                    Flexible ui/ux design packages for startups and enterprises alike{' '}
                    <span className="underline underline-offset-2 text-teal-500 cursor-pointer">
                        Explore Now
                    </span>
                </p>
            </div>

            {/* Main Navbar */}
            <nav className="h-[60px] sm:h-[70px] flex items-center justify-between px-3 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-4 transition-all duration-300 shadow-sm bg-white text-black">
                {/* Logo */}
                <div className='flex cursor-pointer flex-shrink-0' onClick={() => handleRedirect('/')}>
                    <img
                        className='h-8 sm:h-10 w-auto'
                        src="./image.png"
                        alt="ELoop"
                    />
                </div>

                {/* Desktop/Tablet Horizontal Navigation */}
                <div className="hidden md:flex items-center justify-center flex-1 mx-4 lg:mx-8">
                    <ul className="flex items-center space-x-4 lg:space-x-4 xl:space-x-4">
                        {/* Who We Are Dropdown */}
                        <li className="relative"
                            onMouseEnter={() => handleMouseEnter('whoWeAre')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex items-center space-x-1 py-2 px-2 lg:px-3 hover:text-teal-500 transition-colors text-sm lg:text-base whitespace-nowrap">
                                <span className='text-black'>Who We Are</span>
                                <svg
                                    className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform ${openDropdown === 'whoWeAre' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openDropdown === 'whoWeAre' && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[500px] lg:w-[600px] bg-white rounded-2xl shadow-xl border border-gray-200 p-4 lg:p-6 z-50">
                                    {/* Header */}
                                    <div className="mb-6 lg:mb-8">
                                        <h3 className="text-gray-400 text-xs lg:text-sm font-medium tracking-wider uppercase">WHO WE ARE</h3>
                                    </div>

                                    {/* Main Content Grid */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                                        {/* Left Side - Workbase Image */}
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-2 text-gray-800">
                                                <span className="text-base lg:text-lg font-medium">Workbase</span>
                                                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>

                                            {/* Workbase Screenshot */}
                                            <div className="bg-gray-100 rounded-lg p-3 lg:p-4 border">
                                                <div className="bg-white rounded-lg shadow-sm p-3 lg:p-4">
                                                    <div className="flex items-center justify-between mb-3 lg:mb-4">
                                                        <div className="text-xs text-gray-500">workbase</div>
                                                        <div className="flex space-x-2">
                                                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2 lg:space-y-3">
                                                        <h4 className="text-base lg:text-lg font-semibold text-gray-800">Employee platform</h4>
                                                        <h4 className="text-base lg:text-lg font-semibold text-gray-800">Increased productivity</h4>
                                                        <p className="text-xs text-gray-600">Automate payroll and HR processes to boost efficiency. Reduce manual tasks and focus on strategic initiatives.</p>
                                                        <button className="bg-blue-500 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-sm">Learn about workflow</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Side - Menu Items */}
                                        <div className="space-y-4 lg:space-y-6">
                                            {/* About Us */}
                                            <div className="flex items-start space-x-3 p-2 lg:p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                                                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                                                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-teal-500 rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 className="text-base lg:text-lg font-semibold text-gray-800 mb-1">About Us</h4>
                                                    <p className="text-xs lg:text-sm text-gray-500">Learn more about our mission, values.</p>
                                                </div>
                                            </div>

                                            {/* Our Team */}
                                            <div className="flex items-start space-x-3 p-2 lg:p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                                                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                                                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-base lg:text-lg font-semibold text-gray-800 mb-1">Our Team</h4>
                                                    <p className="text-xs lg:text-sm text-gray-500">Meet the passionate and dedicated team.</p>
                                                </div>
                                            </div>

                                            {/* Career */}
                                            <div className="flex items-start space-x-3 p-2 lg:p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                                                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2V8c0-1.11.89-2 2-2h16z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-base lg:text-lg font-semibold text-gray-800 mb-1">Career</h4>
                                                    <p className="text-xs lg:text-sm text-gray-500">Explore exciting career opportunities and join our team</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Section */}
                                    <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200">
                                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-3 lg:space-y-0">
                                            <div>
                                                <h4 className="text-base lg:text-lg font-semibold text-gray-800 mb-1">Need Different solutions ?</h4>
                                                <p className="text-xs lg:text-sm text-gray-500">Upwork connects us with a global network of clients</p>
                                            </div>
                                            <button
                                                onClick={() => navigate('/Form')}
                                                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full font-medium transition-colors flex items-center space-x-2 text-sm lg:text-base"
                                            >
                                                Book A Call
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>

                        {/* What We Do Dropdown */}
                        <li className="relative"
                            onMouseEnter={() => handleMouseEnter('whatWeDo')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex items-center space-x-1 py-2 px-2 lg:px-3 hover:text-teal-500 transition-colors text-sm lg:text-base whitespace-nowrap">
                                <span className='text-black'>What We Do</span>
                                <svg
                                    className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform ${openDropdown === 'whatWeDo' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openDropdown === 'whatWeDo' && (
                                <WhatWe />
                            )}
                        </li>

                        {/* Why ELoop Dropdown */}
                        {/* <li className="relative"
                            onMouseEnter={() => handleMouseEnter('whyMadBrains')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex items-center space-x-1 py-2 px-2 lg:px-3 hover:text-teal-500 transition-colors text-sm lg:text-base whitespace-nowrap">
                                <span className='text-black'>Why ELoopDevSol.</span>
                                <svg
                                    className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform ${openDropdown === 'whyMadBrains' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openDropdown === 'whyMadBrains' && (
                                <MadBrainsDropdown />
                            )}
                        </li> */}

                        {/* Blog - Direct Link */}
                        <li>
                            <button
                                onClick={() => navigate('/Blog')}
                                className="py-2 px-2 lg:px-3 hover:text-teal-500 transition-colors text-black text-sm lg:text-base whitespace-nowrap"
                            >
                                Blog
                            </button>
                        </li>

                        {/* Try UIUX Plans - Direct Link */}
                        <li>
                            <button
                                onClick={() => navigate('/SubscriptionLanding')}
                                className="py-2 px-2 lg:px-3 hover:text-teal-500 transition-colors text-black text-sm lg:text-base whitespace-nowrap"
                            >
                                Try UIUX Plans
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Book A Call Button - Desktop/Tablet */}
                <button
                    onClick={() => navigate('/Form')}
                    className="hidden md:inline-flex bg-teal-400 border border-gray-300 px-4 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-3 rounded-full active:scale-95 transition-all duration-400 hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/30 hover:brightness-110 text-white text-sm lg:text-base whitespace-nowrap flex-shrink-0"
                >
                    Book A Call
                </button>

                {/* Mobile Menu Button */}
                <button
                    aria-label="menu-btn"
                    type="button"
                    className="menu-btn inline-block md:hidden active:scale-90 transition p-2"
                    onClick={toggleMobileMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30">
                        <path stroke="currentColor" strokeWidth="2" d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
                    </svg>
                </button>

                {/* Mobile Navigation Menu */}
                <div className={`mobile-menu absolute top-[60px] sm:top-[70px] left-0 w-full bg-white shadow-lg border-t border-gray-200 md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 py-6">
                        {/* Mobile Horizontal Navigation */}
                        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                            <button
                                onClick={() => handleRedirect('/about')}
                                className="text-sm text-gray-700 hover:text-teal-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                            >
                                About Us
                            </button>
                            <button
                                onClick={() => handleRedirect('/team')}
                                className="text-sm text-gray-700 hover:text-teal-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                            >
                                Our Team
                            </button>
                            <button
                                onClick={() => handleRedirect('/careers')}
                                className="text-sm text-gray-700 hover:text-teal-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                            >
                                Career
                            </button>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                            <button
                                onClick={() => handleRedirect('/web-development')}
                                className="text-sm text-gray-700 hover:text-teal-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                            >
                                Web Dev
                            </button>
                            <button
                                onClick={() => handleRedirect('/ui-ux-design')}
                                className="text-sm text-gray-700 hover:text-teal-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                            >
                                UI/UX Design
                            </button>
                            <button
                                onClick={() => handleRedirect('/mobile-development')}
                                className="text-sm text-gray-700 hover:text-teal-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                            >
                                Mobile Dev
                            </button>
                            <button
                                onClick={() => handleRedirect('/consulting')}
                                className="text-sm text-gray-700 hover:text-teal-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                            >
                                Consulting
                            </button>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                            <button
                                onClick={() => handleRedirect('/our-process')}
                                className="text-sm text-gray-700 hover:text-teal-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                            >
                                Our Process
                            </button>
                            <button
                                onClick={() => handleRedirect('/portfolio')}
                                className="text-sm text-gray-700 hover:text-teal-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                            >
                                Portfolio
                            </button>
                            <button
                                onClick={() => handleRedirect('/testimonials')}
                                className="text-sm text-gray-700 hover:text-teal-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                            >
                                Testimonials
                            </button>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                            <button
                                onClick={() => handleRedirect('/Blog')}
                                className="text-sm text-gray-700 hover:text-teal-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                            >
                                Blog
                            </button>
                            <button
                                onClick={() => handleRedirect('/SubscriptionLanding')}
                                className="text-sm text-gray-700 hover:text-teal-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                            >
                                Try UIUX Plans
                            </button>
                        </div>

                        {/* Mobile CTA Button */}
                        <div className="flex justify-center">
                            <button
                                onClick={() => {
                                    navigate('/Form');
                                    closeMobileMenu();
                                }}
                                className="bg-teal-500 text-white border border-teal-500 hover:bg-teal-600 active:scale-95 transition-all px-8 py-3 rounded-full font-medium text-sm"
                            >
                                Book A Call
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
