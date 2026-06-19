import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProfileCard from '../../components/ProfileCard';
import FAQSection from '../../components/Faq';


const highlightedProfiles = [
  {
    id: 1,
    name: "Aishwarya R.",
    age: 26,
    height: "5'4\"",
    religion: "Hindu - Nair",
    education: "M.Tech",
    profession: "Software Engineer",
    location: "Bangalore, KA",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400&h=500",
    verified: true,
    premium: true,
    memberSince: 'Jan 2024',
  lastUpdated: '2d ago',
  },
  {
    id: 2,
    name: "Adithya K.",
    age: 28,
    height: "5'11\"",
    religion: "Hindu - Iyer",
    education: "MBA",
    profession: "Product Manager",
    location: "Chennai, TN",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500",
    verified: true,
    premium: false,
    memberSince: 'Jan 2024',
  lastUpdated: '2d ago',
  },
  {
    id: 3,
    name: "Meera Joseph",
    age: 25,
    height: "5'5\"",
    religion: "Christian - Syrian Catholic",
    education: "MD - Pediatrics",
    profession: "Doctor",
    location: "Kochi, KL",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400&h=500",
    verified: true,
    premium: true,
    memberSince: 'Jan 2024',
  lastUpdated: '2d ago',
  },
  {
    id: 4,
    name: "Sandeep Singh",
    age: 29,
    height: "6'0\"",
    religion: "Sikh - Jat",
    education: "B.Tech",
    profession: "Merchant Navy Officer",
    location: "Pune, MH",
    image: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&q=80&w=400&h=500",
    verified: true,
    premium: true,
    memberSince: 'Jan 2024',
  lastUpdated: '2d ago',
  },
  {
    id: 5,
    name: "Neha Sharma",
    age: 27,
    height: "5'6\"",
    religion: "Hindu - Brahmin",
    education: "M.S. Data Science",
    profession: "Data Scientist",
    location: "Hyderabad, TS",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
    verified: true,
    premium: true,
    memberSince: 'Jan 2024',
  lastUpdated: '2d ago',
  },
  {
    id: 6,
    name: "Arjun Reddy",
    age: 30,
    height: "6'1\"",
    religion: "Hindu - Reddy",
    education: "B.Tech + MS",
    profession: "Hardware Engineer",
    location: "Austin, USA",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500",
    verified: true,
    premium: true,
    memberSince: 'Jan 2024',
  lastUpdated: '2d ago',
  },
  {
    id: 7,
    name: "Kavya Madhavan",
    age: 25,
    height: "5'3\"",
    religion: "Hindu - Nair",
    education: "BFA - Design",
    profession: "UI/UX Designer",
    location: "Ernakulam, KL",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=500",
    verified: true,
    premium: false,
    memberSince: 'Jan 2024',
  lastUpdated: '2d ago',
  },
  {
    id: 8,
    name: "Vikram Malhotra",
    age: 29,
    height: "5'10\"",
    religion: "Hindu - Punjabi",
    education: "Chartered Accountant",
    profession: "Finance Manager",
    location: "Delhi, NCR",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500",
    verified: true,
    premium: true,
    memberSince: 'Jan 2024',
  lastUpdated: '2d ago',
  }
];

export default function Home() {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [storiesVisible, setStoriesVisible] = useState(false);
  const storiesRef = useRef(null);
  const [approachVisible, setApproachVisible] = useState(false);
  const approachRef = useRef(null);
  const [howItWorksVisible, setHowItWorksVisible] = useState(false);
  const howItWorksRef = useRef(null);
  const [profilesVisible, setProfilesVisible] = useState(false);
  const profilesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStoriesVisible(true);
        }
      },
      { threshold: 0.05 }
    );
    if (storiesRef.current) {
      observer.observe(storiesRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setApproachVisible(true);
        }
      },
      { threshold: 0.05 }
    );
    if (approachRef.current) {
      observer.observe(approachRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHowItWorksVisible(true);
        }
      },
      { threshold: 0.05 }
    );
    if (howItWorksRef.current) {
      observer.observe(howItWorksRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProfilesVisible(true);
        }
      },
      { threshold: 0.05 }
    );
    if (profilesRef.current) {
      observer.observe(profilesRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const [fullName, setFullName] = useState('');
  const [lookingFor, setLookingFor] = useState('Bride'); // 'Bride' corresponds to Female, 'Groom' to Male
  const [community, setCommunity] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [location, setLocation] = useState('');

  // Quick Search age states
  const [ageMin, setAgeMin] = useState('18');
  const [ageMax, setAgeMax] = useState('40');
  const [ageRange, setAgeRange] = useState('18-40');

  // Registration Date of Birth states
  const [dobDay, setDobDay] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [showDobPicker, setShowDobPicker] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dobDay || !dobMonth || !dobYear) {
      alert("Please select your Date of Birth");
      return;
    }
    const dobString = `${dobDay} ${dobMonth} ${dobYear}`;
    console.log({ fullName, email, lookingFor, community, dob: dobString, phone });
    alert(`Starting registration for ${fullName || 'New User'}: Looking for ${lookingFor}, Email: ${email}, DOB: ${dobString}, Community: ${community || 'None'}`);
  };

  const handleQuickSearch = () => {
    navigate(`/search?gender=${lookingFor}&age=${ageRange}&religion=${community}&location=${location}`);
  };

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden min-h-[85vh] flex items-center">
        {/* Hero Background Video */}
        <div className="absolute inset-0 z-0">
          {/* Dark Overlay for Text/Nav Contrast */}
          <div className="absolute inset-0 bg-black/45 z-10"></div>
          <video 
            className="w-full h-full object-cover object-top" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid md:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-12 items-center py-8 md:py-12">
          {/* Left Column: Simplified Heading */}
          <div className="animate-elegant-fade-up text-left">
            <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl text-white mb-4 md:mb-6 leading-tight text-center md:text-left">
              Two Souls, <br />
              <span className="text-heritage-gold">One Beautiful Journey</span>
            </h1>
          </div>

          {/* Right Column: Quick Registration Form */}
          <div className="bg-paper-white p-3 sm:p-4 md:p-5 rounded-xl shadow-lg border border-surface-variant/40 border-t-4 border-t-deep-maroon fade-in w-full max-w-[290px] sm:max-w-[340px] md:max-w-[370px] md:justify-self-end md:translate-x-6 md:-translate-y-8 mx-auto" style={{ animationDelay: '0.2s' }}>
            <div className="mb-2 sm:mb-3">
              <h3 className="font-semibold text-xs sm:text-sm text-charcoal-text leading-snug">
                Find Your Partner From <span className="text-deep-maroon font-bold">5 Lakh+</span> Profiles
              </h3>
              <p className="text-[9px] sm:text-[10px] text-soft-gray mt-0.5">
                100% Free matrimonial services
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-2.5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border border-surface-variant rounded-lg py-1.5 px-2.5 text-[11px] font-body-sm bg-white text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon placeholder-soft-gray/60" 
                  placeholder="Full Name" 
                  required 
                />
                <div className="flex items-center border border-surface-variant rounded-lg bg-white overflow-hidden focus-within:ring-1 focus-within:ring-deep-maroon focus-within:border-deep-maroon">
                  <div className="flex items-center gap-0.5 px-2 py-1 bg-white select-none border-r border-surface-variant/60 cursor-pointer">
                    <span className="text-xs">🇮🇳</span>
                    <span className="text-[10px] text-charcoal-text font-medium ml-0.5">+91</span>
                    <span className="material-symbols-outlined text-[10px] text-soft-gray leading-none">
                      keyboard_arrow_down
                    </span>
                  </div>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border-none py-1.5 px-2 text-[11px] font-body-sm bg-white text-charcoal-text placeholder-soft-gray/60 focus:ring-0 focus:outline-none" 
                    placeholder="Mobile Number" 
                    required 
                  />
                </div>
              </div>

              <div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-surface-variant rounded-lg py-1.5 px-2.5 text-[11px] font-body-sm bg-white text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon placeholder-soft-gray/60" 
                  placeholder="Email Address" 
                  required 
                />
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                <select 
                  value={community}
                  onChange={(e) => setCommunity(e.target.value)}
                  className="w-full border border-surface-variant rounded-lg py-1.5 px-2 text-[11px] bg-white text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon"
                >
                  <option value="">Religion</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Christian">Christian</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Sikh">Sikh</option>
                </select>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowDobPicker(!showDobPicker)}
                    className={`w-full flex items-center justify-between gap-1 border rounded-lg py-1.5 px-2 text-[10px] bg-white text-charcoal-text hover:bg-slate-50 cursor-pointer h-full min-h-[32px] ${
                      dobDay && dobMonth && dobYear ? 'border-deep-maroon font-semibold text-deep-maroon' : 'border-surface-variant text-soft-gray'
                    }`}
                  >
                    <span className="flex items-center gap-1 overflow-hidden truncate">
                      <span className="material-symbols-outlined text-[13px] text-soft-gray">calendar_month</span>
                      <span className="truncate">
                        {dobDay && dobMonth && dobYear ? `${dobDay} ${dobMonth} ${dobYear}` : 'DOB'}
                      </span>
                    </span>
                    <span className="material-symbols-outlined text-[12px] text-soft-gray">keyboard_arrow_down</span>
                  </button>
                  {showDobPicker && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setShowDobPicker(false)}></div>
                      <div className="absolute right-0 top-full mt-1.5 z-50 bg-white border border-slate-200/80 shadow-xl rounded-xl p-3.5 w-[250px] animate-fade-in text-left">
                        <div className="text-[11px] font-semibold text-charcoal-text mb-2 flex justify-between items-center">
                          <span>Select Date of Birth</span>
                          <button 
                            type="button" 
                            onClick={() => setShowDobPicker(false)}
                            className="text-soft-gray hover:text-charcoal-text text-[10px] font-bold p-1"
                          >
                            ✕
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-1.5 mb-3">
                          {/* Day */}
                          <select 
                            value={dobDay} 
                            onChange={(e) => setDobDay(e.target.value)}
                            className="w-full border border-slate-200 rounded-md py-1 px-1.5 text-[10px] bg-slate-50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                          >
                            <option value="">Day</option>
                            {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                              <option key={d} value={d < 10 ? `0${d}` : `${d}`}>{d}</option>
                            ))}
                          </select>

                          {/* Month */}
                          <select 
                            value={dobMonth} 
                            onChange={(e) => setDobMonth(e.target.value)}
                            className="w-full border border-slate-200 rounded-md py-1 px-1.5 text-[10px] bg-slate-50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                          >
                            <option value="">Month</option>
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => (
                              <option key={m} value={m}>{m}</option>
                            ))}
                          </select>

                          {/* Year */}
                          <select 
                            value={dobYear} 
                            onChange={(e) => setDobYear(e.target.value)}
                            className="w-full border border-slate-200 rounded-md py-1 px-1.5 text-[10px] bg-slate-50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                          >
                            <option value="">Year</option>
                            {Array.from({ length: 58 }, (_, i) => 2008 - i).map(y => (
                              <option key={y} value={y}>{y}</option>
                            ))}
                          </select>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            if (dobDay && dobMonth && dobYear) {
                              setShowDobPicker(false);
                            }
                          }}
                          disabled={!dobDay || !dobMonth || !dobYear}
                          className="w-full bg-deep-maroon text-white font-semibold py-1.5 rounded-lg text-[10px] uppercase tracking-wider hover:bg-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed text-center cursor-pointer"
                        >
                          Confirm
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                <button
                  type="button"
                  onClick={() => setLookingFor('Groom')}
                  className={`flex items-center justify-center gap-1 border rounded-lg py-1.5 px-1 text-[10px] cursor-pointer transition-all ${
                    lookingFor === 'Groom'
                      ? 'border-deep-maroon text-deep-maroon bg-deep-maroon/5 font-semibold'
                      : 'border-surface-variant text-soft-gray bg-white hover:bg-slate-50'
                  }`}
                >
                  <span 
                    className="material-symbols-outlined text-[14px] leading-none"
                    style={{ fontVariationSettings: lookingFor === 'Groom' ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    account_circle
                  </span>
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setLookingFor('Bride')}
                  className={`flex items-center justify-center gap-1 border rounded-lg py-1.5 px-1 text-[10px] cursor-pointer transition-all ${
                    lookingFor === 'Bride'
                      ? 'border-deep-maroon text-deep-maroon bg-deep-maroon/5 font-semibold'
                      : 'border-surface-variant text-soft-gray bg-white hover:bg-slate-50'
                  }`}
                >
                  <span 
                    className="material-symbols-outlined text-[14px] leading-none"
                    style={{ fontVariationSettings: lookingFor === 'Bride' ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    account_circle
                  </span>
                  Female
                </button>
              </div>

              <div className="flex items-start gap-1.5 pt-0.5">
                <input 
                  type="checkbox" 
                  id="agreeTerms" 
                  required 
                  className="mt-0.5 h-3 w-3 rounded border-surface-variant text-deep-maroon focus:ring-deep-maroon cursor-pointer" 
                />
                <label htmlFor="agreeTerms" className="font-body-sm text-[9px] text-soft-gray leading-tight select-none cursor-pointer">
                  I have read and agree to the <span className="font-semibold text-charcoal-text hover:underline">Terms of Use &amp; Privacy Policy</span>
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-deep-maroon hover:bg-primary text-white font-semibold py-2 rounded-lg mt-0.5 shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer text-center text-[10px] tracking-wider uppercase"
              >
                Register Free
              </button>
              
              <div className="flex justify-center gap-6 mt-2.5 pt-2 border-t border-surface-variant/40">
                <a href="#support" className="flex items-center gap-1 text-soft-gray hover:text-deep-maroon transition-colors text-[10px] font-body-sm">
                  <span className="material-symbols-outlined text-[13px] leading-none">support_agent</span>
                  Support
                </a>
                <a href="#chat" className="flex items-center gap-1 text-soft-gray hover:text-deep-maroon transition-colors text-[10px] font-body-sm">
                  <span className="material-symbols-outlined text-[13px] leading-none">chat</span>
                  Chat for assistance
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="relative z-30 -mt-6 sm:-mt-8 md:-mt-10 mx-auto w-full max-w-[290px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[980px] bg-white py-2.5 px-3 sm:py-4 sm:px-5 md:px-6 rounded-xl border border-slate-200/80 shadow-xl">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3.5 items-center w-full">
          
          {/* Looking For Dropdown */}
          <div className="relative border border-slate-300 rounded-lg py-1 px-2 sm:py-1.5 sm:px-3 bg-white text-left w-full">
            <label className="block text-[8px] sm:text-[10px] text-slate-400 font-medium leading-none mb-0.5">I'm looking for a</label>
            <select 
              value={lookingFor}
              onChange={(e) => setLookingFor(e.target.value)}
              className="w-full border-none bg-transparent font-semibold text-charcoal-text text-[10px] sm:text-xs md:text-sm p-0 focus:ring-0 focus:outline-none cursor-pointer appearance-none pr-5 sm:pr-6"
            >
              <option value="Bride">Bride</option>
              <option value="Groom">Groom</option>
            </select>
            <span className="absolute right-2 sm:right-3 bottom-1.5 sm:bottom-2.5 material-symbols-outlined text-[14px] sm:text-[16px] text-slate-400 pointer-events-none">
              keyboard_arrow_down
            </span>
          </div>

          {/* Age Range Dropdown */}
          <div className="relative border border-slate-300 rounded-lg py-1 px-2 sm:py-1.5 sm:px-3 bg-white text-left w-full">
            <label className="block text-[8px] sm:text-[10px] text-slate-400 font-medium leading-none mb-0.5">Age Range</label>
            <select 
              value={ageRange}
              onChange={(e) => {
                const val = e.target.value;
                setAgeRange(val);
                const [min, max] = val.split('-');
                setAgeMin(min);
                setAgeMax(max);
              }}
              className="w-full border-none bg-transparent font-semibold text-charcoal-text text-[10px] sm:text-xs md:text-sm p-0 focus:ring-0 focus:outline-none cursor-pointer appearance-none pr-5 sm:pr-6"
            >
              <option value="18-40">18 - 40</option>
              <option value="18-25">18 - 25</option>
              <option value="26-30">26 - 30</option>
              <option value="31-35">31 - 35</option>
              <option value="36-40">36 - 40</option>
            </select>
            <span className="absolute right-2 sm:right-3 bottom-1.5 sm:bottom-2.5 material-symbols-outlined text-[14px] sm:text-[16px] text-slate-400 pointer-events-none">
              keyboard_arrow_down
            </span>
          </div>

          {/* Location Dropdown */}
          <div className="relative border border-slate-300 rounded-lg py-1 px-2 sm:py-1.5 sm:px-3 bg-white text-left w-full">
            <label className="block text-[8px] sm:text-[10px] text-slate-400 font-medium leading-none mb-0.5">Location</label>
            <select 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border-none bg-transparent font-semibold text-charcoal-text text-[10px] sm:text-xs md:text-sm p-0 focus:ring-0 focus:outline-none cursor-pointer appearance-none pr-5 sm:pr-6"
            >
              <option value="">Any Location</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Kochi">Kochi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="USA">USA</option>
            </select>
            <span className="absolute right-2 sm:right-3 bottom-1.5 sm:bottom-2.5 material-symbols-outlined text-[14px] sm:text-[16px] text-slate-400 pointer-events-none">
              keyboard_arrow_down
            </span>
          </div>

          {/* Religion Dropdown */}
          <div className="relative border border-slate-300 rounded-lg py-1 px-2 sm:py-1.5 sm:px-3 bg-white text-left w-full">
            <label className="block text-[8px] sm:text-[10px] text-slate-400 font-medium leading-none mb-0.5">Religion</label>
            <select 
              value={community}
              onChange={(e) => setCommunity(e.target.value)}
              className="w-full border-none bg-transparent font-semibold text-charcoal-text text-[10px] sm:text-xs md:text-sm p-0 focus:ring-0 focus:outline-none cursor-pointer appearance-none pr-5 sm:pr-6"
            >
              <option value="">Select...</option>
              <option value="Hindu">Hindu</option>
              <option value="Christian">Christian</option>
              <option value="Muslim">Muslim</option>
              <option value="Sikh">Sikh</option>
            </select>
            <span className="absolute right-2 sm:right-3 bottom-1.5 sm:bottom-2.5 material-symbols-outlined text-[14px] sm:text-[16px] text-slate-400 pointer-events-none">
              keyboard_arrow_down
            </span>
          </div>

          {/* Search Button */}
          <button 
            onClick={handleQuickSearch}
            className="col-span-2 lg:col-span-1 flex items-center justify-center gap-1.5 bg-deep-maroon text-white font-semibold rounded-lg hover:bg-primary transition-all active:scale-95 cursor-pointer text-[11px] sm:text-sm shrink-0 w-full h-[36px] sm:h-[46px] shadow-md hover:shadow-lg"
          >
            <span className="material-symbols-outlined text-[15px] sm:text-[18px]">search</span>
            Search
          </button>

        </div>
      </div>

      {/* Success Stories Section */}
      <section className="bg-gradient-to-br from-white via-rose-50/25 to-amber-50/15 py-20 relative z-10 border-t border-slate-100/60">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
            
            {/* Left Column: Storytelling Copy */}
            <div className="fade-in text-left">
              <span className="font-label-caps text-xs text-heritage-gold tracking-widest block mb-2 font-semibold">
                SUCCESS STORIES
              </span>
              <h2 className="font-display-lg text-3xl md:text-4xl text-charcoal-text mb-6 uppercase tracking-wide leading-tight">
                Everlasting Tales <br />
                <span className="text-deep-maroon">Of Trust &amp; Love</span>
              </h2>
              <p className="font-body-lg text-sm text-soft-gray mb-6 leading-relaxed">
                Every couple's journey is a beautiful mosaic of emotions, quiet promises, and unforgettable moments. At <span className="text-deep-maroon font-semibold">Bharath Marriage</span>, we specialize in helping families discover compatibility and deep connections. Whether it's a soft smile exchanged under twilight skies or the joyful tears shared with loved ones, we support you in finding the one who truly completes your story. Our trusted matchmaking approach blends elegance and authenticity, turning your search for a life partner into a safe, heritage-rich experience that lasts a lifetime.
              </p>
              <div className="border-l-2 border-heritage-gold pl-4 italic text-xs text-soft-gray/80 mt-6 max-w-md">
                "The most beautiful relationship is the one that was destined, built on compatibility and trust."
                <span className="block text-[10px] font-semibold text-charcoal-text mt-1.5 not-italic">— Bharath Marriage</span>
              </div>
            </div>

            {/* Right Column: Dynamic Visual Cards Grid */}
            <div ref={storiesRef} className="grid grid-cols-2 gap-4 sm:gap-6 items-stretch w-full">
                   {/* Tall Vertical Card (Featured Story) - Left Card */}
              <div className={`col-span-2 sm:col-span-1 sm:row-span-2 bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden flex flex-col h-[350px] sm:h-[420px] hover:shadow-lg transition-all duration-300 ${
                storiesVisible ? 'animate-slide-from-left' : 'opacity-0'
              }`}>
                <div className="relative flex-1 overflow-hidden">
                  <img src="/image1.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Anjali & Arun" />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-deep-maroon text-white text-[9px] sm:text-[10px] font-label-caps font-semibold py-1 px-2.5 rounded-full tracking-wider shadow-md">
                    Featured Story
                  </div>
                </div>
                <div className="p-3 sm:p-4 text-center bg-white border-t border-slate-50 shrink-0">
                  <h4 className="font-bold text-charcoal-text text-sm sm:text-base">Anjali &amp; Arun</h4>
                  <p className="text-[10px] sm:text-xs text-soft-gray italic mt-1">Destination : bangalore</p>
                </div>
              </div>

              {/* Card 2: Dhanya & Midhun - Top Right Card */}
              <div className={`col-span-1 bg-white rounded-xl shadow-md border border-slate-100/80 overflow-hidden flex flex-col h-[220px] sm:h-[198px] hover:shadow-lg transition-all duration-300 ${
                storiesVisible ? 'animate-slide-from-top' : 'opacity-0'
              }`}>
                <div className="relative h-[145px] sm:h-[130px] w-full flex items-center justify-center bg-white p-3 shrink-0">
                  {/* Custom Floral Branch Line Art */}
                  <svg 
                    className="absolute left-2.5 top-2.5 w-18 h-18 opacity-25 text-soft-gray pointer-events-none" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="0.8"
                  >
                    <path d="M15 85 C 35 65, 55 55, 65 35 C 70 25, 65 15, 55 25 C 45 35, 35 55, 15 85" />
                    <path d="M65 35 C 75 25, 85 25, 95 15 C 85 10, 75 15, 65 35" />
                    <path d="M35 65 C 45 60, 50 50, 50 40 C 45 40, 40 50, 35 65" />
                    <circle cx="55" cy="25" r="2.5" fill="currentColor" />
                    <circle cx="95" cy="15" r="2.5" fill="currentColor" />
                  </svg>
                  
                  {/* Portrait Frame */}
                  <div className="relative w-[72%] h-full rounded-lg overflow-hidden border border-slate-100 shadow-sm bg-slate-50 shrink-0">
                    <img 
                      src="/image2.jpg" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                      alt="Dhanya & Midhun" 
                    />
                  </div>
                </div>
                <div className="p-2 sm:p-3 text-center bg-white border-t border-slate-50 shrink-0 flex-1 flex flex-col justify-center">
                  <h4 className="font-bold text-charcoal-text text-[11px] sm:text-xs leading-none">Dhanya &amp; Midhun</h4>
                  <p className="text-[9px] sm:text-[10px] text-soft-gray italic mt-1 leading-none">Destination : Kochi</p>
                </div>
              </div>

              {/* Card 3: Devika & Sreejith - Bottom Right Card */}
              <div className={`col-span-1 bg-white rounded-xl shadow-md border border-slate-100/80 overflow-hidden flex flex-col h-[220px] sm:h-[198px] hover:shadow-lg transition-all duration-300 ${
                storiesVisible ? 'animate-slide-from-bottom' : 'opacity-0'
              }`}>
                <div className="relative h-[145px] sm:h-[130px] w-full flex items-center justify-center bg-white p-3.5 shrink-0">
                  {/* Taller Rounded Frame */}
                  <div className="relative w-[92%] h-full rounded-2xl overflow-hidden shadow-sm bg-slate-50 shrink-0">
                    <img 
                      src="/image3.jpg" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                      alt="Devika & Sreejith" 
                    />
                  </div>
                </div>
                <div className="p-2 sm:p-3 text-center bg-white border-t border-slate-50 shrink-0 flex-1 flex flex-col justify-center">
                  <h4 className="font-bold text-charcoal-text text-[11px] sm:text-xs leading-none">Devika &amp; Sreejith</h4>
                  <p className="text-[9px] sm:text-[10px] text-soft-gray italic mt-1 leading-none">Destination : Thrissur</p>
                </div>
              </div>    </div>

          </div>
        </div>
      </section>

      {/* Highlighted Profiles Section */}
      <section ref={profilesRef} className="bg-white py-12 relative z-10 border-t border-slate-100">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          
          <div className={`mb-12 transition-all duration-300 ${
            profilesVisible ? 'animate-elegant-fade-up' : 'opacity-0'
          }`}>
            <span className="font-label-caps text-xs text-heritage-gold tracking-widest block mb-2 font-semibold">
              PREMIUM MATCHES
            </span>
            <h2 className="font-display-lg text-3xl md:text-4xl text-charcoal-text mb-4 uppercase tracking-wide">
              Highlighted <span className="text-deep-maroon">Profiles</span>
            </h2>
            <p className="font-body-lg text-sm text-soft-gray max-w-xl mx-auto">
              Explore our most active, verified premium members who are looking for serious commitments.
            </p>
          </div>

          <div className="relative group/scroll w-full">
            {/* Left navigation arrow */}
            <button 
              onClick={() => scroll('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-deep-maroon text-charcoal-text hover:text-white rounded-full p-2.5 shadow-lg border border-slate-200/80 transition-all duration-300 active:scale-90 cursor-pointer flex items-center justify-center opacity-90 hover:opacity-100"
              aria-label="Scroll Left"
            >
              <span className="material-symbols-outlined text-[20px] font-semibold">chevron_left</span>
            </button>

            <div 
              ref={scrollContainerRef}
              className={`flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory text-left scroll-smooth w-full scrollbar-hidden transition-all duration-300 ${
                profilesVisible ? 'animate-slide-from-bottom' : 'opacity-0'
              }`}
            >
             {highlightedProfiles.map((profile, index) => (
  <div
    className="w-[210px] sm:w-[270px] shrink-0 snap-start"
    key={profile.id}
    style={profilesVisible ? { animationDelay: `${index * 80}ms` } : {}}
  >
    <ProfileCard profile={profile} />
  </div>
))}
            </div>

            {/* Right navigation arrow */}
            <button 
              onClick={() => scroll('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-deep-maroon text-charcoal-text hover:text-white rounded-full p-2.5 shadow-lg border border-slate-200/80 transition-all duration-300 active:scale-90 cursor-pointer flex items-center justify-center opacity-90 hover:opacity-100"
              aria-label="Scroll Right"
            >
              <span className="material-symbols-outlined text-[20px] font-semibold">chevron_right</span>
            </button>
          </div>

        </div>
      </section>

      {/* Our Signature Style / Approach Section */}
      <section className="bg-white py-20 relative z-10 border-t border-slate-100">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          
          <div className="mb-12">
            <span className="font-label-caps text-xs text-heritage-gold tracking-widest block mb-2 font-semibold">
              OUR SIGNATURE APPROACH
            </span>
            <h2 className="font-display-lg text-3xl md:text-4xl text-charcoal-text mb-4 uppercase tracking-wide">
              A Matchmaking Experience <br />
              <span className="text-deep-maroon">Built on Trust &amp; Tradition</span>
            </h2>
            <p className="font-body-lg text-sm text-soft-gray max-w-2xl mx-auto leading-relaxed">
              At Bharath Marriage, we believe finding a life partner is a sacred milestone. Our approach combines time-tested traditional values with modern verification technology to create a safe, dignified, and highly compatible matchmaking environment for families.
            </p>
          </div>

          <div ref={approachRef} className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center text-left">
            
            {/* Left: Storytelling Text */}
            <div className={`space-y-6 transition-all duration-300 ${
              approachVisible ? 'animate-approach-text' : 'opacity-0'
            }`}>
              <h3 className="font-display-lg text-2xl text-charcoal-text leading-tight">
                Emotive Matching &amp; <br />
                <span className="text-deep-maroon">Curated Compatibility</span>
              </h3>
              <p className="font-body-lg text-sm text-soft-gray leading-relaxed">
                We don't believe in random swipes — we focus on true alignment. Whether it's cultural heritage, professional aspirations, or family backgrounds, we design our match profile insights to help you look beyond the surface. We guide you toward connections that share your values, vision, and lifestyle, ensuring a foundation built for a lifetime.
              </p>
              <p className="font-body-lg text-sm text-soft-gray leading-relaxed">
                Every profile undergoes strict manual and digital verification checks, and we maintain complete privacy controls over your photographs and contact information. Your search remains elegant, confidential, and respected at every single step of the way.
              </p>
              <div className="pt-2">
                <a href="#register" className="inline-flex items-center gap-1.5 bg-deep-maroon hover:bg-primary text-white text-xs font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-95">
                  Begin Your Journey
                  <span className="material-symbols-outlined text-[16px] leading-none">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Right: Premium Wedding Photo */}
            <div className={`rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 ${
              approachVisible ? 'animate-approach-photo' : 'opacity-0'
            }`}>
              <img 
                src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=800&h=533" 
                alt="Traditional Wedding Couple" 
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-slate-50/40 py-20 relative z-10 border-t border-slate-100/60">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 text-center">
            <span className="font-label-caps text-xs text-heritage-gold tracking-widest block mb-2 font-semibold">
              MOMENTS
            </span>
            <h2 className="font-display-lg text-3xl md:text-4xl text-deep-maroon mb-4 uppercase tracking-wide">
              How It Works
            </h2>
          </div>

          <div ref={howItWorksRef} className="grid grid-cols-1 md:grid-cols-4 gap-8 relative max-w-5xl mx-auto">
            {/* Curved Connector Path (Desktop) */}
            <div className={`hidden md:block absolute top-[48px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-deep-maroon/30 z-0 transition-all duration-1000 ${
              howItWorksVisible ? 'opacity-30' : 'opacity-0'
            }`}></div>

            {/* Step 1: Register */}
            <div className={`flex flex-col items-center text-center relative z-10 group transition-all duration-300 ${
              howItWorksVisible ? 'animate-step-1' : 'opacity-0'
            }`}>
              {/* Concentric Circles */}
              <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full bg-deep-maroon/5 animate-pulse"></div>
                {/* Middle Ring */}
                <div className="absolute w-20 h-20 rounded-full bg-deep-maroon/10 border border-deep-maroon/5"></div>
                {/* Inner Core */}
                <div className="absolute w-14 h-14 rounded-full bg-deep-maroon flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  <span className="material-symbols-outlined text-[22px] text-white">person_add</span>
                </div>
              </div>
              <h4 className="font-semibold text-sm text-charcoal-text mb-1 flex items-center gap-1.5">
                <span className="text-deep-maroon">1.</span> Register
              </h4>
              <p className="text-[11px] text-soft-gray leading-tight max-w-[170px]">
                Sign up and create your profile
              </p>
            </div>

            {/* Step 2: Search */}
            <div className={`flex flex-col items-center text-center relative z-10 group transition-all duration-300 ${
              howItWorksVisible ? 'animate-step-2' : 'opacity-0'
            }`}>
              {/* Concentric Circles */}
              <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full bg-heritage-gold/5 animate-pulse"></div>
                {/* Middle Ring */}
                <div className="absolute w-20 h-20 rounded-full bg-heritage-gold/15 border border-heritage-gold/10"></div>
                {/* Inner Core */}
                <div className="absolute w-14 h-14 rounded-full bg-heritage-gold flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  <span className="material-symbols-outlined text-[22px] text-white">search</span>
                </div>
              </div>
              <h4 className="font-semibold text-sm text-charcoal-text mb-1 flex items-center gap-1.5">
                <span className="text-heritage-gold">2.</span> Search
              </h4>
              <p className="text-[11px] text-soft-gray leading-tight max-w-[170px]">
                Find your perfect match
              </p>
            </div>

            {/* Step 3: Connect */}
            <div className={`flex flex-col items-center text-center relative z-10 group transition-all duration-300 ${
              howItWorksVisible ? 'animate-step-3' : 'opacity-0'
            }`}>
              {/* Concentric Circles */}
              <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full bg-deep-maroon/5 animate-pulse"></div>
                {/* Middle Ring */}
                <div className="absolute w-20 h-20 rounded-full bg-deep-maroon/10 border border-deep-maroon/5"></div>
                {/* Inner Core */}
                <div className="absolute w-14 h-14 rounded-full bg-deep-maroon flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  <span className="material-symbols-outlined text-[22px] text-white">chat</span>
                </div>
              </div>
              <h4 className="font-semibold text-sm text-charcoal-text mb-1 flex items-center gap-1.5">
                <span className="text-deep-maroon">3.</span> Connect
              </h4>
              <p className="text-[11px] text-soft-gray leading-tight max-w-[170px]">
                Start conversation with them
              </p>
            </div>

            {/* Step 4: Marriage */}
            <div className={`flex flex-col items-center text-center relative z-10 group transition-all duration-300 ${
              howItWorksVisible ? 'animate-step-4' : 'opacity-0'
            }`}>
              {/* Concentric Circles */}
              <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full bg-heritage-gold/5 animate-pulse"></div>
                {/* Middle Ring */}
                <div className="absolute w-20 h-20 rounded-full bg-heritage-gold/15 border border-heritage-gold/10"></div>
                {/* Inner Core */}
                <div className="absolute w-14 h-14 rounded-full bg-heritage-gold flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  <span className="material-symbols-outlined text-[22px] text-white">celebration</span>
                </div>
              </div>
              <h4 className="font-semibold text-sm text-charcoal-text mb-1 flex items-center gap-1.5">
                <span className="text-heritage-gold">4.</span> Marriage
              </h4>
              <p className="text-[11px] text-soft-gray leading-tight max-w-[170px]">
                Write your success story
              </p>
            </div>
          </div>
        </div>
      </section>
      <FAQSection/>
    </div>
  );
}
