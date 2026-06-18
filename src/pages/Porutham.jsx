import React from 'react';

export default function Porutham() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbfaf9] via-rose-50/10 to-amber-50/5 text-charcoal-text pt-24 md:pt-28 pb-16 flex items-center justify-center fade-in">
      <div className="text-center max-w-md px-margin-mobile">
        <span className="material-symbols-outlined text-[64px] text-heritage-gold mb-4">astrology</span>
        <h1 className="font-headline-lg text-2xl md:text-3xl text-charcoal-text mb-2">Porutham Horoscope</h1>
        <p className="text-xs text-soft-gray leading-relaxed mb-6">
          Vedic star compatibility and horoscope matching is currently under design. Check back soon for detailed Porutham reports.
        </p>
        <a href="/" className="inline-flex items-center gap-1.5 bg-deep-maroon hover:bg-primary text-white text-xs font-semibold py-2 px-5 rounded-lg shadow transition-all active:scale-95">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Back to Home
        </a>
      </div>
    </div>
  );
}
