import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from '../../components/ProfileCard';

const searchProfiles = [
  {
    id: "BM1001",
    name: "Aishwarya R.",
    age: 26,
    height: "5'4\"",
    heightCm: 162,
    religion: "Hindu",
    caste: "Brahmin",
    education: "M.Tech",
    profession: "Software Engineer",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400&h=500",
    verified: true,
    premium: true,
    gender: "Bride"
  },
  {
    id: "BM1002",
    name: "Adithya K.",
    age: 28,
    height: "5'11\"",
    heightCm: 180,
    religion: "Hindu",
    caste: "Brahmin",
    education: "MBA",
    profession: "Product Manager",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500",
    verified: true,
    premium: false,
    gender: "Groom"
  },
  {
    id: "BM1003",
    name: "Meera Joseph",
    age: 25,
    height: "5'5\"",
    heightCm: 165,
    religion: "Christian",
    caste: "Open to all",
    education: "MD - Pediatrics",
    profession: "Doctor",
    location: "Kochi",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400&h=500",
    verified: true,
    premium: true,
    gender: "Bride"
  },
  {
    id: "BM1004",
    name: "Sandeep Singh",
    age: 29,
    height: "6'0\"",
    heightCm: 182,
    religion: "Sikh",
    caste: "Open to all",
    education: "B.Tech",
    profession: "Merchant Navy Officer",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&q=80&w=400&h=500",
    verified: true,
    premium: true,
    gender: "Groom"
  },
  {
    id: "BM1005",
    name: "Neha Sharma",
    age: 27,
    height: "5'6\"",
    heightCm: 167,
    religion: "Hindu",
    caste: "Brahmin",
    education: "M.S. Data Science",
    profession: "Data Scientist",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
    verified: true,
    premium: true,
    gender: "Bride"
  },
  {
    id: "BM1006",
    name: "Arjun Reddy",
    age: 30,
    height: "6'1\"",
    heightCm: 185,
    religion: "Hindu",
    caste: "Reddy",
    education: "B.Tech + MS",
    profession: "Hardware Engineer",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500",
    verified: true,
    premium: true,
    gender: "Groom"
  },
  {
    id: "BM1007",
    name: "Kavya Madhavan",
    age: 25,
    height: "5'3\"",
    heightCm: 160,
    religion: "Hindu",
    caste: "Open to all",
    education: "BFA - Design",
    profession: "UI/UX Designer",
    location: "Kochi",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=500",
    verified: true,
    premium: false,
    gender: "Bride"
  },
  {
    id: "BM1008",
    name: "Vikram Malhotra",
    age: 29,
    height: "5'10\"",
    heightCm: 178,
    religion: "Hindu",
    caste: "Open to all",
    education: "Chartered Accountant",
    profession: "Finance Manager",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500",
    verified: true,
    premium: true,
    gender: "Groom"
  }
];

export default function Search() {
  const [lookingFor, setLookingFor] = useState('Bride');
  const [religion, setReligion] = useState('');
  const [caste, setCaste] = useState('Open to all');
  const [location, setLocation] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [nakshatra, setNakshatra] = useState('');


  const [maritalStatus, setMaritalStatus] = useState('');
  const [searchId, setSearchId] = useState('');
  const [showMore, setShowMore] = useState(false);
  const resultsRef = useRef(null);
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const genderParam = params.get('gender');
    const ageParam = params.get('age');
    const religionParam = params.get('religion');
    const locationParam = params.get('location');

    let isFiltered = false;

    if (genderParam) {
      setLookingFor(genderParam);
      isFiltered = true;
    }
    if (religionParam) {
      setReligion(religionParam);
      isFiltered = true;
    }
    if (locationParam) {
      setLocation(locationParam);
      isFiltered = true;
    }
    if (ageParam) {
      isFiltered = true;
    }

    if (isFiltered) {
      const filtered = searchProfiles.filter(p => {
        if (genderParam && p.gender !== genderParam) return false;
        if (religionParam && p.religion !== religionParam) return false;
        if (locationParam && p.location !== locationParam) return false;
        if (ageParam) {
          const [min, max] = ageParam.split('-');
          if (p.age < parseInt(min) || p.age > parseInt(max)) return false;
        }
        return true;
      });
      setResults(filtered);
      setSearched(true);
      // Scroll to results after a short delay so the DOM has rendered
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }, []);

  const handleSearch = (e) => {
    e?.preventDefault();
    setSearched(true);

    if (searchId.trim() !== '') {
      // Search by ID
      const match = searchProfiles.filter(p => p.id.toLowerCase().includes(searchId.trim().toLowerCase()));
      setResults(match);
      return;
    }

    // Filter search
    const filtered = searchProfiles.filter(p => {
      // Gender Match
      if (p.gender !== lookingFor) return false;
      // Religion Match
      if (religion && p.religion !== religion) return false;
      // Caste Match
      if (caste !== 'Open to all' && p.caste !== caste) return false;
      // Age Match (removed)


      return true;
    });

    setResults(filtered);
  };

  return (
    <div className="w-full flex flex-col pt-16 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="relative bg-gradient-to-r from-primary via-deep-maroon to-primary py-2.5 sm:py-3.5 text-white text-center px-margin-mobile md:px-margin-desktop overflow-hidden">
        {/* Subtle Background Graphics */}
        <div className="absolute inset-0 opacity-10 hero-pattern pointer-events-none"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-container-max mx-auto relative z-10 w-full">
          {/* Back Navigation */}
          <div className="flex justify-start mb-1">
            <Link to="/" className="text-white/85 hover:text-white flex items-center gap-0.5 font-semibold text-[10px] sm:text-xs transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-[13px] sm:text-[15px] group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
              Back
            </Link>
          </div>

          <h1 className="font-display-lg text-xs sm:text-sm md:text-base text-white mb-2 leading-none uppercase tracking-wider">
            Search Your Partner Here
          </h1>

          {/* Search by ID Input Bar */}
          <form onSubmit={handleSearch} className="max-w-xs sm:max-w-md mx-auto relative px-2">
            <input
              type="text"
              placeholder="Search by ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="w-full bg-white rounded-full py-1.5 px-4 pr-10 text-[11px] sm:text-xs font-body-sm text-charcoal-text placeholder-soft-gray/60 focus:outline-none shadow border border-slate-100"
            />
            <button
              type="submit"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 bg-deep-maroon text-white w-6.5 h-6.5 rounded-full flex items-center justify-center cursor-pointer shadow hover:bg-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[12px] text-white">search</span>
            </button>
          </form>
        </div>
      </section>

      <section className="py-6 md:py-10 relative z-10 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto bg-transparent md:bg-white p-0 md:p-8 rounded-none md:rounded-xl shadow-none md:shadow-md border-none md:border md:border-slate-100">

          <form onSubmit={handleSearch} className="space-y-4 md:space-y-6">

            {/* Main Filters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">

              <div className="text-left">
                <label className="block text-[9px] md:text-[11px] text-slate-400 font-semibold mb-1 uppercase tracking-wide">
                  I'm Looking For
                </label>
                <select
                  value={lookingFor}
                  onChange={(e) => setLookingFor(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white"
                >
                  <option value="Bride">Bride (Female)</option>
                  <option value="Groom">Groom (Male)</option>
                </select>
              </div>

              <div className="text-left">
                <label className="block text-[9px] md:text-[11px] text-slate-400 font-semibold mb-1 uppercase tracking-wide">
                  Religion
                </label>
                <select
                  value={religion}
                  onChange={(e) => setReligion(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white"
                >
                  <option value="">Select Religion</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Christian">Christian</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Sikh">Sikh</option>
                </select>
              </div>

              <div className="text-left">
                <label className="block text-[9px] md:text-[11px] text-slate-400 font-semibold mb-1 uppercase tracking-wide">
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white"
                >
                  <option value="">Any Location</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kochi">Kochi</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>
              </div>

              <div className="text-left">
                <label className="block text-[9px] md:text-[11px] text-slate-400 font-semibold mb-1 uppercase tracking-wide">
                  Marital Status
                </label>
                <select
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white"
                >
                  <option value="">Any Status</option>
                  <option value="Never Married">Never Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>

            </div>

            {/* More Filters */}
            {showMore && (
              <div className="border-t border-slate-100 pt-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">

                  <div className="text-left">
                    <label className="block text-[9px] md:text-[11px] text-slate-400 font-semibold mb-1 uppercase tracking-wide">
                      Education
                    </label>
                    <select className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white">
                      <option value="">Any Education</option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="MBA">MBA</option>
                      <option value="Doctor">Doctor</option>
                    </select>
                  </div>

                  <div className="text-left">
                    <label className="block text-[9px] md:text-[11px] text-slate-400 font-semibold mb-1 uppercase tracking-wide">
                      Profession
                    </label>
                    <select className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white">
                      <option value="">Any Profession</option>
                      <option value="Software Engineer">Software Engineer</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Product Manager">Product Manager</option>
                      <option value="Manager">Manager</option>
                    </select>
                  </div>

                  <div className="text-left">
                    <label className="block text-[9px] md:text-[11px] text-slate-400 font-semibold mb-1 uppercase tracking-wide">
                      Age
                    </label>
                    <select
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white"
                    >
                      <option value="">Any Age</option>
                      <option value="18-25">18 - 25</option>
                      <option value="26-30">26 - 30</option>
                      <option value="31-35">31 - 35</option>
                      <option value="36-40">36 - 40</option>
                    </select>
                  </div>

                  <div className="text-left">
                    <label className="block text-[9px] md:text-[11px] text-slate-400 font-semibold mb-1 uppercase tracking-wide">
                      Height
                    </label>
                    <select
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white"
                    >
                      <option value="">Any Height</option>
                      <option value="150">5'0" & Above</option>
                      <option value="155">5'1" & Above</option>
                      <option value="160">5'3" & Above</option>
                      <option value="165">5'5" & Above</option>
                      <option value="170">5'7" & Above</option>
                      <option value="175">5'9" & Above</option>
                      <option value="180">5'11" & Above</option>
                    </select>
                  </div>

                  <div className="text-left">
                    <label className="block text-[9px] md:text-[11px] text-slate-400 font-semibold mb-1 uppercase tracking-wide">
                      Caste
                    </label>
                    <select
                      value={caste}
                      onChange={(e) => setCaste(e.target.value)}
                      className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white"
                    >
                      <option value="">Any Caste</option>
                      <option value="Brahmin">Brahmin</option>
                      <option value="Reddy">Reddy</option>
                    </select>
                  </div>

                  <div className="text-left">
                    <label className="block text-[9px] md:text-[11px] text-slate-400 font-semibold mb-1 uppercase tracking-wide">
                      Nakshatra
                    </label>
                    <select
                      value={nakshatra}
                      onChange={(e) => setNakshatra(e.target.value)}
                      className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white"
                    >
                      <option value="">Any Nakshatra</option>
                      <option value="Ashwini">Ashwini</option>
                      <option value="Bharani">Bharani</option>
                      <option value="Karthika">Karthika</option>
                      <option value="Rohini">Rohini</option>
                      <option value="Makayiram">Makayiram</option>
                      <option value="Thiruvathira">Thiruvathira</option>
                      <option value="Punartham">Punartham</option>
                      <option value="Pooyam">Pooyam</option>
                      <option value="Ayilyam">Ayilyam</option>
                    </select>
                  </div>

                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-between items-center pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowMore(!showMore)}
                className="text-deep-maroon font-semibold text-xs flex items-center gap-1"
              >
                {showMore ? 'Less Filters' : 'More Filters'}
                <span className="material-symbols-outlined text-[16px]">
                  {showMore ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                </span>
              </button>

              <button
                type="submit"
                className="bg-deep-maroon hover:bg-primary text-white font-semibold py-2 px-8 md:px-14 rounded-lg shadow text-xs uppercase tracking-wider"
              >
                Search
              </button>
            </div>

          </form>
        </div>
      </section>

      {/* Results Section */}
      <section className="pb-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto" ref={resultsRef}>
          {searched ? (
            <div>
              <div className="mb-4 md:mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                <h3 className="font-display-lg text-base md:text-xl text-charcoal-text">
                  Search Results <span className="text-deep-maroon font-bold">({results.length})</span>
                </h3>
                <p className="text-[10px] md:text-xs text-soft-gray">
                  Showing matches matching your filters
                </p>
              </div>

              {results.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                  {results.map((profile) => (
                    <ProfileCard key={profile.id} profile={profile} fullWidth />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-12 rounded-xl border border-slate-100 text-center">
                  <span className="material-symbols-outlined text-[48px] text-soft-gray/40 mb-3">person_search</span>
                  <h4 className="font-semibold text-charcoal-text mb-1">No matches found</h4>
                  <p className="text-xs text-soft-gray">Try adjusting your filters or search ID to find more partners.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-xl border border-slate-100 text-center shadow-sm">
              <span className="material-symbols-outlined text-[48px] text-deep-maroon/20 mb-3">manage_search</span>
              <h4 className="font-semibold text-charcoal-text mb-1">Ready to search</h4>
              <p className="text-xs text-soft-gray">Choose your criteria above and click the Search button to find your partner.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
