import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeState, setActiveState] = useState('Kerala');
  const [isMobileStateDropdownOpen, setIsMobileStateDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isSolid = !isHomePage || scrolled;

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

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSolid
          ? 'bg-white shadow-md h-16 py-2'
          : 'bg-transparent shadow-none h-20'
        }`}>
        <div className="flex justify-between items-center px-2 sm:px-margin-mobile md:px-margin-desktop h-full max-w-container-max mx-auto w-full gap-1.5 sm:gap-4">
          {/* Left: Logo & State Dropdown */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <Link to={isLoggedIn ? "/dashboard" : "/"} className="flex items-center cursor-pointer relative w-20 sm:w-32 md:w-52 h-10 sm:h-12 md:h-14">
              <img
                src="/logo.png"
                alt="Bharath Marriage"
                className={`w-auto object-contain transition-all duration-300 absolute left-0 top-1/2 -translate-y-1/2 h-8 sm:h-11 md:h-14 ${!isSolid ? 'brightness-0 invert' : ''
                  }`}
              />
            </Link>

            {/* Divider Line */}
            <div className={`hidden md:block h-6 w-[1px] ${isSolid ? 'bg-slate-200' : 'bg-white/20'}`}></div>

            {/* State Selection Dropdown Badge — Mobile Only */}
            <div className="md:hidden relative">
              <button
                onClick={() => setIsMobileStateDropdownOpen(!isMobileStateDropdownOpen)}
                className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-semibold border cursor-pointer transition-all select-none ${isSolid
                    ? 'bg-deep-maroon/5 border-deep-maroon/20 text-deep-maroon hover:bg-deep-maroon/10'
                    : 'bg-white/10 border-white/30 text-white hover:bg-white/20'
                  }`}
              >
                {/* Pin icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 shrink-0">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8.25 8.25 0 00-16.5 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <span className="leading-none">{activeState}</span>
                {/* Chevron */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-2.5 h-2.5 shrink-0 transition-transform duration-200 ${isMobileStateDropdownOpen ? 'rotate-180' : ''}`}>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>

              {isMobileStateDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsMobileStateDropdownOpen(false)}></div>
                  <div className="absolute left-0 mt-1.5 w-32 bg-white rounded-xl shadow-xl border border-slate-100 py-1 z-[55] text-left">
                    <button
                      onClick={() => { setActiveState('Kerala'); setIsMobileStateDropdownOpen(false); }}
                      className="w-full text-left px-3 py-1.5 text-[10px] font-semibold text-charcoal-text hover:bg-slate-50 hover:text-deep-maroon cursor-pointer flex justify-between items-center"
                    >
                      <span>Kerala</span>
                      {activeState === 'Kerala' && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-deep-maroon">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    <button className="w-full text-left px-3 py-1.5 text-[10px] font-semibold text-charcoal-text opacity-40 cursor-not-allowed flex justify-between items-center" disabled>
                      <span>Tamil Nadu</span>
                      <span className="text-[8px] font-medium opacity-70">Soon</span>
                    </button>
                    <button className="w-full text-left px-3 py-1.5 text-[10px] font-semibold text-charcoal-text opacity-40 cursor-not-allowed flex justify-between items-center" disabled>
                      <span>Karnataka</span>
                      <span className="text-[8px] font-medium opacity-70">Soon</span>
                    </button>
                  </div>
                </>
              )}
            </div>


            {/* State Selection Dropdown Badge — Desktop Only */}
            <div className="hidden md:block relative group/state">
              <button
                className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-semibold border cursor-pointer transition-all select-none ${isSolid
                    ? 'bg-deep-maroon/5 border-deep-maroon/20 text-deep-maroon hover:bg-deep-maroon/10'
                    : 'bg-white/10 border-white/30 text-white hover:bg-white/20'
                  }`}
              >
                {/* Pin icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 shrink-0">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8.25 8.25 0 00-16.5 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <span className="leading-none">{activeState}</span>
                {/* Chevron */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-2.5 h-2.5 shrink-0 transition-transform duration-200 group-hover/state:rotate-180">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Dropdown Items (visible on hover) */}
              <div className="absolute left-0 mt-1.5 w-32 bg-white rounded-xl shadow-xl border border-slate-100 py-1 z-[55] opacity-0 invisible group-hover/state:opacity-100 group-hover/state:visible transition-all duration-200 text-left">
                <button
                  onClick={() => setActiveState('Kerala')}
                  className="w-full text-left px-3 py-1.5 text-[10px] font-semibold text-charcoal-text hover:bg-slate-50 hover:text-deep-maroon cursor-pointer flex justify-between items-center"
                >
                  <span>Kerala</span>
                  {activeState === 'Kerala' && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-deep-maroon">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                <button className="w-full text-left px-3 py-1.5 text-[10px] font-semibold text-charcoal-text opacity-40 cursor-not-allowed flex justify-between items-center" disabled>
                  <span>Tamil Nadu</span>
                  <span className="text-[8px] font-medium opacity-70">Soon</span>
                </button>
                <button className="w-full text-left px-3 py-1.5 text-[10px] font-semibold text-charcoal-text opacity-40 cursor-not-allowed flex justify-between items-center" disabled>
                  <span>Karnataka</span>
                  <span className="text-[8px] font-medium opacity-70">Soon</span>
                </button>
              </div>
            </div>

          </div>

          {/* Middle: Navigation Links (Desktop only) */}
          <div className="hidden lg:flex gap-6 items-center">
            <Link
              className={`font-semibold text-xs transition-all duration-300 active:scale-95 ${isSolid ? 'text-charcoal-text hover:text-deep-maroon' : 'text-white/90 hover:text-white'
                }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`font-semibold text-xs transition-all duration-300 active:scale-95 ${isSolid ? 'text-charcoal-text hover:text-deep-maroon' : 'text-white/90 hover:text-white'
                }`}
              to="/packages"
            >
              Packages
            </Link>
            <Link
              className={`font-semibold text-xs transition-all duration-300 active:scale-95 ${isSolid ? 'text-charcoal-text hover:text-deep-maroon' : 'text-white/90 hover:text-white'
                }`}
              to="/porutham"
            >
              Porutham
            </Link>
            <Link
              className={`font-semibold text-xs transition-all duration-300 active:scale-95 ${isSolid ? 'text-charcoal-text hover:text-deep-maroon' : 'text-white/90 hover:text-white'
                }`}
              to="/muhurtham"
            >
              Muhurtham
            </Link>
            <button
              onClick={() => navigate(isLoggedIn ? '/dashboard' : '/login')}
              className={`font-semibold text-xs transition-all duration-300 active:scale-95 cursor-pointer ${isSolid ? 'text-charcoal-text hover:text-deep-maroon' : 'text-white/90 hover:text-white'
                }`}
            >
              Matches
            </button>
            <a
              className={`font-semibold text-xs transition-all duration-300 active:scale-95 ${isSolid ? 'text-charcoal-text hover:text-deep-maroon' : 'text-white/90 hover:text-white'
                }`}
              href="/contact-us"
            >
              Contact Us
            </a>
          </div>

          {/* Right: Search, Login & Hamburger */}
          <div className="flex gap-1 sm:gap-2.5 md:gap-4 items-center">
            {/* Search Input Bar Link */}
            <Link
              to="/search"
              className={`hidden sm:flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-all duration-300 w-32 md:w-40 cursor-pointer ${isSolid ? 'bg-slate-100 border border-slate-200' : 'bg-white border border-transparent'
                }`}
            >
              <span className="material-symbols-outlined text-[15px] text-soft-gray leading-none">search</span>
              <span className="text-[11px] w-full text-soft-gray select-none">Search...</span>
            </Link>

            {/* Mobile-only Search Icon */}
            <Link
              to="/search"
              className={`sm:hidden flex items-center justify-center p-1 rounded-lg transition-all duration-300 cursor-pointer ${isSolid ? 'text-charcoal-text hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
            >
              <span className="material-symbols-outlined text-[18px] leading-none">search</span>
            </Link>

            {isLoggedIn ? (
              <>


                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    title="Arjun Reddy (ID: BM1006)"
                    className="flex items-center gap-1 rounded-full hover:bg-slate-100 md:px-1.5 md:py-0.5 cursor-pointer"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=80&h=80"
                      alt="Logged in user"
                      className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full object-cover border border-slate-200"
                    />
                    <span className={`material-symbols-outlined hidden text-[20px] md:inline-block ${isSolid ? 'text-charcoal-text' : 'text-white'
                      }`}>
                      keyboard_arrow_down
                    </span>
                  </button>

                  {isDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
                      <div className="absolute right-0 mt-2.5 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50 animate-fade-in text-left">
                        <div className="px-4 py-2 border-b border-slate-100 mb-1">
                          <p className="text-xs font-bold text-charcoal-text">Arjun Reddy</p>
                          <p className="text-[10px] text-soft-gray">ID: BM1006</p>
                        </div>
                        <Link
                          to="/dashboard?tab=profile"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-charcoal-text hover:bg-slate-50 hover:text-deep-maroon"
                        >
                          <span className="material-symbols-outlined text-base">account_circle</span>
                          My Profile
                        </Link>
                        <Link
                          to="/dashboard?tab=settings"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-charcoal-text hover:bg-slate-50 hover:text-deep-maroon"
                        >
                          <span className="material-symbols-outlined text-base">settings</span>
                          Settings
                        </Link>
                        <div className="border-t border-slate-100 my-1"></div>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 hover:text-red-700 text-left cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-base">logout</span>
                          Logout
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </>
            ) : (
              /* Login Button */
              <Link
                to="/login"
                className="hidden md:flex items-center gap-1.5 px-4 py-1.5 bg-deep-maroon hover:bg-primary text-white text-xs font-semibold rounded-lg shadow-md transition-all duration-200 active:scale-95 cursor-pointer shrink-0"
              >
                <span className="material-symbols-outlined text-[16px] leading-none text-white">
                  account_circle
                </span>
                Login
              </Link>
            )}

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden flex items-center justify-center p-1 rounded-lg transition-all duration-300 cursor-pointer ${isSolid ? 'text-charcoal-text hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
            >
              <span className="material-symbols-outlined text-[20px] leading-none">
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
          <div className="fixed top-0 right-0 h-full w-[260px] bg-white z-55 shadow-2xl flex flex-col md:hidden animate-slide-in-right text-left">
            {/* Header with Branded Logo */}
            <div className="flex justify-between items-center p-4 border-b border-slate-100 shrink-0">
              <div className="h-12 relative w-40">
                <img
                  src="/logo.png"
                  alt="Bharath Marriage Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="material-symbols-outlined text-[18px] text-charcoal-text hover:text-deep-maroon cursor-pointer p-1 rounded-full hover:bg-slate-100 transition-colors"
              >
                close
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 min-h-0">
              {/* Menu Links */}
              <div className="flex flex-col gap-1 shrink-0">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 font-semibold text-charcoal-text hover:text-deep-maroon hover:bg-slate-50 text-xs py-2 px-2.5 rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-[14px] text-slate-500">home</span>
                  Home
                </Link>
                <Link
                  to="/packages"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 font-semibold text-charcoal-text hover:text-deep-maroon hover:bg-slate-50 text-xs py-2 px-2.5 rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-[14px] text-slate-500">
                    workspace_premium
                  </span>
                  Packages
                </Link>
                <Link
                  to="/porutham"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 font-semibold text-charcoal-text hover:text-deep-maroon hover:bg-slate-50 text-xs py-2 px-2.5 rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-[14px] text-slate-500">favorite</span>
                  Porutham
                </Link>
                <Link
                  to="/muhurtham"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 font-semibold text-charcoal-text hover:text-deep-maroon hover:bg-slate-50 text-xs py-2 px-2.5 rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-[14px] text-slate-500">calendar_today</span>
                  Muhurtham
                </Link>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate(isLoggedIn ? '/dashboard' : '/login');
                  }}
                  className="flex items-center gap-2 font-semibold text-charcoal-text hover:text-deep-maroon hover:bg-slate-50 text-xs py-2 px-2.5 rounded-lg transition-colors w-full text-left"
                >
                  <span className="material-symbols-outlined text-[14px] text-slate-500">group</span>
                  Matches
                </button>
                <a
                  href="/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 font-semibold text-charcoal-text hover:text-deep-maroon hover:bg-slate-50 text-xs py-2 px-2.5 rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-[14px] text-slate-500">mail</span>
                  Contact Us
                </a>
              </div>

              {/* Search and State Selection (Mobile equivalents) */}
              <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-100 shrink-0">
                <Link
                  to="/search"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 bg-slate-50 text-charcoal-text text-xs hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px] text-soft-gray leading-none">search</span>
                  <span>Search Profiles</span>
                </Link>

                {/* State Selection Dropdown for Mobile */}
                <div className="relative w-full">
                  <button
                    onClick={() => setIsMobileStateDropdownOpen(!isMobileStateDropdownOpen)}
                    className="flex items-center justify-between gap-2 w-full py-2 px-3 bg-slate-50 border border-slate-200 text-charcoal-text font-semibold rounded-lg text-xs cursor-pointer active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-deep-maroon leading-none">location_on</span>
                      <span>State: <strong className="text-deep-maroon">{activeState}</strong></span>
                    </div>
                    <span className={`material-symbols-outlined text-[14px] transition-transform duration-200 ${isMobileStateDropdownOpen ? 'rotate-180' : ''}`}>
                      keyboard_arrow_down
                    </span>
                  </button>

                  {isMobileStateDropdownOpen && (
                    <div className="mt-1 w-full bg-white rounded-lg border border-slate-100 py-1 shadow-md z-10">
                      <button
                        onClick={() => {
                          setActiveState('Kerala');
                          setIsMobileStateDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left px-3 py-1.5 text-xs font-semibold text-charcoal-text hover:bg-slate-50 hover:text-deep-maroon cursor-pointer flex justify-between items-center"
                      >
                        <span>Kerala</span>
                        {activeState === 'Kerala' && <span className="material-symbols-outlined text-[14px] text-deep-maroon font-bold">check</span>}
                      </button>
                      <button
                        className="w-full text-left px-3 py-1.5 text-xs font-semibold text-charcoal-text opacity-40 cursor-not-allowed flex justify-between items-center"
                        disabled
                      >
                        <span>Tamil Nadu (Soon)</span>
                      </button>
                      <button
                        className="w-full text-left px-3 py-1.5 text-xs font-semibold text-charcoal-text opacity-40 cursor-not-allowed flex justify-between items-center"
                        disabled
                      >
                        <span>Karnataka (Soon)</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer containing Auth (Login/Logout) */}
            <div className="p-4 border-t border-slate-100 shrink-0 bg-slate-50/50">
              {isLoggedIn ? (
                <button
                  className="flex items-center justify-center gap-2 w-full py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-sm transition-colors text-xs cursor-pointer active:scale-[0.98]"
                  onClick={handleLogout}
                >
                  <span className="material-symbols-outlined text-[14px] leading-none text-white">logout</span>
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-2 w-full py-2 bg-deep-maroon hover:bg-primary text-white font-semibold rounded-lg shadow-sm transition-colors text-xs cursor-pointer active:scale-[0.98] text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="material-symbols-outlined text-[14px] leading-none text-white">account_circle</span>
                  Login
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
