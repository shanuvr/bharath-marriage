import React, { useState } from 'react';

export default function MyProfileView() {
  const [profileData, setProfileData] = useState({
    name: 'Arjun Reddy',
    gender: 'Male',
    age: '30',
    height: "6'1\"",
    dob: '1996-05-15',
    motherTongue: 'Telugu',
    religion: 'Hindu',
    caste: 'Reddy',
    education: 'B.Tech + MS',
    profession: 'Hardware Engineer',
    income: '₹25,00,000 - ₹30,00,000 Per Annum',
    location: 'Austin, USA',
    nativePlace: 'Hyderabad, India',
    familyStatus: 'Upper Middle Class',
    familyValues: 'Traditional',
    aboutMe: 'I am a career-oriented, independent hardware engineer based in Austin. I appreciate balance in life, value family traditions, and enjoy hiking, cooking, and learning new technologies.',
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <section className="rounded-none md:rounded-xl border-none md:border md:border-slate-200/60 bg-transparent md:bg-white p-0 md:p-6 shadow-none md:shadow-sm text-left">
        <div className="mb-4 md:mb-6 border-b border-slate-100 pb-3 md:pb-4 flex justify-between items-center">
          <div>
            <h2 className="text-sm md:text-base font-bold text-charcoal-text uppercase tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-deep-maroon"></span>
              Edit Profile
            </h2>
            <p className="text-[10px] md:text-[11px] text-soft-gray mt-0.5">Keep your profile updated to receive higher match quality.</p>
          </div>
          {isSaved && (
            <div className="text-[10px] md:text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full flex items-center gap-1 animate-fade-in">
              <span className="material-symbols-outlined text-[12px] md:text-[13px]">check_circle</span>
              Changes Saved!
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* Section 1: About Me */}
          <div className="space-y-2">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-deep-maroon">About Me</h3>
            <textarea
              name="aboutMe"
              value={profileData.aboutMe}
              onChange={handleChange}
              rows={3}
              className="w-full border border-slate-200 rounded-lg p-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon placeholder-soft-gray/60 leading-relaxed"
              placeholder="Tell prospective matches about your personality, interests, and family..."
            />
          </div>

          <hr className="border-slate-100" />

          {/* Section 2: Personal Details */}
          <div className="space-y-3">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-deep-maroon">Personal Details</h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                  required
                />
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Gender</label>
                <select
                  name="gender"
                  value={profileData.gender}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Height</label>
                <input
                  type="text"
                  name="height"
                  value={profileData.height}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                  required
                />
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={profileData.dob}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                  required
                />
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Mother Tongue</label>
                <input
                  type="text"
                  name="motherTongue"
                  value={profileData.motherTongue}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                  required
                />
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Religion</label>
                <input
                  type="text"
                  name="religion"
                  value={profileData.religion}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                  required
                />
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Caste / Sub-Caste</label>
                <input
                  type="text"
                  name="caste"
                  value={profileData.caste}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                />
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section 3: Professional Info */}
          <div className="space-y-3">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-deep-maroon">Professional & Academic Details</h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Education Level</label>
                <input
                  type="text"
                  name="education"
                  value={profileData.education}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                  required
                />
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Occupation / Profession</label>
                <input
                  type="text"
                  name="profession"
                  value={profileData.profession}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                  required
                />
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Annual Income</label>
                <input
                  type="text"
                  name="income"
                  value={profileData.income}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Current Location</label>
                <input
                  type="text"
                  name="location"
                  value={profileData.location}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                  required
                />
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section 4: Family Details */}
          <div className="space-y-3">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-deep-maroon">Family details</h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Native Place</label>
                <input
                  type="text"
                  name="nativePlace"
                  value={profileData.nativePlace}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Family Status</label>
                <select
                  name="familyStatus"
                  value={profileData.familyStatus}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                >
                  <option value="Middle Class">Middle Class</option>
                  <option value="Upper Middle Class">Upper Middle Class</option>
                  <option value="Rich / Affluent">Rich / Affluent</option>
                </select>
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Family Values</label>
                <select
                  name="familyValues"
                  value={profileData.familyValues}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                >
                  <option value="Traditional">Traditional</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Liberal">Liberal</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-2 md:pt-4 text-right">
            <button
              type="submit"
              className="bg-deep-maroon hover:bg-primary text-white font-semibold py-2 px-4 md:py-2.5 md:px-6 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer text-[10px] md:text-xs uppercase tracking-wider"
            >
              Save Profile Changes
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
