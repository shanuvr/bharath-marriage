import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md h-16 py-2' 
          : 'bg-transparent shadow-none h-20'
      }`}>
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-full max-w-container-max mx-auto w-full gap-4">
          {/* Left: Logo */}
          <div className="flex items-center cursor-pointer shrink-0 relative w-32 md:w-48 h-full">
            <img 
              src="/logo.png" 
              alt="Bharath Marriage" 
              className={`w-auto object-contain transition-all duration-300 absolute left-0 top-1/2 -translate-y-1/2 ${
                scrolled ? 'h-14 md:h-22' : 'h-18 md:h-30'
              } ${!scrolled ? 'brightness-0 invert' : ''}`} 
            />
          </div>

          {/* Middle: Navigation Links (Desktop only) */}
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

          {/* Right: Search, Login & Hamburger */}
          <div className="flex gap-2.5 md:gap-4 items-center">
            {/* Search Input Bar Link (hidden on tiny screens, icon only instead) */}
            <Link 
              to="/search" 
              className={`hidden sm:flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-all duration-300 w-32 md:w-40 cursor-pointer ${
                scrolled ? 'bg-slate-100 border border-slate-200' : 'bg-white border border-transparent'
              }`}
            >
              <span className="material-symbols-outlined text-[15px] text-soft-gray leading-none">search</span>
              <span className="text-[11px] w-full text-soft-gray select-none">Search...</span>
            </Link>

            {/* Mobile-only Search Icon */}
            <Link 
              to="/search" 
              className={`sm:hidden flex items-center justify-center p-1.5 rounded-lg transition-all duration-300 cursor-pointer ${
                scrolled ? 'text-charcoal-text hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="material-symbols-outlined text-[20px] leading-none">search</span>
            </Link>

            {/* Login Button (hidden on mobile, inside drawer instead) */}
            <button 
              className="hidden md:flex items-center gap-1.5 px-4 py-1.5 bg-deep-maroon hover:bg-primary text-white text-xs font-semibold rounded-lg shadow-md transition-all duration-200 active:scale-95 cursor-pointer shrink-0"
            >
              <span className="material-symbols-outlined text-[16px] leading-none text-white">
                account_circle
              </span>
              Login
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden flex items-center justify-center p-1.5 rounded-lg transition-all duration-300 cursor-pointer ${
                scrolled ? 'text-charcoal-text hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="material-symbols-outlined text-[22px] leading-none">
                menu
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 z-50 md:hidden transition-opacity duration-300 animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Drawer Menu */}
          <div className="fixed top-0 right-0 h-full w-[280px] bg-white z-55 shadow-2xl p-6 flex flex-col md:hidden animate-slide-in-right text-left">
            {/* Header with Branded Logo */}
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
              <div className="h-9 relative w-32">
                <img 
                  src="/logo.png" 
                  alt="Bharath Marriage Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="material-symbols-outlined text-2xl text-charcoal-text hover:text-deep-maroon cursor-pointer p-1 rounded-full hover:bg-slate-100 transition-colors"
              >
                close
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-4 mb-auto">
              <a 
                href="#" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-semibold text-charcoal-text hover:text-deep-maroon text-sm py-2 px-1 border-b border-slate-50 transition-colors"
              >
                Home
              </a>
              <a 
                href="#" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-semibold text-charcoal-text hover:text-deep-maroon text-sm py-2 px-1 border-b border-slate-50 transition-colors"
              >
                Packages
              </a>
              <a 
                href="#" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-semibold text-charcoal-text hover:text-deep-maroon text-sm py-2 px-1 border-b border-slate-50 transition-colors"
              >
                Porutham
              </a>
              <a 
                href="#" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-semibold text-charcoal-text hover:text-deep-maroon text-sm py-2 px-1 border-b border-slate-50 transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Search and Auth (Mobile equivalents) */}
            <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-slate-100">
              <Link 
                to="/search" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 bg-slate-50 text-charcoal-text text-xs hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px] text-soft-gray leading-none">search</span>
                <span>Search Profiles</span>
              </Link>
              
              <button 
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-deep-maroon hover:bg-primary text-white font-semibold rounded-lg shadow-md transition-colors text-xs cursor-pointer active:scale-[0.98]"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
              >
                <span className="material-symbols-outlined text-[16px] leading-none text-white">account_circle</span>
                Login
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
