import { useState } from 'react';
import { Link } from 'react-router-dom';

const recommendedProfiles = [
  {
    id: 1,
    name: 'Aishwarya R.',
    age: 26,
    height: "5'4\"",
    religion: 'Hindu - Nair',
    education: 'M.Tech',
    profession: 'Software Engineer',
    location: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400&h=500',
    verified: true,
    premium: true,
  },
  {
    id: 3,
    name: 'Meera Joseph',
    age: 25,
    height: "5'5\"",
    religion: 'Christian - Catholic',
    education: 'MD - Pediatrics',
    profession: 'Doctor',
    location: 'Kochi',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400&h=500',
    verified: true,
    premium: true,
  },
  {
    id: 7,
    name: 'Kavya Madhavan',
    age: 25,
    height: "5'3\"",
    religion: 'Hindu - Nair',
    education: 'BFA - Design',
    profession: 'UI/UX Designer',
    location: 'Ernakulam',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=500',
    verified: true,
    premium: false,
  },
  {
    id: 5,
    name: 'Neha Sharma',
    age: 27,
    height: "5'6\"",
    religion: 'Hindu - Brahmin',
    education: 'M.S. Data Science',
    profession: 'Data Scientist',
    location: 'Hyderabad',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500',
    verified: true,
    premium: true,
  },
];

const menuItems = [
  { icon: 'dashboard', label: 'My Home', active: true },
  { icon: 'account_circle', label: 'My Profile' },
  { icon: 'diversity_1', label: 'Partner Preferences' },
  { icon: 'photo_library', label: 'Manage Photos' },
  { icon: 'chat', label: 'Inbox Messages' },
  { icon: 'stars', label: 'Shortlists' },
  { icon: 'settings', label: 'Account Settings' },
];

function ProfileCard({ profile, compact = false, fullWidth = false }) {
  const imgHeightClass = fullWidth 
    ? 'h-[115px] sm:h-[180px]' 
    : (compact ? 'h-[120px] sm:h-[150px]' : 'h-[140px] sm:h-[180px]');

  return (
    <Link
      to={`/profile/${profile.id}`}
      className={`group shrink-0 block overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        fullWidth ? 'w-full' : (compact ? 'w-[190px]' : 'w-[240px]')
      }`}
    >
      {/* Profile Image */}
      <div className={`relative w-full overflow-hidden bg-slate-50 ${imgHeightClass}`}>
        <img 
          src={profile.image} 
          alt={profile.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        {profile.premium && (
          <span className="absolute right-2 top-2 rounded-full bg-heritage-gold/90 backdrop-blur-xs px-2 py-0.5 text-[8px] font-bold tracking-wider text-white border border-white/20">
            PREMIUM
          </span>
        )}
      </div>

      {/* Profile details */}
      <div className="p-2 sm:p-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-1.5 text-left">
          <h3 className="truncate text-xs font-bold text-charcoal-text flex items-center gap-1">
            <span className="truncate">{profile.name}</span>
            {profile.verified && (
              <span 
                className="material-symbols-outlined text-[13px] text-emerald-600 leading-none shrink-0"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
            )}
          </h3>
          <span className="shrink-0 text-[9px] sm:text-[10px] font-medium text-soft-gray">{profile.age} yrs • {profile.height}</span>
        </div>
        
        <p className="mt-0.5 truncate text-[10px] sm:text-[11px] font-semibold text-deep-maroon text-left">{profile.profession}</p>
        
        <div className="mt-2 pt-2 border-t border-slate-100 space-y-0.5 text-[9px] sm:text-[10px] text-soft-gray text-left">
          <p className="flex items-center gap-0.5 sm:gap-1">
            <span className="material-symbols-outlined text-[8px] sm:text-[11px] text-slate-400 leading-none">menu_book</span>
            <span className="truncate">{profile.religion}</span>
          </p>
          <p className="flex items-center gap-0.5 sm:gap-1">
            <span className="material-symbols-outlined text-[8px] sm:text-[11px] text-slate-400 leading-none">school</span>
            <span className="truncate">{profile.education}</span>
          </p>
          <p className="flex items-center gap-0.5 sm:gap-1">
            <span className="material-symbols-outlined text-[8px] sm:text-[11px] text-slate-400 leading-none">location_on</span>
            <span className="truncate">{profile.location}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState('My Home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbfaf9] via-rose-50/20 to-amber-50/10 text-charcoal-text pt-24 md:pt-28 pb-16">
      
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop w-full">
        
        {/* Dashboard Grid */}
        <div className="grid gap-6 md:grid-cols-[280px_1fr]">
          
          {/* LEFT COLUMN: Sidebar (Desktop only) */}
          <aside className="hidden md:flex flex-col gap-6 sticky top-24 self-start">
            
            {/* User Profile Mini-Details Card */}
            <div className="rounded-xl border border-slate-200/60 bg-white p-5 shadow-sm text-center">
              <div className="flex flex-col items-center">
                
                {/* Visual Profile Circular Ring */}
                <div className="relative mb-3 flex items-center justify-center">
                  {/* Rotating background ring representing 85% */}
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle 
                      cx="48" 
                      cy="48" 
                      r="42" 
                      className="text-slate-100" 
                      strokeWidth="6" 
                      fill="transparent" 
                      stroke="currentColor"
                    />
                    <circle 
                      cx="48" 
                      cy="48" 
                      r="42" 
                      className="text-deep-maroon" 
                      strokeWidth="6" 
                      fill="transparent" 
                      strokeDasharray="264" 
                      strokeDashoffset="39" // representing 85%
                      strokeLinecap="round"
                      stroke="currentColor"
                    />
                  </svg>
                  
                  {/* User Avatar Image inside the Ring */}
                  <div className="absolute w-[76px] h-[76px] rounded-full overflow-hidden border-2 border-white shadow-inner bg-slate-50">
                    <img
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120&h=120"
                      alt="Logged in user"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Percentage Badge */}
                  <span className="absolute -bottom-1 bg-heritage-gold text-white text-[9px] font-bold py-0.5 px-2.5 rounded-full shadow border border-white">
                    85%
                  </span>
                </div>

                <h2 className="text-base font-bold text-charcoal-text mt-2">Arjun Reddy</h2>
                <p className="text-[10px] font-semibold text-soft-gray uppercase tracking-wider">ID: BM1006</p>
                
                <div className="mt-4 w-full border-t border-slate-100 pt-3 flex justify-between items-center text-xs">
                  <span className="text-soft-gray font-medium">Profile Strength</span>
                  <Link to="/profile/5" className="font-bold text-deep-maroon hover:text-primary transition-colors flex items-center gap-0.5">
                    Edit Profile
                    <span className="material-symbols-outlined text-[14px]">edit</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Navigation Options */}
            <div className="rounded-xl border border-slate-200/60 bg-white p-3 shadow-sm">
              <nav className="space-y-1 text-left">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setActiveItem(item.label)}
                    className={`w-full flex items-center gap-3.5 px-4 py-2.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      activeItem === item.label
                        ? 'bg-deep-maroon/5 text-deep-maroon border-l-4 border-deep-maroon rounded-l-none'
                        : 'text-charcoal-text/80 hover:bg-slate-50 hover:text-deep-maroon'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px] leading-none">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Membership/Upgrade Box */}
            <div className="rounded-xl border border-slate-200/60 bg-gradient-to-br from-amber-50/50 to-orange-50/50 p-5 shadow-sm text-left relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-4 translate-y-4">
                <span className="material-symbols-outlined text-[120px] text-heritage-gold">stars</span>
              </div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="material-symbols-outlined text-[24px] text-heritage-gold">workspace_premium</span>
                <span className="text-xs font-bold text-heritage-gold uppercase tracking-wider">Premium Access</span>
              </div>
              <h4 className="text-sm font-bold text-charcoal-text">Upgrade Membership</h4>
              <p className="text-[10px] text-soft-gray leading-normal mt-1 mb-4">
                Unlock matching profiles, view direct phone numbers, initiate direct chat, and highlight your profile.
              </p>
              <button className="w-full bg-gradient-to-r from-deep-maroon to-primary hover:from-primary hover:to-deep-maroon text-white text-[10px] font-bold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 uppercase tracking-wider text-center cursor-pointer">
                Upgrade Now
              </button>
            </div>

          </aside>

          {/* RIGHT COLUMN: Main Dashboard Content */}
          <main className="min-w-0 flex flex-col gap-6 text-left">
            
            {/* Header Greeting Banner Card with Indian Heritage Look */}
            <section className="relative rounded-xl overflow-hidden bg-gradient-to-r from-deep-maroon to-primary p-5 text-white shadow-sm">
              {/* Overlay mandala background art with low opacity */}
              <div className="absolute inset-0 opacity-10 hero-pattern pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <span className="font-label-caps text-[9px] text-heritage-gold tracking-widest block mb-0.5 font-bold uppercase">
                    Namaste, Welcome Back
                  </span>
                  <h1 className="font-headline-lg text-xl text-white font-bold">
                    Arjun Reddy
                  </h1>
                </div>
                <p className="font-body-lg text-xs text-white/80 max-w-sm sm:text-right">
                  Let's continue your search for the perfect life partner.
                </p>
              </div>
            </section>



            {/* Daily Recommendations Section with Clock Timer */}
            <section className="rounded-xl border border-slate-200/60 bg-white p-5 shadow-sm">
              <div className="mb-5 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-base font-bold text-charcoal-text uppercase tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-deep-maroon"></span>
                    Daily Recommendations
                  </h2>

                </div>

              </div>

              {/* Horizontal Scroll wrapper */}
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hidden snap-x snap-mandatory">
                {recommendedProfiles.map((profile) => (
                  <div className="snap-start" key={profile.id}>
                    <ProfileCard profile={profile} compact />
                  </div>
                ))}
              </div>
            </section>

            {/* Top Matches Section */}
            <section className="rounded-xl border border-slate-200/60 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                <h2 className="text-base font-bold text-charcoal-text uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-heritage-gold"></span>
                  Top Matches matching Caste &amp; Education
                </h2>
                <Link to="/search" className="text-xs font-bold text-deep-maroon hover:text-primary transition-colors flex items-center gap-0.5">
                  View All Matches
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                </Link>
              </div>

              {/* Grid layout going down */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 pt-2">
                {recommendedProfiles.concat(recommendedProfiles.slice(0, 2)).map((profile, index) => (
                  <ProfileCard key={`${profile.id}-${index}`} profile={profile} fullWidth />
                ))}
              </div>
            </section>

            {/* Trust and Verification Banner */}
            <section className="bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl border border-slate-200/60 p-5 flex flex-col md:flex-row md:items-center gap-5 justify-between">
              <div className="flex gap-4 items-start text-left">
                <span className="material-symbols-outlined text-[36px] text-emerald-600 shrink-0">verified_user</span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-text">Shielded &amp; Secure Verification</h4>
                  <p className="text-[11px] text-soft-gray leading-relaxed mt-0.5">
                    Keep your matrimonial search completely safe. Profiles verified with government IDs get a <span className="font-semibold text-emerald-600">Verified Badge</span>, increasing connection rates by up to 2.5x.
                  </p>
                </div>
              </div>
              <button className="whitespace-nowrap border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-xs font-bold py-2 px-4 rounded-lg shadow-sm transition-all active:scale-95 cursor-pointer">
                Verify My Profile Now
              </button>
            </section>

          </main>
          
        </div>

      </div>

    </div>
  );
}
