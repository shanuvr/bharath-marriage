import React from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from '../ProfileCard';

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

export default function MyHomeView() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full">
      {/* Header Greeting Banner Card with Indian Heritage Look */}
      <section className="relative rounded-none md:rounded-xl overflow-hidden bg-gradient-to-r from-deep-maroon to-primary p-3.5 md:p-5 text-white shadow-none md:shadow-sm shrink-0">
        <div className="absolute inset-0 opacity-10 hero-pattern pointer-events-none"></div>
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3">
          <div>
            <span className="font-label-caps text-[8px] sm:text-[9px] text-heritage-gold tracking-widest block mb-0.5 font-bold uppercase">
              Namaste, Welcome Back
            </span>
            <h1 className="font-headline-lg text-base sm:text-xl text-white font-bold">
              Arjun Reddy
            </h1>
          </div>
          <p className="font-body-lg text-[10px] sm:text-xs text-white/80 max-w-sm sm:text-right">
            Let's continue your search for the perfect life partner.
          </p>
        </div>
      </section>

      {/* Daily Recommendations Section with Clock Timer */}
      <section className="rounded-none md:rounded-xl border-none md:border md:border-slate-200/60 bg-transparent md:bg-white p-0 md:p-5 shadow-none md:shadow-sm">
        <div className="mb-4 md:mb-5 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-3 md:pb-4">
          <h2 className="text-xs sm:text-sm md:text-base font-bold text-charcoal-text uppercase tracking-wide flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-deep-maroon"></span>
            Daily Recommendations
          </h2>
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
      <section className="rounded-none md:rounded-xl border-none md:border md:border-slate-200/60 bg-transparent md:bg-white p-0 md:p-5 shadow-none md:shadow-sm">
        <div className="mb-4 md:mb-5 flex items-center justify-between border-b border-slate-100 pb-3 md:pb-4">
          <h2 className="text-xs sm:text-sm md:text-base font-bold text-charcoal-text uppercase tracking-wide flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold"></span>
            Top Matches
          </h2>
          <Link to="/search" className="text-[10px] sm:text-xs font-bold text-deep-maroon hover:text-primary transition-colors flex items-center gap-0.5">
            View All
            <span className="material-symbols-outlined text-[12px] sm:text-[14px]">chevron_right</span>
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
      <section className="bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-none md:rounded-xl border-none md:border md:border-slate-200/60 p-4 md:p-5 shadow-none md:shadow-sm flex flex-col md:flex-row md:items-center gap-5 justify-between">
        <div className="flex gap-4 items-start text-left">
          <span className="material-symbols-outlined text-[30px] md:text-[36px] text-emerald-600 shrink-0">verified_user</span>
          <div>
            <h4 className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-charcoal-text">Shielded &amp; Secure Verification</h4>
            <p className="text-[10px] md:text-[11px] text-soft-gray leading-relaxed mt-0.5">
              Keep your matrimonial search completely safe. Profiles verified with government IDs get a <span className="font-semibold text-emerald-600">Verified Badge</span>, increasing connection rates by up to 2.5x.
            </p>
          </div>
        </div>
        <button className="whitespace-nowrap border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-[10px] md:text-xs font-bold py-2 px-4 rounded-lg shadow-sm transition-all active:scale-95 cursor-pointer self-start md:self-auto">
          Verify My Profile
        </button>
      </section>
    </div>
  );
}
