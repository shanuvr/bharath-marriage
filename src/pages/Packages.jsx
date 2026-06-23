import React from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

function Packages() {
  const navigate = useNavigate();

  const handleRegisterClick = (e) => {
    e.preventDefault();
    navigate('/#register');
  };

  return (
    <div className="bg-gradient-to-br from-[#fbfaf9] via-rose-50/20 to-amber-50/10 min-h-screen pt-20 md:pt-24 pb-16 px-margin-mobile md:px-margin-desktop">
      <Helmet>
        <title>Matrimony Packages & Membership Plans | Bharath Marriage</title>
        <meta
          name="description"
          content="Explore affordable matrimony packages and membership plans to connect with verified bride and groom profiles across Kerala."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[9px] md:text-[11px] font-label-caps font-semibold text-deep-maroon tracking-[0.18em] uppercase mb-1.5 md:mb-2">
            Membership
          </p>
          <h1 className="font-display-lg text-2xl md:text-[34px] text-charcoal-text font-bold tracking-tight leading-tight">
            Choose Your Plan
          </h1>
          <p className="text-soft-gray text-xs md:text-sm mt-2.5 max-w-md mx-auto leading-relaxed">
            Select the best package to connect with verified matches and find your perfect life partner.
          </p>
        </div>

        {/* Plan Comparison Table Card */}
        <div className="bg-white border border-slate-200/60 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[780px] border-collapse text-center">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/40">
                  <th className="py-6 px-5 text-left font-semibold text-[11px] md:text-xs text-soft-gray uppercase tracking-wider w-[20%]">
                    Features
                  </th>
                  <th className="py-6 px-5 border-l border-slate-100 w-[16%]">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Standard</span>
                    <span className="text-xl md:text-2xl font-black text-slate-500 mt-1 block">Free</span>
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mt-1">LIFETIME</span>
                    <span className="text-[8px] font-medium text-slate-400 uppercase tracking-wide block">FREE PLAN</span>
                  </th>
                  <th className="py-6 px-5 border-l border-slate-100 w-[16%] bg-slate-50/10">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Silver</span>
                    <span className="text-xl md:text-2xl font-black text-deep-maroon/80 mt-1 block">₹400</span>
                    <span className="text-[8px] font-bold text-emerald-600 uppercase tracking-widest block mt-1">20% OFF</span>
                    <span className="text-[8px] font-medium text-slate-400 uppercase tracking-wide block">MONTHLY</span>
                  </th>
                  <th className="py-6 px-5 border-l border-slate-100 w-[16%]">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Gold</span>
                    <span className="text-xl md:text-2xl font-black text-deep-maroon mt-1 block">₹600</span>
                    <span className="text-[8px] font-bold text-emerald-600 uppercase tracking-widest block mt-1">15% OFF</span>
                    <span className="text-[8px] font-medium text-slate-400 uppercase tracking-wide block">MONTHLY</span>
                  </th>
                  <th className="py-6 px-5 border-l border-slate-100 w-[16%] bg-rose-50/5 relative">
                    <div className="absolute -top-px left-0 right-0 h-1 bg-deep-maroon"></div>
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-deep-maroon text-white text-[7px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Popular
                    </span>
                    <span className="text-[10px] font-bold text-deep-maroon uppercase tracking-wider block mt-1">Platinum</span>
                    <span className="text-xl md:text-2xl font-black text-deep-maroon mt-1 block">₹800</span>
                    <span className="text-[8px] font-bold text-emerald-600 uppercase tracking-widest block mt-1">10% OFF</span>
                    <span className="text-[8px] font-medium text-slate-400 uppercase tracking-wide block">MONTHLY</span>
                  </th>
                  <th className="py-6 px-5 border-l border-slate-100 w-[16%] relative bg-amber-50/5">
                    <div className="absolute -top-px left-0 right-0 h-1 bg-heritage-gold"></div>
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-heritage-gold text-white text-[7px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Elite
                    </span>
                    <span className="text-[10px] font-bold text-heritage-gold uppercase tracking-wider block mt-1">Diamond</span>
                    <span className="text-xl md:text-2xl font-black text-heritage-gold mt-1 block">₹1000</span>
                    <span className="text-[8px] font-bold text-emerald-600 uppercase tracking-widest block mt-1">5% OFF</span>
                    <span className="text-[8px] font-medium text-slate-400 uppercase tracking-wide block">MONTHLY</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Feature 1: Profile Listing */}
                <tr className="border-b border-slate-100 hover:bg-slate-50/30 transition-colors">
                  <td className="py-4.5 px-5 text-left font-semibold text-xs md:text-sm text-slate-700">
                    Profile Listing
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100">
                    <span className="material-symbols-outlined text-emerald-600 font-semibold" style={{ fontSize: '18px' }}>check_circle</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100 bg-slate-50/10">
                    <span className="material-symbols-outlined text-emerald-600 font-semibold" style={{ fontSize: '18px' }}>check_circle</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100">
                    <span className="material-symbols-outlined text-emerald-600 font-semibold" style={{ fontSize: '18px' }}>check_circle</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100 bg-rose-50/5">
                    <span className="material-symbols-outlined text-emerald-600 font-semibold" style={{ fontSize: '18px' }}>check_circle</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100 bg-amber-50/5">
                    <span className="material-symbols-outlined text-emerald-600 font-semibold" style={{ fontSize: '18px' }}>check_circle</span>
                  </td>
                </tr>

                {/* Feature 2: View Photos & Horoscopes */}
                <tr className="border-b border-slate-100 hover:bg-slate-50/30 transition-colors">
                  <td className="py-4.5 px-5 text-left font-semibold text-xs md:text-sm text-slate-700">
                    View Photos & Horoscopes
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100">
                    <span className="material-symbols-outlined text-slate-300" style={{ fontSize: '18px' }}>cancel</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100 bg-slate-50/10">
                    <span className="material-symbols-outlined text-emerald-600 font-semibold" style={{ fontSize: '18px' }}>check_circle</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100">
                    <span className="material-symbols-outlined text-emerald-600 font-semibold" style={{ fontSize: '18px' }}>check_circle</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100 bg-rose-50/5">
                    <span className="material-symbols-outlined text-emerald-600 font-semibold" style={{ fontSize: '18px' }}>check_circle</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100 bg-amber-50/5">
                    <span className="material-symbols-outlined text-emerald-600 font-semibold" style={{ fontSize: '18px' }}>check_circle</span>
                  </td>
                </tr>

                {/* Feature 3: Direct Chat & Messaging */}
                <tr className="border-b border-slate-100 hover:bg-slate-50/30 transition-colors">
                  <td className="py-4.5 px-5 text-left font-semibold text-xs md:text-sm text-slate-700">
                    Direct Chat & Messaging
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100">
                    <span className="material-symbols-outlined text-slate-300" style={{ fontSize: '18px' }}>cancel</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100 bg-slate-50/10">
                    <span className="material-symbols-outlined text-slate-300" style={{ fontSize: '18px' }}>cancel</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100">
                    <span className="material-symbols-outlined text-emerald-600 font-semibold" style={{ fontSize: '18px' }}>check_circle</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100 bg-rose-50/5">
                    <span className="material-symbols-outlined text-emerald-600 font-semibold" style={{ fontSize: '18px' }}>check_circle</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100 bg-amber-50/5">
                    <span className="material-symbols-outlined text-emerald-600 font-semibold" style={{ fontSize: '18px' }}>check_circle</span>
                  </td>
                </tr>

                {/* Feature 4: View Contact Details */}
                <tr className="border-b border-slate-100 hover:bg-slate-50/30 transition-colors">
                  <td className="py-4.5 px-5 text-left font-semibold text-xs md:text-sm text-slate-700">
                    View Contact Details
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100">
                    <span className="material-symbols-outlined text-slate-300" style={{ fontSize: '18px' }}>cancel</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100 bg-slate-50/10">
                    <span className="material-symbols-outlined text-slate-300" style={{ fontSize: '18px' }}>cancel</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100">
                    <span className="material-symbols-outlined text-slate-300" style={{ fontSize: '18px' }}>cancel</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100 bg-rose-50/5">
                    <span className="material-symbols-outlined text-emerald-600 font-semibold" style={{ fontSize: '18px' }}>check_circle</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100 bg-amber-50/5">
                    <span className="material-symbols-outlined text-emerald-600 font-semibold" style={{ fontSize: '18px' }}>check_circle</span>
                  </td>
                </tr>

                {/* Feature 5: Relationship Manager */}
                <tr className="border-b border-slate-100 hover:bg-slate-50/30 transition-colors">
                  <td className="py-4.5 px-5 text-left font-semibold text-xs md:text-sm text-slate-700">
                    Relationship Manager
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100">
                    <span className="material-symbols-outlined text-slate-300" style={{ fontSize: '18px' }}>cancel</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100 bg-slate-50/10">
                    <span className="material-symbols-outlined text-slate-300" style={{ fontSize: '18px' }}>cancel</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100">
                    <span className="material-symbols-outlined text-slate-300" style={{ fontSize: '18px' }}>cancel</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100 bg-rose-50/5">
                    <span className="material-symbols-outlined text-slate-300" style={{ fontSize: '18px' }}>cancel</span>
                  </td>
                  <td className="py-4.5 px-5 border-l border-slate-100 bg-amber-50/5">
                    <span className="material-symbols-outlined text-emerald-600 font-semibold" style={{ fontSize: '18px' }}>check_circle</span>
                  </td>
                </tr>

                {/* Action Row */}
                <tr className="bg-slate-50/10">
                  <td className="py-6 px-5 text-left font-bold text-xs md:text-sm text-slate-400 uppercase tracking-wide">
                    Action
                  </td>
                  <td className="py-6 px-4 border-l border-slate-100">
                    <button
                      onClick={handleRegisterClick}
                      className="border border-deep-maroon hover:bg-deep-maroon/5 text-deep-maroon font-bold text-[11px] md:text-xs py-2 px-3 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer w-full text-center"
                    >
                      Register
                    </button>
                  </td>
                  <td className="py-6 px-4 border-l border-slate-100 bg-slate-50/10">
                    <button
                      onClick={handleRegisterClick}
                      className="border border-deep-maroon hover:bg-deep-maroon/5 text-deep-maroon font-bold text-[11px] md:text-xs py-2 px-3 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer w-full text-center"
                    >
                      Register
                    </button>
                  </td>
                  <td className="py-6 px-4 border-l border-slate-100">
                    <button
                      onClick={handleRegisterClick}
                      className="border border-deep-maroon hover:bg-deep-maroon/5 text-deep-maroon font-bold text-[11px] md:text-xs py-2 px-3 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer w-full text-center"
                    >
                      Register
                    </button>
                  </td>
                  <td className="py-6 px-4 border-l border-slate-100 bg-rose-50/5">
                    <button
                      onClick={handleRegisterClick}
                      className="bg-deep-maroon hover:bg-primary text-white font-bold text-[11px] md:text-xs py-2 px-3 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer w-full text-center"
                    >
                      Register
                    </button>
                  </td>
                  <td className="py-6 px-4 border-l border-slate-100 bg-amber-50/5">
                    <button
                      onClick={handleRegisterClick}
                      className="bg-heritage-gold hover:bg-amber-600 text-white font-bold text-[11px] md:text-xs py-2 px-3 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer w-full text-center"
                    >
                      Register
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center text-soft-gray text-[10px] md:text-[11px] mt-6 max-w-md mx-auto leading-relaxed">
          All packages include profile verification review. Cancel or modify your plan at any time.
        </p>
      </div>
    </div>
  );
}

export default Packages;