import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfileCard({ profile, compact = false, fullWidth = false }) {
  return (
    <Link
      to={`/profile/${profile.id}`}
      className={`group shrink-0 block overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        fullWidth ? 'w-full' : (compact ? 'w-[145px] sm:w-[190px]' : 'w-[200px] sm:w-[240px]')
      }`}
    >
      {/* Profile Image */}
      <div className="relative w-full aspect-[5/4] overflow-hidden bg-slate-50">
        <img
          src={profile.image}
          alt={profile.name}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Tiled watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute overflow-hidden"
          style={{
            inset: '-100%',
            transform: 'rotate(-30deg)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '6px',
            padding: '8px',
          }}
        >
          {Array(20).fill(null).map((_, i) => (
            <span
              key={i}
              style={{
                fontSize: '9px',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.15)',
                letterSpacing: '0.08em',
                whiteSpace: 'nowrap',
                padding: '12px 0',
                textShadow: '0 1px 2px rgba(0,0,0,0.15)',
              }}
            >
              Bharath Marriage
            </span>
          ))}
        </div>

      
{/* Corner logo */}
<div className="absolute bottom-2 left-2 pointer-events-none select-none">
  <img
    src="/logo.png"
    alt="Bharath Marriage"
    className="h-7 w-auto opacity-70"
    style={{ filter: 'brightness(0) invert(1)' }}
  />
</div>

        {profile.premium && (
          <span className="absolute right-2 top-2 rounded-full bg-heritage-gold/90 backdrop-blur-xs px-2 py-0.5 text-[8px] font-bold tracking-wider text-white border border-white/20">
            PREMIUM
          </span>
        )}
      </div>

      {/* Profile Details */}
      <div className="p-2 sm:p-3">
        <div className="flex items-center justify-between gap-1 text-left">
          <h3 className="truncate text-xs font-bold text-charcoal-text flex items-center gap-1">
            <span className="truncate">{profile.name}</span>
            {profile.verified && (
              <span
                className="material-symbols-outlined leading-none text-emerald-600 shrink-0"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: '12px', width: '12px', height: '12px' }}
              >
                verified
              </span>
            )}
          </h3>
          <span className="shrink-0 text-[9px] sm:text-[10px] font-medium text-soft-gray">
            {profile.age} &middot; {profile.height}
          </span>
        </div>

        <p className="mt-0.5 truncate text-[10px] sm:text-[11px] font-semibold text-deep-maroon text-left">
          {profile.profession}
        </p>

        <div className="mt-1.5 text-[9px] sm:text-[10px] text-soft-gray text-left">
          <p className="flex items-center gap-1 truncate">
            <span
              className="material-symbols-outlined leading-none text-slate-400 shrink-0"
              style={{ fontSize: '10px', width: '10px', height: '10px' }}
            >
              school
            </span>
            <span className="truncate">{profile.education}</span>
          </p>
          <p className="flex items-center gap-1 truncate mt-0.5">
            <span
              className="material-symbols-outlined leading-none text-slate-400 shrink-0"
              style={{ fontSize: '10px', width: '10px', height: '10px' }}
            >
              location_on
            </span>
            <span className="truncate">{profile.religion} &middot; {profile.location}</span>
          </p>
        </div>

        {(profile.memberSince || profile.lastUpdated) && (
          <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between gap-1 text-[8px] sm:text-[9px] text-slate-400">
            {profile.memberSince && (
              <span className="truncate">Member since {profile.memberSince}</span>
            )}
            {profile.lastUpdated && (
              <span className="truncate shrink-0">Updated {profile.lastUpdated}</span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}