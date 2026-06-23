import React, { useState } from 'react';
import HoroscopeChartsProfile from '../HoroscopeChartsProfile';

export default function MyProfileView() {
  const [profileData, setProfileData] = useState({
    name: 'aishwaraya',
    gender: 'Female',
    age: '25',
    maritalStatus: 'Unmarried',
    height: '5ft 6in',
    profileCreatedFor: 'Myself',
    education: 'B.Tech + MS',
    profession: 'Hardware Engineer',
    country: 'India',
    state: 'Kerala',
    district: 'Thrissur',
    city: 'mannuthy',
    birthTime: '',
    janmaSistaDasa: '',
    endDasa: '',
    dobMalayalam: '',
    dobEnglish: '',
    starRasi: '',
    fathersName: 'murali',
    fathersJob: 'accoutantant',
    mothersName: 'rekha',
    mothersJob: 'housewifw',
    siblingDetails: 'one brother working as accountant',
    aboutMe: 'I am a career-oriented, independent hardware engineer based in Austin. I appreciate balance in life, value family traditions, and enjoy hiking, cooking, and learning new technologies.',
  });

  const [isSaved, setIsSaved] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setIsEditing(false);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <section className="rounded-none md:rounded-xl border-none md:border md:border-slate-200/60 bg-transparent md:bg-white p-0 md:p-6 shadow-none md:shadow-sm text-left">
        <div className="mb-4 md:mb-6 border-b border-slate-100 pb-3 md:pb-4 flex justify-between items-center">
          <div>
            <h2 className="text-sm md:text-base font-bold text-charcoal-text uppercase tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-deep-maroon"></span>
              My Profile
            </h2>
            <p className="text-[10px] md:text-[11px] text-soft-gray mt-0.5">Keep your profile updated to receive higher match quality.</p>
          </div>
          <div className="flex items-center gap-3">
            {isSaved && (
              <div className="text-[10px] md:text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full flex items-center gap-1 animate-fade-in">
                <span className="material-symbols-outlined text-[12px] md:text-[13px]">check_circle</span>
                Saved!
              </div>
            )}
            {!isEditing && (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="bg-slate-100 hover:bg-slate-200 text-charcoal-text font-semibold py-1.5 px-3 md:py-2 md:px-4 rounded-lg shadow-sm transition-all cursor-pointer text-[10px] md:text-xs uppercase tracking-wider flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[14px]">edit</span>
                Edit Profile
              </button>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* Section 1: About Me */}
          <div className="space-y-2">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-deep-maroon">About Me</h3>
            <textarea
              name="aboutMe"
              value={profileData.aboutMe}
              onChange={handleChange} disabled={!isEditing}
              rows={3}
              className="w-full border border-slate-200 rounded-lg p-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon placeholder-soft-gray/60 leading-relaxed"
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
                  onChange={handleChange} disabled={!isEditing}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                  required
                />
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Gender</label>
                <select
                  name="gender"
                  value={profileData.gender}
                  onChange={handleChange} disabled={!isEditing}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon"
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
                  onChange={handleChange} disabled={!isEditing}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                  required
                />
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Age</label>
                <input
                  type="text"
                  name="age"
                  value={profileData.age}
                  onChange={handleChange} disabled={!isEditing}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                  required
                />
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Marital Status</label>
                <select
                  name="maritalStatus"
                  value={profileData.maritalStatus}
                  onChange={handleChange} disabled={!isEditing}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                >
                  <option value="Unmarried">Unmarried</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Separated">Separated</option>
                </select>
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Profile Created For</label>
                <select
                  name="profileCreatedFor"
                  value={profileData.profileCreatedFor}
                  onChange={handleChange} disabled={!isEditing}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                >
                  <option value="Myself">Myself</option>
                  <option value="Son">Son</option>
                  <option value="Daughter">Daughter</option>
                  <option value="Brother">Brother</option>
                  <option value="Sister">Sister</option>
                  <option value="Relative">Relative</option>
                  <option value="Friend">Friend</option>
                </select>
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
                  onChange={handleChange} disabled={!isEditing}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                  required
                />
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Occupation / Profession</label>
                <input
                  type="text"
                  name="profession"
                  value={profileData.profession}
                  onChange={handleChange} disabled={!isEditing}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                  required
                />
              </div>

            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Location Details */}
          <div className="space-y-3">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-deep-maroon">Location Details</h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Country</label>
                <input
                  type="text"
                  name="country"
                  value={profileData.country}
                  onChange={handleChange} disabled={!isEditing}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">State</label>
                <input
                  type="text"
                  name="state"
                  value={profileData.state}
                  onChange={handleChange} disabled={!isEditing}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">District</label>
                <input
                  type="text"
                  name="district"
                  value={profileData.district}
                  onChange={handleChange} disabled={!isEditing}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">City</label>
                <input
                  type="text"
                  name="city"
                  value={profileData.city}
                  onChange={handleChange} disabled={!isEditing}
                  className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon"
                />
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

         

          {/* Section: Family Details */}
          <div className="space-y-3">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-deep-maroon">Family details</h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Father's Name</label>
                <input type="text" name="fathersName" value={profileData.fathersName} onChange={handleChange} disabled={!isEditing} className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon" />
              </div>
              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Father's Job</label>
                <input type="text" name="fathersJob" value={profileData.fathersJob} onChange={handleChange} disabled={!isEditing} className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon" />
              </div>
              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Mother's Name</label>
                <input type="text" name="mothersName" value={profileData.mothersName} onChange={handleChange} disabled={!isEditing} className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon" />
              </div>
              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Mother's Job</label>
                <input type="text" name="mothersJob" value={profileData.mothersJob} onChange={handleChange} disabled={!isEditing} className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon" />
              </div>
              <div className="col-span-2">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Sibling Details</label>
                <textarea name="siblingDetails" value={profileData.siblingDetails} onChange={handleChange} disabled={!isEditing} rows={2} className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon" />
              </div>
            </div>
          </div>
           {/* Section: Horoscope Details */}
          <div className="space-y-3">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-deep-maroon">Horoscope Details</h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Birth Time</label>
                <input type="text" name="birthTime" value={profileData.birthTime} onChange={handleChange} disabled={!isEditing} className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon" />
              </div>
              {/* <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Janma Sista Dasa</label>
                <input type="text" name="janmaSistaDasa" value={profileData.janmaSistaDasa} onChange={handleChange} disabled={!isEditing} className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon" />
              </div> */}
              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">End Dasa</label>
                <input type="text" name="endDasa" value={profileData.endDasa} onChange={handleChange} disabled={!isEditing} className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon" />
              </div>
              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Dob (Malayalam)</label>
                <input type="text" name="dobMalayalam" value={profileData.dobMalayalam} onChange={handleChange} disabled={!isEditing} className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon" />
              </div>
              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Dob (English)</label>
                <input type="text" name="dobEnglish" value={profileData.dobEnglish} onChange={handleChange} disabled={!isEditing} className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text disabled:opacity-60 disabled:bg-slate-100/50 disabled:cursor-not-allowed disabled:border-slate-100 focus:outline-none focus:ring-1 focus:ring-deep-maroon" />
              </div>
              <div className="col-span-1">
                <label className="block text-[9px] md:text-[10px] text-slate-400 font-semibold mb-0.5">Star / Rasi</label>
                <input type="text" name="starRasi" value={profileData.starRasi} onChange={handleChange} className="w-full border border-slate-200 rounded-lg py-1.5 px-2.5 text-[11px] md:text-xs bg-slate-50/50 text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon" />
              </div>
            </div>
            <HoroscopeChartsProfile editMode={isEditing} />
          </div>

          <hr className="border-slate-100" />

          {isEditing && (
            <div className="pt-2 md:pt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-white border border-slate-200 hover:bg-slate-50 text-charcoal-text font-semibold py-2 px-4 md:py-2.5 md:px-6 rounded-lg shadow-sm transition-all cursor-pointer text-[10px] md:text-xs uppercase tracking-wider"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-deep-maroon hover:bg-primary text-white font-semibold py-2 px-4 md:py-2.5 md:px-6 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer text-[10px] md:text-xs uppercase tracking-wider"
              >
                Save Profile Changes
              </button>
            </div>
          )}
        </form>
      </section>
    </div>
  );
}
