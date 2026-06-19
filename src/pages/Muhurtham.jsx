import React, { useState } from 'react';

const nakshatrams = [
  "അശ്വതി", "ഭരണി", "കാർത്തിക", "രോഹിണി", "മകയിരം", "തിരുവാതിര",
  "പുണർതം", "പൂയം", "ആയില്യം", "മകം", "പൂരം", "ഉത്രം",
  "അത്തം", "ചിത്തിര", "ചോതി", "വിശാഖം", "അനിഴം", "തൃക്കേട്ട",
  "മൂലം", "പൂരാടം", "ഉത്രാടം", "തിരുവോണം", "അവിട്ടം", "ചതയം",
  "പൂരുരുട്ടാതി", "ഉത്രട്ടാതി", "രേവതി",
];

const rasis = [
  "മേടം", "ഇടവം", "മിഥുനം", "കർക്കടകം", "ചിങ്ങം", "കന്നി",
  "തുലാം", "വൃശ്ചികം", "ധനു", "മകരം", "കുംഭം", "മീനം",
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const years = ["2026", "2027", "2028"];

const muhurthamRows = [
  { date: "2026-08-12", day: "Wednesday", nakshatram: "ഉത്രാടം", thithi: "ദ്വാദശി", time: "06:42 AM – 08:10 AM", quality: "Excellent" },
  { date: "2026-08-19", day: "Wednesday", nakshatram: "രേവതി", thithi: "തൃതീയ", time: "07:05 AM – 09:30 AM", quality: "Excellent" },
  { date: "2026-09-03", day: "Thursday", nakshatram: "രോഹിണി", thithi: "പഞ്ചമി", time: "06:55 AM – 08:45 AM", quality: "Good" },
  { date: "2026-09-17", day: "Thursday", nakshatram: "മകയിരം", thithi: "ഏകാദശി", time: "07:15 AM – 09:00 AM", quality: "Good" },
  { date: "2026-10-08", day: "Thursday", nakshatram: "ഉത്രം", thithi: "സപ്തമി", time: "06:30 AM – 08:20 AM", quality: "Excellent" },
];

const qualityStyles = {
  Excellent: "bg-emerald-50 text-emerald-700",
  Good: "bg-amber-50 text-amber-700",
};

const SelectField = ({ label, value, onChange, options, placeholder }) => (
  <div>
    <label className="block text-[9px] md:text-[11px] text-charcoal-text/70 font-semibold mb-1 uppercase tracking-wide">
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-slate-200 rounded-md md:rounded-lg py-1.5 md:py-2 px-2 md:px-3 text-[11px] md:text-xs text-charcoal-text bg-white focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon cursor-pointer"
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const TextField = ({ label, value, onChange }) => (
  <div>
    <label className="block text-[9px] md:text-[11px] text-charcoal-text/70 font-semibold mb-1 uppercase tracking-wide">
      {label}
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-slate-200 rounded-md md:rounded-lg py-1.5 md:py-2 px-2 md:px-3 text-[11px] md:text-xs text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon"
    />
  </div>
);

export default function Muhurtham() {
  const [form, setForm] = useState({
    brideName: '',
    brideStar: '',
    brideRasi: '',
    groomName: '',
    groomStar: '',
    groomRasi: '',
    preferredMonth: '',
    preferredYear: '',
  });
  const [showResults, setShowResults] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const isFormValid = Object.values(form).every((v) => v !== '');

  return (
    <div className="min-h-screen bg-slate-50 pt-20 md:pt-24 pb-16 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <p className="text-[9px] md:text-[11px] font-label-caps font-semibold text-deep-maroon tracking-[0.18em] uppercase mb-1.5 md:mb-2">
            Auspicious Dates
          </p>
          <h1 className="font-display-lg text-lg md:text-2xl text-charcoal-text leading-tight">
            Muhurtham Calendar
          </h1>
          <p className="text-soft-gray text-[11px] md:text-sm mt-2 max-w-sm mx-auto leading-relaxed">
            Enter birth star and rasi details to find auspicious wedding Muhurtham dates.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSearch}
          className="bg-white rounded-xl md:rounded-2xl border border-slate-100 shadow-sm p-4 md:p-8"
        >
          <div className="grid grid-cols-2 gap-3.5 md:gap-10">
            {/* Bride Details */}
            <div>
              <h2 className="font-display-lg text-[12px] md:text-base text-deep-maroon mb-2.5 md:mb-4 truncate">
                Bride Details
              </h2>
              <div className="space-y-2.5 md:space-y-3.5">
                <TextField
                  label="Bride Name"
                  value={form.brideName}
                  onChange={(v) => handleChange('brideName', v)}
                />
                <SelectField
                  label="Bride Star"
                  value={form.brideStar}
                  onChange={(v) => handleChange('brideStar', v)}
                  options={nakshatrams}
                  placeholder="Select star"
                />
                <SelectField
                  label="Bride Rasi"
                  value={form.brideRasi}
                  onChange={(v) => handleChange('brideRasi', v)}
                  options={rasis}
                  placeholder="Select rasi"
                />
              </div>
            </div>

            {/* Groom Details */}
            <div>
              <h2 className="font-display-lg text-[12px] md:text-base text-deep-maroon mb-2.5 md:mb-4 truncate">
                Groom Details
              </h2>
              <div className="space-y-2.5 md:space-y-3.5">
                <TextField
                  label="Groom Name"
                  value={form.groomName}
                  onChange={(v) => handleChange('groomName', v)}
                />
                <SelectField
                  label="Groom Star"
                  value={form.groomStar}
                  onChange={(v) => handleChange('groomStar', v)}
                  options={nakshatrams}
                  placeholder="Select star"
                />
                <SelectField
                  label="Groom Rasi"
                  value={form.groomRasi}
                  onChange={(v) => handleChange('groomRasi', v)}
                  options={rasis}
                  placeholder="Select rasi"
                />
              </div>
            </div>
          </div>

          {/* Preferred Month / Year */}
          <div className="grid grid-cols-2 gap-3.5 md:gap-6 mt-5 md:mt-7 pt-5 md:pt-7 border-t border-slate-100">
            <SelectField
              label="Preferred Month"
              value={form.preferredMonth}
              onChange={(v) => handleChange('preferredMonth', v)}
              options={months}
              placeholder="Select month"
            />
            <SelectField
              label="Preferred Year"
              value={form.preferredYear}
              onChange={(v) => handleChange('preferredYear', v)}
              options={years}
              placeholder="Select year"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center mt-5 md:mt-8">
            <button
              type="submit"
              disabled={!isFormValid}
              className="bg-deep-maroon hover:bg-primary disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold text-[11px] md:text-sm py-2 md:py-2.5 px-6 md:px-8 rounded-lg shadow transition-all active:scale-95 cursor-pointer"
            >
              Find Muhurtham Dates
            </button>
          </div>
        </form>

        {/* Results */}
        {showResults && (
          <div className="bg-white rounded-xl md:rounded-2xl border border-slate-100 shadow-sm p-4 md:p-8 mt-5 fade-in">
            <h3 className="font-display-lg text-base md:text-xl text-heritage-gold text-center mb-1.5">
              Auspicious Muhurtham Dates
            </h3>
            <p className="text-soft-gray text-[10px] md:text-xs text-center mb-4 md:mb-6">
              {form.groomName} ({form.groomStar}) &amp; {form.brideName} ({form.brideStar}) · {form.preferredMonth} {form.preferredYear}
            </p>

            <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
              <table className="w-full min-w-[620px] md:min-w-0 border-collapse text-left">
                <thead>
                  <tr className="bg-[#1c1c22]">
                    <th className="text-white text-[10px] md:text-xs font-semibold py-2.5 md:py-3 px-3 md:px-4 rounded-tl-lg">
                      Date
                    </th>
                    <th className="text-white text-[10px] md:text-xs font-semibold py-2.5 md:py-3 px-3 md:px-4">
                      Day
                    </th>
                    <th className="text-white text-[10px] md:text-xs font-semibold py-2.5 md:py-3 px-3 md:px-4">
                      Nakshatram
                    </th>
                    <th className="text-white text-[10px] md:text-xs font-semibold py-2.5 md:py-3 px-3 md:px-4">
                      Thithi
                    </th>
                    <th className="text-white text-[10px] md:text-xs font-semibold py-2.5 md:py-3 px-3 md:px-4">
                      Auspicious Time
                    </th>
                    <th className="text-white text-[10px] md:text-xs font-semibold py-2.5 md:py-3 px-3 md:px-4 rounded-tr-lg">
                      Rating
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {muhurthamRows.map((row, i) => (
                    <tr
                      key={row.date}
                      className={i !== muhurthamRows.length - 1 ? "border-b border-slate-100" : ""}
                    >
                      <td className="text-charcoal-text text-[11px] md:text-sm py-2.5 md:py-3 px-3 md:px-4 whitespace-nowrap font-medium">
                        {row.date}
                      </td>
                      <td className="text-charcoal-text text-[11px] md:text-sm py-2.5 md:py-3 px-3 md:px-4 whitespace-nowrap">
                        {row.day}
                      </td>
                      <td className="text-charcoal-text text-[11px] md:text-sm py-2.5 md:py-3 px-3 md:px-4 whitespace-nowrap">
                        {row.nakshatram}
                      </td>
                      <td className="text-charcoal-text text-[11px] md:text-sm py-2.5 md:py-3 px-3 md:px-4 whitespace-nowrap">
                        {row.thithi}
                      </td>
                      <td className="text-charcoal-text text-[11px] md:text-sm py-2.5 md:py-3 px-3 md:px-4 whitespace-nowrap">
                        {row.time}
                      </td>
                      <td className="py-2.5 md:py-3 px-3 md:px-4 whitespace-nowrap">
                        <span className={`text-[10px] md:text-[11px] font-semibold py-0.5 px-2 rounded-full ${qualityStyles[row.quality]}`}>
                          {row.quality}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-soft-gray text-[10px] md:text-[11px] text-center mt-4 md:mt-5 leading-relaxed">
              Timings shown are based on traditional Panchang calculations. Please consult your family priest for final confirmation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}