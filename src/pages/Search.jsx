import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  const [ageMin, setAgeMin] = useState('18');
  const [ageMax, setAgeMax] = useState('60');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [searchId, setSearchId] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const genderParam = params.get('gender');
    const ageParam = params.get('age');
    const religionParam = params.get('religion');

    let isFiltered = false;

    if (genderParam) {
      setLookingFor(genderParam);
      isFiltered = true;
    }
    if (religionParam) {
      setReligion(religionParam);
      isFiltered = true;
    }
    if (ageParam) {
      const [min, max] = ageParam.split('-');
      if (min) setAgeMin(min);
      if (max) setAgeMax(max);
      isFiltered = true;
    }

    if (isFiltered) {
      setSearched(true);
      const filtered = searchProfiles.filter(p => {
        if (genderParam && p.gender !== genderParam) return false;
        if (religionParam && p.religion !== religionParam) return false;
        if (ageParam) {
          const [min, max] = ageParam.split('-');
          if (p.age < parseInt(min) || p.age > parseInt(max)) return false;
        }
        return true;
      });
      setResults(filtered);
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
      // Age Match
      if (p.age < parseInt(ageMin) || p.age > parseInt(ageMax)) return false;
      // Height Match
      if (p.heightCm < parseInt(heightMin) || p.heightCm > parseInt(heightMax)) return false;

      return true;
    });

    setResults(filtered);
  };

  return (
    <div className="w-full flex flex-col pt-16 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="relative bg-gradient-to-r from-primary via-deep-maroon to-primary py-12 md:py-16 text-white text-center px-margin-mobile md:px-margin-desktop overflow-hidden">
        {/* Subtle Background Graphics */}
        <div className="absolute inset-0 opacity-10 hero-pattern pointer-events-none"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="max-w-container-max mx-auto relative z-10 w-full">
          {/* Back Navigation */}
          <div className="absolute left-0 top-0">
            <Link to="/" className="text-white/80 hover:text-white flex items-center gap-1 font-semibold text-xs transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
              Back
            </Link>
          </div>

          <h1 className="font-display-lg text-3xl md:text-4xl text-white mb-2 leading-tight uppercase tracking-wide">
            Search Your Partner Here
          </h1>
          <p className="font-body-lg text-xs md:text-sm text-white/80 mb-6">
            Find your perfect partner from 5 Lakh+ profiles
          </p>

          {/* Search by ID Input Bar */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto relative px-2">
            <input 
              type="text" 
              placeholder="Search by ID" 
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="w-full bg-white rounded-full py-2.5 px-5 pr-14 text-[13px] font-body-sm text-charcoal-text placeholder-soft-gray/60 focus:outline-none shadow-md border border-slate-100"
            />
            <button 
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-deep-maroon text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer shadow hover:bg-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-white">search</span>
            </button>
          </form>
        </div>
      </section>

      {/* Main Filter Section */}
      <section className="py-10 relative z-10 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-md border border-slate-100">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Looking For */}
              <div className="text-left">
                <label className="block text-[11px] text-slate-400 font-semibold mb-1.5 uppercase tracking-wide">I'm looking for a</label>
                <select 
                  value={lookingFor}
                  onChange={(e) => setLookingFor(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon cursor-pointer font-medium"
                >
                  <option value="Bride">Bride (Female)</option>
                  <option value="Groom">Groom (Male)</option>
                </select>
              </div>

              {/* Religion */}
              <div className="text-left">
                <label className="block text-[11px] text-slate-400 font-semibold mb-1.5 uppercase tracking-wide">Religion</label>
                <select 
                  value={religion}
                  onChange={(e) => setReligion(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon cursor-pointer font-medium"
                >
                  <option value="">Select Religion</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Christian">Christian</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Sikh">Sikh</option>
                </select>
              </div>

              {/* Caste */}
              <div className="text-left">
                <label className="block text-[11px] text-slate-400 font-semibold mb-1.5 uppercase tracking-wide">Caste</label>
                <select 
                  value={caste}
                  onChange={(e) => setCaste(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon cursor-pointer font-medium"
                >
                  <option value="Open to all">Selected (0)</option>
                  <option value="Brahmin">Brahmin</option>
                  <option value="Reddy">Reddy</option>
                  <option value="Open to all">Open to all</option>
                </select>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Location */}
<div className="text-left">
  <label className="block text-[11px] text-slate-400 font-semibold mb-1.5 uppercase tracking-wide">
    Location
  </label>

  <select
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon cursor-pointer font-medium"
  >
    <option value="">Any Location</option>
    <option value="Bangalore">Bangalore</option>
    <option value="Chennai">Chennai</option>
    <option value="Kochi">Kochi</option>
    <option value="Delhi">Delhi</option>
    <option value="Hyderabad">Hyderabad</option>
  </select>
</div>

              {/* Age Between */}
              <div className="text-left">
                <label className="block text-[11px] text-slate-400 font-semibold mb-1.5 uppercase tracking-wide">Age Between (Years)</label>
                <div className="flex items-center gap-2">
                  <select 
                    value={ageMin}
                    onChange={(e) => setAgeMin(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg py-2 px-2.5 text-xs bg-white text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon cursor-pointer font-medium"
                  >
                    <option value="18">18</option>
                    <option value="21">21</option>
                    <option value="25">25</option>
                    <option value="28">28</option>
                  </select>
                  <span className="text-slate-400 text-xs shrink-0 font-medium">To</span>
                  <select 
                    value={ageMax}
                    onChange={(e) => setAgeMax(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg py-2 px-2.5 text-xs bg-white text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon cursor-pointer font-medium"
                  >
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="60">60</option>
                  </select>
                </div>
              </div>

              {/* Marital Status */}
<div className="text-left">
  <label className="block text-[11px] text-slate-400 font-semibold mb-1.5 uppercase tracking-wide">
    Marital Status
  </label>

  <select
    value={maritalStatus}
    onChange={(e) => setMaritalStatus(e.target.value)}
    className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon cursor-pointer font-medium"
  >
    <option value="">Any Status</option>
    <option value="Never Married">Never Married</option>
    <option value="Divorced">Divorced</option>
    <option value="Widowed">Widowed</option>
  </select>
</div>

            </div>

            {/* Expandable More Filters */}
            {showMore && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100 fade-in">
                {/* Location */}
                <div className="text-left">
                  <label className="block text-[11px] text-slate-400 font-semibold mb-1.5 uppercase tracking-wide">Location</label>
                  <select className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon cursor-pointer font-medium">
                    <option value="">Any Location</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kochi">Kochi</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>

                {/* Education */}
                <div className="text-left">
                  <label className="block text-[11px] text-slate-400 font-semibold mb-1.5 uppercase tracking-wide">Education</label>
                  <select className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon cursor-pointer font-medium">
                    <option value="">Any Education</option>
                    <option value="B.Tech">B.Tech / B.E</option>
                    <option value="M.Tech">M.Tech / M.E</option>
                    <option value="MBA">MBA / PGDM</option>
                    <option value="Doctor">Doctor / MD</option>
                  </select>
                </div>

                {/* Profession */}
                <div className="text-left">
                  <label className="block text-[11px] text-slate-400 font-semibold mb-1.5 uppercase tracking-wide">Profession</label>
                  <select className="w-full border border-slate-200 rounded-lg py-2 px-3 text-xs bg-white text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon cursor-pointer font-medium">
                    <option value="">Any Profession</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>
              </div>
            )}

            <div className="flex flex-col items-center gap-4 pt-4">
              <button 
                type="button" 
                onClick={() => setShowMore(!showMore)}
                className="text-deep-maroon hover:text-primary font-semibold text-xs flex items-center gap-1 cursor-pointer transition-colors"
              >
                {showMore ? 'Less Filters' : 'More Filters'}
                <span className="material-symbols-outlined text-[16px]">
                  {showMore ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                </span>
              </button>

              <button 
                type="submit"
                className="bg-deep-maroon hover:bg-primary text-white font-semibold py-2.5 px-14 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer text-xs uppercase tracking-wider"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Results Section */}
      <section className="pb-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto">
          {searched ? (
            <div>
              <div className="mb-6 flex justify-between items-center">
                <h3 className="font-display-lg text-xl text-charcoal-text">
                  Search Results <span className="text-deep-maroon font-bold">({results.length})</span>
                </h3>
                <p className="text-xs text-soft-gray">
                  Showing matches matching your filters
                </p>
              </div>

              {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                  {results.map((profile) => (
                    <div 
                      key={profile.id}
                      className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group"
                    >
                      {/* Image Section */}
                      <div className="relative h-[200px] w-full overflow-hidden bg-slate-50 shrink-0">
                        <img 
                          src={profile.image} 
                          alt={profile.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {profile.premium && (
                          <span className="absolute top-3 right-3 bg-heritage-gold/90 backdrop-blur-xs text-white text-[9px] font-label-caps font-semibold py-0.5 px-2 rounded-full border border-heritage-gold/25 tracking-wider">
                            PREMIUM
                          </span>
                        )}

                        <span className="absolute bottom-3 left-3 bg-black/55 backdrop-blur-xs text-white text-[9px] font-semibold py-0.5 px-2 rounded">
                          ID: {profile.id}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="p-4 flex flex-col flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-semibold text-charcoal-text text-sm flex items-center gap-1">
                            {profile.name}
                            {profile.verified && (
                              <span 
                                className="material-symbols-outlined text-[14px] text-emerald-600 leading-none" 
                                title="Verified Profile"
                              >
                                verified
                              </span>
                            )}
                            <span className="font-normal text-charcoal-text/80">, {profile.age}</span>
                          </h4>
                          <span className="text-[10px] text-soft-gray font-medium">
                            {profile.height}
                          </span>
                        </div>

                        <p className="text-xs text-deep-maroon font-semibold mb-3">
                          {profile.profession}
                        </p>

                        <div className="space-y-1 text-[11px] text-soft-gray flex-1 mb-4">
                          <p className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[13px] text-soft-gray/60 leading-none">menu_book</span>
                            {profile.religion} - {profile.caste}
                          </p>
                          <p className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[13px] text-soft-gray/60 leading-none">school</span>
                            {profile.education}
                          </p>
                          <p className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[13px] text-soft-gray/60 leading-none">location_on</span>
                            {profile.location}
                          </p>
                        </div>

                        <button className="w-full py-2 bg-deep-maroon hover:bg-primary text-white font-semibold rounded-lg flex items-center justify-center gap-1.5 active:scale-95 transition-all text-xs cursor-pointer shadow-sm">
                          <span className="material-symbols-outlined text-[14px] text-white">favorite</span>
                          Connect Now
                        </button>
                      </div>
                    </div>
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
