import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md h-16 py-2' 
        : 'bg-transparent shadow-none h-20'
    }`}>
      <div className="flex justify-between items-center px-margin-desktop h-full max-w-container-max mx-auto w-full gap-4">
        {/* Left: Logo */}
        <div className="flex items-center cursor-pointer shrink-0 relative w-48 h-full">
          <img 
            src="/logo.png" 
            alt="Bharath Marriage" 
            className={`w-auto object-contain transition-all duration-300 absolute left-0 top-1/2 -translate-y-1/2 ${
              scrolled ? 'h-22' : 'h-30'
            } ${!scrolled ? 'brightness-0 invert' : ''}`} 
          />
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a 
            className={`font-semibold text-sm transition-all duration-300 active:scale-95 ${
              scrolled ? 'text-charcoal-text hover:text-deep-maroon' : 'text-white/90 hover:text-white'
            }`} 
            href="#"
          >
            Home
          </a>
          <a 
            className={`font-semibold text-sm transition-all duration-300 active:scale-95 ${
              scrolled ? 'text-charcoal-text hover:text-deep-maroon' : 'text-white/90 hover:text-white'
            }`} 
            href="#"
          >
            Packages
          </a>
          <a 
            className={`font-semibold text-sm transition-all duration-300 active:scale-95 ${
              scrolled ? 'text-charcoal-text hover:text-deep-maroon' : 'text-white/90 hover:text-white'
            }`} 
            href="#"
          >
            Porutham
          </a>
          <a 
            className={`font-semibold text-sm transition-all duration-300 active:scale-95 ${
              scrolled ? 'text-charcoal-text hover:text-deep-maroon' : 'text-white/90 hover:text-white'
            }`} 
            href="#"
          >
            Contact Us
          </a>
        </div>

        {/* Right: Search & Login */}
        <div className="flex gap-4 items-center">
          {/* Search Input Bar Link */}
          <Link to="/search" className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-all duration-300 w-32 md:w-40 cursor-pointer ${
            scrolled ? 'bg-slate-100 border border-slate-200' : 'bg-white border border-transparent'
          }`}>
            <span className="material-symbols-outlined text-[15px] text-soft-gray leading-none">search</span>
            <span className="text-[11px] w-full text-soft-gray select-none">Search...</span>
          </Link>

          {/* Login Button with Icon */}
          <button 
            className="flex items-center gap-1.5 px-4 py-1.5 bg-deep-maroon hover:bg-primary text-white text-xs font-semibold rounded-lg shadow-md transition-all duration-200 active:scale-95 cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[16px] leading-none text-white">
              account_circle
            </span>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
