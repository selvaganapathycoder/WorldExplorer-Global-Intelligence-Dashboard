import React from "react";

const BorderCountries = ({ borders, countryMap, onBorderClick }) => {
  if (!borders || borders.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="text-slate-400 text-sm font-medium mb-4 uppercase tracking-wider">
        Border Countries
      </h3>
      <div className="flex flex-wrap gap-2">
        {borders.map((code) => {
          const name = countryMap[code] || code;
          return (
            <button
              key={code}
              onClick={() => onBorderClick(code)}
              className="px-4 py-2 bg-slate-900/50 border border-white/10 rounded-xl text-sm font-medium hover:bg-blue-600/20 hover:border-blue-500/50 transition-all text-slate-300 hover:text-white"
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BorderCountries;
