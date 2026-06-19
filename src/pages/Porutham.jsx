import React, { useState } from 'react';

const porutamRows = [
  { name: "ദിനം", match: false },
  { name: "ഗണം", match: true },
  { name: "രാശി", match: true },
  { name: "രാജ്ജു", match: true },
  { name: "നാടി", match: true },
  { name: "വശ്യ", match: true },
  { name: "യോണി", match: false },
  { name: "മഹേന്ദ്ര", match: true },
  { name: "സ്ത്രീദീർഘ", match: true },
  { name: "വിശ്യ", match: true },
];

function RasiChart({ title, cells, rasiName, dob }) {
  const Cell = ({ num, children, col, row, className = "" }) => (
    <div
      className={`relative border border-slate-200 flex items-center justify-center min-h-[56px] md:min-h-[72px] ${className}`}
      style={{ gridColumn: col, gridRow: row }}
    >
      {num && (
        <span className="absolute top-0.5 right-1 text-[8px] md:text-[9px] text-orange-500/80 font-medium">
          {num}
        </span>
      )}
      <span className="text-[11px] md:text-sm text-charcoal-text">{children}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 grid-rows-4 w-full max-w-[260px] aspect-square">
        <Cell num={1} col="1" row="1">{cells[1]}</Cell>
        <Cell num={2} col="2" row="1">{cells[2]}</Cell>
        <Cell num={3} col="3" row="1">{cells[3]}</Cell>
        <Cell num={4} col="4" row="1">{cells[4]}</Cell>

        <Cell num={5} col="1" row="2">{cells[5]}</Cell>
        <div
          className="border border-slate-200 bg-slate-50 flex flex-col items-center justify-center text-center px-1"
          style={{ gridColumn: "2 / 4", gridRow: "2 / 4" }}
        >
          <span className="text-[11px] md:text-sm font-semibold text-charcoal-text leading-tight">
            {rasiName}
          </span>
          <span className="text-[9px] md:text-[11px] text-soft-gray mt-1 leading-tight">
            {dob}
          </span>
        </div>
        <Cell num={8} col="4" row="2">{cells[8]}</Cell>

        <Cell num={9} col="1" row="3">{cells[9]}</Cell>
        <Cell num={12} col="4" row="3">{cells[12]}</Cell>

        <Cell col="1" row="4" />
        <Cell col="2" row="4" />
        <Cell col="3" row="4" />
        <Cell col="4" row="4" />
      </div>
      <p className="text-[11px] md:text-sm font-semibold text-deep-maroon mt-3">{title}</p>
    </div>
  );
}

export default function Porutham() {
  const [groom, setGroom] = useState({ name: '', city: '', dob: '' });
  const [bride, setBride] = useState({ name: '', city: '', dob: '' });
  const [result, setResult] = useState(null);

  const handleChange = (person, field, value) => {
    const setter = person === 'groom' ? setGroom : setBride;
    setter((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheck = (e) => {
    e.preventDefault();
    // Static placeholder data until horoscope matching logic is wired up
    setResult([
      {
        person: `${groom.name || "Groom"} (Groom)`,
        city: groom.city || "—",
        dob: groom.dob ? groom.dob.replace("T", " ") : "—",
        nakshatram: "പൂയം",
        rasi: "മിഥുനം",
      },
      {
        person: `${bride.name || "Bride"} (Bride)`,
        city: bride.city || "—",
        dob: bride.dob ? bride.dob.replace("T", " ") : "—",
        nakshatram: "തിരുവാതിര",
        rasi: "ഇടവം",
      },
    ]);
  };

  const isFormValid =
    groom.name && groom.city && groom.dob && bride.name && bride.city && bride.dob;

  return (
    <div className="min-h-screen bg-slate-50 pt-20 md:pt-24 pb-16 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <p className="text-[9px] md:text-[11px] font-label-caps font-semibold text-deep-maroon tracking-[0.18em] uppercase mb-1.5 md:mb-2">
            Horoscope Matching
          </p>
          <h1 className="font-display-lg text-lg md:text-2xl text-charcoal-text leading-tight">
            Porutham Compatibility Check
          </h1>
          <p className="text-soft-gray text-[11px] md:text-sm mt-2 max-w-sm mx-auto leading-relaxed">
            Enter birth details for both partners to check Vedic star compatibility.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleCheck}
          className="bg-white rounded-xl md:rounded-2xl border border-slate-100 shadow-sm p-4 md:p-8"
        >
          <div className="grid grid-cols-2 gap-3.5 md:gap-10">
            {/* Groom Details */}
            <div>
              <h2 className="font-display-lg text-[12px] md:text-base text-deep-maroon mb-2.5 md:mb-4 truncate">
                Groom Details
              </h2>

              <div className="space-y-2.5 md:space-y-3.5">
                <div>
                  <label className="block text-[9px] md:text-[11px] text-charcoal-text/70 font-semibold mb-1 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    value={groom.name}
                    onChange={(e) => handleChange('groom', 'name', e.target.value)}
                    className="w-full border border-slate-200 rounded-md md:rounded-lg py-1.5 md:py-2 px-2 md:px-3 text-[11px] md:text-xs text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon"
                  />
                </div>

                <div>
                  <label className="block text-[9px] md:text-[11px] text-charcoal-text/70 font-semibold mb-1 uppercase tracking-wide">
                    City
                  </label>
                  <input
                    type="text"
                    value={groom.city}
                    onChange={(e) => handleChange('groom', 'city', e.target.value)}
                    className="w-full border border-slate-200 rounded-md md:rounded-lg py-1.5 md:py-2 px-2 md:px-3 text-[11px] md:text-xs text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon"
                  />
                </div>

                <div>
                  <label className="block text-[9px] md:text-[11px] text-charcoal-text/70 font-semibold mb-1 uppercase tracking-wide">
                    Date of Birth
                  </label>
                  <input
                    type="datetime-local"
                    value={groom.dob}
                    onChange={(e) => handleChange('groom', 'dob', e.target.value)}
                    className="w-full border border-slate-200 rounded-md md:rounded-lg py-1.5 md:py-2 px-2 md:px-3 text-[10px] md:text-xs text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon"
                  />
                </div>
              </div>
            </div>

            {/* Bride Details */}
            <div>
              <h2 className="font-display-lg text-[12px] md:text-base text-deep-maroon mb-2.5 md:mb-4 truncate">
                Bride Details
              </h2>

              <div className="space-y-2.5 md:space-y-3.5">
                <div>
                  <label className="block text-[9px] md:text-[11px] text-charcoal-text/70 font-semibold mb-1 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    value={bride.name}
                    onChange={(e) => handleChange('bride', 'name', e.target.value)}
                    className="w-full border border-slate-200 rounded-md md:rounded-lg py-1.5 md:py-2 px-2 md:px-3 text-[11px] md:text-xs text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon"
                  />
                </div>

                <div>
                  <label className="block text-[9px] md:text-[11px] text-charcoal-text/70 font-semibold mb-1 uppercase tracking-wide">
                    City
                  </label>
                  <input
                    type="text"
                    value={bride.city}
                    onChange={(e) => handleChange('bride', 'city', e.target.value)}
                    className="w-full border border-slate-200 rounded-md md:rounded-lg py-1.5 md:py-2 px-2 md:px-3 text-[11px] md:text-xs text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon"
                  />
                </div>

                <div>
                  <label className="block text-[9px] md:text-[11px] text-charcoal-text/70 font-semibold mb-1 uppercase tracking-wide">
                    Date of Birth
                  </label>
                  <input
                    type="datetime-local"
                    value={bride.dob}
                    onChange={(e) => handleChange('bride', 'dob', e.target.value)}
                    className="w-full border border-slate-200 rounded-md md:rounded-lg py-1.5 md:py-2 px-2 md:px-3 text-[10px] md:text-xs text-charcoal-text focus:outline-none focus:ring-1 focus:ring-deep-maroon focus:border-deep-maroon"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center mt-5 md:mt-8">
            <button
              type="submit"
              disabled={!isFormValid}
              className="bg-deep-maroon hover:bg-primary disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold text-[11px] md:text-sm py-2 md:py-2.5 px-6 md:px-8 rounded-lg shadow transition-all active:scale-95 cursor-pointer"
            >
              Check Porutham
            </button>
          </div>
        </form>

        {/* Result */}
        {result && (
          <>
            <div className="bg-white rounded-xl md:rounded-2xl border border-slate-100 shadow-sm p-4 md:p-8 mt-5 fade-in">
              <h3 className="font-display-lg text-base md:text-xl text-heritage-gold text-center mb-4 md:mb-6">
                Entered Details
              </h3>

              <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
                <table className="w-full min-w-[560px] md:min-w-0 border-collapse text-left">
                  <thead>
                    <tr className="bg-[#1c1c22]">
                      <th className="text-white text-[10px] md:text-xs font-semibold py-2.5 md:py-3 px-3 md:px-4 rounded-tl-lg">
                        Person
                      </th>
                      <th className="text-white text-[10px] md:text-xs font-semibold py-2.5 md:py-3 px-3 md:px-4">
                        City
                      </th>
                      <th className="text-white text-[10px] md:text-xs font-semibold py-2.5 md:py-3 px-3 md:px-4">
                        Date of Birth
                      </th>
                      <th className="text-white text-[10px] md:text-xs font-semibold py-2.5 md:py-3 px-3 md:px-4">
                        Nakshatram
                      </th>
                      <th className="text-white text-[10px] md:text-xs font-semibold py-2.5 md:py-3 px-3 md:px-4 rounded-tr-lg">
                        Rasi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.map((row, i) => (
                      <tr
                        key={row.person}
                        className={i !== result.length - 1 ? "border-b border-slate-100" : ""}
                      >
                        <td className="text-charcoal-text text-[11px] md:text-sm py-2.5 md:py-3 px-3 md:px-4 whitespace-nowrap">
                          {row.person}
                        </td>
                        <td className="text-charcoal-text text-[11px] md:text-sm py-2.5 md:py-3 px-3 md:px-4 whitespace-nowrap">
                          {row.city}
                        </td>
                        <td className="text-charcoal-text text-[11px] md:text-sm py-2.5 md:py-3 px-3 md:px-4 whitespace-nowrap">
                          {row.dob}
                        </td>
                        <td className="text-charcoal-text text-[11px] md:text-sm py-2.5 md:py-3 px-3 md:px-4 whitespace-nowrap">
                          {row.nakshatram}
                        </td>
                        <td className="text-charcoal-text text-[11px] md:text-sm py-2.5 md:py-3 px-3 md:px-4 whitespace-nowrap">
                          {row.rasi}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Rasi Charts */}
            <div className="bg-white rounded-xl md:rounded-2xl border border-slate-100 shadow-sm p-4 md:p-8 mt-5 fade-in">
              <h3 className="font-display-lg text-base md:text-xl text-heritage-gold text-center mb-5 md:mb-7">
                Birth Chart
              </h3>

              <div className="grid sm:grid-cols-2 gap-8 sm:gap-6 max-w-2xl mx-auto">
                <RasiChart
                  title={`${groom.name || "Groom"} - Groom`}
                  cells={{
                    1: "ര", 2: "മ", 3: "ഗു", 4: "മ",
                    5: "ര", 8: "ബു",
                    9: "മ", 12: "കുശ്രി",
                  }}
                  rasiName="മിഥുനം"
                  dob={groom.dob ? groom.dob.replace("T", " ") : "2000-08-30 12:00"}
                />
                <RasiChart
                  title={`${bride.name || "Bride"} - Bride`}
                  cells={{
                    1: "ര", 2: "ലി", 3: "ലി", 4: "ച",
                    5: "ലി", 8: "മ",
                    9: "മ", 12: "മ",
                  }}
                  rasiName="ഇടവം"
                  dob={bride.dob ? bride.dob.replace("T", " ") : "2026-07-02 12:00"}
                />
              </div>
            </div>

            {/* Porutham Compatibility */}
            <div className="bg-white rounded-xl md:rounded-2xl border border-slate-100 shadow-sm p-4 md:p-8 mt-5 fade-in">
              <h3 className="font-display-lg text-base md:text-xl text-heritage-gold text-center mb-4 md:mb-6">
                Porutham Compatibility
              </h3>

              <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
                <table className="w-full min-w-[420px] md:min-w-0 border-collapse text-left">
                  <thead>
                    <tr className="bg-[#1c1c22]">
                      <th className="text-white text-[10px] md:text-xs font-semibold py-2.5 md:py-3 px-3 md:px-4 rounded-tl-lg w-[70px] md:w-[100px]">
                        Sl No.
                      </th>
                      <th className="text-white text-[10px] md:text-xs font-semibold py-2.5 md:py-3 px-3 md:px-4">
                        Porutham
                      </th>
                      <th className="text-white text-[10px] md:text-xs font-semibold py-2.5 md:py-3 px-3 md:px-4 rounded-tr-lg w-[80px] md:w-[120px]">
                        Match
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {porutamRows.map((row, i) => (
                      <tr
                        key={row.name}
                        className={i !== porutamRows.length - 1 ? "border-b border-slate-100" : ""}
                      >
                        <td className="text-charcoal-text text-[11px] md:text-sm py-2.5 md:py-3 px-3 md:px-4">
                          {i + 1}
                        </td>
                        <td className="text-charcoal-text text-[11px] md:text-sm py-2.5 md:py-3 px-3 md:px-4">
                          {row.name}
                        </td>
                        <td className="py-2.5 md:py-3 px-3 md:px-4">
                          <span
                            className="material-symbols-outlined text-[16px] md:text-[18px]"
                            style={{ color: row.match ? "#7c6cd6" : "#7c6cd6" }}
                          >
                            {row.match ? "check" : "close"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-100 rounded-lg mt-4 md:mt-6 py-3 md:py-4 text-center">
                <span className="text-charcoal-text font-bold text-xs md:text-sm">
                  Compatibility Score: {porutamRows.filter((r) => r.match).length}/{porutamRows.length} (
                  {Math.round((porutamRows.filter((r) => r.match).length / porutamRows.length) * 100)}%)
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}